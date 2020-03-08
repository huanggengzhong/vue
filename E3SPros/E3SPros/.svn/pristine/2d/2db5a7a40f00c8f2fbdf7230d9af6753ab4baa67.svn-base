// 文本标签
// 使用场景：文本标签
export const labelMixins = {
  props: {
    // label名称
    labelName: { type: String, default: '' },
    span: { type: Number, default: 6 },
    // 网格中使用组件联动，传入网格row数据对象
    curTableRow: { type: Object, default: null },
    // 本组件-row对象对应字段集合：本组件字段1-row对象字段1|本组件字段2-row对象字段2
    rowFileds: { type: String, default: '' },
    // 是否网格中组件
    isColComp: { type: Boolean, default: false }
  },
  data() {
    return {
      curLabelName: this.labelName,
      // 中转数据
      listQuery: {
        showText: ''
      }
    }
  },
  watch: {
    curTableRow: {
      handler(newValue, oldValue) {
        // 网格中组件
        if (this.isColComp === true) {
          // 设置网格中组件查询字段（如果当前组件存在于网格中）
          this.$utils.setRowQueryFields(this, 'listQuery')
          this.curLabelName = this.listQuery.showText
        }
      },
      deep: true
    }
  }
}
