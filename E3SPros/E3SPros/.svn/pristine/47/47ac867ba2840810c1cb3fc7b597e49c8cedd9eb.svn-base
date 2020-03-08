<!--
* description: 销售合同信息查询
* author: cjming
* createdDate: 2019-10-11
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicIsShowMoreBtn="isMoreBtn"
      :dynamicTableOtherHeight="conHeight"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsInitTable="true"
      :dynamicIsColumnDrop="true"
    />

    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "orgWholeRoleManage",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  }, // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },

  data() {
    return {
      //设置是否显示更多按钮
      conHeight: 35,
      isMoreBtn: true,
      // 网格查询API配置对象
      apiConfig: veApis.veContractQry,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")
        }, //查询
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        }, //重置
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          // text: this.$t("sys.button.add")
          text: "打印合同"
        }, // '打印合同'
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          // text: this.$t("sys.button.add")
          text: "打印交车单"
        }, // '打印交车单'
        {
          compKey: "btnKey",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: "导出"
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // {compKey: 'compKey1', labelName: this.$t('org.label.roleCode'), codeField: 'roleCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//角色编码
              {
                //品牌
                compKey: "compKey2",
                labelName: this.$t("ve.label.carBrand"),
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                // 客户名称
                compKey: "compKey3",
                labelName: this.$t("ve.label.buyCustId"),
                codeField: "buyCustId",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("ve.label.vin"),
                codeField: "vin",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                //订单编号
                compKey: "compKey5",
                labelName: this.$t("ve.label.saleOrderCode"),
                codeField: "saleOrderCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                //合同编号
                compKey: "compKey6",
                labelName: this.$t("ve.label.saleContractCode"),
                codeField: "saleContractCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: false
              },
              {
                //销售类型
                compKey: "compKey7",
                labelName: this.$t("ve.label.saletype"),
                codeField: "saleTypeId",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              },
              {
                //采购单状态
                compKey: "compKey8",
                labelName: this.$t("ve.label.zhuangtai"),
                codeField: "chargeState",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: false
              },
              {
                //收款状态
                compKey: "compKey9",
                labelName: this.$t("ve.label.chargeState"),
                codeField: "chargeState",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: false
              },
              {
                //客户名称
                compKey: "compKey10",
                labelName: this.$t("ve.label.custName"),
                codeField: "buyCustId",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: false
              },
              {
                //经销商简称
                compKey: "compKey11",
                labelName: this.$t("ve.label.dlrShortName"),
                codeField: "dlrShortName",
                component: () => import("@/components/org/orgDlr"),
                type: "propus",
                isMust: false
              },
              {
                //车型
                compKey: "compKey12",
                labelName: this.$t("ve.label.carTypeCode"),
                codeField: "carConfigId",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: false
              },
              {
                //优惠申请状态   缺少字段
                compKey: "compKey13",
                labelName: this.$t("ve.label.favoAmount"),
                codeField: "roleOrgType",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              },
              {
                //收款开始日期
                compKey: "compKey14",
                labelName: this.$t("ve.label.createDateBegin"),
                codeField: "assignDateBegin",
                isRequire: false,
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              },
              {
                //收款结束日期
                compKey: "compKey15",
                labelName: this.$t("ve.label.createDateEnd"),
                codeField: "assignDateBegin",
                isRequire: false,
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              },
              {
                //车务代办
                compKey: "compKey16",
                labelName: this.$t("ve.label.isLicence"),
                codeField: "isLicence",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              },
              {
                //精品业务
                compKey: "compKey17",
                labelName: this.$t("ve.label.isPart"),
                codeField: "isPart",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              },
              {
                //保险业务
                compKey: "compKey18",
                labelName: this.$t("ve.label.isInsurance"),
                codeField: "isInsurance",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              }
            ],
      // 动态生成网格列
      tableCols: this.getCols(),

      //表单查询数据
      formField: {
        roleCode: "",
        roleName: "",
        roleOrgType: "",
        carBrandCode: "",
        buyCustId: "",
        vin: "",
        inputText: "",
        saleContractCode: "",
        saleTypeId: "",
        chargeState: "",
        buyCustId: "",
        dlrShortName: "",
        carConfigId: "",
        roleOrgType: "",
        assignDateBegin: "",
        isLicence: "",
        isPart: "",
        roleOrgType: "",
        saleOrderCode: ""
      }
    };
  },
  methods: {
    del() {
      console.info("删除");
    },
    // 编辑按钮事件
    edit(index) {
      var curIndex = index;

      const that = this.$refs.multipleTable;
      if (curIndex === undefined || curIndex === null) {
        var currentRow;
        if (that.isMul === true) {
          // 多选
          var selectData = that.selection;
          if (selectData.length > 0) {
            currentRow = selectData[0];
          }
        } else {
          // 单选
          currentRow = that.currentRow;
        }
        if (currentRow) {
          curIndex = currentRow.index;
        }
      }

      if (curIndex === undefined || curIndex === null) {
        this.$alert("请选择需要修改的数据", "提示");
        return;
      }
      this.editRowData = that.list[curIndex];
      this.editRowData.enabled = String(this.editRowData.enabled);
      this.showEdit("edit");
    },
    getCols() {
      var cols = [
        {
          prop: "controlBtn",
          // label: this.$t("sys.content.operate"),
          label: "订单交期明细",
          codeField: "controlBtn",
          width: 120,
          align: "center",
          fixed: true,
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              align: "center",
              // labelName: this.$t("sys.button.edit"),
              labelName: this.$t("ve.label.saleOrderState"),
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            }
          ]
        } //操作
      ];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
          {
            //销售类型名称
            prop: "saleTypeName",
            label: this.$t("ve.label.saleTypeName"),
            width: null,
            align: "center"
          },
          {
            //订单编号
            prop: "saleOrderCode",
            label: this.$t("ve.label.saleOrderCode"),
            width: null,
            align: "center"
          },
          {
            //合同编号
            prop: "saleContractCode",
            label: this.$t("ve.label.saleContractCode"),
            width: null,
            align: "center"
          },
          {
            //客户名称
            prop: "custName",
            label: this.$t("ve.label.custName"),
            width: null,
            align: "center"
          },
          {
            //销售顾问
            prop: "caEmpName",
            label: this.$t("ve.label.caEmpId"),
            width: null,
            align: "center"
          },

          {
            //VIN
            prop: "vin",
            label: this.$t("ve.label.vin"),
            width: null,
            align: "center"
          },
          {
            //单据状态
            prop: "saleOrderStateName",
            label: this.$t("ve.label.roleId"),
            width: null,
            align: "center"
            // hidden: true
          },

          {
            //异常状态名称
            prop: "abnormalName",
            label: this.$t("ve.label.abnormalName"),
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //车辆品牌
            prop: "carBrandCode",
            label: "车辆品牌",
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //车型名称
            prop: "carTypeCode",
            label: "车型名称",
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //车型编码
            prop: "carBrandCode",
            label: "车型编码",
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //车身颜色名称
            prop: "carColorName",
            label: this.$t("ve.label.carColorName"),
            width: null,
            align: "center"
            // hidden: true
          },
          {
            prop: "builtIn",
            label: "内饰颜色",
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //预计交车时间
            prop: "preDeliveryDate",
            label: this.$t("ve.label.preDeliveryDate"),
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //收款状态
            prop: "chargeState",
            label: this.$t("ve.label.chargeState"),
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //已收定金
            prop: "ReceivedAmount",
            label: this.$t("ve.label.ReceivedAmount"),
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //合同总金额
            prop: "contractPrice",
            label: "合同总金额",
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //按揭手续费  缺少字段
            prop: "loanPoundage",
            label: this.$t("ve.label.loanPoundage"),
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //应收总金额
            prop: "contractPrice",
            label: "应收总金额",
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //已收总金额
            prop: "ReceivedAmount",
            label: "已收总金额",
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //优惠申请状态
            prop: "favoAmount",
            label: this.$t("ve.label.favoAmount"),
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //车务代码
            prop: "isLicence",
            label: this.$t("ve.label.isLicence"),
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //精品业务
            prop: "isPart",
            label: this.$t("ve.label.isPart"),
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //保险业务
            prop: "isInsurance",
            label: this.$t("ve.label.isInsurance"),
            width: null,
            align: "center"
            // hidden: true
          },
          {
            //订单开始日期
            prop: "createDateBegin",
            label: this.$t("ve.label.createDateBegin"),
            width: null,
            align: "center"
            // hidden: true
          }
        ]);
      }
      return cols;
    }
  }
};
</script>
