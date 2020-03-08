<!--
* description: 可配置页面网格列管理-新增、修改弹窗
* author: yxyan
* createdDate: 2019-09-24
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      title="库存明细"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="800px"
    >
      <div
        class="app-container app-container-table"
        style="margin-top: 0px"
      >
        <el-tabs
          v-model="activeName"
          type="card"
          @tab-click="handleClick"
          style="height:500px"
        >

          <el-tab-pane
            label="车辆明细"
            name="first"
          >
            <div class="filter-container filter-params">
              <el-row :gutter="26">
                <component
                  v-for="comp in tableComponents1.filter(o => o.isMust === true)"
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
                <el-radio-group v-model="radio">
                  <el-radio :label="3">合格</el-radio>
                  <el-radio :label="6">事故车</el-radio>
                  <el-radio :label="9">不合格</el-radio>
                </el-radio-group>
              </el-row>
            </div>
            <div
              class="dialog-footer setIntoRight"
              style="position: fixed;bottom:20px;right:20px;"
            >
              <el-button
                v-for="comp in tableButtons1"
                :key="comp.compKey"
                :type="comp.type"
                @click="comp.clickEvent"
              >{{comp.text}}</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane
            label="出入库明细"
            name="second"
          >
            <div class="paneSec">
              <div
                class="filter-container filter-title"
                ref="conTitleHeight"
              >入库情况说明</div>
              <one-table-template
                ref="multipleTablefst"
                :dynamicButtons="tableButtonsfstNew"
                :dynamicComponents="tableComponents2"
                :dynamicApiConfig="apiConfig2_1"
                :dynamicTableCols="tableCols2_1"
                :dynamicTableOtherHeight="400"
                :dynamicFormFields="formFieldfstNew"
                :dynamicIsShowSelect="false"
                :dynamicIsColumnDrop="true"
                :dynamicIsInitTable="true"
              />
              <div
                class="filter-container filter-title"
                ref="conTitleHeight"
              >出库情况说明</div>
              <one-table-template
                ref="multipleTableSec"
                :dynamicButtons="tableButtonsSecNew"
                :dynamicComponents="tableComponentsSecNew"
                :dynamicApiConfig="apiConfig2_2"
                :dynamicTableCols="tableCols2_2"
                :dynamicTableOtherHeight="380"
                :dynamicFormFields="formFieldSecNew"
                :dynamicIsShowSelect="true"
                :dynamicIsColumnDrop="true"
                :dynamicIsInitTable="true"
              />
              <div
                class="dialog-footer setIntoRight"
                style="position: fixed;bottom:20px;right:20px;"
              >
                <el-button
                  v-for="comp in tableButtons4"
                  :key="comp.compKey"
                  :type="comp.type"
                  @click="comp.clickEvent"
                >{{comp.text}}</el-button>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane
            label="车辆移库"
            name="third"
            ref="third"
          >
            <div class="filter-container filter-params">
              <el-row :gutter="26">
                <component
                  v-for="comp in tableComponents3.filter(o => o.isMust === true)"
                  :ref="comp.isRequire ? 'third'+comp.isRequire+ comp.compKey : comp.compKey"
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
                  :inputType="comp.inputType"
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
                v-for="comp in tableButtons3"
                :key="comp.compKey"
                :type="comp.type"
                @click="comp.clickEvent"
              >{{comp.text}}</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane
            label="临时出入库"
            name="fourth"
            ref="fourth"
          >
            <div
              class="filter-container filter-title"
              ref="conTitleHeight"
              v-if="tableComponents4_1.length > 0"
            >入库</div>
            <div class="filter-container filter-params">
              <el-row :gutter="26">
                <component
                  v-for="comp in tableComponents4_1.filter(o => o.isMust === true)"
                  :ref="comp.isRequire ? 'fourth'+comp.isRequire+ comp.compKey : comp.compKey"
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
              v-if="tableComponents4_2.length > 0"
            >仓库</div>
            <div class="filter-container filter-params">
              <el-row :gutter="26">
                <component
                  v-for="comp in tableComponents4_2.filter(o => o.isMust === true)"
                  :ref="comp.isRequire ? 'fourth'+comp.isRequire+ comp.compKey : comp.compKey"
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
                v-for="comp in tableButtons4"
                :key="comp.compKey"
                :type="comp.type"
                @click="comp.clickEvent"
              >{{comp.text}}</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane
            label="库存限制设置"
            name="fifth"
            ref="fifth"
          >
            <div class="filter-container filter-params">
              <el-row :gutter="26">
                <component
                  v-for="comp in tableComponents5.filter(o => o.isMust === true)"
                  :ref="comp.isRequire ? 'fifth'+comp.isRequire+ comp.compKey : comp.compKey"
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
                  :inputType="comp.inputType"
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
                v-for="comp in tableButtons5"
                :key="comp.compKey"
                :type="comp.type"
                @click="comp.clickEvent"
              >{{comp.text}}</el-button>
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
      // 默认打开第一个页签
      activeName: "first",
      // 第二个页签的单选内容，选项写死在页面的
      radio: 3,
      // 第二个页签的内容
      tableComponents2: [],

      // 保存API配置对象
      apiConfig: orgApis.mdmOrgProvinceMutationSave,

      // 车辆明细页签-查询条件
      tableComponents1: [
        {
          compKey: "compKey1",
          labelName: "VIN码",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "车型配置",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "车身颜色",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKe4",
          labelName: "内饰色",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "选装包",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "发动机号",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },

        {
          compKey: "compKey7",
          labelName: "钥匙号",
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
          labelName: "合格证存放地",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey10",
          labelName: "产地",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey11",
          labelName: "成本价",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey12",
          labelName: "入库日期",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey13",
          labelName: "存放天数",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey14",
          labelName: "入库检查",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey15",
          labelName: "库存状态",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey16",
          labelName: "配车状态",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey17",
          labelName: "备注",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 车辆明细页签-按钮
      tableButtons1: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: "取消"
        }
      ],
      // 出入库明细页签-表格API
      apiConfig2_1: orgApis.orgconfigurablePageComponentsManagement,
      apiConfig2_2: orgApis.orgconfigurablePageComponentsManagement,
      // 出入库明细页签-第一个表格列
      tableCols2_1: [
        {
          prop: "isEnable1",
          label: "车轮类型",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable1",
          label: "说明",
          width: null,
          align: "center"
        }
      ],
      // 出入库明细页签-第二个表格列
      tableCols2_2: [
        {
          prop: "isEnable1",
          label: "车轮类型",
          width: null,
          align: "center"
        },
        {
          prop: "freezeWayName",
          label: "说明+",
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
      // 车辆移库页签-查询条件
      tableComponents3: [
        {
          compKey: "compKey1",
          labelName: "原仓库",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "原储区",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "原储位",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "移库日期",
          codeField: "assignDateBegin",
          isRequire: false,
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        {
          compKey: "compKey5",
          labelName: "新仓库", //this.$t('ve.label.basement'), //"地库",
          codeField: "basement",
          component: () =>
            import("@/components/ve/wareHouseMulti/wareHouseMulti"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "新储区", //this.$t('ve.label.basement'), //"地库",
          codeField: "basement",
          component: () =>
            import("@/components/ve/wareHouseMulti/wareHouseMulti"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "新储位", //this.$t('ve.label.basement'), //"地库",
          codeField: "basement",
          component: () =>
            import("@/components/ve/wareHouseMulti/wareHouseMulti"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey8",
          labelName: "负责人", //this.$t('ve.label.basement'), //"地库",
          codeField: "basement",
          component: () =>
            import("@/components/ve/wareHouseMulti/wareHouseMulti"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey9",
          labelName: "审核人", //this.$t('ve.label.basement'), //"地库",
          codeField: "basement",
          component: () =>
            import("@/components/ve/wareHouseMulti/wareHouseMulti"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey10",
          labelName: "移库类型",
          codeField: "VINCode",
          lookuptype: "VE0188",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey11",
          labelName: "备注",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 车辆移库页签-按钮
      tableButtons3: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: "取消"
        }
      ],
      // 临时出入库页签一查询条件上半部分
      tableComponents4_1: [
        {
          compKey: "compKey1",
          labelName: "仓库",
          codeField: "VINCode",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "储区",
          codeField: "VINCode",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "储位",
          codeField: "VINCode",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "验收状态",
          codeField: "VINCode",
          lookuptype: "VE0188",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "入库日期",
          codeField: "assignDateBegin",
          isRequire: false,
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        {
          compKey: "compKey6",
          labelName: "入库人",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "质量状态",
          codeField: "VINCode",
          lookuptype: "VE0188",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey8",
          labelName: "入库说明",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 临时出入库页签一查询条件下半部分
      tableComponents4_2: [
        {
          compKey: "compKey1",
          labelName: "仓库",
          codeField: "VINCode",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "储位",
          codeField: "VINCode",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "储区",
          codeField: "VINCode",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "临时出库单号",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "出库日期",
          codeField: "assignDateBegin",
          isRequire: false,
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        {
          compKey: "compKey6",
          labelName: "出库人",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "出库说明",
          codeField: "VINCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 临时出入库页签一-按钮
      tableButtons4: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: "取消"
        }
      ],
      // 库存限制查询页签-查询条件
      tableComponents5: [
        {
          compKey: "compKey1",
          labelName: "限制类别",
          codeField: "VINCode",
          lookuptype: "VE0188",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "限制说明",
          codeField: "VINCode",
          inputType: "textarea",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 库存限制查询页签-按钮
      tableButtons5: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: "取消"
        }
      ],
      // 标题
      textMap: {
        edit: "可配置页面网格列维护",
        add: "可配置页面网格列维护"
      },
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

      //   if (that.$utils.isEmpty(that.formField.labelName)) {
      //     that.$message({
      //       message: "请输入标签名称",
      //       type: "warning",
      //       duration: 2000
      //     });
      //     return;
      //   }
      //   if (that.$utils.isEmpty(that.formField.codeField)) {
      //     that.$message({
      //       message: "请输入对应数据字段",
      //       type: "warning",
      //       duration: 2000
      //     });
      //     return;
      //   }
      //   if (that.$utils.isEmpty(that.formField.width)) {
      //     that.$message({
      //       message: "请输入列宽",
      //       type: "warning",
      //       duration: 2000
      //     });
      //     return;
      //   }
      //   if (that.$utils.isEmpty(that.formField.sort)) {
      //     that.$message({
      //       message: "请输入排序",
      //       type: "warning",
      //       duration: 2000
      //     });
      //     return;
      //   }
      //   if (that.$utils.isEmpty(that.formField.isEnableCode)) {
      //     that.$message({
      //       message: "请输入是否可用",
      //       type: "warning",
      //       duration: 2000
      //     });
      //     return;
      //   }
      //保存表单
      this.saveForm();
    }
  }
};
</script>
<style lang="scss" scoped>
.paneSec /deep/ .filter-params-e3s .filter-button {
  display: none !important;
}
.paneSec /deep/ .el-pagination {
  display: none !important;
}
.paneSec /deep/ .filter-params-e3s .filter-title {
  display: none !important;
}
.filter-params /deep/ .el-radio-group {
  width: 100%;
}
.filter-params /deep/ .el-radio {
  width: 10%;
}
</style>
