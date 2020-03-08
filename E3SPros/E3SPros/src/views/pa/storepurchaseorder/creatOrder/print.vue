<template>
  <section class="carType">
    <el-dialog
      title="订单明细"
      :visible.sync="printVisible"
      width="900px"
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
      <div style="height:400px;overflow-y:auto;width:100%">
        <div ref="print">
          <el-row :gutter="26">
            <el-col :span="24" align="center">
              <label style="font-size:20px">订单明细</label>
            </el-col>
          </el-row>
          <br />
          <div>
            <el-row class="textCenter">
              <el-col :span="2" aglin="center" class="border height line-height">序号</el-col>
              <el-col :span="2" aglin="center" class="border height line-height">可欠拨+</el-col>
              <el-col :span="3" aglin="center" class="border height line-height">备件品牌</el-col>
              <el-col :span="2" aglin="center" class="border height line-height">备件号</el-col>
              <el-col :span="2" aglin="center" class="border height line-height">备件名称</el-col>
              <el-col :span="2" aglin="center" class="border height line-height">订货数+</el-col>
              <el-col :span="2" aglin="center" class="border height line-height">SNP</el-col>
              <el-col :span="3" aglin="center" class="border height line-height">单价</el-col>
              <el-col :span="4" aglin="center" class="border height line-height">库存数</el-col>
              <el-col :span="2" aglin="center" class="border height line-height">可用库存</el-col>
            </el-row>
            <el-row class="textCenter" v-for="(item, index) in printList" :key="index">
              <el-col :span="2" aglin="center" class="border height line-height">{{index + 1 }}</el-col>
              <el-col :span="2" aglin="center" class="border height line-height">{{item.brandName}}</el-col>
              <el-col
                :span="3"
                aglin="center"
                class="border height line-height"
              >{{item.outStoreCode}}</el-col>
              <el-col :span="2" aglin="center" class="border height line-height">{{item.carSeries}}</el-col>
              <el-col :span="2" aglin="center" class="border height">{{item.catType}}</el-col>
              <el-col
                :span="2"
                aglin="center"
                class="border height line-height"
              >{{item.carTypeConfig}}</el-col>
              <el-col
                :span="2"
                aglin="center"
                class="border height line-height"
              >{{item.replaceCarType1}}</el-col>
              <el-col
                :span="3"
                aglin="center"
                class="border height line-height"
              >{{item.replaceCarTypeConfig1}}</el-col>
              <el-col
                :span="4"
                aglin="center"
                class="border height line-height"
              >{{item.modeoftransportation}}</el-col>
              <el-col
                :span="2"
                aglin="center"
                class="border height line-height"
              >{{item.dealerauditor}}</el-col>
            </el-row>
          </div>
          <br />
          <el-row :gutter="26">
            <el-col :span="10">
              <label>制表人：</label>
            </el-col>
          </el-row>
        </div>
      </div>
      <div align="right">
        <el-button size="small" @click="printSon()">打印</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
export default {
  components: {},
  props: {
    printVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    printList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {},
  methods: {
    sendCode() {
      this.$emit("changeCode", this.codeInside);
    },
    printSon() {
      this.$print(this.$refs.print);
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .el-dialog__wrapper .el-dialog {
  height: 500px;
}
/deep/ .height {
  height: 50px;
}
/deep/ .line-height {
  line-height: 50px;
}
/deep/ .border {
  border: 1px solid #797979 !important;
}
</style>
