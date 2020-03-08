<template>
    <section>
        <el-col :span="span" >
            <span>{{this.code==='1' ? '启动':'禁用'}}</span>
        </el-col>
    </section>
</template>
<script>
export default {
  name: 'orgIsEnable',
  props:{
    // 行内占比
    span: { type: Number, default: 6 },
    // 是否显示标签
    isShowLabel: { type: Boolean, default: true },
    // 默认选中
    code: { type: String, default: '1' },
    // 控件label名称
    labelName: { type: String, default: '' },
    // 组件类型标识（用于标识不同组件，每个视图中唯一）(预留)
    comType: { type: String, default: '' },
    // 组件传值字段名称（与code对象绑定的字段名称，即视图中：formField对应的字段名称）
    // 如：视图中配置：code="formField.carBrandCode"，则codeField="carBrandCode"
    codeField: { type: String, default: '' },
    // 是否必填/选
    isRequire: { type: Boolean, default: false }
  },
  data() {
    return {
    }
  },
  watch: {
    code(val) {
      this.modelCode = val
    }
  },
  methods: {

  },
  created:function(){
  }
}
</script>
<style scoped>
  .el-col-12{
    width: 100%;
  }
</style>
