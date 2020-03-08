// 父类选择框
<template>
  <section>
    <el-form-item label="父类编码">
      <el-input readonly="readonly" v-model="input" placeholder="点击选择父类编码" suffix-icon="el-icon-s-unfold" @click.native="showdialog()" :disabled="isdisabled"></el-input>
    </el-form-item>

    <!-- 网点单选弹出框 -->
    <el-dialog :visible.sync="dialogVisible" modal-append-to-body append-to-body :width="width" class="dialog" title="父类选择">
      <div class="filter-container filter-title-crm">查询条件</div>
      <div class="filter-container filter-params-crm">
        <div style="float:right">
          <el-button type="primary" @click.native="query">查询</el-button>
          <el-button @click.native="handleSelect">确认</el-button>
          <el-button @click.native="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm">
        <el-form label-position="right">
          <el-row>
            <el-col>
              <el-col :span="8">
                <FatherClassCode :FatherClassCode="cxFClassCode" ref="FatherClassCode"></FatherClassCode>
              </el-col>
              <el-col :span="8">
                <FatherClassName :FatherClassName="cxFClassName" ref="FatherClassName"></FatherClassName>
              </el-col>
              <el-col :span="8"></el-col>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <!-- 自定义网格开始 -->
      <div class="filter-container filter-title-crm">查询结果</div>
      <el-table :data="tabledatas.tableData" @current-change="SelectH" highlight-current-row style="width: 100%;height:330px" v-loading.body="false" element-loading-text="Loading" border fit ref="multipleTable">
        <el-table-column type="index" label="序号" width="55"></el-table-column>
        <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pagesize" :current-page="tabledatas.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage"></el-pagination>
      <!-- 自定义网格结束 -->
    </el-dialog>
    <!--网点单选弹出框 -->
  </section>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import FatherClassCode from "@/components/crm/textbox/Public/ServiceTypeCare/FatherClassCode";
import FatherClassName from "@/components/crm/textbox/Public/ServiceTypeCare/FatherClassName";

export default {
  name: "ParentWindow",
  components: {
    FatherClassCode,
    FatherClassName
  },
  props: {
    ParentWindow: {
      input: String,
      pcode: String,
      ptype: String,
      plvl: String,
      dialogVisible: Boolean,
      isdisabled: Boolean
    }
  },
  data() {
    return {
      rowData: { name: "" },
      input: this.ParentWindow.input,
      pcode: this.ParentWindow.pcode,
      ptype: this.ParentWindow.ptype,
      plvl: this.ParentWindow.plvl,
      isdisabled: this.ParentWindow.isdisabled,
      width: "900px",
      dialogVisible: false,
      cxFClassCode: {
        input: ""
      },
      cxFClassName: {
        input: ""
      },
      tabledatas: {
        colnames: [
          { label: "类别编码", value: "serverClassCode" },
          { label: "类别名称", value: "serverClassName" }
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
            //serverClassCode:"",
            //serverClassName:"",
            classLevel: "",
            parentCode: "",
            serverType: ""
            //isEnable:"",
            //createdDateStart:"",
            //createdDateEnd:"",
            //parentName:""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }
    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了");
      if (this.ParentWindow.dialogVisible == false) {
        that.dialogVisible = this.ParentWindow.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
      that.query();
    },
    //行选择事件
    SelectH: function(row) {
      let that = this;
       
      console.log(row);
      that.rowData.name = row.serverClassCode;
    },
    //赋值事件
    getData: function() {
      let that = this;
       
      that.input = that.ParentWindow.input;
      that.pcode = that.ParentWindow.pcode;
      that.ptype = that.ParentWindow.ptype;
      that.plvl = that.ParentWindow.plvl;
      that.isdisabled = that.ParentWindow.isdisabled;
      that.dialogVisible = that.ParentWindow.dialogVisible;
    },
    //清空事件
    clear: function() {
      let that = this;
       
      that.input = "";
      that.pcode = "";
      that.ptype = "";
      that.plvl = "";
      that.isdisabled = false;
      that.ParentWindow.dialogVisible = undefined;
    },
    query: function() {
       
      let that = this;
      if (this.pcode == "" && this.ptype == "" && this.plvl == "") {
        //that.tabledatas.queryObj.params.serverClassCode=this.$refs.TybeCode.input;
        //that.tabledatas.queryObj.params.serverClassName=this.$refs.TypeName.input;
        that.tabledatas.queryObj.params.classLevel = null;
        //that.tabledatas.queryObj.params.isEnable=this.$refs.EnableOrDisable.value;
        that.tabledatas.queryObj.params.parentCode = "*";
        //that.tabledatas.queryObj.params.parentName=this.$refs.FatherClassName.input;
        that.tabledatas.queryObj.params.serverType = "*";
        //that.tabledatas.queryObj.params.createdDateStart=this.$refs.CreateTime.value;
        //that.tabledatas.queryObj.params.createdDateEnd=this.$refs.CreateTime.value;
      } else {
        //that.tabledatas.queryObj.params.serverClassCode=this.$refs.TybeCode.input;
        //that.tabledatas.queryObj.params.serverClassName=this.$refs.TypeName.input;
        that.tabledatas.queryObj.params.classLevel =
          this.plvl == "" ? null : parseInt(this.plvl);
        //that.tabledatas.queryObj.params.isEnable=this.$refs.EnableOrDisable.value;
        that.tabledatas.queryObj.params.parentCode =
          this.pcode == "" ? "" : this.pcode;
        //that.tabledatas.queryObj.params.parentName=this.$refs.FatherClassName.input;
        that.tabledatas.queryObj.params.serverType =
          this.ptype == "" ? "" : this.ptype;
        //that.tabledatas.queryObj.params.createdDateStart=this.$refs.CreateTime.value;
        //that.tabledatas.queryObj.params.createdDateEnd=this.$refs.CreateTime.value;
      }
        that.tabledatas.queryObj.params.serverClassCode=that.$refs.FatherClassCode.input;
        that.tabledatas.queryObj.params.serverClassName=that.$refs.FatherClassName.input;
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
        } else {
          that.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
        }
      });
    },
    handleSelect: function() {
      let that = this;
       
      that.input = this.rowData.name;
      that.dialogVisible = false;
    },
    reset: function() {
      this.$refs.FatherClassCode.reset();
      this.$refs.FatherClassName.reset();
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
/* .dmo-form-inline {
  float: left;
  padding: 0px 15px;
  text-align: left;
  margin-top: 20px;
  width: 100%;
}
.dialog .el-dialog__body {
  padding: 10px 10px;
}
.dmo-form-inline .btton {
  float: right;
}
.filter-params .el-col {
  margin-bottom: -4px;
} */
</style>