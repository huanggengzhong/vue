<template>
 </template>
<script>


export default {
 components: {
  },
  props:{
    code:{
      type:String,
      default:function(){
        return ''
      } 
    },
  },
  data() {
    return {
      codeInside: this.code,
      listLoading: true,
      list: [],
      tableList:[],
      tableChooseList:[],
      limits:null,
      listQuery: {
      }
    }
  },
  created() {
  },
  methods: {
    tableListChoose(selection){
        this.tableChooseList = selection
    },
    affirm(){
        if(this.tableList.length === 0){
            this.$alert('未选中备件数据！', '信息提示', {
                    confirmButtonText: '确定',
                    type: 'warning',
                    callback: action => {
                    }
                });
        }else{
            if(this.limits === 0){
                if(this.tableList.length > 1){
                    this.$alert('当前为备件单选，只能选择一条数据！', '信息提示', {
                        confirmButtonText: '确定',
                        type: 'warning',
                        callback: action => {
                        }
                    });
                }else{
                    this.$emit("sentData",this.tableList)                    
                }
            }else{
                this.$emit("sentData",this.tableList)
            }
        }
    },
    delect(){
        if(this.tableChooseList.length === 0){
            this.$alert('请选择要删除的数据！', '信息提示', {
                confirmButtonText: '确定',
                type: 'warning',
                callback: action => {
                }
            });
        }else{
            for(let i of this.tableChooseList){
                for(let j = 0;  j<this.tableList.length; j++){
                    if(i.wiId === this.tableList[j].wiId){
                        this.tableList.splice(j,1)
                    }
                }
            }
        }
    },
    getData(val){
        this.tableList = val
    },
    limit(val){
        this.limits = val
    }
  }
}
</script>
