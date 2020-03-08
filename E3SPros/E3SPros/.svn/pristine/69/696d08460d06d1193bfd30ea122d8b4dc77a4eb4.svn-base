<!--
* 描述: 竞品车系
* 创建人: dxuem
* 创建时间: 2019-08-03 11:44
* 记录：
*  20190803 新建 dxuem
-->
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
          <el-col :span="6">
            <CompetitorBrandName :CompetitorBrandName="Cvbn1" ref="Cvbn1"></CompetitorBrandName>
          </el-col>
          <el-col :span="6">
            <CompetingVehicleName :CompetingVehicleName="Cvn" ref="Cvn"></CompetingVehicleName>
          </el-col>
          <el-col :span="6">
            <EnableOrDisable :EnableOrDisable="Isable" ref="Isable"></EnableOrDisable>
          </el-col>
        </el-row>
      </el-form>
      <el-dialog
        :visible.sync="dialogVisible"
        style="height:500px"
        width="800px"
        class="dialog"
        title="竞品车系维护"
        modal-append-to-body
        append-to-body
      >
        <div class="filter-container filter-params-crm">
          <el-form label-position="right">
            <el-row>
              <el-col :span="18" class="crm-label-required">
                <CompetitorBrandName :CompetitorBrandName="Combrann" ref="Combrann"></CompetitorBrandName>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="18">
                <CompetingVehicleCode :CompetingVehicleCode="Comvehc" ref="Comvehc"></CompetingVehicleCode>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="18" class="crm-label-required">
                <CompetingVehicleName :CompetingVehicleName="Comvehn" ref="Comvehn"></CompetingVehicleName>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="18" class="crm-label-required">
                <EnableOrDisable :EnableOrDisable="Isable1" ref="Isable1"></EnableOrDisable>
              </el-col>
            </el-row>
            <el-row style="float:right">
              <el-form-item>
                <el-button type="primary" @click="save('form')">保存</el-button>
              </el-form-item>
            </el-row>
          </el-form>
        </div>
      </el-dialog>
    </div>
    <div class="filter-container filter-title-crm" ref="resultTitleHeight">查询结果</div>
    <el-row>
      <el-table
        ref="table"
        :data="tabledatas.tableData"
        highlight-current-row
         :style="{width:'100%',height:tableHeight+'px'}"
        v-loading.body="listLoading"
        element-loading-text="Loading"
        border
        fit
      >
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column label="操作" width="100" align="center">
          <!-- scope.row:选中的一行数据 -->
          <!-- 打开线索详情（带值） -->
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="edit(scope.$index, scope.row)">修改</el-button>
          </template>
        </el-table-column>
        <!-- 打开线索跟进历史查询（带值） -->
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
    </el-row>
  </div>
</template>
<script>
import CompetingVehicleCode from "@/components/crm/textbox/Public/CompetingProduct/CompetingVehicleCode";
import CompetingVehicleName from "@/components/crm/textbox/Public/CompetingProduct/CompetingVehicleName";
import CompetitorBrandName from "@/components/crm/Select/Common/CompetitorBrandName";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";

// import EnableOrDisable from "@/components/crm/Select/Common/Customer/EnableOrDisable";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "crmComCarSeries",
  components: {
    CompetingVehicleName,
    CompetingVehicleCode,
    CompetitorBrandName,
    EnableOrDisable
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
      Cvbn1: {
        input: ""
      },
      Cvn: {
        input: ""
      },
      Isable: {
        value: ""
      },
      Combrann: {
        value: ""
      },
      Comvehc: {
        input: "",
        isdisabled:false
      },
      Comvehn: {
        input: ""
      },
      Isable1: {
        value: ""
      },
      updateControlId: "",
      compBrandCode: "",
      compCarseriesId: "",
      dialogVisible: false,
      tableHeight: "",
      listLoading:false,
      tabledatas: {
        flag: true,
        colnames: [
          //   { label: "修改", value: "" },
          { label: "竞品品牌名称", value: "mdmCompBrandExt.compBrandCn" },
          { label: "竞品车系编码", value: "compCarseriesCode" },
          { label: "竞品车系名称", value: "compCarseriesName" },
          { label: "是否启用", value: "isENableName" }
        ],
        tableData: [],
        queryObj: {
          apiConfig: crmApis.mdmCompCarSeriesQueryFindAll,
          apiQueryRow: [
            "compCarseriesId",
            "compCarseriesCode",
            "compCarseriesName",
            "isEnable",
            "isENableName",
            "compBrandCode",
            "updateControlId",
          ],
          params: {
            compBrandCode: "",
            compCarseriesName: "",
            isEnable: ""
          }
        },
         pageIndex: 1,
          pageSize: 10,
          total: 0
      }
    };
  },
  methods: {
    query: function() {
      let that = this;
      let str = " mdmCompBrandExt{" +"compBrandCn}";
      that.tabledatas.queryObj.apiQueryRow.push(str);
      that.tabledatas.queryObj.params.compBrandCode = this.$refs.Cvbn1.value;
      that.tabledatas.queryObj.params.compCarseriesName = this.$refs.Cvn.input;
      that.tabledatas.queryObj.params.isEnable = this.$refs.Isable.value;
       this.$crmcf.simpleTablequery(that, that.tabledatas, that.tabledatas.queryObj.apiConfig,function(data){
        that.tabledatas.tableData =data.rows;
        that.tabledatas.total=data.records
        })
    },

    add: function() {
      let that = this;

      if (
        this.$refs.Combrann == undefined &&
        this.$refs.Comvehc == undefined &&
        this.$refs.Comvehn == undefined &&
        this.$refs.Isable1 == undefined
      ) {
        that.dialogVisible = true;
      } else {
        that.dialogVisible = true;
        that.updateControlId="";
        that.compCarseriesId=""
        this.$refs.Combrann.reset();
        this.$refs.Comvehc.reset();
        this.$refs.Comvehn.reset();
        debugger
        this.$refs.Isable1.reset();
        this.$refs.DCompetingVehicleBrandCode.reset();
        // this.$refs.isable1.reset();

        // console.log(this.$refs.Cvbc);
      }
    },
    edit: function(index, row) {
      let that = this;
      that.dialogVisible = true;
    
      this.Combrann.value = row.compBrandCode;
      this.Comvehc.input = row.compCarseriesCode;
       this.Comvehc.isdisabled = true;
      this.Comvehn.input = row.compCarseriesName;
      this.Isable1.value = row.isEnable;
      this.updateControlId = row.updateControlId;
      this.compCarseriesId = row.compCarseriesId;
      that.$refs.Comvehc.getData();
      that.$refs.Combrann.getData();
      that.$refs.Comvehn.getData();
      that.$refs.Isable1.getData();
    },
    save: function(formName) {
      let that = this;
      let flag = false;
      var config = that.config;
      ;
      config = {
        Combrann: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.Combrann.value,
          "竞品品牌",
          "不能为空"
        ],
        Comvehn: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.Comvehn.input,
          "竞品车系",
          "不能为空"
        ],
        Isable1: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.Isable1.value,
          "是否启用",
          "不能为空"
        ]
      };
      ;
      that.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
             let variables = {
         dataInfo: {
                //非空
                compBrandCode: that.$refs.Combrann.value,
                compCarseriesCode: that.$refs.Comvehc.input,
                compCarseriesName: that.$refs.Comvehn.input,
                isEnable: that.$refs.Isable1.value,
                compCarseriesId: that.compCarseriesId,
                updateControlId: that.updateControlId
              }
          };
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.mdmCompCarSeriesMutationSaveById,
            function() {
              that.dialogVisible = false;
              that.updateControlId = "";
              that.query();
            }
          );
        }
      });
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    getDispatchTime(val) {
      this.listQuery.EnableOrDisable = val;
    },
    reset: function() {
      // 
      // this.$refs.recei.reset();
      this.$refs.Cvbn1.reset();
      this.$refs.Cvn.reset();
      this.$refs.Isable.reset();
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
