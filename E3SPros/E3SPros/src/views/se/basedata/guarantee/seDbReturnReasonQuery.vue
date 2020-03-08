<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="findALL()">查询</el-button>
      <el-button size="small" @click="newIncrease('modifys')">新增</el-button>
      <el-button size="small" @click="modifyDate('modifys')">编辑</el-button>
      <el-button size="small" @click="deleteDate()">删除</el-button>
      <template>
        <el-button size="small" @click="reset()">重置</el-button>
      </template>
    </div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="6">
          <lableName curLabelName="回复原因码"></lableName>
          <el-input v-model="queryParams.dataInfo.replyReasonCode"></el-input>
        </el-col>
        <el-col :span="6">
          <lableName curLabelName="回复原因说明"></lableName>
          <el-input v-model="queryParams.dataInfo.replyReasonContent"></el-input>
        </el-col>
        <el-col :span="6">
          <label>回复原因类别</label>
          <el-select
            v-model="queryParams.dataInfo.replyReasonType"
            placeholder="请选择"
            @change="getReplyReasonType"
            clearable
          >
            <el-option label="全部" value></el-option>
            <el-option label="退回" value="0"></el-option>
            <el-option label="拒绝" value="1"></el-option>
            <el-option label="调整通过" value="2"></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <label>适应对象</label>
          <el-select
            v-model="queryParams.dataInfo.adaptType"
            placeholder="请选择"
            @change="getAdaptType"
            clearable
          >
            <el-option label="全部" value></el-option>
            <el-option label="公共" value="0"></el-option>
            <el-option label="新车准备" value="1"></el-option>
            <el-option label="免费保养" value="2"></el-option>
            <el-option label="保修鉴定" value="2"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="26">
        <carBrand :span="6" :code="queryParams.dataInfo.carBrandCode" @changeCode="getBrandCode" />
        <el-col :span="6">
          <lableName curLabelName="备注"></lableName>
          <el-input v-model="queryParams.dataInfo.remark"></el-input>
        </el-col>
      </el-row>
    </div>
    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <mix-table
      ref="tableList"
      :multipleSelect="selection"
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
            <el-col>
              <el-form-item prop="replyReasonCode">
                <lableName curLabelName="回复原因码" :isShowLabel="true" :isRequire="true"></lableName>
                <el-input v-model="modify.replyReasonCode" :disabled="replyReasonCodeShow"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item prop="replyReasonContent">
                <lableName curLabelName="回复原因说明" :isShowLabel="true" :isRequire="true"></lableName>
                <el-input v-model="modify.replyReasonContent"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <label>回复原因类别</label>
              <el-select
                v-model="modify.replyReasonType"
                placeholder="请选择"
                @change="getReplyReasonType1"
                clearable
              >
                <el-option label="全部" value></el-option>
                <el-option label="退回" value="0"></el-option>
                <el-option label="拒绝" value="1"></el-option>
                <el-option label="调整通过" value="2"></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <label>适应对象</label>
              <el-select
                v-model="modify.adaptType"
                placeholder="请选择"
                @change="getAdaptType1"
                clearable
              >
                <el-option label="全部" value></el-option>
                <el-option label="公共" value="0"></el-option>
                <el-option label="新车准备" value="1"></el-option>
                <el-option label="免费保养" value="2"></el-option>
                <el-option label="保修鉴定" value="2"></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <carBrand
              :span="24"
              :isShowLabel="true"
              :isRequire="true"
              :code="modify.carBrandCode"
              @changeCode="getBrandCode1"
              :disabled="carbrandshow"
            />
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
import { seDbReturnReasonMutationSave,seDbReturnReasonDelete} from "@/api/se/guarantee/seDbReturnReasonQuery";

export default {
  components: {
    mixTable,
    lableName,
    carBrand
  },

  data() {
    return {
      deleteInfo: [],
      replyReasonCodeShow: false,
      carbrandshow: false,
      selection: "selection",
      //表单校验
      rules: {
        replyReasonCode: [
          { required: true, message: "请填写回复原因码", trigger: "change" }
        ],
        replyReasonContent: [
          {
            required: true,
            message: "请填写回复原因说明",
            trigger: "change"
          }
        ]
      },
      dialogParamVisible: false,
      showTitle: "新增故障现象原因码",
      modify: {
        returnReasonCodeId: "",
        updateControlId: "",
        replyReasonCode: "",
        replyReasonContent: "",
        replyReasonType: "",
        adaptType: "",
        carBrandCode: "",
        remark: ""
      },
      queryParams: {
        APIUrl: seApis.seDbReturnReasonQueryFindAll.APIUrl,
        InputType: seApis.seDbReturnReasonQueryFindAll.InputType,
        ServiceCode: seApis.seDbReturnReasonQueryFindAll.ServiceCode,
        dataInfo: {
          replyReasonCode: "",
          replyReasonContent: "",
          replyReasonType: "",
          adaptType: "",
          carBrandCode: "",
          remark: ""
        },
        apiQueryRow: [
          "returnReasonCodeId",
          "replyReasonCode",
          "replyReasonContent",
          "remark",
          "adaptType",
          "replyReasonType",
          "adaptTypeDesc",
          "replyReasonTypeDesc",
          "carBrandCode",
          "isEnable",
          "isEnableName",
          "updateControlId"
        ]
      },
      cols: [
        { label: "回复原因", codeField: "replyReasonCode" },
        { label: "回复原因类别", codeField: "replyReasonTypeDesc" },
        { label: "回复原因说明", codeField: "replyReasonContent" },
        { label: "适用对象", codeField: "adaptTypeDesc" },
        { label: "备注", codeField: "remark" }
      ]
    };
  },

  methods: {
    //删除数据
    deleteDate() {
      if(this.$refs.tableList.currentRow.length >=1&&this.$refs.tableList.currentRow[0] != undefined)
      {for (var i = 0; i < this.$refs.tableList.currentRow.length; i++) {
        this.deleteInfo.push({ returnReasonCodeId: "", updateControlId: "" });
        this.deleteInfo[i].returnReasonCodeId = this.$refs.tableList.currentRow[
          i
        ].returnReasonCodeId;
        this.deleteInfo[i].updateControlId = this.$refs.tableList.currentRow[
          i
        ].updateControlId;
      }
seDbReturnReasonDelete(this.deleteInfo).then(response => {
            if (
              response.data[seApis.seDbReturnReasonDelete.ServiceCode]
                .result === "1"
            ) {
              this.$message({
                message: "删除成功",
                type: "success"
              });
              this.dialogParamVisible = false;
              this.findALL();
            this.$refs.tableList.currentRow = '';
            } else {
              this.$message({
                message:
                  "删除失败：" +
                  response.data[seApis.seDbReturnReasonDelete.ServiceCode]
                    .msg,
                type: "warn",
                uration: 2000
              });
            }
          });}else{
             this.$message({
          message: "请选择删除数据！",
          type: "warn"
        });
          }
    },
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
          this.modify.replyReasonCode != "" &&
          this.modify.replyReasonContent != ""
        ) {
          seDbReturnReasonMutationSave(this.modify).then(response => {
            if (
              response.data[seApis.seDbReturnReasonMutationSave.ServiceCode]
                .result === "1"
            ) {
              this.$message({
                message: "保存成功",
                type: "success"
              });
              this.dialogParamVisible = false;
              this.findALL();
              this.$refs.tableList.currentRow = '';
              
            } else {
              this.$message({
                message:
                  "保存失败：" +
                  response.data[seApis.seDbReturnReasonMutationSave.ServiceCode]
                    .msg,
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
      this.showTitle = "新增回复原因";
      this.carbrandshow = false;
      this.replyReasonCodeShow = false;
      if (this.dialogParamVisible) {
        this.modify.carBrandCode = "1";
        this.modify.returnReasonCodeId = "";
        this.modify.updateControlId = "";
        this.modify.replyReasonCode = "";
        this.modify.replyReasonContent = "";
        this.modify.replyReasonType = "";
        this.modify.adaptType = "";
        this.modify.remark = "";
        this.$nextTick(() => {
          this.$refs[formName].clearValidate(); //等弹窗里的form表单的dom渲染完在执行this.$refs.staffForm.resetFields()，去除验证
        });
      }
    },
    //修该数据
    modifyDate() {
      if (
        this.$refs.tableList.currentRow[0] != undefined &&
        this.$refs.tableList.currentRow.length == 1
      ) {
        this.carbrandshow = true;
        this.replyReasonCodeShow = true;
        this.dialogParamVisible = true;
        this.showTitle = "编辑回复原因";

        this.modify.carBrandCode = this.$refs.tableList.tableData[0].carBrandCode;
        this.modify.returnReasonCodeId = this.$refs.tableList.tableData[0].returnReasonCodeId;
        this.modify.updateControlId = this.$refs.tableList.tableData[0].updateControlId;
        this.modify.replyReasonCode = this.$refs.tableList.tableData[0].replyReasonCode;
        this.modify.replyReasonContent = this.$refs.tableList.tableData[0].replyReasonContent;
        this.modify.replyReasonType = this.$refs.tableList.tableData[0].replyReasonType;
        this.modify.adaptType = this.$refs.tableList.tableData[0].adaptType;
        this.modify.remark = this.$refs.tableList.tableData[0].remark;
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
      this.queryParams.dataInfo.replyReasonCode = "";
      this.queryParams.dataInfo.replyReasonContent = "";
      this.queryParams.dataInfo.replyReasonType = "";
      this.queryParams.dataInfo.adaptType = "";
      this.queryParams.dataInfo.remark = "";
    },
    //查询故障原因码
    findALL() {
      this.$refs.tableList.queryList();
    },
    getBrandCode(val) {
      this.queryParams.dataInfo.carBrandCode = val;
    },
    getBrandCode1(val) {
      this.modify.carBrandCode = val;
    },
    getBrandCode1(val, text) {
      this.modify.carBrandCode = val;
    },
    getAdaptType(val) {
      this.queryParams.dataInfo.adaptType = val;
    },
    getAdaptType1(val) {
      this.modify.adaptType = val;
    },
    getReplyReasonType(val) {
      this.queryParams.dataInfo.replyReasonType = val;
    },
    getReplyReasonType1(val) {
      this.modify.replyReasonType = val;
    }
  }
};
</script>

