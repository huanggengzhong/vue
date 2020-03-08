<!--
* description: 批次分配原则设置
* author: 石胜彪
* createdDate: 2019-08-06
-->
<template>
  <div class="app-container app-container-table" style="margin-top: 0px">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="批次分配原则设置" name="first" ref="elTabPaneHeight">
        <one-table-template
          ref="multipleTable"
          :dynamicButtons="tableButtons"
          :dynamicComponents="tableComponents"
          :dynamicApiConfig="apiConfig"
          :dynamicTableOtherHeight="60"
          :dynamicTableCols="tableCols"
          :dynamicFormFields="formField"
          :refreshTableKey="refreshTableKey"
        />
      </el-tab-pane>
      <el-tab-pane label="批次分配原则优先顺序设置" name="second">
        <el-card
          shadow="never"
          style="width: 96%; margin-left: 1%; margin-top: 10px"
          class="box-card"
        >
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="品牌">
              <el-input size="mini" v-model="formInline.carBrandCn" :readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="车系">
              <el-input size="mini" v-model="formInline.seriesName" :readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="采购资金类型">
              <el-input size="mini" v-model="formInline.purcashTypeName" :readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="采购单类型">
              <el-input size="mini" v-model="formInline.orderTypeName" :readonly="true"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
        <div style="margin-top: 10px">
          <el-transfer
            style="width: 90%;margin:0 0 0 7%;display:inline-block"
            v-model="valueRight"
            :data="valueLeft"
            :key="transferKey"
            :titles="['批次分配参考条件', '批次分配优先设置']"
            :button-texts="['左移', '右移']"
            @right-check-change="knowTheChangeInRight"
            :right-default-checked="rightDefaultChecked"
            :left-default-checked="leftDefaultChecked"
            target-order="push"
          >
            <el-button class="transfer-footer" slot="right-footer" size="small" @click="moveUp">上移</el-button>
            <el-button class="transfer-footer" slot="right-footer" size="small" @click="moveDown">下移</el-button>
          </el-transfer>
        </div>
        <div
          style="width: 100%; margin-top: 20px; margin-bottom: 10px; float: right; margin-right: 10%"
        >
          <el-button @click="back" style="float: right; margin-left: 10px">返回</el-button>
          <el-button @click="handleReset" style="float: right; margin-left: 10px">重置</el-button>
          <el-button @click="saveDataNew" style="float: right; margin-left: 10px" type="primary">保存</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "batchAllocation",
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  created() {
    this.queryOriginalDropdownList();
  },
  mounted() {
  },
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      valueLeft: [],
      valueList: [],
      valueRight: [],
      sortByList: [],
      leftDefaultChecked: [],
      rightDefaultChecked: [],
      currentRow: ["a"],
      transferKey: "transferKey",
      tableHeight: 400,
      // 网格查询API配置对象
      apiConfig: veApis.veDbBatchAssignPrincipleQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.querymultipleTable(1),
          text: "查询",
          name: "search", //按钮图标样式
          position: "right",
          fuzzySearch: true
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.sync(),
          text: "同步",
          name: "", //按钮图标样式
          position: "left",
          fuzzySearch: true
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置",
          name: "", //按钮图标样式
          position: "right",
          fuzzySearch: true
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // 显示组件
              {
                compKey: "compKey1",
                labelName: "品牌",
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: "采购单类型",
                codeField: "orderTypeId",
                parentFileds: "carBrandCode-carBrandCode",
                component: () => import("@/components/ve/PurchaseOrderType"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: "分配原则类型",
                isRequire: true,
                lookuptype: "VE0229",
                clearable: false,
                codeField: "assignPrincipleType",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMul: false,
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: "采购资金类型",
                parentFileds: "carBrandCode-carBrandCode",
                codeField: "purcashTypeId",
                hidden: false,
                disabled:false,
                component: () => import("@/components/ve/PurcashType"),
                type: "dropdownList",
                isMust: true
              },
              // {compKey: 'compKey4', labelName: '分配原则类型', codeField: 'assignPrincipleType', component: () => import('@/components/ve/PurcashType'), type: 'dropdownList', isMust: true},
              {
                compKey: "compKey6",
                labelName: "车系",
                parentFileds: "carBrandCode-carBrandCode",
                codeField: "baseSeriesId",
                component: () => import("@/components/org/CarCode"),
                type: "dropdownList",
                isMust: false
              }
            ],
      // 动态生成网格列
      tableCols: this.getCols(),
      // 默认选中的标签页
      activeName: "first",
      cardHeight: 270,
      selectNode1: "",
      selectNode2: "",
      // tree
      treeData1: [],
      treeData2: [],
      rowIndex: "",
      event: "",
      tab: "",
      formInline: {},
      assignPrincipleType:'',
      refreshTableKey:'',
      //表单查询数据
      formField: {
        carBrandCode: "",
        orderTypeId: "",
        purcashTypeId: "",
        assignPrincipleType: "2",
        baseSeriesId: ""
      }
    };
  },
  watch: {
    "formField.assignPrincipleType"(val) {
      this.assignPrincipleType = val
      if (val == "1") {
        this.formField.purcashTypeId = ''
        this.tableComponents[3].disabled = true
        this.refreshTableKey = this.refreshTableKey + '1';
      }else{
        this.tableComponents[3].disabled = false
        this.refreshTableKey = this.refreshTableKey + '1';
      }
    }
  },
  methods: {
    querymultipleTable(type){
      this.queryTable(type)
      if (this.assignPrincipleType == "1") {
        this.tableCols[5].hidden = true;
        this.$refs.multipleTable.dropTableCols = this.$refs.multipleTable.copyTableCols(
          this.$refs.multipleTable.dynamicTableCols
        );
        this.$refs.multipleTable.oneTableKey =
          this.$refs.multipleTable.oneTableKey + "1";
      } else {
        this.tableCols[5].hidden = false;
        this.$refs.multipleTable.dropTableCols = this.$refs.multipleTable.copyTableCols(
          this.$refs.multipleTable.dynamicTableCols
        );
        this.$refs.multipleTable.oneTableKey =
          this.$refs.multipleTable.oneTableKey + "1";
      }
    },
    getCols() {
      var cols = [
        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 60,
          align: "center",
          fixed: true,
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              align: "center",
              labelName: "编辑",
              codeField: "editControlBtn",
              clickEvent: this.templateClick,
              component: () => import("@/components/org/linkButton")
            }
          ]
        }
      ];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
          { prop: "carBrandCn", label: "品牌", align: "center" },
          {
            prop: "carBrandCode",
            label: "品牌编号",
            align: "center",
            hidden: true
          },
          {
            prop: "orderTypeId",
            label: "采购单ID",
            align: "center",
            hidden: true
          },
          { prop: "orderTypeName", label: "采购单类型", align: "center" },
          {
            prop: "purcashTypeName",
            label: "采购资金类型",
            align: "center",
            hidden: false
          },
          {
            prop: "purcashTypeId",
            label: "采购资金类型ID",
            align: "center",
            hidden: true
          },
          { prop: "seriesName", label: "车系", align: "center" },
          {
            prop: "baseSeriesId",
            label: "车系ID",
            align: "center",
            hidden: true
          }
        ]);
      }
      return cols;
    },
    //穿梭框右侧发生变动的事件，a为选中的key数组
    knowTheChangeInRight(a) {
      this.currentRow = a;
    },
    moveUp() {
      if (this.currentRow.length > 1) {
        this.$message({
          message: "请只选择一条数据移动",
          type: "warn",
          duration: 2000
        });
        return;
      }

      this.rightDefaultChecked = []
      this.rightDefaultChecked.push(this.currentRow[0])

      const lstLeft = JSON.parse(JSON.stringify(this.valueRight));

      if (this.currentRow[0] != "a") {
        for (let k = 0; k < lstLeft.length; k++) {
          if (this.currentRow[0] == this.valueRight[k]) {
            if (k != 0) {
              let temp = this.valueRight[k];
              this.valueRight[k] = this.valueRight[k - 1];
              this.valueRight[k - 1] = temp;
              this.transferKey = 'transferKey' + this.$utils.generateId();
              break;
            }
          }
        }
      }
    },
    moveDown() {
      if (this.currentRow.length > 1) {
        this.$message({
          message: "请只选择一条数据移动",
          type: "warn",
          duration: 2000
        });
        return;
      }

      this.rightDefaultChecked = []
      this.rightDefaultChecked.push(this.currentRow[0])

      const lstLeft = JSON.parse(JSON.stringify(this.valueRight));
      if (this.currentRow[0] != "a") {
        for (let k = 0; k < lstLeft.length; k++) {
          if (this.currentRow[0] == this.valueRight[k]) {
            if (k != lstLeft.length - 1) {
              let temp = this.valueRight[k];
              this.valueRight[k] = this.valueRight[k + 1];
              this.valueRight[k + 1] = temp;
              this.transferKey = 'transferKey' + this.$utils.generateId();
              break;
            }
          }
        }
      }
    },
    //查询批次分配的条件
    queryPrivilege(page, cb) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: veApis.veDbBatchAssignPrincipleCondition,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["batchAssignFactor", "batchAssignPrincipleId"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10000,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            carBrandCode: this.formInline.carBrandCode,
            orderTypeId: this.formInline.orderTypeId,
            purcashTypeId: this.formInline.purcashTypeId,
            baseSeriesId: this.formInline.baseSeriesId,
            assignPrincipleType: this.formField.assignPrincipleType
          }
        }
      };
      //转换了中台请求格式数据
      let dataNewList = [];
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (
          response.data[veApis.veDbBatchAssignPrincipleCondition.ServiceCode]
            .result === "1" &&
          response.data[veApis.veDbBatchAssignPrincipleCondition.ServiceCode]
            .rows != ""
        ) {
          // debugger
          dataNewList =
            response.data[veApis.veDbBatchAssignPrincipleCondition.ServiceCode]
              .rows;
          // for (var k in dataNewList) {
          //   var context = {
          //     key: dataNewList[k].lookupValueCode,
          //     label: dataNewList[k].lookupValueName
          //   };
          //   this.valueList.push(context);
          // }
          // this.sortByList = dataNewList;
          if (typeof cb === "function") {
            cb.call(
              response.data[
                veApis.veDbBatchAssignPrincipleCondition.ServiceCode
              ].rows
            );
          }
        }
      });
    },

    //查询左侧穿梭框的内容（值列表）
    queryOriginalDropdownList() {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: orgApis.mdsLookupValueQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["lookupValueName", "lookupValueCode"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10000,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: { lookupTypeCode: "VE0166" }
        }
      };
      //转换了中台请求格式数据
      var dataNewList;
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (
          response.data[orgApis.mdsLookupValueQueryByPage.ServiceCode]
            .result === "1" &&
          response.data[orgApis.mdsLookupValueQueryByPage.ServiceCode].rows !=
            ""
        ) {
          dataNewList =
            response.data[orgApis.mdsLookupValueQueryByPage.ServiceCode].rows;

          for (var k in dataNewList) {
            var context = {
              key: dataNewList[k].lookupValueCode,
              label: dataNewList[k].lookupValueName
            };
            this.valueList.push(context);
          }
          this.valueLeft = this.valueList;
        }
      });
    },
    templateClick(i) {
      this.rowIndex = i;
      const that = this;
      let rowData = this.$refs.multipleTable.list[i];
      this.activeName = "second";
      this.formInline = rowData;
      this.valueRight = [];
      //这里加一个查询
      this.queryPrivilege(1, function() {
        if (this.length > 1) {
          this.sort(function(a, b) {
            return a.batchAssignPrincipleId - b.batchAssignPrincipleId;
          });
        }
        for (var k in this) {
          that.valueRight.push(this[k].batchAssignFactor);
        }
      });
      this.transferKey += 1;
    },
    handleClick(tab, event) {
      this.tab = tab;
      this.event = event;
      const that = this.$refs.multipleTable;
      if (tab.name == "second") {
        // this.queryOriginalDropdownList();
        // let queryObj = {
        //   // 保存mutation
        //   type: "query",
        //   // api配置
        //   apiConfig: veApis.veBatchAllocationQry1,
        //   variables: {
        //     //当前中台使用的名称有dataInfo、info，具体查看API文档
        //     dataInfo: {}
        //   }
        // };
        // var paramD = that.$getParams(queryObj);
        // that.$requestGraphQL(paramD).then(response => {
        //   this.treeData1 = response.data.mdsLookupValueQueryByPage.rows.tree1;
        //   this.treeData2 = response.data.mdsLookupValueQueryByPage.rows.tree2;
        // });
      }
    },
    handleNodeClick1(data) {
      this.selectNode1 = data.label;
    },
    handleNodeClick2(data) {
      this.selectNode2 = data.label;
    },
    addNode() {
      if (this.selectNode1 != "") {
        this.treeData1 = this.treeData1.filter(
          v => v.label != this.selectNode1
        );
        this.treeData2.push({
          label: this.selectNode1
        });
        this.selectNode1 = "";
      }
    },
    back() {
      this.activeName = "first";
    },
    handleReset() {
      this.valueRight = [];
      // if (this.rowIndex != "") {
      //   this.templateClick(this.rowIndex);
      // }
    },
    saveDataNew() {
      const that = this.$refs.multipleTable;
      let data = [];
      for (let k in this.valueRight) {
        data.push({
          orderTypeId: this.formInline.orderTypeId,
          purcashTypeId: this.formInline.purcashTypeId,
          baseSeriesId: this.formInline.baseSeriesId,
          assignPrincipleType: this.formField.assignPrincipleType,
          batchAssignPrincipleId: this.valueRight[k],
          batchAssignFactor: this.valueRight[k],
          batchAssignPriority: k
        });
      }
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veDbBatchAssignPrincipleMutaionSave,
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: data
        }
      };
      var paramD = that.$getParams(queryObj);
      that.$requestGraphQL(paramD).then(response => {
       if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {

        that.$message({
          message: "保存成功",
          type: "success",
          duration: 2000
        });
        }else{
         let msg = response.data[queryObj.apiConfig.ServiceCode].msg;
          that.$message({
            message: msg,
            type: "warning",
            duration: 2000
          });
        }
      });
    },
    templateClickOne(i) {
      this.rowIndex = i;
      const that = this;
      let rowData = this.$refs.multipleTable.list[i];
      this.formInline = rowData;
      //这里加一个查询
      this.queryPrivilege(1, function() {
        that.valueRight = [];
        if (this.length > 1) {
          this.sort(function(a, b) {
            return a.batchAssignPrincipleId - b.batchAssignPrincipleId;
          });
        }
        for (var k in this) {
          that.valueRight.push(this[k].batchAssignFactor);
        }
      });
    },
    //同步
    sync() {
      this.templateClickOne(0);

      const that = this.$refs.multipleTable;
      let selectionData = that.$refs.multipleTable.selection;
      let data = [];

      for (let y in selectionData) {
        for (let k in this.valueRight) {
          data.push({
            orderTypeId: selectionData[y].orderTypeId,
            purcashTypeId: selectionData[y].purcashTypeId,
            baseSeriesId: selectionData[y].baseSeriesId,
            assignPrincipleType: this.formField.assignPrincipleType,
            batchAssignPrincipleId: this.formField.assignPrincipleType,
            batchAssignFactor: this.valueRight[k],
            batchAssignPriority: k
          });
        }
      }
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veDbBatchAssignPrincipleMutaionSave,
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: data
        }
      };
      var paramD = that.$getParams(queryObj);
      that.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {

        that.$message({
          message: "保存成功",
          type: "success",
          duration: 2000
        });
        }else{
         let msg = response.data[queryObj.apiConfig.ServiceCode].msg;
          that.$message({
            message: msg,
            type: "warning",
            duration: 2000
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.app-container {
  padding: 0px 5px 0 5px;
}
/deep/ .el-transfer-panel {
  width: 400px;
  /* height: 500px; */
}
/deep/ .cardUl {
  width: 100%;
  float: left;
}
/deep/ .cardUl li {
  width: 35%;
  float: left;
  list-style-type: none;
}
/deep/ .el-tabs__content {
  background: #fff;
}
/deep/ .el-tabs__header {
  margin: 0 !important;
}
/deep/.text {
  font-size: 14px;
}

/deep/.item {
  padding: 18px 0;
}

/deep/.box-card {
  width: 100%;
}
/deep/.clearfix:before,
/deep/.clearfix:after {
  display: table;
  content: "";
}
/deep/.clearfix:after {
  clear: both;
}
/deep/.el-tree-node:focus > .el-tree-node__content {
  background-color: #ddd !important;
}
/deep/.cardName {
  margin-left: 25px;
  font-size: 14px;
}
/deep/.el-card__body {
  padding: 10px 0 0 10px;
}
/deep/.el-form-item--mini.el-form-item,
.el-form-item--small.el-form-item {
  margin-bottom: 10px;
}
/deep/.el-transfer-panel__body {
  height: 287px;
  font-size: 12px;
}
/deep/.el-transfer-panel .el-transfer-panel__footer {
  text-align: center;
}
/deep/.el-transfer-panel__list {
  height: 99%;
}
/deep/div#fuzzyquery {
    line-height: 32px;
}
</style>

