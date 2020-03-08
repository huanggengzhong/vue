<template>
    <section>
        <el-col :span="span" >
            <label>车系</label>
            <el-select
            :multiple="isMul"
            collapse-tags
            filterable
            v-model="showSeries"
            placeholder="请选择"
            clearable
            @change="sendCode"
            size="small">
            <el-option v-for="item in optionDatas" :key="item.CAR_SERIES_CODE" :label="item.CAR_SERIES_CN" :value="item.CAR_SERIES_CODE"></el-option>
            </el-select>
        </el-col>
    </section>
</template>
<script>
import { seApis } from '@/api/graphQLApiList/se'
import { requestGraphQL } from '@/api/commonRequest'
export default {
  name:"carSeries",
  props:{
    // 行内占比
    span:{
      type:Number,
      default:function(){
        return 6
      }
    },
    // 默认选中
    code:{
      type:null,
    },
    // 单选多选
    isMul:{
      type:Boolean,
      default:function(){
        return true
      }
    }
  },
  data() {
    return {
      showSeries:this.code,
      listLoading: true,
      optionDatas: [
      ],
      initData:{
        token	:null,
        OEM_CODE:null,	
        GROUP_CODE:null,	
        Car_Brand_Code:null,	
        CAR_BRAND_CN:null,	
        CAR_BRAND_EN:null	
      },
      initResponData:{
        'T.CAR_BRAND_CODE':null,		
        'T.CAR_BRAND_CN':null,		
        'T.CAR_BRAND_EN':null	
      },
      listQuery: {
        token:null,
        OEM_CODE:null,
        GROUP_CODE:null,
        CAR_SERIES_CN:null,
        CAR_SERIES_CODE:null,
        CAR_BRAND_CODE:null,
      },
    }
  },
  created() {
    this.queryTable()
  },
  mounted() {
    // 调用AppMain中的方法设置网格高度（自适应）
    if (this.$parent && this.$parent.setTableHeight) this.$parent.setTableHeight()
  },
  methods: {
    queryTable(){
        const that = this
        let queryObj = {
          // api配置
          apiConfig: seApis.ChooseCarSeries002,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
             apiQueryRow: ['CAR_SERIES_CODE', 'CAR_SERIES_CN', 'CAR_SERIES_EN', 'CAR_BRAND_CODE', 'CAR_BRAND_CN', 'CAR_BRAND_EN']
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            // pageSize: that.listQuery.pageSize,
            // pageIndex: page || that.listQuery.pageIndex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.listQuery
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
            console.log(response)
            if(response.data[seApis.ChooseCarSeries002.ServiceCode].result === '1' && response.data[seApis.ChooseCarSeries002.ServiceCode].rows!=''){
              that.optionDatas = response.data[seApis.ChooseCarSeries002.ServiceCode].rows;
            }
        })
    },
    sendCode() {
      this.$emit("changeCode",this.showSeries)
    },
    seles(){
      this.queryTable()
    },
    reset(){
      this.showSeries = []
    }
  }
}
</script>
