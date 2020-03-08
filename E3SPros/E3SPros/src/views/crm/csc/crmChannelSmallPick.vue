<!--
* 描述: 渠道小类维护
* 创建人: hejin
* 创建时间: 2019-07-26
* 记录：
*  20190726 新建 hejin
  联调成功
* 问题一：api字段缺失
  问题二：保存功能还未实现-字段缺失
-->

<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="query">查询</el-button>
      <el-button size="small" @click="add">新增</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-title-crm">查询区</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <el-col :span="6">
            <ContactWay :ContactWay="DContactWay" ref="FContactWayMainRef" @changeCode="contactWayChange"></ContactWay>
          </el-col>
          <el-col :span="6">
            <ChannelBigClass :ChannelBigClass="FChannelBigClassMain" ref="FChannelBigClassMainRef"></ChannelBigClass>
          </el-col>
          <el-col :span="6">
            <ChannelSmalTypeName :ChannelSmalTypeName="FChannelSmalTypeName" ref="FChannelSmalTypeName"></ChannelSmalTypeName>
          </el-col>
          <el-col :span="6">
            <EnableOrDisable :EnableOrDisable="FEnableOrDisable" ref="FEnableOrDisable"></EnableOrDisable>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table :data="tabledatas.tableData" highlight-current-row ref="table"
      :style="{width:'100%',height:tableHeight+'px'}" v-loading.body="listLoading" element-loading-text="Loading" border fit>
      <el-table-column type="index" label="序号" width="55" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope" align="center">
          <el-button type="text" size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        </template>
      </el-table-column>
      <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pageSize" :current-page="tabledatas.pageIndex" @prev-click="prev" @next-click="next" @current-change="changepage"></el-pagination>

    <!--修改弹窗-->
    <el-dialog title="修改" :visible.sync="dialogVisible" width="900px" center modal-append-to-body append-to-body>
      <div class="filter-container filter-params-crm" style="height:350px">
        <el-col>
          <el-form label-position="right" align="center" ref="form">
            <el-row>
              <!--接触方式-->
              <el-col :span="12" class="crm-label-required">
                <ContactWay :ContactWay="DContactWayAdd" ref="DContactWayAddRef"  @changeCode="contactWayChangeAdd" ></ContactWay>
              </el-col>
              <!--渠道大类-->
              <el-col :span="12" class="crm-label-required">
                <ChannelBigClass :ChannelBigClass="DChannelBigClassAdd"   ref="DChannelBigClassAddRef"></ChannelBigClass>
              </el-col>
            </el-row>
            <el-row>
              <!--渠道小类编码-->
              <el-col :span="12" class="crm-label-required">
                <ChannelSmallTypeCode :ChannelSmallTypeCode="DChannelSmallTypeCode" ref="DChannelSmallTypeCode"></ChannelSmallTypeCode>
              </el-col>
              <!--渠道小类名称-->
              <el-col :span="12" class="crm-label-required">
                <ChannelSmalTypeName :ChannelSmalTypeName="DChannelSmalTypeName" ref="DChannelSmalTypeName"></ChannelSmalTypeName>
              </el-col>
            </el-row>
            <el-row>
              <!--是否启用-->
              <el-col :span="12" class="crm-label-required">
                <EnableOrDisable :EnableOrDisable="DEnableOrDisable" ref="DEnableOrDisable"></EnableOrDisable>
              </el-col>
              <!--线性审核类型-->
              <el-col :span="12" class="crm-label-required">
                <el-form-item label="线索审核类型">
                  <el-switch v-model="DReview" active-text="人工" inactive-text="自动" @change="change" style="padding-left:85px"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" class="crm-label-required">
                <WhetherClean :WhetherClean="DWhetherClean" ref="DWhetherClean"></WhetherClean>
              </el-col>
              <el-col :span="12">
                <WhetherAllowEntry :WhetherAllowEntry="DWhetherAllowEntry" ref="DWhetherAllowEntry"></WhetherAllowEntry>
              </el-col>
            </el-row>
            <el-row>
              <!--隐藏框-->
              <div v-if="show" class="filter-container filter-params-crm">
                <el-row>
                  <el-col :span="24">
                    <el-form-item label="满足以下字段的均被自动审核：">
                      <el-checkbox v-model="isCust" label="客户名称"></el-checkbox>
                      <el-checkbox v-model="isPhone" label="电话"></el-checkbox>
                      <el-checkbox v-model="intentDlr" label="意向网点"></el-checkbox>
                      <el-checkbox v-model="intentCarType" label="意向车型"></el-checkbox>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
              <el-row>
                <el-col :span="12">
                  <RemindWay :RemindWay="DRemindWay" ref="DRemindWayAddRef"></RemindWay>
                </el-col>
                <el-col :span="12">
                  <RoleSelection :fromDatas="DRoleSelection" ref="DRoleSelection" label></RoleSelection>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="已回访自动失效时效设置">
                    <el-input v-model="input1" placeholder="请输入" suffix-icon="el-icon-search"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="是否去重">
                    <el-select v-model="value2" placeholder="请选择" @change="change1()">
                      <el-option v-for="item in options2" :key="item.value2" :label="item.label2" :value="item.value2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row style="float:right">
                <el-form-item>
                  <el-button type="primary" size="small" @click="save('form')">保存</el-button>
                  <el-button type size="small" @click="closedialogVisible">关闭</el-button>
                </el-form-item>
              </el-row>
            </el-row>
          </el-form>
        </el-col>
      </div>
    </el-dialog>
  </div>
</template>
    
  
<script>
// import SideBar from "@/components/crm/SideBar";
// import NavBar from "@/components/crm/NavBar";

//导入动态组件
// import  AsyncComponent  from  "@/components/crm/AsyncComponent.vue";
//接触方式
import ContactWay from "@/components/crm/Select/Common/ContactWay.vue";
//渠道大类
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass.vue";
//渠道小类名称
import ChannelSmalTypeName from "@/components/crm/textbox/Clue/ChannelSmalTypeName.vue";
//是否启用
import ChannelSmallTypeCode from "@/components/crm/textbox/Clue/ChannelSmallTypeCode.vue";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable.vue";
import WhetherClean from "@/components/crm/Select/Whether/WhetherClean.vue";
import WhetherAllowEntry from "@/components/crm/Select/Whether/WhetherAllowEntry.vue";
import RemindWay from "@/components/crm/Select/Common/RemindWay.vue";
import RoleSelection from "@/components/crm/EjectWindows/RoleSelection.vue";

import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import { isNumber, isBoolean } from "util";

export default {
  name: "crmChannelSmallPick",
  components: {
    ContactWay,
    ChannelBigClass,
    ChannelSmalTypeName,
    ChannelSmallTypeCode,
    EnableOrDisable,
    WhetherClean,
    WhetherAllowEntry,
    RemindWay,
    RoleSelection
  },
  mounted(){
    this.$nextTick(() => {
      // 页面渲染完成后的回调
      let that = this;
      this.$crmcf.__setAutoTableStyle(that);
    });
  },
  data() {
    return {
      tableHeight:"",
      DReview: 0,
      show: false,
      listLoading: false,
      dialogVisible: false,
      // 操作列
      options2: [
        {
          value2: "1",
          label2: "是"
        },
        {
          value2: "2",
          label2: "否"
        }
      ],

      tabledatas: {
        //data删除从后台获取数据
        tableData: [],
        //配置表格的列
        colnames: [
          {
            label: "接触方式",
            value: "PcDbInfoChanMExt.pcDbCantactWayExt.cantactWayName"
          },
          { label: "渠道大类", value: "PcDbInfoChanMExt.infoChanMName" },
          { label: "渠道小类名称", value: "infoChanDName" },
          { label: "渠道小类编码", value: "infoChanDCode" },
          { label: "是否启用", value: "isEnableCn" },
          { label: "审核方式", value: "auditType" },
          { label: "是否清洗", value: "isWash" }
        ],
        queryObj: {
          //api配置
          // 后面是服务编码，.前面固定写死
          apiConfig: crmApis.pcDbInfoChanDQueryFindAll,
          //返回的
          apiQueryRow: [
            //缺少接触方式，审核方式，是否清洗
            "infoChanDId",
            "infoChanDName",
            "infoChanDCode",
            "isEnableCn",
            "isEnable",
            "isWash",
            "auditType",
            "updateControlId",
            "isPv"
          ],
          params: {
            //缺少接触方式，渠道大类名称，
            oemCode: "",
            groupCode: "",
            infoChanDName: "",
            infoChanDCode: "",
            isPv: "1",
            isEnable: "",
            infoChanMId: ""
          }
        },
        pageIndex: 1,
        pageSize: 10,
        total: 0
      },

      //我是数据初始化
     
      FChannelBigClassMainRef: {
        value: ""
      },
      DContactWayAdd:{value:""},
      FContactWayMain:{
        value:""
      },
      FChannelBigClassMain:{value:"",pcode:""},
      FChannelSmalTypeName: {
        input: ""
      },
      FEnableOrDisable: {
        input: ""
      },
      DContactWay: {
        value: ""
      },
      DChannelBigClassAdd: {
        value: "",
        pcode:""
      },
      DChannelSmalTypeName: {
        input: ""
      },
      DChannelSmallTypeCode: {
        input: ""
      },
      DEnableOrDisable: {
        value: ""
      },

      DWhetherClean: { value: "" },
      DWhetherAllowEntry: { value: "" },
      DRemindWay: { value: "" },
      DRoleSelection: { input: "", label: "用户选择" },
      input1: "",
      value2: "",
      infoChanMId: "",
      updateControlId: "",
      isPv: "",
      isCust: "",
      isPhone: "",
      intentDlr: "",
      intentCarType: "",
      infoChanDId: ""
    };
  },
  methods: {
    // 分页的三个方法
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
    changepage(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    },
    // 接触方式联动方法
     contactWayChange(val) {
      let that = this;
      that.FChannelBigClassMain.pcode = val;
      if (that.$refs.FChannelBigClassMainRef == undefined) {
      } else {
        that.$refs.FChannelBigClassMainRef.getData();
      }
    },
    // 维护页面 接触方式联动方法
     contactWayChangeAdd(val) {
      let that = this;
      that.DChannelBigClassAdd.pcode = val;
      if (that.$refs.DChannelBigClassAddRef == undefined) {
      } else {
        that.$refs.DChannelBigClassAddRef.getData();
      }
    },

    query: function() {
      let that = this;
      //查询条件
      let str =
        "PcDbInfoChanMExt{" +
        "infoChanMName" +
        " " +
        "infoChanMId" +
        " " +
        "pcDbCantactWayExt{" +
        " " +
        "cantactWayName" +
        " " +
        "cantactWayName}}";

      that.tabledatas.queryObj.apiQueryRow.push(str);
      //接触方式id缺失
      that.tabledatas.queryObj.params.infoChanMId = that.$refs.FChannelBigClassMainRef.value;
      that.tabledatas.queryObj.params.infoChanDName = that.$refs.FChannelSmalTypeName.input;
      that.tabledatas.queryObj.params.isEnable = that.$refs.FEnableOrDisable.value;
      that.tabledatas.queryObj.params.cantactWayId=that.$refs.FContactWayMainRef.value
      this.$crmcf.simpleTablequery(
        that,
        that.tabledatas,
        that.tabledatas.queryObj.apiConfig,
        function(data) {
          that.tabledatas.tableData = data.rows;
          that.tabledatas.total = data.records;
        }
      )
    },
    reset: function() {
      this.$refs.FContactWayMainRef.reset();
      this.$refs.FChannelBigClassMainRef.reset();
      this.$refs.FChannelSmalTypeName.reset();
      this.$refs.FEnableOrDisable.reset();
      //that.FChannelBigClassMain.pcode ="";
      //this.
    },
    add: function() {
      let that = this;
      that.dialogVisible = true;
      that.DChannelBigClassAdd.pcode="";
      //that.$refs.DContactWayAddRef.reset();
      that.$refs.DChannelBigClassAddRef.reset();
      that.$refs.DChannelSmalTypeName.reset();
      that.$refs.DChannelSmallTypeCode.reset();
      that.$refs.DEnableOrDisable.reset();
      //审核方式
      //是否清洗
    },
    //显示弹窗
    change: function() {
      let that = this;
      if (that.DReview == 1) {
        that.show = true;
      } else {
        that.show = false;
      }
    },
    //修改按钮的值处理
    handleEdit(index, row) {
      let that = this;
      that.dialogVisible = true;
      //缺少字段
      that.infoChanDId = row.infoChanDId;
      that.infoChanMId = row.PcDbInfoChanMExt.infoChanMId;
      that.DChannelSmalTypeName.input = row.infoChanDName;
      that.DChannelSmallTypeCode.input = row.infoChanDCode;
      that.DEnableOrDisable.value = row.isEnable;
      that.DContactWayAdd.value =
        row.PcDbInfoChanMExt.pcDbCantactWayExt.cantactWayName;
      that.DChannelBigClassAdd.value = row.PcDbInfoChanMExt.infoChanMName;
      that.DWhetherClean.value=row.isWash
      that.updateControlId = row.updateControlId;
      that.$refs.DWhetherClean.getData()
      that.$refs.DChannelSmalTypeName.getData();
      that.$refs.DChannelSmallTypeCode.getData();
      that.$refs.DEnableOrDisable.getData();
      that.$refs.DContactWayAddRef.getData();
      that.$refs.DChannelBigClassAddRef.getData();
    },
    //scope.row包含整行数据
    handleSelect: function(row) {
      let that = this;
      console.log(row);
      that.rowData.name = row.name;
    },
    selectView: function() {
      let _this = this;
      _this.$emit("selectView", 1);
    },
    closedialogVisible: function() {
      //关闭弹窗
      this.dialogVisible = false;
    },
    save: function(formName) {
      let that = this;
      let flag = false;
      var config = that.config;
      config = {
        DContactWayAdd: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.DContactWayAddRef.value,
          "接触方式",
          "不能为空"
        ],
        DChannelBigClassAdd: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.DChannelBigClassAddRef.value,
          "渠道大类",
          "不能为空"
        ],
        DChannelSmallTypeCode: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.DChannelSmallTypeCode.input,
          "渠道小类编码",
          "不能为空"
        ],
        DChannelSmalTypeName: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.DChannelSmalTypeName.input,
          "渠道小类名称",
          "不能为空"
        ],
        DEnableOrDisable: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.DEnableOrDisable.value,
          "是否启用",
          "不能为空"
        ],
        DReview: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.DEnableOrDisable.value,
          "线性审核类型",
          "不能为空"
        ],
        DWhetherClean: [
          true,
          that.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.DWhetherClean.value,
          "是否清洗",
          "不能为空"
        ]
      };
      that.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let variables= {
              dataInfo: {
                //  PcDbInfoChanMExt.pcDbCantactWayExt.cantactWayName:this.$refs.DContactWay.value,
                //写入参数赋值
                infoChanDId: that.infoChanDId,
                infoChanMId: that.$refs.DChannelBigClassAddRef.value,
                infoChanDName: that.$refs.DChannelSmalTypeName.input,
                infoChanDCode: that.$refs.DChannelSmallTypeCode.input,
                isEnable: that.$refs.DEnableOrDisable.value,
                updateControlId: that.updateControlId,
                isPv: "1",
                auditType: String(Number(that.DReview)),
                isWash: that.$refs.DWhetherClean.value,
                isAllowEntry: that.$refs.DWhetherAllowEntry.value,
                reminder: that.$refs.DRemindWayAddRef.value,
                roleCode: that.$refs.DRoleSelection.value,
                invalidAging: Number(that.input1),
                isDeduplication: that.value2,
                isCust: that.isCust,
                isPhone: that.isPhone,
                intentDlr: that.intentDlr,
                intentCarType: that.intentCarType
              }
            }
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.pcDbInfoChanDMutationSaveById,
            function() {
              that.dialogVisible = false;
              that.updateControlId = "";
              that.infoChanDId = "";
              that.query();
            }
          )
        }
      });
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
