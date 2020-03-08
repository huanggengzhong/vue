/**
 * description: 下拉框组件混入对象
 * author: zxuan
 * createdDate: 2019-10-18
 */
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
   // 下拉框中必须的查询条件字段，设置后只有listQuery中对应该字段有值才会进行查询，如：mustField="carBrandCode"
   // 如：
   // 格式如：字段1|字段2
   mustFields: { type: String, default: '' },
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
   code(curVal, oldVal) {
     this.modelCode = this.isMul === true ? (curVal !== '' ? curVal.split(',') : []) : curVal || ''
   },
   curTableRow: {
     handler(newValue, oldValue) {
       // 网格中组件刷新
       if (this.isColComp === true) {
         var tmpNew = {}
         var tmpOld = {}
         for (var key in this.listQuery) {
           if (newValue.hasOwnProperty(key)) {
             tmpNew[key] = newValue[key]
           }
           if (oldValue.hasOwnProperty(key)) {
             tmpOld[key] = oldValue[key]
           }
         }
         // 设置网格中组件查询字段（如果当前组件存在于网格中）
         this.$utils.setRowQueryFields(this, 'listQuery')
         if (this.apiConfig !== null &&
             JSON.stringify(tmpNew) !== JSON.stringify(tmpOld)) {
           this.queryTable(this.apiConfig, this.apiQueryRow)
         }
       }
     },
     deep: true
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
     // 判断必须查询条件字段
     if (this.mustFields && this.mustFields !== null) {
       const arrFields = this.mustFields.split('|')
       for (var i in arrFields) {
         if (!this.listQuery[arrFields[i]] || this.listQuery[arrFields[i]] === '') {
           this.optionDatas = []
           return
         }
       }
     }

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
