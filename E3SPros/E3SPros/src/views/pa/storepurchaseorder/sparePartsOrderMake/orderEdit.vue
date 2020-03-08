<template>
  <section class="carSeries">
    <el-dialog
      title="编辑内容"
      :visible.sync="orderEditVisible"
      width="60%"
      center
      :close-on-click-modal="false"
      :append-to-body="true"
      @close="sendCode"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="24">
          <el-col :span="8">
            <label>订单号</label>
            <el-input
              size="small"
              placeholder="请输入内容"
              :disabled="false"
              v-model="selectData.brandName"
              clearable
            ></el-input>
          </el-col>
          <el-col :span="8">
            <label>订单类型</label>
            <el-input
              size="small"
              placeholder="请输入内容"
              :disabled="false"
              v-model="selectData.carSeries"
              clearable
            ></el-input>
          </el-col>
          <el-col :span="8">
            <label>订货日期</label>
            <el-input
              size="small"
              placeholder="请输入内容"
              :disabled="false"
              v-model="selectData.catType"
              clearable
            ></el-input>
          </el-col>
          <el-col :span="8">
            <label>订货金额</label>
            <el-input
              size="small"
              placeholder="请输入内容"
              :disabled="false"
              v-model="selectData.carTypeConfig"
              clearable
            ></el-input>
          </el-col>
          <el-col :span="8">
            <label>订货品种</label>
            <el-input
              size="small"
              placeholder="请输入内容"
              :disabled="false"
              v-model="selectData.replaceCarType1"
              clearable
            ></el-input>
          </el-col>
          <el-col :span="8">
            <label>状态</label>
            <el-input
              size="small"
              placeholder="请输入内容"
              :disabled="false"
              v-model="selectData.replaceCarTypeConfig1"
              clearable
            ></el-input>
          </el-col>
          <el-col :span="8">
            <label>运输方式</label>
            <el-input
              size="small"
              placeholder="请输入内容"
              :disabled="false"
              v-model="selectData.modeoftransportation"
              clearable
            ></el-input>
          </el-col>
          <el-col :span="8">
            <label>制单人</label>
            <el-input
              size="small"
              placeholder="请输入内容"
              :disabled="false"
              v-model="selectData.preparedby"
              clearable
            ></el-input>
          </el-col>
          <el-col :span="8">
            <label>制单日期</label>
            <el-input
              size="small"
              placeholder="请输入内容"
              :disabled="false"
              v-model="selectData.documentationdate"
              clearable
            ></el-input>
          </el-col>
          <el-col :span="8">
            <label>驳回原因</label>
            <el-input
              size="small"
              placeholder="请输入内容"
              :disabled="false"
              v-model="selectData.dismissreason"
              clearable
            ></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <label>经销商审核人</label>
            <el-input
              size="small"
              placeholder="请输入内容"
              :disabled="false"
              v-model="selectData.dealerauditor"
              clearable
            ></el-input>
          </el-col>
          <el-col :span="12">
            <label>经销商审核时间</label>
            <el-input
              size="small"
              placeholder="请输入内容"
              :disabled="false"
              v-model="selectData.dealerreviewtime"
              clearable
            ></el-input>
          </el-col>
          <el-col :span="12">
            <label>主机厂审核人</label>
            <el-input
              size="small"
              placeholder="请输入内容"
              :disabled="false"
              v-model="selectData.mainengineauditor"
              clearable
            ></el-input>
          </el-col>
          <el-col :span="12">
            <label>主机厂审核时间</label>
            <el-input
              size="small"
              placeholder="请输入内容"
              :disabled="false"
              v-model="selectData.mainengineaudittime"
              clearable
            ></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container filter-button">
        <el-button type="primary" size="small" @click="save">保存</el-button>
        <el-button size="small" @click="reset">重置</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { editSave } from "@/api/pa/paBuPurOrder";
import { paApis } from "@/api/graphQLApiList/pa";
export default {
  components: {},
  data() {
    return {
      warehouseCode: undefined,
      warehouseName: undefined,
      isEnable: undefined,
      isCenterWarehouse: undefined,
      isVirtualStore: undefined,
      isLogistic: undefined,
      list: [],
      isSaveSuccess: false,
      codeInside: {
        code: [],
        name: []
      },
      listQuery: {}
    };
  },
  watch: {
    selectData(newVal, oldVal) {}
  },
  props: {
    orderEditVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    isMul: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    selectData: {
      type: Object,
      default: function() {
        return {
          brandName: "",
          carSeries: "",
          catType: "",
          carTypeConfig: "",
          replaceCarType1: "",
          replaceCarTypeConfig1: "",
          modeoftransportation: "",
          preparedby: "",
          documentationdate: "",
          dismissreason: "",
          dealerauditor: "",
          dealerreviewtime: "",
          mainengineauditor: "",
          mainengineaudittime: ""
        };
      }
    }
  },
  created() {},
  mounted() {
    console.log(this.warehouseCode);
  },
  methods: {
    reset() {
      this.selectData.brandName = "";
      this.selectData.carSeries = "";
      this.selectData.catType = "";
      this.selectData.carTypeConfig = "";
      this.selectData.replaceCarType1 = "";
      this.selectData.replaceCarTypeConfig1 = "";
      this.selectData.modeoftransportation = "";
      this.selectData.preparedby = "";
      this.selectData.documentationdate = "";
      this.selectData.dismissreason = "";
      this.selectData.dealerauditor = "";
      this.selectData.dealerreviewtime = "";
      this.selectData.mainengineauditor = "";
      this.selectData.mainengineaudittime = "";
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    getorderEditCode(val) {
      if (this.isMul) {
        if (val[0] || val.length == "0") {
          this.codeInside = {
            code: [],
            name: []
          };
          for (var i = 0; i < val.length; i++) {
            this.codeInside.code.push(val[i].carSeriesCode);
            this.codeInside.name.push(val[i].carSeriesName);
          }
        }
      } else {
        this.codeInside = {
          code: [],
          name: []
        };
        this.codeInside.code.push(val.carSeriesCode);
        this.codeInside.name.push(val.carSeriesName);
      }
    },
    sendCode() {
      this.$emit("changeorderEditCode", this.codeInside);
    },
    save() {
      editSave(this.selectData).then(response => {
        this.listLoading = false;
        if (
          response.data[paApis.sparepartsordermakeSave.ServiceCode].result ===
            "1" &&
          response.data[paApis.sparepartsordermakeSave.ServiceCode].rows != ""
        ) {
          this.isSaveSuccess = true;
        } else {
          this.isSaveSuccess = false;
        }
        this.saveAlert();
      });
    },
    saveAlert() {
      if (this.isSaveSuccess == true) {
        this.$alert("保存成功", "提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        this.orderEditVisible = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog .el-dialog__body {
  padding: 0 20px 10px 20px;
}
/deep/ .el-dialog__wrapper .el-dialog {
  height: 320px;
}
</style>
