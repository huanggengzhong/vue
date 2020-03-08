<template>
  <el-menu
    :default-active="activeIndex2"
    width="100%"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#336774"
    text-color="#FFF"
    active-text-color="#FFF"
  >
    <el-menu-item class="logo">
      
    </el-menu-item>
    <el-menu-item >
      <i class="el-icon-user" style="color:white"></i>xtadmin
    </el-menu-item>
    <!-- <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
    </el-submenu>-->
    <el-menu-item>
      <el-input v-model="input" placeholder="请输入内容" class="elinput"></el-input>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      input: "",
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.el-menu-demo .el-menu-item:not(.logo) {
  float: right;
}
.elinput input {
  border-radius: 30px;
  height: 30px;
}
.el-menu-demo .logo{
  height: 50px;
}
.el-menu-demo .el-menu-item{
  line-height:50px;
  height: 50px;
}
.el-menu-demo{
  height: 100%;
}
</style>
