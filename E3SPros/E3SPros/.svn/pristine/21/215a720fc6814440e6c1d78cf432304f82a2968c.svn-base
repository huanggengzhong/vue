
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicSearchField="searchField"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsInitTable="false"
      :dynamicIsColumnDrop="false"
      />

    <!-- 新增修改弹窗 -->
    <el-dialog title="Message\Offer信息" :visible.sync="dialogVisible" width="700px" append-to-body center>
      <div class="filter-container filter-params-crm">
        <el-form ref="form">
          <el-row >
            <el-col :span="12" >
              <el-col :span="24" >
                <label class="crm-label-required">元素类别</label>
                <el-select v-model="addList.typeValue" placeholder="请选择">
                  <el-option v-for="item in typeOptions" :key="item.lookupValueCode" :label="item.lookupValueName" :value="item.lookupValueCode"></el-option>
                </el-select>
              </el-col>
              <el-col :span="24" >
                <!-- <label class="crm-label-required">业务类型</label>
                <el-select v-model="addList.workType" placeholder="请选择">
                  <el-option v-for="item in workOptions" :key="item.lookupValueCode" :label="item.lookupValueName" :value="item.lookupValueCode"></el-option>
                </el-select> -->
                <BusinessType :BusinessType="BusinessType" ref="BusinessType" />
              </el-col>
              <el-col :span="24" >
                <label class="crm-label-required">元素名称</label>
                <el-input v-model="addList.custName" placeholder="请输入" size="small" />
              </el-col>
              <el-col :span="24" >
                <el-upload
                  class="upload-demo"
                  :action="action"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :on-change="handleChange"
                  :file-list="fileList"
                  :multiple="false"
                  :limit='1'
                  :show-file-list="false"
                  list-type="picture">
                  <el-button size="small" type="primary" >图片选择</el-button>
                  
                </el-upload>
                <el-input v-model="imageName" size="small" style="width:186px;" :title="imageName" readonly/>
              </el-col>
            </el-col>
            <el-col :span="12" style="text-align:left">
              <img width="100%" :src="imageUrl" alt="" @dblclick="imagedbl">
            </el-col>
          </el-row>
          
          <el-row style="">
            <el-col :span="24" >
              <label class="crm-label-required" style="width:16%;">链接地址</label>
              <el-input v-model="addList.link" placeholder="请输入" size="small" style="width:84%;"/>
            </el-col>
          </el-row>
          <el-row style="">
            <el-col :span="24" >
              <label class="crm-label-required" style="width:16%;line-height: 28px;vertical-align: top">文字内容</label>
              <el-input v-model="addList.mome" suffix-icon="el-icon-search" placeholder="请输入" size="small" type="textarea" style="width:84%;"/>
            </el-col>
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
    <el-dialog :visible.sync="imageVisible" append-to-body modal-append-to-body>
      <img width="100%" :src="imageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { CacheConfig } from '@/cache/configCache/index';
import BusinessType from '@/components/crm/Select/Common/Questionnaire/BusinessType'


export default {
  name:"crmNodeGroup",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    BusinessType
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    
    return {
      searchField:"搜索条件",
      // 网格查询API配置对象
      apiConfig: crmApis.csDbNodeGroupQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        
        {
          compKey: "btnKey1",
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
                labelName: "元素类别",
                lookuptype: "CRM0018",
                codeField: "nodeGroupName",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey2",
                labelName: "元素编码",
                codeField: "nodeGroupName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "元素名称",
                codeField: "nodeGroupName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey4",
                labelName: "业务类型",
                codeField: "groupType",
                lookuptype: "BASE0010",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey5",
                labelName: "是否启用",
                codeField: "isEnable",
                component: () => import("@/components/crm/Select/crmIsEnable"),
                type: "dropdownList",
                isMust: false,
                isMul: false,
              }
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
                    labelName: '修改',
                    codeField: 'editControlBtn',
                    align: "center",
                    isShowLabel:true,
                    isShow:true,
                    clickEvent: () => this.edit(),
                    // clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  },

                ]
              },
              {
                prop: "serverTypeName",
                label: "元素类别",
                width: null,
                align: "center"
              },
              {
                prop: "groupName",
                label: "编码",
                width: null,
                align: "center"
              },
              {
                prop: "groupTypeName",
                label: "名称",
                width: null,
                align: "center"
              },
              {
                prop: "isEnableName",
                label: "业务类型",
                width: null,
                align: "center",
              },
              {
                prop: "isEnableName",
                label: "是否启用",
                width: null,
                align: "center",
                // hidden:true
              },
              {
                prop: "isEnableName",
                label: "图片名称",
                width: null ,
                align: "center",
                // hidden:true
              },
              {
                prop: "isEnableName",
                label: "链接名称",
                width: null ,
                align: "center",
                // hidden:true
              },
              {
                prop: "isEnableName",
                label: "内容",
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
        // searchValue:"",//搜素字段

      },
      fileList:[],
      action: "", //上传地址
      imageUrl:"",
      imageName:"",
      dialogVisible:false,
      imageVisible:false,
      BusinessType:{
        value:""
      },
      addList: {
        typeValue:'',
        workType:'',
        custName: "",
        picture:"",
        link:"",
        mome:"",
        // partVarietyCode:'',
      },
      typeOptions:[]

    };
  },
  methods: {
    //新增
    add(){
      this.dialogVisible=true;
      this.imageUrl=''
      this.imageName=''
    },
    //修改
    edit(){
      this.dialogVisible=true;
    },
    //图片选择
    handleRemove(file, fileList) {
      console.log('handleRemove');
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log('handlePreview');
      console.log(file);
    },
    handleChange(file, fileList) {
      this.imageUrl=file.url
      this.imageName=file.name
      console.log('handleChange');
      if (fileList.length > 1) {
        this.fileList = [];
        this.fileList.push(file);
      }
      console.log(file, fileList);
    },
    imagedbl(){
      this.imageVisible=true;
    },
    //保存
    savegz(formData){

    },
    close(){
      this.dialogVisible=false;
    },

  }
};
</script>
