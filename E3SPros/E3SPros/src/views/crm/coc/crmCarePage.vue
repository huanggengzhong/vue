<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <!-- <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="reset()">重置</el-button>-->
      <el-button  type="primary" @click="save()">保存</el-button>
    </div>

    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <ContactWay />
          </el-col>
          <el-col :span="6">
            <ChannelBigClass />
          </el-col>
          <el-col :span="7">
            <ChannelSmalTypeName :ChannelSmalTypeName="cstn"  ref="ChannelSmalTypeName"/>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row>
          <el-col :span="6">
            <EnableOrDisable />
          </el-col>
          <el-col :span="6">
            <Telemarketer />
          </el-col>
        </el-row>
      </el-form>
    </div>

    <!-- <div class="filter-container filter-title">查询结果</div>
    <Table :tabledatas="tabledatas"></Table>-->
  </div>
</template>
<script>
import ContactWay from "@/components/crm/Select/Common/ContactWay";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass";
import ChannelSmalTypeName from "@/components/crm/textbox/Clue/ChannelSmalTypeName";

import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";
import Telemarketer from "@/components/crm/Select/Clue/Telemarketer";
import Table from "@/components/crm/table/Table";
import { ascApis } from "@/api/graphQLApiList/crm";
export default {
  name: "testPage",
  components: {
    ContactWay,
    ChannelBigClass,
    ChannelSmalTypeName,
    EnableOrDisable,
    Telemarketer
    //Table
    //ContactWay
  },
  data() {
    return {
      delayreason: "",
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
      //     apiConfig: {},
      //     apiQueryRow: []
      //   }
      // }
      cstn:{
        input:""
      }
    };
  },
  methods: {
    // query: function() {},
    // reset: function() {}
  }
};
</script>
<style>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
</style>
