/**
* description: 大区、小区、专营店 联动
* author: liyanm
* createdDate: 2019-07-18
*/
<template>
    <section>
      <BigAreaGroup :span="6"  @changeCode="getbigAreaValue" />
      <SmallAreaGroup :span="6" :bigvalue="chickbigValue"   @changeCode="getsmallAreaValue"/>
      <DlrStatusGroup :span="6" :smallvalue="chicksmallValue"   :bigvalue="chickbigValue" @changeCode="getdlrStatusValue"/>
    </section>
</template>
<script>
import { accountTypeQuery } from '@/api/org/orgcomponents'
import BigAreaGroup from '@/components/org/ZonegroupSelect/BigAreaGroup'
import SmallAreaGroup from '@/components/org/ZonegroupSelect/SmallAreaGroup'
import DlrStatusGroup from '@/components/org/ZonegroupSelect/DlrStatusGroup'
export default {
   name: 'orgZonegroupSelect',
  components: {
    SmallAreaGroup,
    BigAreaGroup,
    DlrStatusGroup
  },
  props:{
    // 行内占比
    span:{
      type:Number,
      default:function(){
        return 6
      }
    }
  },
  data() {
    return {
      accountbigTypelable:this.$suit.globalLabel.REGION,//大类labeName
      accountsmillTypelable:this.$suit.globalLabel.REGION,//小类labeName
      // codeInside: '',
      listLoading: true,
      chickbigValue: [
      ],//选中的大类数据
      chicksmallValue: [
      ],//联动的小类数据
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
      // if (this.chicksmallValue == []) {
      // } else {
      //   this.activeList = data;
      // }
    },
    getbigAreaValue(val){
      this.chickbigValue=val
    },//获取大类选中的数据对象
    getsmallAreaValue(val){
      this.chicksmallValue=val
    //   this.sendCode();
    },
     getdlrStatusValue(val){
      this.chickdlrStatusValue=val
      // this.sendCode();
    },//获取小类选中的数据对象
    // sendCode() {
    //   this.$emit("changeCode",this.codeInside)
    // }//获取最终选择对象
  }
}
</script>
