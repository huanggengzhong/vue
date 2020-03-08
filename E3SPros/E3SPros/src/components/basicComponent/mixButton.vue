<!--
* description: 模板-表单
* author: zhongchh
* createdDate: 2019-10-06
* logs:
-->
<template>
  <section class="mixButton">
    <el-row>
      <el-col
        :span="12"
        class="u-btn-left"
      >
        <el-button
          v-for="(item, i) in btnLeft"
          :key="`${name}Left_${i}`"
          :compKey="item.compKey"
          :type="item.type"
          :size="item.size"
          @click="doChildEvent(item.clickEvent, item.argument)"
          :class="item.class"
        >{{item.text}}</el-button>
        <el-dropdown
          @command="handleCommand"
          v-if="btnLeftMore.length !== 0"
        >
          <span class="el-dropdown-link">
            更多<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              :icon="item.class"
              v-for="(item, i) in btnLeftMore"
              :key="`${name}LeftMore${i}`"
              :command="item"
            >{{item.text}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col
        :span="12"
        class="u-btn-right"
      >
        <div
          class="right-btn"
          :class="isshowMoreButton  ? 'floatDiv-left':'floatDiv-right'"
        >
          <el-button
            v-show="
          (toggleParam
          &&
          showfuzzyQuery)||!showfuzzyQuery"
            v-for="(item, i) in btnRight"
            :key="`${name}Right_${i}`"
            :compKey="item.compKey"
            :type="item.type"
            :size="item.size"
            @click="doChildEvent(item.clickEvent, item.argument)"
            :class="item.class"
          >{{item.text}}</el-button>
        </div>
        <!-- 模糊搜索 -->
        <div
          id="fuzzyquery"
          class="right-btn"
          v-show="!toggleParam && showfuzzyQuery"
        >
          <el-input
            :placeholder="searchFields"
            v-model="searchValue"
            class="input-with-select"
          >
            <el-button
              type="primary"
              slot="append"
              icon="el-icon-search"
              @click="doChildEvent(scFields.clickEvent,scFields.argument)"
            >{{searchLabel}}</el-button>
          </el-input>
        </div>
        <!-- 高级搜索 -->
        <el-button
          v-if="isshowMoreButton"
          :icon="moreBtnIcon"
          type="danger"
          @click="changeToggleParam"
          class="moreParam"
          plain
        >{{moreLabel}}</el-button>
      </el-col>
    </el-row>
  </section>
</template>
<script>
export default {
  props: {
    // 创建表单的参数
    dynamicButtons: { type: Array, default: () => {} },
    //查询条件个数是否显示高级搜索
    isShowMore: { type: Boolean, default: false },
    // 组件名
    name: { type: String, default: "" },
    // 自定义按钮个数
    showbtnLength: { type: Number, default: 4 },
    // 组件识别名称（模拟key）
    compKey: { type: String, default: "" },
    // 按钮样式
    type: { type: String, default: "" },
    // 按钮尺寸
    size: { type: String, default: "small" },
    // 模糊搜索值
    svFields: { type: String, default: "" },
    //模糊搜索查询条件
    formField: {
      type: Object,
      default: function() {
        return {};
      }
    },
    // 动态组件
    dynamicComponents: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      // 表单列
      btnLeft: [],
      btnLeftMore: [],
      btnRight: [],
      moreLabel: "高级搜索",
      searchLabel: "搜索",
      moreBtnIcon: "iconfont icon-dowm",
      //是否显示高级搜索按钮
      isshowMoreButton: this.isShowMore,
      toggleParam: false,
      //搜索框数值
      searchValue: this.svFields,
      //搜索框默认提示内容
      searchFields: "",
      //模糊查询条件
      searchformField: {},
      //是否显示模糊查询
      showfuzzyQuery: { type: Boolean, default: false },
      //模糊搜索框显示项目
      scFields: {
        type: Object,
        default: function() {
          return [];
        }
      }
    };
  },
  created() {
    //设置button的图标
    this.setBtns();
    if (this.dynamicComponents !== [] && this.dynamicComponents !== undefined) {
      var x = [];
      var y = [];
      for (var i = 0; i < this.dynamicComponents.length; i++) {
        x.push(this.dynamicComponents[i].isMust);
        if (
          this.dynamicComponents[i].fuzzySearch !== undefined &&
          this.dynamicComponents[i].fuzzySearch !== ""
        ) {
          y.push(this.dynamicComponents[i]);
          this.searchformField = this.dynamicComponents[i];
        }
      }
      for (var m = 0; m < y.length; m++) {
        if (y.length !== 0 && this.searchFields !== "") {
          this.searchFields = this.searchFields + " / " + y[m].labelName;
        } else {
          this.searchFields = y[m].labelName;
        }
      }
      if (x.includes(true)) {
        this.showfuzzyQuery = false;
      } else {
        this.showfuzzyQuery = true;
      }
      if (this.dynamicComponents.length < 5) {
        this.isshowMoreButton = false;
      }
    }
    if (this.dynamicButtons !== [] && this.dynamicComponents !== undefined) {
      for (var i = 0; i < this.dynamicButtons.length; i++) {
        if (
          this.dynamicButtons[i].fuzzySearch !== "" &&
          this.dynamicButtons[i].fuzzySearch !== undefined &&
          this.dynamicButtons[i].fuzzySearch
        ) {
          this.scFields = this.dynamicButtons[i];
        }
      }
    }
  },
  watch: {
    searchValue(val) {
      for (var y in this.formField) {
        if (this.searchformField.codeField === y) {
          console.log(this.searchformField.codeField, y);
          this.formField[y] = val;
        }
      }
    }
  },
  methods: {
    handleCommand(command) {
      this.doChildEvent(command.clickEvent, command.argument);
    },
    changeToggleParam() {
      this.$emit("toggle");
      this.toggleParam = !this.toggleParam;
      if (this.toggleParam) {
        this.moreBtnIcon = "iconfont icon-up";
        this.moreLabel = "收起";
      } else {
        this.moreBtnIcon = "iconfont icon-dowm";
        this.moreLabel = "高级搜索";
      }
    },
    setBtns() {
      const that = this;
      var leftButtons = [];
      var rightButtons = [];
      for (let index in this.dynamicButtons) {
        var m = this.dynamicButtons[index];
        if (m.position === "left") {
          leftButtons.push(m);
        } else if (m.position === "right") {
          rightButtons.push(m);
        }
      }
      this.btnLeft = leftButtons.slice(0, this.showbtnLength);
      if (this.dynamicButtons.length > this.showbtnLength) {
        this.btnLeftMore = leftButtons.slice(this.showbtnLength);
      }
      this.btnRight = rightButtons;
      this.btnLeft.map(function(item, i) {
        that.setIcon(item);
      });
      this.btnLeftMore.map(function(item, i) {
        that.setIcon(item);
      });
      this.btnRight.map(function(item, i) {
        that.setIcon(item);
      });
    },
    setIcon(item) {
      switch (item.name) {
        case "add": //新增
          item.class = "iconfont icon-newlyAdded";
          break;
        case "search": //查询
          item.class = "iconfont icon-search";
          break;
        case "reset": //重置
          item.class = "iconfont icon-reset";
          break;
        case "export": //导出
          item.class = "iconfont icon-export";
          break;
        case "reject": //驳回
          item.class = "iconfont icon-reject";
          break;
        case "stock": //库存
          item.class = "iconfont icon-stock";
          break;
        case "detailed": //明细
          item.class = "iconfont icon-detailed";
        case "refuse": //拒绝
          item.class = "iconfont icon-refuse";
          break;
        case "reasonRecovery": //回复原因
          item.class = "iconfont icon-reasonRecovery";
          break;
        case "closingInventory": //结束盘点
          item.class = "iconfont icon-closingInventory";
          break;
        case "closingAdded": //盘点新增
          item.class = "iconfont  icon-closingAdded";
          break;
        case "startCounting": //开始盘点
          item.class = "iconfont icon-startCounting";
          break;
        case "printing": //打印
          item.class = "iconfont icon-printing";
          break;
        case "SMSsending": //短信发送
          item.class = "iconfont icon-SMSsending";
          break;
        case "add": //PDI检查单
          item.class = "iconfont icon-newlyAdded";
          break;
        case "printReceipt": //打印入库单
          item.class = "iconfont icon-printReceipt";
          break;
        case "printStockInstruction": //打印入库指导单
          item.class = "iconfont icon-printStockInstruction";
          break;
        case "cancelApplicationForm": //撤销结算申请单
          item.class = "iconfont icon-cancelApplicationForm";
          break;
        case "importVINCode": //导入VIN码
          item.class = "iconfont icon-importVINCode";
          break;
        case "reverseAudit": //反审核
          item.class = "iconfont icon-reverseAudit";
          break;
        case "export": //导出
          item.class = "iconfont icon-export";
        case "cancel": //取消
          item.class = "iconfont icon-cancel";
          break;
        case "outStock": //出库
          item.class = "iconfont icon-outStock";
          break;
        case "matchingAudit": //匹配审核
          item.class = "iconfont icon-matchingAudit";
          break;
        case "inventoryModification": //盘点修改
          item.class = "iconfont  icon-inventoryModification";
          break;
        case "deleteSheet": //删除盘点单
          item.class = "iconfont icon-deleteSheet";
          break;
        case "adopt": //通过
          item.class = "iconfont icon-adopt";
          break;
        case "batchSubmit": //批量提交
          item.class = "iconfont icon-batchSubmit";
          break;

        case "warehousing": //入库
          item.class = "iconfont icon-warehousing";
          break;
        case "batchReason": //批量删除回复原因
          item.class = "iconfont icon-batchReason";
          break;
        case "exportDetails": //导出明细
          item.class = "iconfont icon-exportDetails";
          break;
        case "submissionUp": //提交
          item.class = "iconfont icon-submissionUp";
          break;
        case "newOrder": //新建订单
          item.class = "iconfont icon-newOrder";
          break;
        case "modifyCustomerProfile": //修改客户档案
          item.class = "iconfont icon-modifyCustomerProfile";
          break;
        case "returnTo": //退回
          item.class = "iconfont icon-returnTo";
        case "exportMasterTable": //导出主表
          item.class = "iconfont icon-exportMasterTable";
          break;
        case "applicationForm": //制作结算申请单
          item.class = "iconfont icon-applicationForm";
          break;
        case "financialAudit": //财务审核
          item.class = "iconfont icon-financialAudit";
          break;
        case "preservation": //保存
          item.class = "iconfont  icon-preservation";
          break;
        case "examine": //审核
          item.class = "iconfont icon-examine";
          break;
        case "synchronizeCustomerProfile": //同步客户档案
          item.class = "iconfont icon-synchronizeCustomerProfile";
          break;
        case "regenerateDocument": //重新生成单据
          item.class = "iconfont icon-regenerateDocument";
          break;

        case "importTemplateDownload": //导入模版下载
          item.class = "iconfont icon-importTemplateDownload";
          break;
        case "manHourAllocation": //工时分摊
          item.class = "iconfont icon-manHourAllocation";
          break;
        case "importRecallProject": //导入召回专案
          item.class = "iconfont icon-importRecallProject";
          break;
        case "return": //返回
          item.class = "iconfont icon-return";
          break;
        case "importTemplate": //导入模版
          item.class = "iconfont icon-importTemplate";
          break;
        case "importAppointment": //导入预约
          item.class = "iconfont icon-importAppointment";
          break;
        case "customerVehicleDetails": //客户车辆详情
          item.class = "iconfont icon-customerVehicleDetails";
        case "inventoryEntry": //盘点录入
          item.class = "iconfont icon-inventoryEntry";
          break;
        case "submission": //提交
          item.class = "iconfont icon-submission";
          break;
        case "saveSubmit": //保存并提交
          item.class = "iconfont icon-saveSubmit";
          break;
        case "confirm": //确认
          item.class = "iconfont  icon-confirm";
          break;
        case "maintenanceResume": //维修履历
          item.class = "iconfont icon-maintenanceResume";
          break;
        case "realImport": //实数导入
          item.class = "iconfont icon-realImport";
          break;
        case "signOut": //退出
          item.class = "iconfont icon-signOut";
          break;

        case "selectCustomers": //选择客户
          item.class = "iconfont icon-selectCustomers";
          break;
        case "temporaryStorage": //修改
          item.class = "iconfont icon-temporaryStorage";
          break;
        case "temporaryStorage": //暂存
          item.class = "iconfont icon-temporaryStorage";
          break;
        case "GPS": //gps
          item.class = "iconfont icon-GPS";
          break;
        case "additionalHours": //新增工时
          item.class = "iconfont icon-additionalHours";
          break;
        case "details": //详情
          item.class = "iconfont icon-details";
          break;
        case "deleteHour": //删除工时
          item.class = "iconfont icon-deleteHour";
        case "more": //更多
          item.class = "iconfont icon-more";
          break;
        case "message": //消息
          item.class = "iconfont icon-remind_fill";
          break;
        case "help": //帮助
          item.class = "iconfont icon-help";
          break;
        case "advancedSearch": //高级搜索
          item.class = "iconfont  icon-advancedSearch";
          break;
      }
    },
    doChildEvent(clickEvent, args) {
      args = args || {};
      if (typeof clickEvent === "function") {
        clickEvent({ ...args });
      } else {
        clickEvent ? this.$parent[clickEvent]({ ...args }) : false;
      }
    }
  }
};
</script>
