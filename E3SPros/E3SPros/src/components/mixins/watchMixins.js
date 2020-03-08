// 弹窗的值联动监听
export const watchMixins = {
  props: {
    // 是否是表单
    isForm: { type: Boolean, default: true }
  },
  data() {
    return {
      curIsForm: this.isForm
    }
  },
  created() {
    // 联动组件获取父组件传值
    this.$nextTick(() => {
      // 监听
      this.watchComp()
    })
  },
  methods: {
    watchComp() {
      var that = this
      that.$utils.watchComp(that, null, null, this.curIsForm)
    }
  }
}
