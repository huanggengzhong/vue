<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="findALL()">查询</el-button>
      <el-button size="small" @click="newIncrease('modifys')">新增</el-button>
      <el-button size="small" @click="modifyDate('modifys')">编辑</el-button>
      <template>
        <el-button size="small" @click="reset()">重置</el-button>
      </template>
    </div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="6">
          <lableName curLabelName="主凶件编码"></lableName>
          <el-input v-model="queryParams.dataInfo.mainCulpritCode"></el-input>
        </el-col>
        <el-col :span="6">
          <lableName curLabelName="主凶件名称"></lableName>
          <el-input v-model="queryParams.dataInfo.mainCulpritName"></el-input>
        </el-col>
        <el-col :span="6">
          <lableName curLabelName="适用车系"></lableName>
          <el-input v-model="queryParams.dataInfo.applicableCar"></el-input>
        </el-col>
        <el-col :span="6">
          <lableName curLabelName="适用车型"></lableName>
          <el-input v-model="queryParams.dataInfo.applicableModels"></el-input>
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
            <el-col>
              <el-form-item prop="mainCulpritCode">
                <lableName curLabelName="主凶件编码" :isShowLabel="true" :isRequire="true"></lableName>
                <el-input v-model="modify.mainCulpritCode" :disabled="mainCulpritCodeShow"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item prop="mainCulpritName">
                <lableName curLabelName="主凶件名称" :isShowLabel="true" :isRequire="true"></lableName>
                <el-input v-model="modify.mainCulpritName"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
              <el-col >
             <lableName curLabelName="车型" ></lableName>
              <el-input v-model="modify.applicableModels" placeholder="请选择" size="small" @focus="opencarTypeModal1"></el-input>
              <CarTypeModal :isMul="true" ref="CarTypeModal1" @changeCode="getCarTypeModal1" />
            </el-col>
          </el-row>
          <el-row></el-row>
          <el-row>
            <el-col>
              <label>状态</label>
              <el-select v-model="modify.a2" placeholder="请选择" @change="getAdaptType1" clearable>
                <el-option label="启用" value="0"></el-option>
                <el-option label="停用" value="1"></el-option>
              </el-select>
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
import CarTypeModal from '@/components/se/CarTypeModal/CarTypeModal';
import mixTable from "@/components/basicComponent/mixTable";
import { seApis } from "@/api/graphQLApiList/se";
import { requestGraphQL } from "@/api/commonRequest";
import lableName from "@/components/lableName/index";
import carBrand from "@/components/org/carBrand/carBrand";
import {
  seMainCulpritMutationSave
} from "@/api/se/basedata/repair/seMainCulpritMutationSave";
export default {
  components: {
    mixTable,
    lableName,
    carBrand,
    CarTypeModal
  },

  data() {
    return {
      deleteInfo: [],
      mainCulpritCodeShow: false,
      carbrandshow: false,

      //表单校验
      rules: {
        mainCulpritCode: [
          { required: true, message: "请填写主凶件编码", trigger: "change" }
        ],
        mainCulpritName: [
          {
            required: true,
            message: "请填写主凶件名称",
            trigger: "change"
          }
        ]
      },
      dialogParamVisible: false,
      showTitle: "新增故障现象原因码",
      modify: {
        a4: "",
        a5: "",
        mainCulpritCode: "",
        mainCulpritName: "",
        applicableCar: "",
        applicableModels: "",
        a2: "",
        remark: "",
        a8: ""
      },
      queryParams: {
        APIUrl: seApis.seMainCulpritFindAll.APIUrl,
        InputType: seApis.seMainCulpritFindAll.InputType,
        ServiceCode: seApis.seMainCulpritFindAll.ServiceCode,
        dataInfo: {
          mainCulpritCode: "",
          mainCulpritName: "",
          applicableCar: "",
          applicableModels: ""
        },
        apiQueryRow: [
          "mainCulpritCode",
          "mainCulpritName",
          "applicableCar",
          "applicableModels",
          "a1",
          "remark",
          "a3",
          "a4",
          "a5",
          "a6",
          "a7"
        ]
      },
      cols: [
        { label: "主凶件编码", codeField: "mainCulpritCode" },
        { label: "主凶件名称", codeField: "mainCulpritName" },
        { label: "适用车系", codeField: "applicableCar" },
        { label: "适用车型", codeField: "applicableModels" },
        { label: "状态", codeField: "a1" },
        { label: "备注", codeField: "remark" }
      ]
    };
  },

  methods: {
      //车型弹窗
      opencarTypeModal1() {
      this.$refs.CarTypeModal1.open();
    },
    getCarTypeModal1(val, carTypeCn, carTypeCode) {
        debugger
        
      this.modify.applicableModels = carTypeCn;
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
          this.modify.mainCulpritCode != "" &&
          this.modify.mainCulpritName != ""
        ) {
          seMainCulpritMutationSave(this.modify).then(response => {
            if (
              response.data[seApis.seMainCulpritMutationSave.ServiceCode]
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
                  response.data[seApis.seMainCulpritMutationSave.ServiceCode]
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
      this.showTitle = "新增主凶件";
      this.carbrandshow = false;
      this.mainCulpritCodeShow = false;
      if (this.dialogParamVisible) {
        this.modify.a4 = '';
        this.modify.a5 = '';
        this.modify.mainCulpritCode = '';
        this.modify.mainCulpritName = '';
        this.modify.applicableCar = '';
        this.modify.applicableModels = '';
        this.modify.a2 = '0';
        this.modify.a8 = '';
        this.modify.remark = '';
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
        this.mainCulpritCodeShow = true;
        this.dialogParamVisible = true;
        this.showTitle = "编辑主凶件";
        this.modify.a4 = this.$refs.tableList.tableData[0].a4;
        this.modify.a5 = this.$refs.tableList.tableData[0].a5;
        this.modify.mainCulpritCode = this.$refs.tableList.tableData[0].mainCulpritCode;
        this.modify.mainCulpritName = this.$refs.tableList.tableData[0].mainCulpritName;
        this.modify.applicableCar = this.$refs.tableList.tableData[0].applicableCar;
        this.modify.applicableModels = this.$refs.tableList.tableData[0].applicableModels;
        this.modify.a2 = this.$refs.tableList.tableData[0].a2;
        this.modify.a8 = this.$refs.tableList.tableData[0].a8;
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
      this.queryParams.dataInfo.mainCulpritCode = "";
      this.queryParams.dataInfo.mainCulpritName = "";
      this.queryParams.dataInfo.applicableCar = "";
      this.queryParams.dataInfo.applicableModels = "";
    },
    //查询故障原因码
    findALL() {
      this.$refs.tableList.queryList();
    },

    getAdaptType1(val) {
      this.modify.a2 = val;
    }
  }
};
</script>

