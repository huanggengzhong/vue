/**
* description: 值列表类型下拉框（多选，单选）,支持搜索
* author: liyanm
* createdDate: 2019-07-18
*/
<template>
    <section>
        <el-col :span="span" >
           <label v-if="isshow">{{lookupTypelable}}</label>
            <el-select v-if="changeType == '0'"
            :multiple="isMul"
            collapse-tags
            filterable
            v-model="codeInside"
             :placeholder="placeholder"
            clearable
            @change="sendCode"
            size="small">
            <el-option v-for="item in list"  :key="item.purcashTypeId" :label="item.lookupValueName" :value="item.lookupValueCode">{{item.lookupValueName}}</el-option>
            </el-select>
            <el-select v-if="changeType == '1'"
            :multiple="isMul"
            :disabled='disabled'
            collapse-tags
            filterable
            v-model="codeInside"
             :placeholder="placeholder"
            clearable
            @change="sendCode"
            size="small">
            <el-option v-for="item in selectDates"  :key="item.lookupValueCode" :label="item.lookupValueName" :value="item.lookupValueCode">{{item.lookupValueName}}</el-option>
            </el-select>
        </el-col>
    </section>
</template>
<script>
import { orgApis } from '@/api/graphQLApiList/org'
import { requestGraphQL } from '@/api/commonRequest'
export default {
  name: 'orglookupType',
  props:{
    // 行内占比
    span:{
      type:Number,
      default:function(){
        return 6
      }
    },
     placeholder: this.$t('sys.tips.esTip0'),
    isshow:{
       type:Boolean,
      default:function(){
        return true
      }//是否渲染lableName
    },
    lookupTypelable:'',
    changeType:{
      type: String,
       default: "0",
       },//0非联动，1联动
    // 默认选中
    code:{
      type:String,
      default:function(){
        return ''
      }
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
      codeInside: '',
      bigvalue:{},
      listLoading: true,
      showName:'',
      disabled:true,
      optionDatas: [
      ],
      listQuery: {
      },
      selectDates:[
      ],
      list: null,
      purcashTyValue:{},
    }
  },
  created() {
          this.queryTable()
  },
  methods: {
        queryTable(page){
          const that = this;
          that.currentRow = null;
          that.listLoading = true;
          let queryObj = {
            // api配置
            apiConfig: orgApis.mdsLookupTypeQueryByPage,
            // 需要调用的API服务配置
            apiServices: [{
                //表格中台返回网格的字段
                apiQueryRow:['lookupTypeCode','lookupValueCode','lookupValueName']
            }],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              pageSize: that.listQuery.pageSize,
              pageIndex: page || that.listQuery.pageIndex,
              //当前中台使用的名称有dataInfo、info，具体查看API文档
              dataInfo: that.formField
            }

        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
          if(response.data[queryObj.apiConfig.ServiceCode].result === '1' && response.data[queryObj.apiConfig.ServiceCode].rows){
              if(page){
                  //查询完返回指定的page页数
                  that.listQuery.pageIndex= page;
              }
              that.pageTotal = response.data[queryObj.apiConfig.ServiceCode].records;
              that.list = response.data[queryObj.apiConfig.ServiceCode].rows;
              that.listLoading = false;
            }
        })
    },
      selectItems(){
        debugger
        this.selectDates=[];
        let map = this.list,
        dest = [];
        for (let i = 0; i < map.length; i++) {
          if (map[i].lookupTypeCode == this.bigvalue) {
          this.selectDates.push(map[i])
        }
        }
        return dest
      },//查询符合编码的直列表
      // purgroup(){
      //   let map = this.selectDates,
      //   dest = [];
      //   for (let i = 0; i < map.length; i++) {
      //     if (map[i].lookupTypeCode == this.lookupTypeCode) {
      //     this.purcashTyValue=map[i]
      //   }
      //   }
      //   return dest
      // },//赋值选中对象给父组件
    sendCode() {
        this.$emit("changeCode",this.codeInside)
    }
  }
}
</script>
