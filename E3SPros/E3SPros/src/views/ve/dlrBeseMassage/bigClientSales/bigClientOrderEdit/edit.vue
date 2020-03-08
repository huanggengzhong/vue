<!--
* description: 销售交车-新增、修改弹窗
* author: guanri
* createdDate: 2019-10-22
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      :key="popupsTableKey"
      width="1000px"
    >
      <div
        class="filter-container filter-title"
        ref="conTitleHeight"
        v-if="tableComponentsTop.length > 0"
      >订单主信息</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponentsTop.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="formFieldTop[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :isMul="comp.isMul"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
      <div
        class="filter-container filter-title"
        ref="conTitleHeight"
        v-if="tableComponentsBottom.length > 0"
      >订单明细费用信息</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponentsBottom.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="formFieldBottom[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :isMul="comp.isMul"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
      <!-- <el-table
        :data="list"
        border
        stripe
        :height="tableHeight"
        header-cell-class-name="header-cell"
        highlight-current-row
        ref="multipleTable"
        :key="oneTableKey"
      >
        <el-table-column
          align="center"
          :fixed="false"
          :label="$t('sys.content.gridIndex')"
          width="60"
          type="index"
        />
        <el-table-column
          v-for="(col, index) in tableCols.filter(o => o.hidden !== true)"
          :fixed="false"
          :label="col.label"
          :key="`col_${index}`"
          :prop="tableCols[index].prop"
          :width="tableCols[index].width || null"
          :hidden="tableCols[index].hidden"
          :align="tableCols[index].align"
        ></el-table-column>
      </el-table> -->
      <one-table-template
        ref="multipleTable"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="myformField"
        :dynamicIsShowSelect="false"
        :isShowPagination="false"
        :dynamicIsInitTable="true"
      />

      <div slot="footer" class="dialog-footer">
        <el-button
          v-for="comp in tableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
// import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { Duplex } from 'stream';

export default {
  // 组件混入对象
  mixins: [formMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // tableHeight: 150,
      // oneTableKey: "myFormTableKey",
      // list: [],
      apiConfig: veApis.veBigClientOrderDQueryByPage,
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "完成"
        }
      ],
      // 上部查询
      tableComponentsTop: [
        {
          compKey: "compKey1",
          labelName: "订单单号", //订单单号
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true,
          disabled: true
        },
        //业绩业代
        {
          compKey: "compKey2",
          labelName: "业绩业代",
          codeField: "PerformanceIndustry",
          component: () => import("@/components/org/commonInput"),
          type: "dropdownList",
          isRequire: true,
          disabled: true,
          isMust: true
        },
        // 大客户名称
        {
          compKey: "compKey3",
          labelName: "大客户名称",
          codeField: "custName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true,
          disabled: true
        },
        // 下单时间
        {
          compKey: "compKey4",
          labelName: "下单时间",
          codeField: "beginDate",
          component: () => import("@/components/org/datePicker/dateTimePick"),
          type: "dropdownList",
          isRequire: true,
          disabled: true,
          isMust: true
        },
        // 希望交车日期
        {
          compKey: "compKey5",
          labelName: "希望交车日期",
          codeField: "preDeliveryDate",
          component: () => import("@/components/org/commonInput"),
          type: "dropdownList",
          isRequire: true,
          isMust: true
        },
        // 发车区分
        {
          compKey: "compKey6",
          labelName: "发车区分",
          codeField: "departure",
          component: () => import("@/components/org/LookupValue"),
          lookuptype: "",
          type: "dropdownList",
          isRequire: true,
          isMust: true
        },
        // 按揭银行
        {
          compKey: "compKey7",
          labelName: "按揭银行",
          codeField: "MortgageBank",
          component: () => import("@/components/org/LookupValue"),
          lookuptype: "",
          type: "dropdownList",
          isRequire: true,
          isMust: true
        },
        // 按揭金额(元)
        {
          compKey: "compKey8",
          labelName: "按揭金额(元)",
          codeField: "MortgageAmount",
          component: () => import("@/components/org/commonInput/numberInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        // 期数(月)
        {
          compKey: "compKey9",
          labelName: "期数(月)",
          codeField: "periods",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        // 付款方式
        {
          compKey: "compKey10",
          labelName: "付款方式",
          codeField: "paymentMethod",
          component: () => import("@/components/org/LookupValue"),
          lookuptype: "",
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        // 购买类型
        {
          compKey: "compKey11",
          labelName: "购买类型",
          codeField: "PurchaseType",
          component: () => import("@/components/org/LookupValue"),
          lookuptype: "",
          type: "dropdownList",
          isRequire: true,
          isMust: true
        },
        // 用途
        {
          compKey: "compKey12",
          labelName: "用途",
          codeField: "usage",
          component: () => import("@/components/org/LookupValue"),
          lookuptype: "",
          type: "dropdownList",
          isRequire: true,
          isMust: true
        }
      ],
      // 下部查询
      tableComponentsBottom: [
        // 车价(元)
        {
          compKey: "compKey13",
          labelName: "车价(元)",
          codeField: "carPrice",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          disabled: true,
          isMust: true
        },
        // 其他项目一
        {
          compKey: "compKey14",
          labelName: "其他项目一",
          codeField: "otherItem1",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        // 其他项目一金额(元)
        {
          compKey: "compKey15",
          labelName: "其他项目一金额(元)",
          codeField: "otherItem1Price",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        // 其他项目二
        {
          compKey: "compKey16",
          labelName: "其他项目二",
          codeField: "otherItem2",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        // 其他项目二金额(元)
        {
          compKey: "compKey17",
          labelName: "其他项目二金额(元)",
          codeField: "otherItem2Price",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        // 购置费(%)
        {
          compKey: "compKey18",
          labelName: "购置费(%)",
          codeField: "purchaseFee",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        // 运费(元)
        {
          compKey: "compKey19",
          labelName: "运费(元)",
          codeField: "freight",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        // 总计(元)
        {
          compKey: "compKey20",
          labelName: "总计(元)",
          codeField: "totalPrice",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          disabled: true,
          isMust: true
        }
      ],
      // 表格数据
      tableCols: [
        {
          prop: "carBrandCode",
          label: "品牌编码",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "carBrandCn",
          label: this.$t("org.label.carBrandCn"), //品牌
          width: 120,
          align: "center"
        },
        {
          prop: "purOrderCode",
          label: "订单单号",
          width: null,
          align: "center"
        },
        {
          prop: "custName",
          label: "客户名称",
          width: null,
          align: "center"
        },
        {
          prop: "purOrderTime",
          label: "订单日期",
          width: null,
          align: "center"
        },
        {
          prop: "BusRepresentative",
          label: "业务代表",
          width: null,
          align: "center"
        },
        {
          prop: "carSeriesId",
          label: "车系Id",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "carSeriesName",
          label: "车系",
          width: null,
          align: "center"
        },
        {
          prop: "smallCarTypeCn",
          label: "车型",
          width: null,
          align: "center"
        },
        {
          prop: "carConfigId",
          label: "车型配置+",
          expLabel: "车型配置",
          width: 150,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isMul: false,
              isShowLabel: false,
              codeField: "carConfigId",
              textField: "carConfigCode",
              rowFileds: "carBrandCode",
              otherField:
                "mdmSmallCarTypeExtend.smallCarTypeCode-rpCarTypeCode1",
              clickEvent: () => null,
              component: () => import("@/components/org/carTypeConfig")
            }
          ]
        },
        {
          prop: "carColorCode",
          label: "车身颜色+",
          expLabel: "车身颜色",
          width: 150,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey2",
              isMul: false,
              isShowLabel: false,
              codeField: "carColorCode",
              textField: "carColorName",
              // rowFileds: "carBrandCode",
              // otherField:
              //   "mdmSmallCarTypeExtend.smallCarTypeCode-rpCarTypeCode1",
              clickEvent: () => null,
              component: () => import("@/components/org/carColor")
            }
          ]
        },
        {
          prop: "carInColorCode",
          label: "内饰色+",
          expLabel: "内饰色",
          width: 150,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey3",
              isMul: false,
              isShowLabel: false,
              codeField: "carInColorCode",
              textField: "carInColorName",
              // rowFileds: "carBrandCode",
              // otherField:
              //   "mdmSmallCarTypeExtend.smallCarTypeCode-rpCarTypeCode1",
              clickEvent: () => null,
              component: () => import("@/components/org/TrimPopupColor")
            }
          ]
        },
        // {
        //   prop: "chooseablePackage",
        //   label: "选装包",
        //   width: null,
        //   align: "center"
        // },
        {
          prop: "carPrice",
          label: "单价（元）",
          width: 120,
          align: "center"
        },
        {
          prop: "purOrderStatus",
          label: "订单状态",
          width: 120,
          align: "center"
        },
        {
          prop: "deliveryDlrId",
          label: "交货经销商+",
          expLabel: "交货经销商",
          width: 150,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey4",
              isMul: false,
              isShowLabel: false,
              codeField: "deliveryDlrId",
              textField: "deliveryDlrName",
              // rowFileds: "carBrandCode",
              // otherField:
              //   "mdmSmallCarTypeExtend.smallCarTypeCode-rpCarTypeCode1",
              clickEvent: () => null,
              component: () => import("@/components/org/orgDlr")
            }
          ]
        },
        {
          prop: "receiveShId",
          label: "搬入仓库+",
          expLabel: "搬入仓库",
          width: 150,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey4",
              isMul: false,
              isShowLabel: false,
              codeField: "receiveShId",
              textField: "receiveShName",
              // rowFileds: "carBrandCode",
              // otherField:
              //   "mdmSmallCarTypeExtend.smallCarTypeCode-rpCarTypeCode1",
              clickEvent: () => null,
              component: () =>
                import("@/components/ve/hostFatoryWareHouse/wareHouseInput")
            }
          ]
        }
      ],
      // 标题
      textMap: "订单信息",
      // 上表单数据（无需赋值，由混入对象赋值）
      formFieldTop: {
        roleName: "",
        PerformanceIndustry: "",
        custName: "",
        beginDate: "",
        preDeliveryDate: "",
        departure: "",
        MortgageBank: "",
        MortgageAmount: "",
        periods: "",
        paymentMethod: "",
        PurchaseType: "",
        usage: "",
      },
      // 下表单数据（无需赋值，由混入对象赋值）
      formFieldBottom: {
        carPrice: "",
        otherItem1: "",
        otherItem1Price: "",
        otherItem2: "",
        otherItem2Price: "",
        purchaseFee: "",
        freight: "",
        totalPrice: "",
      },
      // 表格数据
      myformField: {
        carBrandCode: "",
        carBrandCn: "",
        purOrderCode: "",
        custName: "",
        purOrderTime: "",
        BusRepresentative: "",
        carSeriesId: "",
        carSeriesName: "",
        smallCarTypeCn: "",
        carConfigId: "",
        carColorCode: "",
        carInColorCode: "",
        carPrice: "",
        purOrderStatus: "",
        deliveryDlrId: "",
        receiveShId: "",
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        //保存表单
        this.saveForm();
      }
    }
  }
};
// / el-table--fit el-table--striped el-table--border el-table--scrollable-x el-table--enable-row-transition el-table--small
</script>
<style lang="scss" scoped>
/deep/ .el-dialog__body .filter-params-e3s .el-table {
  height: 150px !important;
}
/deep/ .el-dialog__body .filter-params-e3s .filter-container.filter-button{
  display: none !important;
}
</style>