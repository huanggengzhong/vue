<template>
  <div>
  <el-dialog :visible.sync="savemodelVisible" width="85%" @close="close">
  <div class="app-container app-container-table" style="height:500px">
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="6">
          <span class="demonstration">预约进店日期:</span>
          <el-date-picker
            v-model="dataInfo.preComeBeginDate"
            type="date"
            :picker-options="pickerOptions"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
            @change="getriqi"
          ></el-date-picker>
        </el-col>
        <el-col :span="6">
          <span class="demonstration">至:</span>
          <el-date-picker
            v-model="dataInfo.preComeEndDate"
            type="date"
            :picker-options="pickerOptions1"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
            @change="getriqi1"
          ></el-date-picker>
        </el-col>

        <el-col :span="6">
          <span class="demonstration">预约单号:</span>
          <el-input v-model="dataInfo.reserveOrderCode" placeholder size="small" />
        </el-col>
        <el-col :span="6">
          <el-button icon="el-icon-plus" @click="loadmore">更多</el-button>
        </el-col>
      </el-row>

      <el-row :gutter="26" v-show="!pic">
        <LookupValue
          :span="6"
          :isMul="isMul"
          :isShowLabel="isshow"
          :code="dataInfo.carBrandCode"
          :looluptype="cheliangpinpai1"
          :labelName="cheliangpinpai"
          @changeCode="getcheliangpinpai"
        />

        <el-col :span="6">
          <span class="demonstration">车牌号:</span>
          <el-input v-model="dataInfo.carLicense" placeholder size="small" />
        </el-col>

        <LookupValue
          :span="6"
          :isMul="isMul"
          :isShowLabel="isshow"
          :code="dataInfo.saName"
          :looluptype="fuwudaibiao1"
          :labelName="fuwudaibiao"
          @changeCode="getfuwudaibiao"
        />

        <LookupValue
          :span="6"
          :isMul="isMul"
          :isShowLabel="isshow"
          :code="dataInfo.reserveSource"
          :looluptype="yuyuelaiyuan1"
          :labelName="yuyuelaiyuan"
          @changeCode="getyuyuelaiyuan"
        />
      </el-row>

      <el-row :gutter="26" v-show="!pic">
        <el-col :span="6">
          <span class="demonstration">客户姓名:</span>
          <el-input v-model="dataInfo.reserveMan" placeholder size="small" />
        </el-col>
        <el-col :span="6">
          <span class="demonstration">VIN码:</span>
          <el-input v-model="dataInfo.vin" placeholder size="small" />
        </el-col>

        <LookupValue
          :span="6"
          :isMul="isMul"
          :isShowLabel="isshow"
          :code="dataInfo.reserveType"
          :looluptype="yuyueleixing1"
          :labelName="yuyueleixing"
          @changeCode="getyuyueleixing"
        />
      </el-row>
      <div class="filter-container filter-button">
        <el-button type="primary" size="small" @click="findAll2()">查询</el-button>

        <el-button type="primary" size="small" @click="insertData()">新增</el-button>
        <el-button type="primary" size="small" @click="eduitData()">修改</el-button>
        <el-button type="primary" size="small" @click="deleteData()">作废</el-button>
        <el-button type="primary" size="small" @click="getDatas()">查看</el-button>
        <el-button type="primary" size="small" @click="resettingData()">重置</el-button>
      </div>
    </div>
    <div class="filter-container filter-title"></div>
    <div style="height:270px;overflow:auto">
      <el-table
        v-loading="listLoading1"
        :data="kanban"
        element-loading-text="Loading"
        border
        fit
        stripe
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
        @row-click="getDate"
      >
        <el-table-column align="center" label="序号" width="60">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column label="预约单号">
          <template slot-scope="scope">{{ scope.row.reserveOrderCode }}</template>
        </el-table-column>
        <el-table-column label="车辆品牌">
          <template slot-scope="scope">{{ scope.row.carBrandCode }}</template>
        </el-table-column>
        <el-table-column label="车牌号">
          <template slot-scope="scope">{{ scope.row.carLicense }}</template>
        </el-table-column>
        <el-table-column label="预约人">
          <template slot-scope="scope">{{ scope.row.reserveMan }}</template>
        </el-table-column>
        <el-table-column label="联系电话">
          <template slot-scope="scope">{{ scope.row.reserveTel }}</template>
        </el-table-column>
        <el-table-column label="预约进店时间">
          <template slot-scope="scope">{{ scope.row.preComeDate }}</template>
        </el-table-column>
        <el-table-column label="预约类型">
          <template slot-scope="scope">{{ scope.row.reserveType }}</template>
        </el-table-column>
        <el-table-column label="预约状态">
          <template slot-scope="scope">{{ scope.row.reserveState }}</template>
        </el-table-column>
        <el-table-column label="服务代表">
          <template slot-scope="scope">{{ scope.row.saName }}</template>
        </el-table-column>
        <el-table-column label="创建预约时间">
          <template slot-scope="scope">{{ scope.row.createdDate }}</template>
        </el-table-column>
        <el-table-column label="预约来源">
          <template slot-scope="scope">{{ scope.row.reserveSource }}</template>
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
          :total="kanban?kanban.length:0"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-main>
    </el-container>
  </div>
  </el-dialog>
  </div>
</template>
<script>
import LookupValue from "@/components/org/LookupValue/index";
import { seApis } from "@/api/graphQLApiList/se";
import { requestGraphQL } from "@/api/commonRequest";
import { SeReserveOrderQuery } from "@/api/se/repair/appointment/seReserveOrderQueryTrack";

export default {
  components: {
    LookupValue
  },
  props: {
    span: {
      type: Number,
      default: function() {
        return 6;
      }
    },
    savemodelVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  name: "testTbale",
  data() {
    return {
          
    RecallProjectVisible:false,
        cellrow:"",
      listLoading1: true,
      activeName: "first",
      pic: true,
      isMul: false,
      isshow: true,
      code: "1",
      fuwudaibiao: "服务代表",
      fuwudaibiao1: "se0000",
      yuyuelaiyuan: "预约来源",
      yuyuelaiyuan1: "SE0171",
      yuyueleixing: "预约类型",
      yuyueleixing1: "SE0046",
      cheliangpinpai: "车辆品牌",
      cheliangpinpai1: "se0001",
      pickerOptions1: "",
      pickerOptions: {
        // disabledDate(time) {
        //   return time.getTime() < Date.now();
        // }
        disabledDate: time => {
          let endDateVal = this.dataInfo.preComeBeginDate;
          if (endDateVal) {
            return time.getTime() > new Date(endDateVal).getTime();
          }
        }
      },
      //日期
      days: "",
      //预约数据
      kanban: "",
      //预约来店日期
      date1: "",
      dataInfo: {
        oemCode: "",
        groupCode: "",
        preComeBeginDate: "",
        preComeEndDate: "",
        dlrId: "",
        reserveOrderCode: "",
        carBrandCode: "",
        carLicense: "",
        vin: "",
        saName: "",
        reserveSource: "",
        reserveMan: "",
        reserveType: "",
        reserveSourceName: "",
        carBrandCn: ""
      },

      listQuery: {
        dataInfo: {
          oemCode: "",
          groupCode: "",
          dlrId: "",
          preComeBeginDate: "",
          preComeEndDate: ""
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
    this.listLoading1 = true;
    this.findAll2();
  },
  methods: {
      resetList(){
        this.cellrow = '';
    },
        sentCode(){
        this.savemodelVisible = false
        this.$emit("savemodel",this.cellrow)
    },
      //查看数据
     getDatas(){
         if(this.cellrow==''){
            this.$alert('您未选中数据！', '信息提示', {
                confirmButtonText: '确定',
                type: 'warning',
                callback: action => {
                }
            });
             
         }else
             this.sentCode();
          
      },
      deleteData(){

      },
    eduitData() {

    },
    getDate(rows) {
     this.cellrow = rows;
    },
    getriqi() {
      var riqi = new Date(this.dataInfo.preComeBeginDate);
      console.log(riqi);
      this.pickerOptions1 = {
        disabledDate(time) {
          return time.getTime() <= riqi;
        }
      };
    },
    getriqi1() {
      var riqi = new Date(this.dataInfo.preComeEndDate);
      this.pickerOptions = {
        disabledDate(time) {
          return time.getTime() >= riqi;
        }
      };
    },
    //是否显示更多
    loadmore() {
      if (this.pic) {
        this.pic = false;
      } else {
        this.pic = true;
      }
    },
    //获取下拉列表值
    getfuwudaibiao(val) {
      this.dataInfo.saName = val;
    },
    getyuyuelaiyuan(val) {
      this.dataInfo.reserveSource = val;
    },
    getyuyueleixing(val) {
      this.dataInfo.reserveType = val;
    },
    getcheliangpinpai(val) {
      this.dataInfo.carBrandCode = val;
    },
    //查询表二的数据
    findAll2() {
      this.listLoading1 = true;
      SeReserveOrderQuery(
        this.listQuery.pageSize,
        this.listQuery.pageIndex,
        this.dataInfo
      ).then(response => {
        if (
          response.data[seApis.SeReserveOrderQuery.ServiceCode].result ===
            "1" &&
          response.data[seApis.SeReserveOrderQuery.ServiceCode].rows != ""
        ) {
          this.listQuery.pageTotal =
            response.data[seApis.SeReserveOrderQuery.ServiceCode].records;
          this.kanban =
            response.data[seApis.SeReserveOrderQuery.ServiceCode].rows;
        }
      });
      console.log(123);
      this.listLoading1 = false;
    },
    //重置查询条件
    resettingData() {
      (this.pickerOptions1 = {
        disabledDate(time) {
          return time.getTime() < 0;
        }
      }),
        (this.pickerOptions = {
          disabledDate(time) {
            return time.getTime() < 0;
          }
        }),
        (this.listLoading1 = true);
      (this.dataInfo.oemCode = ""),
        (this.dataInfo.groupCode = ""),
        (this.dataInfo.preComeBeginDate = ""),
        (this.dataInfo.preComeEndDate = ""),
        (this.dataInfo.dlrId = ""),
        (this.dataInfo.reserveOrderCode = ""),
        (this.dataInfo.carBrandCode = ""),
        (this.dataInfo.carLicense = ""),
        (this.dataInfo.vin = ""),
        (this.dataInfo.saName = ""),
        (this.dataInfo.reserveSource = ""),
        (this.dataInfo.reserveMan = ""),
        (this.dataInfo.reserveType = ""),
        (this.dataInfo.reserveSourceName = ""),
        (this.dataInfo.carBrandCn = "");

      this.listLoading1 = false;
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
<style scoped>
#tab-first {
  position: relative;
  left: 890px;
  top: -11px;
}

#tab-second {
  position: absolute;
  left: 1000px;
  top: -11px;
}
</style>
