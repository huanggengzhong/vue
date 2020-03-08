<!--
* description: 意向类型权限设置-新增、修改弹窗
* author: xgzh
* createdDate: 2019年10月6日11:32:50
-->
<template>
  <section class="editCarBrand">
    <el-dialog :close-on-click-modal="false" :title="textMap[popupsState]" :append-to-body="true" :visible.sync="curPopupsVisible" @close="sendCode" width="1000px">

      <div class="filter-container filter-params">
        <el-row :gutter="26" ref="vailComponentList">
          <component v-for="comp in tableComponents.filter(o => o.isMust === true)" :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey" :key="comp.compKey" :codeField="comp.codeField" :textField="comp.textField" :popupsKey="comp.compKey" :is="comp.component" :code="formField[comp.codeField]" @changeCode="getComponentCode" @focusCode="getFocusCode" :disabled="comp.disabled" :isRequire="comp.isRequire" :isMul="comp.isMul" :span="comp.span || 8" :labelName="comp.labelName" :lookuptype="comp.lookuptype" :dateOptionsType="comp.dateOptionsType"></component>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button v-for="comp in tableButtons" :key="comp.compKey" :type="comp.type" @click="comp.clickEvent">{{comp.text}}</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      //多选对象
      checkList: [],
      // 保存API配置对象
      apiConfig: crmApis.xxx,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save") /*保存*/
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "链接编码",
          codeField: "nodeCode",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "链接类型",
          codeField: "serverType",
          lookuptype: "LX009",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true,
          isMul: false
        },
        {
          compKey: "compKey3",
          labelName: "链接名称",
          codeField: "nodeName",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
         {
          compKey: "compKey4",
          labelName: "链接地址",
          codeField: "nodeName",
          width:"200px",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
         {
          compKey: "compKey5",
          labelName: "链接描述",
          codeField: "nodeName",
          component: () => import("@/components/crm/textbox/crmTextInputArea"),
          type: "inputText",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "权限设置修改",
        add: "权限设置"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        // carStockAreaId: "",
      },
      wareHouseInfo: []
    };
  },
  mounted() {
    //this.fetchData();
  },
  methods: {
    // //查询仓库信息
    // fetchData() {
    //   let obj = {};
    //   obj.carBrandCode = this.$store.getters.orgInfo.BRAND_CODE || "1";
    //   const queryObj = {
    //     // api配置
    //     apiConfig: veApis.veDbCarStockHouseQueryFindAll,
    //     // 需要调用的API服务配置
    //     apiServices: [
    //       {
    //         // 表格中台返回网格的字段
    //         apiQueryRow: [
    //           "carStockHouseId",
    //           "dlrId",
    //           "carHouseName",
    //           "carHouseCode",
    //           "carStoreClass"
    //         ]
    //       }
    //     ],
    //     // 条件/实体参数（变量），根据typeParam中的定义配置
    //     variables: {
    //       pageSize: 100,
    //       pageIndex: 1,
    //       // 当前中台使用的名称有dataInfo、info，具体查看API文档
    //       dataInfo: obj
    //     }
    //   };
    //   // 转换了中台请求格式数据
    //   var paramD = this.$getParams(queryObj);
    //   // 调用中台API方法（可复用）
    //   this.$requestGraphQL(paramD).then(response => {
    //     if (
    //       response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
    //       response.data[queryObj.apiConfig.ServiceCode].rows
    //     ) {
    //       this.wareHouseInfo =
    //         response.data[queryObj.apiConfig.ServiceCode].rows;
    //     }
    //   });
    // },
    // getCarStockHouseIdName() {
    //   for (let i of this.wareHouseInfo) {
    //     if (this.formField.carHouseCode === i.carHouseCode) {
    //       this.formField.carStockHouseId = i.carStockHouseId;
    //       this.formField.dlrId = i.dlrId;
    //       this.formField.carHouseName = i.carHouseName;
    //       this.saveForm();
    //       return;
    //     }
    //   }
    // },
    // //保存
    // save() {
    //   this.$utils.validataMoth(this, "popupssave");
    //   if (this.vaildateCOM) {
    //     const that = this;
    //     if (this.popupsState === "add") {
    //       this.getCarStockHouseIdName();
    //     } else {
    //       this.saveForm();
    //     }
    //   }
    // }
  }
};
</script>
