<!--
* description: 销退入库-新增、修改弹窗
* author: linzewen
* createdDate: 2019-09-11
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      title="销退入库"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div
        class="app-container app-container-table"
        style="margin-top: 0px"
      >
        <el-tabs
          v-model="activeName"
          style="height:500px"
        >
          <el-tab-pane
            label="入库明细"
            name="first"
          >
            <div
              class="filter-container filter-title"
              ref="conTitleHeight"
            >车辆信息</div>
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
                  :isMul="comp.isMul"
                  :labelName="comp.labelName"
                  :lookuptype="comp.lookuptype"
                  :dateOptionsType="comp.dateOptionsType"
                ></component>
              </el-row>
            </div>
            <div
              class="filter-container filter-title"
              ref="conTitleHeight"
            >仓库</div>
            <div class="filter-container filter-params">
              <el-row :gutter="26">
                <component
                  v-for="comp in tableComponentsSec.filter(o => o.isMust === true)"
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
                  :isMul="comp.isMul"
                  :labelName="comp.labelName"
                  :lookuptype="comp.lookuptype"
                  :dateOptionsType="comp.dateOptionsType"
                ></component>
              </el-row>
            </div>
            <div
              class="dialog-footer setIntoRight"
              style="position: fixed;bottom:20px;right:20px;"
            >
              <el-button
                v-for="comp in tableButtons"
                :key="comp.compKey"
                :type="comp.type"
                @click="comp.clickEvent"
              >{{comp.text}}</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane
            label="质量状态"
            name="second"
          >
            <el-radio-group v-model="radio">
              <el-radio :label="3">合格</el-radio>
              <el-radio :label="6">事故车</el-radio>
              <el-radio :label="9">不合格</el-radio>
            </el-radio-group>
            <div class="paneSec">
              <div
                class="filter-container filter-title"
                ref="conTitleHeight"
              >验收类型</div>
              <one-table-template
                ref="multipleTablefst"
                :dynamicButtons="tableButtonsfstNew"
                :dynamicComponents="tableComponentsfstNew"
                :dynamicApiConfig="apiConfigfstNew"
                :dynamicTableCols="tableColsfstNew"
                :dynamicTableOtherHeight="380"
                :dynamicFormFields="formFieldfstNew"
                :dynamicIsShowSelect="true"
                :dynamicIsColumnDrop="true"
                :dynamicIsInitTable="true"
              />
              <div
                class="filter-container filter-title"
                ref="conTitleHeight"
              >损伤代码</div>
              <one-table-template
                ref="multipleTableSec"
                :dynamicButtons="tableButtonsSecNew"
                :dynamicComponents="tableComponentsSecNew"
                :dynamicApiConfig="apiConfigSecNew"
                :dynamicTableCols="tableColsSecNew"
                :dynamicTableOtherHeight="380"
                :dynamicFormFields="formFieldSecNew"
                :dynamicIsShowSelect="true"
                :dynamicIsColumnDrop="true"
                :dynamicIsInitTable="true"
              />
              <div
                class="dialog-footer"
                style="position: fixed;bottom:20px;right:20px;"
              >
                <el-button
                  v-for="comp in tableButtons"
                  :key="comp.compKey"
                  :type="comp.type"
                  @click="comp.clickEvent"
                >{{comp.text}}</el-button>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from "@/api/graphQLApiList/org";
// import OneTableTemplate from "@/components/templates/popupsOneTable";
import OneTableTemplate from "@/components/templates/oneTable";
export default {
  // 组件混入对象
  mixins: [formMixins, oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 这个tableCols没啥用，加在这里防止报错，因为模板默认检查tableCols
      tableCols: [],
      // 第二个页签的单选内容，选项写死在页面的
      radio: 3,
      // 默认打开第一个页签
      activeName: "first",
      // 第二个页签的内容
      // 第二个页签表格一的内容
      tableButtonsfstNew: [],
      apiConfigfstNew: orgApis.orgconfigurablePageComponentsManagement,
      formFieldfstNew: {},
      tableComponentsfstNew: [],
      tableColsfstNew: [
        {
          prop: "isEnable1",
          label: "车检类别",
          width: null,
          align: "center"
        },
        {
          prop: "freezeWayName",
          label: "说明++",
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              codeField: "freezeWayName",
              clickEvent: () => null,
              component: () => import("@/components/org/commonInput")
            }
          ]
        }
      ],
      // 第二个页签表格二的内容
      tableButtonsSecNew: [],
      apiConfigSecNew: orgApis.orgconfigurablePageComponentsManagement,
      formFieldSecNew: {},
      tableComponentsSecNew: [],
      tableColsSecNew: [
        {
          prop: "isEnable3",
          label: "损伤代码",
          width: null,
          align: "center"
        },
        {
          prop: "freezeWayName1",
          label: "说明++",
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              codeField: "freezeWayName1",
              clickEvent: () => null,
              component: () => import("@/components/org/commonInput")
            }
          ]
        }
      ],
      // 保存API配置对象
      apiConfig: orgApis.mdmOrgProvinceMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "销退入库"
        }
      ],
      // 动态组件-查询条件页签一下半部分
      tableComponentsSec: [
        {
          compKey: "compKey17",
          labelName: "仓库",
          codeField: "VINCode",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey18",
          labelName: "储位",
          codeField: "VINCode",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey19",
          labelName: "储区",
          codeField: "VINCode",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey20",
          labelName: "入库人",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey21",
          labelName: "合格证存放地",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey22",
          labelName: "验收说明",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 动态组件-查询条件页签一上半部分
      tableComponents: [
        {
          compKey: "compKey4",
          labelName: "车型配置",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "车身颜色",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "内饰色",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "选装包",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey8",
          labelName: "合格证号",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey9",
          labelName: "VIN码",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey10",
          labelName: "发动机号",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey11",
          labelName: "生产日期",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey12",
          labelName: "钥匙编号",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey13",
          labelName: "含税单价",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey14",
          labelName: "增值税",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey15",
          labelName: "税率（%）",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey16",
          labelName: "不含税价",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        pageName: this.$route.query.pageName,
        pageId: this.$route.query.pageId,
        labelName: "",
        codeField: "",
        width: "",
        sort: "",
        isMust: "",
        align: "",
        isEnableCode: "",
        sortable: "",
        isComponent: ""
      }
    };
  },
  methods: {
    // 重置
    //   resetTable(){
    //       const that = this;
    //       debugger
    //       that.formField.cityCode = that.editRowData.cityCode;
    //       that.formField.cityName = that.editRowData.cityName;
    //       that.formField.provinceId = that.editRowData.provinceId;
    //       that.formField.status = that.editRowData.status;
    //   },
    //保存
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.formField.labelName)) {
        that.$message({
          message: "请输入标签名称",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.codeField)) {
        that.$message({
          message: "请输入对应数据字段",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.width)) {
        that.$message({
          message: "请输入列宽",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.sort)) {
        that.$message({
          message: "请输入排序",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.isEnableCode)) {
        that.$message({
          message: "请输入是否可用",
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
<style lang="scss">
.setIntoRight {
}
.paneSec .filter-params-e3s .filter-button {
  display: none !important;
}
.paneSec .filter-params-e3s .el-pagination {
  display: none !important;
}
.paneSec .filter-params-e3s .filter-title {
  display: none !important;
}
</style>
