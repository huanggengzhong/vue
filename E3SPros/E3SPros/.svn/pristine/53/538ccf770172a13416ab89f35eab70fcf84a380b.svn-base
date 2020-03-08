<template>
    <section class="carType">
        <el-col :span="10" class="padding-l-10">
            <div class="filter-container filter-title">选择信息</div>
            <div class="filter-container filter-params">
                <el-row>
                    <div class="filter-container filter-button margin-b-10">
                            <el-button size="small" @click="affirm">确认</el-button>
                            <el-button size="small" @click="delect">删除</el-button>
                    </div>
                </el-row>
            </div>
            <el-table
                :data="tableList"
                element-loading-text="Loading"
                max-height="350"
                border
                stripe
                :header-cell-style="tableHeaderRowClassName"
                @select="tableListChoose"
                highlight-current-row
                >
                    <el-table-column align="center" label="序号" width="55">
                        <template slot-scope="scope">
                        {{ scope.$index + 1 }}
                        </template>
                    </el-table-column>
                    <el-table-column type="selection" width="50" label="选择+" />
                    <el-table-column label="备件编码">
                        <template slot-scope="scope">
                        {{ scope.row.partNo }}
                        </template>
                    </el-table-column>
                    <el-table-column label="备件名称">
                        <template slot-scope="scope">
                        {{ scope.row.partName }}
                        </template>
                    </el-table-column>
                </el-table>
                <!-- <el-pagination
                background
                layout="prev, pager, next, sizes, ->, total"
                prev-text="上一页"
                next-text="下一页"
                :page-sizes="[10, 20, 30]"
                :page-size="10"
                :total="tableList?tableList.length:0"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                /> -->
        </el-col>
    </section>
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
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:32px;'
        }
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
<style scoped>
.margin-r-0{
    margin-right: 0;
}
.margin-b-10{
    margin-bottom: 10px;
}
.padding-l-10{
    padding-left: 10px;
}
.textalign-l{
    text-align: left;
}
</style>
