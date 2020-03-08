<!--
* 选装包新增、修改弹窗
* yangsq
* 2019-10-18
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
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
            :dateType="comp.dateType"
            :isMul="false"
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
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
    // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
        apiConfig: veApis.veOptionalpackage,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save") /*保存 */
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") /**重置 */
        },
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel") /**取消 */
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t("org.label.carBrandCn") /*品牌*/,
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
        //   isRequire: true,
          isMust: true
        },
        // 车系
        {
        compKey: "compKey2",
        labelName: this.$t("org.label.carSerise"),
        codeField: "carSeriesCn",
        parentFileds: "carBrandCode-carBrandCode",
        component: () => import("@/components/org/CarCode"),
        type: "dropdownList",
        isMul: false,
        isMust: true
        },
        // 车型
        {
        compKey: "compKey3",
        labelName: this.$t("org.label.carType"),
        codeField: "carConfigId",
        parentFileds: "value:carBrandCode|carSeriesId",
        component: () => import("@/components/org/SmallCarType"),
        type: "dropdownList",
        isMul: false,
        isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "选装包名称",
          codeField: "carColorCode",
        //   isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
        isMul: false,
        isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "选装包编码",
          codeField: "carConfigName",
        //   isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMul: false,
          isMust: true
        },
        {
          compKey: "compKey11",
          labelName: this.$t("org.label.updateControllId"),
          codeField: "updateControllId",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        }
      ],
      // 标题
      textMap: {
        edit: "选装包维护" /**选装包维护 */,
        add: "选装包新增" /**选装包新增 */
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        carSeriesCn:"",
        carConfigId:"",
        carConfigName:"",
        carColorCode:"",
        updateControlId: ""
      }
    };
  },
  methods: {
  }
};
</script>
