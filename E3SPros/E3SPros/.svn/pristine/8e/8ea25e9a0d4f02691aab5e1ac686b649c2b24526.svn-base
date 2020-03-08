<!--
* description: 明细弹窗
* author: chchhui
* createdDate: 2019-10-09
* logs：
*  20191009 新增页面功能
-->
<template>
  <section>   
    <el-dialog
      title="明细查询"
      :visible.sync="dialogFormVisible"
      width="80%"
      @closed="closeDialog"
      @opened="openDialog"
      :append-to-body="true"
      :close-on-click-modal="false"
    >
     
      <mix-table 
        ref="tableList"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        :isShowSelect=false
        :isPaging=true
        :isDialog=true />
    </el-dialog>
  </section>
</template>

<script>
import { paApis } from "@/api/graphQLApiList/pa";
import mixTable from '@/components/basicComponent/mixTable';

export default {
    components:{
        mixTable
    },
    props:{
        
        
        queryParams:{type: Object, default: () => {} },
        cols: { type: Array, default: () => [] },
        dialogFormVisible: {
            type: Boolean,
            default: function() {
               return false
            }
        }
    },
    data(){
        return{
            
      //       cols:[
      //       { label: '备件编码', codeField: 'a1'},
      //       { label: '备件名称', codeField: "a2"},
      //       { label: '计量单位', codeField: "a3"},
      //       { label: '关联单号', codeField: "a4"},
      //       { label: '成本单位', codeField: "a5"},
      //       { label: '数量', codeField: "a6"},
      //       { label: '成本金额总价', codeField: "a7"},
      //       { label: '仓库', codeField: "a8"},
      //       { label: '库位', codeField: "a9"},
       
      // ],
      //  queryParams: {
      //   APIUrl: paApis.paOutBoundDQueryDFindAll.APIUrl,
      //   InputType: paApis.paOutBoundDQueryDFindAll.InputType,
      //   ServiceCode: paApis.paOutBoundDQueryDFindAll.ServiceCode,
      //   dataInfo: {
      //     carBrandCode: '',
      //     carSeriesCode: '',
      //     carTypeCode: ''
      //   },
      //   apiQueryRow: [
      //     'carBrandCn',
      //     'carBrandCode',
      //     'carSeriesCn',
      //     'carSeriesCode',
      //     'carTypeCn',
      //     'carTypeCode'
      //   ]
      // }
        }
    },
    // watch:{
    //   dialogFormVisible: {
    // 　　handler(newName, oldName) {
    //   　  this.$refs.tableList.queryList()
    // 　　},
    // 　　immediate: true
    //   }
    // },
    created(){
    //查询网格
    //  this.listData.length === 0 ? this.queryList(this.pageIndex, this.pageSize) : false
    },
    methods:{
      openDialog(){   
        this.fetchData()
      },
      fetchData(){
        this.$refs.tableList.queryList()
      },
      closeDialog(){
        this.$emit('closeDialog', '!**!')
        this.$refs.tableList.tableData = null
      }
    }
    
}
</script>