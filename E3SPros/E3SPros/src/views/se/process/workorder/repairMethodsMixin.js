// 施工单页面数据处理
import '@/plugs/lodash.min'
export const repairMethodsMixin = {
  props: {

  },
  // 监听传入参数变化
  watch: {
    'menu.wi.visible': function menu1visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu1)
      } else {
        document.body.removeEventListener('click', this.closeMenu1)
      }
    },
    'menu.part.visible': function menu2visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu2)
      } else {
        document.body.removeEventListener('click', this.closeMenu2)
      }
    },
    'menu.other.visible': function menu3visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu3)
      } else {
        document.body.removeEventListener('click', this.closeMenu3)
      }
    },
    'saveData.isClean': function isClean() {
      this.saveData.isCleanB = (this.saveData.isClean === '1')
    },
    'saveData.isRescue': function isRescue() {
      this.saveData.isRescueB = (this.saveData.isRescue === '1')
    },
    'saveData.isFirst': function isFirst() {
      this.saveData.isFirstB = (this.saveData.isFirst === '1')
    },
    'saveData.saName': function saName() { // 监控服务代表姓名变化，给saCode赋值
      var tempCode = ''
      var BreakException = {}
      try {
        this.saEmpOptions.forEach(row => {
          if (row.text === this.saveData.saName) {
            tempCode = row.code
            throw BreakException
          }
        })
      } catch (e) {
        if (e !== BreakException) throw e
      }
      this.saveData.saCode = tempCode
    },
    'fastSearchModel.wiCodeOrName': function wiCodeOrName(newVal, oldVal) {
      this.debounceSearchWiFast()
    },
    'fastSearchModel.partCodeOrName': function partCodeOrName(newVal, oldVal) {
      this.debounceSearchPartFast()
    }
  },
  created() {
    // 初始化数据
    this.debounceSearchWiFast = _.debounce(this.searchWiFast, 800)
    this.debounceSearchPartFast = _.debounce(this.searchPartFast, 800)
  },
  computed: {
    payKindName: function() {
      if (this.payKind === '') return ''
      var items = this.payKindOptions.filter(o => o.code === this.payKind)
      if (items.length === 0) return ''
      return items[0].text
    },
    canSeeHistory: function() { // 能否查看维修履历，有VIN时
      return (this.saveData.vin != null && this.saveData.vin !== '')
    }
  },
  methods: {
    searchWiFast() { // 工时快速搜索输入时，查询工时编码和工时名称
      console.log('searchWiFast ' + new Date().toLocaleString())
      this.wiSearchDataList = [{
        wiCode: '加载中……',
        wiName: ''
      }]
      if (this.$utils.isEmpty(this.saveData.carTypeCode)) {
        this.wiSearchDataList = []
        this.$message({
          type: 'info',
          message: `请先选择客户`
        })
        return
      }
      this.fastSearchWiAPI()
      // TODO 查询接口并更新数据：wiSearchDataList
    },
    searchPartFast() { // 工时快速搜索输入时，查询工时编码和工时名称
      console.log('searchPartFast ' + new Date().toLocaleString())
      this.partSearchDataList = [{
        partNo: '加载中……',
        partName: ''
      }]
      if (this.$utils.isEmpty(this.saveData.carTypeCode)) {
        this.partSearchDataList = []
        this.$message({
          type: 'info',
          message: `请先选择客户`
        })
        return
      }
      this.fastSearchPartAPI()
      // TODO 查询接口并更新数据：wiSearchDataList
    },
    hasCustomer() { // 是否选择了客户
      if (this.saveData.vin !== '') return true
      this.$alert('请选择客户', '提示', {
        confirmButtonText: '确定',
        type: 'info'
      })
      return false
    },
    isPaykindFree() { // 免保-提示
      if (this.payKindName === '免保') {
        this.$alert('免保项目只能从模版导入', '提示', {
          confirmButtonText: '确定',
          type: 'info'
        })
        return true
      }
      return false
    },
    copyToSaveData() {
      var carInfo = this.custInfo.carInfo[0]
      var carUser = this.custInfo.carUser[0]
      var carOwner = this.custInfo.carOwner[0]
      this.saveData.vin = carInfo.vin
      this.saveData.carLicenseNo = carInfo.carLicense
      this.saveData.carBrandName = carInfo.carBrandCn
      this.saveData.carTypeName = carInfo.carTypeName
      this.saveData.buyDate = carInfo.invoiceDate
      this.saveData.custName = carUser.custName
      this.saveData.custTel = carUser.phone
      this.saveData.carColorName = carInfo.carColorName
      this.saveData.addr = carOwner.addr
      this.saveData.mileage = Number(carInfo.mileage) 
      // this.saveData.custClassName = this.custInfo.custClassName
      this.saveData.remark = carOwner.remark
    },
    getRepairTimeOptions() { // 开始日期选项
      const self = this
      return {
        disabledDate(time) { // 什么情况下的日期禁止选择
          if (self.saveData.preGetDate !== '') {
            return time.getTime() > new Date(self.saveData.preGetDate).getTime()
          }
          return false
        }
      }
    },
    getPreGetDateOptions() { // 结束日期选项
      const self = this
      return {
        disabledDate(time) { // 什么情况下的日期禁止选择
          if (self.saveData.repairTime !== '') {
            // 8小时时区差
            return time.getTime() < new Date(self.saveData.repairTime).getTime() - 1000 * 60 * 60 * 8
          }
          return false
        }
      }
    },
    getPartBusiTypeName(index, busiType) { // 获取备件行的业务类别名称
      var options = this.businessTypeOptions['part' + index] || []
      var optionItem = options.filter(o => o.code === busiType)
      if (optionItem.length > 0) return optionItem[0].text
      return ''
    },
    // 把每一行的索引放进row
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex
    },
    tableHeaderRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return 'background-color:rgb(239, 239, 239);height:32px;'
      }
    },
    wiColumnEditChange(index, columnName) {
      switch (columnName) {
        case 'wiDiscountRate':
        {
          var that = this
          var key = 'wi' + index
          if (that.timeoutId[key] != null) {
            clearTimeout(that.timeoutId[key])
            that.timeoutId[key] = null
          }
          that.timeoutId[key] = setTimeout(function() {
            var curData = that.saveData.wiinfo[index].wiDiscountRate
            if (/^[1-9]\d*[.]?\d*$/.test(curData) === false) {
              that.$message({
                type: 'warning',
                message: `折扣率请输入数字`
              })
              return
            } else {
              that.saveData.wiinfo[index].wiDiscountRate = Number(that.saveData.wiinfo[index].wiDiscountRate)
            }
            that.calcWiAmount(index)
            that.calcTotalAmount()
          }, 2000)

          break
        }
      }
    },
    partColumnEditChange(index, columnName) {
      switch (columnName) {
        case 'partDiscount':
        {
          var that = this
          var key = 'part_dis' + index
          if (that.timeoutId[key] != null) {
            clearTimeout(that.timeoutId[key])
            that.timeoutId[key] = null
          }
          that.timeoutId[key] = setTimeout(function() {
            var curData = that.saveData.partinfo[index].partDiscount
            if (/^[1-9]\d*[.]?\d*$/.test(curData) === false) {
              that.$message({
                type: 'warning',
                message: `折扣率请输入数字`
              })
              return
            } else {
              that.saveData.partinfo[index].partDiscount = Number(that.saveData.partinfo[index].partDiscount)
            }
            that.calcPartAmount(index)
            that.calcTotalAmount()
          }, 2000)
          break
        }
        case 'partQty':
        {
          var that2 = this
          var key2 = 'part_qty' + index
          if (that2.timeoutId[key2] != null) {
            clearTimeout(that2.timeoutId[key2])
            that2.timeoutId[key2] = null
          }
          that2.timeoutId[key2] = setTimeout(function() {
            var curData = that2.saveData.partinfo[index].partQty
            if (/^[1-9]\d*$/.test(curData) === false) {
              that2.$message({
                type: 'warning',
                message: `备件数量请输入数字`
              })
              return
            } else {
              that2.saveData.partinfo[index].partQty = Number(that2.saveData.partinfo[index].partQty)
            }
            that2.calcPartAmount(index)
            that2.calcTotalAmount()
          }, 2000)
          break
        }
      }
    },
    otherColumnEditChange(index, columnName) {
      switch (columnName) {
        case 'otherAmount':
        {
          var that = this
          var key = 'other' + index
          if (that.timeoutId[key] != null) {
            clearTimeout(that.timeoutId[key])
            that.timeoutId[key] = null
          }
          that.timeoutId[key] = setTimeout(function() {
            var curData = that.saveData.otherfeeinfo[index].otherAmount
            if (/^[1-9]\d*[.]?\d*$/.test(curData) === false) {
              that.saveData.otherfeeinfo[index].otherAmount = 0.00
            } else {
              that.saveData.otherfeeinfo[index].otherAmount = Number(that.saveData.otherfeeinfo[index].otherAmount)
            }
            that.calcTotalAmount()
          }, 2000)
          break
        }
      }
    },
    payKindChange() { // 付费性质改变
      if (this.payKindName === '协议' && this.userCompanyInfo.custFullName === '') {
        this.$alert('当前客户不属于协议客户，不能选择协议', '提示', {
          confirmButtonText: '确定',
          type: 'info'
        })
        this.payKind = this.payKindOptions[0].code
      }
    },
    wiPayKindChange(index, isCalcTotal = true) {
      var payKind = this.saveData.wiinfo[index].payKind
      // 计算此行的payKindName
      var items = this.payKindOptions.filter(o => o.code === payKind)
      if (items.length === 0) this.saveData.wiinfo[index].payKindName = ''
      else this.saveData.wiinfo[index].payKindName = items[0].text
      this.saveData.wiinfo[index].wiDiscountRate = 100 // 修改了付费性质，折扣恢复成100%
      // 处理业务类别联动
      var subData = this.businessTypeDatas[payKind] || []
      if (subData.length === 0) this.saveData.wiinfo[index].businessType = ''
      else this.saveData.wiinfo[index].businessType = subData[0]['code']
      this.businessTypeOptions['wi' + index] = subData
      if (isCalcTotal) this.calcTotalAmount()
    },
    partPayKindChange(index, isCalcTotal = true) {
      var payKind = this.saveData.partinfo[index].payKind
      // 计算此行的payKindName
      var items = this.payKindOptions.filter(o => o.code === payKind)
      if (items.length === 0) this.saveData.partinfo[index].payKindName = ''
      else this.saveData.partinfo[index].payKindName = items[0].text
      this.saveData.partinfo[index].partDiscount = 100 // 修改了付费性质，折扣恢复成100%
      // 处理业务类别联动
      var subData = this.businessTypeDatas[payKind] || []
      if (subData.length === 0) this.saveData.partinfo[index].businessType = ''
      else this.saveData.partinfo[index].businessType = subData[0]['code']
      this.businessTypeOptions['part' + index] = subData
      if (isCalcTotal) this.calcTotalAmount()
    },
    otherPayKindChange(index, isCalcTotal = true) {
      var payKind = this.saveData.otherfeeinfo[index].payKind
      // 计算此行的payKindName
      var items = this.payKindOptions.filter(o => o.code === payKind)
      if (items.length === 0) this.saveData.otherfeeinfo[index].payKindName = ''
      else this.saveData.otherfeeinfo[index].payKindName = items[0].text
      // 处理业务类别联动
      var subData = this.businessTypeDatas[payKind] || []
      if (subData.length === 0) this.saveData.otherfeeinfo[index].businessType = ''
      else this.saveData.otherfeeinfo[index].businessType = subData[0]['code']
      this.businessTypeOptions['other' + index] = subData
      if (isCalcTotal) this.calcTotalAmount()
    },
    openMenu(e, key) { // 打开右键上下文菜单，key为wi,part,other
      // if (this.menu[key].visible) return// 已经显示，不处理，会有选中行不好判断的问题
      const menuMinWidth = 105
      const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
      const offsetWidth = this.$el.offsetWidth // container width
      const maxLeft = offsetWidth - menuMinWidth // left boundary
      const left = e.clientX - offsetLeft - 5 // 5: margin right
      if (left > maxLeft) {
        this.menu[key].left = left// maxLeft
      } else {
        this.menu[key].left = left
      }
      this.menu[key].top = e.clientY - 82// - this.$el.offsetTop - this.$el.getBoundingClientRect().height - 85
      this.menu[key].visible = true
      switch (key) {
        case 'wi': {
          this.closeMenu2()
          this.closeMenu3()
          break
        }
        case 'part': {
          this.closeMenu1()
          this.closeMenu3()
          break
        }
        case 'other': {
          this.closeMenu1()
          this.closeMenu2()
          break
        }
      }
    },
    closeMenu1() {
      this.menu['wi'].visible = false
      this.menu['wi'].curindex = null
      this.menu['wi'].curPayKindName = null
    },
    closeMenu2() {
      this.menu['part'].visible = false
      this.menu['part'].curindex = null
      this.menu['part'].curPayKindName = null
    },
    closeMenu3() {
      this.menu['other'].visible = false
      this.menu['other'].curindex = null
    },
    rowContextWi(row, column, event) { // 右键行时，记录行索引
      this.menu['wi'].curindex = row.index
      this.menu['wi'].curPayKindName = row.payKindName// 付费性质
    },
    rowContextPart(row, column, event) { // 右键行时，记录行索引
      this.menu['part'].curindex = row.index
      this.menu['part'].curPayKindName = row.payKindName// 付费性质
    },
    rowContextOther(row, column, event) { // 右键行时，记录行索引
      this.menu['other'].curindex = row.index
    },
    delRepairWi() {
      if (this.menu['wi'].curindex == null) return
      this.saveData.wiinfo.splice(this.menu['wi'].curindex, 1)
      this.calcTotalAmount()// 重新汇总金额
    },
    delRepairPart() {
      if (this.menu['part'].curindex == null) return
      this.saveData.partinfo.splice(this.menu['part'].curindex, 1)
      this.calcTotalAmount()// 重新汇总金额
    },
    delRepairOther() {
      if (this.menu['other'].curindex == null) return
      this.saveData.otherfeeinfo.splice(this.menu['other'].curindex, 1)
      this.calcTotalAmount()// 重新汇总金额
    },
    SendDataToRepairHistory(val) {
      this.$refs.repairHistory.getFather(val)
    },
    getRepairHistoryClose(data) {
      this.dialogWiModelVisible = false
    },
    showRepairHistory() {
      if (this.saveData.vin == null || this.saveData.vin === '') {
        return
      }
      this.SendDataToRepairHistory(this.saveData.vin)
      this.dialogWiModelVisible = true
    },
    // closeChooseWiSelect() { // 关闭选择工时弹窗
    //   this.seChooseWiSelectVisible = false
    // },
    closeChoosePartSelect() { // 关闭选择工时弹窗
      this.paChoosePartVisible = false
    },
    resetStatisticAmount() { // 统计费用全部清零
      this.saveData.wiDueAmount = 0.00
      this.saveData.partDueFee = 0.00
      this.saveData.otherAmount = 0.00
      this.saveData.discountAmount = 0.00// 折扣费用
      this.saveData.factAmount = 0.00 // 预估总费用（折后费用）
      this.saveData.repairOrderAmount = 0.00// 维修总费用=预估费用（折后费用）+折扣费用
      this.feeInfo = {// 费用统计：普通-付费，保修，免保，内部，协议，保险
        普通: 0.00, // 普通-付费
        保修: 0.00, // 保修
        免保: 0.00, // 免保
        内部: 0.00, // 内部
        协议: 0.00, // 协议
        保险: 0.00// 保险
      }
    },
    calcWiAmount(index) { // 重新计算某行的工时数据
      this.saveData.wiinfo[index].wiAmount = this.saveData.wiinfo[index].wiPrice * this.saveData.wiinfo[index].saleWorkQty
      this.saveData.wiinfo[index].wiDueAmount = this.saveData.wiinfo[index].wiAmount * this.saveData.wiinfo[index].wiDiscountRate / 100
      this.saveData.wiinfo[index].discountAmount = this.saveData.wiinfo[index].wiAmount - this.saveData.wiinfo[index].wiDueAmount
    },
    calcPartAmount(index) { // 重新计算某行的备件数据
      this.saveData.partinfo[index].partAmount = this.saveData.partinfo[index].partPrice * this.saveData.partinfo[index].partQty
      this.saveData.partinfo[index].partDueAmount = this.saveData.partinfo[index].partAmount * this.saveData.partinfo[index].partDiscount / 100
      this.saveData.partinfo[index].discountAmount = this.saveData.partinfo[index].partAmount - this.saveData.partinfo[index].partDueAmount
    },
    calcTotalAmount() { // 总费用统计
      for (var key in this.syncComplate) {
        if (this.syncComplate[key] === false) { // 有没加载完的异步操作，等一秒钟再调用
          var that = this
          setTimeout(function() {
            that.calcTotalAmount()
          }, 1000)
          return
        }
      }
      this.resetStatisticAmount()// 费用先全部清零
      this.saveData.wiinfo.forEach(row => {
        this.saveData.wiDueAmount += row.wiDueAmount
        this.saveData.discountAmount += row.discountAmount
        this.feeInfo[row.payKindName] += row.wiDueAmount// 分类费用为折后费用之和
      })
      this.saveData.partinfo.forEach(row => {
        this.saveData.partDueFee += row.partDueAmount
        this.saveData.discountAmount += row.discountAmount
        this.feeInfo[row.payKindName] += row.partDueAmount// 分类费用为折后费用之和
      })
      this.saveData.otherfeeinfo.forEach(row => {
        if (!isNaN(row.otherAmount)) {
          this.saveData.otherAmount += row.otherAmount
          this.feeInfo[row.payKindName] += row.otherAmount
        }
      })
      this.saveData.factAmount = this.saveData.wiDueAmount + this.saveData.partDueFee + this.saveData.otherAmount
      this.saveData.repairOrderAmount = this.saveData.factAmount + this.saveData.discountAmount
    },
    validSaveData() { // 保存前数据检验：如果验证通过则返回true,否则弹出提示并返回false
      var errorHtml = ''
      var regNumber = /^[1-9]\d*([.]\d+)?$/
      if (this.saveData.vin === '') errorHtml += '请选择客户<br/>'
      if (this.saveData.saName === '') errorHtml += '请选择服务代表<br/>'
      if (this.saveData.repairTime === '') errorHtml += '请选择送修时间<br/>'
      if (this.saveData.mileage === '') errorHtml += '请填写行驶里程<br/>'
      if (this.saveData.mileage !== '' && !regNumber.test(this.saveData.mileage)) errorHtml += '行驶里程格式不正确<br/>'
      if (this.saveData.repairMan === '') errorHtml += '请填写送修人<br/>'
      if (this.saveData.repairTel === '') errorHtml += '请填写送修人电话<br/>'
      debugger
      if ((this.saveData.oilPercent === null || this.saveData.oilPercent === '') && (this.saveData.electricPercent === null || this.saveData.electricPercent === '')) errorHtml += '油量、电量至少选择一个<br/>'
      if (this.saveData.wiinfo.length === 0) errorHtml += '维修工时不能为空<br/>'
      if (errorHtml !== '') {
        this.$alert(errorHtml, '提示', {
          confirmButtonText: '确定',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        })
        return false
      }
      return true
    },
    loadInitData(rowDatas) {
      if (rowDatas.length === 0) return
      for (var key in this.syncComplate) {
        if (this.syncComplate[key] === false) { // 有没加载完的异步操作，等一秒钟再调用
          var that = this
          setTimeout(function() {
            that.loadInitData(rowDatas)
          }, 1000)
          return
        }
      }
      var row = rowDatas[0]
      for (var key1 in this.saveData) {
        if (row[key1] != null) this.saveData[key1] = row[key1]
      }

      this.saveData.carLicenseNo = row.carLicense
      this.saveData.carBrandName = row.carBrandCn
      this.saveData.carTypeName = row.carTypeCn
      this.saveData.isAccident = row.isAccident
      this.saveData.policyCompanyId = row.policyCompanyId
      this.saveData.policyCompanyCode = row.policyCompanyCode
      this.saveData.dutyEmpId = row.dutyEmpId// 制单责任人ID
      this.saveData.trunRepairDate = row.trunRepairDate// 送修日期
      this.saveData.partDueFee = row.partDueAmount
      this.saveData.repairOrderAmount = row.repairAmount
      row.SeBuRepairWi.forEach(curRow => {
        var newRow = {
          repairWiId: curRow.repairWiId, // 工时ID
          businessType: curRow.businessType, // 业务类别
          businessTypeName: curRow.businessTypeName, // 业务类别名称
          repairTypeCode: curRow.repairTypeCode, // 维修类别
          repairTypeName: curRow.repairTypeName, // 维修类别名称
          wiCode: curRow.wiCode, // 工时编码
          wiName: curRow.wiName, // 工时名称
          payKind: curRow.payKind, // 付费性质
          payKindName: curRow.payKindName, // 付费性质名称
          saleWorkQty: curRow.saleWorkQty, // 销售工时数量
          wiPrice: curRow.wiPrice, // 工时单价
          wiAmount: curRow.wiAmount, // 工时合计
          wiDueAmount: curRow.wiDueAmount, // 预估费用
          wiDiscountRate: curRow.wiDiscountRate, // 折扣
          discountAmount: 0.00, // 工时优惠金额
          remark: curRow.note, // 备注
          carTypeCode: row.carTypeCode,
          isEnable: curRow.isEnable,
          updateControlId: curRow.updateControlId,
          dutyEmpId: curRow.dutyEmpId, // 制单责任人ID
          isCanEdit: curRow.isCanEdit, // 是否可编辑
          isAdd: curRow.isAdd, // 是否追加
          reserveOrderCode: curRow.reserveOrderCode// 预约单编码
        }
        this.saveData.wiinfo.push(newRow)
        this.wiPayKindChange(this.saveData.wiinfo.length - 1, false)
      })
      row.SeBuRepairPart.forEach(curRow => {
        var newPartRow = {
          businessType: curRow.businessType, // 业务类别
          repairPartId: curRow.repairPartId, // 备件ID
          repairTypeCode: curRow.repairTypeCode, // 维修类别
          payKind: curRow.payKind, // 付费性质
          payKindName: curRow.payKindName, // 付费性质名称
          businessTypeName: curRow.businessTypeName, // 业务类别名称
          partNo: curRow.partNo, // 备件编码
          partName: curRow.partName, // 备件名称
          partQty: curRow.partQty, // 备件数量
          partPrice: curRow.partPrice, // 备件单价
          partAmount: curRow.partAmount, // 备件合计
          partDiscount: curRow.partDiscount, // 备件折扣率
          partDueAmount: curRow.partDueAmount, // 费用预估
          discountAmount: curRow.partAmount - curRow.partDueAmount, // 备件优惠金额
          remark: curRow.note, // 备注
          updateControlId: curRow.updateControlId,
          dutyEmpId: curRow.dutyEmpId, // 制单责任人ID
          isCanEdit: curRow.isCanEdit, // 是否可编辑
          isShare: curRow.isShare, // 是否分摊
          outQty: curRow.outQty, // 出库数量
          isNeedOut: curRow.isNeedOut // 出库数量
        }
        this.saveData.partinfo.push(newPartRow)
        this.partPayKindChange(this.saveData.partinfo.length - 1, false)
      })
      row.SeBuRepairOther.forEach(curRow => {
        var newRow = {
          businessType: curRow.businessType, // 业务类别
          repairOtherId: curRow.repairOtherId, // 其他费用ID
          businessTypeName: curRow.businessTypeName, // 业务类别名称
          costTypeCode: curRow.otherAmountType, // 其他费用类别编码
          costTypeName: curRow.otherAmountType, // 其他费用类别名称
          otherAmount: curRow.otherAmount, // 其他费用
          remark: curRow.remark, // 备注
          payKind: curRow.payKind, // 付费性质
          payKindName: curRow.payKindName, // 付费性质名称
          updateControlId: curRow.updateControlId
        }
        this.saveData.otherfeeinfo.push(newRow)
        this.otherPayKindChange(this.saveData.otherfeeinfo.length - 1, false)
      })
      row.SeBuRepairPartShare.forEach(curRow => {
        var newRow = {
          repairPartShareId: row.repairPartShareId, // 备件表ID
          repairPartId: row.repairPartId, // 备件表ID
          partNo: curRow.partNo, // 备件编码
          partName: curRow.partName, // 备件名称
          partQty: curRow.partQty, // 备件数量
          custAmount: curRow.custAmount, // 客户承担费用
          custDiscount: curRow.custDiscount, // 客户折扣
          custDueAmount: curRow.custDueAmount, // 客户应付
          custPrice: curRow.custPrice, // 客户承担单价
          otherPrice: curRow.otherPrice, // 第三方承担单价
          otherAmount: curRow.otherAmount, // 第三方承担费用
          otherDiscount: curRow.otherDiscount, // 第三方折扣
          otherDueAmount: curRow.otherDueAmount, // 第三方应付
          dueAmount: curRow.dueAmount, // 应付总额
          businessType: curRow.businessType, // 业务类别
          // repairTypeCode: curRow.XXXX, // 维修类别
          payKind: curRow.payKind, // 付费性质
          // payKindName: curRow.XXXX, // 付费性质名称
          // businessTypeName: curRow.XXXX, // 业务类别名称
          // repairTypeName: curRow.XXXX, // 维修类别名称
          repairOrderId: row.repairOrderId, // 施工单ID
          repairOrderCode: row.repairOrderCode, // 施工单号
          shareType: curRow.shareType, // 分摊类型
          isEnable: curRow.isEnable, // 付费性质
          updateControlId: curRow.updateControlId // 付费性质
        }
        this.saveData.partshare.push(newRow)
      })
      this.calcTotalAmount()
    }
  }
}
