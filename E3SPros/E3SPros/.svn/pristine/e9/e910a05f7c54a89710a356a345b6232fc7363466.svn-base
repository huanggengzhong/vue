<template>
  <div class="app-container">
    <div class="filter-container filter-title">申诉处理信息</div>
    <div class="filter-container filter-params query-params">
      <el-form>
        <el-row>
          <el-col :span="8">
            <AppealStatus ref="AppealStatus"/>
          </el-col>
          <el-col :span="8">
            <ValidOrInvalid ref="ValidOrInvalid"/>
          </el-col>
          <el-col :span="8">
            <WhetherUrgent ref="WhetherUrgent" />
          </el-col>

          <el-col :span="12">
            <ClientFeedback ref="ClientFeedback" />
          </el-col>
          <el-col :span="12">
            <ReviewInstructions ref="ReviewInstructions"/>
          </el-col>
            
          <el-col :span="12">
            <Appealstatement/>
          </el-col>
          <el-col :span="12">
            <AppealReviewInstructions/>
          </el-col>
            
          <el-col :span="12">
            <ModifyDescription/>
          </el-col>
          <el-col :span="12">
            <ApplyCloseCaseDirection/>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
import AppealStatus from "@/components/crm/Select/Complaint/AppealStatus";
import ValidOrInvalid from "@/components/crm/Select/Whether/ValidOrInvalid";
import WhetherUrgent from "@/components/crm/Select/Whether/WhetherUrgent"
import ClientFeedback from "@/components/crm/textbox/Complaint/ClientFeedback";
import ReviewInstructions from "@/components/crm/textbox/Complaint/ReviewInstructions";
import Appealstatement from "@/components/crm/textbox/Complaint/Appealstatement";
import AppealReviewInstructions from "@/components/crm/textbox/Complaint/AppealReviewInstructions";
import ModifyDescription from "@/components/crm/textbox/Complaint/ModifyDescription";
import ApplyCloseCaseDirection from "@/components/crm/textbox/Complaint/ApplyCloseCaseDirection";
export default {
  name: "AppealProcessInfo",
  components: {
    AppealStatus,
    ValidOrInvalid,
    WhetherUrgent,
    ClientFeedback,
    ReviewInstructions,
    Appealstatement,
    AppealReviewInstructions,
    ModifyDescription,
    ApplyCloseCaseDirection
  }
};
</script>
