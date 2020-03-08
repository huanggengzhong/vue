<template>
  <section>
    <el-col
      :span='24'
      class="brd"
    >
      <label class="lableClass" >{{$t('org.label.carBrandCn')}}</label>
      <el-radio-group
        class="brands"
        @change="sendCode"
        v-model="codeInside"
      >

        <el-radio
          v-for="item in optionDatas"
          :key="item.carBrandCode"
          :label="item.carBrandCode"
          :value="item.carBrandCode"
        >{{item.carBrandCn}}</el-radio>

        <!-- <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio> -->
      </el-radio-group>
    </el-col>
  </section>
</template>

<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  props: {
    code: {
      type: String,
      default: function() {
        return "";
      }
    }
  },

  data() {
    return {
      codeInside: this.code,
      listLoading: true,
      optionDatas: [],
      listQuery: {
        isEnable: '1'
      }
    };
  },
  created() {
    this.queryTable();
  },
  methods: {
    queryTable(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: orgApis.mdmCarBrandQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "carBrandCn",
              "carBrandCode",
              "carBrandEn",
              "isEnable",
              "updateControlId"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.listQuery.pageSize,
          pageIndex: page || that.listQuery.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[orgApis.mdmCarBrandQueryByPage.ServiceCode].result ===
            "1" &&
          response.data[orgApis.mdmCarBrandQueryByPage.ServiceCode].rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex =
              response.data[
                orgApis.mdmCarBrandQueryByPage.ServiceCode
              ].pageIndexs;
            that.listQuery.pageSize =
              response.data[orgApis.mdmCarBrandQueryByPage.ServiceCode].pages;
            that.listQuery.pageTotal =
              response.data[orgApis.mdmCarBrandQueryByPage.ServiceCode].records;
          }
          that.optionDatas =
            response.data[orgApis.mdmCarBrandQueryByPage.ServiceCode].rows;
          that.listLoading = false;
        }
      });
    },
    sendCode() {
      this.$emit("changeCode", this.codeInside);
    }
  }
};
</script>
<style scoped>
.lableClass{
  width: 9% !important;
  text-align: right;

}
.brd {
  text-align: left;
}
.brands {
  width: 85%;
}
.brands label {
  width: 20%;
}
</style>