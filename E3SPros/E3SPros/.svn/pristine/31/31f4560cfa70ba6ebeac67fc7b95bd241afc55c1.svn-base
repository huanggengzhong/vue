/**
 * description: 组件混入对象
 * author: luojx
 * createdDate: 2019-07-27
 * logs:
 *   2019-07-28 加入视图混入对象-单网格混入对象 luojx
 *   2019-08-04 加入表单混入对象 luojx
 *   2019-08-05 加入文字溢出效果 liyanm
 *   2019-08-05 配置化网格兼容组件 luojx
 *   2019-08-10 加入网格行、列拖拽（rowDrop/columnDrop） luojx
 *   2019-08-10 加入组件必填校验  liyanm
 *   2019-08-15 加入树表视图混入对象、动态加载弹窗  meijq
 *   2019-08-15 增加输入框类型判断，默认text   yinxy
 *   2019-08-17 liyanm  增加table通用计算组件数据传递
 *   2019-09-09 去掉网格表头背景色、网格内容加index方法 luojx
 *   2019-09-21 独立出隐藏更多按钮方法，封装设置网格自适应高度方法 luojx
 *   2019-09-24 加入对组件是否显示的联动控制 luojx
 *   2019-10-10 加入parentFields的copy监听 linwm
 */

// =================================混入对象已拆分，请引用具体的对象======================================

/*
import { CacheConfig } from '@/cache/configCache/index'

// ==================================== 组件混入对象 ====================================
// 组件间传值对象
export const valueObjectMixins = {
  props: {
    valueObject: { type: Object, default: function() { return null } }
  },
  data() {
    return {
      // 当前组件中组件间传值对象
      curValueObject: this.valueObject || {
        carBrandCode: '',
        carSeriesId: '',
        smallCarTypeId: '',
        carConfigId: '',
        bigAreaId: '',
        smallAreaId: '',
        provinceId: '',
        cityId: '',
        dlrId: ''
      }
    }
  }
}

// 下拉框
// 使用场景：所有下拉框组件
export const dropdownMixins = {
  props: {
    // 行内占比
    span: { type: Number, default: 6 },
    // 是否显示标签
    isShowLabel: { type: Boolean, default: true },
    // 组件是否显示
    isShow: { type: Boolean, default: true },
    // 默认选中
    code: { type: String, default: '' },
    // 单选多选
    isMul: { type: Boolean, default: false },
    // 控件label名称
    labelName: { type: String, default: '' },
    // 组件类型标识（用于标识不同组件，每个视图中唯一）(预留)
    comType: { type: String, default: '' },
    // 组件传值字段名称（与code对象绑定的字段名称，即视图中：formField对应的字段名称）
    // 如：视图中配置：code="formField.carBrandCode"，则codeField="carBrandCode"
    codeField: { type: String, default: '' },
    // 获取组件中的名称，如：textField="carBrandName"
    textField: { type: String, default: '' },
    // 是否不可用
    disabled: { type: Boolean, default: false },
    // 是否不可用
    readonly: { type: Boolean, default: false },
    // 是否不填/选
    isRequire: { type: Boolean, default: false },
    // 是否可清除选项
    clearable: { type: Boolean, default: true },
    // 是否可过滤选项
    filterable: { type: Boolean, default: false },
    // 下拉选项
    options: { type: Array, default: function() { return [] } },
    // 字段格式（type=show或value，show：监听组件显示，value：监听组件值，空：同value）：
    // 如：
    // 监听组件值传递：value:监听字段(本组件)1-对应父组件字段1|监听字段(本组件)2-对应父组件字段2
    // 监听组件显示：show:监听字段(父组件formField的对应字段)-显示组件值-隐藏组件值
    parentFileds: { type: String, default: '' },
    // 网格中使用组件联动，传入网格row数据对象
    curTableRow: { type: Object, default: null },
    // 本组件-row对象对应字段集合：本组件字段1-row对象字段1|本组件字段2-row对象字段2
    rowFileds: { type: String, default: '' },
    // 是否网格中组件
    isColComp: { type: Boolean, default: false },
    // 表单校验规则
    validrule: { type: Object, default: () => { } }
  },
  data() {
    return {
      curLabelName: this.labelName,
      // 绑定传入值并同步界面数据
      modelCode: this.isMul === true ? (this.code !== '' ? this.code.split(',') : []) : this.code || '',
      // 下拉选项数据
      optionDatas: this.options || [],
      // 下拉查询条件
      listQuery: {
        isEnable: '1'
      },
      // 下拉查询条件备份
      backListQuery: null,
      // API配置对象
      apiConfig: null,
      // 表格中台返回网格的字段
      apiQueryRow: [],
      // 组件Key
      fullComponentKey: '',
      // 组件是否显示
      curIsShow: this.isShow
    }
  },
  // 监听传入参数变化
  watch: {
    code(val) {
      this.modelCode = this.isMul === true ? (val !== '' ? val.split(',') : []) : val || ''
    },
    // 传入需校验数据
    modelCode(curVal, oldVal) {
      if (this.isRequire) {
        this.$utils.validataMoth(this, 'dropdownMixins')
      }
      true
    },
    options(curVal) {
      this.optionDatas = curVal
    }
  },
  created() {
    // 初始化数据
    if (this.apiConfig !== null && this.apiQueryRow.length > 0 && this.optionDatas.length === 0 && this.lookuptype !== '_is_null_code_') {
      // 设置网格中组件查询字段（如果当前组件存在于网格中）
      this.$utils.setRowQueryFields(this, 'listQuery')

      if (this.setQueryFields() !== true) {
        this.queryTable(this.apiConfig, this.apiQueryRow)
      }
    }
  },
  methods: {
    // 定义空方法，用于获取下拉框数据（这里需要每个组件实现这个方法）
    // 查询方法（apiConfig:api配置对象，apiQueryRow:表格中台返回网格的字段）
    queryTable(apiConfig, apiQueryRow) {
      const queryObj = {
        // api配置
        apiConfig: apiConfig,
        // 需要调用的API服务配置
        apiServices: [{
          // 表格中台返回网格的字段
          apiQueryRow: apiQueryRow
        }],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 100,
          pageIndex: 1,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: this.listQuery
        }
      }
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj)
      // 检查查询结果已经存在且未过期
      var cacheData = this.$OrgCacheData.CacheObject[queryObj.apiConfig.ServiceCode]
      if (cacheData) {
        this.optionDatas = cacheData.getData(queryObj) || []
      } else {
        this.optionDatas = []
      }
      // var cacheData = this.$OrgCacheData.CacheObject.cacheDatas.filter(o => o.cacheName === queryObj.apiConfig.ServiceCode && o.useCache === true)
      if (this.optionDatas.length === 0) {
        // 不存在则请求中台API数据
        // 调用中台API方法（可复用）
        this.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === '1' && response.data[queryObj.apiConfig.ServiceCode].rows) {
            this.optionDatas = response.data[queryObj.apiConfig.ServiceCode].rows
            // 赋值缓存
            if (cacheData) {
              cacheData.setData(queryObj, response.data[queryObj.apiConfig.ServiceCode].rows)
            }
          }
        })
      }
      // 设置查询条件备份
      if (this.backListQuery === null) {
        this.backListQuery = JSON.parse(JSON.stringify(this.listQuery))
      }
    },
    // 把变更值传出
    sendCode() {
      if (this.modelCode === null) {
        this.modelCode = this.isMul === false ? '' : []
      }
      var code = this.isMul === false ? this.modelCode : this.modelCode.join(',')
      var text = ''
      if (this.codeField !== '' && this.textField !== '') {
        var arr = code.split(',')
        var options = this.optionDatas.filter(o => arr.indexOf(o[this.codeField]) > -1)
        for (var i = 0; i < options.length; i++) {
          text += options[i][this.textField]
          if (i < options.length - 1) {
            text += ','
          }
        }
      }
      this.$emit('changeCode', code, text, this.codeField, this.comType)
    },
    // 清除
    clearCode() {
      this.modelCode = this.isMul === false ? '' : []
      this.sendCode()
    },
    // 组件接收从父页面传的值
    // 返回：是否已执行重新查询
    setQueryFields(obj) {
      var that = this
      return that.$utils.setQueryFields(that, obj, 'listQuery', function() {
        // 查询条件不变不需要清除选择数据
        if (that.backListQuery !== null && JSON.stringify(that.backListQuery) !== JSON.stringify(that.listQuery)) {
          that.clearCode()
        }
        that.queryTable(that.apiConfig, that.apiQueryRow)
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

// 通用数字输入框
// 使用场景：文本输入框
export const numberInputMixins = {
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
    code: { type: Number, default: null },
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
    inputType: { type: String, default: 'Number' },
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
        this.$utils.validataMoth(this, 'numberInputMixins')
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
      this.modelCode = null
      this.sendCode()
    },
    send(type) {
      var code = this.modelCode === null ? null : parseInt(this.modelCode)

      var text = ''
      this.$emit(type, code, text, this.codeField, this.comType, this.popupsKey)
    },
    // 设置组件是否显示
    setIsShow(isShow) {
      debugger
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
    // 返回code字段（从弹窗返回的code字段），用于sendCode()中，优先级高于sendCode参数
    returnCodeField: { type: String, default: '' },
    // 返回text字段（从弹窗返回的text字段），用于sendCode()中，优先级高于sendCode参数
    returnTextField: { type: String, default: '' },
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
      if (this.modelCode === '') {
        this.modelText = val
      }
    },
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
    sendCode() {
      var code = this.modelCode
      var text = this.modelText
      this.$emit('changeCode', code, text, this.codeField, this.comType, this.popupsKey, this.textField)
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
        this.curPopupsVisible = true
        this.curPopupsKey = codeField + this.$utils.generateId()
      }
    },
    // 获取组件回传值
    // val:值, codeField:绑定formField的字段名称, comType:组件类型（预留）
    getComponentCode(val, txt, codeField, comType, popupsKey, textField) {
      this.modelCode = val
      this.modelText = txt
      this.curPopupsVisible = false
      this.curPopupsKey = codeField + this.$utils.generateId()
      this.sendCode()
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

// ==================================== 视图（不含嵌套视图模板）混入对象 ==============================
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
    // 对应弹窗的key
    popupsKey: { type: String, default: '' },
    // 返回code字段（从弹窗返回的code字段），用于sendCode()中，优先级高于sendCode参数
    returnCodeField: { type: String, default: '' },
    // 返回text字段（从弹窗返回的text字段），用于sendCode()中，优先级高于sendCode参数
    returnTextField: { type: String, default: '' }

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
      popupsPageCode: ''

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
    // 调用嵌套视图模板方法
    queryTable(page, dataType, size, filterObj, cb) {
      debugger
      // validpopups 组件弹窗  validpage 表单查询
      this.$utils.validataMoth(this, 'validpage')
      if (this.valid) {
        this.resetKey()
        this.$refs.multipleTable.queryTable(page, dataType, size, filterObj, cb)
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
      this.editPopupsKey = this.$utils.generateId()
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
      this.editPopupsKey = this.$utils.generateId()
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
      this.$emit('changeCode', code, text, this.codeField, this.comType, this.popupsKey)
    },
    // 文本框focus事件
    sendFocusCode() {
      this.$emit('focusCode', this.modelCode, this.modelText, this.codeField, this.comType, this.popupsKey)
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

// 单网格视图/弹窗模板混入对象
// 使用场景：单网格模板使用（只适用于模板）
export const oneTableTemplateMixins = {
  props: {
    // 动态按钮
    dynamicButtons: { type: Array, default: function() { return [] } },
    // 动态组件
    dynamicComponents: { type: Array, default: function() { return [] } },
    // 动态网格列
    dynamicTableCols: { type: Array, default: function() { return [] } },
    // 动态查询条件对象
    dynamicFormFields: { type: Object, default: function() { return {} } },
    // 动态API配置
    dynamicApiConfig: { type: Object, default: function() { return {} } },
    // 是否显示网格选择列
    dynamicIsShowSelect: { type: Boolean, default: true },
    // 是否显示更多按钮
    dynamicIsShowMoreBtn: { type: Boolean, default: true },
    // 默认显示组件数量
    dynamicDefalutCount: { type: Number, default: 0 },
    // 是否初始化网格
    dynamicIsInitTable: { type: Boolean, default: false },
    // 行拖动/列拖动：只能二选一，列拖动优先
    // 是否行拖动
    dynamicIsRowDrop: { type: Boolean, default: false },
    // 是否列拖动
    dynamicIsColumnDrop: { type: Boolean, default: false },
    // 导出Excel文件名称
    dynamicExcelName: { type: String, default: '' },
    // 导出Excel文件Sheet名称
    dynamicExcelSheetName: { type: String, default: '' },
    // 其它高度
    dynamicTableOtherHeight: { type: Number, default: 0 },
    // 是否进行列排序
    dynamicSortable: { type: Boolean, default: false },
    // 更多条件是否使用浮层
    isAbsolute: { type: Boolean, default: true },
    // 分页组件最大页码按钮数（大于等于 5 且小于等于 21 的奇数）
    pagerCount: { type: Number, default: 7 },
    // 是否设置默认品牌
    isSetDefaultBrand: { type: Boolean, default: true }
  },
  data() {
    return {
      // 是否table下的组件
      isShowComponent: true,
      // 数据列表
      list: null,
      // 加载中
      listLoading: false,
      // 设置网格总共的条数，查询完更改
      pageTotal: 0,
      // 下拉查询条件
      listQuery: {
        pageIndex: 1,
        pageSize: 10
      },
      // API配置对象
      apiConfig: this.dynamicApiConfig,
      // 组件控件
      tableComponents: this.dynamicComponents,
      // 按钮控件
      tableButtons: this.dynamicButtons,
      // 网格动态生成列
      tableCols: this.dynamicTableCols,
      // 网格拖动列
      dropTableCols: this.copyTableCols(this.dynamicTableCols),
      // 表单查询数据
      formField: this.dynamicFormFields,
      // 是否显示网格选择列
      isShowSelect: this.dynamicIsShowSelect,
      // 是否显示更多按钮
      isShowMoreBtn: this.dynamicIsShowMoreBtn,
      // 默认显示组件数量
      defalutCount: this.dynamicDefalutCount,
      // 是否初始化网格数据
      isInitTable: this.dynamicIsInitTable,
      // 是否网格行拖动，列拖动优先
      isRowDrop: this.dynamicIsRowDrop && !this.dynamicIsColumnDrop,
      // 是否网格列拖动
      isColumnDrop: this.dynamicIsColumnDrop,
      // 导出Excel文件名称
      excelName: this.dynamicExcelName !== '' ? this.dynamicExcelName : (this.dynamicApiConfig.ServiceCode || 'export_data'),
      excelSheetName: this.dynamicExcelSheetName !== '' ? this.dynamicExcelSheetName : (this.dynamicApiConfig.ServiceCode || 'export_data'),
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
      // 其它高度
      tableOtherHeight: this.dynamicTableOtherHeight,
      // 更多按钮图标
      moreBtnIcon: 'el-icon-plus',
      // 是否显示更多查询条件
      toggleParam: false,
      // 是否进行列排序
      sortable: this.dynamicSortable,
      // 是否已经执行过updated
      isUpdated: false,
      // 网格Key
      oneTableKey: 'oneTableKey'
    }
  },
  created() {
    // 设置品牌默认值
    if (this.formField.carBrandCode === '' && this.isSetDefaultBrand === true) {
      this.formField.carBrandCode = this.$store.getters.orgInfo.BRAND_CODE
    }
    this.backFormField = JSON.parse(JSON.stringify(this.formField))
    // 根据动态列获取字段
    if (this.tableCols.length > 0) {
      this.apiQueryRow = this.$utils.getArrayFromJsonArray(this.tableCols.filter(o => o.prop !== 'controlBtn'), 'prop')
    }
    // 初始化数据
    if (this.isInitTable === true) {
      this.queryTable(1)
    }
  },
  mounted() {
    // 网格拖动-行拖动，列拖动优先
    if (this.isRowDrop === true) {
      this.rowDrop()
    }
    // 网格拖动-列拖动
    if (this.isColumnDrop === true) {
      this.columnDrop()
    }
    // 设置网格高度自适应
    window.addEventListener('resize', () => {
      this.setTableHeight(true)
    })
    // 隐藏更多按钮
    this.hideMoreBtn()
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
    // 查询方法（apiConfig:api配置对象，apiQueryRow:表格中台返回网格的字段）
    // dataType：查询类型（null/空：默认为返回json格式，excel：导出excel）（注：由于mock没有模拟文件流返回，所以mock请求方式下导出excel文件内容还是json）
    // size：导出excel时设置size
    // filterObj：过滤对象
    // cb：回调函数
    queryTable(page, dataType, size, filterObj, cb) {
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
          pageSize: size || this.listQuery.pageSize,
          pageIndex: page || this.listQuery.pageIndex,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: this.formField
        }
      }
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj)
      // 构建导出Excel参数
      if (dataType === 'excel') {
        this.buildExportParam(queryObj, paramD)
      }
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (response.result === '0') {
          this.listLoading = false
          return
        }
        if (dataType === 'excel') {
          // 下载Excel
          this.downloadExcel(response)
        } else {
          // 返回json
          if (response.data[queryObj.apiConfig.ServiceCode].result === '1' && response.data[queryObj.apiConfig.ServiceCode].rows) {
            if (page) {
              // 查询完返回指定的page页数
              this.listQuery.pageIndex = page
            }
            this.pageTotal = response.data[queryObj.apiConfig.ServiceCode].records
            var tmpLst = this.$utils.changeToOneDeepArray(response.data[queryObj.apiConfig.ServiceCode].rows)
            if (filterObj && filterObj.key && filterObj.val) {
              tmpLst = tmpLst.filter(o => o[filterObj.key] === filterObj.val)
            }
            for (var i = 0; i < tmpLst.length; i++) {
              if (!tmpLst[i].index) {
                tmpLst[i].index = i
              }
            }
            this.list = tmpLst
          }
        }
        if (typeof cb === 'function') {
          cb.call(this, response)
        }

        this.listLoading = false
      })
    },
    // 同步（syncFields：同步字段（多个以“,”隔开））
    synchrony(syncFields) {
      if (this.$refs.multipleTable && this.$refs.multipleTable.selection) {
        // 获取选择行的值 this.$refs.multipleTable获取网格  需要在网格添加ref="multipleTable"
        const selectData = this.$refs.multipleTable.selection
        if (selectData.length > 0) {
          var selectIndexSort = []
          for (var k in selectData) {
            selectIndexSort.push(selectData[k].index)
          }
          // 选择行重新排序
          selectIndexSort.sort(function(a, b) {
            return a > b ? 1 : -1
          })
          for (var i = 1; i < selectIndexSort.length; i++) {
            // 将选择第一行的某个字段数据赋给其他选择行, 可以多个，以“,”隔开
            if (syncFields.indexOf(',') > -1) {
              var arrSyncFields = syncFields.split(',')
              for (var j = 0; j < arrSyncFields.length; j++) {
                this.list[selectIndexSort[i]][arrSyncFields[j]] = this.list[selectIndexSort[0]][arrSyncFields[j]]
              }
            } else {
              this.list[selectIndexSort[i]][syncFields] = this.list[selectIndexSort[0]][syncFields]
            }
          }
        }
      }
    },
    // 重置
    reset() {
      this.formField = JSON.parse(JSON.stringify(this.backFormField))
    },
    // 导出网格
    // pageSize=-1：全部符合条件的记录
    exportExcel(excelName, excelSheetName, pageSize) {
      if (excelName) {
        this.excelName = excelName
      } else {
        if (this.$route.matched.length > 0 && this.$route.matched[this.$route.matched.length - 1].meta) {
          const now = this.$utils.parseTime(new Date(), '{y}{m}{d}{h}{i}{s}')
          this.excelName = this.$route.matched[this.$route.matched.length - 1].meta.title + now
        }
      }
      if (excelSheetName) {
        this.excelSheetName = excelSheetName
      } else {
        this.excelSheetName = this.excelName
      }
      this.queryTable(1, 'excel', pageSize || -1)
    },
    // 构建导出Excel中台参数
    buildExportParam(queryObj, paramsObj) {
      var tmpCols = this.tableCols.filter(o => o.hidden !== true)
      tmpCols = JSON.parse(JSON.stringify(tmpCols))
      // 网格列对象转为excel列对象
      var excelCols = {}
      for (var i = 0; i < tmpCols.length; i++) {
        if (tmpCols[i].prop !== 'controlBtn') {
          tmpCols[i].prop = this.$utils.getExportStringFromString(tmpCols[i].prop)
          excelCols[tmpCols[i].prop] = tmpCols[i].label
        }
      }
      // 数据类型
      paramsObj.dataType = 'excel'
      // excel文件名称
      paramsObj.excelName = this.excelName
      // 根据请求API描述excel数据对象
      paramsObj.excels = [{
        // excel sheet名称
        title: this.excelSheetName,
        // 对应API服务编码
        actionName: queryObj.apiConfig.ServiceCode,
        // excel列
        columns: excelCols
      }]
    },
    // 下载Excel
    downloadExcel(data) {
      this.$utils.downloadFile(data, this.excelName)
    },
    // 选中网格行
    handleTableRowChange(val) {
      this.currentRow = val
      // 判断父组件是否需要接收选中行数据
      if (this.$parent.clickRowsData !== undefined) {
        this.$parent.clickRowsData = this.currentRow
      }
      // 判断父组件是否需要处理选中事件
      if (typeof this.$parent.selectRowsData === 'function') {
        this.$parent.selectRowsData(this.currentRow)
      } else if (this.$parent.$parent && typeof this.$parent.$parent.selectRowsData === 'function') {
        this.$parent.$parent.selectRowsData(this.currentRow)
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
    // val:值, codeField:绑定formField的字段名称, comType:组件类型（预留），textField：只有非propus有效
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
    // val:值, codeField:绑定formField的字段名称, comType:网格行索引（row.index），textField：只有非propus有效
    getRowComponentCode(val, txt, codeField, comType, popupsKey, textField) {
      switch (codeField) {
        default:
          // 普通赋值
          if (this.list[comType].hasOwnProperty(codeField)) {
            this.list[comType][codeField] = val
          }
          if (textField && this.list[comType].hasOwnProperty(textField)) {
            this.list[comType][textField] = txt
          }
          break
      }
    },
    // 设置网格高度
    setTableHeight(isResize) {
      this.$nextTick(() => {
        this.tableHeight = this.$utils.setTableHeight(this, isResize, this.tableHeight)
      })
    },
    // 隐藏more btn
    hideMoreBtn() {
      var maxControlCount = this.defalutCount > 0 ? this.defalutCount : 4
      if (this.isShowMoreBtn === true && this.tableComponents.length <= maxControlCount) {
        this.isShowMoreBtn = false
      }
    },
    // 行拖动
    rowDrop() {
      const tbody = document.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      this.$Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.list.splice(oldIndex, 1)[0]
          _this.list.splice(newIndex, 0, currRow)
        }
      })
    },
    // 列拖动
    columnDrop() {
      const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
      this.$Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          // 减去“序号列”
          var oldIndex = evt.oldIndex - 1
          var newIndex = evt.newIndex - 1
          if (this.isShowSelect === true) {
            // 减去“选择”列
            oldIndex--
            newIndex--
          }
          const oldItem = this.dropTableCols[oldIndex]
          this.dropTableCols.splice(oldIndex, 1)
          this.dropTableCols.splice(newIndex, 0, oldItem)
        }
      })
    },
    // 复制网格字段
    copyTableCols(tableCols) {
      var colsObj = tableCols.filter(o => o.hidden !== true)
      // var cols = JSON.parse(JSON.stringify(colsObj))
      return colsObj
    }
  }
}

// 表单混入对象
// 使用场景：普通表单页面（只包含输入条件组件的页面（例如不包含网格））
export const formMixins = {
  props: {
    // 弹出是否显示
    popupsVisible: { type: Boolean, default: false },
    // 动态按钮
    dynamicButtons: { type: Array, default: function() { return [] } },
    // 动态组件
    dynamicComponents: { type: Array, default: function() { return [] } },
    // 动态查询条件对象
    dynamicFormFields: { type: Object, default: function() { return {} } },
    // 动态API配置
    dynamicApiConfig: { type: Object, default: function() { return {} } },
    // 控件label名称
    labelName: { type: String, default: '' },
    // 弹窗状态（add/edit/view）
    popupsState: '',
    // 标题（根据弹窗状态显示文本）
    dynamicTextMap: { type: Object, default: function() { return {} } },
    // 从网格传入的编辑行数据(json)
    dynamicEditRowData: { type: Object, default: function() { return {} } }
  },
  data() {
    return {
      // 弹出是否显示
      curPopupsVisible: this.popupsVisible,
      // 控件label名称
      curLabelName: this.labelName,
      // API配置对象
      apiConfig: this.dynamicApiConfig,
      // 组件控件
      tableComponents: this.dynamicComponents,
      // 按钮控件
      tableButtons: this.dynamicButtons,
      // 表单查询数据
      formField: this.dynamicFormFields,
      // 表单查询数据备份对象（用于重置
      backFormField: {},
      // 标题（根据弹窗状态显示文本）
      textMap: this.dynamicTextMap,
      // 是否使用网格数据赋值formField
      isUseRowData: true,
      // 从网格传入的编辑行数据(json)
      editRowData: this.dynamicEditRowData,
      // 判断全部必填是否已完成
      valid: true,
      // 必填项查询组件
      validateValue: [],
      // 弹窗网格KEY
      popupsTableKey: 'popupsTableKey',
      // 弹窗页面标识（由引用页面赋值）
      popupsPageCode: '',
      // 是否设置默认品牌
      isSetDefaultBrand: { type: Boolean, default: true }
    }
  },
  created() {
    var that = this
    if (that.tableComponents.length === 0) {
      if (that.popupsPageCode && that.popupsPageCode.length > 0) {
        // 读取弹窗配置信息
        CacheConfig.initData(that.popupsPageCode, function() {
          if (CacheConfig.cacheData[that.popupsPageCode] && CacheConfig.cacheData[that.popupsPageCode].formComponents.length > 0) {
            that.tableComponents = CacheConfig.cacheData[that.popupsPageCode].formComponents
          } else {
            that.tableComponents = that.staticTableComponents
          }
          that.popupsTableKey = that.$utils.generateId()
        })
      } else {
        that.tableComponents = that.staticTableComponents
      }
    }
    // 赋值formField
    if (this.popupsState === 'edit') {
      if (this.isUseRowData) {
        for (var key in this.formField) {
          if (this.editRowData[key]) {
            this.formField[key] = this.editRowData[key]
          } else {
            if (typeof key === 'Number') {
              this.formField[key] = 0
            } else if (typeof key === 'String') {
              this.formField[key] = ''
            }

            // 两层处理
            for (var rKey in this.editRowData) {
              if (rKey.indexOf('.') > -1) {
                var tmpKey = rKey.split('.')[1]
                if (tmpKey === key) {
                  this.formField[tmpKey] = this.editRowData[rKey]
                  break
                }
              }
            }
          }
        }
      }
    }
    // 备份fromField（用于重置）
    // 初始化品牌
    if (this.formField.carBrandCode === '' && this.isSetDefaultBrand === true) {
      this.formField.carBrandCode = this.$store.getters.orgInfo.BRAND_CODE
    }
    this.backFormField = JSON.parse(JSON.stringify(this.formField))

    // 联动组件获取父组件传值
    that.$nextTick(() => {
      // 监听
      that.watchComp(true)
    })
  },
  mounted() { },
  methods: {
    // 重置
    reset() {
      this.formField = JSON.parse(JSON.stringify(this.backFormField))
    },
    // 关闭
    close(type) {
      this.sendCode(type)
    },
    // 是否新增
    isAdd() {
      return this.popupsState === '' || this.popupsState === 'add'
    },
    // 保存空方法（请在页面上替换此方法）
    save() {
      // validpopup  弹窗  validpage 页面
      this.$utils.validataMoth(this, 'validpopup')
      if (this.valid) {
        this.saveForm()
      }
    },

    // 保存表单
    saveForm(saveObj) {
      const queryObj = {
        // 保存mutation
        type: 'mutation',
        // api配置
        apiConfig: this.apiConfig,
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: saveObj || this.formField
        }
      }
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj)
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === '1') {
          // 保存成功
          this.sendCode('1')
          this.$message({
            message: '保存成功',
            type: 'success',
            uration: 2000
          })
        } else {
          // 保存失败
          // this.sendCode('0')
          this.$message({
            message: '保存失败：' + response.data[queryObj.apiConfig.ServiceCode].msg,
            type: 'warn',
            uration: 2000
          })
        }
      })
    },
    // 关闭弹窗（type=1，保存成功）
    sendCode(type) {
      this.editRowData = {}
      this.$emit('close', type)
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
    // 联动组件获取父组件传值
    // isDialog:是否对话框内容（预留）
    // 监听parentFileds字段格式（type=show|value，show：监听组件显示，value：监听组件值，空：同value）：
    // 如：
    // 监听组件值传递：value:监听字段(父组件)1-对应子组件字段1|监听字段(父组件)2-对应子组件字段2
    // 监听组件显示：show:监听字段(父组件)-显示组件值-隐藏组件值
    watchComp(isDialog) {
      var that = this
      that.$utils.watchComp(that, isDialog, null, true)
    }
  }
}

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
      this.formField = JSON.parse(JSON.stringify(this.backFormField))
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

// 使用场景：左右网格混入模板（左右网格混入模板）
export const twoTableTemplateMixins = {
  props: {
    // 动态按钮
    dynamicButtons: { type: Array, default: function() { return [] } },
    // 动态组件
    dynamicComponents: { type: Array, default: function() { return [] } },
    // 动态网格列
    dynamicTableCols: { type: Array, default: function() { return [] } },
    // 动态查询条件对象
    dynamicFormFields: { type: Object, default: function() { return {} } },
    // 右侧网格对象
    rightTableObject: { type: Object, default: function() { return {} } },
    // 动态网格API配置
    dynamicApiConfig: { type: Object, default: function() { return {} } },
    // 其它高度
    dynamicTableOtherHeight: { type: Number, default: 0 },
    // 是否显示网格选择列
    dynamicIsShowSelect: { type: Boolean, default: false },
    // 是否显示更多按钮
    dynamicIsShowMoreBtn: { type: Boolean, default: true },
    // 是否行拖动
    dynamicIsRowDrop: { type: Boolean, default: false },
    // 设置菜单栏宽度
    dynamicWidth: { type: Number, default: 0 }

  },
  data() {
    return {
      // 数据列表
      list: null,
      // 右侧列表
      rightList: [],
      // 加载中
      listLoading: false,
      // 右侧加载中
      rightListLoading: false,
      // 设置网格总共的条数，查询完更改
      pageTotal: 0,
      rightpageTotal: 0,
      // 下拉查询条件
      listQuery: {
        pageIndex: 1,
        pageSize: 10
      },
      rightListQuery: {
        pageIndex: 1,
        pageSize: 10
      },
      // 右侧网格api对象
      apiRightTable: this.rightTableObject.apiConfig,
      apiConfig: this.dynamicApiConfig,
      // 右侧组件控件
      righttableComponents: this.rightTableObject.tableComponents,
      // 右侧按钮控件
      righttableButtons: this.rightTableObject.tableButtons,
      // 是否显示更多按钮
      isShowRightMoreBtn: this.rightTableObject.isShowRightMoreBtn,
      // 网格动态生成列
      righttableCols: this.rightTableObject.tableCols,
      // 是否显示右边网格选择列
      isShowRightSelect: this.rightTableObject.isShowSelect,
      // 组件控件
      tableComponents: this.dynamicComponents,
      // 按钮控件
      tableButtons: this.dynamicButtons,
      // 其它高度
      tableOtherHeight: this.dynamicTableOtherHeight,
      // 网格动态生成列
      tableCols: this.dynamicTableCols,
      // 表单查询数据
      formField: this.dynamicFormFields,
      // 表单查询数据
      rightFormField: this.rightTableObject.formField,
      // 是否显示网格选择列
      isShowSelect: this.dynamicIsShowSelect,
      // 是否显示更多按钮
      isShowMoreBtn: this.dynamicIsShowMoreBtn,
      // 表单查询数据备份对象（用于重置
      backFormField: {},
      // 需要中台返回网格的字段
      apiQueryRow: [],
      apiRightQueryRow: [],
      // 网格当前选中行
      currentRow: null,
      multipleSelection: [],
      multipleLeftSelection: [],
      // 右侧网格当前选中行
      currentRightRow: null,
      // 网格高度
      tableHeight: 310,
      RightTableHeight: 310,
      // 高度margin-top/bottom值
      tableMarginHeight: 21,
      // 更多按钮图标
      moreBtnIcon: 'el-icon-plus',
      rightMoreBtnIcon: 'el-icon-plus',
      // 网格拖动列
      dropTableCols: this.copyTableCols(this.dynamicTableCols),
      // 右侧网格拖动列
      dropRightTableCols: this.copyTableCols(this.rightTableObject.tableCols),
      // 是否网格行拖动，列拖动优先
      isRowDrop: this.dynamicIsRowDrop && !this.dynamicIsColumnDrop,
      // 是否显示更多查询条件
      toggleParam: false,
      // 是否显示右侧更多查询条件
      toggleParamRight: false,
      // 是否已经执行过updated
      isUpdated: false
    }
  },
  created() {
    // 根据动态列获取字段
    if (this.tableCols.length > 0) {
      this.apiQueryRow = this.$utils.getArrayFromJsonArray(this.tableCols.filter(o => o.prop !== 'controlBtn'), 'prop')
    }
    // 根据动态列获取字段
    if (this.rightTableObject.tableCols.length > 0) {
      this.apiRightQueryRow = this.$utils.getArrayFromJsonArray(this.rightTableObject.tableCols.filter(o => o.prop !== 'controlBtn'), 'prop')
    }
    // 初始化数据
    if (this.isInitTable === true) {
      this.queryTable(1)
      this.queryRightTable(1)
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.setTableHeight(true)
      this.setRightTableHeight(true)
    })
    this.$nextTick(() => {
      this.setTableHeight()
      this.setRightTableHeight()
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

    // 定义空方法，用于获取下拉框数据（这里需要每个组件实现这个方法）
    // 查询左侧网格数据方法（apiConfig:api配置对象，apiQueryRow:表格中台返回网格的字段）
    queryTable(page, cb) {
      this.currentRow = null
      this.listLoading = true
      this.rightListLoading = false
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
        if (response.result === '0') {
          this.listLoading = false
          return
        }
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
          if (typeof cb === 'function') {
            cb.call(this, this.list)
          }
        }
      })
    },
    // twoTable 选中右边的多行或单行数据
    changeFun(val) {
      this.multipleSelection = val
    },
    // twoTable 选中左边的多行或单行数据
    changeRowleftFun(val) {
      this.multipleLeftSelection = val
    },
    // 查询右侧网格数据的方法（apiConfig:api配置对象，apiQueryRow:表格中台返回网格的字段）
    queryRightTable(page, queryField, cb) {
      this.currentRightRow = null
      this.rightListLoading = true
      const queryObj = {
        // api配置
        apiConfig: this.apiRightTable,
        // 需要调用的API服务配置
        apiServices: [{
          // 表格中台返回网格的字段
          apiQueryRow: this.apiRightQueryRow
        }],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: this.listQuery.pageSize,
          pageIndex: page || this.listQuery.pageIndex,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: queryField
        }
      }
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj)
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (response.result === '0') {
          this.rightListLoading = false
          return
        }
        if (response.data[queryObj.apiConfig.ServiceCode].result === '1' && response.data[queryObj.apiConfig.ServiceCode].rows) {
          if (page) {
            // 查询完返回指定的page页数
            this.listQuery.pageIndex = page
          }
          this.rightpageTotal = response.data[queryObj.apiConfig.ServiceCode].records
          var tmpLst = this.$utils.changeToOneDeepArray(response.data[queryObj.apiConfig.ServiceCode].rows)
          for (var i = 0; i < tmpLst.length; i++) {
            if (!tmpLst[i].index) {
              tmpLst[i].index = i
            }
          }
          this.rightList = tmpLst
          this.rightListLoading = false
        }
        if (typeof cb === 'function') {
          this.$nextTick(() => {
            cb.call(this, this.rightList)
          })
        }
      })
    },
    // 重置
    reset() {
      this.rightFormField = JSON.parse(JSON.stringify(this.backFormField))
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

      this.backFormField = JSON.parse(JSON.stringify(val))
      this.backFormField.index = undefined
      // 给右网格保存条件赋值
      for (var key in val) {
        if (this.rightFormField[key] !== undefined && key !== 'index') {
          this.rightFormField[key] = val[key]
        } else {
          // 两层处理
          for (var rKey in this.rightFormField) {
            if (rKey.indexOf('.') > -1) {
              var tmpKey = rKey.split('.')[1]
              if (tmpKey === key) {
                this.rightFormField[tmpKey] = val[rKey]
                break
              }
            }
          }
        }
      }
    },
    // 右侧选中网格行
    handleTableRightRowChange(val) {
      this.currentRow = val
      // 判断父组件是否需要接收选中行数据
      if (this.$parent.clickRightRowsData !== undefined) {
        this.$parent.clickRightRowsData = this.currentRow
      }
      this.rightFormField.index = undefined
      for (var key in val) {
        if (this.rightFormField[key] !== undefined && key !== 'index') {
          this.rightFormField[key] = val[key]
        }
      }
    },
    // // 把每一行的索引放进row      为了解决鼠标经过不断刷新问题弃用这种方式   luojx 2019-9-9
    // tableRowClassName({ row, rowIndex }) {
    //   row.index = rowIndex
    // },
    // // 右侧把每一行的索引放进row      为了解决鼠标经过不断刷新问题弃用这种方式   luojx 2019-9-9
    // rightTableRowClassName({ row, rowIndex }) {
    //   row.index = rowIndex
    // },
    // 初始化list的索引
    initListIndex() {
      var that = this
      for (var li = 0; li < that.list.length; li++) {
        that.list[li].index = li
      }
    },
    // 初始化右边网格list的索引
    initRightListIndex() {
      var that = this
      for (var li = 0; li < that.rightList.length; li++) {
        that.rightList[li].index = li
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
    // 右侧更多按钮点击事件
    changeToggleParamRight() {
      this.toggleParamRight = !this.toggleParamRight
      if (this.toggleParamRight) {
        this.rightMoreBtnIcon = 'el-icon-minus'
      } else {
        this.rightMoreBtnIcon = 'el-icon-plus'
      }
      this.setRightTableHeight()
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

    // 处理右侧网格每页显示改变事件
    rightHandleSizeChange(val) {
      this.rightListQuery.pageSize = val
      this.queryRightTable()
    },

    // 右侧网格当前页记录
    rightHandleCurrentChange(val) {
      this.rightListQuery.pageIndex = val
      this.queryRightTable()
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
    // 获取组件回传值
    // val:值, codeField:绑定formField的字段名称, comType:组件类型（预留）
    getRightComponentCode(val, txt, codeField, comType, popupsKey) {
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
        this.rightFormField[codeField] = val
      } else {
        // 普通赋值
        this.rightFormField[codeField] = val
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
    // 获取右侧网格focus事件传回值
    // val:值, codeField:绑定popupsState的字段名称, comType:组件类型（预留）
    getRightFocusCode(val, txt, codeField, comType, popupsKey) {
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
    // 获取（网格中）组件回传值
    // val:值, codeField:绑定formField的字段名称, comType:网格行索引（row.index）
    getRightRowComponentCode(val, txt, codeField, comType, popupsKey, textField) {
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
    },
    // 设置网格高度
    setRightTableHeight(isResize) {
      this.$nextTick(() => {
        this.RightTableHeight = this.$utils.setTableHeight(this, isResize, this.RightTableHeight)
      })
    }
  }
}

// 使用场景：左网格右表单（网格和表单混入模板）
export const formTableTemplateMixins = {
  props: {
    // 动态按钮
    dynamicButtons: { type: Array, default: function() { return [] } },
    // 动态组件
    dynamicComponents: { type: Array, default: function() { return [] } },
    // 动态网格列
    dynamicTableCols: { type: Array, default: function() { return [] } },
    // 动态查询条件对象
    dynamicFormFields: { type: Object, default: function() { return {} } },
    // 动态查询条件对象
    rightdynamicFormFields: { type: Object, default: function() { return {} } },
    // 表单对象
    formObject: { type: Object, default: function() { return {} } },
    // 动态网格API配置
    dynamicApiConfig: { type: Object, default: function() { return {} } },
    // 是否显示网格选择列
    dynamicIsShowSelect: { type: Boolean, default: false },
    // 是否显示更多按钮
    dynamicIsShowMoreBtn: { type: Boolean, default: true },
    // 是否行拖动
    dynamicIsRowDrop: { type: Boolean, default: false },
    // 设置菜单栏宽度
    dynamicWidth: { type: Number, default: 0 },
    // 设置右边form表单标题
    title: { type: String, default: '' }

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
      siderWidth: '280px',
      title: this.title,
      // 树的Api对象
      apiTree: this.formObject.treeApiConfig,
      // 树的排序对象
      defaultProps: this.formObject.defaultProps,
      // API配置对象
      apiConfig: this.dynamicApiConfig,
      formtableComponents: this.formObject.tableComponents,
      // 表单动态按钮
      formtableButtons: this.formObject.tableButtons,
      // 组件控件
      tableComponents: this.dynamicComponents,
      // 按钮控件
      tableButtons: this.dynamicButtons,
      // 网格动态生成列
      tableCols: this.dynamicTableCols,
      // 表单查询数据
      formField: this.dynamicFormFields,
      // 右侧表单查询数据
      rightFormField: this.rightdynamicFormFields,
      // 右侧表单查询数据
      resrightFormField: this.formObject.formField,
      // 是否显示网格选择列
      isShowSelect: this.dynamicIsShowSelect,
      // 是否显示更多按钮
      isShowMoreBtn: this.dynamicIsShowMoreBtn,
      // 表单查询数据备份对象（用于重置
      backRightFormField: {},
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
      toggleParam: false,
      // 是否已经执行过updated
      isUpdated: false

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
  methods: {

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
        if (response.result === '0') {
          this.listLoading = false
          return
        }
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
      this.formField = JSON.parse(JSON.stringify(this.backFormField))
    },

    // 重置
    rightReset() {
      this.formObject.formField = JSON.parse(JSON.stringify(this.backRightFormField))
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
      this.backRightFormField = val
      // 给右表单保存条件赋值
      for (var key in val) {
        if (this.formObject.formField[key] !== undefined) {
          this.formObject.formField[key] = val[key]
        } else {
          this.formObject.formField[key] = ''
          // 两层处理
          for (var rKey in this.formObject.formField) {
            if (rKey.indexOf('.') > -1) {
              var tmpKey = rKey.split('.')[1]
              if (tmpKey === key) {
                this.formObject.formField[tmpKey] = val[rKey]
                break
              }
            }
          }
        }
      }
    },
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

    // 获取组件回传值
    // val:值, codeField:绑定formField的字段名称, comType:组件类型（预留）
    getRightComponentCode(val, txt, codeField, comType, popupsKey, textField) {
      if (comType === 'propus' && !this.$utils.isEmpty(popupsKey)) {
        // 弹窗赋值
        // 根据popupsKey找到对应的弹窗key的弹窗组件
        var dynamicPopup = this.formObject.tableComponents.filter(o => o.compKey === popupsKey)
        if (dynamicPopup.length > 0) {
          if (dynamicPopup[0].popups && dynamicPopup[0].popups.state) {
            // 弹窗状态不是为已打开才进行计算
            dynamicPopup[0].popups.state = false
            dynamicPopup[0].popups.key = codeField + this.$utils.generateId()
          }
        }
      }
      // 赋值
      if (codeField in this.formObject.formField) {
        this.formObject.formField[codeField] = val
      }
      if (textField in this.formObject.formField) {
        this.formObject.formField[textField] = txt
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

    // 获取右侧网格focus事件传回值
    // val:值, codeField:绑定popupsState的字段名称, comType:组件类型（预留）
    getRightFocusCode(val, txt, codeField, comType, popupsKey) {
      // 只有popupsField和popupsKey都有传值才进行计算弹窗是否显示
      if (!this.$utils.isEmpty(codeField) && !this.$utils.isEmpty(popupsKey)) {
        // 根据popupsKey找到对应的弹窗key的弹窗组件
        var dynamicPopup = this.formObject.tableComponents.filter(o => o.compKey === popupsKey)
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

// 使用场景：上网格和下表单混入模板（网格和表单混入模板）
export const tableFormTemplateMixins = {
  props: {
    // 动态按钮
    dynamicButtons: { type: Array, default: function() { return [] } },
    // 动态组件
    dynamicComponents: { type: Array, default: function() { return [] } },
    // 动态网格列
    dynamicTableCols: { type: Array, default: function() { return [] } },
    // 动态查询条件对象
    dynamicFormFields: { type: Object, default: function() { return {} } },
    // 动态查询条件对象
    rightdynamicFormFields: { type: Object, default: function() { return {} } },
    // 表单对象
    formObject: { type: Object, default: function() { return {} } },
    // 动态网格API配置
    dynamicApiConfig: { type: Object, default: function() { return {} } },
    // 其他高度
    dynamicTableOtherHeight: { type: Number, default: 0 },
    // 是否显示网格选择列
    dynamicIsShowSelect: { type: Boolean, default: false },
    // 是否显示更多按钮
    dynamicIsShowMoreBtn: { type: Boolean, default: true },
    // 是否行拖动
    dynamicIsRowDrop: { type: Boolean, default: false },
    // 设置菜单栏宽度
    dynamicWidth: { type: Number, default: 0 },
    // 设置右边form表单标题
    title: { type: String, default: '' }

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
      siderWidth: '280px',
      // 树的Api对象
      apiTree: this.formObject.treeApiConfig,
      // 树的排序对象
      defaultProps: this.formObject.defaultProps,
      // API配置对象
      apiConfig: this.dynamicApiConfig,
      formtableComponents: this.formObject.tableComponents,
      // 表单动态按钮
      formtableButtons: this.formObject.tableButtons,
      // 组件控件
      tableComponents: this.dynamicComponents,
      // 按钮控件
      tableButtons: this.dynamicButtons,
      tableOtherHeight: this.dynamicTableOtherHeight,
      // 网格动态生成列
      tableCols: this.dynamicTableCols,
      // 表单查询数据
      formField: this.dynamicFormFields,
      // 右侧表单查询数据
      rightFormField: this.rightdynamicFormFields,
      // 右侧表单查询数据
      resrightFormField: this.formObject.formField,
      // 是否显示网格选择列
      isShowSelect: this.dynamicIsShowSelect,
      // 是否显示更多按钮
      isShowMoreBtn: this.dynamicIsShowMoreBtn,
      // 表单查询数据备份对象（用于重置
      backRightFormField: {},
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
    // 隐藏更多按钮
    this.hideMoreBtn()
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
    // 定义空方法，用于获取下拉框数据（这里需要每个组件实现这个方法）
    // 查询方法（apiConfig:api配置对象，apiQueryRow:表格中台返回网格的字段）
    queryTable(page) {
      // validpopups 弹窗  validpage 页面
      this.$utils.validataMoth(this, 'validpage')
      if (this.valid) {
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
          if (response.result === '0') {
            this.listLoading = false
            return
          }
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
      }
    },
    // 重置
    reset() {
      this.formField = JSON.parse(JSON.stringify(this.backFormField))
    },

    // 重置
    rightReset() {
      this.formObject.formField = JSON.parse(JSON.stringify(this.backRightFormField))
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
      // this.backRightFormField = val
      // // 给右表单保存条件赋值
      // for (var key in val) {
      //   if (this.formObject.formField[key] !== undefined) {
      //     this.formObject.formField[key] = val[key]
      //   } else {
      //     this.formObject.formField[key] = ''
      //     // 两层处理
      //     for (var rKey in this.formObject.formField) {
      //       if (rKey.indexOf('.') > -1) {
      //         var tmpKey = rKey.split('.')[1]
      //         if (tmpKey === key) {
      //           this.formObject.formField[tmpKey] = val[rKey]
      //           break
      //         }
      //       }
      //     }
      //   }
      // }
    },
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
    // 隐藏more btn
    hideMoreBtn() {
      var maxControlCount = this.defalutCount > 0 ? this.defalutCount : 4
      if (this.isShowMoreBtn === true && this.tableComponents.length <= maxControlCount) {
        this.isShowMoreBtn = false
      }
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

    // 获取组件回传值
    // val:值, codeField:绑定formField的字段名称, comType:组件类型（预留）
    getRightComponentCode(val, txt, codeField, comType, popupsKey, textField) {
      if (comType === 'propus' && !this.$utils.isEmpty(popupsKey)) {
        // 弹窗赋值
        // 根据popupsKey找到对应的弹窗key的弹窗组件
        var dynamicPopup = this.formObject.tableComponents.filter(o => o.compKey === popupsKey)
        if (dynamicPopup.length > 0) {
          if (dynamicPopup[0].popups && dynamicPopup[0].popups.state) {
            // 弹窗状态不是为已打开才进行计算
            dynamicPopup[0].popups.state = false
            dynamicPopup[0].popups.key = codeField + this.$utils.generateId()
          }
        }
      }
      // 赋值
      if (codeField in this.formObject.formField) {
        this.formObject.formField[codeField] = val
      }
      if (textField in this.formObject.formField) {
        this.formObject.formField[textField] = txt
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

    // 获取右侧网格focus事件传回值
    // val:值, codeField:绑定popupsState的字段名称, comType:组件类型（预留）
    getRightFocusCode(val, txt, codeField, comType, popupsKey) {
      // 只有popupsField和popupsKey都有传值才进行计算弹窗是否显示
      if (!this.$utils.isEmpty(codeField) && !this.$utils.isEmpty(popupsKey)) {
        // 根据popupsKey找到对应的弹窗key的弹窗组件
        var dynamicPopup = this.formObject.tableComponents.filter(o => o.compKey === popupsKey)
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

// 通用计算组件
export const contsMixins = {
  props: {
    contWay: { type: Array, default: function() { return [] } }
  },
  data() {
    return {
      resulted: this.getResulted()
    }
  },
  methods: {
    getResulted() {
      var val = this.contWay[1]
      var row = this.contWay[0]
      if (val !== undefined && val !== '') {
        for (var i in row) {
          if (val.indexOf(i) >= 0) {
            val = val.replace(new RegExp(i, 'g'), row[i])
          }
        }
        eval('val=' + val)
        return val
      }
    }
  },
  computed: {
    // resulted() {
    //   return this.getResulted()
    // }
  }
}

// 文本标签
// 使用场景：文本标签
export const labelMixins = {
  props: {
    // label名称
    labelName: { type: String, default: '' },
    span: { type: Number, default: 6 }
  },
  data() {
    return {
      curLabelName: this.labelName
    }
  }
}

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
*/
