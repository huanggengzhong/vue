<template>
  <div class="app-container app-container-table">
    <div
      class="filter-container filter-button"
      ref="searcheHeight"
    >
      <el-button
        type="primary"
        size="small"
        @click="textQuery(1)"
      >{{$t('sys.button.query')}}</el-button>
      <el-button
        size="small"
        @click="synchrony"
      >{{$t('sys.button.sync')}}</el-button>
      <el-button
        size="small"
        @click="synchAll"
      >{{$t('sys.button.allSync')}}</el-button>
      <el-button
        size="small"
        @click="savaGrid"
      >{{$t('sys.button.save')}}</el-button>
      <el-button
        size="small"
        @click="addTable"
      >{{$t('sys.button.add')}}</el-button>
      <el-button
        size="small"
        @click="editTable"
      >{{$t('sys.button.edit')}}</el-button>
      <el-button
        size="small"
        @click='goRouter("iconTable","hreleoe")'
      >{{$t('sys.button.export')}}</el-button>
      <el-button
        size="small"
        @click="reset"
      >{{$t('sys.button.reset')}}</el-button>
    </div>
    <div
      class="filter-container filter-title"
      ref="conTitleHeight"
    >{{$t('sys.content.searchTitle')}}</div>
    <div
      class="filter-container filter-params"
      ref="conHeight"
    >
      <el-row :gutter="26">
        <!-- <onLineStore :parDlrObject="stroeObject"/> -->
        <!-- <carBrand :isMul="true" :key="carBrandKey" :code="formField.brandCode" @changeCode="getBrandCode"></carBrand>
         -->
        <!-- <position :isRequire="false" :key="carBrandKey" @changeCode='getBrandCode'  :popupsVisible="false"></position> -->
        <!-- <userSelect :isRequire="false" :key="carBrandKey" @changeCode='getBrandCode'  :popupsVisible="false"></userSelect> -->
        <el-col :span="6">
          <lableName :curLabelName="$t('ve.label.carSerise')"></lableName>
          <el-input
            suffix-icon="el-icon-search"
            v-model="formField.carTypeCode"
            :placeholder="$t('sys.tips.esTip0')"
            size="small"
          >
          </el-input>
        </el-col>
        <setStatus
          :span="6"
          :key="instats"
          :code="formField.status"
          @changeCode="getSetStatusCode"
        ></setStatus>
        <isEnable
          :labelName="$t('ve.label.isEnable')"
          :span="6"
          :key="isEnab"
          :code="formField.isEnable"
          @changeCode="getIsEnableCode"
        ></isEnable>
      </el-row>
    </div>

    <div
      class="filter-container filter-title"
      ref="resultTitleHeight"
    >{{$t('sys.content.gridTitle')}}</div>
    <el-table
      :row-class-name="tableRowClassName"
      v-loading="listLoading"
      class="multipleTable"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :height="tableHeight"
      :header-cell-style="tableHeaderRowClassName"
      :cell-class-name="addTdClass"
      ref="multipleTable"
      @select="select"
      row-key="index"
    >
      <el-table-column
        type="selection"
        width="55"
        label="选择+"
        filed="chose"
        current-row-key="choose"
      />
      <el-table-column
        align="center"
        :label="$t('sys.content.gridIndex')"
        width="90"
        type='index'
        :show-overflow-tooltip="true"
        prop="id"
      >

      </el-table-column>
      <el-table-column
        :label="$t('ve.label.carBrand')"
        prop="brandName"
        align="center"
        :show-overflow-tooltip="true"
        current-row-key="brandName"
      >
        <template>

        </template>
      </el-table-column>
      <el-table-column
        :label="$t('ve.label.carSerise')"
        prop="carSeries"
        align="center"
        width="100"
        :show-overflow-tooltip="true"
      >
        <template slot-scope="scope">
          {{ scope.row.carSeries }}
        </template>
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        :label="$t('ve.label.carColor')+'+'"
        align="center"
      >
        <template slot-scope="scope">
          <div @click="carColorModal(scope.row)">
            {{ scope.row.carColor }}<i class="el-icon-edit position"></i>
          </div>
        </template>
      </el-table-column>
      <!--<el-table-column label="车型" align="center">
        <template slot-scope="scope">
          {{ scope.row.catType }}
        </template>
      </el-table-column>-->
      <el-table-column
        :show-overflow-tooltip="true"
        :label="$t('ve.label.carConfig')+'+'"
        align="center"
        class-name="editInput"
      >
        <template slot-scope="{row}">
          <el-input
            v-model="row.carTypeConfig"
            size="mini"
            :placeholder="$t('sys.tips.esTip0')"
          />
        </template>
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        :label="$t('ve.label.status')"
        align="center"
        width="90"
      >
        <template slot-scope="scope">
          {{ scope.row.status == 1 ? '未设置':'已设置' }}
        </template>
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        :label="$t('ve.label.isEnable')+'+'"
        align="center"
        width="150"
        class-name="editInput"
      >
        <template slot-scope="{row}">
          <!-- <component :isMul="false"  :isShowLabel="false" span="24" :key="carBrandKey" :code="row.brandName" is="carBrand" @changeCode="getBrandCode"></component>
          <component class="gridSelect" :key="instats" :isShowLabel="false" :code="row.isEnable"  :span="12" @changeCode="getIsEnableCode" is="isEnable"></component> -->
          <isEnable
            class="gridSelect"
            :key="row.isEnable"
            :isShowLabel="false"
            :code="row.isEnable"
            :span="12"
            @changeCode="getIsEnableCode"
          ></isEnable>
        </template>
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        :label="$t('ve.label.time')+'+'"
        align="center"
        class-name="editInput"
      >
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.editDate"
            type="date"
            size="large"
            placeholder="选择日期"
          >
          </el-date-picker>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :prev-text="$t('sys.content.prevPage')"
      :next-text="$t('sys.content.nextPage')"
      layout="prev, pager, next, sizes, ->, total"
      ref="paginationHeight"
      :total="pageTotal"
      :current-page.sync="listQuery.pageIndex"
      style="margin-bottom:10px"
    >
    </el-pagination>
    <carColor
      :carColorVisible="carColorVisible"
      @changeCode="getCarColorCode"
      :isMul="isMul"
    ></carColor>
    <hanDle
      @visible="handDialogVisibleFunc"
      :key="dialogVisible"
      :editData="gridData"
      :handleVisible="dialogVisible"
      :handleTitle="handleTitle"
    />

  </div>
</template>
<script>
import { getListQuery } from "@/api/table";
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import carBrand from "@/components/org/carBrand/carBrand";
import isEnable from "@/components/org/isEnable/isEnable";
import setStatus from "@/components/org/setStatus/setStatus";
import ZonegroupSelect from "@/components/org/ZonegroupSelect/index";
import carColor from "@/components/org/carColor/carColor";
import { constants } from "crypto";
import hanDle from "./handle";
import lableName from "@/components/lableName";
import position from "@/components/org/position";
import userSelect from "@/components/org/userSelect";
import onLineStore from "@/components/org/onlineStore";
import LangSelect from "@/components/LangSelect";
export default {
  name: "veztapics",
  components: {
    carBrand,
    isEnable,
    setStatus,
    carColor,
    hanDle,
    lableName,
    ZonegroupSelect,
    position,
    userSelect,
    onLineStore,
    LangSelect
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
      //表的值
      list: null,
      //表loading状态是否现实
      listLoading: true,
      //设置网格总共的条数，查询完更改
      pageTotal: 0,
      stroeObject: {
        parentDlrId: "-1",
        orgType: "1,2"
      },
      //车型弹窗框状态
      carColorVisible: false,
      //存储车型弹窗框的值
      carColorCode: undefined,
      carColorName: undefined,
      handleTitle: 0,
      isMul: false,
      //存储被点击得
      seletRow: "",
      //表单查询数据
      formField: {
        brandCode: "",
        carTypeCode: "",
        status: "",
        isEnable: ""
      },
      gridData: {},
      //显示隐藏弹出框
      dialogVisible: false,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20
      },
      //设置key更改状态,key 唯一
      instats: "a",
      carBrandKey: "b",
      isEnab: "c",
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      },
      tableHeight: 310
    };
  },
  created() {
    this.textQuery();
  },
  mounted() {
    // 调用AppMain中的方法设置网格高度（自适应）
    var parent = this.$utils.getParentView(this.$route.path, this);
    if (parent) {
      parent.setTableHeight();
    }
  },
  watch: {
    formField(val) {
      this.instats = this.instats + 1;
      this.carBrandKey = this.carBrandKey + 1;
      this.isEnab = this.isEnab + 1;
    }
  },
  methods: {
    goRouter(rtName, dataObjct) {
      console.log(rtName);
      console.log(dataObjct);
      this.$router.push({ name: rtName, params: this.formField });
      console.log(this.$route);
      //this.$route.params({name:rtName,params:dataObjct})
    },
    textQuery(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: orgApis.sysGloableRoleQueryByPage1,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "id",
              "brandName",
              "carSeries",
              "catType",
              "carTypeConfig",
              "isEnable",
              "status"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.listQuery.pageSize,
          pageIndex: page || that.listQuery.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.formField
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[orgApis.sysGloableRoleQueryByPage1.ServiceCode]
            .result === "1" &&
          response.data[orgApis.sysGloableRoleQueryByPage1.ServiceCode].rows !=
            ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              orgApis.sysGloableRoleQueryByPage1.ServiceCode
            ].records;

          that.list =
            response.data[orgApis.sysGloableRoleQueryByPage1.ServiceCode].rows;
          that.listLoading = false;
        }
      });
    },
    //把每一行的索引放进row
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    //单击复选框事件
    select(selection, row) {
      //  console.log(selection);
      //  console.log(row)
    },
    //同步
    synchrony() {
      const that = this;
      //获取选择行的值    this.$refs.multipleTable获取网格  需要在网格添加ref="multipleTable"
      let selectData = that.$refs.multipleTable.selection;
      var selectIndexSort = [];
      for (var k in selectData) {
        selectIndexSort.push(selectData[k].index);
      }
      //选择行重新排序
      selectIndexSort.sort(function(a, b) {
        return a > b ? 1 : -1;
      });
      for (var i = 1; i < selectIndexSort.length; i++) {
        //将选择第一行的某个字段数据赋给其他选择行, 可以多个
        that.list[selectIndexSort[i]].carTypeConfig =
          that.list[selectIndexSort[0]].carTypeConfig;
        that.list[selectIndexSort[i]].editDate =
          that.list[selectIndexSort[0]].editDate;
        that.list[selectIndexSort[i]].isEnable = String(
          that.list[selectIndexSort[0]].isEnable
        );
        that.list[selectIndexSort[i]].carColor = String(
          that.list[selectIndexSort[0]].carColor
        );
      }
    },
    //全部同步
    synchAll() {
      const that = this;
      //获取选择行的值    this.$refs.multipleTable获取网格  需要在网格添加ref="multipleTable"
      let selectData = that.$refs.multipleTable.selection;
      var selectIndexSort = [];
      for (var k in selectData) {
        selectIndexSort.push(selectData[k].index);
      }
      //选择行重新排序
      selectIndexSort.sort(function(a, b) {
        return a > b ? 1 : -1;
      });
      for (var i = 0; i < that.list.length; i++) {
        //将选择第一行的某个字段数据赋给其他行, 可以多个
        that.list[i].carTypeConfig =
          that.list[selectIndexSort[0]].carTypeConfig;
      }
    },
    //动态添加样式
    addTdClass({ row, column, rowIndex, columnIndex }) {
      //判断行和列的位置并且动态添加className
      if (
        rowIndex % 2 != 0 &&
        (columnIndex == 5 || columnIndex == 7 || columnIndex == 8)
      ) {
        return "inputBackground";
      }
    },
    //添加
    addTable() {
      const that = this;
      that.gridData = {};
      that.handleTitle = 0;
      that.dialogVisible = true;
    },
    //编辑
    editTable() {
      const that = this;
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length != 1) {
        this.$message({ message: "选择一条数据", type: "warning" });
        return false;
      }
      var selectDataObj = {};
      for (var key in selectData[0]) {
        selectDataObj[key] = selectData[0][key];
      }
      that.gridData = selectDataObj;
      that.dialogVisible = true;
      that.handleTitle = 1;
    },
    //保存表格
    savaGrid() {
      const that = this;
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length == 0) {
        this.$message({ message: "请至少选择一条数据", type: "warning" });
        return false;
      }
      let queryObj = {
        //保存需要传 type="mutation"
        type: "mutation",
        // api配置
        apiConfig: orgApis.sysRoleGlobalMutationSave,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "id",
              "brandName",
              "carSeries",
              "catType",
              "carTypeConfig",
              "isEnable",
              "status",
              "editDate"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 1000,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: selectData
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      requestGraphQL(paramD).then(response => {
        if (
          response.data[orgApis.sysRoleGlobalMutationSave.ServiceCode]
            .result === "1" &&
          response.data[orgApis.sysRoleGlobalMutationSave.ServiceCode].rows !=
            ""
        ) {
          this.$message({ message: "保存成功", type: "success" });
          that.$refs.multipleTable.clearSelection();
        }
      });
    },
    //重置
    reset() {
      this.formField = {
        brandCode: "",
        carTypeCode: "",
        status: "",
        isEnable: ""
      };
    },
    //显示车身模块
    carColorModal(row) {
      this.seletRow = row;
      this.carColorVisible = true;
    },
    //将选择的值赋给单元格
    getCarColorCode(val) {
      // this.carColorCode = val.code
      this.list[this.seletRow.index].carColor = val.name[0]
        ? val.name[0]
        : this.list[this.seletRow.index].carColor;
      //关闭选择弹窗框
      this.carColorVisible = false;
    },
    //获取显示
    handDialogVisibleFunc(val) {
      this.dialogVisible = val;
    },
    //获取车辆品牌组件的值
    getBrandCode(val) {
      this.formField.brandCode = val;
    },
    //获取设置状态组件的值
    getSetStatusCode(val) {
      this.formField.status = val;
    },
    //获取是否可用组件的值
    getIsEnableCode(val) {
      this.formField.isEnable = val;
    },
    //改变页现实的条数并重新查询
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.textQuery();
    },
    //翻页
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.textQuery();
    },
    changeKey() {
      this.instats = "asdsadasd";
    }
  }
};
</script>
<style lang="scss" scoped>
.gridSelect .el-col {
  margin-bottom: 0px;
}
.el-date-editor {
  width: 100% !important;
}
.el-input__prefix {
  left: 82%;
}
.selectBlock {
  width: 100%;
  display: block;
}
.position {
  position: absolute;
  right: 5px;
  top: 30%;
  color: #169bd5;
}
/deep/ .multipleTable .editInput {
  padding: 0px 3px;
}
/deep/ .multipleTable .editInput .cell {
  padding-left: 0;
  padding-right: 0;
}
/deep/ .multipleTable .editInput .el-input__inner {
  border: none;
}
/deep/ .inputBackground input {
  background: #fafafa !important;
}
/deep/ .diaConpent .el-col-6 {
  width: 100%;
}
</style>
