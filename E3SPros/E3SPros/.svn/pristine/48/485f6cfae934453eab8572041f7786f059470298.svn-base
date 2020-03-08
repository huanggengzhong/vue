/**
* description: 省份联动
* author: liyanm
* createdDate: 2019-07-18
*/
<template>
    <section>
        <el-col :span="span" >
            <label v-if="isshow">{{provincelabel}}</label>
            <el-select
            collapse-tags
            filterable
            v-model="showName"
             :placeholder="placeholder"
            clearable
            @change="sendCode"
            size="small">
            <el-option v-for="item in optionDatas" :key="item.provinceId" :label="item.provinceName" :value="item.provinceId">{{item.provinceName}}</el-option>
            </el-select>
        </el-col>
    </section>
</template>
<script>
import { getprovinceQuery } from '@/api/org/orgcomponents'
export default {
  name: 'orgProvinceGroup',
  props:{
     placeholder: this.$t('sys.tips.esTip0'),
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
      provincelabel:this.$suit.globalLabel.PROVINCE,//lable名称-全局变量
      codeInside: this.provinceName,
      listLoading: true,
      showName:'',
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
      getprovinceQuery(this.listQuery).then(response => {
        this.listLoading = false
        this.optionDatas = response.data["data"].mdmOrgProvinceQueryFindAll[0].rows
      })
    },
    sendCode(val) {
      this.codeInside = val;
      this.showName = this.codeInside.provinceName;
      this.$emit("changeCode",this.codeInside)
    }
  }
}
</script>
