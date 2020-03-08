/**
* description: 服务车系
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
      <el-button size="small">导出</el-button>
      <el-button
        size="small"
        @click="reset"
      >重置</el-button>
    </div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <!--<carBrand :span="6" :code="initCode" @changeCode="getBrandCode"></carBrand>-->
        <carBrand
          :span="6"
          @changeCode="getBrandCode"
        />
        <el-col :span="6">
          <label>销售车系</label>
          <el-input
            v-model="listQuery.CAR_SERIES_CODE"
            placeholder="请选择"
            size="small"
          />
        </el-col>
        <el-col :span="6">
          <label>服务车系</label>
          <el-input
            v-model="listQuery.S_CARSERIES_CODE"
            placeholder="请选择"
            size="small"
          />
        </el-col>
        <el-col :span="6">
          <label>车系状态</label>
          <el-select
            v-model="listQuery.IS_PERFECT"
            placeholder="请选择"
            clearable
            size="small"
          >
            <el-option
              v-for="item in optionDatas"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>

        <el-dialog
          title="服务车系维护"
          :visible.sync="rangPopUPWindowsVisible"
          width="900px"
        >
          <el-form :model="PopUpWinData">
            <div class="filter-container filter-params">
              <el-row :gutter="26">
                <el-col :span="8">
                  <el-form-item
                    label="车辆品牌"
                    class="service-range-from-item"
                  >
                    <el-input
                      :disabled="true"
                      v-model="PopUpWinData.CAR_BRAND_CN"
                      auto-complete="off"
                      size="small"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item
                    label="销售车系编码"
                    class="service-range-from-item"
                  >
                    <el-input
                      :disabled="true"
                      v-model="PopUpWinData.CAR_SERIES_CODE"
                      auto-complete="off"
                      size="small"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item
                    label="销售车系名称"
                    class="service-range-from-item"
                  >
                    <el-input
                      :disabled="true"
                      v-model="PopUpWinData.CAR_SERIES_CN"
                      auto-complete="off"
                      size="small"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item
                    label="服务车系名称"
                    class="service-range-from-item"
                  >
                    <el-input
                      :disabled="true"
                      v-model="PopUpWinData.CAR_SERIES_CN"
                      auto-complete="off"
                      size="small"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col
                  :span="8"
                  class="service-range-from-item"
                >
                  <el-form-item label="服务车系编码">
                    <el-input
                      v-model="PopUpWinData.S_CARSERIES_CODE"
                      auto-complete="off"
                      size="small"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <div class="filter-container ">
                <el-button
                  size="small"
                  @click="saveServiceCarType"
                >保存</el-button>
                <el-button
                  size="small"
                  @click="resetServiceCarType"
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
      highlight-current-row
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
          <a
            href="javascript:;"
            @click="rangPopUPWindowsModal(scope.row)"
          >
            {{ scope.row.mdmCarBrandExtend.carBrandCn }}
          </a>
        </template>
      </el-table-column>
      <el-table-column label="销售车系编码">
        <template slot-scope="scope">
          <a
            href="javascript:;"
            @click="rangPopUPWindowsModal(scope.row)"
          >
            {{ scope.row.sCarseriesCode }}
          </a>
        </template>
      </el-table-column>
      <el-table-column label="销售车系名称">
        <template slot-scope="scope">
          <a
            href="javascript:;"
            @click="rangPopUPWindowsModal(scope.row)"
          >
            {{ scope.row.sCarseriesDesc }}
          </a>
        </template>
      </el-table-column>
      <el-table-column label="服务车系编码">
        <template slot-scope="scope">
          <a
            href="javascript:;"
            @click="rangPopUPWindowsModal(scope.row)"
          >
            {{ scope.row.carSeriesCode }}
          </a>
        </template>
      </el-table-column>
      <el-table-column
        label="服务车系名称"
        align="center"
      >
        <template slot-scope="scope">
          <a
            href="javascript:;"
            @click="rangPopUPWindowsModal(scope.row)"
          >
            {{ scope.row.carSeriesCn }}
          </a>
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
import {
  initChooseCarSeries,
  doQueryServiceCarSeries,
  doSaveServiceCarSeries
} from "@/api/se/basedata/serviceCarTypeSeries";
import { seApis } from "@/api/graphQLApiList/se";
import carBrand from "@/components/org/carBrand/carBrand";

export default {
  components: {
    carBrand
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
      rangPopUPWindowsVisible: false,
      listLoading: false,
      initDatas: {
        CAR_BRAND_CODE: null,
        CAR_BRAND_CN: null,
        CAR_BRAND_EN: null,
        OEM_CODE: null,
        GROUP_CODE: null,
        OEM_ID: null,
        GROUP_ID: null
      },
      optionDatas: [
        {
          value: "0",
          label: "全部"
        },
        {
          value: "1",
          label: "已维护"
        },
        {
          value: "2",
          label: "未维护"
        }
      ],
      listQuery: {
        token: "",
        OEM_CODE: "",
        GROUP_CODE: "",
        CAR_BRAND_CODE: "",
        CAR_SERIES_CODE: "",
        S_CARSERIES_DESC: "",
        IS_PERFECT: ""
      }
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      initChooseCarSeries(this.listQuery).then(response => {
        this.initDatas = response.data[seApis.ServiceCarSeries001.ServiceCode].rows;
      });
    },
    getBrandCode(val) {
      this.listQuery.CAR_BRAND_CODE = val;
    },
    getIS_PERFECT(val) {
      this.listQuery.IS_PERFECT = val;
    },
    reset() {
      this.listQuery.CAR_SERIES_CODE = "";
      this.listQuery.S_CARSERIES_CODE = "";
    },
    fetchData() {
      if (
        this.listQuery.CAR_BRAND_CODE === "" ||
        this.listQuery.CAR_BRAND_CODE === null
      ) {
        this.$alert("请选择品牌", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      } else {
        this.listLoading = true;
        doQueryServiceCarSeries(this.listQuery).then(response => {
          this.list =  response.data[seApis.ServiceCarSeries002.ServiceCode].rows;
          this.listLoading = false;
        });
      }
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    rangPopUPWindowsModal(val) {
      this.rangPopUPWindowsVisible = true;
      this.PopUpWinData = val;
    },
    saveServiceCarType() {
      if (this.PopUpWinData.S_CARSERIES_CODE === "") {
        this.$alert("请补充完整数据", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      } else {
        this.rangPopUPWindowsVisible = false;
        doSaveServiceCarSeries(this.PopUpWinData).then(response => {
          if (
            response.data[seApis.ServiceCarSeries004.ServiceCode].result === "1"
          ) {
            this.$message({
              message: "保存成功",
              type: "success"
            });
            this.fetchData();
          }
        });
      }
    },
    resetServiceCarType() {
      this.PopUpWinData.S_CARSERIES_CODE = "";
    }
  }
};
</script>
