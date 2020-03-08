<!--
* description: 到店确认
* author: zouzx
* createdDate: 2019-10-17
-->
<template>
  <section>
    <el-dialog
      class="editsettingPrice"
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="filter-container">
          <div style="float:right">
            <el-button type="primary" size="small" @click="saveToShop">保存</el-button>
          </div>
        </div>
        <div class="filter-container filter-params-crm" style="float:right">
          <div style="width:30%;float:left">
          <div class="filter-container filter-title-crm" >来店目的</div>
          <div class="filter-params-crm">
            <el-row>
              <el-col style="text-align: left;">
                <el-radio-group v-model="radioMDQR" size="small" @change="handleLDMD" disabled>
                  <el-radio-button v-for="itm in radListLDMD" 
                  :label="itm.lookupValueName" 
                  :key="itm.lookupValueCode">{{itm.lookupValueName}}</el-radio-button>
                </el-radio-group>
              </el-col>
            </el-row>
          </div>
          <div class="filter-container filter-title-crm" >停留时间</div>
          <div class="filter-params-crm">
            <el-form label-position="right">
            <el-row>
              <el-col :span="24" class="crm-label-required">
                <el-form-item label="到店时间">
                  <el-time-select
                  v-model="ddTimeQR"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                  }"
                  placeholder="选择时间">
                </el-time-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="crm-label-required">
                <el-form-item label="离店时间">
                  <el-time-select
                  v-model="ldTimeQR"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                  }"
                  placeholder="选择时间">
                </el-time-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row>
              <el-col :span="24" style="text-align:left">
                <ul>
                  <li>关联意向客户可以为空</li>
                  <li>如果客户已经意向客户，请查询并选择对应的意向客户</li>
                  <li>意向级别为D级别的客户，需要明确客户来店的目的后再做关联，假设该意向客户有意增购，则不能在此直接关联，需要做客户留档新增意向，假设客户来店只是办手续无意向增购则可直接关联该客户</li>
                </ul>
              </el-col>
            </el-row>
            </el-form>
          </div>
        </div>
        <div style="width:70%;float:right">
          <div class="filter-container filter-title-crm">关联意向客户</div>
          <div class="filter-params-crm">
            <el-form label-position="right">
            <el-row>
              <el-col :span="9">
                <txt_CustomerName :txt_CustomerName="form.custName" ref="custadd" />
              </el-col>
              <el-col :span="9">
                <PhoneNumber :PhoneNumber="form.contactTel" ref="contactTel" />
              </el-col>
              <el-col :span="6">
                <el-button size="small" @click="queryYX">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
          <Table :tabledatas="tabledatasXZ" ref="tableXZ" />
          </div>
        </div>
        </div>
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import Table from "@/components/crm/table/Table";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
export default {
  name: "toShopQRDiag",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
      Table,
      txt_CustomerName,
      PhoneNumber
  },
  props: {
    historyPopupsVisible: { type: Boolean, default: false },
    // 弹窗状态（add/edit/view）
    // 新增、编辑弹窗Key
    historyPopupsKey: "",
    // 新增、编辑弹窗状态（add/edit/view）
    historyPopupsState: "",
    // 新增、编辑行对象
    historyRowData: {},
    // 弹窗状态（add/edit/view）
    popupsState: ""
  },
  data() {
    return {
        radioMDQR:"看车",
        bccomeId:"",
        bccomeState:"",
        bccustSource:"",
        bcYXKH:"",
        radListLDMD:this.getDrpList(),
        ddTimeQR:"",
        ldTimeQR:"",
        form: {
            custName: {
            input: ""
            },
            contactTel: {
            input: ""
            }
        },
        tabledatasXZ: {
          // 操作列
          ismuti: false,
          isoperat: false,
          havedistrbute: false,
          haveEdit: false,
          haveDel: false,
          pagesize:10,
          pageindex:1,
          colnames: [
            { label: "客户姓名", value: "custName" },
            { label: "联系电话", value: "phone" },
            { label: "销售顾问", value: "" },
            { label: "意向级别", value: "" }
          ],
          queryObj: {
            // .后面是服务编码，.前面固定写死
            apiConfig: crmApis.mdmDlrCustInfoQuery,
            apiQueryRow: [
              "custName",
              "phone"
            ],
            params: {
              oemCode:"1",
              groupCode:"1",
              isPV800:"1",
            }
          }
        },
        // 保存API配置对象
        apiConfig: null,

        // 动态组件-按钮
        tableButtons: [],
        // 动态生成网格列
        tableCols: [],
        // 标题
        textMap: {
            edit: "确认到店"
        },
        //表单查询数据
        formField: {
        },
        isUseRowData: true
    };
  },
  created() {
    // 赋值formField
    if (this.popupsState === "edit") {
      if (this.isUseRowData) {
        this.radioMDQR = this.$attrs.dynamicEditRowData["comePurposeName"];
        this.BCldmd = this.$attrs.dynamicEditRowData["comePurposeName"];
        this.bccomeId = this.$attrs.dynamicEditRowData["comeId"];
        this.bccomeState = this.$attrs.dynamicEditRowData["comeState"];
        this.bccustSource = this.$attrs.dynamicEditRowData["custSource"];
      }
    }
  },
  methods: {
    enable(val) {
      let that=this;
      debugger
    },
    getDrpList: function() {
      let that = this;
      let queryObj = {
        // api配置
        apiConfig: crmApis.mdsLookupValueQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["lookupValueCode","lookupValueName"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {lookupTypeCode:"DB0060"}//值列表编码
        }
      };
      let paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" 
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.radListLDMD=response.data[queryObj.apiConfig.ServiceCode].rows
        }
      });
    },
    handleLDMD(val) {
      let that=this
      that.BCldmd=val
    },
    getDateStr: function() {
      let dd = new Date();
      dd.setDate(dd.getDate());
      let y = dd.getFullYear();
      let m = dd.getMonth() + 1;
      let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return (
        y +
        "-" +
        (m < 10 ? "0" + m : m) +
        "-" +
        d
      );
    },
    //确认到店保存
    saveToShop(){
      let that = this
      //校验
      debugger
      var html=""
      if(that.ddTimeQR=="")
      {
        html = html + `<div>请选择到店时间</div>`
      }
      if(that.ldTimeQR=="")
      {
        html = html + `<div>请选择离店时间</div>`
      }
      if(that.ddTimeQR!=""&&that.ldTimeQR!="")
      {
        var timeStr = that.getDateStr()+" "+that.ddTimeQR;
        var time1 = new Date(timeStr).getTime();
        let dd = new Date();
        var timeStr2 = that.getDateStr()+" "+that.ldTimeQR;
        var time2 = new Date(timeStr2).getTime();
        if (time1 > time2) {
          html = html + `<div>离店时间不能小于到店时间</div>`
        }
      }
      if(that.$refs.tableXZ.rowData!=null){
        if(that.$refs.tableXZ.rowData.custName!=undefined)
        {
          that.bccomeState="3";
          that.bcYXKH=that.$refs.tableXZ.rowData.custName;
        }
      }
      else{
        that.bcYXKH="";
      }
      if (html != '') {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }
      var strmd="";
      for (var j = 0; j < that.radListLDMD.length; j++) {
        if (that.radListLDMD[j].lookupValueName == that.BCldmd) {
          strmd=that.radListLDMD[j].lookupValueCode
        }
      }
      //赋值
      var saveObj={}
      that.$set(saveObj, "comeId", that.bccomeId);
      that.$set(saveObj, "comeState", that.bccomeState);
      that.$set(saveObj, "custSource", that.bccustSource);
      that.$set(saveObj, "comePurposeId", strmd);
      that.$set(saveObj, "comeTime", that.getDateStr()+" "+that.ddTimeQR+":00");
      that.$set(saveObj, "leaveDate", that.getDateStr()+" "+that.ldTimeQR+":00");
      that.$set(saveObj, "intentCustId", that.bcYXKH);

      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.mdmBuComeOrderMutationConfirm,
        // 需要调用的API服务配置
        apiServices: [{
            //表格中台返回网格的字段
            apiQueryRow:[]
        }],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: saveObj
        }
      }
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response =>{
        if(
          response.data[queryObj.apiConfig.ServiceCode].result === "1"  
          //&&response.data[queryObj.apiConfig.ServiceCode].rows!=""
          ){
          //this.dialogVisible = false
          that.$crmcf.showMessages(that,'success','操作成功')
          //that.$crmcf.crmcloseView(that,'crmMyToBe')
          }else{
            that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
          }
      })
    },
    queryYX: function() {
      let that = this;
      debugger
      //that.loadFlag = true;//加载动画
      // 查询参数
      //that.tabledatasXZ.queryObj.params.serverOrder="1"
      setTimeout(function() {
        if (that.$refs.tableXZ != undefined) {
          that.$refs.tableXZ.getData();
        }
      }, 100);
    },
  }
};
</script>
<style>
.filter-params-crmtab .el-col label {
  width: 12%;
}
.el-radio-button--medium .el-radio-button__inner{
  width:100%;
}
.el-radio-button--small .el-radio-button__inner{
  width:100%;
}
.el-checkbox-button--mini .el-checkbox-button__inner{
  width:100%;
}
</style>

