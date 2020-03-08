<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="QueryList">查询</el-button>
      <el-button size="small">导出</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title" ref="conTitleHeight">查询条件</div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <el-col :span="6">
          <label>施工单号</label>
          <el-input size="small" v-model="listQuery.dataInfo.repairOrderCode" placeholder="请输入内容" />
        </el-col>

        <el-col :span="6">
          <label>车牌号</label>
          <el-input size="small" v-model="listQuery.dataInfo.carLicense" placeholder="请输入内容" />
        </el-col>

        <el-col :span="6">
          <label>VIN码</label>
          <el-input size="small" v-model="listQuery.dataInfo.vin" placeholder="请输入内容" />
        </el-col>

        <el-col :span="6">
          <el-button icon="el-icon-plus" @click="loadmore">更多</el-button>
        </el-col>
      </el-row>

      <el-row :gutter="26" v-show="!pic">
        <el-col :span="6">
          <span class="demonstration">送修时间</span>
          <el-date-picker
            v-model="listQuery.RepairDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            @change="getRepairDate"
          ></el-date-picker>
        </el-col>

        <el-col :span="6">
          <span class="demonstration">交车时间</span>
          <el-date-picker
            v-model="listQuery.DeliveryDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            @change="getDeliveryDate"
          ></el-date-picker>
        </el-col>

        <el-col :span="6">
          <label>经销商</label>
          <el-input
            v-model="listQuery.dataInfo.dlrId"
            suffix-icon="el-icon-search"
            placeholder="请选择"
            size="small"
            @focus="openComQueChoMu"
          />
        </el-col>

        <seComQueChoMu
          ref="seComQueChoMu"
          :seComQueChoMuDlrVisible="seComQueChoMuDlrVisible"
          @sentCode="getComQueChoMu"
          @close="closeComQueChoMu"
        />

        <carBrand
          :isMul="false"
          :span="6"
          :code="listQuery.dataInfo.carBrandCode"
          @changeCode="getBrandCode"
        ></carBrand>
      </el-row>

      <el-row :gutter="26" v-show="!pic">
        <LookupValue
          :span="6"
          :isMul="isMul"
          :isShowLabel="isshow"
          :code="listQuery.dataInfo.businessType"
          :lookuptype="lookuptype1"
          :labelName="lookupValuelable.name1"
          @changeCode="getBusinessType"
        />

        <LookupValue
          :span="6"
          :isMul="isMul"
          :isShowLabel="isshow"
          :code="listQuery.dataInfo.repairTypeCode"
          :lookuptype="lookuptype2"
          :labelName="lookupValuelable.name2"
          @changeCode="getRepairTypeCode"
        />

        <seCommonQueryServiceSaDDL
          :span="6"
          :isMul="isMul"
          @changeCode="getServiceSaDDL"
          :labelName="lookupValuelable.name3"
          :code="listQuery.dataInfo.saEmpId"
        />

        <el-col :span="6">
          <el-checkbox :span="6" v-model="checked" @change="changeAdd">仅追加项</el-checkbox>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-container>
      <el-aside width="200px">
        <el-tree
          :data="treeData"
          :props="defaultProps"
          :default-expanded-keys="treeExpandKeys"
          node-key="id"
          @node-click="handleTreeNodeClick"
        ></el-tree>
      </el-aside>
      <el-main>
        <div>
          <div class="kk" ref="userHeight1">维修工单</div>
          <el-table
            v-loading="listLoading"
            ref="multipleTable"
            :data="list2"
            element-loading-text="Loading"
            border
            fit
            stripe
            :header-cell-style="tableHeaderRowClassName"
            highlight-current-row
            :height="tableHeight3"
          >
            <el-table-column align="center" label="序号" width="60">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column label="专营店" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.dlrShortName }}</template>
            </el-table-column>
            <el-table-column label="施工单号" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.repairOrderCode }}</template>
            </el-table-column>
            <el-table-column label="车牌号" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.carLicense }}</template>
            </el-table-column>
            <el-table-column label="VIN码" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.vin }}</template>
            </el-table-column>
            <el-table-column label="车身颜色" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.carColorName }}</template>
            </el-table-column>
            <el-table-column label="服务代表" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.saName }}</template>
            </el-table-column>
            <el-table-column label="送修人" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.repairMan }}</template>
            </el-table-column>
            <el-table-column label="送修人电话" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.repairTel }}</template>
            </el-table-column>
            <el-table-column label="车型" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.carTypeCode }}</template>
            </el-table-column>
            <el-table-column label="行驶里程" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.mileage }}</template>
            </el-table-column>
            <el-table-column label="购车日期" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.buyDate }}</template>
            </el-table-column>
            <el-table-column label="送修时间" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.repairTime }}</template>
            </el-table-column>
            <el-table-column label="维修交车日期" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.deliveryDate }}</template>
            </el-table-column>
            <el-table-column label="故障现象描述" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.csDesc }}</template>
            </el-table-column>
            <el-table-column label="处理方法" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.disposeInfo }}</template>
            </el-table-column>
            <el-table-column label="费用合计" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.amountSum }}</template>
            </el-table-column>
            <el-table-column label="工时费合计" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.wiAmountSum }}</template>
            </el-table-column>
            <el-table-column label="零件费合计" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.partAmountSum }}</template>
            </el-table-column>
            <el-table-column label="其他费合计" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.otherAmountSum }}</template>
            </el-table-column>
            <el-table-column label="费用预估合计" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.dueAmount }}</template>
            </el-table-column>
            <el-table-column label="工时费预估" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.wiDueAmount }}</template>
            </el-table-column>
            <el-table-column label="零件费预估" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.partDueAmount }}</template>
            </el-table-column>
            <el-table-column label="其他费预估" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.otherDueAmount }}</template>
            </el-table-column>
            <el-table-column label="实收金额" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.factAmount }}</template>
            </el-table-column>
            <el-table-column label="优惠费合计" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.disparityPrice }}</template>
            </el-table-column>
          </el-table>
        </div>

        <div>
          <div class="kk" ref="userHeight2">维修工时明细</div>
          <el-table
            v-loading="listLoading"
            ref="multipleTable"
            :data="list2"
            element-loading-text="Loading"
            border
            fit
            stripe
            :header-cell-style="tableHeaderRowClassName"
            highlight-current-row
            :height="tableHeight3"
          >
            <el-table-column align="center" label="序号" width="60">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column label="施工单号" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.repairOrderCode }}</template>
            </el-table-column>
            <el-table-column label="车牌号" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.carLicense }}</template>
            </el-table-column>
            <el-table-column label="工时编码" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.wiCode }}</template>
            </el-table-column>
            <el-table-column label="维修内容" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.wiName }}</template>
            </el-table-column>
            <el-table-column label="付费性质" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.payKindName }}</template>
            </el-table-column>
            <el-table-column label="业务类别" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.businessTypeName }}</template>
            </el-table-column>
            <el-table-column label="工时数" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.saleWorkQty }}</template>
            </el-table-column>
            <el-table-column label="工时单价" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.wiPrice }}</template>
            </el-table-column>
            <el-table-column label="工时费合计" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.wiAmountSum }}</template>
            </el-table-column>
            <el-table-column label="工时费预估" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.wiDueAmount }}</template>
            </el-table-column>
            <el-table-column label="维修类别" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.repairTypeName }}</template>
            </el-table-column>
            <el-table-column label="维修班组" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.repairGroup }}</template>
            </el-table-column>
            <el-table-column label="维修技师" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.repairName }}</template>
            </el-table-column>
            <el-table-column label="质检员" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.checkEmpName }}</template>
            </el-table-column>
            <el-table-column label="质检时间" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.checkDate }}</template>
            </el-table-column>
            <el-table-column label="总检签字" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.qualityCheckMan }}</template>
            </el-table-column>
            <el-table-column label="总检时间" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.qualityFinishDate }}</template>
            </el-table-column>
          </el-table>
        </div>

        <div>
          <div class="kk" ref="userHeight3">维修备件明细</div>
          <el-table
            v-loading="listLoading"
            ref="multipleTable"
            :data="list2"
            element-loading-text="Loading"
            border
            fit
            stripe
            :header-cell-style="tableHeaderRowClassName"
            highlight-current-row
            :height="tableHeight3"
          >
            <el-table-column align="center" label="序号" width="60">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column label="施工单号" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.repairOrderCode }}</template>
            </el-table-column>
            <el-table-column label="车牌号" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailwi.carLicense }}</template>
            </el-table-column>
            <el-table-column label="备件编号" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.partNo }}</template>
            </el-table-column>
            <el-table-column label="备件名称" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.partName }}</template>
            </el-table-column>
            <el-table-column label="付费性质" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.payKindName }}</template>
            </el-table-column>
            <el-table-column label="业务类别" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.businessTypeName }}</template>
            </el-table-column>
            <el-table-column label="数量" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.partQty }}</template>
            </el-table-column>
            <el-table-column label="单价" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.partPrice }}</template>
            </el-table-column>
            <el-table-column label="备件费合计" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.partAmountSum }}</template>
            </el-table-column>
            <el-table-column label="备件费预估" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.partDueAmount }}</template>
            </el-table-column>
            <el-table-column label="维修类别" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.repairTypeName }}</template>
            </el-table-column>
            <el-table-column label="出库数量" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.outQty }}</template>
            </el-table-column>
            <el-table-column label="退库数量" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.returnQty }}</template>
            </el-table-column>
            <el-table-column label="不含税成本" v-if="colShow" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.costAmount }}</template>
            </el-table-column>
            <el-table-column label="含税成本" v-if="colShow" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.priceAmount }}</template>
            </el-table-column>
          </el-table>
        </div>

        <div>
          <div class="kk" ref="userHeight4">其他费用明细</div>
          <el-table
            v-loading="listLoading"
            ref="multipleTable"
            :data="list2"
            element-loading-text="Loading"
            border
            fit
            stripe
            :header-cell-style="tableHeaderRowClassName"
            highlight-current-row
            :height="tableHeight3"
          >
            <el-table-column align="center" label="序号" width="60">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column label="施工单号" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.repairordercode }}</template>
            </el-table-column>
            <el-table-column label="车牌号" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.carLicense }}</template>
            </el-table-column>
            <el-table-column label="其他费用类别" v-if="true" width="150">
              <!-- <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template> -->
            </el-table-column>
            <el-table-column label="付费性质" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.payKindName }}</template>
            </el-table-column>
            <el-table-column label="业务类别" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.businessTypeName }}</template>
            </el-table-column>
            <el-table-column label="其他费用" v-if="true" width="150">
              <!-- <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template> -->
            </el-table-column>
            <el-table-column label="备注" v-if="true" width="150">
              <template slot-scope="scope">{{ scope.row.workbalancedetailpart.note }}</template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import LookupValue from "@/components/org/LookupValue/index";
import { apiSeReport } from "@/api/graphQLApiList/se";
import {
  doQueryList,
  doQueryListDetail
} from "@/api/se/basedata/repair/seRepairReportQueryList";
import seCommonQueryServiceSaDDL from "@/components/se/seCommonQueryServiceSaDDL";
import seComQueChoMu from "@/components/se/seComQueChoMu";
import carBrand from "@/components/org/carBrand/carBrand";
import { the_Height } from "@/components/se/seMixins/makeHeight";

export default {
  mixins: [the_Height],
  components: {
    LookupValue,
    seCommonQueryServiceSaDDL,
    seComQueChoMu,
    carBrand
  },
  data() {
    return {
      tableHeight3: 250,
      colShow: false,
      listLoading: false,
      checked: false,
      pic: true,
      list: null,
      list2: null,
      isMul: false,
      isshow: true,
      code: "1",
      seComQueChoMuDlrVisible: false,
      lookuptype1: "SE0005",
      lookuptype2: "SE0010",
      lookupValuelable: {
        name1: "业务类别",
        name2: "维修类别",
        name3: "服务代表"
      },
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        RepairDate: "",
        DeliveryDate: "",
        dataInfo: {
          oemCode: "",
          groupCode: "",
          dlrId: "",
          begRepairTime: "",
          endRepairTime: "",
          gatheringMan: "",
          begDeliveryDate: "",
          endDeliveryDate: "",
          carBrandCode: "",
          custName: "",
          vin: "",
          carLicense: "",
          payKind: "",
          businessType: "",
          repairTypeCode: "",
          saEmpId: "",
          isAdd: "",
          isEnable: "",
          repairOrderCode: "",
          hasRight: "0"
        }
      },
      treeData: [
        {
          id: "0",
          label: "列表",
          deep: 0,
          children: []
        }
      ],
      treeExpandKeys: ["0"],
      defaultProps: {},
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },

  created() {
    window.addEventListener("resize", () => {
      this.setTableHeight(true);
    });
    this.$nextTick(() => {
      this.setTableHeight();
    });
  },
  methods: {
    loadmore() {
      if (this.pic) {
        this.pic = false;
      } else {
        this.pic = true;
      }
    },
    handleTreeNodeClick(data) {
      if (data.deep == 0) {
        this.QueryList();
      } else if (data.deep == 1) {
        this.queryFindDetail(data.label);
      } else if (data.deep == 2) {
        this.queryFindDetail(data.value);
      }
    },
    getRepairDate(val) {
      (this.listQuery.dataInfo.begRepairTime = val[0]),
        (this.listQuery.dataInfo.endRepairTime = val[1]);
    },
    getDeliveryDate(val) {
      (this.listQuery.dataInfo.begDeliveryDate = val[0]),
        (this.listQuery.dataInfo.endDeliveryDate = val[1]);
    },
    QueryList() {
      console.log(this.listQuery.dataInfo);
      if (this.listQuery.dataInfo.hasRight == "1") {
        this.colShow = true;
      } else {
        this.colShow = false;
      }
      this.listLoading = true;
      const that = this;
      doQueryList(this.listQuery.dataInfo).then(response => {
        if (
          response.data.seRepairReportQueryListFindAll.result === "1"
          // &&
          // response.data.seRepairReportQueryListFindAll.rows != ""
        ) {
          console.log(
            response.data[
              apiSeReport.seRepairReportQueryListFindAll.ServiceCode
            ].rows
          );
          that.list =
            response.data[
              apiSeReport.seRepairReportQueryListFindAll.ServiceCode
            ].rows;

          if (
            //第一层树创建
            response.data[
              apiSeReport.seRepairReportQueryListFindAll.ServiceCode
            ].rows
          ) {
            var treeChilds = [];
            response.data[
              apiSeReport.seRepairReportQueryListFindAll.ServiceCode
            ].rows.forEach(row => {
              var node = {
                id: null,
                label: row.repairDeliveryDate,
                deep: 1,
                children: []
              };
              for (var i in treeChilds) {
                if (row.repairDeliveryDate != treeChilds[i].label) {
                } else {
                  treeChilds.pop(i); //重复则删除该节点
                }
              }
              treeChilds.push(node);
            });
            this.treeData[0].children = treeChilds;

            //第二层树创建
            if (
              response.data[
                apiSeReport.seRepairReportQueryListFindAll.ServiceCode
              ].rows
            ) {
              var Boat = [];
              response.data[
                apiSeReport.seRepairReportQueryListFindAll.ServiceCode
              ].rows.forEach(row => {
                var node = {
                  id: null,
                  label: row.carLicense + " " + row.repairOrderCode,
                  value: row.repairOrderCode,
                  deep: 2,
                  children: []
                };
                for (var i = 0; i < this.treeData[0].children.length; i++) {
                  if (
                    row.repairDeliveryDate == this.treeData[0].children[i].label
                  ) {
                    Boat = this.treeData[0].children[i].children;
                    Boat.push(node);
                    this.treeData[0].children[i].children = Boat;
                    break;
                  }
                }
              });
            }
          }
        }
        that.listLoading = false;
      });
    },
    queryFindDetail(val) {
      this.listLoading = true;
      const that = this;
      doQueryListDetail(
        that.listQuery.pageSize,
        that.listQuery.pageIndex,
        val
      ).then(response => {
        if (
          response.data.seRepairReportQueryListDetail.result === "1"
          //  &&
          // response.data.seRepairReportQueryListDetail.rows != ""
        ) {
          that.list2 =
            response.data[
              apiSeReport.seRepairReportQueryListDetail.ServiceCode
            ].rows;
        }
        that.listLoading = false;
        console.log("查询的条件:" + val);
      });
    },
    reset() {
      (this.listQuery.dataInfo.repairOrderCode = ""),
        (this.listQuery.dataInfo.carLicense = ""),
        (this.listQuery.dataInfo.vin = ""),
        (this.listQuery.dataInfo.begRepairTime = ""),
        (this.listQuery.dataInfo.endRepairTime = ""),
        (this.listQuery.RepairDate = ""),
        (this.listQuery.dataInfo.begDeliveryDate = ""),
        (this.listQuery.dataInfo.endDeliveryDate = ""),
        (this.listQuery.DeliveryDate = ""),
        (this.listQuery.dataInfo.dlrId = ""),
        (this.listQuery.dataInfo.carBrandCode = ""),
        (this.listQuery.dataInfo.businessType = ""),
        (this.listQuery.dataInfo.carBrand = ""),
        (this.listQuery.dataInfo.repairTypeCode = ""),
        (this.listQuery.dataInfo.saEmpId = ""),
        (this.checked = false),
        (this.listQuery.dataInfo.isAdd = "0");
    },
    changeAdd() {
      if (this.checked) {
        this.listQuery.dataInfo.isAdd = "1";
      } else {
        this.listQuery.dataInfo.isAdd = "0";
      }
    },
    getBusinessType(val) {
      this.listQuery.dataInfo.businessType = val;
    },
    getRepairTypeCode(val) {
      this.listQuery.dataInfo.repairTypeCode = val;
    },
    getServiceSaDDL(val) {
      this.listQuery.dataInfo.saEmpId = val;
    },
    getComQueChoMu(val) {
      this.seComQueChoMuDlrVisible = false;
      this.listQuery.dataInfo.dlrId = val[0].label;
    },
    closeComQueChoMu(val) {
      this.seComQueChoMuDlrVisible = val;
    },
    openComQueChoMu(val) {
      this.seComQueChoMuDlrVisible = true;
    },
    getBrandCode(val) {
      this.listQuery.dataInfo.carBrandCode = val;
    }
  }
};
</script>
<style scoped>
.el-main {
  padding: 0px;
}
.el-aside {
  background-color: white;
}

.kk {
  text-align: left;
  font-size: 14px;
}
</style>
