<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="textQuery()">查询</el-button>
      <el-button size="small" @click="addApplyClick">制作结算申请单</el-button>
      <el-button size="small" @click="cancelApplyClick">撤销结算申请单</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="22">
          <el-row>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isshow"
              :code="paramQuery.repairOrderStatus"
              :lookuptype="lookuptype.repairOrderTypeCode"
              :labelName="lookupValuelable.repairOrderStatusLable"
              @changeCode="getRepairStatus"
            />
            <!-- 施工单号 -->
            <el-col :span="6">
              <label>施工单号</label>
              <el-input v-model="paramQuery.repairOrderCode" placeholder="请输入" size="small" />
            </el-col>
            <!-- 日期起止 -->
            <el-col :span="6">
              <label class="demonstration">送修日期</label>
              <el-date-picker
                v-model="orderDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd HH:mm:ss"
                size="small"
              ></el-date-picker>
            </el-col>
            <!-- 报修人 -->
            <el-col :span="6">
              <label>报修人</label>
              <el-input v-model="paramQuery.repairMan" placeholder="请输入" size="small" />
            </el-col>
            <!-- 报修人电话 -->
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button :icon="toggleParamIcon" @click="loadmore">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam">
          <el-row>
            <el-col :span="6">
              <label>报修人电话</label>
              <el-input v-model="paramQuery.repairTel" placeholder="请输入" size="small" />
            </el-col>
            <!-- vin -->
            <el-col :span="6">
              <label>vin码</label>
              <el-input v-model="paramQuery.vin" placeholder="请输入" size="small" />
            </el-col>

            <!-- 车牌号 -->
            <el-col :span="6">
              <label>车牌号</label>
              <el-input v-model="paramQuery.carLicense" placeholder="请输入" size="small" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <!-- 已提交结算申请 -->
      <!-- <el-col :span="6">
          <el-checkbox label="已结算" v-model="paramQuery.isBalanceFlag"></el-checkbox>
      </el-col>-->
    </div>
    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      v-loading="listLoading"
      :row-class-name="tableRowClassName"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      highlight-current-row
      :height="tableHeight"
      ref="multipleTable"
      @row-click="rowClickModel"
    >
      <el-table-column align="center" label="序号" width="60" type="index" prop="id"></el-table-column>
      <el-table-column label="施工单号" prop="repairOrderCode" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template>
      </el-table-column>
      <el-table-column label="车牌号" prop="carLicense" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.carLicense }}</template>
      </el-table-column>
      <el-table-column label="VIN码" prop="vin" align="center" width="180">
        <template slot-scope="scope">{{ scope.row.vin }}</template>
      </el-table-column>
      <el-table-column label="报修人" prop="repairMan" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.repairMan }}</template>
      </el-table-column>
      <el-table-column label="报修人电话" prop="repairTel" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.repairTel }}</template>
      </el-table-column>
      <el-table-column label="报告修时间" prop="repairTime" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.repairTime }}</template>
      </el-table-column>
      <el-table-column label="预计交车时间" prop="preGetDate" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.preGetDate }}</template>
      </el-table-column>
      <el-table-column label="结算状态" prop="isGatherName" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.isGatherName }}</template>
      </el-table-column>
      <el-table-column label="施工单状态" prop="repairStatusName" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.repairStatusName }}</template>
      </el-table-column>
      <el-table-column label="是否事故车" prop="isAccident" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.isAccident }}</template>
      </el-table-column>
      <el-table-column label="服务顾问名称" prop="saName" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.saName }}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      prev-text="上一页"
      next-text="下一页"
      layout="prev, pager, next, sizes, ->, total"
      ref="paginationHeight"
      :total="pageTotal"
      :current-page.sync="pageIndex"
      style="margin-bottom:10px"
    ></el-pagination>
    <!-- </div> -->
  </div>
</template>
<script>
import LookupValue from "@/components/org/LookupValue";
import { apiRepairBalanceApply, seApis } from "@/api/graphQLApiList/se";
import {
  doQueryAll,
  cancelApply,
  doStatusQuery,
  doMainRepairQuery,
  doUpdateQuery
} from "@/api/se/repair/serviceRepairBalanceApply";
import { doQueryList } from "@/api/se/process/workorder/repairWorkOrderList";
import repairBalanceApplyDetail from "./repairBalanceApplyDetail";
export default {
  name: "sewxjssq",
  components: {
    LookupValue
  },
  created() {},

  data() {
    return {
      toggleParamIcon: "el-icon-minus",
      toggleParam: false,
      repairOrderCode: "",
      isAccident: "",
      //记录选中行数据
      paramRow: {
        oemCode: "",
        groupCode: "",
        repairGatheringId: "",
        repairOrderId: "",
        repairOrderCode: "",
        vin: "",
        pactCompanyId: "",
        repairBalanceCode: "",
        repairOrderStatus: "",
        isGather: ""
      },
      //查询网格高度
      tableHeight: 340,
      //设置网格总共的条数，查询完更改
      pageTotal: 0,
      listLoading: false,
      code: "1", //工单状态默认值
      isMul: false, //下拉框是否多选
      isshow: true, //是否显示值列表名称
      lookupValuelable: {
        repairOrderStatusLable: "施工单状态"
      },
      lookuptype: {
        repairOrderTypeCode: "SE0026"
      },
      list: [], //查询结果
      pageIndex: 1,
      pageSize: 10,
      orderDate: [],
      detailQuery: [],
      mainRepairQueryList: {
        repairOrderId: ""
      },
      statusQueryList: {
        repairOrderId: "",
        queryType: "1"
      },
      paramQuery: {
        isAccurate: "0",
        queryType: "4000401",
        repairOrderStatus: "",
        repairOrderCode: "",
        repairMan: "",
        repairTel: "",
        carLicense: "",
        saEmpId: "",
        vin: "",
        repairTimeBeg: "",
        repairTimeEnd: ""
      },
      paramCancel: {
        oemCode: "",
        groupcode: "",
        repairorderid: "",
        updatecontrolid: "",
        repairgatheringid: ""
      },
      isSuccess: false,
      errorMsg: ""
    };
  },
  methods: {
    //制作结算申请单按钮
    addApplyClick() {
      //校验是否选中行
      if (this.paramCancel.repairgatheringid == "") {
        this.$message({
          type: "warning",
          message: `请选择结算单！`
        });
        return;
      }
      this.statusQuery();
    },
    //保存结果显示
    dialogBigSaveAfter() {
      if (this.isSuccess == true) {
        //保存成功，弹窗消失
        this.$alert("保存成功", "提示", {
          confirmButtonText: "确定"
        });
      } else {
        //保存失败
        this.$alert(this.errorMsg, "提示", {
          confirmButtonText: "确定"
        });
      }
    },
    //状态查询
    statusQuery() {
      const that = this;
      doStatusQuery(that.pageSize, that.pageIndex, that.statusQueryList).then(
        response => {
          if (
            response.data[
              apiRepairBalanceApply.seBuRepairOrderQueryStatus.ServiceCode
            ].result === "1"
          ) {
            var arr =
              response.data[
                apiRepairBalanceApply.seBuRepairOrderQueryStatus.ServiceCode
              ].rows;
            //判断此单是否有数据
            if (arr.length == 0) {
              that.$alert("估价单不存在，请刷新后重试", "提示", {
                confirmButtonText: "确定"
              });
              return;
            }
            //判断该单是否有作废
            if (arr[0].repairOrderStatus == "31014") {
              that.$alert("该估价单已经作废，不能修改！", "提示", {
                confirmButtonText: "确定"
              });
            }
            if (
              arr[0].repairOrderStatus != "31010" &&
              arr[0].repairOrderStatus != "31011"
            ) {
              if (arr[0].isGather == "31102") {
                that.$alert("该车不需要做结算申请", "提示", {
                  confirmButtonText: "确定"
                });
                return;
              }
              doMainRepairQuery(
                that.pageSize,
                that.pageIndex,
                that.mainRepairQueryList
              ).then(response => {
                if (
                  response.data[
                    apiRepairBalanceApply.fiBuRepairGatheringQueryApplyRepairFin
                      .ServiceCode
                  ].result === "1"
                ) {
                  var detailQuery =
                    response.data[
                      apiRepairBalanceApply
                        .fiBuRepairGatheringQueryApplyRepairFin.ServiceCode
                    ].rows;
                }
                var dt = detailQuery[0];
                var orderclaim = dt.orderclaim;
                var partapplynotout = dt.partapplynotout;
                var partreturninfo = dt.partreturninfo;
                var workitemfinsh = dt.workitemfinsh;

                //判断备件的退货申请是否全部入库
                if (partreturninfo.length > 0) {
                  var str = "";
                  for (var i = 0; i < partreturninfo.length; i++) {
                    str +=
                      "备件名称:" +
                      partreturninfo[i].partName +
                      ";" +
                      "申请退货数量是:" +
                      partreturninfo[i].applyReturnQty +
                      ";" +
                      "实际退货是:" +
                      partreturninfo[i].returnQty +
                      ";";
                  }
                  that.$alert(
                    "备件退货申请备件尚未入库，不能提交结算申请！" + str,
                    "提示",
                    {
                      confirmButtonText: "确定"
                    }
                  );
                  return;
                }

                //判断当前所有的维修项目是否都已质检
                if (workitemfinsh.length > 0) {
                  var str2 = "";
                  for (var i = 0; i < workitemfinsh.length; i++) {
                    str2 += workitemfinsh[i].wiName;
                  }
                  that.$alert(
                    "未质检，请先复核或派工！以下项目还未质检：" + str2,
                    "提示",
                    {
                      confirmButtonText: "确定"
                    }
                  );
                  return;
                }

                //判断是否事故车
                if (that.isAccident == "1") {
                  debugger;
                  if (orderclaim.length > 0) {
                    if (
                      orderclaim[0].compensateStatue != "1" ||
                      orderclaim[0].compensateStatue != "2"
                    ) {
                      that.$alert("保险索赔单未提交，请先提交！", "提示", {
                        confirmButtonText: "确定"
                      });
                      return;
                    }
                  }
                }

                //获取备件需求没有完全出库的备件信息
                if (partapplynotout.length > 0) {
                  var guarantee = "";
                  var RecallCaseCode = "";
                  //var MC = ""
                  var str3 = "";
                  for (var i = 0; i < partapplynotout.length; i++) {
                    str3 +=
                      partapplynotout[i].partName +
                      "还有" +
                      partapplynotout[i].notoutpart +
                      "个未出库;";
                    if (
                      partapplynotout[i].recallCaseCode != "" &&
                      partapplynotout[i].recallCaseCode != null
                    ) {
                      RecallCaseCode += partapplynotout[i].partName;
                    }
                    if (
                      partapplynotout[i].payKind == "31302" ||
                      partapplynotout[i].payKind == "31303"
                    ) {
                      guarantee += partapplynotout[i].partName;
                    }
                    // 胡兵说暂时不用
                    // if (partapplynotout[i].servicePackgeCode == false) {
                    //   MC += partapplynotout[i].partName;
                    // }
                  }
                  if (guarantee != "" && guarantee != null) {
                    that.$alert(
                      "属于保修或免保的备件必须先出库，才能提交结算申请！以下备件属于保修或免保的备件：" +
                        guarantee +
                        str3,
                      "提示",
                      {
                        confirmButtonText: "确定"
                      }
                    );
                    return;
                  } else if (RecallCaseCode != "" && RecallCaseCode != null) {
                    that.$alert(
                      "属于召回专案的备件必须先出库，才能提交结算申请！以下备件属于找回专案的备件：" +
                        RecallCaseCode +
                        str3,
                      "提示",
                      {
                        confirmButtonText: "确定"
                      }
                    );
                    return;
                  } else {
                    str3 +=
                      "如继续提交结算申请，未出库的备件将被删除！是否继续提交结算申请？";
                    that
                      .$confirm(str3, "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                      })
                      .then(() => {
                        doUpdateQuery(that.mainRepairQueryList).then(
                          response => {
                            if (
                              response.data[
                                apiRepairBalanceApply
                                  .fiBuRepairGatheringMutationApplyBeforPartQty
                                  .ServiceCode
                              ].result === "1"
                            ) {
                              //校验是否可以提交结算申请
                              if (that.paramRow.repairOrderStatus == "31016") {
                                //质检完毕
                                if (that.paramRow.isGather == "31102") {
                                  //已结算
                                  that.$alert(
                                    "该单据已经结算,只能进行浏览!",
                                    "提示",
                                    {
                                      confirmButtonText: "确定"
                                    }
                                  );
                                  //跳转
                                  that.$router.push({
                                    path: "/se/repairBalanceApplyDetail",
                                    name: "repairBalanceApplyDetail",
                                    params: {
                                      repairGatheringId:
                                        that.paramRow.repairGatheringId,
                                      repairOrderId:
                                        that.paramRow.repairOrderId,
                                      repairOrderCode:
                                        that.paramRow.repairOrderCode,
                                      vin: that.paramRow.vin,
                                      pactCompanyId:
                                        that.paramRow.pactCompanyId,
                                      repairBalanceCode:
                                        that.paramRow.repairBalanceCode,
                                      actionType: "view"
                                    }
                                  });
                                  //this.$refs.repairBalanceApplyDetail.queryLoadDetail(1);
                                } else {
                                  //后台校验-暂时省略,字段不全(查询估价单返回结果字段不全)
                                  //跳转
                                  that.$router.push({
                                    path: "/se/repairBalanceApplyDetail",
                                    name: "repairBalanceApplyDetail",
                                    params: {
                                      repairGatheringId:
                                        that.paramRow.repairGatheringId,
                                      repairOrderId:
                                        that.paramRow.repairOrderId,
                                      repairOrderCode:
                                        that.paramRow.repairOrderCode,
                                      vin: that.paramRow.vin,
                                      pactCompanyId:
                                        that.paramRow.pactCompanyId,
                                      repairBalanceCode:
                                        that.paramRow.repairBalanceCode,
                                      actionType: "add"
                                    }
                                  });
                                }
                                //this.$refs.repairBalanceApplyDetail.queryLoadDetail(1);
                              } else if (
                                that.paramRow.repairOrderStatus == "31011"
                              ) {
                                //已交车
                                that.$alert(
                                  "该单据已经交车,只能进行浏览!",
                                  "提示",
                                  {
                                    confirmButtonText: "确定"
                                  }
                                );

                                that.$router.push({
                                  path: "/se/repairBalanceApplyDetail",
                                  name: "repairBalanceApplyDetail",
                                  params: {
                                    repairGatheringId:
                                      that.paramRow.repairGatheringId,
                                    repairOrderId: that.paramRow.repairOrderId,
                                    repairOrderCode:
                                      that.paramRow.repairOrderCode,
                                    vin: that.paramRow.vin,
                                    pactCompanyId: that.paramRow.pactCompanyId,
                                    repairBalanceCode:
                                      that.paramRow.repairBalanceCode,
                                    actionType: "view"
                                  }
                                });
                                //this.$refs.repairBalanceApplyDetail.queryLoadDetail(1);
                              } else if (
                                that.paramRow.repairOrderStatus == "31010"
                              ) {
                                //已提交结算申请
                                that.$alert(
                                  "该单据已经提交结算申请,只能进行浏览!",
                                  "提示",
                                  {
                                    confirmButtonText: "确定"
                                  }
                                );

                                that.$router.push({
                                  path: "/se/repairBalanceApplyDetail",
                                  name: "repairBalanceApplyDetail",
                                  params: {
                                    repairGatheringId:
                                      that.paramRow.repairGatheringId,
                                    repairOrderId: that.paramRow.repairOrderId,
                                    repairOrderCode:
                                      that.paramRow.repairOrderCode,
                                    vin: that.paramRow.vin,
                                    pactCompanyId: that.paramRow.pactCompanyId,
                                    repairBalanceCode:
                                      that.paramRow.repairBalanceCode,
                                    actionType: "view"
                                  }
                                });
                              } else {
                                //其他
                                that.$alert(
                                  "该单据未质检完毕,无法提交结算申请!",
                                  "提示",
                                  {
                                    confirmButtonText: "确定"
                                  }
                                );
                                return;
                              }
                            } else {
                              return;
                            }
                          }
                        );
                      })
                      .catch(() => {
                        that.$message({
                          type: "info",
                          message: "未出库的备件删除失败,无法继续提交申请！"
                        });
                        return;
                      });
                  }
                } else {
                  //校验是否可以提交结算申请
                  if (that.paramRow.repairOrderStatus == "31016") {
                    //质检完毕
                    if (that.paramRow.isGather == "31102") {
                      //已结算
                      that.$alert("该单据已经结算,只能进行浏览!", "提示", {
                        confirmButtonText: "确定"
                      });
                      //跳转
                      that.$router.push({
                        path: "/se/repairBalanceApplyDetail",
                        name: "repairBalanceApplyDetail",
                        params: {
                          repairGatheringId: that.paramRow.repairGatheringId,
                          repairOrderId: that.paramRow.repairOrderId,
                          repairOrderCode: that.paramRow.repairOrderCode,
                          vin: that.paramRow.vin,
                          pactCompanyId: that.paramRow.pactCompanyId,
                          repairBalanceCode: that.paramRow.repairBalanceCode,
                          actionType: "view"
                        }
                      });
                      //this.$refs.repairBalanceApplyDetail.queryLoadDetail(1);
                    } else {
                      //后台校验-暂时省略,字段不全(查询估价单返回结果字段不全)
                      //跳转
                      that.$router.push({
                        path: "/se/repairBalanceApplyDetail",
                        name: "repairBalanceApplyDetail",
                        params: {
                          repairGatheringId: that.paramRow.repairGatheringId,
                          repairOrderId: that.paramRow.repairOrderId,
                          repairOrderCode: that.paramRow.repairOrderCode,
                          vin: that.paramRow.vin,
                          pactCompanyId: that.paramRow.pactCompanyId,
                          repairBalanceCode: that.paramRow.repairBalanceCode,
                          actionType: "add"
                        }
                      });
                    }
                    //this.$refs.repairBalanceApplyDetail.queryLoadDetail(1);
                  } else if (that.paramRow.repairOrderStatus == "31011") {
                    //已交车
                    that.$alert("该单据已经交车,只能进行浏览!", "提示", {
                      confirmButtonText: "确定"
                    });

                    that.$router.push({
                      path: "/se/repairBalanceApplyDetail",
                      name: "repairBalanceApplyDetail",
                      params: {
                        repairGatheringId: that.paramRow.repairGatheringId,
                        repairOrderId: that.paramRow.repairOrderId,
                        repairOrderCode: that.paramRow.repairOrderCode,
                        vin: that.paramRow.vin,
                        pactCompanyId: that.paramRow.pactCompanyId,
                        repairBalanceCode: that.paramRow.repairBalanceCode,
                        actionType: "view"
                      }
                    });
                    //this.$refs.repairBalanceApplyDetail.queryLoadDetail(1);
                  } else if (that.paramRow.repairOrderStatus == "31010") {
                    //已提交结算申请
                    that.$alert(
                      "该单据已经提交结算申请,只能进行浏览!",
                      "提示",
                      {
                        confirmButtonText: "确定"
                      }
                    );

                    that.$router.push({
                      path: "/se/repairBalanceApplyDetail",
                      name: "repairBalanceApplyDetail",
                      params: {
                        repairGatheringId: that.paramRow.repairGatheringId,
                        repairOrderId: that.paramRow.repairOrderId,
                        repairOrderCode: that.paramRow.repairOrderCode,
                        vin: that.paramRow.vin,
                        pactCompanyId: that.paramRow.pactCompanyId,
                        repairBalanceCode: that.paramRow.repairBalanceCode,
                        actionType: "view"
                      }
                    });
                  } else {
                    //其他
                    that.$alert("该单据未质检完毕,无法提交结算申请!", "提示", {
                      confirmButtonText: "确定"
                    });
                    return;
                  }
                }
              });
            }
          }
        }
      );
    },

    //撤销结算申请单
    cancelApplyClick() {
      //校验是否选中行
      if (this.paramCancel.repairgatheringid == "") {
        this.$message({
          type: "warning",
          message: `请选择删除行！`
        });
        return;
      }

      this.isSuccess = false;
      const that = this;
      cancelApply(this.paramCancel).then(response => {
        that.listLoading = false;
        if (
          response.data[
            apiRepairBalanceApply.seBuRepairBalanceApplyCancel.ServiceCode
          ].result === "1"
        ) {
          this.isSuccess = true;
        } else {
          this.isSuccess = false;
          this.errorMsg =
            response.data[
              apiRepairBalanceApply.seBuRepairBalanceApplyCancel.ServiceCode
            ].msg;
        }
        this.dialogBigSaveAfter();
        this.textQuery();
      });
    },

    //单击行事件
    rowClickModel(val) {
      this.isAccident = val.isAccident;
      this.mainRepairQueryList.repairOrderId = val.repairOrderId;
      this.statusQueryList.repairOrderId = val.repairOrderId;
      this.paramCancel.repairOrderId = val.repairOrderId;
      this.paramCancel.updatecontrolid = val.updateControlId;
      this.paramCancel.repairgatheringid = val.repairGatheringId;
      this.paramRow.repairGatheringId = val.repairGatheringId;
      this.paramRow.repairOrderId = val.repairOrderId;
      this.paramRow.repairOrderCode = val.repairOrderCode;
      this.paramRow.vin = val.vin;
      this.paramRow.pactCompanyId = val.pactCompanyId;
      this.paramRow.repairBalanceCode = val.repairBalanceCode;
      this.paramRow.repairOrderStatus = val.repairOrderStatus;
      this.paramRow.isGather = val.isGather;
    },
    reset() {
      this.paramQuery.repairOrderStatus = "";
      this.paramQuery.repairOrderCode = "";
      this.paramQuery.repairMan = "";
      this.paramQuery.repairTel = "";
      this.paramQuery.carLicense = "";
      this.paramQuery.saEmpId = "";
      this.paramQuery.vin = "";
      this.orderDate = [];
    },

    //查询结算数据
    textQuery(page) {
      //清空选中行
      this.paramCancel.repairorderid = "";
      this.paramCancel.updatecontrolid = "";
      this.paramCancel.repairgatheringid = "";
      this.paramRow.repairGatheringId = "";
      this.paramRow.repairOrderId = "";
      this.paramRow.repairOrderCode = "";
      this.paramRow.vin = "";
      this.paramRow.pactCompanyId = "";
      this.paramRow.repairBalanceCode = "";
      this.paramRow.repairOrderStatus = "";
      this.paramRow.isGather = "";
      if (this.orderDate.length == 0) {
        this.$message({
          message: "请选择送修日期",
          type: "warning",
          duration: 2000
        });
        return;
      }
      this.paramQuery.repairTimeBeg = this.orderDate[0];
      this.paramQuery.repairTimeEnd = this.orderDate[1];
      this.listLoading = true;
      const that = this;
      doQueryList(that.pageSize, page || that.pageIndex, that.paramQuery).then(
        response => {
          if (
            response.data[seApis.seBuRepairOrderQueryMain.ServiceCode]
              .result === "1"
          ) {
            if (page) {
              //查询完返回指定的page页数
              that.pageIndex = page;
            }
            that.pageTotal =
              response.data[
                seApis.seBuRepairOrderQueryMain.ServiceCode
              ].records;
            that.list =
              response.data[seApis.seBuRepairOrderQueryMain.ServiceCode].rows;
            that.listLoading = false;
          } else {
            that.listLoading = false;
          }
        }
      );
    },
    //把每一行的索引放进row
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    getRepairStatus(val) {
      this.paramQuery.repairOrderStatus = val;
    },
    //改变页现实的条数并重新查询
    handleSizeChange(val) {
      this.pageSize = val;
      this.textQuery();
    },
    //翻页
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.textQuery();
    },
    //更多
    loadmore() {
      this.toggleParam = !this.toggleParam;
      if (!this.toggleParam) {
        this.toggleParamIcon = "el-icon-minus";
      } else {
        this.toggleParamIcon = "el-icon-plus";
      }
    }
  }
};
</script>

