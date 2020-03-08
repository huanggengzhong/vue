<template>
  <div>
    <el-dialog 
       :visible.sync = "diapaly1s"
     width="68%" @close="close">
      <!-- <section > -->
      <!-- <el-col :span="20" class="padding-l-10"> -->
      <span style="font-weight:bold;font-size:22px;">导入模板</span>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <LookupValue
            :span="6"
            :isMul="isMul"
            :isShowLabel="isshow"
            :code="dataInfo.carBrandCode"
            :looluptype="cheliangpinpai1"
            :labelName="cheliangpinpai"
            @changeCode="getcheliangpinpai"
          />
          <LookupValue
            :span="6"
            :isMul="isMul"
            :isShowLabel="isshow"
            :code="dataInfo.reserveStateName"
            :looluptype="shiyongchexing1"
            :labelName="shiyongchexing"
            @changeCode="getshiyongchexing"
          />

          <div class="filter-container filter-button">
            <el-button type="primary" size="small" @click="queryFindAll(1)">导入模板</el-button>
            <template>
              <el-button type="primary" size="small" @click="eduitData()">取消</el-button>
            </template>
          </div>
        </el-row>
      </div>
      <div class="moban1">

      </div>
      <div class="moban2">

      </div>
    </el-dialog>
  </div>
</template>
<script>
import LookupValue from "@/components/org/LookupValue/index";
export default {
  components: {
    LookupValue
  },
  props: {
    code: {
      type: String,
      default: function() {
        return "";
      }
    },

    diapaly1s: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      isMul: false,
      isshow: true,
      cheliangpinpai: "车辆品牌",
      cheliangpinpai1: "se0001",
      shiyongchexing: "适用车型",
      shiyongchexing1: "se0002",
      weixiugongshi: "",
      //是否售车
      weishouche: "",
      codeInside: this.code,
      listLoading: false,
      list: [],
      tableList: [],
      tableChooseList: [],
      limits: null,
      dataInfo: {
        reserveOrderCode: "",
        reserveOrderId: "",
        reserveOrderCode: "",
        dlrCustNo: "",
        custTel: "",
        carLicense: "",
        dlrCode: "",
        carTypeCode: "",
        carTypeCn: "",
        reserveState: "",
        reserveStateName: "",
        preGetDate: "",
        factComeDate: "",
        reserveType: "",
        reserveTypeName: "",
        isFirst: "",
        reserveTel: "",
        saName: "",
        preComeDate: "",
        carBrandCode: "",
        carBrandCn: "",
        vin: "",
        csDesc: "",
        custName: "",
        isRemind: "",
        reserveMan: "",
        carSeriesCode: "",
        carSeriesCn: "",
        isWait: "",
        reserveSource: "",
        reserveSourceName: "",
        carId: "",
        isClean: "",
        dlrId: "",
        cancelType: "",
        cancelTypeName: "",
        cancelReason: "",
        saEmpId: "",
        reserveSourceId: "",
        isRescue: "",
        linkDate: "",
        contactType: "",
        otherItem: "",
        dayConfirm: "",
        hourConfirm: "",
        reserveRepairType: "",
        oemId: "",
        groupId: "",
        oemCode: "",
        groupCode: "",
        creator: "",
        createdDate: "",
        modifier: "",
        lastUpdatedDate: "",
        isEnable: "",
        reserveMileage: "",
        reserveDueAmount: "",
        wiDueAmount: "",
        partDueAmount: "",
        otherDueAmount: "",
        reserveSourceCode: "",
        updateControlId: "",
        payKind: "",
        payKindName: "",
        isDoor: "",
        custAddress: "",
        doorBeginDate: "",
        doorEndDate: ""
      },
      listQuery: {},
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {},
  methods: {
    close() {
      this.$emit("ClosePage", false);
    },

    getcheliangpinpai(val) {
      this.dataInfo.carBrandCode = val;
    },
    getshiyongchexing(val) {
      this.dataInfo.carSeriesCn = val;
    },

    tableListChoose(selection) {
      this.tableChooseList = selection;
    },
    affirm() {
      if (this.tableList.length === 0) {
        this.$alert("未选中备件数据！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      } else {
        if (this.limits === 0) {
          if (this.tableList.length > 1) {
            this.$alert("当前为备件单选，只能选择一条数据！", "信息提示", {
              confirmButtonText: "确定",
              type: "warning",
              callback: action => {}
            });
          } else {
            this.$emit("sentData", this.tableList);
          }
        } else {
          this.$emit("sentData", this.tableList);
        }
      }
    },
    delect() {
      if (this.tableChooseList.length === 0) {
        this.$alert("请选择要删除的数据！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      } else {
        for (let i of this.tableChooseList) {
          for (let j = 0; j < this.tableList.length; j++) {
            if (i.wiId === this.tableList[j].wiId) {
              this.tableList.splice(j, 1);
            }
          }
        }
      }
    },
    getData(val) {
      this.tableList = val;
    },
    limit(val) {
      this.limits = val;
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
.padding-l-10 {
  padding-left: 100px;
}
.textalign-l {
  text-align: left;
}
.moban1 {
  border: 1px solid black;
  position: relative;
  margin: 50px auto auto 0px;
  width: 25%;
  height: 300px;
}
.moban2 {
  border: 1px solid black;
  position: relative;
  margin: -300px 4% auto auto;
  width: 65%;
  height: 300px;
}
</style>
