import { CacheConfig } from '@/cache/configCache/index'
// 单网格视图/弹窗（含嵌套视图模板）混入对象
// 使用场景：使用单网格模板，适用于普通单网格页面（按钮、查询条件、网格）和类似风格的弹窗，需要跟模板进行传值
export const oneTableWithViewTemplateMixins = {
  props: {
    // 弹出是否显示
    popupsVisible: { type: Boolean, default: false },
    // 行内占比
    span: { type: Number, default: 6 },
    // 是否显示标签
    isShowLabel: { type: Boolean, default: true },
    // 默认选中（值）
    code: { type: String, default: '' },
    // 默认选中（文本）
    text: { type: String, default: '' },
    // 控件label名称
    labelName: { type: String, default: '' },
    // 单选多选
    isMul: { type: Boolean, default: true },
    // 组件类型标识（用于标识不同组件，每个视图中唯一）(预留)
    comType: { type: String, default: '' },
    // 组件传值字段名称（与code对象绑定的字段名称，即视图中：formField对应的字段名称）
    // 如：视图中配置：code="formField.carBrandCode"，则codeField="carBrandCode"
    codeField: { type: String, default: '' },
    textField: { type: String, default: '' },
    // 对应弹窗的key
    popupsKey: { type: String, default: '' },
    // 返回code字段（从弹窗返回的code字段），用于sendCode()中，优先级高于sendCode参数
    returnCodeField: { type: String, default: '' },
    // 返回text字段（从弹窗返回的text字段），用于sendCode()中，优先级高于sendCode参数
    returnTextField: { type: String, default: '' },
    // 其它返回字段（以“,”隔开，以“-”分别区分组件中字段名与网格字段）
    otherField: { type: String, default: '' }
  },
  data() {
    return {
      // 弹出是否显示
      curPopupsVisible: this.popupsVisible,
      // 控件label名称
      curLabelName: this.labelName,
      // 绑定传入值并同步界面数据（值）
      modelCode: this.isMul === true ? (this.code !== '' ? this.code.split(',') : []) : this.code || '',
      // 绑定传入值并同步界面数据（文本）
      modelText: this.isMul === true ? (this.text !== '' ? this.text.split(',') : []) : this.code || '',
      // 新增、编辑弹窗状态
      editPopupsVisible: false,
      // 新增、编辑弹窗Key
      editPopupsKey: '',
      // 网格Key
      oneTableKey: 'oneTableKey',
      // 新增、编辑弹窗状态（add/edit/view）
      editPopupsState: '',
      // 新增、编辑行对象
      editRowData: {},
      // 判断全部必填是否已完成
      valid: true,
      // 必填项查询组件
      validateValue: [],
      // 定义弹窗组件
      modalData: {
      },
      // 弹窗网格KEY
      popupsTableKey: 'popupsTableKey',
      // 弹窗页面标识（由引用页面赋值）
      popupsPageCode: '',
      // 网格刷新标识
      refreshTableKey: '',
      // 双击列表选中参数
      handleTableRowData: {
        value: '',
        text: ''
      },
      // 是否使用刷新Key的方式刷新弹窗
      resetDialogKey: true
    }
  },
  created() {
    var that = this
    // 从静态配置信息中读取到配置信息
    if ((that.tableCols && that.tableCols.length === 0) && (that.tableComponents && that.tableComponents.length === 0)) {
      if (that.popupsPageCode && that.popupsPageCode.length > 0) {
        // 读取弹窗配置信息
        CacheConfig.initData(that.popupsPageCode, function() {
          if (CacheConfig.cacheData[that.popupsPageCode] && CacheConfig.cacheData[that.popupsPageCode].tableComponents.length > 0) {
            that.tableComponents = CacheConfig.cacheData[that.popupsPageCode].tableComponents
          } else {
            that.tableComponents = that.staticTableComponents
          }
          if (CacheConfig.cacheData[that.popupsPageCode] && CacheConfig.cacheData[that.popupsPageCode].tableCols.length > 0) {
            that.tableCols = CacheConfig.cacheData[that.popupsPageCode].tableCols
          } else {
            that.tableCols = that.staticTableCols
          }
          that.popupsTableKey = that.$utils.generateId()
        })
      } else {
        that.tableComponents = that.staticTableComponents
        that.tableCols = that.staticTableCols
        that.popupsTableKey = that.$utils.generateId()
      }
    }
    // 赋值formField
    if (this.curValueObject && typeof this.curValueObject === 'object') {
      for (var key in this.formField) {
        if (this.curValueObject[key]) {
          this.formField[key] = this.curValueObject[key]
        } else {
          this.formField[key] = ''
        }
      }
    }
    // 联动组件获取父组件传值
    if (that.$refs.multipleTable) {
      that.watchComp()
    } else {
      // 弹窗类型不能直接获取到el-dialog下的multipleTable，需要等待页面加载完成
      that.$nextTick(() => {
        // 监听
        that.watchComp(true)
      })
    }
  },
  methods: {
    // 调用嵌套视图模板方法
    // dto:传输对象，默认为：null，用于数据的传输，如：dto.formField...
    queryTable(page, dataType, size, filterObj, cb, dto) {
      // validpopups 组件弹窗  validpage 表单查询
      this.$utils.validataMoth(this, 'validpage')
      if (this.valid) {
        this.resetKey()
        this.$refs.multipleTable.queryTable(page, dataType, size, filterObj, cb, dto)
      }
    },
    // 重置
    reset() {
      this.$refs.multipleTable.reset()
    },
    // 导出
    exportExcel(excelName, excelSheetName, pageSize) {
      this.$refs.multipleTable.exportExcel(excelName, excelSheetName, pageSize)
    },
    // 关闭新增、编辑弹窗（type=1，保存成功）
    close(type) {
      this.editPopupsVisible = false
      if (this.resetDialogKey === true) {
        this.editPopupsKey = this.$utils.generateId()
      }
      if (type === '1') {
        this.queryTable(1)
      }
    },
    // 新增按钮事件
    add() {
      this.editRowData = {}
      this.showEdit('add')
    },
    // 编辑按钮事件
    edit(index) {
      var curIndex = index
      const that = this.$refs.multipleTable
      if (curIndex === undefined || curIndex === null) {
        var currentRow
        if (that.isMul === true) {
          // 多选
          var selectData = that.selection
          if (selectData.length > 0) {
            currentRow = selectData[0]
          }
        } else {
          // 单选
          currentRow = that.currentRow
        }
        if (currentRow) {
          curIndex = currentRow.index
        }
      }

      if (curIndex === undefined || curIndex === null) {
        this.$alert('请选择需要修改的数据', '提示')
        return
      }
      this.editRowData = that.list[curIndex]
      this.showEdit('edit')
    },
    // 显示新增、修改弹窗
    showEdit(type) {
      this.editPopupsState = type
      this.editPopupsVisible = true
      if (this.resetDialogKey === true) {
        this.editPopupsKey = this.$utils.generateId()
      }
    },
    // 同步（syncFields：排序字段（多个以“,”隔开），isSort：是否重新排序）
    synchrony(syncFields) {
      if (this.$refs.multipleTable.synchrony) {
        this.$refs.multipleTable.synchrony(syncFields)
      }
    },
    // 发送回传值（弹窗时）
    // arrayCodeField：返回给上级组件的code（优先级低于this.returnCodeField）
    // arrayTextField：返回给上级组件的text（优先级低于this.returnTextField）
    sendCode(arrayCodeField, arrayTextField) {
      // 获取嵌套组件的选中的值
      const that = this.$refs.multipleTable
      let selectData = []
      if (this.isMul === true) {
        selectData = that.$refs.multipleTable.selection
      } else {
        selectData.push(that.currentRow)
      }
      if (selectData && selectData.length > 0) {
        let tmpCodeField = this.returnCodeField
        if (!tmpCodeField || tmpCodeField === '') {
          tmpCodeField = arrayCodeField
        }
        let tmpTextField = this.returnTextField
        if (!tmpTextField || tmpTextField === '') {
          tmpTextField = arrayTextField
        }
        this.modelCode = this.$utils.getArrayFromJsonArray(selectData, tmpCodeField)
        this.modelText = this.$utils.getArrayFromJsonArray(selectData, tmpTextField)
      } else {
        this.modelCode = []
        this.modelText = []
      }
      var code = typeof (this.modelCode) === 'string' ? this.modelCode : this.modelCode.join(',')
      var text = typeof (this.modelText) === 'string' ? this.modelText : this.modelText.join(',')
      this.$emit('changeCode', code, text, this.codeField, this.comType, this.popupsKey, this.textField, this.otherField, selectData)
    },
    // 双击事件
    // arrayCodeField：返回给上级组件的code（优先级低于this.returnCodeField）
    // arrayTextField：返回给上级组件的text（优先级低于this.returnTextField）
    handleTableRowDbClick(row, column, event) {
      if (this.handleTableRowData.value && this.handleTableRowData.text) { this.sendCode(this.handleTableRowData.value, this.handleTableRowData.text) }
    },
    // 文本框focus事件
    sendFocusCode() {
      // 获取嵌套组件的选中的值
      const that = this.$refs.multipleTable
      let selectData = []
      if (this.isMul === true) {
        selectData = that.$refs.multipleTable.selection
      } else {
        selectData.push(that.currentRow)
      }
      this.$emit('focusCode', this.modelCode, this.modelText, this.codeField, this.comType, this.popupsKey, this.textField, this.otherField, selectData)
    },
    // 动态添加弹窗数据 params1:弹窗名称  params2使用方法位置 params3是否需要获取选择数据
    showModal(modelName, neetData) {
      const that = this.$refs.multipleTable
      const selectData = that.$refs.multipleTable.selection
      if (neetData) {
        if (selectData.length !== 1) {
          that.$message({ 'message': '请选择一条数据', type: 'warning' })
          return false
        }
        this.$set(this.modalData, modelName + 'Data', that.list[selectData[0].index])
        this.$set(this.modalData, modelName + 'Title', 1)
      } else {
        this.$set(this.modalData, modelName + 'Title', 0)
      }
      this.$set(this.modalData, modelName + 'Show', true)
      this.$set(this.modalData, modelName + 'Key', modelName + this.$utils.generateId())
    },
    // 当网格中含有对比显示组件，则需要刷新key（临时方案）
    resetKey() {
      const that = this
      if (that.tableCols) {
        const controlCols = that.tableCols.filter(o => o.prop === 'controlBtn' && o.comps && o.comps.length > 0)
        if (controlCols.length > 0) {
          const compareCols = controlCols[0].comps.filter(o => o.compareField && o.compareField !== null)
          if (compareCols.length > 0) {
            that.oneTableKey = 'oneTableKey' + that.$utils.generateId()
          }
        }
      }
    },
    // 联动组件获取父组件传值
    // isDialog:是否对话框内容（预留）
    // 监听parentFileds字段格式（type=show|value，show：监听组件显示，value：监听组件值，空：同value）：
    // 如：
    // 监听组件值传递：value:监听字段(父组件)1-对应子组件字段1|监听字段(父组件)2-对应子组件字段2
    // 监听组件显示：show:监听字段(父组件)-显示组件值-隐藏组件值
    watchComp(isDialog) {
      var that = this
      that.$utils.watchComp(that, isDialog)
    }
  }
}
