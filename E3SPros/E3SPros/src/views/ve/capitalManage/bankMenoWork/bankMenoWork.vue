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
  name:'veBankMenoWork',
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
       { compKey: "btnKey1",type: "",size: "small",clickEvent: () => null,text: this.$t('ve.label.capitalAccount')},//资金上账
       { compKey: "btnKey2",type: "",size: "small",clickEvent: () => this.trunPage(),text: this.$t('ve.label.detailsOfFunds')},//资金详情信息
       { compKey: "btnKey2",type: "",size: "small",clickEvent: () => this.savePage(),text: this.$t('ve.label.save')},//保存
       { compKey: "btnKey3",type: "",size: "small",clickEvent: () => this.queryTable(1),text: this.$t('sys.button.query')},//查询
       { compKey: "btnKey4",type: "",size: "small",clickEvent: () => this.delete(),text: this.$t('sys.button.delete')},//删除
       { compKey: "btnKey4",type: "",size: "small",clickEvent: () => this.reset(),text: this.$t('ve.label.reset')}//充值
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        {compKey: 'compKey1', labelName: this.$t('ve.label.dlrName')/*经销商*/, codeField: 'dlrId',isRequire:true, component: () => import('@/components/org/orgDlr'), type: 'popups', isMust: true,},
        {compKey: 'compKey2',  codeField: 'carBrandCode', component: () => import('@/components/org/AccountTypeQuery'), type: 'dropdownList', isMust: true,},
        {compKey: 'compKey3', labelName: this.$t('ve.label.purcashTypeId')/*资金类型*/,isRequire:true, codeField: 'cashTypeId', component: () => import('@/components/ve/PurcashType'), type: 'popups', isMust: true,},
        {compKey: 'compKey4', labelName: this.$t('ve.label.businessTypeName')/*资金操作*/, codeField: 'businessType',lookuptype: 'VE0137', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false,},
        {compKey: 'compKey5', labelName: this.$t('ve.label.bussinessClassName')/*明细类别*/, codeField: 'businessClass',lookuptype: 'VE0138',component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false,},
        {compKey: 'compKey6', labelName:  this.$t('ve.label.amount')/*汇款金额*/, codeField: 'amount', component: () => import('@/components/org/commonInput/numberInput'), type: 'inputText', isMust: false},
        {compKey: 'compKey7', labelName:  this.$t('ve.label.purState')/*单据日期*/, codeField: 'createDate', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: false },
        {compKey: 'compKey8', labelName:  this.$t('ve.label.pvBandk')/*到款银行*/, codeField: 'pvBank',lookuptype: 'VE0139',component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false,},
        {compKey: 'compKey9', labelName: this.$t('ve.label.pvAccount')/*到款账户*/, codeField: 'pvAccount',lookuptype: 'VE0139',component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false,},
        {compKey: 'compKey10', labelName:this.$t('ve.label.bankNumber')/*银行流水*/, codeField: 'bankNumber', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false},
        {compKey: 'compKey11', labelName: this.$t('ve.label.remark')/*备注*/,codeField: 'remark', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false}
      ],
        // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
          { prop: 'dlrShortName', label: this.$t('ve.label.dlrShortName'), width: 110, align: 'center' },//经销商简称
          { prop: 'pvAccount', label:this.$t('ve.label.dlrShortName'), width: 110, align: 'center' },//账户名称
          { prop: 'businessTypeName', label: this.$t('ve.label.businessTypeName'), width: 110, align: 'center' },//账户类型
          { prop: 'amount', label: this.$t('ve.label.amount'), width: 110, align: 'center' },//金额
          { prop: 'businessTypeName', label: this.$t('ve.label.businessTypeName'), width: 110, align: 'center' },//资金操作类型
          { prop: 'businessClassName', label: this.$t('ve.label.bussinessClassName'), width: 110, align: 'center' },//明细类别
          { prop: 'purState', label: this.$t('ve.label.purState'), width: 110, align: 'center' },//单据日期
          { prop: 'pvBandk', label: this.$t('ve.label.pvBandk'), width: 110, align: 'center' },//到款银行
          { prop: 'pvAccount', label: this.$t('ve.label.pvAccount'), width: 110, align: 'center' },//到款账户
          { prop: 'bankNumber', label: this.$t('ve.label.bankNumber'), width: 110, align: 'center' },//银行流水
          { prop: 'ticketNo', label: this.$t('ve.label.ticketNo'), width: 110, align: 'center' },//票据号码
          { prop: 'outTicketDate', label: this.$t('ve.label.outTicketDate'), width: 110, align: 'center' },//出票日
          { prop: 'expireDate', label: this.$t('ve.label.expireDate'), width: 110, align: 'center' },//到期日
          { prop: 'recieveTicketDate', label: this.$t('ve.label.recieveTicketDate'), width: 110, align: 'center' },//收票日
          { prop: 'ticketType', label: this.$t('ve.label.ticketType'), width: 110, align: 'center' },//票据形式
          { prop: 'isOutTicketMan', label: this.$t('ve.label.isOutTicketMan'), width: 110, align: 'center' },//是否出票人
          { prop: 'outTicketManName', label: this.$t('ve.label.outTicketManName'), width: 110, align: 'center' },//出票人
          { prop: 'tickBank', label: this.$t('ve.label.tickBank'), width: 110, align: 'center' },//出票银行
          { prop: 'remark', label: this.$t('ve.label.remark'), width: 110, align: 'center' },//备注
          { prop: 'updateControlId', label: '并发控制', hiddern:true,align: 'center' }
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
        pvBank:"",
        bankNumber:"",
        updateControlId:''
      },
      rules: {
        dlrId: [
            { required: true, message: '请选择品牌', trigger: 'blur' },
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
    select(row,colum){
      this.selecRowtData = row;
      let selectList= this.list[row.index]
      console.log(selectList);
      this.formField={
        dlrId:selectList.dlrCode, //经销商ID
        carBrandCode:'',
        cashTypeType:'',
        cashTypeId:selectList.cashTypeId,//资金类型
        businessType:selectList.businessType,//资金操作
        businessClass:selectList.businessClass, //资金类型
        amount:selectList.amount,        //金额
        createDate:selectList.createDate,  //单据日期
        pvBank:selectList.tickBank,      //到账银行
        pvAccount:selectList.pvAccount,   //到账账户
        bankNumber:selectList.bankNumber,  //银行流水号
        remark:selectList.remark,      //备件
        ticketNo:selectList.ticketNo,    //票据号码
        outTicketDate:selectList.outTicketDate, //出票日
        expireDate:selectList.expireDate,    //到期日
        recieveDate:selectList.recieveDate,   //收票日
        ticketType:selectList.ticketType,    //票据形式
        isOutTicketMan:selectList.isOutTicketMan,  //是否出票人
        outTicketMan:selectList.outTicketManName,    //出票人
        outTicketBank:selectList.tickBank,   //出票银行
        auditStatus:'',
        creatorUserId:'',
        dlrAccountRInfoId:'',
        updateControlId:selectList.updateControlId //并发ID
      }
        var parent = this.$utils.getParentView(this.$route.path, this.$parent);
        if(this.formField.businessClass == '资金类型'){
            this.isDetailInput = true;
            parent.setTableHeight()
        }else{
            this.isDetailInput = false;
            parent.setTableHeight()
        }
    },
    //保存
    savePage(){
        const that = this;
        if (that.$utils.isEmpty(that.formField.dlrId)) {
          that.$message({
              message: this.$t('org.label.chooseOrgName') /*'请选择经销商',*/,
              type: 'warning',
              duration: 2000
          });
          return;
        }
        if (that.$utils.isEmpty(that.formField.amount)) {
          that.$message({
            message:  this.$t('org.label.PleaseInput')+'  '+this.$t('ve.label.amount')/*请输入金额*/,
            type: 'warning',
            duration: 2000
          });
          return;
        }
        if (that.$utils.isEmpty(that.formField.cashTypeId)) {
          that.$message({
            message:  this.$t('org.label.PleaseInput')+'  '+this.$t('ve.label.capitalType')/*请输入资金类型*/,
            type: 'warning',
            duration: 2000
          });
          return;
        }
        if (that.$utils.isEmpty(that.formField.pvBank)) {
          that.$message({
            message: this.$t('org.label.PleaseInput')+'  '+this.$t('org.label.pvBankName')/*'请输入到账银行',*/,
            type: 'warning',
            duration: 2000
          });
          return;
        }
        if (that.$utils.isEmpty(that.formField.pvAccount)) {
          that.$message({
            message: this.$t('org.label.PleaseInput')+'  '+this.$t('org.label.pvBankName')/*''请输入到账账号,*/,
            type: 'warning',
            duration: 2000
          });
          return;
        }
        if (that.$utils.isEmpty(that.formField.bankNumber)) {
          that.$message({
            message: '请输入银行流水号',
            type: 'warning',
            duration: 2000
          });
          return;
        }
        if(that.isDetailInput == true){
            if (that.$utils.isEmpty(that.formField.ticketNo)) {
            that.$message({
              message: '请输入票据号码',
              type: 'warning',
              duration: 2000
            });
            return;
          }
          if (that.$utils.isEmpty(that.formField.outTicketDate)) {
            that.$message({
              message: '请输入出票日',
              type: 'warning',
              duration: 2000
            });
            return;
          }
          if (that.$utils.isEmpty(that.formField.expireDate)) {
            that.$message({
              message: '请输入到期日',
              type: 'warning',
              duration: 2000
            });
            return;
          }
          if (that.$utils.isEmpty(that.formField.recieveDate)) {
            that.$message({
              message: '请输入收票日',
              type: 'warning',
              duration: 2000
            });
            return;
          }
          if (that.$utils.isEmpty(that.formField.isOutTicketMan)) {
            that.$message({
              message: '请输入是否出票人',
              type: 'warning',
              duration: 2000
            });
            return;
          }
          if (that.$utils.isEmpty(that.formField.outTicketMan)) {
            that.$message({
              message: '请输入出票人',
              type: 'warning',
              duration: 2000
            });
            return;
          }
          if (that.$utils.isEmpty(that.formField.outTicketBank)) {
            that.$message({
              message: '请输入出票银行',
              type: 'warning',
              duration: 2000
            });
            return;
          }
        }


        let queryObj = {
          //保存需要传 type="mutation"
          type:'mutation',
          // api配置
          apiConfig: veApis.veAccountSave,
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
            dataInfo: that.formField
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        requestGraphQL(paramD).then(response =>{
          if(response.data[veApis.veAccountSave.ServiceCode].result === '1'){
               this.$message({message:"保存成功",type: 'success'});
               that.reset();
               that.$refs.multipleTable.clearSelection();

            }
        })
    },
    //重置
    reset(){
      this.formField={
        dlrId:'',
        carBrandCode:'',
        cashTypeType:'',
        cashTypeId:'',
        businessType:'',
        businessClass:'',
        amount:'',
        createDate:'',
        pvBank:'',
        pvAccount:'',
        bankNumber:'',
        remark:'',
        ticketNo:'',
        outTicketDate:'',
        expireDate:'',
        recieveDate:'',
        ticketType:'',
        isOutTicketMan:'',
        outTicketMan:'',
        outTicketBank:'',
        auditStatus:'',
        creatorUserId:'',
        dlrAccountRInfoId:'',
        updateControlId:''
      }
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
    //改变页现实的条数并重新查询
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.textQuery()
    },
    //翻页
    handleCurrentChange(val) {
       this.listQuery.pageIndex = val
       this.textQuery()
    },
    //切换页面
    trunPage(page){
        this.showDetail = true
    },
    page(val){
      this.showDetail =false
    },
    //删除
    delect(){
        const that = this;
        if(that.selecRowtData == ''){
            this.$message({"message":"请至少选择一条数据",type: 'warning'});
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
            dataInfo: that.formField
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        requestGraphQL(paramD).then(response =>{
          if(response.data[veApis.veAccountDel.ServiceCode].result === '1'){
               this.$message({message:"删除成功",type: 'success'});
               that.$refs.multipleTable.clearSelection();
            }
        })
    },
    // 控制经销商弹框
	showStoreOnly() {
		this.openWindows.isShowStore = true;
		this.componentsKeys.storeKey++;
    },
    //获取经销商值
    changeStoreCode(val) {
		this.formField.dlrId = val;
		this.openWindows.isShowStore = false;
    },
    //获取资金类型的值
    getPurcashType(val) {
      this.formField.PurcashType = val;
    },
    //获取联动资金联动值
    getlookupValue1(val) {
        this.formField.carBrandCode = val;
    },
    getlookupValue2(val) {
        this.formField.businessType = val;
    },
    getlookupValue3(val) {
        this.formField.businessClass = val;
        var parent = this.$utils.getParentView(this.$route.path, this.$parent);
        if(val == 1){
            this.isDetailInput = true;
            parent.setTableHeight()
        }else{
            this.isDetailInput = false;
            parent.setTableHeight()
        }
    },
    getlookupValue4(val) {
        this.formField.pvBank = val
    },
    getlookupValue5(val) {
        this.formField.pvAccount = val
    },
    getlookupValue6(val) {
        this.formField.ticketType = val
    },
    getlookupValue7() {

    },
    reload(){
      this.$router.go(0);
    }
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
