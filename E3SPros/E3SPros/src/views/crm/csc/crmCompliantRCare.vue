<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="add()">新增</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="7">
            <ComplaintRouteName :ComplaintRouteName="ComplaintRouteNameMain" ref="ComplaintRouteNameMainRef" />
          </el-col>
          <el-col :span="7">
            <EnableOrDisable :EnableOrDisable="EnableOrDisableMain" ref="EnableOrDisableMainRef" />
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 投诉途径新增弹窗 -->
    <el-dialog title="维护" :visible.sync="dialogVisible" width="900px" center style="height:300px;position:fixed;top:0;right:0;left:0;bottom:0;margin:auto;" append-to-body>
      <div class="filter-container filter-params-crm">
        <el-form ref="form">
          <!--v-model="form"-->
          <el-row class="allshow">
            <!-- <el-form :disabled="disabledgz"> -->
            <el-col :span="8" class="crm-label-required">
              <ComplaintRouteCode :ComplaintRouteCode="ComplaintRouteCodeAdd" ref="ComplaintRouteCodeAddRef" />
            </el-col>
            <!-- </el-form> -->
            <el-col :span="8" class="crm-label-required">
              <ComplaintRouteName :ComplaintRouteName="ComplaintRouteNameAdd" ref="ComplaintRouteNameAddRef" />
            </el-col>
            <el-col :span="8" class="crm-label-required">
              <EnableOrDisable :EnableOrDisable="EnableOrDisableAdd" ref="EnableOrDisableAddRef" />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" style="text-align:right">
              <el-button size="small" type="primary" @click="save()">保存</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <!-- 投诉途径新增弹窗结束 -->

    <!-- 自定义网格 -->
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table 
    ref="table"
    :style="{width:'100%',height:tableHeight+'px'}"
    :data="tabledatas.tableData" highlight-current-row  v-loading.body="listLoading" element-loading-text="Loading" border fit>
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" class="tablewidth" width="100" :resizable="false" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="modify(scope.$index, scope.row)">修改</el-button>
        </template>
      </el-table-column>
      <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" :width="item.width" align="center"></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pagesize" :current-page="tabledatas.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage">
    </el-pagination>
    <!-- 自定义网格结束 -->
  </div>
</template>
<script>
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";
import ComplaintRouteName from "@/components/crm/textbox/Complaint/ComplaintRouteName";
//新增
import ComplaintRouteCode from "@/components/crm/textbox/Complaint/ComplaintRouteCode";
//import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "crmCompliantRCare",
  components: {
    EnableOrDisable,
    ComplaintRouteName,
    ComplaintRouteCode
  },
   mounted() {
    this.$nextTick(() => {
      // 页面渲染完成后的回调
      let that = this;
      this.$crmcf.__setAutoTableStyle(that);
    });
  },
  data() {
    return {
      disabledgz: false,
      dialogVisible: false,
      dialogVisible1: false,

      ComplaintRouteNameMain: {
        input: ""
      },
      EnableOrDisableMain: {
        value: ""
      },

      ComplaintRouteNameAdd: {
        input: ""
      },
      EnableOrDisableAdd: {
        value: ""
      },
      ComplaintRouteCodeAdd: {
        input: "",
        isdisabled: false
      },
      updateControlId: "",
      uid: "",
      tableHeight:'',
      listLoading:false,
      tabledatas: {
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          {
            label: "投诉途径编码",
            value: "lookupValueCode",
            width: "200px"
          },
          { label: "投诉途径名称", value: "lookupValueName" },
          { label: "是否启用", value: "enableName", width: "150px" }
        ],
        tableData: [],
        queryObj: {
          apiConfig: crmApis.mdsLookupValueQueryByPage,
          apiQueryRow: [
            "lookupValueCode",
            "lookupValueName",
            "isEnable",
            "enableName",
            "updateControlId",
            "uid"
          ],
          params: {
            lookupTypeCode: "LX074",
            //lookupValueCode: "",
            lookupValueName: "",
            isEnable: ""
          }
        },

        pagesize: 10,
        pageindex: 1,
        total: 0
      }
    };
  },
  methods: {
    // 查询
    query: function() {
      let that = this;
      //alert("投诉途径名称："+this.$refs.ComplaintRouteName.input+"  是否可用值："+this.$refs.EnableOrDisable.value)
      // 查询参数
      that.tabledatas.queryObj.params.lookupValueName = this.$refs.ComplaintRouteNameMainRef.input;
      that.tabledatas.queryObj.params.isEnable = this.$refs.EnableOrDisableMainRef.value;
        this.$crmcf.simpleTablequery(that, that.tabledatas, that.tabledatas.queryObj.apiConfig,function(data){
        that.tabledatas.tableData =data.rows;
        that.tabledatas.total=data.records
        })
    },

    // 重置
    reset: function() {
      this.$refs.ComplaintRouteNameMainRef.reset();
      this.$refs.EnableOrDisableMainRef.reset();
    },

    //保存
    save: function(formName) {
      let that = this;
      let flag = false;
      var config = this.config;
      config = {
        ComplaintRouteCodeAdd: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.ComplaintRouteCodeAddRef.input,
          "投诉途径编码",
          "不能为空"
        ],
        ComplaintRouteNameAdd: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.ComplaintRouteNameAddRef.input,
          "投诉途径名称",
          "不能为空"
        ],

        EnableOrDisableAdd: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.EnableOrDisableAddRef.value,
          "是否启用",
          "不能为空"
        ]
      };
      flag = true;
      this.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
           let variables = {
            dataInfo: {
                lookupTypeCode: "LX074",
                lookupValueCode: that.$refs.ComplaintRouteCodeAddRef.input,
                lookupValueName: that.$refs.ComplaintRouteNameAddRef.input,
                isEnable: that.$refs.EnableOrDisableAddRef.value,
                uid: that.uid,
                updateControlId: that.updateControlId
            }
          };
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.mdsLookupValueMutationSave,
            function() {
              // updateControlId = "";
              that.dialogVisible = false;
              that.query();
            }
          );
        }
      });
    },

    // 新增
    add: function() {
      let that = this;
      that.disabledgz = false;
      this.updateControlId = "";
      this.uid = "";
      if (
        that.$refs.ComplaintRouteCodeAddRef == undefined &&
        that.$refs.ComplaintRouteNameAddRef == undefined &&
        that.$refs.EnableOrDisableAddRef == undefined
      ) {
        that.dialogVisible = true;
      } else {
        that.$refs.ComplaintRouteCodeAddRef.reset();
        that.$refs.ComplaintRouteNameAddRef.reset();
        that.$refs.EnableOrDisableAddRef.reset();

        that.dialogVisible = true;
      }
    },

    // 修改
    modify: function(index, row) {
      // var tag = false;
      let that = this;
      that.disabledgz = true;
      that.updateControlId = row.updateControlId;
      that.uid = row.uid;
      // that.tag=false;
      //var tag = false;
      // 子组件是否为空，为空则将网格中的值赋给组件，否则再重新赋值，这个赋值通过方法去赋值
      if (
        that.$refs.ComplaintRouteCodeAddRef == undefined &&
        that.$refs.ComplaintRouteNameAddRef == undefined &&
        that.$refs.EnableOrDisableAddRef == undefined
      ) {
        that.dialogVisible = true;
        that.ComplaintRouteNameAdd.input = row.lookupValueName;
        that.EnableOrDisableAdd.value = row.isEnable;
        that.ComplaintRouteCodeAdd.input = row.lookupValueCode;
        that.ComplaintRouteCodeAdd.isdisabled = true;
      } else {
        that.ComplaintRouteNameAdd.input = row.lookupValueName;
        that.EnableOrDisableAdd.value = row.isEnable;
        that.ComplaintRouteCodeAdd.input = row.lookupValueCode;
        that.ComplaintRouteCodeAdd.isdisabled = true;

        that.dialogVisible = true;
        that.$refs.ComplaintRouteCodeAddRef.getData();
        that.$refs.ComplaintRouteNameAddRef.getData();
        that.$refs.EnableOrDisableAddRef.getData();
      }
    },
    checkComplaintRouteName() {
      let that = this;
      that.form.ComplaintRouteNameAdd.input =
        that.$refs.ComplaintRouteNameAddRef.input;
    },
    checkComplaintRouteCode() {
      let that = this;
      that.form.ComplaintRouteCodeAdd.input =
        that.$refs.ComplaintRouteCodeAddRef.input;
    },
    checkEnableOrDisable() {
      let that = this;
      that.form.EnableOrDisableAdd.value =
        that.$refs.EnableOrDisableAddRef.value;
    },

    // 分页的三个方法
    prev() {
      let that = this;
      if (this.tabledatas.pageIndex > 1) {
        that.tabledatas.pageIndex = this.tabledatas.pageIndex - 1;
        this.query();
      }
    },
    next() {
      let that = this;
      if (true) {
        that.tabledatas.pageIndex = this.tabledatas.pageIndex + 1;
        this.query();
      }
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    }
  }
};
</script>
<style scope>
.filter-params-crm .allshow label{
   overflow: visible;
}
</style>
