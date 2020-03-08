/**
* description: 经销商联动
* author: liyanm
* createdDate: 2019-07-18
*/
<template>
    <section>
        <el-col :span="span" >
            <label v-if="isshow">{{dlrStatuslabel}}</label>
            <el-select
            collapse-tags
            filterable
            :disabled='disabled'
            v-model="showName"
             :placeholder="placeholder"
            clearable
            @change="sendCode"
            size="small">
            <el-option v-for="item in selectDates" :key="item.dlrId" :label="item.dlrShortName" :value="item.dlrId">{{item.dlrShortName}}</el-option>
            </el-select>
        </el-col>
    </section>
</template>
<script>
import { querydlrStatusgroup } from '@/api/org/orgcomponents'
export default {
   name: 'orgDlrStatusGroup',
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
    smallvalue:'',
  },
  data() {
    return {
      dlrStatuslabel:this.$suit.globalLabel.DLR_NAME,//lable名称-全局变量
      codeInside: '',//经销商名字
      showName:'',
      disabled:false,
      listLoading: true,
      optionDatas: [
      ],
      selectDates:[
      ],
      listQuery: {
      },
    }
  },
  created() {
    this.fetchData()
  },
watch: {
    smallvalue: { //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象  　　　　　　　　　　
      handler(curVal, oldVal) {　　　　　　　　
        console.log(curVal, oldVal)
        if (this.smallvalue !='') {
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
    },
    bigvalue: {  　　　　　　　　　　
      handler(curVal, oldVal) {　　　　　　　
         if(curVal != oldVal){
            this.showName = '请选择';
            this.selectItems();
          }　
      },
      　deep: true　　　　　　　　
    }
  },
  methods: {
    fetchData() {
      this.listLoading = true
      querydlrStatusgroup(this.listQuery).then(response => {
        this.listLoading = false
        this.optionDatas = response.data["data"].mdmOrgDlrQueryByPage
      })
      if ((this.smallvalue.length == 0)) {
          this.disabled=true
      }
    },
     selectItems(){
      let map = this.optionDatas.rows,
      dest = [];
      for (let i = 0; i < map.length; i++) {
        if (map[i].carBrandCode == this.smallvalue.cityId) {
        this.selectDates=map[i].dlrShortName.rows
      }else{
        this.selectDates=[];
      }return dest
      }

    },//遍历数组赋值
    sendCode(val) {
      this.codeInside = val;
      this.showName = this.codeInside.dlrShortName;
      this.$emit("changeCode",this.codeInside)
    }
  }
}
</script>
