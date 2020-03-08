<!--
* 描述: 厂家派单规则设置
* 创建人: zouzx
* 创建时间: 2019-07-24
* 记录：
*  20190724 新建 zouzx
-->
<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query">查询</el-button>
      <el-button @click="showdialog2">导入</el-button>
      <el-button @click="showdialog">新增</el-button>
      <el-button @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-col :span="6">
              <BusinessProcess ref="BusinessProcess" :BusinessProcess="cxType" @changeCode="changeType"></BusinessProcess>
            </el-col>
            <el-col :span="6">
              <Brand ref="Brand" :Brand="cxBrand"></Brand>
            </el-col>
            <el-col :span="6">
              <ResponsibleDistrict ref="ResponsibleDistrict" :ResponsibleDistrict="cxDutyArea"></ResponsibleDistrict>
            </el-col>
            <el-col :span="6">
              <EnableOrDisable ref="EnableOrDisable" :EnableOrDisable="cxStatus"></EnableOrDisable>
            </el-col>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              <el-col :span="6">
                <DutyPeople ref="DutyPeople" :DutyPeople="cxDutyPeople"></DutyPeople>
              </el-col>
              <el-col :span="6">
                <ProcessNodePoint ref="ProcessNodePoint" :ProcessNodePoint="cxProNode" @CatData="getarr3"></ProcessNodePoint>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-dialog :visible.sync="dialogVisible" :append-to-body="true" style="height:580px;position:fixed;top:0;right:0;left:0;bottom:0;margin:auto;" width="900px" title="厂家派单规则维护">
      <div class="filter-params-crm">
        <el-form label-position="right">
          <el-row>
            <el-col :span="8" class="crm-label-required">
              <BusinessProcess ref="whrfType" :BusinessProcess="whType" @changeCode="change2"></BusinessProcess>
            </el-col>
            <el-col :span="8" class="crm-label-required">
              <Brand ref="whrfBrand" :Brand="whBrand"></Brand>
            </el-col>
            <el-col :span="8" class="crm-label-required">
              <ProcessNodePoint ref="whrfProNode" :ProcessNodePoint="whProNode" @CatData="getarr4"></ProcessNodePoint>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" class="crm-label-required">
              <AssignWay :AssignWay="pddx" ref="AssignWay" @changeCode="change"></AssignWay>
            </el-col>
            <el-col :span="8" class="crm-label-required">
              <div v-if="peopleFlag">
                <swd_DutyPeople ref="whrfDutyPeople" :swd_DutyPeople="whDutyPeople" @CatData="getarr"></swd_DutyPeople>
              </div>
              <div v-if="roleFlag">
                <RoleSelection ref="whrfDutyRole" :fromDatas="whDutyRole" @CatData="getarr2"></RoleSelection>
              </div>
            </el-col>
            <el-col :span="8" class="crm-label-required">
              <EnableOrDisable ref="whrfStatus" :EnableOrDisable="whStatus"></EnableOrDisable>
            </el-col>

          </el-row>
          <el-row>
            <el-col :span="8">
              <ServiceBigClass :ServiceBigClass="whBig" ref="whrfBig" />
            </el-col>
            <el-col :span="8">
              <ResponsibleDistrict ref="whrfDutyArea" :ResponsibleDistrict="whDutyArea"></ResponsibleDistrict>
            </el-col>
            <el-col :span="8" style="float:right">
              <el-button type="primary" @click="save">保存</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible2" :append-to-body="true" style="height:580px;position:fixed;top:0;right:0;left:0;bottom:0;margin:auto;" width="900px" class="dialog" title="导入">
      <el-form label-position="right">
        <el-row>
          <el-col :span="24">
            <!-- <el-upload 
          class="upload-demo" 
          ref="upload"
          style="text-align:left"
          action="https://jsonplaceholder.typicode.com/posts/" 
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="uploadgz">导入</el-button>
          <el-button style="margin-left: 10px;" size="small" @click="1">模板下载</el-button>
          <div slot="tip" class="el-upload__tip">只能导入xls/xlsx文件</div>
          </el-upload> -->
            <el-upload class="upload-demo upload" ref="upload" action :http-request="handleChange" :data="uploadData" :headers="uploadHeaders" name="excelFile" :on-remove="handleRemove" :file-list="fileList" :on-error="uploadFalse" :auto-upload="true" :before-upload="beforeAvatarUpload" :before-remove="beforeRemove" :on-exceed="handleExceed" :on-change="handFileListChange" :limit="1" :show-file-list="true" list-type="text">
              <el-button size="small" slot="trigger">导入</el-button>
              <el-button size="small" type="text" @click="1">模板下载</el-button>
              <span style="color:red">只能导入xls/xlsx文件</span>
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
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table :data="tabledatas.tableData" highlight-current-row ref="table"
      :style="{width:'100%',height:tableHeight+'px'}" v-loading.body="false" element-loading-text="Loading" border fit>
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handle(scope.$index, scope.row)">修改</el-button>
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
import BusinessProcess from "@/components/crm/Select/Common/BusinessProcess"; //业务流程
import Brand from "@/components/crm/Select/Common/ResponsibleArea/Brand"; //品牌
import ResponsibleDistrict from "@/components/crm/Select/Common/ResponsibleDistrict"; //责任区
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable"; //是否启用
import DutyPeople from "@/components/crm/textbox/Complaint/DutyPeople"; //责任人
import swd_DutyPeople from "@/components/crm/EjectWindows/swd_DutyPeople"; //责任人 弹出框
import RoleSelection from "@/components/crm/EjectWindows/RoleSelection"; //角色 弹出框
import ProcessNodePoint from "@/components/crm/EjectWindows/ProcessNodePoint"; //流程节点弹出框
import ServiceBigClass from "@/components/crm/Select/Common/ServiceBigClass";
import AssignWay from "@/components/crm/Select/Clue/AssignWay";
import { setTimeout } from "timers";
import config from "@/utils/config";
export default {
  name: "crmPVAssignRules",
  components: {
    Brand,
    ResponsibleDistrict,
    BusinessProcess,
    DutyPeople,
    EnableOrDisable,
    swd_DutyPeople,
    RoleSelection,
    ProcessNodePoint,
    ServiceBigClass,
    AssignWay
  },
  mounted(){
    this.$nextTick(() => {
      // 页面渲染完成后的回调
      let that = this;
      this.$crmcf.__setAutoTableStyle(that);
    });
  },
  data() {
    return {
      tableHeight:"",
      uploadData: {}, //上传时附带的额外参数
      fileList: [],
      uploadHeaders: {
        Authorization: this.$store.getters.token
      },
      empId: "",
      positionCode: "",
      cxnodeCode: "",
      whnodeCode: "",
      whDutyRole: {
        input: "",
        labelname: "责任人"
      },
      peopleFlag: true,
      roleFlag: false,
      options: [{ label: "角色", value: "1" }, { label: "自定义", value: "2" }],
      value: "2",
      swhType: "",
      pddx: {
        value: "2"
      },
      cxType: {
        value: ""
      },
      cxBrand: {
        value: ""
      },
      cxDutyArea: {
        value: ""
      },
      cxStatus: {
        value: ""
      },
      cxDutyPeople: {
        input: ""
      },
      cxProNode: {
        input: "",
        ptype: "",
        gtype: "PV"
      },
      whType: {
        value: ""
      },
      whBig: {
        value: "",
        ptype: ""
      },
      whProNode: {
        input: "",
        ptype: "",
        gtype: "PV",
        dialogVisible: ""
      },
      whBrand: {
        value: ""
      },
      whDutyArea: {
        value: ""
      },
      whDutyPeople: {
        input: ""
      },
      whStatus: {
        value: ""
      },
      dutyPersonMId: "",
      updateControlId: "",
      toggleParam: false,
      dialogVisible: false,
      dialogVisible2: false,
      tabledatas: {
        colnames: [
          { label: "业务流程", value: "serverTypeName" },
          { label: "品牌", value: "carBrandName" },
          { label: "流程节点", value: "nodeName" },
          { label: "责任区", value: "accountName" },
          { label: "责任人", value: "dutyPersonName" },
          { label: "是否启用", value: "isEnableName" },
          { label: "创建人", value: "createdName" },
          { label: "创建时间", value: "createdDate" },
          { label: "修改人", value: "modifyName" },
          { label: "修改时间", value: "lastUpdatedDate" }
        ],
        tableData: [],
        queryObj: {
          // .查询条件缺少责任人(姓名)  网格列也缺少责任人(姓名)
          apiConfig: crmApis.pvDbDutyPersonMQuery,
          apiQueryRow: [
            "serverTypeName",
            "carBrandName",
            "nodeName",
            "accountName",
            "dutyPersonName",
            "isEnableName",
            "createdName",
            "createdDate",
            "modifyName",
            "lastUpdatedDate",
            "dutyPersonType",
            "carBrandCode",
            "serverType",
            "nodeCode",
            "accountId",
            "isEnable",
            "dutyPersonMId",
            "updateControlId",
            "dutyPersonId"
          ],
          params: {
            //oemCode:"",
            //groupCode:"",
            //serverType:"",
            //nodeCode:"",
            //carBrandCode:"",
            //accountId:"",
            //isEnable:""
            //dutyPersonName
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
          apiConfig: crmApis.pvDbDutyPersonMQuery,
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
      },
      tabledata2: {
        // 操作列
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [{ label: "错误内容", value: "errormsg" }],
        params: { code: "1" },
        url: "/table",
        haveSelected: false
      }
    };
  },
  mounted: function() {
    console.log("进来了");
  },
  methods: {
    // 处理文件选择器改变事件
    handleChange(param) {
      var url = this.uploadUrl(); // API根据不同功能url不同，请配置到对应模块配置
      var that = this;
      this.$requestImport(url, param, function(response) {
        console.info(response);
        that.uploadSuccess(response);
      });
    },
    uploadUrl: function() {
      return (
        crmApis.resolve.APIUrl + config.cH + "v=" + crmApis.resolve.ServiceCode
      );
    },
    uploadSuccess(response) {
      if (
        response.result == "1" &&
        response.data.rows != null &&
        response.data.rows.length > 0
      ) {
        var tempList = response.data.rows;

        var implistTemp = [];
        console.log("uploadSuccess");
        var isDataNull = false;
        // tempList.forEach(row => {
        //   if (
        //     isDataNull == true ||
        //     row.可欠拨 == null ||
        //     row.可欠拨 == "" ||
        //     row.备件品牌 == null ||
        //     row.备件品牌 == "" ||
        //     row.备件号 == null ||
        //     row.备件号 == "" ||
        //     row.备件名称 == null ||
        //     row.备件名称 == "" ||
        //     row.订货数 == null ||
        //     row.订货数 == "" ||
        //     row.SNP == null ||
        //     row.SNP == "" ||
        //     row.单价 == null ||
        //     row.单价 == "" ||
        //     row.库存数 == null ||
        //     row.库存数 == ""
        //   ) {
        //     isDataNull = true;
        //     return;
        //   }
        //   var newRow = {
        //     isCanLack: row.可欠拨,
        //     partBrandName: row.备件品牌,
        //     partNo: row.备件号,
        //     partName: row.备件名称,
        //     purQty: row.订货数,
        //     SNP: row.SNP,
        //     dlrPrice: row.单价,
        //     storeQty: row.库存数
        //   };
        //   implistTemp.push(newRow);
        // });
        // if (isDataNull) {
        //   this.$alert("Excel每行数据不能为空，请检查", "提示", {
        //     confirmButtonText: "确定",
        //     type: "warning"
        //   });
        //   this.$refs.upload.clearFiles();
        //   return;
        // }
        this.listQuery.listDetail = implistTemp;
        this.$alert("文件导入成功", "提示", {
          confirmButtonText: "确定",
          type: "success"
        });
      } else {
        this.$alert("文件导入失败", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
      }
      this.$refs.upload.clearFiles();
    },
    handleRemove(file, fileList) {},
    uploadFalse(response, file, fileList) {
      this.$alert("文件上传失败", "提示", {
        confirmButtonText: "确定",
        type: "warning"
      });
    },
    beforeAvatarUpload(file) {
      const extension = file.name.split(".")[1] === "xls";
      const extension2 = file.name.split(".")[1] === "xlsx";
      if (!extension && !extension2) {
        this.$alert("上传文件只能为Excel文件", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
      }
      return extension || extension2;
    },
    beforeRemove(file, fileList) {},
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    handFileListChange(file, fileList) {},
    changeType(val) {
      let that = this;
      that.cxProNode.input = "";
      that.cxProNode.ptype = val;
      if (that.$refs.ProcessNodePoint != undefined) {
        that.$refs.ProcessNodePoint.getData();
      }
    },
    getarr(val) {
      let redata = {};
      redata = val;
      this.positionCode = "";
      this.empId = redata[0].empId;
    },
    getarr2(val) {
      let redata = {};
      redata = val;
      this.empId = "";
      this.positionCode = redata[0].positionCode;
    },
    getarr3(val) {
      let redata = {};
      redata = val;
      this.cxnodeCode = redata[0].code;
    },
    getarr4(val) {
      let redata = {};
      redata = val;
      this.whnodeCode = redata[0].code;
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    change(val) {
      let that = this;
      if (val == 3) {
        that.roleFlag = true;
        that.peopleFlag = false;
      } else if (val == 2) {
        that.roleFlag = false;
        that.peopleFlag = true;
      }
    },
    change2(val) {
      let that = this;
      that.whType.value = val;
      that.whProNode.input = "";
      that.whProNode.ptype = this.$refs.whrfType.value;
      if (that.$refs.whrfProNode != undefined) {
        that.$refs.whrfProNode.getData();
      }
      that.whBig.input = "";
      that.whBig.ptype = val;
      if (that.$refs.whrfBig != undefined) {
        that.$refs.whrfBig.getData();
      }
    },
    showdialog: function() {
      let that = this;
      that.empId = "";
      that.positionCode = "";
      that.whnodeCode = "";
      if (
        that.$refs.whrfType == undefined &&
        that.$refs.whrfBrand == undefined &&
        that.$refs.whrfProNode == undefined &&
        that.$refs.whrfDutyArea == undefined &&
        that.$refs.whrfStatus == undefined
      ) {
        that.dialogVisible = true;
      } else {
        that.$refs.whrfType.reset();
        that.$refs.whrfBrand.reset();
        that.$refs.whrfProNode.clear();
        that.$refs.whrfDutyArea.reset();
        that.$refs.whrfStatus.reset();
        that.dialogVisible = true;
      }
      if (that.$refs.whrfDutyPeople != undefined) {
        that.$refs.whrfDutyPeople.clear();
      }
      if (that.$refs.whrfDutyRole != undefined) {
        that.$refs.whrfDutyRole.clear();
      }
      that.dutyPersonMId = "";
      taht.updateControlId = "";
    },
    showdialog2: function() {
      let that = this;
      console.log("进来了");
      that.dialogVisible2 = true;
    },
    query: function() {
      let that = this;
      that.tabledatas.queryObj.params = {};
      if (that.$refs.BusinessProcess.value != "") {
        that.$set(
          that.tabledatas.queryObj.params,
          "serverType",
          that.$refs.BusinessProcess.value
        );
      }
      if (that.$refs.Brand.value != "") {
        that.$set(
          that.tabledatas.queryObj.params,
          "carBrandCode",
          that.$refs.Brand.value
        );
      }
      if (that.$refs.ResponsibleDistrict.value != "") {
        that.$set(
          that.tabledatas.queryObj.params,
          "accountId",
          that.$refs.ResponsibleDistrict.value
        );
      }
      if (that.$refs.EnableOrDisable.value != "") {
        that.$set(
          that.tabledatas.queryObj.params,
          "isEnable",
          that.$refs.EnableOrDisable.value
        );
      }
      if (that.cxnodeCode != "") {
        that.$set(that.tabledatas.queryObj.params, "nodeCode", that.cxnodeCode);
      }
      if (that.$refs.DutyPeople.input != "") {
        that.$set(
          that.tabledatas.queryObj.params,
          "dutyPersonName",
          that.$refs.DutyPeople.input
        );
      }
      let queryObj = {
        // api配置
        apiConfig: that.tabledatas.queryObj.apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: that.tabledatas.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.tabledatas.pagesize,
          pageIndex: that.tabledatas.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },
    save: function() {
      let that = this;
      var html = "";
      if (that.$refs.whrfType.value == "") {
        html = html + `<div>业务流程不能为空</div>`;
      }
      if (that.$refs.whrfBrand.value == "") {
        html = html + `<div>品牌不能为空</div>`;
      }
      if (that.whnodeCode == "") {
        html = html + `<div>流程节点不能为空</div>`;
      }
      if (that.$refs.AssignWay.value == "") {
        html = html + `<div>派单对象不能为空</div>`;
      }
      if (that.empId == "" && that.positionCode == "") {
        html = html + `<div>角色或责任人不能为空</div>`;
      }
      if (that.$refs.whrfStatus.value == "") {
        html = html + `<div>是否启用不能为空</div>`;
      }
      if (html != "") {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return;
      }
      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.csDbDutyPersonMMutationSaveById,
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
          dataInfo: {
            oemCode: "1",
            groupCode: "1",
            carBrandCode: that.$refs.whrfBrand.value,
            serverType: that.$refs.whrfType.value,
            nodeCode: that.whnodeCode,
            dutyPersonType: that.$refs.AssignWay.value,
            dutyPersonId:
              that.$refs.AssignWay.value == "2"
                ? that.empId
                : that.positionCode,
            accountId: that.$refs.whrfDutyArea.value,
            isEnable: that.$refs.whrfStatus.value,
            serverClassCode: that.$refs.whrfBig.value,
            updateControlId: that.updateControlId,
            dutyPersonMId: that.dutyPersonMId
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1"
          //&&response.data[queryObj.apiConfig.ServiceCode].rows!=""
        ) {
          this.dialogVisible = false;
          that.$crmcf.showMessages(that, "success", "保存成功！");
          this.query();
        } else {
          that.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
        }
      });
    },
    handle: function(index, rowData) {
      let that = this;
      that.dialogVisible = true;
      that.whType.value = rowData.serverType;
      that.whBrand.value = rowData.carBrandCode;
      that.whProNode.input = rowData.nodeName;
      that.whnodeCode = rowData.nodeCode;
      that.whProNode.ptype = rowData.serverType;
      that.pddx.value = rowData.dutyPersonType;
      that.change(rowData.dutyPersonType);
      that.whDutyArea.value = rowData.accountId;
      that.whStatus.value = rowData.isEnable;
      that.dutyPersonMId = rowData.dutyPersonMId;
      that.updateControlId = rowData.updateControlId;
      if (
        that.$refs.whrfType == undefined &&
        that.$refs.whrfBrand == undefined &&
        that.$refs.whrfProNode == undefined &&
        that.$refs.whrfDutyArea == undefined &&
        that.$refs.whrfStatus == undefined
      ) {
      } else {
        that.$refs.whrfType.getData();
        that.$refs.whrfBrand.getData();
        that.$refs.whrfProNode.getData();
        that.$refs.whrfStatus.getData();
        that.$refs.whrfDutyArea.getData();
        that.$refs.AssignWay.getData();
      }

      setTimeout(function() {
        if (that.$refs.whrfDutyPeople != undefined) {
          that.empId = rowData.dutyPersonId;
          that.whDutyPeople.input = rowData.dutyPersonName;
          that.$refs.whrfDutyPeople.getData();
        }
        if (that.$refs.whrfDutyRole != undefined) {
          that.positionCode = rowData.dutyPersonId;
          that.whDutyRole.input = rowData.dutyPersonName;
          that.$refs.whrfDutyRole.getData();
        }
      }, 100);
    },
    handleSelect: function() {
      let that = this;
      //that.input = this.$refs.table.rowData.name;
      that.dialogVisible = false;
    },
    uploadgz: function() {
      let that = this;
      //that.input = this.$refs.table.rowData.name;
      that.dialogVisible2 = false;
    },
    reset: function() {
      this.$refs.DutyPeople.reset();
      this.$refs.BusinessProcess.reset();
      this.$refs.Brand.reset();
      this.$refs.ResponsibleDistrict.reset();
      this.$refs.EnableOrDisable.reset();
      this.cxnodeCode = "";
      this.$refs.ProcessNodePoint.clear();
    },
    prev() {
      let that = this;
      if (this.tabledatas.pageindex > 1) {
        that.tabledatas.pageindex = this.tabledatas.pageindex - 1;
        this.query();
      }
    },
    next() {
      let that = this;
      if (true) {
        that.tabledatas.pageindex = this.tabledatas.pageindex + 1;
        this.query();
      }
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    }
  }
};
</script>
<style scoped>
/* .filter-params-sub .el-col {
  margin-bottom: -10px;
} */
</style>
