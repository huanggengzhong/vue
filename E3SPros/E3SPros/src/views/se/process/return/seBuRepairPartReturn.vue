<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="queryFindAll('1')">查询</el-button>
      <el-button size="small" @click="cancel">作废</el-button>
      <el-button size="small" @click="createApply">新建退料申请</el-button>
      <el-button size="small" @click="initDetail()">打印</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>

    <!--<div class="filter-container filter-title" ref="conTitleHeight">查询条件</div>-->
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <el-col :span="22">
          <el-row>
            <el-col :span="6">
              <lableName :curLabelName="beginApplyDateName" :isShowLabel="true" :isRequire="true"></lableName>
              <el-date-picker
              v-model="listQuery.dataInfo.beginApplyDate"
              @change="changeBeginDate"
              type="date"
              :picker-options="beginPickerOptions"
              value-format="yyyy-MM-dd HH:mm:ss"
              format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择日期"
              ></el-date-picker>
            </el-col>

            <el-col :span="6">
              <lableName :curLabelName="endApplyDateName" :isShowLabel="true" :isRequire="true"></lableName>
              <el-date-picker
               v-model="listQuery.dataInfo.endApplyDate"
               @change="changeEndDate"
               type="date"
               :picker-options="endPickerOptions"
               value-format="yyyy-MM-dd HH:mm:ss"
               format="yyyy-MM-dd HH:mm:ss"
               placeholder="选择日期"
              ></el-date-picker>
             </el-col>

             <el-col :span="6">
                <label>申请人</label>
                <el-input size="small" v-model="listQuery.dataInfo.applyEmpId" placeholder="请输入内容" />
              </el-col>
            
             <el-col :span="6">
                <label>申请单号</label>
                <el-input 
                size="small"
                v-model="listQuery.dataInfo.returnApplyOrderCode"
                placeholder="请输入内容"
                />
                </el-input>
             </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button icon="el-icon-plus" @click="loadmore" class="moreParam">更多</el-button>
        </el-col>

        <el-col :span="22" v-show="!pic">
          <el-row>
            <el-col :span="6">
              <label>车牌号</label>
              <el-input v-model="listQuery.dataInfo.carLicense" size="small">
              </el-input>
            </el-col>

            <el-col :span="6">
              <label>VIN码</label>
              <el-input size="small" v-model="listQuery.dataInfo.vin" placeholder="请输入内容" />
            </el-col>
           
            <el-col :span="6">
              <label>施工单号</label>
              <el-input size="small" v-model="listQuery.dataInfo.sourceCode" placeholder="请输入内容" />
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
      highlight-current-row
      :height="tableHeight"
      @row-click="chooseRow"
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column label="维修备件Id" v-if="false" align="center">
        <template slot-scope="scope">{{ scope.row.sourcePartId }}</template>
      </el-table-column>
      <el-table-column label="施工单号" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.sourceCode }}</template>
      </el-table-column>
      <el-table-column label="申请人" align="center">
        <template slot-scope="scope">{{ scope.row.applyEmpName }}</template>
      </el-table-column>
      <el-table-column label="车牌号" width="100" align="center">
        <template slot-scope="scope">{{ scope.row.carLicense }}</template>
      </el-table-column>
      <el-table-column label="VIN" width="160" align="center">
        <template slot-scope="scope">{{ scope.row.vin }}</template>
      </el-table-column>
      <el-table-column label="申请单号" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.returnApplyOrderCode }}</template>
      </el-table-column>
      <el-table-column label="申请日期" width="100" align="center">
        <template slot-scope="scope">{{ scope.row.applyDate }}</template>
      </el-table-column>
      <el-table-column label="备件编号" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.partNo }}</template>
      </el-table-column>
      <el-table-column label="备件名称" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.partName }}</template>
      </el-table-column>
      <el-table-column label="申请数量" align="center">
        <template slot-scope="scope">{{ scope.row.returnApplyQty }}</template>
      </el-table-column>
      <el-table-column label="退货入库数" align="center">
        <template slot-scope="scope">{{ scope.row.returnInQty }}</template>
      </el-table-column>
      <el-table-column label="退料状态" v-if="false">
        <template slot-scope="scope">{{ scope.row.returnStateName }}</template>
      </el-table-column>
      <!--退料状态: 1、退料申请  2、已入库  3、作废-->
      <el-table-column label="退料状态" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.returnState == 1">退料申请</span>
          <span v-if="scope.row.returnState == 2">已入库</span>
          <span v-if="scope.row.returnState == 3">作废</span>
        </template>
      </el-table-column>
    </el-table>

    <!--<div>
      <el-dialog
        :visible.sync="cancelVisibleA"
        center
        width="300px"
        style="height:200px;"
        v-loading="listLoading"
        :append-to-body="true"
        element-loading-text="正在检索目标申请"
      >
        <span>退料申请中已有备件出库，不可作废</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelVisible = false">取 消</el-button>
          <el-button type="primary" @click="cancelVisibleA = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>-->

    <!--<div>
      <el-dialog :visible.sync="cancelVisibleB" center width="300px" style="height:200px;" :append-to-body="true">
        <span>未有数据被选中</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelVisibleB = false">取 消</el-button>
          <el-button type="primary" @click="cancelVisibleB = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>-->

    <!--<div>
      <el-dialog :visible.sync="cancelVisibleC" center width="300px" style="height:200px;" :append-to-body="true">
        <span>是否作废当前退料申请</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelVisibleC = false">取 消</el-button>
          <el-button type="primary" @click="makeCancel">确 定</el-button>
        </span>
      </el-dialog>
    </div>-->

    <!--<div>
      <el-dialog :visible.sync="cancelVisibleD" center width="300px" style="height:200px;" :append-to-body="true">
        <span>成功作废</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelVisibleD = false">取 消</el-button>
          <el-button type="primary" @click="cancelVisibleD = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>-->

    <div>
      <el-dialog :visible.sync="printfDialogVisible" :fullscreen="full" width="80%" :append-to-body="true">
        <div style="height:465px;overflow-y:auto">
          <div ref="print">
            <el-row :gutter="26">
              <el-col :span="24" align="center">
                <label style="font-size:30px">备件维修退料申请单</label>
              </el-col>
              <el-col :span="4" aglin="center">
                <label class="kk">广州风日</label>
              </el-col>
              <el-col :span="8" aglin="center">
                <label class="kk">地址:</label>
                <label class="kk">广州市花都区风神大道与九潭路交汇处</label>
              </el-col>
              <el-col :span="6" aglin="center">
                <label class="kk">电话:</label>
                <label class="kk">020-36878333</label>
              </el-col>
              <el-col :span="6" aglin="center">
                <label class="kk">传真:</label>
                <label class="kk">010-20000000</label>
              </el-col>
              <el-col :span="10" aglin="center">
                <label class="kk">单据编号:</label>
                <label class="kk">{{this.currentRow.returnApplyOrderCode}}</label>
              </el-col>
              <el-col :span="6" aglin="center">
                <label class="kk">报修人:</label>
                <label class="kk">{{this.currentRow.applyEmpName}}</label>
              </el-col>
              <el-col :span="8" aglin="center">
                <label class="kk">派工单号:</label>
                <label class="kk">{{this.currentRow.outStoreCode}}</label>
              </el-col>
            </el-row>
            <br />
            <el-row class="textCenter">
              <el-col :span="6" aglin="center" class="border1 height line-height">备件编号</el-col>
              <el-col :span="6" aglin="center" class="border1 height line-height">备件名称</el-col>
              <el-col :span="2" aglin="center" class="border1 height line-height">单位</el-col>
              <el-col :span="2" aglin="center" class="border1 height line-height">单价</el-col>
              <el-col :span="2" aglin="center" class="border1 height line-height">数量</el-col>
              <el-col :span="2" aglin="center" class="border1 height line-height">总价</el-col>
              <el-col :span="4" aglin="center" class="border1 height line-height">备注</el-col>
            </el-row>
            <el-row class="textCenter" v-for="(item, index) in list2" :key="index">
              <el-col :span="6" aglin="center" class="border1 height line-height">{{item.partNo}}</el-col>
              <el-col :span="6" aglin="center" class="border1 height line-height">{{item.partName}}</el-col>
              <el-col :span="2" aglin="center" class="border1 height line-height">{{item.unit}}</el-col>
              <el-col :span="2" aglin="center" class="border1 height line-height">{{item.partPrice}}</el-col>
              <el-col
                :span="2"
                aglin="center"
                class="border1 height line-height"
              >{{item.returnApplyQty}}</el-col>
              <el-col
                :span="2"
                aglin="center"
                class="border1 height line-height"
              >{{item.priceAmount}}</el-col>
              <el-col :span="4" aglin="center" class="border1 height line-height">无</el-col>
            </el-row>
          </div>
        </div>
        <div style="height:40px;float:right;padding-top:20px">
          <el-button @click="toPrint" size="medium">打印</el-button>
        </div>
      </el-dialog>
    </div>

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
  </div>
</template>

<script>
import { apiSeProcess } from "@/api/graphQLApiList/se";
import {
  doQueryFindAll,
  doCancel,
  doQueryStockDetail
} from "@/api/se/basedata/repair/seBuRepairPartReturn";
import { the_Height } from "@/components/se/seMixins/makeHeight";
import lableName from "@/components/lableName/index"

export default {
  mixins: [the_Height],
  components: {
    lableName
  },
  data() {
    return {
      beginPickerOptions: {
        disabledDate: time => {
          let endDateVal = this.listQuery.dataInfo.endApplyDate;
          if (endDateVal) {
            return time.getTime() > new Date(endDateVal).getTime();
          }
        }
      },
      endPickerOptions: {
        disabledDate: time => {
          let beginDateVal = this.listQuery.dataInfo.beginApplyDate;
          if (beginDateVal) {
            return time.getTime() < new Date(beginDateVal).getTime();
          }
        }
      },
      beginApplyDateName: "申请日期",
      endApplyDateName: "至",
      full: true,
      nowDate: "",
      printfDialogVisible: false,
      listLoading: false,
      list: null,
      list2: null,
      pic: true,
      cancelVisibleA: false,
      cancelVisibleB: false,
      cancelVisibleC: false,
      cancelVisibleD: false,
      currentRow: {
        returnApplyOrderCode: "",
        applyEmpName:"",
        outStoreCode:""
      },
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        dataInfo: {
          oemCode: "",
          groupCode: "",
          applyEmpId: "",
          sourceCode: "",
          billType: "1",
          returnApplyOrderCode: "",
          vin: "",
          carLicense: "",
          beginApplyDate: "",
          endApplyDate: ""
        }
      },
      listQuery2: {
        cancelInfo: {
          oemCode: "",
          groupCode: "",
          returnState: "",
          returnApplyOrderId: "",
          updateControlId: "",
          repairPartId: ""
        }
      },
      listQuery3: {
        dataInfo: {
          oemCode: "",
          groupCode: "",
          outStoreCode: ""
        }
      }
    };
  },
  created() {
    this.timeInitialization();
  },
  methods: {
    //初始化时间查询默认为7天
    timeInitialization() {
      var now = new Date();
      var year = now.getFullYear(); //得到年份
      var month = now.getMonth() + 1; //得到月份
      //格式化月份(两位数)
      var formatedMonth = ("0" + month).slice(-2);
      var date = now.getDate(); //得到日期
      //格式化日期(两位数)
      var formatedDate = ("0" + date).slice(-2);
      var d = year + "-" + formatedMonth + "-" + formatedDate + " " + "00" + ":" + "00" + ":" + "00";
      var k = new Date(d);
      k.setDate(k.getDate() -  7);
      this.listQuery.dataInfo.endApplyDate = d;
      this.listQuery.dataInfo.beginApplyDate = k.getFullYear() + "-" + ("0" + (k.getMonth() + 1)).slice(-2) + "-" + ("0" + k.getDate()).slice(-2) + " " + "00" + ":" + "00" + ":" + "00";
      
      //this.changeBeginDate();
      //this.changeEndDate();
    },
    printf(val) {
      const that = this;
      this.listQuery3.dataInfo.outStoreCode = val.outStoreCode;
      doQueryStockDetail(this.listQuery3.dataInfo).then(response => {
        if (
          response.data[
            apiSeProcess.seBuReturnApplyOrderQueryFindStockD.ServiceCode
          ].result === "1" 
          // &&
          // response.data[
          //   apiSeProcess.seBuReturnApplyOrderQueryFindStockD.ServiceCode
          // ].rows != ""
        ) {
          that.list2 =
            response.data[
              apiSeProcess.seBuReturnApplyOrderQueryFindStockD.ServiceCode
            ].rows;
        }
      });
      this.printfDialogVisible = true;
      console.log("curr" + JSON.stringify(this.currentRow));
    },
    toPrint() {
      this.$print(this.$refs.print);
      this.printfDialogVisible = false;
    },
    queryFindAll(page) {
      if (this.listQuery.dataInfo.beginApplyDate == "" || this.listQuery.dataInfo.beginApplyDate == undefined) {
        this.$message({
          type: "warning", 
          message: "申请开始日期不能为空！"
        });
        return;
      }
      if (this.listQuery.dataInfo.endApplyDate == "" || this.listQuery.dataInfo.endApplyDate == undefined) {
        this.$message({
          type: "warning", 
          message: "申请结束日期不能为空！"
        });
        return;
      }
      const that = this;
      this.listLoading = true;
      doQueryFindAll(
        page || that.listQuery.pageIndex,
        that.listQuery.pageSize,
        that.listQuery.dataInfo
      ).then(response => {
        console.log("response.data[apiSeProcess.seBuReturnApplyOrderQueryFindList.ServiceCode].rows;")
        console.log(response.data[apiSeProcess.seBuReturnApplyOrderQueryFindList.ServiceCode].rows);
        if (
          response.data[apiSeProcess.seBuReturnApplyOrderQueryFindList.ServiceCode]
            .result === "1" 
            //&&
          // response.data[apiSeProcess.seBuReturnApplyOrderQueryFindList.ServiceCode]
          //   .rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              apiSeProcess.seBuReturnApplyOrderQueryFindList.ServiceCode
            ].records;
          that.list =
            response.data[
              apiSeProcess.seBuReturnApplyOrderQueryFindList.ServiceCode
            ].rows;
            console.log("that.list");
            console.log(that.list);
          that.listLoading = false;
        }
      });
    },
    loadmore() {
      if (this.pic) {
        this.pic = false;
      } else {
        this.pic = true;
      }
    },
    changeBeginDate(val) {
      this.listQuery.dataInfo.beginApplyDate = val;
      // var d = this.listQuery.dataInfo.beginApplyDate;
      // if(d == ""){
      //   d = new Date();
      // }
      // var k = new Date(d);
      // var j = new Date();
      // this.listQuery.dataInfo.beginApplyDate = k.getFullYear() + "-" + (k.getMonth() + 1) + "-" + k.getDate() + " " + j.getHours() + ":" + j.getMinutes()+ ":" + j.getSeconds();
      // this.listQuery.dataInfo.endApplyDate = k.getFullYear() + "-" + (k.getMonth() + 1) + "-" + (k.getDate()+7) + " " + j.getHours() + ":" + j.getMinutes()+ ":" + j.getSeconds();
    },
    changeEndDate(val) {
      this.listQuery.dataInfo.endApplyDate = val;
      // var d = this.listQuery.dataInfo.endApplyDate;
      // var k = new Date(d);
      // var j = new Date();
      // this.listQuery.dataInfo.beginApplyDate = k.getFullYear() + "-" + (k.getMonth() + 1) + "-" + (k.getDate()-7) + " " + j.getHours() + ":" + j.getMinutes()+ ":" + j.getSeconds();
      // this.listQuery.dataInfo.endApplyDate = k.getFullYear() + "-" + (k.getMonth() + 1) + "-" + (k.getDate()) + " " + j.getHours() + ":" + j.getMinutes()+ ":" + j.getSeconds();
    },
    chooseRow(val) {
      this.currentRow = val;
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.queryFindAll();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.queryFindAll();
    },
    cancel() {
      if (this.currentRow.returnApplyOrderId != undefined) {
        //this.listLoading = true;
        var flag = false;
        for (var i = 0; i < this.list.length; i++) {
          if (
            this.currentRow.returnApplyOrderCode ==
              this.list[i].returnApplyOrderCode &&
            this.list[i].returnStateName == "已入库"
          ) {
            //this.cancelVisibleA = true;
            this.$message({
              type: "warning", 
              message: "退料申请中已有备件入库，不可作废！"
            });
            flag = true;
            break;
          }

          if (
            this.currentRow.returnApplyOrderCode ==
              this.list[i].returnApplyOrderCode &&
            this.list[i].returnStateName == "作废"
          ) {
            //this.cancelVisibleA = true;
            this.$message({
              type: "warning", 
              message: "退料申请中已作废，不可再作废！"
            });
            flag = true;
            break;
          }
        }
        if (!flag) {
          //this.cancelVisibleC = true;
          this.$confirm('是否作废当前退料申请！', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            //this.listLoading = false;
            this.makeCancel();
          });
        }
      } else {
        //this.cancelVisibleB = true;
        this.$message({
          type: "warning", 
          message: "未有数据被选中！"
        });
      }
    },
    makeCancel() {
      //this.cancelVisibleC = false;
      this.listQuery2.cancelInfo.oemCode = this.currentRow.oemCode;
      this.listQuery2.cancelInfo.groupCode = this.currentRow.groupCode;
      this.listQuery2.cancelInfo.returnState = this.currentRow.returnState;
      this.listQuery2.cancelInfo.returnApplyOrderId = this.currentRow.returnApplyOrderId;
      //this.listQuery2.cancelInfo.repairPartId = this.currentRow.partNo;//查询中缺失维修备件Id??  另外查询中退料状态为null
      this.listQuery2.cancelInfo.sourcePartId = this.currentRow.sourcePartId;
      this.listQuery2.cancelInfo.updateControlId = this.currentRow.updateControlId;
      doCancel(this.listQuery2.cancelInfo).then(response => {
        if (response.data[apiSeProcess.seBuReturnApplyOrderMutationCancel.ServiceCode].result === "1") {
          //this.cancelVisibleD = true;
          this.$message({
            type: "success", 
            message: "成功作废！"
          });
          this.queryFindAll(1);
        } else {
          this.$message({
            type: "warning", 
            message: response.data[apiSeProcess.seBuReturnApplyOrderMutationCancel.ServiceCode].msg
          });
        }
      });
    },
    createApply() {
      this.$router.push({
        path: "/se/seBuRepairPartReturnSon"
      });
    },
    reset() {
      (this.list = null),
        (this.listQuery.dataInfo.applyEmpId = ""),
        (this.listQuery.dataInfo.sourceCode = ""),
        (this.listQuery.dataInfo.returnApplyOrderCode = ""),
        (this.listQuery.dataInfo.vin = ""),
        (this.listQuery.dataInfo.carLicense = ""),
        this.changeBeginDate();
    },
    initDetail() {
      if (this.currentRow.returnApplyOrderId!= null) {
        this.printf(this.currentRow);
      } else {
        //this.cancelVisibleB = true;
        this.$message({
          type: "warning", 
          message: "未有数据被选中！"
        });
      }
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
.kk {
  font-size: 20px;
}
</style>