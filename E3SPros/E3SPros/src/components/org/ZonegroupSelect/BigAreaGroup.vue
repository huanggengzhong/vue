/**
* description: 大区联动
* author: liyanm
* createdDate: 2019-07-18
*/
<template>
    <section>
        <el-col :span="span" >
            <label v-if="isshow">{{bigArealable}}</label>
            <el-select
            collapse-tags
            filterable
            v-model="showName"
             :placeholder="placeholder"
            clearable
            @change="sendCode"
            size="small">
            <el-option v-for="item in optionDatas" :key="item.bigAreaId" :label="item.bigAreaName" :value="item.bigAreaId">{{item.bigAreaName}}</el-option>
            </el-select>
        </el-col>
    </section>
</template>
<script>
import { getbigArea } from '@/api/org/orgcomponents'
export default {
  name: 'orgBigAreaGroup',
  props:{
    // 行内占比
    span:{
      type:Number,
      default:function(){
        return 6
      }
    },
    // 是否显示Lable
    isshow:{
      type:Boolean,
      default:function(){
        return true
      }
    },
    // 默认选中
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
      bigArealable:this.$suit.globalLabel.REGION,
      codeInside: '',
      showName:'',
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
      getbigArea(this.listQuery).then(response => {
        this.listLoading = false
        this.optionDatas = response.data["data"].mdmOrgBigAreaQueryByPage.rows
      })
    },
    sendCode(val) {
      this.codeInside = val;
      this.showName = this.codeInside.bigAreaName;
      this.$emit("changeCode",this.codeInside)
    }
  }
}
</script>
