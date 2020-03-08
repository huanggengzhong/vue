/*
 * @Author: xgz
 * @Date: 2019年10月7日09:47:56
 * @Last Modified by:
 * @Last Modified time: 2019年10月7日09:47:56
 */

<template>
  <div class="app-container app-container-table">
    <!-- 单网格查询  -->
    <one-table-template :dynamicSearchField="searchField" ref="multipleTable" :dynamicButtons="tableButtons" :dynamicComponents="tableComponents" :dynamicIsShowSelect="false" :dynamicApiConfig="apiConfig" :dynamicTableCols="tableCols" :dynamicFormFields="formField" />
    <!-- <edit :dynamicEditRowData="editRowData" :popupsVisible="editPopupsVisible" :key="editPopupsKey" :popupsState="editPopupsState" @close="close"></edit> -->

    <!-- 卡片规则设置新增弹窗 -->
    <el-dialog title="卡券规则设置" :visible.sync="dialogVisible" width="1200px" center style="height:600px;position:fixed;top:0;right:0;left:0;bottom:0;margin:auto;" append-to-body>
      <div class="filter-container filter-params-crm  ">
        <!-- -->
        <el-form>
          <el-row>
            <crmTextInput compKey="compKey1" labelName="卡券名称" :code="uid" codeField="uid" :isRequire="true" :span="8"></crmTextInput>
            <crmTextInput compKey="compKey2" labelName="卡券编号" :code="custName" codeField="custName" :isRequire="true" :span="8"></crmTextInput>
            <crmTextInput compKey="compKey3" labelName="可领取数量" :code="custFullName" codeField="custFullName" :isRequire="true" :span="8"></crmTextInput>
          </el-row>

          <el-row>
            <crmTextInput compKey="compKey4" labelName="单账号可领取数量" :code="credNo" codeField="credNo" :isRequire="true" :span="8"></crmTextInput>
            <el-col :span="8" class="crm-label-required">
              <receiveDate :receiveDate="receiveDateMain" ref="receiveDateMainRef"></receiveDate>
            </el-col>
            <el-col :span="8" class="crm-label-required">
              <sureDestoryDeadline :sureDestoryDeadline="sureDestoryDeadlineMain" ref="sureDestoryDeadlineMainRef" />
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8" class="crm-label-required">
              <swt_emitTicketDepartment :swt_emitTicketDepartment="swt_emitTicketDepartmentMain" ref="swt_emitTicketDepartmentMainRef" />
            </el-col>
            <lookupvalue compKey="compKey5" :isMul="false" labelName="卡券使用类型" :code="gender" codeField="gender" :isRequire="true" :span="8"></lookupvalue>
            <el-col :span="8" class="crm-label-required">
              <el-row class="cardSetWidth">
                <el-col :span="24" class="effective-clue">
                  <div class="w32">
                    <span style="color:red">*</span>使用渠道
                  </div>
                  <div class="w68">
                    <span v-for="(item,index) in clueList" :key="index" @click="effectButton(item,index)" :class="{'selectedClass-crmFactSysConf':item.checked,'disableClass-crmFactSysConf':item.disable}">{{item.lookupValueName}}<i :class="{'selectedClass-i-crmFactSysConf':item.checked}"></i></span>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>

          <el-row>
            <lookupvalue compKey="compKey6" :isMul="false" labelName="使用条件" :code="gender" isRequire="true" codeField="gender" :span="8"></lookupvalue>
            <lookupvalue compKey="compKey7" :isMul="false" labelName="发放形式" :code="gender" isRequire="true" codeField="gender" :span="8"></lookupvalue>
            <el-col :span="8" class="crm-label-required">
              <EnableOrDisable :EnableOrDisable="EnableOrDisableMain" ref="EnableOrDisableMainRef" />
            </el-col>

          </el-row>
          <el-row>
            <el-col :span="8" class="crm-label-required">
              <cardTicketType :cardTicketType="cardTicketTypeMain" @changeCode="change" ref="cardTicketTypeMainRef" />
            </el-col>
          </el-row>

          <el-row>
            <!-- 联动显示1 现金券 （元）-->
            <div v-if="cash">
              <el-col :span="8" class="crm-label-required">
                <cashValue :cashValue="cashValueMain" ref="cashValueMainRef" />
              </el-col>
              <span class="cashUnit">元</span>
            </div>

            <!-- 联动显示2 折扣券 （折） -->
            <div v-if="discount">
              <el-col :span="8" class="crm-label-required">
                <meetCondition :meetCondition="meetConditionMain" @changeCodeM="changeM" ref="meetConditionMainRef" />
              </el-col>
              <!-- 否 -->
              <div v-if="showDiscount">
                <el-col :span="8" class="crm-label-required">
                  <discountLevel :discountLevel="discountLevelMainf" ref="discountLevelMainfRef" />
                </el-col>
                <span class="discountUnit">折</span>
              </div>
              <!-- 是 -->
              <div v-if="showDiscountMore">
                <el-col :span="8" class="crm-label-required">
                  <discountLevel :discountLevel="discountLevelMains" ref="discountLevelMainsRef" />
                </el-col>
                <span class="discountUnit">件</span>
                <el-input class="inputWidth" />
                <span class="inputWidthdiscountUnit">折</span>
              </div>
            </div>

            <!-- 联动显示3 满减券（元/件） -->
            <div v-if="decrease">
              <el-col :span="8" class="crm-label-required cardSetLocationfloat">
                <meetDecrease :meetDecrease="meetDecreaseMain" ref="meetDecreaseMainRef" />
                <el-select class="cardSetLocation" v-model="valueDecrease">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-col>
              <el-col :span="8" class="crm-label-required">
                <decreaseJ :decreaseJ="decreaseJMain" ref="decreaseJRef" />
              </el-col>
              <span class="decreaseUnit">元</span>
            </div>

            <!-- 联动显示4 满赠券（元/件） -->
            <div v-if="fullSend">
              <el-col :span="8" class="crm-label-required">
                <meetSend :meetSend="meetSendMain" ref="meetSendMainRef" />
              </el-col>
              <el-col :span="8" class="crm-label-required">
                <swd_sendThing :swd_sendThing="swd_sendThingMain" ref="swd_sendThingMainRef" />
              </el-col>
            </div>

            <!-- 联动显示5  商品兑换券-->
            <div v-if="exchangeStore">
              <el-col :span="8" class="crm-label-required">
                <swd_exchangeStore :swd_exchangeStore="swd_exchangeStoreMain" ref="swd_exchangeStoreMainRef" />
              </el-col>
            </div>
          </el-row>
          <el-row>
            <el-col :span="16">
              <Remarks class="cardSetRemark" :Remarks="RemarksMain" ref="RemarksMainRef" />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" style="text-align:right">
              <el-button size="small" type="primary" @click="save()">保存</el-button>
              <el-button size="small" type="primary" @click="returnCardQ()">返回</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <!-- 卡片规则设置弹窗结束 -->
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import crmTextInput from "@/components/crm/textbox/crmTextInput";
import crmdatePicker from "@/components/crm/Time/crmdatePicker";
import lookupvalue from "@/components/crm/lookupValue/lookupvalue";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import Edit from "./edit";
import { CacheConfig } from "@/cache/configCache/index";
import { debuglog } from "util";
import receiveDate from "@/components/crm/Time/receiveDate"; //可领取日期
import sureDestoryDeadline from "@/components/crm/Time/sureDestoryDeadline"; //可核销日期
import swt_emitTicketDepartment from "@/components/crm/EjectWindows/swt_emitTicketDepartment"; //发券部门
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable"; //是否启用
import cardTicketType from "@/components/crm/Select/Whether/cardTicketType"; //卡券类别
import meetCondition from "@/components/crm/Select/Whether/meetCondition"; //是否有折扣条件
import Remarks from "@/components/crm/textbox/Complaint/Remarks"; //备注
import cashValue from "@/components/crm/textbox/cashValue"; //现金券面值
import discountLevel from "@/components/crm/textbox/discountLevel"; //折扣力度
import meetDecrease from "@/components/crm/textbox/meetDecrease"; //满足满减条件
import meetSend from "@/components/crm/textbox/meetSend.vue"; //满足满赠条件
import decreaseJ from "@/components/crm/textbox/decreaseJ"; //减
import swd_sendThing from "@/components/crm/EjectWindows/swd_sendThing"; //赠品弹窗
import swd_exchangeStore from "@/components/crm/EjectWindows/swd_exchangeStore"; //可兑换商品弹窗

export default {
  name: "selfCardSet",
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    crmTextInput,
    crmdatePicker,
    lookupvalue,
    Edit,
    receiveDate,
    sureDestoryDeadline,
    swt_emitTicketDepartment,
    EnableOrDisable,
    cardTicketType,
    meetCondition,
    Remarks,
    cashValue,
    discountLevel,
    meetDecrease,
    meetSend,
    decreaseJ,
    swd_sendThing,
    swd_exchangeStore
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      searchField:"",
      receiveDateMain: {
        value: ""
      },
      sureDestoryDeadlineMain: {
        value: ""
      },
      swt_emitTicketDepartmentMain: {
        input: ""
      },
      EnableOrDisableMain: {
        value: ""
      },
      cardTicketTypeMain: {
        value: ""
      },
      meetConditionMain: {
        value: ""
      },
      RemarksMain: {
        input: ""
      },
      discountLevelMainf: {
        input: ""
      },
      discountLevelMains: {
        input: ""
      },
      meetDecreaseMain: {
        input: ""
      },
      meetSendMain: {
        input: ""
      },
      decreaseJMain: {
        input: ""
      },
      swd_sendThingMain: {
        input: ""
      },
      swd_exchangeStoreMain: {
        input: ""
      },
      options: [
        {
          label: "件",
          value: "1"
        },
        {
          label: "元",
          value: "2"
        }
      ],
      valueDecrease: "",
      checkList: [], //多选
      clueList: [
        {
          lookupValueName: "线上",
          lookupValueCode: "1",
          checked: false,
          disable: false
        },
        {
          lookupValueName: "门店",
          lookupValueCode: "2",
          checked: false,
          disable: false
        },
        {
          lookupValueName: "其他",
          lookupValueCode: "3",
          checked: false,
          disable: false
        }
      ],
      cash: true, //现金券
      discount: false, //折扣券
      decrease: false, //满减券
      fullSend: false, //满赠券
      exchangeStore: false, //商品兑换券
      showDiscount: false, //是否有折扣条件：否
      showDiscountMore: true, //是否有折扣条件：是
      uid: "",
      custName: "",
      custFullName: "",
      credNo: "",
      principalName: "",
      addrProvince: "",
      addrCity: "",
      addrCounty: "",
      nationCode: "",
      addr: "",
      gender: "",
      phone: "",
      backTel: "",
      homeTel: "",
      officeTel: "",
      convTimeName: "",
      cantactWayCode: "",
      infoChanMCode: "",
      buyCarNum: "",
      saleOrderNum: "",
      saleOrderMoney: "",
      accSaleMoney: "",
      totalBackNum: "",
      halfYearBackNum: "",
      backMoney: "",
      partSaleMoney: "",
      // 弹窗
      dialogVisible: false,
      // 网格查询API配置对象
      apiConfig: crmApis.clueServerQueryFromDlr, //假的API,线索单分配
      // 动态组件-按钮
      tableButtons: [
        // {
        //   compKey: "btnKey1",
        //   type: "primary",
        //   size: "small",
        //   clickEvent: () => this.queryTable(1),
        //   text: this.$t("sys.button.query")
        // },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: this.add,
          text: this.$t("sys.button.add")
        }
        // {
        //   compKey: "btnKey3",
        //   type: "",
        //   size: "small",
        //   clickEvent: () => this.reset(),
        //   text: this.$t("sys.button.reset")
        // }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // 显示组件
              {
                compKey: "compKey1",
                labelName: "卡券名称",
                codeField: "custName",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "卡券类型",
                codeField: "clueLevelCode",
                lookuptype: "LX141",
                component: () =>
                  import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul: false
              },
              {
                compKey: "compKey1",
                labelName: "领取日期",
                codeField: "applyTime",
                component: () =>
                  import("@/components/crm/Time/crmdtDatePicker"),
                type: "inputText",
                isMust: false
              },
              // {
              //   compKey: "compKey3",
              //   labelName: "领取日期",
              //   codeField: "contactTel",
              //   component: () =>
              //     import("@/components/crm/textbox/crmTextInput"),
              //   type: "inputText",
              //   isMust: false
              // },
              // {
              //   compKey: "compKey4",
              //   labelName: "是否启用",
              //   codeField: "clueLevelCode",
              //   lookuptype: "LX141",
              //   component: () =>
              //     import("@/components/crm/lookupValue/lookupvalue"),
              //   type: "dropdownList",
              //   isMust: false,
              //   isMul: false
              // }
              {
                compKey: "compKey4",
                labelName: "是否启用",
                codeField: "isEnable",
                component: () => import("@/components/crm/Select/crmIsEnable"),
                type: "dropdownList",
                isMust: false,
                isMul: false
              }
            ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 60,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: "修改",
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton"),
              isMust: true
            }
          ]
        },
        { prop: "custName", label: "卡券编号", width: null, align: "center" },
        {
          prop: "clueLevelCode",
          label: "卡券名称",
          width: null,
          align: "center"
        },
        {
          prop: "contactTel",
          label: "卡券类型",
          width: null,
          align: "center"
        },
        {
          prop: "assignStatusName",
          label: "卡券领取开始日期",
          width: null,
          align: "center"
        },
        {
          prop: "serverOrder",
          label: "卡券领取结束日期",
          width: null,
          align: "center"
        },
        {
          prop: "serverOrder",
          label: "有效期类型",
          width: null,
          align: "center"
        },
        {
          prop: "serverOrder",
          label: "卡券有效开始日期",
          width: null,
          align: "center"
        },
        {
          prop: "serverOrder",
          label: "卡券有效结束日期",
          width: null,
          align: "center"
        },
        {
          prop: "serverOrder",
          label: "卡券有效天数",
          width: null,
          align: "center"
        },
        {
          prop: "serverOrder",
          label: "说明",
          width: null,
          align: "center"
        },
        {
          prop: "serverOrder",
          label: "是否绑定VIN码",
          width: null,
          align: "center"
        },
        {
          prop: "serverOrder",
          label: "是否启用",
          width: null,
          align: "center"
        },
        {
          prop: "serverOrder",
          label: "备注",
          width: null,
          align: "center"
        },
        {
          prop: "serverOrder",
          label: "图片名",
          width: null,
          align: "center"
        }
      ],
      formField: {
        handleCode: "1", //
        statusArray: ["20", "21", "30", "40", "50"], //
        custName: "",
        contactTel: "",
        clueLevelCode: "",
        assignStatusName: "",
        serverOrder: ""
      }
    };
  },
  methods: {
    // 新增
    add: function() {
      let that = this;
      that.dialogVisible = true;
    },
    // 返回
    returnCardQ: function() {
      let that = this;
      that.dialogVisible = false;
    },
    // 多选按钮
    effectButton(item, index) {
      if (item.disable == true) {
        return;
      }
      item.checked = !item.checked;
      //需热更新，否则状态没法改变
      this.clue1List[index].disable = item.checked;
      this.$set(this.clue1List, index, this.clue1List[index]);
      this.$set(this.clueList, index, item);
    },
    // 卡券类别（调用子组件监听函数）
    change(val) {
      let that = this;
      if (val == 1) {
        that.cash = true;
        that.discount = false;
        that.decrease = false;
        that.fullSend = false;
        that.exchangeStore = false;
      } else if (val == 2) {
        that.cash = false;
        that.discount = true;
        that.decrease = false;
        that.fullSend = false;
        that.exchangeStore = false;
      } else if (val == 3) {
        that.cash = false;
        that.discount = false;
        that.decrease = true;
        that.fullSend = false;
        that.exchangeStore = false;
      } else if (val == 4) {
        that.cash = false;
        that.discount = false;
        that.decrease = false;
        that.fullSend = true;
        that.exchangeStore = false;
      } else if (val == 5) {
        that.cash = false;
        that.discount = false;
        that.decrease = false;
        that.fullSend = false;
        that.exchangeStore = true;
      }
    },
    // 是否有打折条件（调用子组件监听函数）
    changeM(valM) {
      let that = this;
      if (that.discount == true) {
        that.showDiscountMore = true;
        that.showDiscount = false;
        if (valM == 7) {
          that.showDiscountMore = true;
          that.showDiscount = false;
        } else if (valM == 8) {
          that.showDiscountMore = false;
          that.showDiscount = true;
        }
      } else {
        return;
      }
    }
  }
};
</script>
<style>
/* 现金券 */
.cashUnit {
  text-align: left;
  float: left;
  margin-top: 6px;
  margin-left: -3px;
}
/* 打折 */
.discountUnit {
  text-align: left;
  float: left;
  margin-top: 6px;
  margin-left: -3px;
}
/* 满减 */
.decreaseUnit {
  text-align: left;
  float: left;
  margin-top: 6px;
  margin-left: -3px;
}
/* 是否打折条件-是-输入框位置 */
.inputWidth {
  width: 22px;
  margin-left: 7px;
  float: left;
}
/* 折-- 位置 */
.inputWidthdiscountUnit {
  margin-left: 54px;
  float: left;
  margin-top: 6px;
}

/* 备注调整 */
.cardSetRemark {
  margin-left: -87px;
  float: left;
}
/* 备注输入框长度 */
.filter-params-crm .long-textarea-style textarea {
  width: 630px;
}
/* 单位元/件下拉框 */
.filter-params-crm .el-col .cardSetLocation {
  width: 68px;
  float: left;
  margin-left: 357px;
  margin-top: -30px;
}
.cardSetLocationfloat {
  float: left;
}

/* 多选按钮 */
.el-checkbox.is-bordered.el-checkbox--small {
  /* padding: 5px 15px 5px 10px; */
  /* padding: 5px 15px 5px 10px; */
  /* border-radius: 3px; */
  height: 32px;
  width: 75px;
}
/* 使用渠道-多选 */
.useroute {
  float: left;
  margin-left: 45px;
  margin-top: 8px;
}
/* 多选距离 */
.el-checkbox {
  margin-left: -30px;
}
/* 按钮 */
.effective-clue {
  text-align: left;
  margin: 10px 0;
}
.effective-clue .w68 span {
  display: inline-block;
  min-width: 60px;
  margin-left: 10px;
  margin-bottom: 10px;
  height: 28px;
  line-height: 28px;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 12px;
  padding-top: 0px;
  padding-bottom: 0px;
  text-align: center;
  color: #333;
}
.effective-clue .w68 span:hover {
  /* background-color: #b3d8ff; */
  /* color: #409eff; */
  border: 1px solid #333;
  cursor: pointer;
}
.effective-clue .w32 {
  width: 27%;
  text-align: right;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  vertical-align: top;
}
.effective-clue .w68 {
  /* width: 90%; */
  display: inline-block;
  margin-left: -2px;
}
.selectedClass-crmFactSysConf {
  position: relative;
  border: 1px solid #333 !important;
  color: #333 !important;
}
.selectedClass-crmFactSysConf::after {
  color: #fff;
  content: "\2714";
  position: absolute;
  bottom: -9px;
  right: -3px;
  font-size: 0.5rem;
}
.disableClass-crmFactSysConf {
  color: #333;
  background-color: #fff;
}
.disableClass-crmFactSysConf:hover {
  cursor: default !important;
  color: #333 !important;
  background-color: #fff !important;
}
.selectedClass-i-crmFactSysConf {
  position: absolute;
  border-bottom: 12.4px solid #333;
  border-left: 1.3rem solid transparent;
  width: 0px;
  height: 0px;
  bottom: 0rem;
  right: 0;
}
.cardSetWidth {
  margin-top: 5px;
}
</style>


