/*
 * @Author: xgz 
 * @Date: 2019-07-26 14:39:44 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-08-15 15:53:55
 */


<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <!-- <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="reset()">重置</el-button>
      <el-button @click="add()">新增</el-button>-->
      <el-button type="primary" @click="save()">保存</el-button>
    </div>

    <div class="filter-container filter-title-crm">经销商派单规则编辑</div>
    <div class="filter-container filter-params-crm query-params">
      <el-form label-position="right">
        <el-row>
          <el-col :span="24">
            <el-row>
              <el-col :span="8">
                <BusinessProcess :BusinessProcess="bp" ref="BusinessProcess" />
              </el-col>
              <el-col :span="8">
                <AgentBrand :AgentBrand="ab" ref="AgentBrand" />
              </el-col>
              <el-col :span="8">
                <ReceiverForm :ReceiverForm="rf" ref="ReceiverForm" />
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <Receiver :Receiver="rr" ref="Receiver" />
              </el-col>
              <el-col :span="8">
                <ResponsiblePersonForm :ResponsiblePersonForm="rpf" ref="ResponsiblePersonForm" />
              </el-col>
              <el-col :span="8">
                <DutyPeople :DutyPeople="dp" ref="DutyPeople" />
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="8">
                <ResponsibleDepartment :ResponsibleDepartment="rd" ref="ResponsibleDepartment" />
              </el-col>
              <el-col :span="8">
                <swd_ServiceType :swd_ServiceType="sst" ref="swd_ServiceType" />
              </el-col>
              <el-col :span="8">
                <EnableOrDisable :EnableOrDisable="ie" ref="EnableOrDisable" />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div></div>
    <br />
    <!-- <div class="filter-container filter-title-crm">查询结果</div> -->
    <!-- <Table :tabledatas="tabledatas" ref="table"></Table> -->
  </div>
</template>
<script>
import BusinessProcess from "@/components/crm/Select/Common/BusinessProcess";
import AgentBrand from "@/components/crm/Select/Common/Dealer/Agent/AgentBrand";
import ReceiverForm from "@/components/crm/Select/Common/ReceiverForm";

import Receiver from "@/components/crm/EjectWindows/Receiver";
import ResponsiblePersonForm from "@/components/crm/Select/Common/ResponsiblePersonForm";
import DutyPeople from "@/components/crm/textbox/Complaint/DutyPeople";

import ResponsibleDepartment from "@/components/crm/EjectWindows/ResponsibleDepartment";
import swd_ServiceType from "@/components/crm/EjectWindows/swd_ServiceType";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";

//import Status from "@/components/crm/Select/Common/Customer/Status";

//import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";

export default {
  name: "crmAgentDMREpage",
  components: {
    BusinessProcess,
    AgentBrand,
    ReceiverForm,

    Receiver,
    ResponsiblePersonForm,
    DutyPeople,

    ResponsibleDepartment,
    swd_ServiceType,
    EnableOrDisable

    //Status,
    //Table
  },
  data() {
    return {
      toggleParam: false,
      delayreason: "",
      //   tabledatas: {
      //     // 操作列
      //     isoperat: false,
      //     havedistrbute: false,
      //     haveEdit: false,
      //     haveDel: false,
      //     colnames: [
      //       { label: "修改", value: "" },
      //       { label: "分配", value: "" },
      //       { label: "删除", value: "" },
      //       { label: "业务流程", value: "" },
      //       { label: "经销商品牌", value: "" },
      //       { label: "服务类别", value: "" },
      //       { label: "责任部门", value: "" },
      //       { label: "责任人", value: "" },
      //       { label: "接单人", value: "" },
      //       { label: "责任人形式", value: "" },
      //       { label: "接单人形式", value: "" },
      //       { label: "状态", value: "" }
      //     ],
      //     queryObj: {
      //       // .后面是服务编码，.前面固定写死
      //       apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
      //       apiQueryRow: ["serverOrder", "createdDate"],
      //       params: {
      //         delayId: "",
      //         createdDateStart: "",
      //         createdDateEnd: "",
      //         serverOrder: "",
      //         delayStatus: ""
      //       }
      //     }
      //   },
      bp: {
        value: ""
      },
      ab: {
        value: ""
      },
      rf: {
        value: ""
      },

      rr: {
        value: ""
      },
      rpf: {
        value: ""
      },
      dp: {
        input: ""
      },

      rd: {
        value: ""
      },
      sst: {
        value: ""
      },
      ie: {
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
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    }
  }
};
</script>

