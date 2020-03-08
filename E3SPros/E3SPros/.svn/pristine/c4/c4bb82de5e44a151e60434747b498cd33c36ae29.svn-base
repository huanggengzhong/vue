
/**
 * description: 组件混入对象
 * author: liyk
 * createdDate: 2019-08-15
 * logs:在页面占用空间区域的<div>加入ref,命名参考setHeight
 */


export const the_Height = {
  data() {
    return {
      tableMarginHeight: 15,
      ieHeight: 30
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
          var curTableHeight = appMainHeight

          //减去固定高度
          curTableHeight = this.reduceHeight(curTableHeight)

          //减去自定义高度
          curTableHeight = this.reduceUserHeight(curTableHeight)

          //计算最终表格高度，可重写
          this.makeHeight(curTableHeight)

          // console.log("makeHeightForTemplate")


        }
      })

     
    },

    //减去固定高度
    reduceHeight(ch) {
      // 减去查询按钮区域高度
      if (this.$refs.searcheHeight) {
        ch -= this.$refs.searcheHeight.offsetHeight
      }
      // 减去查询查询条件标题区域高度
      if (this.$refs.conTitleHeight) {
        ch -= this.$refs.conTitleHeight.offsetHeight
      }
      // 减去查询查询条件区域高度
      if (this.$refs.conHeight) {
        ch -= this.$refs.conHeight.offsetHeight
      }
      // 减去查询结果标题区域高度
      if (this.$refs.resultTitleHeight) {
        ch -= this.$refs.resultTitleHeight.offsetHeight
      }
      // 减去分页区域高度
      if (this.$refs.paginationHeight) {
        if (this.$refs.paginationHeight.offsetHeight) {
          ch -= this.$refs.paginationHeight.offsetHeight
        } else {
          ch -= this.$refs.paginationHeight.$el.offsetHeight
        }
      }

      return ch;
    },

    //减去自定义高度
    reduceUserHeight(uh) {
      // 减去自定义userHeight1标签高度
      if (this.$refs.userHeight1) {
        uh -= this.$refs.userHeight1.offsetHeight
      }
      // 减去自定义userHeight2标签高度
      if (this.$refs.userHeight2) {
        uh -= this.$refs.userHeight2.offsetHeight
      }
      // 减去自定义userHeight3标签高度
      if (this.$refs.userHeight3) {
        uh -= this.$refs.userHeight3.offsetHeight
      }
      // 减去自定义userHeight4标签高度
      if (this.$refs.userHeight4) {
        uh -= this.$refs.userHeight4.offsetHeight
      }

      return uh;
    },

    //计算最终表格高度，可重写
    makeHeight(mh) {
      // // 减去margin-top/bottom值
      // if (!this.$utils.isIE() || isResize) {
      //   this.tableHeight = mh - this.tableMarginHeight
      // } else {
      //   // IE浏览器需要减去额外高度
      //   this.tableHeight = mh - this.tableMarginHeight - this.ieHeight
      // }

    }

  }

}
