<!--
* 描述: 新建线索
* 创建人: hejin
* 创建时间: 2019-07-26
* 记录：
*  20190726 新建 hejin
    20190918
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="tempsave">暂存</el-button>
      <el-button size="small" @click="save('form')">保存线索</el-button>
      <el-button size="small">发送信息</el-button>
      <el-button size="small">退出</el-button>
    </div>
    <el-form label-position="right" :model="form" ref="form">
      <div class="filter-container filter-title-crm">客户信息</div>
      <div class="filter-container filter-params-crm">
        <!--第一行-->
        <!--客户信息-->
        <!--左半块 @custinfo="initcust"-->
        <el-row>
          <el-col :span="6">
            <CustomersName
              class="crm-label-required"
              :CustomersName_Add="form.custName"
              @CatData="initcust"
              ref="custName"
            ></CustomersName>
          </el-col>
          <el-col :span="6" class="crm-label-required">
            <PhoneNumber
              class="crm-label-required"
              :PhoneNumber="form.contactTel"
              @inputcheck="checkphone"
              ref="contactTel"
            ></PhoneNumber>
          </el-col>
          <el-col :span="6" class="crm-label-required">
            <Sex
              class="crm-label-required"
              :Sex="form.gender"
              @valuecheck="checkgender"
              ref="gender"
            ></Sex>
          </el-col>
          <el-col :span="6">
            <BackupPhone class="crm-label-required" :BackupPhone="form.backupTel" ref="backupTel"></BackupPhone>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <UseCarName :UseCarName="form.useCustName" ref="useCustName"></UseCarName>
          </el-col>
          <el-col :span="6">
            <UseCarPhone :UseCarPhone="form.usePhone" ref="usePhone"></UseCarPhone>
          </el-col>
          <el-col :span="6">
            <Sex :Sex="form.useGenderCode" ref="useGenderCode"></Sex>
          </el-col>
          <el-col :span="6">
            <BackupPhone :BackupPhone="form.useBackupTel" ref="useBackupTel"></BackupPhone>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button id="hideb" v-show="false" @click="hidebutton('form')"></el-button>
        </el-form-item>
      </div>

      <div class="filter-container filter-title-crm">单据信息</div>
      <div class="filter-container filter-params-crm query-params">
        <!--右半块-->

        <el-row>
          <el-col :span="6">
            <SourceOfChannel
              class="crm-label-required"
              :SourceOfChannel="form.SourceOfChannel"
              @CatData="checkschanel"
              ref="SourceOfChannel"
            ></SourceOfChannel>
          </el-col>
          <el-col :span="6">
            <IntentionLevel
              class="crm-label-required"
              :IntentionLevel="form.clueLevelCode"
              @changeLevel="visitTime"
              ref="clueLevelCode"
            ></IntentionLevel>
          </el-col>
          <el-col :span="6">
            <IntentionalCar
              class="crm-label-required"
              :IntentionalCar="form.inteSeriesCode"
              @CatData="modelWithcar"
              ref="inteSeriesCode"
            ></IntentionalCar>
          </el-col>
          <el-col :span="6">
            <IntentionalModel
              class="crm-label-required"
              :IntentionalModel="form.inteTypeCode"
              @CatData="checkCartype"
              ref="inteTypeCode"
            ></IntentionalModel>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <NextReturnVisitTime
              :NextReturnVisitTime="form.nextCallbackDate"
              ref="nextCallbackDate"
            ></NextReturnVisitTime>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <Descripts :Descripts="form.clueDesc" ref="clueDesc"></Descripts>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <Remarks :Remarks="form.remark" ref="remark"></Remarks>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>
<script>
// import SideBar from "@/components/crm/SideBar";
// import NavBar from "@/components/crm/NavBar";

//左边
import CustomersName from "@/components/crm/EjectWindows/CustomersName_Add";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import Sex from "@/components/crm/Select/Common/Customer/Sex";
import BackupPhone from "@/components/crm/textbox/Public/customerInfos/BackupPhone";
import UseCarName from "@/components/crm/textbox/Public/customerInfos/UseCarName";
import UseCarPhone from "@/components/crm/textbox/Public/customerInfos/UseCarPhone";
//右边
import NextReturnVisitTime from "@/components/crm/Time/NextReturnVisitTime";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel";
import SourceOfChannel from "@/components/crm/EjectWindows/SourceOfChannel";
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar.vue";
import IntentionalModel from "@/components/crm/EjectWindows/IntentionalModel";
import Descripts from "@/components/crm/textbox/Public/Descripts";
import Remarks from "@/components/crm/textbox/Complaint/Remarks";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "crmNewthread",
  components: {
    CustomersName,
    PhoneNumber,
    Sex,
    BackupPhone,
    UseCarName,
    UseCarPhone,
    NextReturnVisitTime,
    IntentionLevel,
    SourceOfChannel,
    IntentionalCar,
    IntentionalModel,
    Descripts,
    Remarks
  },
  data() {
    return {
      ttset: true,
      form: {
        custName: {
          input: ""
        },
        contactTel: {
          input: ""
        },
        gender: {
          value: ""
        },
        backupTel: {
          input: ""
        },
        useCustName: {
          input: ""
        },
        usePhone: {
          input: ""
        },
        useGenderCode: {
          value: ""
        },
        useBackupTel: {
          input: ""
        },
        SourceOfChannel: {
          input: ""
        },
        clueLevelCode: {
          value: "",
          isdisabled: false
        },
        inteSeriesCode: {
          input: ""
        },
        inteTypeCode: {
          input: "",
          pcode: ""
        },
        nextCallbackDate: {
          value: ""
        },
        clueDesc: {
          input: ""
        },
        remark: {
          input: ""
        }
      },
      queryObj: {
        apiConfig: crmApis.clueServerMutationCreateClueOrder,
        apiQueryRow: [],
        params: {
          custName: "",
          gender: "",
          contactTel: "",
          backupTel: "",
          serverOrder: this.$route.params.serverOrder,
          //serverId:this.$route.params.serverId,
          useCustName: "",
          useGenderCode: "",
          usePhone: "",
          useBackupTel: "",
          cantactWayCode: "",
          infoChanMCode: "",
          infoChanDCode: "",
          clueLevelCode: "",
          dlrCode: this.$store.getters.orgInfo.DLR_CODE,
          nextCallbackDate: "",
          inteSeriesCode: "",
          inteTypeCode: "",
          clueDesc: "",
          remark: "",
          handleCode: "1",
          carBrandCode: "",
          carBrandName: ""
        }
      },
      tabledatas: {
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryFromDlr,
          apiQueryRow: [
            "custName",
            "contactTel",
            "gender",
            "backupTel",
            "useCustName",
            "useGenderCode",
            "usePhone",
            "useBackupTel",
            "clueLevelCode",
            "inteTypeCode",
            "inteTypeId",
            "inteSeriesCode",
            "inteSeriesId",
            "carBrandName",
            "carSeriesCn",
            "cantactWayName",
            "cantactWayCode",
            "infoChanMName",
            "infoChanMCode",
            "infoChanDName",
            "infoChanDCode",
            "serverOrder",
            "reviewStatusName",
            "createdName",
            "nextCallbackDate",
            "remainDataDate",
            "statusName",
            "crruNodeName",
            "caEmpName",
            "csr"
          ],
          params: {
            custName: "",
            contactTel: "",
            inteSeriesId: "",
            clueLevelCode: "",
            createdDateStart: "",
            createdDateEnd: "",
            status: "",
            csr: "",
            serverOrder: this.$route.params.serverOrder,
            cantactWayCode: "",
            infoChanMCode: "",
            carBrandCode: "",
            assignStatus: "",
            crruNode: "",
            orderDateStart: "",
            orderDateEnd: "",
            createdName: "",
            dlrCode: "",
            handleCode: "1",
            statusArray: ["10", "20", "21", "30", "31", "40", "50"]
          }
        }
      }
    };
  },
  mounted() {
    this.$nextTick(function() {
      if (this.$route.params.serverOrder) {
        this.initData();
      }
    });
  },
  beforeDestroy() {
    // this.editor = null;
    // delete this.editor;
  },
  methods: {
    // 准备富文本编辑器
    onEditorReady(editor) {},
    // 富文本编辑器 失去焦点事件
    onEditorBlur(editor) {},
    // 富文本编辑器 获得焦点事件
    onEditorFocus(editor) {},
    // 富文本编辑器 内容改变事件
    onEditorChange(editor) {},
    getDateStr: function(AddDayCount) {
      let dd = new Date();
      dd.setDate(dd.getDate() + AddDayCount);
      let y = dd.getFullYear();
      let m = dd.getMonth() + 1;
      let d = dd.getDate();
      return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
    },
    initData() {
      let that = this;
      this.$crmcf.simpleTablequery(
        that,
        that.tabledatas,
        that.tabledatas.queryObj.apiConfig,
        function(data) {
          let results = data.rows[0];
          for (let key in that.form) {
            if ("input" in that.form[key]) {
              if (results.hasOwnProperty(key)) {
                that.form[key].input = results[key];
                that.$refs[key].getData();
              }
            } else {
              if (results.hasOwnProperty(key)) {
                that.form[key].value = results[key];
                that.$refs[key].getData();
              }
            }
          }
          that.form.SourceOfChannel.input =
            results.cantactWayName +
            ">" +
            results.infoChanMName +
            ">" +
            results.infoChanDName;
          that.$refs.SourceOfChannel.getData();
          that.queryObj.params.cantactWayCode =
            results.cantactWayCode;
          that.queryObj.params.infoChanMCode =
            results.infoChanMCode;
          that.queryObj.params.infoChanDCode =
            results.infoChanDCode;
           that.queryObj.params.inteSeriesCode =
            results.inteSeriesCode;
          that.queryObj.params.inteSeriesId =
            results.inteSeriesId;
          that.queryObj.params.inteTypeCode =
            results.inteTypeCode;
          that.queryObj.params.inteTypeId =
            results.inteTypeId;
        }
      );
    },
    save: function(formName) {
      let that = this;
      for (let key in that.form) {
        if ("input" in that.form[key]) {
          that.queryObj.params[key] = that.$refs[key].input;
          that.form[key].input = that.$refs[key].input;
        } else {
          that.queryObj.params[key] = that.$refs[key].value;
          that.form[key].value = that.$refs[key].value;
        }
      }
      delete that.queryObj.params.SourceOfChannel;
      let flag = false;
      var config = this.config;

      config = {
        custName: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.queryObj.params.custName,
          "客户名称",
          "不能为空",
          {}
        ],
        contactTel: [
          true,
          this.$crmcf.crmRegExp("tel"),
          "input",
          that.queryObj.params.contactTel,
          "电话",
          "格式错误",
          "",
          {
            required: true,
            pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
            message: " ",
            trigger: "blur"
          }
        ],
        gender: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.queryObj.params.gender,
          "性别",
          "不能为空"
        ],
        SourceOfChannel: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          this.$refs.SourceOfChannel.rowData.cantactWayCode ||
            that.form.SourceOfChannel.input,
          "渠道来源",
          "不能为空",
          "change"
        ],
        clueLevelCode: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.queryObj.params.clueLevelCode,
          "意向级别",
          "不能为空",
          "change"
        ],
        inteSeriesCode: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          this.$refs.inteSeriesCode.rowData.carSeriesId ||
            that.form.inteSeriesCode.input,
          "意向车系",
          "不能为空"
        ],
        inteTypeCode: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          this.$refs.inteTypeCode.rowData.smallCarTypeId ||
            that.form.inteTypeCode.input,
          "意向车型",
          "不能为空"
        ]
      };
      this.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          if(that.queryObj.params.serverOrder){}else{
            that.queryObj.params.inteSeriesCode =
            that.$refs.inteSeriesCode.rowData.carSeriesCode;
          that.queryObj.params.inteSeriesId =
            that.$refs.inteSeriesCode.rowData.carSeriesId;
          that.queryObj.params.inteTypeCode =
            that.$refs.inteTypeCode.rowData.smallCarTypeCode;
          that.queryObj.params.inteTypeId =
            that.$refs.inteTypeCode.rowData.smallCarTypeId;
          that.queryObj.params.cantactWayCode =
            that.$refs.SourceOfChannel.rowData.cantactWayCode;
          that.queryObj.params.infoChanMCode =
            that.$refs.SourceOfChannel.rowData.infoChanMCode;
          that.queryObj.params.infoChanDCode =
            that.$refs.SourceOfChannel.rowData.infoChanDCode;
          }
          
          let queryObj = {
            // api配置
            type: "mutation",
            apiConfig: that.queryObj.apiConfig,
            // 需要调用的API服务配置
            apiServices: [
              {
                //表格中台返回网格的字段
                apiQueryRow: that.queryObj.apiQueryRow
              }
            ],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              //当前中台使用的名称有dataInfo、info，具体查看API文档
              dataInfo: that.queryObj.params
            }
          };
          //转换了中台请求格式数据
          var paramD = that.$getParams(queryObj);
          // 调用中台API方法（可复用）
          requestGraphQL(paramD).then(response => {
            if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
              that.$crmcf.showMessages(that, "success", "成功！");
              that.$crmcf.crmcloseView(that);
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
    tempsave: function(formName) {
      let that = this;
      for (let key in that.form) {
        if ("input" in that.form[key]) {
          if (that.form[key].input) {
            that.queryObj.params[key] = that.form[key].input;
          } else {
            that.queryObj.params[key] = that.$refs[key].input;
            that.form[key].input = that.$refs[key].input;
          }
        } else {
          if (that.form[key].value) {
            that.queryObj.params[key] = that.form[key].value;
          } else {
            that.queryObj.params[key] = that.$refs[key].value;
            that.form[key].value = that.$refs[key].value;
          }
        }
      }
      delete that.queryObj.params.SourceOfChannel;
      let flag = false;
      var config = this.config;

      config = {
        custName: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.queryObj.params.custName,
          "客户名称",
          "不能为空",
          {}
        ],
        contactTel: [
          true,
          this.$crmcf.crmRegExp("tel"),
          "input",
          that.queryObj.params.contactTel,
          "电话",
          "格式错误",
          "",
          {
            required: true,
            pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
            message: " ",
            trigger: "blur"
          }
        ],
        gender: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.queryObj.params.gender,
          "性别",
          "不能为空"
        ],
        SourceOfChannel: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          this.$refs.SourceOfChannel.rowData.cantactWayCode ||
            that.form.SourceOfChannel.input,
          "渠道来源",
          "不能为空",
          "change"
        ],
        clueLevelCode: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.queryObj.params.clueLevelCode,
          "意向级别",
          "不能为空",
          "change"
        ],
        inteSeriesCode: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          this.$refs.inteSeriesCode.rowData.carSeriesId ||
            that.form.inteSeriesCode.input,
          "意向车系",
          "不能为空"
        ],
        inteTypeCode: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          this.$refs.inteTypeCode.rowData.smallCarTypeId ||
            that.form.inteTypeCode.input,
          "意向车型",
          "不能为空"
        ]
      };
      this.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          if(that.queryObj.params.serverOrder){}else{
            that.queryObj.params.inteSeriesCode =
            that.$refs.inteSeriesCode.rowData.carSeriesCode;
          that.queryObj.params.inteSeriesId =
            that.$refs.inteSeriesCode.rowData.carSeriesId;
          that.queryObj.params.inteTypeCode =
            that.$refs.inteTypeCode.rowData.smallCarTypeCode;
          that.queryObj.params.inteTypeId =
            that.$refs.inteTypeCode.rowData.smallCarTypeId;
          that.queryObj.params.cantactWayCode =
            that.$refs.SourceOfChannel.rowData.cantactWayCode;
          that.queryObj.params.infoChanMCode =
            that.$refs.SourceOfChannel.rowData.infoChanMCode;
          that.queryObj.params.infoChanDCode =
            that.$refs.SourceOfChannel.rowData.infoChanDCode;
          }
          that.queryObj.params.handleCode = "0";
          let queryObj = {
            // api配置
            type: "mutation",
            apiConfig: that.queryObj.apiConfig,
            // 需要调用的API服务配置
            apiServices: [
              {
                //表格中台返回网格的字段
                apiQueryRow: that.queryObj.apiQueryRow
              }
            ],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              //当前中台使用的名称有dataInfo、info，具体查看API文档
              dataInfo: that.queryObj.params
            }
          };
          //转换了中台请求格式数据
          var paramD = that.$getParams(queryObj);
          // 调用中台API方法（可复用）
          requestGraphQL(paramD).then(response => {
            if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
              that.$crmcf.showMessages(that, "success", "成功！");
              that.$crmcf.crmcloseView(that);
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
    test() {
      let that = this;
      that.ttset = false;
    },
    initcust(rowData) {
      debugger;
      let that = this;
      that.form.contactTel.input = rowData.phone;
      that.form.custName.input = rowData.custName;
      that.form.gender.value = rowData.genderCode;
      that.$refs.custName.getData();
      that.$refs.contactTel.getData();
      this.$refs.gender.getData();
    },
    checkphone() {
      let that = this;
      that.form.contactTel.input = that.$refs.contactTel.input;
    },
    checkgender() {
      let that = this;
      that.form.gender.value = that.$refs.gender.value;
    },
    checkschanel(data) {
      let that = this;
      that.form.SourceOfChannel.input =
        data[0].cantactWayName +
        "<" +
        data[0].infoChanMName +
        "<" +
        data[0].infoChanDName;
    },
    modelWithcar(obj) {
      let that = this;
      that.form.inteSeriesCode.input = obj[0].carSeriesId;
      that.form.inteTypeCode.pcode = obj[0].carSeriesId;
      that.$refs.inteTypeCode.getData();
    },
    visitTime(level) {
      let that = this;
      that.form.clueLevelCode.value = level;
      switch (level) {
        case "H":
          that.form.nextCallbackDate.value =
            that.getDateStr(3) + " " + "12:00:00";
          that.$refs.nextCallbackDate.getData();
          break;
        case "A":
          that.form.nextCallbackDate.value =
            that.getDateStr(7) + " " + "12:00:00";
          that.$refs.nextCallbackDate.getData();
          break;
        case "B":
          that.form.nextCallbackDate.value =
            that.getDateStr(15) + " " + "12:00:00";
          that.$refs.nextCallbackDate.getData();
          break;
        case "C":
          that.form.nextCallbackDate.value =
            that.getDateStr(30) + " " + "12:00:00";
          that.$refs.nextCallbackDate.getData();
          break;
        case "E":
          that.form.nextCallbackDate.value =
            that.getDateStr(45) + " " + "12:00:00";
          that.$refs.nextCallbackDate.getData();
          break;
      }
    },
    checkCartype(data) {
      let that = this;
      debugger;
      that.form.inteTypeCode.input = data[0].smallCarTypeCode;
      that.queryObj.params.carBrandCode = data[0].carBrandCode;
      that.queryObj.params.carBrandName = data[0].carBrandCn;
    }
  }
};
</script>
<style>
</style>

