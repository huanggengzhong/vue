<template>
  <el-row>
      <el-row>
        <el-col :span="6">
          <SourceOfChannel ref="sour"></SourceOfChannel>
        </el-col>
        <el-col :span="6">
          <IntentionLevel :IntentionLevel="Intentl" ref="intentl"></IntentionLevel>
        </el-col>
        <el-col :span="6">
          <IntentionalPrice :IntentionalPrice="Intentp" ref="intentp"></IntentionalPrice>
        </el-col>
        <el-col :span="6">
          <NextReturnVisitTime :NextReturnVisitTime="Nextr" ref="nextr"></NextReturnVisitTime>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <IntentionalCar ref="intentc"></IntentionalCar>
        </el-col>
        <el-col :span="6">
          <IntentionalModel ref="intentm"></IntentionalModel>
        </el-col>

        <el-col :span="6">
          <IntentionalColor :IntentionalColor="Intentco" ref="intentco"></IntentionalColor>
        </el-col>
        <el-col :span="6">
          <dtRetentionTime :dtRetentionTime="Retent" ref="retent"></dtRetentionTime>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
         <dtProVisitTime :dtProVisitTime="ProVisi" ref="proVisi"></dtProVisitTime>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <Descripts :Descripts="Desc" ref="desc"></Descripts>
        </el-col>
        <el-col :span="12">
          <Remarks :Remarks="Remark" ref="remark"></Remarks>
        </el-col>
      </el-row>
   </el-row>
</template>
<script>
import SourceOfChannel from "@/components/crm/EjectWindows/SourceOfChannel";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel";
import IntentionalPrice from "@/components/crm/Select/Common/Customer/IntentionalPrice";
import NextReturnVisitTime from "@/components/crm/Time/NextReturnVisitTime";
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar";
import IntentionalColor from "@/components/crm/Select/Common/Customer/IntentionalColor";
import dtRetentionTime from "@/components/crm/Time/dt_RetentionTime";
import dtProVisitTime from "@/components/crm/Time/dt_ProVisitTime";
import Remarks from "@/components/crm/textbox/Complaint/Remarks";
import IntentionalModel from "@/components/crm/EjectWindows/IntentionalModel";
import Descripts from "@/components/crm/textbox/Public/Descripts";

export default {
  name: "tp_OpportunityMainInfo",
  components: {
    SourceOfChannel,
    IntentionLevel,
    IntentionalPrice,
    NextReturnVisitTime,
    IntentionalCar,
    IntentionalColor,
    dtRetentionTime,
    dtProVisitTime,
    Descripts,
    Remarks,
    IntentionalModel
  },
  data() {
    return {
      Intentl:{
        value:''
      },
      intentp:{
        value:''
      },
      nextr:{
        value:''
      },
      Intentco:{
        value:''
      },
      Retent:{
        value:''
      },
      ProVisi:{
        value:''
      },
      Desc:{
        input:''
      },
      Remark:{
        input:''
      },
    };
  },
  methods: {
    save(){
      console.log("save");
    }
  }
};
</script>
<style scoped>
.el-form-item .el-form-item__content {
  margin-left: 0px;
}

</style>

