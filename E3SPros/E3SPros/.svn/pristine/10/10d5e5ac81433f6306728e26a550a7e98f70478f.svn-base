<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="QueryStock">查询</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>

    <!--<div class="filter-container filter-title" ref="conTitleHeight">查询条件</div>-->
    <div class="filter-container filter-params" ref="conHeight">
       <el-row :gutter="26">
        <el-col :span="22">
          <el-row>
            <el-col :span="6">
              <lableName :curLabelName="repairTimeBeginName" :isShowLabel="true" :isRequire="true"></lableName>
              <el-date-picker
                v-model="listQuery.dataInfo.repairTimeBegin"
                @change="changeBeginDate"
                type="date"
                :picker-options="beginPickerOptions"
                value-format="yyyy-MM-dd HH:mm:ss"
                format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择日期"
              ></el-date-picker>
            </el-col>

            <el-col :span="6">
              <lableName :curLabelName="repairTimeEndName" :isShowLabel="true" :isRequire="true"></lableName>
              <el-date-picker
                v-model="listQuery.dataInfo.repairTimeEnd"
                @change="changeEndDate"
                type="date"
                :picker-options="endPickerOptions"
                value-format="yyyy-MM-dd HH:mm:ss"
                format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择日期"
              ></el-date-picker>
            </el-col>

            <el-col :span="6">
              <label>车牌号</label>
              <el-input size="small" v-model="listQuery.dataInfo.carLicense" placeholder="请输入内容" />
            </el-col>

            <el-col :span="6">
              <label>客户名称</label>
              <el-input size="small" v-model="listQuery.dataInfo.custName" placeholder="请输入内容" />
             </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button icon="el-icon-plus" @click="loadmore" class="moreParam">更多</el-button>
        </el-col>

        <el-col :span="22" v-show="!pic">
          <el-row>
            <el-col :span="6">
              <label>施工单号</label>
              <el-input size="small" v-model="listQuery.dataInfo.repairOrderId" placeholder="请输入内容" />
            </el-col>
            <el-col :span="6">
              <label>出库单号</label>
              <el-input size="small" v-model="listQuery.dataInfo.outStoreCode" placeholder="请输入内容" />
            </el-col>
            <el-col :span="6">
              <label>VIN</label>
              <el-input size="small" v-model="listQuery.dataInfo.vin" placeholder="请输入内容" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">施工单列表</div>
    <!--<div class="filter-container filter-params">-->
      <!--<div>-->
        <!--<div style="text-align:left;background-color:gray;font-size:16px">施工单列表</div>-->
        <el-table
          v-loading="listLoading"
          :data="list"
          element-loading-text="Loading"
          border
          fit
          stripe
          highlight-current-row
          :height="tableHeight4"
        >
          <el-table-column align="center" label="序号" width="60">
            <template slot-scope="scope">{{ scope.$index + 1 }}</template>
          </el-table-column>
          <el-table-column label="施工单号">
            <template slot-scope="scope">
              <span @click="seResult(scope.row)" style="color:blue">{{ scope.row.repairOrderCode }}</span>
            </template>
          </el-table-column>
          <el-table-column label="车牌号">
            <template slot-scope="scope">{{ scope.row.carLicense }}</template>
          </el-table-column>
          <el-table-column label="VIN">
            <template slot-scope="scope">{{ scope.row.vin }}</template>
          </el-table-column>
          <el-table-column label="客户姓名">
            <template slot-scope="scope">{{ scope.row.custName }}</template>
          </el-table-column>
          <el-table-column label="出库单号">
            <template slot-scope="scope">{{ scope.row.outStoreCode }}</template>
          </el-table-column>
        </el-table>
      <!--</div>-->

      <!--<div style="padding:10px" ref="userHeight1">-->
      <div class="filter-container filter-params" ref="userHeight1">
        <el-row :gutter="26">
          <el-col :span="6">
            <lableName :curLabelName="applyEmpIdName" :isShowLabel="true" :isRequire="true"></lableName>
            <el-input size="small" v-model="listQuery3.dataInfo.applyEmpId" placeholder="请输入内容" />
            <!--<span style="color:red;font-size:20px">*</span>-->
          </el-col>
          <el-col :span="6">
            <lableName :curLabelName="applyDateName" :isShowLabel="true" :isRequire="true"></lableName>
            <el-date-picker
              v-model="listQuery3.dataInfo.applyDate"
              @change="changeApplyDate"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
            <!--<span style="color:red;font-size:20px">*</span>-->
          </el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6">
            <el-button @click="saveData">保存</el-button>
          </el-col>
        </el-row>
      </div>

      <!--<div>-->
        <div class="filter-container filter-title" ref="resultTitleHeight">备件列表</div>
        <!--<div style="text-align:left;background-color:gray;font-size:16px">备件明细</div>-->
        <el-table
          v-loading="listLoading1"
          :data="list2"
          element-loading-text="Loading"
          border
          fit
          stripe
          highlight-current-row
          :height="tableHeight4"
          @row-click="chooseRow"
        >
          <el-table-column align="center" label="序号" width="60">
            <template slot-scope="scope">{{ scope.$index + 1 }}</template>
          </el-table-column>
          <el-table-column label="备件编号">
            <template slot-scope="scope">{{ scope.row.partNo }}</template>
          </el-table-column>
          <el-table-column label="备件名称">
            <template slot-scope="scope">{{ scope.row.partName }}</template>
          </el-table-column>
          <el-table-column label="出库数量">
            <template slot-scope="scope">{{ scope.row.outStoreQty }}</template>
          </el-table-column>
          <el-table-column label="申请退货数量*" width="150">
            <template slot-scope="scope">
              <el-input-number
                size="small"
                controls-position="right"
                :min="0"
                v-model="scope.row.returnApplyQty"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="已申请退货数量">
            <template slot-scope="scope">{{ scope.row.hasApplyReturnQty }}</template>
          </el-table-column>
          <el-table-column label="单位">
            <template slot-scope="scope">{{ scope.row.unit }}</template>
          </el-table-column>
          <el-table-column label="单价">
            <template slot-scope="scope">{{ scope.row.partPrice }}</template>
          </el-table-column>
          <el-table-column label="合计">
            <template slot-scope="scope">{{ scope.row.partAmount }}</template>
          </el-table-column>
        </el-table>
      <!--</div>-->
    <!--</div>-->

    <!--<div>
      <el-dialog :visible.sync="cancelVisibleA" center width="300px" style="height:200px;" :append-to-body="true">
        <span>申请退货数量不能大于出库数量-已申请退货数量</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="cancelVisibleA = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>-->

    <!--<div>
      <el-dialog :visible.sync="cancelVisibleB" center width="300px" style="height:200px;" :append-to-body="true">
        <span>请确保有申请退货（必须有备件被申请退货）</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="cancelVisibleB = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>-->

    <!--<div>
      <el-dialog :visible.sync="cancelVisibleC" center width="300px" style="height:200px;" :append-to-body="true">
        <span>申请人不能为空</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="cancelVisibleC = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>-->

    <!--<div>
      <el-dialog :visible.sync="cancelVisibleD" center width="300px" style="height:200px;" :append-to-body="true">
        <span>申请日期不能为空</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="cancelVisibleD = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>-->

    <!--<div>
      <el-dialog :visible.sync="cancelVisibleE" center width="300px" style="height:200px;" :append-to-body="true">
        <span>尚未有数据</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="cancelVisibleE = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>-->
  </div>
</template>
<script>
import { apiSeProcess } from "@/api/graphQLApiList/se";
import {
  doQueryStock,
  doQueryStockDetail,
  doSave
} from "@/api/se/basedata/repair/seBuRepairPartReturn";
import { the_Height} from "@/components/se/seMixins/makeHeight";
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
          let endDateVal = this.listQuery.dataInfo.repairTimeEnd;
          if (endDateVal) {
            return time.getTime() > new Date(endDateVal).getTime();
          }
        }
      },
      endPickerOptions: {
        disabledDate: time => {
          let beginDateVal = this.listQuery.dataInfo.repairTimeBegin;
          if (beginDateVal) {
            return time.getTime() < new Date(beginDateVal).getTime();
          }
        }
      },
      repairTimeBeginName: "报修开始时间",
      repairTimeEndName: "保修结束时间",
      applyEmpIdName: "申请人",
      applyDateName: "申请日期",
      num: undefined,
      currentRow: undefined,
      date: undefined,
      listLoading: false,
      listLoading1: false,
      list: null,
      list2: null,
      pic: true,
      cancelVisibleA: false,
      cancelVisibleB: false,
      cancelVisibleC: false,
      cancelVisibleD: false,
      cancelVisibleE: false,
      listQuery: {
        //查询
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        dataInfo: {
          //oemCode: "",
          //groupCode: "",
          repairOrderCode: "",
          vin: "",
          carLicense: "",
          custName: "",
          repairTimeBegin: "",
          repairTimeEnd: "",
          outStoreCode: "",
          billType: "1",
          dlrId: "202"
        }
      },
      listQuery2: {
        //明细
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        dataInfo: {
          oemCode: "",
          groupCode: "",
          outStoreCode: "",
          billType: "1"
        }
      },
      listQuery3: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        dataInfo: {
          //保存
          partRetyrnApplyCode: "",
          partRetyrnApplyId: "",
          sourceCode: "",
          sourceOrderId: "",
          outStoreCode: "",
          carId: "",
          vin: "",
          carBrandCode: "",
          carLicense: "",
          dlrCustNo: "",
          custName: "",
          applyEmpId: "", //
          applyDate: "", //
          oemCode: "",
          groupCode: "",
          dtapplypart: {
            partRetyrnId: "",
            partNo: "",
            partName: "",
            //partSource: "",
            partQty: "",
            sourcePartId: "",
            outPartId: "",
            returnApplyQty: "",
            updateControlId: "",
            partUnit: "",
            partPrice: "",
            oemCode: "",
            groupCode: ""
          }
        }
      }
    };
  },
  created() {},
  methods: {
    loadmore() {
      if (this.pic) {
        this.pic = false;
      } else {
        this.pic = true;
      }
    },
    // getDate() {
    //   this.listQuery.dataInfo.repairTimeBegin = this.date[0];
    //   this.listQuery.dataInfo.repairTimeEnd = this.date[1];
    // },
    changeApplyDate() {},
    QueryStock() {
      if (this.listQuery.dataInfo.repairTimeBegin == "" || this.listQuery.dataInfo.repairTimeBegin == undefined) {
        this.$message({
          type: "warning", 
          message: "保修开始时间不能为空！"
        });
        return;
      }
      if (this.listQuery.dataInfo.repairTimeEnd == "" || this.listQuery.dataInfo.repairTimeEnd == undefined) {
        this.$message({
          type: "warning", 
          message: "保修结束时间不能为空！"
        });
        return;
      }
      //   console.log(this.listQuery.dataInfo);
      const that = this;
      this.listLoading = true;
      doQueryStock(that.listQuery.pageIndex, that.listQuery.pageSize, that.listQuery.dataInfo).then(response => {
        if (
          response.data[apiSeProcess.seBuReturnApplyOrderQueryFindStock.ServiceCode]
            .result === "1" 
          //   &&
          // response.data[apiSeProcess.seBuReturnApplyOrderQueryFindStock.ServiceCode]
          //   .rows != ""
        ) {
          that.list =
            response.data[
              apiSeProcess.seBuReturnApplyOrderQueryFindStock.ServiceCode
            ].rows;
          that.listLoading = false;
        }
      });
      this.list2 = null;
    },
    seResult(val) {
      const that = this;
      this.listLoading1 = true;
      that.listQuery2.dataInfo.outStoreCode = val.outStoreCode;
      that.listQuery2.dataInfo.oemCode = val.oemCode;
      that.listQuery2.dataInfo.groupCode = val.groupCode;
      doQueryStockDetail(that.listQuery2.pageIndex, that.listQuery2.pageSize, that.listQuery2.dataInfo).then(response => {
        if (
          response.data[
            apiSeProcess.seBuReturnApplyOrderQueryFindStockD.ServiceCode
          ].result === "1" 
        ) {
          that.list2 =
            response.data[
              apiSeProcess.seBuReturnApplyOrderQueryFindStockD.ServiceCode
            ].rows;
          that.listLoading1 = false;
          for (var i = 0; i < this.list2.length; i++) {
            this.list2[i].returnApplyQty = 0;
          }
        }
      });
    },
    chooseRow(val) {
      this.currentRow = val;
    },
    numChange() {
      console.log("kk");
    },
    saveData() {
      var flag = 0;
      var flag2 = true;
      console.log("this.list2");
      console.log(this.list2);

      if (this.list2 != null) {
        if (this.listQuery3.dataInfo.applyEmpId == "") {
          //this.cancelVisibleC = true;
          this.$message({
            type: "warning", 
            message: "申请人不能为空！"
          });
          return;
        } else {
          if (this.listQuery3.dataInfo.applyDate == "") {
            //this.cancelVisibleD = true;
             this.$message({
               type: "warning", 
               message: "申请日期不能为空！"
             });
             return;
          } else {
            for (var i = 0; i < this.list2.length; i++) {
              var k = this.list2[i].outStoreQty - this.list2[i].hasApplyReturnQty;
              if (this.list2[i].returnApplyQty > k) {
                //this.cancelVisibleA = true;
                this.$message({
                  type: "warning", 
                  message: "申请退货数量不能大于出库数量-已申请退货数量！"
                });
                flag2 = false;
              }
              if (this.list2[i].returnApplyQty == 0) {
                flag++;
              }
            }
            if (this.list2.length == flag && flag2 == true) {
              //this.cancelVisibleB = true;
              this.$message({
                type: "warning", 
                message: "请确保有申请退货（必须有备件被申请退货）！"
              });
            } else {
              console.log("list" + JSON.stringify(this.list));
              (this.listQuery3.dataInfo.partRetyrnApplyCode = this.list), //
                (this.listQuery3.dataInfo.partRetyrnApplyId = this.list), //
                (this.listQuery3.dataInfo.sourceCode = this.list.repairOrderCode), //
                (this.listQuery3.dataInfo.sourceOrderId = this.list.repairOrderId), //
                (this.listQuery3.dataInfo.outStoreCode = this.list.outStoreCode),
                (this.listQuery3.dataInfo.carId = this.list.carId),
                (this.listQuery3.dataInfo.vin = this.list.vin),
                (this.listQuery3.dataInfo.carBrandCode = this.list.carBrandCode),
                (this.listQuery3.dataInfo.carLicense = this.list.carLicense),
                (this.listQuery3.dataInfo.dlrCustNo = this.list.dlrCustNo),
                (this.listQuery3.dataInfo.custName = this.list.custName),
                (this.listQuery3.dataInfo.oemCode = this.list.oemCode),
                (this.listQuery3.dataInfo.groupCode = this.list.groupCode),
                // console.log("list2"+JSON.stringify(this.list2));
                (this.listQuery3.dataInfo.dtapplypart = this.list2);

              console.log(this.listQuery3.dataInfo);
              //五重验证之后进行保存操作
              doSave(this.listQuery3.dataInfo).then(response => {
                if (
                  response.data[
                    apiSeProcess.seBuRepairPartReturnSave.ServiceCode
                  ].result === "1" 
                  // &&
                  // response.data[
                  //   apiSeProcess.seBuRepairPartReturnSave.ServiceCode
                  // ].rows != ""
                ) {
                  this.dialogSaveAfter();
                  this.QueryStock();
                }
              });
            }
          }
        }
      } else {
        //this.cancelVisibleE = true;
        this.$message({
          type: "warning", 
          message: "备件明细表尚未有数据！"
        });
      }
    },
    dialogSaveAfter() {
      this.$alert("保存成功", "提示", {
        confirmButtonText: "确定"
      });
    },
    reset() {
      this.list = null;
      this.list2 = null;

      (this.listQuery.dataInfo.carLicense = ""),
      (this.listQuery.dataInfo.custName = ""),
      (this.listQuery.dataInfo.repairOrderCode = ""),
      (this.date = ""),
      (this.listQuery.dataInfo.repairTimeBegin = ""),
      (this.listQuery.dataInfo.repairTimeEnd = ""),
      (this.listQuery.dataInfo.vin = ""),
      (this.listQuery.dataInfo.outStoreCode = ""),
      (this.listQuery3.dataInfo.applyEmpId = "");
      this.listQuery3.dataInfo.applyDate = "";
    },
    changeBeginDate(val) {
      this.listQuery.dataInfo.repairTimeBegin = val;
    },
    changeEndDate(val) {
      this.listQuery.dataInfo.repairTimeEnd = val;
    }
  }
};
</script>
