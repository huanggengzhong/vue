<!--
* description:关键信息修改弹窗
* author: lzhihui
* createdDate: 2019-10-19
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
    <!-- <div class="filter-container-crm filter-title-crm">关键信息修改明细</div> -->
      <!-- <div class="filter-container filter-params">
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
          ></component>
        </el-row>
      </div> -->

    <el-form class="editPer filter-params-crm crm-s-scroll">
      <div class="filter-container-crm filter-title-crm">{{infoComponents[0].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[0].tableComponents" :values="formField" />
        
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[1].title}}</div>
      <div class="filter-container-crm filter-params">
        <crmGroupForm :dynamicComponentss="infoComponents[1].tableComponents" :values="formField" />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[2].title}}</div>
      <div class="filter-container-crm filter-params">
        <crmGroupForm :dynamicComponentss="infoComponents[2].tableComponents" :values="formField" />
      </div>
    </el-form>
      
      
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
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";



// import { formMixins } from "@/components/mixins/formMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import crmGroupForm from "@/components/crm/commonComponents/crmGroupForm";
import crmGroupSubmit from "@/components/crm/commonComponents/crmGroupSubmit";
import crmTextInput from "@/components/crm/textbox/crmTextInput";
import crmdatePicker from "@/components/crm/Time/crmdatePicker";
import lookupvalue from "@/components/crm/lookupValue/lookupvalue";
import UpLoad from "@/components/crm/EjectWindows/UpLoad";
import Province from "@/components/crm/Select/Common/Province";
import City from "@/components/crm/Select/Common/City";
import District from "@/components/crm/Select/Common/District";
export default { 
  // 组件混入对象
  mixins: [formMixins],
  components: {
    crmGroupForm,
    crmGroupSubmit,
    crmTextInput,
    crmdatePicker,
    lookupvalue,
    UpLoad,
    Province,
    City,
    District
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.mdmCarBrandBizSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "确认"
        },
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: "取消"
        }
      ],
      // 动态组件-查询条件
      // tableComponents: [
      //   // {
      //   //   compKey: "compKey1",
      //   //   labelName: "业务流程",
      //   //   lookuptype: "LX009",
      //   //   isRequire: true,
      //   //   codeField: "buniessProcess",
      //   //   component: () => import("@/components/crm/lookupValue/lookupvalue"),
      //   //   type: "dropdownList",
      //   //   isMust: true
      //   // },
        
      //   // {
      //   //   compKey: "compKey4",
      //   //   labelName: "流程结点",
      //   //   codeField: "processNode",
      //   //   isRequire: true,
      //   //   component: () => import("@/components/crm/Select/crmProcessNode"),
      //   //   type: "dropdownList",
      //   //   isMust: true
      //   // },


      //         {
      //           compKey: "compKey2",
      //           labelName: "信息核实途径",
      //           codeField: "processNode",
      //           component: () =>
      //             import("@/components/crm/textbox/crmTextInput"),
      //           type: "inputText",
      //           disabled : this.isAdd(),
      //           isMust: true
      //         },
      //         {
      //           compKey: "compKey3",
      //           labelName: "电话",
      //           codeField: "isEnable",
      //           component: () =>
      //             import("@/components/crm/textbox/crmTextInput"),
      //           type: "inputText",
      //           isMust: true
      //         },
      //         {
      //           compKey: "compKey4",
      //           labelName: "登记日期",
      //           codeField: "dutyperson",
      //           component: () =>
      //             import("@/components/crm/Time/crmdatePicker"),
      //           type: "inputText",
      //           isMust: true
      //         }
      // ],

      //
      infoComponents: [
        {
          title: "关键信息修改明细",
          tableComponents: [
             {
                compKey: "compKey1",
                //信息核实途径
                labelName: "信息核实途径",
                codeField: "processNode",
                isMul: false,
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                
              },
              {
                compKey: "compKey2",
                labelName: "客户名称",
                codeField: "isEnable",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                  disabled : this.isAdd(),
              },
          ]
        },
        {
          title: "原信息",
          tableComponents: [
            {
              compKey: "compKey3",
              labelName: "电话",
              codeField: "phone",
              // isRequire: true,
              component: () => import("@/components/crm/textbox/crmTextInput"),
              disabled : this.isAdd(),
            },
            {
              compKey: "compKey4",
              labelName: "证件类型",
              codeField: "genderCode",
              isMul: false,
              lookuptype: "APP0005",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue"),
              disabled : this.isAdd(),
            },
            {
              compKey: "compKey5",
              labelName: "证件号码",
              codeField: "phone",
              // isRequire: true,
              component: () => import("@/components/crm/textbox/crmTextInput"),
              disabled : this.isAdd(),
            },
            {
              compKey: "compKey6",
              labelName: "详细地址",
              codeField: "phone",
              // isRequire: true,
              component: () => import("@/components/crm/textbox/crmTextInput"),
              disabled : this.isAdd(),
            },
          ]
        },
        {
          title: "新信息",
          tableComponents: [
            {
              compKey: "compKey7",
              labelName: "电话",
              codeField: "phone",
              isRequire: true,
              component: () => import("@/components/crm/textbox/crmTextInput"),
            },
            {
              compKey: "compKey8",
              labelName: "证件类型",
              codeField: "genderCode",
              isRequire: true,
              isMul: false,
              lookuptype: "APP0005",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue"),
            },
            {
              compKey: "compKey9",
              labelName: "证件号码",
              codeField: "phone",
              component: () => import("@/components/crm/textbox/crmTextInput"),
            },
            
            {
              compKey: "compKey10",
              labelName: "省份",
              codeField: "provinceId",
              textField: "addrProvince",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgProvinceQueryFindAll,
              changeCode: this.changeCityByProvince,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              compKey: "compKey11",
              labelName: "城市",
              codeField: "cityId",
              textField: "addrCity",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgCityQueryFindAll,
              changeCodeArray: [
                { provinceId: this.formField ? this.formField.provinceId : "" }
              ],
              changeCode: this.changeCityByProvince,
              component: () =>
                import("@/components/crm/lookupValue/secondDropList")
            },
            {
              compKey: "compKey12",
              labelName: "区县",
              codeField: "countyId",
              textField: "addrCounty",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgCommunityQueryFindAll,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
             {
              compKey: "compKey13",
              labelName: "详细地址",
              codeField: "phone",
              component: () => import("@/components/crm/textbox/crmTextInput"),
            },
          ]
        }
        // {
        //   title: "信用记录",
        //   tableComponents: [
        //     {
        //       compKey: "compKey36",
        //       labelName: "类型",
        //       codeField: "isHaveChild",
        //       isMul: false,
        //       lookuptype: "DB0027",
        //       component: () =>
        //         import("@/components/crm/lookupValue/lookupvalue")
        //     },
        //     {
        //       compKey: "compKey37",
        //       labelName: "标签类型",
        //       codeField: "isHaveChild",
        //       isMul: false,
        //       lookuptype: "DB0044",
        //       component: () =>
        //         import("@/components/crm/lookupValue/lookupvalue")
        //     },
        //     {
        //       compKey: "compKey38",
        //       labelName: "负面内容",
        //       inputType: "textarea",
        //       codeField: "backMoney",
        //       disabled: true,
        //       span: 12,
        //       component: () => import("@/components/crm/textbox/crmTextInput")
        //     },
        //     {
        //       compKey: "compKey39",
        //       labelName: "正面内容",
        //       inputType: "textarea",
        //       codeField: "backMoney",
        //       disabled: true,
        //       span: 12,
        //       component: () => import("@/components/crm/textbox/crmTextInput")
        //     }
        //   ]
        // }
      ],

      // 标题
      textMap: {
        edit: "修改关键信息明细",
        add: "添加关键信息明细"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        buniessProcess: "",
        serviceType: "",
        processNode: "",
        isEnable: "",
        dutyperson: "",
        ispass: "",
        isRefuse: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.formField.buniessProcess)) {
        that.$message({
          message: "请选择业务流程",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.serviceType)) {
        that.$message({
          message: "请选择服务类别",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.processNode)) {
        that.$message({
          message: "请选择流程结点",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.isEnable)) {
        that.$message({
          message: "请选择是否启用",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.ispass)) {
        that.$message({
          message: "请选择是否审核",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.isRefuse)) {
        that.$message({
          message: "请选择是否启用",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.dutyperson)) {
        that.$message({
          message: "请输入责任人",
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
