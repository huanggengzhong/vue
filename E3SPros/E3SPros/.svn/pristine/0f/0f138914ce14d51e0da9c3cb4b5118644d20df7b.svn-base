<!--
* description: 订单管理
* author: yxyan
* createdDate: 2019-09-25
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
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
    <returnOrderApply
      :dynamicEditRowData="editRowData"
      :popupsVisible="returnOrderApplyVisible"
      :key="returnOrderApplyPopupsKey"
      :popupsState="editPopupsState"
      @close="this.close()"
    ></returnOrderApply>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import returnOrderApply from "./returnOrderApply";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "orgWholeRoleManage",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit,
    returnOrderApply
  }, // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },

  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.sysRoleQueryGloableByPage,
      //退订申请弹窗
      returnOrderApplyVisible: false,
      returnOrderApplyPopupsKey: "returnOrderApplyPopupsKey",
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
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add")
        }, // '新增'
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        } //重置
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: "订单编号",
                codeField: "roleCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              }, //订单编号
              {
                compKey: "compKey2",
                labelName: "客户名称",
                codeField: "roleName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              }, //客户名称
              {
                compKey: "compKey3",
                labelName: "电话号码",
                codeField: "roleName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              }, //电话号码
              {
                compKey: "compKey4",
                labelName: "订单状态",
                lookuptype: "VE0188",
                codeField: "roleOrgType",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: true
              }, // 订单状态（值列表）
              {
                compKey: "compKey5",
                labelName: "销售顾问",
                codeField: "roleCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: false
              }, //销售顾问
              {
                compKey: "compKey6",
                labelName: "网点名称",
                lookuptype: "VE0188",
                codeField: "roleOrgType",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              }, // 网点名称（值列表）
              {
                compKey: "compKey7",
                labelName: "下单日期",
                codeField: "assignDateBegin",
                isRequire: false,
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              },
              {
                compKey: "compKey8",
                labelName: "至",
                codeField: "assignDateBegin",
                isRequire: false,
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "datePicker",
                dateOptionsType: "1",
                isMust: false
              },
              {
                compKey: "compKey9",
                labelName: "异常状态",
                lookuptype: "VE0188",
                codeField: "roleOrgType",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              }, // 异常状态
              {
                compKey: "compKey10",
                labelName: "销售类型",
                lookuptype: "VE0188",
                codeField: "roleOrgType",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              }, // 销售类型
              {
                compKey: "compKey11",
                labelName: "购车方式",
                lookuptype: "VE0188",
                codeField: "roleOrgType",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              }, // 购车方式
              {
                compKey: "compKey12",
                labelName: "购车形态",
                lookuptype: "VE0188",
                codeField: "roleOrgType",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              }, // 购车形态
              {
                compKey: "compKey13",
                labelName: "是否开票",
                codeField: "isEnable",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: false
              }, // 是否开票

              {
                compKey: "compKey14",
                labelName: this.$t("org.label.carConfig"),
                codeField: "carConfigId",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: false
              } // 车型配置
            ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: this.$t("sys.content.operate"),
          codeField: "controlBtn",
          width: 159,
          align: "center",
          fixed: true,
          isComponent: true,
          comps: [
            {
              compKey: "propKey",
              align: "center",
              labelName: this.$t("sys.button.edit"),
              codeField: "editControlBtn",
              clickEvent:this.edit,
              component: () => import("@/components/org/linkButton")
            },
            {
              compKey: "propKey0",
              align: "center",
              labelName: "退订申请",
              codeField: "editControlBtn",
              clickEvent: ()=> this.edit1(),
              component: () => import("@/components/org/linkButton")
            }
          ]
        }, //操作
        {
            prop: "dlrShortName",
            label: this.$t("org.label.dlrName") /*经销商*/,
            width: 120,
            align: "center"
          },
          { prop: "roleCode", label: "订单编号", width: null, align: "center" }, //订单编号
          { prop: "roleCode", label: "合同编号", width: null, align: "center" }, //合同编号
          { prop: "roleCode", label: "客户名称", width: null, align: "center" }, //客户名称
          { prop: "roleCode", label: "车主名称", width: null, align: "center" }, //车主名称
          {
            prop: "roleCode",
            label: "是否非直营二网客户",
            width: null,
            align: "center"
          }, //是否非直营二网客户
          {
            prop: "configCode",
            label: this.$t("org.label.carType") /*车型*/,
            width: null,
            align: "center"
          },
          {
            prop: "carConfigName",
            label: this.$t("org.label.carConfig") /*车型配置*/,
            width: 150,
            align: "center"
          },
          {
            prop: "carColorName",
            label: this.$t("org.label.carColor") /*车身颜色*/,
            width: 120,
            align: "center"
          },
          {
            prop: "carIncolorName",
            label: this.$t("org.label.carIncolor") /*内饰色*/,
            width: 120,
            align: "center"
          },
          { prop: "roleCode", label: "选装包", width: null, align: "center" }, //选装包
          {
            prop: "vin",
            label: this.$t("org.label.vin") /*vin码*/,
            width: 155,
            align: "center"
          },
          { prop: "roleCode", label: "数量", width: null, align: "center" }, //数量
          { prop: "roleCode", label: "销售顾问", width: null, align: "center" }, //销售顾问
          { prop: "roleCode", label: "订单状态", width: null, align: "center" }, //订单状态
          { prop: "roleCode", label: "异常状态", width: null, align: "center" }, //异常状态
          { prop: "roleCode", label: "销售价格", width: null, align: "center" }, //销售价格
          { prop: "roleCode", label: "应收定金", width: null, align: "center" }, //应收定金
          { prop: "roleCode", label: "实收定金", width: null, align: "center" }, //实收定金
          { prop: "roleCode", label: "实收车款", width: null, align: "center" }, //实收车款
          {
            prop: "roleCode",
            label: "地否金额贷款",
            width: null,
            align: "center"
          }, //地否金额贷款
          {
            prop: "roleCode",
            label: "金融贷款银行",
            width: null,
            align: "center"
          }, //金融贷款银行
          { prop: "roleCode", label: "下单日期", width: null, align: "center" }, //下单日期
          {
            prop: "roleCode",
            label: "预计交车日期",
            width: null,
            align: "center"
          }, //预计交车日期
          { prop: "roleCode", label: "修改时间", width: null, align: "center" }, //修改时间

          {
            prop: "roleDesc",
            label: "角色描述",
            width: null,
            align: "center",
            hidden: true
          },
          {
            prop: "roleId",
            label: "角色ID",
            width: null,
            align: "center",
            hidden: true
          },

          {
            prop: "roleOrgType",
            label: "组织类型编码",
            width: null,
            align: "center",
            hidden: true
          },
          {
            prop: "enabled",
            label: "是否启用编码",
            width: null,
            align: "center",
            hidden: true
          },
          {
            prop: "builtIn",
            label: "是否内置编码",
            width: null,
            align: "center",
            hidden: true
          }
      ],

      //表单查询数据
      formField: {
        // roleCode: '',
        // roleName: '',
        // roleOrgType:''
      }
    };
  },
  methods: {
    close() {
       this.$children[2].curPopupsVisible = false;
    },
    returnOrderApply() {
      this.returnOrderApplyVisible = true;
    },

    edit1(index) {
      var curIndex = index
      const that = this.$refs.multipleTable
      if (curIndex === undefined || curIndex === null) {
        var currentRow
        if (that.isMul === true) {
          // 多选
          var selectData = that.selection
          if (selectData.length > 0) {
            currentRow = selectData[0]
          }
        } else {
          // 单选
          currentRow = that.currentRow
        }
        if (currentRow) {
          curIndex = currentRow.index
        }
      }

      if (curIndex === undefined || curIndex === null) {
        this.$alert('请选择需要修改的数据', '提示')
        return
      }
      this.editRowData = that.list[curIndex]
      this.$children[3].curPopupsVisible = true
    },

  }
};
</script>
