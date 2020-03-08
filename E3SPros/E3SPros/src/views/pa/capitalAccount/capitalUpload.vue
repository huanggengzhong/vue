<!--
* description: 经销商资金作业批量打入
* author: chchhui
* createdDate: 2019-08-9
* logs：
*  20190809 新增页面功能
-->
<template>
  <section>
    <el-dialog
      title="经销商资金批量导入"
      :visible.sync="capitalUploadVisible"
      width="72%"
      @close="sendCode"
      ref="detailCode"
      :append-to-body="true"
    >
      <div class="filter-container filter-button">
        <el-button type="primary" size="small" @click="intoInfo">导入</el-button>
        <el-button size="small" @click="submit">保存</el-button>
        <el-button size="small" @click="delInfo">删除</el-button>
      </div>
      <div class="filter-container filter-params" ref="conHeight">
        <el-col :span="20" class="uploadtext">
          <label>选择文件</label>
          <el-input placeholder="请选择导入文件" size="small" />
          <a href="#" class="link">导入模板下载</a>
        </el-col>
      </div>
      <el-table
        :data="list"
        element-loading-text="Loading"
        border
        height="270"
        fit
        stripe
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
        @select="getRowCode"
      >
        <el-table-column prop="id" label="序号" type="index" width="60" align="center"></el-table-column>
        <el-table-column type="selection" width="55" label="选择+" />
        <el-table-column prop="dlrCode" label="经销商编码" width="100" align="center"></el-table-column>
        <el-table-column prop="dlrShortName" label="经销商简称" width="150" align="center"></el-table-column>
        <el-table-column prop="pvAccount" label="收款账户" align="center" width="100"></el-table-column>
        <el-table-column prop="tranAmount" label="金额" width="100" align="center"></el-table-column>
        <el-table-column prop="businessTypeName" label="资金操作类型" align="center" width="120"></el-table-column>
        <el-table-column prop="businessClassName" label="明细类别" align="center" width="120"></el-table-column>
        <el-table-column prop="businessDate" label="汇款日期" width="150" align="center"></el-table-column>
        <el-table-column prop="remark" label="备注" align="center"></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, sizes, ->, total"
        prev-text="上一页"
        next-text="下一页"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="list?list.length:0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-dialog>
  </section>
</template>
<script>
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  components: {},
  props: {
    capitalUploadVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    editData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      list: [],
      saveList: [],
      pageSize: 20,
      pageIndex: 1,
      listQuery: {
        oemCode: undefined,
        groupCode: undefined,
        dlrId: undefined,
        businessDateBeg: undefined,
        businessDateEnd: undefined
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {},
  methods: {
    // 删除选中的信息
    delInfo() {},
    getRowCode(selection) {
      this.saveList = selection;
    },
    // 导入Excel文档
    intoInfo() {},

    // 保存选中的信息
    submit() {
      const that = this;
      let queryObj = {
        //保存需要传 type="mutation"
        type: "mutation",
        // api配置
        apiConfig: paApis.veBuDlrAccountRInfoMutationWorkBatchSave,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.saveList
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      requestGraphQL(paramD).then(response => {
        if (
          response.data[
            orgApis.veBuDlrAccountRInfoMutationWorkBatchSave.ServiceCode
          ].result === "1"
        ) {
          that.capitalUploadVisible.default = function() {
            return true;
          };
        }
      });
    },

    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.frozenMoneyQurey();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.frozenMoneyQurey();
    },
    sendCode() {
      this.$emit("changeCode", false);
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .filter-params .el-col label {
  width: 7%;
}
/deep/ .el-dialog__wrapper .el-dialog {
  height: 450px;
}
/deep/ .uploadtext {
  text-align: left !important;
}
/deep/ .link {
  color: blue;
  font-size: 14px;
  margin-left: 5px;
  text-decoration: underline !important;
}
</style>
