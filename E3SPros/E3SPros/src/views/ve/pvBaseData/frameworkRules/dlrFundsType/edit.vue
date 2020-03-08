<!--
* description: 经销商资金类型维护、新增编辑
* author: liyanm
* createdDate: 2019-08-06
-->
<template>
  <section class="editsettingPrice">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="26" ref="vailComponentList">
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
            :parentFileds="comp.parentFileds"
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
import { parse } from "path";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veDbPurcashTypeBrandMutationUpdate,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        },
        {
          compKey: "btnKey3",
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
          labelName: this.$t("org.label.carBrandCn"), // 品牌
          codeField: "carBrandCode",
          isMul: false,
          isRequire: true,
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true,
          isMul: false
        },
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.capitalType"), //资金类型
          codeField: "purcashTypeId",
          parentFileds: "carBrandCode-carBrandCode",
          isRequire: true,
          component: () => import("@/components/ve/PurcashType"),
          type: "dropdownList",
          isMust: true,
          isMul: false
        },
        {
          compKey: "compKey3",
          labelName: this.$t("org.label.isEnable"), //是否启用
          codeField: "isEnable",
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true,
          isMul: false
        },
        {
          compKey: "compKey4",
          labelName: this.$t("org.label.orderNo"), //分配顺序
          codeField: "orderNo",
          isRequire: true,
          component: () => import("@/components/org/commonInput/numberInput"),
          type: "	inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("org.label.caroutPriortiy"), //出货顺序确认
          codeField: "caroutPriortiy",
          isRequire: true,
          component: () => import("@/components/org/commonInput/numberInput"),
          type: "	inputText",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: this.$t("org.label.cancelDay"), // 解配天数
          codeField: "cancelDay",
          isRequire: true,
          component: () => import("@/components/org/commonInput/numberInput"),
          type: "	inputText",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: this.$t("org.label.isOnlineStatus"), // 是否实时分配
          codeField: "isOnlineStatus",
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true,
          isMul: false
        },
        {
          compKey: "compKey8",
          labelName: this.$t("org.label.isBatchStatus"), // 是否批次分配
          codeField: "isBatchStatus",
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true,
          isMul: false
        },
        {
          compKey: "compKey9",
          labelName: "品牌资金类型主键ID", // 
          codeField: "purcashTypeBrandId",
          isRequire: !this.isAdd(),
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false,
        },
        {
          compKey: "compKey10",
          labelName: "并发控制ID", // 
          codeField: "updateControlId",
          isRequire: !this.isAdd(),
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false,
          
        }
      ],
      // 标题
      textMap: {
        edit: this.$t("sys.button.edit"),
        add: this.$t("sys.button.add")
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        purcashTypeId: "",
        isEnable: "",
        orderNo: 0,
        caroutPriortiy: 0,
        cancelDay: 0,
        isOnlineStatus: "",
        isBatchStatus: "",
        updateControlId: "",
        purcashTypeBrandId: ""
      }
    };
  },
  methods: {
    // query() {
    //   const queryObj = {
    //     // api配置
    //     apiConfig: veApis.veDbPurcashTypeBrandQueryFindAll,
    //     // 需要调用的API服务配置
    //     apiServices: [
    //       {
    //         // 表格中台返回网格的字段
    //         apiQueryRow: this.apiQueryRow
    //       }
    //     ],
    //     // 条件/实体参数（变量），根据typeParam中的定义配置
    //     variables: {
    //       pageSize: "1",
    //       pageIndex: "1",
    //       // 当前中台使用的名称有dataInfo、info，具体查看API文档
    //       dataInfo: {
    //         carBrandCode: this.formField.carBrandCode,
    //         purcashTypeId: this.formField.purcashTypeId
    //       }
    //     }
    //   };
    //   // 转换了中台请求格式数据
    //   var paramD = this.$getParams(queryObj);
    //   // 调用中台API方法（可复用）
    //   this.$requestGraphQL(paramD).then(response => {
    //     debugger;
    //     if (response.result === "0") {
    //       return;
    //     } else {
    //       // 返回json
    //       if (
    //         response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
    //         response.data[queryObj.apiConfig.ServiceCode].rows
    //       ) {
    //         this.formField.updateControlId =
    //           response.data[queryObj.apiConfig.ServiceCode].rows[0][
    //             "updateControlId"
    //           ];
    //       }
    //     }
    //   });
    // },
    //保存
    save() {
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        const that = this;
        const saveObj = {
          carBrandCode: this.formField.carBrandCode,
          purcashTypeId: this.formField.purcashTypeId,
          isEnable: this.formField.isEnable,
          orderNo: parseFloat(this.formField.orderNo),
          caroutPriortiy: parseFloat(this.formField.caroutPriortiy),
          cancelDay: parseFloat(this.formField.cancelDay),
          isOnlineStatus: this.formField.isOnlineStatus,
          isBatchStatus: this.formField.isBatchStatus
        };
        if (!this.isAdd()) {
          saveObj.updateControlId = this.formField.updateControlId;
          saveObj.purcashTypeBrandId = this.formField.purcashTypeBrandId;
        }

        let queryObj = {
          // 保存mutation
          type: "mutation",
          typeParam: "($dataInfo:[InputVeDbPurcashTypeBrand])",
          // api配置
          apiConfig: veApis.veDbPurcashTypeBrandMutationUpdate,
          apiServices: [
            {
              apiServiceParam: "(dataInfo:$dataInfo)"
            }
          ],
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: saveObj
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
            that.$message({
              message: this.$t("sys.tips.esTip5"),
              type: "success",
              duration: 2000
            });
            this.sendCode("1");
          } else {
            that.$message({
              message: response.data[queryObj.apiConfig.ServiceCode].msg,
              type: "warning",
              duration: 2000
            });
          }
        });
      }
    }
  }
};
</script>
