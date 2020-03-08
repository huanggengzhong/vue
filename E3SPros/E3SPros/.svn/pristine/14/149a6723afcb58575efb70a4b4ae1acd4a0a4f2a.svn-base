<!--
* description: 财务审核
* author: chchhui
* createdDate: 2019-08-9
* logs：
*  20190809 新增页面功能
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="textQurey(1)">查询</el-button>
      <el-button size="small" @click="audit">审核</el-button>
      <el-button size="small" @click="reject">驳回</el-button>
      <el-button size="small">导出</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>

    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params">
      <el-row :gutter="24">
        <el-col :span="22">
          <el-row>
            <el-col :span="6">
              <label>经销商</label>
              <el-input
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
                v-model="listQuery.dlrId"
                @focus="openDlr"
              />
              <seCommonQueryChooseDlr
                ref="seCommonQueryChooseDlr"
                :isMul="isMul"
                :seComQueChoDlrVisible="seComQueChoDlrVisible"
                @sentCode="getComQueCho"
                @close="closeComQueCho"
              />
            </el-col>
            <el-col :span="6">
              <label>模块名称</label>
              <el-input placeholder="备件" size="small" :disabled="true" />
            </el-col>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="auditStatus"
              :lookuptype="lookuptype.auditStatus"
              :labelName="lookupValuelable.auditStatus"
              @changeCode="getAuditStatus"
            />
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="businessType"
              :lookuptype="lookuptype.businessType"
              :labelName="lookupValuelable.businessType"
              @changeCode="getBusinessType"
            />
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" class="toggleParam">
          <el-row>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="businessClass"
              :lookuptype="lookuptype.businessClass"
              :labelName="lookupValuelable.businessClass"
              @changeCode="getBusinessClass"
            />
            <el-col :span="6">
              <label>审核时间</label>
              <el-date-picker type="date" placeholder="选择日期" v-model="listQuery.auditDate"></el-date-picker>
            </el-col>
            <el-col :span="6" class="text">
              <span>总记录数：{{count}}</span>
              <span>金额合计：{{money}}</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      @select="getRowCode"
    >
      <el-table-column label="序号" width="60" type="index" align="center"></el-table-column>
      <el-table-column width="60" type="selection"></el-table-column>
      <el-table-column prop="dlrCode" label="经销商编码" width="100" align="center"></el-table-column>
      <el-table-column prop="dlrShortName" label="经销商名称" width="130" align="center"></el-table-column>

      <el-table-column prop="pvAccount" label="收款账户" align="center" width="120">
        <template slot-scope="scope">{{ scope.row.pvAccount == 1 ? '日产账户':'启程账户' }}</template>
      </el-table-column>
      <el-table-column prop="dlrAccount" label="收款账户" align="center" width="120">
        <template slot-scope="scope">{{ scope.row.pvAccount == 1 ? '招商银行':'农业银行' }}</template>
      </el-table-column>
      <el-table-column prop="tranAmount" label="金额" width="120" align="center"></el-table-column>
      <el-table-column prop="businessTypeName" label="资金操作类型" align="center" width="150"></el-table-column>
      <el-table-column prop="businessClass" label="明细类别" align="center" width="120">
        <template slot-scope="scope">{{ scope.row.businessClass == 1 ? '其他转账':'业务转账' }}</template>
      </el-table-column>
      <el-table-column prop="businessDate" label="汇款日期" width="150" align="center"></el-table-column>
      <el-table-column prop="auditStatusName" label="资金审核类型" width="120" align="center"></el-table-column>
      <el-table-column prop="creator" label="申请人" width="120" align="center"></el-table-column>
      <el-table-column prop="createdDate" label="申请日期" width="150" align="center"></el-table-column>
      <el-table-column prop="oemAuditor" label="审核人" width="120" align="center"></el-table-column>
      <el-table-column prop="auditDate" label="审核日期" width="150" align="center"></el-table-column>
      <el-table-column prop="modelName" label="模块" width="80" align="center"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?list.length:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import seCommonQueryChooseDlr from "@/components/se/seCommonQueryChooseDlr";
import lableName from "@/components/lableName";
import LookupValue from "@/components/org/LookupValue";
export default {
  name: "pacwsh",
  components: {
    seCommonQueryChooseDlr,
    LookupValue,
    lableName
  },
  data() {
    return {
      isMul: false,
      listLoading: false,
      seComQueChoDlrVisible: false,
      list: [],
      count: 0,
      money: 0,
      countList: [],
      rowList: "",
      auditStatus: "",
      businessType: "",
      businessClass: "",
      isMul: false,
      isShowLabel: true,
      lookupValuelable: {
        auditStatus: "资金审核类型",
        businessType: "资金操作类型",
        businessClass: "明细类型"
      },
      lookuptype: {
        auditStatus: "VE0141",
        businessType: "VE0137",
        businessClass: "PA0036"
      },
      //之前的数据
      toggleParam: false,
      isMul: false,
      code: "1",
      pageIndex: 1,
      pageSize: 10,
      listQuery: {
        dlrId: "202",
        modelName: "PA",
        auditStatus: "",
        businessClass: "",
        auditDate: ""
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  methods: {
    getRowCode(selection) {
      const tempList = selection;
      var tempOptions = [];
      tempList.forEach(row => {
        tempOptions.push({
          auditStatus: row.auditStatus,
          dlrId: row.dlrId,
          dlrAccountRInfoId: row.dlrAccountRInfoId,
          updateControlId: row.updateControlId,
          pvAccount: row.pvAccount,
          pvBank: row.pvBank,
          businessDate: row.businessDate,
          tranAmount: row.tranAmount,
          businessType: row.businessType,
          businessClass: row.businessClass,
          remark: row.remark
        });
      });
      this.rowList = tempOptions;
    },
    openDlr() {
      this.seComQueChoDlrVisible = true;
    },
    //关闭弹窗获取数据
    getComQueCho(val) {
      this.listQuery.dlrId = val.dlrShortName;
      this.seComQueChoDlrVisible = false;
    },
    //打开弹窗事件，清空弹窗列表
    dosseCommonQueryChooseDlr() {
      this.seComQueChoDlrVisible = true;
      this.$refs.seCommonQueryChooseDlr.resetList();
    },
    //点击弹框右上角关闭弹窗，不传递数据
    closeComQueCho(val) {
      this.seComQueChoDlrVisible = val;
    },
    getAuditStatus(val) {
      this.listQuery.auditStatus = val;
      this.auditStatus = this.listQuery.auditStatus;
    },
    getBusinessType(val) {
      this.listQuery.businessType = val;
      this.businessType = this.listQuery.businessType;
    },
    getBusinessClass(val) {
      this.listQuery.businessClass = val;
      this.businessClass = this.listQuery.businessClass;
    },
    //重置
    reset() {
      this.auditStatus = "";
      this.businessType = "";
      this.businessClass = "";
    },

    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    getBrandCode(val) {
      this.listQuery.brandCode = val;
    },
    getSetStatusCode(val) {
      this.listQuery.status = val;
    },
    getIsEnableCode(val) {
      this.listQuery.isEnable = val;
    },
    getCarColorCode(val) {
      this.listQuery.carColorCode = val.code;
      this.listQuery.carColorName = val.name;
      this.carColorVisible = false;
    },
    getCarSeriesCode(val) {
      this.listQuery.carSeriesCode = val.code.join(",");
      this.listQuery.carSeriesName = val.name.join(",");
      this.carSeriesVisible = false;
    },
    getPositionCode(val) {
      this.listQuery.positionCode = val.code;
      this.listQuery.positionName = val.name;
      this.positionVisible = false;
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    //驳回
    reject() {
      const that = this;
      if (that.rowList.length == 0) {
        that.$alert("请查询申请的数据", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
      } else {
        if (that.rowList[0].auditStatus != "1") {
          that.$alert("只能对申请的数据进行驳回", "提示", {
            confirmButtonText: "确定",
            type: "warning"
          });
          return;
        }
        that
          .$confirm("是否确认驳回选中信息？", "确认信息", {
            distinguishCancelAndClose: true,
            confirmButtonText: "确认",
            cancelButtonText: "取消驳回",
            type: "warning"
          })
          .then(() => {
            let queryObj = {
              // 请求类型&参数 保存mutation  查询query
              type: "mutation",
              typeParam:
                "($dataInfo: " +
                paApis.veBuDlrAccountRInfoMutationAuditBatchReject.InputType +
                ")",
              // 请求API
              apiUrl: paApis.veBuDlrAccountRInfoMutationAuditBatchReject.APIUrl,
              // 需要调用的API服务配置
              apiServices: [
                {
                  // API服务编码&参数
                  apiServiceCode:
                    paApis.veBuDlrAccountRInfoMutationAuditBatchReject
                      .ServiceCode,
                  apiServiceParam: "(dataInfo: $dataInfo)",
                  // 表格中台返回网格的字段
                  apiQueryRow: []
                }
              ],
              // 条件/实体参数（变量），根据typeParam中的定义配置
              variables: {
                // 当前中台使用的名称有dataInfo、info，具体查看API文档
                dataInfo: that.rowList
              }
            };
            var paramD = that.$getParams(queryObj);
            // 调用中台API方法（可复用）
            requestGraphQL(paramD).then(response => {
              //console.log(response)
              if (
                response.data[
                  paApis.veBuDlrAccountRInfoMutationAuditBatchReject.ServiceCode
                ].result === "1" &&
                response.data[
                  paApis.veBuDlrAccountRInfoMutationAuditBatchReject.ServiceCode
                ].rows != ""
              ) {
                that.$message({
                  showClose: true,
                  message: "驳回成功",
                  type: "success"
                });
                that.textQurey();
              }
            });
          });
      }
    },

    //审核
    audit() {
      if (this.rowList.length == 0) {
        this.$alert("请查询需要审核的数据", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      if (this.rowList[0].auditStatus != "1") {
        this.$alert("只能对申请的数据进行审核", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      const that = this;
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "mutation",
        typeParam:
          "($dataInfo: " +
          paApis.veBuDlrAccountRInfoMutationAuditBatchPass.InputType +
          ")",
        // 请求API
        apiUrl: paApis.veBuDlrAccountRInfoMutationAuditBatchPass.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode:
              paApis.veBuDlrAccountRInfoMutationAuditBatchPass.ServiceCode,
            apiServiceParam: "(dataInfo: $dataInfo)",
            // 表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.rowList
        }
      };
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        //console.log(response)
        if (
          response.data[
            paApis.veBuDlrAccountRInfoMutationAuditBatchPass.ServiceCode
          ].result === "1" &&
          response.data[
            paApis.veBuDlrAccountRInfoMutationAuditBatchPass.ServiceCode
          ].rows != ""
        ) {
          that.$message({
            showClose: true,
            message: "审核成功",
            type: "success"
          });
          that.textQurey();
        }
      });
    },

    //请求数据
    textQurey(page) {
      const that = this;
      that.listLoading = true;
      let queryObj = {
        // api配置
        apiConfig: paApis.veBuDlrAccountRInfoQueryWorkFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "dlrCode",
              "dlrShortName",
              "tranAmount",
              "businessType",
              "businessTypeName",
              "businessClass",
              "businessClassName",
              "pvAccount",
              "auditDate",
              "dlrAccount",
              "auditStatus",
              "auditStatusName",
              "modelName",
              "creator",
              "businessDate",
              "createdDate",
              "oemAuditor",
              "updateControlId",
              "dlrAccountRInfoId",
              "dlrId",
              "oemId",
              "groupId",
              "oemCode",
              "groupCode"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.pageSize,
          pageIndex: page || that.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      //console.log(paramD)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        //console.log(response)
        if (
          response.data[paApis.veBuDlrAccountRInfoQueryWorkFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.veBuDlrAccountRInfoQueryWorkFindAll.ServiceCode]
            .rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              paApis.veBuDlrAccountRInfoQueryWorkFindAll.ServiceCode
            ].records;
          that.list =
            response.data[
              paApis.veBuDlrAccountRInfoQueryWorkFindAll.ServiceCode
            ].rows;
          that.listLoading = false;
        }
      });
      this.countQurey();
    },

    //记录查询
    countQurey() {
      const that = this;
      let queryObj = {
        type: "query",
        typeParam:
          "($dataInfo: " +
          paApis.veBuDlrAccountRInfoQueryAuditFindCount.InputType +
          ")",
        // 请求API
        apiUrl: paApis.veBuDlrAccountRInfoQueryAuditFindCount.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode:
              paApis.veBuDlrAccountRInfoQueryAuditFindCount.ServiceCode,
            apiServiceParam: "(dataInfo: $dataInfo)",
            // 表格中台返回网格的字段
            apiQueryRow: ["records", "totalAmount"]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      //console.log(paramD)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        //console.log(response)
        if (
          response.data[
            paApis.veBuDlrAccountRInfoQueryAuditFindCount.ServiceCode
          ].result === "1" &&
          response.data[
            paApis.veBuDlrAccountRInfoQueryAuditFindCount.ServiceCode
          ].rows != ""
        ) {
          that.count =
            response.data[
              paApis.veBuDlrAccountRInfoQueryAuditFindCount.ServiceCode
            ].rows[0].records;
          that.money =
            response.data[
              paApis.veBuDlrAccountRInfoQueryAuditFindCount.ServiceCode
            ].rows[0].totalAmount;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .text {
  padding-left: 20px !important;
  padding-right: 28px !important;
  line-height: 28px;
  display: flex;
  justify-content: space-between;
}
</style>