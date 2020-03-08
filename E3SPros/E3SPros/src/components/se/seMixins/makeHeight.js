
/**
 * description: 组件混入对象
 * author: liyk
 * createdDate: 2019-08-15
 * logs:在页面占用空间区域的<div>加入ref,命名参考setHeight
 */

export const the_Height = {
  data() {
    return {
      tableHeight: 310,
      // 高度margin-top/bottom值
      tableMarginHeight: 15,
      tableHeight2: 310,
      tableHeight3: 310,
      tableHeight4: 310,
      tableHeight5: 310,
      tableHeight6: 300,
      tableHeight7: 310,
      tableHeight8: 310,
      tableHeight9: 310

    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.setTableHeight(true)
    })
    window.addEventListener('click', () => {
      this.setTableHeight(true)
    })
    this.$nextTick(() => {
      this.setTableHeight()
    })
  },
  methods: {
    // 设置网格高度
    setTableHeight(isResize) {
      this.$nextTick(() => {
        // 调用AppMain中的方法设置网格高度（自适应）
        var appMainHeight = this.$utils.getAppMainHeight(this.$route.path, this)
        if (appMainHeight > 0) {
          // 减去Padding-top距离8
          var curTableHeight = appMainHeight - 8
          // 减去查询按钮区域高度
          if (this.$refs.searcheHeight) {
            curTableHeight -= this.$refs.searcheHeight.offsetHeight
          }
          // 减去查询查询条件标题区域高度
          if (this.$refs.conTitleHeight) {
            curTableHeight -= this.$refs.conTitleHeight.offsetHeight
          }
          // 减去查询查询条件区域高度
          if (this.$refs.conHeight) {
            curTableHeight -= this.$refs.conHeight.offsetHeight
          }
          // 减去查询结果标题区域高度
          if (this.$refs.resultTitleHeight) {
            curTableHeight -= this.$refs.resultTitleHeight.offsetHeight
          }
          // 减去分页区域高度
          if (this.$refs.paginationHeight) {
            if (this.$refs.paginationHeight.offsetHeight) {
              curTableHeight -= this.$refs.paginationHeight.offsetHeight
            } else {
              curTableHeight -= this.$refs.paginationHeight.$el.offsetHeight
            }
          }

          // 减去自定义userHeight1标签高度
          if (this.$refs.userHeight1) {
            curTableHeight -= this.$refs.userHeight1.offsetHeight
          }
          // 减去自定义userHeight2标签高度
          if (this.$refs.userHeight2) {
            curTableHeight -= this.$refs.userHeight2.offsetHeight
          }
          // 减去自定义userHeight3标签高度
          if (this.$refs.userHeight3) {
            curTableHeight -= this.$refs.userHeight3.offsetHeight
          }
          // 减去自定义userHeight4标签高度
          if (this.$refs.userHeight4) {
            curTableHeight -= this.$refs.userHeight4.offsetHeight
          }

          // 减去margin-top/bottom值
          if (!this.$utils.isIE() || isResize) {
            this.tableHeight = curTableHeight - this.tableMarginHeight
          } else {
            // IE浏览器需要减去额外高度
            this.tableHeight = curTableHeight - this.tableMarginHeight - 30
          }

          // 双表格模式下table2
          if (!this.$utils.isIE() || isResize) {
            this.tableHeight2 = curTableHeight - this.tableMarginHeight
          } else {
            //
            this.tableHeight2 = curTableHeight - this.tableMarginHeight - 30
          }

          // 其他计算方式在此补充

          if (!this.$utils.isIE() || isResize) {
            this.tableHeight3 = (curTableHeight - this.tableMarginHeight - 30) / 4
          } else {
            this.tableHeight3 = (curTableHeight - this.tableMarginHeight - 30) / 4
          }

          if (!this.$utils.isIE() || isResize) {
            this.tableHeight4 = (curTableHeight - this.tableMarginHeight - 30) / 2
          } else {
            this.tableHeight4 = (curTableHeight - this.tableMarginHeight - 30) / 2
          }

          if (!this.$utils.isIE() || isResize) {
            this.tableHeight5 = (curTableHeight - this.tableMarginHeight - 100) / 2
          } else {
            this.tableHeight5 = (curTableHeight - this.tableMarginHeight - 30 - 100) / 2
          }

          if (!this.$utils.isIE() || isResize) {
            this.tableHeight6 = appMainHeight - 240
          } else {
            this.tableHeight6 = appMainHeight - 240 - 30
          }

          if (!this.$utils.isIE() || isResize) {
            this.tableHeight7 = (curTableHeight - this.tableMarginHeight - 80) / 2
          } else {
            this.tableHeight7 = (curTableHeight - this.tableMarginHeight - 30 - 80) / 2 - 30
          }

          if (!this.$utils.isIE() || isResize) {
            this.tableHeight8 = (curTableHeight - this.tableMarginHeight - 80 - 600) / 2
          } else {
            this.tableHeight8 = (curTableHeight - this.tableMarginHeight - 30 - 80) / 2 - 30
          }

          if (!this.$utils.isIE() || isResize) {
            this.tableHeight9 = curTableHeight - this.tableMarginHeight - 50
          } else {
            // IE浏览器需要减去额外高度
            this.tableHeight9 = curTableHeight - this.tableMarginHeight - 30 - 50
          }
        }
      })
    }
  }

}
