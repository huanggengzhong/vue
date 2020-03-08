// 通用搜索输入框（包含弹窗）
// 使用场景：需要直接引入一个含弹窗的组件（dialog不需要另外导入）
export const searchInputMixins = {
  props: {
    // 行内占比
    span: { type: Number, default: 6 },
    // 是否显示标签
    isShowLabel: { type: Boolean, default: true },
    // 组件是否显示
    isShow: { type: Boolean, default: true },
    // 默认选中
    code: { type: String, default: '' },
    // 默认显示文本
    text: { type: String, default: '' },
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
    // 弹出是否显示
    popupsVisible: { type: Boolean, default: false },
    // 是否不可用
    disabled: { type: Boolean, default: false },
    // 是否只读
    readonly: { type: Boolean, default: false },
    // 是否不填/选
    isRequire: { type: Boolean, default: false },
    // 是否多选
    isMul: { type: Boolean, default: true },
    // 字段格式（type=show或value，show：监听组件显示，value：监听组件值，空：同value）：
    // 如：
    // 监听组件值传递：value:监听字段(本组件)1-对应父组件字段1|监听字段(本组件)2-对应父组件字段2
    // 监听组件显示：show:监听字段(父组件formField的对应字段)-显示组件值-隐藏组件值
    parentFileds: { type: String, default: '' },
    // 网格中使用组件联动，传入网格row数据对象
    curTableRow: { type: Object, default: null },
    // 本组件-row对象对应字段集合：本组件字段1-row对象字段1|本组件字段2-row对象字段2
    rowFileds: { type: String, default: '' },
    // 下拉框中必须的查询条件字段，设置后只有listQuery中对应该字段有值才会进行查询，如：mustField="carBrandCode"
    // 如：
    // 格式如：字段1|字段2
    mustFields: { type: String, default: '' },
    // 返回code字段（从弹窗返回的code字段），用于sendCode()中，优先级高于sendCode参数
    returnCodeField: { type: String, default: '' },
    // 返回text字段（从弹窗返回的text字段），用于sendCode()中，优先级高于sendCode参数
    returnTextField: { type: String, default: '' },
    // 其它返回字段（以“,”隔开，以“-”分别区分组件中字段名与网格字段）
    otherField: { type: String, default: '' },
    // 是否网格中组件
    isColComp: { type: Boolean, default: false },
    // 表单校验规则
    validrule: { type: Object, default: () => { } }
  },
  data() {
    return {
      // 弹出是否显示
      curPopupsVisible: this.popupsVisible,
      curLabelName: this.labelName,
      // 绑定传入值并同步界面数据（值）
      modelCode: this.code,
      // 绑定传入值并同步界面数据（文本）
      modelText: this.text,
      // 弹出Key
      curPopupsKey: this.codeField + this.$utils.generateId(),
      // 组件是否显示
      curIsShow: this.isShow,
      // 组件Key
      fullComponentKey: ''
    }
  },
  created() {
    // 设置网格中组件查询字段（如果当前组件存在于网格中）
    this.$utils.setRowQueryFields(this, 'curValueObject')
  },
  // 监听传入参数变化
  watch: {
    code(val) {
      this.modelCode = val
      if (this.modelCode === '' || this.modelCode === null) {
        this.modelText = val
        if (this.curTableRow && this.otherField && this.otherField !== '') {
          var arrOtherField = this.otherField.split(',')
          for (var i = 0; i < arrOtherField.length; i++) {
            var arrOtherFieldVal = arrOtherField[i].split('-')
            if (arrOtherFieldVal.length === 1) arrOtherFieldVal.push(arrOtherFieldVal[0])
            if (this.curTableRow.hasOwnProperty(arrOtherFieldVal[1]) && this.curTableRow[arrOtherFieldVal[1]] !== '') {
              this.curTableRow[arrOtherFieldVal[1]] = ''
            }
          }
        }
      }
    },
    // curTableRow: {
    //   handler(newValue, oldValue) {
    //     // 网格中组件刷新
    //     if (this.isColComp === true) {
    //       if (this.curTableRow && this.otherField && this.otherField !== '') {
    //         var arrOtherField = this.otherField.split(',')
    //         for (var i = 0; i < arrOtherField.length; i++) {
    //           var arrOtherFieldVal = arrOtherField[i].split('-')
    //           if (arrOtherFieldVal.length === 1) arrOtherFieldVal.push(arrOtherFieldVal[0])
    //           if (this.curTableRow.hasOwnProperty(arrOtherFieldVal[1]) && this.curTableRow[arrOtherFieldVal[1]] !== '') {
    //             this.curTableRow[arrOtherFieldVal[1]] = ''
    //           }
    //         }
    //       }
    //     }
    //   },
    //   deep: true
    // },
    text(val) {
      this.modelText = val
    },
    curPopupsVisible(val) {
      if (val === true) {
        this.onShow()
      }
    },
    // 传入需校验数据
    modelCode(curVal, oldVal) {
      if (this.isRequire) {
        this.$utils.validataMoth(this, 'searchInputMixins')
      }
      true
    }
  },
  methods: {
    // 把变更值传出
    sendCode(otherField, selectData) {
      var code = this.modelCode
      var text = this.modelText
      this.$emit('changeCode', code, text, this.codeField, this.comType, this.popupsKey, this.textField, otherField, selectData)
    },
    // 清除
    clearCode(isSend) {
      this.modelCode = ''
      this.modelText = ''
      if (isSend !== false) {
        this.sendCode()
      }
    },
    // 关闭
    close() {
      this.curPopupsVisible = false
      this.curPopupsKey = this.codeField + this.$utils.generateId()
      this.clearCode()
    },
    // 获取focus事件传回值
    // val:值, codeField:绑定popupsState的字段名称, comType:组件类型（预留）
    getFocusCode(val, txt, codeField, comType, popupsKey) {
      if (!this.curPopupsVisible) {
        // 判断必须查询条件字段
        if (this.mustFields && this.mustFields !== null && this.curValueObject) {
          const arrFields = this.mustFields.split('|')
          for (var i in arrFields) {
            if (!this.curValueObject[arrFields[i]] || this.curValueObject[arrFields[i]] === '') {
              this.onShow()
              return
            }
          }
        }
        this.curPopupsVisible = true
        this.curPopupsKey = codeField + this.$utils.generateId()
      }
    },
    // 获取组件回传值
    // val:值, codeField:绑定formField的字段名称, comType:组件类型（预留）
    getComponentCode(val, txt, codeField, comType, popupsKey, textField, otherField, selectData) {
      this.modelCode = val
      this.modelText = txt
      this.curPopupsVisible = false
      this.curPopupsKey = codeField + this.$utils.generateId()
      this.sendCode(otherField, selectData)
    },
    // 显示时执行方法
    onShow() { },
    // 组件接收从父页面传的值
    setQueryFields(obj) {
      var that = this
      return that.$utils.setQueryFields(that, obj, 'curValueObject', function() {
        that.curPopupsKey = that.codeField + that.$utils.generateId()
      })
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
