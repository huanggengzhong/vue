<!--
* description: 公司客户视图
* author: laimzh
* createdDate: 2019-08-14
-->
<template>
  <el-form class="filter-params-crm-scroll" disabled>
    <div class="filter-container filter-title-crm">基本信息-公司客户</div>
    <div class="filter-container filter-params-crm">
      <el-row>
        <crmTextInput
          compKey="compKey1"
          labelName="UID"
          :code="uid"
          codeField="uid"
          :isRequire="true"
        ></crmTextInput>
        <crmTextInput
          compKey="compKey2"
          labelName="公司简称"
          :code="custName"
          codeField="custName"
          :isRequire="true"
        ></crmTextInput>
        <crmTextInput
          compKey="compKey3"
          labelName="公司全称"
          :code="custFullName"
          codeField="custFullName"
          :span="12"
        ></crmTextInput>
      </el-row>

      <el-row>
        <crmTextInput
          compKey="compKey4"
          labelName="机构代码"
          :code="credNo"
          codeField="credNo"
          :isRequire="true"
        ></crmTextInput>
        <crmTextInput
          compKey="compKey5"
          labelName="法人名称"
          :code="principalName"
          codeField="principalName"
        ></crmTextInput>
        <crmTextInput compKey="compKey6" labelName="法人电话" :code="addrCity" codeField="addrCity"></crmTextInput>
        <crmTextInput
          compKey="compKey7"
          labelName="法人身份证"
          :code="addrCounty"
          codeField="addrCounty"
        ></crmTextInput>
      </el-row>

      <el-row>
        <crmTextInput
          compKey="compKey8"
          labelName="省份"
          codeField="addrProvince"
          :code="addrProvince"
          :isRequire="false"
        ></crmTextInput>
        <crmTextInput
          compKey="compKey9"
          labelName="城市"
          codeField="addrCity"
          :code="addrCity"
          :isRequire="false"
        ></crmTextInput>
        <crmTextInput
          compKey="compKey10"
          labelName="区县"
          codeField="addrCounty"
          :code="addrCounty"
          :isRequire="false"
        ></crmTextInput>
        <crmTextInput
          compKey="compKey12"
          labelName="建档日期"
          codeField="nationCode"
          :code="nationCode"
          :isRequire="false"
        ></crmTextInput>
      </el-row>

      <el-row>
        <crmTextInput compKey="compKey13" labelName="邮政编码" codeField="addr" :isRequire="false"></crmTextInput>
        <lookupvalue
          compKey="compKey41"
          :isMul="false"
          labelName="公司性质"
          :code="gender"
          codeField="gender"
        ></lookupvalue>
        <crmTextInput compKey="compKey42" labelName="公司备注" codeField="addr" :isRequire="false"></crmTextInput>
        <lookupvalue
          compKey="compKey43"
          :isMul="false"
          labelName="公司规模"
          :code="gender"
          codeField="gender"
        ></lookupvalue>
      </el-row>
      <el-row>
        <crmTextInput
          compKey="compKey44"
          :span="12"
          labelName="详细地址"
          :code="addr"
          codeField="addr"
          :isRequire="false"
        ></crmTextInput>

        <el-col :span="12">
          <el-form-item label="证件照">
            <el-button>证件照1</el-button>
            <el-button>证件照2</el-button>
            <el-button>行驶证照</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </div>
    <div class="filter-container filter-title-crm">联系信息</div>
    <div class="filter-container filter-params-crm">
      <el-row>
        <crmTextInput
          compKey="compKey13"
          labelName="公司电话"
          :code="phone"
          codeField="phone"
          :isRequire="true"
        ></crmTextInput>
        <crmTextInput compKey="compKey14" labelName="官方微信号" :code="backTel" codeField="backTel"></crmTextInput>
        <crmTextInput compKey="compKey15" labelName="官网" :code="homeTel" codeField="homeTel"></crmTextInput>
        <crmTextInput compKey="compKey16" labelName="电子邮箱" :code="officeTel" codeField="officeTel"></crmTextInput>
      </el-row>
      <el-row>
        <crmTextInput compKey="compKey17" labelName="传真号码" :code="custName" codeField="custName"></crmTextInput>
        <crmTextInput compKey="compKey18" labelName="银行卡号" :code="phone" codeField="phone"></crmTextInput>
        <crmTextInput
          compKey="compKey19"
          labelName="开户行"
          :code="convTimeName"
          codeField="convTimeName"
        ></crmTextInput>
      </el-row>
      <el-row>
        <Table :tabledatas="contactdata"></Table>
      </el-row>
    </div>
    <div class="filter-container filter-title-crm">车辆关系</div>
    <div class="filter-container filter-params-crm">
      <Table :tabledatas="relatedata"></Table>
    </div>
    <div class="filter-container filter-title-crm">订单记录</div>
    <div class="filter-container filter-params-crm">
      <Table :tabledatas="orderdata"></Table>
    </div>
    <div class="filter-container filter-title-crm">获取渠道</div>
    <div class="filter-container filter-params-crm">
      <el-row>
        <lookupvalue
          compKey="compKey24"
          :isMul="false"
          labelName="接触方式"
          :code="cantactWayCode"
          codeField="cantactWayCode"
        ></lookupvalue>
        <lookupvalue
          compKey="compKey25"
          :isMul="false"
          labelName="渠道大类"
          :code="infoChanMCode"
          codeField="infoChanMCode"
        ></lookupvalue>
        <el-col :span="6">
          <ChannelSmallClass :ChannelSmallClass="infoChanDName"></ChannelSmallClass>
        </el-col>
      </el-row>
    </div>
    <div class="filter-container filter-title-crm">预约记录</div>
    <div class="filter-container filter-params-crm">
      <Table :tabledatas="redata"></Table>
    </div>
    <div class="filter-container filter-title-crm">客户忠诚度</div>
    <div class="filter-container filter-params-crm">
      <el-row>
        <el-col :span="2">
          <span class="crmtype">销售</span>
        </el-col>
        <el-col :span="22">
          <el-row>
            <crmTextInput
              compKey="compKey35"
              labelName="购车台次"
              :disabled="true"
              :code="buyCarNum"
              codeField="buyCarNum"
            ></crmTextInput>
            <crmTextInput
              compKey="compKey37"
              labelName="订单金额"
              :code="saleOrderMoney"
              codeField="saleOrderMoney"
            ></crmTextInput>
            <crmTextInput
              compKey="compKey38"
              labelName="精品销售"
              :disabled="true"
              :code="accSaleMoney"
              codeField="accSaleMoney"
            ></crmTextInput>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          <span class="crmtype">售后</span>
        </el-col>
        <el-col :span="22">
          <el-row>
            <crmTextInput
              compKey="compKey39"
              labelName="累计回厂台次"
              :disabled="true"
              :code="totalBackNum"
              codeField="totalBackNum"
            ></crmTextInput>
            <crmTextInput
              compKey="compKey40"
              labelName="近半年回厂台次"
              :disabled="true"
              :code="halfYearBackNum"
              codeField="halfYearBackNum"
            ></crmTextInput>
            <crmTextInput
              compKey="compKey7"
              labelName="回厂消费金额"
              :disabled="true"
              :code="backMoney"
              codeField="backMoney"
            ></crmTextInput>
            <crmTextInput
              compKey="compKey5"
              labelName="备件销售"
              :disabled="true"
              :code="partSaleMoney"
              codeField="partSaleMoney"
            ></crmTextInput>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="filter-container filter-title-crm">客户触点记录</div>
    <div class="filter-container filter-params-crm">
      <Table :tabledatas="custContact"></Table>
    </div>
    <!-- <div class="filter-container filter-title-crm">信用记录</div>
    <div class="filter-container filter-params-crm">
      <Table :tabledatas="credit"></Table>
    </div>-->
    <div class="filter-container filter-title-crm">客户资料修改日志</div>
    <div class="filter-container filter-params-crm">
      <Table :tabledatas="modifyLog"></Table>
    </div>
  </el-form>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import crmTextInput from "@/components/crm/textbox/crmTextInput";
import crmdatePicker from "@/components/crm/Time/crmdatePicker";
import lookupvalue from "@/components/crm/lookupValue/lookupvalue";
// 渠道小类
import ChannelSmallClass from "@/components/crm/EjectWindows/ChannelSmallClass";
// 兴趣爱好
import Interest from "@/components/crm/EjectWindows/Interest";
// 意向车型
import IntentionalModel from "@/components/crm/EjectWindows/IntentionalModel";

import Table from "@/components/crm/table/Table";

export default {
  components: {
    crmTextInput,
    crmdatePicker,
    lookupvalue,
    ChannelSmallClass,
    Interest,
    IntentionalModel,
    Table
  },
  name: "editPer",
  data() {
    return {
      uid: "",
      custName: "",
      custFullName: "",
      credNo: "",
      principalName: "",
      addrProvince: "",
      addrCity: "",
      addrCounty: "",
      nationCode: "",
      addr: "",
      gender: "",
      phone: "",
      backTel: "",
      homeTel: "",
      officeTel: "",
      convTimeName: "",
      cantactWayCode: "",
      infoChanMCode: "",
      buyCarNum: "",
      saleOrderNum: "",
      saleOrderMoney: "",
      accSaleMoney: "",
      totalBackNum: "",
      halfYearBackNum: "",
      backMoney: "",
      partSaleMoney: "",

      infoChanDName: {
        input: ""
      },
      display: {
        ismuti: false
      },
      // 基本信息
      commondata: {
        queryObj: {
          apiConfig: crmApis.oneIdCustViewQueryCustBaseInfo, //客户信息明细-基本信息
          // 缺法人电话，法人身份证,建档日期，邮政编码，公司性质，公司规模，公司备注
          apiQueryRow: [
            // 组件
            "uid",
            "custName",
            "custFullName",
            "credNo",
            "principalName",
            "phone",
            "credNo",
            "addrCity",
            "addrCounty",
            "addrProvince",
            "nationCode",
            "addr"
          ],
          params: {
            custNo: "",
            dlrCustNo: ""
          }
        }
      },
      //联系信息
      contactdata: {
        queryObj: {
          apiConfig: crmApis.oneIdCustViewQueryCustBaseInfo, //客户信息明细-联系方式
          // 缺公司电话，官方微信号，传真号码，银行卡号，开户行，电子邮箱，官网，类别，姓名，关系描述，姓名，性别，联系电话，地址
          apiQueryRow: [
            // 组件
            "phone",
            "backTel",
            "homeTel",
            "officeTel",
            "custName",
            "openId",
            "email",
            // 网格
            "phone"
          ],
          params: {
            custNo: "",
            dlrCustNo: ""
          }
        },
        tableData: [],
        colnames: [
          { label: "类别", value: "" },
          { label: "关系描述", value: "" },
          { label: "姓名", value: "" },
          { label: "性别", value: "" },
          { label: "联系电话", value: "phone" },
          { label: "地址", value: "" }
        ],
        ismuti: false
      },
      // 车辆关系
      relatedata: {
        queryObj: {
          apiConfig: crmApis.custViewCustCarListQueryFindAll, //客户信息明细-车辆关系
          // 缺关系，用户权益
          apiQueryRow: [
            "vin",
            "carLicenseNo",
            "carSeriesCn",
            "smallCarTypeCn",
            "invoiceDate",
            "bindDate"
          ],
          params: {
            custNo: "",
            dlrCustNo: ""
          }
        },
        tableData: [],
        colnames: [
          { label: "VIN码", value: "vin" },
          { label: "车牌号", value: "carLicenseNo" },
          { label: "车系", value: "carSeriesCn" },
          { label: "车型", value: "smallCarTypeCn" },
          { label: "关系", value: "" },
          { label: "购车时间", value: "invoiceDate" },
          { label: "绑定时间", value: "bindDate" },
        ],
        ismuti: false
      },
      // 订单记录--缺api
      orderdata: {
        queryObj: {
          apiConfig: crmApis.clueServerQueryFromDlr,
          apiQueryRow: [],
          params: {
            custNo: "",
            dlrCustNo: ""
          }
        },
        tableData: [],
        colnames: [
          { label: "订单类型", value: "" },
          { label: "订单编号", value: "" },
          { label: "产品编码", value: "" },
          { label: "产品名称", value: "" },
          { label: "订单金额", value: "" },
          { label: "订单时间", value: "" },
          { label: "备注", value: "" }
        ],
        ismuti: false
      },
      // 预约记录
      redata: {
        queryObj: {
          apiConfig: crmApis.oneIdCustViewQueryBookingRecord, //客户信息明细-预约记录
          apiQueryRow: [
            "bookingNo",
            "bookingSource",
            "bookingDate",
            "dlrName",
            "bookingStatus",
            "bookingArriveDate"
          ],
          params: {
            custNo: "",
            dlrCustNo: ""
          }
        },
        tableData: [],
        colnames: [
          { label: "预约单号", value: "bookingNo" },
          { label: "预约来源", value: "bookingSource" },
          { label: "预约时间", value: "bookingDate" },
          { label: "预约网点", value: "dlrName" },
          { label: "预约状态", value: "bookingStatus" },
          { label: "预约项目", value: "" },
          { label: "回厂时间", value: "bookingArriveDate" }
        ],
        ismuti: false
      },
      // 客户忠诚度
      loyalty: {
        queryObj: {
          apiConfig: crmApis.oneIdCustViewQueryCustLevel, //客户信息明细-客户分级
          // 缺法人电话，法人身份证,建档日期，邮政编码，公司性质，公司规模，公司备注
          apiQueryRow: [
            // 组件
            "buyCarNum",
            "saleOrderNum",
            "saleOrderMoney",
            "accSaleMoney",
            "totalBackNum",
            "halfYearBackNum",
            "backMoney",
            "partSaleMoney"
          ],
          params: {
            custNo: "",
            dlrCustNo: ""
          }
        },

        ismuti: false
      },
      // 客户触点记录
      custContact: {
        queryObj: {
          apiConfig: crmApis.clueServerQueryFromDlr,
          apiQueryRow: [],
          params: {
            custNo: "",
            dlrCustNo: ""
          }
        },
        tableData: [],
        colnames: [
          { label: "工单类型", value: "" },
          { label: "服务请求时间", value: "" },
          { label: "单号", value: "" },
          { label: "来源系统", value: "" },
          { label: "内容", value: "" },
          { label: "状态", value: "" },
          { label: "备注", value: "" }
        ],
        ismuti: false
      },
      // 信用记录
      // credit: {
      //   queryObj:{
      //     apiConfig:crmApis.clueServerQueryFromDlr,
      //     apiQueryRow:[
      //       "creditTypeName",
      //       "creditLableName",
      //       "remark",
      //       "sourceSys"
      //     ],
      //     params:{
      //       custNo:"",
      //       dlrCustNo:""
      //     }
      //   },
      //   tableData: [
      //   ],
      //   colnames: [
      //     { label: "类型", value: "creditTypeName" },
      //     { label: "标签类别", value: "creditLableName" },
      //     { label: "备注", value: "remark" },
      //     { label: "来源系统", value: "sourceSys" },
      //   ]
      // },
      // 客户资料修改日志
      modifyLog: {
        queryObj: {
          apiConfig: crmApis.oneIdCustViewQueryCustChangeLog, //客户信息明细-客户信息维护历史
          apiQueryRow: [
            "changeDate", 
            "changeTypeName",
            "changeDes",
            "sourceSys"
          ],
          params: {
            custNo: "",
            dlrCustNo: ""
          }
        },
        tableData: [],
        colnames: [
          { label: "时间", value: "changeDate" },
          { label: "变更类型", value: "changeTypeName" },
          { label: "变更内容", value: "changeDes" },
          { label: "来源系统", value: "sourceSys" }
        ],
        ismuti: false
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initdata();
    });
  },
  methods: {
    initdata() {
      debugger;
      let that = this;
      this.commondata.queryObj.params.custNo = this.$route.params.custNo;
      this.commondata.queryObj.params.dlrCustNo = this.$route.params.dlrCustNo;
      this.contactdata.queryObj.params.custNo = this.$route.params.custNo;
      this.contactdata.queryObj.params.dlrCustNo = this.$route.params.dlrCustNo;
      this.relatedata.queryObj.params.custNo = this.$route.params.custNo;
      this.relatedata.queryObj.params.dlrCustNo = this.$route.params.dlrCustNo;
      this.orderdata.queryObj.params.custNo = this.$route.params.custNo;
      this.orderdata.queryObj.params.dlrCustNo = this.$route.params.dlrCustNo;
      this.redata.queryObj.params.custNo = this.$route.params.custNo;
      this.redata.queryObj.params.dlrCustNo = this.$route.params.dlrCustNo;
      this.loyalty.queryObj.params.custNo = this.$route.params.custNo;
      this.loyalty.queryObj.params.dlrCustNo = this.$route.params.dlrCustNo;
      this.custContact.queryObj.params.custNo = this.$route.params.custNo;
      this.custContact.queryObj.params.dlrCustNo = this.$route.params.dlrCustNo;
      this.modifyLog.queryObj.params.custNo = this.$route.params.custNo;
      this.modifyLog.queryObj.params.dlrCustNo = this.$route.params.dlrCustNo;
      // 基本信息
      this.$crmcf.simpleTablequery(
        that,
        that.commondata,
        that.commondata.queryObj.apiConfig,
        function(data) {
          that.commondata.tableData = data.rows;
        }
      );
      // 联系信息
      this.$crmcf.simpleTablequery(
        that,
        that.contactdata,
        that.contactdata.queryObj.apiConfig,
        function(data) {
          that.contactdata.tableData = data.rows;
        }
      );
      // 车辆关系
      this.$crmcf.simpleTablequery(
        that,
        that.relatedata,
        that.relatedata.queryObj.apiConfig,
        function(data) {
          that.relatedata.tableData = data.rows;
        }
      );
      // 订单记录
      // this.$crmcf.simpleTablequery(that, that.orderdata, that.orderdata.queryObj.apiConfig,function(data){
      // that.orderdata.tableData =data.rows;
      // });
      // 预约记录
      this.$crmcf.simpleTablequery(
        that,
        that.redata,
        that.redata.queryObj.apiConfig,
        function(data) {
          that.redata.tableData = data.rows;
        }
      );
      // 客户忠诚度
      this.$crmcf.simpleTablequery(
        that,
        that.loyalty,
        that.loyalty.queryObj.apiConfig,
        function(data) {
          that.loyalty.tableData = data.rows;
        }
      );
      // 客户触点记录
      // this.$crmcf.simpleTablequery(that, that.custContact, that.custContact.queryObj.apiConfig,function(data){
      // that.custContact.tableData =data.rows;
      // });
      // 信用记录
      // this.$crmcf.simpleTablequery(that, that.tabledatas, that.tabledatas.queryObj.apiConfig,function(data){
      // that.tabledatas.tableData =data.rows;
      // });
      // 客户资料修改日志
      this.$crmcf.simpleTablequery(
        that,
        that.modifyLog,
        that.modifyLog.queryObj.apiConfig,
        function(data) {
          that.modifyLog.tableData = data.rows;
        }
      );
    }
  }
};
</script>
<style scoped>
.crmtype {
  color: blue;
}
</style>