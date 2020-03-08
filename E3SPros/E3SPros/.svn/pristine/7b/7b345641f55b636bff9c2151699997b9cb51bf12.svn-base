<!--
* description: 意向车系弹出框
* author: dxuem
* createdDate: 2019-09-17
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      title="节点组"
      :visible.sync="curPopupsVisible"
      width="1000px"
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
        :dynamicIsShowSelect="false"
      />
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { crmApis } from "@/api/graphQLApiList/crm";
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
      apiConfig: crmApis.csDbNodeGroupQueryFindAll,
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
          clickEvent: () => this.sendCode("nodeGroupCode","groupName"),
          text: "确认"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: "业务流程",
          codeField: "serverType",
          lookuptype: "LX009",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true,
          isMul:false,
        },
        {
          compKey: "compKey2",
          labelName: "节点组名称",
          codeField: "nodeGroupName",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        { prop: "serverTypeName", label: "业务流程", width: null, align: "center" },
        { prop: "nodeGroupCode", label: "节点组编码", width: null, align: "center" },
        { prop: "groupName", label: "节点组名称", width: null, align: "center" },
        { prop: "serverType", label: "业务流程编码", width: null, align: "center",hidden: true}
      ],
      //表单查询数据（查询条件）
      formField: {
        oemCode: "1",
        groupCode: "1",
        serverType: "",
        nodeGroupName: "",
      }
    };
  },
  methods: {
    sendCode(arrayCodeField, arrayTextField) {
      // 获取嵌套组件的选中的值
      debugger
      let that = this;
      var code ="";
      var text ="";
      let selectData = null;
      if(that.$refs.multipleTable.currentRow!=undefined)
      {
        selectData = that.$refs.multipleTable.currentRow;
      }
      if(selectData!=null){
        code =selectData.nodeGroupCode+","+selectData.serverType;
        text =selectData.groupName;
      }
      this.curPopupsVisible = false;
      this.$emit("changeCode",code,text,this.codeField,this.comType,this.popupsKey);
    }
  }
};
</script>
