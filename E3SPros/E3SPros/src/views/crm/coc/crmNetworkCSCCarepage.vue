<!--
@Author: xgz 
@Date: 2019-08-03 11:04:20 
@Last Modified by: zxuan
@Last Modified time: 2019-08-17
-->
<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="add()">新增</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <ContactWay ref="ContactWay" @changeCode="CWaychange" :ContactWay="cw" />
          </el-col>
          <el-col :span="6">
            <ChannelBigClass ref="ChannelBigClass" :ChannelBigClass="cbc" />
          </el-col>
          <el-col :span="6">
            <ChannelSmalTypeName ref="ChannelSmalTypeName" :ChannelSmalTypeName="cst" />
          </el-col>
          <el-col :span="6">
            <EnableOrDisable ref="EnableOrDisable" :EnableOrDisable="ss" />
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 新增维护弹窗 -->
    <el-dialog title="维护" :visible.sync="dialogVisible" width="900px" append-to-body center>
      <!-- <div class="filter-container filter-title-crm"></div> -->
      <div class="filter-container filter-params-crm">
        <el-form ref="form">
          <el-row>
            <el-col :span="8">
              <ContactWay
                :ContactWay="ContactWay"
                @changeCode="CWaychangeAdd"
                class="crm-label-required"
                ref="ContactWayref"
              />
            </el-col>
            <el-col :span="8">
              <ChannelBigClass
                :ChannelBigClass="ChannelBigClass"
                ref="ChannelBigClassref"
                class="crm-label-required"
              />
            </el-col>
            <el-col :span="8">
              <ChannelSmalTypeName
                :ChannelSmalTypeName="cstn"
                ref="ChannelSmalTypeNameref"
                class="crm-label-required"
              />
            </el-col>
          </el-row>
          <!-- 第二行 -->
          <el-row>
            <el-col :span="8" class="crm-label-required">
              <el-form-item label="渠道小类编码" prop="clssCode">
                <el-input v-model="clssCode" placeholder="请输入" suffix-icon="el-icon-search"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="crm-label-required">
              <EnableOrDisable
                :EnableOrDisable="EnableOrDisable"
                class="crm-label-required"
                ref="EnableOrDisableref"
              />
            </el-col>
          </el-row>

          <el-row>
            <!-- <el-col :span="8"></el-col>
            <el-col :span="8"></el-col>-->
            <el-col :span="24" style="text-align:right">
              <el-button size="small" type="primary" @click="savegz('form')">保存</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <!-- 新增维护弹窗结束 -->

    <!-- 自定义网格开始 -->
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table
      :data="tabledatas.tableData"
      highlight-current-row
      ref="table"
      :style="{width:'100%',height:tableHeight+'px'}"
      v-loading.body="false"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" width="100" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="editgz(scope.$index, scope.row)">修改</el-button>
        </template>
      </el-table-column>
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
      :page-size="tabledatas.pageSize"
      :current-page="tabledatas.pageIndex"
      @prev-click="prev"
      @next-click="next"
      @current-change="changepage"
    ></el-pagination>
    <!-- 自定义网格结束 -->
  </div>
</template>
<script>
import ContactWay from "@/components/crm/Select/Common/ContactWay";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass";
import ChannelSmalTypeName from "@/components/crm/textbox/Clue/ChannelSmalTypeName";

// 新增
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";
import Telemarketer from "@/components/crm/Select/Clue/Telemarketer";

import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "crmNetworkCSCCarepage",
  components: {
    ContactWay,
    ChannelBigClass,
    ChannelSmalTypeName,
    EnableOrDisable,
    EnableOrDisable,
    Telemarketer
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
      dialogVisible: false,
      tabledatas: {
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          {
            label: "接触方式",
            value: "PcDbInfoChanMExt.pcDbCantactWayExt.cantactWayName"
          },
          { label: "渠道大类", value: "PcDbInfoChanMExt.infoChanMName" },
          { label: "小类名称", value: "infoChanDName" },
          { label: "是否启用", value: "isEnableCn" },
          { label: "创建人", value: "createdName" },
          { label: "创建时间", value: "createdDate" },
          { label: "修改人", value: "modifyName" },
          { label: "最后修改时间", value: "lastUpdatedDate" }
        ],
        tableData: [],

        queryObj: {
          apiConfig: crmApis.pcDbInfoChanDQueryFindAll,
          apiQueryRow: [
            "infoChanDName",
            "infoChanMId",
            "isEnableCn",
            "updateControlId",
            "infoChanDCode",
            "infoChanMId",
            "orderNo",
            "createdName",
            "createdDate",
            "modifyName",
            "lastUpdatedDate"
          ],
          params: {
            infoChanMId: "",
            infoChanDName: "",
            isEnable: "",
            isPv: "0"
          }
        },
        pageSize: 10,
        pageIndex: 1,
        total: 0
      },

      clssCode: "",
      cw: {
        value: ""
      },
      ContactWay: {
        value: "",
        checkprop: "ContactWay.value"
      },
      cbc: {
        value: "",
        pcode: ""
      },
      ChannelBigClass: {
        value: "",
        pcode: "",
        checkprop: "ChannelBigClass.value"
      },
      cst: {
        input: ""
      },
      ss: {
        value: ""
      },
      cstn: {
        input: "",
        checkprop: "cstn.input"
      },
      Telemarketer: {
        value: ""
      },
      EnableOrDisable: {
        value: ""
      }
    };
  },
  methods: {
    query: function() {
      let that = this;
      let str =
        "PcDbInfoChanMExt{" +
        "infoChanMCode" +
        " " +
        "infoChanMName" +
        " " +
        "pcDbCantactWayExt{" +
        "cantactWayCode" +
        " " +
        "cantactWayName}}";

      that.tabledatas.queryObj.apiQueryRow.push(str);
      that.tabledatas.queryObj.params.infoChanMId =
        that.$refs.ChannelBigClass.value;
      that.tabledatas.queryObj.params.infoChanDName =
        that.$refs.ChannelSmalTypeName.input;
      that.tabledatas.queryObj.params.isEnable =
        that.$refs.EnableOrDisable.value;
      that.tabledatas.queryObj.params.cantactWayId =
        that.$refs.ContactWay.value;
      this.$crmcf.simpleTablequery(
        that,
        that.tabledatas,
        that.tabledatas.queryObj.apiConfig,
        function(data) {
          that.tabledatas.tableData = data.rows;
          that.tabledatas.total = data.records;
        }
      );
    },
    CWaychange(n) {
      let that = this;
      that.cbc.pcode = n;
      that.$refs.ChannelBigClass.getData();
    },
    CWaychangeAdd(n) {
      let that = this;
      that.ChannelBigClass.pcode = n;
      that.$refs.ChannelBigClassref.getData();
    },
    prev(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    },
    next(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    },
    reset: function() {
      this.$refs.ContactWay.reset();
      this.$refs.ChannelSmalTypeName.reset();
      this.$refs.ChannelBigClass.reset();
      this.$refs.EnableOrDisable.reset();
    },
    add: function() {
      let that = this;
      that.infoChanMId = "";
      if (
        that.$refs.ContactWayref == undefined &&
        that.$refs.ChannelBigClassref == undefined &&
        that.$refs.ChannelSmalTypeNameref == undefined &&
        that.$refs.EnableOrDisableref == undefined
      ) {
        that.dialogVisible = true;
      } else {
        that.dialogVisible = true;
        that.$refs.ContactWayref.reset();
        that.$refs.ChannelBigClassref.reset();
        that.$refs.ChannelSmalTypeNameref.reset();
        that.$refs.EnableOrDisableref.reset();
        that.clssCode = "";
      }
    },
    editgz: function(index, row) {
      let that = this;
      that.dialogVisible = true;
      that.cstn.input = row.infoChanDName;
      that.infoChanMId = row.infoChanMId;
      that.ContactWay.value =
        row.PcDbInfoChanMExt.pcDbCantactWayExt.cantactWayName;
      that.ChannelBigClass.value = row.PcDbInfoChanMExt.infoChanMName;
      that.clssCode = row.infoChanDCode;
      that.EnableOrDisable.value = row.isEnableCn;
      that.$refs.ChannelSmalTypeNameref.getData();
      that.$refs.ContactWayref.getData();
      that.$refs.ChannelBigClassref.getData();
      that.$refs.EnableOrDisableref.getData();
    },
    savegz: function(formName) {
      let that = this;
      let flag = false;
      var config = this.config;
      config = {
        ContactWay: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.ContactWayref.value,
          "接触方式",
          "不能为空"
        ],
        ChannelBigClass: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.ChannelBigClassref.value,
          "渠道大类",
          "不能为空"
        ],
        cstn: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.ChannelSmalTypeNameref.input,
          "渠道小类",
          "不能为空"
        ],
        EnableOrDisable: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.EnableOrDisableref.value,
          "是否启用",
          "不能为空"
        ],
        clssCode: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.clssCode,
          "渠道小类编码",
          "不能为空",
          "change"
        ]
      };
      this.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let variables = {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              infoChanMId: that.$refs.ChannelBigClassref.value,
              infoChanDName: that.$refs.ChannelSmalTypeNameref.input,
              infoChanDCode: that.clssCode,
              isEnable: that.$refs.EnableOrDisableref.value,
              isPv: "0"
            }
          };
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.pcDbInfoChanDMutationSaveById,
            function() {
              // updateControlId = "";
              that.dialogVisible = false;
              that.query();
            }
          )
        }
      });
    }
  }
};
</script>


