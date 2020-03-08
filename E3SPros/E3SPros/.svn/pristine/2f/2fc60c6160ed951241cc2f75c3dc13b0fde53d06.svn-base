<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="textQuery(1)">查询</el-button>
      <el-button size="small" @click="openWiHistoryRecord">维修历史记录</el-button>
      <el-button size="small" @click="exportExcel('维修历史记录文件', '维修历史记录', 100)">导出</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>

    <div class="filter-container filter-title" ref="conTitleHeight">
      <div style="float:left">查询条件</div>
      <div class="more" style="float:right" @click="changeToggleParam">更多
        <i class="el-icon-arrow-up" v-show="!toggleParam"></i>
        <i class="el-icon-arrow-down" v-show="toggleParam"></i>
      </div>
    </div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="22">
          <el-row>
            <el-col :span="6">
              <label>送修时间</label>
              <el-date-picker
              v-model="formField.begRepairTime"
              type="date"
              @change="changeBegRepairTime"
              :picker-options="repairTimeOptionsStart"
              placeholder="选择日期">
              </el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>至</label>
              <el-date-picker
              v-model="formField.endRepairTime"
              type="date"
              @change="changeEndRepairTime"
              :picker-options="repairTimeOptionsEnd"
              placeholder="选择日期">
              </el-date-picker>
            </el-col>
            <el-col :span="6">
              <lableName :curLabelName="begDeliveryDateLabelName" :isShowLabel="isShowLabel" :isRequire="true"></lableName>
              <!--<label>交车日期</label>-->
              <el-date-picker
              v-model="formField.begDeliveryDate"
              type="date"
              @change="changeBegDeliveryDate"
              :picker-options="deliveryDateOptionsStart"
              placeholder="选择日期">
              </el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>至</label>
              <el-date-picker
              v-model="formField.endDeliveryDate"
              type="date"
              @change="changeEndDeliveryDate"
              :picker-options="deliveryDateOptionsEnd"
              placeholder="选择日期">
              </el-date-picker>
            </el-col>
            <!--<el-col :span="1">
              <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
            </el-col>-->
          </el-row>
        </el-col>

        <!--<el-col :span="2">
          <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>-->

        <el-col :span="22" v-show="toggleParam">
          <el-row>
            <el-col :span="6">
              <label>结清日期</label>
              <el-date-picker
              v-model="formField.begBalanceDate"
              type="date"
              @change="changeBegBalanceDate"
              :picker-options="balanceDateOptionsStart"
              placeholder="选择日期">
              </el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>至</label>
              <el-date-picker
              v-model="formField.endBalanceDate"
              type="date"
              @change="changeEndBalanceDate"
              :picker-options="balanceDateOptionsEnd"
              placeholder="选择日期">
              </el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>维修状态</label>
              <el-select
              collapse-tags
              filterable
              v-model="formField.repairOrderStatus"
              placeholder="请选择"
              size="small"
            >
             <el-option label="全部" value="0"></el-option>
             <el-option label="接待完毕" value="1"></el-option>
             <el-option label="已派工" value="2"></el-option>
             <el-option label="维修进行中" value="3"></el-option>
             <el-option label="追加" value="4"></el-option>
             <el-option label="维修完毕" value="5"></el-option>
            </el-select>
            </el-col>
            <el-col :span="6">
              <label>结算状态</label>
              <el-select
              collapse-tags
              filterable
              v-model="formField.gatheringState"
              placeholder="请选择"
              size="small"
              >
              <el-option label="全部" value="0"></el-option>
              <el-option label="已结算" value="1"></el-option>
              <el-option label="未结算" value="2"></el-option>
              </el-select>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="6">
              <label>施工单号</label>
              <el-input size="small" v-model="formField.repairOrderCode" />
            </el-col>
            <el-col :span="6">
              <label>车牌号</label>
              <el-input size="small" v-model="formField.carLicense"  />
            </el-col>
            <el-col :span="6">
              <label>VIN码</label>
              <el-input size="small" v-model="formField.vin"  />
            </el-col>
            <el-col :span="6">
              <label>客户姓名</label>
              <el-input size="small" v-model="formField.custName"  />
            </el-col>
          </el-row>

          <el-row>
            <carBrand :isMul="false" :span="6" :key="carBrandKey" :code="formField.carBrandCn" @changeCode="getBrandCode"></carBrand>
            <!--车系-->
            <carSeriesSelect ref="carSeriesSelect" :isMul="false" :key="carSeriesKey" :code="formField.carSeriesCode" @changeCode="getCarSeries" :span="6" />
            <!--<chooseCarSeriesSelect ref="carSeriesSelect" :span="6" :isMul="false" :code="formField.carSeriesCode" @changeCode="getCarSeries"></chooseCarSeriesSelect>-->
            <!--车型-->
            <partsCarTypeSelect ref="partsCarTypeSelect" :span="6" :isMul="false" :code="formField.carTypeCode" @changeCode="getCarTypeCode"></partsCarTypeSelect>
            <el-col :span="6">
              <!--<label>送修人电话</label>-->
              <lableName :curLabelName="repairTelLabelName" :isShowLabel="isShowLabel" :isRequire="true"></lableName>
              <el-input size="small" v-model="formField.repairTel"  />
            </el-col>
          </el-row>

          <el-row>
            <!--付费性质-->
            <LookupValue :span="6" :isMul="false" v-model="formField.payKind" :isShowLabel="true" :key="payKindKey" :lookuptype="payKindLookupType" :labelName='payKindLableName'  @changeCode="getPayKindValue" />
            <!--业务类别-->
            <LookupValue :span="6" :isMul="false" v-model="formField.businessType" :isShowLabel="true" :key="businessTypeKey" :lookuptype="businessTypeLookupType" :labelName='businessTypeLableName'  @changeCode="getBusinessTypeValue" />
            <!--维修类别-->
            <LookupValue :span="6" :isMul="false" v-model="formField.repairType" :isShowLabel="true" :key="repairTypeKey" :lookuptype="repairTypeLookupType" :labelName='repairTypeLableName'  @changeCode="getRepairTypeCodeValue" />
            <!--<seCommonQueryServiceSaDDL
               :isMul="false"
               @changeCode="getSaEmpId"
               v-model="formField.saEmpId"
            />-->
            <seCommonQueryServiceSaDDL
             :span="6"
             :isMul="isMul"
             @changeCode="getSaEmpId"
             :labelName="saEmpName"
             :code="formField.saEmpId"
            />

            <!--<el-col :span="6">
              <label>服务代表</label>
              <el-select
              collapse-tags
              filterable
              v-model="formField.saEmpId"
              placeholder="请选择"
              size="small"
              >
              <el-option label="全部" value="0"></el-option>
              <el-option label="李凡" value="1"></el-option>
              <el-option label="韩金" value="2"></el-option>
              </el-select>
            </el-col>-->
          </el-row>

          <el-row>
            <el-col :span="6">
              <label>维修内容</label>
              <el-input size="small" v-model="formField.wiName"  />
            </el-col>
            <el-col :span="6">
              <label>备件编码</label>
              <!--<el-input size="small" v-model="formField.partNo"  />-->
              <el-input
                v-model="formField.partNo"
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
                @focus="openPaChoosePart"
              />
              <!--选择备件-->
              <paChoosePart :paChoosePartVisible="paChoosePartVisible" :title="title" @seChooseWiData="getPaChoosePart" @close="closeChooseWiSelect"></paChoosePart>
            </el-col>
            <el-col :span="6">
              <label>事故车</label>
              <el-select
              collapse-tags
              filterable
              v-model="formField.accidentCn"
              placeholder="请选择"
              size="small"
              >
              <el-option label="全部" value="0"></el-option>
              <el-option label="是" value="1"></el-option>
              <el-option label="否" value="2"></el-option>
              </el-select>
            </el-col>
            <el-col :span="6" v-show="!show">
              <label>经销商</label>
              <el-input
                v-model="formField.dlrId"
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
                @focus="openComQueChoMu"
              />
              <!--经销商弹框-->
              <seComQueryChoDlrMul  ref="seComQueryChoDlrMul" @changeCode="getComQueChoMu"/>
              <!--<seComQueChoMu  ref="seComQueChoMu" :seComQueChoMuDlrVisible="seComQueChoMuDlrVisible" @sentCode="getComQueChoMu" @close="closeComQueChoMu" />-->
            </el-col>
              <!--经销商下拉框-->
              <DlrStatus v-show="show" :span="6" :isMul="false" :modelCode="formField.dlrId" @sendCode="sendCode"></DlrStatus>
          </el-row>

          <el-row>
            <el-col :span="5">
              <el-checkbox label="反结算过单据" v-model="formField.isCancelBalance" :checked="isCancelBalanceCheck" @change="changeIsCancelBalance"></el-checkbox>
            </el-col>
            <el-col :span="5">
              <el-checkbox label="是否追加" v-model="formField.isAdd" :checked="isAddCheck" @change="changeIsAdd"></el-checkbox>
            </el-col>
            <el-col :span="5">
              <el-checkbox label="作废单" v-model="formField.isQueryCancel" :checked="isQueryCancelCheck" @change="changeIsQueryCancel"></el-checkbox>
            </el-col>
            <el-col :span="5">
              <el-checkbox label="PDI单" v-model="formField.isQueryPdi" :checked="isQueryPdiCheck" @change="changeIsQueryPdi"></el-checkbox>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
    v-loading="listLoading"
    :data="queryList"
    element-loading-text="Loading"
    :row-class-name="tableRowClassName"
    border
    fit
    stripe
    :header-cell-style="tableHeaderRowClassName"
    highlight-current-row
    show-summary
    :summary-method="getSummaries"
    @row-click="rowClick"
    style="width:100%"
    :height="tableHeight"
    ref="multipleTable"
    >
      <el-table-column align="center" label="序号"  width="60" type='index'  prop="id">

      </el-table-column>
      <el-table-column prop="dlrShortName" label="专营店名称" width="100">
        <template slot-scope="scope">{{scope.row.dlrShortName}}</template>
      </el-table-column>
      <el-table-column prop="repairOrderCode" label="施工单号" width="130">
        <template slot-scope="scope">{{scope.row.repairOrderCode}}</template>
      </el-table-column>
      <el-table-column prop="vin" label="VIN码" width="160">
        <template slot-scope="scope">{{scope.row.vin}}</template>
      </el-table-column>
      <el-table-column prop="carLicense" label="车牌号" width="130">
        <template slot-scope="scope">{{scope.row.carLicense}}</template>
      </el-table-column>
      <el-table-column prop="custName" label="客户姓名">
        <template slot-scope="scope">{{scope.row.custName}}</template>
      </el-table-column>
      <el-table-column prop="custTel" label="客户电话" width="130">
        <template slot-scope="scope">{{scope.row.custTel}}</template>
      </el-table-column>
      <el-table-column prop="carBrandCn" label="车辆品牌" width="100">
        <template slot-scope="scope">{{scope.row.carBrandCn}}</template>
      </el-table-column>
      <el-table-column prop="engineNo" label="发动机号" width="130">
        <template slot-scope="scope">{{scope.row.engineNo}}</template>
      </el-table-column>
      <el-table-column prop="carSeriesName" label="车系">
        <template slot-scope="scope">{{scope.row.carSeriesName}}</template>
      </el-table-column>
      <el-table-column prop="carTypeCode" label="车型" width="130">
        <template slot-scope="scope">{{scope.row.carTypeCode}}</template>
      </el-table-column>
      <el-table-column prop="mileage" label="行驶里程" width="130">
        <template slot-scope="scope">{{scope.row.mileage}}</template>
      </el-table-column>
      <el-table-column prop="saleDate" label="购车日期">
        <template slot-scope="scope">{{scope.row.saleDate}}</template>
      </el-table-column>
      <el-table-column prop="isAccidentCn" label="是否事故车" width="120">
        <template slot-scope="scope">{{scope.row.isAccidentCn}}</template>
      </el-table-column>
      <el-table-column prop="repairMan" label="送修人">
        <template slot-scope="scope">{{scope.row.repairMan}}</template>
      </el-table-column>
      <el-table-column prop="repairTel" label="送修人电话" width="120">
        <template slot-scope="scope">{{scope.row.repairTel}}</template>
      </el-table-column>
      <el-table-column prop="repairTime" label="送修时间">
        <template slot-scope="scope">{{scope.row.repairTime}}</template>
      </el-table-column>
      <el-table-column prop="repairStatue" label="维修状态">
        <template slot-scope="scope">{{scope.row.repairStatue}}</template>
      </el-table-column>
      <el-table-column prop="deliveryDate" label="维修交车时间" width="130">
        <template slot-scope="scope">{{scope.row.deliveryDate}}</template>
      </el-table-column>
      <el-table-column prop="mainPayType" label="业务类别(金额最大)" width="140">
        <template slot-scope="scope">{{scope.row.mainPayType}}</template>
      </el-table-column>
      <el-table-column prop="gatherState" label="结算状态">
        <template slot-scope="scope">{{scope.row.gatherState}}</template>
      </el-table-column>
      <el-table-column prop="balanceDate" label="结清日期">
        <template slot-scope="scope">{{scope.row.balanceDate}}</template>
      </el-table-column>
       <el-table-column prop="sWorkitemFeeHj" label="工时费合计" width="120">
        <template slot-scope="scope">{{scope.row.sWorkitemFeeHj}}</template>
      </el-table-column>
      <el-table-column prop="sPartFeeHj" label="备件费合计" width="120">
        <template slot-scope="scope">{{scope.row.sPartFeeHj}}</template>
      </el-table-column>
       <el-table-column prop="sOtherFeeHj" label="其他费合计" width="120">
        <template slot-scope="scope">{{scope.row.sOtherFeeHj}}</template>
      </el-table-column>
       <el-table-column prop="sFeeAmount" label="费用合计" width="120">
        <template slot-scope="scope">{{scope.row.sFeeAmount}}</template>
      </el-table-column>
      <el-table-column prop="sWorkitemFee" label="工时费预估" width="120">
        <template slot-scope="scope">{{scope.row.sWorkitemFee}}</template>
      </el-table-column>
      <el-table-column prop="sPartFee" label="备件费预估" width="120">
        <template slot-scope="scope">{{scope.row.sPartFee}}</template>
      </el-table-column>
      <el-table-column prop="sOtherFee" label="其他费预估" width="120">
        <template slot-scope="scope">{{scope.row.sOtherFee}}</template>
      </el-table-column>
      <el-table-column prop="sOldprice" label="费用预估合计" width="120">
        <template slot-scope="scope">{{scope.row.sOldprice}}</template>
      </el-table-column>
      <el-table-column prop="realrebatefare" label="优惠费" width="120">
        <template slot-scope="scope">{{scope.row.realrebatefare}}</template>
      </el-table-column>
      <el-table-column prop="realincomefare" label="实收费" width="120">
        <template slot-scope="scope">{{scope.row.realincomefare}}</template>
      </el-table-column>
      <el-table-column prop="runupAmount" label="挂账费" width="120">
        <template slot-scope="scope">{{scope.row.runupAmount}}</template>
      </el-table-column>
      <el-table-column prop="saName" label="服务代表">
        <template slot-scope="scope">{{scope.row.saName}}</template>
      </el-table-column>
      <el-table-column prop="gatheringEmpName" label="结算人">
        <template slot-scope="scope">{{scope.row.gatheringEmpName}}</template>
      </el-table-column>
      <el-table-column prop="cancelReason" label="作废/反结算原因" width="140">
        <template slot-scope="scope">{{scope.row.cancelReason}}</template>
      </el-table-column>
      <el-table-column prop="disposeInfo" label="处理方法">
        <template slot-scope="scope">{{scope.row.disposeInfo}}</template>
      </el-table-column>
      <el-table-column prop="csDesc" label="送修问题">
        <template slot-scope="scope">{{scope.row.csDesc}}</template>
      </el-table-column>
      <el-table-column prop="recommendItem" label="推荐项目">
        <template slot-scope="scope">{{scope.row.recommendItem}}</template>
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
      :total="pageTotal"
      :current-page.sync="listQuery.pageIndex"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <!--历史维修记录弹窗-->
    <wiHistoryRecords ref="wiHistoryRecords" :wiHistoryRecordsVisible="wiHistoryRecordsVisible" :custCarData="custCarInfo" @closePage="closePage"></wiHistoryRecords>
    <!--派工结算明细弹窗-->
    <seRepairReportDetail ref="seRepairReportDetail" :seRepairReportDetailVisible="seRepairReportDetailVisible" @closePage="closeRepairDetailPage"></seRepairReportDetail>
  </div>
</template>
<script>
import { getList } from '@/api/table'
import { apiSeRepairUnionReportQuery } from '@/api/graphQLApiList/se'
import { requestGraphQL } from '@/api/commonRequest'
import carBrand from '@/components/org/carBrand/carBrand'
import carSeriesSelect from "@/components/se/chooseCarSeriesSelect";
import partsCarTypeSelect from '@/components/se/partsCarTypeSelect'
import partsCarTypeModal from "@/components/se/partsCarTypeModal"
import seComQueryChoDlrMul from "@/components/se/seComQueryChoDlrMul"
import wiHistoryRecords from "@/views/se/public/repairHistory/wiHistoryRecords"
import seRepairReportDetail from "@/views/se/public/repairHistory/seRepairReportDetail"
import paChoosePart from "@/components/se/paChoosePart";
import SmallCarType from "@/components/org/SmallCarType/index";
import DlrStatus from "@/components/org/DlrStatus/index"
import lableName from "@/components/lableName/index"
import LookupValue from '@/components/org/LookupValue'
import seCommonQueryServiceSaDDL from "@/components/se/seCommonQueryServiceSaDDL"
import Navbar from "@/layout/components/Navbar"
import { the_Height} from "@/components/se/seMixins/makeHeight";

export default {
  mixins: [the_Height],
  components: {
      carBrand,
      carSeriesSelect,
      partsCarTypeSelect,
      partsCarTypeModal,
      seComQueryChoDlrMul,
      wiHistoryRecords,
      seRepairReportDetail,
      paChoosePart,
      SmallCarType,
      DlrStatus,
      lableName,
      LookupValue,
      seCommonQueryServiceSaDDL,
      Navbar
   },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      begDeliveryDateLabelName: '维修交车日期',
      repairTelLabelName: '送修人电话',
      payKindLableName: '付费性质',
      payKindLookupType: 'SE0022',
      //业务类别值列表lableName
      businessTypeLableName: '业务类别',
      //业务类别值列表编码
      businessTypeLookupType: 'SE0005',
      //维修类别值列表lableName
      repairTypeLableName: '维修类别',
      //维修类别值列表编码
      repairTypeLookupType: 'SE0010',
      saEmpName: '服务代表',
      isShowLabel: true,
      show: false,
      toggleParam: false,
      queryList: null,
      listLoading: true,
      isMul: false,
      //计算合计
      sums: {},
      //点击行数据
      rowClickData: {},
      //显示隐藏车型弹出框
      carTypeVisible: false,
      //显示隐藏选择备件弹框
      paChoosePartVisible: false,
      //备件为单选
      title: 0,
      //显示隐藏经销商弹框
      seComQueChoMuDlrVisible: false,
      //显示隐藏历史维修记录弹窗
      wiHistoryRecordsVisible: false,
      //显示隐藏派工结算明细弹窗
      seRepairReportDetailVisible: false,
      //设置key更改状态,key 唯一
      carBrandKey: 'a',
      carSeriesKey: 'b',
      payKindKey: 'c',
      businessTypeKey: 'd',
      repairTypeKey: 'e',
      isCancelBalanceCheck: false,
      isAddCheck: false,
      isQueryCancelCheck: false,
      isQueryPdiCheck: false,
      //传给维修历史记录的客户车辆信息
      custCarInfo: {},
      sWorkitemFeeHjTotal: 0,
      sPartFeeHjTotal: 0,
      sOtherFeeHjTotal: 0,
      sFeeAmountTotal: 0,
      sWorkitemFeeTotal: 0,
      sPartFeeTotal: 0,
      sOtherFeeTotal: 0,
      sOldpriceTotal: 0,
      sRealrebatefareTotal: 0,
      sRealincomefareTotal: 0,
      sRunupAmountTotal: 0,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 30,
      },
      //返回的总记录数
      pageTotal: 0,
      //表单查询区
      formField:{
          repairStatue: '',
          gatherState: '',
          repairOrderCode: '',
          carLicense: '',
          vin: '',
          custName: '',
          carBrandCn: '',
          carSeriesName: '',
          carTypeCode: '',
          repairTel: '',
          payType: '',
          businessType: '',
          repairType: '',
          saName: '',
          repairName: '',
          partCode: '',
          accidentCn: '',
          dlrId: [],
          repairTime: '',
          deliveryDate: '',
          balanceDate: '',
          isCancelBalance: '',
          isAdd: '',
          isQueryCancel: '',
          isQueryPdi: ''
      },
      //送修开始时间
      repairTimeOptionsStart: {
         disabledDate: time => {
           let endDateVal = this.formField.endRepairTime
           if (endDateVal) {
             return time.getTime() > new Date(endDateVal).getTime();
           }
         }
      },
      //送修结束时间
      repairTimeOptionsEnd: {
         disabledDate: time => {
           let beginDateVal = this.formField.begRepairTime
           if (beginDateVal) {
             return time.getTime() < new Date(beginDateVal).getTime();
           }
         }
      },
      //交车开始时间
      deliveryDateOptionsStart: {
         disabledDate: time => {
           let endDateVal = this.formField.endDeliveryDate
           if (endDateVal) {
             return time.getTime() > new Date(endDateVal).getTime();
           }
         }
      },
      //交车结束时间
      deliveryDateOptionsEnd: {
         disabledDate: time => {
           let beginDateVal = this.formField.begDeliveryDate
           if (beginDateVal) {
             return time.getTime() < new Date(beginDateVal).getTime();
           }
         }
      },
      //结清开始日期
      balanceDateOptionsStart: {
         disabledDate: time => {
           let endDateVal = this.formField.endBalanceDate
           if (endDateVal) {
             return time.getTime() > new Date(endDateVal).getTime();
           }
         }
      },
      //结清结束日期
      balanceDateOptionsEnd: {
         disabledDate: time => {
           let beginDateVal = this.formField.begBalanceDate
           if (beginDateVal) {
             return time.getTime() < new Date(beginDateVal).getTime();
           }
         }
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:30px;'
        }
      },
      //动态API配置
      dynamicApiConfig: {},
      //导出Excel文件名称
      excelName: '',
      //导出Excel文件Sheet名称
      excelSheetName: '',
      //网格列
      tableCols: [],

    }
  },
  created() {
    this.textQuery()
    //this.getSummaries()
  },
  watch:{
    formField(val){
      this.carBrandKey = this.carBrandKey + 1;
      this.carSeriesKey = this.carSeriesKey + 1;
      this.payKindKey = this.payKindKey + 1;
      this.businessTypeKey = this.businessTypeKey + 1;
      this.repairTypeKey = this.repairTypeKey + 1;
    }
  },
  methods: {
      getlookupValue(){},
      //把每一行的索引放进row
      tableRowClassName ({row, rowIndex}) {
        row.index = rowIndex;
      },
      //点击更多
      changeToggleParam() {
        console.log("进来了。。。")
        //debugger
          //this.toggleParam = !this.toggleParam
          if(this.toggleParam) {
            this.toggleParam = false;
          } else {
            this.toggleParam = true;
          }
      },
      handleSizeChange(val) {
          this.listQuery.pageSize = val
          this.textQuery()
      },
      handleCurrentChange(val) {
          this.listQuery.pageIndex = val
          this.textQuery()
      },
      //送修开始时间
      changeBegRepairTime(val) {
        this.formField.begRepairTime = val
      },
      //送修结束时间
      changeEndRepairTime(val) {
        this.formField.endRepairTime = val
      },
      //交车开始时间
      changeBegDeliveryDate(val) {
        this.formField.begDeliveryDate = val
      },
      //交车结束时间
      changeEndDeliveryDate(val) {
        this.formField.endDeliveryDate = val
      },
      //结清开始时间
      changeBegBalanceDate(val) {
        this.formField.begBalanceDate = val
      },
      //结清结束时间
      changeEndBalanceDate(val) {
        this.formField.endBalanceDate = val
      },
      //获取车辆品牌
      getBrandCode(val) {
        this.formField.carBrandCn = val;
        this.formField.carSeriesCode = "";
        this.formField.carTypeCode = "";
        //this.$refs.carSeriesSelect.reset();
        //this.$refs.partsCarTypeSelect.reset();
        this.$refs.carSeriesSelect.initData(val);
      },
      //获取车系
      getCarSeries(val) {
        this.formField.carSeriesCode = val;
        this.formField.carTypeCode = "";
        //this.$refs.partsCarTypeSelect.reset();
        this.$refs.partsCarTypeSelect.initData(val);
      },
      //获取车型
      getCarTypeCode(val) {
        this.formField.carTypeCode = val
      },
      //获取付费性质
      getPayKindValue(val) {
        this.formField.payKind = val
      },
      //获取业务类别
      getBusinessTypeValue(val) {
        this.formField.businessType = val
      },
      //获取维修类别
      getRepairTypeCodeValue(val) {
        this.formField.repairType = val
      },
      //获取服务代表
      getSaEmpId(val) {
        this.formField.saEmpId = val
      },
      //打开车型弹框
      // openCarType() {
      //     this.carTypeVisible = true
      // },
      //查询区获取选中的车型
      // getCarType(val) {
      //     this.carTypeVisible = false;
      //     this.formField.carTypeCode = val.CAR_TYPE_CODE;
      // },
      //关闭车型弹框
      // closeCarType(val) {
      //     this.carTypeVisible = val
      // },
      //打开经销商弹框
      openComQueChoMu() {
          //this.seComQueChoMuDlrVisible = true
          this.$refs.seComQueryChoDlrMul.open();
      },
      // //反结算单据复选框
      changeIsCancelBalance(val) {
        this.formField.isCancelBalance = val
      },
      // //是否追加复选框
      changeIsAdd(val) {
        this.formField.isAdd = val
      },
      // //作废单复选框
      changeIsQueryCancel(val) {
        this.formField.isQueryCancel = val
      },
      // //PDI单复选框
      changeIsQueryPdi(val) {
        this.formField.isQueryPdi = val
      },
      //查询区获取选中的经销商
      getComQueChoMu(val) {
        // this.seComQueChoMuDlrVisible = false;
        // for(let i = 0; i <val.length; i++) {
        //   if(val[i].hasOwnProperty('children')){
        //     val.splice(i,1)
        //     for (let j = 0; j < val.length; j++) {
        //       this.formField.dlrId.push(val[j].label)
        //     }
        //     console.log(this.formField)
        //   }
        // }
        for(let i = 0; i <val.length; i++) {
          this.formField.dlrId.push(val[i].dlrFullName)
        }
        console.log(this.formField.dlrId)
      },
      //获取经销商下拉框的值
      sendCode(val) {
        this.formField.dlrId = val
      },
      //关闭经销商弹窗
      closeComQueChoMu(val) {
          this.seComQueChoMuDlrVisible = val
      },
      //打开历史维修记录弹窗
      openWiHistoryRecord() {
        if(JSON.stringify(this.rowClickData) == '{}' || this.rowClickData.index == 0) {
            this.$alert('请选择一条派工单！', '信息提示', {
                confirmButtonText: '确定',
                type: 'warning',
                callback: action => {
                }
            });
        } else {
          this.wiHistoryRecordsVisible = true;
          this.$refs.wiHistoryRecords.getCustCarInfo(this.rowClickData)
        }
      },
      //关闭历史维修记录弹窗
      closePage(val) {
        this.wiHistoryRecordsVisible = val
      },
      //双击打开派工结算明细弹窗
      // dbRowClick(row, event) {
      //   if(row.index == 0) {
      //      return;
      //   } else {
      //     this.seRepairReportDetailVisible = true
      //     this.$refs.seRepairReportDetail.getData(row)
      //   }
      // },
      //关闭派工单明细弹窗
      closeRepairDetailPage(val) {
        this.seRepairReportDetailVisible = val
      },
      //打开选择备件弹窗
      openPaChoosePart() {
        this.paChoosePartVisible = true
      },
      //关闭选择备件弹窗
      closeChooseWiSelect(val) {
        this.paChoosePartVisible = val
      },
      //获取选择备件弹窗传来的数据(单选)
      getPaChoosePart(val) {
        this.paChoosePartVisible = false;
        this.formField.partNo = val[0].partNo;
      },
      textQuery(page, dataType, size) {
        const that = this
        that.listLoading = true
        let queryObj = {
          // api配置
          apiConfig: apiSeRepairUnionReportQuery.SeRepairReportQueryRepairUnionReport,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
              apiQueryRow:['dlrShortName','repairOrderCode','vin','custName','custTel','carBrandCn','engineNo','carSeriesName','carTypeCode','mileage',
              'saleDate','isAccidentCn','repairMan','repairTel','repairTime','repairStatue','deliveryDate','mainPayType','gatherState','balanceDate',
              'sWorkitemFeeHj','sPartFeeHj','sOtherFeeHj','sFeeAmount','sWorkitemFee','sPartFee','sOtherFee','sOldprice','realrebatefare',
              'realincomefare','runupAmount','saName','gatheringEmpName','cancelReason','disposeInfo','csDesc','recommendItem']
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: that.listQuery.pageSize,
            pageIndex: page || that.listQuery.pageIndex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.formField
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 构建导出Excel参数
        if (dataType === 'excel') {
          this.buildExportParam(queryObj, paramD)
        }
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
          if (dataType === 'excel') {
            // 下载Excel
            this.downloadExcel(response)
            this.listLoading = false
          } else {
            //返回json
            if(response.data[apiSeRepairUnionReportQuery.SeRepairReportQueryRepairUnionReport.ServiceCode].result === '1'
             && response.data[apiSeRepairUnionReportQuery.SeRepairReportQueryRepairUnionReport.ServiceCode].rows!=''){
              if(page) {
                  //查询完返回指定的page页数
                  that.listQuery.pageIndex= page;
              }
              that.pageTotal = response.data[apiSeRepairUnionReportQuery.SeRepairReportQueryRepairUnionReport.ServiceCode].records;
              that.queryList = response.data[apiSeRepairUnionReportQuery.SeRepairReportQueryRepairUnionReport.ServiceCode].rows;
              that.queryList.unshift(that.sums);
              this.sWorkitemFeeHjTotal = that.queryList[1].sWorkitemFeeHj;
              this.sPartFeeHjTotal = that.queryList[1].sPartFeeHj;
              this.sOtherFeeHjTotal = that.queryList[1].sOtherFeeHj;
              this.sFeeAmountTotal = that.queryList[1].sFeeAmount;
              this.sWorkitemFeeTotal = that.queryList[1].sWorkitemFee;
              this.sPartFeeTotal = that.queryList[1].sPartFee;
              this.sOtherFeeTotal = that.queryList[1].sOtherFee;
              this.sOldpriceTotal = that.queryList[1].sOldprice;
              this.sRealrebatefareTotal = that.queryList[1].sRealrebatefare;
              this.sRealincomefareTotal = that.queryList[1].sRealincomefare;
              this.sRunupAmountTotal = that.queryList[1].sRunupAmount;
              that.listLoading = false;
            }
          }

        })
      },
      //合计
      getSummaries(param) {
        const { columns, data } = param;
        columns.forEach((column, index) => {
          //debugger;
          // if (index === 1) {
          //   this.sums["id"] = '合计';//第一列显示为合计，不做计算
          //   return;
          // }
         switch(column.property) {
            case "dlrShortName":
            this.sums["dlrShortName"] = '合计'
            case "sWorkitemFeeHj":
            this.sums["sWorkitemFeeHj"] = this.sWorkitemFeeHjTotal + ' 元'
            break;
            case "sPartFeeHj":
            this.sums['sPartFeeHj'] = this.sPartFeeHjTotal + ' 元'
            break;
            case "sOtherFeeHj":
            this.sums['sOtherFeeHj'] = this.sOtherFeeHjTotal + ' 元'
            break;
            case "sFeeAmount":
            this.sums['sFeeAmount'] = this.sFeeAmountTotal + ' 元'
            break;
            case "sWorkitemFee":
            this.sums['sWorkitemFee'] = this.sWorkitemFeeTotal + ' 元'
            break;
            case "sPartFee":
            this.sums['sPartFee'] = this.sPartFeeTotal + ' 元'
            break;
            case "sOtherFee":
            this.sums['sOtherFee'] = this.sOtherFeeTotal + ' 元'
            break;
            case "sOldprice":
            this.sums['sOldprice'] = this.sOldpriceTotal + ' 元'
            break;
            case "realrebatefare":
            this.sums['realrebatefare'] = this.sRealrebatefareTotal + ' 元'
            break;
            case "realincomefare":
            this.sums['realincomefare'] = this.sRealincomefareTotal + ' 元'
            break;
             case "runupAmount":
            this.sums['runupAmount'] = this.sRunupAmountTotal + ' 元'
            break;
            default:
            this.sums[column.property] = '--'
            break;
          }
        });
        return this.sums;
      },
      rowClick(row,event) {
        if (row.index == 0) {
          return;
        } else {
          this.rowClickData = row
        }
      },
      //重置
      reset() {
        this.formField = {
          begRepairTime: '',
          begDeliveryDate: '',
          begDeliveryDate: '',
          endDeliveryDate: '',
          begBalanceDate: '',
          endBalanceDate: '',
          repairOrderStatus: '',
          gatheringState: '',
          repairOrderCode: '',
          carLicense: '',
          carBrandCn: '',
          carSeriesCode: '',
          carTypeCode: '',
          repairTel: '',
          payKind: '',
          businessType: '',
          repairType: '',
          saEmpId: '',
          wiName: '',
          partNo: '',
          accidentCn: '',
          dlrId: [],
          isCancelBalance: '',
          isAdd: '',
          isQueryCancel: '',
          isQueryPdi: ''
        }
        //this.$refs.carSeriesSelect.reset();
        //this.$refs.partsCarTypeSelect.reset();
      },
      // 下载Excel
      downloadExcel(data) {
        this.$utils.downloadFile(data, this.excelName)
      },
      // 构建导出Excel中台参数
      buildExportParam(queryObj, paramsObj) {
        var tmpCols = this.tableCols.filter(o => o.hidden !== true)
        console.log("this.tableCols")
        console.log(this.tableCols)
        // 网格列对象转为excel列对象
        var excelCols = {}
        for (var i = 0; i < tmpCols.length; i++) {
          excelCols[tmpCols[i].prop] = tmpCols[i].label
        }
        // 数据类型
        paramsObj.dataType = 'excel'
        // excel文件名称
        paramsObj.excelName = this.excelName
        // 根据请求API描述excel数据对象
        paramsObj.excels = [{
          // excel sheet名称
          title: this.excelSheetName,
          // 对应API服务编码
          actionName: queryObj.apiConfig.ServiceCode,
          // excel列
          columns: excelCols
      }]
    },
      //导出
      exportExcel(excelName, excelSheetName, pageSize) {
        console.log("hhhhhh")
        console.log(this.$refs.multipleTable)
        if (excelName) {
          this.excelName = excelName
        }
        if (excelSheetName) {
          this.excelSheetName = excelSheetName
        }
        this.textQuery(1, 'excel', pageSize)
      }
  }
}
</script>

<style lang="scss" scoped>
/*此处样式 是解决table表格出现横向滚动条时， 合并栏在滚动条下方的问题*/
.el-table {
    overflow: auto;
}
.el-table__header-wrapper,
.el-table__body-wrapper,
.el-table__footer-wrapper {
    overflow:visible;
}
.el-table__body-wrapper {
    overflow-x:visible !important;
}
/* 这个是为了解决前面样式覆盖之后伪类带出来的竖线 */
.el-table::after {
    position: relative;
}
</style>
