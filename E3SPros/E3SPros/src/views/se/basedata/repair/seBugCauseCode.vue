<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="findALL()">查询</el-button>
      <el-button size="small" @click="newIncrease('modifys')">新增</el-button>
      <el-button size="small" @click="modifyDate('modifys')">修该</el-button>
      <template>
        <el-button size="small" @click="reset()">重置</el-button>
      </template>
    </div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <carBrand :span="6" :code="queryParams.dataInfo.carBrandCode" @changeCode="getBrandCode" />
        <el-col :span="6">
          <label>故障类型</label>
          <el-select
            v-model="queryParams.dataInfo.csCtType"
            placeholder="请选择"
            @change="getRecallStatus"
            clearable
          >
            <el-option label="全部" value=''></el-option>
            <el-option label="CS" value="0"></el-option>
            <el-option label="CT" value="1"></el-option>
          </el-select>
        </el-col>

        <el-col :span="6">
          <lableName curLabelName="故障现象原因码"></lableName>
          <el-input v-model="queryParams.dataInfo.csCtCode"></el-input>
        </el-col>
        <el-col :span="6">
          <lableName curLabelName="故障现象原因名称"></lableName>
          <el-input v-model="queryParams.dataInfo.csCtMark"></el-input>
        </el-col>
      </el-row>
    </div>
   <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <mix-table
      ref="tableList"
      :queryParams="queryParams"
      :dynamicTableCols="cols"
      :isShowSelect="true"
      :isPaging="true"
      :isDialog="true"
    />

    <el-dialog
      :visible.sync="dialogParamVisible"
      center
      width="35%"
      :append-to-body="true"
      :title="showTitle"
      :close-on-click-modal="false"
      :close="getClose('modifys')"
    >
      <div class="filter-container filter-params">
        <el-form :model="modify" :rules="rules" ref="modifys" class="demo-maintainParamChangesdata">
          <el-row>
            <carBrand
              :span="24"
              :isShowLabel="true"
              :isRequire="true"
              :code="modify.carBrandCode"
              @changeCode="getBrandCode1"
              :disabled='carbrandshow'
            />
          </el-row>
          <el-row>
            <el-col>
              <el-form-item prop="csCtType">
                <label :isShowLabel="true" :isRequire="true">故障类型</label>
                <el-select
                  v-model="modify.csCtType"
                  placeholder="请选择"
                  @change="getRecallStatus1"
                  clearable
                  :disabled='faultPartTypeshow'
                >
                  <el-option label="CS" value="0"></el-option>
                  <el-option label="CT" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item prop="csCtCode">
                <lableName curLabelName="故障现象原因码" :isShowLabel="true" :isRequire="true"></lableName>
                <el-input v-model="modify.csCtCode" :disabled="curLabelNameshow"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item prop="csCtMark">
                <lableName curLabelName="故障现象原因名称" :isShowLabel="true" :isRequire="true"></lableName>
                <el-input v-model="modify.csCtMark"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <lableName curLabelName="备注"></lableName>
              <el-input v-model="modify.remark"></el-input>
            </el-col>
          </el-row>
          <el-form-item class="dialog-footer">
            <el-button type="primary" @click="mainteSave('modifys')">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import mixTable from "@/components/basicComponent/mixTable";
import { seApis } from "@/api/graphQLApiList/se";
import { requestGraphQL } from "@/api/commonRequest";
import lableName from "@/components/lableName/index";
import carBrand from "@/components/org/carBrand/carBrand";
import { seDbCsCtMutationSave } from "@/api/se/basedata/repair/seBugCauseCodeSave";

export default {
  components: {
    mixTable,
    lableName,
    carBrand
  },

  data() {
    return {
      curLabelNameshow:false,
      faultPartTypeshow:false,
      carbrandshow:false,
      //表单校验
      rules: {
        csCtCode: [
          { required: true, message: "请填写故障现象原因码", trigger: "change" }
        ],
        csCtMark: [
          {
            required: true,
            message: "请填写故障现象原因名称",
            trigger: "change"
          }
        ]
      },
      dialogParamVisible: false,
      showTitle: "新增故障现象原因码",
      modify: {
        
        carBrandCode: "",
        csCtType: "",
        csCtCode: "",
        csCtMark: "",
        remark: "",
        csCtId: "",
        updateControlId: ""
      },
      queryParams: {
        APIUrl: seApis.seDbCsCtQueryFindAll.APIUrl,
        InputType: seApis.seDbCsCtQueryFindAll.InputType,
        ServiceCode: seApis.seDbCsCtQueryFindAll.ServiceCode,
        dataInfo: {
          carBrandCode: "",
          csCtType: "",
          csCtCode: "",
          csCtMark: ""
        },
        apiQueryRow: [
          "carBrandCn",
          "carBrandCode",
          "csCtType",
          "csCtCode",
          "csCtMark",
          "remark",
          "csCtId",
          "updateControlId"
        ]
      },
      cols: [
        { label: "车辆品牌", codeField: "carBrandCn" },
        { label: "故障类型", codeField: "csCtType" },
        { label: "故障现象原因码", codeField: "csCtCode" },
        { label: "故障现象原因名称", codeField: "csCtMark" },
        { label: "备注", codeField: "remark" }
      ]
    };
  },

  methods: {
    //弹窗关闭
    getClose(formName) {
      if (this.$refs[formName] !== undefined) {
        this.$refs[formName].clearValidate();
      }
    },
    //保存数据
    mainteSave(formName) {
      this.$refs[formName].validate(valid => {
        if (
          this.modify.csCtCode != "" &&
          this.modify.csCtMark != ""
        ) {
          if(this.modify.csCtType=='0'){
         this.modify.csCtType = 'CS';
      }
      if(this.modify.csCtType=='1'){
         this.modify.csCtType = 'CT';
      }
        
          seDbCsCtMutationSave(this.modify).then(response => {
            if (
              response.data[seApis.seDbCsCtMutationSave.ServiceCode].result ===
              "1"
            ) {
              this.$message({
                message: "保存成功",
                type: "success"
              });
              this.dialogParamVisible = false;
              this.findALL();
            } else {
              this.$message({
                message:
                  "保存失败：" +
                  response.data[seApis.seDbCsCtMutationSave.ServiceCode].msg,
                type: "warn",
                uration: 2000
              });
            }
          });
        }
      });
    },
    //新增参数
    newIncrease(formName) {
      this.dialogParamVisible = true;
      this.showTitle = "新增故障原因码";
      this.carbrandshow = false;
        this.faultPartTypeshow = false;
        this.curLabelNameshow = false;
      if (this.dialogParamVisible) {
        
        this.modify.carBrandCode = "1";
        this.modify.csCtType = "0";
        this.modify.csCtCode = "";
        this.modify.csCtMark = "";
        this.modify.remark = "";
        this.modify.csCtId = "";
        this.modify.updateControlId = "";
        
        // this.getRecallStatus1();
           this.$nextTick(()=>{
        this.$refs[formName].clearValidate();//等弹窗里的form表单的dom渲染完在执行this.$refs.staffForm.resetFields()，去除验证
      });
      }

      //   if(this.$refs[formName]!==undefined){
      //       debugger
      //         this.$refs[formName].clearValidate();
      //     }
    },
    //修该数据
    modifyDate() {
      
      if (this.$refs.tableList.currentRow[0] != undefined) {
        this.carbrandshow = true;
        this.faultPartTypeshow = true;
        this.curLabelNameshow = true;
        this.dialogParamVisible = true;
        this.showTitle = "修该故障原因码";
        
        this.modify.carBrandCode = this.$refs.tableList.currentRow[0].carBrandCode;
        this.modify.csCtType = this.$refs.tableList.currentRow[0].csCtType;
        this.modify.csCtCode = this.$refs.tableList.currentRow[0].csCtCode;
        this.modify.csCtMark = this.$refs.tableList.currentRow[0].csCtMark;
        this.modify.remark = this.$refs.tableList.currentRow[0].remark;
        this.modify.csCtId = this.$refs.tableList.currentRow[0].csCtId;
        this.modify.updateControlId = this.$refs.tableList.currentRow[0].updateControlId;
      } else {
        this.$message({
          message: "请选择一行数据！",
          type: "warn"
        });
      }
    },
    //重置页面
    reset() {
      this.queryParams.dataInfo.carBrandCode = "1";
      this.queryParams.dataInfo.csCtType = "";
      this.queryParams.dataInfo.csCtCode = "";
      this.queryParams.dataInfo.csCtMark = "";
    },
    //查询故障原因码
    findALL() {
      this.$refs.tableList.queryList();
    },
    getBrandCode(val) {
      this.queryParams.dataInfo.carBrandCode = val;
    },
    getBrandCode1(val, text) {
     
      this.modify.carBrandCode = val;
    },
    getRecallStatus(val) {
    
      if(val==''){
         this.queryParams.dataInfo.csCtType = '全部';
      }
      if(val=='0'){
         this.queryParams.dataInfo.csCtType = 'CS';
      }
      if(val=='1'){
         this.queryParams.dataInfo.csCtType = 'CT';
      }

    },
    getRecallStatus1(val) {
      if(val=='0'){
         this.modify.csCtType = 'CS';
      }
      if(val=='1'){
         this.modify.csCtType = 'CT';
      }
    }
  }
};
</script>

