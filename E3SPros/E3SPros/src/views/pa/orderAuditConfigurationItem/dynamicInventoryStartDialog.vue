<template>
  <section>
    <el-dialog
      title="盘点单明细"
      :visible.sync="dynamicStartDialogVisible"
      @closed="closeDialog()"
      width="60%"
      :append-to-body="true"
      :close-on-click-modal="false"
    >
    <div class="filter-container filter-params" ref="conHeight">
        <el-row :gutter="12">
          <el-col :span="9">
            <label>备件号</label>
            <el-input v-model="partNum" clearable size="small"></el-input>
          </el-col>   
          <el-col :span="9">
            <el-button size="small" @click.native="positionData()">定位</el-button>
            <el-button size="small" @click.native="saveData()">保存</el-button>
            <el-button size="small" @click.native="close()">取消</el-button>
          </el-col>  
        </el-row>  
    </div>        

      <div class="filter-container filter-title">明细结果</div>
      <el-table :data="data" 
                border 
                fit 
                ref="InventoryTable"
                :row-class-name="tableRowClassName"
      >
        <el-table-column label="序号" width="60" align="center">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column property="partNo" label="备件号" align="center">
          <template slot-scope="scope">{{ scope.row.partNo }}</template>
        </el-table-column>
        <el-table-column property="partName" label="备件名称" align="center">
          <template slot-scope="scope">{{ scope.row.partName }}</template>
        </el-table-column>
        <el-table-column property="unit" label="单位" align="center">
          <template slot-scope="scope">{{ scope.row.unit }}</template>
        </el-table-column>
        <el-table-column property="warehouseName" label="仓库名称" align="center">
          <template slot-scope="scope">{{ scope.row.warehouseName }}</template>
        </el-table-column>
        <el-table-column property="storeQty" label="库存数量" align="center">
          <template slot-scope="scope">{{ scope.row.storeQty }}</template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, sizes, ->, total"
        prev-text="上一页"
        next-text="下一页"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="data ? data.length : 0"
      />
    </el-dialog>
  </section>
</template>
<script>
import { paDbPartListQuerySelectPartNo } from "@/api/pa/paDbVarietyMutation1";
import lableName from "@/components/lableName";
import mixTable from "@/components/basicComponent/mixTable";

export default {
  props: {
    dynamicStartDialogVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    data: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  components: {
    lableName,
    mixTable
  },
  data() {
    return {
      no: '',
      date:'',
      id:'',
      checkType:'',
      partNum: "",
      flag: false
    };
  },
  methods: {
    //获取父组件的值
    setEditData(val) {
        this.checkType = val;
    },
    //给父组件传值
    close() {
      this.partNum = "";
      this.flag = false;
      this.$emit("close", this.data);
    },
    closeDialog() {
      this.partNum = "";
      this.flag = false;
      this.$emit("close", false);
    },
    //保存
    saveData() {
      for (var i = 0; i < this.data.length; i++) {
        this.data[i]["A1"] = 0;
        this.data[i]["A2"] = 0;
        this.data[i]["A3"] = 0;
        this.data[i]["A4"] = 0;
        this.data[i]["A5"] = 0;
        this.data[i]["A6"] = 0;
        this.data[i]["A7"] = "否";
        this.data[i]["A8"] = "否";
        this.data[i]["A9"] = "";
      }
      var str = JSON.stringify(this.data);
      var date = this.makeDate();  // 盘点开始时间
      var id = this.randomRange(8,8); //随机盘点单号
      var dataStr = str + " " + date + " " + id + " " + this.checkType;
     // this.$OrgCacheData.CacheObject.setShareData("dynamicInventory", str);
      this.$router.push({
        name: "dynamicInventory",
        params: { str: dataStr}
      });
      this.close();
    },
    //查询
    fetchData() {},
    //盘点开始时间
    makeDate(){
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
        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    },
    //随机生成盘点单号
    randomRange(min, max){
        var returnStr = "",
        range = (max ? Math.round(Math.random() * (max-min)) + min : min),
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for(var i=0; i<range; i++){
            var index = Math.round(Math.random() * (arr.length-1));
            returnStr += arr[index];
        }
        return returnStr;
    },
    //定位
    positionData(){
        if(this.partNum == ''){
            this.$alert("请输入备件号来定位在表格中的位置！", "信息提示", {
                confirmButtonText: "确定",
                type: "warning",
                callback: action => {}
            });  
        }else{
            var num = 0;
            for(var i=0;i<this.data.length; i++){
                num += 1;
                if(this.partNum == this.data[i].partNo){
                    this.no = num - 1;
                    this.flag = true;
                    this.tableRowClassName();
                    break;
                }
            }
        }
    },
    //改变表格中某行的样式
    tableRowClassName({row, rowIndex}) {  //添加样式
        if(this.flag){
                if(rowIndex === this.no){
                    return 'success-row';
            }
        }
    }
  }
};
</script>
<style lang="scss" scoped>
    /deep/ .el-table .success-row {
        background: #00FFFF;
    }
</style>
