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
        return ''
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
      index:'',
      listLoading: true,
      optionDatas: [
         {
          value: '1',
          label: '机电'
        },
        {
          value: '2',
          label: '钣喷'
        },
        {
          value: '3',
          label: '质检'
        },
        {
          value: '4',
          label: '清洁'
        },
      ],
      listQuery: {
      },
    }
  },
  created() {
    //this.fetchData()
    /*console.log(this.date);
    if(this.date !=''){
        for( let i of this.optionDatas){
            if(this.date == i.label){
                console.log(i);
                this.index = i.label;
                return;
            }
        }
    }*/
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
    },
    sendCode() {
      console.log(this.codeInside);
      this.$emit("changeCode",this.codeInside)
    },
    reset(){
      this.codeInside = ''
    }
  }
}
</script>