<!--
* description: 金额是否足够  确认复选框
* author: zhhx
* createdDate: 2019-08-08
-->
<template>
  <el-col :span="span">
    <!-- <label @mouseenter="ellipsvisible" @mouseleave="ellipsinvisible" v-if="isShowLabel"><span v-if="isRequire" class="iconRequired"></span>{{curLabelName | ellipsis}}</label>
    <div class="ellipsisshowName" v-show="ellipsisshow">
      <span></span>{{curLabelName}}</div> -->
    <!-- <el-date-picker v-model="modelCode" :type="dateType" :picker-options="pickerOptions" @change="sendCode" :value-format="format" :disabled="disabled" placeholder="选择日期"></el-date-picker> -->
    <el-checkbox v-model="modelCode"  @change="sendCode"     :type="checkbox" class="isEnough">{{curLabelName}}</el-checkbox>
  </el-col>
</template>

<script>
import { inputMixins } from '@/components/mixins/inputMixins';
export default {
  name: 'isEnough',
	mixins: [inputMixins],
	 props: {
    // 文本框图标
    suffixIcon: { type: String, default: '' },
    // 行内占比
    span: { type: Number, default: 10 },
    // 是否显示标签
    isShowLabel: { type: Boolean, default: true },
    // 默认选中
    code: { type: String, default: '' },
    // 控件label名称
    labelName: { type: String, default: '金额足够' },
    // 组件类型标识（用于标识不同组件，每个视图中唯一）(预留)
    comType: { type: String, default: '' },
    // 组件传值字段名称（与code对象绑定的字段名称，即视图中：formField对应的字段名称）
    // 如：视图中配置：code="formField.carBrandCode"，则codeField="carBrandCode"
    codeField: { type: String, default: '' },
    // 对应弹窗的key
    popupsKey: { type: String, default: '' },
    // 是否不可用
    disabled: { type: Boolean, default: false },
    // 是否不填/选
    isRequire: { type: Boolean, default: false },
    checkbox: { type: String, default: 'checkbox' },
  },
 data() {
    return {
      curLabelName: this.labelName,
      // 绑定传入值并同步界面数据
      modelCode: this.code,
      // 是否显示字数溢出提示
      ellipsisshow: false
    }
  },
	 // 监听传入参数变化
  watch: {
    code(val) {
      val == '1' ? this.modelCode = true : this.modelCode = false
    }
  },
   methods: {
    // 把变更值传出
    sendCode() {
      this.send('changeCode')
    },
    // 文本框focus事件
    sendFocusCode() {
      this.send('focusCode')
    },
    send(type) {
      var codeTemp = this.modelCode
      var text = ''
      var code = ''
      codeTemp == true ? code = '1' :  code = '0'

      this.$emit(type, code, text, this.codeField, this.comType, this.popupsKey)
    },
    // 是否溢出显示
    ellipsvisible() {
      if (this.labelName.length > 4) {
        this.ellipsisshow = true
      } else {
        this.ellipsisshow = false
      }
    },
    ellipsinvisible() {
      this.ellipsisshow = false
    }
  }
};
</script>
</script>
<style scoped>
  .el-col-12{
    width: 100%;
  }

.isEnough {
  width:150px !important;
  /* left: -70%; */
  line-height: 32px;
  position:relative;
  left:40px;
}
</style>
