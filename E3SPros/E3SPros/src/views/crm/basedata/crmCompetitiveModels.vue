<!--
* 描述: 竞品车型查询和维护功能
* 创建人: zouzx
* 创建时间: 2019-07-22
* 记录：
*  20190722 新建 zouzx
*  20190826 修改 hejin
-->
<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query">查询</el-button>
      <el-button @click="showdialog">新增</el-button>
      <el-button @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <CompetitorBrandName
              ref="FCompetitorBrandName"
              :CompetitorBrandName="FCompetitorBrandName"
            />
          </el-col>
          <el-col :span="6">
            <CompetitiveCarName
              ref="FCompetitiveCarName"
              :CompetitiveCarName="FCompetitiveCarName"
            />
          </el-col>
          <el-col :span="6">
            <CompetingModelName
              ref="FCompetingModelName"
              :CompetingModelName="FCompetingModelName"
            />
          </el-col>
          <el-col :span="6">
            <EnableOrDisable ref="FEnableOrDisable" :EnableOrDisable="FEnableOrDisable" />
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      style="height:320px"
      width="700px"
      class="dialog"
      title="竞品车型维护"
      modal-append-to-body
      append-to-body
    >
      <div class="filter-container filter-params-crm">
        <el-form label-position="right" :model="form" ref="form">
          <el-row>
            <el-col :span="12" class="crm-label-required">
              <CompetitorBrandName
                :CompetitorBrandName="DCompetitorBrandName"
                ref="DCompetitorBrandName"
              />
            </el-col>
            <el-col :span="12" class="crm-label-required">
              <CompetitiveCarName
                :CompetitiveCarName="DCompetitiveCarName"
                ref="DCompetitiveCarName"
              />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <CompetingModelCode
                :CompetingModelCode="DCompetingModelCode"
                ref="DCompetingModelCode"
              />
            </el-col>
            <el-col :span="12" class="crm-label-required">
              <CompetingModelName
                :CompetingModelName="DCompetingModelName"
                ref="DCompetingModelName"
              />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" class="crm-label-required">
              <EnableOrDisable :EnableOrDisable="DEnableOrDisable" ref="DEnableOrDisable" />
            </el-col>
          </el-row>
          <el-row style="float:right">
            <el-form-item>
              <el-button type="primary" size="small" @click="save('form')">保存</el-button>
            </el-form-item>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table
      :data="tabledatas.tableData"
      highlight-current-row
      ref="table"
      :style="{width:'100%',height:tableHeight+'px'}"
      v-loading.body="listLoading"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handle(scope.$index, scope.row)">修改</el-button>
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in tabledatas.colnames"
        :key="item.value"
        :label="item.label"
        :prop="item.value"
        align="center"
      ></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="tabledatas.total"
      :page-size="tabledatas.pageSize"
      :current-page="tabledatas.pageIndex"
      @prev-click="prev"
      @next-click="next"
      @current-change="changepage"
    ></el-pagination>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import CompetingVehicleName from "@/components/crm/textbox/Public/CompetingProduct/CompetingVehicleName";
import CompetingModelName from "@/components/crm/textbox/Public/CompetingProduct/CompetingModelName";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";
import CompetitorBrandName from "@/components/crm/Select/Common/CompetitorBrandName";
import CompetitiveCarName from "@/components/crm/Select/Common/CompetitiveCarName";
import CompetingModelCode from "@/components/crm/textbox/Public/CompetingProduct/CompetingModelCode";
export default {
  name: "crmCompetitiveModels",
  components: {
    CompetingVehicleName,
    CompetingModelName,
    EnableOrDisable,
    CompetitorBrandName,
    CompetitiveCarName,
    CompetingModelCode
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
      FCompetitorBrandName: {
        value: ""
      },
      FCompetitiveCarName: {
        value: ""
      },
      FCompetingModelName: {
        input: ""
      },
      FEnableOrDisable: {
        value: ""
      },
      DCompetitorBrandName: {
        value: ""
      },
      DCompetitiveCarName: {
        value: ""
      },
      DCompetingModelCode: {
        input: ""
      },
      DCompetingModelName: {
        input: ""
      },
      DEnableOrDisable: {
        value: ""
      },
      compCartypeId: "",
      compCarseriesId: "",
      updateControlld: "",
      dialogVisible: false,
      tableHeight: "",
      listLoading: false,
      tabledatas: {
        colnames: [
          {
            label: "竞品品牌",
            value: "mdmCompCarSeriesExt.mdmCompBrandExt.compBrandCn"
          },
          {
            label: "竞品车系编码",
            value: "mdmCompCarSeriesExt.compCarseriesCode"
          },
          {
            label: "竞品车系名称",
            value: "mdmCompCarSeriesExt.compCarseriesName"
          },
          { label: "竞品车型编码", value: "compCartypeCode" },
          { label: "竞品车型名称", value: "compCartypeCn" },
          { label: "是否启用", value: "isENableName" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.mdmCompCarTypeQueryFindAll,
          apiQueryRow: [
            "compCartypeCode",
            "compCartypeCn",
            "isENableName",
            "compCartypeId",
            "updateControlId",
            "compCartypeId"
          ],
          params: {
            oemCode: "",
            groupCode: "",
            //compBrandCode:"",
            compCarseriesId: "",
            compCartypeCn: "",
            compCartypeCode: "",
            // compBrandCode: "", //待增加品牌
            isEnable: ""
          }
        },
        pageSize: this.$crmcf.PAGE_SIZE,
        pageIndex: this.$crmcf.PAGE_INDEX,
        total: 0
      }
    };
  },
  methods: {
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
      that.tabledatas.pageIndex = this.tabledatas.pageIndex + 1;
      this.query();
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    },
    showdialog: function() {
      let that = this;
      if (
        that.$refs.DCompetitorBrandName == undefined &&
        that.$refs.DCompetitiveCarName == undefined &&
        that.$refs.DCompetingModelCode == undefined &&
        that.$refs.DCompetingModelName == undefined &&
        that.$refs.DEnableOrDisable == undefined
      ) {
        that.dialogVisible = true;
      } else {
        that.$refs.DCompetitorBrandName.reset();
        that.$refs.DCompetitiveCarName.reset();
        that.$refs.DCompetingModelCode.reset();
        that.$refs.DCompetingModelName.reset();
        that.$refs.DEnableOrDisable.reset();
        that.dialogVisible = true;
      }
    },
    handle: function(index, row) {
      //that.$router.push({name:'ComplainReview',params:rowData})
      let that = this;
      that.dialogVisible = true;
      this.DCompetitorBrandName.value =
        row.mdmCompCarSeriesExt.mdmCompBrandExt.compBrandCn;
      this.DCompetitiveCarName.value = row.mdmCompCarSeriesExt.compCarseriesId;
      this.DCompetingModelCode.input = row.compCartypeCode;
      this.DCompetingModelName.input = row.compCartypeCn;
      this.DEnableOrDisable.value = row.isENableName;
      this.compCartypeId = row.compCartypeId;
      this.compCarseriesId = row.mdmCompCarSeriesExt.compCarseriesId;
      this.updateControlId = row.updateControlId;
      that.$refs.DCompetitorBrandName.getData();
      that.$refs.DCompetitiveCarName.getData();
      that.$refs.DCompetingModelCode.getData();
      that.$refs.DCompetingModelName.getData();
      that.$refs.DEnableOrDisable.getData();
    },
    query: function() {
      let that = this;
      let str =
        "mdmCompCarSeriesExt{" +
        "compCarseriesCode" +
        " " +
        "compCarseriesName" +
        " " +
        "compCarseriesId" +
        " " +
        "mdmCompBrandExt{" +
        "compBrandCn}}";
      //竞品品牌
      that.tabledatas.queryObj.apiQueryRow.push(str);
      this.tabledatas.queryObj.params.compCarseriesId = this.$refs.FCompetitiveCarName.value;
      this.tabledatas.queryObj.params.compCartypeCn = this.$refs.FCompetingModelName.input;
      this.tabledatas.queryObj.params.compBrandCode = this.$refs.FCompetitorBrandName.value;
      this.tabledatas.queryObj.params.isEnable = this.$refs.FEnableOrDisable.value;
      // 处理查询网格回调
      this.$crmcf.simpleTablequery(
        that,
        that.tabledatas,
        that.tabledatas.queryObj.apiConfig,
        function(data) {
          that.tabledatas.tableData = data.rows;
          that.tabledatas.total=data.records;
        }
      );
    },
    save: function(formName) {
      const that = this;
      let flag = false;
      var config = this.config;
      config = {
        DCompetitorBrandName: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.DCompetitorBrandName.value,
          "竞品品牌",
          "不能为空"
        ],
        DCompetitiveCarName: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.DCompetitiveCarName.value,
          "竞品车系",
          "不能为空"
        ],
        DCompetingModelName: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.DCompetingModelName.input,
          "竞品车系名称",
          "不能为空"
        ],
        DEnableOrDisable: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.DEnableOrDisable.value,
          "是否启用",
          "不能为空"
        ]
      };
      that.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let variables = {
            dataInfo: {
              compCarseriesId: that.$refs.DCompetitiveCarName.value,
              compCartypeCode: that.$refs.DCompetingModelCode.input,
              compCartypeCn: that.$refs.DCompetingModelName.input,
              isEnable: that.$refs.DEnableOrDisable.value,
              updateControlId: that.updateControlId,
              compCartypeId: that.compCartypeId
            }
          };
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.mdmCompCarTypeMutationSaveById,
            function() {
              that.dialogVisible = false;
              that.updateControlId = "";
              that.compCartypeId = "";
              that.query();
            }
          );
        }
      });
    },
    reset: function() {
      this.$refs.FCompetitorBrandName.reset();
      this.$refs.FCompetitiveCarName.reset();
      this.$refs.FCompetingModelName.reset();
      this.$refs.FEnableOrDisable.reset();
    }
  }
};
</script>
<style>
</style>
