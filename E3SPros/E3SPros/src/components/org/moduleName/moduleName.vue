<template>
    <section>
        <el-col :span="span" >
            <label v-show="isshow">{{moduleName}}</label>
            <el-select
            :multiple="isMul"
            collapse-tags
            filterable
            v-model="codeInside"
             :placeholder="placeholder"
            clearable
            @change="sendCode"
            size="small">
            <el-option v-for="item in optionDatas" :key="item.moduleCode" :label="item.moduleName" :value="item.moduleCode">{{item.moduleName}}</el-option>
            </el-select>
        </el-col>
    </section>
</template>
<script>
import {getModuleName} from '@/api/org/orgcomponents'
export default {
  name: 'orgModuleName',
  props:{
     placeholder: this.$t('sys.tips.esTip0'),
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
     // 是否显示Lable
    isshow:{
       type:Boolean,
      default:function(){
        return true
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
      moduleName:this.$suit.globalLabel.MODULE_NAME,//lable名称-全局变量
      listLoading: true,
      codeInside: this.code,
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
      getModuleName(this.listQuery).then(response => {
        this.listLoading = false
        this.optionDatas = response.data.mdsModuleNameQueryByPage.rows
        console.log(this.optionDatas )
      })
    },
    sendCode() {
      this.$emit("changeCode",this.codeInside)
    }
  }
}
</script>
