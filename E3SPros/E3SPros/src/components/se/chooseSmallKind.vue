<template>
    <section>
        <el-col :span="span" >
            <label>维修小类</label>
            <el-select
            :multiple="isMul"
            collapse-tags
            filterable
            v-model="showSmallKind"
            placeholder="请选择"
            clearable
            @change="sendCode"
            size="small">
            <el-option v-for="item in optionDatas" :key="item.repairSmallKindCode" :label="item.repairSmallKindName" :value="item.repairSmallKindCode"></el-option>
            </el-select>
        </el-col>
    </section>
</template>
<script>
import { seApis } from '@/api/graphQLApiList/se'
import { requestGraphQL } from '@/api/commonRequest'
export default {
  name:"repairSmallKind",
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
      showSmallKind: this.code,
      listLoading: true,
      optionDatas: [
      ],
      listQuery: {
        oemcode: null,
        groupcode: null,
        operatePartId: null,
      },
    }
  },
  created() {
    //this.queryTable()
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
          apiConfig: seApis.seDbOpratePlaceQueryFindSmalll,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
              apiQueryRow: ['wiSmallKindId', 'repairSmallKindCode', 'operatePartCode', 'repairSmallKindName', 'operatePartId', 'isSystem','dlrCode','dlrId',
             'oemId','oemCode','groupId','groupCode','creator','createdDate','modifier','lastUpdatedDate','isEnable','updateControlId']
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.listQuery
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
            //console.log(response)
            //console.log(response.data[seApis.seDbOpratePlaceQueryFindSmalll.ServiceCode].rows)
            if(response.data[seApis.seDbOpratePlaceQueryFindSmalll.ServiceCode].result === '1' && response.data[seApis.seDbOpratePlaceQueryFindSmalll.ServiceCode].rows!=''){
              that.optionDatas = response.data[seApis.seDbOpratePlaceQueryFindSmalll.ServiceCode].rows;
            }
        })
    },
    sendCode() {
      this.$emit("changeCode", this.showSmallKind)
    },
    seles(){
      this.queryTable()
    },
    initData(val) {
      this.listQuery.operatePartId = val
      this.queryTable()
    },
     reset() {
      this.showSmallKind = ''
    }
  }
}
</script>
