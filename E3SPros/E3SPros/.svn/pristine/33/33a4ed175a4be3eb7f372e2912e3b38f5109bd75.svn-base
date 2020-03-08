<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="queryFindAll()">查询</el-button>
      <template>
        <el-button  size="small" @click="qingkong()">重置</el-button>
      </template>
    </div>

    <div class="filter-container filter-title">查询区</div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <section>
          <el-col :span="10" style="height=300px">
            <span class="demonstration">预约回日期:</span>
            <el-date-picker
              v-model="value6"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd"
              @change="getMessage"
            ></el-date-picker>
          </el-col>
        </section>
        <!-- <section>
    <el-col :span="6" >   
      <span class="demonstration">至:</span>
    <el-date-picker
      v-model="value2"
      type="date"
       :picker-options="pickerOptions"
      placeholder="选择日期">
    </el-date-picker>
    </el-col>
        </section>-->
        <!-- <el-col :span="6">
          <span class="demonstration">服务代表:</span>
          <el-select v-model="saName" placeholder="请选择" size="small" @change="getMessage">
            <el-option
              v-for="item in serviceCodes"
              :key="item.code"
              :label="item.text"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-col> -->
        <seCommonQueryServiceSaDDL
          :span="6"
          :labelName="labelName"
          @changeCode="getCommonQueryServiceSa"
          @change="getMessage"
        />
      </el-row>
    </div>
    <div class="filter-container filter-title">设置区</div>
    <div class="filter-container filter-button">
      <el-col :span="2">
        <span class="demonstration" style="align=left">备件需求汇总:</span>
      </el-col>
      <el-table
        v-loading="listLoading"
        :data="list1"
        element-loading-text="Loading"
        border
        fit
        stripe
        height="200px"
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
        @row-click="rowClicked"
      >
        <!-- <el-table-column type="selection" width="55" label="选择+" /> -->
        <el-table-column label="备件编号">
          <template slot-scope="scope">{{ scope.row.partNo }}</template>
        </el-table-column>
        <el-table-column label="备件名称">
          <template slot-scope="scope">{{ scope.row.partName }}</template>
        </el-table-column>
        <el-table-column label="采购包装含量">
          <template slot-scope="scope">{{ scope.row.purPackQty }}</template>
        </el-table-column>
        <el-table-column label="最小使用数量">
          <template slot-scope="scope">{{ scope.row.dlrLeastSaleQty }}</template>
        </el-table-column>
        <el-table-column label="备件数量">
          <template slot-scope="scope">{{ scope.row.partQty }}</template>
        </el-table-column>
        <el-table-column label="备件单价">
          <template slot-scope="scope">{{ scope.row.partPrice }}</template>
        </el-table-column>
        <el-table-column label="实际库存">
          <template slot-scope="scope">{{ scope.row.storeQty }}</template>
        </el-table-column>
      </el-table>
    </div>

    <div class="filter-container filter-button">
      <el-col :span="3">
        <span class="demonstration" style="align=left">预约备件需求明细:</span>
      </el-col>
      <el-table
        v-loading="listLoading1"
        :data="list2"
        element-loading-text="Loading"
        border
        fit
        stripe
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
      >
        <!-- <el-table-column type="selection" width="55" label="选择+" /> -->
        <el-table-column label="预约单号">
          <template slot-scope="scope">{{ scope.row.reserveOrderCode }}</template>
        </el-table-column>
        <el-table-column label="备件编码">
          <template slot-scope="scope">{{ scope.row.partNo }}</template>
        </el-table-column>
        <el-table-column label="备件名称">
          <template slot-scope="scope">{{ scope.row.partName }}</template>
        </el-table-column>
        <el-table-column label="客户姓名">
          <template slot-scope="scope">{{ scope.row.custName }}</template>
        </el-table-column>
        <el-table-column label="服务代表">
          <template slot-scope="scope">{{ scope.row.saName }}</template>
        </el-table-column>
        <el-table-column label="车系">
          <template slot-scope="scope">{{ scope.row.carSeriesCn }}</template>
        </el-table-column>
        <el-table-column label="预计回厂时间">
          <template slot-scope="scope">{{ scope.row.preComeDate }}</template>
        </el-table-column>
      </el-table>
    </div>
    <el-container>
      <el-main>
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
      </el-main>
    </el-container>
  </div>
</template>
<script>
import seCommonQueryServiceSaDDL from "@/components/se/seCommonQueryServiceSaDDL";
import { seApis } from "@/api/graphQLApiList/se";
import { requestGraphQL } from "@/api/commonRequest";
import {
  seReservePartQueryMain,
  seReservePartQueryDetail
} from "@/api/se/repair/appointment/SeReservePartQuery";
// import { getList, getQueryMock,seDbOpratePlaceQueryFindAll } from "@/api/se/basedata/repair/repairWIType";
// import carBrand from "@/components/carBrand/carBrand";
// import isEnable from "@/components/isEnable/isEnable";
// import setStatus from "@/components/setStatus/setStatus";
// import carType from "@/components/carType/carType";
export default {
  props: {
    span: {
      type: Number,
      default: function() {
        return 6;
      }
    }
  },
  name: "testTbale",
  components: {
    seCommonQueryServiceSaDDL
  },
  // filters: {
  //   statusFilter(status) {
  //     const statusMap = {
  //       published: "success",
  //       draft: "gray",
  //       deleted: "danger"
  //     };
  //     return statusMap[status];
  //   }
  // },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },

      labelName: "服务代表",
      value1: "",
      value2: "",
      value6: "",
      dialogVisible: false,
      isMul: true,
      code: "1",
      list1: null,
      list2: null,
      listLoading: true,
      listLoading1: true,
      saName: "",
      serviceCodes: [
        { code: "全部", text: "全部" },
        { code: "李四", text: "李四" },
        { code: "张三", text: "张三" },
        { code: "王五", text: "王五" }
      ],
      listQuery: {
        dataInfo: {
          oemCode: "",
          groupCode: "",
          dlrId: "",
          preComeDateBegin: "",
          preComeDateEnd: "",
          saempid: "",
          partNo: ""
        },
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        oemcode: "",
        groupcode: "",
        operatePartId: "",
        operatePartCode: "",
        wiSmallKindId: "",
        repairSmallKindCode: "",
        isSystem: "",
        flag: 0,
        pageTotal: 0,
        isEnable: ""
      },

      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    this.queryFindAll();
  },
  methods: {
    getCommonQueryServiceSa(val) {
       this.saName = val;
    },
    //重置页面
    qingkong() {
      this.value6 = "";
      this.saName = "";
    },
    //根据时间查询备件信息
    getMessage() {
      this.listLoading = true;
      this.listLoading1 = true;
      this.listQuery.dataInfo.preComeDateBegin = this.value6[0];
      this.listQuery.dataInfo.preComeDateEnd = this.value6[1];
      this.listQuery.dataInfo.saempid = this.saName;

      this.queryFindAll();
    },
    //查询方法
    findList2() {
      this.listLoading1 = true;
      const that = this;
      seReservePartQueryDetail(that.listQuery.dataInfo).then(response => {
        if (
          response.data[seApis.seReservePartQueryDetail.ServiceCode].result ===
            "1" &&
          response.data[seApis.seReservePartQueryDetail.ServiceCode].rows != ""
        ) {
          that.list2 =
            response.data[seApis.seReservePartQueryDetail.ServiceCode].rows;
          //  that.list2 = response.data[seApis.SeReservePartQuery.ServiceCode].row;
          that.listLoading1 = false;
        }
      });
    },
    //点击某一行
    rowClicked(rows) {
      this.listQuery.dataInfo.partNo = rows.partNo;
      this.findList2();
    },

    //刷新页面
    queryFindAll() {
      this.listLoading = true;
      const that = this;
      that.curTableRow = {};
      //转换了中台请求格式数据
      seReservePartQueryMain(that.listQuery.dataInfo).then(response => {
        if (
          response.data[seApis.seReservePartQueryMain.ServiceCode].result ===
            "1" &&
          response.data[seApis.seReservePartQueryMain.ServiceCode].rows != ""
        ) {
          // if (page) {
          //   //查询完返回指定的page页数
          //   that.listQuery.pageIndex = page;
          // }
          // that.pageTotal = response.data[seApis.seReservePartQueryMain.ServiceCode].records;
          that.list1 =
            response.data[seApis.seReservePartQueryMain.ServiceCode].rows;

          //  that.list2 = response.data[seApis.SeReservePartQuery.ServiceCode].row;
          this.listQuery.dataInfo.partNo = this.list1[0].partNo;
          this.listLoading = false;
          this.findList2();
        }
      });
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    }
  }
};
</script>
