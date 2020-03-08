<!--
* 描述: 服务类别维护
* 创建人: chq2
* 创建时间: 2019-08-06
* 记录：
*  2019-08-06 新建 chq2
-->
<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query">查询</el-button>
      <el-button @click="showdialog">新增</el-button>
      <el-button @click="showdialog2">导入类别</el-button>
      <el-button @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-col :span="6">
              <TybeCode :TybeCode="cxTCode" ref="TybeCode"></TybeCode>
            </el-col>
            <el-col :span="6">
              <TypeName :TypeName="cxTName" ref="TypeName"></TypeName>
            </el-col>
            <el-col :span="6">
              <CategoryLevel :CategoryLevel="cxCLevel" ref="CategoryLevel"></CategoryLevel>
            </el-col>
            <el-col :span="6">
              <EnableOrDisable :EnableOrDisable="cxStatus" ref="EnableOrDisable"></EnableOrDisable>
            </el-col>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              <el-col :span="6">
                <FatherClassCode :FatherClassCode="cxFClassCode" ref="FatherClassCode"></FatherClassCode>
              </el-col>
              <el-col :span="6">
                <FatherClassName :FatherClassName="cxFClassName" ref="FatherClassName"></FatherClassName>
              </el-col>
              <el-col :span="6">
                <ServiceType :ServiceType="cxType" ref="ServiceType"></ServiceType>
              </el-col>
              <el-col :span="6">
                <CreateTime :CreateTime="cxCTime" ref="CreateTime"></CreateTime>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>

      <!--服务类别维护  弹窗开始-->
      <el-dialog :visible.sync="dialogVisible" style="height:580px;position:fixed;top:0;right:0;left:0;bottom:0;margin:auto;" width="900px" class="dialog" title="服务类别维护" append-to-body>
        <div class="filter-params-crm">
          <el-form label-position="right">
            <el-row>
              <el-col :span="8" class="crm-label-required">
                <TybeCode :TybeCode="whTyCode" ref="whrfTybeCode"></TybeCode>
              </el-col>
              <el-col :span="8" class="crm-label-required">
                <TypeName :TypeName="whTName" ref="whrfTypeName"></TypeName>
              </el-col>
              <el-col :span="8" class="crm-label-required">
                <CategoryLevel :CategoryLevel="whCLevel" ref="whrfCategoryLevel" @changeCode="change"></CategoryLevel>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8" class="crm-label-required">
                <ServiceType :ServiceType="whSType" ref="whrfServiceType" @changeCode="change2"></ServiceType>
              </el-col>
              <el-col :span="8" class="crm-label-required" id="parwin">
                <ParentWindow :ParentWindow="whfat" ref="whrffat" />
              </el-col>
              <el-col :span="8" class="crm-label-required">
                <EnableOrDisable :EnableOrDisable="whStatus" ref="whrfStatus"></EnableOrDisable>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8"></el-col>
              <el-col :span="8"></el-col>
              <el-col :span="8" style="float:right">
                <el-button type="primary" @click="save">保存</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-dialog>
      <!--服务类别维护  弹窗结束-->

      <!--导入  弹窗开始-->
      <el-dialog :visible.sync="dialogVisible2" style="height:520px;position:fixed;top:0;right:0;left:0;bottom:0;margin:auto;" width="700px" class="dialog" append-to-body title="导入">
        <el-form label-position="right">
          <el-row>
            <el-col :span="24">
              <!-- :file-list="fileList" -->
              <el-upload class="upload-demo" style="text-align:left" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove"  :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="handleSelect2">导入</el-button>
                <el-button style="margin-left: 10px;" size="small" @click="1">模板下载</el-button>
                <div slot="tip" class="el-upload__tip">只能导入xls/xlsx文件</div>
              </el-upload>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-table :data="tabledatas2.tableData" highlight-current-row style="width: 100%;height:330px" v-loading.body="false" element-loading-text="Loading" border fit>
                <el-table-column type="index" label="序号" width="55"></el-table-column>
                <el-table-column v-for="item in tabledatas2.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
              </el-table>
              <el-pagination background layout="prev, pager, next" :total="9" :page-size="tabledatas2.pagesize" :current-page="tabledatas2.pageindex"></el-pagination>
            </el-col>
          </el-row>
        </el-form>
      </el-dialog>
      <!--导入  弹窗结束-->
    </div>

    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table 
    :style="{width:'100%',height:tableHeight+'px'}"
    :data="tabledatas.tableData" highlight-current-row style="width: 100%;height:330px" v-loading.body="listLoading" element-loading-text="Loading" border fit>
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" align="center" width="95">
        <template slot-scope="scope">
          <el-button size="mini" type="text" align="center" @click="handle(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pagesize" :current-page="tabledatas.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage"></el-pagination>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable"; //是否启用
import TybeCode from "@/components/crm/textbox/Public/ServiceTypeCare/TybeCode";
import TypeName from "@/components/crm/textbox/Public/ServiceTypeCare/TypeName";
import FatherClassName from "@/components/crm/textbox/Public/ServiceTypeCare/FatherClassName";
import CreateTime from "@/components/crm/Time/CreateTime";
import CategoryLevel from "@/components/crm/Select/Complaint/ServiceCategoryMaintenance/CategoryLevel";
import ServiceType from "@/components/crm/Select/Complaint/ServiceType";
import FatherClassCode from "@/components/crm/textbox/Public/ServiceTypeCare/FatherClassCode";
import ParentWindow from "@/components/crm/EjectWindows/ParentWindow";
export default {
  name: "ServiceTypeQuery",
  components: {
    TypeName,
    FatherClassName,
    CreateTime,
    EnableOrDisable,
    TybeCode,
    CategoryLevel,
    ServiceType,
    FatherClassCode,
    ParentWindow
  },
  data() {
    return {
      value: "",
      config:{},
      options: [
        { label: "大类", value: "1" },
        { label: "中类", value: "2" },
        { label: "小类", value: "3" }
      ],
      cxTCode: {
        input: "",
        isdisabled: false
      },
      cxTName: {
        input: ""
      },
      cxCLevel: {
        value: "",
        isdisabled: false
      },
      cxStatus: {
        value: ""
      },
      cxFClassCode: {
        input: ""
      },
      cxFClassName: {
        input: ""
      },
      cxType: {
        value: "",
        isdisabled: false
      },
      cxCTime: {
        value: ""
      },
      whTyCode: {
        input: "",
        isdisabled: false
      },
      whTName: {
        input: ""
      },
      whCLevel: {
        value: "",
        isdisabled: false
      },
      whSType: {
        value: "",
        isdisabled: false
      },
      whStatus: {
        value: ""
      },
      whfat: {
        input: "",
        pcode: "",
        ptype: "",
        plvl: "",
        isdisabled: false,
        dialogVisible: ""
      },
      input: "",
      updateControlId: "",
      tableHeight:'',
      listLoading:false,
      toggleParam: false,
      dialogVisible: false,
      dialogVisible2: false,
      tabledatas: {
        colnames: [
          { label: "类别编码", value: "serverClassCode" },
          { label: "类别名称", value: "serverClassName" },
          { label: "是否启用", value: "isEnableName" },
          { label: "父类编码", value: "parentCode" },
          { label: "父类名称", value: "parentName" },
          { label: "类别等级", value: "classLevelName" },
          { label: "服务类型", value: "serverTypeName" },
          { label: "创建时间", value: "createdDate" },
          { label: "最后修改时间", value: "lastUpdatedDate" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.serverClassQueryFindAll,
          apiQueryRow: [
            "serverClassCode",
            "serverClassName",
            "isEnable",
            "parentCode",
            "parentName",
            "classLevel",
            "serverType",
            "createdDate",
            "lastUpdatedDate",
            "serverTypeName",
            "isEnableName",
            "classLevelName",
            "updateControlId"
          ],
          params: {
            serverClassCode: "",
            serverClassName: "",
            classLevel: "",
            parentCode: "",
            serverType: "",
            isEnable: "",
            createdDateStart: "",
            createdDateEnd: "",
            parentName: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      },
      tabledatas2: {
        colnames: [{ label: "错误内容", value: "errormsg" }],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintHelpQueryFindAll,
          apiQueryRow: [
            "applyPerson",
            "createdDate",
            "helpDate",
            "serverOrder"
          ],
          params: {
            applyUserId: ""
          }
        },
        pagesize: 10,
        pageindex: 1
      }
    };
  },
    mounted() {
    this.$nextTick(() => {
      // 页面渲染完成后的回调
      let that = this;
      this.$crmcf.__setAutoTableStyle(that);
    });
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    change(val) {
      let that = this;
      that.whCLevel.value = val;
      that.whfat.input = "";
      that.whfat.isdisabled = false;
      that.whfat.dialogVisible = undefined;
      if (val == "10") {
        that.whfat.pcode = "0";
        that.whfat.ptype = this.$refs.whrfServiceType.value;
        that.whfat.plvl = "30";
        let ele=document.getElementById('parwin')
        ele.classList.remove('crm-label-required')
      } else if (val == "20") {
        that.whfat.pcode = "";
        that.whfat.ptype = this.$refs.whrfServiceType.value;
        that.whfat.plvl = "10";
      } else if (val == "30") {
        that.whfat.pcode = "";
        that.whfat.ptype = this.$refs.whrfServiceType.value;
        that.whfat.plvl = "20";
      }
      if (that.$refs.whrffat != undefined) {
        that.$refs.whrffat.getData();
      }
    },
    change2(val) {
      let that = this;
      that.whSType.value = val;
      that.whfat.input = "";
      that.whfat.isdisabled = false;
      that.whfat.dialogVisible = undefined;
      if (that.whCLevel.value == "10") {
        that.whfat.pcode = "0";
        that.whfat.ptype = val;
        that.whfat.plvl = "30";
      } else if (that.whCLevel.value == "20") {
        that.whfat.pcode = "";
        that.whfat.ptype = val;
        that.whfat.plvl = "10";
      } else if (that.whCLevel.value == "30") {
        that.whfat.pcode = "";
        that.whfat.ptype = val;
        that.whfat.plvl = "20";
      }
      if (that.$refs.whrffat == undefined) {
      } else {
        that.$refs.whrffat.getData();
      }
    },
    showdialog: function() {
      let that = this;
      if (
        that.$refs.whrfTybeCode == undefined &&
        that.$refs.whrfTypeName == undefined &&
        that.$refs.whrfCategoryLevel == undefined &&
        that.$refs.whrfServiceType == undefined &&
        //that.$refs.whrfFatherClassCode==undefined&&
        that.$refs.whrfStatus == undefined &&
        that.$refs.whrffat == undefined
      ) {
      } else {
        that.$refs.whrfTybeCode.reset();
        that.$refs.whrfTypeName.reset();
        that.$refs.whrfCategoryLevel.reset();
        that.$refs.whrfServiceType.reset();
        //that.$refs.whrfFatherClassCode.reset();
        that.$refs.whrfStatus.reset();
        that.$refs.whrffat.clear();
      }
      this.updateControlId = "";
      that.dialogVisible = true;
    },
    showdialog2: function() {
      let that = this;
      console.log("进来了");
      that.dialogVisible2 = true;
    },
    query: function() {
      let that = this;
      that.tabledatas.queryObj.params.serverClassCode = this.$refs.TybeCode.input;
      that.tabledatas.queryObj.params.serverClassName = this.$refs.TypeName.input;
      if (this.$refs.CategoryLevel.value == "") {
        that.tabledatas.queryObj.params.classLevel = undefined;
      } else {
        that.tabledatas.queryObj.params.classLevel = this.$refs.CategoryLevel.value;
      }
      that.tabledatas.queryObj.params.isEnable = this.$refs.EnableOrDisable.value;
      that.tabledatas.queryObj.params.parentCode = this.$refs.FatherClassCode.input;
      that.tabledatas.queryObj.params.parentName = this.$refs.FatherClassName.input;
      that.tabledatas.queryObj.params.serverType = this.$refs.ServiceType.value;
      if (this.$refs.CreateTime.value == "") {
        that.tabledatas.queryObj.params.createdDateStart = this.$refs.CreateTime.value[0];
        that.tabledatas.queryObj.params.createdDateEnd = this.$refs.CreateTime.value[1];
      } else {
        that.tabledatas.queryObj.params.createdDateStart =
          this.$refs.CreateTime.value[0] + " " + "00:00:00";
        that.tabledatas.queryObj.params.createdDateEnd =
          this.$refs.CreateTime.value[1] + " " + "23:59:59";
      }
       this.$crmcf.simpleTablequery(that, that.tabledatas, that.tabledatas.queryObj.apiConfig,function(data){
        that.tabledatas.tableData =data.rows;
        })
    },
    handle: function(index, rowData) {
      let that = this;
      that.whTyCode.input = rowData.serverClassCode;
      that.whTyCode.isdisabled = true;
      that.whTName.input = rowData.serverClassName;
      that.whCLevel.value = rowData.classLevel + "";
      that.whCLevel.isdisabled = true;
      that.whSType.value = rowData.serverType;
      that.whSType.isdisabled = true;
      //that.whFClassCode.input=rowData.parentCode
      that.whfat.input = rowData.parentCode;
      that.whfat.isdisabled = true;
      that.whfat.dialogVisible = false;
      that.whStatus.value = rowData.isEnable;
      that.updateControlId = rowData.updateControlId;
      if (
        that.$refs.whrfTybeCode == undefined &&
        that.$refs.whrfTypeName == undefined &&
        that.$refs.whrfCategoryLevel == undefined &&
        that.$refs.whrfServiceType == undefined &&
        //that.$refs.whrfFatherClassCode==undefined&&
        that.$refs.whrfStatus == undefined &&
        that.$refs.whrffat == undefined
      ) {
        that.dialogVisible = true;
      } else {
        that.$refs.whrfTybeCode.getData();
        that.$refs.whrfTypeName.getData();
        that.$refs.whrfCategoryLevel.getData();
        that.$refs.whrfServiceType.getData();
        //that.$refs.whrfFatherClassCode.getData()
        that.$refs.whrfStatus.getData();
        that.$refs.whrffat.getData();
        that.dialogVisible = true;
      }
    },
    save: function() {
      let that = this;
      let flag = false;
      //var config = {};
      let config = {
        whrfTybeCode: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.whrfTybeCode.input,
          "类别编码",
          "不能为空"
        ],
        whrfTypeName: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.whrfTypeName.input,
          "类别名称",
          "不能为空"
        ],
        whrfCategoryLevel: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.whrfCategoryLevel.value,
          "类别等级",
          "不能为空"
        ],
        whrfServiceType: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.whrfServiceType.value,
          "服务类型",
          "不能为空"
        ],
         whrffat: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.whrffat.input,
          "父类编码",
          "不能为空"
        ],
         whrfStatus: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.whrfStatus.value,
          "是否启用",
          "不能为空"
        ]
      };
      if(that.whfat.pcode=='0'){
        delete config.whrffat
      }
        that.$crmcf.validForm(that, 'form', config, function(flag) {
        if (flag) {
 let variables = {
            dataInfo: {
          serverClassCode: that.$refs.whrfTybeCode.input,
            serverClassName: that.$refs.whrfTypeName.input,
            classLevel: that.$refs.whrfCategoryLevel.value,
            parentCode: that.$refs.whrffat.input,
            serverType: that.$refs.whrfServiceType.value,
            isEnable: that.$refs.whrfStatus.value,
            updateControlId: that.updateControlId
          }
          };
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.serverClassMutationUpdateAndSave,
            function() {
            that.dialogVisible = false;
            that.query();
            }
          );
        }
        })
    },
    handleSelect: function() {
      let that = this;
      //that.input = this.$refs.table.rowData.name;
      that.dialogVisible = false;
    },
    handleSelect2: function() {
      let that = this;
      //that.input = this.$refs.table.rowData.name;
      that.dialogVisible2 = false;
    },
    reset: function() {
      this.$refs.TybeCode.reset();
      this.$refs.TypeName.reset();
      this.$refs.CategoryLevel.reset();
      this.$refs.EnableOrDisable.reset();
      this.$refs.FatherClassCode.reset();
      this.$refs.FatherClassName.reset();
      this.$refs.ServiceType.reset();
      this.$refs.CreateTime.reset();
    },
    prev() {
      let that = this;
      if (this.tabledatas.pageIndex > 1) {
        that.tabledatas.pageIndex = this.tabledatas.pageIndex - 1;
        this.query();
      }
    },
    next() {
      let that = this;
        that.tabledatas.pageIndex = this.tabledatas.pageIndex + 1;
        this.query();
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    }
  }
};
</script>
