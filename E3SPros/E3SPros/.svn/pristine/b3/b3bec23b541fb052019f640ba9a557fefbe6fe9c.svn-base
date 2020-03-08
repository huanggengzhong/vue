/*
 * @Author: xgz 
 * @Date: 2019-07-26 10:59:22 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-07-26 11:15:22
 */
<template>
  <div class="app-container app-container-table">
     <div class="filter-container filter-button">
      <!--<el-button  @click="query()">查询</el-button>
      <el-button @click="reset()">重置</el-button>
      <el-button @click="add()">新增</el-button> -->
      <!-- <el-button type="primary" @click="save()">保存</el-button>
      <el-button @click="close()">关闭</el-button> -->
      <el-button  type="primary" @click="send()">发送</el-button>
    </div>

    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params query-params">
      <el-form label-position="right">
        <el-row>
          <el-col :span="24">
            <el-row >
              <el-col :span="8">
                <MessageModel :MessageModel="mm" ref="MessageModel"></MessageModel>
              </el-col>
              <el-col :span="8">
                <ReceiverCellPhone :ReceiverCellPhone="rcp" ref="ReceiverCellPhone"></ReceiverCellPhone>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <MessageContent :MessageContent="mc" ref="MessageContent"></MessageContent>
              </el-col>
              
            </el-row>
          </el-col>
          <!-- <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              
            </el-row>
          </el-col>-->
        </el-row>
      </el-form>
    </div>

    <div class="filter-container filter-title">查询结果</div>
    <!-- <Table :tabledatas="tabledatas" ref="table"></Table> -->
  </div>
</template>
<script>
import MessageModel from "@/components/crm/EjectWindows/MessageModel";
import ReceiverCellPhone from "@/components/crm/textbox/Public/Message/ReceiverCellPhone";
import MessageContent from "@/components/crm/textbox/Public/Message/MessageContent";


import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";

export default {
  name: "crmSendMsgpage",
  components: {
    MessageModel,
    ReceiverCellPhone,
    MessageContent,
    Table
  },
  data() {
    return {
      toggleParam: false,
      delayreason: "",
    //   tabledatas: {
    //     // 操作列
    //     isoperat: false,
    //     havedistrbute: false,
    //     haveEdit: false,
    //     haveDel: false,
    //     colnames: [
    //       { label: "编辑", value: "CREATED_DATE_START" },
    //       { label: "模板名称", value: "" },
    //       { label: "短信模板内容", value: "" },
    //       { label: "状态", value: "" },
    //       { label: "创建人", value: "CREATOR" },
    //       { label: "创建时间", value: "" }
    //     ],
    //     queryObj: {
    //       // .后面是服务编码，.前面固定写死
    //       apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
    //       apiQueryRow: ["CREATED_DATE_START","","","", "CREATOR",""],	

    //       params: {
    //         delayId: "",
    //         createdDateStart: "",
    //         createdDateEnd: "",
    //         serverOrder: "",
    //         delayStatus: ""
    //       }
    //     }
    //   },
      mm: {
        value: ""
      },
      rcp: {
        input: ""
      },
       mc: {
        input: ""
      },
    };
  },
  methods: {
    query: function() {
      this.$refs.table.getData();
      //this.queryObj.params=this.$refs.applytime.value;
      this.queryObj.params.serverOrder = this.$refs.ModelName.input;
      this.queryObj.params.serverOrder = this.$refs.MsgModelContent.input;
      this.queryObj.params.delayStatus = this.delayreason;
    },
    reset: function() {
      this.$refs.applytime.reset();
      this.$refs.sermenu.reset();
      this.delayreason = "";
    },
    send:function(){

    },
     close:function(){

    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    }
  }
};
</script>


