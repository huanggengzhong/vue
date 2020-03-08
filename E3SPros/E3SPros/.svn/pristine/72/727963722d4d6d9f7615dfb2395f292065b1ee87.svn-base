<!--
* description: 销退入库
* author: linzewen
* createdDate: 2019-09-24
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
      :dynamicIsShowSelect="true"
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
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";

export default {
  name: "vebackIntoStorage",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  created() {},
  mounted() {},
  data() {
    return {
      //   // 下方第一个页签的内容
      //   activeName: '',
      //   tableButtonsSec: [],
      //   tableComponentsSec: [
      //
      //   ],
      //   apiConfigSec: orgApis.orgconfigurablePageComponentsManagement,
      //   tableColsSec: [],
      //   formFieldSec: {},
      // 网格查询API配置对象
      apiConfig: veApis.vebackIntoStorage,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t('sys.button.query')/*查询*/
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t('ve.label.amountReturnStorage')/*批量销退入库*/
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t('ve.label.amountReturnStorage')/*"扫描合格证"*/
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t('sys.button.reset')/*重置*/
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t('org.label.vin')/*VIN码*/,
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t('ve.label.retreatNo')/*销退单号*/,
          codeField: "returnListNum",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t('ve.label.dealListNum')/*"合同单号"*/,
          codeField: "dealNum",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: this.$t('sys.content.operate')/*"操作"*/,
          codeField: "controlBtn",
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: this.$t('sys.button.edit')/*"修改"*/,
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        {
          prop: "carBrandCn",
          label: this.$t('org.label.carBrandCn')/*品牌*/,
          width: 110,
          align: "center"
        },
        {
          prop: "isEnable1",
          label: this.$t('ve.label.returnApplyListNum')/*销退申请单号*/,
          width: 170,
          align: "center"
        },
        {
          prop: "isEnable2",
          label: this.$t('ve.label.orderNum')/*订单编号*/,
          width: 170,
          align: "center"
        },
        {
          prop: "isEnable3",
          label: this.$t('org.label.vin')/*VIN码*/,
          width: 160,
          align: "center"
        },
        {
          prop: "isEnable4",
          label: this.$t('ve.label.carTypeCn')/*车型中文名称*/,
          width: 100,
          align: "center"
        },
        {
          prop: "isEnable5",
          label: this.$t('org.label.carConfig')/*车型配置*/,
          width: 130,
          align: "center"
        },
        {
          prop: "isEnable6",
          label: this.$t('org.label.carColor')/*车身颜色*/,
          width: 100,
          align: "center"
        },
        {
          prop: "isEnable7",
          label: this.$t('org.label.carIncolor')/*内饰色*/,
          width: 100,
          align: "center"
        },
        {
          prop: "isEnable8",
          label: this.$t('org.label.optionalPackage')/*选装包*/,
          width: 90,
          align: "center"
        },
        {
          prop: "isEnable9",
          label: this.$t('ve.label.engineNo')/*发动机号*/,
          width: 160,
          align: "center"
        },
        {
          prop: "isEnable10",
          label: this.$t('ve.label.certificateNo')/*合格证号*/,
          width: 120,
          align: "center"
        },
        {
          prop: "isEnable11",
          label: this.$t('ve.label.carKeyNum')/*车钥匙号*/,
          width: 120,
          align: "center"
        },
        {
          prop: "isEnable12",
          label: this.$t('ve.label.sellingPrice')/*销售价格*/,
          width: 120,
          align: "center"
        },
        {
          prop: "isEnable13",
          label: this.$t('ve.label.sellDate')/*销售日期*/,
          width: 100,
          align: "center"
        },
        {
          prop: "isEnable14",
          label: this.$t('ve.label.createdPlace')/*生产产地*/,
          width: 90,
          align: "center"
        },
        {
          prop: "isEnable15",
          label: this.$t('ve.label.sellsStorage')/*销售仓库*/,
          width: 180,
          align: "center"
        },
        {
          prop: "isEnable16",
          label: this.$t('ve.label.contractCode')/*合同编号*/,
          width: 180,
          align: "center"
        }
      ],
      tableHeight: 310,
      //表单查询数据
      formField: {
        VINCode: "",
        returnListNum: "",
        dealNum: ""
      }
    };
  },
  methods: {
    // 点击切换页签事件
    handleClick(tab, event) {
      this.tab = tab;
      this.event = event;
      const that = this.$refs.multipleTable;
      if (tab.name == "second") {
      }
    },
    save() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择需要销退入库的数据",
          type: "warning",
          duration: 2000
        });
        return;
      }

      for (var k in selectData) {
        let queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: orgApis.mdmOrgProvinceMutationSave,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              purOrderDId: selectData[k].purOrderDId,
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
              message: "销退入库成功",
              type: "success",
              duration: 2000
            });

            that.queryTable(1);
          }
        });
      }
    },
    addNew() {
      var newFormField = {
        pageName: this.formField.pageName,
        pageId: this.formField.pageId
      };
      this.add(newFormField);
    }
  }
};
</script>
<style>
