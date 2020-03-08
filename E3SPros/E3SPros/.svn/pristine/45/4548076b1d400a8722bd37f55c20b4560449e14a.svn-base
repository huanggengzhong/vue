<!--
* description: 车务代办维护-xinzengxiugai
* author: linzewen
* createdDate: 2019-09-18
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      center
      @close="sendCode"
      width="800px"
    >
      <one-table-template
        ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        :dynamicIsColumnDrop="true"
        :dynamicIsShowMoreBtn="false"
        :dynamicIsShowSelect="true"
        :dynamicIsInitTable="true"
        :dynamicTableOtherHeight="100"
      />
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
// import OneTableTemplate from "@/components/templates/oneTable";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins,formMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.VeDbCarAgentItemQueryFindAll,
      // 保存用
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: "取消"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "代办名称",
          isRequire: true,
          codeField: "agentName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "代办性质",
          isRequire: true,
          codeField: "agentProject",
          component: () => import("@/components/org/LookupValue"),
          lookuptype: "VE0002",
          type: "dropdownList",
          isMust: true,
          isMul: false
        },
        {
          compKey: "compKey3",
          labelName: "代办地点",
          isRequire: true,
          codeField: "agentAddr",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "备注",
          codeField: "agentRemark",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "agentProject",
          label: this.$t("ve.label.agencyProgram") /*代办项目*/,
          width: 150,
          align: "center"
        },
        {
          prop: "carAgentItemCost",
          label: this.$t("ve.label.cost") /*费用*/,
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              codeField: "carAgentItemCost",
              component: () => import("@/components/org/commonInput"),
              clickEvent: () => "",
              type: "inputText"
            }
          ]
        }
      ],
      //表单查询数据（查询条件）
      formField: {
        agentName: "",
        agentProject: "",
        agentAddr: "",
        agentRemark: ""
      },
      textMap: { edit: "车务待办修改", add: "车务待办新增" }
    };
  },
  methods: {
    save() {
      var saveObj = this.formField;
      if (
        saveObj.agentName != "" &&
        saveObj.agentProject != "" &&
        saveObj.agentAddr != ""
      ) {
        this.$utils.validataMoth(this, "validpopup");
        if (this.valid) {
          const that = this.$refs.multipleTable;
          let saveState = true;
          let saveCount = 0;
          let msg = "";
          const selectData = that.$refs.multipleTable.selection;
          if (selectData.length < 1) {
            that.$message({
              message: "请选择需要保存的事项",
              type: "warning",
              duration: 2000
            });
            return;
          }
          for (var k in selectData) {
            const queryObj = {
              // 保存mutation
              type: "mutation",
              // api配置
              apiConfig: veApis.veConfirmOrder,
              variables: {
                // 当前中台使用的名称有dataInfo、info，具体查看API文档
                dataInfo: {}
              }
            };
            // 转换了中台请求格式数据
            var paramD = this.$getParams(queryObj);
            // 调用中台API方法（可复用）
            this.$requestGraphQL(paramD).then(response => {
              if (response.data.veConfirmOrder.result === "1") {
                // 保存成功
                this.$message({
                  message: "保存成功",
                  type: "success",
                  uration: 2000
                });
              } else {
                // 保存失败
                this.$message({
                  message: "保存失败",
                  type: "warn",
                  uration: 2000
                });
              }
              this.queryTable(1);
              // this.sendCode();
            });
          }
        }
      } else {
        this.$utils.validataMoth(this, "validpopup");
        if (this.valid) {
          this.$message({
            message: "保存失败",
            type: "warn",
            uration: 2000
          });
        }
      }
    }
  },

};
</script>
<style lang="scss" scoped>
/deep/.filter-params .table-col .el-col {
  margin-bottom: 8px !important;
}
</style>
