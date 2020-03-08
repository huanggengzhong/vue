<!--
* description: 批次分配车系设置
* author:yxyan
* createdDate: 2019-07-31
-->
<template>
  <div class="app-container app-container-table" ref="batchTime">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="synchro()">{{$t('sys.button.sync')}}</el-button><!-- 同步 -->

      <el-button size="small" @click="save()">{{$t('sys.button.save')}}</el-button><!-- 保存 -->
      
      <el-button size="small" @click="query()">{{$t('sys.button.reset')}}</el-button><!-- 重置 -->
      <el-button size="small" @click="clear()">{{$t('sys.button.allClear')}}</el-button><!-- 全部清除 -->
    </div>

    <div class="filter-container filter-title">{{$t('sys.content.searchTitle')}}</div><!-- 查询区-->
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <carBrandRadio :span="12" :isMul="isMul" :code="code" @changeCode="getBrandCodeRadio" />
      </el-row>
    </div>

    <div class="filter-container filter-title">{{$t('sys.content.gridTitle')}}</div><!-- 设置区-->
    <div class="filter-container">
      <div class="top">
        <div class="tit1">{{$t('ve.label.week')}}</div><!-- 星期-->
        <div class="tit2">{{$t('ve.label.runningTime')}}</div><!-- 运行时机-->
        <div class="tit3">
          <el-checkbox
            :indeterminate="WeeksGroup.isIndeterminate"
            v-model="WeeksGroup.checkAll"
            @change="handleCheckAllChange"
          >{{$t('ve.label.allCheck')}}</el-checkbox><!-- 全选-->
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <div v-for="(week,index) in weeks" :key="index" class="weekName">{{week}}</div>
        </div>
        <div class="center">
          <div class="weekTime">
            <!-- <div v-for="time in localTimes">{{time}}</div> -->
            <el-checkbox-group @change="weekCheck" v-model="checkedTime0" :label="ckdTime0">
              <el-checkbox
                v-for="(time,index) in localTimes"
                :key="index"
                :value="time"
                :label="time"
              >{{time}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="weekTime">
            <!-- <div v-for="time in localTimes">{{time}}</div> -->
            <el-checkbox-group @change="weekCheck" v-model="checkedTime1" :label="ckdTime1">
              <el-checkbox
                v-for="(time,index) in localTimes"
                :key="index"
                :value="time"
                :label="time"
              >{{time}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="weekTime">
            <!-- <div v-for="time in localTimes">{{time}}</div> -->
            <el-checkbox-group @change="weekCheck" v-model="checkedTime2" :label="ckdTime2">
              <el-checkbox
                v-for="(time,index) in localTimes"
                :key="index"
                :value="time"
                :label="time"
              >{{time}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="weekTime">
            <!-- <div v-for="time in localTimes">{{time}}</div> -->
            <el-checkbox-group @change="weekCheck" v-model="checkedTime3" :label="ckdTime3">
              <el-checkbox
                v-for="(time,index) in localTimes"
                :key="index"
                :value="time"
                :label="time"
              >{{time}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="weekTime">
            <!-- <div v-for="time in localTimes">{{time}}</div> -->
            <el-checkbox-group @change="weekCheck" v-model="checkedTime4" :label="ckdTime4">
              <el-checkbox
                v-for="(time,index) in localTimes"
                :key="index"
                :value="time"
                :label="time"
              >{{time}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="weekTime">
            <!-- <div v-for="time in localTimes">{{time}}</div> -->
            <el-checkbox-group @change="weekCheck" v-model="checkedTime5" :label="ckdTime5">
              <el-checkbox
                v-for="(time,index) in localTimes"
                :key="index"
                :value="time"
                :label="time"
              >{{time}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="weekTime">
            <!-- <div v-for="time in localTimes">{{time}}</div> -->
            <el-checkbox-group @change="weekCheck" v-model="checkedTime6" :label="ckdTime6">
              <el-checkbox
                v-for="(time,index) in localTimes"
                :key="index"
                :value="time"
                :label="time"
              >{{time}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>

        <div class="right">
          <el-checkbox-group v-model="WeeksGroup.checkedWeeks" @change="handleCheckedWeeksChange">
            <el-checkbox
              class="weekSel"
              v-for="(weekvalue,index) in weeksOptions"
              :label="weekvalue"
              :key="index"
            ></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getList } from "@/api/table";
import carBrandRadio from "@/components/org/carBrandRadio/carBrandRadio";
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "dlrStockRuntimeSet",
  components: {
    carBrandRadio
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
      formField: {
        runTimeDay: [] //运行时机-星期
      }, //查询数据
      isMul: false, //品牌单选
      code: "1", //默认选中
      isIndeterminate: true,
      checkAll: false,
      checkedWeek: [],
      ckdWeek: [],
      listQuery: {
        carBrandCode: 1
      },
      queryDatas: [],
      checkedTime0: [],
      checkedTime1: [],
      checkedTime2: [],
      checkedTime3: [],
      checkedTime4: [],
      checkedTime5: [],
      checkedTime6: [],
      ckdTime0: [],
      ckdTime1: [],
      ckdTime2: [],
      ckdTime3: [],
      ckdTime4: [],
      ckdTime5: [],
      ckdTime6: [],
      weeks: [
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
        "星期日"
      ],
      weeks1: ["5:10", "5:31", "6:00", "6:30", "7:00", "7:30", "8:00"],
      localTimes: [
        "5:00",
        "5:30",
        "6:00",
        "6:30",
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
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
      ],
      WeeksGroup: {
        checkAll: false, //控制当前是否勾选
        checkedWeeks: [], //选择的数据
        isIndeterminate: false //控制是否全选的样式
      } //星期选择
    };
  },
  created() {
    this.query();
    this.setHeight();

    // this.checkedWeek.$set('','',[])
  },
  computed: {
    weeksOptions() {
      let weeks1 = ["0", "1", "2", "3", "4", "5", "6"];
      return weeks1;
    }
  },
  methods: {
    getBrandCodeRadio(val) {
      this.listQuery.carBrandCode = val;
      this.query();
    },
    query() {
      this.setHeight();
      this.listLoading = true;
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: veApis.dlrStockRuntimeSetQuery,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["carBrandCn", "week", "times", "runtime", "isEnable"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // pageSize: that.listQuery.pageSize,
          // pageIndex: page || that.listQuery.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.queryDatas = response.data[queryObj.apiConfig.ServiceCode].rows;
          // for( var i=0;i<7;i++){
          //    var datas= response.data[queryObj.apiConfig.ServiceCode].rows;
          //    var ckdTime='checkedTime'+i
          //       that[ckdTime]  =  datas[i].runTime
          // }
          that.checkedTime0 =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].times;
          that.checkedTime1 =
            response.data[queryObj.apiConfig.ServiceCode].rows[1].times;
          that.checkedTime2 =
            response.data[queryObj.apiConfig.ServiceCode].rows[2].times;
          that.checkedTime3 =
            response.data[queryObj.apiConfig.ServiceCode].rows[3].times;

          that.checkedTime4 =
            response.data[queryObj.apiConfig.ServiceCode].rows[4].times;
          that.checkedTime5 =
            response.data[queryObj.apiConfig.ServiceCode].rows[5].times;
          that.checkedTime6 =
            response.data[queryObj.apiConfig.ServiceCode].rows[6].times;
          that.listLoading = false;
        }
      });
      // getList(this.listQuery).then(response => {
      //   this.list = response.data.items;
      //   this.listLoading = false;
      // });
    },
    //全部清除
    clear() {
      (this.checkedTime0 = []),
        (this.checkedTime1 = []),
        (this.checkedTime2 = []),
        (this.checkedTime3 = []),
        (this.checkedTime4 = []),
        (this.checkedTime5 = []),
        (this.checkedTime6 = []),
        (this.WeeksGroup.checkedWeeks = []);
    },
    //保存
    save() {
      const that = this;
      var selW = this.WeeksGroup.checkedWeeks;
      var timData = [
        this.checkedTime0,
        this.checkedTime1,
        this.checkedTime2,
        this.checkedTime3,
        this.checkedTime4,
        this.checkedTime5,
        this.checkedTime6
      ];
      var newTimData = [];
      for (var i in selW) {
        newTimData.push(timData[Number(i)]);
      }
      console.log(selW)
      for (var i in selW) {
        var dataInfo = {
          carBrandCode: this.listQuery.carBrandCode,
          isEnable: that.queryDatas[Number(selW[i])].isEnable,
          runtime: that.queryDatas[Number(selW[i])].runtime,
          times: timData[Number(selW[i])]
          //  batchAssignTimeId:this.queryData.batchAssignTimeId
        };

        let queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.dlrStockRuntimeSetSave,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: dataInfo
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response => {
          if (
            response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
            response.data[queryObj.apiConfig.ServiceCode].rows != ""
          ) {
            this.orgManageVisible = false;
            this.$message({
              message: "保存成功",
              type: "success",
              duration: 1000
            });
            that.queryTable(1);
          }
        });
      }
    },
    //同步
    synchro() {
      if (this.WeeksGroup.checkedWeeks.length < 2) {
        this.$message({
          message: "请至少选择两条数据",
          type: "warning",
          duration: 1000
        });
      }

      var selW = this.WeeksGroup.checkedWeeks;
      selW.sort();
      var firSel = "checkedTime" + selW[0];
      for (var i = 1; i <= selW.length - 1; i++) {
        var otrSel = "checkedTime" + selW[i];

        this.otrSel = [];
        this[otrSel] = [].concat(this[firSel]);
      }
    },
    weekCheck() {},
    //高度自适应
    setHeight() {
      // let height= this.$refs.batchTime.height();
    },
    //星期设置全选
    handleCheckAllChange(val) {
      this.WeeksGroup.checkedWeeks = this.formField.runTimeDay = val
        ? this.weeksOptions
        : [];
      this.WeeksGroup.isIndeterminate = false;
    },
    handleCheckedWeeksChange(value) {
      this.formField.runTimeDay = value;
      let checkedCount = value.length;
      this.WeeksGroup.checkAll = checkedCount === this.weeksOptions.length;
      this.WeeksGroup.isIndeterminate =
        checkedCount > 0 && checkedCount < this.weeksOptions.length;
    }
  }
};
</script>
<style scoped>
.left,
.right {
  width: 10%;
  float: left;
}
.weekName,
.weekSel {
  text-align: center;
  line-height: 70px;
  margin: 0;
  width: 101%;
}
.center {
  width: 80%;
  float: left;
}

.weekTime {
  padding: 7px 33px;
}
.tit1,
.tit2,
.tit3 {
  height: 30px;
  text-align: center;
  line-height: 30px;
  float: left;
  border-bottom: 1px solid #ccc;
}
.tit1,
.tit3 {
  width: 10%;
}
.tit2 {
  width: 80%;
}

.weekSel,
.weekTime,
.weekName {
  height: 70px;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.right {
  border-right: 1px solid #ccc;
}
.weekTime label {
  width: 54px;
  margin-right: 10px;
}
.top {
  height: 30px;
}
.bottom {
  height: 375px;
  overflow-y: scroll;
}
.weekTime label span:nth-child(1) {
  padding-left: 4px !important;
}
.right /deep/ .el-checkbox__label {
  display: none;
}
.weekTime /deep/ .el-checkbox__label{
padding-left: 5px
}
</style>
