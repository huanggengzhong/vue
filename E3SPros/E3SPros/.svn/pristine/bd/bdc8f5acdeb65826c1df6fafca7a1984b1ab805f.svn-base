<!--
* 集团信息管理-新增、修改弹窗
* xulfan
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
            :text="formField[comp.textField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :inputType="comp.inputType"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
            :isMul="false"
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
import { orgApis } from "@/api/graphQLApiList/org";
export default {
  // 组件混入对象
  mixins: [formMixins],
  props:{
    userNameShow:{ type: Boolean, default: true },
    isShowChooes:{ type: Boolean, default: true },
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.mdmOrgInfoMutationGroupSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.confirm")
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        },
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel")
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t("org.label.orgCode") /*集团编码*/,
          codeField: "orgCode",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          parentFileds: "disabled:orgCode-orgCode",
          disabled: null,
          // disabled: !this.isAdd(),
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.orgName1") /*集团名称*/,
          codeField: "orgName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        // {
        //   compKey: "compKey3",
        //   labelName: "管理员角色",
        //   codeField: "roleCode",
        //   isRequire: true,
        //   component: () => import("@/components/org/roleId/roleId"),
        //   type: "dropdownList",
        //   isMust: true
        // },
        {
          compKey: "compKey4",
          labelName: this.$t("org.label.adminAccount") /*管理员账号*/,
          disabled:this.userNameShow,
          codeField: "userName",
          isRequire: true,
          parentFileds: "disabled:orgCode-userName",
          disabled: null,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("org.label.adminPassword") /*管理员密码*/,
          codeField: "password",
          isRequire: true,
          inputType: "password",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: this.$t("org.label.administratorRole") /*管理员角色*/,
          codeField: "roleId",
          textField: "roleName",
          isMul: false,
          isRequire: true,
          component: () => import("@/components/org/seletRole"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: this.$t("org.label.isEnable") /*是否可用*/,
          codeField: "isEnable",
          // disabled: !this.isAdd(),
          disabled:this.isShowChooes,
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: this.$t("org.label.textMap2.editOrgInfo") /*修改集团信息*/,
        add: this.$t("org.label.textMap2.addOrgInfo") /*新增集团信息*/
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        orgCode: "",
        orgName: "",
        userName: "",
        password: "",
        isEnable: "",
        roleId: "",
        // roleName: "",
        updateControlId: "",
        orgId: "",
        userId: ""
      },
      initForm:{}
    };
  },
  created() {
    console.log(this.isShowChooes)
    // 赋值formField
  },
  methods: {
    onCreated() {
      var that = this
      if (that.tableComponents.length === 0) {
        if (that.popupsPageCode && that.popupsPageCode.length > 0) {
        // 读取弹窗配置信息
          CacheConfig.initData(that.popupsPageCode, function() {
            if (CacheConfig.cacheData[that.popupsPageCode] && CacheConfig.cacheData[that.popupsPageCode].formComponents.length > 0) {
              that.tableComponents = CacheConfig.cacheData[that.popupsPageCode].formComponents
            } else {
              that.tableComponents = that.staticTableComponents
            }
            that.popupsTableKey = that.$utils.generateId()
          })
        } else {
          that.tableComponents = that.staticTableComponents
        }
      }
      // 赋值formField
      if (this.popupsState === "add") {
        this.formField.isEnable = '1'
      }
      if (this.popupsState === 'edit') {
        if (this.isUseRowData) {
          for (var key in this.formField) {
            if (this.dynamicEditRowData[key]) {
              this.formField[key] = this.dynamicEditRowData[key]
            } else {
              if (typeof this.formField[key] === 'number') {
                this.formField[key] = 0
              } else if (typeof this.formField[key] === 'string') {
                this.formField[key] = ''
              }

              // 两层处理
              for (var rKey in this.dynamicEditRowData) {
                if (rKey.indexOf('.') > -1) {
                  var tmpKey = rKey.split('.')[1]
                  if (tmpKey === key) {
                    this.formField[tmpKey] = this.dynamicEditRowData[rKey]
                    break
                  }
                }
              }
            }
          }
          if (this.formField.password === "" && this.formField.userName != "") {
            this.formField.password = "***";
          }
          this.initForm.password = this.formField.password;
          this.initForm.roleId = this.formField.roleId;
        }
      }
    },
    //保存
    save() {
      const that = this;
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        //保存表单
        if (
          this.formField.roleId != this.initForm.roleId &&
          this.formField.password === "***"
        ) {
          this.$message({
            message: '请修改管理员账号密码' /*请修改管理员信息*/,
            type: "warning",
            duration: 2000
          });
          this.formField.password = "";
          return;
        }
        let obj = {};
        if (
          this.formField.password === "***" &&
          this.formField.roleId === this.initForm.roleId
        ) {
          obj = {
            orgName: this.formField.orgName,
            orgCode: this.formField.orgCode,
            roleId: this.formField.roleId,
            orgId: this.formField.orgId,
            isEnable: this.formField.isEnable,
            updateControlId: this.formField.updateControlId
          };
        } else {
          obj = this.formField;
        }
        this.saveForm(obj);
      }
    },
    getComponentCode(val, txt, codeField, comType, popupsKey, textField) {
      if (comType === 'propus' && !this.$utils.isEmpty(popupsKey)) {
        // 弹窗赋值
        // 根据popupsKey找到对应的弹窗key的弹窗组件
        var dynamicPopup = this.dynamicComponents.filter(o => o.compKey === popupsKey)
        if (dynamicPopup.length > 0) {
          if (dynamicPopup[0].popups && dynamicPopup[0].popups.state) {
            // 弹窗状态不是为已打开才进行计算
            dynamicPopup[0].popups.state = false
            dynamicPopup[0].popups.key = codeField + this.$utils.generateId()
          }
        }
      }
      // 赋值
      if (codeField in this.formField) {
        this.formField[codeField] = val
      }
      if (textField in this.formField) {
        this.formField[textField] = txt
      }
      if(this.popupsState === 'edit'){

      if(this.formField.roleId != this.initForm.roleId){
        if(this.formField.password === '***'){
            this.formField.password = ""
          }
        this.initForm.roleId = this.formField.roleId
      }}
    },
  }
};
</script>
