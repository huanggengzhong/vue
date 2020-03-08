<!--
* 描述: 线索查看
* 创建人: liuzh
* 创建时间: 2019-08-06
* 记录：
*  2019-07-26 新建 liuzh
*  2019-08-19 联调 zouzx
-->
<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query">查询</el-button>
      <el-button @click="reset">重置</el-button>
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-row>
              <el-col :span="6">
                <txt_CustomerName :txt_CustomerName="cxName"  ref="txt_CustomerName"/>
              </el-col>

              <el-col :span="6">
                <PhoneNumber :PhoneNumber= "cxPhone" ref="PhoneNumber"/>
              </el-col>

            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table
      :data="tabledatas.tableData"
      highlight-current-row
      ref="table"
      :style="{width:'100%',height:tableHeight+'px'}"
      v-loading.body="listLoading"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column
        v-for="item in tabledatas.colnames"
        :key="item.value"
        :label="item.label"
        :prop="item.value"
        align="center"
      ></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
       :total="tabledatas.total?tabledatas.total:0"
        :page-size="tabledatas.pageSize?tabledatas.pageSize:this.$crmcf.PAGE_SIZE"
        :current-page="tabledatas.pageIndex?tabledatas.pageIndex:this.$crmcf.PAGE_INDEX"
      @prev-click="prev" 
      @next-click="next" 
      @current-change="changepage"
    ></el-pagination>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import ApplyExtensionTimes from "@/components/crm/Time/ApplyExtensionTimes";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName.vue"
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber.vue"
import BelongDepartment from "@/components/crm/Select/Complaint/BelongDepartment.vue"
import CloseCaseDate from "@/components/crm/Time/CloseCaseDate.vue"

export default {
  name: "ClueCheck",
  components: {
    ApplyExtensionTimes,
    ServiceMenuNumber,
    txt_CustomerName,
    PhoneNumber,
    BelongDepartment,
    CloseCaseDate,
  },
  mounted() {
    this.$nextTick(() => {
      // 页面渲染完成后的回调
      let that = this;
      this.$crmcf.__setAutoTableStyle(that);
    });
  },
  data() {
    return {
      tableHeight:'',
      listLoading:false,
      cxName:{
        input:''
      },
      cxPhone:{
        input:''
      },
      toggleParam: false,
      tabledatas: {
        colnames: [
          { label: "客户名称", value: "custName" },
          { label: "电话", value: "contactTel" },
          { label: "线索单号", value: "serverOrder" },
          { label: "性别", value: "genderName" },
          { label: "销售顾问", value: "caEmpName" },
          { label: "电销员", value: "csr" },
          { label: "留资时间", value: "remainDataDate" },
          { label: "意向级别", value: "clueLevelCode" },
          { label: "意向车系", value: "carSeriesCn" },
          { label: "线索状态", value: "statusName" },
          { label: "接触方式", value: "cantactWayName" },
          { label: "渠道来源大类", value: "infoChanMName" },
          { label: "渠道来源小类", value: "infoChanDName" },
          { label: "备注", value: "remark" }
        ],
        tableData: [
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryFromDlr,
          apiQueryRow: [
            "custName",
            "contactTel",
            "serverOrder",
            "genderName",
            "caEmpName",
            "csr",
            "remainDataDate",
            "clueLevelCode",
            "carSeriesCn",
            "statusName",
            "cantactWayName",
            "infoChanMName",
            "infoChanDName",
            "remark"
          ],
          params: {
            custName:"",
            contactTel:"",
            handleCode:"1",
            statusArray:["10","20","21","30","31"]
            //dlrCode:"",
          }
        }
      }
    };
  },
  methods: {
    query: function() {
      let that = this;
      var html=""
      if((that.$refs.txt_CustomerName.input==""||that.$refs.txt_CustomerName.input==null)&&(that.$refs.PhoneNumber.input==""||that.$refs.PhoneNumber.input==null))
      {
        html = html + `<div>客户名称和电话必须填写一个</div>`
      }
      if (html != '') {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }
      that.tabledatas.queryObj.params.custName=that.$refs.txt_CustomerName.input;
      that.tabledatas.queryObj.params.contactTel=that.$refs.PhoneNumber.input;
       this.$crmcf.simpleTablequery(that, that.tabledatas, that.tabledatas.queryObj.apiConfig,function(data){
        that.tabledatas.tableData =data.rows;
        })
    },
    reset: function() {
      this.$refs.txt_CustomerName.reset();
      this.$refs.PhoneNumber.reset();
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    prev() {
        let that = this;
        if (this.tabledatas.pageIndex > 1) {
            that.tabledatas.pageIndex = this.tabledatas.pageIndex - 1;
            this.query();
        }
    },
    next() {
        let that = this;
        if (true) {
            that.tabledatas.pageIndex = this.tabledatas.pageIndex + 1;
            this.query();
        }
    },
    changepage(index){
      let that=this
      that.tabledatas.pageIndex=index
      this.query()
    }
  }
};
</script>
<style>
/* .filter-params .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col{
  margin-bottom: 0px;
}

.toggleParam{
  z-index: 1;
  margin: 13px 0 0 0;
} */
</style>
