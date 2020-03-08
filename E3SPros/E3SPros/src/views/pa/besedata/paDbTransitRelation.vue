<!--
* description: 运输方式与订单类型维护
* author: chchhui
* createdDate: 2019-07-10
-->
<template>
  <div class="app-container app-container-table DbTransit">
    <div class="filter-container filter-button">
      <el-button size="small" type="primary" plain @click="selectTransit">选择运输方式</el-button>
      <el-button size="small" @click="save">保存</el-button>
    </div>
    <el-row :gutter="24">
      <el-col :span="10">
        <div class="filter-container filter-title">订单类型列表</div>
        <el-table
          :data="list"
          element-loading-text="Loading"
          border
          fit
          stripe
          highlight-current-row
          @row-click="rowClick"
        >
          <el-table-column prop="id" label="序号" type="index" width="60" align="center"></el-table-column>
          <el-table-column prop="orderTypeCode" label="订单类型编码" width="120" align="center"></el-table-column>
          <el-table-column prop="orderTypeName" label="订单类型名称" align="center"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="14">
        <div class="filter-container filter-title">订单对应运输方式</div>
        <el-table
          :data="getRightList"
          element-loading-text="Loading"
          border
          fit
          stripe
          highlight-current-row
        >
          <el-table-column prop="id" label="序号" type="index" width="60" align="center"></el-table-column>
          <el-table-column prop="transitTypeCode" label="运输方式编码" width="120" align="center"></el-table-column>
          <el-table-column prop="transportTypeName" label="运输方式名称" align="center"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!-- 运输方式选择弹窗 -->
    <el-dialog
      title="选择运输方式"
      :visible.sync="dialogFormVisible"
      :append-to-body="true"
      @close="closeDialog"
      width="45%"
    >
      <el-col :span="24">
        <el-table
          :data="transitTypeChoose"
          element-loading-text="Loading"
          height="170"
          border
          fit
          stripe
          highlight-current-row
          @select="isSelect"
          @select-all="isSelect"
          ref="listPowerSupplyTab"
        >
          <el-table-column prop="id" label="序号" type="index" width="60%" align="center"></el-table-column>
          <el-table-column type="selection" width="55" label="选择+" />
          <el-table-column prop="transitTypeCode" label="运输方式编码" width="120%" align="center"></el-table-column>
          <el-table-column prop="transportTypeName" label="运输方式名称" width="200%" align="center"></el-table-column>
          <el-table-column prop label align="center"></el-table-column>
        </el-table>
      </el-col>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getpaDbTransitList } from "@/api/pa/paDbTransitRelation";
import { doQueryMdsLookupValueByPage } from "@/api/pa/basedata/queryLookupValue";
import { requestGraphQL } from "@/api/commonRequest";
import { paApis } from "@/api/graphQLApiList/pa";
import { orgApis } from "@/api/graphQLApiList/org";
import lableName from "@/components/lableName";
export default {
  name: "paysfsyddlxgxwh",
  components: {
    lableName
  },
  data() {
    return {
      dialogFormVisible: false,
      transitVisible: false,
      list: [],
      typeCode: [],
      selectList: [],
      getRightList: [],
      i: undefined,
      transitTypeCode: undefined,
      transportTypeName: undefined,
      formCode: {
        transitTypeCode: "",
        transportTypeName: ""
      },
      transitTypeChoose: [],
      pageIndex: 1,
      pageSize: 10,
      listQuery: {
        orderTypeCode: "",
        orderTypeName: "",
        transitTypeCode: "",
        transportTypeName: ""
      }
    };
  },
  created() {
    this.getOrderType();
  },
  methods: {
    //获取订单方式值列表
    getOrderType() {
      doQueryMdsLookupValueByPage(9999, 1, {
        isEnable: "1",
        lookupTypeCode: "PA0025"
      }) //值类型编码
        .then(response => {
          var retData =
            response.data[orgApis.mdsLookupValueQueryByPage.ServiceCode];
          if (retData.result === "1" && retData.rows !== "") {
            const tempList = retData.rows;
            var tempOptions = [];
            tempList.forEach(row => {
              tempOptions.push({
                orderTypeCode: row.lookupValueCode,
                orderTypeName: row.lookupValueName
              });
            });
            this.list = tempOptions; //下拉列表赋值
            //console.log(this.transitTypeChoose);
          }
        });
    },
    fetchData(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: paApis.paDbTransitRelationQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "orderTypeCode",
              "orderTypeName",
              "transitTypeCode",
              "transportTypeName"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.pageSize,
          pageIndex: page || that.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      //console.log(paramD)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        //console.log(response)
        if (
          response.data[paApis.paDbTransitRelationQueryFindAll.ServiceCode]
            .result === "1"
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.getRightList =
            response.data[
              paApis.paDbTransitRelationQueryFindAll.ServiceCode
            ].rows;
          that.listLoading = false;
        } else {
          that.listLoading = false;
        }
      });
    },

    //选择运输方式
    selectTransit() {
      if (this.listQuery.orderTypeCode == "") {
        this.$alert("请选择一种订单类型", "提示", {
          confirmButtonText: "确定"
        });
      } else {
        doQueryMdsLookupValueByPage(9999, 1, {
          isEnable: "1",
          lookupTypeCode: "PA0026"
        }) //值类型编码
          .then(response => {
            var retData =
              response.data[orgApis.mdsLookupValueQueryByPage.ServiceCode];
            if (retData.result === "1" && retData.rows !== "") {
              const tempList = retData.rows;
              var tempOptions = [];
              tempList.forEach(row => {
                tempOptions.push({
                  transitTypeCode: row.lookupValueCode,
                  transportTypeName: row.lookupValueName
                });
              });
              this.transitTypeChoose = tempOptions; //下拉列表赋值
              //console.log(this.transitTypeChoose);
            }
          });
        this.dialogFormVisible = true;
        if (!this.dialogFormVisible) {
          this.getRightList = this.transitType;
        }
      }
    },
    isSelect(selection) {
      this.selectList = selection;
    },
    closeDialog() {
      this.$refs.listPowerSupplyTab.checked = false;
    },
    rowClick(row) {
      this.typeCode = row;
      this.listQuery = row;
      this.fetchData();
    },
    confirm() {
      this.getRightList = this.selectList;
      this.dialogFormVisible = false;
      this.transitVisible = false;
    },
    save() {
      const that = this;
      let queryObj = {
        //保存需要传 type="mutation"
        type: "mutation",
        typeParam:
          "($info:InputPaDbTransitRelation,$infos:[InputPaDbTransitRelation])",
        // api配置
        apiConfig: paApis.paDbTransitRelationMutationSave,
        // 需要调用的API服务配置
        apiServices: [
          {
            apiServiceParam: "(info:$info,infos:$infos)"
            //表格中台返回网格的字段
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          info: that.typeCode,
          infos: that.getRightList
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      requestGraphQL(paramD).then(response => {
        if (
          response.data[paApis.paDbTransitRelationMutationSave.ServiceCode]
            .result === "1"
        ) {
          this.$message({ message: "保存成功", type: "success" });
          this.fetchData();
        } else {
          this.listLoading = false;
        }
      });
    }
  }
};
</script>

