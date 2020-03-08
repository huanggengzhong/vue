<template>
    <section>
        <el-col :span="span" >
            <label>付费性质</label>
            <el-select
            :multiple="isMul"
            collapse-tags
            filterable
            v-model="code"
            placeholder="请选择"
            clearable
            @change="sendCode"
            size="small">
            <el-option v-for="item in optionDatas" :key="item.code" :label="item.text" :value="item.code">{{item.text}}</el-option>
            </el-select>
        </el-col>
    </section>
</template>
<script>
// API不存在 ，此组件不能用
import { getPayType } from '@/api/se/secomponents'
export default {
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
      type:Array,
      default:function(){
        return []
      }
    },
    // 单选多选
    isMul:{
      type:Boolean,
      default:function(){
        return false
      }
    }
  },
  data() {
    return {
      listLoading: true,
      optionDatas: [
      ],
      listQuery: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getPayType(this.listQuery).then(response => {
        this.listLoading = false
        this.optionDatas = response.data.rows
      })
    },
    sendCode() {
      this.$emit("changeCode",this.code)
    }
  }
}
</script>
