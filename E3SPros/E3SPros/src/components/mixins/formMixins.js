import { CacheConfig } from '@/cache/configCache/index'
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
    dynamicEditRowData: { type: Object, default: function() { return {} } },
    // 是否设置默认品牌
    isSetDefaultBrand: { type: Boolean, default: true }
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
      // 从网格传入的编辑行数据(json) 直接使用 dynamicEditRowData
      // editRowData: this.dynamicEditRowData,
      // 判断全部必填是否已完成
      valid: true,
      // 必填项查询组件
      validateValue: [],
      // 弹窗网格KEY
      popupsTableKey: 'popupsTableKey',
      // 弹窗页面标识（由引用页面赋值）
      popupsPageCode: '',
      // 初始化formField
      initFormField: null,
      // 是否不可编辑
      isNoEdit: false
    }
  },
  watch: {
    // 监听弹窗显示
    popupsVisible(val) {
      this.curPopupsVisible = val
      if (val === true) {
        this.execCreated()
        // 可编辑状态设置
        if (this.popupsState === 'edit') {
          this.isNoEdit = true
        } else {
          this.isNoEdit = false
        }
        this.setDisable()
      }
    }
  },
  created() {
    this.execCreated()
  },
  methods: {
    // 创建事件
    execCreated() {
      if (this.initFormField === null) {
        this.initFormField = JSON.parse(JSON.stringify(this.formField))
      }
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
            if (this.dynamicEditRowData[key]) {
              this.formField[key] = this.dynamicEditRowData[key]
            } else {
              if (typeof this.formField[key] === 'number') {
                this.formField[key] = 0
              } else if (typeof this.formField[key] === 'string') {
                this.formField[key] = ''
              }

              // 两层处理
              for (var rKey in this.dynamicEditRowData) {
                if (rKey.indexOf('.') > -1) {
                  var tmpKey = rKey.split('.')[1]
                  if (tmpKey === key) {
                    this.formField[tmpKey] = this.dynamicEditRowData[rKey]
                    break
                  }
                }
              }
            }
          }
        }
      } else {
        this.emptyFormField()
      }

      this.onCreated()

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
    // 其它初始化
    onCreated() {},
    // 初始化formField
    emptyFormField() {
      this.$utils.deepClone(this.formField, this.initFormField)
    },
    // 重置
    reset() {
      // this.formField = JSON.parse(JSON.stringify(this.backFormField))
      this.$utils.deepClone(this.formField, this.backFormField)
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
    // tableComponents 循环pageArea 分组
    getPageArea() {
      // 分组操作
      const arrPageArea = []
      if (this.tableComponents.filter(o => o.pageArea && o.pageArea !== '').length > 0) {
        for (let i = 0; i < this.tableComponents.length; i++) {
          if (this.tableComponents[i].pageArea) {
            // 有pageArea的情况
            if (arrPageArea.filter(o => o.pageArea === this.tableComponents[i].pageArea).length <= 0) {
              arrPageArea.push({ pageArea: this.tableComponents[i].pageArea })
            }
          } else {
            // 没有pageArea的情况
            this.tableComponents[i].pageArea = '其它信息'
            arrPageArea.push({ pageArea: this.tableComponents[i].pageArea })
          }
        }
        for (let j = 0; j < arrPageArea.length; j++) {
          if (arrPageArea[j].pageArea === '其它信息') {
            arrPageArea.splice(j, 1)
            const a = {}
            a.pageArea = '其它信息'
            arrPageArea.push(a)
          }
        }
      } else {
        arrPageArea.push({ pageArea: '' })
      }
      return arrPageArea
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
      // this.editRowData = {}
      // this.emptyFormField()
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
    },
    // 设置组件不可编辑
    // 读取parentFileds属性配置中的disabled
    // 监听parentFileds字段格式（disabled：设置组件不可编辑）：
    // 如：
    // 设置组件不可编辑：disabled:监听字段（监听空值）-需要对tableComponents中进行设置disabled的codeField-类型（监听字段为空时赋值给disabled值类型（true/false），默认空表示false）
    // 注意：必须设置disabled，如：disabled=null, parentFileds="disabled:carBrandCode-carBrandCode-false"
    setDisable(compObjName, isExecOther) {
      var that = this
      that.$utils.setDisable(that, compObjName, isExecOther)
    },
    // 设置组件不可编辑的其它设置（譬如：循环设置等）
    // 此方法为空方法，有需要的可以在页面/表单上自行覆盖重写
    otherSetDisable(that, compObjName) { }
  }
}
