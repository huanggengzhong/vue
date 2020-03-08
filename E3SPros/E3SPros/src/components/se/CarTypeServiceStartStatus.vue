<template>
    <section>
        <el-col :span="span" >
            <label >启动状态</label>
            <el-select
            v-model="codeInside"
            placeholder="请选择"
            clearable
            @change="sendCode"
            size="small">
            <el-option v-for="item in optionDatas" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </el-col>
    </section>
</template>
<script>
import { getSetStatus } from '@/api/components'
export default {
  props:{
    span:{
      type:Number,
      default:function(){
        return 6
      }
    },
    code:{
      type:String,
      default:function(){
        return '0'
      }
    }
  },
  data() {
    return {
      codeInside: this.code,
      listLoading: true,
      optionDatas: [
        {
          value:'0',
          label:'全部'
        },
        {
          value:'1',
          label:'启动'
        },
        {
          value:'2',
          label:'禁用'
        }
      ],
      listQuery: {
      },
    }
  },
  created() {
    //this.fetchData()
  },
  methods: {
    // fetchData() {
    //   this.listLoading = true
    //   getSetStatus(this.listQuery).then(response => {
    //     this.listLoading = false
    //     this.optionDatas = response.data.rows
    //   })
    // },
    sendCode() {
      this.$emit("changeCode",this.codeInside)
    },
    reset(){
      this.codeInside = '0';
    }
  }
}
</script>
<style scoped>
.margin-r-0{
  margin-right: 0;
}
</style>