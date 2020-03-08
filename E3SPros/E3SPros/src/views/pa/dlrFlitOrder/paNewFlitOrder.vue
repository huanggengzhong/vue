<!--
* description: 新建调拨单
* author: wangyaoyao
* createdDate: 2019-10-16
* logs:
-->
<template>
  <section>
    <div class="app-container app-container-table">
      <!-- <div class="filter-container filter-button">
        <el-button size="small" type="text">Excel模板下载</el-button>
        <el-button type="primary" size="small" @click="choosePart()">备件选择</el-button>
        <el-button size="small" @click="delDlr()">删除备件</el-button>
        <el-button size="small" @click="save()">保存</el-button>
        <el-upload class="upload-demo" ref="upload" style="width:68px;display:inline-block;" :file-list="fileList" name="excelFile" action :headers="uploadHeaders" :http-request="handleChange" :on-success="uploadSuccess" :auto-upload="true" :before-upload="beforeAvatarUpload" :before-remove="beforeRemove" :on-exceed="handleExceed" :limit="1" :show-file-list="false" list-type="text">
          <el-button size="small">导入</el-button>
        </el-upload>
        <el-button size="small" @click="reset()">重置</el-button>
      </div> -->
      <div class="filter-container filter-params">
        <mix-form ref="fromLogistics" :dynamicFormFields="fromLogistics" :dynamicFieldsData="fromLogisticsData"></mix-form>
        <mix-button name="searchBtns" :dynamicButtons="btns" :isShowMore=false></mix-button>

      </div>
      <mix-table ref="tableListLogistics" :queryParams="queryParamsLogistics" :dynamicTableCols="colsLogistics" :listData="LogisticsData" :isPaging=true :isDialog=true multipleSelect='selection' />
      <seComQueryChoDlrMul ref="seComQueryChoDlrMul" @changeCode="getseComQueryChoDlrMul"></seComQueryChoDlrMul>
      <sparepart :sparepartVisible="sparepartVisible" @changeCode="getsparepartCode" @selectData="selectDataFun"></sparepart>
      <el-dialog title="报价单选择" :visible.sync="dialogFlitVisible" width="80%" :append-to-body="true" :close-on-click-modal="false">
        <span>这是一个报价单跟报价单制作用同一个接口，放迭代三做</span>
      </el-dialog>
    </div>
  </section>
</template>
<script>
import { paApis } from '@/api/graphQLApiList/pa'
import { requestGraphQL } from '@/api/commonRequest'
import LookupValue from '@/components/org/LookupValue'
import mixTable from '@/components/basicComponent/mixTable'
import mixForm from '@/components/basicComponent/mixForm'
import seComQueryChoDlrMul from '@/components/se/seComQueryChoDlrMul'
import sparepart from '@/views/pa/storepurchaseorder/creatOrder/sparepartSelection'
import mixButton from '@/components/basicComponent/mixButton'

export default {
  name: 'paNewFlitOrder',
  components: {
    LookupValue,
    mixTable,
    mixForm,
    seComQueryChoDlrMul,
    sparepart,
    mixButton
  },
  data() {
    return {
      flag: 0,
      popupsVisible: false,
      sparepartVisible: false,
      dialogFlitVisible: false,
      flitNum: '',
      salePrice: '',
      uploadHeaders: {
        Authorization: this.$store.getters.token
      },
      fileList: [],
      //表格内数据
      LogisticsData: [],
      colsLogistics: [
        { label: '备件品牌', codeField: 'partBrandName' },
        { label: '备件号', codeField: 'partNo' },
        { label: '备件名称', codeField: 'partName' },
        { label: '参考价格', codeField: 'purPrice' },
        {
          label: '调拨数量',
          codeField: 'flitNum',
          isEdit: 'true',
          width: '120',
          comps: [
            {
              type: 'inputNum2',
              change: this.changeFlitNum,
              focus: null
            }
          ]
        },
        { label: '单位', codeField: 'unit' },
        {
          label: '单价',
          codeField: 'salePrice',
          isEdit: 'true',
          width: '120',
          comps: [
            {
              type: 'inputNum2',
              precision: 2,
              change: this.changeSalePrice,
              focus: null
            }
          ]
        },
        { label: '调拨金额', codeField: 'flitReferAmount' },
        { label: '可用库存', codeField: 'storeQty' },
        { label: '备件类别', codeField: 'createdDate' },
        { label: '适用车型', codeField: 'rejectReason' }
      ],
      queryParamsLogistics: {
        APIUrl: paApis.paBuDlrFlitOrderQueryFindAll.APIUrl,
        InputType: paApis.paBuDlrFlitOrderQueryFindAll.InputType,
        ServiceCode: paApis.paBuDlrFlitOrderQueryFindAll.ServiceCode,
        dataInfo: {},
        apiQueryRow: [
          'flitOrderCode',
          'flitType',
          'flitTypeName',
          'custFullName',
          'custClassName',
          'flitDate',
          'flitStatusName',
          'flitReferAmount',
          'creatorName',
          'createdDate',
          'rejectReason'
        ]
      },
      fromLogistics: [
        {
          label: '调拨类型',
          codeField: 'flitType',
          isShowLabel: true,
          lookuptype: 'PA0043',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromLogisticsData.flitType = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        {
          label: '经销商简称',
          codeField: 'dlrName',
          type: 'inputTxt',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: () => null,
          event: () => {
            this.$refs.seComQueryChoDlrMul.open()
          }
        },
        { label: '调拨日期', codeField: 'FlitDate', type: 'inputDate' },
        {
          label: '制单人',
          codeField: 'createOrder',
          type: 'inputTxt',
          readonly: true
        },
        {
          label: '调拨单号',
          codeField: 'flitordercode',
          type: 'inputTxt',
          readonly: true
        },
        {
          label: '调拨状态',
          codeField: 'flitstatus',
          isShowLabel: true,
          lookuptype: 'PA0068',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.fromLogisticsData.flitStatus = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        {
          label: '报价单号',
          codeField: 'flitPrice',
          type: 'inputTxt',
          event: () => {
            this.dialogFlitVisible = true
          }
        }
      ],
      fromLogisticsData: {
        flitType: '',
        dlrName: '',
        FlitDate: '',
        createOrder: '',
        flitordercode: '',
        flitstatus: '',
        flitPrice: ''
      },
      //button
       btns: {
        left: [
          {
            name: '',
            label: 'Excel模板下载',
            // event: 'save',
            type:'text'
          },
        ],
        right: [
          { name: 'search', label: '备件选择', event: 'choosePart' },
          { name: 'search', label: '删除备件', event: 'delDlr' },
          { name: 'search', label: '保存', event: 'save' },
          { name: 'reset', label: '重置', event: 'reset' }
        ]
      },
    }
  },
  created() {
    this.fromLogisticsData.createOrder = this.$store.getters.orgInfo.empName
    this.fromLogisticsData.flitType = '1'
    // this.fromLogisticsData = {
    //   flitType: this.$route.params.fromlist.flitType,
    //   dlrName: this.$route.params.fromlist.dlrName,
    //   FlitDate: this.$route.params.fromlist.FlitDate,
    //   createOrder: this.$route.params.fromlist.createOrder,
    //   flitordercode: this.$route.params.fromlist.flitordercode,
    //   flitstatus: this.$route.params.fromlist.flitstatus,
    //   flitPrice: this.$route.params.fromlist.flitPrice
    // }
    this.getFlit()
  },
  watch: {
    $route() {
      this.getFlit()
    }
  },
  methods: {
    //获取调拨单制作内容
    getFlit() {
      debugger
      this.LogisticsData = this.$route.params.tablelist
    },
    revise(flag) {
      if (flag == 2) {
        if (this.$refs.tableListLogistics.currentRow.length == 0) {
          this.$message({
            message: '请选中一条记录',
            type: 'warning'
          })
          return false
        } else {
          this.dialogLogisticsVisible = true
          this.flag = 1
          let currentRow = this.$refs.tableListLogistics.currentRow[0]
          this.fromAddLogisticsData.tableCode = currentRow.configTableName
          this.fromAddLogisticsData.worldCode = currentRow.columnCode
          this.fromAddLogisticsData.worldName = currentRow.columnName
          this.fromAddLogisticsData.getValueType = currentRow.configTypeName
          this.fromAddLogisticsData.getValueFormat = currentRow.configForm
          this.fromAddLogisticsData.getValueSQL = currentRow.valuesSourceSql
          this.fromAddLogisticsData.maintainPeople = currentRow.userRole
          this.fromAddLogisticsData.status = currentRow.isEnable
          this.fromAddLogisticsData.remark = currentRow.remark
        }
      }
      this.dialogLogisticsVisible = true
      this.flag = 0
      this.reset()
    },
    reset() {
      this.$refs.fromLogistics.resetFormdata()
      this.fromLogisticsData.createOrder = this.$store.getters.orgInfo.empName
      this.fromLogisticsData.flitType = '1'
    },

    save() {
      var that = this
      let saveTypeData = {}
      if (this.$refs.tableListLogistics.currentRow.length == 0) {
        this.$message({
          message: '表格内无数据',
          type: 'warning'
        })
        return false
      }
      let queryObj = {
        //保存需要传 type="mutation"
        type: 'mutation',
        // api配置
        apiConfig: paApis.paBuDlrFlitOrderMutationSave,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: saveTypeData
        }
      }
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj)
      requestGraphQL(paramD).then(response => {
        if (response[paApis.paBuDlrFlitOrderMutationSave.ServiceCode].result === '1') {
          this.$message({
            message: response.paBuDlrFlitOrderMutationSave.msg,
            type: 'success'
          })
        } else {
          this.$message({
            message: response.paBuDlrFlitOrderMutationSave.msg,
            type: 'warning'
          })
        }
      })
    },
    //经销商简称
    getseComQueryChoDlrMul(data) {
      var calendDlr = []
      for (var i = 0; i < data.length; i++) {
        calendDlr.push(data[i].dlrShortName)
      }
      debugger
      this.fromLogisticsData.dlrName = calendDlr.join()
    },
    getsparepartCode() {
      this.sparepartVisible = false
    },
    selectDataFun(list) {
      this.sparepartVisible = false
      this.$refs.tableListLogistics.tableData = list
    },
    choosePart() {
      this.sparepartVisible = true
    },
    changeFlitNum(row, val) {
      this.flitNum = val
    },
    changeSalePrice(row, val) {
      this.salePrice = val
      row.flitReferAmount = this.flitNum * this.salePrice
    },
    //删除备件
    delDlr() {
      //静态删除
      Array.prototype.indexOf = function(val) {
        for (var i = 0; i < this.length; i++) {
          if (this[i] == val[i]) return i
        }
        return -1
      }
      Array.prototype.remove = function(val) {
        var index = this.indexOf(val)
        if (index > -1) {
          this.splice(index, 1)
        }
      }
      let selection = this.$refs.tableListLogistics.$refs.multipleTable
        .selection
      if (selection.length == 0) {
        this.$message({
          message: '请选择记录，然后再进行删除',
          type: 'warning'
        })
        return false
      } else {
        this.$refs.tableListLogistics.tableData.remove(selection)
      }
    },
    //导入路径
    beforeAvatarUpload(file) {
      this.reviseForm.fileName = file.name
      const extension = file.name.split('.')[1] === 'xls'
      const extension2 = file.name.split('.')[1] === 'xlsx'
      if (!extension && !extension2) {
        this.$alert('上传文件只能为Excel文件', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        })
      }
      return extension || extension2
    },
    beforeRemove(file, fileList) {
      this.$alert(
        `选择文件类型或大小不符，已移除 ${file.name}，请重新选择`,
        '提示',
        {
          confirmButtonText: '确定',
          type: 'warning'
        }
      )
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    uploadSuccess(response) {
      if (
        response.data.result === '1' &&
        response.data.rows != null &&
        response.data.rows.length > 0
      ) {
        var tempList = response.data.rows
        var implistTemp = []
        //导入Excel模块列头、数据是否必填
        // var excelCols = [
        //   { name: '备件号', required: true },
        //   { name: '网点价', required: true },
        //   { name: '建议零售价', required: true }
        // ]
        // var isErrorTemplate = false // 模版错误
        // var firstRow = tempList[0]
        // excelCols.forEach(col => {
        //   // 检查模版是否错误
        //   if (!firstRow.hasOwnProperty(col.name)) isErrorTemplate = true
        // })
        // if (isErrorTemplate) {
        //   this.$alert('Excel模版错误', '提示', {
        //     confirmButtonText: '确定',
        //     type: 'warning'
        //   })
        //   this.$refs.upload.clearFiles()
        //   this.reviseForm.importList = []
        //   return
        // }
        // var dataNullErrorMsg = ''
        // for (var i = 0; i < tempList.length; i++) {
        //   // 检查数据是否为空
        //   if (!this.$utils.isEmpty(dataNullErrorMsg)) break
        //   var row = tempList[i]
        //   for (var j = 0; j < excelCols.length; j++) {
        //     var col = excelCols[j]
        //     if (col.required == true && this.$utils.isEmpty(row[col.name])) {
        //       dataNullErrorMsg = `Excel第${i + 2}行“${col.name}”不能为空`
        //       break
        //     }
        //   }
        // }
        // if (!this.$utils.isEmpty(dataNullErrorMsg)) {
        //   this.$alert(dataNullErrorMsg, '提示', {
        //     confirmButtonText: '确定',
        //     type: 'warning'
        //   })
        //   this.$refs.upload.clearFiles()
        //   this.reviseForm.importList = []
        //   return
        // }
        // tempList.forEach(row => {
        //   var newRow = {
        //     partNo: row.partNo,
        //     partName: row.partName,
        //     partName: row.salePriceNr,
        //     userPriceNr: row.userPriceNr
        //   }
        //   implistTemp.push(newRow)
        // })
        this.reviseForm.importList = tempList
        this.$alert('文件导入成功', '提示', {
          confirmButtonText: '确定',
          type: 'success'
        })
      } else {
        this.$alert(`文件导入失败${response.data.msg}`, '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        })
      }
      this.$refs.upload.clearFiles()
    },
    //处理文件选择器改变事件
    handleChange(param) {
      var url = '/ly/mp/busicen/prc/excel/paDbPriceMutationImport.do' // API根据不同功能url不同，请配置到对应模块配置
      var that = this
      this.$requestImport(url, param, function(response) {
        that.uploadSuccess(response)
      })
    }
  }
}
</script>

