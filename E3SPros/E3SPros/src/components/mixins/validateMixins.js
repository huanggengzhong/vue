// 必填校验
// 使用场景：必填校验弹窗/日期/输入框/下拉框/是否组件
export const validateMixins = {
  props: {
    // 控件label名称
    curLabelName: { type: String, default: '' },
    // 表单校验规则
    validrule: { type: Object, default: () => { } }
  },
  data() {
    return {
      // 是否显示字数溢出提示
      validateshow: false,
      // 判断图标显示类型 1提醒 2成功 3错误
      iconV: '',
      // 提示信息
      validataMessage: ''
    }
  },
  computed: {},
  // 监听传入参数变化
  watch: {
  },
  methods: {
    // 显示提示信息
    validatevisible() {
      this.validateshow = true
    },
    validateinvisible() {
      this.validateshow = false
    }
  }
}
