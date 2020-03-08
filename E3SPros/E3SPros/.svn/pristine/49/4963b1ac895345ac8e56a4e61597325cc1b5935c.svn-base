<!--维护提醒设置子规则 CQ-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-params query-params">
      <el-form label-position="right">
        <!------------第一行------------>
        <el-row>
          <el-col :span="8">
          <!--对象类型-->
            <sct_ObjectType :sct_ObjectType="sct_ObjectType" ref="sct_ObjectType"></sct_ObjectType>
          </el-col>
          <el-col :span="8">
           <!--提醒方式-->
            <RemindWay :RemindWay="RemindWay" ref="RemindWay"></RemindWay>
          </el-col>
          <el-col :span="8">
           <!--短信模板-->
            <MessageModel :MessageModel="MessageModel" ref="MessageModel"></MessageModel>
          </el-col>
        </el-row>

        <!------------第二行------------>
        <el-row>
          <el-col :span="8">
           <!--对象形式-->
            <sct_ObjectForm :sct_ObjectForm="sct_ObjectForm" ref="sct_ObjectForm"></sct_ObjectForm>
          </el-col>
          
        </el-row>
      </el-form>
    </div>
      <div class="filter-container filter-button">
      <el-button type="primary" @click="save()">保存</el-button>
    </div>
  </div>
</template>
<script>
import sct_ObjectType from "@/components/crm/Select/RemindUpgradeSet/sct_ObjectType.vue";
import RemindWay from "@/components/crm/Select/Common/RemindWay.vue";
import MessageModel from "@/components/crm/EjectWindows/MessageModel.vue";
import sct_ObjectForm from "@/components/crm/Select/Common/sct_ObjectForm.vue";

import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name: "RemindChildSet",
  components: {
    sct_ObjectType,
    RemindWay,
    MessageModel,
    sct_ObjectForm
  },
  data() {
    return {
      toggleParam: false,
      tabledatas: {
        // 操作列
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "对象类型", value: "" },
          { label: "提醒方式", value: "" },
          { label: "对象形式", value: "" },
          { label: "对象名称", value: "" },
          { label: "信息模板", value: "" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: [
            "sct_ObjectType",
            "RemindWay",
            "MessageModel",
            "sct_ObjectForm"
          ],
          params: {
            sct_ObjectType: "",
            RemindWay: "",
            MessageModel: "",
            sct_ObjectForm: ""
          }
        }
      },
      //初始化value
      sct_ObjectType: {
        value: ""
      },
      RemindWay: {
        value: ""
      },
      MessageModel: {
        value: ""
      },
      sct_ObjectForm: {
        value: ""
      }
    };
  },
  methods: {
    query: function() {
      this.queryObj.params.sct_ObjectType = this.$refs.sct_ObjectType.value;
      this.queryObj.params.RemindWay = this.$refs.RemindWay.value;
      this.queryObj.params.MessageModel = this.$refs.MessageModel.value;
      this.queryObj.params.sct_ObjectForm = this.$refs.sct_ObjectForm.value;
      this.$refs.Table.getDatas();
    },
    reset: function() {},
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    }
  }
};
</script>
<style>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col {
  margin-bottom: 0px;
}
</style>
