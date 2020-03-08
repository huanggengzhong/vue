<!--投诉系统配置 CQ-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="savelist">保存</el-button>
    </div>

    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <el-col :span="8">
            <AdditionalComplaintDurationSetting
              :AdditionalComplaintDurationSetting="AddSetting"
              ref="AdditionalComplaintDurationSetting"
            ></AdditionalComplaintDurationSetting>
          </el-col>
          <el-col :span="8">
            <WhetherAllowApplyExtension
              :WhetherAllowApplyExtension="WAAExtension"
              ref="WhetherAllowApplyExtension"
            ></WhetherAllowApplyExtension>
          </el-col>
          <el-col :span="8">
            <ApplicationExtensionDays
              :ApplicationExtensionDays="AExtensionDays"
              ref="ApplicationExtensionDays"
            ></ApplicationExtensionDays>
          </el-col>
        </el-row>
        <!--第二行-->
        <el-row>
          <el-col :span="8">
            <ApplicationDelay :ApplicationDelay="ADelay" ref="ApplicationDelay"></ApplicationDelay>
          </el-col>
          <el-col :span="8">
            <ApplicationGrievanceDays
              :ApplicationGrievanceDays="ADays"
              ref="ApplicationGrievanceDays"
            ></ApplicationGrievanceDays>
          </el-col>
          <el-col :span="8">
            <ApplyAppealTimes :ApplyAppealTimes="AATimes" ref="ApplyAppealTimes"></ApplyAppealTimes>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import AdditionalComplaintDurationSetting from "@/components/crm/textbox/Complaint/AdditionalComplaintDurationSetting";
import WhetherAllowApplyExtension from "@/components/crm/Select/Whether/WhetherAllowApplyExtension";
import ApplicationExtensionDays from "@/components/crm/textbox/Complaint/ApplicationExtensionDays";
import ApplicationDelay from "@/components/crm/textbox/Complaint/ApplicationDelay";
import ApplicationGrievanceDays from "@/components/crm/textbox/Complaint/ApplicationGrievanceDays";
import ApplyAppealTimes from "@/components/crm/textbox/Complaint/ApplyAppealTimes";

export default {
  name: "ComplaintSystemSet",
  components: {
    AdditionalComplaintDurationSetting,
    WhetherAllowApplyExtension,
    ApplicationExtensionDays,
    ApplicationDelay,
    ApplicationGrievanceDays,
    ApplyAppealTimes
  },
  data() {
    return {
      CanAddTsTimeLongID:"",
      IsCanDelayTsID:"",
      DelayDaysID:"",
      CanDelayTimesID:"",
      CanAppealDaysID:"",
      CanAppealTimesID:"",
      toggleParam: false,
      //初始化input
      AddSetting: {
        input: ""
      },
      AExtensionDays: {
        input: ""
      },
      ADelay: {
        input: ""
      },
      ADays: {
        input: ""
      },
      AATimes: {
        input: ""
      },
      //初始化value
      WAAExtension: {
        value: ""
      }
    };
  },
  mounted:function(){
    debugger
    this.$nextTick(function(){
      this.initData()
    });
  },
  methods: {
    initData: function() {
      debugger
      let that = this;
      let queryObj = {
        // api配置
        apiConfig: crmApis.complaintParamSetQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "paramSetId",
              "paramCode",
              "paramName",
              "paramValue",
              "remark"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            oemCode:"1",
            groupCode:"1"
          }
        }
      };
      //转换了中台请求格式数据
      let csdata={
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            oemCode:"1",
            groupCode:"1"
          }
      };
      var paramD = that.$getParams(queryObj);
      that.$set(paramD, 'query', "query($dataInfo: InputCsDbParamSet){complaintParamSetQueryFindAll(dataInfo: $dataInfo){msg records result rows{paramSetId paramCode paramName paramValue remark}}}");
      that.$set(paramD, 'variables',csdata);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" 
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          debugger
          var tabledata=response.data[queryObj.apiConfig.ServiceCode].rows;
          for(var i=0;i<tabledata.length;i++)
          {
            if(tabledata[i].paramCode=="CanAddTsTimeLong")//可追加投诉时长设置
            {
              that.CanAddTsTimeLongID=tabledata[i].paramSetId;
              that.AddSetting.input=tabledata[i].paramValue;
              that.$refs.AdditionalComplaintDurationSetting.getData();
            }
            if(tabledata[i].paramCode=="IsCanDelayTs")//是否允许申请延期
            {
              that.IsCanDelayTsID=tabledata[i].paramSetId;
              that.WAAExtension.value=tabledata[i].paramValue;
              that.$refs.WhetherAllowApplyExtension.getData();
            }
            if(tabledata[i].paramCode=="DelayDays")//申请延期天数
            {
              that.DelayDaysID=tabledata[i].paramSetId;
              that.AExtensionDays.input=tabledata[i].paramValue;
              that.$refs.ApplicationExtensionDays.getData();
            }
            if(tabledata[i].paramCode=="CanDelayTimes")//申请延期次数
            {
              that.CanDelayTimesID=tabledata[i].paramSetId;
              that.ADelay.input=tabledata[i].paramValue;
              that.$refs.ApplicationDelay.getData();
            }
            if(tabledata[i].paramCode=="CanAppealDays")//申请申诉天数
            {
              that.CanAppealDaysID=tabledata[i].paramSetId;
              that.ADays.input=tabledata[i].paramValue;
              that.$refs.ApplicationGrievanceDays.getData();
            }
            if(tabledata[i].paramCode=="CanAppealTimes")//申请申诉次数
            {
              that.CanAppealTimesID=tabledata[i].paramSetId;
              that.AATimes.input=tabledata[i].paramValue;
              that.$refs.ApplyAppealTimes.getData();
            }
          }
        }
      });
    },
    reset: function() {
      this.$refs.AdditionalComplaintDurationSetting.reset();
      this.$refs.ApplicationExtensionDays.reset();
      this.$refs.ApplicationDelay.reset();
      this.$refs.ApplicationGrievanceDays.reset();
      this.$refs.ApplyAppealTimes.reset();
      this.$refs.WhetherAllowApplyExtension.reset();
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    savelist() {
      debugger
      let that=this;
      var html=""
      let reg = that.$crmcf.crmRegExp("num");
      if(that.$refs.AdditionalComplaintDurationSetting.input!=""&&that.$refs.AdditionalComplaintDurationSetting.input!=null)
      {
        if (!reg.test(that.$refs.AdditionalComplaintDurationSetting.input)) 
        {
          html = html + `<div>可追加投诉时长请输入数字</div>`
        }
      }
      if(that.$refs.ApplicationExtensionDays.input!=""&&that.$refs.ApplicationExtensionDays.input!=null)
      {
        if (!reg.test(that.$refs.ApplicationExtensionDays.input)) 
        {
          html = html + `<div>申请延期天数请输入数字</div>`
        }
      }
      if(that.$refs.ApplicationDelay.input!=""&&that.$refs.ApplicationDelay.input!=null)
      {
        if (!reg.test(that.$refs.ApplicationDelay.input)) 
        {
          html = html + `<div>申请延期次数请输入数字</div>`
        }
      }
      if(that.$refs.ApplicationGrievanceDays.input!=""&&that.$refs.ApplicationGrievanceDays.input!=null)
      {
        if (!reg.test(that.$refs.ApplicationGrievanceDays.input)) 
        {
          html = html + `<div>申请延期次数请输入数字</div>`
        }
      }
      if(that.$refs.ApplyAppealTimes.input!=""&&that.$refs.ApplyAppealTimes.input!=null)
      {
        if (!reg.test(that.$refs.ApplyAppealTimes.input)) 
        {
          html = html + `<div>申请申诉次数请输入数字</div>`
        }
      }
      if (html != '') {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }
      // that.save(that.CanAddTsTimeLongID,that.$refs.AdditionalComplaintDurationSetting.input)//可追加投诉时长设置
      // that.save(that.IsCanDelayTsID,that.$refs.WhetherAllowApplyExtension.value)//是否允许申请延期
      // that.save(that.DelayDaysID,that.$refs.ApplicationExtensionDays.input)//申请延期天数
      // that.save(that.CanDelayTimesID,that.$refs.ApplicationDelay.input)//申请延期次数
      // that.save(that.CanAppealDaysID,that.$refs.ApplicationGrievanceDays.input)//申请申诉天数
      // that.save(that.CanAppealTimesID,that.$refs.ApplyAppealTimes.input)//申请申诉次数

      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'mutation',
        typeParam:
            '($dataInfoA: ' + crmApis.csDbParamSetMutationSaveById.InputType
              +', $dataInfoB: ' + crmApis.csDbParamSetMutationSaveById.InputType
              +', $dataInfoC: ' + crmApis.csDbParamSetMutationSaveById.InputType
              +', $dataInfoD: ' + crmApis.csDbParamSetMutationSaveById.InputType
              +', $dataInfoE: ' + crmApis.csDbParamSetMutationSaveById.InputType 
              +', $dataInfoF: ' + crmApis.csDbParamSetMutationSaveById.InputType + ')',
        // 请求API
        apiUrl: crmApis.csDbParamSetMutationSaveById.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: crmApis.csDbParamSetMutationSaveById.ServiceCode,
            apiServiceParam:
                '(dataInfo: $dataInfoA)',
            // 表格中台返回网格的字段
            apiQueryRow: []
          },
          {
            // API服务编码&参数
            apiServiceCode: crmApis.csDbParamSetMutationSaveById.ServiceCode,
            apiServiceParam:
                '(dataInfo: $dataInfoB)',
            // 表格中台返回网格的字段
            apiQueryRow: []
          },
          {
            // API服务编码&参数
            apiServiceCode: crmApis.csDbParamSetMutationSaveById.ServiceCode,
            apiServiceParam:
                '(dataInfo: $dataInfoC)',
            // 表格中台返回网格的字段
            apiQueryRow: []
          },
          {
            // API服务编码&参数
            apiServiceCode: crmApis.csDbParamSetMutationSaveById.ServiceCode,
            apiServiceParam:
                '(dataInfo: $dataInfoD)',
            // 表格中台返回网格的字段
            apiQueryRow: []
          },
          {
            // API服务编码&参数
            apiServiceCode: crmApis.csDbParamSetMutationSaveById.ServiceCode,
            apiServiceParam:
                '(dataInfo: $dataInfoE)',
            // 表格中台返回网格的字段
            apiQueryRow: []
          },
          {
            // API服务编码&参数
            apiServiceCode: crmApis.csDbParamSetMutationSaveById.ServiceCode,
            apiServiceParam:
                '(dataInfo: $dataInfoF)',
            // 表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfoA: {
            oemCode:"1",
            groupCode:"1",
            paramSetId:that.CanAddTsTimeLongID,
            paramValue:that.$refs.AdditionalComplaintDurationSetting.input
          },
          dataInfoB: {
            oemCode:"1",
            groupCode:"1",
            paramSetId:that.IsCanDelayTsID,
            paramValue:that.$refs.WhetherAllowApplyExtension.value
          },
          dataInfoC: {
            oemCode:"1",
            groupCode:"1",
            paramSetId:that.DelayDaysID,
            paramValue:that.$refs.ApplicationExtensionDays.input
          },
          dataInfoD: {
            oemCode:"1",
            groupCode:"1",
            paramSetId:that.CanDelayTimesID,
            paramValue:that.$refs.ApplicationDelay.input
          },
          dataInfoE: {
            oemCode:"1",
            groupCode:"1",
            paramSetId:that.CanAppealDaysID,
            paramValue:that.$refs.ApplicationGrievanceDays.input
          },
          dataInfoF: {
            oemCode:"1",
            groupCode:"1",
            paramSetId:that.CanAppealTimesID,
            paramValue:that.$refs.ApplyAppealTimes.input
          }
        }
      }
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj)
      requestGraphQL(paramD).then(response => {
        debugger
        if (response.result === '1'){
          that.$crmcf.showMessages(that, "success", "保存成功！");
        }else {
          that.$crmcf.showMessages(that,'error',response.msg)
        }
      })
    },
    save(sID,sValue){
        const that = this
        let queryObj = {
          // api配置
          type: "mutation",
          apiConfig: crmApis.csDbParamSetMutationSaveById,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
              apiQueryRow:[]
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              oemCode:"1",
              groupCode:"1",
              paramSetId:sID,
              paramValue:sValue
            }
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
          if(
            response.data[queryObj.apiConfig.ServiceCode].result === '1'  
            //&&response.data[queryObj.apiConfig.ServiceCode].rows!=''
            ){
            }else{
              debugger
              this.$message({
                message: response.data[queryObj.apiConfig.ServiceCode].msg,
                type: "error",
                duration: 1000
              });
            }
        })
    }
  }
};
</script>
<style scoped>
/* .filter-params .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col {
  margin-bottom: 0px;
} */
</style>
