<template>
    <section>
        <el-col :span="span" >
          <i style="color:red" v-if="this.redDot">*</i>
            <label>{{this.title}}</label>
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
        return '1'
      }
    },
    title:{
      type:String,
      default:function(){
        return ''
      }
    },
    redDot:{
      type:Boolean,
      default:function(){
        return true
      }
    },
  },
  data() {
    return {
      codeInside: this.code,
      listLoading: true,
      index:'',
      optionDatas: [
        {
          value:'1',
          label:'启动',
        },
        {
          value:'0',
          label:'停用',
        }
      ],
      listQuery: {
      },
    }
  },
  created() {
   // this.fetchData()
  },
  methods: {
    /*fetchData() {
      this.listLoading = true
      getSetStatus(this.listQuery).then(response => {
        this.listLoading = false
        this.optionDatas = response.data.rows
      })
    },*/
    getDatas(date){
      this.codeInside = date
      // if(this.index !=''){
      //   for( let i of this.optionDatas){
      //     if(this.index == i.label){
      //       this.index = i.value;
      //       console.log(this.index);
      //       return;
      //     }
      //   }
      // }
    },
    sendCode() {
      this.$emit("changeCode",this.codeInside)
    },
    reset(){
      this.codeInside = ''
    }
  }
}
</script>