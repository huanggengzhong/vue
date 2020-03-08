<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">保存</el-button>
      <el-button @click="retreat()">返回</el-button>
    </div>

    <div class="filter-container filter-title-crm">短信账号设置</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <Agent :Agent="a" ref="Agent" />
          </el-col>
          <el-col :span="6">
            <AccountName :AccountName="ane" ref="AccountName" />
          </el-col>
          <el-col :span="6">
            <Password :Password="p" ref="Password" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <ServiceIP :ServiceIP="si" ref="ServiceIP" />
          </el-col>
          <el-col :span="6">
            <Status :Status1="s" ref="Status" />
          </el-col>
          <el-col :span="6">
            <Port :Port="pt" ref="Port" />
          </el-col>
        </el-row>
      </el-form>
    </div>

    <!-- <div class="filter-container filter-title-crm">查询结果</div>
    <Table :tabledatas="tabledatas"></Table>-->
  </div>
</template>
<script>
import Agent from "@/components/crm/EjectWindows/Agent";
import AccountName from "@/components/crm/textbox/Public/Message/AccountName";
import Password from "@/components/crm/textbox/Public/Message/Password";

import ServiceIP from "@/components/crm/textbox/Public/Message/ServiceIP";
import Status from "@/components/crm/Select/Common/Customer/Status";
import Port from "@/components/crm/textbox/Public/Message/Port";

// import Table from "@/components/crm/table/Table";
// import { ascApis } from "@/api/graphQLApiList/crm";
export default {
  name: "crmMsgAccountSpage",
  components: {
    Agent,
    AccountName,
    Password,
    Port,
    ServiceIP,
    Status,
    //Table
    //ContactWay
  },
  data() {
    return {
      delayreason: "",
       a: {
        value: ""
      },
      ane: {
        input: ""
      },
      p: {
        input: ""
      },

      si: {
        input: ""
      },
      s: {
        value: ""
      },
      pt: {
        input: ""
      },
      // tabledatas: {
      //   isoperat: false,
      //   havedistrbute: false,
      //   haveEdit: false,
      //   haveDel: false,
      //   colnames: [
      //     { label: "服务单号", value: "" },
      //     { label: "申请延期时间", value: "" },
      //     { label: "申请延期原因", value: "" }
      //   ],
      //   params: {},
      //   queryObj: {
      //     // .后面是服务编码，.前面固定写死
      //     apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
      //     apiQueryRow: ["serverOrder", "createdDate"],
      //     params: {
      //       delayId: "",
      //       createdDateStart: "",
      //       createdDateEnd: "",
      //       serverOrder: "",
      //       delayStatus: ""
      //     }
      //   }
      // }
    };
  },
  methods: {
    save: function() {},
    retreat: function() {}
  }
};
</script>
