<!--
* description: 经销商目标量确认
* author: xulfan
* createdDate: 2019-09-21
* logs:
*   2019-09-21 未完成页面开发，待课题解决。 xulfan
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button size="small" @click="queryTable()">{{ $t('org.label.GenConfirmation') }}</el-button>
      <el-button size="small" @click="confirm()">{{ $t('sys.button.confirm') }}</el-button>
    </div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <carBrand
          :span="6"
          :key="carBrandKey"
          v-model="queryObj.carBrandCode"
          @changeCode="getBrandCode"
        />
        <el-col :span="6">
          <label>目标量类型</label>
          <el-select
            v-model="value1"
            multiple
            collapse-tags
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
    <div class="filter-container filter-title" ref="resultTitleHeight">设置区</div>
    <div
      class="filter-container filter-params"
      ref="conHeight"
      :style="{'height':tableHeight+'px'}"
      v-loading="loading"
    >
      <div class="xxx"></div>
    </div>
  </div>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import carBrand from "@/components/org/carBrand/carBrand";

export default {
  name: "dlrTargetConfirm",
  components: {
    carBrand
  },
  data() {
    return {
      options: [
        {
          value: "1",
          label: "交车目标"
        },
        {
          value: "2",
          label: "提车目标"
        }
      ],
      value1: "",
      //设置网格总共的条数，查询完更改
      pageTotal: 0,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 16
      },
      queryObj: {
        carBrandCode: this.$store.getters.orgInfo.BRAND_CODE
      },
      //表单查询数据
      formField: {
       
      },
      tableHeight: null,
      loading: false
    };
  },
  watch: {},
  mounted() {
    this.$nextTick(() => {
      var appMainHeight = this.$utils.getAppMainHeight(this.$route.path, this);
      if (appMainHeight > 0) {
        this.tableHeight =
          appMainHeight -
          this.$refs.searcheHeight.offsetHeight -
          this.$refs.conHeight.offsetHeight -
          this.$refs.resultTitleHeight.offsetHeight;
      }
    });
  },
  methods: {
    // 查询网格
    queryTable(page) {
      const that = this;
      that.loading = true;
      let queryObj = {
        // api配置
        apiConfig: veApis.x,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [""]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.listQuery.pageSize,
          pageIndex: page || that.listQuery.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.queryObj
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.pageTotal =
            response.data[queryObj.apiConfig.ServiceCode].records;
          that.formField =
            response.data[queryObj.apiConfig.ServiceCode].rows;
        }
      });
      this.loading = false;
    },

    //保存
    confirm() {
      
      }
    },
    //重置
    reset() {
      this.carBrandKey += 1;
    }
};
</script>
<style scoped>
.xxx {
  position: relative;
}
/deep/ .el-icon-time:before {
  position: relative;
  left: -29px;
}
</style>
