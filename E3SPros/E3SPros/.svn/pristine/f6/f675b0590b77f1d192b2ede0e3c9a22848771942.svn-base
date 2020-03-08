<!--
* description: 采购单冻结金额设置-初始化弹窗
* author: liyanm
* createdDate: 2019-07-23
-->
<template>
  <section>
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="800px"
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
import { requestGraphQL } from "@/api/commonRequest";
import { formMixins } from "@/components/mixins/formMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  props: {
    newmessagePopupsVisible: { type: Boolean, default: false },
    // 弹窗状态（add/edit/view）
    // 新增、编辑弹窗Key
    newmessagePopupsKey: "",
    // 新增、编辑弹窗状态（add/edit/view）
    newmessagePopupsState: "",
    // 新增、编辑行对象
    newmessageRowData: {},
    // 弹窗状态（add/edit/view）
    popupsState: ""
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veDbBaseseriesFreezeBailMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
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
          labelName: "源资金类型",
          codeField: "purcashTypeIdOld",
          isRequire: true,
          component: () => import("@/components/ve/PurcashType"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "资金类型",
          codeField: "purcashTypeIdnew",
          isRequire: true,
          component: () => import("@/components/ve/PurcashType"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "冻结金额设置_初始化"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        purcashTypeId: "",
        orderTypeId: "",
        stockTypeId: "",
        freezeNodeId: "",
        freezeWayId: "",
        freezeBail: "",
        purcashTypeIdnew: "",
        purcashTypeIdOld: "",
        isEnable: "1"
      },
      list: "" //页面查询数据
    };
  },
  created() {
    if (this.curPopupsVisible) {
      // this.queryTable();
    }
  },
  watch: {
    //赋值新资金类型
    "formField.purcashTypeIdnew"(curVal, oldVal) {
      this.formField.purcashTypeId = curVal;
    },
    //查询源资金类型相关信息
    "formField.purcashTypeIdOld"(curVal, oldVal) {
      for (var x in this.list) {
        if (curVal === this.list[x].purcashTypeId) {
          this.formField.carBrandCode = this.list[x].carBrandCode;
          this.formField.purcashTypeId = this.list[x].purcashTypeId;
          this.formField.orderTypeId = this.list[x].orderTypeId;
          this.formField.stockTypeId = this.list[x].stockTypeId;
          this.formField.freezeNodeId = this.list[x].freezeNodeId;
          this.formField.freezeWayId = this.list[x].freezeWayId;
          this.formField.freezeBail = this.list[x].freezeBail;
          this.formField.isEnable = "1";
        }
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
        apiConfig: veApis.veDbBaseseriesFreezeBailQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "seriesID",
              "purcashTypeId",
              "orderTypeId",
              "stockTypeId",
              "freezeNodeId",
              "freezeWay",
              "freezeBail",
              "isEnable",
              "updateControlId"
            ]
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
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
          that.pageTotal =
            response.data[queryObj.apiConfig.ServiceCode].records;
          that.list = response.data[queryObj.apiConfig.ServiceCode].rows;
          that.listLoading = false;
        }
      });
    }
  }
};
</script>
