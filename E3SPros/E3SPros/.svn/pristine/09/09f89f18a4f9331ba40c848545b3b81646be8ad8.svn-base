<template>
  <div>
  <!-- <span style="color:red">审核信息</span> -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">审核信息</el-breadcrumb-item>
    </el-breadcrumb>
  <!-- 表单里有显示红色星号的属性，组件里不用加红色星号 -->
  <Opinion_withLinkEvent></Opinion_withLinkEvent>
  <UpLoad></UpLoad>
  </div>
</template>

<script>
import Opinion_withLinkEvent from "@/components/crm/Template/Opinion_withLinkEvent";
import UpLoad from "@/components/crm/EjectWindows/UpLoad";


export default {
  name: "ReviewContentInfo",
  components: {
    Opinion_withLinkEvent,
    UpLoad,
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