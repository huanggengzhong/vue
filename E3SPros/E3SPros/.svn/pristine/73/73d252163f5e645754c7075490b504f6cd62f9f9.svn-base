<!--
* description: 多语言弹窗
* author: linzewen
* createdDate: 2019-09-21
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      title="标签名称"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="close"
      width="1000px"
    >
      <div class="filter-container filter-params" v-loading='listLoading'>
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :type="comp.type || ''"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button
          v-for="comp in tableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  created() {
    var formField = this.$parent.$parent.$parent.$parent.formField;
    this.chineseName = this.formField.labelName;
    if (formField !== undefined && formField.hasOwnProperty('compId') && formField['compId'] !== "") {
      this.queryTable(formField.compId);
    }
    if (formField !== undefined && formField.hasOwnProperty('colsId') && formField['colsId'] !== "") {
      this.queryTable(formField.colsId);
    }
  },
  data() {
    return {
      listLoading:false,
      // 保存API配置对象
      apiConfig: orgApis.proConfigLangQueryByPage,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.confirm")
        } /*确认*/
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "中文（zh）",
          codeField: "chineseName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "英文（en）",
          codeField: "englishName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "法文（fr）",
          codeField: "frenchName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      chineseName:"",
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        chineseName: "",
        englishName: "",
        frenchName: ""
      }
    };
  },
  methods: {
    // 发送回传值（弹窗时）
    sendCode() {
      this.$utils.validataMoth(this, 'validpopup')
      if (this.valid) {
        
      var formField = this.$parent.$parent.$parent.$parent.formField;    
      // 获取嵌套组件的选中的值
      if(formField.hasOwnProperty('labelName')){
        this.$emit("changeCode", this.formField,'labelName');
      }
      if(formField.hasOwnProperty('label')){
        this.$emit("changeCode", this.formField,'label');
      }
      }
    },
    close(){
      this.$emit("close")
    },
    queryTable(tableId) {
      this.listLoading = true;
      const queryObj = {
        // api配置
        apiConfig: orgApis.proConfigLangQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            // 表格中台返回网格的字段
            apiQueryRow: ["langLabel", "langType"]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageIndex: 1,
          pageSize: 20,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            tableId: tableId
          }
        }
      };
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj);
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows
        )
          var list = response.data[queryObj.apiConfig.ServiceCode].rows;
        for (var k in list) {
          if (list[k]["langType"] === "zh") {
            this.formField.chineseName = list[k]["langLabel"];
          }
          if (list[k]["langType"] === "en") {
            this.formField.englishName = list[k]["langLabel"];
          }
          if (list[k]["langType"] === "fr") {
            this.formField.frenchName = list[k]["langLabel"];
          }
        }
      });
      this.listLoading = false;
    }
  }
};
</script>
 <style lang="scss" scoped>
/deep/ .el-col-16 .csslableName {
  width: 14.2%;
}
/deep/ .el-col-16 label {
  width: 10.4%;
}
/deep/ .el-textarea {
  float: left;
  width: 90.6% !important;
}
</style>

