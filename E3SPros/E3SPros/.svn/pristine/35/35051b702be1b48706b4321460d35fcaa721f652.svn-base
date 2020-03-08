<template>
  <el-form class="dialog" label-position="right">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <SourceOfChannel :SourceOfChannel="child" ref="SourceOfChannel"></SourceOfChannel>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <IntentionLevel :IntentionLevel="child" ref="IntentionLevel"></IntentionLevel>
        </div>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <IntentionalCar :IntentionalCar="child" ref="IntentionalCar"></IntentionalCar>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <IntentionalModel :IntentionalModel="child" ref="IntentionalModel"></IntentionalModel>
        </div>
      </el-col>
    </el-row>
    <el-row>
    <el-col :span="12">
        <div class="grid-content bg-purple">
         <NextReturnVisitTime :NextReturnVisitTime="child" ref="NextReturnVisitTime"></NextReturnVisitTime>
        </div>
      </el-col>
    </el-row>
    <el-row>
    <el-col :span="12">
        <div class="grid-content bg-purple">
         <Descripts :Descripts="child" ref="Descripts"></Descripts>
        </div>
      </el-col>
    </el-row>
    <el-row>
    <el-col :span="12">
        <div class="grid-content bg-purple">
         <Remarks :Remarks="child" ref="Remarks"></Remarks>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import NextReturnVisitTime from "@/components/crm/Time/NextReturnVisitTime";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel";
import SourceOfChannel from "@/components/crm/EjectWindows/SourceOfChannel";
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar";
import IntentionalModel from "@/components/crm/EjectWindows/IntentionalModel";
import Descripts from "@/components/crm/textbox/Public/Descripts";
import Remarks from "@/components/crm/textbox/Complaint/Remarks";

export default {
  name: "ClueListInfo",
  components: {
    NextReturnVisitTime,
    IntentionLevel,
    SourceOfChannel,
    IntentionalCar,
    IntentionalModel,
    Descripts,
    Remarks
  },
  data() {
    return {
      input: "",
      width: "900px",
      form: {
        name: "",
        region: ""
      },
      child: {
        input: "",
        value: "",
        options: [],
        textarea:""
      },
    };
  },
  methods: {
    // getData:function(){
    //   this.$refs.IntentionLevel.getData();
    // }
  }
};
</script>

<style scoped>
.dmo-form-inline {
  float: left;
  padding: 0px 15px;
  text-align: left;
  margin-top: 20px;
  width: 98%;
}
.dialog .el-dialog__body {
  padding: 10px 10px;
}
.dmo-form-inline .btton {
  float: right;
}
</style>