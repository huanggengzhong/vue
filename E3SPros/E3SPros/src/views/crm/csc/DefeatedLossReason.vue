<!--
* 描述: 战败失控原因维护
* 创建人: chq2
* 创建时间: 2019-07-24
* 记录：
*  20190724 新建 chq2
*  20190819 联调 zouzx
-->
<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query">查询</el-button>
      <el-button @click="showdialog">新增</el-button>
      <el-button @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <FailureLostControllerReasonNumber
              :FailureLostControllerReasonNumber="cxNo"
              ref="FailureLostControllerReasonNumber"
            ></FailureLostControllerReasonNumber>
          </el-col>
          <el-col :span="6">
            <FailureLostControllerReasonName
              :FailureLostControllerReasonName="cxName"
              ref="FailureLostControllerReasonName"
            ></FailureLostControllerReasonName>
          </el-col>
          <el-col :span="6">
            <ReasonType :ReasonType="cxType" ref="ReasonType"></ReasonType>
          </el-col>
          <el-col :span="6">
            <EnableOrDisable :EnableOrDisable="cxStatus" ref="EnableOrDisable"></EnableOrDisable>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <!--失控原因编辑 弹出框开始-->
    <el-dialog
      :visible.sync="dialogVisible"
      style="height:320px;position:fixed;top:0;right:0;left:0;bottom:0;margin:auto;"
      width="700px"
      class="dialog"
      title="失控原因编辑"
      append-to-body
    >
      <div class="filter-container filter-params-crm filter-params-sub">
        <el-form label-position="right">
          <!--第一行-->
          <el-row>
            <el-col :span="12" class="crm-label-required">
              <FailureLostControllerReasonNumber
                :FailureLostControllerReasonNumber="whNo"
                ref="whrfNo"
              ></FailureLostControllerReasonNumber>
            </el-col>
            <el-col :span="12" class="crm-label-required">
              <ReasonType :ReasonType="whType" ref="whrfType"></ReasonType>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" class="crm-label-required">
              <FailureLostControllerReasonName
                :FailureLostControllerReasonName="whName"
                ref="whrfName"
              ></FailureLostControllerReasonName>
            </el-col>
            <el-col :span="12" class="crm-label-required">
              <EnableOrDisable :EnableOrDisable="whStatus" ref="whrfStatus"></EnableOrDisable>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <ReasonDescripts :ReasonDescripts="whDesc" ref="whrfDesc"></ReasonDescripts>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-button type="primary" @click="save" :disabled="disabled">保存</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <!--失控原因编辑 弹出框结束-->

    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table
    ref="table"
      :data="tabledatas.tableData"
      highlight-current-row
      :style="{width:'100%',height:tableHeight+'px'}"
      v-loading.body="listLoading"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" align="center" width="180">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            align="center"
            @click="handle(scope.$index, scope.row)"
          >编辑</el-button>
          <!-- <el-button
            size="mini" type="text" align="center"
            @click="handleDetail(scope.$index, scope.row)"
          >明细维护</el-button>-->
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in tabledatas.colnames"
        :key="item.value"
        :label="item.label"
        :prop="item.value"
        align="center"
      ></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="tabledatas.total"
      :page-size="tabledatas.pagesize"
      :current-page="tabledatas.pageindex"
      @prev-click="prev"
      @next-click="next"
      @current-change="changepage"
    ></el-pagination>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import ReasonType from "@/components/crm/Select/Common/ReasonType.vue";
import FailureLostControllerReasonNumber from "@/components/crm/textbox/Complaint/FailureLostControllerReasonNumber.vue";
import FailureLostControllerReasonName from "@/components/crm/textbox/Complaint/FailureLostControllerReasonName.vue";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable.vue";
import ReasonDescripts from "@/components/crm/textbox/Public/ReasonDescripts.vue";
import Order from "@/components/crm/Select/Common/Order.vue";
import FailureDetailNumber from "@/components/crm/textbox/Complaint/FailureDetailNumber.vue";
import FailureDetailName from "@/components/crm/textbox/Complaint/FailureDetailName.vue";
import FailureDetailDescripts from "@/components/crm/textbox/Complaint/FailureDetailDescripts.vue";
export default {
  name: "DefeatedLossReason",
  components: {
    FailureLostControllerReasonNumber,
    FailureLostControllerReasonName,
    ReasonDescripts,
    ReasonType,
    EnableOrDisable,
    Order,
    FailureDetailNumber,
    FailureDetailName,
    FailureDetailDescripts
  },
  data() {
    return {
      disabled:false,
      listLoading:false,
      cxNo: {
        input: ""
      },
      cxName: {
        input: ""
      },
      cxStatus: {
        value: ""
      },
      cxType: {
        value: ""
      },
      whNo: {
        input: "",
        isdisabled: false
      },
      whName: {
        input: ""
      },
      whStatus: {
        value: ""
      },
      whType: {
        value: "",
        isdisabled: false
      },
      whDesc: {
        input: ""
      },
      failReasonMId: "",
      tableHeight:"",
      updateControlId: "",
      toggleParam: false,
      dialogVisible: false,
      dialogVisible3: false,
      tabledatas: {
        colnames: [
          { label: "原因编号", value: "failReasonNo" },
          { label: "原因名称", value: "failReasonName" },
          { label: "原因描述", value: "failReasonDesc" },
          { label: "原因类型", value: "failReasonTypeName" },
          { label: "是否启用", value: "isEnableName" },
          { label: "创建人", value: "createdName" },
          { label: "创建时间", value: "createdDate" },
          { label: "最后修改人", value: "modifyName" },
          { label: "最后修改时间", value: "lastUpdatedDate" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.pcDbFailReasonMQueryFindAll,
          apiQueryRow: [
            "failReasonNo",
            "failReasonName",
            "failReasonDesc",
            "failReasonType",
            "isEnableName",
            "createdName",
            "createdDate",
            "modifyName",
            "lastUpdatedDate",
            "failReasonMId",
            "isEnable",
            "updateControlId",
            "failReasonTypeName"
          ],
          params: {
            //dlrCode:"",
            failReasonNo: "",
            failReasonName: "",
            failReasonType: "",
            isEnable: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      // 页面渲染完成后的回调
      let that = this;
      this.$crmcf.__setAutoTableStyle(that);
    });
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    query: function() {
      let that = this;
      that.tabledatas.queryObj.params.failReasonNo = this.$refs.FailureLostControllerReasonNumber.input;
      that.tabledatas.queryObj.params.failReasonName = this.$refs.FailureLostControllerReasonName.input;
      that.tabledatas.queryObj.params.failReasonType = this.$refs.ReasonType.value;
      that.tabledatas.queryObj.params.isEnable = this.$refs.EnableOrDisable.value;
 this.$crmcf.simpleTablequery(that, that.tabledatas, that.tabledatas.queryObj.apiConfig,function(data){
        that.tabledatas.tableData =data.rows;
        })
    },
    save: function() {
        let that = this;
      let flag = false;
      var config = that.config;
      config = {
        whrfNo: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.whrfNo.input,
          "原因编号",
          "不能为空"
        ],
        whrfType: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.whrfType.value,
          "原因类型",
          "不能为空"
        ],
        whrfName: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.whrfName.input,
          "原因名称",
          "不能为空"
        ],
        whrfStatus: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.whrfStatus.value,
          "是否启用",
          "不能为空"
        ]
      };
        that.$crmcf.validForm(that, 'form', config, function(flag) {
        if (flag) {
 let variables = {
            dataInfo: {
            failReasonMId: that.failReasonMId,
            failReasonNo: that.$refs.whrfNo.input,
            failReasonName: that.$refs.whrfName.input,
            failReasonDesc: that.$refs.whrfDesc.input,
            isEnable: that.$refs.whrfStatus.value,
            failReasonType: that.$refs.whrfType.value,
            reasonM: "YY",
            updateControlId: that.updateControlId
          }
          };
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.pcDbFailReasonMMutationSaveById,
            function() {
             that.dialogVisible = false;
          that.disabled=false
          that.query();
            }
          );
        }
        })
         
    },
    handle: function(index, rowData) {
      let that = this;

      that.whNo.input = rowData.failReasonNo;
      that.whNo.isdisabled = true;
      that.whType.value = rowData.failReasonType;
      that.whType.isdisabled = true;
      that.whStatus.value = rowData.isEnable;
      that.whName.input = rowData.failReasonName;
      that.whDesc.input = rowData.failReasonDesc;
      that.failReasonMId = rowData.failReasonMId;
      that.updateControlId = rowData.updateControlId;
      if (
        that.$refs.whrfNo == undefined &&
        that.$refs.whrfType == undefined &&
        that.$refs.whrfStatus == undefined &&
        that.$refs.whrfName == undefined &&
        that.$refs.whrfDesc == undefined
      ) {
        that.dialogVisible = true;
      } else {
        that.$refs.whrfNo.getData();
        that.$refs.whrfType.getData();
        that.$refs.whrfStatus.getData();
        that.$refs.whrfName.getData();
        that.$refs.whrfDesc.getData();
        that.dialogVisible = true;
      }
    },
    handleDetail: function(index, rowData) {
      let that = this;
      //that.$router.push({ name: "LossRDetail", params: rowData });
      that.$crmcf.jumpDetailTag(that,'LossRDetail','/LossRDetail',rowData)
    },
    showdialog: function(index, rowData) {
      let that = this;
      that.failReasonMId = "";
      that.updateControlId = "";
      if (
        that.$refs.whrfNo == undefined &&
        that.$refs.whrfType == undefined &&
        that.$refs.whrfStatus == undefined &&
        that.$refs.whrfName == undefined &&
        that.$refs.whrfDesc == undefined
      ) {
        that.dialogVisible = true;
      } else {
        that.$refs.whrfNo.reset();
        that.$refs.whrfType.reset();
        that.$refs.whrfStatus.reset();
        that.$refs.whrfName.reset();
        that.$refs.whrfDesc.reset();
        that.dialogVisible = true;
      }
    },
    reset: function() {
      this.$refs.FailureLostControllerReasonNumber.reset();
      this.$refs.FailureLostControllerReasonName.reset();
      this.$refs.EnableOrDisable.reset();
      this.$refs.ReasonType.reset();
    },
    prev() {
      let that = this;
      if (this.tabledatas.pageIndex > 1) {
        that.tabledatas.pageIndex = this.tabledatas.pageIndex - 1;
        this.query();
      }
    },
    next() {
      let that = this;
        that.tabledatas.pageIndex = this.tabledatas.pageIndex + 1;
        this.query();
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    }
  }
};
</script>

