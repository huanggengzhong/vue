<!--
* 描述: 渠道大类维护
* 创建人: hejin
* 创建时间: 2019-07-26
* 记录：
*  20190726 新建 hejin
//无法修改
-->

<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="query()">查询</el-button>
      <el-button size="small" @click="add()">新增</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>
    <div class="filter-container filter-title-crm">查询区</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <el-col :span="6">
            <!--接触方式-->
            <ContactWay :ContactWay="FContactWay" ref="FContactWay"></ContactWay>
          </el-col>
          <el-col :span="6">
            <!--渠道大类名称-->
            <ChannelLargeTypeName
              :ChannelLargeTypeName="FChannelLargeTypeName"
              ref="FChannelLargeTypeName"
            ></ChannelLargeTypeName>
          </el-col>
          <el-col :span="6">
            <!--是否启用-->
            <EnableOrDisable :EnableOrDisable="FEnableOrDisable" ref="FEnableOrDisable"></EnableOrDisable>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <!--第二行-->
    <div class="filter-container filter-title-crm">数据区</div>
    <!--数据表格-->
    <el-table
      ref="table"
      :data="tabledatas.tableData"
      highlight-current-row
      :style="{width:'100%',height:tableHeight+'px'}"
      v-loading.body="listLoading"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="index" label="序号" width="55px" align="center"></el-table-column>
      <el-table-column label="修改" align="center" width="100px">
        <template slot-scope="scope" align="center">
          <el-button type="text" size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in tabledatas.colnames"
        :key="item.value"
        :label="item.label"
        :prop="item.value"
        :width="item.width"
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

    <!--新增弹出框-->
    <el-dialog
      title="新增渠道大类"
      :visible.sync="dialogVisible"
      width="900px"
      center
      modal-append-to-body
      append-to-body
    >
      <div class="filter-container filter-params-crm">
        <el-col>
          <el-form label-position="right" align="center" :model="form" ref="form">
            <el-row>
              <el-col :span="12" class="crm-label-required">
                <!--接触方式-->
                <ContactWay :ContactWay="DContactWay" ref="DContactWay" v-if="flash"></ContactWay>
              </el-col>

              <el-col :span="12" class="crm-label-required">
                <!--渠道大类名称-->
                <ChannelLargeTypeName
                  :ChannelLargeTypeName="DChannelLargeTypeName"
                  ref="DChannelLargeTypeName"
                  v-if="flash"
                ></ChannelLargeTypeName>
              </el-col>

              <el-col :span="12" class="crm-label-required">
                <!--渠道大类编码-->
                <ChannelLargeTypeCode
                  :ChannelLargeTypeCode="DChannelLargeTypeCode"
                  ref="DChannelLargeTypeCode"
                  v-if="flash"
                ></ChannelLargeTypeCode>
              </el-col>
              <el-col :span="12" class="crm-label-required">
                <!--状态-->
                <EnableOrDisable
                  :EnableOrDisable="DEnableOrDisable"
                  ref="DEnableOrDisable"
                  v-if="flash"
                ></EnableOrDisable>
              </el-col>
            </el-row>
            <el-row>
              <el-col style="padding-left:600px">
                <el-button type="primary" size="small" @click="save('form')">保存</el-button>
                <el-button type size="small" @click="closedialogVisible">关闭</el-button>
              </el-col>
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

//接触方式
import ContactWay from "@/components/crm/Select/Common/ContactWay.vue";
//渠道大类名称
import ChannelLargeTypeName from "@/components/crm/textbox/Clue/ChannelLargeTypeName.vue";
//是否启用
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable.vue";
//渠道大类编码
import ChannelLargeTypeCode from "@/components/crm/textbox/Clue/ChannelLargeTypeCode.vue";

import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "crmChannelBigPick",
  components: {
    ContactWay,
    ChannelLargeTypeName,
    EnableOrDisable,
    ChannelLargeTypeCode
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
      tableHeight: "",
      dialogVisible: false,
      FContactWayable: true,
      flash: false,
      tabledatas: {
        colnames: [
          //读取类中的属性
          {
            label: "接触方式",
            value: "pcDbCantactWayExt.cantactWayName",
            width: "120px"
          },
          { label: "渠道大类名称", value: "infoChanMName" },
          { label: "渠道大类编码", value: "infoChanMCode" },
          { label: "状态", value: "isEnableCn", width: "80px" },
          { label: "创建人", value: "createdName", width: "80px" },
          { label: "创建时间", value: "createdDate" },
          { label: "修改人", value: "modifyName" },
          { label: "修改时间", value: "lastUpdatedDate" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.pcDbInfoChanMQueryFindAll,
          apiQueryRow: [
            "infoChanMName",
            "infoChanMCode",
            "createdName",
            "createdDate",
            "modifyName",
            "lastUpdatedDate",
            "isEnableCn",
            "isEnable",
            "cantactWayId",
            "infoChanType",
            "updateControlId",
            "infoChanMId",
            "groupCode",
            "oemCode"
          ],
          params: {
            cantactWayId: "",
            isEnable: "",
            infoChanMCode: "",
            infoChanMName: "",
            groupCode: "",
            oemCode: ""
          }
        },
        pageIndex: 1,
        pageSize: 10,
        total: 0
      },
      //我是数据初始化
      FContactWay: {
        value: ""
      },
      FChannelLargeTypeName: {
        input: ""
      },
      FEnableOrDisable: {
        value: ""
      },
      DContactWay: {
        value: "",
        isdisabled: false
      },
      DChannelLargeTypeName: {
        input: ""
      },
      DChannelLargeTypeCode: {
        input: "",
        isdisabled: false
      },
      DEnableOrDisable: {
        value: ""
      },
      pcDbCantactWayExt: "",
      cantactWayId: "",
      infoChanType: "",
      updateControlId: "",
      infoChanMId: ""
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
    query: function() {
      let that = this;
      let str = "pcDbCantactWayExt{" + "cantactWayName}";
      that.tabledatas.queryObj.apiQueryRow.push(str);
      that.tabledatas.queryObj.params.cantactWayId =
        that.$refs.FContactWay.value;
      that.tabledatas.queryObj.params.infoChanMName =
        that.$refs.FChannelLargeTypeName.input;
      that.tabledatas.queryObj.params.isEnable =
        that.$refs.FEnableOrDisable.value;
      this.$crmcf.simpleTablequery(
        that,
        that.tabledatas,
        that.tabledatas.queryObj.apiConfig,
        function(data) {
          that.tabledatas.tableData = data.rows;
          that.tabledatas.pageIndex = data.pageindex;
          that.tabledatas.total = data.records;
        }
      );
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
          pageSize: that.tabledatas.pageSize,
          pageIndex: that.tabledatas.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          this.tabledatas.tabledata =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          this.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        }
        //这句话
        this.tabledatas.tabledata =
          response.data[queryObj.apiConfig.ServiceCode].rows;
      });
    },
    reset: function() {
      this.$refs.FContactWay.reset();
      this.$refs.FChannelLargeTypeName.reset();
      this.$refs.FEnableOrDisable.reset();
    },
    add: function() {
      let that = this;
      that.dialogVisible = true;
      that.flash = false;
      that.$nextTick(() => {
        that.flash = true;
        that.DContactWay.isdisabled = false;
        that.DChannelLargeTypeCode.isdisabled = false;
      });
      that.DContactWay.value = "";
      that.DChannelLargeTypeName.input = "";
      that.DChannelLargeTypeCode.input = "";
      that.DEnableOrDisable.value = "";
      that.infoChanType = "R1";
      that.$refs.DContactWay.reset();
      that.$refs.DChannelLargeTypeName.reset();
      that.$refs.DChannelLargeTypeCode.reset();
      that.$refs.DEnableOrDisable.reset();
    }, //修改按钮的值处理
    handleEdit(index, row) {
      let that = this;
      that.dialogVisible = true;
      this.flash = false;
      this.$nextTick(() => {
        this.DContactWay.isdisabled = true;
        this.DChannelLargeTypeCode.isdisabled = true;
        this.flash = true;
      });

      this.DChannelLargeTypeName.input = row.infoChanMName;
      this.DChannelLargeTypeCode.input = row.infoChanMCode;
      this.DEnableOrDisable.value = row.isEnable;
      this.DContactWay.value = row.cantactWayId;
      this.infoChanType = row.infoChanType;
      this.cantactWayId = row.cantactWayId;
      this.updateControlId = row.updateControlId;
      this.infoChanMId = row.infoChanMId;
      //先注销
      // this.oemCode=row.oemCode;
      // this.groupCode=row.groupCode;
      that.$refs.DChannelLargeTypeName.getData();
      that.$refs.DChannelLargeTypeCode.getData();
      that.$refs.DEnableOrDisable.getData();
      that.$refs.DContactWay.getData();

      //缺少是否启用和接触方式
      // this.EnableOrDisable,value=row.

      // that.$refs.WhetherAllowEntry.getData();
      // that.$refs.WhetherClean.getData();
    },
    //scope.row包含整行数据

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
      var config = this.config;
      config = {
        DContactWay: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.DContactWay.value,
          "接触方式",
          "不能为空"
        ],
        DChannelLargeTypeName: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.DChannelLargeTypeName.input,
          "渠道大类名称",
          "不能为空"
        ],
        DChannelLargeTypeCode: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.DChannelLargeTypeCode.input,
          "渠道大类编码",
          "不能为空"
        ],
        DEnableOrDisable: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.DEnableOrDisable.value,
          "是否启用",
          "不能为空"
        ]
      };
      that.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let variables = {
            dataInfo: {
              //写入参数赋值
              infoChanMId: that.infoChanMId,
              cantactWayId: that.$refs.DContactWay.value,
              infoChanMName: that.$refs.DChannelLargeTypeName.input,
              infoChanMCode: that.$refs.DChannelLargeTypeCode.input,
              isEnable: that.$refs.DEnableOrDisable.value,
              infoChanType: that.infoChanType,
              // oemCode:that.oemCode,
              // groupCode:that.groupCode,
              updateControlId: that.updateControlId
            }
          };
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.pcDbInfoChanMMutationSaveById,
            function() {
              that.dialogVisible = false;
              that.updateControlId = "";
              that.infoChanMId = "";
              that.query();
            }
          );
        }
      });
    }
  }
};
</script>
<style>
</style>
