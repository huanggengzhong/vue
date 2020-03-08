<!--
* description: 经销商资金类型维护弹窗
* author: liyanm
* createdDate: 2019-08-06
*  2019-08-10 添加保存校验 liyanm
-->
<template>
  <section class="maintainHandle">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
      height="800px"
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
      <div>
        <p style="text-align:right">
          <el-button
            v-for="comp in tableButtons"
            :key="comp.compKey"
            :type="comp.type"
            @click="comp.clickEvent"
          >{{comp.text}}</el-button>
        </p>
      </div>
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        stripe
        highlight-current-row
        height="350"
        @row-click="rowClickModel"
      >
        <el-table-column align="center" label="序号" width>
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column align="center" label="资金编码" width="200">
          <template slot-scope="scope">{{ scope.row.purcashTypeId}}</template>
        </el-table-column>
        <el-table-column align="center" label="资金名称" width="300">
          <template slot-scope="scope">{{ scope.row.purcashTypeName}}</template>
        </el-table-column>
        <el-table-column align="center" label="是否启用" width="250">
          <template slot-scope="scope">{{ scope.row.isEnable=="1" ? "是" : "否"}}</template>
        </el-table-column>
        <el-table-column label="并发控制id" v-if="false">
          <template slot-scope="scope">{{ scope.row.updateControlId }}</template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        prev-text="上一页"
        next-text="下一页"
        layout="prev, pager, next, sizes, ->, total"
        ref="paginationHeight"
        :total="pageTotal"
        :current-page.sync="listQuery.pageIndex"
        style="margin-bottom:10px"
      ></el-pagination>
    </el-dialog>
  </section>
</template>
<script>
import { oneTableTemplateMixins } from '@/components/mixins/oneTableTemplateMixins';
import { formMixins } from "@/components/mixins/formMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  name: "orgmaintain",
  // 组件混入对象
  mixins: [formMixins, oneTableTemplateMixins],
  components: {
    OneTableTemplate
  },
  props: {
    maintainPopupsVisible: { type: Boolean, default: false },
    // 弹窗状态（add/edit/view）
    // 新增、编辑弹窗Key
    maintainPopupsKey: "",
    // 新增、编辑弹窗状态（add/edit/view）
    maintainPopupsState: "",
    // 新增、编辑行对象
    maintainRowData: {},
    // 弹窗状态（add/edit/view）
    popupsState: ""
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veDbPurcashTypeQueryFindAll,
      rowData: {},
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: "查询"
        },
        {
          compKey: "btnKey2",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        },
        {
          compKey: "btnKey3s",
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
          labelName: "资金编码",
          codeField: "purcashTypeId",
          // isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "	inputText",
          isMust: true,
          disabled: this.curPopupsState === "true"
          // disabled: this.rowData == null ? false : true,
        },
        {
          compKey: "compKey2",
          labelName: "资金名称",
          codeField: "purcashTypeName",
          // isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "	inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "是否启用",
          codeField: "isEnable",
          // isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "purcashTypeId",
          label: "资金编码",
          width: 250,
          align: "center"
        },
        {
          prop: "purcashTypeName",
          label: "资金名称",
          width: 400,
          align: "center"
        },
        { prop: "isEnable", label: "是否启用", width: 250, align: "center" },
        {
          prop: "updateControlId",
          label: "并发控制Id",
          hidden: true,
          align: "center"
        }
      ],
      // 标题
      textMap: {
        edit: "资金维护"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        purcashTypeId: "",
        purcashTypeName: "",
        isEnable: ""
      },
      disabled: false,
      updateControlId: "",
      curPopupsState: this.popupsState
    };
  },
  created() {
    this.queryTable(1);
  },
  watch: {
    "formField.purcashTypeId": {
      handler: function() {
        if (this.formField.purcashTypeId !== "") {
          this.curPopupsState = "true";
        } else {
          this.curPopupsState = "false";
        }
        let comps = this.tableComponents.filter(
          o => o.codeField === "purcashTypeId"
        );
        comps[0].disabled = this.curPopupsState === "true";
      }
    }
  },
  methods: {
    reset() {
      this.formField = {
        purcashTypeId: "",
        purcashTypeName: "",
        isEnable: ""
      };
      this.updateControlId = ""
    },
    // sendCode(type) {
    //   this.rowData = {};
    //   this.$emit("close", type);
    // },
    rowClickModel(row) {
      this.rowData = row;
      this.formField = {
        purcashTypeId: row.purcashTypeId,
        purcashTypeName: row.purcashTypeName,
        isEnable: row.isEnable
      };
      this.updateControlId = row.updateControlId;
    },
    save() {
      let that = this;
      // if (JSON.stringify(this.rowData) == "{}") {
      //   that.$message({
      //     message: this.$t("org.message.selOneData") /*请选择一条数据*/,
      //     type: "warning",
      //     duration: 2000
      //   });
      //   return false;
      // }
      let queryObj = {
        // 保存mutation
        type: "mutation",
        typeParam: "($dataInfo:[InputVeDbPurcashType])",
        // api配置
        apiConfig: veApis.veDbPurcashTypeMutationUpdate,
        apiServices: [
          {
            apiServiceParam: "(dataInfo:$dataInfo)"
          }
        ],
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            purcashTypeId: that.formField.purcashTypeId,
            purcashTypeName: that.formField.purcashTypeName,
            isEnable: that.formField.isEnable,
            updateControlId: that.updateControlId
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      that.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.$message({
            message: "保存成功",
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
};
</script>
