<template>
    <div>
      <div class="app-container app-container-table">
      <TreeTable ref="multipleTable"
          :treeObject="treeObject"
          :dynamicButtons="tableButtons"
          :dynamicComponents="tableComponents"
          :dynamicFormFields="formField"
          :dynamicTableCols="tableCols"
          :dynamicApiConfig="apiConfig"
          :dynamicIsShowMoreBtn="isMoreBtn"
          :dynamicTableOtherHeight="conHeight"
          :dynamicWidth="siderWidth"
        />
      <edit
        :dynamicEditRowData="editRowData"
        :popupsVisible="editPopupsVisible"
        :key="editPopupsKey"
        :popupsState="editPopupsState"
        @close="close"
      ></edit>
     <userAuthorization :key="authKey" :handleVisible="showAuthorz" :handleTitle="handleTitle" :editData="selectDate" @visible="closeAuthorz"></userAuthorization>
     <personManageg :key="modalData.userModalKey" :editDatad="modalData.userModalData" :memberEditVisible="modalData.userModalShow"></personManageg>

    </div>
    </div>
</template>
<script>
import { orgApis } from '@/api/graphQLApiList/org'
import TreeTable from '@/components/templates/treeTable'
import OneTableTemplate from '@/components/templates/oneTable'
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import Edit from './edit'
// import userAuthorization from '@/views/org/permissionManage/orguserRightsManagement/userAuthorization'
import userAuthorization from '@/views/org/permissionManage/roleAuthManage/userAuthorization'
import personManageg from '@/views/org/permissionManage/roleAuthManage/personManage'
export default {
  mixins:[oneTableWithViewTemplateMixins],
  name:"roleAndPermission",
  components: {
    TreeTable,
    Edit,
    userAuthorization,
    personManageg
  },
  mounted() {
      //调用加载树的方法 params1 父节点ID, params2当前节点id
      this.$refs.multipleTable.queryOrganization('parentOrgTreeId', 'orgTreeId')
  },
  data() {
    return {
        authKey:'a',
        showAuthorz:false,
        handleTitle:0,
        selectDate:{},
        //树对象
        treeObject:{
          // 配置树网格查询API配置对象
          treeApiConfig: orgApis.mdmOrgRelationRealQueryByPage,
          // 树接口需要返回的字段
          returnTreeCol:['orgName','orgRealId','orgCode','orgBelongType','orgTreeId','linkId','parentOrgTreeId'],
          // 树的查询条件
          // orgTreeId:'-1',
          treeQuery:{
           // orgTreeId:'-1'
          },
          //排序的对象 label现在是名字 , children 子节点
          defaultProps: {
            children: 'children',
            label: 'orgName'
          },
        },
        //设置菜单栏宽度
        siderWidth:250,
        conHeight:35,
        //设置是否显示更多按钮
        isMoreBtn:false,
        // 网格查询API配置对象
        apiConfig: orgApis.sysRoleQueryCommonByPage,
        // 动态组件-按钮
        tableButtons: [
          {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')},//查询
          {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.add(), text: this.$t('sys.button.add')},//新增员工
          {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.showModal('userModal',true) , text:this.$t('sys.button.memberManagement')},//成员管理
          {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.checkAuthorization(), text: this.$t('org.label.ViewPermissions')},//查看用户权限
          {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.userAuthorizationd(), text: this.$t('sys.button.permissionSet')},//功能权限设置
        ],
        // 动态组件-查询条件
        tableComponents: [
          {compKey: 'compKey1',span:8, labelName:this.$t('org.label.roleName'), codeField: 'roleName', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//角色名称
          {compKey: 'compKey2',span:10, labelName: this.$t('org.label.roleType'), codeField: 'roleType', isRequire: false, component: () => import('@/components/org/isEnable/isEnable'), type: 'dropdownList', isMust: true},//是否全局
        ],
        // 动态生成网格列
        tableCols: [
          { prop: 'controlBtn', label: this.$t('sys.content.operate'), codeField: 'controlBtn', width: 100, align: 'center' , isComponent: true,
            comps: [
              {compKey: 'propKey0', labelName:this.$t('sys.button.edit'),  codeField: 'editControlBtn', clickEvent: this.edit, component: () => import('@/components/org/linkButton')},
              {compKey: 'propKey1', labelName:this.$t('sys.button.delete'),  codeField: 'delControlBtn', clickEvent: this.del, component: () => import('@/components/org/linkButton')}
            ]
          },//操作，修改，删除
          { prop: 'roleId', label: '角色Id', hidden: true, align: 'center' },
          { prop: 'roleName', label:  this.$t('org.label.roleName'), width: null, align: 'center' },//角色名称
          { prop: 'roleCode', label: this.$t('org.label.roleCode'), width: 150, align: 'center', },//角色编码
          { prop: 'roleDesc', label: this.$t('org.label.roleDesc'), width: 150, align: 'center' },//角色描述
          { prop: 'roleType', label: this.$t('org.label.roleType'), width: null, align: 'center',isDefalus:true},//是否全局角色
          { prop: 'orgId', label: '所属部门Id', hidden: true, align: 'center'},
          { prop: 'orgName', label:this.$t('org.label.orgName'), width: null, align: 'center'},//所属组织
          // { prop: 'updateControlId', label: '并发控制', width: null, align: 'center', hidden: true}
        ],
        //查询条件
        formField:{
          orgId: '',
          roleType:'',
          roleName:''
        },
        orgClickData:{}

    }
  },
  methods:{
     //增加
    add() {
      if(JSON.stringify(this.orgClickData) == "{}"){
        this.$message({
          message: this.$t('org.message.chooseOrgName')/*请选择组织*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      this.editRowData = {}
      this.editRowData.orgName = this.orgClickData.orgName
      this.editRowData.orgId = this.orgClickData.orgTreeId
      this.showEdit('add')
    },
    queryTable(page, dataType, size, filterObj, cb) {
      // validpopups 组件弹窗  validpage 表单查询
      this.$utils.validataMoth(this, 'validpage')
      if (this.valid) {
        if(this.formField.orgId === ''){
          this.$message({
            message: this.$t('org.message.chooseOrgName')/*请选择组织*/,
            type: "warning",
            duration: 2000
          });
          return false;
        }
        this.$refs.multipleTable.queryTable(page, dataType, size, filterObj, cb)
      }
    },
    // 绑定单击树的事件
    handleNodeClick(data) {
      this.orgClickData = data
      // this.formField.orgName = data.orgName
      this.formField.orgId = data.orgRealId
      this.$refs.multipleTable.queryTable(1)
    },
    //删除
    del(index) {
      this.$confirm('此操作将删除此行数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.delData(index)
        }).catch(() => {
        });

    },
    delData(index){
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
        this.$message({"message":this.$t('org.message.selDelData'),type: 'warning'});//请选择需要删除的数据
          return false
      }
      var editRowData = that.list[curIndex];
      let role = editRowData.roleId;
      let queryObj = {
          //保存需要传 type="mutation"
          type:'mutation',
          // api配置
          apiConfig: orgApis.sysRoleMutationCommonDel,
          // 需要调用的API服务配置
          apiServices: [{
            //表格中台返回网格的字段
            apiQueryRow:[]
          }],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              //  pageSize: 1000,
              //  pageIndex: 1,
               //当前中台使用的名称有dataInfo、info，具体查看API文档
               dataInfo: {
                 roleId:role
               }
            }
      }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        this.$requestGraphQL(paramD).then(response =>{
            if(response.data[orgApis.sysRoleMutationCommonDel.ServiceCode].result === '1'){
                //通关如果的状态确认是编辑还是添加
                this.$message({message:this.$t('sys.tips.esTip14')/*删除成功*/,type: 'success'});
                this.queryTable(1);
            }
        })
    },
    checkAuthorization(){
      const that = this.$refs.multipleTable;
      let selectData = that.$refs.multipleTable.selection;
      if(selectData.length != 1){
          this.$message({"message":this.$t('sys.tips.esTip7'),type: 'warning'});//请选择一条数据
          return false
      }
      this.handleTitle = 0;
      this.showAuthorz = true;
      this.authKey = this.authKey +1;
      this.selectDate = selectData[0];
    },
    closeAuthorz(){
      this.showAuthorz = false;
    },
    userAuthorizationd(){
      const that = this.$refs.multipleTable;

      let selectData = that.$refs.multipleTable.selection;
      if(selectData.length != 1){
          this.$message({"message":this.$t('sys.tips.esTip7'),type: 'warning'});//请选择一条数据
          return false
      }
      this.handleTitle = 1;
      this.authKey = that.authKey +1;
      this.showAuthorz = true;
      this.selectDate = selectData[0];
    }
  }
}
</script>
<style scoped>
/deep/aside.el-aside.el-slide {
    height: calc(90vh - 57px);
}
</style>
