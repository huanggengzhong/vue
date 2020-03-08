<!--
* description: 内饰弹出框（含输入框）
* author: liyanm
* createdDate: 2019-08-03
-->
<template>
  <section class="carInColor">
    <el-dialog
       :title="$t('org.label.carIncolor')"
      :visible.sync="curPopupsVisible"
      width="800px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
      <one-table-template
        ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        :dynamicIsShowMoreBtn="false"
        :dynamicIsShowSelect="isMul"
      />
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins, valueObjectMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.mdmCarTypeIncolorQueryListForPage,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t('sys.button.query')
          },//查询
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t('sys.button.reset')
         },//重置
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () =>
            this.sendCode(
              "carIncolorId",
              "mdmCarIncolorExtend.carIncolorName"
            ),
          text: this.$t('sys.button.confirm')
          },//确认
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          span: 10,
          labelName: this.$t('org.label.carIncolor')+'ID',
          codeField: "carIncolorId",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }//"内饰色ID",
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "carTypeIncolorId",
          label: "车型配置内饰关系ID",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "carIncolorId",
          label: "内饰色ID",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "mdmCarIncolorExtend.carIncolorCode",
          label: this.$t('org.label.carIncolorCode'),
          width: null,
          align: "center"
        },//"内饰色编码"
        {
          prop: "mdmCarIncolorExtend.carIncolorName",
          label:this.$t('org.label.carIncolorName') ,
          width: null,
          align: "center"
        }//"内饰色名称"
      ],
      //表单查询数据（查询条件）
      formField: {
       // carBrandCode: "",
        carConfigId: "",
        carIncolorId: "",
        isEnable: "1"
      }
    };
  }
};
</script>
