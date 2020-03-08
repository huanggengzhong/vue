<!--
* description: 车务代办维护
* author: lixb
* createdDate: 2019-10-17
-->
<template>
  <section>
    <div class="filter-container filter-button button-top" ref="searcheHeight">
      <el-button
        v-for="comp in tableButtons"
        :key="comp.compKey"
        :type="comp.type"
        @click="comp.clickEvent"
      >{{comp.text}}</el-button>
    </div>
    <div
      class="filter-container filter-title mx-8"
      ref="resultTitleHeight"
    >{{$t('ve.label.CarToDoSets')}}</div>
    <TwoTable
      ref="multipleTable"
      :rightTableObject="rightTableObject"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicFormFields="formField"
      :dynamicTableCols="tableCols"
      :dynamicApiConfig="apiConfig"
      :dynamicIsShowMoreBtn="isShowMoreBtn"
      :dynamicIsShowSelect="true"
      :dynamicTableOtherHeight="100"
    />
    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="sendCode"
    ></edit>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import { CacheConfig } from "@/cache/configCache/index";
import TwoTable from "@/components/templates/twoTable";
import Edit from "./edit";

export default {
  mixins: [oneTableWithViewTemplateMixins],
  name: "vehicleServiceAgencyMaintenance",
  components: {
    TwoTable,
    Edit
  },
  mounted() {
    this.queryTable(1);
  },
  created() {},
  data() {
    return {
      //树对象
      rightTableObject: {
        // 配置右侧网格查询API配置对象
        apiConfig: veApis.VeDbCarAgentQueryFindAll,
        //设置是否显示更多按钮
        isShowRightMoreBtn: true,
        // 动态组件-按钮
        tableButtons: [],
        // 动态组件-查询条件
        tableComponents: [],
        // 显示组件
        // 动态生成网格列
        tableCols: [
          {
            prop: "agentProject",
            label: "代办项目",
            width: null,
            align: "center"
          },
          {
            prop: "carAgentItemCost",
            label: "费用",
            width: null,
            align: "center"
          }
        ],
        //表单查询数据（查询条件）
        formField: {
          lookupValueCode: "",
          lookupValueName: "",
          isEnable: "",
          lookupTypeName: "",
          agentCode: "",
          dlrId: "HOST"
        }
      },
      //设置是否显示更多按钮
      isShowMoreBtn: true,
      clickRowsData: {},
      // 网格查询API配置对象
      apiConfig: veApis.VeDbCarAgentQueryFindAll,
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.add(),
          text: "新增"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.del(),
          text: "删除"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [],
      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 80,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: "编辑",
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        {
          prop: "agentName",
          label: "代办名称",
          width: null,
          align: "center"
        },
        {
          prop: "agentCode",
          label: "代办编码",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "agentAddr",
          label: "代办地点",
          width: 180,
          align: "center"
        },
        {
          prop: "agentTypeName",
          label: "代办性质",
          width: null,
          align: "center"
        },
        {
          prop: "agentType",
          label: "代办性质编码",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "createdDate",
          label: "创建日期",
          width: null,
          align: "center"
        },
        {
          prop: "agentRemark",
          label: "备注",
          width: null,
          align: "center"
        },
        {
          prop: "updateControlId",
          label: "并发控制",
          width: 0,
          align: "center",
          hidden: true
        }
      ],
      //表单查询数据
      formField: {
        isEnable: ""
      },
      //联动数据
      toAnotherChild: {
        key: "",
        val: ""
      }
    };
  },
  watch: {
    "toAnotherChild.val"(curVal, oldVal) {
      if (curVal !== oldVal) {
        this.rightTableObject.formField.agentCode = curVal;
        this.$refs.multipleTable.queryRightTable(
          1,
          null,
          1,
          this.toAnotherChild
        );
      }
    },
    clickRowsData(curVal, oldVal) {
      this.toAnotherChild.val = curVal.agentCode;
      this.toAnotherChild.key = "agentCode";
    },
    deep: true
  },
  methods: {
    del() {
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        const that = this.$refs.multipleTable;
        let saveState = true;
        let saveCount = 0;
        let msg = "";
        const selectData = that.$refs.multipleTable.selection;
        if (selectData.length < 1) {
          that.$message({
            message: "请选择需要删除的事项",
            type: "warning",
            duration: 2000
          });
          return;
        }
        for (var k in selectData) {
          const queryObj = {
            // 保存mutation
            type: "mutation",
            // api配置
            apiConfig: veApis.veConfirmOrder,
            variables: {
              // 当前中台使用的名称有dataInfo、info，具体查看API文档
              dataInfo: {}
            }
          };
          // 转换了中台请求格式数据
          var paramD = this.$getParams(queryObj);
          // 调用中台API方法（可复用）
          this.$requestGraphQL(paramD).then(response => {
            if (response.data.veConfirmOrder.result === "1") {
              // 保存成功
              this.$message({
                message: "删除成功",
                type: "success",
                uration: 2000
              });
            } else {
              // 保存失败
              this.$message({
                message: "删除失败",
                type: "warn",
                uration: 2000
              });
            }
            this.queryTable(1);
            this.sendCode();
          });
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .el-main {
  margin-top: 25px;
}
/deep/ .moreBtn {
  right: 46%;
}
/deep/ .toggleParam {
  margin-top: 22px;
}
/deep/ .el-main .filter-title {
  display: none;
}
/deep/ .filter-params {
  display: none;
}
/deep/.button-top {
  width: auto;
  padding-right: 30px;
  background: #fff;
  margin: 5px 10px 8px 10px;
}
/deep/.mx-8 {
  margin: 0 10px;
}
/deep/#twoTable .leftMail {
  width: 65%;
}
/deep/#twoTable .rightElmain {
  width: 34%;
}
</style>
