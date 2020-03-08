/**
* description: 小区联动控件
* author: liyanm
* createdDate: 2019-07-18
*/
<template>
    <section>
        <el-col :span="span" >
            <label v-if="isshow">{{smallAreaLable}}</label>
            <el-select
            collapse-tags
            :disabled='disabled'
            filterable
            v-model="showName"
             :placeholder="placeholder"
            clearable
            @change="sendCode"
            size="small">
            <el-option v-for="item in selectDates" :key="item.smallAreaId" :label="item.smallAreaName" :value="item.smallAreaId">{{item.smallAreaName}}</el-option>
            </el-select>
        </el-col>
    </section>
</template>
<script>
import { getsmallAreagrop } from '@/api/org/orgcomponents'
export default {
  name: 'orgSmallAreaGroup',
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
      type:String,
      default:function(){
        return ''
      }
    },
    // 是否显示Lable
    isshow:{
      type:Boolean,
      default:function(){
        return true
      }
    },
    bigvalue:'',
  },
  data() {
    return {
       placeholder: this.$t('sys.tips.esTip0'),
      smallAreaLable:this.$suit.globalLabel.VILLAGE,
      codeInside: '',
      showName:'',
      listLoading: true,
      disabled:false,
      optionDatas: [
      ],
      listQuery: {
      },
      selectDates:[
      ],
    }
  },
  created() {
    this.fetchData()
  },
watch: {
    bigvalue: { //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象  　　　　　　　　　　
      handler(curVal, oldVal) {　　　　　　　　　　　
        console.log(curVal, oldVal)
        if (this.bigvalue !='') {
        this.disabled = false;
          if(curVal != oldVal){
            this.showName = '请选择';
            this.selectItems();
          }
        } else {
          this.disabled = true;
        }　　　　　
      },
      　deep: true　　　　　　　　
    }
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getsmallAreagrop(this.listQuery).then(response => {
        this.listLoading = false
        this.optionDatas = response.data["data"].mdmOrgSmallAreaQueryByPage
      })
      if (this.bigvalue.length == 0) {
          this.disabled=true
      }
    },

  selectItems(){
      let map = this.optionDatas.rows,
      dest = [];
      for (let i = 0; i < map.length; i++) {
        if (map[i].smallAreaId == this.bigvalue.bigAreaId) {
        this.selectDates=map[i].smallAreaName.rows
      }else{
        this.selectDates=[];
      }
      }
      return dest
    },//遍历数组赋值
    sendCode(val) {
      this.codeInside = val;
      this.showName = this.codeInside.smallAreaName;
      this.$emit("changeCode",this.codeInside)
    }
  }
}
</script>
