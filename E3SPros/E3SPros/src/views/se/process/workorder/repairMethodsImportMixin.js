
import { 
  doQueryRepairPartPrice,
  doQueryRealteWiData,
  doQueryRealtePartData
} from '@/api/se/process/workorder/repairWorkOrderEdit'
import { seApis } from '@/api/graphQLApiList/se'
// 施工单页面数据处理
export const repairMethodsImportMixin = {
  methods: {
    getRepairModeData(selRows) { // 选择模版后返回
      if (selRows != null && selRows.length > 0) {
        var row = selRows[0]
        row.SeDbRepairModeWi.forEach(curRow => {
          curRow.saleWorkQty = curRow.wiQty
          curRow.wiDiscountRate = 100
          curRow.wiDueAmount = null
        })
        this.saveData.wiinfo = row.SeDbRepairModeWi// 工时网格数据
        row.repairModePartId.forEach(curRow => {
          curRow.partAmount = curRow.partTotalFee
          curRow.partDiscount = 100
          curRow.partDueAmount = null
        })
        this.saveData.partinfo = row.repairModePartId// 备件网格数据
        // 触发联动下拉框数据
        var i = 0
        this.saveData.wiinfo.forEach(curRow => { // 工时网格下拉联动
          curRow.payKind = this.payKind
          this.wiPayKindChange(i)
          this.getWiUnitPrice(i)
          i++
        })
        i = 0
        this.saveData.partinfo.forEach(curRow => { // 备件网格下拉联动
          curRow.partAmount = curRow.partTotalFee
          curRow.payKind = this.payKind
          this.partPayKindChange(i)
          this.getPartUnitPrice(i)
          i++
        })
        this.calcTotalAmount()
        // console.log(JSON.stringify(row));
      }
      this.seBuRepairModeModalVisible = false
    },
    getChooseWiSelect(selRows) { // 工时窗口选择后返回
      //关闭工时弹窗
      this.wiSelectShow = false
      //转化工时
      var drData = []
      selRows.forEach(row => {
        var existItems = this.saveData.wiinfo.filter(o => o.wiCode === row.wiCode)
        if(existItems.length === 0){
          drData.push(row)
        }
      })
      //关联工时和配件
      let params = []
      drData.map(function(item){
        params.push({
          wiCode: item.wiCode,
          wiName: item.wiName,
          carTypeCode: item.carTypeCode,
          repairSmallKindCode: item.repairSmallKindCode,
          isSystem: item.isSystem,
        })
      })
      let relateInfo = []
      doQueryRealteWiData(params[0], -1, 1)
      .then(response => {
        relateInfo = response.data[seApis.seBuSelectWiBackQueryFind.ServiceCode].row[0]
        if (relateInfo.length > 0) { // 工时关联备件加载
          var wiRows = relateInfo.seDbWiRelations
          wiRows.forEach(wiRow => {
            var existItems = this.saveData.partinfo.filter(o => o.partNo === wiRow.partNo)
            if (existItems.length === 0) {
              var newWiRow = {
                repairWiId: wiRow.repairWiId, // 工时ID
                businessType: wiRow.businessType, // 业务类别
                businessTypeName: wiRow.businessTypeName, // 业务类别名称
                repairTypeCode: wiRow.repairTypeCode, // 维修类别
                repairTypeName: wiRow.repairTypeCode, // 维修类别名称
                wiCode: wiRow.wiCode, // 工时编码
                wiName: wiRow.wiName, // 工时名称
                payKind: wiRow.payKind, // 付费性质
                payKindName: wiRow.payKindName, // 付费性质名称
                saleWorkQty: wiRow.saleWiQty, // 销售工时数量
                wiPrice: wiRow.wiPrice, // 工时单价
                wiAmount: wiRow.wiPrice, // 工时合计
                wiDueAmount: wiRow.wiPrice, // 预估费用
                wiDiscountRate: wiRow.wiDiscountRate, // 折扣
                discountAmount: wiRow.discountAmount, // 工时优惠金额
                remark: wiRow.repairTypeCode, // 备注
                carTypeCode: wiRow.carTypeCode,
                isEnable: '1',
                updateControlId: wiRow.repairTypeCode
              }
              this.saveData.wiinfo.push(newWiRow)
              this.partPayKindChange()
            }
          })
          var partRows = relateInfo.seDbWiParts
          partRows.forEach(partRow => {
            var existItems = this.saveData.partinfo.filter(o => o.partNo === row.partNo)
            if (existItems.length === 0) {
              var newPartRow = {
                businessType: partRow.businessType, // 业务类别
                repairPartId: partRow.repairPartId, // 备件ID
                repairTypeCode: partRow.repairTypeCode, // 维修类别
                payKind: partRow.payKind, // 付费性质
                payKindName: partRow.payKindName, // 付费性质名称
                businessTypeName: partRow.businessTypeName, // 业务类别名称
                partNo: partRow.partNo, // 备件编码
                partName: partRow.partName, // 备件名称
                partQty: partRow.partQty, // 备件数量
                partPrice: partRow.partPrice, // 备件单价
                partAmount: partRow.partAmount, // 备件合计
                partDiscount: partRow.partDiscount, // 备件折扣率
                partDueAmount: partRow.partDueAmount, // 费用预估
                discountAmount: partRow.discountAmount, // 备件优惠金额
                remark: partRow.remark // 备注
              }
              this.saveData.partinfo.push(newPartRow)
              this.partPayKindChange()
            }
          })
          this.calcTotalAmount()
        }
      })
     
    },
    getChoosePartSelect(selRows) { // 备件窗口选择后返回
      //关闭备件弹窗
      this.paChoosePartVisible = false
      //转化配件
      var drData = []
      selRows.forEach(row => {
        var existItems = this.saveData.wiinfo.filter(o => o.partNo === row.partNo)
        if(existItems.length === 0){
          drData.push(row)
        }
      })
      //关联工时和配件
      let relateInfo = []
      let params = []
      relateInfo.map(function(item){
        params.push({
          partNo: item.partNo,
          partName: item.partName
        })
      }) 
      doQueryRealtePartData(params[0], -1, 1)
      .then(response => {
        relateInfo = response.data[seApis.paChoosePartImport.ServiceCode].row
        if (relateInfo.length > 0) { // 工时关联备件加载
          var partRows = relateInfo.seDbWiParts
          partRows.forEach(partRow => {
            var existItems = this.saveData.partinfo.filter(o => o.partNo === row.partNo)
            if (existItems.length === 0) {
              var newPartRow = {
                businessType: partRow.businessType, // 业务类别
                repairPartId: partRow.repairPartId, // 备件ID
                repairTypeCode: partRow.repairTypeCode, // 维修类别
                payKind: partRow.payKind, // 付费性质
                payKindName: partRow.payKindName, // 付费性质名称
                businessTypeName: partRow.businessTypeName, // 业务类别名称
                partNo: partRow.partNo, // 备件编码
                partName: partRow.partName, // 备件名称
                partQty: partRow.partQty, // 备件数量
                partPrice: partRow.partPrice, // 备件单价
                partAmount: partRow.partAmount, // 备件合计
                partDiscount: partRow.partDiscount, // 备件折扣率
                partDueAmount: partRow.partDueAmount, // 费用预估
                discountAmount: partRow.discountAmount, // 备件优惠金额
                remark: partRow.remark // 备注
              }
              this.saveData.partinfo.push(newPartRow)
              this.partPayKindChange()
            }
          })
          this.calcTotalAmount()
        }
      })
      this.calcTotalAmount()
    },
    getOtherfeeData(selRows) { // 选择其他费用后返回
      if (selRows == null || selRows.length === 0) return
      var that = this
      selRows.forEach(row => {
        var existItems = that.saveData.otherfeeinfo.filter(o => o.costTypeCode === row.costTypeCode)
        if (existItems.length === 0) {
          var newRow = {
            businessType: '', // 业务类别
            repairOtherId: '', // 其他费用ID
            businessTypeName: '', // 业务类别名称
            costTypeCode: row.costTypeCode,
            costTypeName: row.costTypeName, // 其他费用类别名称
            otherAmount: '', // 其他费用
            remark: '', // 备注
            payKind: this.payKind, // 付费性质
            payKindName: this.payKindName // 付费性质名称
          }
          that.saveData.otherfeeinfo.push(newRow)
          that.otherPayKindChange(that.saveData.otherfeeinfo.length - 1)
        }
      })
    },
    getRepairReserverResponse(resData) { // 导入预约,查询预约详情后返回
      if (resData.result === '1' && resData.rows !== '') {
        // 处理工时、备件、其他费用网格数据加载
        const tempList = resData.rows
        if (tempList != null && tempList.length > 0) {
          var tempData = tempList[0]
          const that = this
          that.saveData.csDesc = tempData.csDesc
          that.saveData.isClean = tempData.isClean
          that.saveData.saName = tempData.saName
          // that.saveData.isCleanB=tempData.isClean=='1';
          tempData.reservewi.forEach(row => { // 预约工时（项目）加载
            var existItems = that.saveData.wiinfo.filter(o => o.wiCode === row.wiCode)
            if (existItems.length === 0) {
              var newRow = {
                repairWiId: '', // 工时ID
                businessType: row.businessType, // 业务类别
                businessTypeName: '', // 业务类别名称
                repairTypeCode: '', // 维修类别
                repairTypeName: '', // 维修类别名称
                wiCode: row.wiCode, // 工时编码
                wiName: row.wiName, // 工时名称
                payKind: that.payKind, // 付费性质
                payKindName: '普通', // 付费性质名称
                saleWorkQty: row.saleWorkQty, // 销售工时数量
                wiPrice: row.wiPrice, // 工时单价
                wiAmount: row.saleWorkQty * row.wiPrice, // 工时合计
                wiDueAmount: null, // 预估费用
                wiDiscountRate: 100, // 折扣
                discountAmount: '', // 工时优惠金额
                remark: '', // 备注
                carTypeCode: row.carTypeCode,
                isEnable: '1',
                updateControlId: ''
              }
              that.saveData.wiinfo.push(newRow)
              that.wiPayKindChange(this.saveData.wiinfo.length - 1)
              this.calcWiAmount(this.saveData.wiinfo.length - 1)
            }
          })
          tempData.reservepart.forEach(row => { // 备件加载
            var existItems = that.saveData.partinfo.filter(o => o.partNo === row.partNo)
            if (existItems.length === 0) {
              var newRow = {
                businessType: row.businessType, // 业务类别
                repairPartId: '', // 备件ID
                repairTypeCode: '', // 维修类别
                payKind: '1', // 付费性质
                payKindName: '普通', // 付费性质名称
                businessTypeName: '', // 业务类别名称
                partNo: row.partNo, // 备件编码
                partName: row.partName, // 备件名称
                partQty: row.partQty, // 备件数量
                partPrice: row.partPrice, // 备件单价
                partAmount: row.partPrice, // 备件合计
                partDiscount: 100, // 备件折扣率
                partDueAmount: null, // 费用预估
                discountAmount: 0, // 备件优惠金额
                remark: '' // 备注
              }
              that.saveData.partinfo.push(newRow)
              that.partPayKindChange(that.saveData.partinfo.length - 1)
              that.calcPartAmount(that.saveData.partinfo.length - 1)
            }
          })
          tempData.reserveother.forEach(row => { // 其他费用加载
            var existItems = that.saveData.otherfeeinfo.filter(o => o.costTypeCode === row.costTypeCode)
            if (existItems.length === 0) {
              var newRow = {
                businessType: '', // 业务类别
                repairOtherId: '', // 其他费用ID
                businessTypeName: '', // 业务类别名称
                costTypeCode: row.costTypeCode,
                costTypeName: row.costTypeName, // 其他费用类别名称
                otherAmount: '', // 其他费用
                remark: '', // 备注
                payKind: '1', // 付费性质
                payKindName: '普通' // 付费性质名称
              }
              that.saveData.otherfeeinfo.push(newRow)
              that.otherPayKindChange(that.saveData.otherfeeinfo.length - 1)
            }
          })
          this.calcTotalAmount()
        }
      }
    },
    getRealtePart(index) { // 获取备件单价
      if (index == null || index < 0) return
      var strIndex = 'part' + index.toString()
      this.syncComplate[strIndex] = false
      var that = this
      const curRow = that.saveData.partinfo[index]
      doQueryRepairPartPrice(-1, 1, {
        oemCode: '',
        groupCode: '',
        payKind: curRow.payKind,
        businessType: curRow.businessType,
        partDiscount: curRow.partDiscount,
        discountChange: ''
      })
        .then(response => {
          var retData = response.data[seApis.SeBuRepairOrderPartPriceRate.ServiceCode]
          if (retData.result === '1' && retData.rows != null) {
            if (retData.rows.length === 0) return
            const tempRow = retData.rows[0]
            that.saveData.partinfo[index].partPrice = tempRow.partPrice
            that.calcPartAmount(index)
          } else {
            that.saveData.partinfo[index].partPrice = 999999
          }
          that.syncComplate[strIndex] = true
        })
    }
  }
}

