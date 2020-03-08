/**
* description: 经销商资金作业
* author: meijq
* createdDate: 2019-07-23
* logs 添加国际化 ydche
*/
<template>
<div class="app-container app-container-table"  >
   <template  v-if="!showDetail">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsShowMoreBtn="true"
    />
 </template>
    <div v-if="showDetail">
      <keep-alive>
        <fundDetails @tranPage="page"/>
        </keep-alive>
    </div>
   </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import fundDetails from "@/views/ve/capitalManage/bankMenoWork/fundDetails"
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name:'veBuDlrAccountd',
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    fundDetails
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veAccountQry,
      // 动态组件-按钮
      tableButtons: [
       { compKey: "btnKey1",type: "",size: "small",clickEvent: () => null,text:this.$t('ve.label.capitalAccount')},//资金上账
       { compKey: "btnKey2",type: "",size: "small",clickEvent: () => this.trunPage(),text: this.$t('ve.label.detailsOfFunds')},//资金详情信息
       { compKey: "btnKey3",type: "primary",size: "small",clickEvent: () => this.queryTable(1),text: this.$t('sys.button.query')},//查询
       { compKey: "btnKey4",type: "",size: "small",clickEvent: () => this.delete(),text: this.$t('sys.button.delete')},//删除
       { compKey: "btnKey5",type: "",size: "small",clickEvent: () => this.reset(),text: this.$t('sys.button.reset')},//重置
       { compKey: "btnKey6",type: "",size: "small",clickEvent: () => null,text: this.$t('ve.label.DistFundOperBatchIm')},//经销商资金作业批量导入
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        {compKey: 'compKey1', labelName:  this.$t('org.label.dlrName')/*经销商*/, codeField: 'dlrId', component: () => import('@/components/org/orgDlr'), type: 'popups', isMust: true,},
        {compKey: 'compKey2',  codeField: 'carBrandCode', component: () => import('@/components/org/AccountTypeQuery'), type: 'dropdownList', isMust: true,},
        {compKey: 'compKey3', labelName:  this.$t('org.label.capitalType')/*资金类型*/, codeField: 'cashTypeId', component: () => import('@/components/ve/PurcashType'), type: 'popups', isMust: true,},
        {compKey: 'compKey4', labelName: this.$t('org.label.fundReviewType')/*资金审核类型*/, codeField: 'businessType',lookuptype: 'VE0137', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false,},
        {compKey: 'compKey5', labelName: this.$t('org.label.bussinessClassName')/*明细类别*/, codeField: 'businessClass',lookuptype: 'VE0138',component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false,},
         {compKey: 'compKey6', labelName: this.$t('ve.label.purState')/*单据日期*/, codeField: 'createDate', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: false },
        {compKey: 'compKey7', labelName: this.$t('org.label.remittanceAmount')/*汇款金额*/, codeField: 'amount', component: () => import('@/components/org/commonInput/numberInput'), type: 'inputText', isMust: false},
        {compKey: 'compKey8', labelName: this.$t('ve.label.remark')/*备注*/, span:12,codeField: 'remark', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false},
        {compKey: 'compKey9', labelName: this.$t('org.label.allTotal')+' 0   '+ this.$t('org.label.totalAmount')+' 0 '/*总记录数：0元，金额总计：0元*/, component: () => import('@/components/org/label'), type: 'inputText', isMust: false},
      ],
        // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
          { prop: 'dlrCode', label: this.$t('org.label.dlrCode')/*经销商编码*/, width: null, align: 'center' },
          { prop: 'dlrShortName', label: this.$t('org.label.dlrShortName')/*经销商简称*/, width: null, align: 'center' },
          { prop: 'pvAccount', label: this.$t('org.label.accountsReceivable')/*收款账户*/, width: null, align: 'center' },
          { prop: 'amount', label: this.$t('ve.label.amount')/*金额*/, width: null, align: 'center' },
          { prop: 'purcashTypeId', label: this.$t('ve.label.businessTypeName')/*资金操作类型*/, width: null, align: 'center' },
          { prop: 'businessTypeName', label: this.$t('ve.label.businessClass')/*明细类别*/, width: null, align: 'center' },
          { prop: 'createDate', label: this.$t('org.label.remittanceDate')/*汇款日期*/, width: null, align: 'center' },
          { prop: 'remark', label: this.$t('ve.label.remark')/*备注*/, width: null, align: 'center' },
          { prop: 'updateControlId', label: this.$t('ve.label.updateControlId')/*并发控制*/, hidden: true,align: 'center' }
      ],
      //表单数据
      formField:{
        dlrId:'',
        cashTypeId:'',
        carBrandCode:'',
        businessType:'',
        businessClass:'',
        amount:null,
        remark:'',
        createDate:'',
        updateControlId:''
      },
      openWindows: {
		isShowStore: false, // 是否弹出专营店框
	  },
      rules: {
        dlrId: [
            { required: true, message: this.$t('org.message.pleaseChooseBrand')/*请选择品牌*/, trigger: 'blur' },
            { min: 1, message: '品牌选择不能为空', trigger: 'blur' }
        ]
      },
      showDetail:false,
      type1:"success",
      type2:'',
      selecRowtData:'',
    }
  },
  mounted() {
    // 调用AppMain中的方法设置网格高度（自适应）
    if(!this.showDetail){
      var parent = this.$utils.getParentView(this.$route.path, this.$parent);
      if (parent) {
        parent.setTableHeight()
      }
    }
  },
  methods: {
    //单击复选框事件
    select(row,column){
      this.selecRowtData = row;
      this.formField={
        dlrId:row.dlrShortName,
        cashTypeId:row.purcashTypeId,
        businessType:row.purcashTypeId,
        businessClass:row.businessTypeName,
        amount:row.amount,
        pvAccount:'',
        remark:row.remark,
        auditStatus:'',
        updateControlId:row.updateControlId,
        createDate:row.createDate
      }
    },
    //保存
    savePage(){
        const that = this;
        if (that.$utils.isEmpty(that.formField.dlrId)) {
          that.$message({
              message: this.$t('ve.label.selDlr')/*请选择经销商*/,
              type: 'warning',
              duration: 2000
          });
          return;
        }
        if (that.$utils.isEmpty(that.formField.amount)) {
          that.$message({
            message: this.$t('org.label.PleaseInput')+'  '+this.$t('ve.label.amount')/*请输入金额*/,
            type: 'warning',
            duration: 2000
          });
          return;
        }
        if (that.$utils.isEmpty(that.formField.cashTypeId)) {
          that.$message({
            message: this.$t('org.label.PleaseInput')+'  '+this.$t('ve.label.capitalType')/*请输入资金类型*/,
            type: 'warning',
            duration: 2000
          });
          return;
        }
        let queryObj = {
            //保存需要传 type="mutation"
            type:'mutation',
            // api配置
            apiConfig: veApis.veAccountSave,
            // 需要调用的API服务配置
            apiServices: [{
                //表格中台返回网格的字段
                apiQueryRow:[
                ]
            }],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
                pageSize: 1000,
                pageIndex: 1,
                //当前中台使用的名称有dataInfo、info，具体查看API文档
                dataInfo: that.formField
            }
            }

        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        requestGraphQL(paramD).then(response =>{
          if(response.data[veApis.veAccountSave.ServiceCode].result === '1'){
               this.$message({message:this.$t('sys.tips.esTip5')/*保存成功*/,type: 'success'});
               this.textQuery(1);
            }
        })
    },
    //获取显示
    handDialogVisibleFunc(val){
        this.dialogVisible = val
    },
    //获取设置状态组件的值
    getSetStatusCode(val) {
      this.formField.status = val;
    },
    //获取是否可用组件的值
    getIsEnableCode(val) {
      this.formField.isEnable = val;
    },
    //切换页面
    trunPage(page){
        this.showDetail = true
    },
    page(val){
      this.showDetail =false
    },
    //删除
    delete(){
        const that = this;

        if(that.selecRowtData == ''){
            this.$message({"message":this.$t('org.message.moreOneData')/*请至少选择一条数据*/,type: 'warning'});
            return false
        }
        let queryObj = {
          //保存需要传 type="mutation"
          type:'mutation',
          // api配置
          apiConfig: veApis.veAccountDel,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
              apiQueryRow:[]
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: 1000,
            pageIndex: 1,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.selecRowtData
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        requestGraphQL(paramD).then(response =>{
          if(response.data[veApis.veAccountDel.ServiceCode].result === '1'){
               this.$message({message:this.$t('sys.tips.esTip14')/*删除成功*/,type: 'success'});
               this.textQuery(1);
            }
        })
    },
  }
}
</script>
<style lang="scss" scoped>
.gridSelect .el-col{
  margin-bottom: 0px;
}
.el-date-editor{
  width: 100% !important;
}
.el-input__prefix{
  left:82%;
}
/deep/ .el-input__inner {
    height: 28px;
}
</style>
