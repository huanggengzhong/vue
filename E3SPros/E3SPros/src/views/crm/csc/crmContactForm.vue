<!--
* 描述: 接触方式维护
* 创建人: hejin
* 创建时间: 2019-07-26
* 记录：
*  20190726 新建 hejin
缺少字段
-->
<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="query()">查询</el-button>
      <el-button size="small" @click="add()">新增</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>
    <div class="filter-container filter-title-crm">查询区</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <el-col :span="7">
            <ContactMethodName :ContactMethodName="FContactMethodName" ref="FContactMethodName"></ContactMethodName>
          </el-col>
          <el-col :span="7">
            <!--是否启用-->
            <EnableOrDisable :EnableOrDisable="FEnableOrDisable" ref="FEnableOrDisable"></EnableOrDisable>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm">数据区</div>
    <el-table :data="tabledatas.tableData" :stripe="tabledatas.flag" highlight-current-row ref="table" :style="{width:'100%',height:tableHeight+'px'}" element-loading-text="Loading" v-loading.body="false" border fit>
      <el-table-column type="index" label="序号" width="55px" align="center"></el-table-column>
      <el-table-column label="操作" align="center" width="100px">
        <template slot-scope="scope" align="center">
          <el-button type="text" size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        </template>
      </el-table-column>
      <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pageSize" :current-page="tabledatas.pageIndex" @prev-click="prev" @next-click="next" @current-change="changepage"></el-pagination>
    <!--修改弹窗-->
    <el-dialog title="维护" :visible.sync="dialogVisible" width="800px" center modal-append-to-body append-to-body>
      <div class="filter-container filter-params-crm">
        <el-col>
          <el-form label-position="right" ref="form">
            <el-row>
              <!--接触方式编码-->
              <el-col :span="12" class="crm-label-required">
                <ContactWayCode :ContactWayCode="DContactWayCode" ref="DContactWayCode"></ContactWayCode>
              </el-col>
              <!--接触方式-->
              <el-col :span="12" class="crm-label-required">
                <ContactMethodName :ContactMethodName="DContactMethodName" ref="DContactMethodName"></ContactMethodName>
              </el-col>
            </el-row>
            <!--是否启用-->
            <el-row>
              <el-col :span="12" class="crm-label-required">
                <EnableOrDisable :EnableOrDisable="DEnableOrDisable" ref="DEnableOrDisable"></EnableOrDisable>
              </el-col>
            </el-row>
            <el-row style="float:right">
              <el-form-item>
                <el-button type="primary" size="small" @click="save('form')">保存</el-button>
                <el-button type size="small" @click="closedialogVisible">关闭</el-button>
              </el-form-item>
            </el-row>
          </el-form>
        </el-col>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import ContactMethodName from "@/components/crm/textbox/Public/ContactMethodName.vue"; //接触方式
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable.vue"; //状态
import ContactWayCode from "@/components/crm/textbox/Public/ContactWayCode.vue"; //接触方式编码
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "crmContactForm",
  components: {
    ContactMethodName,
    EnableOrDisable,
    ContactWayCode
  },
  data() {
    return {
      tableHeight: "",
      toggleParam: false,
      dialogVisible: false,
      updateControlId: "",
      cantactWayId: "",
      FContactMethodName: {
        input: ""
      },
      FEnableOrDisable: {
        value: ""
      },
      DContactWayCode: {
        input: "",
        isdisabled: false
      },
      DContactMethodName: {
        input: "",
        isdisabled: false
      },
      DEnableOrDisable: {
        value: ""
      },
      tabledatas: {
        flag: true,
        colnames: [
          { label: "接触方式名称", value: "cantactWayName" },
          { label: "接触方式编码", value: "cantactWayCode" },
          { label: "是否启用", value: "isEnableCn" },
          { label: "创建人", value: "createdName" },
          { label: "创建时间", value: "createdDate" },
          { label: "修改人", value: "modifyName" },
          { label: "修改时间", value: "lastUpdatedDate" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.pcDbCantactWayQueryFindAll,
          apiQueryRow: [
            "cantactWayName",
            "cantactWayCode",
            "isEnableCn",
            "isEnable",
            "createdName",
            "modifyName",
            "lastUpdatedDate",
            "createdDate",
            "cantactWayId",
            "updateControlId"
          ],
          params: {
            cantactWayId: "",
            cantactWayCode: "",
            cantactWayName: "",
            isEnable: "",
            updateControlId: ""
          }
        },
        pageIndex: 1,
        pageSize: 9,
        total: 0
      }
    };
  },
  mounted() {},
  methods: {
    // 查询
    query: function() {
      let that = this;
      this.tabledatas.queryObj.params.cantactWayName = this.$refs.FContactMethodName.input;
      this.tabledatas.queryObj.params.isEnable = this.$refs.FEnableOrDisable.value;
      this.$crmcf.simpleTablequery(
        that,
        that.tabledatas,
        that.tabledatas.queryObj.apiConfig,
        function(data) {
          that.tabledatas.tableData = data.rows;
          that.tabledatas.total = data.records;
        }
      );
    },
    //保存
    save: function(formName) {
      let that = this;
      let flag = false;
      var config = that.config;
      config = {
        DContactWayCode: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.DContactWayCode.input,
          "接触方式编码",
          "不能为空"
        ],
        DContactMethodName: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.DContactMethodName.input,
          "接触方式名称",
          "不能为空"
        ],
        DEnableOrDisable: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.DEnableOrDisable.value,
          "是否启用",
          "不能为空"
        ]
      };
      that.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let variables = {
            dataInfo: {
              //写入参数赋值
              cantactWayId: that.cantactWayId,
              cantactWayCode: that.$refs.DContactWayCode.input,
              cantactWayName: that.$refs.DContactMethodName.input,
              isEnable: that.$refs.DEnableOrDisable.value,
              updateControlId: that.updateControlId
            }
          };
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.pcDbCantactWayMutationSaveById,
            function() {
              that.dialogVisible = false;
              that.updateControlId = "";
              that.cantactWayId = "";
              that.query();
            }
          );
        }
      });
    },
    //新增
    add: function() {
      let that = this;
      this.updateControlId = "";
      this.uid = "";
      if (
        that.$refs.DContactWayCode == undefined &&
        that.$refs.DContactMethodName == undefined &&
        that.$refs.DEnableOrDisable == undefined
      ) {
        that.dialogVisible = true;
      } else {
        that.$refs.DContactWayCode.reset();
        that.$refs.DContactMethodName.reset();
        that.$refs.DEnableOrDisable.reset();
        that.dialogVisible = true;
      }
    },
    //修改
    handleEdit: function(index, row) {
      let that = this;
      this.updateControlId = row.updateControlId;
      this.cantactWayId = row.cantactWayId;
      // 子组件是否为空，为空则将网格中的值赋给组件，否则再重新赋值，这个赋值通过方法去赋值
      if (
        that.$refs.DContactWayCode == undefined &&
        that.$refs.DContactMethodName == undefined &&
        that.$refs.DEnableOrDisable == undefined
      ) {
        that.DContactMethodName.isdisabled = true;
        that.DContactWayCode.isdisabled = true;
        that.dialogVisible = true;
        that.DContactWayCode.input = row.cantactWayCode;
        that.DContactMethodName.input = row.cantactWayName;
        that.DEnableOrDisable.value = row.isEnable;
      } else {
        that.DContactMethodName.isdisabled = true;
        that.DContactWayCode.isdisabled = true;
        that.DContactWayCode.input = row.cantactWayCode;
        that.DContactMethodName.input = row.cantactWayName;
        that.DEnableOrDisable.value = row.isEnable;
        that.dialogVisible = true;
        that.$refs.DContactWayCode.getData();
        that.$refs.DContactMethodName.getData();
        that.$refs.DEnableOrDisable.getData();
      }
    },
    //重置
    reset: function() {
      this.$refs.FContactMethodName.reset();
      this.$refs.FEnableOrDisable.reset();
      this.$refs.FContactWayCode.reset();
      this.$refs.FContactMethodName.reset();
    },
    //关闭
    closedialogVisible: function() {
      let that = this;
      that.dialogVisible = false;
    },
    //换行开关
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
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
<style>
</style>
