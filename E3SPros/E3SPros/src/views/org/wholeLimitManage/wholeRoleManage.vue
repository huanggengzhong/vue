<!--
* description: 全局角色管理
* author: luojx
* createdDate: 2019-07-31
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsInitTable="true"
      :dynamicIsColumnDrop="true"
    />

    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>

     <userAuthorization :key="authKey" :handleVisible="showAuthorz" :handleTitle="handleTitle" :editData="selectDate" @visible="closeAuthorz"></userAuthorization>
     <addUserAuthorization :orgId="formField.orgId" :key="modalData.addPermissSettingKey" :handleVisible="modalData.addPermissSettingShow" :handleTitle="modalData.addPermissSettingTitle" :editData="modalData.addPermissSettingData"></addUserAuthorization>
  </div>
</template>
<script>
import userAuthorization from '@/views/org/permissionManage/roleAuthManage/userAuthorization'
import addUserAuthorization from '@/views/org/permissionManage/roleAuthManage/addUserAuthorization'
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from '@/api/graphQLApiList/org'
import OneTableTemplate from '@/components/templates/oneTable'
import Edit from './edit'
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name:"orgWholeRoleManage",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit,
    userAuthorization,
    addUserAuthorization,
  },// 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},

  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.sysRoleQueryGloableByPage,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.add(), text:this.$t('sys.button.add')},// '新增'
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.checkAuthorization(), text: this.$t('org.label.ViewPermissions')},/*查看权限*/
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.userAuthorizationd(), text:this.$t('org.label.funPreSettings')},/*功能权限设置*/
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.reset(), text:this.$t('sys.button.reset')},//重置
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [

        // {compKey: 'compKey1', labelName: this.$t('org.label.roleCode'), codeField: 'roleCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//角色编码
        {compKey: 'compKey2', labelName:this.$t('org.label.roleName'), codeField: 'roleName', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//j角色名称
        // 组织类型（值列表）
        {compKey: 'compKey3', labelName: this.$t('org.label.orgTypeName'),  lookuptype:"BASE0003", codeField: 'roleOrgType', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},
      ],
      // 动态生成网格列
      tableCols: this.getCols(),



      //表单查询数据
      formField:{
        roleCode: '',
        roleName: '',
        roleOrgType:''
      },
      //查看权限
      authKey:'a',
      showAuthorz:false,
      selectDate:{},
      showAuthorz: false,
      handleTitle:0,
      // 是否使用刷新Key的方式刷新弹窗
      resetDialogKey: false
    }
  },
  methods: {
    del() {
      console.info('删除')
    },
    closeAuthorz(){
      this.showAuthorz = false;
    },
     checkAuthorization(){
      const that = this.$refs.multipleTable;
      let selectData = that.currentRow;
      if(selectData == null){
          this.$message({"message":this.$t('org.message.selOneData'),/*请选择一条数据*/type: 'warning'});
          return false
      }
      this.handleTitle = 0;
      this.showAuthorz = true;
      this.authKey = this.authKey +1;
      this.selectDate = selectData;
    },
     userAuthorizationd(){
      const that = this.$refs.multipleTable;

      let selectData = that.currentRow;
      if(selectData == null){
          this.$message({"message":this.$t('org.message.selOneData'),/*请选择一条数据*/type: 'warning'});
          return false
      }
      this.handleTitle = 1;
      this.authKey = that.authKey +1;
      this.showAuthorz = true;
      this.selectDate = selectData;
    },
       // 编辑按钮事件
    edit(index) {
      var curIndex = index

      const that = this.$refs.multipleTable
      if (curIndex === undefined || curIndex === null) {
        var currentRow
        if (that.isMul === true) {
          // 多选
          var selectData = that.selection
          if (selectData.length > 0) {
            currentRow = selectData[0]
          }
        } else {
          // 单选
          currentRow = that.currentRow
        }
        if (currentRow) {
          curIndex = currentRow.index
        }
      }

      if (curIndex === undefined || curIndex === null) {
        this.$alert('请选择需要修改的数据', '提示')
        return
      }
      this.editRowData = that.list[curIndex]
       this.editRowData.enabled=String(this.editRowData.enabled)
      this.showEdit('edit')
    },
    getCols() {
      var cols = [
        { prop: 'controlBtn', label:this.$t('sys.content.operate'), codeField: 'controlBtn', width: 60, align: 'center', fixed: true, isComponent: true,
          comps:[{compKey: 'propKey0', align: 'center', labelName:this.$t('sys.button.edit'), codeField: 'editControlBtn', clickEvent: this.edit, component: () => import('@/components/org/linkButton')}]

        }//操作
      ]
      if (CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([

        { prop: 'roleCode', label:this.$t('org.label.roleCode'), width: null, align: 'center' },//角色编码
        { prop: 'roleName', label: this.$t('org.label.roleName'), width: null, align: 'center' },//角色名称
         { prop: 'builtInName', label:this.$t('org.label.builtInName'), width: null, align: 'center' },//是否内置
        { prop: 'enableStatus', label:this.$t('org.label.isAble'), width: null, align: 'center'},//启用状态
        { prop: 'orgTypeName', label: this.$t('org.label.orgTypeName'), width: null, align: 'center' },//组织类型

        { prop: 'roleDesc', label: '角色描述', width: null, align: 'center', hidden: true },
        { prop: 'roleId', label: '角色ID', width: null, align: 'center', hidden: true },

        { prop: 'roleOrgType', label: '组织类型编码', width: null, align: 'center', hidden: true },
        { prop: 'enabled', label: '是否启用编码', width: null, align: 'center', hidden: true },
        { prop: 'builtIn', label: '是否内置编码', width: null, align: 'center' , hidden: true },

            ])
      }
      return cols
    }
  }
}
</script>
