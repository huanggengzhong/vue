/**
* description: 整车 > 主机厂基础数据 > 自动出货排序规则 > 自动出货确认时机设置
* author: liyanm
* createdDate: 2019-07-29
*/
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-params carBr" ref="conHeight">
      <!-- 品牌组件 -->
      <el-row>
        <carBrandRadio
          ref="carBrandRadio"
          class="carcar"
          :span="12"
          @changeCode="getBrandCodeRadio"
        />
      </el-row>
    </div>
    <el-container>
      <!-- 左区域 -->
      <el-aside width="248px">
        <div class="filter-container filter-title" ref="week" style="margin-top:0px">
          星期设置
          <div class="filter-bottomline">
            <el-checkbox
              :indeterminate="WeeksGroup.isIndeterminate"
              v-model="WeeksGroup.checkAll"
              @change="handleCheckAllChange"
            >全选</el-checkbox>
          </div>
        </div>

        <el-checkbox-group v-model="WeeksGroup.checkedWeeks" @change="handleCheckedWeeksChanges">
          <el-checkbox
            v-for="weekvalue in weeksOptions"
            :label="weekvalue"
            :key="weekvalue"
          >{{weekvalue}}</el-checkbox>
        </el-checkbox-group>

        <div class="filter-container filter-title makesuretime" ref="time">
          确认时机设置
          <div class="filter-bottomline">
            <el-checkbox
              :indeterminate="TimeGroup.isIndeterminate"
              v-model="TimeGroup.checkAll"
              @change="handleCheckAllChangeTime"
            >全选</el-checkbox>
          </div>
        </div>

        <el-checkbox-group
          v-model="TimeGroup.checkedTime"
          @change="handleCheckedTimeChanges"
          :style="{'height':tableHeight+'px'}"
        >
          <el-checkbox
            v-for="timevalue in timeOptions"
            :label="timevalue"
            :key="timevalue"
          >{{timevalue}}</el-checkbox>
        </el-checkbox-group>
        <div class="filter-container filter-topline">
          <el-button type="primary" size="small" @click="savaSetting">保存</el-button>
        </div>
      </el-aside>
      <!-- 右区域 -->
      <el-main class="chickLable" style="margin-top:0px">
        <div class="app-container app-container-table padRight5">
          <one-table-template
            ref="multipleTable"
            :key="oneTableTem"
            :dynamicButtons="tableButtons"
            :dynamicComponents="tableComponents"
            :dynamicApiConfig="apiConfig"
            :dynamicTableCols="tableCols"
            :dynamicFormFields="formField"
            :dynamicIsShowSelect="true"
            :dynamicIsColumnDrop="true"
            :dynamicTableOtherHeight="60"
          />
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { getListQuery } from "@/api/table";
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/oneTable";
import carBrandRadio from "@/components/org/carBrandRadio/carBrandRadio"; //品牌组件
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { CacheConfig } from "@/cache/configCache/index";
import { log } from "util";
export default {
  name: "vetimingSetting",
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    carBrandRadio,
    OneTableTemplate
  },
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      timslist: null, //确认时机查询
      listLoading: true, //设置网格总共的条数，查询完更改
      pageTotal: 0,
      lastDate: '',
      selWeek:[],
      selTime:[],
      listQuery: {
        pageIndex: 1,
        pageSize: 8,
        limit: 16
      },

      WeeksGroup: {
        checkAll: false, //控制当前是否勾选
        checkedWeeks: [], //选择的数据
        isIndeterminate: false //控制是否全选的样式
      }, //星期选择
      TimeGroup: {
        checkAll: false, //控制当前是否勾选
        checkedTime: [], //选择的数据
        isIndeterminate: false //控制是否全选的样式
      }, //时机选择
      // 网格查询API配置对象
      apiConfig: veApis.veDbCaroutConfigQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTableFirst(),
          text: "查询"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: "车系",
                codeField: "carSeriesId",
                parentFileds: "carBrandCode-carBrandCode",
                span: 8,
                component: () => import("@/components/org/CarCode"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: "采购单类型",
                codeField: "orderTypes",
                parentFileds: "carBrandCode-carBrandCode",
                span: 8,
                component: () => import("@/components/ve/PurchaseOrderType"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey3",
                span: 8,
                labelName: "资金类型",
                codeField: "purcashTypes",
                parentFileds: "carBrandCode-carBrandCode",
                component: () =>
                  import("@/components/ve/PurcashTypeCarBrandCode"),
                type: "dropdownList",
                isMust: true
              } ,//接收值品牌值 实现联动
               {
                compKey: "compKey4",
                labelName: this.$t('org.label.carBrand'),  //品牌名称
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: false
              }
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "orderTypes",
                label: "采购单类型+",
                width: 250,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    isShowLabel: false,
                    codeField: "orderTypes",
                    parentFileds: "carBrandCode-carBrandCode",
                    textField: "orderTypeName",
                    rowField: "carBrandCode",
                    clickEvent: () => null,
                    component: () => import("@/components/ve/PurchaseOrderType")
                  }
                ]
              },
              {
                prop: "purcashTypes",
                label: "采购单资金类型+",
                width: 250,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey2",
                    isShowLabel: false,
                    codeField: "purcashTypes",
                    textField: "purcashTypeName",
                    parentFileds: "carBrandCode-carBrandCode",
                    rowField: "carBrandCode",
                    clickEvent: () => null,
                    component: () =>
                      import("@/components/ve/PurcashTypeCarBrandCode")
                  }
                ]
              },         
              {
                prop: "dlrShortName",
                label: "经销商名称",
                hidden: true
              },
                {
                prop: "dlrId",
                label: "经销商+",
                width: null,
                align: "center",
                width: 250,
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey5",
                    isShowLabel: false,
                    codeField: "dlrId",
                    textField: "dlrShortName",
                    isMul: true,
                    clickEvent: () => null,
                    component: () => import("@/components/org/orgDlr/index"),
                    type: "propus",
                    isMust: false
                  }
                ]
              },
              {
                prop: "carSeriesCn",
                label: "车系",
                width: 200,
                align: "center"
              },
              {
                prop: "carBrandCode",
                label: "品牌编码",
                width: 200,
                align: "center",
                hidden: true
              },
              {
                prop: "smallCarTypeCode",
                label: "车系编码",
                width: 200,
                align: "center",
                hidden:true
              },
              {
                prop: "updateControlId",
                label: "并发控制",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "purcashTypeName",
                label: "资金类型名称",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "orderTypeName",
                label: "采购单类型名称",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "carConfigId",
                label: "车型配置ID",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "carSeriesId",
                label: "车系ID",
                width: null,
                align: "center",
                hidden: true
              },              
              {
                prop: "caroutConfigId",
                label: "主键id",
                width: null,
                align: "center",
                hidden: true
              }
            ],
      //表单查询数据
      formField: {
        carSeriesId: "",
        orderTypes: "",
        purcashTypes: "",
        carBrandCode: this.$store.getters.orgInfo.BRAND_CODE //品牌数据
      },
      formFields: {
        week: "", //运行时机-星期
        runTime: "" //运行时机-时机
      },
      saveCaroutTimeData: [],
      tableMarginHeight: -90, //15
      tableOtherHeight: 0,
      tableHeight: null,
      oneTableTem: ""
    };
  },
  created() {
    // this.queryTime();
  },
  mounted() {
    this.oneTableTem += 1;
    window.addEventListener("resize", () => {
      this.setTimeHeight(true);
    });
    this.$nextTick(() => {
      this.setTimeHeight();
    });
  },
  computed: {
    weeksOptions() {
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ];
      return weeks;
    },
    timeOptions() {
      let timging = [
        "00:00",
        "00:30",
        "01:00",
        "01:30",
        "02:00",
        "02:30",
        "03:00",
        "03:30",
        "04:00",
        "04:30",
        "05:00",
        "05:30",
        "06:00",
        "06:30",
        "07:00",
        "07:30",
        "08:00",
        "08:30",
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
        "23:00",
        "23:30"
      ];
      return timging;
    }
  },
  watch: {},
  methods: {
    setTimeHeight(isResize) {
      this.$nextTick(() => {
        // 调用AppMain中的方法设置网格高度（自适应）
        var appMainHeight = this.$utils.getAppMainHeight(
          this.$route.path,
          this
        );
        if (appMainHeight > 0) {
          var curTableHeight = appMainHeight - 320;
          // 减去查询按钮区域高度
          if (this.$refs.week) {
            curTableHeight -= this.$refs.week.offsetHeight;
          }
          // 减去查询按钮区域高度
          if (this.$refs.conHeight) {
            curTableHeight -= this.$refs.conHeight.offsetHeight;
          }
          // 减去margin-top/bottom值
          if (!this.$utils.isIE() || isResize) {
            this.tableHeight =
              curTableHeight - this.tableMarginHeight - this.tableOtherHeight;
          } else {
            // IE浏览器需要减去额外高度
            this.tableHeight =
              curTableHeight -
              this.tableMarginHeight -
              this.tableOtherHeight -
              30;
          }
        }
      });
    },
    //查询表格
    queryTableFirst() {
      const that = this;
      let msg = "";
      if (this.formField.carBrandCode === "") {
        that.$message({
          message: "请选择品牌信息",
          type: "warning",
          duration: 2000
        });
        return;
      } else this.queryTable(1);
    },
    //查询确认时机
    queryTime(page) {
      const that = this;
      let carBrandCode = that.formField.carBrandCode;
      let queryObj = {
        // api配置
        apiConfig: veApis.veDbCaroutTimeSetQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "carBrandCn",
              "carBrandCode",
              "week",
              "runtime",
              "times",
              "updateControlId",
              "isEnable"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.listQuery.pageSize,
          pageIndex: page || that.listQuery.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            carBrandCode: carBrandCode
          }
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
          that.timslist = response.data[queryObj.apiConfig.ServiceCode].rows;
          that.listLoading = false;
          // that.chickTimesMoth();
          // this.lastDate = "MONDAY";
          that.chickTimesWeek(1, true);
        }
      });
    },

    //星期设置全选
    handleCheckAllChange(val) {
      this.WeeksGroup.checkedWeeks = this.formFields.week = val
        ? this.weeksOptions
        : [];
      this.WeeksGroup.isIndeterminate = false;
      this.formFields.week = this.formFields.week.join(",");
      let weekArray = this.formFields.week.split(",");
      //避免push重复
      selWeek = [];
      for (let i = 0; i < weekArray.length; i++) {
        let showDataDate = "";
        switch (weekArray[i]) {
          case "星期一":
            showDataDate = "MONDAY";
            break;
          case "星期二":
            showDataDate = "TUESDAY";
            break;
          case "星期三":
            showDataDate = "WEDNESDAY";
            break;
          case "星期四":
            showDataDate = "THURSDAY";
            break;
          case "星期五":
            showDataDate = "FRIDAY";
            break;
          case "星期六":
            showDataDate = "SATURDAY";
            break;
          case "星期日":
            showDataDate = "SUNDAY";
            break;
        }
        this.selWeek.push(showDataDate);
      }
      console.log(this.selWeek + "全选的效果");
    },
    handleCheckedWeeksChange(value) {
      console.log(value);
      this.formFields.week = value;
      let checkedCount = value.length;
      this.WeeksGroup.checkAll = checkedCount === this.weeksOptions.length;
      this.WeeksGroup.isIndeterminate =
        checkedCount > 0 && checkedCount < this.weeksOptions.length;
    },
    handleCheckedWeeksChanges(value) {
      this.selWeek = [];
      for (let i of this.WeeksGroup.checkedWeeks) {
        let showDataDate = "";
        switch (i) {
          case "星期一":
            showDataDate = "MONDAY";
            break;
          case "星期二":
            showDataDate = "TUESDAY";
            break;
          case "星期三":
            showDataDate = "WEDNESDAY";
            break;
          case "星期四":
            showDataDate = "THURSDAY";
            break;
          case "星期五":
            showDataDate = "FRIDAY";
            break;
          case "星期六":
            showDataDate = "SATURDAY";
            break;
          case "星期日":
            showDataDate = "SUNDAY";
            break;
        }
        this.selWeek.push(showDataDate);
      }
      console.log(this.selWeek + "单选的效果");
      if (value.length === 0) {
        this.lastDate = "";
        this.chickTimesWeek(0);
      } else {
        let seLength = value.length - 1;
        this.lastDate = value[seLength];
        for (let i in this.weeksOptions) {
          if (this.weeksOptions[i] === this.lastDate) {
            this.chickTimesWeek(i);
            break;
          }
        }
      }
      this.WeeksGroup.checkedWeeks = value;
      let checkedCount = value.length;
      this.WeeksGroup.checkAll = checkedCount === this.weeksOptions.length;
      this.WeeksGroup.isIndeterminate =
        checkedCount > 0 && checkedCount < this.weeksOptions.length;
    },
    //时间设置全选
    handleCheckAllChangeTime(val) {
      this.TimeGroup.checkedTime = this.formFields.runTime = val
        ? this.timeOptions
        : [];
      this.TimeGroup.isIndeterminate = false;
      this.formFields.runTime = this.formFields.runTime.join(",");
      log(this.formFields.runTime);
      let runTimeArray = this.formFields.runTime.split(",");
      this.selTime= [];
      for (let i = 0; i < runTimeArray.length; i++) {
        this.selTime.push(runTimeArray[i]);
      }
      console.log(this.selTime);
    },
    handleCheckedTimeChange(value) {
      this.formFields.runTime = value;
      let checkedCount = value.length;
      this.TimeGroup.checkAll = checkedCount === this.timeOptions.length;
      this.TimeGroup.isIndeterminate =
        checkedCount > 0 && checkedCount < this.timeOptions.length;
    },
    handleCheckedTimeChanges(value) {
      this.selTime= value;

      console.log(value);
      this.formFields.runTime = value;
      let checkedCount = value.length;
      this.TimeGroup.checkAll = checkedCount === this.timeOptions.length;
      this.TimeGroup.isIndeterminate =
        checkedCount > 0 && checkedCount < this.timeOptions.length;
    },
    //获取品牌数据
    getBrandCodeRadio(val) {
      const that = this;
      this.formField.carBrandCode = val;
      this.queryTime();
      // that.queryTable(1);
    },
    //点击品牌联动确认时机
    chickTimesMoth() {
      this.TimeGroup.checkedTime = [];
      this.WeeksGroup.checkedWeeks = [];
      for (let j = 0; j < this.timslist.length; j++) {
        // if (this.timslist[j].carBrandCode == this.formField.carBrandCode) {
        let time = this.timslist[j].runtime;
        if (time != null) {
          let str = "";
          str = time.toString();
          this.TimeGroup.checkedTime.push(str.slice(11, 16));
        }
        this.WeeksGroup.checkedWeeks.push(this.timslist[j].week);
        // break;
        // }
      }
      this.formFields.runTime = this.TimeGroup.checkedTime.join(",");
      this.formFields.week = this.WeeksGroup.checkedWeeks.join(",");
    },
    chickTimesWeek(index, firstQuery) {
      //index:渲染的日期下标；firstQuery是否为首次渲染
      if (index === 0) {
        this.TimeGroup.checkedTime = [];
        this.WeeksGroup.checkedWeeks = [];
        return;
      }
      this.TimeGroup.checkedTime = [];
      this.WeeksGroup.checkedWeeks = [];
      //需要渲染的日期下标
      let checkWeek = index || 1;
      let weeksOptions = this.weeksOptions;
      //需要渲染的日期
      let showDataDate = "";
      switch (weeksOptions[checkWeek]) {
        case "星期一":
          showDataDate = "MONDAY";
          break;
        case "星期二":
          showDataDate = "TUESDAY";
          break;
        case "星期三":
          showDataDate = "WEDNESDAY";
          break;
        case "星期四":
          showDataDate = "THURSDAY";
          break;
        case "星期五":
          showDataDate = "FRIDAY";
          break;
        case "星期六":
          showDataDate = "SATURDAY";
          break;
        case "星期日":
          showDataDate = "SUNDAY";
          break;
      }
      //星期绑定时间
      for (let j = 0; j < this.timslist.length; j++) {
        if (this.timslist[j].week === showDataDate) {
          this.TimeGroup.checkedTime = this.timslist[j].times

          this.TimeGroup.checkedTime = [...new Set(this.timslist[j].times)];
          let time = this.timslist[j].runtime
          if(time != null){
            let str = ""
            str = time.toString()
            this.TimeGroup.checkedTime.push(
              str.slice(11, 16)
            );
          }
          if (firstQuery) {
            this.WeeksGroup.checkedWeeks.push(weeksOptions[checkWeek]);
            this.selTime = [];
            this.selTime = [...new Set(this.timslist[j].times)];
            
            this.selWeek.push("MONDAY")
            if(this.WeeksGroup.checkedWeeks.length == 7){

            }
            if(this.WeeksGroup.checkedWeeks.length == 7){
              
            }
          }

        }
      }
     
        
    },
    //得到星期对应日期
    getWeekDay(weekday) {
      switch (weekday) {
        case "MONDAY":
          return "2014-10-13";
        case "TUESDAY":
          return "2014-10-14";
        case "WEDNESDAY":
          return "2014-10-15";
        case "THURSDAY":
          return "2014-10-16";
        case "FRIDAY":
          return "2014-10-17";
        case "SATURDAY":
          return "2014-10-18";
        case "SUNDAY":
          return "2014-10-19";
      }
    },
    filterSaveTime() {
      //TimeGroup.checkedTime  勾选的时间（带逗号）
      this.saveCaroutTimeData = [];
      let timslist = this.timslist;
      for (let i in timslist) {
        for (let j in this.selWeek) {
          if (timslist[i].week === this.selWeek[j]) {
            let obj = {};
            obj.carBrandCode = this.formField.carBrandCode;
            obj.week = timslist[i].week;
            //得到运行时间的日期   运行时机runtime到后台会被截掉时间 只要日期且日期在同时只能出现一次
            let runtimeDay = this.getWeekDay(obj.week);
            obj.runtime = runtimeDay + " " + "00:00:00"; //
            obj.updateControlId = timslist[i].updateControlId;
            obj.isEnable = timslist[i].isEnable;
            // obj.times = selTime
            obj.times = this.selTime; //当前勾选时间
            
            this.saveCaroutTimeData.push(obj);
          }
        }
      }

    },
    //时间保存
    savaSetting() {
      const that = this;
      let msg = "";
      if (this.formField.carBrandCode === "") {
        that.$message({
          message: "请选择品牌信息",
          type: "warning",
          duration: 2000
        });
        return;
      }
      let saveState = true;
      this.filterSaveTime();
      this.listLoading = true;
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veDbCaroutTimeSetMutationSave,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: this.saveCaroutTimeData
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.queryTable(1);
          that.listLoading = false;

          that.$message({
            message: "保存成功",
            type: "success",
            duration: 2000
          });
          this.queryTime();
        } else {
          saveState = false;
          msg = response.data[queryObj.apiConfig.ServiceCode].msg;
          that.$message({
            message: msg,
            type: "warning",
            duration: 2000
          });
        }
      });
    },
    //保存 采购单信息
    save() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择需要保存的采购单信息",
          type: "warning",
          duration: 2000
        });
        return;
      }
      let dataArray = []
      for (var k of selectData) {
        let obj = {};
        obj.carBrandCode = this.formField.carBrandCode;
        obj.orderTypes = k.orderTypes;
        obj.dlrId = k.dlrId;
        obj.carConfigId = "1";
        obj.carSeriesId = k.carSeriesId;
        obj.purcashTypes = k.purcashTypes;
        obj.caroutConfigId = k.caroutConfigId;
        obj.updateControlId = k.updateControlId;
        console.log(selectData);
        dataArray.push(obj)
         }
        let queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.veDbCaroutConfigMutationSave,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: dataArray
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
            saveCount++;
          } else {
            saveState = false;
            msg = response.data[queryObj.apiConfig.ServiceCode].msg;
            that.$message({
              message: msg,
              type: "warning",
              duration: 2000
            });
          }
          if (saveCount == selectData.length) {
            that.$message({
              message: "保存成功",
              type: "success",
              duration: 2000
            });
            that.queryTable(1);
          }
        });
     
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .el-checkbox:last-child {
  margin-right: 10px;
}
/deep/ .filter-bottomline {
  padding: 5px;
  text-align: right;
  position: relative;
  top: -31px;
}
/deep/ main.el-main.chickLable {
  padding-left: 0px;
}
/deep/ .el-checkbox-group {
  background-color: #fff;
  padding: 9px;
  // max-height: 300px;
  overflow-y: auto;
}
.padRight5 {
  padding-right: 0;
}
/deep/ .el-checkbox-group .el-checkbox {
  margin-right: 10px;
}
/deep/ .timeHight {
  overflow-y: scroll;
}
/deep/ .filter-topline {
  border-top: 1px solid #e8e8e8;
  padding: 5px;
  text-align: right;
}
/deep/ .filter-bottomline.el-checkbox:last-child {
  margin-top: 10px;
}
/deep/ .el-checkbox-group {
  text-align: left;
}
/deep/ .el-main {
  padding: 0 0 0 5px;
}
/deep/ .chickLable .el-checkbox:last-child {
  margin-right: 0;
}
/deep/ .carBr {
  margin-top: 44px;
}
/deep/ .filter-button {
  margin-top: 6px;
  position: relative;
  top: 99px;
}
/deep/ .el-main {
  overflow: hidden;
}
/deep/.chickLable .app-container-table {
  position: relative;
  top: -9px;
}
/deep/.chickLable {
  margin-top: 5px;
}

/deep/ .carBr .brands[data-v-08b64ff6] {
  width: 88%;
  float: left;
}
/deep/ .csslableName {
  width: 10%;
}
/deep/ .filter-params .el-col label.lableClass {
  float: left;
  width: 7%;
  line-height: 28px;
}
/deep/ .brd[data-v-08b64ff6] {
  width: 100%;
}
/deep/ .brands label {
  width: 18%;
}
/deep/ button.el-button.el-button--small {
  height: 28px;
  line-height: 28px;
}
/deep/ .makesuretime {
  margin-top: 10px;
}
/deep/ .el-table__empty-text {
  width: 55px;
}
</style>
