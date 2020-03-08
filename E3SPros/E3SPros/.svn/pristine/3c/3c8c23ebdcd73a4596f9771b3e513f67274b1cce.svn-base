<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="queryFindAll('1')">查询</el-button>
      <el-button size="small" @click="printf()">打印</el-button>
      <el-button size="small"  @click="getExcel()">导出</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title" ref="conTitleHeight">查询条件</div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <el-col :span="span">
          <span class="demonstration">送修时间</span>
          <el-date-picker
            v-model="listQuery.RepairDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            @change="getRepairDate"
          ></el-date-picker>
        </el-col>

        <el-col :span="6">
          <label>车牌号</label>
          <el-input size="small" v-model="listQuery.dataInfo.carLicense" placeholder="请输入内容" />
        </el-col>

        <el-col :span="6">
          <label>施工单号</label>
          <el-input size="small" v-model="listQuery.dataInfo.repairOrderCode" placeholder="请输入内容" />
        </el-col>

        <el-col :span="6">
          <el-button icon="el-icon-plus" @click="loadmore">更多</el-button>
        </el-col>
      </el-row>

      <el-row :gutter="26" v-show="!pic">
        <el-col :span="6">
          <label>备件编号</label>
          <el-input size="small" v-model="listQuery.dataInfo.partNo" placeholder="请输入内容" />
        </el-col>
        <el-col :span="6">
          <label>备件名称</label>
          <el-input size="small" v-model="listQuery.dataInfo.partName" placeholder="请输入内容" />
        </el-col>
        <el-col :span="6">
          <label>出库类型</label>
          <el-select v-model="listQuery.dataInfo.outFlag" size="small" placeholder="请选择">
            <el-option
              v-for="item in outStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <label>出库单号</label>
          <el-input size="small" v-model="listQuery.dataInfo.outStockCode" placeholder="请输入内容" />
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-container>
      <el-aside width="200px">
        <el-tree
          :data="treeData"
          :props="defaultProps"
          :default-expanded-keys="treeExpandKeys"
          node-key="id"
          @node-click="handleTreeNodeClick"
        ></el-tree>
      </el-aside>
      <el-main>
        <el-table
          v-loading="listLoading"
          ref="multipleTable"
          :data="list"
          element-loading-text="Loading"
          border
          fit
          stripe
          :header-cell-style="tableHeaderRowClassName"
          highlight-current-row
          :height="tableHeight"
          @row-click="rowClick"
        >
          <el-table-column align="center" label="序号" width="60">
            <template slot-scope="scope">{{ scope.$index + 1 }}</template>
          </el-table-column>
          <!-- <el-table-column type="selection" width="55" label="选择+" /> -->
          <el-table-column label="施工单号" v-if="true" width="150">
            <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template>
          </el-table-column>
          <el-table-column label="出库标志" v-if="true" width="100">
            <template slot-scope="scope">{{ scope.row.outFlag }}</template>
          </el-table-column>
          <el-table-column label="车牌号" v-if="true" width="150">
            <template slot-scope="scope">{{ scope.row.carLicense }}</template>
          </el-table-column>
          <el-table-column label="备件编号" v-if="true" width="150">
            <template slot-scope="scope">{{ scope.row.partNo }}</template>
          </el-table-column>
          <el-table-column label="备件名称" v-if="true" width="150">
            <template slot-scope="scope">{{ scope.row.partName }}</template>
          </el-table-column>
          <el-table-column label="需求数量" v-if="true">
            <template slot-scope="scope">{{ scope.row.partQty }}</template>
          </el-table-column>
          <el-table-column label="出库数量" v-if="true">
            <template slot-scope="scope">{{ scope.row.outQty }}</template>
          </el-table-column>
          <el-table-column label="退库数量" v-if="true">
            <template slot-scope="scope">{{ scope.row.returnQty }}</template>
          </el-table-column>
          <el-table-column label="领料人" v-if="true">
            <template slot-scope="scope">{{ scope.row.pickPerson }}</template>
          </el-table-column>
          <el-table-column label="送修日期" v-if="true" width="150">
            <template slot-scope="scope">{{ scope.row.repairTime }}</template>
          </el-table-column>
          <el-table-column label="维修类型" v-if="true">
            <template slot-scope="scope">{{ scope.row.repairTypeName }}</template>
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
          :total="list?list.length:0"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-main>
    </el-container>
    <el-dialog :visible.sync="printfDialogVisible" :fullscreen="full" width="80%">
      <div style="height:465px;overflow-y:auto">
      <div ref="print">
        <el-row :gutter="26">
          <el-col :span="24" align="center">
            <label style="font-size:20px">维修领料单</label>
          </el-col>
          <el-col :span="10">
            <label style="font-size:10px">广州风日</label>
          </el-col>
          <el-col :span="12" align="right">
            <label>制单日期：</label>
            <label>{{this.nowDate}}</label>
          </el-col>
        </el-row>
        <br />
        <el-row  class="textCenter">
          <el-col :span="2" aglin="center" class="border1 height line-height">序号</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">施工单号</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">出库标志</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">车牌号</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">备件编号</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">备件名称</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">需求数量</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">出库数量</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">退库数量</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">领料人</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">送修日期</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">维修类型</el-col>
        </el-row>
        <el-row  class="textCenter" v-for="(item, index) in list" :key="index">
          <el-col :span="2" aglin="center" class="border1 height line-height">{{index + 1 }}</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">{{item.repairOrderCode}}</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">{{item.outFlag}}</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">{{item.carLicense}}</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">{{item.partNo}}</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">{{item.partName}}</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">{{item.partQty}}</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">{{item.outQty}}</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">{{item.returnQty}}</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">{{item.pickPerson}}</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">{{item.repairTime}}</el-col>
          <el-col :span="2" aglin="center" class="border1 height line-height">{{item.repairTypeName}}</el-col>
        </el-row>
      </div>
      </div>
      <div style="height:40px;float:right;padding-top:20px" >
        <el-button @click="toPrint"   icon="el-icon-check">打印</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { apiSeProcess } from "@/api/graphQLApiList/se";
import { doQueryFindAll } from "@/api/se/basedata/repair/seMaterialList";
import { the_Height} from "@/components/se/seMixins/makeHeight";

export default {
  mixins: [the_Height],
  components: {},
  props: {
    span: {
      type: Number,
      default: function() {
        return 6;
      }
    }
  },
  data() {
    return {
      full:true,
      nowDate: "",
      printfDialogVisible: false,
      curTableRow: {},
      listLoading: false,
      pic: true,
      code: "1",
      isMul: false, //下拉框是否多选
      list: null,
      listQuery: {
        RepairDate:"",
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        isMul: false, //下拉框是否多选
        dataInfo: {
          oemcode: "",
          groupcode: "",
          dlrId: "",
          saEmpId: "",
          carLicense: "",
          repairOrderCode: "",
          partNo: "",
          outFlag: "0",
          repairTimeBeg: "",
          repairTimeEnd: "",
          partName: "",
          outStockCode:""
        }
      },
      outStatus: [
        {
          value: "0",
          label: "全部"
        },
        {
          value: "1",
          label: "已出库"
        },
        {
          value: "2",
          label: "未出库"
        }
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      treeData: [
        {
          id: "0",
          label: "施工单",
          deep: 0,
          children: []
        }
      ],
      treeExpandKeys: ["0"],
      defaultProps: {},
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    this.queryFindAll("1");
    this.getDate();
  },
  methods: {
    printf() {
      this.printfDialogVisible = true;
      
    },
    toPrint(){
      this.$print(this.$refs.print);
      this.printfDialogVisible = false;
    },

    loadmore() {
      if (this.pic) {
        this.pic = false;
      } else {
        this.pic = true;
      }
    },
    rowClick(row, column, event) {
      this.curTableRow = row;
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.queryFindAll();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.queryFindAll();
    },
    handleTreeNodeClick(data) {
      if (data.deep == 0) {
        this.queryFindAll("1");
      } else if (data.deep == 1) {
        this.queryFindDetail(data.label);
      } else if (data.deep == 2) {
        this.queryFindDetail(data.value);
      }
    },
    queryFindAll(page,dataType) {
      //主查询方法
      this.listLoading = true;
      const that = this;
      that.curTableRow = {};

      var pageSize = dataType == 'excel' ? 99999 : this.pageSize
      var tableColumns = this.$refs.multipleTable == null?null:this.$refs.multipleTable.columns

      doQueryFindAll(
        page || that.listQuery.pageIndex,
        that.listQuery.dataInfo,
        '领料单列表导出',
        '领料单列表',
        tableColumns
      ).then(response => {
        if(dataType == 'excel'){
          this.$utils.downloadFile(response, '领料单查询导出.xlsx')
          this.listLoading = false}
        else if (
          response.data.seMaterialListFindAll.result === "1" &&
          response.data.seMaterialListFindAll.rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              apiSeProcess.seMaterialListFindAll.ServiceCode
            ].records;
          that.list =
            response.data[apiSeProcess.seMaterialListFindAll.ServiceCode].rows;

          if (
            //第一层树创建
            response.data[apiSeProcess.seMaterialListFindAll.ServiceCode].rows
          ) {
            var treeChilds = [];
            response.data[
              apiSeProcess.seMaterialListFindAll.ServiceCode
            ].rows.forEach(row => {
              var node = {
                id: null,
                label: row.repairTime,
                deep: 1,
                children: []
              };
              for (var i in treeChilds) {
                if (row.repairTime != treeChilds[i].label) {
                } else {
                  treeChilds.pop(i); //重复则删除该节点
                }
              }
              treeChilds.push(node);
            });
            this.treeData[0].children = treeChilds;

            //第二层树创建
            if (
              response.data[apiSeProcess.seMaterialListFindAll.ServiceCode].rows
            ) {
              var Boat = [];
              response.data[
                apiSeProcess.seMaterialListFindAll.ServiceCode
              ].rows.forEach(row => {
                var node = {
                  id: null,
                  label: row.carLicense + " " + row.repairOrderCode,
                  value: row.repairOrderCode,
                  deep: 2,
                  children: []
                };
                for (var i = 0; i < this.treeData[0].children.length; i++) {
                  if (row.repairTime == this.treeData[0].children[i].label) {
                    // console.log("A"+row.carLicense)
                    //待解决问题：可以出现重复车牌吗
                    Boat = this.treeData[0].children[i].children;
                    Boat.push(node);
                    this.treeData[0].children[i].children = Boat;
                    break;
                  }
                }
              });
            }
          }
        }
        that.listLoading = false;
      });
    },
    queryFindDetail(val) {
      this.listLoading = true;
      const that = this;

      doQueryFindAll(
        that.listQuery.pageSize,
        that.listQuery.pageIndex,
        val
      ).then(response => {
        if (
          response.data.seMaterialListFindAll.result === "1" &&
          response.data.seMaterialListFindAll.rows != ""
        ) {
          that.list =
            response.data[apiSeProcess.seMaterialListFindAll.ServiceCode].rows;
        }
        that.listLoading = false;
      });
    },
    getRepairDate(val) {
      (this.listQuery.dataInfo.repairTimeBeg = val[0]),
        (this.listQuery.dataInfo.repairTimeEnd = val[1]);
    },
    reset() {
      (this.listQuery.RepairDate = ""),
        (this.listQuery.dataInfo.carLicense = ""),
        (this.listQuery.dataInfo.repairOrderCode = ""),
        (this.listQuery.dataInfo.partNo = ""),
        (this.listQuery.dataInfo.partName = ""),
        (this.listQuery.dataInfo.repairOrderCode = "");
        this.listQuery.dataInfo.outFlag = "0",
        this.listQuery.dataInfo.repairTimeBeg = "",
        this.listQuery.dataInfo.repairTimeEnd = "",
        this.listQuery.dataInfo.outStockCode = ""
    },
    getDate() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();

      var time = year + "-" + month + "-" + day;
      this.nowDate = time;
    },
    getExcel() {
      this.queryFindAll(1,'excel')
    }
  }
};
</script>
<style  lang="scss" scoped>
.el-main {
  padding: 0px;
}
.el-aside {
  background-color: white;
}
.textCenter {
  text-align: center;
}
.paddingB10 {
  padding-bottom: 10px;
}
.height {
  height: 50px;
}
.line-height {
  line-height: 50px;
}
.line-height2 {
  line-height: 20px;
}
.paddingB5 {
  padding-bottom: 5px;
}
/deep/ .border1 {
  border: 1px solid #797979 !important;
}
.lineHeight32.el-row {
  line-height: 24px;
}
</style>