<!--
* description: 车型下拉框（多选，单选）,支持搜索
* author: luojx
* createdDate: 2019-07-27
* 增加文字溢出效果 liyam: 2019-08-5
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
-->
<template>
  <section>
    <el-col :span="span">
      <lableName
        :curLabelName="curLabelName"
        :isShowLabel="isShowLabel"
        :isRequire="isRequire"
      ></lableName>
      <el-select
        multiple
        collapse-tags
        filterable
        v-model="modelCode"
        placeholder="请选择"
        clearable
        @change="sendCode"
        :disabled="disabled"
        size="small"
      >
        <el-option
          v-for="(item, i) in optionDatas"
          :key="`${item.carSeriesCode}_${i}`"
          :label="item.carSeriesCn"
          :value="item.carSeriesCode"
        ></el-option>
      </el-select>
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      ></validateFormate>
    </el-col>
  </section>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
import { seApis } from "@/api/graphQLApiList/se";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "carBrand",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labenName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  props: {
    carBrandCode: {
      type: String,
      default: ""
    }
  },
  watch: {
    carBrandCode: function(n, o) {
      this.optionDatas = [];
      this.modelCode = [];
      if (n !== "") {
        this.fetchData();
      }
    }
  },
  data() {
    return {
      // 下拉查询条件
      curLabelName: this.labelName === "" ? "车型" : this.labelName
    };
  },
  created() {},
  methods: {
    fetchData() {
      const that = this;
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfo: " +
          seApis.seChooseCarSeriesQueryFind.InputType +
          ")",
        // 请求API
        apiUrl: seApis.seChooseCarSeriesQueryFind.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: seApis.seChooseCarSeriesQueryFind.ServiceCode,
            // API服务编码&参数
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            // 表格中台返回网格的字段
            apiQueryRow: ["carSeriesCn", "carSeriesCode"]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.listQuery.pageSize,
          pageIndex: that.listQuery.pageIndex,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            carBrandCode: that.carBrandCode,
            isEnable: "1"
          }
        }
      };
      //转换了中台请求格式数据
      let paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.result === "1" &&
          response.data[seApis.seChooseCarSeriesQueryFind.ServiceCode]
            .result === "1"
        ) {
          that.options =
            response.data[seApis.seChooseCarSeriesQueryFind.ServiceCode].rows;
        } else {
          this.$message({
            message: "查询失败：" + response.msg,
            type: "warn",
            uration: 2000
          });
        }
        that.listLoading = false;
      });
    }
  }
};
</script>
