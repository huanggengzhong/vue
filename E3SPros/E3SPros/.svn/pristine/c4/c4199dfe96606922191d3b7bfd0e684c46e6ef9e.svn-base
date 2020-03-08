<!--
* description: 省份管理-新增、修改弹窗
* author: linzewen
* createdDate: 2019-08-07
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
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
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>

      <component
        v-for="comp in tableComponents.filter(o => o.type === 'popupsInput')"
        :key="comp.popups.key"
        :codeField="comp.codeField"
        :popupsVisible="comp.popups.state"
        :comType="comp.popups.type"
        :is="comp.popups.component"
        :popupsKey="comp.compKey"
        :code="formField[comp.codeField]"
        @changeCode="getComponentCode"
      ></component>

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
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.mdmOrgProvinceMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save") /*保存*/
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") /*重置*/
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName:'经销商' /*所属部门*/,
          codeField: "placeOfDeparture",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: this.popupsState=="edit"? true:false,
          isMust: true,
          isRequire:true
        },
        {
          compKey: "compKey2",
          labelName: '所属厂商' /*员工姓名*/,
          codeField: "typeName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
          isRequire:true
        },
        {
          compKey: "compKey6",
          labelName:'税控编号' /*城市*/,
          codeField: "distributor",
          lookuptype: "VE0261",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true,
          isMul: false,
          isRequire:true
        },
        {
          compKey: "compKey3",
          labelName: '注册码'/*是否启用*/,
          codeField: "moveIn",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
          isRequire:true
        },
        {
          compKey: "compKey4",
          labelName: '税控口令' /*是否启用*/,
          codeField: "transportDays",
         component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
          isRequire:true
        },
        {
          compKey: "compKey5",
          labelName:'税控数字'/*是否启用*/,
          codeField: "transportDays",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
          isRequire:true
        }
      ],
      // 标题
      textMap: {
        edit: this.$t("org.label.edit") /*修改*/,
        add: this.$t("org.label.add") /*添加*/
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        placeOfDeparture: "",
        typeName: "",
        distributor: "",
        moveIn: "",
        transportDays:'',
      }
    };
  },
  watch(){
  },
  methods: {
    save() {
      const that = this;

      // if (that.$utils.isEmpty(that.formField.provinceCode)) {
      //   that.$message({
      //     message: '请输入省份编码',
      //     type: 'warning',
      //     duration: 2000
      //   });
      //   return;
      // }
      // if (that.$utils.isEmpty(that.formField.provinceName)) {
      //   that.$message({
      //     message: '请输入省份名称',
      //     type: 'warning',
      //     duration: 2000
      //   });
      //   return;
      // }
      //保存表单
      this.saveForm();
    }
  }
};
</script>
