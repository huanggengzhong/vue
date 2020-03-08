/**
* description: 整车 > 主机厂基础数据 > 框架规则 > 采购单冻结金额设置
* author: liyanm
* createdDate: 2019-07-23
*/
/**
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsInitTable="true"
      :dynamicIsColumnDrop="true"
    />
    <editPOT
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></editPOT>
    <newMessage
      :dynamicEditRowData="newmessageRowData"
      :popupsVisible="newmessagePopupsVisible"
      :key="newmessagePopupsKey"
      :popupsState="newmessagePopupsState"
      @close="newmessageclose"
    ></newMessage>
    <setting
      :dynamicEditRowData="settingMothRowData"
      :popupsVisible="settingMothPopupsVisible"
      :key="settingMothPopupsKey"
      :popupsState="settingMothPopupsState"
      @close="settingMothclose"
    ></setting>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { testTableColConfig } from "@/api/table";
import editPOT from "./editPOT";
import newMessage from "./newMessage";
import setting from "./setting";
export default {
  name: "vefreezingOrder",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    editPOT,
    newMessage,
    setting
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veDbBaseseriesFreezeBailQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: "查询"
        },
        {
          compKey: "btnKey9",
          type: "",
          size: "small",
          clickEvent: () =>
            this.synchrony("dlrShortName,dlrId,freezeBail,freezeWay,freezeWayName"),
          text: "全部同步"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: "新增"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          isSort: true,
          clickEvent: () =>
            this.synchrony("dlrShortName,dlrId,freezeBail,freezeWay,freezeWayName"),
          text: "同步"
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        },
        // {
        //   compKey: "btnKey5",
        //   type: "",
        //   size: "small",
        //   clickEvent: () => this.newmessage(),
        //   text: "初始化"
        // },
        {
          compKey: "btnKey6",
          type: "",
          size: "small",
          clickEvent: () => this.settingMoth(),
          text: "经销商启用开关"
        },
        {
          compKey: "btnKey7",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        },
        {
          compKey: "btnKey8",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: "导出"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: "品牌",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
         {
                compKey: "compKey2",
                labelName: this.$t("org.label.carSerise"),
                codeField: "baseSeriesId",
                parentFileds: "carBrandCode-carBrandCode",
                component: () => import("@/components/org/CarCode"),
                type: "dropdownList",
                isMust: true
              }, //车系
        // {
        //   compKey: "compKey2",
        //   labelName: "车系",
        //   codeField: "baseSeriesId",
        //   component: () => import("@/components/org/CarCode"),
        //   type: "dropdownList",
        //   isMust: true
        // },
        // {
        //   compKey: "compKey3",
        //   labelName: "采购单类型",
        //   parentFileds: "carBrandCode-carBrandCode",
        //   codeField: "orderTypeId",
        //   component: () => import("@/components/ve/PurchaseOrderType"),
        //   type: "dropdownList",
        //   isMust: true
        // },
         {compKey: 'compKey3', labelName:"采购单类型",  lookuptype:"VE0004", codeField: 'orderTypeId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},
        {
          compKey: "compKey4",
          labelName: "资金类型",
          codeField: "purcashTypeId",
          component: () => import("@/components/ve/PurcashType"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "经销商",
          codeField: "dlrId",
          component: () => import("@/components/org/orgDlr"),
          type: "propus",
          isMust: false
        },
        // （值列表）
        {
          compKey: "compKey6",
          labelName: "库存类型",
          lookuptype: "VE0005",
          codeField: "stockType",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        },
        {
          compKey: "compKey7",
          labelName: "冻结节点",
          lookuptype: "VE0189",
          codeField: "freezeNode",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        },
        ,
        {
          compKey: "compKey8",
          labelName: "冻结方式",
          lookuptype: "VE0188",
          codeField: "freezeWay",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        { prop: "carBrandCn", label: "品牌", width: 110, align: "center" },
        {
          prop: "dlrShortName",
          label: "经销商+",
          expLabel:'经销商',
          width: 250,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              codeField: "dlrId",
              textField: "dlrShortName",
              rowFileds: "carBrandCode",
              clickEvent: () => null,
              component: () => import("@/components/org/orgDlr")
            }
          ]
        },
        { prop: "carSeriesCn", label: "车系", width: 110, align: "center" },
        {
          prop: "orderTypeName",
          label: "采购单类型",
          width: 110,
          align: "center"
        },
        {
          prop: "purcashTypeName",
          label: "资金类型",
          width: 110,
          align: "center"
        },
        {
          prop: "stockTypeName",
          label: "库存类型",
          width: 110,
          align: "center"
        },
        {
          prop: "freezeNodeName",
          label: "冻结节点",
          width: 110,
          align: "center"
        },
        {
          prop: "freezeWay",
          label: "冻结方式+",
          width: 250,
          align: "center",
          expLabel:'冻结方式',
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              lookuptype: "VE0188",
              codeField: "freezeWay",
              clickEvent: () => null,
              component: () => import("@/components/org/LookupValue")
            }
          ]
        },
        {
          prop: "freezeBail",
          label: "冻结金额+",
          width: 250,
          align: "center",
          expLabel:'冻结金额',
           isComponent: true,
          comps: [
            {
              compKey: "propKey3",
              isShowLabel: false,
              codeField: "freezeBail",
              clickEvent: () => null,
              component: () => import("@/components/org/commonInput/numberInput")
            }
          ]

        },
        {
          prop: "isEnable",
          label: "状态",
          hidden:true,
          width: 100,
          align: "center",
        },
        // {
        //   prop: "isEnableName",
        //   label: "状态",
        //   width: 100,
        //   align: "center",
        // },
        {
          prop: "updateControlId",
          label: "并发控制",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "carBrandCode",
          label: "品牌编码",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "purcashTypeId",
          label: "采购单ID",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "freezeWay",
          label: "冻结方式ID",
          width: 0,
          align: "center",
          hidden: true
        },
          {
          prop: "freezeNode",
          label: "冻结节点ID",
          width: 0,
          align: "center",
          hidden: true
        },
       {
          prop: "orderTypeId",
          label: "采购单类型ID",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "seriesId",
          label: "车系ID",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "stockType",
          label: "库存类型ID",
          width: 0,
          align: "center",
          hidden: true
        },

      {
          prop: "dlrId",
          label: "经销商ID",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "baseseriesFreezeBailId",
          label: "主键ID",
          width: 0,
          align: "center",
          hidden: true
        },
      ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "",
        baseSeriesId: "",
        orderTypeId: "",
        purcashTypeId: "",
        stockType: "",
        freezeNode: "",
        freezeWay: "",
        dlrId: ""
      },
      newmessagePopupsVisible: false, //是否显示历史价格弹窗
      // 新增、编辑弹窗Key
      newmessagePopupsKey: "newmessage",
      // 新增、编辑弹窗状态（add/edit/view）
      newmessagePopupsState: "",
      // 新增、编辑行对象
      newmessageRowData: {},
      settingMothPopupsVisible: false, //是否显示历史价格弹窗
      // 新增、编辑弹窗Key
      settingMothPopupsKey: "settingMoth",
      // 新增、编辑弹窗状态（add/edit/view）
      settingMothPopupsState: "",
      // 新增、编辑行对象
      settingMothRowData: {}
    };
  },
  methods: {
    // 初始化事件
    newmessage(index) {
      const that = this.$refs.multipleTable;
      this.shownewmessageEdit("edit");
    },
    // 初始化弹窗
    shownewmessageEdit(type) {
      this.newmessagePopupsState = type;
      this.newmessagePopupsVisible = true;
      this.newmessagePopupsKey = this.$utils.generateId();
    },
    // 关闭初始化弹窗
    newmessageclose(type) {
      this.newmessagePopupsVisible = false;
      this.newmessagePopupsKey = this.$utils.generateId();
    },
    // 经销商启用开关事件
    settingMoth(index) {
      const that = this.$refs.multipleTable;
      this.showsettingMothEdit("edit");
    },
    // 经销商启用开关弹窗
    showsettingMothEdit(type) {
      this.settingMothPopupsState = type;
      this.settingMothPopupsVisible = true;
      this.settingMothPopupsKey = this.$utils.generateId();
    },
    // 关闭经销商启用开关弹窗
    settingMothclose(type) {
      this.settingMothPopupsVisible = false;
      this.settingMothPopupsKey = this.$utils.generateId();
    },
    //保存
    save() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择需要保存的采购单信息",
          type: "warning",
          duration: 2000
        });
        return;
      }
      for (var k in selectData) {
        console.log(selectData);
        let queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.veDbBaseseriesFreezeBailMutationSave,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              // carBrandId: selectData[k].carBrandCode,
              baseSeriesFreezeBailId: selectData[k].baseSeriesFreezeBailId,
              dlrId: selectData[k].dlrId,
              freezeBail: selectData[k].freezeBail,
              freezeWay: selectData[k].freezeWay,
              freezeNode: selectData[k].freezeNode,
              stockType: selectData[k].stockType,
              orderTypeId: selectData[k].orderTypeId,
              purcashTypeId: selectData[k].purcashTypeId,
              baseSeriesId: selectData[k].seriesId,
              carBrandCode: selectData[k].carBrandCode,
              groupCode: selectData[k].groupCode,
              oemCode: selectData[k].oemCode,
              updateControlId: selectData[k].updateControlId,
              baseseriesFreezeBailId: selectData[k].baseseriesFreezeBailId
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
            saveCount++;
          } else {
            saveState = false;
            msg = response.data[queryObj.apiConfig.ServiceCode].msg;
            that.$message({
              message: msg,
              type: "warning",
              duration: 2000
            });
          }
          if (saveCount == selectData.length) {
            that.$message({
              message: "保存成功",
              type: "success",
              duration: 2000
            });
            that.queryTable(1);
          }
        });
      }
    }
  }
};
</script>
