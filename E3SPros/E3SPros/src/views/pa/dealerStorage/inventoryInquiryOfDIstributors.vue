<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <template>
        <el-radio-group v-model="listQuery.maxMinStoreQty">
          <el-radio :label="3">全部</el-radio>
          <el-radio :label="1">超储件</el-radio>
          <el-radio :label="0">不足件</el-radio>
        </el-radio-group>
      </template>
      <el-checkbox style="margin-left:10px" v-model="isMonth" @change="changeMonth">积压月份</el-checkbox>
      <el-input
        style="width:70px"
        size="small"
        :disabled="!isMonth"
        v-model="listQuery.overStoreMonthsB"
        @blur="getNumberB"
      ></el-input>
      <span>至</span>
      <el-input
        style="width:70px"
        size="small"
        :disabled="!isMonth"
        v-model="listQuery.overStoreMonthsE"
        @blur="getNumberE"
      ></el-input>
      <el-checkbox v-model="isParts" @change="changeParts">过滤零库存件</el-checkbox>
      <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
      <el-button size="small" @click="startButton()">开启/停用</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="22">
          <el-row>
            <el-col :span="6">
              <label>备件编码</label>
              <el-input v-model="listQuery.partNo" placeholder="请输入" size="small"></el-input>
            </el-col>
            <el-col :span="6">
              <label>备件名称</label>
              <el-input v-model="listQuery.partName" placeholder="请输入" size="small"></el-input>
            </el-col>
            <el-col :span="6">
              <label>仓库名称</label>
              <el-select size="small" placeholder="请选择" v-model="listQuery.warehouseName">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.warehouseName"
                  :value="item.warehouseName"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <label>仓位编码</label>
              <el-input v-model="listQuery.placeCode" placeholder="请输入" size="small"></el-input>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button :icon="moreParam" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" class="toggleParam">
          <el-row>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isshow"
              :code="listQuery.isEnable"
              :lookuptype="lookuptype.isEnable"
              :labelName="lookupValuelable.isEnable"
              @changeCode="getisEnable"
            />
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isshow"
              :code="listQuery.partBrandCode"
              :lookuptype="lookuptype.partBrandCode"
              :labelName="lookupValuelable.partBrandCode"
              @changeCode="getpartBrandCode"
            />
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isshow"
              :code="listQuery.dlrOrderSwitch"
              :lookuptype="lookuptype.dlrOrderSwitch"
              :labelName="lookupValuelable.dlrOrderSwitch"
              @changeCode="getdlrOrderSwitch"
            />
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isshow"
              :code="listQuery.partPropertyCode"
              :lookuptype="lookuptype.partPropertyCode"
              :labelName="lookupValuelable.partPropertyCode"
              @changeCode="getpartPropertyCode"
            />
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isshow"
              :code="listQuery.fitCarTypeId"
              :lookuptype="lookuptype"
              :labelName="lookupValuelable.fitCarTypeId"
              @changeCode="getfitCarTypeId"
            />
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isshow"
              :code="listQuery.ownerType"
              :lookuptype="lookuptype"
              :labelName="lookupValuelable.ownerType"
              @changeCode="getownerType"
            />
            <el-col :span="6">
              <label>备件类别</label>
              <el-select size="small" placeholder="请选择" v-model="listQuery.partTypeName">
                <el-option
                  v-for="item in partTypeIdOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      @row-click="dataChange"
      :height="tableHeight"
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column align="center" label="备件编码" width="150">
        <template slot-scope="scope">{{ scope.row.partNo }}</template>
      </el-table-column>
      <el-table-column align="center" label="备件名称" width="120">
        <template slot-scope="scope">{{ scope.row.partName }}</template>
      </el-table-column>
      <el-table-column align="center" label="单位" width="80">
        <template slot-scope="scope">{{ scope.row.unit }}</template>
      </el-table-column>
      <el-table-column align="center" label="仓库名称" width="100">
        <template slot-scope="scope">{{ scope.row.warehouseName }}</template>
      </el-table-column>
      <el-table-column align="center" label="仓位编码" width="100">
        <template slot-scope="scope">{{ scope.row.placeCode }}</template>
      </el-table-column>
      <el-table-column label="库存数量" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.storeQty }}</template>
      </el-table-column>
      <el-table-column label="借出数量" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.borrowQty }}</template>
      </el-table-column>
      <el-table-column label="实际可用库存" align="center" width="130">
        <template slot-scope="scope">{{ scope.row.canUseQtyReal }}</template>
      </el-table-column>
      <el-table-column label="理论可用库存" align="center" width="130">
        <template slot-scope="scope">{{ scope.row.canUseQtyTheory }}</template>
      </el-table-column>
      <el-table-column label="在途数" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.wayQty }}</template>
      </el-table-column>
      <el-table-column label="欠拨数" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.oweQty }}</template>
      </el-table-column>
      <el-table-column label="建议零售价" align="center" width="110">
        <template slot-scope="scope">{{ scope.row.DlrPrice }}</template>
      </el-table-column>
      <el-table-column label="销售价" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.salePrice }}</template>
      </el-table-column>
      <el-table-column label="最后入库时间" align="center" width="170">
        <template slot-scope="scope">{{ scope.row.lastInDate }}</template>
      </el-table-column>
      <el-table-column label="最后出库时间" align="center" width="170">
        <template slot-scope="scope">{{ scope.row.lastOutDate }}</template>
      </el-table-column>
      <el-table-column label="积压月份" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.overStoreMonths }}</template>
      </el-table-column>
      <el-table-column label="库存上限" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.maxStoreQty }}</template>
      </el-table-column>
      <el-table-column label="库存下限" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.minStoreQty }}</template>
      </el-table-column>
      <el-table-column label="安全库存" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.safeQty }}</template>
      </el-table-column>
      <el-table-column label="备件品牌" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.partBrandCode }}</template>
      </el-table-column>
      <el-table-column label="备件类别" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.partTypeName }}</template>
      </el-table-column>
      <el-table-column label="备件属性" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.partPropertyName }}</template>
      </el-table-column>
      <el-table-column label="备件品种分类" align="center" width="135">
        <template slot-scope="scope">{{ scope.row.partVariety }}</template>
      </el-table-column>
      <el-table-column label="所有者类型" align="center" width="110">
        <template slot-scope="scope">{{ scope.row.ownerTypeName }}</template>
      </el-table-column>
      <el-table-column label="库存状态" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.isEnableName }}</template>
      </el-table-column>
      <el-table-column label="适应车型" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.pubPartCarType }}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?pageTotal:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      ref="paginationHeight"
    />
  </div>
</template>
<script>
import { requestGraphQL } from "@/api/commonRequest";
import { doQueryList8 } from "@/api/pa/orderAuditItem/orderAuditItem";
import { paApis } from "@/api/graphQLApiList/pa";
import { paBuDlrStorageQueryFindAll } from "@/api/pa/dealerStorage/paBuDlrStorage";
import { paBuDlrStorageMutationSave } from "@/api/pa/dealerStorage/paBuDlrStorage";
import LookupValue from "@/components/org/LookupValue/index";
import { the_Height } from "@/components/se/seMixins/makeHeight";

export default {
  mixins: [the_Height],
  components: {
    LookupValue
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
      isMul: false,
      isshow: true,
      code: "1",
      pageTotal: 0,
      list: null,
      moreParam: "el-icon-plus",
      toggleParam: false,
      isMonth: false,
      isParts: false,
      listLoading: false,
      radio: 3,
      pageIndex: 1,
      pageSize: 10,
      limit: 20,
      options: [],
      partTypeIdOptions: [],
      wearQuery: {},
      lookuptype: {
        isEnable: "DB0052",
        partBrandCode: "PA0008",
        dlrOrderSwitch: "PA0007",
        partPropertyCode: "PA0030",
        fitCarTypeId: "备件车型",
        ownerType: "PA0033"
      },
      storeQty: "",
      listQuery: {
        dlrId: "202",
        oemCode: "",
        groupCode: "",
        partNo: "",
        partName: "",
        warehouseName: "",
        placeCode: "",
        isEnable: "",
        partPropertyCode: "",
        partTypeId: "",
        partBrandCode: "",
        ownerType: "",
        overStoreMonthsB: "",
        overStoreMonthsE: "",
        maxMinStoreQty: "",
        zeroStore: ""
      },
      listQuery2: {
        partNo: "",
        updateControlId: "",
        isEnable: ""
      },
      lookupValuelable: {
        isEnable: "库存状态",
        partBrandCode: "备件品牌",
        dlrOrderSwitch: "销售开关",
        partPropertyCode: "备件属性",
        fitCarTypeId: "备件车型",
        ownerType: "所有者类型",
        partTypeId: "备件类别"
      },

      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    this.wearHouseQuery();
    this.queryPaDbAttrTypeList();
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
      if (this.toggleParam) {
        this.moreParam = "el-icon-minus";
      } else {
        this.moreParam = "el-icon-plus";
      }
    },
    fetchData(page) {
      const that = this;
      that.listLoading = true;
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfo: " +
          paApis.paBuDlrStorageQueryFindAll.InputType +
          ")",
        // 请求API
        apiUrl: paApis.paBuDlrStorageQueryFindAll.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: paApis.paBuDlrStorageQueryFindAll.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            //表格中台返回网格的字段
            apiQueryRow: [
              "partNo",
              "partName",
              "unit",
              "warehouseName",
              "placeCode",
              "storeQty",
              "borrowQty",
              "canUseQtyReal",
              "canUseQtyTheory",
              "wayQty",
              "oweQty",
              "salePrice",
              "lastOutDate",
              "overStoreMonths",
              "maxStoreQty",
              "minStoreQty",
              "safeQty",
              "partBrandCode",
              "partTypeName",
              "partPropertyName",
              "partVariety",
              "ownerTypeName",
              "isEnable",
              "isEnableName",
              "updateControlId",
              "oemId",
              "groupId",
              "oemCode",
              "groupCode"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.pageSize,
          pageIndex: page || that.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[paApis.paBuDlrStorageQueryFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.paBuDlrStorageQueryFindAll.ServiceCode].rows !=
            ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              paApis.paBuDlrStorageQueryFindAll.ServiceCode
            ].records;
          that.list =
            response.data[paApis.paBuDlrStorageQueryFindAll.ServiceCode].rows;
          that.listLoading = false;
        } else {
          that.listLoading = false;
        }
      });
    },

    //仓库查询
    wearHouseQuery(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: paApis.partsOemWareHouseQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["warehouseCode", "warehouseName", "warehouseId"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageIndex: null,
          pageSize: null,
          dataInfo: that.wearQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[paApis.partsOemWareHouseQueryFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.partsOemWareHouseQueryFindAll.ServiceCode]
            .rows != ""
        ) {
          that.options =
            response.data[
              paApis.partsOemWareHouseQueryFindAll.ServiceCode
            ].rows;
        }
      });
    },

    //备件类别查询
    queryPaDbAttrTypeList() {
      doQueryList8().then(response => {
        var resData = response.data[paApis.paDbAttrTypeQueryList.ServiceCode];
        if (resData.result === "1" && resData.rows != "") {
          let list =
            response.data[paApis.paDbAttrTypeQueryList.ServiceCode].rows;
          var temp_array = [];
          list.forEach(row => {
            temp_array.push({
              value: row.partTypeId,
              label: row.partTypeName
            });
          });
          this.partTypeIdOptions = temp_array;
        }
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.fetchData();
    },
    reset() {
      this.listQuery.partNo = "";
      this.listQuery.partName = "";
      this.listQuery.placeCode = "";
      this.listQuery.warehouseName = "";
      this.listQuery.partCarSeries = "";
      this.listQuery.isEnable = "";
      this.listQuery.partBrandCode = "";
      this.listQuery.dlrOrderSwitch = "";
      this.listQuery.partPropertyCode = "";
      this.listQuery.fitCarTypeId = "";
      this.listQuery.ownerType = "";
      this.listQuery.partTypeId = "";
    },
    startButton() {
      if (this.listQuery2.isEnable === "") {
        this.$message({
          message: "请先选中一行需要开启或停用的数据",
          type: "warning",
          duration: 2000
        });
      } else {
        if (this.listQuery2.isEnable === "1" && this.storeQty != 0) {
          this.$message({
            message: "库存不为零不能停用",
            type: "warning",
            duration: 2000
          });
        } else {
          this.listQuery2.isEnable = "0";
          paBuDlrStorageMutationSave(this.listQuery2).then(response => {
            if (
              response.data[paApis.paBuDlrStorageMutationSave.ServiceCode]
                .result === "1" &&
              response.data[paApis.paBuDlrStorageMutationSave.ServiceCode]
                .rows != ""
            ) {
              if (
                response.data[paApis.paBuDlrStorageMutationSave.ServiceCode]
                  .result === "1"
              ) {
                this.$message({
                  message:
                    response.data[paApis.paBuDlrStorageMutationSave.ServiceCode]
                      .msg,
                  type: "warning",
                  duration: 2000
                });
                this.fetchData();
              }
            }
          });
        }
      }
    },
    dataChange(row) {
      this.storeQty = row.storeQty;
      this.listQuery2.isEnable = row.isEnable;
      this.listQuery2.partNo = row.partNo;
      this.listQuery2.updateControlId = row.updateControlId;
    },
    getwarehouseName(val) {
      this.listQuery.warehouseName = val;
    },
    getpartCarSeries(val) {
      this.listQuery.partCarSeries = val;
    },
    getisEnable(val) {
      this.listQuery.isEnable = val;
    },
    getpartBrandCode(val) {
      this.listQuery.partBrandCode = val;
    },
    getdlrOrderSwitch(val) {
      this.listQuery.dlrOrderSwitch = val;
    },
    getpartPropertyCode(val) {
      this.listQuery.partPropertyCode = val;
    },
    getfitCarTypeId(val) {
      this.listQuery.fitCarTypeId = val;
    },
    getownerType(val) {
      this.listQuery.ownerType = val;
    },

    getpartTypeId(val) {
      this.listQuery.partTypeId = val;
    },

    changeMonth() {
      this.listQuery.overStoreMonthsB = "";
      this.listQuery.overStoreMonthsE = "";
    },
    changeParts(val) {
      if (val) {
        this.listQuery.zeroStore = "1";
      } else {
        this.listQuery.zeroStore = "0";
      }
    },
    getNumberB() {
      var regstr = /^[0-9]*$/;
      if (!regstr.test(this.listQuery.overStoreMonthsB)) {
        this.listQuery.overStoreMonthsB = "";
        alert("请输入正整数");
        return false;
      }
    },
    getNumberE() {
      if (this.changeMonth) {
        return false;
      }
      var regstr = /^[0-9]*$/;
      if (!regstr.test(this.listQuery.overStoreMonthsE)) {
        this.listQuery.overStoreMonthsE = "";
        alert("请输入正整数");
        return false;
      }
    }
  }
};
</script>
