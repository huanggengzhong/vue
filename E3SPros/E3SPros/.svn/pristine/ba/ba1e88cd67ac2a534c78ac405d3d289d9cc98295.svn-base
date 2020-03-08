<template>
  <section>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>当日预约到店线索</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="true" class="demo-form-inline">
      <!-- 调用组件 -->
      <txt_CustomerName class="fromunit" ref="txt_CustomerName"></txt_CustomerName>
      <PhoneNumber class="fromunit" ref="PhoneNumber"></PhoneNumber>
      <IntentionalCar class="fromunit" ref="IntentionalCar"></IntentionalCar>
      <IntentionLevel class="fromunit" ref="IntentionLevel"></IntentionLevel>
      <ReserveTime class="fromunit" ref="ReserveTime"></ReserveTime>
      <ServiceMenuNumber class="fromunit" ref="ServiceMenuNumber"></ServiceMenuNumber>
       <ContactWay class="fromunit" ref="ContactWay"></ContactWay>
       <ChannelBigClass class="fromunit" ref="ChannelBigClass"></ChannelBigClass>
       <ReceiptStatus class="fromunit" ref="ReceiptStatus"></ReceiptStatus>
       <IntentionalBrand class="fromunit" ref="IntentionalBrand"></IntentionalBrand>
      <el-form-item class="button">
        <el-button type="primary" @click="query">查询</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- ref用来给DOM元素或子组件注册引用信息，引用信息根据父组件的$refs对象进行注册，将父组件的tabledatas赋给子组件的tabledata-->
    <Table v-bind:tabledatas="tabledata" ref="table"></Table>
  </section>
</template>

<style>
</style>

<script>
import Table from "@/components/crm/table/Table";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName.vue";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber.vue";
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar.vue";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel.vue";
import ReserveTime from "@/components/crm/Time/ReserveTime.vue";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber.vue";
import ContactWay from "@/components/crm/Select/Common/ContactWay.vue";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass.vue";
import ReceiptStatus from "@/components/crm/Select/Clue/ReceiptStatus.vue";
import IntentionalBrand from "@/components/crm/Select/Common/Customer/IntentionalBrand.vue";
export default {
  name: "AppointmentToStore",
  components: {
    Table,
    txt_CustomerName,
    PhoneNumber,
    IntentionalCar,
    IntentionLevel,
    ReserveTime,
    ServiceMenuNumber,
    ContactWay,
    ChannelBigClass,
    ReceiptStatus,
    IntentionalBrand
  },
  mounted: function() {
  },
  methods: {
    query: function() {
      this.$refs.table.getData();
    }, //查询网格，实际方法在组件里，这里只是调了一下
  },
  data() {
    return {
      tabledata: {
        flag: true,
        colnames: [
          { label: "客户名称", value: "date" },
          { label: "电话", value: "name" },
          { label: "意向级别", value: "address" },
          { label: "意向品牌", value: "address" },
          { label: "意向车系", value: "name" },
          { label: "预约时间", value: "address" },
          { label: "单据状态", value: "address" },
          { label: "接触方式", value: "address" },
          { label: "渠道大类", value: "address" },
          { label: "渠道小类", value: "address" },
          { label: "服务单号", value: "address" },
          { label: "建单日期", value: "address" },  
          { label: "回访人员", value: "address" }
        ],
        params: { code: "1" },
        isoperat: true,
        url:'/table',
        havedistrbute: false,
        haveSelected:false,
        haveEdit: true,
        haveDel: true,
      }
    };
  }
};
</script>
<style scoped>
.button {
  float: right;
}
.fromunit {
  float: left;
}
.el-form-item {
  margin-bottom: 10px;
}
.el-breadcrumb {
  margin-bottom: 10px;
}
</style>
