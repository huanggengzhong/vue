<!--
* 描述: 竞品品牌
* 创建人: dxuem
* 创建时间: 2019-08-03 11:30
* 记录：
*  20190803 新建 dxuem
   20190822 修改 hejin
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
            <CompetingVehiclleBrandName :CompetingVehiclleBrandName="Cvbn1" ref="Cvbn1"></CompetingVehiclleBrandName>
          </el-col>
          <el-col :span="6">
            <EnableOrDisable :EnableOrDisable="Isable" ref="Isable"></EnableOrDisable>
          </el-col>
        </el-row>
      </el-form>

      <!-- 子页面————竞品品牌维护 -->
      <el-dialog
        :visible.sync="dialogVisible"
        :width="width"
        class="dialog"
        title="竞品品牌维护"
        append-to-body
      >
        <div class="filter-container filter-params-crm">
          <el-form ref="form">
            <el-row>
              <el-col :span="20" class="crm-label-required">
                <CompetingVehicleBrandCode
                  :CompetingVehicleBrandCode="Cvbc"
                  ref="Cvbc"
                  v-if="flash"
                ></CompetingVehicleBrandCode>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="20" class="crm-label-required">
                <CompetingVehiclleBrandName :CompetingVehiclleBrandName="Cvbn2" ref="Cvbn2"></CompetingVehiclleBrandName>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="20" class="crm-label-required">
                <CompetBrandEn :CompetBrandEn="CompetBrandEnAdd" ref="CompetBrandEnAddRef"></CompetBrandEn>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="20" class="crm-label-required">
                <EnableOrDisable :EnableOrDisable="EnableOrDisableAdd" ref="EnableOrDisableAddRef"></EnableOrDisable>
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
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-row class="table">
      <el-table
        :data="tabledatas.tabledata"
        :stripe="flag"
        ref="table"
        highlight-current-row
        :style="{width:'100%',height:tableHeight+'px'}"
        v-loading.body="listLoading"
        element-loading-text="Loading"
        border
        fit
      >
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column label="操作" width="100">
          <!-- scope.row:选中的一行数据 -->
          <!-- 打开线索详情（带值） -->
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="edit(scope.$index, scope.row)">修改</el-button>
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
        :page-size="tabledatas.pageSize"
        :current-page="tabledatas.pageIndex"
        :total="tabledatas.total"
        @prev-click="prev"
        @next-click="next"
        @current-change="changepage"
      ></el-pagination>
    </el-row>
  </div>
</template>
<script>
import CompetingVehicleBrandCode from "@/components/crm/textbox/Public/CompetingProduct/CompetingVehicleBrandCode";
import CompetingVehiclleBrandName from "@/components/crm/textbox/Public/CompetingProduct/CompetingVehiclleBrandName";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";
import CompetBrandEn from "@/components/crm/textbox/CompetBrandEn";
import { requestGraphQL } from "@/api/commonRequest";
import { crmApis } from "@/api/graphQLApiList/crm";

export default {
  name: "crmCompetBrand",
  components: {
    CompetingVehicleBrandCode,
    CompetingVehiclleBrandName,
    EnableOrDisable,
    CompetBrandEn
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
      width: "550px",
      tableHeight: "",
      listLoading:false,
      dialogVisible: false,
      flag: true,
      tabledatas: {
        tabledata: [],
        colnames: [
          { label: "竞品品牌名称", value: "compBrandCn" },
          { label: "竞品品牌英文名称", value: "compBrandEn" },
          { label: "竞品品牌编码", value: "compBrandCode" },
          { label: "是否启用", value: "isENableName" }
        ],
        queryObj: {
          apiConfig: crmApis.mdmCompBrandQueryFindAll, //未绑api
          apiQueryRow: [
            "compBrandCn",
            "compBrandCode",
            "isENableName",
            "oemCode",
            "groupCode",
            "compBrandEn",
            "updateControlId"
          ],
          params: {
            compBrandCode: "",
            compBrandCn: "",
            isEnable: ""
          }
        },
        pageSize: 10,
        pageIndex: 1,
        total: 0
      },
      Isable: {
        value: ""
      },
      Cvbc: {
        input: "",
        disabled: false
      },
      Cvbn1: {
        input: ""
      },
      Isable1: {
        value: ""
      },
      EnableOrDisableAdd: {
        value: ""
      },
      Cvbn2: {
        input: ""
      },
      CompetBrandEnAdd: {
        input: ""
      },
      oemCode: "",
      groupCode: "",
      updateControlId: "",
      ENname: "",
      flash: "",
      compBrandEn: ""
    };
  },
  methods: {
    query() {
      let that = this;
      //将搜索框的东西赋请求对象queryObj
      that.tabledatas.queryObj.params.compBrandCn = that.$refs.Cvbn1.input;
      that.tabledatas.queryObj.params.isEnable = that.$refs.Isable.value;
      this.$crmcf.simpleTablequery(that, that.tabledatas, that.tabledatas.queryObj.apiConfig,function(data){
        that.tabledatas.tabledata =data.rows;
        })
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    getDispatchTime(val) {
      this.listQuery.EnableOrDisable = val;
    },
    reset: function() {
      this.$refs.Cvbn1.reset();
      this.$refs.Isable.reset();
    },
    add() {
      let that = this;
      that.updateControlId = "";
      this.flash = false;
      this.$nextTick(() => {
        this.Cvbc.disabled = false;
        this.flash = true;
      });
      that.dialogVisible = true;
      that.Cvbc.input = "";
      that.$refs.Cvbc.reset();
      that.$refs.Cvbn2.reset();
      that.$refs.EnableOrDisableAddRef.reset();
      that.$refs.CompetBrandEnAddRef.reset();
    },
    edit(index, row) {
      let that = this;
      that.dialogVisible = true;
      this.flash = false;
      this.$nextTick(() => {
        this.Cvbc.disabled = true;
        this.flash = true;
      });
      that.Cvbc.input = row.compBrandCode;
      that.Cvbn2.input = row.compBrandCn;
      that.EnableOrDisableAdd.value = row.isENableName;
      that.CompetBrandEnAdd.input = row.compBrandEn;
      that.updateControlId = row.updateControlId;
      that.$refs.Cvbc.getData();
      that.$refs.Cvbn2.getData();
      that.$refs.EnableOrDisableAddRef.getData();
      that.$refs.CompetBrandEnAddRef.getData();
    },

    // 保存
    save(formName) {
      let that = this;
      let flag = false;
      var config = that.config;
      config = {
        Cvbc: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.Cvbc.input,
          "竞品品牌编码",
          "不能为空"
        ],
        Cvbn2: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.Cvbn2.input,
          "竞品品牌",
          "不能为空"
        ],
        EnableOrDisableAdd: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.EnableOrDisableAddRef.value,
          "是否启用",
          "不能为空"
        ],
        CompetBrandEnAdd: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.CompetBrandEnAddRef.input,
          "竞品品牌英文名称",
          "不能为空"
        ]
      };
      that.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let variables = {
            dataInfo: {
              compBrandCode: that.$refs.Cvbc.input,
              compBrandCn: that.$refs.Cvbn2.input,
              isEnable: that.$refs.EnableOrDisableAddRef.value,
              compBrandEn: that.$refs.CompetBrandEnAddRef.input,
              updateControlId: that.updateControlId
            }
          };
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.mdmCompBrandMutationSaveById,
            function() {
              that.query();
              that.dialogVisible = false;
              updateControlId = "";
            }
          );
        }
      });
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
    // 分页的三个方法结束
  }
};
</script>
