<template>
  <div class="app-container app-container-table orgManage">
    <one-table-template ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsInitTable="false"
      :dynamicIsColumnDrop="true"
    />

  <userAuthorization :key="authKey" :handleVisible="showAuthorz" :handleTitle="handleTitle" :editData="selectDate" @visible="closeAuthorz" @changeCode="getUserAuthorization"></userAuthorization>
  <toView ref="toView" :key="showToView"  :handleVisible="toViewd" :roleOrgType="roleOrgType" :roleName='seleUserName' :userId="userId"></toView>

  </div>
</template>
<script>
import { orgApis } from '@/api/graphQLApiList/org'
import { requestGraphQL } from '@/api/commonRequest'
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import OneTableTemplate from '@/components/templates/oneTable'
import userAuthorization from './userAuthorization'
import toView from './toView'
import { CacheConfig } from '@/cache/configCache/index'
export default {
  mixins:[oneTableWithViewTemplateMixins],
  name:"orguserRightsManagement",
  components: {
    OneTableTemplate,
    userAuthorization,
    toView
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
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    return {
      apiConfig: orgApis.mdmOrgEmployeeQueryFindAll,
      // 动态组件-按钮
       tableButtons: [
           {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), 
           name:'search',
          position:'right',
          fuzzySearch:true,
           text: this.$t('sys.button.query')
        },//查询
           {compKey: 'btnKey2', type: '', size: 'small', 
           name:'reset',
          position:'left',
           clickEvent: () => this.reset(), text: this.$t('sys.button.reset')
        },//重置
           {compKey: 'btnKey3', type: '', size: 'small',
           name:'userAuthorizationd',
          position:'left',
            clickEvent: () => this.userAuthorizationd(), text: this.$t('org.label.userAuthorization')/*用户授权*/},
           {compKey: 'btnKey4', type: '', size: 'small',
           name:'checkAuthorization',
          position:'left',
            clickEvent: () => this.checkAuthorization(), text: this.$t('org.label.viewPermission')/*查看权限*/},
           {compKey: 'btnKey5', type: '', size: 'small',
            name:'checkPerson',
          position:'left',
            clickEvent: () => this.checkPerson(), text: this.$t('org.label.viewingRoles')/*查看角色*/},
       ],
         // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
        {compKey: 'compKey1', labelName: this.$t('org.label.UserName')/*用户名*/, codeField: 'userName', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey2', labelName: this.$t('org.label.employeeNumber')/*员工编号*/, codeField: 'empCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey3', labelName: this.$t('org.label.employeeName')/*员工姓名*/, codeField: 'empName', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path]&& CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
          { prop: 'userName', label: this.$t('org.label.UserName')/*用户名*/, width: 250, align: 'center' },
          { prop: 'empCode', label: this.$t('org.label.employeeNumber')/*员工编号*/, width: 250, align: 'center' },
          { prop: 'empName', label: this.$t('org.label.employeeName')/*员工姓名*/, width: 350, align: 'center' },
          { prop: 'orgName', label: this.$t('org.label.orgName')/*员工姓名*/, width: 300, align: 'center' },
          { prop: 'userId', label: '用户Id', hidden:true, align: 'center' }
      ],
      toViewd:false,
      formField:{
        userName:'',
        empCode:'',
        empName:'',
      },
      selectRowsDatas:{},
      handleTitle:0,
      showAuthorz:false,
      selectDate:{},
      authKey:'a',
      showToView:'b',
      //组织类型
      roleOrgType:'',
      //选中的角色名称
      seleUserName:'',
      //选中的用户ID
      userId:'',
    }
  },
  methods: {
    getUserAuthorization(){
      
    },
    closeAuthorz(){
      this.showAuthorz = false;
    },
    selectRowsData(row){
      this.selectRowsDatas = row
    },
    //用户授权
    userAuthorizationd(){
      let obj = this.selectRowsDatas
      const that = this.$refs.multipleTable;

      let selectData = that.currentRow;
      if(selectData == null){
          this.$message({"message":this.$t('org.message.selOneData')/*请选择一条数据*/,type: 'warning'});
          return false
      }
      this.handleTitle = 1;
      this.authKey = that.authKey +1;
      this.showAuthorz = true;
      this.selectDate = obj

    },
    //查看权限
    checkAuthorization(){
     // let obj = this.selectRowsDatas
      const that = this.$refs.multipleTable;
      let selectData = that.currentRow;
      if(selectData == null){
          this.$message({"message":this.$t('org.message.selOneData')/*请选择一条数据*/,type: 'warning'});
          return false
      }
      this.handleTitle = 0;
      this.showAuthorz = true;
      this.authKey = this.authKey +1;
      this.selectDate = selectData

    },
    //查看角色
    checkPerson(){
      const that = this.$refs.multipleTable;
      let obj = this.selectRowsDatas
      let selectData = that.currentRow;
      if(selectData == null){
          this.$message({"message":this.$t('org.message.selOneData')/*请选择一条数据*/,type: 'warning'});
          return false
      }
      this.toViewd = true;
      this.seleUserName =  obj.empName;
      this.userId =  obj.userId;
      // this.$refs.toView.queryData(userId)
      this.showToView = this.showToView+'1';
      this.roleOrgType = obj.orgTreeId;
    }
  }
}
</script>
