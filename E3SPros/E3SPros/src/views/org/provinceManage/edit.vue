<!--
* description: 区县管理-新增、修改弹窗
* author: yinxy
* createdDate: 2019-08-0
-->
<template>
  <section class="countryManageEdit">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      :key="popupsTableKey"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <el-row
          :gutter="26"
          ref="vailComponentList"
        >
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
            :text="formField[comp.textField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :isMul="comp.isMul"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :parentFileds="comp.parentFileds"
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
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins, valueObjectMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.mdmOrgCommutiySave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save") //保存
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
          compKey: "compKey2",
          isMul: false,
          labelName: this.$t("org.label.provinceName"), //所属省份
          isRequire: true,
          codeField: "provinceId",
          component: () => import("@/components/org/ProvinceQuery"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("org.label.cityName"), //所属城市
          isRequire: true,
          parentFileds: "provinceId",
          codeField: "cityId",
          component: () => import("@/components/org/CitySelect"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey1",
          labelName: this.$t("org.label.countyCode"), //区县编码
          isRequire: true,
          codeField: "countyCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("org.label.countyName"), //区县名称
          isRequire: true,
          codeField: "countyName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t("org.label.isAble"), //是否启用
          isRequire: true,
          isMul: false,
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: this.$t("org.label.editCounty"), //修改区县信息
        add: this.$t("org.label.addCounty") //新增区县信息
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        countyName: "",
        countyCode: "",
        updateControlId: "",
        provinceId: "",
        cityId: "",
        countyId: "",
        isEnable: "",
        cityCode: "",
        countyId:'',
      }
    };
  },
  methods: {
    //保存
    // save(page) {
    //   const that = this;
    //   // if (that.$utils.isEmpty(that.editQuery.orgBelongType)) {
    //   //   that.$message({
    //   //     message: "组织所属类型不能为空",
    //   //     type: "warning",
    //   //     duration: 2000
    //   //   });
    //   //   return;
    //   // }
    //   // if (that.$utils.isEmpty(that.editQuery.orgCode)) {
    //   //   that.$message({
    //   //     message: that.g_groupCode + "不能为空",
    //   //     type: "warning",
    //   //     duration: 2000
    //   //   });
    //   //   return;
    //   // }
    //   // if (that.$utils.isEmpty(that.editQuery.orgName)) {
    //   //   //四种情况
    //   //   that.$message({
    //   //     message: that.g_groupName + "不能为空",
    //   //     type: "warning",
    //   //     duration: 2000
    //   //   });
    //   //   return;
    //   // }

    //   // if (that.$utils.isEmpty(that.editQuery.isEnable)) {
    //   //   that.$message({
    //   //     message: "是否可用不能为空",
    //   //     type: "warning",
    //   //     duration: 2000
    //   //   });
    //   //   return;
    //   // }

    //   const queryObj = {
    //     // api配置
    //     type: "mutation",
    //     typeParam: "($dataInfo:InputMdmOrgCommunity)",
    //     apiConfig: orgApis.mdmOrgCommutiySave,
    //     // 需要调用的API服务配置
    //     apiServices: [
    //       {
    //         apiServiceParam: "(dataInfo:$dataInfo)"
    //       }
    //     ],
    //     //条件/实体参数（变量），根据typeParam中的定义配置
    //     variables: {
    //       //当前中台使用的名称有dataInfo、info，具体查看API文档
    //       dataInfo: {
    //         countyName: this.formField.countyName,
    //         countyCode: this.formField.countyCode,
    //         // provinceId: this.formField["mdmOrgCityExt.mdmOrgProvinceExt.provinceId"],
    //         cityId: this.formField.cityId,
    //         updateControlId: this.formField.updateControlId,
    //         isEnable: this.formField.isEnable,
    //         countyId: this.formField.countyId
    //       }
    //     }
    //   };
    //   //转换了中台请求格式数据
    //   var paramD = this.$getParams(queryObj);
    //   // 调用中台API方法（可复用）
    //   this.$requestGraphQL(paramD).then(response => {
    //     if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
    //       // 保存成功
    //       // this.sendCode("1");
    //       this.$message({
    //         message: "保存成功",
    //         type: "success",
    //         duration: 2000
    //       });
    //     } else {
    //       // 保存失败
    //       // this.sendCode('0')
    //       this.$message({
    //         message:
    //           "保存失败：" + response.data[queryObj.apiConfig.ServiceCode].msg,
    //         type: "warn",
    //         duration: 2000
    //       });
    //     }
    //   });
    // }
    save() {
      const that = this;
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        let obj = {
          countyCode: this.formField.countyCode,
          // provinceId: this.formField["mdmOrgCityExt.mdmOrgProvinceExt.provinceId"],
          cityId: this.formField.cityId,
          countyName: this.formField.countyName,
          updateControlId: this.formField.updateControlId,
          isEnable: this.formField.isEnable,
          countyId: this.formField.countyId
        };
        this.isMul = false;
        //保存表单
        this.saveForm(obj);
      }
    }
  }
};
</script>
