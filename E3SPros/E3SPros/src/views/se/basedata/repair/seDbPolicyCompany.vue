<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="queryFetchData()">查询</el-button>
      <el-button size="small" @click="add()">新增</el-button>
      <el-button size="small" @click="change()">修改</el-button>
      <el-button size="small" @click="changeStatus()">启/停用</el-button>
      <el-button size="small" @click="restData()">重置</el-button>
    </div>
      <div class="filter-container filter-params" ref="resultTitleHeight">
        <el-row :gutter="24">
          <!--<carBrand :span="6" :code="initCode" @changeCode="getBrandCode"></carBrand>-->
          <el-col :span="6">
            <label>公司简称</label>
            <el-input v-model="queryFind.custName" size="small" placeholder="请输入内容"></el-input>
          </el-col>
          <el-col :span="6">
            <label>机构代码</label>
            <el-input v-model="queryFind.credNo" size="small" placeholder="请输入内容"></el-input>
          </el-col>
          <doubleDatePicker :span="6" @changeCode="getIsEnableCode" />
          <section>
            <el-col :span="6">
              <label>创建日期</label>
              <el-date-picker
                v-model="listQuery.date"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd HH:mm:ss"
                size="small"
              ></el-date-picker>
            </el-col>
          </section>
        </el-row>
      </div>
      <div class="filter-container filter-title">设置区</div>
        <el-table
          v-loading="listLoading"
          :data="list"
          element-loading-text="Loading"
          border
          fit
          stripe
          @row-click="seletOtable"
          highlight-current-row
          ref="multipleTable"
        >
          <el-table-column align="center" label="序号" width="60" style="padding-top: 3px;" >
            <template slot-scope="scope">{{ scope.$index + 1 }}</template>
          </el-table-column>
          <el-table-column label="公司简称" width="100">
            <template slot-scope="scope">{{ scope.row.custName }}</template>
          </el-table-column>
          <el-table-column label="公司名称" width="100">
            <template slot-scope="scope">{{ scope.row.custFullName }}</template>
          </el-table-column>
          <el-table-column label="机构代码" width="80">
            <template slot-scope="scope">{{ scope.row.credNo }}</template>
          </el-table-column>
          <el-table-column label="协议开始日期" width="120">
            <template slot-scope="scope">{{ scope.row.policyBegDate }}</template>
          </el-table-column>
          <el-table-column label="协议结束日期" width="120">
            <template slot-scope="scope">{{ scope.row.policyEndDate }}</template>
          </el-table-column>
          <el-table-column label="月份" width="55">
            <template slot-scope="scope">{{ scope.row.monthNum }}</template>
          </el-table-column>
          <el-table-column label="金额" width="100">
            <template slot-scope="scope">{{ scope.row.amountNum }}</template>
          </el-table-column>
          <!-- <el-table-column label="授权金额" width="100">
            <template slot-scope="scope">{{ scope.row.amountNum }}</template>
          </el-table-column>-->
          <el-table-column label="优惠类型名称" width="100">
            <template slot-scope="scope">{{ scope.row.favoTypeName }}</template>
          </el-table-column>
          <!-- <el-table-column label="消费总金额" width="120">
            <template slot-scope="scope">{{ scope.row.amountNum }}</template>
          </el-table-column>
          <el-table-column label="未结算总金额" width="120">
            <template slot-scope="scope">{{ scope.row.amountNum }}</template>
          </el-table-column>-->
          <el-table-column label="固定电话" width="130">
            <template slot-scope="scope">{{ scope.row.phone }}</template>
          </el-table-column>
          <el-table-column label="移动电话" width="130">
            <template slot-scope="scope">{{ scope.row.mobile }}</template>
          </el-table-column>
          <el-table-column label="联系人" width="100">
            <template slot-scope="scope">{{ scope.row.linkMan }}</template>
          </el-table-column>
          <el-table-column label="状态" width="70">
            <template slot-scope="scope">{{ scope.row.isEnableName }}</template>
          </el-table-column>
          <el-table-column label="协议公司ID" v-if="false">
            <template slot-scope="scope">{{ scope.row.policyCompanyId }}</template>
          </el-table-column>
          <el-table-column label="协议单号" v-if="false">
            <template slot-scope="scope">{{ scope.row.policyBillCode }}</template>
          </el-table-column>
          <el-table-column label="传真" v-if="false">
            <template slot-scope="scope">{{ scope.row.fax }}</template>
          </el-table-column>
          <el-table-column label="优惠方式" v-if="false">
            <template slot-scope="scope">{{ scope.row.favoType }}</template>
          </el-table-column>
          <el-table-column label="备件折扣率" v-if="false">
            <template slot-scope="scope">{{ scope.row.partDiscountRate }}</template>
          </el-table-column>
          <el-table-column label="备件加价率" v-if="false">
            <template slot-scope="scope">{{ scope.row.partAddRate }}</template>
          </el-table-column>
          <el-table-column label="工时加价率" v-if="false">
            <template slot-scope="scope">{{ scope.row.wiAddRate }}</template>
          </el-table-column>
          <el-table-column label="工时折扣率" v-if="false">
            <template slot-scope="scope">{{ scope.row.wiDiscountRate }}</template>
          </el-table-column>
          <el-table-column label="结算周期" v-if="false">
            <template slot-scope="scope">{{ scope.row.accountPeriod }}</template>
          </el-table-column>
          <el-table-column label="周期值" v-if="false">
            <template slot-scope="scope">{{ scope.row.cycleValue }}</template>
          </el-table-column>
          <el-table-column label="是否可用" v-if="false">
            <template slot-scope="scope">{{ scope.row.isEnable }}</template>
          </el-table-column>
          <el-table-column label="并发控制字段" v-if="false">
            <template slot-scope="scope">{{ scope.row.updateControlId }}</template>
          </el-table-column>
          <el-table-column label="经销商ID" v-if="false">
            <template slot-scope="scope">{{ scope.row.dlrId }}</template>
          </el-table-column>
          <el-table-column label="经销商编码" v-if="false">
            <template slot-scope="scope">{{ scope.row.dlrCode }}</template>
          </el-table-column>
          <el-table-column label="开户银行" v-if="false">
            <template slot-scope="scope">{{ scope.row.accountBank }}</template>
          </el-table-column>
          <el-table-column label="开户账户" v-if="false">
            <template slot-scope="scope">{{ scope.row.accountNo }}</template>
          </el-table-column>
          <el-table-column label="地址" v-if="false">
            <template slot-scope="scope">{{ scope.row.addr }}</template>
          </el-table-column>
          <el-table-column label="地址邮编" v-if="false">
            <template slot-scope="scope">{{ scope.row.addrZip }}</template>
          </el-table-column>
          <el-table-column label="经销商客户编码" v-if="false">
            <template slot-scope="scope">{{ scope.row.dlrCustNo }}</template>
          </el-table-column>
          <el-table-column label="厂商标识" v-if="false">
            <template slot-scope="scope">{{ scope.row.oemCode }}</template>
          </el-table-column>
          <el-table-column label="集团标识" v-if="false">
            <template slot-scope="scope">{{ scope.row.groupCode }}</template>
          </el-table-column>
          <el-table-column label="厂商标识ID" v-if="false">
            <template slot-scope="scope">{{ scope.row.oemId }}</template>
          </el-table-column>
          <el-table-column label="集团标识ID" v-if="false">
            <template slot-scope="scope">{{ scope.row.groupId }}</template>
          </el-table-column>
          <el-table-column label="集团标识ID" v-if="false">
            <template slot-scope="scope">{{ scope.row.fax }}</template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next, sizes, ->, total"
          prev-text="上一页"
          next-text="下一页"
          :page-sizes="[10, 20, 30]"
          :page-size="10"
          :total="list?listRecords:0"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          ref="paginationHeight"
        />

      
      <el-dialog :visible.sync="dialogParamVisible" title="协议公司详细" center width="70%"  :append-to-body="true" @close="closeDialog" :close-on-click-modal="false">
       <el-tabs type="border-card">
        <el-tab-pane label="协议公司维护">
                <div class="filter-container filter-params">
                  <el-form :model="saveList" :rules="rules" ref="saveList" class="demo-ruleForm" :inline-message=true>
                    <el-row :gutter="24">
                      <el-col :span="8">
                        <el-form-item label="公司简称" prop="custName" >
                          <el-input v-model="saveList.custName" size="small" placeholder="请输入内容" @focus="isMul9 = true" :disabled="isReadOnly?false:true"></el-input>
                        </el-form-item>
                      </el-col>
                      
                      <el-col :span="8">
                        <el-form-item label="联系人" prop="linkMan"  >
                          <el-input v-model="saveList.linkMan" size="small" placeholder="请输入内容"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="固定电话">
                          <el-input v-model="saveList.phone" size="small" placeholder="请输入内容"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="移动电话">
                          <el-input v-model="saveList.mobile" size="small" placeholder="请输入内容"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="协议单号">
                          <el-input
                            v-model="saveList.policyBillCode"
                            size="small"
                            placeholder="请输入内容"
                            :disabled="isReadOnly?false:true"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                      <section>
                        <el-col :span="8">
                          <el-form-item prop="time" label="协议有效期" >                  
                            <el-date-picker
                              v-model="saveList.time"
                              type="daterange"
                              range-separator="-"
                              start-placeholder="开始日期"
                              end-placeholder="结束日期"
                              value-format="yyyy-MM-dd HH:mm:ss"
                              size="small"
                            ></el-date-picker>
                          </el-form-item>
                        </el-col>
                      </section>
                  
                      <el-col :span="8">
                      <el-form-item prop="accountPeriod" label="结算周期" >
                      <el-select v-model="saveList.accountPeriod" size="small" placeholder="请选择" @change="showunit" clearable>
                        <el-option
                          v-for="(item, i) in refindOption"
                          :key="`refindOption_${i}`"
                          :label="item.label"
                          :value="item.value">
                          </el-option>
                        </el-select>
                       </el-form-item>  
                       </el-col>
                      <el-col :span="8">
                        <el-form-item  prop="dynamicValue">
                        <label>{{this.unit}}</label>  
                        <el-input size="small" v-model="saveList.dynamicValue" placeholder="请输入内容"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="开户银行">
                          <el-input v-model="saveList.accountBank" size="small" placeholder="请输入内容"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="开户账号">
                          <el-input v-model="saveList.accountNo" size="small" placeholder="请输入内容"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="传真">
                          <el-input v-model="saveList.fax" size="small" placeholder="请输入内容"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="24">
                      <el-col :span="8">
                      <el-form-item label="优惠方式" prop="favoType" >
                      <el-select v-model="saveList.favoType" size="small" placeholder="请选择" @change="showFavoInput" clearable>
                        <el-option
                          v-for="item in statusOption"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                          </el-option>
                        </el-select>
                       </el-form-item>  
                       </el-col>
                      <el-col :span="8">
                        <div v-if="workinghours" style="margin-bottom: 7px">
                          <el-form-item label="工时优惠率">
                            <el-input
                              v-model="saveList.wiDiscountRate"
                              placeholder="单位为%"
                              size="small"
                            ></el-input>
                          </el-form-item>
                        </div>
                        <div v-if="workinghours" style="margin-bottom: 7px">
                          <el-form-item label="工时加价率">
                            <el-input v-model="saveList.wiAddRate" placeholder="单位为%" size="small"></el-input>
                          </el-form-item>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div v-if="spareParts" style="margin-bottom: 7px">
                          <el-form-item label="备件优惠率">
                            <el-input
                              v-model="saveList.partDiscountRate"
                              placeholder="单位为%"
                              size="small"
                            ></el-input>
                          </el-form-item>
                        </div>
                        <div v-if="spareParts" style="margin-bottom: 7px">
                          <el-form-item label="备件加价率">
                            <el-input
                              v-model="saveList.partAddRate"
                              placeholder="单位为%"
                              size="small"
                            ></el-input>
                          </el-form-item>
                        </div>
                      </el-col> 
                    </el-row>
                    <el-row>
                       <div class="filter-container filter-button" ref="searcheHeight">
                        <el-button size="small" @click="companySave('saveList')">保存</el-button>
                        <!-- <el-button size="small" @click="companyCancel()">重置</el-button> -->
                        </div>
                    </el-row>
                  </el-form>
                </div>
        </el-tab-pane>

        <el-tab-pane label="协议车辆" :disabled="isShow" >
          <div class="filter-container filter-params">
            <el-row :gutter="24">
              <el-col :span="8">
                <label>VIN码</label>
                <el-input v-model="carQueryParams.vin" size="small" placeholder="请输入内容" v-bind:readonly="isReadOnly"></el-input>
              </el-col>
              <el-col :span="8">
                <label>车牌号</label>
                <el-input v-model="carQueryParams.carLicenseNo" size="small" placeholder="请输入内容" v-bind:readonly="isReadOnly"></el-input>
              </el-col>

              <div class="filter-container filter-button" ref="searcheHeight"  >
                <el-button type="primary" size="small" @click="carQuery()"  :disabled="isReadOnly">查询</el-button>
                <el-button size="small" @click="addCar()"    :disabled="isReadOnly" >新增</el-button>
                <el-button size="small" @click="carDelet()"   :disabled="isReadOnly" >删除</el-button>
              </div>
            </el-row>
          </div>
          <el-table
            v-loading="carListLoading"
            :data="list1"
            element-loading-text="Loading"
            border
            fit
            height="170px"
            stripe
            highlight-current-row
            ref="multipleTable1"
            show-overflow-tooltip=true
          >
            <el-table-column align="center" label="序号" width="60">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column type="selection" width="55" label="选择+" />
            <el-table-column label="车牌号" align="center" width="100">
              <template slot-scope="scope">{{ scope.row.carLicenseNo }}</template>
            </el-table-column>
            <el-table-column label="VIN码" align="center" width="100">
              <template slot-scope="scope">{{ scope.row.vin }}</template>
            </el-table-column>
            <el-table-column label="车系" align="center" width="100">
              <template slot-scope="scope">{{ scope.row.carSeriesName }}</template>
            </el-table-column>
            <el-table-column label="车型" align="center" width="100">
              <template slot-scope="scope">{{ scope.row.carTypeName }}</template>
            </el-table-column>
            <el-table-column label="最新里程" align="center" width="100">
              <template slot-scope="scope">{{ scope.row.lastMileage }}</template>
            </el-table-column>
            <el-table-column label="联系人" align="center" width="100">
              <template slot-scope="scope">{{ scope.row.linkMan }}</template>
            </el-table-column>
            <el-table-column label="联系电话" align="center" width="120">
              <template slot-scope="scope">{{ scope.row.phone }}</template>
            </el-table-column>
            <el-table-column label="最后回厂日期" align="center" width="140">
              <template slot-scope="scope">{{ scope.row.lastRepairDate }}</template>
            </el-table-column>
            <el-table-column label="回厂次数" align="center" width="100">
              <template slot-scope="scope">{{ scope.row.comeTimes }}</template>
            </el-table-column>
            <el-table-column label="消费金额" align="center" width="120">
              <template slot-scope="scope">{{ scope.row.totalAmount }}</template>
            </el-table-column>
            <el-table-column label="未结算金额" align="center" width="120">
              <template slot-scope="scope">{{ scope.row.creditAmount }}</template>
            </el-table-column>
            <el-table-column label="客户名称" align="center" width="120">
              <template slot-scope="scope">{{ scope.row.comCustName }}</template>
            </el-table-column>
            <el-table-column label="协议车辆ID" v-if="false">
              <template slot-scope="scope">{{ scope.row.policyCarId }}</template>
            </el-table-column>
            <el-table-column label="客户关系编码" v-if="false">
              <template slot-scope="scope">{{ scope.row.custRelatetionCode }}</template>
            </el-table-column>
            <el-table-column label="回款金额" v-if="false">
              <template slot-scope="scope">{{ scope.row.backPayAmount }}</template>
            </el-table-column>
            <el-table-column label="挂帐金额" v-if="false">
              <template slot-scope="scope">{{ scope.row.creditAmount }}</template>
            </el-table-column>
            <el-table-column label="经销商编码" v-if="false">
              <template slot-scope="scope">{{ scope.row.dlrCode }}</template>
            </el-table-column>
            <el-table-column label="是否可用" v-if="false">
              <template slot-scope="scope">{{ scope.row.isEnable }}</template>
            </el-table-column>
            <el-table-column label="是否可用" v-if="false">
              <template slot-scope="scope">{{ scope.row.isEnableName }}</template>
            </el-table-column>
            <el-table-column label="并发控制字段" v-if="false">
              <template slot-scope="scope">{{ scope.row.updateControlId }}</template>
            </el-table-column>
            <el-table-column label="经销商ID" v-if="false">
              <template slot-scope="scope">{{ scope.row.dlrId }}</template>
            </el-table-column>
            <el-table-column label="协议公司ID" v-if="false">
              <template slot-scope="scope">{{ scope.row.policyCompanyId }}</template>
            </el-table-column>
            <el-table-column label="车辆ID" v-if="false">
              <template slot-scope="scope">{{ scope.row.carId }}</template>
            </el-table-column>
            <el-table-column label="车型编码" v-if="false">
              <template slot-scope="scope">{{ scope.row.carTypeCode }}</template>
            </el-table-column>
            <el-table-column label="车系编码" v-if="false">
              <template slot-scope="scope">{{ scope.row.carSeriesCode }}</template>
            </el-table-column>
            <el-table-column label="车型ID" v-if="false">
              <template slot-scope="scope">{{ scope.row.carTypeId }}</template>
            </el-table-column>
            <el-table-column label="车系ID" v-if="false">
              <template slot-scope="scope">{{ scope.row.carSeriesId }}</template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next, sizes, ->, total"
            prev-text="上一页"
            next-text="下一页"
            :page-sizes="[10, 20, 30]"
            :page-size="10"
            :total="list1?listRecords1:0"
            @size-change="handleSizeChange1"
            @current-change="handleCurrentChange1"
          />
        </el-tab-pane>
      </el-tabs>
      </el-dialog>
      <seCarOwnerCustModal
        @close="closeCustModal"
        @sentCarOwnerCustModal="getCarParam"
        ref="CarOwnerCustModal"
        :seCarOwnerCustModalVisible="showCarTable"
        :isMul="isMul"
      />
      <chooseCompanies 
        @changeCode = "changeCode"
        :dialogFormVisible = isMul9

      /> 
    
  </div>
</template>
<script>
import {
  getList,
  changeCompanyEnable,
  getCarList,
  queryCompanyList,
  changeCompanySave,
  carQueryList,
  policyCarDelet,
  seDbPolicyCarSave
} from "@/api/se/basedata/repair/seDbPolicyCompany";

import citySelect from "@/components/org/CitySelect/index";
import bigArea from "@/components/org/BigArea/index";
import smallArea from "@/components/org/SmallArea/index";
import seCarOwnerCustModal from "@/components/se/seCarOwnerCustModal";
import { close } from "fs";
import { the_Height } from "@/components/se/seMixins/makeHeight";
import { seApis } from "@/api/graphQLApiList/se";
import lableName from "@/components/lableName";
import { requestGraphQL } from "@/api/commonRequest";
import { paApis } from "@/api/graphQLApiList/pa";
import { orgApis } from "@/api/graphQLApiList/org";
import chooseCompanies from "@/components/se/chooseCompanies/chooseCompanies";

export default {
  mixins: [the_Height],
  components: {
    citySelect,
    bigArea,
    smallArea,
    seCarOwnerCustModal,
    lableName,
    chooseCompanies
  },
  props: {
    span: {
      type: Number,
      default: function() {
        return 6;
      }
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      listRecords: null,
      list: null,
      list1: null,
      listRecords1: null,
      unit: "",
      isMul9:false,
      row:"",
      isMul: false,
      isShow:false,
      isReadOnly:false,
      showCarTable: false,
      carTypeVisible: false,
      listLoading: false,
      carListLoading: false,
      workinghours: false,
      spareParts: false,
      dialogParamVisible:false,
      dates: [2],
      res: "",
      carDeletRes: "",
      selectTableList: [],
      saveList: {
        custName: "",
        linkMan: "",
        phone: "",
        mobile: "",
        policyBillCode: "",
        time: "",
        accountPeriod: "",
        amountNum: "",
        monthNum: "",
        accountBank: "",
        accountNo: "",
        favoType: "",
        wiDiscountRate: "",
        wiAddRate: "",
        partDiscountRate: "",
        partAddRate: "",
        policyBegDate: "",
        policyEndDate: "",
        dynamicValue: "",
        policyCompanyId:"",
        fax:"",
        updateControlId:""
      },
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        pageIndex1: 1,
        pageSize1: 10,
        limit: 20,
        brandCode: undefined,
        carTypeCode: undefined,
        cityCode: undefined,
        bigAreaCode: undefined,
        smallAreaCode: undefined,
        type: undefined,
        status: "",
        isEnable: "",
        date: []
      },
      queryFind: {
        oemCode: "",
        groupCode: "",
        dlrId: "",
        custName: "",
        credNo: "",
        beginCreatedDate: "",
        endCreatedDate: "",
        dlrId: this.$store.getters.orgInfo.DLR_ID,
        dlrCode: this.$store.getters.orgInfo.DLR_CODE
      },
      //协议公司保存校验
      rules: {
        custName: [
          { required: true, message: "请输入公司简称", trigger: "blur" }
        ],
        custFullName: [
          { required: true, message: "请输入公司名称", trigger: "blur" }
        ],
        linkMan: [{ required: true, message: "请输入联系人", trigger: "blur" }],
        time: [
          { required: true, message: "请选择协议有效期", trigger: "change" }
        ],
        accountPeriod: [
          { required: true, message: "请选择结算周期", trigger: "change" }
        ],
        dynamicValue: [
          { required: true, message: "请输入元或月", trigger: "blur" }
        ],
        favoType:[
          { required: true, message: "请选择优惠类型", trigger: "blur" }
        ],
      },
      //启用停用使用的list
      changeEnable: {
        oemCode: "",
        groupCode: "",
        oemId: "",
        groupId: "",
        updateControlId: "",
        policyCompanyId: "",
        isEnable: ""
      },
      //协议车辆删除的list
      carDeletlist: {
        carId: "",
        policyCompanyId: "",
        dlrId: "",
        policyCarId: "",
        updateControlId: ""
      },
      carQueryParams: {
        vin: "",
        oemCode: "",
        groupCode: "",
        carLicenseNo: "",
        policyCompanyId: ""
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }, 
      lookupVari: [
        "oemCode",
        "groupCode",
        "lookupTypeCode",
        "lookupValueCode",
        "lookupValueName"
      ],
       statusOption:[],
       refindOption:[],
      value1: "",
      value2: ""
    };
  },
  created() {
     this.initFetchData();
  },
  methods: {
    initFetchData(page) {
      const that = this
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'query',
        typeParam:
              '($pageIndex: Int, $pageSize: Int, $dataInfoA: '+ orgApis.mdsLookupValueQueryByPage.InputType
              +', $dataInfoB: ' + orgApis.mdsLookupValueQueryByPage.InputType  + ')',
        // 请求API
        apiUrl: paApis.paDbPartListQueryList.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: orgApis.mdsLookupValueQueryByPage.ServiceCode,
            // API服务编码&参数
            apiServiceParam:
              "(dataInfo: $dataInfoA, pageIndex: $pageIndex, pageSize: $pageSize)",
            // 表格中台返回网格的字段
            apiQueryRow: that.lookupVari
          },{
            apiServiceCode: orgApis.mdsLookupValueQueryByPage.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfoB, pageIndex: $pageIndex, pageSize: $pageSize)",
            apiQueryRow: that.lookupVari
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.listQuery.pageSize,
          pageIndex: that.listQuery.pageIndex,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfoA: {
            "isEnable": "1",
            "lookupTypeCode": "SE0049"//是否
          },
          dataInfoB: {
            "isEnable": "1",
            "lookupTypeCode": "SE0050"//是否启用
          }
        }
      }
      //转换了中台请求格式数据
      let paramD = that.$getParams(queryObj)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.result === '1'){
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page
          }
         for(let i in response.data){
            switch(i){
              case 'A':
                  var temp_array = [];
                  response.data.A.rows.forEach(row => {
                    temp_array.push({
                      value: row.lookupValueCode,
                      label: row.lookupValueName,
                    })
                  })
                  that.refindOption = temp_array
                  console.log("+++++")
                  console.log(JSON.stringify(that.refindOption));
                break
              case 'B':
                  var temp_array = [];
                  response.data.B.rows.forEach(row => {
                    temp_array.push({
                      value: row.lookupValueCode,
                      label: row.lookupValueName,
                    })
                  })
                that.statusOption = temp_array
                console.log(JSON.stringify(that.statusOption));
                break
            }
          }
          that.listLoading = false
        }else {
            this.$message({
                message: '查询失败：' + response.msg,
                type: 'warn',
                uration: 2000
            })
        }
      })
    },
    getBrandCode(val) {
      this.listQuery.brandCode = val;
    },
    getCityCode(val) {
      this.listQuery.cityCode = val;
    },
    getBigAreaCode(val) {
      this.listQuery.bigAreaCode = val;
    },
    getSmallAreaCode(val) {
      this.listQuery.smallAreaCode = val;
    },
    getSetStatusCode(val) {
      this.listQuery.status = val;
    },
    getIsEnableCode(val) {
      this.listQuery.isEnable = val;
    },
    getCarTypeCode(val) {
      this.carTypeVisible = false;
      this.listQuery.isEnable = val;
    },
    // 查询主表数据
    queryFetchData() {
      this.listLoading = true;

      if (this.listQuery.date === null) {
        this.listQuery.date = [];
      }
      this.queryFind.beginCreatedDate = this.listQuery.date[0];
      this.queryFind.endCreatedDate = this.listQuery.date[1];
      queryCompanyList(
        this.listQuery.pageSize,
        this.listQuery.pageIndex,
        this.queryFind
      ).then(response => {
        if (
          response.data[seApis.seDbPolicyCompanyQuery.ServiceCode].result ===
          "1"
        ) {
          this.list =
            response.data[seApis.seDbPolicyCompanyQuery.ServiceCode].rows;
          this.listRecords = Number(
            response.data[seApis.seDbPolicyCompanyQuery.ServiceCode].records
          );
          this.listLoading = false;
        } else {
          this.$message({
            message:
              "查询失败：" +
              response.data[seApis.seDbPolicyCompanyQuery.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
          this.listLoading = false;
        }
      });
    },
    //清除查询条件
    restData() {
      console.log(this.$store.getters.orgInfo.ORG_TYPE)
      this.queryFind.custName = "";
      this.queryFind.credNo = "";
      this.listQuery.date = [];

    },
    //启用停用
    changeStatus() {
      if (this.row != "") {
      this.changeEnable = this.row;
      let obj = {};
      obj.updateControlId = this.row.updateControlId;
      obj.policyCompanyId = this.row.policyCompanyId;
      obj.isEnable = this.row.isEnable;
      obj.oemCode = this.row.oemCode;
      obj.groupCode = this.row.groupCode;
      obj.oemId = this.row.oemId;
      obj.groupId = this.row.groupId;
      obj.dlrId = this.$store.getters.orgInfo.DLR_ID,
      changeCompanyEnable(obj).then(response => {
        if (
          response.data[seApis.seDbPolicyCompanyEnable.ServiceCode].result ===
          "1"
        ) {
          this.$message({
            message: "操作成功",
            type: "success"
          });
          this.queryFetchData();
        } else {
          this.$message({
            message:
              "操作失败：" +
              response.data[seApis.seDbPolicyCompanyEnable.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
          this.row = "";
          this.queryFetchData();
          
        }
      });
      }
      else{
        this.$alert("请选择一行进行操作", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
     
    },
    // 设置区选中行显示在协议公司维护
    seletOtable(row, column, event) {
      this.row = row;
      this.saveList.dlrId = row.dlrId;
      this.saveList.accountPeriod = row.accountPeriod.toString();
      this.saveList.linkMan = row.linkMan;
      this.saveList.custName = row.custName;
      this.saveList.dlrCustNo = row.dlrCustNo;
      this.saveList.dlrCode = row.dlrCode;
      this.saveList.oemCode = row.oemCode;
      this.saveList.groupCode = row.groupCode;
      this.saveList.phone = row.phone;
      this.saveList.mobile = row.mobile;
      this.saveList.policyBillCode = row.policyBillCode;
      this.saveList.policyCompanyId = row.policyCompanyId;
      this.saveList.updateControlId = row.updateControlId;
      //转换开始结束时间为一个数组再进行赋值
      if( row.policyBegDate != null){
      let time =[];
      time[0] = row.policyBegDate;
      time[1] = row.policyEndDate;
      this.saveList.time = time;
      this.saveList.fax = row.fax;
      }
      else{
        this.saveList.time = "";
      }
      if (row.accountPeriod == 1) {
        this.unit = "月";
        this.saveList.dynamicValue = row.monthNum;
      } else {
        this.unit = "元";
        this.saveList.dynamicValue = row.amountNum;
      }

      this.saveList.accountBank = row.accountBank;
      this.saveList.accountNo = row.accountNo;
      this.saveList.favoType = row.favoType;
      this.showFavoInput(row.favoType);
      this.saveList.wiDiscountRate = row.wiDiscountRate;
      this.saveList.wiAddRate = row.wiAddRate;
      this.saveList.partDiscountRate = row.partDiscountRate;
      this.saveList.partAddRate = row.partAddRate;
    },
    //优惠方式联动处理
    showFavoInput(val,tetx) {
      if (val == 1) {
        this.saveList.wiDiscountRate = "";
        this.saveList.wiAddRate = "";
        this.saveList.partDiscountRate = "";
        this.saveList.partAddRate = "";
        this.workinghours = false;
        this.spareParts = false;
      }
      if (val == 2) {
        this.saveList.wiDiscountRate = "";
        this.saveList.wiAddRate = "";
        this.saveList.partDiscountRate = "";
        this.saveList.partAddRate = "";
        this.workinghours = true;
        this.spareParts = false;
      }
      if (val == 3) {
        this.saveList.wiDiscountRate = "";
        this.saveList.wiAddRate = "";
        this.saveList.partDiscountRate = "";
        this.saveList.partAddRate = "";
        this.workinghours = false;
        this.spareParts = true;
      }
      if (val == 4) {
        this.saveList.wiDiscountRate = "";
        this.saveList.wiAddRate = "";
        this.saveList.partDiscountRate = "";
        this.saveList.partAddRate = "";
        this.workinghours = true;
        this.spareParts = true;
      }
    },
    showunit(val,tetx) {
      console.log("-------")
      console.log(val);
      console.log(tetx);
      if (val == 1) {
        this.unit = "月";
      } else {
        this.unit = "元";
      }
    },
    //协议公司维护
    companySave(formName) {
     this.$refs[formName].validate((valid) => {
          if (valid) {
            //转换时间数据格式
      if (this.saveList.time === null) {
        this.saveList.time = [];
      }
      this.saveList.policyBegDate = this.saveList.time[0];
      this.saveList.policyEndDate = this.saveList.time[1];
      let obj = {};    
      obj.oemCode = this.saveList.oemCode;
      obj.linkMan = this.saveList.linkMan;
      obj.favoType = this.saveList.favoType;
      obj.accountPeriod = Number(this.saveList.accountPeriod);
      obj.accountNo = this.saveList.accountNo;
      obj.accountBank = this.saveList.accountBank;
      obj.groupCode = this.saveList.groupCode;
      obj.dlrCode = this.saveList.dlrCode;
      obj.dlrId = this.saveList.dlrId;
      obj.dlrCustNo = this.saveList.dlrCustNo;
      obj.cycleValue = this.saveList.dynamicValue;
      obj.partDiscountRate = Number(this.saveList.partDiscountRate);
      obj.wiAddRate = Number(this.saveList.wiAddRate);
      obj.partAddRate = Number(this.saveList.partAddRate);
      obj.wiDiscountRate = Number(this.saveList.wiDiscountRate);
      obj.policyBegDate = this.saveList.policyBegDate;
      obj.policyEndDate = this.saveList.policyEndDate;
      obj.policyCompanyId = this.saveList.policyCompanyId;
      obj.policyBillCode = this.saveList.policyBillCode;
      obj.updateControlId = this.saveList.updateControlId;
      obj.fax = this.saveList.fax;
      obj.mobile = this.saveList.mobile;
      obj.phone = this.saveList.phone;
      
      // obj.userId = this.saveList.userId
      changeCompanySave(obj).then(response => {
        if (
          response.data[seApis.seDbPolicyCompanySave.ServiceCode].result === "1"
        ) {
          this.$message({
            message: "保存成功",
            type: "success"
          });
          this.queryFetchData();
          this.companyCancel();
          this.dialogParamVisible = false;
        } else {
          this.$message({
            message:
              "保存失败：" +
              response.data[seApis.seDbPolicyCompanySave.ServiceCode].msg,
            type: "warn",
            uration: 2000           
          });
          this.queryFetchData();
          this.companyCancel();
          this.dialogParamVisible = false;
        }
      });
          } else {
            console.log('error submit!!');
            return false;
          }
        });

      
    },
    //协议公司维护取消 清除弹框数据
    companyCancel() {
      this.saveList.dlrId = "";
      this.saveList.accountPeriod = "";
      this.saveList.linkMan = "";
      this.saveList.custName = "";
      this.saveList.dlrCustNo =  "";
      this.saveList.dlrCode = "";
      this.saveList.oemCode =  "";
      this.saveList.groupCode =  "";
      this.saveList.phone =  "";
      this.saveList.mobile =  "";
      this.saveList.policyBillCode =  "";
      this.saveList.policyCompanyId =  "";
      this.saveList.updateControlId =  "";
      this.saveList.fax =  "";
      this.saveList.time = "";
      this.saveList.dynamicValue =  "";
      this.saveList.accountBank =  "";
      this.saveList.accountNo =  "";
      this.saveList.favoType =  "";
      this.saveList.wiDiscountRate =  "";
      this.saveList.wiAddRate = "";
      this.saveList.partDiscountRate =  "";
      this.saveList.partAddRate =  "";
      this.workinghours = false;
      this.spareParts = false;
      this.list1 = null;
      this.$nextTick(()=>{
        this.$refs.saveList.clearValidate();//等弹窗里的form表单的dom渲染完在执行this.$refs.staffForm.resetFields()，去除验证
      });
       
    },
    //协议车辆查询
    carQuery() {
      this.carListLoading = true;
      let obj = {};
      obj.policyCompanyId = this.row.policyCompanyId;
      obj.vin = this.carQueryParams.vin;
      // obj.carLicenseNo = this.carQueryParams.carLicenseNo
      obj.oemCode = this.carQueryParams.oemCode;
      obj.groupCode = this.carQueryParams.groupCode;
      carQueryList(this.listQuery.pageSize, this.listQuery.pageIndex, obj).then(
        response => {
          if (
            response.data[seApis.seDbPolicyCarQuery.ServiceCode].result === "1"
          ) {
            this.list1 =
              response.data[seApis.seDbPolicyCarQuery.ServiceCode].rows;
            this.listRecords1 = Number(
              response.data[seApis.seDbPolicyCarQuery.ServiceCode].records
            );
            this.carListLoading = false;
          } else {
            this.$message({
              message:
                "查询失败：" +
                response.data[seApis.seDbPolicyCarQuery.ServiceCode].msg,
              type: "warn",
              uration: 2000
            });
          }
        }
      );
    },

    //协议车辆删除
    carDelet() {
      let arr = [];
      arr = this.$refs.multipleTable1.selection;
       if(arr.length == 0) {
        this.$alert("请选择数据行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      if (arr.length > 1) {
        this.$alert("请选择一条数据", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      this.carDeletlist.policyCompanyId = arr[0].policyCompanyId;
      this.carDeletlist.carId = arr[0].carId;
      this.carDeletlist.dlrId = arr[0].dlrId;
      this.carDeletlist.policyCarId = arr[0].policyCarId;
      this.carDeletlist.updateControlId = arr[0].updateControlId;
      policyCarDelet(this.carDeletlist).then(response => {
        if (
          response.data[seApis.seDbPolicyCarMutationDelete.ServiceCode].result === "1"
        ) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.carQuery();
        } else {
          this.$message({
            message:
              "删除失败" +
              response.data[seApis.seDbPolicyCarDelete.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.queryFetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.queryFetchData();
    },
    handleSizeChange1(val) {
      this.listQuery.pageSize1 = val;
      this.carQuery();
    },
    handleCurrentChange1(val) {
      this.listQuery.pageIndex1 = val;
      this.carQuery();
    },
    carTypeModal() {
      this.carTypeVisible = true;
    },
    //显示选择客户公共弹窗
    addCar() {
      this.changeEnable = this.row;
      if (this.changeEnable.policyCompanyId == "") {
        this.$alert("请选择协议单位", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      if (this.changeEnable.isEnable == 0) {
        this.$alert("已经停用的协议单位不能添加协议车辆", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      this.showCarTable = true;
    },
    //新增客户弹窗的回调方法，获取返回数据
    getCarParam(val) {
      this.selectTableList = val;
      this.showCarTable = false;
      let b = true;
      for(let a = 0 ;this.list1.length>a;a++){
        if(this.list1[a].vin == this.selectTableList[0].carInfo[0].vin){
          b = false ;
        }
      }
      if(b){
        let obj = {};
        obj.policyCompanyId = this.changeEnable.policyCompanyId;
        obj.carId = this.selectTableList[0].carId;
        obj.custRelatetionCode = this.selectTableList[0].carOwner[0].carOwnerId;
        obj.vin = this.selectTableList[0].carInfo[0].vin;
        seDbPolicyCarSave(obj).then(response => {
          if (
            response.data[seApis.seDbPolicyCarMutationSave.ServiceCode].result === "1"
          ) {
            this.$message({
              message: "新增成功",
              type: "success"
            });
          } else {
            this.$message({
              message:
                "新增失败：" +
                response.data[seApis.seDbPolicyCarMutationSave.ServiceCode].msg,
              type: "warn",
              uration: 2000
            });
          }
          this.carQuery();
        });
      }else{
        this.$message({
              message:
                "不能新增重复协议车辆",
              type: "warn",
              uration: 2000
            });
      } 
    },
    //通过回调方法获取关闭状态 关闭弹窗
    closeCustModal(val) {
      this.showCarTable = val;
    },
    //新增按钮
    add(){
      this.isShow = true ;
      this.dialogParamVisible = true;
      this.companyCancel();
      this.isReadOnly = true;
      this.row = "";
    },
    closeDialog(){
      this.$refs.saveList.clearValidate();
    },
    change(){
      if(this.row !=""){
        this.isShow = false ;
        this.dialogParamVisible = true;
        this.isReadOnly = false ;
        this.carQuery();
      }
     else{
       this.$alert("请选择一行进行操作", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
     }
    },
     changeCode(val){
       if(val=='!**!'){
         this.isMul9 = false ;
       }
       else {
          this.saveList.custName = val.custName;
          this.saveList.dlrCustNo = val.dlrCustNo;
          this.isMul9 = false ;
       }
     }
  }
};
</script>

