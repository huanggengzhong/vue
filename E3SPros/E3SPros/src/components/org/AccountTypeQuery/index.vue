/**
* description: 值列表分类和大类联动
* author: liyanm
* createdDate: 2019-07-18
*/
<template>
    <section>
       <LookupValue ref="changeBigvale" :span="6" :isMul="isMul" :isShowLabel="isshow"  :lookuptype="lookuptype" :labelName='lookupValuelable'  @changeCode="getaccountbigValue" />
       <lookupType ref="changeSmallvale" :span="6" :isshow="smalllable" :isMul="isMulno" :changeType='changeType' :lookupTypelable='lookupTypelable'  @changeCode="getaccountsmallValue" />
    </section>
</template>
<script>
import LookupValue from '@/components/org/LookupValue'
import lookupType from '@/components/org/lookupType'
export default {
  name: 'orgAccountTypeQuery',
  components: {
    LookupValue,
    lookupType
  },
  props:{
    // 行内占比
    span:{
      type:Number,
      default:function(){
        return 6
      }
    },
    lookuptype:'',//值列表查询编码，自行修改成变量
  },
  data() {
    return {
      lookupValuelable:this.$suit.globalLabel.LOOKUP_VALUE,//大类labeName
      lookupTypelable:this.$suit.globalLabel.LOOKUP_VALUE+'类型',//lable名称-全局变量
      biglable:true,//是否显示大类lableName
      smalllable:true,//是否显示小类lableName
      listLoading: true,
      chickbigValue: '',//选中的大类数据
      chicksmallValue: '',//联动的小类数据
      isshow:true,//是否显示lable
      listQuery: {},
      isMul:false,
      isMulno:false,
      changeType:'1',//0非联动，1联动
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    chickValueGroup(){
         if( this.lookuptype !='' || this.lookuptype != undefined){
               this.$refs.changeBigvale.selectItems();
         }
    }
  },
  methods: {
    fetchData() {
      this.listLoading = true;
    },
    getaccountbigValue(val){
      this.chickbigValue=val;
      this.changeBig();
    },//获取大类选中的数据对象
    getaccountsmallValue(val){
      this.chicksmallValue=val
      // this.sendCode();
    },//获取小类选中的数据对象
     changeBig(){
       //这是操作子组件的方法
      this.$refs.changeSmallvale.bigvalue =this.chickbigValue;
       this.$refs.changeSmallvale.disabled =false;
       this.$refs.changeSmallvale.selectItems();
       this.$refs.changeSmallvale.codeInside = '';
    }
  }
}
</script>
