<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click.native="fetchData(1)">查询</el-button>
      <el-button size="small" @click.native="exportData(1)">导出</el-button>
      <el-button size="small" @click.native="resetData()">重置</el-button>
    </div>

    <!--************************************ 查询区 *********************************  -->
    <!-- <div class="filter-container filter-title" ref="conTitleHeight">查询区</div> -->
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="5">
          <label>零件号</label>
          <el-input v-model="dataInfo.elementCode" clearable size="small"></el-input>
        </el-col>
        <el-col :span="5">
          <label>零件中文名</label>
          <el-input v-model="dataInfo.elementNameCn" clearable size="small"></el-input>
        </el-col>
        <el-col :span="5">
          <label>零件英文名</label>
          <el-input v-model="dataInfo.elementNameEn" clearable size="small"></el-input>
        </el-col>
        <el-col :span="5">
          <label>状态</label>
          <el-select v-model="dataInfo.isEnable" size="small" placeholder="请选择" clearable>
            <el-option
              v-for="item in statusOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="24" v-show="toggleParam">
        <el-col :span="5">
          <label>备件类别</label>
          <el-select v-model="dataInfo.partTypeId" size="small" placeholder="请选择" clearable>
            <el-option
              v-for="item in partTypeIdOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>

        <el-col :span="5">
          <label>计量单位</label>
          <el-input v-model="dataInfo.unit" clearable size="small"></el-input>
        </el-col>
      </el-row>
    </div>
    <!--*****************************************查询结果************************************-->
    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :height="tableHeight"
      highlight-current-row
      ref="multipleTable"
    >
      <!-- <el-table-column label="选择" type="selection" width="60" align="center" ></el-table-column>   -->
      <el-table-column align="center" label="序号">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>

      <el-table-column label="零件号" align="center" prop="elementCode">
        <template slot-scope="scope">{{ scope.row.elementCode }}</template>
      </el-table-column>

      <el-table-column label="零件中文名称" align="center" prop="elementNameCn">
        <template slot-scope="scope">{{ scope.row.elementNameCn }}</template>
      </el-table-column>

      <el-table-column label="零件英文名称" align="center" prop="elementNameEn">
        <template slot-scope="scope">{{ scope.row.elementNameEn }}</template>
      </el-table-column>

      <el-table-column label="备件类别" align="center" prop="partTypeName">
        <template slot-scope="scope">{{ scope.row.partTypeName }}</template>
      </el-table-column>

      <el-table-column label="计量单位" align="center" prop="unit">
        <template slot-scope="scope">{{ scope.row.unit }}</template>
      </el-table-column>

      <el-table-column label="状态" align="center" prop="isEnableName">
        <template slot-scope="scope">{{ scope.row.isEnableName }}</template>
      </el-table-column>

      <el-table-column label="备注" align="center" prop="scope">
        <template slot-scope="scope">{{ scope.row.remark }}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      ref="paginationHeight"
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?listRecords:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { the_Height } from "@/components/se/seMixins/makeHeight";
import {
  doQueryList4,
  doQueryList3,
  doQueryList8
} from "@/api/pa/orderAuditItem/orderAuditItem";
import { paApis } from "@/api/graphQLApiList/pa";
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import LookupValue from "@/components/org/LookupValue/index";
import lableName from "@/components/lableName";
import { log } from "util";

export default {
  mixins: [the_Height],
  components: {
    LookupValue,
    lableName
  },

  data() {
    return {
      //备件类别下拉框
      partTypeIdOptions: [],
      //状态下拉框
      statusOption: [],

      listRecords: 0,
      labelName1: "状态",
      labelName2: "备件类型",
      isMul: false, //下拉框是否多选
      isshow: true, //是否显示lable
      looluptype1: "DB0052", //值列表查询编码，自行修改成变量
      looluptype2: "PA0009",

      tableHeight: "", //首先给定table的默认高度
      tableMarginHeight: 15,
      isValiad: false,
      toggleParam: false,
      count: false, //计数
      isDisplay: false,
      list: [],
      dialogList: "",
      dialogVisible: false,
      listLoading: true,
      dialogModel: "",
      rowDetail: "",
      rowColumn: "",
      excelName: "", //导出参数
      excelSheetName: "",
      currentRow: "",
      apiConfig: null, // API配置对象
      apiQueryRow: [], // 表格中台返回网格的字段

      dataInfo: {
        //(查询)回传给后台的查询条件
        pageIndex: 1,
        pageSize: 10,
        oemCode: "",
        groupCode: "",
        elementCode: "",
        elementCode: "",
        elementNameEn: "",
        elementNameCn: "",
        partTypeId: "",
        isEnable: "",
        unit: ""
      },

      listQuery: {
        pageIndex: "",
        pageSize: ""
      },
      lookupVari: [
        "oemCode",
        "groupCode",
        "lookupTypeCode",
        "lookupValueCode",
        "lookupValueName"
      ],
      ruleForm: {
        pageIndex: "",
        pageSize: "",
        mutation: "",
        oemCode: "",
        groupCode: "",
        elementId: "",
        elementCode: "",
        elementNameEn: "",
        elementNameCn: "",
        isEnable: "",
        unit: "",
        remark: "",
        partTypeId: "",
        partTypeCode: "",
        updateControlId: "",
        creator: "",
        modifier: ""
      }

      // tableHeaderRowClassName({ row, rowIndex }) {
      //   if (rowIndex === 0) {
      //     return "background-color:rgb(239, 239, 239);height:32px;";
      //   }
      // },
    };
  },

  created() {
    this.fetchData(1);
    this.queryPaDbAttrTypeList();
    this.initFetchData();
  },

  methods: {
    changeToggleParam() {
      if (!this.count) {
        this.toggleParam = true;

        // this.tableHeight = this.tableHeight - 35;
        // window.addEventListener("click", () => {
        //   this.setTableHeight(true);
        // });
        // this.$nextTick(() => {
        //   this.setTableHeight();
        // });
        this.count = true;
      } else {
        this.toggleParam = false;
        // this.tableHeight = 404;

        // window.addEventListener("click", () => {
        //   this.setTableHeight(true);
        // });
        // this.$nextTick(() => {
        //   this.setTableHeight();
        // });

        this.count = false;
      }
    },

    initFetchData(page) {
      const that = this;
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfoA: " +
          orgApis.mdsLookupValueQueryByPage.InputType +
          ")",
        // 请求API
        apiUrl: paApis.paDbPartListQueryList.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: orgApis.mdsLookupValueQueryByPage.ServiceCode,
            // API服务编码&参数
            apiServiceParam:
              "(dataInfo: $dataInfoA, pageIndex: $pageIndex, pageSize: $pageSize)",
            // 表格中台返回网格的字段
            apiQueryRow: that.lookupVari
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.listQuery.pageSize,
          pageIndex: that.listQuery.pageIndex,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfoA: {
            isEnable: "1",
            lookupTypeCode: "PA0039" //状态 DB0052
          }
        }
      };
      //转换了中台请求格式数据
      let paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.result === "1") {
          if (page) {
            //查询完返回指定的page页数
            that.dataInfo.pageIndex = page;
          }
          /// that.statusOption= response.data.mdsLookupValueQueryByPage.rows;
          var temp_array = [];
          response.data.mdsLookupValueQueryByPage.rows.forEach(row => {
            temp_array.push({
              value: row.lookupValueCode,
              label: row.lookupValueName
            });
          });
          that.statusOption = temp_array;
          that.listLoading = false;
        } else {
          this.$message({
            message: "查询失败：" + response.msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    },

    //查询备件类别
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

    fetchData(page) {
      //查询
      this.doQuery(page, "notExcel");
    },

    exportData(page) {
      //导出
      this.doQuery(page, "excel");
    },

    doQuery(page, dataType) {
      // console.log("检测");
      this.listLoading = true;
      let obj = {};
      obj.oemCode = this.dataInfo.oemCode;
      obj.groupCode = this.dataInfo.groupCode;
      obj.elementCode = this.dataInfo.elementCode;
      obj.elementNameEn = this.dataInfo.elementNameEn;
      obj.elementNameCn = this.dataInfo.elementNameCn;
      obj.partTypeId = this.dataInfo.partTypeId;
      obj.isEnable = this.dataInfo.isEnable;
      obj.unit = this.dataInfo.unit;

      var pageSize = dataType == "excel" ? 99999 : this.dataInfo.pageSize;
      var tableColumns =
        this.$refs.multipleTable == null
          ? null
          : this.$refs.multipleTable.columns;
      //   console.log("tableColumns:" + JSON.stringify(tableColumns));

      doQueryList4(
        pageSize,
        page || this.dataInfo.pageIndex,
        obj,
        dataType,
        "零件清单导出",
        "零件清单列表",
        tableColumns
      ).then(response => {
        if (dataType == "excel") {
          this.$utils.downloadFile(response, this.date());
        } else {
          if (
            response.data[paApis.paDbElementQueryList.ServiceCode].result ===
            "1"
          ) {
            if (page) {
              this.dataInfo.pageIndex = page;
            }
            this.list =
              response.data[paApis.paDbElementQueryList.ServiceCode].rows;
            this.listRecords = parseInt(
              response.data[paApis.paDbElementQueryList.ServiceCode].records
            );
          }
        }
        this.listLoading = false;
      });
    },

    resetData() {
      //重置
      (this.dataInfo.elementCode = ""),
        (this.dataInfo.elementNameEn = ""),
        (this.dataInfo.elementNameCn = ""),
        (this.dataInfo.partTypeId = ""),
        (this.dataInfo.isEnable = ""),
        (this.dataInfo.unit = ""),
        (this.dataInfo.isEnable = ""),
        (this.dataInfo.partTypeId = "");

      this.date();
    },

    date() {
      //获取当前时间
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      var day = date.getDate();
      if (day < 10) {
        day = "0" + day;
      }

      var hour = "00" + date.getHours();
      hour = hour.substr(hour.length - 2);
      var minute = "00" + date.getMinutes();
      minute = minute.substr(minute.length - 2);
      var second = "00" + date.getSeconds();
      second = second.substr(second.length - 2);

      //var str = year+"年"+month+"月"+day+"日"+hour+"时"+minute+"分"+second+"秒";

      var str = year.toString() + month.toString() + day.toString() + hour + minute + second;
      return "零件清单导出" + str + ".xlsx";
    },

    getRepairStatus1(val) {
      this.dataInfo.isEnable = val;
    },
    getRepairStatus2(val) {
      this.dataInfo.partTypeId = val;
    },
    getRepairStatus3(val) {
      this.ruleForm.partTypeId = val;
    },
    getRepairStatus4(val) {
      this.ruleForm.isEnable = val;
    },

    handleSizeChange(val) {
      this.dataInfo.pageSize = val;
      this.fetchData(1);
    },
    handleCurrentChange(val) {
      this.dataInfo.pageIndex = val;
      this.fetchData();
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .el-dialog .el-form-item {
  margin: 0;
}
</style>