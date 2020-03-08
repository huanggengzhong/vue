<!--
* description: 仓库类型下拉框（多选，单选）,支持搜索
* author: ydche
* createdDate: 2019-09-11
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
        :multiple="isMul"
        collapse-tags
        :filterable="filterable"
        v-model="modelCode"
         :placeholder="placeholder"
        @clear="clearCode"
        :clearable="clearable"
        @change="sendCode"
        :disabled="disabled"
        size="small"
      >
        <el-option
          v-for="item in optionDatas"
          :key="item.lookupValueCode"
          :label="item.lookupValueName"
          :value="item.lookupValueCode"
        >{{item.lookupValueName}}</el-option>
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
export default {
  name: "carBrand",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labenName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
       placeholder: this.$t('sys.tips.esTip0'),
      curLabelName: this.labelName === "" ? "仓库类型" : this.labelName,
      // API配置对象
      apiConfig: orgApis.mdsLookupValueQueryByPage,
      listQuery:{
          lookupValueCode:'VE0019'
      },
      // 表格中台返回网格的字段
      apiQueryRow: [
        'lookupTypeCode',
        'lookupTypeName',
        'lookupValueCode',
        'lookupValueName'
      ],
    //   optionDatas:[
    //       {
    //         value:'1',
    //         label:'本店仓库',
    //       },
    //       {
    //         value:'2',
    //         label:'直营二网仓库',
    //       },
    //       {
    //         value:'3',
    //         label:'非直营二网仓库',
    //       },
    //   ]
    };
  },
  created() {

  },
  methods: {
    queryTable(apiConfig, apiQueryRow) {
      const queryObj = {
        // api配置
        apiConfig: apiConfig,
        // 需要调用的API服务配置
        apiServices: [{
          // 表格中台返回网格的字段
          apiQueryRow: apiQueryRow
        }],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 100,
          pageIndex: 1,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {lookupTypeCode:'VE0119'}
        }
      }
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj)
      // 检查查询结果已经存在且未过期
      var cacheData = this.$OrgCacheData.CacheObject[queryObj.apiConfig.ServiceCode]
      if (cacheData) {
        this.optionDatas = cacheData.getData(queryObj) || []
      } else {
        this.optionDatas = []
      }
      // var cacheData = this.$OrgCacheData.CacheObject.cacheDatas.filter(o => o.cacheName === queryObj.apiConfig.ServiceCode && o.useCache === true)
      if (this.optionDatas.length === 0) {
        // 不存在则请求中台API数据
        // 调用中台API方法（可复用）
        this.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === '1' && response.data[queryObj.apiConfig.ServiceCode].rows) {
            this.optionDatas = response.data[queryObj.apiConfig.ServiceCode].rows
            // 赋值缓存
            if (cacheData) {
              cacheData.setData(queryObj, response.data[queryObj.apiConfig.ServiceCode].rows)
            }
          }
        })
      }
    },
  }
};
</script>
