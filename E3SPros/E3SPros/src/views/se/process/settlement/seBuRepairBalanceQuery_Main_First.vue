
<template>
  <!-- <span>{{ this.father.isGatherName }}</span> -->
  <div>
    <div>
      <div class="kk">
        <span>本次应收</span>
        <span>1876.00</span>
      </div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="6">
            <label>业务单号</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>收款项目</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>客户名称</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>业务人员</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
        </el-row>
        <el-row :gutter="26">
          <el-col :span="6">
            <label>应收金额</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>已收金额</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>收款金额</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>备 注</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
        </el-row>
        <el-row :gutter="26">
          <el-col :span="6">
            <label>本次实收</label>
            <el-input size="small" v-model="$route.params.the_data.repairMan" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>折扣金额</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6">
            <el-button size="small" @click="raiseMoney">收款</el-button>
          </el-col>
        </el-row>
      </div>

      <div class="kk">
        <span>常用收款方式</span>
      </div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="6">
            <label>现金</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>刷卡</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>挂账</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
        </el-row>
      </div>

      <div class="kk">
        <span>其他收款方式</span>
      </div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="6">
            <label>冲预收</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>内部费用</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>转账</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>代金券</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
        </el-row>
        <el-row :gutter="26">
          <el-col :span="6">
            <label>微信</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>支付宝</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>应退客户</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
        </el-row>
      </div>

      <div class="kk">
        <span>单据详情</span>
      </div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="6">
            <label>工单号</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>服务代表</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>报修人</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>车主姓名</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
        </el-row>
        <el-row :gutter="26">
          <el-col :span="6">
            <label>车牌号</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>VIN码</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>车辆品牌</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>车系名称</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
        </el-row>
        <el-row :gutter="26">
          <el-col :span="6">
            <label>车型</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6">
            <label>车身颜色</label>
            <el-input size="small" v-model="listQuery.dataInfo.carBrandCode" placeholder="请输入内容" />
          </el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6">
            <span>工单明细</span>
          </el-col>
        </el-row>
      </div>

      <div class="kk">
        <span>应收信息</span>
        <el-table
          v-loading="listLoading"
          :data="list"
          border
          fit
          stripe
          highlight-current-row
          height="350px"
        >
          <el-table-column align="center" label="序号">
            <template slot-scope="scope">{{ scope.$index + 1 }}</template>
          </el-table-column>
          <el-table-column label="业务类别">
            <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template>
          </el-table-column>
          <el-table-column label="维修类别">
            <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template>
          </el-table-column>
          <el-table-column label="应收类型">
            <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template>
          </el-table-column>
          <el-table-column label="费用总计">
            <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template>
          </el-table-column>
          <el-table-column label="费用预估">
            <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { apiSeBalance } from "@/api/graphQLApiList/se";
import { doInit } from "@/api/se/process/settlement/seBuRepairBalanceQuery";

export default {
  name: "seBuRepairBalanceQuery_Main",
  data() {
    return {
      listLoading: null,
      father: this.$route.params.the_data,
      the_oemcode: this.$route.params.the_oemcode,
      the_groupcode: this.$route.params.the_groupcode,
      list: null,
      listQuery: {
        dataInfo: {
          oemCode: "",
          groupCode: "",
          repairOrderId: "",
          repairGatheringId: "",
          vin: "",
          repairOrderCode: ""
        }
      }
    };
  },
  created() {
    this.initPage();
  },
  methods: {
    initPage() {
      const that = this;
      console.log("加载页面"+this.father);
      this.listQuery.oemCode = this.$route.params.the_oemcode;
      this.listQuery.groupCode = this.$route.params.the_groupcode;
       this.listQuery.repairOrderId = this.$route.params.the_data.repairOrderId;
       this.listQuery.repairGatheringId = this.$route.params.the_data.repairGatheringId;
       this.listQuery.vin = this.$route.params.the_data.vin;
       this.listQuery.repairOrderCode = this.$route.params.the_data.repairOrderCode;
      console.log("#"+this.listQuery.dataInfo);
       doInit(that.listQuery.dataInfo).then(response => {
        that.list = response.data[apiSeBalance.BseBuRepairBalanceInit.ServiceCode].rows;
      });
    },
    raiseMoney() {
      console.log("传入的father"+this.$route.params.the_data.repairMan);
    }
  },

  watch: {
    cap: function() {
      console.log("参数变化" + this.fahter);
    }
  }
};
</script>

<style>
.kk {
  text-align: left;
  font-size: 14px;
}
</style>

