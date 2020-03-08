<!--
* description: 批次分配车系设置
* author:yxyan
* createdDate: 2019-07-31
-->
<template>
  <div class="app-container app-container-table" ref="batchTime">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="save()">{{$t('sys.button.save')}}</el-button>
      <!-- 保存 -->
      <el-button size="small" @click="query()">{{$t('sys.button.reset')}}</el-button>
      <!-- 重置 -->
    </div>

    <div class="filter-container filter-title">{{$t('sys.content.searchTitle')}}</div>
    <!-- 查询区-->
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <carBrandRadio :span="12" :isMul="isMul" :code="code" @changeCode="getBrandCodeRadio" />
      </el-row>
    </div>
    <div class="filter-container filter-title">批次分配作废方式设置</div>
    <div class="filter-container filter-params">
      <el-row :gutter="24">
        <el-radio-group class="invalidWay" v-model="radio">
          <el-radio :gutter="12" :label="3">按月作废采购单</el-radio>
        </el-radio-group>
        <el-radio-group class="invalidWay" v-model="radio">
          <el-radio :gutter="12" :label="6">按节作废采购单</el-radio>
        </el-radio-group>
      </el-row>
    </div>
    <div class="filter-container filter-title">采购单类型</div>
    <!-- 设置区-->
    <div class="filter-container purCheckbox">
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
      >全选</el-checkbox>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox
          v-for="item in cities"
          :label="item.orderTypeName"
          :key="item.orderTypeId"
          :value="item.orderTypeId"
        ></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
import { getList } from "@/api/table";
import carBrandRadio from "@/components/org/carBrandRadio/carBrandRadio";
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "invalidWay",
  components: {
    carBrandRadio
  },
  data() {
    return {
      //查询数据
      isMul: false, //品牌单选
      code: "1", //默认选中
      isIndeterminate: true,
      checkAll: false,
      listQuery: {
        carBrandCode: 1
      },
      radio: 3,
      checkedCities: [],
      cities: {}
    };
  },
  created() {
    this.query();
    this.queryCheckbox();
    this.setHeight();
  },
  methods: {
    getBrandCodeRadio(val) {
      this.listQuery.carBrandCode = val;

      this.query();
    },
    query() {
      this.listLoading = true;
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: veApis.veDbBatcinvalidWayQuery,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["InvalidWay", "PurType"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // pageSize: that.listQuery.pageSize,
          // pageIndex: page || that.listQuery.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.queryDatas = response.data[queryObj.apiConfig.ServiceCode].rows;
          debugger;
          that.checkedCities = that.queryDatas[0].PurType;
          that.radio = that.queryDatas[0].InvalidWay;
          that.listLoading = false;
        }
      });
    },
    queryCheckbox() {
      this.setHeight();

      const that = this;
      let queryObj = {
        // api配置
        apiConfig: veApis.veDbOrderTypeBrandQueryFindAll,
        // 需要调用的API服务配置
        // 表格中台返回网格的字段
        apiQueryRow: [
          "groupCode",
          "carBrandName",
          "carBrandCode",
          "orderTypeId",
          "orderTypeName",
          "orderNo",
          "isOnlineStatus",
          "isBatchStatus",
          "isEnable"
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // pageSize: that.listQuery.pageSize,
          // pageIndex: page || that.listQuery.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          debugger;
          that.cities = response.data[queryObj.apiConfig.ServiceCode].rows;
          //   that.cities =
          that.listLoading = false;
        }
      });
    },
    //全部清除
    clear() {},
    //保存
    save() {
      debugger;
      const that = this;

      let queryObj = {
        // 保存mutation
        type: "mutation",
        typeParam: "($dataInfo:[InputVeBuPurOrderD])",
        // api配置
        apiConfig: veApis.veDbBatcinvalidWaySave,
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            radio: that.radio,
            PurType: that.checkedCities
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      that.$requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          this.$message({
            message: "保存成功",
            type: "success",
            duration: 1000
          });
          that.query();
        }
      });
    },

    //高度自适应
    setHeight() {
      // debugger
      //   let height= this.$refs.batchTime.height();
    },
    handleCheckAllChange(val) {
      debugger;
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      debugger;
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>
<style scoped>
.center {
  width: 80%;
  float: left;
}

.top {
  height: 30px;
}
.bottom {
  height: 387px;
  overflow-y: scroll;
}

.right /deep/ .el-checkbox__label {
  display: none;
}
/deep/ .el-checkbox {
  width: 20%;
  padding: 10px 0;
}
/deep/ .invalidWay {
  float: left;
  width: 20%;
}
/deep/ .purCheckbox {
  padding-left: 90px;
  height: 290px;
}
</style>
