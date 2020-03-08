<!--
* description: 车主变更弹窗
* author: wangcx
* createdDate: 2019-10-22
-->
<template>
  <section class="editWholeRoleManage">
    <el-dialog
      :close-on-click-modal="false"
      title="保险业务"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCodeHandleVisible"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <el-row v-for="page in getPageArea()" :key="page.compKey" :gutter="26">
          <div v-if="page.pageArea !== ''" class="filter-container filter-title">{{ page.pageArea }}</div>
          <component
            :is="comp.component"
            v-for="comp in tableComponents.filter(o => o.isMust === true && ((page.pageArea === '' && !o.pageArea) || o.pageArea === page.pageArea))"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :code="formField[comp.codeField]"
            :disabled="comp.disabled"
            :isFunc="comp.isFunc"
            :isRequire="comp.isRequire"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            class="filter-connet"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
          />
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button
          v-for="comp in tableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
          >{{ comp.text }}</el-button
        >
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
  props: {
    dialogVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.veContractQry,
      curPopupsVisible: this.dialogVisible,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          // text: this.$t("sys.button.save")
          text: "确定"
        }, // '保存'
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.close(),
          text: "取消"
        } //重置
      ],
      // 动态组件-查询条件
      tableComponents: [
        { compKey: 'compKey1', pageArea: '商业险', labelName: "商业险投保金额", codeField: 'carBrandCode', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey2', pageArea: '商业险', labelName: "商业险赠送金额", codeField: 'carBrandCn',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey3', pageArea: '商业险', labelName: "商业险应收金额", codeField: 'carBrandEn',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey4', pageArea: '交强险', labelName: "交强险投保金额", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey5', pageArea: '交强险', labelName: "交强险赠送金额",codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey6', pageArea: '交强险', labelName: "交强险应收金额", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey7', pageArea: '总金额', labelName: "保险投保总金额", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey8', pageArea: '总金额', labelName: "保险赠送总金额", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey9', pageArea: '总金额', labelName: "保险公司", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },

      ],
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        roleDesc: "",
        saleContractDateBegin: "",
        preDeliveryDate: "",
        createDateBegin: "",
        saleContractDateEnd: ""
      }
    };
  },
  methods: {
    getPageArea() {
      // 分组操作
      const arrPageArea = []
      if (this.tableComponents.filter(o => o.pageArea && o.pageArea !== '').length > 0) {
        for (let i = 0; i < this.tableComponents.length; i++) {
          if (this.tableComponents[i].pageArea) {
            // 有pageArea的情况
            if (arrPageArea.filter(o => o.pageArea === this.tableComponents[i].pageArea).length <= 0) {
              arrPageArea.push({ pageArea: this.tableComponents[i].pageArea })
            }
          } else {
            // 没有pageArea的情况
            this.tableComponents[i].pageArea = '其它信息'
            arrPageArea.push({ pageArea: this.tableComponents[i].pageArea })
          }
        }
        for (let j = 0; j < arrPageArea.length; j++) {
          if (arrPageArea[j].pageArea === '其它信息') {
            arrPageArea.splice(j, 1)
            const a = {}
            a.pageArea = '其它信息'
            arrPageArea.push(a)
          }
        }
      } else {
        arrPageArea.push({ pageArea: '' })
      }
      return arrPageArea
    },
    //保存
    save() {
      const that = this;
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        //保存表单
        this.saveForm();
      }
    },
    close() {
      this.$emit("close", "");
    },
    sendCodeHandleVisible() {
      this.$emit("visible", false);
    }
  }
};
</script>
