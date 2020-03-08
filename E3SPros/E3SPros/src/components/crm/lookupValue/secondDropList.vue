<!--
* description: 无联动下拉框-调API取值
* author: tfy
* createdDate: 2019-10-11
-->
<template>
  <section>
    <el-col :span="span">
      <div class="comwidth">
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
          placeholder="请选择"
          @clear="clearCode"
          :clearable="clearable"
          @change="sendCode"
          :disabled="disabled"
          :readonly="readonly"
          size="small"
        >
          <el-option
            v-for="item in optionDatas"
            :key="item[codeField]"
            :label="item[textField]"
            :value="item[codeField]"
          >{{item[textField]}}</el-option>
        </el-select>
        <validateFormate
          :curLabelName="curLabelName"
          :validrule="validrule"
        ></validateFormate>
      </div>

    </el-col>
  </section>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest"; 
import lableName from "@/components/lableName";
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
import validateFormate from "@/components/validateFormate";
export default {
  name: "seconddropList",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labelName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  props: {
     // 值列表类型编码
    lookuptype: { type: String, default: "_is_null_code_" },
    // 获取组件中的名称，如：textField="carBrandCode"
    codeField: { type: String, default: "lookupValueCode" },
    // 获取组件中的名称，如：textField="carBrandName"
    textField: { type: String, default: "lookupValueName" },
    changeCodeArray:{
       type: Array,
      default: function() {
        return [];
      }
    }

  },
   created() {
    this.getData()
    },
  data() {
    return {
      optionDatas:[]
    }
  },
    watch: {
    },
    methods: {
      getData: function() {
            let that = this;
            that.changeCodeArray[0].isEnable=1
            let queryObj = {
                // api配置
                apiConfig: that.lookuptype,
                // 需要调用的API服务配置
                apiServices: [
                    {
                        //表格中台返回网格的字段
                        apiQueryRow:[that.codeField,that.textField]
                    }
                ],
                //条件/实体参数（变量），根据typeParam中的定义配置
                variables: {
                    pageSize: 1000,
                    pageIndex: 1,
                    //当前中台使用的名称有dataInfo、info，具体查看API文档
                    dataInfo: that.changeCodeArray[0]?that.changeCodeArray[0]:{isEnable:"1" } //值列表编码
                }
            };
            let paramD = that.$getParams(queryObj);
            // 调用中台API方法（可复用）
            requestGraphQL(paramD).then(response => {
                if (
                    response.data[queryObj.apiConfig.ServiceCode].result ==
                        "1" &&
                    response.data[queryObj.apiConfig.ServiceCode].rows != ""
                ) {
                    that.optionDatas =
                        response.data[queryObj.apiConfig.ServiceCode].rows;
                }
            });
        },
        getNewData(){
            let that=this
            that.value=this.Province.value
        },
    reset:function(){
      let that=this
      this.value=''
    },
    sendCode(value) {
      var that = this;
      var option = that.optionDatas;
      let j = value;
      for (var i = 0; i < option.length; i++) {
        if (option[i].provinceId == j) {
          let name = option[i][that.textField];
          debugger
          this.$emit("changeCode",j,name,this);
        }
      }
    },
    }
  
};
</script>
