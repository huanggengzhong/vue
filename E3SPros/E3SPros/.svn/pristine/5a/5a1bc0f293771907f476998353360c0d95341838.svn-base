<!--
* 描述: 经销商系统配置
* 创建人: hejin
* 创建时间: 2019-07-26
* 记录：
*  20190726 新建 hejin
-->
<template>
  <div class="app-container app-container-table filter-params-crm-scroll">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="save('form')">保存</el-button>
    </div>
    <div class="filter-container-crm filter-title-crm">经销商系统配置</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right" :model="form" ref="form">
        <!--第一行-->
        <el-row>
          <el-col :span="11" class="crm-label-required">
            <!--线索自动失效-->
            <ClueAutoFailure :ClueAutoFailure="form.clueAutoInvalid" ref="clueAutoInvalid"></ClueAutoFailure>
          </el-col>
          <el-col :span="13">
            <p style="color:red;text-align:left">注：线索最后一次回访之后，一直未到店的，而且处于跟进过程的线索，自动失效月份</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11" class="crm-label-required">
            <!--限制登录起始时间设置-->
            <LimitedLoginStartTimeSet
              :LimitedLoginStartTimeSet="form.beginLandingTime"
              ref="beginLandingTime"
            ></LimitedLoginStartTimeSet>
          </el-col>
          <el-col :span="13">
            <p style="color:red;text-align:left">注：设定系统允许登录的起始时间</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11" class="crm-label-required">
            <!--限制登录结束时间设置-->
            <LimitedLoginEndTime :LimitedLoginEndTime="form.endLandingTime" ref="endLandingTime"></LimitedLoginEndTime>
          </el-col>
          <el-col :span="13">
            <p style="color:red;text-align:left">注：设定系统允许登录的结束时间</p>
          </el-col>
        </el-row>

        <!--第二行-->
        <el-row>
          <el-col :span="11" class="crm-label-required">
            <SMSchannel :SMSchannel="form.isMessAisle" ref="isMessAisle"></SMSchannel>
          </el-col>
          <el-col :span="13">
            <p style="color:red;text-align:left">注：短信通道开启，可以发送短信，所产生的费用由网点负责</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11" class="crm-label-required">
            <CommunicationRecordShare
              :CommunicationRecordShare="form.isActiveRecordShare"
              ref="isActiveRecordShare"
            ></CommunicationRecordShare>
          </el-col>
          <el-col :span="13">
            <p style="color:red;text-align:left">注：沟通记录共享开启，其他经销商就可以查询到本店的沟通记录</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11" class="crm-label-required">
            <AutomaticDistributionSwitch
              :AutomaticDistributionSwitch="form.isAutoAssgin"
              ref="isAutoAssgin"
            ></AutomaticDistributionSwitch>
          </el-col>
          <el-col :span="13">
            <p style="color:red;text-align:left">注：开启之后，除了网络渠道的线索都可以自动分配</p>
          </el-col>
        </el-row>

        <!--第三行-->
        <el-row>
          <el-col :span="11" class="crm-label-required">
            <DCCSpecialistAppointmentStoreIsEnabled
              :DCCSpecialistAppointmentStoreIsEnabled="form.isDcc"
              ref="isDcc"
            ></DCCSpecialistAppointmentStoreIsEnabled>
          </el-col>
          <el-col :span="13">
            <p style="color:red;text-align:left">注：电销员预约到店开启，电销员可以预约到店</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11" class="crm-label-required">
            <InvalidClueAutoFilterTime
              :InvalidClueAutoFilterTime="form.autoInvalidDays"
              ref="autoInvalidDays"
            ></InvalidClueAutoFilterTime>
          </el-col>
          <el-col :span="13">
            <p style="color:red;text-align:left">注：默认7天，即7天内的的无效线索，重新再导入时自动过滤掉</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11" class="crm-label-required">
            <HlevelAppointmentReturnVisit
              :HlevelAppointmentReturnVisit="form.hArriveReview"
              ref="hArriveReview"
            ></HlevelAppointmentReturnVisit>
          </el-col>
          <el-col :span="13">
            <p style="color:red;text-align:left">注：一周内考虑购车的意向客户；店端设置时间要小于厂家设置的时间</p>
          </el-col>
        </el-row>

        <!--第四行-->
        <el-row>
          <el-col :span="11" class="crm-label-required">
            <A_AppointReturnVisitSet
              :A_AppointReturnVisitSet="form.aArriveReview"
              ref="aArriveReview"
            ></A_AppointReturnVisitSet>
          </el-col>
          <el-col :span="13">
            <p style="color:red;text-align:left">注：半个月以内考虑购车的意向客户；店端设置时间要小于厂家设置的时间</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11" class="crm-label-required">
            <BLevelReserveReturnVisitSetting
              :BLevelReserveReturnVisitSetting="form.bArriveReview"
              ref="bArriveReview"
            ></BLevelReserveReturnVisitSetting>
          </el-col>
          <el-col :span="13">
            <p style="color:red;text-align:left">注：一个月内考虑购车的意向客户；店端设置时间要小于厂家设置的时间</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11" class="crm-label-required">
            <ClevelAppointmentReturnVisit
              :ClevelAppointmentReturnVisit="form.cArriveReview"
              ref="cArriveReview"
            ></ClevelAppointmentReturnVisit>
          </el-col>
          <el-col :span="13">
            <p style="color:red;text-align:left">注：一个月以上考虑购车的意向客户；店端设置时间要小于厂家设置的时间</p>
          </el-col>
        </el-row>

        <!--第五行-->
        <el-row>
          <el-col :span="11" class="crm-label-required">
            <E_AppointReturnVisitSet
              :E_AppointReturnVisitSet="form.eArriveReview"
              ref="eArriveReview"
            ></E_AppointReturnVisitSet>
          </el-col>
          <el-col :span="13">
            <p style="color:red;text-align:left"></p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11" class="crm-label-required">
            <FailureLoseControllerWhetherCheck
              :FailureLoseControllerWhetherCheck="form.failContrloIsCheck"
              ref="failContrloIsCheck"
            ></FailureLoseControllerWhetherCheck>
          </el-col>
          <el-col :span="13">
            <p style="color:red;text-align:left"></p>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
    
  
<script>
// import SideBar from "@/components/crm/SideBar";
// import NavBar from "@/components/crm/NavBar";

//系统自动失效
import ClueAutoFailure from "@/components/crm/Select/Clue/ClueAutoFailure.vue";
import LimitedLoginStartTimeSet from "@/components/crm/textbox/Public/Agent/LimitedLoginStartTimeSet.vue";
import LimitedLoginEndTime from "@/components/crm/textbox/Public/Network/LimitedLoginEndTime.vue";
//短信通道设置是否启用
import SMSchannel from "@/components/crm/Select/SMSchannel";

//沟通记录共享是否启用
import CommunicationRecordShare from "@/components/crm/Select/Whether/CommunicationRecordShare.vue";
//自动分配开关是否启用
import AutomaticDistributionSwitch from "@/components/crm/Select/AutomaticDistributionSwitch.vue";
//DCC专员预约到店是否启用
import DCCSpecialistAppointmentStoreIsEnabled from "@/components/crm/Select/Whether/DCCSpecialistAppointmentStoreIsEnabled.vue";
//无效线索自动过滤时间
import InvalidClueAutoFilterTime from "@/components/crm/textbox/Public/Agent/InvalidClueAutoFilterTime.vue";
//H级预约回访设定
import HlevelAppointmentReturnVisit from "@/components/crm/textbox/Clue/ReturnVisit/HlevelAppointmentReturnVisit.vue";
//A级预约回访设定
import A_AppointReturnVisitSet from "@/components/crm/textbox/Clue/ReturnVisit/A_AppointReturnVisitSet.vue";
//B级预约回访设定
import BLevelReserveReturnVisitSetting from "@/components/crm/textbox/Clue/BLevelReserveReturnVisitSetting.vue";
//C级预约回访设定
import ClevelAppointmentReturnVisit from "@/components/crm/textbox/Clue/ReturnVisit/ClevelAppointmentReturnVisit.vue";
//E级预约回访设定
import E_AppointReturnVisitSet from "@/components/crm/textbox/Clue/ReturnVisit/E_AppointReturnVisitSet.vue";
//战败失控是否审核
import FailureLoseControllerWhetherCheck from "@/components/crm/Select/Whether/FailureLoseControllerWhetherCheck.vue";

import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "crmDealerSystermCof",
  components: {
    ClueAutoFailure,
    LimitedLoginStartTimeSet,
    LimitedLoginEndTime,
    SMSchannel,
    CommunicationRecordShare,
    AutomaticDistributionSwitch,
    DCCSpecialistAppointmentStoreIsEnabled,
    InvalidClueAutoFilterTime,
    HlevelAppointmentReturnVisit,
    A_AppointReturnVisitSet,
    BLevelReserveReturnVisitSetting,
    ClevelAppointmentReturnVisit,
    E_AppointReturnVisitSet,
    FailureLoseControllerWhetherCheck
  },
  data() {
    return {
      toggleParam: false,
      delayreason: "",
      //给后台传值
      form: {
        clueAutoInvalid: {
          value: ""
        },
        beginLandingTime: {
          value: ""
        },
        endLandingTime: {
          value: ""
        },
        isMessAisle: {
          value: ""
        },
        dccSpecial: {
          value: ""
        },
        isActiveRecordShare: {
          value: ""
        },
        isAutoAssgin: {
          input: ""
        },
        isDcc: {
          value: ""
        },
        autoInvalidDays: {
          input: ""
        }, //无效线索自动过滤时间
        hArriveReview: {
          input: ""
        },
        aArriveReview: {
          input: ""
        },
        bArriveReview: {
          input: ""
        },
        cArriveReview: {
          input: ""
        },
        eArriveReview: {
          input: ""
        },
        failContrloIsCheck: {
          value: ""
        }
      },
      savedata: {
        queryObj: {
          apiConfig: crmApis.csDbSystemConfigMutationSaveById,
          params: {
            // oemCode: this.$store.getters.orgInfo.OEM_CODE,
            // groupCode: this.$store.getters.orgInfo.GROUP_CODE,
            clueAutoInvalid: "",
            beginLandingTime: "",
            endLandingTime: "",
            isMessAisle: "",
            isActiveRecordShare: "",
            isAutoAssgin: "",
            // invalidClue:'',
            
            hArriveReview: "",
            aArriveReview: "",
            bArriveReview: "",
            cArriveReview: "",
            eArriveReview: "",
            failContrloIsCheck: "",
            updateControlId: "",
            dlrId: "",
            systemConfigId: ""
          }
        }
      }
    };
  },
  mounted() {
  
    let that = this;
    this.$refs.beginLandingTime.reset();
    this.$refs.endLandingTime.reset();
    this.$refs.failContrloIsCheck.reset();
    this.$refs.clueAutoInvalid.reset();
    this.$refs.isActiveRecordShare.reset();
    this.$refs.isAutoAssgin.reset();
    this.$refs.isMessAisle.reset();
    this.$refs.aArriveReview.reset();
    this.$refs.bArriveReview.reset();
    this.$refs.cArriveReview.reset();
    this.$refs.eArriveReview.reset();
    this.$refs.isDcc.reset();
    this.$refs.autoInvalidDays.reset();
    this.query();
  },
  methods: {
    query() {
    
      let that = this;
      let queryObj = {
        // api配置
        type: "query",
        apiConfig: crmApis.csDbSystemConfigQueryFindAll, //网点系统配置查询
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "clueAutoInvalid",
              "beginLandingTime",
              "endLandingTime",
              "failContrloIsCheck",
              "isActiveRecordShare",
              "isAutoAssgin",
              "isMessAisle",
              "aArriveReview",
              "bArriveReview",
              "cArriveReview",
              "eArriveReview",
              "hArriveReview",
              "isDcc",
              "autoInvalidDays", //无效线索自动过滤时间
              "updateControlId", //并发控制字段
              "dlrId",
              "systemConfigId"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: { dlrId: this.$store.getters.orgInfo.DLR_ID, isEnable: "1" } //获取登录账户的ID
        }
      };
    
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          this.$refs.beginLandingTime.value = results.beginLandingTime;
          this.$refs.endLandingTime.value = results.endLandingTime;
          this.$refs.failContrloIsCheck.value = results.clueAutoInvalid;
          this.$refs.clueAutoInvalid.value = results.failContrloIsCheck;
          this.$refs.isActiveRecordShare.value = results.isActiveRecordShare;
          this.$refs.isAutoAssgin.value = results.isAutoAssgin;
          this.$refs.isMessAisle.value = results.isMessAisle;
          this.$refs.aArriveReview.input = results.aArriveReview;
          this.$refs.bArriveReview.input = results.bArriveReview;
          this.$refs.cArriveReview.input = results.cArriveReview;
          this.$refs.eArriveReview.input = results.eArriveReview;

          this.$refs.isDcc.value = results.isDcc;
          this.$refs.autoInvalidDays.value = results.autoInvalidDays;

          that.savedata.queryObj.params.dlrId = results.dlrId;
          that.savedata.queryObj.params.updateControlId =
            results.updateControlId;
          that.savedata.queryObj.params.systemConfigId = results.systemConfigId;
        }
      });
    },
    save: function(formName) {
      let that = this;
      that.savedata.queryObj.params.clueAutoInvalid = this.$refs.clueAutoInvalid.value;
      that.savedata.queryObj.params.beginLandingTime = this.$refs.beginLandingTime.value;
      that.savedata.queryObj.params.endLandingTime = this.$refs.endLandingTime.value;
      that.savedata.queryObj.params.isMessAisle = this.$refs.isMessAisle.value;
      that.savedata.queryObj.params.isActiveRecordShare = this.$refs.isActiveRecordShare.value;
      that.savedata.queryObj.params.isAutoAssgin = this.$refs.isAutoAssgin.value;
      that.savedata.queryObj.params.isDcc = this.$refs.isDcc.value;
      that.savedata.queryObj.params.autoInvalidDays = this.$refs.autoInvalidDays.input;
      that.savedata.queryObj.params.hArriveReview = this.$refs.hArriveReview.input;
      that.savedata.queryObj.params.aArriveReview = this.$refs.aArriveReview.input;
      that.savedata.queryObj.params.bArriveReview = this.$refs.bArriveReview.input;
      that.savedata.queryObj.params.cArriveReview = this.$refs.cArriveReview.input;
      that.savedata.queryObj.params.eArriveReview = this.$refs.eArriveReview.input;
      that.savedata.queryObj.params.failContrloIsCheck = this.$refs.failContrloIsCheck.value;
      that.savedata.queryObj.params.isEnable='1'
      let flag = false;
      var config = this.config;
      config = {
        clueAutoInvalid: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          this.$refs.clueAutoInvalid,
          "线索自动失效",
          "不能为空"
        ],
        beginLandingTime: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.savedata.queryObj.params.beginLandingTime,
          "限定登录起始时间设置",
          "不能为空",
          "",
        ],
        endLandingTime: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.savedata.queryObj.params.endLandingTime,
          "限定登录结束时间设置",
          "不能为空"
        ],
        isMessAisle: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.savedata.queryObj.params.isMessAisle,
          "短信通道设置是否启用",
          "不能为空"
        ],
        isActiveRecordShare: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.savedata.queryObj.params.isActiveRecordShare,
          "沟通记录共享是否启用",
          "不能为空",
        ],
        isAutoAssgin: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.savedata.queryObj.params.isAutoAssgin,
          "自动分配开关是否启用",
          "不能为空",
        ],
        isDcc: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.savedata.queryObj.params.isDcc,
          "电销员预约到店是否启用",
          "不能为空",
        ],
        autoInvalidDays: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.savedata.queryObj.params.autoInvalidDays,
          "无效线索自动过滤时间",
          "不能为空"
        ],
        hArriveReview: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.savedata.queryObj.params.hArriveReview,
          "H级预约回访设定",
          "不能为空"
        ],
        aArriveReview: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.savedata.queryObj.params.aArriveReview,
          "A级预约回访设定",
          "不能为空"
        ],
        bArriveReview: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.savedata.queryObj.params.bArriveReview,
          "B级预约回访设定",
          "不能为空"
        ],
        cArriveReview: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.savedata.queryObj.params.cArriveReview,
          "C级预约回访设定",
          "不能为空"
        ],
        eArriveReview: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.savedata.queryObj.params.eArriveReview,
          "E级预约回访设定",
          "不能为空"
        ],
        failContrloIsCheck: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.savedata.queryObj.params.failContrloIsCheck,
          "战败失控是否审核",
          "不能为空"
        ],
      };
      this.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let queryObj = {
            // api配置
            type: "mutation",
            apiConfig: that.savedata.queryObj.apiConfig,
            // 需要调用的API服务配置
            apiServices: [
              {
                //表格中台返回网格的字段
                apiQueryRow: []
              }
            ],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              //当前中台使用的名称有dataInfo、info，具体查看API文档
              dataInfo: that.savedata.queryObj.params,
            }
          };
          //转换了中台请求格式数据
          // let paramD='{"query":"mutation($dataInfo: InputCsDbSystemConfig){csDbSystemConfigMutationSaveById(dataInfo: $dataInfo,isPv:"0"){msg result}}","variables":{"dataInfo":{"clueAutoInvalid":"1","beginLandingTime":"2019-09-05 00:00:00","endLandingTime":"2019-09-05 00:00:00","isMessAisle":"1","isActiveRecordShare":"1","isAutoAssgin":"1","hArriveReview":"7","aArriveReview":"7","bArriveReview":"7","cArriveReview":"7","eArriveReview":"7","failContrloIsCheck":"1","updateControlId":"d46dbb2849264dc5b731627f0dab72f9","dlrId":null,"systemConfigId":"1aca0df84ee24db18114101f21fd4ade","isDcc":"1","autoInvalidDays":"7","isEnable":"1"},"isPv":"0"}}'
          var paramD = that.$getParams(queryObj);
          let query='mutation($dataInfo: InputCsDbSystemConfig){csDbSystemConfigMutationSaveById(dataInfo: $dataInfo,isPv:\"0\"){msg result}}'
          paramD.query=query
          // 调用中台API方法（可复用）

          requestGraphQL(paramD).then(response => {
            if (
              response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
              response.data[queryObj.apiConfig.ServiceCode].rows != ""
            ) {
              that.$crmcf.showMessages(that,'success','保存成功！')
              that.query();
            }else{
                that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
            }
          });
        }
      });
    }
  },
  reset: function() {
    this.$refs.clueAutoInvalid.reset();
    this.$refs.beginLandingTime.reset();
    this.$refs.endLandingTime.reset();
    this.$refs.isMessAisle.reset();
    this.$refs.isActiveRecordShare.reset();
    this.$refs.automaticSwitch.reset();
    this.$refs.isDcc.reset();
    this.$refs.invalidTime.reset(); //无效线索自动过滤时间
    this.$refs.hArriveReview.reset();
    this.$refs.aArriveReview.reset();
    this.$refs.bArriveReview.reset();
    this.$refs.cArriveReview.reset();
    this.$refs.eArriveReview.reset();
    this.$refs.failContrloIsCheck.reset();
  }
};
</script>
<style>

</style>
