
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsInitTable="false"
      :dynamicIsColumnDrop="false"
      />

    <page-maintenance-add
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"

      @close="close"/>

    <!-- 预览 -->
    <el-dialog title="页面预览" :visible.sync="dialogVisible" width="800px" append-to-body center>
      <div class="filter-container filter-params-crm">
        <el-form ref="form">
          <el-row style="margin-bottom:10px;" v-for="(item,index) in pageList" :key="index">
            <div class="pageCSS" @click="itemClick(item,index)" :class="{'selectedClass':item.checked}">
              {{item.name}}
              <!-- <i class="el-dialog__close el-icon el-icon-close delete" @click.stop="itemDelete(index)" v-show="item.btnShow"></i> -->
            </div>
            <div style="text-align:center;" v-show="item.btnShow">
              <el-button type="primary" size="small" @click="moveUp(index)">上移</el-button>
              <el-button type="primary" size="small" @click="moveDown(index)">下移</el-button>
              <el-button type="primary" size="small" @click="moveTop(index)">最上</el-button>
              <el-button type="primary" size="small" @click="moveBottom(index)">最下</el-button>
            </div>
          </el-row>

          <el-row>
            <el-col :span="24" style="text-align:right">
              <el-button size="small" type="primary" @click="savegz('form')">保存</el-button>
              <el-button size="small" @click="close()">返回</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>

  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins'
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import pageMaintenanceAdd from './pageMaintenanceAdd'
import { CacheConfig } from '@/cache/configCache/index'


export default {
  name:"crmNodeGroup",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    pageMaintenanceAdd
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    
    return {
      // 网格查询API配置对象
      apiConfig: crmApis.csDbNodeGroupQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.preview(),
          text: "预览"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: "新增"
        },
        
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: "页面名称",
                codeField: "nodeGroupName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: true
              },

            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "controlBtn",
                label: "操作",
                width: 60,
                align: "center",
                codeField: 'controlBtn',
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    labelName: '删除',
                    codeField: 'assignmentControlBtn',
                    align: "center",
                    isShowLabel:true,
                    isShow:true,
                    clickEvent: () => this.delete(),
                    component: () => import("@/components/org/linkButton")
                  }
                ]
              },
              {
                prop: "serverTypeName",
                label: "页面类别",
                width: null,
                align: "center"
              },
              {
                prop: "groupName",
                label: "元素编码",
                width: null,
                align: "center"
              },
              {
                prop: "groupTypeName",
                label: "元素名称",
                width: null,
                align: "center"
              },
              {
                prop: "isEnableName",
                label: "图片名称",
                width: null,
                align: "center",
              },
              {
                prop: "isEnableName",
                label: "链接名称",
                width: null,
                align: "center",
                // hidden:true
              },
              {
                prop: "isEnableName",
                label: "文字内容",
                width: null ,
                align: "center",
                // hidden:true
              },

            ],
      // 表单查询数据--重置查询条件
      formField: {
        oemCode:"1",
        groupCode: "1",
        // serverType:"",
        // nodeGroupName:"",
        // groupType:"",

      },

      dialogVisible:false,

      defaultProps: {
        // children: 'children',
        label: 'label'
      },
      pageList:[{name:"message元素一"},{name:"message元素二"},{name:"offer元素一"},{name:"offer元素二"}]

    };
  },

  mounted(){
    console.log(this.$route.params)
    this.formField.nodeGroupName=this.$route.params.groupName
  },
  methods: {
    //新增

    //预览功能
    preview(){
      this.dialogVisible=true;

    },
    itemClick(item,index){
      for(var i=0;i<this.pageList.length;i++){
        this.pageList[i].btnShow=false;
        this.pageList[i].checked=false;
      }
      this.pageList[index].btnShow=true;
      this.pageList[index].checked=true;
      this.$set(this.pageList, index, item);
    },
    itemDelete(index,){

      this.pageList.splice(index,1);
    },
    moveUp(index){
      if(index>0){
        this.pageList[index]=this.pageList.splice(index-1,1,this.pageList[index])[0]
      }
    },
    moveDown(index){
      if(index<this.pageList.length-1){
        this.pageList[index]=this.pageList.splice(index+1,1,this.pageList[index])[0]
      }
    },
    moveTop(index){
      this.pageList.unshift(this.pageList.splice(index,1)[0])
    },
    moveBottom(index){
      this.pageList.push(this.pageList.splice(index,1)[0])
    },
    //删除
    delete(){

    },
    //拖拽
    allowDrop(draggingNode, dropNode, type) {
      if(type=='inner'){
        return false;
      }else{
        return true;
      }
    },

  }
};
</script>
<style scoped>
.pageCSS{
  position: relative;
  text-align: left;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.pageCSS:hover{
  cursor: pointer;
  color: #409EFF;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.selectedClass{
  color: #409EFF;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.delete{
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
