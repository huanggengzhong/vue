// 使用场景：树和网格混入模板（树和网格混入模板）
export const treeTableTemplateMixins = {
  props: {
    // 动态按钮
    dynamicButtons: { type: Array, default: function() { return [] } },
    // 动态组件
    dynamicComponents: { type: Array, default: function() { return [] } },
    // 动态网格列
    dynamicTableCols: { type: Array, default: function() { return [] } },
    // 动态查询条件对象
    dynamicFormFields: { type: Object, default: function() { return {} } },
    // 树对象
    treeObject: { type: Object, default: function() { return {} } },
    // 动态网格API配置
    dynamicApiConfig: { type: Object, default: function() { return {} } },
    dynamicTableOtherHeight: { type: Number, default: 0 },
    // 是否显示网格选择列
    dynamicIsShowSelect: { type: Boolean, default: true },
    // 是否显示更多按钮
    dynamicIsShowMoreBtn: { type: Boolean, default: true },
    // 是否默认展开所有树
    dynamicExpandAll: { type: Boolean, default: true },
    // 是否行拖动
    dynamicIsRowDrop: { type: Boolean, default: false },
    // 设置菜单栏宽度
    dynamicWidth: { type: Number, default: 0 }

  },
  data() {
    return {
      // 数据列表
      list: null,
      // tree列表
      orgList: [],
      // 加载中
      listLoading: false,
      // 设置网格总共的条数，查询完更改
      pageTotal: 0,
      // 下拉查询条件
      listQuery: {
        pageIndex: 1,
        pageSize: 10
      },
      siderWidth: this.dynamicWidth + 'px',
      // 树的Api对象
      apiTree: this.treeObject.treeApiConfig,
      // 树的字段
      apiTreeCols: this.treeObject.returnTreeCol,
      // 树的查询条件
      apiTreeQuery: this.treeObject.treeQuery,
      // 树的排序对象
      defaultProps: this.treeObject.defaultProps,
      // API配置对象
      apiConfig: this.dynamicApiConfig,
      tableOtherHeight: this.dynamicTableOtherHeight,
      // 组件控件
      tableComponents: this.dynamicComponents,
      // 按钮控件
      tableButtons: this.dynamicButtons,
      // 网格动态生成列
      tableCols: this.dynamicTableCols,
      // 表单查询数据
      formField: this.dynamicFormFields,
      // 是否显示网格选择列
      isShowSelect: this.dynamicIsShowSelect,
      // 是否显示更多按钮
      isShowMoreBtn: this.dynamicIsShowMoreBtn,
      // 表单查询数据备份对象（用于重置
      backFormField: {},
      // 需要中台返回网格的字段
      apiQueryRow: [],
      // 网格当前选中行
      currentRow: null,
      // 网格高度
      tableHeight: 310,
      // 高度margin-top/bottom值
      tableMarginHeight: 21,
      // 更多按钮图标
      moreBtnIcon: 'el-icon-plus',
      // 网格拖动列
      dropTableCols: this.copyTableCols(this.dynamicTableCols),
      // 是否网格行拖动，列拖动优先
      isRowDrop: this.dynamicIsRowDrop && !this.dynamicIsColumnDrop,
      // 是否显示更多查询条件
      toggleParam: false

    }
  },
  created() {
    // 根据动态列获取字段
    if (this.tableCols.length > 0) {
      this.apiQueryRow = this.$utils.getArrayFromJsonArray(this.tableCols.filter(o => o.prop !== 'controlBtn'), 'prop')
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.setTableHeight(true)
    })
    this.$nextTick(() => {
      this.setTableHeight()
    })
  },
  // 更新后操作
  updated() {
    if (this.isUpdated === false) {
      this.$nextTick(() => {
        this.setTableHeight()
      })
      if (!this.$refs.conHeight || this.$refs.conHeight.offsetHeight > 20) {
        this.isUpdated = true
      }
    }
  },
  methods: {
    // 定义树的的查询方法apiTree
    queryOrganization(parentId, childrenId) {
      const that = this
      const queryObj = {
        // api配置
        apiConfig: that.apiTree,
        // 需要调用的API服务配置
        apiServices: [{
          // 表格中台返回网格的字段
          apiQueryRow: that.apiTreeCols
        }],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10000,
          pageIndex: 1,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.apiTreeQuery
        }
      }
      // 转换了中台请求格式数据
      var paramD = that.$getParams(queryObj)
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === '1' && response.data[queryObj.apiConfig.ServiceCode].rows !== '') {
          var dataList = response.data[queryObj.apiConfig.ServiceCode].rows
          var tree = this.$utils.parseTreeFromList(dataList, parentId, childrenId)
          this.orgList = tree
        }
      })
    },

    // 定义空方法，用于获取下拉框数据（这里需要每个组件实现这个方法）
    // 查询方法（apiConfig:api配置对象，apiQueryRow:表格中台返回网格的字段）
    queryTable(page) {
      this.currentRow = null
      this.listLoading = true

      const queryObj = {
        // api配置
        apiConfig: this.apiConfig,
        // 需要调用的API服务配置
        apiServices: [{
          // 表格中台返回网格的字段
          apiQueryRow: this.apiQueryRow
        }],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: this.listQuery.pageSize,
          pageIndex: page || this.listQuery.pageIndex,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: this.formField
        }
      }
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj)
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === '1' && response.data[queryObj.apiConfig.ServiceCode].rows) {
          if (page) {
            // 查询完返回指定的page页数
            this.listQuery.pageIndex = page
          }
          this.pageTotal = response.data[queryObj.apiConfig.ServiceCode].records
          var tmpLst = this.$utils.changeToOneDeepArray(response.data[queryObj.apiConfig.ServiceCode].rows)
          for (var i = 0; i < tmpLst.length; i++) {
            if (!tmpLst[i].index) {
              tmpLst[i].index = i
            }
          }
          this.list = tmpLst
          this.listLoading = false
        }
      })
    },
    // 重置
    reset() {
      // this.formField = JSON.parse(JSON.stringify(this.backFormField))
      this.$utils.deepClone(this.formField, this.backFormField)
    },
    // 导出网格
    exportExcel() { },
    // 选中网格行
    handleTableRowChange(val) {
      this.currentRow = val
      // 判断父组件是否需要接收选中行数据
      if (this.$parent.clickRowsData !== undefined) {
        this.$parent.clickRowsData = this.currentRow
      }
    },
    // // 把每一行的索引放进row      为了解决鼠标经过不断刷新问题弃用这种方式   luojx 2019-9-9
    // tableRowClassName({ row, rowIndex }) {
    //   row.index = rowIndex
    // },
    // 初始化list的索引
    initListIndex() {
      var that = this
      for (var li = 0; li < that.list.length; li++) {
        that.list[li].index = li
      }
    },
    // 更多按钮点击事件
    changeToggleParam() {
      this.toggleParam = !this.toggleParam
      if (this.toggleParam) {
        this.moreBtnIcon = 'el-icon-minus'
      } else {
        this.moreBtnIcon = 'el-icon-plus'
      }
      this.setTableHeight()
    },
    // 处理每页显示改变事件
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.queryTable()
    },
    // 当前页记录
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val
      this.queryTable()
    },
    // 获取组件回传值
    // val:值, codeField:绑定formField的字段名称, comType:组件类型（预留）
    getComponentCode(val, txt, codeField, comType, popupsKey, textField) {
      if (comType === 'propus' && !this.$utils.isEmpty(popupsKey)) {
        // 弹窗赋值
        // 根据popupsKey找到对应的弹窗key的弹窗组件
        var dynamicPopup = this.dynamicComponents.filter(o => o.compKey === popupsKey)
        if (dynamicPopup.length > 0) {
          if (dynamicPopup[0].popups && dynamicPopup[0].popups.state) {
            // 弹窗状态不是为已打开才进行计算
            dynamicPopup[0].popups.state = false
            dynamicPopup[0].popups.key = codeField + this.$utils.generateId()
          }
        }
      }
      // 赋值
      if (codeField in this.formField) {
        this.formField[codeField] = val
      }
      if (textField in this.formField) {
        this.formField[textField] = txt
      }
    },
    // 获取focus事件传回值
    // val:值, codeField:绑定popupsState的字段名称, comType:组件类型（预留）
    getFocusCode(val, txt, codeField, comType, popupsKey) {
      // 只有popupsField和popupsKey都有传值才进行计算弹窗是否显示
      if (!this.$utils.isEmpty(codeField) && !this.$utils.isEmpty(popupsKey)) {
        // 根据popupsKey找到对应的弹窗key的弹窗组件
        var dynamicPopup = this.dynamicComponents.filter(o => o.compKey === popupsKey)
        if (dynamicPopup.length > 0) {
          if (dynamicPopup[0].popups && !dynamicPopup[0].popups.state) {
            // 弹窗状态不是为已打开才进行计算
            dynamicPopup[0].popups.state = true
            dynamicPopup[0].popups.key = codeField + this.$utils.generateId()
          }
        }
      }
    },
    // 获取（网格中）组件回传值
    // val:值, codeField:绑定formField的字段名称, comType:网格行索引（row.index）
    getRowComponentCode(val, txt, codeField, comType, popupsKey, textField) {
      switch (codeField) {
        default:
          // 普通赋值
          if (this.list[comType][codeField]) {
            this.list[comType][codeField] = val
          }
          if (textField && this.list[comType][textField]) {
            this.list[comType][textField] = txt
          }
          break
      }
    },
    // 复制网格字段
    copyTableCols(tableCols) {
      var colsObj = tableCols.filter(o => o.hidden !== true)
      // var cols = JSON.parse(JSON.stringify(colsObj))
      return colsObj
    },

    // 设置网格高度
    setTableHeight(isResize) {
      this.$nextTick(() => {
        this.tableHeight = this.$utils.setTableHeight(this, isResize, this.tableHeight)
      })
    }
  }
}
