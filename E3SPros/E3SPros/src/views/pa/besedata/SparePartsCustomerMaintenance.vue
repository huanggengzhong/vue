<!--
* description: 备件客户维护
* author: chchhui
* createdDate: 2019-10-15
* logs：
*  20191015 新增页面功能
-->
<template>
  <div class="app-container app-container-table">

    <div class="filter-container filter-params">

      <mix-form ref="list"
                :dynamic-form-fields="dynamicFormFieldss"
                :dynamicFieldsData="queryParams.dataInfo"
                :is-paging="true"
                :is-dialog="false" />

      <mix-button name="btns"
                  :dynamicButtons="btns"></mix-button>
    </div>

    <mix-table ref="tableList"
               :query-params="queryParams"
               :dynamic-table-cols="cols"
               :is-show-select="false"
               :is-paging="true"
               :is-dialog="false" />

    <el-dialog title="备件客户详细信息维护"
               :visible.sync="dialogDetailHistoryVisible"
               width="80%"
               :append-to-body="true"
               :close-on-click-modal="false">
      <div class="filter-container filter-params">
        <el-button size="small"
                   type="primary"
                   @click="preserve">保存</el-button>
        <el-button size="small"
                   @click="resetDialog">重置</el-button>

        <mix-form ref="list"
                  :dynamic-form-fields="dynamicFormFields"
                  :dynamicFieldsData="dynamicFieldsData"
                  :is-paging="true"
                  :is-dialog="false" />
      </div>
    </el-dialog>

    <Ling :seComQueChoDlrVisible="seComQueChoDlrVisible" />
  </div>
</template>

<script>
import { paApis } from '@/api/graphQLApiList/pa'
import LookupValue from '@/components/org/LookupValue'
import mixForm from '@/components/basicComponent/mixForm'
import mixTable from '@/components/basicComponent/mixTable'
import mixButton from '@/components/basicComponent/mixButton'
import Ling from '@/components/se/seCommonQueryChooseDlr'
export default {
  components: {
    mixForm,
    mixTable,
    LookupValue,
    Ling,
    mixButton
  },

  data () {
    return {
      dialogDetailHistoryVisible: false,
      seComQueChoDlrVisible: false,
      row: {
        category: '',
        clientcode: '',
        abbreviation: '',
        dealer: '',
        territory: '',
        organization: '',
        province: '',
        city: '',
        district: '',
        linkman: '',
        contactNumber: '',
        businessPhone: '',
        facsimile: '',
        email: '',
        status: '',
        depositbank: '',
        accountOpening: '',
        invoiceApplicationName: '',
        companyIdNumber: '',
        theInvoiceAddress: '',
        settlementPeriod: '',
        creditLine: '',
        markupPercentage: '',
        referencePrice: '',
        agreementPeriod: '',
        to: '',
        note: ''
      },
      //表格的配置
      cols: [
        {          label: '客户编码', codeField: 'custCode', comps: [{ type: 'link', event: this.linkDialog }]
        },
        { label: '经销商简称', codeField: 'custShortName', width: 100 },
        { label: '经销商类别', codeField: 'custClassName', width: 100 },
        { label: '联系人', codeField: 'linkman', width: 100 },
        { label: '联系电话', codeField: 'linkTel', width: 100 },
        { label: '状态', codeField: 'isEnable', width: 100 },
        { label: '协议开始时间', codeField: 'policyBegDate', width: 150 },
        { label: '协议截止时间', codeField: 'policyEndDate', width: 150 },
        { label: '结算周期(月)', codeField: 'accountPeriod', width: 100 },
        { label: '信用额度(元)', codeField: 'creditQuota', width: 100 },
        { label: '欠款金额', codeField: 'debtAmount', width: 100 },
        { label: '经销商地址', codeField: 'organization', width: 100 },
        { label: '邮政编码', codeField: 'zip', width: 100 },
        { label: '传真', codeField: 'custFax', width: 100 },
        { label: 'email', codeField: 'email', width: 100 },
        { label: '备注', codeField: 'remark', width: 100 }
      ],
      queryParams: {
        APIUrl: paApis.paDbDlrCustQueryFindAll.APIUrl,
        InputType: paApis.paDbDlrCustQueryFindAll.InputType,
        ServiceCode: paApis.paDbDlrCustQueryFindAll.ServiceCode,
        dataInfo: {
          custCode: '',
          custShortName: '',
          custClassName: ''
        },
        apiQueryRow: [
          "accountPeriod",
          "addRate",
          "addrCity",
          "addrCounty",
          "addrProvince",
          "bankAccount",
          "bankName",
          "basePriceType",
          "column1",
          "column10",
          "column2",
          "column3",
          "column4",
          "column5",
          "column6",
          "column7",
          "column8",
          "column9",
          "compTaxNo",
          "createdDate",
          "createdName",
          "creator",
          "creditDate",
          "creditQuota",
          "custAddr",
          "custAutoCode",
          "custClassCode",
          "custClassName",
          "custCode",
          "custFax",
          "custFullName",
          "custShortName",
          "custTel",
          "debtAmount",
          "dlrArea",
          "dlrId",
          "dlrManager",
          "email",
          "groupCode",
          "groupId",
          "guno",
          "invoiceAddr",
          "invoiceAddrCity",
          "invoiceAddrCounty",
          "invoiceAddrProvince",
          "invoiceName",
          "isEnable",
          "isSystem",
          "lastUpdatedDate",
          "linkMan",
          "linkTel",
          "modifier",
          "modifyName",
          "mycatOpTime",
          "oemCode",
          "oemId",
          "orderNo",
          "paCustId",
          "partBrandCode",
          "policyBegDate",
          "policyEndDate",
          "remark",
          "sdpOrgId",
          "sdpUserId",
          "sourceDlrId",
          "updateControlId",
          "zip"
        ]
      },
      dynamicFormFields: [
        {
          label: '经销商类别',
          codeField: 'category',
          isShowLabel: true,
          lookuptype: 'PA0043',
          span: 8,
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.dynamicFormFields.flitType = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        {
          label: '客户编码',
          codeField: 'custCode',
          type: 'inputTxt',
          span: 8,
          event: this.handleClientcode
        },
        {
          label: '经销商简称',
          codeField: 'abbreviation',
          type: 'inputTxt',
          span: 8,
          readonly: true
        }, {
          label: '经销商全称',
          codeField: 'dealer',
          type: 'inputTxt',
          span: 8,
          readonly: true
        }, {
          label: '经销商区域',
          codeField: 'territory',
          type: 'inputTxt',
          span: 8,
          readonly: true
        }, {
          label: '机构代码',
          codeField: 'organization',
          type: 'inputTxt',
          span: 8,
          readonly: true
        },
        {
          label: '省',
          codeField: 'addrProvince',
          isShowLabel: true,
          lookuptype: 'PA0043',
          span: 8,
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.dynamicFieldsData.province = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        {
          label: '市',
          codeField: 'addrCity',
          isShowLabel: true,
          lookuptype: 'PA0043',
          span: 8,
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.dynamicFieldsData.city = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        }, {
          label: '区(县)',
          codeField: 'addrCounty',
          isShowLabel: true,
          lookuptype: 'PA0043',
          span: 8,
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.dynamicFieldsData.district = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        {
          label: '经销商地址',
          codeField: 'organization',
          type: 'inputTxt',
          span: 24,
          readonly: true
        },
        {
          label: '联系人',
          codeField: 'linkman',
          type: 'inputTxt',
          span: 8,
          readonly: true
        },
        {
          label: '联系电话',
          codeField: 'contactNumber',
          type: 'inputTxt',
          span: 8,
          readonly: true
        },
        {
          label: '办公电话',
          codeField: 'businessPhone',
          type: 'inputTxt',
          span: 8,
          readonly: true
        },
        {
          label: '传真',
          codeField: 'facsimile',
          type: 'inputTxt',
          span: 8,
          readonly: true
        },
        {
          label: 'email',
          codeField: 'email',
          type: 'inputTxt',
          span: 8,
          readonly: true
        },
        {
          label: '状态',
          codeField: 'status',
          isShowLabel: true,
          lookuptype: 'PA0043',
          span: 8,
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.dynamicFieldsData.status = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        }, {
          label: '开户银行',
          codeField: 'depositbank',
          type: 'inputTxt',
          span: 8,
          rules: ''
        }, {
          label: '开户账号',
          codeField: 'accountOpening',
          type: 'inputTxt',
          span: 8,
          rules: { required: true, message: '开户账号', trigger: 'blur' }
        },
        {
          label: '发票申请名',
          codeField: 'invoiceApplicationName',
          type: 'inputTxt',
          span: 8,
          rules: { required: true, message: '发票申请名', trigger: 'blur' }
        },
        {
          label: '公司税号',
          codeField: 'companyIdNumber',
          type: 'inputTxt',
          span: 8,
          rules: { required: true, message: '公司税号', trigger: 'blur' }
        },
        {
          label: '发票地址',
          codeField: 'invoiceAddr',
          type: 'inputTxt',
          span: 8,
          rules: { required: true, message: '发票地址', trigger: 'blur' },
          readonly: true
        },
        {
          label: '结算周期(月)',
          codeField: 'yue ',
          type: 'inputTxt',
          span: 8,
          rules: { required: true, message: '结算周期(月)', trigger: 'blur' }
        }, {
          label: '信用额度(元)',
          codeField: 'creditLine  ',
          type: 'inputTxt',
          span: 8,
          rules: { required: true, message: '信用额度(元)', trigger: 'blur' }
        },
        {
          label: '加价率(%)',
          codeField: 'markupPercentage ',
          type: 'inputTxt',
          span: 8,
          rules: { required: true, message: '加价率(%)', trigger: 'blur' }
        }, {
          label: '参考基价',
          codeField: ' referencePrice',
          isShowLabel: true,
          lookuptype: 'PA0043',
          span: 8,
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.dynamicFieldsData.flitType = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
        {
          label: '协议期限',
          codeField: 'policyBegDate ',
          type: 'inputDate',
          span: 8,
          rules: { required: true, message: '协议期限', trigger: 'blur' }
        },

        {
          label: '至',
          codeField: 'to ',
          type: 'policyEndDate',
          span: 8,
          rules: { required: true, message: '至', trigger: 'blur' }
        },
        {
          label: '备注',
          codeField: 'remark',
          type: 'inputTxt',
          span: 24
        }

      ],
      dynamicFieldsData: {
        category: '',
        clientcode: '',
        abbreviation: '',
        dealer: '',
        territory: '',
        organization: '',
        province: '',
        city: '',
        district: '',
        linkman: '',
        contactNumber: '',
        businessPhone: '',
        facsimile: '',
        email: '',
        status: '',
        depositbank: '',
        accountOpening: '',
        invoiceApplicationName: '',
        companyIdNumber: '',
        theInvoiceAddress: '',
        settlementPeriod: '',
        creditLine: '',
        markupPercentage: '',
        referencePrice: '',
        policyBegDate: '',
        policyEndDate: '',
        remark: ''
      },
      // 主页fom
      dynamicFormFieldss: [
        {
          label: '客户编码',
          codeField: 'custCode',
          type: 'inputTxt',
          span: 8,
        },
        {
          label: '经销商简称',
          codeField: 'custShortName',
          type: 'inputTxt',
          span: 8,
        },
        {
          label: '经销商类别',
          codeField: 'custClassName',
          isShowLabel: true,
          lookuptype: 'PA0043',
          span: 8,
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.dynamicFieldsDatas.category = val
          },
          isComponent: true,
          component: () => import('@/components/org/LookupValue')
        },
      ],
      // dynamicFieldsDatas: {
      //   category: '',
      //   clientcode: '',
      //   abbreviation: '',
      // }

      btns: [
        {
          name: "exportDate",
          text: '新建',
          clickEvent: "construction",
          position: "left",
          argument: { type: "exportDate" }
        },
        {
          name: "exportDate",
          text: '查询',
          clickEvent: "fetchData",
          position: "left",
          argument: { type: "exportDate" }
        },
        {
          name: "close",
          text: "关闭",
          clickEvent: "closeDialog",
          position: "left",
          argument: { type: "close" }
        }
      ]
    }
  },
  methods: {
    // 查询
    fetchData () {
      this.$refs.tableList.queryList()
    },
    // 重制
    resets () {
      console.log("11")
      this.dynamicFieldsDatas.category = ""
      this.dynamicFieldsDatas.clientcode = ""
      this.dynamicFieldsDatas.abbreviation = ""

    },
    //  赋值 
    linkDialog (row) {
      this.row = row
      this.dialogDetailHistoryVisible = true
      this.seComQueChoDlrVisible = false
      for (let i in this.dynamicFieldsData) {
        this.dynamicFieldsData[i] = row[i]
      }
    },
    closeDialog () {
      this.dialogFormVisible = false
    },
    getBillType (val) {
      console.log(val)
      this.queryParams.dataInfo.billType = val
    },
    reset () {
      this.queryParams.dataInfo.inStoreCode = ''
      this.queryParams.dataInfo.billType = ''
      this.queryParams.dataInfo.relateOrderCode = ''
    },
    handleClientcode () {

      this.seComQueChoDlrVisible = true
      this.dialogDetailHistoryVisible = false
    },
    // 弹框保存
    preserve () {
      console.log(this.dynamicFieldsData)
      for (let i in this.dynamicFieldsData) {
        if (this.dynamicFieldsData[i] === undefined) {
          console.log(this.dynamicFieldsData[i] + "bu 能为空")
          return false

        }

      }
      // let dynamicFieldsData = this.dynamicFieldsData

    },
    // 弹框重置
    resetDialog () {
      for (let i in this.dynamicFieldsData) {
        this.dynamicFieldsData[i] = this.row[i]
      }
    },
    // 新建跳转
    construction () {
      this.$router.push({ name: 'paNewFlitOrder' })
    }

  }

}
</script>
