// 通用输入框（包含弹窗图标）
// 使用场景：文本输入框
export const inputMixins = {
  props: {
    // 文本框图标
    suffixIcon: { type: String, default: '' },
    // 行内占比
    span: { type: Number, default: 6 },
    // 是否显示标签
    isShowLabel: { type: Boolean, default: true },
    // 组件是否显示
    isShow: { type: Boolean, default: true },
    // 默认选中
    code: { type: String, default: '' },
    // 控件label名称
    labelName: { type: String, default: '' },
    // 组件类型标识（用于标识不同组件，每个视图中唯一）(预留)
    comType: { type: String, default: '' },
    // 组件传值字段名称（与code对象绑定的字段名称，即视图中：formField对应的字段名称）
    // 如：视图中配置：code="formField.carBrandCode"，则codeField="carBrandCode"
    codeField: { type: String, default: '' },
    // 获取组件中的名称，如：textField="carBrandName"
    textField: { type: String, default: '' },
    // 对应弹窗的key
    popupsKey: { type: String, default: '' },
    // 是否不可用
    disabled: { type: Boolean, default: false },
    // 是否只读
    readonly: { type: Boolean, default: false },
    // 是否不填/选
    isRequire: { type: Boolean, default: false },
    // 是输入框还是文本框
    inputType: { type: String, default: 'text' },
    // 字段格式（type=show或value，show：监听组件显示，value：监听组件值，空：同value）：
    // 如：
    // 监听组件值传递：value:监听字段(本组件)1-对应父组件字段1|监听字段(本组件)2-对应父组件字段2
    // 监听组件显示：show:监听字段(父组件formField的对应字段)-显示组件值-隐藏组件值
    parentFileds: { type: String, default: '' },
    // 表单校验规则
    validrule: { type: Object, default: () => { } }
  },
  data() {
    return {
      curLabelName: this.labelName,
      // 绑定传入值并同步界面数据
      modelCode: this.code,
      // 组件是否显示
      curIsShow: this.isShow,
      // 组件Key
      fullComponentKey: ''
    }
  },
  // 监听传入参数变化
  watch: {
    code(val) {
      this.modelCode = val
    },
    // 传入需校验数据
    modelCode(curVal, oldVal) {
      if (this.isRequire) {
        this.$utils.validataMoth(this, 'inputMixins')
      }
      true
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
    // 清除
    clearCode() {
      this.modelCode = ''
      this.sendCode()
    },
    send(type) {
      if (this.modelCode === null) {
        this.modelCode = ''
      }
      var code = this.modelCode
      var text = ''
      this.$emit(type, code, text, this.codeField, this.comType, this.popupsKey)
    },
    // 设置组件是否显示
    setIsShow(isShow) {
      this.curIsShow = isShow
      this.fullComponentKey = 'input' + this.$utils.generateId()
    },
    // 设置组件的赋值字段
    setCopy(copyCode) {
      this.modelCode = copyCode
      this.fullComponentKey = 'input' + this.$utils.generateId()
    }
  }
}
