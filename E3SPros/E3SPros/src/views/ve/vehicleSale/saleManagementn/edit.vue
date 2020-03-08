<!--
* description: 合同信息管理弹窗
* author: wangcx
* createdDate: 2019-10-22
-->
<template>
  <section class="editWholeRoleManage">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
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
            @clickEvent="receiveEvent(comp.clickEvent)"
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
        >{{comp.text}}</el-button>
      </div>
    </el-dialog>
    <grkhxx @visible="handDialogVisibleFuncgrkhxx" :dialogVisible="dialogVisiblegrkhxx" :key="grkhxxKey" />
    <jrzxf @visible="handDialogVisibleFuncjrzxf" :dialogVisible="dialogVisiblejrzxf" :key="jrzxfKey" />
    <dbzje @visible="handDialogVisibleFuncdbzje" :dialogVisible="dialogVisibledbzje" :key="dbzjeKey" />
    <bxzje @visible="handDialogVisibleFuncbxzje" :dialogVisible="dialogVisiblebxzje" :key="bxzjeKey" />
    <gzzje @visible="handDialogVisibleFuncgzzje" :dialogVisible="dialogVisiblegzzje" :key="gzzjeKey" />
    <zsxmyh @visible="handDialogVisibleFunczsxmyh" :dialogVisible="dialogVisiblezsxmyh" :key="zsxmyhKey" />
    <jpzje @visible="handDialogVisibleFuncjpzje" :dialogVisible="dialogVisiblejpzje" :key="jpzjeKey" />
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import grkhxx from "./grkhxx";
import jrzxf from "./jrzxf";
import dbzje from "./dbzje";
import bxzje from "./bxzje";
import gzzje from "./gzzje";
import zsxmyh from "./zsxmyh";
import jpzje from "./jpzje";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  components: {
    grkhxx,
    jrzxf,
    dbzje,
    bxzje,
    gzzje,
    zsxmyh,
    jpzje
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.veContractQry,
      dialogVisiblegrkhxx:false,
      dialogVisiblejrzxf:false,
      dialogVisiblejrzxf:false,
      dialogVisibledbzje:false,
      dialogVisiblegzzje:false,
      dialogVisiblebxzje:false,
      dialogVisiblezsxmyh:false,
      dialogVisiblejpzje:false,
      gzzjeKey:'gzzjeKey',
      jpzjeKey:'jpzjeKey',
      zsxmyhKey:'zsxmyhKey',
      bxzjeKey:'bxzjeKey',
      grkhxxKey:'grkhxxKey',
      jrzxfKey:'jrzxfKey',
      dbzjeKey:'dbzjeKey',
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          // text: this.$t("sys.button.save")
          text: "确定"
        } // '保存'
        // {
        //   compKey: "btnKey2",
        //   type: "",
        //   size: "small",
        //   clickEvent: () => this.reset(),
        //   text: this.$t("sys.button.reset")
        // } //重置
      ],
      // 动态组件-查询条件
      tableComponents: [
        { compKey: 'compKey1', pageArea: '客户信息', labelName: "客户姓名", codeField: 'carBrandCode',isFunc:true,clickEvent: () => this.openGrkhxx(), component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey2', pageArea: '客户信息', labelName: "联系电话", codeField: 'carBrandCn',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey3', pageArea: '客户信息', labelName: "详细地址", codeField: 'carBrandEn',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey4', pageArea: '客户信息', labelName: "车主姓名", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey5', pageArea: '客户信息', labelName: "车主联系电话",codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey6', pageArea: '客户信息', labelName: "车主属性", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey7', pageArea: '合同信息', labelName: "销售顾问", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey8', pageArea: '合同信息', labelName: "购车方式", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey9', pageArea: '合同信息', labelName: "贷款机构", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey10', pageArea: '合同信息', labelName: "销售方式", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey11', pageArea: '合同信息', labelName: "购买形式", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey12', pageArea: '合同信息', labelName: "销售渠道", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey13', pageArea: '合同信息', labelName: "购车用途", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey14', pageArea: '合同信息', labelName: "厂家指导价", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey15', pageArea: '合同信息', labelName: "销售价格", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey16', pageArea: '合同信息', labelName: "金融咨询费", codeField: 'isEnable',isFunc:true,clickEvent: () => this.openJrzxf(),component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey17', pageArea: '合同信息', labelName: "代办总金额", codeField: 'isEnable',isFunc:true,clickEvent: () => this.openDbzje(),component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey18', pageArea: '合同信息', labelName: "精品总金额", codeField: 'isEnable',isFunc:true,clickEvent: () => this.openJpzje(),component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey19', pageArea: '合同信息', labelName: "保险总金额", codeField: 'isEnable',isFunc:true,clickEvent: () => this.openBxzje(),component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey20', pageArea: '合同信息', labelName: "合同总金额", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey21', pageArea: '合同信息', labelName: "优惠总金额", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey22', pageArea: '合同信息', labelName: "预计交车日期", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey23', pageArea: '合同信息', labelName: "车辆颜色价", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey24', pageArea: '合同信息', labelName: "赠送项目优惠总金额", codeField: 'isEnable',isFunc:true,clickEvent: () => this.openZsxmyh(),component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey25', pageArea: '合同信息', labelName: "客户权益", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey26', pageArea: '合同信息', labelName: "备注", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey27', pageArea: '车辆信息', labelName: "VIN码", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey28', pageArea: '车辆信息', labelName: "改装总金额", codeField: 'isEnable',isFunc:true,clickEvent: () => this.openGzzje(),component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey29', pageArea: '车辆信息', labelName: "车系", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey30', pageArea: '车辆信息', labelName: "车型", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey31', pageArea: '车辆信息', labelName: "车型配置", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey32', pageArea: '车辆信息', labelName: "发动机号", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey33', pageArea: '车辆信息', labelName: "车身颜色", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey34', pageArea: '车辆信息', labelName: "内饰颜色", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
        { compKey: 'compKey35', pageArea: '车辆信息', labelName: "仓库", codeField: 'isEnable',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true },
      ],
      // 标题
      textMap: {
        edit: "合同信息维护", //修改弹框名字
      },
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
    receiveEvent(clickEvent) {
      if (clickEvent === null || clickEvent === undefined) {
        console.info("empty event");
      } else {
        clickEvent.call();
      }
    },
    //打开个人客户信息
    openGrkhxx() {
      this.dialogVisiblegrkhxx = true;
      this.grkhxxKey = this.grkhxxKey + "1";
    },
    handDialogVisibleFuncgrkhxx(val) {
      this.dialogVisiblegrkhxx = val;
      this.grkhxxKey = this.grkhxxKey + "1";
    },
    //打开金融咨询费
    openJrzxf() {
      this.dialogVisiblejrzxf = true;
      this.jrzxfKey = this.jrzxfKey + "1";
    },
    handDialogVisibleFuncjrzxf(val) {
      this.dialogVisiblejrzxf = val;
      this.jrzxfKey = this.jrzxfKey + "1";
    },


    //打开金融咨询费
    openDbzje() {
      this.dialogVisibledbzje = true;
      this.dbzjeKey = this.dbzjeKey + "1";
    },
    handDialogVisibleFuncdbzje(val) {
      this.dialogVisibledbzje = val;
      this.dbzjeKey = this.dbzjeKey + "1";
    },

    //打开保险总金额
    openBxzje() {
      this.dialogVisiblebxzje = true;
      this.bxzjeKey = this.bxzjeKey + "1";
    },
    handDialogVisibleFuncbxzje(val) {
      this.dialogVisiblebxzje = val;
      this.bxzjeKey = this.bxzjeKey + "1";
    },


    //打开改装总金额
    openGzzje() {
      this.dialogVisiblegzzje = true;
      this.gzzjeKey = this.gzzjeKey + "1";
    },
    handDialogVisibleFuncgzzje(val) {
      this.dialogVisiblegzzje = val;
      this.gzzjeKey = this.gzzjeKey + "1";
    },

    //打开赠送项目优惠总金额
    openZsxmyh() {
      this.dialogVisiblezsxmyh = true;
      this.zsxmyhKey = this.zsxmyhKey + "1";
    },
    handDialogVisibleFunczsxmyh(val) {
      this.dialogVisiblezsxmyh = val;
      this.zsxmyhKey = this.zsxmyhKey + "1";
    },


    //打开精品总金额
    openJpzje() {
      this.dialogVisiblejpzje = true;
      this.jpzjeKey = this.jpzjeKey + "1";
    },
    handDialogVisibleFuncjpzje(val) {
      this.dialogVisiblejpzje = val;
      this.jpzjeKey = this.jpzjeKey + "1";
    },


    //保存
    save() {
      const that = this;
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        //保存表单
        this.saveForm();
      }
    }
  }
};
</script>
