<template>
  <div> 
     <div class="app-container app-container-table">
        <div class="filter-container filter-button" ref="searcheHeight">
          <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
          <el-button size="small" @click="sales">退料申请</el-button>
          <el-button size="small" :disabled="displayDisabled" @click="printf">打印单据</el-button>
          <el-button size="small" :disabled="isDisabled" @click="showDelete">作废单据</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
        <div class="filter-container filter-params">
          <el-row :gutter="26">
            <el-col :span="6">
              <label>申请日期</label>
              <el-date-picker
                v-model="applyDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                unlink-panels
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                @change="getTime"
              ></el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>精品销售单号</label>
              <el-input v-model="queryParams.dataInfo.sourceCode" placeholder="请输入" size="small"></el-input>
            </el-col>
            <el-col :span="6">
              <label>退料申请单号</label>
              <el-input v-model="queryParams.dataInfo.returnApplyOrderCode" placeholder="请输入" size="small"></el-input>
            </el-col>
            <carBrand
              :isMul="true"
              :span="6"
              :code="queryParams.dataInfo.carBrandCode"
              labelName="车辆品牌"
              :key="carBrandKey"
              ref="select_carBrandCode"
              @changeCode="getCarBrand"
            ></carBrand>
          </el-row>
          <el-row :gutter="26">
            <el-col :span="6">
              <label>车牌号</label>
              <el-input v-model="queryParams.dataInfo.carLicense" placeholder="请输入" size="small"></el-input>
            </el-col>
            <el-col :span="6">
              <label>VIN码</label>
              <el-input v-model="queryParams.dataInfo.VIN" placeholder="请输入" size="small"></el-input>
            </el-col>
            <LookupValue
              :span="6"
              :isMul="false"
              :isshow="true"
              :code="queryParams.dataInfo.applyEmpId"
              labelName="申请人"
              lookuptype="SE0095"
              @changeCode="getApplyNameNo"
            />
          </el-row>
        </div>
        <mix-table
          ref="tableList"
          :queryParams="queryParams"
          :dynamicTableCols="cols"
          :isShowSelect="false"
          :isPaging="true"
          :isDialog="false"
          @rowClick="getChangeCode"
        />
       

      
       <!-- 打印预览弹框 -->
        <el-dialog title="退料申请打印" :visible.sync="printfDialogVisible" width="70%">
            <div style="height:465px;overflow-y:auto;width:100%">
                <div ref="print">
                <el-row :gutter="26" >
                    <el-col :span="24" align="center">
                    <label style="font-size:20px">精品销售退料申请单</label>
                    </el-col>
                    <el-col :span="6">
                    <label style="font-size:10px">广州风日</label>
                    <!-- <label style="font-size:10px">this.$store.getters.orgInfo.DLR_NAME</label> -->
                    </el-col>
                    <el-col span="6">
                        <label>地址：</label>
                    <!-- <label style="font-size:10px">this.$store.getters.orgInfo.addtress</label> -->
                    </el-col>
                    <el-col span="6">
                        <label style="font-size:10px">电话：</label>
                        <label style="font-size:10px">{{list.phone}}</label>
                    </el-col>
                    <el-col span="6">
                        <label style="font-size:10px">传真：</label>
                    </el-col>
                </el-row>
                <el-row >
                    <el-col span="8">
                        <label style="font-size:10px">退料申请单号：</label>
                        <label style="font-size:10px">{{list.returnApplyOrderCode}}</label>
                    </el-col>
                    <el-col span="8">
                        <label style="font-size:10px">客户姓名：</label>
                        <label style="font-size:10px">{{list.dlrCustNo}}</label>
                    </el-col>
                    <el-col span="8">
                        <label style="font-size:10px">销售单号：</label>
                        <label style="font-size:10px">{{list.sourceCode}}</label>
                    </el-col>
                </el-row>
                <br />
                <el-row class="textCenter">
                    <el-col :span="1" align="center" class="border1 height line-height">序号</el-col>
                    <el-col :span="4" align="center" class="border1 height line-height">精品编号</el-col>
                    <el-col :span="4" align="center" class="border1 height line-height">精品名称</el-col>
                    <el-col :span="2" align="center" class="border1 height line-height">单位</el-col>
                    <el-col :span="3" align="center" class="border1 height line-height">单价</el-col>
                    <el-col :span="3" align="center" class="border1 height line-height">数量</el-col>
                    <el-col :span="3" align="center" class="border1 height line-height">备件费用</el-col>
                    <el-col :span="4" align="center" class="border1 height line-height">备注</el-col>
                </el-row>
                <el-row class="textCenter" v-for="(item, index) in list.partdataInfo" :key="index">
                    <el-col :span="1" align="center" class="border1 height line-height">{{index + 1 }}</el-col> 
                    <el-col :span="4" align="center" class="border1 height line-height">{{item.partNo}}</el-col>
                    <el-col :span="4" align="center" class="border1 height line-height">{{item.partName}}</el-col>
                    <el-col :span="2" align="center" class="border1 height line-height">{{item.partUnit}}</el-col>
                    <el-col :span="3" align="center" class="border1 height line-height">{{item.partPrice}}</el-col>
                    <el-col :span="3" align="center" class="border1 height line-height">{{item.partNumber}}</el-col>
                    <el-col :span="3" align="center" class="border1 height line-height">{{item.partAmount}}</el-col>
                    <el-col :span="4" align="center" class="border1 height line-height">{{item.remark}}</el-col>
                </el-row>
                <br />
                <el-row >
                    <el-col :span="6" align="right" >
                        <label>总价总计：</label>
                        <label>{{this.SALE_AMOUNT}}</label>
                    </el-col>
                </el-row>
                <el-row :gutter="26">
                    <el-col :span="8">
                    <label>退料申请人：</label>
                    <label>{{list.applyEmpId}}</label>
                    </el-col>
                    <el-col :span="8">
                    <label>申请时间：</label>
                    <label>{{list.applyStartTime}}</label>
                    </el-col>
                    <el-col :span="8" align="right">
                    <label>打印时间：</label>
                    <label>{{this.nowTime}}</label>
                    </el-col>
                </el-row>
                </div>
            </div>
            <span slot="footer" class="dialog-footer" style="position">
                <el-button size="small" @click="printf2()">打印</el-button>
            </span>
        </el-dialog>
     </div>
  </div>
</template>
<script>
import carBrand from "@/components/org/carBrand/carBrand";
import mixTable from "@/components/basicComponent/mixTable";
import LookupValue from "@/components/org/LookupValue";
import { doQueryList, doDelete,doPrintQuery} from "@/api/se/repair/sales/boutiqueSalesRe";
import { seApis } from "@/api/graphQLApiList/se";
import { format } from "path";
export default {
  components: {
    mixTable,
    LookupValue,
    carBrand
  },
  filters: {},
  data() {
    return {
      activeName: "first",
      applyDate: [],
      isDisabled: true,
      displayDisabled:true,
      printfDialogVisible:false,
      carBrandKey:'',
      nowTime:"",
      list:{
          phone:'',
          returnApplyOrderCode:'',
          dlrCustNo:'',
          sourceCode:'',
          partdataInfo:[{
              partNo:'',
              partName:'',
              partPrice:'',
              partNumber:'',
              partAmount:'',
              remark:''
          }

          ],
          applyEmpId:'',
          applyStartTime:''
      },
      SALE_AMOUNT:'',//总价总计
      cols: [
        { label: "车辆品牌", codeField: "carBrandCn" },
        { label: "精品销售单号", codeField: "sourceCode" },
        { label: "退料申请单号", codeField: "returnApplyOrderCode" },
        { label: "车牌号", codeField: "carLicense" },
        { label: "申请时间", codeField: "applyDate" },
        { label: "申请人", codeField: "applyEmpId" },
        { label: "VIN码", codeField: "VIN" },
        { label: "精品编码", codeField: "partNo" },
        { label: "精品名称", codeField: "partName" },
        { label: "申请数量", codeField: "returnApplyQty" },
        { label: "退料入库数量", codeField: "returnInQty" },
        { label: "退料状态", codeField: "returnStateName" }
      ],
      queryParams: {
        APIUrl: seApis.seBuReturnApplyOrderQueryAcce.APIUrl,
        InputType: seApis.seBuReturnApplyOrderQueryAcce.InputType,
        ServiceCode: seApis.seBuReturnApplyOrderQueryAcce.ServiceCode,
        dataInfo: {
          dlrId:'',//经销商ID
          beginApplyDate:'',//申请开始时间
          endApplyDate:'',//申请结束时间
          sourceCode:'',//精品销售单号
          returnApplyOrderCode:'',//退料申请单号
          carLicense:'',//车牌号
          vin:'',
          applyEmpId:'',//申请人
          carBrandCode:'',//车辆品牌
          returnApplyOrderId:'',//退料申请单ID
          sourceOrderId:'',//精品销售单ID
          returnState:'',//退货状态
          billType:''//单据类型
        },
        apiQueryRow: [
          'carBrandCn',//	车辆品牌
          'sourceCode',//	精品销售单号
          'returnApplyOrderCode',//	退料申请单号
          'carLicense',//	车牌号
          'applyDate',//	申请时间
          'applyEmpId',//	申请人
          'vin	',//VIN码
          'partNo',//	精品编码
          'partName',//	精品名称
          'returnApplyQty',//	申请数量
          'returnInQty	',//退料入库数量
          'returnStateName',//	退料状态
          'returnApplyOrderId',//	退料申请单id
          'carBrandCode',//	品牌编码
          'updateControlId',//	并发id
          'carId	',//车籍id
          'dlrCustNo',//	客户编码
          'returnState',//	退料状编码
          'oemCode',//	厂商标识
          'groupCode',//	集团标识
          'oemId',//	厂商标识ID
          'groupId',//	集团标识ID
        ]
      }
    };
  },
  created() {
    var now = new Date();
    let applyStartTime = this.$utils.parseTime(now, "{y}-{m}-{d}");
    now.setMonth(now.getMonth() - 1);
    let applyEndTime = this.$utils.parseTime(now, "{y}-{m}-{d}");
    this.applyDate = [];
    this.applyDate.push(applyEndTime);
    this.applyDate.push(applyStartTime);
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.tableList.handleSelectionChange = function(rows) {
        this.currentRow = rows;
        this.$emit("rowClick", this.currentRow);
      };
    });
  },
  methods: {
    //打印-时间
    resetTime() {
      let startTime = new Date();
      console.log(startTime.toLocaleString());
      return startTime.toLocaleString();
    },
    //查询
    fetchData() {
      this.queryParams.dataInfo.applyStartTime = this.applyDate[0];
      this.queryParams.dataInfo.applyEndTime = this.applyDate[1];
      this.$refs.tableList.queryList();
      this.displayDisabled=true;
      this.isDisabled=true;
    },
    //提示作废
    showDelete() {
      debugger;
      if (this.$refs.tableList.currentRow.length == 0) {          
        this.$alert("请选中一行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      } else {
        this.$confirm("是否作废数据?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.delete();
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消"
            });
          });
      }
    },
    //作废
    delete() {
        debugger
      let deleteData = {
        sourceCode: this.$refs.tableList.currentRow[0].sourceCode,
        updateControlId: this.$refs.tableList.currentRow[0].updateControlId
      };
      doDelete(deleteData).then(response => {
        if (
          response.data[seApis.boutiqueSalesReDelete.ServiceCode].result === "1"
        ) {
          this.$message({
            type: "success",
            message: "作废成功!"
          });
          this.fetchData();
        } else {
          this.$message({
            type: "success",
            message: response.data[seApis.boutiqueSalesReDelete.ServiceCode].msg
          });
        }

        this.$refs.tableList.currentRow = [];
        this.$refs.tableList.currentRow.length = 0;
      });
    },
    //打印弹框显示
    printf(){
      this.printfDialogVisible = true;
      this.printfQuery();
      this.nowTime = this.resetTime();
    },
    //打印预览
    printf2() {
      this.$print(this.$refs.print);
    },
    //打印查询
    printfQuery(){
        debugger
        var partAmount=0;
        let printfData = {
            
        returnApplyOrderCode: this.$refs.tableList.currentRow[0].returnApplyOrderCode,
        
      };
      doPrintQuery(printfData).then(response=>{
        if (
          response.data[seApis.boutiqueSalesRePrintf.ServiceCode].result === "1"
        ) {
            this.list=response.data[seApis.boutiqueSalesRePrintf.ServiceCode].rows
            for (var i = 0; i < this.list.partdataInfo.length; i++) {
            partAmount += parseInt(this.list.partdataInfo[i].partAmount);
            }
            this.SALE_AMOUNT = partAmount;
        }
        else{
            this.$message({
            type: "success",
            message: response.data[seApis.boutiqueSalesRePrintf.ServiceCode].msg
          });

        }
      });
    },
    //跳转页面退料申请
    sales(){
           this.$router.push({
               path:'boutiqueSales',
               name:'boutiqueSales',
               params:{

               }
           })
       },

    //重置
    reset() {
      this.applyDate = [];
      this.queryParams.dataInfo.applyStartTime = "";
      this.queryParams.dataInfo.applyEndTime = "";
      this.queryParams.dataInfo.sourceCode = "";
      this.queryParams.dataInfo.returnApplyOrderCode = "";
      this.queryParams.dataInfo.carBrandCode = "";
      this.queryParams.dataInfo.carLicense = "";
      this.queryParams.dataInfo.VIN = "";
      this.queryParams.dataInfo.applyNameNo = "";
    },
    //查询区获取时间
    getTime(val) {
      this.queryParams.dataInfo.applyStartTime = val[0];
      this.queryParams.dataInfo.applyEndTime = val[1];
    },
    //获取车辆品牌code
    getCarBrand(val) {
      this.queryParams.dataInfo.carBrandCode = val;
    },
    //获取申情人code
    getApplyNameNo(val) {
      this.queryParams.dataInfo.applyNameNo = val;
    },
    getChangeCode(row) {
      if (row[0] == null) {
        return;
      }
      if (row[0].returnStateName == "退料申请") {
        this.isDisabled = false;
        this.displayDisabled=false;
      } else {
        this.isDisabled = true;
        this.displayDisabled=false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .border1 {
  border: 1px solid #797979 !important;
}
.height {
  height: 50px;
}
.line-height {
  line-height: 50px;
}
.line-height2 {
  line-height: 25px;
}
</style>