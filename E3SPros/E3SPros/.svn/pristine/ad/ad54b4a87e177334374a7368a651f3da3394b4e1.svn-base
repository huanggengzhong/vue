<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
      <el-button @click="showModifyDialog()">修改</el-button>
      <el-button @click="showAddDialog('ruleForm2')">新增</el-button>
      <el-button size="small" @click="rest()">重置</el-button>
    </div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row>
        <carBrand
          :isMul="false"
          :span="6"
          :code="initData.dataInfo.carBrandCode"
          labelName="车辆品牌"
          :key="carBrandKey"
          @changeCode="getCarBrand"
        ></carBrand>
        <el-col :span="6">
          <lableName curLabelName="服务参数编号" :isShowLabel="true" :isRequire="false"></lableName>
          <el-input
            clearable
            v-model="initData.dataInfo.serviceSysParaCode"
            placeholder="请输入"
            size="small"
          />
        </el-col>
        <el-col :span="6">
          <lableName curLabelName="服务参数名称" :isShowLabel="true" :isRequire="false"></lableName>
          <el-input
            clearable
            v-model="initData.dataInfo.serviceSysParaName"
            placeholder="请输入"
            size="small"
          />
        </el-col>
        <el-col :span="6">
          <lableName curLabelName="服务参数值" :isShowLabel="true" :isRequire="false"></lableName>
          <el-input
            clearable
            v-model="initData.dataInfo.serviceSysParaValue"
            placeholder="请输入数字"
            size="small"
            oninput="value=value.replace(/[^\d.]/g,'')"
          />
        </el-col>
      </el-row>
      <el-dialog
        :title="showTittle"
        :visible.sync="addDialogFormVisible"
        width="70%"
        center
        :append-to-body="true"
        :close-on-click-modal="false"
      >
        <div class="filter-container filter-params">
          <el-form
            :model="addlist"
            :rules="rules"
            center
            :append-to-body="true"
            ref="ruleForm2"
            class="demo-ruleForm"
            :inline-message="true"
          >
            <el-row class="form">
              <carBrand
                :span="8"
                :isMul="false"
                :code="addlist.carBrandCode"
                labelName="车辆品牌"
                @changeCode="getCarBrandCode"
              ></carBrand>
              <el-col :span="8">
                <el-form-item label="服务参数编号" prop="serviceSysParaCode" :require="true">
                  <el-input
                    v-model=" addlist.serviceSysParaCode"
                    v-bind:disabled="isDisplay?true:false"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="服务参数名称" prop="serviceSysParaName" :require="true">
                  <el-input v-model="addlist.serviceSysParaName" size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="服务参数值" prop="serviceSysParaValue">
                  <el-input v-model.number=" addlist.serviceSysParaValue" size="small"></el-input>
                </el-form-item>
              </el-col>
              <isEnable :span="8" :code="addlist.isEnable" @changeCode="getIsEnableCode" />
              <el-col :span="8">
                <el-form-item label="备注" prop="getremarks">
                  <el-input v-model=" addlist.remark" size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <div class="filter-container filter-button">
              <el-button type="primary" @click="saveData('ruleForm2')">保存</el-button>
              <el-button @click="addDialogFormVisible = false">取消</el-button>
            </div>
          </el-form>
        </div>
      </el-dialog>
    </div>
    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :height="tableHeight"
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      @row-click="rowClicked"
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>

      <el-table-column align="center" label="车辆品牌">
        <template slot-scope="scope">{{ scope.row.carBrandCn}}</template>
      </el-table-column>

      <el-table-column align="center" label="服务参数编号">
        <template slot-scope="scope">{{ scope.row.serviceSysParaCode}}</template>
      </el-table-column>

      <el-table-column align="center" label="服务参数名称">
        <template slot-scope="scope">{{ scope.row.serviceSysParaName}}</template>
      </el-table-column>

      <el-table-column align="center" label="服务参数值">
        <template slot-scope="scope">{{ scope.row.serviceSysParaValue}}</template>
      </el-table-column>

      <el-table-column align="center" label="备注">
        <template slot-scope="scope">{{ scope.row.remark}}</template>
      </el-table-column>
      <!-- <el-table-column align="center" label="是否可用">
        <template slot-scope="scope">{{ scope.row.isEnable}}</template>
      </el-table-column>-->
    </el-table>
    <el-pagination
      ref="paginationHeight"
      background
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?listRecords:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
import carBrand from "@/components/org/carBrand/carBrand";
import isEnable from "@/components/org/isEnable/isEnable";
import lableName from "@/components/lableName";
import { the_Height } from "@/views/se/makeHeight";
import { seApis } from "@/api/graphQLApiList/se";
import {
  doQueryList,
  doParaSave
} from "@/api/se/basedata/repair/SeDbParaSetMutation";

export default {
  filters: {
    isEnableFilter(isEnable) {
      const isEnableMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return isEnableMap[isEnable];
    }
  },
  mixins: [the_Height],
  components: {
    lableName,
    carBrand,
    isEnable
  },
  data() {
    return {
      showTittle: "",
      listRecords: null,
      tableHeight: 310, // 网格高度
      tableMarginHeight: 15,
      pic: true,
      isEnable: "",
      isDisplay: false,
      isMul: false,
      initData: {
        pageIndex: 1,
        pageSize: 10,
        dataInfo: {
          oemCode: "",
          groupCode: "",
          carBrandCode: "",
          serviceSysParaCode: "",
          serviceSysParaName: "",
          serviceSysParaValue: ""
        }
      },
      list: null,
      carBrandKey: "b",
      carTypeVisible: false,
      addDialogFormVisible: false,
      dialogFormVisible: false,
      listLoading: false,
      ruleForm: {
        rename: "",
        recode: ""
      },

      rules: {
        carBrandCn: [
          { required: true, message: "请输入品牌", trigger: "change" }
        ],
        serviceSysParaCode: [
          { required: true, message: "请输入编号", trigger: "change" }
        ],
        serviceSysParaName: [
          { required: true, message: "请输入名称", trigger: "change" }
        ],
        serviceSysParaValue: [
          { required: true, message: "请输入参数值", trigger: "change" },
          { type: "number", message: "请输入数字类型", trigger: "change" }
        ],
        isEnable: [
          { required: true, message: "请设置启用状态", trigger: "change" }
        ]
      },

      carBrandList: [
        { code: "1", text: "东风日产-日产" },
        { code: "2", text: "东风日产-启辰" },
        { code: "3", text: "东风日产-进入桑尼" }
      ],
      searcarBrandList: [
        { code: "1", text: "东风日产-日产" },
        { code: "2", text: "东风日产-启辰" },
        { code: "3", text: "东风日产-进入桑尼" }
      ],
      isEnableList: [{ code: "1", text: "是" }, { code: "2", text: "否" }],
      listQuery: {
        pageIndex: 1,
        pageSize: 5,
        limit: 10,
        type: undefined,
        flag: "",
        isEnable: "1",
        getbrandCode: "",
        getserviceSysParaCode: "",
        getserviceSysParaName: "",
        getserviceSysParaValue: "",
        getremarks: "",
        remarks: ""
      },
      addlist: {
        serviceSysParaId: "",
        serviceSysParaCode: "",
        isEnable: "",
        updateControlId: "",
        serviceSysParaValue: "",
        serviceSysParaName: "",
        carBrandCode: "",
        remark: "",
        oemCode: "",
        groupCode: "",
        oemId: "",
        groupId: ""
      },
      curRow: {},

      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",

      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData(page) {
      this.listLoading = true;
      doQueryList(
        this.initData.pageSize,
        page || this.initData.pageIndex,
        this.initData.dataInfo
      ).then(response => {
        if (
          response.data[seApis.SeDbParaSetQueryFindAll.ServiceCode].result ===
          "1"
        ) {
          this.list =
            response.data[seApis.SeDbParaSetQueryFindAll.ServiceCode].rows;
          this.listRecords =
            response.data[seApis.SeDbParaSetQueryFindAll.ServiceCode].records;
          this.curRow = {};
          this.listLoading = false;
        } else {
          this.$message({
            message:
              "查询失败：" +
              response.data[seApis.SeDbParaSetQueryFindAll.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    },
    showModifyDialog() {
      if (this.curRow.serviceSysParaCode == null) {
        this.$alert("请选中一行数据", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      } else {
        this.showTittle = "修改";
        this.addlist.carBrandCode = this.curRow.carBrandCode;
        this.addlist.serviceSysParaCode = this.curRow.serviceSysParaCode;
        this.addlist.serviceSysParaName = this.curRow.serviceSysParaName;
        this.addlist.serviceSysParaValue = Number(
          this.curRow.serviceSysParaValue
        );
        this.addlist.remark = this.curRow.remark;
        this.addlist.isEnable = this.curRow.isEnable;
        this.isDisplay = true;
        this.addDialogFormVisible = true;
      }
    },
    showModifysuccessDialog() {
      this.$alert("修改成功", "提示", {
        confirmButtonText: "确定",
        type: "success"
      });
      return;
    },
    showAddDialog(formName) {
      this.addDialogFormVisible = true;
      this.isDisplay = false;
      if (this.$refs[formName] !== undefined) {
        this.$refs[formName].resetFields();
        this.addlist.carBrandCode = "";
        this.addlist.serviceSysParaCode = "";
        this.addlist.serviceSysParaName = "";
        this.addlist.serviceSysParaValue = "";
        this.addlist.remark = "";
        this.addlist.isEnable = "";
        this.showTittle = "新增";
      }
    },
    addshowModifysuccessDialog() {
      this.$alert("新增成功", "提示", {
        confirmButtonText: "确定",
        type: "success"
      });
      return;
    },
    saveData(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 校验通过
          this.listLoading = true;
          let obj = {};
          obj.serviceSysParaId = this.curRow.serviceSysParaId;
          obj.serviceSysParaCode = this.addlist.serviceSysParaCode;
          obj.isEnable = this.addlist.isEnable;
          obj.updateControlId = this.curRow.updateControlId;
          obj.serviceSysParaValue = this.addlist.serviceSysParaValue;
          obj.serviceSysParaName = this.addlist.serviceSysParaName;
          obj.carBrandCode = this.addlist.carBrandCode;
          obj.remark = this.addlist.remark;
          obj.oemCode = this.curRow.oemCode;
          obj.groupCode = this.curRow.groupCode;
          obj.oemId = this.curRow.oemId;
          obj.groupId = this.curRow.groupId;

          doParaSave(obj).then(response => {
            if (
              response.data[seApis.SeDbParaSetMutationSave.ServiceCode]
                .result === "1"
            ) {
              this.$message({
                message: "保存成功",
                type: "success"
              });
              this.fetchData();
            } else {
              this.$message({
                message:
                  "保存失败：" +
                  response.data[seApis.SeDbParaSetMutationSave.ServiceCode].msg,
                type: "warn",
                uration: 2000
              });
              this.fetchData();
            }
            this.addDialogFormVisible = false;
            this.listLoading = false;
          });
        } else {
          // 校验不通过
          return false;
        }
      });
    },
    rest() {
      this.initData.dataInfo = {};
    },

    loadmore() {
      // 更多折叠方法
      if (this.pic) {
        this.pic = false;
      } else {
        this.pic = true;
      }
    },
    rowClicked(row) {
      if (row.brandCode === "东风日产-日产") {
        this.listQuery.getbrandCode = "东风日产-日产";
      }
      if (row.brandCode === "东风日产-启辰") {
        this.listQuery.getbrandCode = "东风日产-启辰";
      }
      if (row.brandCode === "东风日产-进入桑尼") {
        this.listQuery.getbrandCode = "东风日产-进入桑尼";
      }

      this.curRow = row;
    },
    getCarBrand(val) {
      this.initData.dataInfo.carBrandCode = val;
    },
    getCarBrandCode(val, text) {
      this.addlist.carBrandCode = val;
      this.addlist.carBrandCn = text;
    },
    getIsEnableCode(val) {
      this.addlist.isEnable = val;
    },
    handleSizeChange(val) {
      this.initData.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.initData.pageIndex = val;
      this.fetchData();
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .el-form-item__content {
  margin-bottom: 10px !important;
}
</style>

