<!--
* 描述: 客户信息模板 线索专用
* 创建人: zouzx
* 创建时间: 2019-07-23
* 记录：
*  20190723 新建 zouzx
-->
<template>
      <section>
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">客户信息</el-breadcrumb-item>
      </el-breadcrumb>
      <el-form label-position="right" label-width="80px">
      <el-row>
        <el-col :span="6">
          <txt_CustomerName :txt_CustomerName="agentData"></txt_CustomerName>
        </el-col>
        <el-col :span="6">
          <Sex :Sex="agentData" ref="Sex"></Sex>
        </el-col>
        <el-col :span="6">
          <PhoneNumber :PhoneNumber="agentData"></PhoneNumber>
        </el-col>
        <el-col :span="6">
          <BackupPhone :BackupPhone="agentData"></BackupPhone>
        </el-col>
      </el-row>
     </el-form>
  </section>
</template>

<style scoped>
</style>

<script>
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import Sex from "@/components/crm/Select/Common/Customer/Sex";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import BackupPhone from "@/components/crm/textbox/Public/customerInfos/BackupPhone";
export default {
  name: "tp_CustomerInfoForXS",
  components: {
    txt_CustomerName,
    Sex,
    PhoneNumber,
    BackupPhone
  },
  data(){
    return{
      agentData:{
      }
    }
  },
  mounted: function() {
  },
  methods: {
  }
};
</script>