<!--
* description: 服务车型维护
* author: ydche
* createdDate: 2019-08-04
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
import OneTableTemplate from "@/components/templates/popupsOneTable";
import { seApis } from "@/api/graphQLApiList/se";
export default {
  props: {
    dynamicEditRowData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: seApis.mdmSmallCarTypeMutationSaveServiceCarType,
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
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "车辆品牌",
          codeField: "mdmCarBrandExtend.carBrandCn",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "销售车系",
          codeField:
            "mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.carSeriesCode",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "销售车型",
          codeField: "smallCarTypeCn",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "车型小类",
          codeField: "smallCarTypeCode",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "服务车系编码",
          codeField:
            "mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.mdmVeCarSeriesExtend.sCarseriesCode",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "服务车型",
          codeField: "smallCarTypeCn",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "服务车系名称",
          codeField:
            "mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.mdmVeCarSeriesExtend.sCarseriesDesc",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "服务车型维护",
        add: "添加品牌信息"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        "mdmCarBrandExtend.carBrandCn": "",
        "mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.mdmVeCarSeriesExtend.carSeriesCode":
          "",
        "mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.mdmVeCarSeriesExtend.carSeriesCn":
          "",
        "mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.carSeriesCode": "",
        smallCarTypeCode: "",
        smallCarTypeCn: "",
        "mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.mdmVeCarSeriesExtend.sCarseriesCode":
          "",
        "mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.mdmVeCarSeriesExtend.sCarseriesDesc":
          ""
      }
    };
  },
  methods: {
    //保存
    save() {
      console.log(this.dynamicEditRowData);
      const that = this;
      var obj = {
        smallCarTypeId: that.dynamicEditRowData.smallCarTypeId,
        serviceCarType: that.dynamicEditRowData.serviceCarType,
        sCarseriesCode: that.dynamicEditRowData.sCarseriesCode,
        updateControlId: that.dynamicEditRowData.updateControlId
      };
      if (
        that.$utils.isEmpty(
          that.formField[
            "mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.mdmVeCarSeriesExtend.sCarseriesCode"
          ]
        ) ||
        that.formField[
          "mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.mdmVeCarSeriesExtend.sCarseriesCode"
        ] === ""
      ) {
        that.$message({
          message: "请输入服务车系编码",
          type: "warning",
          duration: 2000
        });
        return;
      }
      const queryObj = {
        // 保存mutation
        type: "mutation",
        // 保存API配置对象
        apiConfig: seApis.mdmSmallCarTypeMutationSaveServiceCarType,
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: obj
        }
      };
      // 转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      that.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          // 保存成功
          that.sendCode("1");
          that.$message({
            message: "保存成功",
            type: "success",
            uration: 2000
          });
        } else {
          // 保存失败
          // that.sendCode('0')
          that.$message({
            message:
              "保存失败：" + response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    }
  }
};
</script>
