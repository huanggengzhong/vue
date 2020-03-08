<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <a href="www.baidu.com">导入模板下载</a>
      <el-button size="small" @click.native="startCountData()">开始盘点</el-button>
      <el-button size="small" @click.native="realDataData()">实数录入</el-button>
      <el-button size="small" @click.native="endCountData()">结束盘点</el-button>
      <el-button size="small" @click.native="deleteCountData()">删除盘点单</el-button>
      <el-button size="small" @click.native="financialAuditData()">财务审核</el-button>
      <el-button size="small" @click.native="printData()">打印</el-button>
      <el-button size="small" @click.native="exportData()">导出</el-button> 
    </div>

    <div class="filter-container filter-title" ref="conTitleHeight">盘点单信息</div>
    <div class="filter-container filter-params" ref="conHeight">
        <el-row :gutter="26">
          <el-col :span="22">
            <el-row>
              <el-col :span="6">
                <label>盘点单号</label>
                <el-input v-model="InventoryId" clearable size="small" readonly></el-input>
              </el-col>
              <el-col :span="6">
                <label>盘点方式</label>
                <el-input v-model="InventoryMode" clearable size="small" readonly></el-input>
              </el-col>
              <el-col :span="6">
                <label>盘点状态</label>
                <el-input v-model="InventoryStatus" clearable size="small" readonly></el-input>
              </el-col>
              <el-col :span="6">
                <label>盘点人员</label>
                <el-input v-model="InventoryPeople" clearable size="small" readonly></el-input>
              </el-col>
            </el-row>
          </el-col>    
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="26" v-show="toggleParam">
          <el-col :span="22">
            <el-row>
              <el-col :span="6">
                <lableName curLabelName="盘点开始时间" :isShowLabel="true" :isRequire="false"></lableName>
                <el-input  v-model="InventoryStartDate" clearable size="small" readonly></el-input>
              </el-col>
              <el-col :span="6" >
                <lableName curLabelName="盘点结束时间" :isShowLabel="true" :isRequire="false"></lableName>
                <el-input  v-model="InventoryEndDate" clearable size="small" readonly></el-input>
              </el-col>
              <el-col :span="6">
                <label>过滤条件</label>
                <el-select
                    v-model="filterConditions"
                    size="small"
                    placeholder="请选择"
                    clearable
                >
                    <el-option
                    v-for="item in filterOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    ></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                  <el-checkbox v-model="notEnteredParts">只显示未录入实数的备件</el-checkbox>
              </el-col>      
            </el-row>
          </el-col>    
        </el-row>
        <el-row :gutter="26" v-show="toggleParam">
          <el-col :span=22>
            <el-row>
              <el-col :span="2">
                  <p class="tip"><span>盘点品种:</span>
                      <span>{{InventoryVarieties}}</span>
                  </p>
              </el-col>
              <el-col :span="3">
                  <p class="tip"><span>已盘点品种:</span>
                      <span>{{countedVarieties}}</span>
                  </p>
              </el-col>
              <el-col :span="3">
                  <p class="tip"><span>盘赢数量:</span>
                      <span>{{InventorywinNumber}}</span>
                  </p>
              </el-col>
              <el-col :span="3">
                  <p class="tip"><span>盘亏数量:</span> 
                      <span>{{InventorydeficientNumber}}</span>
                  </p>
              </el-col>
              <el-col :span="3">
                  <p class="tip"><span>有物无帐数量:</span>
                      <span>{{AccountQuantity}}</span>
                  </p>
              </el-col>
            </el-row>
          </el-col>    
        </el-row>    
    </div>

    <!-- <div class="filter-container filter-params">
      <el-row>
        <el-col :span="6">
          <label>备件号</label>
          <el-input v-model="partNum" clearable size="small"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button size="small" @click.native="positionData()">定位</el-button>
        </el-col>  
      </el-row>
    </div> -->

    <mix-table
      ref="dynamicInventoryListTable"
      :dynamicTableCols="dynamicInventoryCols"
      :queryParams="dynamicInventoryParams"
      :isPaging="true"
    />          
  </div> 
</template>

<script>
import { endInventoryDoSaveList, delInventoryDoSaveList, inventoryModifiyDoSaveList} from "@/api/pa/orderAuditItem/orderAuditItem";
import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";
import { paApis } from "@/api/graphQLApiList/pa";
import mixTable from "@/components/basicComponent/mixTable";
import lableName from "@/components/lableName";


export default {
  mixins: [the_Height],
  components: {
    mixTable,
    lableName
  },
  data() {
    return {
        flag: false,
        flagOne: false,
        count: false,
        toggleParam: false,
        InventoryId: '',
        InventoryMode: '',
        InventoryStatus: '',
        InventoryPeople: '',
        InventoryStartDate: '',
        InventoryEndDate: '',
        filterConditions: '',
        notEnteredParts: '',
        InventoryVarieties: '',
        countedVarieties: '',
        InventorywinNumber: '',
        InventorydeficientNumber: '',
        AccountQuantity: '',
        filterOptions: [
            {value: 1, label: "全部"},
            {value: 2, label: "只显示盘盈"},
            {value: 3, label: "只显示盘亏"},
            {value: 4, label: "只显示相符"}
        ],
        dynamicInventoryCols: [   
            { label: "备件品牌", codeField: "partBrandName", width: "120", prop: 'partBrandName'},
            { label: "备件号", codeField: "partNo", width: "120", prop: 'partNo'},
            { label: "备件名称", codeField: "partName", width: "120", prop: 'partName'},
            { label: "仓库名称", codeField: "warehouseName", width: "120", prop: 'warehouseName' },
            { label: "仓位编码", codeField: "placeCode", width: "120", prop: 'placeCode'},
            { label: "账面数量", codeField: "A1", width: "120", prop: 'A1'} ,
            { label: "借出数量", codeField: "A2", width: "120", prop: 'A2'},
            { label: "盘点实数", codeField: "A3", isEdit: "true", width: "150",comps:{ type:'inputNum2', change:this.makeDate}, prop: 'A3'},
            { label: "盘点期间入库数", codeField: "A4", width: "160", prop: 'A4'},
            { label: "盘点期间出库数", codeField: "A5", width: "160", prop: 'A5'},
            { label: "盘亏数", codeField: "A6", width: "120", prop: 'A6'},
            { label: "是否有物记账", codeField: "A7", width: "120", prop: 'A7'},
            { label: "是否已录入盘点实数", codeField: "A8", width: "200", prop: 'A8'},
            { label: "盘点实数录入时间", codeField: "A9", width: "200", prop: 'A9'},
            { label: "单位", codeField: "unit", prop: 'unit'}
        ],
        dynamicInventoryParams: {
            apiQueryRow: [
            "partBrandName",
            "partNo",
            "partName",
            "warehouseName",
            "placeCode",
            "A1",
            "A2",
            "A3",
            "A4",
            "A5",
            "A6",
            "A7",
            "A8",
            "A9",
            "unit"
            ]
      }
    };
  },
  watch:{
    '$route.name':function(newValue,oldValue){
      if(newValue == 'dynamicInventory'){
        console.log("<><>调回")
        var that = this;  
        if(that.$refs != null && that.$refs.dynamicInventoryListTable == undefined){
        }else{
          var getStr = this.$route.params.str;
          if(getStr!=null){
            var listData = getStr.split(" ")[0];
          // var statt =typeof listData=='string' ?JSON.parse(listData): listData;
            that.$refs.dynamicInventoryListTable.tableData = JSON.parse(listData);
            that.InventoryStartDate = getStr.split(" ")[1] + " " + getStr.split(" ")[2];
            that.InventoryId = getStr.split(" ")[3];
            var a = getStr.split(" ")[4];
            that.InventoryMode = getStr.split(" ")[4] == 1 ? '抽盘' : '全盘';
            that.InventoryVarieties = that.$refs.dynamicInventoryListTable.tableData.length;
            that.InventoryStatus = '开始盘点';
          }
        }
      }
      if(newValue == 'dynamicInventoryStart'){
        console.log("<><>调出")
      }
    }
  },
  created() {
  },
  mounted(){
    // var that = this;  
    // if(that.$refs != null && that.$refs.dynamicInventoryListTable == undefined){
    // }else{
    //   var getStr = this.$route.params.str;
    //   if(getStr!=null){
    //     var listData = getStr.split(" ")[0];
    //    // var statt =typeof listData=='string' ?JSON.parse(listData): listData;
    //     that.$refs.dynamicInventoryListTable.tableData = JSON.parse(listData);
    //     that.InventoryStartDate = getStr.split(" ")[1] + " " + getStr.split(" ")[2];
    //     that.InventoryId = getStr.split(" ")[3];
    //     var a = getStr.split(" ")[4];
    //     that.InventoryMode = getStr.split(" ")[4] == 1 ? '抽盘' : '全盘';
    //     that.InventoryVarieties = that.$refs.dynamicInventoryListTable.tableData.length;
    //     that.InventoryStatus = '开始盘点';
    //   }
    // }
    // setInterval(function () {
    //   if(that.$refs!=null && that.$refs.dynamicInventoryListTable == undefined){
    //   } else {
    //       try{
    //           var shareDataStr = that.$OrgCacheData.CacheObject.getShareData('dynamicInventory');
    //           if(shareDataStr!=null){
    //               that.$refs.dynamicInventoryListTable.tableData = JSON.parse(shareDataStr)
    //               that.InventoryVarieties = that.$refs.dynamicInventoryListTable.tableData.length;
    //               that.InventoryStatus = '开始盘点';
    //           }
    //       }
    //       catch(e){}
    //   }
    // },1000)
  },
  methods: {
      //开始盘点
      startCountData(){
        const vm = this;
        vm.$router.push({name:'dynamicInventoryStart'});
        this.flag = true;
      },
      //财务审核
      financialAuditData(){
        if(this.flagOne){
          const vm = this;
          let inventoryData = {};
          inventoryData.InventoryMode = vm.InventoryMode; //盘点方式
          inventoryData.InventoryStartDate = vm.InventoryStartDate; //盘点开始时间
          inventoryData.InventoryEndDate = vm.InventoryEndDate; //盘点结束时间
          inventoryData.InventoryVarieties = vm.InventoryVarieties; //盘点品种
          vm.$router.push({name:'dynamicInventoryfinancial', params: { str: inventoryData}});
        }else{
          this.$message({
            message: "没有结束的盘点单不能审核!",
            type: "error"
          });
        }
      },  
      //导出
      exportData(){
        var tableColumns = this.$refs.dynamicInventoryListTable.$refs.multipleTable == null ? null : this.$refs.dynamicInventoryListTable.$refs.multipleTable.columns;
        this.$refs.dynamicInventoryListTable.exportTableData("excel","调拨销售单导出","调拨销售单列表",tableColumns);
      },  
      //结束盘点 
      endCountData(){
        if(this.flag){
          this.InventoryStatus = '结束盘点';
          this.makeDate();
          endInventoryDoSaveList().then(response =>{
            if (response.data[paApis.paBuDlrStoreCheckEndMutation.ServiceCode].result === "1") {
              this.$message({
                message: "保存成功!",
                type: "success"
              });
            }
          })
          this.flagOne = true;
        }else{
          this.$message({
                message: "没有保存的数据!",
                type: "error"
          });
        }
      },  
      //删除盘点单
      deleteCountData(){
        if(this.flag){
          delInventoryDoSaveList().then(response =>{
            if (response.data[paApis.paBuDlrStoreCheckDelMutation.ServiceCode].result === "1") {
              this.$message({
                message: "保存成功!",
                type: "success"
              });
            }
          })
          this.flagOne = false;
        }else{
          this.$message({
                message: "没有可以删除的盘点单信息!",
                type: "error"
          });
        }
      },
      //盘点录入时间
      makeDate(row){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        if(month < 10){
          month = "0" + month;
        }
        var day = date.getDate();
        if(day < 10){
          day = "0" + day;
        }
        var hour = "00" + date.getHours();
        hour = hour.substr(hour.length - 2);
        var minute = "00" + date.getMinutes();
        minute = minute.substr(minute.length - 2);
        var second = "00" +date.getSeconds();
        second = second.substr(second.length - 2);
        if(row != null){
          row.A8 = '是';
          row.A9 = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
          //这个做一个保存的操作(盘点录入)
          inventoryModifiyDoSaveList().then(response => {
            if(response.data[paApis.paBuDlrStoreCheckEditMutation.ServiceCode].result === '1'){
              this.$message({
                message: "保存成功！",
                type: "success"
              });
            }
          })
        }else{
          this.InventoryEndDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
        }
      },
      //表格自适应
      makeHeight(mh) {
        //协议单位 + 调拨销售单
        var strAgreementPage = this.$refs.dynamicInventoryListTable.$refs.paginationHeight.$el.offsetHeight;
        var strAgreementResult = this.$refs.dynamicInventoryListTable.$refs.resultTitleHeight.offsetHeight;
        // 减去margin-top/bottom值
        if (!this.$utils.isIE() || isResize) {
            this.tableHeight = mh - this.tableMarginHeight - strAgreementPage - strAgreementResult - 7;
            this.$refs.dynamicInventoryListTable.tableHeight = this.tableHeight;
        } else {
            // IE浏览器需要减去额外高度
            this.tableHeight = mh - this.tableMarginHeight - this.ieHeight - strAgreementPage - strAgreementResult - 7;
            this.$refs.dynamicInventoryListTable.tableHeight = this.tableHeight;
        }  
      },
      //更多改变布局
      changeToggleParam() {
          if (!this.count) {
              this.toggleParam = true;
              this.count = true;
          } else {
              this.toggleParam = false;
              this.count = false;
          }
      },
  }
};
</script>
<style lang="scss" scoped>
    /deep/ p.tip span {
        color: red;
    }
</style>
