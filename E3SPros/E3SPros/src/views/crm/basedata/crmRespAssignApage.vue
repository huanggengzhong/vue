/*
 * @Author: xgz 
 * @Date: 2019-07-27 10:44:15 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-08-05 20:05:26
 */


<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="save()">保存</el-button>
      <el-button @click="add()">添加</el-button>
      <el-button @click="dele()">删除</el-button>
    </div>

    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params query-params">
      <el-form label-position="right">
        <el-row>
          <el-col :span="24">
            <el-row>
              <el-col :span="6">
                <BusinessProcess :BusinessProcess="bp" ref="BusinessProcess" />
              </el-col>
              <el-col :span="6">
                <txt_ServiceType :ServiceType="st" ref="txt_ServiceType" />
              </el-col>
              <el-col :span="6">
                <DutyPeople :DutyPeople="dp" ref="DutyPeople" />
              </el-col>
              <el-col :span="6">
                <AgentBrand :AgentBrand="ab" ref="AgentBrand" />
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <AgentAbbreviation :AgentAbbreviation="aa" ref="AgentAbbreviation" />
              </el-col>
              <el-col :span="6">
                <NetworkCode :NetworkCode="nc" ref="NetworkCode" />
              </el-col>
              <el-col :span="6">
                <ExistOrNot :ExistOrNot="eo" ref="ExistOrNot" />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="filter-container filter-title">查询结果</div>
    <Table :tabledatas="tabledatas" ref="table"></Table>
  </div>
</template>
<script>
import BusinessProcess from "@/components/crm/Select/Common/BusinessProcess";
import txt_ServiceType from "@/components/crm/textbox/Public/Agent/txt_ServiceType";
import DutyPeople from "@/components/crm/textbox/Complaint/DutyPeople";
import AgentBrand from "@/components/crm/Select/Common/Dealer/Agent/AgentBrand";

import AgentAbbreviation from "@/components/crm/textbox/Public/Agent/AgentAbbreviation";
import NetworkCode from "@/components/crm/textbox/Public/Network/NetworkCode";
import ExistOrNot from "@/components/crm/Select/Whether/ExistOrNot";

import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";

export default {
  name: "testPage",
  components: {
    BusinessProcess,
    txt_ServiceType,
    DutyPeople,
    AgentBrand,

    AgentAbbreviation,
    NetworkCode,
    ExistOrNot,

    Table
  },
  data() {
    return {
      toggleParam: false,
      delayreason: "",
      tabledatas: {
        // 操作列
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "选择", value: "" },
          { label: "网点品牌", value: "" },
          { label: "网点编码", value: "" },
          { label: "网点简称", value: "" },
          { label: "状态", value: "" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: ["serverOrder", "createdDate"],
          params: {
            delayId: "",
            createdDateStart: "",
            createdDateEnd: "",
            serverOrder: "",
            delayStatus: ""
          }
        }
      },
      bp: {
        value: ""
      },
      st: {
        input: ""
      },
      dp: {
        input: ""
      },
      ab: {
        value: ""
      },

      aa: {
        input: ""
      },
      nc: {
        input: ""
      },
      eo: {
        value: ""
      }
    };
  },
  methods: {
    query: function() {
      //this.queryObj.params=this.$refs.applytime.value;
      this.queryObj.params.serverOrder = this.$refs.sermenu.input;
      this.queryObj.params.delayStatus = this.delayreason;
    },
    reset: function() {
      this.$refs.applytime.reset();
      this.$refs.sermenu.reset();
      this.delayreason = "";
    },
    save: function(){

    },
    add: function(){

    },
    dele: function(){

    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    }
  }
};
</script>
