<template>
    <section>
        <el-col :span="span" >
            <label>设置状态</label>
            <el-select
            v-model="codeInside"
             :placeholder="placeholder"
            clearable
            @change="sendCode"
            size="small">
            <el-option v-for="item in optionDatas" :key="item.code" :label="item.text" :value="item.code">{{item.text}}</el-option>
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
    }
  },
  data() {
    return {
       placeholder: this.$t('sys.tips.esTip0'),
      codeInside: this.code,
      listLoading: true,
      optionDatas: [
      ],
      listQuery: {
      },
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getSetStatus(this.listQuery).then(response => {
        this.listLoading = false
        this.optionDatas = response.data.rows
      })
    },
    sendCode() {
      this.$emit("changeCode",this.codeInside)
    }
  }
}
</script>