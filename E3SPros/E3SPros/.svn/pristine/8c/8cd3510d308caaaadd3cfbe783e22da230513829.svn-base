<template>
  <section>
    <!-- 客户名称+新增 -->
    <el-form-item label="客户名称" prop="custName.input">
      <el-input v-model="input" placeholder="请输入" style="margin:0;padding:0；width:50%" @blur="sendname">
        <!-- style="margin-right:-8px;padding:0px" -->
      </el-input>
      <el-button class="icon-button" style="position: absolute;top: 0;right: 0;top: 2px;" @click.native="showdialog()" icon="el-icon-more-outline"></el-button>
    </el-form-item>
    <!-- 弹窗 -->
    <el-dialog title="客户名称" :visible.sync="dialogVisible" width="900px" center modal-append-to-body append-to-body>
      <div class="filter-container filter-title-crm">
        查询条件
        <div style="float:right">
          <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
          <el-button size="small" @click="handleSelect">确认</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm">
        <el-form>
          <el-row>
            <el-col :span="8">
              <CustomerName :txt_CustomerName="cust" ref="cust"></CustomerName>
            </el-col>
            <el-col :span="8">
              <PhoneNumber ref="PhoneNumber" :PhoneNumber="phone"></PhoneNumber>
            </el-col>
            <el-col :span="8">
              <CarBrandNumber ref="CarBrandNumber" :CarBrandNumber="carbran"></CarBrandNumber>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <VINCode ref="vin" :VINCode="vin"></VINCode>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <Table :tabledatas="tabledata" ref="table" />
    </el-dialog>
  </section>
</template>

<script>
import Table from "@/components/crm/table/Table";
import CodeNumber from "@/components/crm/textbox/Complaint/CodeNumber";
import CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";

import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";

import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber";

import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

import Sex from "@/components/crm/Select/Common/Customer/Sex.vue";
import Birthday from "@/components/crm/Time/Birthday.vue";
import ITCard from "@/components/crm/textbox/Public/customerInfos/ITCard.vue";
import MobilePhone from "@/components/crm/textbox/Public/customerInfos/MobilePhone.vue";
import HomePhone from "@/components/crm/textbox/Public/customerInfos/HomePhone.vue";
import OfficePhone from "@/components/crm/textbox/Public/customerInfos/OfficePhone.vue";
// import Province from "@/components/crm/Select/Common/TempProvince";
import Province from "@/components/crm/Select/Common/Province.vue";
import City from "@/components/crm/Select/Common/City.vue";
// import City from "@/components/crm/Select/Common/tempCity.vue";
// import District from "@/components/crm/Select/Common/tempDistrict";
import District from "@/components/crm/Select/Common/District.vue";
import EMS from "@/components/crm/textbox/Public/customerInfos/EMS.vue";
import txt_DetailAddress from "@/components/crm/textbox/txt_DetailAddress.vue";

export default {
  name: "CustomersName_Remain",
  props: {
    CustomersName_Remain: {
      input: String,
      dialogVisible: Boolean
    }
  },
  components: {
    Table,
    CodeNumber,
    CustomerName,
    PhoneNumber,
    CarBrandNumber,
    VINCode,
    Sex,
    Birthday,
    ITCard,
    MobilePhone,
    HomePhone,
    OfficePhone,
    Province,
    City,
    District,
    EMS,
    txt_DetailAddress
  },
  data() {
    return {
      rowData: {
        custName: "",
        genderCode: "",
        backTel: "",
        carSeriesCn: "",
        phone: "",
        smallCode: "",
        carLicenseNo: "",
        vin: "",
        engineNo: "",
        carBrandName: "",
        smallCarTypeCn: ""
      },
      input: "",
      width: "850px",
      dialogVisible: false,
      addDialogVisible: false,
      cust: {
        input: ""
      },
      phone: {
        input: ""
      },
      vin: {
        input: ""
      },
      carbran: {
        input: ""
      },
      txtcust: {
        input: ""
      },
      Sex: {
        value: ""
      },
      Birth: {
        value: ""
      },
      ITcar: {
        input: ""
      },
      Phone1: {
        input: ""
      },
      Mobphone: {
        input: ""
      },
      Homephone: {
        input: ""
      },
      OfficePhone: {
        input: ""
      },
      dateValue: {
        value: ""
      },
      agentData: {
        input: ""
      },
      Sex: {
        value: ""
      },
      ems: {
        input: ""
      },
      Address: {
        input: ""
      },
      Offphone: {
        input: ""
      },
      form: {
        name: "",
        region: ""
      },

      addpro: {
        value: "",
        label: ""
      },
      addcity: {
        value: "",
        pcode: ""
      },
      adddistrict: {
        value: "",
        pcode: ""
      },
      addems: {
        input: ""
      },
      formLabelWidth: "100px",

      tabledata: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "客户姓名", value: "custName" },
          { label: "性别", value: "genderName" },
          { label: "电话", value: "phone" },
          { label: "车牌号", value: "carLicenseNo" },
          { label: "VIN码", value: "vin" },
          { label: "车系", value: "carSeriesCn" },
          { label: "是否车主", value: "isCarowner" },
          { label: "车辆品牌", value: "carBrandName" },
          { label: "车型名称", value: "smallCarTypeCn" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.mdmDlrCustInfoQuery,
          apiQueryRow: [
            "custName",
            "genderCode",
            "genderName",
            "phone",
            "backTel",
            "isCarowner",
            "carBrandName",
            "carSeriesCn",
            "carLicenseNo",
            "engineNo",
            "carBrandName",
            "smallCarTypeCn",
            "vin",
            "dlrCustNo"
          ],
          params: {
            isPV800: "1",
            phone: "",
            custName: "",
            carLicenseNo: "",
            vin: ""
            // dlrCustNo:"",
          }
        },
        pagesize: 8,
        pageindex: 1,
        total: 0
      },
      adddatas: {
        // 操作列
        colnames: [
          { label: "客户姓名", value: "custName" },
          { label: "性别", value: "genderName" },
          { label: "电话", value: "phone" },
          { label: "省份", value: "addrProvince" },
          { label: "城市", value: "addrCity" },
          { label: "区县", value: "addrCounty" }
        ],
        tableData: [],
        apiConfig: crmApis.mdmDlrCustInfoQuery, //专营店客户信息查询
        queryObj: {
          apiQueryRow: [
            "custName",
            "genderName",
            "genderCode",
            "phone",
            "isCarowner",
            "carBrandName",
            "carSeriesCn",
            "carLicenseNo",
            "smallCarTypeCn",
            "vin",
            "engineNo",
            "addrProvince",
            "addrCity",
            "addrCounty"
          ],
          params: {
            dlrCustNo: ""
          },
          addparams: {
            custName: "",
            genderCode: "",
            birthDate: "",
            credNo: "",
            phone: "",
            homeTel: "",
            officeTel: "",
            // addrProvince: "广西",
            // addrCity: "北海",
            // addrCounty: "银海区",
            addrZip: "",
            addrStreet: "",
            custFullName: "",
            custClassCode: "0", //客户类型
            credTypeCode: "1", //证件类型
            credTypeName: "身份证" //证件类型名称
          }
        }
      }
    };
  },
  methods: {
    fetchData() {
      let that = this;
      that.tabledata.queryObj.params.custName = this.$refs.cust.input;
      that.tabledata.queryObj.params.phone = this.$refs.PhoneNumber.input;
      that.tabledata.queryObj.params.carLicenseNo = this.$refs.CarBrandNumber.input;
      that.tabledata.queryObj.params.vin = this.$refs.vin.input;
      this.$refs.table.getData();
    },
    fetchData_add(formName) {
      let that = this;
      that.adddatas.queryObj.addparams.custName = this.$refs.txtcust.input;
      that.adddatas.queryObj.addparams.custFullName = this.$refs.txtcust.input;
      that.adddatas.queryObj.addparams.genderCode = this.$refs.Sex.value;
      that.adddatas.queryObj.addparams.birthDate = this.$refs.Birthday.value;
      that.adddatas.queryObj.addparams.credNo = this.$refs.ITCard.input;
      that.adddatas.queryObj.addparams.phone = this.$refs.Phone1.input;
      that.adddatas.queryObj.addparams.homeTel = this.$refs.HomePhone.input;
      that.adddatas.queryObj.addparams.officeTel = this.$refs.OfficePhone.input;

      that.adddatas.queryObj.addparams.provinceId = this.$refs.Province.value;
      that.adddatas.queryObj.addparams.cityId = this.$refs.City.value;
      that.adddatas.queryObj.addparams.countyId = this.$refs.District.value;
      that.adddatas.queryObj.addparams.addrZip = this.$refs.EMS.input;

      that.adddatas.queryObj.addparams.addrStreet = this.$refs.DetailAddress.input;

      let flag = false;
      var config = this.config;
      config = {
        custName: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.adddatas.queryObj.addparams.custName,
          "客户名称",
          "不能为空"
        ],
        phone: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.adddatas.queryObj.addparams.phone,
          "联系电话",
          "不能为空",
          ""
        ]
        // homeTel: [
        //   true,
        //   this.$crmcf.crmRegExp("phone"),
        //   "value",
        //   that.adddatas.queryObj.addparams.homeTel,
        //   "家庭电话",
        //   "格式错误",
        //   ""
        // ],
        // officeTel: [
        //   true,
        //   this.$crmcf.crmRegExp("phone"),
        //   "value",
        //   that.adddatas.queryObj.addparams.officeTel,
        //   "家庭电话",
        //   "格式错误",
        //   ""
        // ],
        // ITCard: [
        //   true,
        //   this.$crmcf.crmRegExp("idCard"),
        //   "value",
        //   that.adddatas.queryObj.addparams.ITCard,
        //   "身份证",
        //   "格式错误",
        //   ""
        // ],
      };
      this.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let queryObj = {
            type: "mutation",
            // api配置
            apiConfig: crmApis.createdOneIdMutationSaveCust, //专营店新建客户
            // 需要调用的API服务配置
            apiServices: [
              {
                //表格中台返回网格的字段
                apiQueryRow: ["dlrCustNo"]
              }
            ],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              pageSize: 10,
              pageIndex: 1,
              //当前中台使用的名称有dataInfo、info，具体查看API文档
              dataInfo: {
                custInfo: that.adddatas.queryObj.addparams,
                custModifyScence: "201"
              }
            }
          };
          //转换了中台请求格式数据
          var paramD = that.$getParams(queryObj);
          // 调用中台API方法（可复用）
          requestGraphQL(paramD).then(response => {
            if (
              response.data[queryObj.apiConfig.ServiceCode].result == "1"
              //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
            ) {
              that.adddatas.queryObj.params.dlrCustNo =
                response.data[queryObj.apiConfig.ServiceCode].rows.dlrCustNo;
              that.$crmcf.showMessages(that, "success", "保存成功！");
              that.query();
            } else {
              that.$crmcf.showMessages(
                that,
                "error",
                response.data[queryObj.apiConfig.ServiceCode].msg
              );
            }
          });
        }
      });
    },
    query() {
      let that = this;
      let queryObj = {
        type: "query",
        // api配置
        apiConfig: crmApis.mdmDlrCustInfoQuery, //专营店新建客户
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: that.adddatas.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.adddatas.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.adddatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.adddatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.adddatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },
    sendname() {
      let that = this;
      that.tabledata.queryObj.params.custName = that.input;
      this.fetchData();
    },
    changepage() {},
    next() {},
    prev() {},
    //联动
    changepro(val, name) {
      let that = this;
      that.addcity.pcode = val;
      if (that.$refs.City == undefined) {
      } else {
        that.$refs.City.getData();
      }
      this.adddatas.queryObj.addparams.addrProvince = name;
    },
    changecity(val, name) {
      let that = this;
      that.adddistrict.pcode = val;
      if (that.$refs.District == undefined) {
      } else {
        that.$refs.District.getData();
      }
      this.adddatas.queryObj.addparams.addrCity = name;
    },
    changedistr(val, name) {
      this.adddatas.queryObj.addparams.addrCounty = name;
    },
    SelectH: function(row) {
      let that = this;
    },
    showdialog: function() {
      let that = this;
      console.log("进来了showdialog方法");
      if (this.CustomersName_Remain.dialogVisible == false) {
        that.dialogVisible = this.CustomersName_Remain.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },

    handleSelect: function(rowData) {
      let that = this;
      that.input = this.$refs.table.rowData.custName;
      that.$emit("CatData", this.$refs.table.rowData);
      that.dialogVisible = false;
    },

    sendCode() {
      let that = this;
      that.input = that.rowData.custName;
      that.addDialogVisible = false;
      that.$emit("CatData", that.rowData);
    },
    getData() {
      let that = this;
      that.input = this.CustomersName_Remain.input;
    },
    resetinput() {
      let that = this;
      that.input = "";
    },
    reset: function() {
      this.$refs.cust.reset();
      this.$refs.PhoneNumber.reset();
      this.$refs.CarBrandNumber.reset();
      this.$refs.vin.reset();
    }
  }
};
</script>

<style scoped>
.dmo-form-inline {
  float: left;
  padding: 0px 15px;
  text-align: left;
  margin-top: 20px;
  width: 98%;
}
.dialog .el-dialog__body {
  padding: 10px 10px;
}
.dmo-form-inline .btton {
  float: right;
}
</style>



