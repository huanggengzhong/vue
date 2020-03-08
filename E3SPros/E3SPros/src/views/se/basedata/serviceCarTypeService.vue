/**
* description: 服务车型
* author: ydche
* createdDate: 2019-07-20
* logs：
*  20190720 修改xxx方法 ydche
*/

<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button
        type="primary"
        size="small"
        @click="fetchData()"
      >查询</el-button>
      <el-button
        size="small"
        @click="reviseModal"
      >修改</el-button>
      <el-button
        size="small"
        @click="imports"
      >导入</el-button>
      <el-button
        size="small"
        @click="exprot"
      >导出</el-button>

      <el-button
        size="small"
        @click="resetData"
      >重置</el-button>
    </div>
    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <!--<carBrand :span="6" :code="initCode" @changeCode="getBrandCode"></carBrand>-->
        <carBrand
          ref="carBrand"
          :span="6"
          @changeCode="getBrandCode"
          :redDot="redDot"
        />
        <el-col
          :span="6"
          class="margin-r-0"
        >
          <label>销售车系编码</label>
          <el-input
            v-model="listQuery.CAR_SERIES_CODES"
            size="small"
          />
        </el-col>
        <el-col
          :span="6"
          class="margin-r-0"
        >
          <label>销售车型编码</label>
          <el-input
            v-model="listQuery.CAR_SERIES_CODE"
            size="small"
          />
        </el-col>
        <el-col
          :span="6"
          class="margin-r-0"
        >
          <label>服务车系编码</label>
          <el-input
            v-model="listQuery.CAR_SERIES_CODE"
            size="small"
          />
        </el-col>

        <div class="margin-top-39">

          <el-col :span="6">
            <label>服务车型</label>
            <el-input
              v-model="listQuery.SERVICE_CAR_TYPE"
              size="small"
            />
          </el-col>
          <CarTypeServiceStatus
            :span="6"
            ref="CarTypeServiceStatus"
          />
          <el-col :span="6">
            <label>车型小类</label>
            <el-input
              v-model="listQuery.SMALL_CAR_TYPE_CODE"
              size="small"
            />
          </el-col>
          <CarTypeServiceStartStatus
            :span="6"
            ref="CarTypeServiceStartStatus"
          />
        </div>

        <el-dialog
          title="服务车系维护"
          :visible.sync="reviseVisible"
          width="900px"
        >
          <el-form :model="PopUpWinData">
            <div class="filter-container filter-params">
              <el-row :gutter="26">
                <el-col
                  :span="8"
                  class=""
                >
                  <label>车辆品牌</label>
                  <el-input
                    :disabled="true"
                    v-model="PopUpWinData.CAR_BRAND_CN"
                    auto-complete="off"
                    size="small"
                  ></el-input>
                </el-col>
                <el-col
                  :span="8"
                  class="service-from-item margin-r-0"
                >
                  <label>销售车系</label>
                  <el-input
                    :disabled="true"
                    v-model="PopUpWinData.CAR_SERIES_CODES"
                    auto-complete="off"
                    size="small"
                  ></el-input>

                </el-col>
                <el-col
                  :span="8"
                  class="service-from-item margin-r-0"
                >
                  <label>销售车型</label>
                  <el-input
                    :disabled="true"
                    v-model="PopUpWinData.CAR_SERIES_CODE"
                    auto-complete="off"
                    size="small"
                  ></el-input>

                </el-col>
                <el-col
                  :span="8"
                  class="service-from-item"
                >
                  <label>车型小类</label>
                  <el-input
                    :disabled="true"
                    v-model="PopUpWinData.SMALL_CAR_TYPE_CODE"
                    auto-complete="off"
                    size="small"
                  ></el-input>

                </el-col>
                <el-col
                  :span="8"
                  class="service-from-item margin-r-0"
                >
                  <i
                    class="color-red"
                    v-if="this.redDot"
                  >*</i>
                  <label>服务车系</label>
                  <el-input
                    v-model="PopUpWinData.CAR_SERIES_CODE"
                    auto-complete="off"
                    size="small"
                  ></el-input>

                </el-col>
                <el-col
                  :span="8"
                  class="service-from-item margin-r-0"
                >
                  <i
                    class="color-red"
                    v-if="this.redDot"
                  >*</i>
                  <label>服务车型</label>
                  <el-input
                    v-model="PopUpWinData.SERVICE_CAR_TYPE"
                    auto-complete="off"
                    size="small"
                  ></el-input>

                </el-col>
              </el-row>
              <div class="filter-container ">
                <el-button
                  size="small"
                  @click="save"
                >保存</el-button>
                <el-button
                  size="small"
                  @click="reset"
                >重置</el-button>
              </div>
            </div>
          </el-form>
        </el-dialog>

      </el-row>
    </div>

    <div class="filter-container filter-title">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      @row-click="rowClick"
    >

      <el-table-column
        align="center"
        label="序号"
        width="60"
      >
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column label="车辆品牌">
        <template slot-scope="scope">
          {{ scope.row.CAR_BRAND_CN }}
        </template>
      </el-table-column>
      <el-table-column label="销售车系">
        <template slot-scope="scope">
          {{ scope.row.CAR_SERIES_CN }}
        </template>
      </el-table-column>
      <el-table-column label="销售车型编码">
        <template slot-scope="scope">
          {{ scope.row.CAR_SERIES_CODE }}
        </template>
      </el-table-column>
      <el-table-column label="车型小类编码">
        <template slot-scope="scope">
          {{ scope.row.S_CARSERIES_CODE }}
        </template>
      </el-table-column>
      <el-table-column label="服务车型名称">
        <template slot-scope="scope">
          {{ scope.row.S_CARSERIES_CODE }}
        </template>
      </el-table-column>
      <el-table-column
        label="服务车型编码"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.S_CARSERIES_DESC }}
        </template>
      </el-table-column>
      <el-table-column
        label="状态"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.S_CARSERIES_DESC }}
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?list.length:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
import { getList } from "@/api/table";
//import { queryServiceCarSeries } from "@/api/serviceRange";
//import setStatus from "@/components/setStatus/setStatus";
import carBrand from "@/components/org/carBrand/carBrand";
import CarTypeServiceStatus from "@/components/se/CarTypeServiceStatus";
import CarTypeServiceStartStatus from "@/components/se/CarTypeServiceStartStatus";
import {
  initCarType,
  doQueryCarType,
  doImportCarType,
  doExprotCarType,
  doSaveCarType
} from "@/api/se/basedata/serviceCarTypeService";
import { seApis } from "@/api/graphQLApiList/se";

export default {
  components: {
    carBrand,
    CarTypeServiceStatus,
    CarTypeServiceStartStatus
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      PopUpWinData: {
        name: ""
      },
      list: null,
      redDot: true,
      reviseVisible: false,
      listLoading: false,
      listRowClick: null,
      init: {
        token: null,
        OEM_CODE: null,
        GROUP_CODE: null,
        DLR_ID: null
      },
      initDatas: {
        CAR_BRAND_CODE: null,
        CAR_BRAND_CN: null,
        CAR_BRAND_EN: null,
        OEM_CODE: null,
        GROUP_CODE: null,
        OEM_ID: null,
        GROUP_ID: null
      },
      listQuery: {
        token: null,
        OEM_CODE: null,
        GROUP_CODE: null,
        CAR_BRAND_CODE: null,
        CAR_SERIES_CODES: null,
        CAR_SERIES_CODE: null,
        SMALL_CAR_TYPE_CODE: null,
        SERVICE_CAR_TYPE: null,
        IS_PERFECT: null,
        CAR_CONFIG_CODE: null,
        SUPPLY_STATUS: null,
        pageIndex: null,
        pageSize: null
      },
      importData: {
        token: null,
        OEM_CODE: null,
        GROUP_CODE: null,
        USER_ID: null,
        CAR_BRAND_CN: null,
        CAR_SERIES_CODE: null,
        CAR_SERIES_CN: null,
        CAR_SERIES_CODES: null,
        CAR_SERIES_CNS: null,
        SMALL_CAR_TYPE_CODE: null,
        SMALL_CAR_TYPE_CN: null,
        SERVICE_CAR_TYPE: null,
        IS_DUTY_CAR_TYPE_CN: null
      },
      exprotData: {},
      exprotResData: null,
      importResponData: null,
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      initCarType(this.listQuery).then(response => {
        console.log(response.data[seApis.ServiceCarType001.ServiceCode].rows);
        this.initDatas =
          response.data[seApis.ServiceCarType001.ServiceCode].rows;
      });
    },
    getBrandCode(val) {
      this.listQuery.CAR_BRAND_CODE = val;
    },
    getIS_PERFECT(val) {
      this.listQuery.IS_PERFECT = val;
    },

    fetchData(page) {
      if (
        this.listQuery.CAR_BRAND_CODE === "" ||
        this.listQuery.CAR_BRAND_CODE === null
      ) {
        this.redDot = true;
        this.$alert("请选择品牌", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
        return false;
      } else {
        let that = this;
        this.listLoading = true;
        doQueryCarType(
          that.listQuery.pageSize,
          page || that.listQuery.pageIndex,
          that.listQuery
        ).then(response => {
          console.log(response.data[seApis.ServiceCarType002.ServiceCode].rows);
          this.list = response.data[seApis.ServiceCarType002.ServiceCode].rows;
          this.listLoading = false;
        });
      }
    },
    imports() {
      doImportCarType(this.importData).then(response => {
        console.log(response.data);
        if (
          response.data[seApis.ServiceCarType004.ServiceCode].result === "1"
        ) {
          this.$message({
            message: "导入成功",
            type: "success"
          });
        }
      });
    },
    exprot(page) {
      let that = this;
      doExprotCarType(
        that.listQuery.pageSize,
        page || that.listQuery.pageIndex,
        that.listQuery
      ).then(response => {
        console.log(response.data[seApis.ServiceCarType003.ServiceCode].rows);
        this.exprotResData =
          response.data[seApis.ServiceCarType003.ServiceCode].rows;
      });
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    reviseModal() {
      if (this.listRowClick === null) {
        this.$alert("请选择一行进行修改", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      } else {
        this.reviseVisible = true;
        this.PopUpWinData = this.listRowClick;
      }
    },
    resetData() {
      this.listQuery = [];
      console.log(this.$refs.CarTypeServiceStatus);
      this.$refs.CarTypeServiceStatus.reset();
      this.$refs.CarTypeServiceStartStatus.reset();
      this.$refs.carBrand.reset();
    },
    rowClick(row, event) {
      console.log(row);
      this.listRowClick = row;
    },
    getSetStatusCode(val) {
      this.listQuery.status = val;
      console.log(this.listQuery.status);
    },
    reset() {
      this.PopUpWinData.S_CARSERIES_CODE = "";
    },
    save() {
      if (this.PopUpWinData.S_CARSERIES_CODE === "") {
        this.$alert("请填写服务车系或者服务车型", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      } else {
        doSaveCarType(this.PopUpWinData).then(response => {
          console.log(response.data);
          if (
            response.data[seApis.ServiceCarType005.ServiceCode].result === "1"
          ) {
            this.reviseVisible = false;
            this.$message({
              message: "保存成功",
              type: "success"
            });
          } else {
            this.$error("保存失败");
          }
        });
        console.log(this.PopUpWinData);
      }
    }
  }
};
</script>
<style scoped>
.service-from-item .el-form-item__label {
  margin-right: 0px;
}
a {
  color: #0077ff;
}
.margin-top-39 {
  margin-top: 39px;
}
.margin-r-0 label {
  margin-right: 0;
}
.color-red {
  color: red;
}
</style>
