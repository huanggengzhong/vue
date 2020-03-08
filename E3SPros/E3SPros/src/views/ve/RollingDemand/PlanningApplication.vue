<!--
* description:经销商滚动需求计划制定时机
* author: linsy
* createdDate: 2019-08-14
-->
<template>
  <div class="app-container app-container-table">
    <div style="width:67%;display:inline-block">
      <div class="filter-container filter-button" ref="searcheHeight">
        <el-button type="primary" size="small" @click="queryTable(1)">{{$t('sys.button.query')}}</el-button><!-- 查询 -->
        <el-button size="small" @click="reset">{{$t('sys.button.reset')}}</el-button><!-- 重置 -->
      </div>
      <div class="filter-container filter-title" ref="conTitleHeight">{{$t('sys.content.searchTitle')}}</div> <!-- 查询条件 -->
      <div class="filter-container filter-params" ref="conHeight">
        <el-row style="height: 40px">
          <carBrand
            :span="8"
             :labelName="$t('org.label.carBrandCn')"
            :isMul="false"
            :key="carBrandKey"
            :code="formField.carBrandCode"
            @changeCode="getBrandCode"
          ></carBrand> <!-- 品牌 -->
          <orgDlr :span="8" @changeCode="getSelDlrCode"   :labelName="$t('org.label.dlrName')" :key="dlrKey" />  <!-- 经销商 -->
          <datePicker :labelName="$t('ve.label.planYear')" :span="8" @changeCode="getPlanMonth" :key="planMonthKey" />
          <!-- 计划年月 -->
        </el-row>
      </div>
      <div class="filter-container filter-title" ref="resultTitleHeight">{{$t('sys.content.gridTitle')}}</div>
    <!-- 查询结果 -->
      <el-table
        ref="table"
        id="asdfghh"
        style="height:335px"
        :data="list"
        highlight-current-row
        :header-cell-style="tableHeaderRowClassName"
      >
        <!-- style="height:jQuery(window).height()-200px;"
        height="jQuery(window).height() - 200px"-->
        <el-table-column
          :key="`col_${index}`"
          v-for="(col, index) in tableCols"
          :label="col.label"
          :prop="col.prop"
          :width="col.width || null"
        >
          <template slot-scope="{row}">{{ row.prop }}</template>
        </el-table-column>
      </el-table>
      <!-- <el-table
        :row-class-name="tableRowClassName"
        v-loading="listLoading"
        :data="list"
        element-loading-text="加载中"
        border
        stripe
        height="490px"
        @row-dblclick="changeEdit"
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
        ref="multipleTable"
        @current-change="handleTableRowChange"
      >
        <el-table-column align="center" label="序号" width="60" type="index" prop="id"></el-table-column>
        <el-table-column label="品牌" align="center" width="120" current-row-key="carBrandName">
          <template slot-scope="scope">{{ scope.row.carBrandName }}</template>
        </el-table-column>
        <el-table-column label="月份" align="center" current-row-key="makeMonth">
          <template slot-scope="scope">{{ scope.row.makeMonth }}</template>
        </el-table-column>
        <el-table-column label="车系" align="center" current-row-key="carSeriesName">
          <template slot-scope="scope">{{ scope.row.carSeriesName }}</template>
        </el-table-column>
        <el-table-column label="车型" align="center" width="150" current-row-key="carTypeName">
          <template slot-scope="scope">{{scope.row.carTypeName}}</template>
        </el-table-column>
        <el-table-column label="车型配置编码" align="center" width="159" current-row-key="carConfigCode">
          <template slot-scope="scope">{{scope.row.carConfigCode}}</template>
        </el-table-column>
        <el-table-column label="颜色" align="center" width="150" current-row-key="carColorName">
          <template slot-scope="scope">{{scope.row.carColorName}}</template>
        </el-table-column>
        <el-table-column label="内饰色" align="center" width="150" current-row-key="carIncolorName">
          <template slot-scope="scope">{{scope.row.carIncolorName}}</template>
        </el-table-column>
      </el-table>-->
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
      ></el-pagination>
    </div>
    <div id="qwertasd" style="width:32%;float:right;height:530px;margin-top:38px;overflow-y: auto;">
      <div class="filter-container filter-title" ref="conTitleHeight">{{$t('ve.label.timeSet')}}</div>
      <!-- 经销商滚动需求计划指定时机设置 -->
      <div class="filter-container filter-params" ref="conHeight">
        <el-row style="height:21px">
          <carBrand
          :labelName="$t('org.label.carBrandCn')"
            :span="22"
            :isMul="false"
            :key="carBrandKey2"
            :code="saveFormField.carBrandCode"
            @changeCode="getBrandSaveCode"
          ></carBrand>
          <!-- 品牌 -->
          <orgDlr :span="22" :labelName="$t('org.label.dlrName')" @changeCode="getSaveDlrCode" :key="saveDlrKey" />
          <!-- 经销商 -->
          <el-col :span="24">
            <el-row style="margin-bottom:0">
              <el-col :span="8" style="text-align:right;">
                <label style="width: auto;margin-left: 27px;">{{$t('ve.label.setMonth')}}</label>
                <!-- 制定计划月份 -->
              </el-col>
              <el-col :span="16" style="text-align:left">
                <el-checkbox-group v-model="checkList" @change="getPlanMonth">
                  <el-checkbox
                    v-for="(item,index) in monthArr"
                    :label="item"
                    :key="index"
                    style="width:28%;text-align:left"
                  ></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
          </el-col>
          <datePicker
            :labelName="$t('ve.label.startTime')"
            :span="22"
            @changeCode="getpPlmBeginCode"
            :key="plmBeginKey"
          />
          <!-- 制定开始日期 -->
          <datePicker :labelName="$t('ve.label.endTime')" :span="22" @changeCode="getPlmEndCode" :key="plmEndKey" />
          <!-- 制定结束日期 -->
          <carTypeConfig :span="22" :labelName="$t('org.label.carType')" @changeCode="getCarConfigCode" :key="carConfigKey" />
          <!-- 车型-->
          <carColor :span="22" @changeCode="getCarColorCode" :labelName="$t('org.label.carColor')" :key="carColorKey" />
          <!-- 车身颜色 -->
          <TrimPopupColor :labelName="$t('org.label.carIncolor')" :span="22" @changeCode="getCarInColorCode" :key="TrimPopKey" />
            <!-- 内饰色 -->
        </el-row>
        <div class="filter-container filter-button" ref="searcheHeight">
          <el-button type="primary" size="small" @click="save">{{$t('sys.button.save')}}</el-button>
          <!-- 保存 -->
          <el-button size="small" @click="resetSave">{{$t('sys.button.reset')}}</el-button>&nbsp;
          <!-- 重置 -->
        </div>
        <br />
      </div>

      <div style="width:100%;float:right;margin-top:5px">
        <div class="filter-container filter-params" ref="conHeight">
          <el-row style="margin-bottom:0">
            <el-col :span="8" style="text-align:right;">
              <label style="width: auto;margin-left: 16px;">{{$t('ve.label.clearMonthPlan')}}</label>
              <!-- 清空月需求计划 -->
            </el-col>
            <el-col :span="16" style="text-align:left">
              <el-checkbox-group v-model="checkList2">
                <el-checkbox
                  v-for="(item,index) in monthArr"
                  :label="item"
                  :key="index"
                  style="width:28%;text-align:left"
                ></el-checkbox>
              </el-checkbox-group>
            </el-col>
          </el-row>
          <div style="padding-bottom:10px" ref="searcheHeight">
            <el-button size="small" @click="clearPlan()">{{$t('ve.label.clearMonthPlan')}}</el-button>&nbsp;<!-- 清空月需求计划 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import carBrand from "@/components/org/carBrand/carBrand";
import datePicker from "@/components/org/datePicker/datePicker";
import carColor from "@/components/org/carColor/";
import carTypeConfig from "@/components/org/carTypeConfig";
import TrimPopupColor from "@/components/org/TrimPopupColor";
import orgDlr from "@/components/org/orgDlr/";
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name: "PlanningApplication",
  components: {
    carBrand,
    datePicker,
    carColor,
    carTypeConfig,
    TrimPopupColor,
    orgDlr
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
  watch: {
    formField(val) {
      this.carBrandKey = this.carBrandKey + 1;
      this.dlrKey = this.dlrKey + 1;
      this.planMonthKey = this.planMonthKey + 1;
    },
    saveFormField(val) {
      this.carBrandKey2 = this.carBrandKey2 + 1;
      this.saveDlrKey = this.saveDlrKey + 1;
      this.plmEndKey = this.plmEndKey + 1;
      this.plmBeginKey = this.plmBeginKey + 1;
      this.carConfigKey = this.carConfigKey + 1;
      this.carColorKey = this.carColorKey + 1;
      this.TrimPopKey = this.TrimPopKey + 1;
    },
    screenHeight(val) {
      // this.startTable();
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenHeight = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // 打印screenWidth变化的值
          console.log(that.screenHeight);
          that.timer = false;
        }, 400);
      }
    }
  },
  data() {
    return {
      timer:false,
      screenHeight: document.body.offsetHeight,
      list: null,
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: "carBrandName", label:this.$t('org.label.carBrandCn'), width: 180, align: "center" },//品牌
        { prop: "makeMonth", label: this.$t('ve.label.month'), width: 180, align: "center" },//月份
        { prop: "carSeriesName", label:this.$t('org.label.carSerise'), width: 180, align: "center" },//车系
        { prop: "carTypeName", label: this.$t('org.label.carType'), width: 180, align: "center" },//车型
        {
          prop: "carConfigCode",
          label:this.$t('org.label.carConfig'),
          width: 180,
          align: "center"
        },//车型配置编码
        { prop: "carColorName", label: this.$t('org.label.carColor'), width: 180, align: "center" },//车身颜色
        { prop: "carIncolorName", label: this.$t('org.label.carIncolor'), width: 180, align: "center" }//内饰色
      ],
      monthArr: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      heightForTable: "",
      carConfigKey: "a",
      carConfigKey: "a",
      TrimPopKey: "a",
      dlrKey: "a",
      planMonthKey: "a",
      plmEndKey: "c",
      plmBeginKey: "c",
      saveDlrKey: "a",
      carBrandKey2: "v",
      carBrandKey: "a",
      checkList: [],
      checkList2: [],
      formLabelWidth: "120px",
      list: null,
      listLoading: true,
      //设置网格总共的条数，查询完更改
      pageTotal: 0,
      //表单查询数据
      formField: {
        carBrandCode: "",
        dlrId: "",
        planMonth: ""
      },
      saveFormField: {
        carBrandCode: "",
        dlrid: "",
        makePlanMonth: "",
        makePlanMonthBegin: "",
        makePlanMonthEnd: "",
        carTypeName: "",
        carColorName: "",
        carIncolorName: ""
      },
      listQuery: {
        pageIndex: 1,
        pageSize: 10
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      },
      // 网格当前选中行
      currentRow: null
    };
  },
  created() {
    this.startTable();
  },
  mounted() {
    // window.addEventListener('resize',function(){
    //     this.screenHeight = document.body.offsetHeight;
    //     this.startTable();
    // })
    // // 1、数据首次加载完后 → 获取图片（或外层框）宽度，并设置其高度
    // this.$nextTick(() => {
    //   // 获取图片（或外层框）
    //   let table = this.$refs.table;
    //   // 获取其宽度
    //   let wImgbox = table[0].getBoundingClientRect().height;
    //   this.startTable();
    //   // 设置其高度（以宽度的60%为例）
    //   // this.table.height = 0.6 * wImgbox + 'px'
    // });
    // // 2、挂载 reisze 事件 → 屏幕缩放时监听宽度变化
    const that = this;
    window.onresize = () => {
      return (() => {
        // window.screenWidth = document.body.clientWidth
        // that.screenWidth = window.screenWidth
        // console.log(that.screenWidth)
        this.$nextTick(() => {
          // let table = this.$refs.table;
          this.startTable();
        });
      })();
    };

    // 调用AppMain中的方法设置网格高度（自适应）
    //     const that = this
    // window.onresize = () => {
    //     return (() => {
    //         window.screenHeight = document.body.clientHeight
    //         that.screenHeight = window.screenHeight
    //     })()
    // }
    // var parent = this.$utils.getParentView(this.$route.path, this.$parent);
    // if (parent) {
    //   parent.setTableHeight();
    // }
  },
  methods: {
    startTable() {
      this.heightForTable = document.documentElement.clientHeight;
      document.getElementById("qwertasd").style.height = this.heightForTable - 112 + "px";
      document.getElementById("asdfghh").style.height = this.heightForTable - 290 + "px";
    },
    // 查询网格
    queryTable(page) {
      this.startTable();
      const that = this;
      that.currentRow = null;
      that.listLoading = true;
      let queryObj = {
        // api配置
        apiConfig: veApis.veMonthPlanQuery,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "carBrandName",
              "makeMonth",
              "carSeriesName",
              "carTypeName",
              "carConfigCode",
              "carColorName",
              "carIncolorName"
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
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
          that.pageTotal =
            response.data[queryObj.apiConfig.ServiceCode].records;
          that.list = response.data[queryObj.apiConfig.ServiceCode].rows;
          that.listLoading = false;
        }
      });
    },
    //把每一行的索引放进row
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    selectRow(selection, row) {
      this.$refs.multipleTable.clearSelection();
      this.$refs.multipleTable.toggleRowSelection(row);
    },
    // 选中网格行
    handleTableRowChange(val) {
      this.currentRow = val;
    },
    //保存
    save() {
      const that = this;

      // if (that.$utils.isEmpty(that.saveFormField.carBrandCode)) {
      //   that.$message({
      //     message: "请输入品牌编码",
      //     type: "warning",
      //     duration: 2000
      //   });
      //   return;
      // }
      // if (that.$utils.isEmpty(that.saveFormField.orgDlrData)) {
      //   that.$message({
      //     message: "请输入经销商",
      //     type: "warning",
      //     duration: 2000
      //   });
      //   return;
      // }
      // if (that.$utils.isEmpty(that.checkList)) {
      //   that.$message({
      //     message: "请选择月份",
      //     type: "warning",
      //     duration: 2000
      //   });
      //   return;
      // }
      // if (that.$utils.isEmpty(that.saveFormField.carConfigData)) {
      //   that.$message({
      //     message: "请选择车型",
      //     type: "warning",
      //     duration: 2000
      //   });
      //   return;
      // }
      // if (that.$utils.isEmpty(that.saveFormField.carColorName)) {
      //   that.$message({
      //     message: "请选择颜色",
      //     type: "warning",
      //     duration: 2000
      //   });
      //   return;
      // }
      // if (that.$utils.isEmpty(that.saveFormField.carInteriorColorName)) {
      //   that.$message({
      //     message: "请选择内饰色",
      //     type: "warning",
      //     duration: 2000
      //   });
      //   return;
      // }
      that.listLoading = true;
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.verMonthPlanSave,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.saveFormField
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.queryTable(1);
          that.listLoading = false;
          that.dialogFormVisible = false;
          that.resetSave();
          that.$message({
           message:this.$t('sys.tips.esTip5'), 
            type: "success",
            duration: 2000
          });
        }//保存成功
      });
    },
    //重置
    reset() {
      this.formField = {
        carBrandCode: "",
        dlrId: "",
        planMonth: ""
      };
    },
    // 处理自定义组件（isEnable）事件
    getIsEnableCode(val) {
      this.brandObj.isEnable = val;
    },
    // 处理每页显示改变事件
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.queryTable();
    },
    // 当前页记录
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.queryTable();
    },
    changeEdit(row, column, event) {
      console.log("双击");
      console.log(row);
    },
    getSelDlrCode(code, val) {
      this.formField.dlrId = code;
    },
    getPlanMonth(code) {
      this.formField.planMonth = code;
    },
    getSaveDlrCode(code) {
      this.saveFormField.dlrId = code;
    },
    getPlanMonth(val) {
      this.saveFormField.makePlanMonth = this.checkList.toString();
    },
    getpPlmBeginCode(code) {
      this.saveFormField.makePlanMonthBegin = code;
    },
    getPlmEndCode(code) {
      this.saveFormField.makePlanMonthEnd = code;
    },
    getCarConfigCode(code) {
      this.saveFormField.carTypeName = code;
    },
    getCarColorCode(code) {
      this.saveFormField.carColorName = code;
    },
    getCarInColorCode(code) {
      this.saveFormField.carIncolorName = code;
    },
    clearPlan() {
      const that = this;

      if (that.$utils.isEmpty(that.saveFormField.dlrId)) {
        that.$message({
         message:this.$t('ve.label.selDlr'),
          type: "warning",
          duration: 2000
        });//请选择经销商
        return;
      }
      if (that.$utils.isEmpty(that.checkList2)) {
        that.$message({
          message:this.$t('ve.label.selMonth'),
          type: "warning",
          duration: 2000
        });//请选择月份
        return;
      }
      let month = that.checkList2.toString();
      that.listLoading = true;
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.verMonthPlanSave,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            dlrId: that.saveFormField.dlrId,
            makeMonth: month
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.queryTable(1);
          that.listLoading = false;
          that.dialogFormVisible = false;
          that.resetSave();
          that.$message({
            message:this.$t('sys.tips.esTip5'),
            type: "success",
            duration: 2000
          });//"保存成功
        }
      });
    },
    resetSave() {
      this.checkList = [];
      this.checkList2 = [];
      this.saveFormField = {
        carBrandCode: "",
        carConfigData: "",
        carColorName: "",
        carColorCode: "",
        carColorName: "",
        carInteriorColorName: "",
        orgDlrData: ""
      };
    }
  }
};
</script>
<style scoped>
.editBrand {
  height: 240px;
  margin-top: calc(26vh) !important;
}
.orgManageBtn {
  position: relative;
  bottom: -18px;
  left: -13px;
  height: 0;
}
.filter-params /deep/.el-col {
  padding-left: 0px;
  padding-right: 0px;
  margin-bottom: 2px;
}
.el-table /deep/ .el-table__body-wrapper{
  height: calc(100% - 50px);
}
</style>
