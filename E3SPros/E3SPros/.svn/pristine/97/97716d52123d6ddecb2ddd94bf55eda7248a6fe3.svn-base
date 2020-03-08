<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="fetchData" >查询</el-button>
      <el-button size="small" @click="add">新增</el-button>
      <el-button size="small" @click="modify">修改</el-button>
      <el-button size="small" @click="cancel">作废</el-button>
      <el-button size="small" @click="print">打印</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>
    
    <div class="filter-container filter-params">
      <el-form :model="ruleForm">
          <el-row :gutter="26">
            <el-col :span="22">
              <carBrand :span="6" :code="mainParams.dataInfo.carBrandCode" @changeCode="getBrandCode" />
              <el-col :span="6">
                <label>销售日期</label>
                <el-date-picker
                v-model="mainParams.dataInfo.saleBeginDate"
                @change="changeBeginDate"
                type="date"
                :picker-options="beginPickerOptions"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择日期"
                ></el-date-picker>
              </el-col>
              <el-col :span="6">
                <label>至</label>
                <el-date-picker
                v-model="mainParams.dataInfo.saleEndDate"
                @change="changeEndDate"
                type="date"
                :picker-options="endPickerOptions"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                placeholder="选择日期"
                ></el-date-picker>
              </el-col>
              <el-col :span="6">
                <label>精品销售单号</label>
                <el-input v-model="mainParams.dataInfo.saleNo"></el-input>
              </el-col>
            </el-col>
            <el-col :span="2">
              <el-button :icon="moreBtnIcon" @click="changeToggleParam" class="moreParam">更多</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="26" v-show="toggleParam">
            <el-col :span="22">
              <el-col :span="6">
                <label>客户姓名</label>
                <el-input v-model="mainParams.dataInfo.custName"></el-input>
              </el-col>
              <el-col :span="6">
                <label>车牌号</label>
                <el-input v-model="mainParams.dataInfo.carLicense"></el-input>
              </el-col>
              <el-col :span="6">
                <label>VIN码</label>
                <el-input v-model="mainParams.dataInfo.vin"></el-input>
              </el-col>
              <el-col :span="6">
                <label>销售人员</label>
                <el-select v-model="mainParams.dataInfo.salePerson" placeholder="请选择" @change="getRecallType" clearable>
                  <el-option label="全部" value=""></el-option>
                </el-select> 
              </el-col>
              <el-col :span="6">
                <label>单据状态</label>
                <el-select v-model="mainParams.dataInfo.saleStatus" placeholder="请选择" @change="getRecallType" clearable>
                  <el-option label="全部" value=""></el-option>
                  <el-option label="未结算" value="0"></el-option>
                  <el-option label="已结算" value="1"></el-option>
                  <el-option label="作废" value="2"></el-option>
                  <el-option label="已出库" value="3"></el-option>
                </el-select> 
              </el-col>
            </el-col>
          </el-row>
        </el-form>
    </div>
    
    <div class="filter-container filter-title" ref="resultTitleHeight">销售单</div>
    <mix-table
      ref="mainList"
      :queryParams="mainParams"
      :dynamicTableCols="mainCols"
      :isShowSelect=true
      multipleSelect="selection"
      @rowClick="rowClick"
      :isPaging=true
      :isDialog=true /> 
    <div class="filter-container filter-title" ref="resultTitleHeight">销售单明细</div>
    <mix-table
      ref="detailList"
      :queryParams="detailParams"
      :dynamicTableCols="detailCols"
      :isShowSelect=true
      :isPaging=true
      :isDialog=true /> 
  </div>
</template>

<script>
import { apiSeBuAcceOrder } from "@/api/graphQLApiList/se";
import { seBuAcceOrderQueryFindAll,seBuAcceOrderMutationCancel } from "@/api/se/repair/sales/seBuAcceOrder";
import { requestGraphQL } from "@/api/commonRequest";
import carBrand from "@/components/org/carBrand/carBrand";
import LookupValue from '@/components/org/LookupValue'
import mixTable from "@/components/basicComponent/mixTable"
import config from '@/utils/config'

export default {
  components: {
    carBrand,
    mixTable,
    LookupValue,
    config
  },

  data() {
    return {
      moreBtnIcon: "el-icon-plus",
      toggleParam: false,
      beginPickerOptions: {
        disabledDate: time => {
          let endDateVal = this.mainParams.dataInfo.saleEndDate;
          if (endDateVal) {
            return time.getTime() > new Date(endDateVal).getTime();
          }
        }
      },
      endPickerOptions: {
        disabledDate: time => {
          let beginDateVal = this.mainParams.dataInfo.saleBeginDate;
          if (beginDateVal) {
            return time.getTime() < new Date(beginDateVal).getTime();
          }
        }
      },
      mainParams: {
          APIUrl: apiSeBuAcceOrder.seBuAcceOrderQueryFindAll.APIUrl,
          InputType: apiSeBuAcceOrder.seBuAcceOrderQueryFindAll.InputType,
          ServiceCode: apiSeBuAcceOrder.seBuAcceOrderQueryFindAll.ServiceCode,
          dataInfo: {
            carBrandCode: '',
            saleBeginDate: '',
            saleEndDate: '',
            saleNo: '',
            custName: '',
            carLicense: '',
            vin: '',
            salePerson: '',
            saleStatus: ''
         },
         apiQueryRow: [
           'acceOrderId',
           'carBrandCn',
           'carBrandCode',
           'acceOrderCode',
           'carLicense',
           'custName',
           'linkManTel',
           'saleEmp',
           'acceOrderStateName',
           'isOut',
           'vin',
           'carTypeCode',
           'buyDate',
           'sumDueAmount',
           'factAmount',
           'preAmount',
           'carId',
           'dlrCustNo',
           'carSeriesCode',
           'updateControlId',
           'isEnable',
           'oemCode',
           'groupCode',
           'oemId',
           'groupId',
        ]
      },
      mainCols: [
        { label: '精品销售单id',codeField:"acceOrderId", hidden: true},
        { label: '车辆品牌编码',codeField:"carBrandCode", hidden: true},
        { label: '车辆品牌',codeField:"carBrandCn"},
        { label: '精品销售单号',codeField:"acceOrderCode"},
        { label: '车牌号',codeField:"carLicense"},
        { label: '客户姓名', codeField: "custName"},
        { label: '客户电话', codeField: "linkManTel"},
        { label: '销售人员', codeField: "saleEmp"},
        { label: '单据状态', codeField: "acceOrderStateName"},
        { label: 'VIN码', codeField: "vin"},
        { label: '车型', codeField: "carTypeCode"},
        { label: '销售日期', codeField: "buyDate"},
        { label: '费用合计', codeField: "sumDueAmount"},
        { label: '实收金额', codeField: "factAmount"},
        { label: '费用预估', codeField: "preAmount"},
        { label: '并发id', codeField: "updateControlId", hidden: true},
        { label: '状态', codeField: "isEnable", hidden: true},
        { label: '厂商标识', codeField: "oemCode", hidden: true},
        { label: '集团标识', codeField: "groupCode", hidden: true},
        { label: '厂商标识ID', codeField: "oemId", hidden: true},
        { label: '集团标识ID', codeField: "groupId", hidden: true}
      ],
      detailParams: {
        APIUrl: apiSeBuAcceOrder.seBuAccePartQueryFindAll.APIUrl,
        InputType: apiSeBuAcceOrder.seBuAccePartQueryFindAll.InputType,
        ServiceCode: apiSeBuAcceOrder.seBuAccePartQueryFindAll.ServiceCode,
        dataInfo: {
          acceOrderId: this.rowClickDataId
        },
        apiQueryRow: [
          'accePartId',
          'acceOrderCode',
          'partNo',
          'partName',
          'partPrice',
          'partQty',
          'partAmount',
          'partDiscount',
          'preAmount',
          'outQty',
          'returnQty',
          'applyReturnQty',
          'oemCode',
          'groupCode',
          'oemId',
          'groupId'
        ]
      },
      detailCols: [
        { label: '精品销售备件id',codeField:"accePartId", hidden: true},
        { label: '精品销售单号',codeField:"acceOrderCode"},
        { label: '备件编码',codeField:"partNo"},
        { label: '备件名称',codeField:"partName"},
        { label: '单价',codeField:"partPrice"},
        { label: '备件数量',codeField:"partQty"},
        { label: '备件费用',codeField:"partAmount"},
        { label: '折扣率',codeField:"partDiscount"},
        { label: '费用预估',codeField:"preAmount"},
        { label: '出库数量',codeField:"outQty"},
        { label: '退货数量',codeField:"returnQty"},
        { label: '申请退货数量',codeField:"applyReturnQty"},
        { label: '厂商标识', codeField: "oemCode", hidden: true},
        { label: '集团标识', codeField: "groupCode", hidden: true},
        { label: '厂商标识ID', codeField: "oemId", hidden: true},
        { label: '集团标识ID', codeField: "groupId", hidden: true}
      ],
      uploadHeaders: {
        Authorization: this.$store.getters.token
      },
      //主表选中行
      selectRows: [],
      rowClickData: [],
      rowClickDataId: ''
    }
  },
  created() {
   
  },
  methods:{
    fetchData(){
      this.$refs.mainList.queryList();
    },
    rowClick(val) {
      this.rowClickData = val;
      this.rowClickDataId = val[0].acceOrderId;
      this.$refs.detailList.queryList();
    },
    //重置
    reset() {
      this.mainParams.dataInfo.carBrandCode = "";
      this.mainParams.dataInfo.saleBeginDate = "";
      this.mainParams.dataInfo.saleEndDate = "";
      this.mainParams.dataInfo.saleNo = "";
      this.mainParams.dataInfo.custName = "";
      this.mainParams.dataInfo.carLicense = "";
      this.mainParams.dataInfo.vin = "";
      this.mainParams.dataInfo.salePerson = "";
      this.mainParams.dataInfo.saleStatus = "";
    },
    //新增
    add() {
      this.$router.push({
        path: "/se/seBuAcceOrderMaintain",
      });
    },
    //修改
    modify() {
      this.selectRows = this.$refs.mainList.currentRow;
      if (this.selectRows.length < 1) {
        this.$message({
          type: 'warning',
          message: '请先选择表格数据后再修改！'
        });
        return;
      }
      if (this.selectRows.length > 1) {
        this.$message({
          type: 'warning',
          message: '请选择一行数据进行修改！'
        });
        return;
      }
      // if (this.rowClickData.length < 1) {
      //   this.$message({
      //     type: 'warning',
      //     message: '请先选择表格数据后再修改！'
      //   });
      //   return;
      // }  
      this.$router.push({
        name: "seBuAcceOrderMaintain",
        params: {
          the_data: this.selectRows
        }
      });
    },
    //作废
    cancel() {
      if (this.rowClickData.length < 1) {
        this.$message({
          type: 'warning',
          message: '请先选择表格数据后再作废！'
        });
        return;
      }
      if (this.rowClickData[0].acceOrderStateName == '已结算') {
        this.$message({
          type: 'warning',
          message: '该精品销售单已结算！'
        });
        return;   
      }
      this.$alert('确定作废吗？', '信息提示', {
        confirmButtonText: '确定',
        type: 'warning',
        callback: action => {
          var cancelParam = {
            acceOrderId: this.rowClickData[0].acceOrderId,
            updateControlId: this.rowClickData[0].updateControlId,
            acceOrderStateName: this.rowClickData[0].acceOrderStateName
          };
          seBuAcceOrderMutationCancel(cancelParam).then(response => {
            var resData = response.data[apiSeBuAcceOrder.seBuAcceOrderMutationCancel.ServiceCode];
            if (resData.result === "1" ) {
              this.$message({
                type: 'success',
                message: '作废成功！'
              });
              this.fetchData();
            } else {
              this.$message({
                type: 'warning',
                message: '作废失败！'
              });
            }
          });
        }
      });  
    },
    //打印
    print() {
      
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
      console.log(this.toggleParam);
      if (this.toggleParam) {
        this.moreBtnIcon = "el-icon-minus";
      } else {
        this.moreBtnIcon = "el-icon-plus";
      }
    },
    getChargePerson(val) {
      this.ruleForm.personUseId = val;
    },
    getRecallType(val) {
      this.mainParams.dataInfo.recallType = val;
    },
    changeBeginDate(val) {
      this.mainParams.dataInfo.saleBeginDate = val;
    },
    changeEndDate(val) {
      this.mainParams.dataInfo.saleEndDate = val;
    },
    getRecallStatus(val) {
      this.mainParams.dataInfo.recallStatus = val;
    },
    getFinishStatus(val) {
      this.mainParams.dataInfo.finishStatus = val;
    },
    getAssignStatus(val) {
      this.mainParams.dataInfo.assignStatus = val;
    }
 }
};
</script>
