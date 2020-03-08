<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <!-- <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="reset()">重置</el-button>-->
      <el-button type="primary" @click="save()">保存</el-button>
    </div>

    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params">
      <el-form label-position="right">
        <el-row>
          <el-col :span="7">
            <ComplaintRouteCode :ComplaintRouteCode="crc" ref="ComplaintRouteCode" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            <ComplaintRouteName :ComplaintRouteName="crn" ref="ComplaintRouteName" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            <Status :Status="ss" ref="Status" />
          </el-col>
        </el-row>
      </el-form>
    </div>

    <!-- <div class="filter-container filter-title">查询结果</div>
    <Table :tabledatas="tabledatas"></Table>-->
  </div>
</template>
<script>
import Status from "@/components/crm/Select/Common/Customer/Status";
import ComplaintRouteName from "@/components/crm/textbox/Complaint/ComplaintRouteName";
import ComplaintRouteCode from "@/components/crm/textbox/Complaint/ComplaintRouteCode";
import Table from "@/components/crm/table/Table";
import { ascApis } from "@/api/graphQLApiList/crm";
export default {
  name: "testPage",
  components: {
    Status,
    ComplaintRouteName,
    ComplaintRouteCode,
    Table
    //ContactWay
  },
  data() {
    return {
      delayreason: "",
      crc: {
        input: ""
      },
      crn: {
        input: ""
      },
      ss: {
        value: ""
      }
      //   tabledatas: {
      //     isoperat: false,
      //     havedistrbute: false,
      //     haveEdit: false,
      //     haveDel: false,
      //     colnames: [
      //       { label: "服务单号", value: "" },
      //       { label: "申请延期时间", value: "" },
      //       { label: "申请延期原因", value: "" }
      //     ],
      //     params: {},
      //     queryObj: {
      //       apiConfig: {},
      //       apiQueryRow: []
      //     }
      //   }
    };
  },
  methods: {
    // query: function() {},
    // reset: function() {},
    save: function() {}
  }
};
</script>
<style>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
</style>
