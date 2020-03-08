<template>
  <div>
    <el-dialog
      :visible.sync="wiHistoryRecordsVisible"
      width="74%"
      :title="showTitle"
      @close="closePage"
    >
      <div class="filter-container filter-title" style="margin-top:0px;">客户/车辆信息</div>
      <div class="filter-container filter-params">
            <el-row :gutter="28">
               <el-col :span="7">
                 <label>VIN码</label>
                 <el-input v-model="custCarInfo.vin" placeholder :disabled="true"></el-input>
               </el-col>
               <el-col :span="7">
                 <label>车辆品牌</label>
                 <el-input v-model="custCarInfo.carBrandCn" placeholder :disabled="true"></el-input>
               </el-col>
               <el-col :span="7">
                 <label>车系</label>
                 <el-input v-model="custCarInfo.carSeriesName" placeholder :disabled="true"></el-input>
               </el-col>
             </el-row>
             <el-row :gutter="28" style="margin-top:5px;">
               <el-col :span="7">
                 <label>车型</label>
                 <el-input v-model="custCarInfo.carTypeCode" :disabled="true"></el-input>
               </el-col>
               <el-col :span="7">
                 <label>车牌号</label>
                 <el-input v-model="custCarInfo.carLicense" :disabled="true"></el-input>
               </el-col>
               <el-col :span="7">
                 <label>客户名称</label>
                 <el-input v-model="custCarInfo.custName" :disabled="true"></el-input>
               </el-col>
             </el-row>
              <el-row :gutter="28" style="margin-top:5px;">
               <el-col :span="7">
                 <label>客户电话</label>
                 <el-input v-model="custCarInfo.custTel" :disabled="true"></el-input>
               </el-col>
             </el-row>
      </div>
      <div class="filter-container filter-title" style="margin-top:0px;">查询条件</div>
      <div class="filter-container filter-params">
        <el-row :gutter="28">
               <el-col :span="7">
                 <label>回厂日期</label>
                 <el-date-picker
                 v-model="formField.repairTimeBeg"
                 type="date"
                 @change="changeRepairTimeBeg"
                 :picker-options="repairTimeBegOptions"
                 placeholder="选择日期">
                 </el-date-picker>
               </el-col>
               <el-col :span="7">
                 <label>至</label>
                 <el-date-picker
                 v-model="formField.repairTimeEnd"
                 type="date"
                 @change="changeRepairTimeEnd"
                 :picker-options="repairTimeEndOptions"
                 placeholder="选择日期">
                 </el-date-picker>
               </el-col>
               <!--维修记录-->
               <!--<LookupValue :span="6" :isMul="false" v-model="formField.repairType" :isShowLabel="true" :key="repairTypeKey" :lookuptype="repairTypeLookupType" :labelName='repairTypeLableName'  @changeCode="getRepairTypeValue" />-->
               <el-col :span="7">
                 <label>维修记录</label>
                 <el-select
                 collapse-tags
                 filterable
                 v-model="formField.type"
                 placeholder="请选择"
                 size="small"
                 >
                 <el-option label="本店维修" value="0"></el-option>
                 <el-option label="其他店维修" value="1"></el-option>
                 </el-select>
               </el-col>
         </el-row>
         <el-row :gutter="28">
               <el-col :span="7">
                 <label>经销商</label>
                 <el-input
                v-model="formField.dlrId"
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
                @focus="openComQueChoMu"
              />
              <!--经销商弹框-->
              <seComQueryChoDlrMul  ref="seComQueryChoDlrMul" @changeCode="getComQueChoMu"/>
              <!--<seComQueChoMu ref="seComQueChoMu" :seComQueChoMuDlrVisible="seComQueChoMuDlrVisible" @sentCode="getComQueChoMu" @close="closeComQueChoMu" />-->
             </el-col>
             <el-col :span="7">
              <el-checkbox label="反结算过单据" v-model="formField.isCancelBalance"></el-checkbox>
            </el-col>
             </el-row>
      </div>
      <div class="filter-container filter-button">
          <el-button type="primary" size="small" @click="textQuery">查询</el-button>
          <el-button size="small">导出</el-button>
          <el-button size="small" @click="openSeRepairReportDetail">工单预览</el-button>
          <!--<el-button size="small" @click="openCheckItem">查看定期保养检查项</el-button>-->
          <el-button size="small" @click="reset">重置</el-button>
      </div>

      <el-table
        :data="dataList"
        element-loading-text="Loading"
        v-loading="listLoading"
        border
        fit
        stripe
        highlight-current-row
        :header-cell-style="tableHeaderRowClassName"
         @row-click="rowClick"
        height="260px"
        style="margin-top: 5px;"
      >
        <el-table-column align="center" label="序号" width="60">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column align="center" label="维修专营店名称" width="130">
          <template slot-scope="scope">{{ scope.row.dlrShortName }}</template>
        </el-table-column>
        <el-table-column align="center" label="派工单号" width="150">
          <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template>
        </el-table-column>
        <el-table-column align="center" label="回厂日期" width="150">
          <template slot-scope="scope">{{ scope.row.repairTime }}</template>
        </el-table-column>
        <el-table-column align="center" label="交车日期" width="150">
          <template slot-scope="scope">{{ scope.row.deliveryDate }}</template>
        </el-table-column>
        <el-table-column align="center" label="行驶里程" width="160">
          <template slot-scope="scope">{{ scope.row.mileage }}</template>
        </el-table-column>
        <el-table-column align="center" label="报修人" width="110">
          <template slot-scope="scope">{{ scope.row.repairMan }}</template>
        </el-table-column>
        <el-table-column align="center" label="报修电话" width="130">
          <template slot-scope="scope">{{ scope.row.repairTel }}</template>
        </el-table-column>
        <el-table-column align="center" label="服务代表" width="100">
          <template slot-scope="scope">{{ scope.row.saName }}</template>
        </el-table-column>
        <el-table-column align="center" label="挂账费用" width="100">
          <template slot-scope="scope">{{ scope.row.runupAmount }}</template>
        </el-table-column>
        <el-table-column align="center" label="故障描述" width="150">
          <template slot-scope="scope">{{ scope.row.csDesc }}</template>
        </el-table-column>
      </el-table>
    </el-dialog>
  <!--派工结算明细弹窗-->
  <seRepairReportDetail ref="seRepairReportDetail" :seRepairReportDetailVisible="seRepairReportDetailVisible" @closePage="closeSeRepairDetailPage"></seRepairReportDetail>
  <!--维修履历详情弹窗-->
  <seBuRepairHistoryQueryDetailMore ref="seBuRepairHistoryQueryDetailMore" :detailVisible="detailMoreVisible" @ClosePage="closeDetailMore"></seBuRepairHistoryQueryDetailMore>
  </div>
</template>

<script>
import { doQueryList } from "@/api/se/basedata/repair/seRepairReportMaintainVehicle";       
import { apiSeReport } from "@/api/graphQLApiList/se";
import { apiBuRepairHistoryQuery } from '@/api/graphQLApiList/se'
import { requestGraphQL } from '@/api/commonRequest'
import seComQueryChoDlrMul from "@/components/se/seComQueryChoDlrMul"
import seRepairReportDetail from "@/views/se/public/repairHistory/seRepairReportDetail"
import seBuRepairHistoryQueryDetailMore from "@/views/se/public/repairHistory/seBuRepairHistoryQueryDetailMore"
import LookupValue from '@/components/org/LookupValue'

export default {
  components: {
    seComQueryChoDlrMul,
    seRepairReportDetail,
    seBuRepairHistoryQueryDetailMore,
    LookupValue
  },
  props: {
    wiHistoryRecordsVisible: {
      type:Boolean,
      default: function() {
        return false;
      }
    },
    custCarData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
        showTitle: '历史维修记录',
        repairTypeKey: 'a',
        //维修记录值列表lableName
        repairTypeLableName: '维修记录',
        //维修记录值列表编码
        repairTypeLookupType: 'SE0174',
        //表格数据
        dataList: null,
        tableHeaderRowClassName({ row, rowIndex }) {
            if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:30px;'
        }
      },
      //送修开始时间
      repairTimeBegOptions: {
         disabledDate: time => {
           let endDateVal = this.formField.repairTimeEnd
           if (endDateVal) {
             return time.getTime() > new Date(endDateVal).getTime();
           }
         }
      },
      //送修结束时间
      repairTimeEndOptions: {
         disabledDate: time => {
           let beginDateVal = this.formField.repairTimeBeg
           if (beginDateVal) {
             return time.getTime() < new Date(beginDateVal).getTime();
           }
         }
      },
        //客户车辆信息
        custCarInfo: {
            vin: '',
            carBrandCn: '',
            carSeriesName: '',
            carTypeCode: '',
            carLicense: '',
            custName: '',
            custTel: ''
        },
        //查询区条件
        formField: {
            repairTimeBeg: '',
            repairTimeEnd: '',
            repairType: '',
            dlrId: [],
            isCancelBalance: '',
        },
        //显示隐藏经销商弹框
        seComQueChoMuDlrVisible: false,
        //显示隐藏派工明细弹窗
        seRepairReportDetailVisible: false,
        //显示隐藏定期保养检查项弹框
        //seCheckItemVisible: false,
        //显示隐藏维修履历详情弹窗
        detailMoreVisible: false,
        //点击行数据
        rowClickData: {},
        //要传送到派工结算明细弹窗的派工单号、车牌号、客户姓名的数据
        sendData: {
          repairOrderCode: '',
          carLicense: '',
          custName: ''
        }
    };
  },
  created() {
    this.textQuery(); 
  },
  watch:{
    formField(val){
      this.repairTypeKey = this.repairTypeKey + 1;
    }
  },
  methods: {
      //回厂开始时间
      changeRepairTimeBeg(val) {
        this.formField.repairTimeBeg = val
      },
      //回厂结束时间
      changeRepairTimeEnd(val) {
        this.formField.repairTimeEnd = val
      },
      //获取维修记录
      getRepairTypeValue(val) {
        this.formField.repairType = val
      },
      //打开经销商弹框
      openComQueChoMu() {
          //this.seComQueChoMuDlrVisible = true
          this.$refs.seComQueryChoDlrMul.open();
      },
      //关闭经销商弹窗
      // closeComQueChoMu(val) {
      //     this.seComQueChoMuDlrVisible = val
      // },
      //打开派工单明细弹窗/维修履历详情弹窗
      openSeRepairReportDetail() {
        if (JSON.stringify(this.rowClickData) == '{}') {
          this.$alert('请选择一条派工单！', '信息提示', {
                confirmButtonText: '确定',
                type: 'warning',
                callback: action => {
                }
            });
        } else {
          this.seRepairReportDetailVisible = true;
          this.sendData.repairOrderCode = this.rowClickData.repairOrderCode;
          this.sendData.carLicense = this.custCarInfo.carLicense;
          this.sendData.custName = this.custCarInfo.custName;
          this.$refs.seRepairReportDetail.getData(this.sendData)
        }   
      },
      
      //关闭派工单明细弹窗
      closeSeRepairDetailPage(val) {
          this.seRepairReportDetailVisible = val
      },
      //关闭维修履历详情弹窗
      closeDetailMore() {
          this.detailMoreVisible = false
      },
      //查询区获取选中的经销商
      getComQueChoMu(val) {
        // this.seComQueChoMuDlrVisible = false;
        // for(let i = 0; i <val.length; i++){
        //   if(val[i].hasOwnProperty('children')){
        //     val.splice(i,1)
        //     for (let j = 0; j < val.length; j++) {
        //       this.formField.dlrShortName.push(val[j].label)
        //     }
        //     console.log(this.formField)
        //   }
        // }
        for(let i = 0; i <val.length; i++) {
          this.formField.dlrId.push(val[i].dlrFullName)
        }
      },
      //获取传过来的客户车辆信息
      getCustCarInfo(val) {
        this.custCarInfo = val
      },
      textQuery(val) {
        const that = this
        that.listLoading = true
        let queryObj = {
          // api配置
          apiConfig: apiBuRepairHistoryQuery.seBuRepairHistoryQuery,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
              apiQueryRow:['dlrShortName','repairOrderCode','repairTime','deliveryDate','mileage','repairMan','repairTel','saName','runupAmount','csDesc']
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.formField
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
          if(response.data[apiBuRepairHistoryQuery.seBuRepairHistoryQuery.ServiceCode].result === '1' 
          && response.data[apiBuRepairHistoryQuery.seBuRepairHistoryQuery.ServiceCode].rows != ''){
              that.dataList = response.data[apiBuRepairHistoryQuery.seBuRepairHistoryQuery.ServiceCode].rows;
              that.listLoading = false;
            }
        })
    },
    //单击表格行
    rowClick(row,event) {
      this.rowClickData = row
    },
    //重置
    reset() {
        this.formField = {
            repairTimeBeg: '',
            repairTimeEnd: '',
            repairType: '',
            dlrId: [],
            isCancelBalance: '',
        };
        //this.formField.isCancelBalance = "";
    },
    //关闭弹框
    closePage() {
      this.$emit("closePage", false);
    },
  }
};
</script>
<style lang="scss" scoped>
/deep/.el-input__inner {
    height: 28px;
    line-height: 28px;
}
/deep/.el-dialog .el-dialog__header {
    height: 0px;
}
/deep/.filter-title {
    margin-top: 0px;
}
/deep/.filter-params .el-col {
    margin-bottom: 3px;
}
</style>