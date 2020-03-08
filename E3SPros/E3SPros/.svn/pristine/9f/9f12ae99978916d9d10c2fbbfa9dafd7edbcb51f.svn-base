<template>
    <section class="addMenu">
        <el-dialog
        title="添加快捷菜单"
        :visible.sync="addMenuVisible"
        width="600px"
        @close="sendCode"
        class="addMenuDialog"
        >
            <div class="filter-container filter-params">
                <label class="funcName">功能名称</label>
                <Search class="funcContent" :isAddMenu="isAddMenu" @getAddMenu="dealAddMenu"></Search>
            </div>
        </el-dialog>
    </section>
 </template>
<script>
import { getaddMenu } from '@/api/components'
import Search from '@/components/HeaderSearch'
export default {
 components: {
    Search,
  },
  props:{
    addMenuVisible:{
      type:Boolean,
      default:function(){
        return false
      }
    }
  },
  data() {
    return {
      isAddMenu: true,
    }
  },
  methods: {
    sendCode() {
        var val = 'close';
        this.$emit("getAddMenu",val)
    },
    dealAddMenu(val) {
      this.$emit("getAddMenu",val)
    }
  }
}
</script>

<style lang="scss">
.addMenuDialog {
    .el-dialog {
        height: 200px;
    }
}
 .addMenu {
     .funcName {
         height: 32px;
         line-height: 32px;
         width: 20%;
         float: left;
     }
     .funcContent {
         height: 32px;
         width: 70%;
         float: left;
         .el-select {
            width: 90%;
            border-radius: 2px;
            height: 32px;
            float: left;
         }
     }
 }
</style>
