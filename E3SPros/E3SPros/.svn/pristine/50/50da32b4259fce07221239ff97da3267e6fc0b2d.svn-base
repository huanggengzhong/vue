<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button size="small" @click.native="approvedData()">审核通过</el-button>
      <el-button size="small" @click.native="rejectedData()">驳回</el-button>
      <el-button size="small" @click.native="printWinOrder()">打印盘盈单</el-button>
      <el-button size="small" @click.native="printLackOrder()">打印盘亏单</el-button>
    </div>

    <div class="filter-container filter-params" ref="conHeight">
        <el-row :gutter="26">
            <el-col :span="22">
                <el-row>
                    <el-col :span="6">
                        <label>盘点方式</label>
                        <el-input v-model="checkModelName" size="small" clearable readonly></el-input>
                    </el-col>
                    <el-col :span="6">
                        <label>盘点人员</label>
                        <el-input v-model="creatorName" size="small" clearable readonly></el-input>
                    </el-col>
                    <el-col :span="6">
                        <lableName curLabelName="盘点开始时间" :isShowLabel="true" :isRequire="false"></lableName>
                        <el-input v-model="beginDate" size="small" clearable readonly></el-input>
                    </el-col>
                    <el-col :span="6">
                        <lableName curLabelName="盘点结束时间" :isShowLabel="true" :isRequire="false"></lableName> 
                        <el-input v-model="endDate" size="small" clearable readonly></el-input>
                    </el-col>
                </el-row> 
            </el-col>       
            <el-col :span="2">
                <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
            </el-col>                  
        </el-row>
        <el-row :gutter="26" v-show="toggleParam">
            <el-col :span="22">
                <el-col :span="6">
                    <label>盘点品种</label>
                    <el-input v-model="checkCategory" size="small" clearable readonly></el-input>
                </el-col>
                <el-col :span="6">
                    <label>相符品种</label>
                    <el-input v-model="matchCategory" size="small" clearable readonly></el-input>
                </el-col>
                <el-col :span="6">
                    <label>盘盈品种</label>
                    <el-input v-model="checkMoreCategory" size="small" clearable readonly></el-input>
                </el-col>
                <el-col :span="6">
                    <label>盘亏品种</label>
                    <el-input v-model="checkLackCategory" size="small" clearable readonly></el-input>
                </el-col>
            </el-col>    
            <el-col :span="22">
                <el-col :span="6">
                    <label>盘点总数</label>
                    <el-input v-model="sumStorage" size="small" clearable readonly></el-input>
                </el-col>
                <el-col :span="6">
                    <label>相符总数</label>
                    <el-input v-model="matchStorage" size="small" clearable readonly></el-input>
                </el-col>
                <el-col :span="6">
                    <label>盘盈总数</label>
                    <el-input v-model="checkMoreStorage" size="small" clearable readonly></el-input>
                </el-col>
                <el-col :span="6">
                    <label>盘亏总数</label>
                    <el-input v-model="checkLackStorage" size="small" clearable readonly></el-input>
                </el-col>
            </el-col>   
            <el-col :span="22"> 
                <el-col :span="6">
                    <label>盘点总额</label>
                    <el-input v-model="sumAmount" size="small" clearable readonly></el-input>
                </el-col>
                <el-col :span="6">
                    <label>相符总额</label>
                    <el-input v-model="matchAmount" size="small" clearable readonly></el-input>
                </el-col>
                <el-col :span="6">
                    <label>盘盈总额</label>
                    <el-input v-model="checkMoreAmount" size="small" clearable readonly></el-input>
                </el-col>
                <el-col :span="6">
                    <label>盘亏总额</label>
                    <el-input v-model="lackAmount" size="small" clearable readonly></el-input>
                </el-col>
            </el-col>   
            <el-col :span="22">
                <el-col :span="6">
                    <lableName curLabelName="有物无账品种" :isShowLabel="true" :isRequire="false"></lableName> 
                    <el-input v-model="newCategory" size="small" clearable readonly></el-input>
                </el-col>
                <el-col :span="6">
                    <lableName curLabelName="有物无账总数" :isShowLabel="true" :isRequire="false"></lableName> 
                    <el-input v-model="newStorage" size="small" clearable readonly></el-input>
                </el-col>
                <el-col :span="6">
                    <lableName curLabelName="有物无账总额" :isShowLabel="true" :isRequire="false"></lableName> 
                    <el-input v-model="newAmount" size="small" clearable readonly></el-input>
                </el-col>
            </el-col>    
        </el-row>    
    </div>

        <!--  盘盈表格-->
    <mix-table
      ref="inventoryWinListTable"
      :dynamicTableCols="inventoryWinCols"
      :isPaging="true"
      :onetableHeight="163"
    />

        <!--  盘亏表格-->
    <mix-table
      ref="inventoryLackListTable"
      :dynamicTableCols="inventoryLackCols"
      :isPaging="true"
      :onetableHeight="163"
    />
  </div>
</template>

<script>
import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";
import { paApis } from "@/api/graphQLApiList/pa";
import mixTable from "@/components/basicComponent/mixTable";
import lableName from "@/components/lableName";
import {approvedDoSaveList, rejectedDoSaveList} from "@/api/pa/orderAuditItem/orderAuditItem";
export default {
  mixins: [the_Height],
  components: {
    mixTable,
    lableName
  },
  data() {
    return {
        count: false,
        toggleParam: false,
        checkModelName: '',
        creatorName: '',
        beginDate: '',
        endDate: '',
        checkCategory: '',
        matchCategory: '',
        checkMoreCategory: '',
        checkLackCategory: '',
        newCategory: '',
        sumStorage: '',
        matchStorage: '',
        checkMoreStorage: '',
        checkLackStorage: '',
        newStorage: '',
        sumAmount: '',
        matchAmount: '',
        checkMoreAmount: '',
        lackAmount: '',
        newAmount: '',
        //盘盈表格
         inventoryWinCols: [   
            { label: "备件号", codeField: "partNo"},
            { label: "备件名称", codeField: "partName"},
            { label: "单位", codeField: "unit"},
            { label: "仓库名称", codeField: "warehouseName"},
            { label: "仓位编码", codeField: "placeCode"},
            { label: "盘盈数量", codeField: "profitQty"} ,
            { label: "单价", codeField: "inStorePrice", isEdit: "true"},
            { label: "盘盈金额", codeField: "A3"},
            { label: "盘盈总成本(不含税)", codeField: "storeCostAmount", width: '180'},
            { label: "盘盈总成本(含税)", codeField: "storePriceAmount", width: '180'},
            { label: "备注", codeField: "remark"},
        ],
        //盘亏表格
        inventoryLackCols: [   
            { label: "备件号", codeField: "partNo"},
            { label: "备件名称", codeField: "partName"},
            { label: "单位", codeField: "unit"},
            { label: "仓库名称", codeField: "warehouseName"},
            { label: "仓位编码", codeField: "placeCode"},
            { label: "盘亏数量", codeField: "profitQty"} ,
            { label: "单价", codeField: "inStorePrice", isEdit: "true"},
            { label: "盘亏金额", codeField: "A3"},
            { label: "盘亏总成本(不含税)", codeField: "storeCostAmount", width: '180'},
            { label: "盘亏总成本(含税)", codeField: "storePriceAmount", width: '180'},
            { label: "备注", codeField: "remark"},
        ],
    }
  },

  created() {
      //获取页面的传值
      const vm = this;
      var str = vm.$route.params.str;
      vm.checkModelName = str.InventoryMode;
      vm.beginDate = str.InventoryStartDate;
      vm.endDate = str.InventoryEndDate;
      vm.checkCategory = str.InventoryVarieties;
  },
  methods: {
      //审核通过   
      approvedData(){
          approvedDoSaveList().then(response => {
              if(response.data[paApis.paBuDlrStoreCheckAuditMutation.ServiceCode].result === '1'){
                this.$message({
                    message: "审核通过！",
                    type: "success"
                });
              }
          })
      },
      //驳回
      rejectedData(){
          rejectedDoSaveList().then(response => {
              if(response.data[paApis.paBuDlrStoreCheckBoMutation.ServiceCode].result === '1'){
                this.$message({
                    message: "驳回!",
                    type: "error"
                });
              }
          })
      },
      //改变更多布局
      changeToggleParam(){
          if(!this.count){
              this.toggleParam = true;
              this.count = true;
          }else{
              this.toggleParam = false;
              this.count = false;
          }
      }
  }
};
</script>
