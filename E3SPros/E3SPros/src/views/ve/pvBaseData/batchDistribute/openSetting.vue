<!--
* description: 批次分配车系设置开关弹窗
* author: linwm
* createdDate: 2019-10-17
-->
<template>
  <section>
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="300px"
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
import { requestGraphQL } from "@/api/commonRequest";
export default {
  // 组件混入对象
  mixins: [formMixins],
  props: {
    settingMothPopupsVisible: { type: Boolean, default: false },
    // 弹窗状态（add/edit/view）
    // 新增、编辑弹窗Key
    settingMothPopupsKey: "",
    // 新增、编辑弹窗状态（add/edit/view）
    settingMothPopupsState: "",
    // 新增、编辑行对象
    settingMothRowData: {},
    // 弹窗状态（add/edit/view）
    popupsState: ""
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.mdsSysInfoOnOffMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        }, // '保存'
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        } //重置
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "品牌",
          isRequire: true,
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          span: 24,
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "是否启用",
          codeField: "isEnable",
          isRequire: true,
          span: 24,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "批次分配车系设置开关"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        isEnable: "",
        carBrandCode: "",
        parameterCode: "SYS_VE_PV_00085"
      },
      saveoInfo: {
        isEnable: "",
        carBrandCode: "",
        parameterCode: "SYS_VE_PV_00085",
        sysInfoId: "",
        updateControlId: "",
        businessModle: "VE",
        parameterName: "批次分配基准车系设置开关"
      }
    };
  },
  created() {
    this.queryTable(1);
    console.log(this.tableComponents);
  },
  watch: {
    "formField.carBrandCode"(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.formField.isEnable = "";
        this.formField.parameterCode = "SYS_VE_PV_00085";
        this.queryTable(1);
      }
    }
  },
  methods: {
    queryTable(page) {
      const that = this;
      that.currentRow = null;
      that.listLoading = true;
      let queryObj = {
        // api配置
        apiConfig: veApis.mdsSysInfoOnOffQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["isEnable", "sysInfoId", "updateControlId"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // pageSize: that.listQuery.pageSize,
          // pageIndex: page || that.listQuery.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.formField
        }
      };

      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows
        ) {
          that.list = response.data[queryObj.apiConfig.ServiceCode].rows;
          this.saveoInfo = {
            isEnable: "",
            carBrandCode: "",
            parameterCode: "SYS_VE_PV_00085",
            sysInfoId: "",
            updateControlId: "",
            businessModle: "VE",
            parameterName: "批次分配基准车系设置开关"
          };
          if (that.list.length !== 0) {
            that.formField.isEnable = that.list[0].isEnable;
            that.saveoInfo.sysInfoId = that.list[0].sysInfoId;
            that.saveoInfo.updateControlId = that.list[0].updateControlId;
          } else {
            that.formField.isEnable = "";
          }
          that.listLoading = false;
        }
      });
    },
    //保存
    save() {
      const that = this;
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        that.saveoInfo.isEnable = that.formField.isEnable;
        that.saveoInfo.parameterValue = that.formField.isEnable;
        that.saveoInfo.carBrandCode = that.formField.carBrandCode;
        //保存表单
        this.saveForm(that.saveoInfo);
      }
    }
  }
};
</script>
