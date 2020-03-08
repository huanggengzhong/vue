<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="QueryList">查询</el-button>
      <el-button size="small" @click="getMoney">收款</el-button>
      <el-button size="small" @click="printClick">打印</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="22">
          <el-row>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="listQuery.dataInfo.dateType"
              :lookuptype="lookuptype.dateType"
              :labelName="lookupValuelable.dateType"
              @changeCode="getDateType"
            />
            <el-col :span="6">
              <label class="demonstration">查询日期</label>
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
            <el-col :span="6">
              <label>VIN码</label>
              <el-input size="small" v-model="listQuery.dataInfo.vin" placeholder="请输入" />
            </el-col>
            <el-col :span="6">
              <label>施工单号</label>
              <el-input
                size="small"
                v-model="listQuery.dataInfo.repairOrderCode"
                placeholder="请输入"
              />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button :icon="toggleParamIcon" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" class="toggleParam">
          <el-row>
            <el-col :span="6">
              <label>车牌号</label>
              <el-input size="small" v-model="listQuery.dataInfo.carLicense" placeholder="请输入" />
            </el-col>
            <el-col :span="6">
              <label>报修人</label>
              <el-input size="small" v-model="listQuery.dataInfo.repairMan" placeholder="请输入" />
            </el-col>
            <el-col :span="6">
              <label>报修人电话</label>
              <el-input size="small" v-model="listQuery.dataInfo.repairTel" placeholder="请输入" />
            </el-col>
            <el-col :span="6">
              <label>服务代表</label>
              <el-input size="small" v-model="listQuery.dataInfo.saEmpId" placeholder="请输入" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      highlight-current-row
      :height="tableHeight"
      @row-click="chooseRow"
      @row-dblclick="makeBalance"
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column label="施工单号" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template>
      </el-table-column>
      <el-table-column label="车牌号" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.carLicense }}</template>
      </el-table-column>
      <el-table-column label="VIN码" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.vin }}</template>
      </el-table-column>
      <el-table-column label="报修人" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.repairMan }}</template>
      </el-table-column>
      <el-table-column label="报修人电话" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.repairTel }}</template>
      </el-table-column>
      <el-table-column label="报修时间" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.repairTime }}</template>
      </el-table-column>
      <el-table-column label="预计交车时间" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.preGetDate }}</template>
      </el-table-column>
      <el-table-column label="结算状态" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.isGatherName }}</template>
      </el-table-column>
      <el-table-column label="施工状态" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.repairStatusName }}</template>
      </el-table-column>
      <el-table-column label="服务顾问名字" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.saName }}</template>
      </el-table-column>
      <el-table-column label="工时应收费" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.wiAmount }}</template>
      </el-table-column>
      <el-table-column label="备件应收费" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.partAmount }}</template>
      </el-table-column>
      <el-table-column label="其他应收费" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.otherAmount }}</template>
      </el-table-column>
      <el-table-column label="应收总费用" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.totalAmount }}</template>
      </el-table-column>
      <el-table-column label="专营店编码" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.dlrCustNo }}</template>
      </el-table-column>
      <el-table-column label="客户名称" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.custName }}</template>
      </el-table-column>
      <el-table-column label="客户电话" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.custTel }}</template>
      </el-table-column>
      <el-table-column label="行驶里程" aglin="center" width="150">
        <template slot-scope="scope">{{ scope.row.mileage }}</template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      ref="paginationHeight"
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?pageTotal:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <el-dialog :visible.sync="dialogVisible" :append-to-body="true" width="80%">
      <div style="height:465px;overflow-y:auto">
        <div ref="print">
          <el-row :gutter="26">
            <el-col :span="12" align="right">
              <label style="font-size:30px">委托维修结算单</label>
            </el-col>

            <el-col :span="12" align="center">
              <table style=" width: 300px;">
                <tr>
                  <th>工单</th>
                  <th>优先派工</th>
                  <th>服务代表</th>
                </tr>
                <tr>
                  <td>{{this.printDataInfo.repairOrderCode}}</td>
                  <td>-</td>
                  <td>{{this.printDataInfo.saName}}</td>
                </tr>
              </table>
            </el-col>
          </el-row>

          <br />
          <br />

          <el-row>
            <el-col :span="12" align="left">
              <label class="fontstyle">{{this.printDataInfo.storesinformation[0].dlrFullName}}</label>
            </el-col>
            <el-col :span="6">
              <label class="fontstyle">服务电话：</label>
              <label class="fontstyle">{{this.printDataInfo.storesinformation[0].serviceTel}}</label>
            </el-col>
            <el-col :span="6">
              <label class="fontstyle">结算时间：</label>
              <label class="fontstyle">null</label>
            </el-col>
            <el-col :span="6">
              <label class="fontstyle">地址：</label>
              <label class="fontstyle">{{this.printDataInfo.storesinformation[0].linkAddr}}</label>
            </el-col>
          </el-row>

          <br />

          <el-row :gutter="26">
            <el-col align="center">
              <table style=" width: 100%;text-align:left;">
                <tr>
                  <td>姓名：{{this.printDataInfo.custName}}</td>
                  <td>电话号码：{{this.printDataInfo.custTelphone}}</td>
                  <td>送修人：{{this.printDataInfo.repairMan}}</td>
                  <td>送修人电话：{{this.printDataInfo.repairTel}}</td>
                </tr>
                <tr>
                  <td>VIN：{{this.printDataInfo.vin}}</td>
                  <td>车牌号：{{this.printDataInfo.carLicense}}</td>
                  <td>车型：{{this.printDataInfo.carTypeCode}}</td>
                  <td>颜色：{{this.printDataInfo.carColorName}}</td>
                </tr>
                <tr>
                  <td>行驶里程：{{this.printDataInfo.mileage}}</td>
                  <td>购车日期：null</td>
                  <td>送修时间：{{this.printDataInfo.trunRepairDate}}</td>
                  <td>完工时间：{{this.printDataInfo.repairFinishDate}}</td>
                </tr>
                <tr>
                  <td colspan="4">地址：</td>
                </tr>
              </table>
            </el-col>
          </el-row>

          <br />

          <el-row :gutter="26">
            <el-col align="center">
              <table style=" width: 100%;text-align:left;">
                <tr>
                  <td style="text-align:center;">客户描述</td>
                  <td style="width:80%">{{this.printDataInfo.csDesc}}</td>
                </tr>
                <tr>
                  <td style="text-align:center;width：200">检查结果</td>
                  <td style="width:80%">{{this.printDataInfo.disposeInfo}}</td>
                </tr>
                <tr>
                  <td style="text-align:center;width：200">建议维修项目</td>
                  <td style="width:80%">{{this.printDataInfo.recommendItem}}</td>
                </tr>
              </table>
            </el-col>
          </el-row>

          <br />

          <el-row class="textCenter">
            <el-col :span="24" aglin="center" class="border1 height line-height">维修项目</el-col>
          </el-row>
          <el-row class="textCenter">
            <el-col :span="1" aglin="center" class="border1 height line-height">序号</el-col>
            <el-col :span="5" aglin="center" class="border1 height line-height">维修内容</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">工时</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">单价</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">工时费</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">预估费用</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">业务类别</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">备注</el-col>
          </el-row>
          <el-row
            class="textCenter"
            v-for="(item, index) in printDataInfo.maintenancework"
            :key="index"
          >
            <el-col :span="1" aglin="center" class="border1 height line-height">{{index}}</el-col>
            <el-col :span="5" aglin="center" class="border1 height line-height">{{item.wiName}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.saleWorkQty}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.wiPrice}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.wiAmount}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.wiPreAmount}}</el-col>
            <el-col
              :span="3"
              aglin="center"
              class="border1 height line-height"
            >{{item.businessTypeName}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.note}}</el-col>
          </el-row>

          <br />

          <el-row class="textCenter">
            <el-col :span="24" aglin="center" class="border1 height line-height">维修备件</el-col>
          </el-row>
          <el-row class="textCenter">
            <el-col :span="1" aglin="center" class="border1 height line-height">序号</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">备件编号</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">备件名称</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">单价</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">数量</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">备件费</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">业务类别</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">预估费用</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">备注</el-col>
          </el-row>
          <el-row
            class="textCenter"
            v-for="(item, index) in printDataInfo.maintenancerepairparts"
            :key="index"
          >
            <el-col :span="1" aglin="center" class="border1 height line-height">{{index}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.partNo}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.partName}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.partPrice}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.partQty}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.partAmount}}</el-col>
            <el-col
              :span="3"
              aglin="center"
              class="border1 height line-height"
            >{{item.businessTypeName}}</el-col>
            <el-col
              :span="3"
              aglin="center"
              class="border1 height line-height"
            >{{item.prePartAmount}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">{{item.note}}</el-col>
          </el-row>

          <br />

          <el-row class="textCenter">
            <el-col :span="24" aglin="center" class="border1 height line-height">其他费用</el-col>
          </el-row>
          <el-row class="textCenter">
            <el-col :span="4" aglin="center" class="border1 height line-height">序号</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">其他费用类别</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">业务类别</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">其他费用合计</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">预估费用</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">备注</el-col>
          </el-row>
          <el-row
            class="textCenter"
            v-for="(item, index) in printDataInfo.otherexpenses"
            :key="index"
          >
            <el-col :span="4" aglin="center" class="border1 height line-height">{{index}}</el-col>
            <el-col
              :span="4"
              aglin="center"
              class="border1 height line-height"
            >{{item.costTypeName}}</el-col>
            <el-col
              :span="4"
              aglin="center"
              class="border1 height line-height"
            >{{item.businessTypeName}}</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">{{item.otherAmount}}</el-col>
            <el-col
              :span="4"
              aglin="center"
              class="border1 height line-height"
            >{{item.preOtherAmount}}</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">{{item.remark}}</el-col>
          </el-row>

          <br />

          <el-row class="textCenter">
            <el-col :span="12">
              <table style=" width: 100%;">
                <tr>
                  <th rowspan="5">应收费用</th>
                  <th></th>
                  <th>费用</th>
                  <th>已付</th>
                  <th>应收</th>
                </tr>
                <tr>
                  <td>工时费用：</td>
                  <td>{{this.shouList[0].allAmount}}</td>
                  <td>{{this.shouList[0].disAmount}}</td>
                  <td>{{this.shouList[0].dueAmount}}</td>
                </tr>
                <tr>
                  <td>备件费用：</td>
                  <td>{{this.shouList[1].allAmount}}</td>
                  <td>{{this.shouList[1].disAmount}}</td>
                  <td>{{this.shouList[1].dueAmount}}</td>
                </tr>
                <tr>
                  <td>其他费用：</td>
                  <td>{{this.shouList[2].allAmount}}</td>
                  <td>{{this.shouList[2].disAmount}}</td>
                  <td>{{this.shouList[2].dueAmount}}</td>
                </tr>
                <tr>
                  <td>合计：</td>
                  <td>{{this.shouList[3].allAmount}}</td>
                  <td>{{this.shouList[3].disAmount}}</td>
                  <td>{{this.shouList[3].dueAmount}}</td>
                </tr>
              </table>
            </el-col>

            <el-col :span="10" style="margin-left:20px;height：150px;">
              <table style=" width: 100%;" class="tdHeight">
                <tr>
                  <th rowspan="5">实收费用</th>
                  <td colspan="3">应收总计：</td>
                  <td>{{this.factList[0].amount}}</td>
                </tr>
                <tr>
                  <td colspan="3">折让：</td>
                  <td>{{this.factList[1].amount}}</td>
                </tr>
                <tr>
                  <td colspan="3">公司挂账：</td>
                  <td>{{this.factList[2].amount}}</td>
                </tr>
                <tr>
                  <td colspan="3">最终客户付款：</td>
                  <td>{{this.factList[3].amount}}</td>
                </tr>
              </table>
            </el-col>
          </el-row>

          <br />
          <br />
          <br />

          <div>
            <el-col :span="6">服务代表签名：</el-col>
            <el-col :span="6">日期：</el-col>
            <el-col :span="6">客户签名：</el-col>
            <el-col :span="6">日期：</el-col>
          </div>
        </div>
      </div>
      <div style="height:40px;float:right;padding-top:20px">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="printOrder()">打 印</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { apiSeBalance } from "@/api/graphQLApiList/se";
import { requestGraphQL } from "@/api/commonRequest";
import LookupValue from "@/components/org/LookupValue";
import {
  doQueryList,
  queryPrint
} from "@/api/se/process/settlement/seBuRepairBalanceQuery";
import { the_Height } from "@/components/se/seMixins/makeHeight";

export default {
  mixins: [the_Height],
  components: {
    LookupValue
  },
  data() {
    return {
      //实收费用数组
      factList: [
        { LabName: "应收总计", amount: 0 },
        { LabName: "折让", amount: 0 },
        { LabName: "公司挂账", amount: 0 },
        { LabName: "最终客户付款", amount: 0 }
      ],
      //应收费用数组
      shouList: [
        { LabName: "工时费用：", allAmount: 0, disAmount: 0, dueAmount: 0 },
        { LabName: "备件费用：", allAmount: 0, disAmount: 0, dueAmount: 0 },
        { LabName: "其他费用：", allAmount: 0, disAmount: 0, dueAmount: 0 },
        { LabName: "合计：", allAmount: 0, disAmount: 0, dueAmount: 0 }
      ],
      //打印界面参数
      viewPrint: {
        // 工时
        wiAmount: 0,
        wiDisAmount: 0,
        wiDueAmount: 0,

        // 备件
        partAmount: 0,
        partDisAmount: 0,
        partDueAmount: 0,

        //其他费用
        otherAmount: 0,
        otherDisAmount: 0,
        otherDueAmount: 0,

        // 总计
        allAmount: 0,
        allDisAmount: 0,
        allDueAmount: 0,

        // 实收费
        amount: 0,
        disAmount: 0,
        runupAmount: 0,
        factAmount: 0
      },
      //查询打印参数
      paramPrint: {
        oemCode: "",
        groupCode: "",
        repairOrderId: ""
      },
      //查询打印结果
      printDataInfo: {
        repairOrderCode: "",
        isFirst: "",
        saName: "",
        custName: "",
        addr: "",
        custTelphone: "",
        carSeriesCode: "",
        carTypeCode: "",
        vin: "",
        carLicense: "",
        engineNo: "",
        deliveryDate: "",
        carColorName: "",
        submitBalanceDate: "",
        mileage: "",
        invoiceDate: "",
        repairTime: "",
        preGetDate: "",
        trunRepairDate: "",
        repairFinishDate: "",
        csDesc: "",
        disposeInfo: "",
        recommendItem: "",
        wiAmount: "",
        partAmount: "",
        otherAmount: "",
        amountTotal: "",
        wiDueAmount: "",
        partDueFee: "",
        sumOtherDueAmount: "",
        dueAmountTotal: "",
        receiptsAmount: "",
        pactRunupAmount: "",
        discountAmount: "",
        amountTotal: "",
        repairMan: "",
        repairTel: "",
        storesinformation: [
          {
            dlrFullName: "",
            dlrCode: "",
            dlrId: "",
            dlrShortName: "",
            linkAddr: "",
            serviceTel: ""
          }
        ],
        otherexpenses: [
          {
            preOtherAmount: "",
            otherAmount: "",
            costTypeName: "",
            businessTypeName: "",
            remark: ""
          }
        ],
        maintenancework: [
          {
            wiCode: "",
            wiName: "",
            saleWorkQty: "",
            wiPrice: "",
            wiAmount: "",
            wiPreAmount: "",
            businessTypeName: "",
            note: ""
          }
        ],
        maintenancerepairparts: [
          {
            partNo: "",
            partName: "",
            partQty: "",
            partPrice: "",
            partAmount: "",
            prePartAmount: "",
            businessTypeName: "",
            note: ""
          }
        ]
      },
      //打印界面可见性
      dialogVisible: false,
      currentRow: "",
      isMul: false,
      pageTotal: 0,
      isShowLabel: true,
      listLoading: false,
      toggleParamIcon: "el-icon-minus",
      toggleParam: false,
      list: [],
      lookupValuelable: {
        dateType: "日期类型"
      },
      lookuptype: {
        dateType: "SE0190"
      },
      orderDate: [],
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        dataInfo: {
          vin: "",
          repairMan: "", // 报修人
          repairTel: "", //报修人电话
          repairOrderCode: "", //施工单号
          isSubmitApplyFlag: "", //是否提交结算申请
          carLicense: "", //车牌号
          dateType: "", // 时间类型
          queryType: "1", //查询场景
          isAccurate: "0", //是否精确查询：1-精确查询  0-模糊查询
          repairTimeBeg: "", //开始时间
          repairTimeEnd: "", //结束时间
          saEmpId: "" // 服务代表
        }
      },
      balanceDate: undefined
    };
  },
  created() {},
  methods: {
    //打印事件
    printOrder() {
      this.$print(this.$refs.print);
      this.dialogVisible = false;
    },
    //打印弹框
    printClick() {
      if (this.currentRow == "" || this.currentRow == null) {
        this.$alert("请选择收款数据！", "提示", {
          confirmButtonText: "确定"
        });
        return;
      }

      var that = this;
      //构建查询参数
      // this.paramPrint.oemCode = this.paramLoad.oemCode;
      // this.paramPrint.groupCode = this.paramLoad.groupCode;
      this.paramPrint.repairOrderId = this.currentRow.repairOrderId;
      //查询打印数据
      queryPrint(10, 1, that.paramPrint).then(response => {
        if (response.data.seBuRepairBalancePrint.result === "1") {
          that.printDataInfo =
            response.data[apiSeBalance.seBuRepairBalancePrint.ServiceCode].rows;

          //计算打印界面相关费用
          //工时
          this.viewPrint.wiAmount = parseFloat(this.printDataInfo.wiAmount);
          this.viewPrint.wiDisAmount =
            parseFloat(this.printDataInfo.wiAmount) -
            parseFloat(this.printDataInfo.wiDueAmount);
          this.viewPrint.wiDueAmo = parseFloat(this.printDataInfo.wiDueAmount);
          //备件
          this.viewPrint.partAmount = parseFloat(this.printDataInfo.partAmount);
          this.viewPrint.partDisAmount =
            parseFloat(this.printDataInfo.partAmount) -
            parseFloat(this.printDataInfo.partDueFee);
          this.viewPrint.partDueAmount = parseFloat(
            this.printDataInfo.partDueFee
          );
          //其他
          this.viewPrint.otherAmount = parseFloat(
            this.printDataInfo.otherAmount
          );
          this.viewPrint.otherDisAmount =
            parseFloat(this.printDataInfo.otherAmount) -
            parseFloat(this.printDataInfo.sumOtherDueAmount);
          this.viewPrint.otherDueAmount = parseFloat(
            this.printDataInfo.sumOtherDueAmount
          );
          //总计
          this.viewPrint.allAmount = parseFloat(this.printDataInfo.amountTotal);
          this.viewPrint.allDisAmount =
            parseFloat(this.printDataInfo.amountTotal) -
            parseFloat(this.printDataInfo.dueAmountTotal);
          this.viewPrint.allDueAmount = parseFloat(
            this.printDataInfo.dueAmountTotal
          );

          this.viewPrint.amount = parseFloat(this.printDataInfo.amountTotal);
          this.viewPrint.disAmount = parseFloat(
            this.printDataInfo.discountAmount
          );
          this.viewPrint.runupAmount = parseFloat(
            this.printDataInfo.pactRunupAmount
          );
          this.viewPrint.factAmount = parseFloat(
            this.printDataInfo.receiptsAmount
          );
          //构建应收费用数组
          this.shouList[0].allAmount = this.viewPrint.wiAmount;
          this.shouList[0].disAmount = this.viewPrint.wiDisAmount;
          this.shouList[0].dueAmount = this.viewPrint.wiDueAmount;

          this.shouList[1].allAmount = this.viewPrint.partAmount;
          this.shouList[1].disAmount = this.viewPrint.partDisAmount;
          this.shouList[1].dueAmount = this.viewPrint.partDueAmount;

          this.shouList[2].allAmount = this.viewPrint.otherAmount;
          this.shouList[2].disAmount = this.viewPrint.otherDisAmount;
          this.shouList[2].dueAmount = this.viewPrint.otherDueAmount;

          this.shouList[3].allAmount = this.viewPrint.allAmount;
          this.shouList[3].disAmount = this.viewPrint.allDisAmount;
          this.shouList[3].dueAmount = this.viewPrint.allDueAmount;

          //构建实收费用数组
          this.factList[0].amount = this.viewPrint.amount;
          this.factList[1].amount = this.viewPrint.disAmount;
          this.factList[2].amount = this.viewPrint.runupAmount;
          this.factList[3].amount = this.viewPrint.factAmount;
        }
      });

      this.dialogVisible = true;
    },
    getDateType(val) {
      this.listQuery.dataInfo.dateType = val;
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
      if (!this.toggleParam) {
        this.toggleParamIcon = "el-icon-minus";
      } else {
        this.toggleParamIcon = "el-icon-plus";
      }
    },
    QueryList(page) {
      if (this.orderDate.length == 0) {
        this.$message({
          message: "请选择查询日期",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (this.listQuery.dataInfo.dateType == "") {
        this.$message({
          message: "请选择日期类型",
          type: "warning",
          duration: 2000
        });
        return;
      }
      this.listQuery.dataInfo.repairTimeBeg = this.orderDate[0];
      this.listQuery.dataInfo.repairTimeEnd = this.orderDate[1];
      const that = this;
      that.listLoading = true;
      let queryObj = {
        // api配置
        apiConfig: apiSeBalance.seBuRepairBalanceQueryMain,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "repairOrderId",
              "repairOrderCode",
              "repairGatheringId",
              "carLicense",
              "vin",
              "repairMan",
              "repairTel",
              "repairTime",
              "preGetDate",
              "isGather",
              "isGatherName",
              "repairOrderStatus",
              "repairStatusName",
              "isAccident",
              "saName",
              "updateControlId",
              "wiAmount",
              "partAmount",
              "otherAmount",
              "totalAmount",
              "dlrCustNo",
              "carBrandCode",
              "policyCompanyId",
              "custName",
              "custTel",
              "mileage",
              "carId",
              "maxBusinessType"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageIndex: that.listQuery.pageIndex,
          pageSize: that.listQuery.pageSize,
          dataInfo: that.listQuery.dataInfo
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      //console.log(paramD)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        //console.log(response)
        if (
          response.data[apiSeBalance.seBuRepairBalanceQueryMain.ServiceCode]
            .result === "1"
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              apiSeBalance.seBuRepairBalanceQueryMain.ServiceCode
            ].records;
          that.list =
            response.data[
              apiSeBalance.seBuRepairBalanceQueryMain.ServiceCode
            ].rows;
          that.listLoading = false;
        } else {
          that.listLoading = false;
        }
      });
    },
    reset() {
      this.orderDate = [];
      this.listQuery.dataInfo.vin = "";
      this.listQuery.dataInfo.repairMan = "";
      this.listQuery.dataInfo.repairTel = "";
      this.listQuery.dataInfo.repairOrderCode = "";
      this.listQuery.dataInfo.carLicense = "";
      this.listQuery.dataInfo.dateType = "";
      this.listQuery.dataInfo.saEmpId = "";
    },
    getBalanceDate(val) {
      (this.listQuery.dataInfo.repairTimeBegin = val[0]),
        (this.listQuery.dataInfo.repairTimeEnd = val[1]);
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.QueryList();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.QueryList();
    },
    chooseRow(val) {
      this.currentRow = val;
    },
    makeBalance(val) {
      this.currentRow = val;
      this.getMoney();
    },
    getMoney() {
      if (this.currentRow == "" || this.currentRow == null) {
        this.$alert("请选择收款数据！", "提示", {
          confirmButtonText: "确定"
        });
      } else {
        this.$router.push({
          name: "seBuRepairBalanceQuery_Main",
          path: "/se/seBuRepairBalanceQuery_Main",
          params: {
            the_data: this.currentRow
          }
        });
      }
    }
  }
};
</script>

