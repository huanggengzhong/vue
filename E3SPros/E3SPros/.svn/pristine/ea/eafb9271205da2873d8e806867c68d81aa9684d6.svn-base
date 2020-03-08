<template>
  <el-form label-position="right">
    <el-row>
      <el-col :span="6">
        <el-form-item label="是否转订单">
          <el-select v-model="value" placeholder="请选择" @change="change()">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <div v-if="show">
      <el-row>
        <el-col :span="6">
          <swdSalesConsultant :swdSalesConsultant="TransferOrders"></swdSalesConsultant>
        </el-col>
        <el-col :span="6">
          <BuyPattern :BuyPattern="TransferOrders"></BuyPattern>
        </el-col>
        <el-col :span="6">
          <ContactWay :ContactWay="TransferOrders"></ContactWay>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <PreVisitDate :PreVisitDate="TransferOrders"></PreVisitDate>
        </el-col>
        <el-col :span="6">
          <LatestPlayProcess :LatestPlayProcess="TransferOrders"></LatestPlayProcess>
        </el-col>
      </el-row>
    </div>
  </el-form>
</template>

<script>
import swdSalesConsultant from "@/components/crm/EjectWindows/swd_SalesConsultant";
import BuyPattern from "@/components/crm/Select/Common/BuyPattern";
import ContactWay from "@/components/crm/Select/Common/ContactWay";
import PreVisitDate from "@/components/crm/Time/PreVisitDate";
import LatestPlayProcess from "@/components/crm/textbox/Public/LatestPlayProcess";
export default {
  components: {
    swdSalesConsultant,
    BuyPattern,
    ContactWay,
    PreVisitDate,
    LatestPlayProcess
  },
  name: "TransferOrders",
  data() {
    return {
      options: [
        {
          value: "1",
          label: "是"
        },
        {
          value: "2",
          label: "否"
        }
      ],
      value: "",
      show: false,
      TransferOrders:{
        input:'',
        value:'',
        options:[]
      }
    }
  },
  mounted: function() {
    // this.getData();
  },
  methods: {
    change: function() {
      let that = this;
      if (that.value == "1") {
        that.show = true;
      }
      else{
        that.show=false
      }
    }
  }
};
</script>