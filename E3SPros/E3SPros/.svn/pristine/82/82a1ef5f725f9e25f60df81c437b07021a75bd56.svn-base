<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="fetchData" >查询</el-button>
      <el-button size="small" @click="add">新增</el-button>
      <el-button size="small" @click="modify">修改</el-button>
      <el-button size="small" @click="combine">组合套餐</el-button>
      <el-button size="small" @click="isEnable">启/停用</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>
    
    <div class="filter-container filter-params">
      <el-form :model="ruleForm">
          <el-row :gutter="26">
            <el-col :span="22">
              <el-col :span="6">
                <label>精品套餐编码</label>
                <el-input v-model="queryParams.dataInfo.acceCode" placeholder="请输入" size="small" />
              </el-col>
              <el-col :span="6">
                <label>精品项目名称</label>
                <el-input v-model="queryParams.dataInfo.acceName" placeholder="请输入" size="small" />
              </el-col>
              <el-col :span="6">
                <label>精品属性</label>
                <el-select v-model="queryParams.dataInfo.acceType" placeholder="请选择" @change="getRecallStatus" clearable>
                  <el-option label="全部" value=""></el-option>
                  <el-option label="精品套餐" value="1"></el-option>
                  <el-option label="精品项目" value="0"></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <label>状态</label>
                <el-select v-model="queryParams.dataInfo.isEnable" placeholder="请选择" @change="getRecallStatus" clearable>
                  <el-option label="全部" value=""></el-option>
                  <el-option label="启用" value="1"></el-option>
                  <el-option label="停用" value="0"></el-option>
                </el-select>
              </el-col>
            </el-col>
            <el-col :span="2">
              <el-button :icon="moreBtnIcon" @click="changeToggleParam" class="moreParam">更多</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="26" v-show="toggleParam">
            <el-col :span="22">
              <el-col :span="6">
                <label>是否派工</label>
                <el-select v-model="queryParams.dataInfo.isRepair" placeholder="请选择" @change="getRecallStatus" clearable>
                  <el-option label="全部" value=""></el-option>
                  <el-option label="是" value="1"></el-option>
                  <el-option label="否" value="0"></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <label>是否推荐</label>
                <el-select v-model="queryParams.dataInfo.isRecommend" placeholder="请选择" @change="getRecallStatus" clearable>
                  <el-option label="全部" value=""></el-option>
                  <el-option label="是" value="1"></el-option>
                  <el-option label="否" value="0"></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <label>车型</label>
                <el-input 
                v-model="queryParams.dataInfo.carTypeCode"
                suffix-icon="el-icon-search"
                @focus="openCarTypeModal" 
                placeholder="请选择"
                clearable 
                size="small"/>
              </el-col>
              <!--选择车型弹窗(多选)-->
              <CarTypeModal :isMul="true" ref="multiCarType" @changeCode="getMulCarType" /> 
              <el-col :span="6">
                <label>来源</label>
                <el-input v-model="queryParams.dataInfo.isSystem" placeholder="请输入" size="small"/>
              </el-col>
            </el-col>
          </el-row>
        </el-form>
    </div>
    
    <mix-table
      ref="tableList"
      :queryParams="queryParams"
      :dynamicTableCols="cols"
      :isShowSelect=true
      multipleSelect="selection"
      :isPaging=true
      :isDialog=false /> 
  </div>
</template>

<script>
import { apiSeDbAcce } from "@/api/graphQLApiList/se";
import { seDbAcceMutationEnable } from "@/api/se/repair/sales/seDbAcceSetting";
import { requestGraphQL } from "@/api/commonRequest";
import LookupValue from '@/components/org/LookupValue'
import mixTable from "@/components/basicComponent/mixTable"
import config from '@/utils/config'
import CarTypeModal from '@/components/se/CarTypeModal/CarTypeModal'

export default {
  components: {
    mixTable,
    LookupValue,
    config,
    CarTypeModal
  },

  data() {
    return {
        moreBtnIcon: "el-icon-plus",
        toggleParam: false,
        selectChargePersonVisible: false,
        beginPickerOptions: {
          disabledDate: time => {
            let endDateVal = this.queryParams.dataInfo.issueEndDate;
            if (endDateVal) {
              return time.getTime() > new Date(endDateVal).getTime();
            }
          }
        },
        endPickerOptions: {
          disabledDate: time => {
            let beginDateVal = this.queryParams.dataInfo.issueBeginDate;
            if (beginDateVal) {
              return time.getTime() < new Date(beginDateVal).getTime();
            }
          }
        },
        cols:[
          { label: '精品项目Id',codeField:"acceId", hidden: true},
          { label: '精品套餐编码',codeField:"acceCode"},
          { label: '精品项目名称',codeField:"acceName"},
          { label: '费用', codeField: "acceAmount"},
          { label: '安装工时', codeField: "workWiQty"},
          { label: '来源', codeField: "isSystem"},
          { label: '来源', codeField: "isSystemCn", hidden:true},
          { label: '状态', codeField: "isEnable"},
          { label: '是否派工', codeField: "isRepairCn"},
          { label: '是否推荐', codeField: "isRecommendCn"},
          { label: '销售最低折扣', codeField: "lowDiscount", hidden:true},
          { label: '折扣率', codeField: "acceDiscount", hidden:true},
          { label: '并发控制Id', codeField: "updateControlId", hidden:true},
          { label: '厂商标识', codeField: "oemCode", hidden:true},
          { label: '集团标识', codeField: "groupCode", hidden:true},
          { label: '厂商标识ID', codeField: "oemId", hidden:true},
          { label: '集团标识ID', codeField: "groupId", hidden:true}
        ],
        queryParams: {
          APIUrl: apiSeDbAcce.seDbAcceQueryFindAllPage.APIUrl,
          InputType: apiSeDbAcce.seDbAcceQueryFindAllPage.InputType,
          ServiceCode: apiSeDbAcce.seDbAcceQueryFindAllPage.ServiceCode,
          dataInfo: {
            acceCode: '',
            acceName: '',
            acceType: '',
            isEnable: '',
            isRepair: '',
            isRecommend: '',
            carTypeCode: '',
            isSystem: ''
         },
         apiQueryRow: [
          'acceId',
          'acceCode',
          'acceName',
          'acceAmount',
          'workWiQty',
          'isSystemCn',
          'isSystem',
          'isEnable',
          'isRepairCn',
          'isRecommendCn',
          'updateControlId',
          'oemCode',
          'groupCode',
          'oemId',
          'groupId'
        ]
      },
      ruleForm: {
        chargePersonId: '',
        chargePersonName: ''
      },
      chargePersonIdOptions: [],
      //主表选中行
      selectRows: [],
      uploadData: {},
      fileList: [],
      uploadHeaders: {
        Authorization: this.$store.getters.token
      },
    }
  },
  created() {
   
  },
  methods:{
    fetchData(){
      this.$refs.tableList.queryList()
    },
    //打开选择车型弹框
    openCarTypeModal() {
      this.$refs.multiCarType.open();
    },
    //获取车型编码
    getMulCarType(carSeriesCode, carTypeCn, carTypeCode, rows) {
      let carTypeCodeArray = carTypeCode.split(",");
      var carTypeCodeTemp = '';
      for(let i = 0; i < carTypeCodeArray.length; i++) {
        if(i == 0) {
          carTypeCodeTemp += carTypeCodeArray[i];
        } else {
          carTypeCodeTemp += ',' + carTypeCodeArray[i];
        }
      }
      this.queryParams.dataInfo.carTypeCode = carTypeCodeTemp;
    },
    //重置
    reset() {
      this.queryParams.dataInfo.acceCode = "";
      this.queryParams.dataInfo.acceType = "";
      this.queryParams.dataInfo.isEnable = "";
      this.queryParams.dataInfo.isRepair = "";
      this.queryParams.dataInfo.isRecommend = "";
      this.queryParams.dataInfo.carTypeCode = "";
      this.queryParams.dataInfo.isSystem = "";
    },
    //新增
    add() {
      this.$router.push({
        path: "/se/seDbAcceSettingMaintain",
      });
    },
    //修改
    modify() {
      this.selectRows = this.$refs.tableList.currentRow;
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
      this.$router.push({
        name: "seDbAcceSettingMaintain",
        params: {
          the_data: this.selectRows,
          the_data1: 1
        }
      });
    },
    //组合套餐
    combine() {
      this.selectRows = this.$refs.tableList.currentRow;
      // console.log("组合");
      // console.log(this.selectRows);
      if (this.selectRows.length < 1) {
        this.$message({
          type: 'warning',
          message: '请先选择表格数据后再组合套餐！'
        });
        return;
      } 
      this.$router.push({
        name: "seDbAcceSettingMaintain",
        params: {
          the_data: this.selectRows,
          the_data1: 2
        }
      });
    },
    isEnable() {
      //debugger
      this.selectRows = this.$refs.tableList.currentRow;
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
      var isEnableBtn = '';
      if (this.selectRows[0].isEnable == '启用') {
        isEnableBtn = '停用';
      } else if (this.selectRows[0].isEnable == '停用') {
        isEnableBtn = '启用';
      }
      this.$alert(`确定${isEnableBtn}吗？`, '信息提示', {
        confirmButtonText: '确定',
        type: 'warning',
        callback: action => {
          var isEnableParam = {
            acceId: this.selectRows[0].acceId,
            isSystem: this.selectRows[0].isSystem,
            isEnable: this.selectRows[0].isEnable,
            updateControlId: this.selectRows[0].updateControlId,
            dlrId: this.selectRows[0].dlrId
          };
          seDbAcceMutationEnable(isEnableParam).then(response => {
            var resData = response.data[apiSeDbAcce.seDbAcceMutationEnable.ServiceCode];
            if (resData.result === "1" ) {
              this.$message({
                type: 'success',
                message: `${isEnableBtn}成功！`
              });
              this.fetchData();
            } else {
              this.$message({
                type: 'warning',
                message: `${isEnableBtn}失败！`
              });
            }
          });
         }
        }); 
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
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
      this.queryParams.dataInfo.recallType = val;
    },
    changeBeginDate(val) {
      this.queryParams.dataInfo.issueBeginDate = val;
    },
    changeEndDate(val) {
      this.queryParams.dataInfo.issueEndDate = val;
    },
    getRecallStatus(val) {
      this.queryParams.dataInfo.recallStatus = val;
    },
    getFinishStatus(val) {
      this.queryParams.dataInfo.finishStatus = val;
    },
    getAssignStatus(val) {
      this.queryParams.dataInfo.assignStatus = val;
    }
 }
};
</script>
