<template>
  <section class="carType">
    <el-dialog
      :title="thimeTitle"
      :visible.sync="seCarOwnerCustModalVisible"
      :close-on-click-modal="false"
      :append-to-body="true"
      @close="close"
      width="900px"
    >
      <el-row>
        <div class="filter-container filter-title">查询条件</div>
        <div class="filter-container filter-params">
          <el-row>
            <!-- <carBrand :span="8" :code="listQuery.dataInfo.carBrandCode" @changeCode="getBrandCode"></carBrand> -->
            <el-col :span="8" class="margin-b-10">
              <label class="margin-r-0">车牌号</label>
              <el-input v-model="listQuery.dataInfo.carLicenseNo" size="small" />
            </el-col>
            <el-col :span="8" class="margin-b-10">
              <label class="margin-r-0">VIN</label>
              <el-input v-model="listQuery.dataInfo.vin" size="small" />
            </el-col>
            <el-col :span="8" class="margin-b-10">
              <label class="margin-r-0">客户名称</label>
              <el-input v-model="listQuery.dataInfo.custName" size="small" />
            </el-col>
            <el-col :span="8" class="margin-b-10">
              <label class="margin-r-0">客户电话</label>
              <el-input v-model="listQuery.dataInfo.phone" size="small" />
            </el-col>
            <el-col :span="8" class="margin-b-10">
              <label class="margin-r-0">发动机号</label>
              <el-input v-model="listQuery.dataInfo.engineNo" size="small" />
            </el-col>
            <el-col class="margin-b-0">
              <div class="filter-container filter-button">
                <el-col :span="3" :offset="2" class="textalign-l margin-b-0">
                  <el-checkbox class="margin-r-0" v-model="isStoreCar" size="small" />在库车
                </el-col>
                <el-col :span="4" :offset="4" class="textalign-l margin-b-0">
                  <el-checkbox class="margin-r-0" v-model="isAccurate" size="small" />精确查询
                </el-col>
                <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
                <el-button size="small" @click="select">选择客户</el-button>
                <el-button size="small" @click="reset">重置</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="filter-container filter-title">查询结果</div>
        <el-table
          :data="list"
          v-loading="listLoading"
          element-loading-text="Loading"
          border
          stripe
          max-height="230"
          style="width: 100%"
          :header-cell-style="tableHeaderRowClassName"
          highlight-current-row
          @row-click="rowClickSelect"
          @select="tableListSelect"
          ref="chooseWiTable"
          @select-all="tableListSelect"
        >
          <el-table-column align="center" label="序号" width="55">
            <template slot-scope="scope">{{ scope.$index + 1 }}</template>
          </el-table-column>
          <el-table-column v-if="this.isMul" type="selection" width="50" label="选择+" />
          <el-table-column label="车辆品牌" width="120">
            <template slot-scope="scope">{{ scope.row.carBrandCn }}</template>
          </el-table-column>
          <el-table-column label="客户名称" width="100">
            <template slot-scope="scope">{{ scope.row.custName }}</template>
          </el-table-column>
          <el-table-column label="客户电话" width="120">
            <template slot-scope="scope">{{ scope.row.phone }}</template>
          </el-table-column>
          <el-table-column label="车牌号" width="120">
            <template slot-scope="scope">{{ scope.row.carLicenseNo }}</template>
          </el-table-column>
          <el-table-column label="车型编码" width="120">
            <template slot-scope="scope">{{ scope.row.carTypeCode }}</template>
          </el-table-column>
          <el-table-column label="VIN码" width="180">
            <template slot-scope="scope">{{ scope.row.vin }}</template>
          </el-table-column>
          <el-table-column label="电动机号" width="120">
            <template slot-scope="scope">{{ scope.row.engineNo }}</template>
          </el-table-column>
          <el-table-column label="服务车系编码" width="130">
            <template slot-scope="scope">{{ scope.row.carSeriesCode }}</template>
          </el-table-column>
          <el-table-column label="服务车型编码" width="130">
            <template slot-scope="scope">{{ scope.row.carTypeCode }}</template>
          </el-table-column>
          <el-table-column label="颜色" width="120">
            <template slot-scope="scope">{{ scope.row.carColorName }}</template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next, sizes, ->, total"
          prev-text="上一页"
          next-text="下一页"
          :page-sizes="[10, 20, 30]"
          :page-size="10"
          :total="list?list.length:0"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-row>
    </el-dialog>
    <!-- <div>
            <el-dialog
            title="预约单"
            :visible.sync="ReserListVisible"
            width="90%"
            >
                <el-table
                        :data="ReserList"
                        element-loading-text="Loading"
                        border
                        stripe
                        max-height="230"
                        style="width: 100%"
                        :header-cell-style="tableHeaderRowClassName"
                        highlight-current-row
                        ref="chooseReListTable"
                        >
                            <el-table-column align="center" label="序号" width="55">
                                <template slot-scope="scope">
                                {{ scope.$index + 1 }}
                                </template>
                            </el-table-column>
                            <el-table-column label="预约单号">
                                <template slot-scope="scope">
                                {{ scope.row.carBrandCn }}
                                </template>
                            </el-table-column>
                            <el-table-column label="预约回店时间">
                                <template slot-scope="scope">
                                {{ scope.row.custName }}
                                </template>
                            </el-table-column>
                            <el-table-column label="预约状态">
                                <template slot-scope="scope">
                                {{ scope.row.phone }}
                                </template>
                            </el-table-column>
                            <el-table-column label="车牌号">
                                <template slot-scope="scope">
                                {{ scope.row.carLicenseNo }}
                                </template>
                            </el-table-column>
                             <el-table-column label="车型编码">
                                <template slot-scope="scope">
                                {{ scope.row.carTypeCode }}
                                </template>
                            </el-table-column>
                            <el-table-column label="客户电话">
                                <template slot-scope="scope">
                                {{ scope.row.vin }}
                                </template>
                            </el-table-column>
                            <el-table-column label="客户名称">
                                <template slot-scope="scope">
                                {{ scope.row.engineNo }}
                                </template>
                            </el-table-column>
                             <el-table-column label="预约人">
                                <template slot-scope="scope">
                                {{ scope.row.carSeriesCode }}
                                </template>
                            </el-table-column>
                            <el-table-column label="预约人电话">
                                <template slot-scope="scope">
                                {{ scope.row.carTypeCode }}
                                </template>
                            </el-table-column>
                            <el-table-column label="VIN码">
                                <template slot-scope="scope">
                                {{ scope.row.carColorName }}
                                </template>
                            </el-table-column>
                            <el-table-column label="车型">
                                <template slot-scope="scope">
                                {{ scope.row.carColorName }}
                                </template>
                            </el-table-column>
                            <el-table-column label="预约时间">
                                <template slot-scope="scope">
                                {{ scope.row.carColorName }}
                                </template>
                            </el-table-column>
                        </el-table>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="closeReListDia">确 定</el-button>
                </span>
            </el-dialog>
        </div>
        <div>
            <el-dialog
            title="召回专案"
            :visible.sync="RecallProjectVisible"
            width="60%"
            >
                 <el-table
                        :data="recallProList"
                        element-loading-text="Loading"
                        border
                        stripe
                        max-height="230"
                        style="width: 100%"
                        :header-cell-style="tableHeaderRowClassName"
                        highlight-current-row
                        ref="chooseRecallProTable"
                        >
                            <el-table-column align="center" label="序号" width="55">
                                <template slot-scope="scope">
                                {{ scope.$index + 1 }}
                                </template>
                            </el-table-column>
                            <el-table-column type="selection" width="55"></el-table-column>
                            <el-table-column label="召回/服务活动">
                                <template slot-scope="scope">
                                {{ scope.row.carBrandCn }}
                                </template>
                            </el-table-column>
                            <el-table-column label="召回专案主题">
                                <template slot-scope="scope">
                                {{ scope.row.custName }}
                                </template>
                            </el-table-column>
                            <el-table-column label="类型">
                                <template slot-scope="scope">
                                {{ scope.row.phone }}
                                </template>
                            </el-table-column>
                            <el-table-column label="备注">
                                <template slot-scope="scope">
                                {{ scope.row.carLicenseNo }}
                                </template>
                            </el-table-column>
                        </el-table>
                <span slot="footer" class="dialog-footer">
                    <el-button  @click="RecallProjectVisible =false">取 消</el-button>
                    <el-button type="primary" @click="closeRecallProDia">确 定</el-button>
                </span>
            </el-dialog>
    </div>-->
  </section>
</template>
<script>
import { doPaChoosePartQuery, doFetchPaType } from "@/api/se/paChoosePart";
import { seApis } from "@/api/graphQLApiList/se";
import carBrand from "@/components/org/carBrand/carBrand";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  components: {
    carBrand
  },
  props: {
    seCarOwnerCustModalVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    code: {
      type: String,
      default: function() {
        return "";
      }
    },
    isMul: {
      type: Boolean,
      default: function() {
        return true;
      }
    }
  },
  data() {
    return {
      ReserListVisible: false,
      RecallProjectVisible: false,
      codeInside: this.code,
      thimeTitle: "客户多选",
      listLoading: false,
      carTypeVisible: false,
      list: [],
      ReserList: [],
      selectTableList: [],
      recallProList: [],
      phone: null,
      optionDatas: [],
      initData: {
        token: null,
        OEM_CODE: null,
        GROUP_CODE: null,
        Car_Brand_Code: null,
        CAR_BRAND_CN: null,
        CAR_BRAND_EN: null
      },
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        dataInfo: {
          dlrId: "",
          carLicenseNo: "",
          vin: "",
          custName: "",
          phone: "",
          engineNo: "",
          carBrandCode: "",
          isStoreCar: ""
        }
      },
      isStoreCar: false,
      isAccurate: false,
      QueryBack: {
        dataInfo: {
          // oemCode: this.$store.getters.orgInfo.OEM_CODE,
          // groupCode: this.$store.getters.orgInfo.GROUP_CODE,
          dlrId: "",
          carId: "",
          dlrCustNo: ""
        }
      },
      QueryBackData: [],
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    //this.fetchData()
    this.isMul
      ? (this.thimeTitle = "客户多选")
      : (this.thimeTitle = "客户单选");
  },
  methods: {
    getBrandCode(val) {
      console.log(val);
      this.listQuery.carBrandCode = val;
    },
    fetchData(page) {
      this.listQuery.dataInfo.dlrId = this.$store.getters.orgInfo.DLR_ID;
      this.listQuery.dataInfo.isStoreCar = this.isStoreCar === true ? "1" : "0";
      this.listQuery.dataInfo.isAccurate = this.isAccurate === true ? "1" : "0";
      this.queryCarOwnerCustInfo(
        this.listQuery.pageSize,
        page || this.listQuery.pageIndex,
        this.listQuery.dataInfo
      );
    },
    queryCarOwnerCustInfo(pageSize, pageIndex, dataInfo) {
      this.listLoading = true;
      const that = this;
      const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfo: " +
          seApis.seCommonQueryCarOwnerCustInfo.InputType +
          ")",
        // 请求API
        apiUrl: seApis.seCommonQueryCarOwnerCustInfo.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: seApis.seCommonQueryCarOwnerCustInfo.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            // 表格中台返回网格的字段
            apiQueryRow: [
              "carBrandCn",
              "carBrandCode",
              "carColorName",
              "carId",
              "carLicenseNo",
              "carOwnerId",
              "carSeriesCode",
              "carSeriesName",
              "carTypeCode",
              "carTypeName",
              "createdDate",
              "custName",
              "dlrCustNo",
              "engineNo",
              "phone",
              "vin",  
              "carOwnerId"
            ]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: pageSize,
          pageIndex: pageIndex,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: dataInfo
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        console.log(response);
        if (
          response.data[seApis.seCommonQueryCarOwnerCustInfo.ServiceCode]
            .result === "1"
        ) {
          that.list =
            response.data[
              seApis.seCommonQueryCarOwnerCustInfo.ServiceCode
            ].rows;
        } else {
          // 保存失败
          // this.sendCode('0')
          this.$message({
            message:
              "查询失败：" +
              response.data[seApis.seCommonQueryCarOwnerCustInfo.ServiceCode]
                .msg,
            type: "warn",
            uration: 2000
          });
        }
        that.listLoading = false;
      });
    },
    queryseCustAndCarQueryBack(dataInfo) {
      const that = this;
      const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($dataInfo: " + seApis.seCustAndCarQueryBack.InputType + ")",
        // 请求API
        apiUrl: seApis.seCustAndCarQueryBack.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: seApis.seCustAndCarQueryBack.ServiceCode,
            apiServiceParam: "(dataInfo: $dataInfo)",
            // 表格中台返回网格的字段
            apiQueryRow: [
              "dlrCustNo",
              "carId",
              "dlrId",
              "dlrCustNo",
              "carOwner.carOwnerId",
              "carOwner.dlrCustNo",
              "carOwner.weiCode",
              "carOwner.custName",
              "carOwner.phone",
              "carOwner.custClassCode",
              "carOwner.addr",
              "carOwner.mileage",
              "carOwner.remark",
              "carOwner.complain",
              "carOwner.birthDate",
              "carUser.dlrCustNo",
              "carUser.custName",
              "carUser.phone",
              "carUser.addr",
              "carInfo.vin",
              "carInfo.carLicense",
              "carInfo.carBrandCode",
              "carInfo.carBrandCn",
              "carInfo.carSeriesCode",
              "carInfo.carSeriesName",
              "carInfo.carTypeCode",
              "carInfo.carTypeName",
              "carInfo.carKeyNo",
              "carInfo.engineNo",
              "carInfo.carColorName",
              "carInfo.deliveryDate",
              "carInfo.invoiceDate",
              "carInfo.saleDate",
              "carInfo.isWaterCar",
              "carInfo.etptCar",
              "carInfo.exchangeFlag",
              "carInfo.mileage",
              "carInfo.custComeTypeName",
              "carInfo.offlineDate"
            ]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: dataInfo
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        console.log(response.data[seApis.seCustAndCarQueryBack.ServiceCode]);
        that.QueryBackData =
          response.data[seApis.seCustAndCarQueryBack.ServiceCode].rows;
        that.$emit(
          "sentCarOwnerCustModal",
          this.QueryBackData,
          this.selectTableList
        );
      });
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    getCarTypeCode(val) {
      this.carTypeVisible = false;
      this.listQuery.isEnable = val;
    },
    sendData(data) {
      if (data === null || data === undefined || data === "") {
        data = [];
      }
      this.$emit("seChooseWiData", data);
    },
    carTypeModal() {
      this.carTypeVisible = true;
    },
    tableListSelect(selection) {
      this.selectTableList = selection;
    },
    select() {
      if (this.selectTableList.length === 0) {
        this.$alert("您未选中数据！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      } else {
        this.sentCode();
      }
    },
    // fecthUndoWordOrder(){
    //     //do查询该车是否有未完成施工单（未交车）

    // },
    // vUndoWordOrder(){
    //     //do校验该车是否有未完成施工单（未交车）
    //     let data = 'SVSDBSDHSBSDB'

    //     if(true){
    //         this.$confirm('该客户存在未完成的施工单：'+ data +', 是否继续?', '提示', {
    //                 confirmButtonText: '是',
    //                 cancelButtonText: '否',
    //                 type: 'warning'
    //                 }).then(() => {
    //                  this.vAppoint()
    //                 }).catch(() => {
    //                     //do
    //                 });
    //         }else{
    //             this.vAppoint()
    //         }
    // },
    // fecthAppoint(){
    //     //do查询该车是否有预约信息

    // },
    // vAppoint(){
    //     //do校验该车是否有预约信息
    //     let data = 'SVSDBSDHSBSDB'
    //     if(true){
    //         this.$confirm('该客户存在预约信息，是否加载预约信息？', '提示', {
    //                 confirmButtonText: '是',
    //                 cancelButtonText: '否',
    //                 type: 'warning'
    //                 }).then(() => {
    //                     this.ReserListVisible = true
    //                  //do
    //                 }).catch(() => {
    //                     //do
    //                     this.vRecallProject()
    //                 });
    //         }else{
    //             this.vRecallProject()
    //         }
    // },
    // fecthRecallProject(){
    //     //do是否有召回专案信息

    // },
    // vRecallProject(){
    //     //do校验该车是否有召回专案信息
    //     if(true){
    //         this.RecallProjectVisible = true
    //     }else{
    //         this.sentCode()
    //     }
    // },
    // closeReListDia(){
    //     this.ReserListVisible = false
    //     this.vRecallProject()
    // },
    // closeRecallProDia(){
    //         this.sentCode()
    // },
    sentCode() {
      this.QueryBack.dataInfo.dlrId = this.$store.getters.orgInfo.DLR_ID;
      if (this.isMul) {
        //多选
        let arr = [];
        let arr1 = this.selectTableList;
        for (let i = 0; i < arr1.length; i++) {
          arr[i] = arr1[i].dlrCustNo;
        }
        this.QueryBack.dataInfo.dlrCustNo = arr.join(",");
        this.queryseCustAndCarQueryBack(this.QueryBack.dataInfo);
      } else {
        // 单选
        let obj1 = this.selectTableList;
        this.QueryBack.dataInfo.carId = obj1.carId;
        this.QueryBack.dataInfo.dlrCustNo = obj1.dlrCustNo;
        this.queryseCustAndCarQueryBack(this.QueryBack.dataInfo);
      }
    },
    close() {
      this.$emit("close", false);
    },
    reset() {
      this.listQuery.dataInfo.carLicenseNo = "";
      this.listQuery.dataInfo.vin = "";
      this.listQuery.dataInfo.custName = "";
      this.listQuery.dataInfo.phone = "";
      this.listQuery.dataInfo.engineNo = "";
      // this.listQuery.dataInfo.carBrandCode=""
      this.isStoreCar = false;
      this.isAccurate = false;
    },
    rowClickSelect(row, event) {
      this.selectTableList = row;
    },
    resetList() {
      this.list = [];
      this.selectTableList = [];
      this.reset();
    }
  }
};
</script>
<style scoped>
.margin-r-0 {
  margin-right: 0;
}
.margin-b-10 {
  margin-bottom: 10px;
}
.margin-b-0 {
  margin-bottom: 0;
}
.padding-l-10 {
  padding-left: 10px;
}
.textalign-l {
  text-align: left;
}
.color_ {
  color: #169bd5;
}
.dis-IB {
  display: inline-block;
}
</style>
