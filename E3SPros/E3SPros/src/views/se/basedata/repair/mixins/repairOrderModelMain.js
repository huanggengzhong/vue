/**
 *施工单模板-主信息操作
 *
 */
export const repairOrderModelMain = {
  data() {
    return {
      // 估价单模板查询条件
      listQuery: {
        // carTypeCode: undefined,
        // type: undefined,
        // status: "",
        oemCode: this.$store.getters.orgInfo.OEM_CODE,
        groupCode: this.$store.getters.orgInfo.GROUP_CODE,
        carBrandCode: '',
        repairModeCode: '',
        repairModeName: '',
        isEnable: '',
        isSystem: '',
        payKind: '',
        dlrId: this.$store.getters.orgInfo.DLR_ID
      }
    }
  },
  methods: {
    rowClickModel(row, column, event) { // 工单模板网格行点击事件
      this.repairModeId = row.repairModeId
      this.saveModelTypeData = row
      this.ruleForm = {
        repairModeId: row.repairModeId,
        repairModeName: row.repairModeName,
        repairModeCode: row.repairModeCode,
        isEnable: row.isEnable,
        payKind: row.payKind,
        carBrandCode: row.carBrandCode,
        updateControlId: row.updateControlId
      }
      this.funQueryModelType(row.repairModeCode)
      this.repairModeCode = row.repairModeCode

      this.carTypeTempModel.repairModelId = row.repairModelId
      this.carTypeTempModel.repairModeCode = row.repairModeCode

      // 向弹框组件赋值
      this.dialogParam.repairModeId = row.repairModelId
      this.dialogParam.repairModeCode = row.repairModeCode
      this.dialogParam.carBrandName = row.carBrandCn
      // this.dialogParam.repairModeCode = row;
      this.dialogParam.repairModeName = row.repairModeName

      // 向新增模板适用车型空间赋值
      this.dataInfo.repairModeId = row.repairModeId
      this.dataInfo.repairModeCode = row.repairModeCode
      this.dataInfo.isEnable = '1'

      this.dataInfo.oemCode = row.oemCode
      this.dataInfo.groupCode = row.groupCode
      this.dataInfo.repairModeId = row.repairModeId
      this.dataInfo.repairModeCode = row.repairModeCode
      this.dataInfo.isEnable = row.isEnable
      this.dataInfo.isSystem = row.isSystem
      this.dataInfo.oemId = row.oemId
      this.dataInfo.groupId = row.groupId

      this.modelCartypeQuery.dataInfo.oemCode = row.oemCode
      this.modelCartypeQuery.dataInfo.groupCode = row.groupCode
      this.modelCartypeQuery.dataInfo.repairModeId = row.repairModeId
      this.modelCartypeQuery.dataInfo.carTypeCode = row.carTypeCode
    }
  }
}
