/**
* description: 整车 > 主机厂基础数据 > 框架规则 > 经销商资金类型维护
* author: liyanm
* createdDate: 2019-07-23
* log: 2019-08-06 修改成混入模式
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
      :dynamicIsShowMoreBtn="false"
      :isSetDefaultBrand="true"
    />

    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>
    <maintain
      :dynamicEditRowData="maintainRowData"
      :popupsVisible="maintainPopupsVisible"
      :key="maintainPopupsKey"
      :popupsState="maintainPopupsState"
      @close="maintainclose"
    ></maintain>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import Maintain from "./maintain";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "vedlrFundsType",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit,
    Maintain
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
      apiConfig: veApis.veDbOrgPurcashTypeQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "chickbox",
          size: "small",
          clickEvent: () => this.synchrony("isEnable"),
          text: this.$t("sys.button.allSync")
        },
        {
          compKey: "btnKey2",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add")
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.maintainedit(),
          text: this.$t("sys.button.fundsMaintain")
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () =>
            this.synchrony("dlrShortName,dlrId"),
          text: this.$t("sys.button.sync")
        },
        {
          compKey: "btnKey6",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        },
        {
          compKey: "btnKey7",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        },
        {
          compKey: "btnKey8",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export")
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
                labelName: this.$t("org.label.carBrandCn") /*品牌*/,
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.capitalType") /*资金类型*/,
                codeField: "purcashTypeId",
                parentFileds: "carBrandCode",
                component: () => import("@/components/ve/PurcashType"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.isEnable") /*是否启用*/,
                codeField: "isEnable",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: true
              }
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "controlBtn",
                label: this.$t("sys.content.operate"),
                codeField: "controlBtn",
                width: 60,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey0",
                    labelName: this.$t("sys.button.edit"),
                    codeField: "editControlBtn",
                    clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  }
                ]
              },
              {
                prop: "carBrandCode",
                label: this.$t("org.label.carBrandCode") /*品牌编码*/,
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "carBrandCn",
                label: this.$t("org.label.carBrand") /*品牌*/,
                width: null,
                align: "center"
              },
              {
                prop: "purcashTypeId",
                label: this.$t("org.label.capitalCode") /*资金编码*/,
                width: null,
                align: "center"
              },
              {
                prop: "purcashTypeName",
                label: this.$t("org.label.capitalName") /*资金名称*/,
                width: null,
                align: "center"
              },
              {
                prop: "dlrShortName",
                label: this.$t("org.label.dlrName") /*经销商*/,
                width: 250,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    isShowLabel: false,
                    codeField: "dlrId",
                    textField: "dlrShortName",
                    parentFileds: "carBrandCode",
                    clickEvent: () => null,
                    component: () => import("@/components/org/orgDlr")
                  }
                ]
              },
              {
                prop: "dlrId",
                label: this.$t("org.label.dlrId") /*经销商ID*/,
                width: 100,
                align: "center",
                hidden:true,
              },
              {
                prop: "isEnable",
                label: this.$t("org.label.isEnable") /*是否启用*/,
                width: 100,
                align: "center"
                // hidden:true,
              },
              {
                prop: "updateControlId",
                label: "并发控制ID",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "purcashTypeBrandId",
                label: "品牌资金类型主键ID",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "cancelDay",
                label: "解配天数",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "orderNo",
                label: "分配顺序",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "isOnlineStatus",
                label: "是否实时分配",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "isBatchStatus",
                label: "是否批次分配是否批次分配",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "caroutPriortiy",
                label: "出货顺序确认",
                width: null,
                align: "center",
                hidden: true
              }
              // {
              //   prop: "orgPurcashTypeId",
              //   label: "专营店采购资金类型表ID",
              //   width: null,
              //   align: "center",
              //   hidden: true
              // }
            ],
      //表单查询数据
      formField: {
        carBrandCode: "",
        purcashTypeId: "",
        isEnable: ""
      },
      maintainPopupsVisible: false, //是否显示历史价格弹窗
      // editPopupsVisible: false, //是否显示历史价格弹窗
      maintainPopupsKey: "maintain1", // 新增、编辑弹窗Key
      maintainPopupsState: "", // 新增、编辑弹窗状态（add/edit/view）
      maintainRowData: {} // 新增、编辑行对象
    };
  },
  methods: {
    // 资金维护事件
    maintainedit(index) {
      const that = this.$refs.multipleTable;
      //   this.maintainRowData = that.list;
      this.showmaintainEdit("edit");
    },
    // 资金维护弹窗
    showmaintainEdit(type) {
      this.maintainPopupsState = type;
      this.maintainPopupsVisible = true;
      this.maintainPopupsKey = this.$utils.generateId();
    },
    // 关闭设资金维护弹窗
    maintainclose(type) {
      this.maintainPopupsVisible = false;
      this.maintainPopupsKey = this.$utils.generateId();
      // debugger
      this.tableComponents[1].compKey = this.$utils.generateId();
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
          message: this.$t("sys.tips.esTip22") /*请选择需要保存的资金类型*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      debugger
      for (var k in selectData) {
        let queryObj = {
          // 保存mutation
          type: "mutation",
          typeParam: "($dataInfo:[InputVeDbOrgPurcashType])",
          // api配置
          apiConfig: veApis.veDbOrgPurcashTypeMutationUpdate,
          apiServices: [
            {
              apiServiceParam: "(dataInfo:$dataInfo)"
            }
          ],
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              purcashTypeId: selectData[k].purcashTypeId,
              dlrId: selectData[k].dlrId,
              isEnable: selectData[k].isEnable,
              // orgPurcashTypeId: selectData[k].orgPurcashTypeId
              updateControlId: selectData[k].updateControlId
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
              message: this.$t("sys.tips.esTip5") /*保存成功*/,
              type: "success",
              duration: 2000
            });
            that.queryTable(1);
          }
        });
      }
    },
    close() {
      this.editPopupsVisible = false;
      this.editPopupsKey = this.$utils.generateId();
      this.queryTable(1);
    }
  }
};
</script>
