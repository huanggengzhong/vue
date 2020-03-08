<!--
* description: 目标量车型组维护-新增、修改弹窗
* author: ydche
* createdDate: 2019-09-20
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      width="1000px"
    >
      <div class="filter-container filter-params">
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
            :isMul="comp.isMul"
            :code="formField[comp.codeField]"
            :text="formField[comp.textField]"
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
      <div
        slot="footer"
        class="dialog-footer"
      >
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
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.settlementSwitchSet1,
      carPlaceNameTemp: "",
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save") //保存""
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //重置
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t("org.label.carBrandCn"),
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          isRequire: true,
          type: "dropdownList",
          isMust: true
        }, //品牌
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.carSerise"), //车系
          codeField: "carSeriesCode",
          parentFileds: "carBrandCode-carBrandCode",
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "车型组名称",
          codeField: "modelGroupName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("org.label.isEnable") /*是否启用*/,
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "修改",
        add: "添加"
      },
      //发送记录条数
      count: 0,
      isBothNoNull: false,
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carAreaName: "",
        carBrandCode: "",
        carSeriesCode: "",
        isEnable: "",
        drlId: "",
        modelGroupName: ""
      },
      carBrandCode: this.$store.getters.orgInfo.BRAND_CODE || "1"
    };
  },
  created() {},
  methods: {
    //保存
    save() {
      const that = this;
      if (that.$utils.isEmpty(that.formField.carBrandCode)) {
        that.$message({
          message: "请选择品牌",
          type: "warning",
          duration: 2000
        });
        return;
      }

      if (that.$utils.isEmpty(that.formField.carSeriesCode)) {
        that.$message({
          message: "请选择车系",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.modelGroupName)) {
        that.$message({
          message: "请输入车型组名称",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.isEnable)) {
        that.$message({
          message: "请选择状态",
          type: "warning",
          duration: 2000
        });
        return;
      }

      //保存表单
      this.saveForm();
    }
  }
};
</script>
