<!--
* description: 新增/修改施工单
* author: pukuim
* createdDate: 2019-07-24
* logs
-->
<template>
  <div class="app-container app-container-table">
    <div ref="contentDiv">
      <div class="filter-container filter-button filter-button-left">
        <!-- <el-button type="primary" size="small" @click="upAndDown">新增模板适用车型</el-button>
        <el-button size="small" @click="showCarType">选择车型</el-button>
        <el-button size="small" @click="deleteModelType">删除</el-button>
        <el-button size="small" @click="saveModelType">保存</el-button> -->
        <el-button size="small" @click="showSelectCust()">选择客户</el-button>
        <el-button size="small" @click="showRepairReserver()">导入预约</el-button>
        <el-button size="small" @click="showRepairMode()">导入模版</el-button>
        <el-button size="small" @click="showSelectCust()" v-if="false">导入召回专案</el-button>
        <el-button size="small" v-if="canSeeHistory" @click="showRepairHistory()">维修履历</el-button>
        <el-button size="small">客户车辆详情</el-button>
        <el-button size="small" @click="saveRepairOrder('1')">保存</el-button>
        <el-button size="small" @click="saveRepairOrder('0')">暂存</el-button>
      </div>
      <div class="filter-container filter-params">
        <div class="filter-container filter-title">客户车辆信息</div>
        <mix-form
          ref="carFrom"
          :dynamicFormFields="carFormFields"
          :dynamicFieldsData="saveData"
        ></mix-form>
        <!-- <el-col :span="5">
          <div class="grid-content label">车主姓名</div>
          <div class="grid-content content">
            <lableName :curLabelName="saveData.custName" :isShowLabel="true" :isRequire="false"></lableName>
            <el-tooltip v-if="userCompanyInfo.custFullName!=''" class="item" effect="dark" placement="bottom-start">
              <div slot="content">协议单位{{userCompanyInfo.custFullName}}<br />协议有效期{{userCompanyInfo.policyBegDate}}
                至 {{userCompanyInfo.policyEndDate}}</div>
              <font color="red">【协议客户】</font>
            </el-tooltip>
          </div>
        </el-col> -->
      </div>
      <div class="filter-container filter-params">
        <div class="filter-container filter-title">维修描述及安排</div>
          <el-row>
            <mix-form
              ref="repairFrom"
              :dynamicFormFields="repairFormFields"
              :dynamicFieldsData="saveData"
            ></mix-form>
          </el-row>
      </div>
      <div class="filter-container filter-params" ref="serviceActicve">
        <div class="filter-container filter-title">服务活动</div>
      </div>
      <div class="filter-container filter-params" ref="repairWi">
        <div class="filter-container filter-title">
          <span>维修工时</span>
        </div>
          <el-row>
            <el-col :span="4">
              <label>付费性质</label>
              <el-select collapse-tags filterable v-model="payKind" placeholder="请选择" @change="payKindChange()"
                size="small">
                <el-option v-for="(item, i) in payKindOptions" :key="`payKind_${i}`" :label="item.text"
                  :value="item.code">{{item.text}}</el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
            <el-popover placement="bottom" trigger="focus" :visible-arrow="false">
              <el-row :key="item.wiCode" v-for="item in wiSearchDataList" @click.native="clickSearchWiItem(item)"
                class="search-result-item">
                <el-col :span="5">{{ item.wiCode }}</el-col>
                <el-col :span="19">{{ item.wiName }}</el-col>
              </el-row>
              <el-input slot="reference" ref="fastSearchWiInput" v-model="fastSearchModel.wiCodeOrName" style="width: 85%" placeholder="请输入工时编码或工时名称" size="small" />
            </el-popover>
            <el-button size="small" @click="showRepairWi()">高级搜索</el-button>
            </el-col>
            <el-col :span="12">
              <el-button size="small" @click="delRepairWi()">删除</el-button>
              <el-button size="small" @click="showRepairWi()">新增</el-button>
              <el-button size="small" @click="openOrderWiShareCheck()">分摊</el-button>
              <!-- <li v-if="menu['wi'].curindex != null" @click="delRepairWi()">删除工时</li>
              <li @click="showRepairWi()">新增工时</li>
              <li v-if="menu['wi'].curindex != null && menu['wi'].curPayKindName == '保修'" @click="openOrderWiShareCheck()">
                工时分摊</li> -->
            </el-col>
          </el-row>
        <!-- <el-table  @contextmenu.prevent.native="openMenu($event,'wi')" @row-contextmenu="rowContextWi" ref="WiTable">
          <el-table-column align="center" label="序号" width="60" type='index' prop="repairWiId">
          </el-table-column>
          <el-table-column label="工时编码" prop="wiCode" align="center">
            <template slot-scope="scope">
              {{scope.row.wiCode}}
            </template>
          </el-table-column>
          <el-table-column label="维修内容" prop="wiName" align="center" width="100">
            <template slot-scope="scope">
              {{ scope.row.wiName }}
            </template>
          </el-table-column>
          <el-table-column label="付费性质+" align="center" width="120px">
            <template slot-scope="scope">
              <div>
                <el-select collapse-tags filterable v-model="scope.row.payKind"
                  @change="wiPayKindChange(scope.$index)" placeholder="请选择" :disabled="true" size="small">
                  <el-option v-for="(item, i) in payKindOptions" :key="`wiPayKind_${i}`" :label="item.text"
                    :value="item.code">{{item.text}}</el-option>
                </el-select>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="工时数量" align="center">
            <template slot-scope="scope">
              {{ scope.row.saleWorkQty }}
            </template>
          </el-table-column>
          <el-table-column label="工时单价" align="center">
            <template slot-scope="scope">
              {{scope.row.wiPrice}}
            </template>
          </el-table-column>
          <el-table-column label="工时费用合计" align="center" width="120">
            <template slot-scope="scope">
              {{scope.row.wiAmount}}
            </template>
          </el-table-column>
          <el-table-column label="业务类别+" align="center" width="140px">
            <template slot-scope="scope">
              <el-select collapse-tags filterable v-model="scope.row.businessType" placeholder="请选择"
                :disabled="scope.row.payKind != payKind" size="small">
                <el-option v-for="(item, i) in businessTypeOptions['wi'+scope.$index]" :key="`wiBussinessType_${i}`"
                  :label="item.text" :value="item.code">{{item.text}}</el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="维修类别+" align="center" width="120">
            <template slot-scope="scope">
              <el-select collapse-tags filterable v-model="scope.row.repairTypeCode" placeholder="请选择"
                :disabled="scope.row.payKind != payKind" size="small">
                <el-option v-for="(item, i) in repairTypeOptions" :key="`wiRepairType_${i}`" :label="item.text"
                  :value="item.code">{{item.text}}</el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="折扣率(%)+" align="center" width="100">
            <template slot-scope="scope">
              <el-input v-if="scope.row.payKindName == '保险' && scope.row.payKind == payKind"
                @change="wiColumnEditChange(scope.$index,'wiDiscountRate')" v-model="scope.row.wiDiscountRate"
                size="small" />
              <span v-else>{{scope.row.wiDiscountRate}}</span>

            </template>
          </el-table-column>
          <el-table-column label="费用预估" align="center">
            <template slot-scope="scope">
              {{scope.row.wiDueAmount}}
            </template>
          </el-table-column>
          <el-table-column label="备注+" align="center" width="180">
            <template slot-scope="scope">
              <el-input :disabled="scope.row.payKind != payKind" v-model="scope.row.remark" size="small" />
            </template>
          </el-table-column>
        </el-table> -->
        <mix-table 
        ref="repairWiTable" 
        :isDialog="true" 
        :listData="saveData.wiinfo"
        :dynamicTableCols="wiInfoCols"></mix-table>
      </div>
      <div class="filter-container filter-params" ref="repairPart">
        <div class="filter-container filter-title">
          <span>维修配件</span>
        </div>
        <el-row>
          <el-col :span="8">
          <el-popover placement="bottom" trigger="focus" :visible-arrow="false">
            <el-row :key="item.wiCode" v-for="item in wiSearchDataList" @click.native="clickSearchWiItem(item)"
              class="search-result-item">
              <el-col :span="5">{{ item.wiCode }}</el-col>
              <el-col :span="19">{{ item.wiName }}</el-col>
            </el-row>
            <el-input slot="reference" ref="fastSearchWiInput" v-model="fastSearchModel.wiCodeOrName" style="width: 85%" placeholder="请输入工时编码或工时名称" size="small" />
          </el-popover>
          <el-button size="small" @click="showRepairPart()">高级搜索</el-button>
          </el-col>
          <el-col :span="16">
            <el-button size="small" @click="delRepairPart()">删除</el-button>
            <el-button size="small" @click="showRepairPart()">新增</el-button>
            <el-button size="small" @click="openOrderPartShareCheck()">配件</el-button>
          </el-col>
        </el-row>
        <mix-table 
        ref="repairPartTable" 
        :isDialog="true" 
        :listData="saveData.partinfo"
        :dynamicTableCols="spInfoCols"></mix-table>
      </div>
      <div class="filter-container filter-params" ref="repairOther">
        <div class="filter-container filter-title">
          <span>其他费用</span>
        </div>
        <!-- <el-table :row-class-name="tableRowClassName" v-loading="false" class="multipleTable"
          :data="saveData.otherfeeInfo" element-loading-text="Loading" border fit stripe :height="200" @contextmenu.prevent.native="openMenu($event,'other')"
          @row-contextmenu="rowContextOther" ref="OtherTable">
          <el-table-column align="center" label="序号" width="60" type='index' prop="repairWiTableId">
          </el-table-column>
          <el-table-column label="其他费用类别" prop="costTypeName" align="center" width="120">
            <template slot-scope="scope">
              {{ scope.row.costTypeName }}
            </template>
          </el-table-column>
          <el-table-column label="付费性质+" align="center" width="120">
            <template slot-scope="scope">
              <div>
                <el-select collapse-tags filterable v-model="scope.row.payKind"
                  @change="otherPayKindChange(scope.$index)" placeholder="请选择" :disabled="true" size="small">
                  <el-option v-for="(item, i) in payKindOptions" :key="`othPayKind_${i}`" :label="item.text"
                    :value="item.code">{{item.text}}</el-option>
                </el-select>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="业务类别+" align="center" width="140">
            <template slot-scope="scope">
              <el-select collapse-tags filterable v-model="scope.row.businessType" placeholder="" size="small">
                <el-option v-for="(item, i) in businessTypeOptions['other'+scope.$index]"
                  :key="`othBusinessType_${i}`" :label="item.text" :value="item.code">{{item.text}}</el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="其他费用+" align="center">
            <template slot-scope="scope">
              <el-input placeholder v-model="scope.row.otherAmount"
                @change="otherColumnEditChange(scope.$index,'otherAmount')" size="small" />
            </template>
          </el-table-column>
          <el-table-column label="备注+" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.remark" size="small" />
            </template>
          </el-table-column>

        </el-table> -->
        <el-row>
          <el-col :span="8">
            <el-popover placement="bottom" trigger="focus" :visible-arrow="false">
              <el-row :key="item.wiCode" v-for="item in wiSearchDataList" @click.native="clickSearchWiItem(item)"
                class="search-result-item">
                <el-col :span="5">{{ item.wiCode }}</el-col>
                <el-col :span="19">{{ item.wiName }}</el-col>
              </el-row>
              <el-input slot="reference" ref="fastSearchWiInput" v-model="fastSearchModel.wiCodeOrName" style="width: 85%" placeholder="请输入工时编码或工时名称" size="small" />
            </el-popover>
            <el-button size="small" @click="showRepairOther()">高级搜索</el-button>
          </el-col>
          <el-col :span="16">
            <el-button size="small" @click="delRepairPart()">删除</el-button>
            <el-button size="small" @click="showRepairOther()">新增</el-button>
            <el-button size="small" @click="openOrderPartShareCheck()">分摊</el-button>
          </el-col>
        </el-row>
        <mix-table 
          ref="repairOtherTableTable" 
          :isDialog="true" 
          :listData="saveData.otherfeeInfo"
          :dynamicTableCols="otherInfoCols"></mix-table>
      </div>
      <!-- <ul v-show="menu['wi'].visible" :style="{left:menu['wi'].left+'px',top:menu['wi'].top+'px'}"
        class="contextmenu">
        <li v-if="menu['wi'].curindex != null" @click="delRepairWi()">删除工时</li>
        <li @click="showRepairWi()">新增工时</li>
        <li v-if="menu['wi'].curindex != null && menu['wi'].curPayKindName == '保修'" @click="openOrderWiShareCheck()">
          工时分摊</li>
      </ul> -->
      <ul v-show="menu['part'].visible" :style="{left:menu['part'].left+'px',top:menu['part'].top+'px'}"
        class="contextmenu">
        <li v-if="menu['part'].curindex != null" @click="delRepairPart()">删除备件</li>
        <li @click="showRepairPart()">新增备件</li>
        <li v-if="menu['part'].curindex != null && menu['part'].curPayKindName == '免保'" @click="openCheckFreePart()">
          换件补差价</li>
        <li v-if="menu['part'].curindex != null && menu['part'].curPayKindName == '保修'"
          @click="openOrderPartShareCheck">备件分摊</li>
      </ul>
      <ul v-show="menu['other'].visible" :style="{left:menu['other'].left+'px',top:menu['other'].top+'px'}"
        class="contextmenu">
        <li v-if="menu['other'].curindex != null" @click="delRepairOther()">删除其他费用</li>
        <li @click="showRepairOther()">新增其他费用</li>
      </ul>
      <div class="filter-container filter-params">
        <div class="filter-container filter-title">费用统计</div>
        <el-row>
          <el-col :span="4">
            <div class="grid-content label">工时费</div>
            <div class="grid-content content">
              <div class="feeinfo">{{ saveData.wiDueAmount }}&nbsp;</div>元
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content label">备件费</div>
            <div class="grid-content content">
              <div class="feeinfo">{{ saveData.partDueFee }}&nbsp;</div>元
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content label">其他费</div>
            <div class="grid-content content">
              <div class="feeinfo">{{ saveData.otherAmount }}&nbsp;</div>元
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content label">整单合计</div>
            <div class="grid-content content">
              <div class="feeinfo">{{ saveData.repairOrderAmount }}&nbsp;</div>元
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content label">折扣费</div>
            <div class="grid-content content">
              <div class="feeinfo">{{ saveData.discountAmount }}&nbsp;</div>元
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content label">折后合计</div>
            <div class="grid-content content">
              <div class="feeinfo">{{ saveData.factAmount }}&nbsp;</div>元
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <div class="grid-content label">付费</div>
            <div class="grid-content content">
              <div class="feeinfo">{{ feeInfo['普通'] }}&nbsp;</div>元
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content label">保修</div>
            <div class="grid-content content">
              <div class="feeinfo">{{ feeInfo['保修'] }}&nbsp;</div>元
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content label">免保</div>
            <div class="grid-content content">
              <div class="feeinfo">{{ feeInfo['免保'] }}&nbsp;</div>元
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content label">内部</div>
            <div class="grid-content content">
              <div class="feeinfo">{{ feeInfo['内部'] }}&nbsp;</div>元
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content label">协议</div>
            <div class="grid-content content">
              <div class="feeinfo">{{ feeInfo['协议'] }}&nbsp;</div>元
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content label">保险</div>
            <div class="grid-content content">
              <div class="feeinfo">{{ feeInfo['保险'] }}&nbsp;</div>元
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 选择客户弹窗 -->
      <seCarOwnerCustModal ref="seCarOwnerCustModal" :seCarOwnerCustModalVisible="seCarOwnerCustModalVisible" @close="closeCarOwnerCust"></seCarOwnerCustModal>
      <!-- 导入模板 -->
      <seBuRepairModeModal ref="seBuRepairModeModal" :seBuRepairModeModalVisible="seBuRepairModeModalVisible" @sentCode="getRepairModeData" @close="closeRepairMode"></seBuRepairModeModal>
      <!-- 选择工时弹窗 -->
      <seChooseWiSelect ref="seChooseWiSelect" :seChooseWiSelectVisibles="wiSelectShow" :title="1" @seChooseWiData="getChooseWiSelect"></seChooseWiSelect>
      <!-- 选择备件弹窗 -->
      <paChoosePart :paChoosePartVisible="paChoosePartVisible" :title="1" @seChoosePartData="getChoosePartSelect" @close="closeChoosePartSelect">
      </paChoosePart>
      <!-- 选择其他费用弹窗 -->
      <chooseOtherFeeType ref="chooseOtherFeeType" @changeCode="getOtherfeeData" />
      <!-- 维修工单_预约导入 -->
      <seBuRepairReserverDlr ref="seBuRepairReserverDlr" @changeCode="getRepairReserverSelect" />
      <!-- 维修施工单-工时分摊 -->
      <OrderWiShareCheck ref="OrderWiShareCheck" @changeCode="getOrderWiShareCheck" />
      <!-- 维修施工单-换件补差校验 -->
      <CheckFreePart ref="CheckFreePart" @changeCode="getCheckFreePart" />
      <!-- 维修施工单-备件分摊 -->
      <OrderPartShareCheck ref="OrderPartShareCheck" @changeCode="getOrderPartShareCheck" />
      <!-- 查看历史维护数据 -->
      <seBuRepairHistoryQueryDetail ref="repairHistory" @ClosePage="getRepairHistoryClose" :dialogWiModelVisible="dialogWiModelVisible"/>
    </div>
  </div>
</template>
<script>
import { seApis } from '@/api/graphQLApiList/se'
import { orgApis } from '@/api/graphQLApiList/org'
import { 
  doQueryCarCustInfo, 
  queryLookupValue, 
  doQueryPayBusiness, 
  doQueryRepairReserverDetail, 
  doQueryCommonWiPrice, 
  doQueryRepairPartPrice, 
  doSaveRepairOrder, 
  doQueryRepairOrderDetail
} from '@/api/se/process/workorder/repairWorkOrderEdit'
import { doQuerySaList, queryseCustAndCar, getDate, getDateChange, getDayChange  } from '@/api/se/process/workorder/repairWorkOrderList'
import seCarOwnerCustModal from '@/components/se/seCarOwnerCustModal'
import seBuRepairModeModal from '@/components/se/seBuRepairModeModal'
import { queryCompanyList } from '@/api/se/basedata/repair/seDbPolicyCompany'
import { repairMethodsMixin } from './repairMethodsMixin'
import { repairMethodsImportMixin } from './repairMethodsImportMixin'
import { repairDataMixin } from './repairDataMixin'
import { tagsViewMixin } from '@/layout/components/TagsView/tagsViewMixin'
// import LookupValue from '@/components/org/LookupValue'
import seBuRepairHistoryQueryDetail from '@/views/se/public/repairHistory/seBuRepairHistoryQueryDetail'
import seChooseWiSelect from '@/components/se/seChooseWiSelect'
import paChoosePart from '@/components/se/paChoosePart'
import seBuRepairReserverDlr from '@/components/se/seBuRepairReserverDlr/seBuRepairReserverDlr'
import chooseOtherFeeType from '@/components/se/chooseOtherFeeType/chooseOtherFeeType'
import OrderWiShareCheck from '@/components/se/seBuRepairOrderWiShareCheckDrl'
import CheckFreePart from '@/components/se/seBuRepairCheckFreePartDlr'
import OrderPartShareCheck from '@/components/se/seBuRepairOrderPartShareCheckDrl'
import { doSeChooseWiQuery } from '@/api/se/seChooseWiSelect'
import lableName from "@/components/lableName"
import mixForm from "@/components/basicComponent/mixForm"
import mixTable from "@/components/basicComponent/mixTable"
export default {
  name: 'RepairWorkOrderEdit',
  components: {
    seCarOwnerCustModal,
    seBuRepairModeModal,
    // LookupValue,
    seBuRepairHistoryQueryDetail,
    seChooseWiSelect,
    paChoosePart,
    seBuRepairReserverDlr,
    chooseOtherFeeType,
    OrderWiShareCheck,
    CheckFreePart,
    OrderPartShareCheck,
    lableName,
    mixForm,
    mixTable 
  },
  mixins: [repairDataMixin, repairMethodsMixin, repairMethodsImportMixin, tagsViewMixin],
  data() {
    return {
      manDivStyle: {
        height: '100%'
      },
      carFormFields:[
        {type: 'inputTxt', label: 'VIN码', codeField: 'vin', readonly: true},
        {type: 'inputTxt', label: '车牌号', codeField: 'carLicenseNo', readonly: true},
        {type: 'inputTxt', label: '车辆品牌', codeField: 'carBrandName', readonly: true},
        {type: 'inputTxt', label: '车型', codeField: 'buyDate', readonly: true},
        {type: 'inputTxt', label: '购车日期', codeField: 'buyDate', readonly: true},
        {type: 'inputTxt', label: '车主姓名', codeField: 'custName', readonly: true},
        {type: 'inputTxt', label: '车主电话', codeField: 'custTel', readonly: true},
        {type: 'inputTxt', label: '颜色', codeField: 'carColorName', readonly: true},
        {type: 'inputTxt', label: '使用人姓名', codeField: 'userName', readonly: true},
        {type: 'inputTxt', label: '使用人电话', codeField: 'userTel', readonly: true},
        {type: 'inputTxt', label: '客户地址', codeField: 'addr', readonly: true},
        {type: 'inputTxt', label: '车主性质', codeField: 'custClassName', readonly: true},
        {type: 'inputTxt', label: '客户备注', codeField: 'remark', readonly: true},
        {type: 'inputTxt', label: '客户地址', codeField: 'addr', span: 12, readonly: true}
      ],
      carData: {},
      repairFormFields:[ 
        {type: 'dropdownList', label: '服务代表', codeField: 'saName', options: [], rules: { required: true, message: '请输入邮箱地址', trigger: 'blur' }},
        {type: 'inputDate', label: '送修时间', codeField: 'repairTime', dateType: 'datetime', rules: { required: true, message: '请输入邮箱地址', trigger: 'blur' }},
        {type: 'inputDate', label: '预计交车时间', codeField: 'preGetDate', dateType: 'datetime', rules: { required: true, message: '请输入邮箱地址', trigger: 'blur' }},
        {type: 'inputNumber', label: '行驶里程(Km)', codeField: 'mileage', rules: { required: true, message: '请输入邮箱地址', trigger: 'blur' }},
        {type: 'inputTxt', label: '送修人', codeField: 'repairMan'},
        {type: 'inputTxt', label: '送修人电话', codeField: 'repairTel'},
        {type: 'dropdownList', label: '油量', codeField: 'oil', options: [], rules: { required: true, message: '请输入邮箱地址', trigger: 'blur' }},
        {type: 'dropdownList', label: '电量', codeField: 'electricPercent', options: []},
        {type: 'checkbox', label: '救援', codeField: 'isRescueB', span: 2,  class: ''},
        {type: 'checkbox', label: '优先派工', codeField: 'isFirstB', span: 2,  class: ''},
        {type: 'checkbox', label: '洗车', codeField: 'isCleanB', span: 2, class: ''},
        {type: 'inputTxtArea', label: '客户描述', codeField: 'csDesc', rules: { required: true, message: '请输入邮箱地址', trigger: 'blur' }},
        {type: 'inputTxtArea', label: '初检结果', codeField: 'csDesc', rules: { required: true, message: '请输入邮箱地址', trigger: 'blur' }},
        {type: 'inputTxtArea', label: '建议维修项目', codeField: 'recommendItem'}
      ],
      wiInfoCols: [
        { label: "工时编码", codeField: "wiCode"},
        { label: "维修内容", codeField: "wiName", comps: { type: 'inputTxt' }, isEdit: true },
        { label: "付费性质", codeField: "payKind"},
        { label: "工时数量", codeField: "saleWorkQty", comps: { type: 'inputNum', event: () => 0 }, isEdit: true },
        { label: "工时单价", codeField: "wiPrice", comps: { type: 'inputNum', event: () => 0 }, isEdit: true },
        { label: "工时费用合计", codeField: "wiAmount" },
        { label: "业务类别", codeField: "businessType", comps: { type: 'drowdownList' }, isEdit: true },
        { label: "维修类别", codeField: "repairTypeCode", comps: { type: 'drowdownList' }, isEdit: true },
        { label: "折扣率(%)", codeField: "wiDiscountRate", comps: { type: 'inputNum', event: () => 0 }, isEdit: true },
        { label: "费用预估", codeField: "wiDueAmount" },
        { label: "备注", codeField: "remark", comps: { type: 'inputTxtArea' }, isEdit: true }
      ],
      spInfoCols: [
        { label: "备件编码", codeField: "partNo"},
        { label: "备件名称", codeField: "partName", comps: { type: 'inputTxt' }, isEdit: true },
        { label: "付费性质", codeField: "payKind"},
        { label: "备件数量", codeField: "partQty", comps: { type: 'inputNum', event: () => 0 }, isEdit: true },
        { label: "备件单价", codeField: "partPrice", comps: { type: 'inputNum', event: () => 0 }, isEdit: true },
        { label: "备件费用合计", codeField: "partAmount" },
        { label: "业务类别", codeField: "businessType", comps: { type: 'drowdownList' }, isEdit: true },
        { label: "维修类别", codeField: "repairTypeCode", comps: { type: 'drowdownList' }, isEdit: true },
        { label: "折扣率(%)", codeField: "partDiscount", comps: { type: 'inputNum', event: () => 0 }, isEdit: true },
        { label: "费用预估", codeField: "partDueAmount" },
        { label: "备注", codeField: "remark", comps: { type: 'inputTxtArea' }, isEdit: true }
      ],
      otherInfoCols: [
        { label: "其他费用类别", codeField: "costTypeName"},
        { label: "付费性质", codeField: "payKind"},
        { label: "业务类别", codeField: "businessType", comps: { type: 'drowdownList' }, isEdit: true },
        { label: "其他费用", codeField: "otherAmount", comps: { type: 'inputNum' }, isEdit: true },
        { label: "备注", codeField: "remark", comps: { type: 'inputTxtArea' }, isEdit: true }
      ],
      wiSelectShow: false,
      //查询服务代表下拉框
      seQueryField:{
        dlrId:'',
        isEnable:'',
        positionCode:'SE0089',//服务代表岗位
        deptId:'',
        stationId:'',
        isEnable: '1'//在职
      },
    }
  },
  created() {
    this.querySaList()// 查询服务代表下拉框
    this.queryLookupValueList()//查询电量、维修类别
    this.queryPayBusinessList()//查询业务类别
    this.initData()
    if (this.userCompanyQuery.dlrId !== '' && this.userCompanyQuery.custName !== '') {
      this.getUserCompany()// 查询用户协议公司
      this.getCarCustInfo()// 查询车辆信息
    }
  },
  mounted() {
    // 调用AppMain中的方法设置网格高度（自适应）
    window.addEventListener('resize', () => {
      this.setTableHeight(true)
    })
    this.setTableHeight()
  },
  methods: {
    setTableHeight(isResize) {
      this.$nextTick(() => {
        // 调用AppMain中的方法设置网格高度（自适应）
        var appMainHeight = this.$utils.getAppMainHeight(this.$route.path, this)
        if (appMainHeight > 0) {
          var curTableHeight = appMainHeight
          // 减去margin-top/bottom值
          this.manDivStyle.height = curTableHeight - 0 + 'px'
        }
      })
    },
    initData() {
      this.resetStatisticAmount()
      if (this.$route.query != null) {
        if (this.$route.query.repairOrderId != null && this.$route.query.repairOrderId !== '') {
          this.saveData.repairOrderId = this.$route.query.repairOrderId
          var that = this
          doQueryRepairOrderDetail(1, 1, { repairOrderId: this.saveData.repairOrderId }).then(response => {
            var resData = response.data[seApis.seBuRepairOrderQueryFindAll.ServiceCode]
            if (resData.result === '1' && resData.rows !== null) {
              that.loadInitData(resData.rows)
            } else {
              this.$alert('加载出错，' + resData.msg, '提示', {
                confirmButtonText: '确定',
                type: 'error'
              })
            }
          })
        }
      }
    },
    // 选择客户
    showSelectCust() { 
      this.seCarOwnerCustModalVisible = true
    },
    // 选择模版
    showRepairMode() {
      if (!this.hasCustomer()) return
      this.seBuRepairModeModalVisible = true
    },
    // 选择工时
    showRepairWi() { 
      if (!this.hasCustomer()) return
      if (this.isPaykindFree()) return
      let wi = { isSystemDisabled: false, wiName: '', wiCode: '', operatePartId: '', isSystem: '', carTypeCode: '', carTypeCodeDisabled: false }
      if (this.payKindName === '保修') {
        wi.isSystemDisabled = true
        wi.isSystem = '1'
        wi.carTypeCode = this.saveData.carTypeCode
        wi.carTypeCodeDisabled = true
      }
      let car = { carBrandCode: this.saveData.carBrandCode, carSeriesCode: this.saveData.carSeriesCode, carSeriesCn: this.saveData.carSeriseCn }
      this.wiSelectShow = true
      this.$refs.seChooseWiSelect.open(wi, car)
    },
    // 选择备件
    showRepairPart() { 
      if (!this.hasCustomer()) return
      if (this.isPaykindFree()) return
      this.paChoosePartVisible = true
    },
    // 选择其他费用
    showRepairOther() { 
      if (!this.hasCustomer()) return
      if (this.isPaykindFree()) return
      var obj = { isSystem: '', isSystemDisabled: false }// 传入的查询条件
      if (this.payKindName === '保修') {
        obj.isSystemDisabled = true
        obj.isSystem = '1'
      }
      this.$refs.chooseOtherFeeType.open(obj)
      // this.paChoosePartVisible = true;
    },
    // 导入预约
    showRepairReserver() { 
      if (!this.hasCustomer()) return
      this.$refs.seBuRepairReserverDlr.open()
    },
     // 打开工时分摊
    openOrderWiShareCheck() {
      var curIndex = this.menu['wi'].curindex
      var row = this.saveData.wiinfo[curIndex]
      var obj = {}
      for (var key in row) {
        obj[key] = row[key]
      }
      obj.dueAmount = row.wiDueAmount
      obj.memDiscount = row.wiDiscountRate
      obj.discountAmount = row.discountAmount
      this.$refs.OrderWiShareCheck.open(obj)
    },
    getOrderWiShareCheck(val) { // 工时分摊返回
    },
    openCheckFreePart() { // 打开免保补差价
      var curIndex = this.menu['part'].curindex
      var row = this.saveData.partinfo[curIndex]
      var obj = {
        dueAmount: row.partDueAmount,
        otherPrice: 0,
        otherDiscount: 100,
        otherDueAmount: 0,
        custPrice: row.partPrice,
        custDiscount: row.partDiscount,
        custDueAmount: row.partDueAmount
      }
      for (var key in row) {
        obj[key] = row[key]
      }
      this.checkFreePartRow = obj
      console.log('补差价参数' + JSON.stringify(this.checkFreePartRow))
      this.$refs.CheckFreePart.open(obj)
    },
    getCheckFreePart(val) { // 打开免保补差价弹窗
    },
    openOrderPartShareCheck() { // 打开备件分摊
      var curIndex = this.menu['part'].curindex
      var row = this.saveData.partinfo[curIndex]
      if (this.saveData.partshare.filter(o => o.partNo === row.partNo).length === 0) {
        var obj = {}
        for (var key in row) {
          obj[key] = row[key]
        }
        obj.dueAmount = row.partDueAmount
        obj.businessTypeName = this.getPartBusiTypeName(curIndex, row.businessType)
        this.$refs.OrderPartShareCheck.open(obj)
      } else {
        this.$alert('已经保存过备件分摊金额，不能再次保存', '提示', {
          confirmButtonText: '确定',
          type: 'info'
        })
      }
    },
    getOrderPartShareCheck(val) { // 备件分摊返回
      if (this.saveData.partshare.filter(o => o.partNo === val.partNo).length === 0) {
        this.saveData.partshare.push(val)
      }
    },
    //close选择客户弹窗回调
    closeCarOwnerCust(data) {
      if(data !== '!**!'){
        let custNo = [];
        let carId = [];
        for (let i = 0; i < data.length; i++) {
          custNo.push(data[i].dlrCustNo)
          carId.push(data[i].carId)
        }
        let dataInfo = {
          dlrId: this.$store.getters.orgInfo.DLR_ID,
          carId: carId.join(','),
          dlrCustNo: custNo.join(",")
        }
        queryseCustAndCar(dataInfo).then(response => {
          let res = response.data[seApis.seCustAndCarQueryBack.ServiceCode]
          if(res.result === '1'){
            this.getCarOwnerCustData(res.rows)
          }
        })
      }
      this.seCarOwnerCustModalVisible = false
    },
    // 选择客户后返回信息
    getCarOwnerCustData(custRow) { 
      if (custRow) {
        this.custInfo = custRow[0]
        this.userCompanyQuery.custName = this.custInfo.carUser[0].custName
        this.carCustInfoQuery.dlrCustNo = this.custInfo.dlrCustNo
        this.saveData.carTypeCode = this.custInfo.carInfo[0].carTypeCode
        //送修人、电话关联使用人、电话
        this.saveData.repairMan = this.custInfo.carOwner[0].custName
        this.saveData.repairTel = this.custInfo.carOwner[0].phone
        this.getUserCompany()
        this.getCarCustInfo()
        //车辆信息赋值给saveData
        this.copyToSaveData()
      }
    },
    //close 导入模板
    closeRepairMode(val) {
      this.seBuRepairModeModalVisible = val
    }, 
    // 获取用户协议公司
    getUserCompany() {
      queryCompanyList(10, 1, this.userCompanyQuery).then(response => {
        var tempList = response.data[seApis.seDbPolicyCompanyQuery.ServiceCode].rows

        if (tempList != null && tempList.length > 0) {
          var row = tempList[0]
          this.userCompanyInfo.custFullName = row.custFullName
          this.userCompanyInfo.policyBegDate = row.policyBegDate
          this.userCompanyInfo.policyEndDate = row.policyEndDate
        } else {
          this.userCompanyInfo.custFullName = ''
          this.userCompanyInfo.policyBegDate = ''
          this.userCompanyInfo.policyEndDate = ''
        }
      })
    },
    // 获取用户车辆信息、地址信息
    getCarCustInfo() { 
      return
      // if (this.carCustInfoQuery.dlrCustNo !== '') {
      //   const that = this
      //   doQueryCarCustInfo(10, 1, this.carCustInfoQuery).then(response => {
      //     var tempList = response.data[seApis.seCommonQueryCarCustInfo.ServiceCode].rows
      //     if (tempList != null && tempList.length > 0) {
      //       var row = tempList[0]
      //       // that.custInfo.custClassName=row.custClassName;
      //       that.saveData.addr = row.addr
      //       that.$set(that.saveData, 'custClassName', row.custClassName)// 视图及时更新
      //     } else {
      //       // that.custInfo.custClassName=''
      //       that.saveData.addr = ''
      //       that.$set(that.saveData, 'custClassName', '')// 视图及时更新
      //     }
      //   })
      // }
    },
    // 查询服务代表
    querySaList() { 
      const that = this
      // 转换了中台请求格式数据
      doQuerySaList(-1, 1, that.seQueryField)
        .then(response => {
          if (response.data[seApis.seCommonQueryServiceSa.ServiceCode].result === '1' ) {
            const tempList = response.data[seApis.seCommonQueryServiceSa.ServiceCode].rows
            var tempSaEmpOptions = []
            tempList.forEach(row => {
              tempSaEmpOptions.push({ value: row.empId, label: row.empName })
            })
            that.repairFormFields[0].options = tempSaEmpOptions
            that.$refs.repairFrom.reloadFormFields('saName', 'options', tempSaEmpOptions)
          }
        })
    },
     // 获取用户协议公司
    queryLookupValueList() {
      const that = this
      queryLookupValue(['SE0038', 'SE0010']).then(response => {
        let retData = response.data.A
        if (retData.result === '1') {
          //油量
          const tempList = response.data.A.rows
          let tempOptions = []
          tempList.forEach(row => {
            tempOptions.push({ value: row.lookupValueCode, label: (Number(row.lookupValueName) * 100).toFixed(0) + '%' })
          })
          that.repairFormFields[6].options = tempOptions
          that.repairFormFields[7].options = tempOptions
          that.$refs.repairFrom.reloadFormFields('oil', 'options', tempOptions)
          that.$refs.repairFrom.reloadFormFields('electricPercent', 'options', tempOptions)
          //维修类别
          const arr = response.data.B.rows
          let options = []
          arr.forEach(row => {
            options.push({ value: row.lookupValueCode, label: row.lookupValueName })
          })
          that.repairTypeOptions = options

          //电量
          // const eleArr = retData.C.rows
          // let op = []
          // eleArr.forEach(row => {
          //   op.push({ value: row.lookupValueCode, label: row.lookupValueName })
          // })
          // that.electricOptions = op
        }
      })
    },
    // 调用查询付费性质和业务类别关系数据
    queryPayBusinessList() { 
      const that = this
      doQueryPayBusiness(-1, 1, { oemCode: this.$store.getters.orgInfo.OEM_CODE, groupCode: this.$store.getters.orgInfo.GROUP_CODE, payKind: '' })
        .then(response => {
          var resData = response.data[seApis.seDbPayBusinessQuery.ServiceCode]
          if (resData.result === '1' && resData.rows != null) {
            const tempList = resData.rows
            var tempOptions = []// 付费性质列表
            tempList.forEach(row => {
              var existItems = tempOptions.filter(o => o.code === row.payKind)
              if (existItems.length === 0) {
                tempOptions.push({ code: row.payKind, text: row.payKindName })
              }
              if (!that.businessTypeDatas[row.payKind]) {
                that.businessTypeDatas[row.payKind] = []
              }
              that.businessTypeDatas[row.payKind].push({ code: row.businessType, text: row.businessTypeName })
            })
            that.payKindOptions = tempOptions
            that.payKind = tempOptions[0].code// 选择默认付费性质
          }
        })
    },
    getRepairReserverSelect(code, text, codeField, comType, popupsKey) { // 导入预约后返回
      this.repairReserverQuery.reserveOrderId = code
      const that = this
      doQueryRepairReserverDetail(-1, 1, this.repairReserverQuery)// 查询预约详情
        .then(response => {
          var resData = response.data[seApis.seBuRepairReserverImport.ServiceCode]
          that.getRepairReserverResponse(resData)
        })
    },
    getWiUnitPrice(index) { // 获取工时单价
      if (index == null || index < 0) return
      var strIndex = 'wi' + index.toString()
      this.syncComplate[strIndex] = false
      var that = this
      const curRow = that.saveData.wiinfo[index]
      doQueryCommonWiPrice(999, 1, {
        oemCode: '',
        groupCode: '',
        dlrId: this.$store.getters.orgInfo.DLR_ID,
        carTypeCode: curRow.carTypeCode,
        businessType: curRow.businessType
      })
        .then(response => {
          var retData = response.data[seApis.seCommonWiPrice.ServiceCode]
          if (retData.result === '1' && retData.rows != null) {
            if (retData.rows.length === 0) return
            const tempRow = retData.rows[0]
            that.saveData.wiinfo[index].wiPrice = tempRow.wiPrice
            this.calcWiAmount(index)
          } else {
            that.saveData.wiinfo[index].wiPrice = 999999
          }
          that.syncComplate[strIndex] = true
        })
    },
    getPartUnitPrice(index) { // 获取备件单价
      if (index == null || index < 0) return
      var strIndex = 'part' + index.toString()
      this.syncComplate[strIndex] = false
      var that = this
      const curRow = that.saveData.partinfo[index]
      doQueryRepairPartPrice(-1, 1, {
        oemCode: '',
        groupCode: '',
        payKind: curRow.payKind,
        businessType: curRow.businessType,
        partDiscount: curRow.partDiscount,
        discountChange: ''
      })
        .then(response => {
          var retData = response.data[seApis.SeBuRepairOrderPartPriceRate.ServiceCode]
          if (retData.result === '1' && retData.rows != null) {
            if (retData.rows.length === 0) return
            const tempRow = retData.rows[0]
            that.saveData.partinfo[index].partPrice = tempRow.partPrice
            that.calcPartAmount(index)
          } else {
            that.saveData.partinfo[index].partPrice = 999999
          }
          that.syncComplate[strIndex] = true
        })
    },
    saveRepairOrder() {
      if (!this.validSaveData()) return// 数据检验不通过，不保存
      doSaveRepairOrder(this.saveData)
        .then(response => {
          var retData = response.data[seApis.sebuRepairOrderMutationSave.ServiceCode]
          if (retData.result === '1') {
            this.$alert('保存成功', '提示', {
              confirmButtonText: '确定',
              type: 'info'
            })
          } else {
            this.$alert('保存失败，' + retData.msg, '提示', {
              confirmButtonText: '确定',
              type: 'error'
            })
          }
        })
    },
    fastSearchWiAPI() { // 工时快速查询API
      doSeChooseWiQuery(5, 1, {
        dlrId: this.$store.getters.orgInfo.DLR_ID,
        secondDlrId: '',
        pfpCode: '',
        isLock: false,
        carTypeCode: this.saveData.carTypeCode,
        wiCode: this.fastSearchModel.wiCodeOrName,
        wiName: this.fastSearchModel.wiCodeOrName,
        operatePartId: '',
        repairSmallKindCode: '',
        isSystem: '',
        appendcondition: false,
      })
        .then(response => {
          var tempList = response.data.SeChooseWiQuery.rows
          this.wiSearchDataList = []
          tempList.forEach(row => {
            this.wiSearchDataList.push({
              wiCode: row.wiCode,
              wiName: row.repairContent || row.wiName
            })
          })
        })
    },
    clickSearchWiItem(item) { // 点击快速查询出来的工时文字
      console.log(item)
      //TODO 查询工时明细数据并绑定到网格，跟选择工时返回的查询一样
      //TODO 隐藏快速搜索结果DIV

    },
    fastSearchPartAPI() { // 工时快速查询API
      // doSeChooseWiQuery(5, 1, {
      //       oemCode:'',
      //       groupCode:'',
      //       dlrId:'',
      //       secondDlrId:'',
      //       pfpCode:'',
      //       isLock:false,
      //       carTypeCode: this.saveData.carTypeCode,
      //       wiCode: this.fastSearchModel.wiCodeOrName,
      //       wiName: this.fastSearchModel.wiCodeOrName,
      //       operatePartId:'',
      //       repairSmallKindCode:'',
      //       isSystem:'',
      //       appendcondition:false,
      //   })
      //   .then(response => {
      //     var tempList = response.data.SeChooseWiQuery.rows 
      //     this.wiSearchDataList = []
      //     tempList.forEach(row => {
      //       this.wiSearchDataList.push({
      //         partNo: row.wiCode,
      //         partName: row.repairContent || row.wiName
      //       })
      //     })
      // })
      //TODO 调用查询备件的API，和选择备件查询一样
      //以下是模拟数据
      this.partSearchDataList = []
      this.partSearchDataList.push({
        partNo: '12333',
        partName: 'doffkka'
      })
      this.partSearchDataList.push({
        partNo: '23341221',
        partName: 'haflift'
      })
      //TODO 隐藏快速弹窗
    },
    clickSearchPartItem(item) { // 点击快速查询出来的工时文字
      this.$refs.fastSearchPartInput.blur()
    }
  }
}
</script>

<style scoped>
.filter-button-left span {
  /* 上面按钮span样式 */
  cursor: pointer;
  font-size: 18px;
  color: #333333;
  line-height: normal;
  font-weight: 700;
  padding-right: 22px;
}
div.grid-repair-title-line {
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #999999;
  position: relative;
  margin-top: 28px;
  height: 30px;
}
div.grid-repair-title {
  width: 142px;
  height: 29px;
  background-color: #bcbcbc;
  line-height: 29px;
  font-size: 13px;
  float: left;
  position: relative;
}
div.grid-repair-searchtext {
  display: inline-block;
}
div.grid-repair-searchbtn {
  width: 90px;
  height: 29px;
  line-height: 29px;
  font-size: 13px;
  float: left;
  border-style: none;
  position: relative;
}

div.grid-repair-content {
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #999999;
}
/* 客户车辆信息显示样式 */
.grid-content {
  border-radius: 4px;
}
.grid-content.label {
  position: relative;
  float: left;
  text-align: right;
  width: 38%;
}
.grid-content.content {
  position: relative;
  float: left;
  text-align: left;
  width: 61%;
}
div.feeinfo {
  width: 60%;
  float: left;
  text-align: right;
}
div.search-result-item {
  cursor: pointer;
}
div.search-result-item:hover {
  background: #eee;
}
/* .el-select {
  min-width: 200px;
} */
</style>
