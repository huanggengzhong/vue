// 通用文本链接按钮
// 使用场景：网格中的链接（如：编辑、删除）
export const linkButtonMixins = {
  props: {
    // 代码字段，这里传按钮控件的唯一编（如controlBtn）
    codeField: { type: String, default: '' },
    // 控件传入label名称
    labelName: { type: String, default: '' },
    // 组件类型标识（用于标识不同组件，每个视图中唯一）(预留)
    comType: { type: String, default: '' },
    // 是否显示标签
    isShowLabel: { type: Boolean, default: true },
    // 是否显示组件
    isShow: { type: Boolean, default: true },
    // 字段格式（type=show或value，show：监听组件显示，value：监听组件值，空：同value）：
    // 如：
    // 监听组件值传递：value:监听字段(本组件)1-对应父组件字段1|监听字段(本组件)2-对应父组件字段2
    // 监听组件显示：show:监听字段(父组件formField的对应字段)-显示组件值-隐藏组件值
    parentFileds: { type: String, default: '' }
  },
  data() {
    return {
      // 控件label名称
      curLabelName: this.labelName,
      // 是否显示标签
      curIsShowLabel: this.isShowLabel,
      // 是否显示组件
      curIsShow: this.isShow,
      // 组件Key
      fullComponentKey: ''
    }
  },
  methods: {
    // 把变更值传出
    sendCode() {
      this.$emit('clickEvent', this.comType, '', this.codeField, this.comType)
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
