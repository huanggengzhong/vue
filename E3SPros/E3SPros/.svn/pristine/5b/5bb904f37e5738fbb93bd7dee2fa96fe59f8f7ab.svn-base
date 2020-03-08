<!--
* 描述: 已办任务-线索培育
* 创建人: dxuem
* 创建时间: 2019-07-27 15:42
* 记录：
*  20190727 新建 dxuem
-->

<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query(1)">查询</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-row>
              <el-col :span="6">
                <CustomerName :txt_CustomerName="Custn" ref="custn"></CustomerName>
              </el-col>
              <el-col :span="6">
                <ContactWay :ContactWay="Contactw" ref="contactw" @changeCode="change"></ContactWay>
              </el-col>
              <el-col :span="6">
                <ChannelBigClass :ChannelBigClass="Chanbig" ref="chanbig"></ChannelBigClass>
              </el-col>
              <el-col :span="6">
                <ChannelSmalTypeName :ChannelSmalTypeName="Chansmall" ref="chansmall"></ChannelSmalTypeName>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              <!-- <el-row> -->
              <el-col :span="6">
                <PhoneNumber :PhoneNumber="Phone" ref="phone"></PhoneNumber>
              </el-col>
              <el-col :span="6">
                <BuildMenuDate :dt_BuildMenuDates="Buildm" ref="buildm"></BuildMenuDate>
              </el-col>
              <el-col :span="6">
                <CarBrand :sct_CarBrand="carbrand" ref="carbrand"></CarBrand>
              </el-col>
              <el-col :span="6">
                <NumberOfCleanings :NumberOfCleanings="Cleannum" ref="cleannum"></NumberOfCleanings>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <ClueNumber :ClueNumber="Cluen" ref="cluen"></ClueNumber>
              </el-col>
              <el-col :span="6">
                <IntentionLevel :IntentionLevel="Intenl" ref="intenl"></IntentionLevel>
              </el-col>
              <!-- </el-row> -->
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
    <el-table
      :data="tabledatas.tableData"
      highlight-current-row
      style="width: 100%;height:330px"
      v-loading.body="false"
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
      :total="tabledatas.total"
      :page-size="tabledatas.pagesize"
      :current-page="tabledatas.pageindex"
      @prev-click="prev"
      @next-click="next"
      @current-change="changepage"
    ></el-pagination>
  </div>
</template>
<script>
import CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import ContactWay from "@/components/crm/Select/Common/ContactWay";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass";
import ChannelSmalTypeName from "@/components/crm/textbox/Clue/ChannelSmalTypeName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import BuildMenuDate from "@/components/crm/Time/dt_BuildMenuDates";
import NumberOfCleanings from "@/components/crm/textbox/Clue/CallCenterClue/NumberOfCleanings";
import CarBrand from "@/components/crm/Select/Common/sct_CarBrand";
import ClueNumber from "@/components/crm/textbox/Clue/ClueNumber";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel";
import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "crmBeDoneTask",
  components: {
    Table,
    CustomerName,
    ContactWay,
    ChannelBigClass,
    ChannelSmalTypeName,
    PhoneNumber,
    BuildMenuDate,
    CarBrand,
    ClueNumber,
    IntentionLevel,
    NumberOfCleanings
  },
  data() {
    return {
      toggleParam: false,
      Custn: {
        input: ""
      },
      Phone: {
        input: ""
      },
      Contactw: {
        value: ""
      },
      Cluen: {
        input: ""
      },
      Buildm: {
        value: ""
      },
      carbrand: {
        value: ""
      },
      Cleannum: {
        input: ""
      },
      Chanbig: {
        input: "",
        pcode: ""
      },
      Chansmall: {
        input: ""
      },
      Intenl: {
        value: ""
      },
      tabledatas: {
        colnames: [
          { label: "车辆品牌", value: "carBrandName" },
          { label: "线索单号", value: "serverOrder" },
          { label: "客户名称", value: "custName" },
          { label: "电话", value: "contactTel" },
          { label: "备用电话", value: "backupTel" },
          { label: "意向车系", value: "carSeriesCn" },
          { label: "接触方式", value: "cantactWayName" },
          { label: "渠道大类", value: "infoChanMName" }, //
          { label: "渠道小类", value: "infoChanDName" }, //
          { label: "清洗次数", value: "cleanQty" }, //
          { label: "建单人", value: "createdName" },
          { label: "建单时间", value: "createdDate" },
          { label: "结案时间", value: "caseTime" },
          { label: "意向级别", value: "clueLevelCode" }
        ],
        tableData: [
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryFromHeadquarters,
          apiQueryRow: [
            "carBrandName",
            "serverOrder",
            "custName",
            "contactTel",
            "backupTel",
            "carSeriesCn",
            "cantactWayName",
            "infoChanMName",
            "infoChanDName",
            "cleanQty",
            "createdName",
            "caseTime",
            "clueLevelCode"
          ],
          params: {
            // custName: "",
            // handleCode: "0",
            // infoChanMCode: "",
            // infoChanDName: "",
            // contactTel: "",
            // createdDateStart: "",
            // createdDateEnd: "",
            // carBrandCode: "",
            // // cleanQty:"",
            // serverOrder:"",
            // clueLevelCode:"",
            // statusArray: ["5"]
            //cancactWayCode:"",
            //serverClassCode:"",
            //serverClassName:"",
            //classLevel:"",
            //parentCode:"",
            //ComplaintExReview.vueserverType:"",
            //isEnable:"",
            //createdDateStart:"",
            //createdDateEnd:"",
            //parentName:""
          }
        },
        pagesize:10,
        pageindex: 1,
        total: 0
      }
    };
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    change(val) {
      let that = this;
      debugger
      that.Chanbig.pcode=val
      if(that.$refs.chanbig!=undefined){
        that.$refs.chanbig.getData();
      }
    },
    query(val) {
      debugger;
      let that = this;
      that.tabledatas.queryObj.params={}
      that.$set(that.tabledatas.queryObj.params, 'handleCode', "0");
      that.$set(that.tabledatas.queryObj.params, 'statusArray', ["5"]);
      if(that.$refs.custn.input!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'custName', that.$refs.custn.input);
      }
      if(that.$refs.contactw.value!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'cancactWayCode', that.$refs.contactw.value);
      }
      if(that.$refs.chanbig.value!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'infoChanMCode', that.$refs.chanbig.value);
      }
      if(that.$refs.chansmall.input!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'infoChanDName', that.$refs.chansmall.input);
      }
      if(that.$refs.phone.input!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'contactTel', that.$refs.phone.input);
      }
      if(that.$refs.buildm.value!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'createdDateStart', that.$refs.buildm.value[0]+" 00:00:00");
        that.$set(that.tabledatas.queryObj.params, 'createdDateEnd', that.$refs.buildm.value[1]+" 23:59:59");
      }else{
        that.$set(that.tabledatas.queryObj.params, 'createdDateStart', "");
        that.$set(that.tabledatas.queryObj.params, 'createdDateEnd', "");
      }
      if(that.$refs.carbrand.value!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'carBrandCode', that.$refs.carbrand.value);
      }
      if(that.$refs.cleannum.input!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'cleanQty', that.$refs.cleannum.input);
      }
      if(that.$refs.cluen.input!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'serverOrder', that.$refs.cluen.input);
      }
      if(that.$refs.intenl.value!="")
      {
        that.$set(that.tabledatas.queryObj.params, 'clueLevelCode', that.$refs.intenl.value);
      }
      let queryObj = {
        // api配置
        apiConfig: that.tabledatas.queryObj.apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: that.tabledatas.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.tabledatas.pagesize,
          pageIndex: val!=undefined?1:that.tabledatas.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" 
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          if(val==undefined&&(response.data[queryObj.apiConfig.ServiceCode].rows==null||
            response.data[queryObj.apiConfig.ServiceCode].rows.length==0))
            {
              that.query(1);
            }else{
              that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
            }
        }
      });
    },
    reset() {
      this.$refs.phone.reset();
      this.$refs.contactw.reset();
      this.$refs.custn.reset();
      this.$refs.cluen.reset();
      this.$refs.buildm.reset();
      this.$refs.carbrand.reset();
      this.$refs.cleannum.reset();
      this.$refs.chansmall.reset();
      this.$refs.intenl.reset();
      this.$refs.chanbig.reset();
    },
    save() {
      console.log("save");
    },
    prev() {
      let that = this;
      if (this.tabledatas.pageindex > 1) {
        that.tabledatas.pageindex = this.tabledatas.pageindex - 1;
        this.query();
      }
    },
    next() {
      let that = this;
      if (true) {
        that.tabledatas.pageindex = this.tabledatas.pageindex + 1;
        this.query();
      }
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    }
  }
};
</script>
<style scoped>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col {
  margin-bottom: 0px;
}
.filter-params .long-col .el-input {
  width: 85%;
}
.filter-params .long-col label {
  width: 15%;
}
.filter-params .long-col .el-textarea {
  width: 85%;
}
.el-table {
  overflow-x: scroll;
}
.el-table_body {
  overflow: scroll;
}
</style>