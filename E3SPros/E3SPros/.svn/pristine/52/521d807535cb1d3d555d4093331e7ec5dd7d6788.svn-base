/**
* description: 整车 > 开票维护> 税控基础信息维护
* author: chenjinm
* createdDate: 2019-10-21
*/
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="true"
      :dynamicIsInitTable="true"
      :dynamicIsColumnDrop="true"
      :dynamicTableOtherHeight="200"
    />

    <save
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :popupsState="editPopupsState"
    ></save>
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
import Save from "./save";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "vecarProductPriceMaintain",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit,
    Save
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.vemaintenanceInformation,
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
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: "新增"
        },
        //修改
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: "所属厂商",
                codeField: "franchiser",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: "税控编号",
                codeField: "Ensure",
                // parentFileds: "carBrandCode-carBrandCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              }
            ],
      // 动态生成网格列
      tableCols: this.getCols(),
      //表单查询数据
      formField: {
        franchiser: "",
        Ensure: ""
        // carBrandCode: "",
        // carSeriesId: ""
        // carConfigId: "",
        // priceValidBeginDate: "",
        // priceValidEndDate: ""
      }
    };
  },
  methods: {
    getCols() {
      var cols = [
        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 80,
          align: "center",
          fixed: true,
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: "修改",
              // codeField: "editControlBtn",
              codeField: "",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            }
          ]
        }
      ];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
          {
            //经销商
            prop: "franchiser",
            label: "经销商",
            width: null,
            align: "center"
          },
          {
            //所属厂商
            prop: "ShowProducerName",
            label: "所属厂商",
            width: null,
            align: "center"
          },
          {
            //税控编号
            prop: "Ensure",
            label: "税控编号",
            width: null,
            align: "center"
          },
          {
            //注册码
            prop: "registration",
            label: "注册码",
            width: null,
            align: "center"
          },
          {
            //税控口令
            prop: "Fiscal",
            label: "税控口令",
            width: null,
            align: "center"
          },
          {
            //税务数字
            prop: "taxnumber",
            label: "税务数字",
            width: null,
            align: "center"
          }
          // {
          //   prop: "mdmVeCarConfigExtend.mdmVeCarSeriesExtend.carSeriesCode",
          //   label: "车系编码",
          //   width: null,
          //   align: "center"
          // },
          // {
          //   prop: "mdmVeCarConfigExtend.mdmVeCarSeriesExtend.carSeriesId",
          //   label: "车系Id",
          //   width: null,
          //   align: "center",
          //   hidden: true
          // },
          // {
          //   prop: "mdmVeCarConfigExtend.mdmVeCarSeriesExtend.carSeriesCn",
          //   label: "车系名称",
          //   width: null,
          //   align: "center"
          // },
          // {
          //   prop: "mdmVeCarConfigExtend.mdmSmallCarTypeExtend.smallCarTypeCode",
          //   label: "车型编码",
          //   width: 180,
          //   align: "center"
          // },
          // {
          //   prop: "mdmVeCarConfigExtend.mdmSmallCarTypeExtend.smallCarTypeCn",
          //   label: "车型名称",
          //   width: 180,
          //   align: "center"
          // },
          // {
          //   prop: "mdmVeCarConfigExtend.carConfigId",
          //   label: "车型配置Id",
          //   width: 180,
          //   align: "center",
          //   hidden: true
          // },
          // {
          //   prop: "mdmVeCarConfigExtend.carConfigCode",
          //   label: "车型配置编码",
          //   width: 180,
          //   align: "center"
          // },
          // {
          //   prop: "mdmVeCarConfigExtend.carConfigCn",
          //   label: "车型配置名称",
          //   width: 150,
          //   align: "center"
          // },
          // {
          //   prop: "mdmVeCarConfigExtend.supplyStatusCn",
          //   label: "供应状态",
          //   width: 150,
          //   align: "center"
          // },
          // {
          //   prop: "carSalePrice",
          //   label: "市场指导价",
          //   width: 120,
          //   align: "center"
          // },
          // {
          //   prop: "dlrPurPrice",
          //   label: "经销商采购价",
          //   width: 120,
          //   align: "center"
          // },
          // {
          //   prop: "priceValidBeginDate",
          //   label: "价格有效开始日期",
          //   width: 150,
          //   align: "center"
          // },
          // {
          //   prop: "priceValidEndDate",
          //   label: "价格有效结束日期",
          //   width: 150,
          //   align: "center"
          // }
        ]);
      }
      return cols;
    },

    del(index) {
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
        this.$alert(
          this.$t("org.message.selDelData"),
          /*请选择需要删除的数据*/ "提示"
        );
        return;
      }
      var editRowData = that.list[curIndex];
      let role = editRowData.roleId;

      // this.persionuserId = editRowData.userId;
      // console.log("q" + editRowData);

      let queryObj = {
        //保存需要传 type="mutation"
        type: "mutation",
        // api配置
        apiConfig: orgApis.sysRoleMutationCommonDel,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //  pageSize: 1000,
          //  pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            roleId: role
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      this.$requestGraphQL(paramD).then(response => {
        if (
          response.data[orgApis.sysRoleMutationCommonDel.ServiceCode].result ===
          "1"
        ) {
          //通关如果的状态确认是编辑还是添加
          this.$message({
            message: this.$t("sys.tips.esTip14"),
            /*删除成功*/ type: "success"
          });
          this.queryTable(1);
        }
      });
    }
  }
};
</script>
