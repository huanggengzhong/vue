<template>
  <div>
  <!-- <span style="color:red">审核信息</span> -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">追加内容</el-breadcrumb-item>
    </el-breadcrumb>
  <!-- 表单里有显示红色星号的属性，组件里不用加红色星号 -->
  <Abstract></Abstract>
  <CustomerRequest></CustomerRequest>
  <DealWithContent></DealWithContent>
  <CustomerServiceAnswer></CustomerServiceAnswer>


  <UpLoad></UpLoad>
  </div>
</template>

<script>
import Abstract from "@/components/crm/textbox/Public/Abstract";
import CustomerRequest from "@/components/crm/textbox/Public/CustomerRequest";
import DealWithContent from "@/components/crm/textbox/Complaint/DealWithContent";
import CustomerServiceAnswer from "@/components/crm/textbox/Public/CustomerServiceAnswer";

import UpLoad from "@/components/crm/EjectWindows/UpLoad";


export default {
  name: "AppendTemplate",
  components: {
    Abstract,
    UpLoad,
    CustomerRequest,
    DealWithContent,
    CustomerServiceAnswer,
  },
  // props: {
  //   ReturnVisitNum: {
  //     input: String
  //   }
  // },
  data() {
    return {
      // input: this.ReturnVisitNum.input
    };
  },
  methods: {
    getData: function() {
      // let that = this;
      // that.input = this.ReturnVisitNum.input;
    }
  }
};
</script>

<style scoped>

</style>