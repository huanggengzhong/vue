<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="save(form)">保存</el-button>
    </div>
    <div class="filter-container filter-title-crm">厂家系统配置</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right" :model="form" ref="form">
        <el-row>
          <el-col :span="8" class="crm-label-required">
            <ClueAssignWay :ClueAssignWay="form.caw" ref="caw"></ClueAssignWay>
          </el-col>
          <el-col :span="8" class="visit-setting crm-label-required">
            <FactoryClueRecycleTimeSetting :FactoryClueRecycleTimeSetting="form.fcts" ref="fcts"></FactoryClueRecycleTimeSetting>
          </el-col>
          <el-col :span="8" class="crm-label-required">
            <FirstReturnVisitKPI :FirstReturnVisitKPI="form.frvk" ref="frvk"></FirstReturnVisitKPI>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8" class="visit-setting crm-label-required">
            <HlevelFirstReturnVisitSetting :HFRVS="form.hfrvs" ref="hfrvs"></HlevelFirstReturnVisitSetting>
          </el-col>
          <el-col :span="8" class="visit-setting crm-label-required">
            <AlevelFirstReturnVisitSetting :AFRVS="form.afrvs" ref="afrvs"></AlevelFirstReturnVisitSetting>
          </el-col>
          <el-col :span="8" class="visit-setting crm-label-required">
            <BLevelReserveReturnVisitSetting :BFRVS="form.bfrvs" ref="bfrvs"></BLevelReserveReturnVisitSetting>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8" class="visit-setting crm-label-required">
            <ClevelFirstReturnVisitSetting :CFRVS="form.cfrvs" ref="cfrvs"></ClevelFirstReturnVisitSetting>
          </el-col>
          <el-col :span="8" class="visit-setting crm-label-required">
            <ElevelFirstReturnVisitSetting :EFRVS="form.efrvs" ref="efrvs"></ElevelFirstReturnVisitSetting>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24" class="effective-clue">
            <div class="w32">
              <span style="color:red">*</span>有效线索
            </div>
            <div class="w68">
              <span
                v-for="(item,index) in clueList"
                :key="index"
                @click="effectButton(item,index)"
                :class="{'selectedClass-crmFactSysConf':item.checked,'disableClass-crmFactSysConf':item.disable}"
              >{{item.lookupValueName}}<i :class="{'selectedClass-i-crmFactSysConf':item.checked}"></i></span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="effective-clue">
            <div class="w32">
              <span style="color:red">*</span>无效线索
            </div>
            <div class="w68">
              <span
                v-for="(item,index) in clue1List"
                :key="index"
                @click="effect1Button(item,index)"
                :class="{'selectedClass-crmFactSysConf':item.checked,'disableClass-crmFactSysConf':item.disable}"
              >{{item.lookupValueName}}<i :class="{'selectedClass-i-crmFactSysConf':item.checked}"></i></span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="effective-clue">
            <div class="w32">
              <span style="color:red">*</span>城市线索池
            </div>
            <div class="w68">
              <span
                v-for="(city,index1) in cityClueList"
                :key="index1"
                @click="cityButton(city,index1)"
                :class="{'selectedClass-crmFactSysConf':city.checked}"
              >{{city.lookupValueName}}<i :class="{'selectedClass-i-crmFactSysConf':city.checked}"></i></span>
            </div>
          </el-col>
        </el-row>
        <el-row><p style="color:red;text-align:left">注：厂家线索下发到店后，XX小时内的需要进行首次回访</p></el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
import ClueAssignWay from "@/components/crm/Select/Common/Dealer/ClueAssignWay";
import FactoryClueRecycleTimeSetting from "@/components/crm/textbox/Clue/FactoryClueRecycleTimeSetting";
import FirstReturnVisitKPI from "@/components/crm/textbox/Clue/Revisit/FirstReturnVisitKPI";
import EffectiveClue from "@/components/crm/option/EffectiveClue";
import InvalidClue from "@/components/crm/option/InvalidClue";
import CityCluePond from "@/components/crm/option/CityCluePond";
import HlevelFirstReturnVisitSetting from "@/components/crm/textbox/Clue/Revisit/HlevelFirstReturnVisitSetting";
import AlevelFirstReturnVisitSetting from "@/components/crm/textbox/Clue/Revisit/AlevelFirstReturnVisitSetting";
import BLevelReserveReturnVisitSetting from "@/components/crm/textbox/Clue/Revisit/BlevelFirstReturnVisitSetting";
import ClevelFirstReturnVisitSetting from "@/components/crm/textbox/Clue/Revisit/ClevelFirstReturnVisitSetting";
import ElevelFirstReturnVisitSetting from "@/components/crm/textbox/Clue/Revisit/ElevelFirstReturnVisitSetting";
import { requestGraphQL } from "@/api/commonRequest";
import { crmApis } from "@/api/graphQLApiList/crm";

export default {
  name: "crmFactSysConf",
  components: {
    ClueAssignWay,
    FactoryClueRecycleTimeSetting,
    FirstReturnVisitKPI,
    EffectiveClue,
    ElevelFirstReturnVisitSetting,
    HlevelFirstReturnVisitSetting,
    AlevelFirstReturnVisitSetting,
    BLevelReserveReturnVisitSetting,
    ClevelFirstReturnVisitSetting,
    InvalidClue,
    CityCluePond
  },
  data() {
    return {
      params: {
        oemClueAssgin: "",
        oemClueRecoverTime: "",
        firstReviewKpi: "",
        //  invalid:'',
        //  ccp:'',
        aArriveReview: "",
        bArriveReview: "",
        cArriveReview: "",
        eArriveReview: "",
        hArriveReview: "",
        //  effect:''
        validClue: "",
        invalidClue: "",
        cluePools: ""
      },
      form: {
        caw: {
          value: ""
        },
        fcts: {
          input: ""
        },
        frvk: {
          input: ""
        },
        effect: {
          input: ""
        },
        invalid: {
          input: ""
        },
        ccp: {
          input: ""
        },
        hfrvs: {
          input: ""
        },
        cfrvs: {
          input: ""
        },
        afrvs: {
          input: ""
        },
        bfrvs: {
          input: ""
        },
        efrvs: {
          input: ""
        }
      },

      clueList: [],
      cityClueList: [],
      clue1List: []
    };
  },

  //
  mounted: function() {
    this.$refs.caw.reset();
    this.$refs.fcts.reset();
    this.$refs.frvk.reset();
    this.$refs.afrvs.reset();
    this.$refs.bfrvs.reset();
    this.$refs.cfrvs.reset();
    this.$refs.efrvs.reset();
    this.$refs.hfrvs.reset();
    this.buttonReset();
    //查询数据
    let queryObj = {
      type: "query",
      // api配置
      apiConfig: crmApis.csDbSystemConfigQueryFindAll,
      // 需要调用的API服务配置
      apiServices: [
        {
          //表格中台返回网格的字段
          apiQueryRow: [
            "oemClueAssgin",
            "oemClueRecoverTime",
            "firstReviewKpi",
            "aArriveReview",
            "bArriveReview",
            "cArriveReview",
            "eArriveReview",
            "hArriveReview",
            "validClue",
            "invalidClue",
            "cluePools",
            "oemCode",
            "oemId",
            "updateControlId",
            "systemConfigId"
          ]
        }
      ],
      //条件/实体参数（变量），根据typeParam中的定义配置
      variables: {
        pageSize: 10,
        pageIndex: 1,
        //当前中台使用的名称有dataInfo、info，具体查看API文档
        dataInfo: {
          oemId: this.$store.getters.orgInfo.OEM_ID //根据厂家ID去查找--this.$store.getters.orgInfo
        }
      }
    };
    //转换了中台请求格式数据
    var paramD = this.$getParams(queryObj);
    // 调用中台API方法（可复用）
    requestGraphQL(paramD).then(response => {
      if (
        response.data[queryObj.apiConfig.ServiceCode].result == "1"
        //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
      ) {
        let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
        this.$refs.caw.value = results.oemClueAssgin;
        this.$refs.fcts.input = results.oemClueRecoverTime;
        this.$refs.frvk.input = results.firstReviewKpi;
        this.$refs.efrvs.input = results.eArriveReview;
        this.$refs.bfrvs.input = results.bArriveReview;
        this.$refs.afrvs.input = results.aArriveReview;
        this.$refs.cfrvs.input = results.cArriveReview;
        this.$refs.hfrvs.input = results.hArriveReview;
        this.params.updateControlId = results.updateControlId; //并发字段标识
        this.params.systemConfigId = results.systemConfigId;
        if (results.validClue) {
          let validClueList = results.validClue.split(",");
          for (var i = 0; i < validClueList.length; i++) {
            for (var j = 0; j < this.clueList.length; j++) {
              if (validClueList[i] == this.clueList[j].lookupValueCode) {
                this.effectButton(this.clueList[j], j);
              }
            }
          }
        }
        if (results.invalidClue) {
          let invalidClueList = results.invalidClue.split(",");
          for (var i = 0; i < invalidClueList.length; i++) {
            for (var j = 0; j < this.clue1List.length; j++) {
              if (invalidClueList[i] == this.clue1List[j].lookupValueCode) {
                this.effect1Button(this.clue1List[j], j);
              }
            }
          }
        }
        if (results.cluePools) {
          let cluePoolsList = results.cluePools.split(",");
          for (var i = 0; i < cluePoolsList.length; i++) {
            for (var j = 0; j < this.cityClueList.length; j++) {
              if (cluePoolsList[i] == this.cityClueList[j].lookupValueCode) {
                this.cityButton(this.cityClueList[j], j);
              }
            }
          }
        }
      }
    });

    console.log(111);
  },

  created: function() {
    console.log(123);
    this.clueList = this.getData(1);
    this.clue1List = this.getData(2);
    this.cityClueList = this.getData(3);
  },
  methods: {
    //保存
    save(formName) {
      let that = this;
      for (var i = 0; i < this.clueList.length; i++) {
        if (this.clueList[i].checked == true) {
          if (this.params.validClue == "") {
            this.params.validClue = this.clueList[i].lookupValueCode;
          } else {
            this.params.validClue += "," + this.clueList[i].lookupValueCode;
          }
        }
      }
      for (var i = 0; i < this.clue1List.length; i++) {
        if (this.clue1List[i].checked == true) {
          if (this.params.invalidClue == "") {
            this.params.invalidClue = this.clue1List[i].lookupValueCode;
          } else {
            this.params.invalidClue += "," + this.clue1List[i].lookupValueCode;
          }
        }
      }
      for (var i = 0; i < this.cityClueList.length; i++) {
        if (this.cityClueList[i].checked == true) {
          if (this.params.cluePools == "") {
            this.params.cluePools = this.cityClueList[i].lookupValueCode;
          } else {
            this.params.cluePools += "," + this.cityClueList[i].lookupValueCode;
          }
        }
      }
      this.params.oemClueAssgin = this.$refs.caw.value;
      this.params.oemClueRecoverTime = this.$refs.fcts.input;
      this.params.firstReviewKpi = this.$refs.frvk.input;
      // this.params.effect=this.$refs.effect.input;
      // this.params.invalid=this.$refs.invalid.input;
      // this.params.ccp=this.$refs.ccp.input;
      this.params.eArriveReview = this.$refs.efrvs.input;
      this.params.bArriveReview = this.$refs.bfrvs.input;
      this.params.aArriveReview = this.$refs.afrvs.input;
      this.params.cArriveReview = this.$refs.cfrvs.input;
      this.params.hArriveReview = this.$refs.hfrvs.input;
      this.params.isEnable ="1";
      this.params.oemId = this.$store.getters.orgInfo.OEM_ID;
      this.params.oemCode = this.$store.getters.orgInfo.OEM_CODE; //厂家编码
      // this.params.effect=this.$refs.effect.input;
      console.log(this.params);
      let flag = false;
      var config = this.config;
      config = {
        caw: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          this.params.oemClueAssgin,
          "线索分配方式",
          "不能为空"
        ],
        fcts: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          this.params.oemClueRecoverTime,
          "厂家线索回收时间设置",
          "不能为空",
          ""
        ],
        frvk: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          this.params.firstReviewKpi,
          "首次回访KPI",
          "不能为空"
        ],
        hfrvs: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          this.params.hArriveReview,
          "H级首次回访设定",
          "不能为空"
        ],
        afrvs: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          this.params.aArriveReview,
          "A级首次回访设定",
          "不能为空"
        ],
        bfrvs: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          this.params.bArriveReview,
          "B级首次回访设定",
          "不能为空"
        ],
        cfrvs: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          this.params.cArriveReview,
          "C级首次回访设定",
          "不能为空"
        ],
        efrvs: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          this.params.eArriveReview,
          "E级首次回访设定",
          "不能为空"
        ],
        validClue: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          this.params.validClue,
          "有效线索",
          "不能为空"
        ],
        invalidClue: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          this.params.invalidClue,
          "无效线索",
          "不能为空"
        ],
        cluePools: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          this.params.cluePools,
          "城市线索池",
          "不能为空"
        ]
      };
      this.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let queryObj = {
            type: "mutation",
            // api配置
            apiConfig: crmApis.csDbSystemConfigMutationSaveById,
            // 需要调用的API服务配置
            apiServices: [
              {
                //表格中台返回网格的字段
                apiQueryRow: []
              }
            ],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              pageSize: 10,
              pageIndex: 1,
              //当前中台使用的名称有dataInfo、info，具体查看API文档
              dataInfo: that.params //值列表编码
            }
          };
          var paramD = that.$getParams(queryObj);
          let query='mutation($dataInfo: InputCsDbSystemConfig){csDbSystemConfigMutationSaveById(dataInfo: $dataInfo,isPv:\"1\"){msg result}}'
          paramD.query=query
          // 调用中台API方法（可复用）
          requestGraphQL(paramD).then(response => {
            if (
              response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
              response.data[queryObj.apiConfig.ServiceCode].rows != ""
            ) {
               that.$notify({
              title: "成功",
              message: "保存成功！",
              type: "success"
            });
            }else {
            that.$notify.error({
              title: "错误",
              message: response.data[queryObj.apiConfig.ServiceCode].msg
            });
          }
          });
        }
      });
    },
    getData: function(type) {
      // let that = this;
      let queryObj = {
        // api配置
        apiConfig: crmApis.mdsLookupValueQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["lookupValueCode", "lookupValueName"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: { lookupTypeCode: "LX181" } //LX181 线索状态；LX006 投诉状态
        }
      };
      let paramD = this.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          if (type == 1) {
            this.clueList = response.data[queryObj.apiConfig.ServiceCode].rows;
          } else if (type == 2) {
            this.clue1List = response.data[queryObj.apiConfig.ServiceCode].rows;
          } else if (type == 3) {
            this.cityClueList =
              response.data[queryObj.apiConfig.ServiceCode].rows;
          }
        }
      });
    },
    effectButton(item, index) {
      if (item.disable == true) {
        return;
      }
      item.checked = !item.checked;
      //需热更新，否则状态没法改变
      this.clue1List[index].disable = item.checked;
      this.$set(this.clue1List, index, this.clue1List[index]);
      this.$set(this.clueList, index, item);
    },
    effect1Button(item, index) {
      if (item.disable == true) {
        return;
      }
      item.checked = !item.checked;
      //需热更新，否则状态没法改变
      this.clueList[index].disable = item.checked;
      this.$set(this.clueList, index, this.clueList[index]);
      this.$set(this.clue1List, index, item);
    },
    cityButton(item, index) {
      item.checked = !item.checked;
      //需热更新，否则状态没法改变
      this.$set(this.cityClueList, index, item);
    },
    //按钮重置
    buttonReset() {
      if (!this.clueList) {
        return;
      }
      for (var i = 0; i < this.clueList.length; i++) {
        this.clueList[i].checked = false;
        this.$set(this.clueList);
      }
      for (var i = 0; i < this.clue1List.length; i++) {
        this.clue1List[i].checked = false;
        this.$set(this.clue1List);
      }
      for (var i = 0; i < this.cityClueList.length; i++) {
        this.cityClueList[i].checked = false;
        this.$set(this.cityClueList);
      }
    }
  },

  reset: function() {}
};
</script>
<style>
.selectedClass-crmFactSysConf{
  position: relative;
  border:1px solid #333!important;
  color: #333 !important;
}
.selectedClass-i-crmFactSysConf{
position: absolute;
    border-bottom: 12.4px solid #333;
    border-left: 1.3rem solid transparent;
    width: 0px;
    height: 0px;
    bottom: 0rem;
    right: 0;
}
.disableClass-crmFactSysConf {
  color: #333;
  background-color: #fff;
}
.disableClass-crmFactSysConf:hover {
  cursor: default !important;
  color: #333 !important;
  background-color: #fff !important;
}

.effective-clue {
  text-align: left;
  margin:10px 0; 
}
.effective-clue .w68 span {
  display: inline-block;
  min-width: 60px;
  margin-left: 10px;
  margin-bottom: 10px;
  height: 28px;
  line-height: 28px;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 12px;
  padding-top: 0px;
  padding-bottom: 0px;
  text-align: center;
  color: #333;
}
.selectedClass-crmFactSysConf::after {
 color: #FFF;
    content: '\2714';
    position: absolute;
    bottom: -9px;
    right: -3px;
    font-size: 0.5rem;
}
.effective-clue .w68 span:hover {
  /* background-color: #b3d8ff; */
  /* color: #409eff; */
  border:1px solid #333;
  cursor: pointer;
}
.effective-clue .w32 {
  width: 9%;
  text-align: right;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  vertical-align: top;
}
.effective-clue .w68 {
  width: 90%;
  display: inline-block;
}
.city-clue .el-button {
  margin-left: 10px;
  min-width: 61px;
}
.visit-setting .el-input {
  padding-right: 50px;
}
.visit-setting .el-input__suffix {
  right: 55px;
}
.visit-setting .el-form-item__content > span {
  position: absolute;
  right: 0;
  top: 0;
}
</style>