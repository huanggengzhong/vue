/*
 * @Author: xgz 
 * @Date: 2019-07-26 09:31:33 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-08-15 15:44:01
 */



<template>
  <div class="app-container app-container-table">
     <div class="filter-container filter-button">
      <!--<el-button  @click="query()">查询</el-button>
      <el-button @click="reset()">重置</el-button>
      <el-button @click="add()">新增</el-button> -->
      <el-button type="primary" @click="save()">保存</el-button>
      <el-button @click="close()">关闭</el-button>
      
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm query-params">
      <el-form label-position="right" label-width="80px">
        <el-row>
          <el-col :span="22">
            <el-row>
              <el-col :span="11">
                <ModelName :ModelName="mn" ref="ModelName"></ModelName>
              </el-col>
              <el-col :span="11">
                <Status :Status="status" ref="Status"></Status>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="22">
                <ModelContentTextarea :ModelContentTextarea="mct" ref="ModelContentTextarea"></ModelContentTextarea>
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

    <div class="filter-container filter-title-crm">查询结果</div>
    <!-- <Table :tabledatas="tabledatas" ref="table"></Table> -->
  </div>
</template>
<script>
import ModelName from "@/components/crm/textbox/Public/Message/ModelName";
import Status from "@/components/crm/Select/Common/Customer/Status";
import ModelContentTextarea from "@/components/crm/textbox/Public/Message/ModelContentTextarea";


import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";

export default {
  name: "crmMsgMEpage",
  components: {
    ModelName,
    Status,
    ModelContentTextarea,
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
      status: {
        value: ""
      },
      mn: {
        input: ""
      },
       mct: {
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
    save:function(){

    },
     close:function(){

    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    }
  }
};
</script>


