<!--
* 描述: 延期申请信息
* 创建人: zouzx
* 创建时间: 2019-07-23
* 记录：
*  20190723 新建 zouzx
-->
<template>
    <el-form :model="form" :inline="true" class="demo-form-inline">
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">延期申请信息</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row>
        <el-col :span="12">
          <ApplyExtensionTime></ApplyExtensionTime>
        </el-col>
        <el-col :span="12">
          <ExtensionCheckTime></ExtensionCheckTime>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="24">
            <DeferredApplicationReason_multi></DeferredApplicationReason_multi>
          </el-col>
      </el-row>
    </el-form>
</template>

<style scoped>
</style>

<script>
import ApplyExtensionTime from "@/components/crm/Time/ApplyExtensionTime";
import ExtensionCheckTime from "@/components/crm/Time/ExtensionCheckTime";
import DeferredApplicationReason_multi from "@/components/crm/textbox/DeferredApplicationReason_multi";
export default {
  name: "tp_ExtensionRequestinfo",
  components: {
    ApplyExtensionTime,
    ExtensionCheckTime,
    DeferredApplicationReason_multi
  },
  mounted: function() {
  },
  methods: {
  }
};
</script>