<!--
* description: 级别对应工时系数设置

-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
      <el-button @click="showAddDialog('saveWiCoefParams')">新增</el-button>
      <el-button @click="showModifyDialog('saveWiCoefParams')">修改</el-button>
      <el-button @click="showDeleteList">删除</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>
    <!--<div class="filter-container filter-title" ref="conTitleHeight">查询区</div>-->
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <carBrand :isMul="false" :span="6" :code="queryWiCoefParams.carBrandCode" labelName="车辆品牌" :key="carBrandKey" @changeCode="getCarBrand" clearable></carBrand>
        <LookupValue
         :isMul="false"
         :isshow="false"
         :code="queryWiCoefParams.dlrLevelCode"
         :lookuptype="lookuptype"
         labelName="经销商级别"
         :span="6"
         :key="dlrLevelKey"
         @changeCode="getdlrLevel"
         clearable
        /> 
      </el-row>
    </div>
    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :height="tableHeight"
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      @row-click="rowClicked"
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="车辆品牌" align="center">
        <template slot-scope="scope">
          {{ scope.row.carBrandCn}}
        </template>
      </el-table-column>
       <el-table-column label="经销商级别" align="center">
        <template slot-scope="scope">
          {{ scope.row.dlrLevelName }}
        </template>
       </el-table-column>
      <el-table-column label="工时系数"  align="center">
        <template slot-scope="scope">
          {{ scope.row.wiCoef}}
        </template>
      </el-table-column>
      <el-table-column label="工时单价"  align="center">
        <template slot-scope="scope">
          {{ scope.row.wiPrice}}
        </template>
      </el-table-column>
      <el-table-column label="备件系数" align="center">
        <template slot-scope="scope">
          {{ scope.row.partCoef}}
        </template>
      </el-table-column>
      <el-table-column label="工时系数Id" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.levelCoefficId }}
        </template>
      </el-table-column>
      <el-table-column label="门店级别编码" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.dlrLevelCode }}
        </template>
      </el-table-column>
      <el-table-column label="品牌编码" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.carBrandCode }}
        </template>
      </el-table-column>
      <el-table-column label="车辆品牌名称" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.carBrandEn }}
        </template>
      </el-table-column>
      <el-table-column label="是否系统" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.isSystem }}
        </template>
      </el-table-column>
      <el-table-column label="是否启用" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.isEnable }}
        </template>
      </el-table-column>
      <el-table-column label="创建者" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.creator }}
        </template>
      </el-table-column>
      <el-table-column label="创建日期" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.createdDate }}
        </template>
      </el-table-column>
      <el-table-column label="修改者" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.modifier }}
        </template>
      </el-table-column>
       <el-table-column label="修改日期" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.lastUpdatedDate }}
        </template>
      </el-table-column>
       <el-table-column label="保修类别" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.carType }}
        </template>
      </el-table-column>
       <el-table-column label="保修类别名称" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.carTypeName }}
        </template>
      </el-table-column>
      <el-table-column label="并发控制ID" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.updateControlId }}
        </template>
      </el-table-column>
       <el-table-column label="厂商标识" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.oemCode }}
        </template>
      </el-table-column>
       <el-table-column label="集团标识" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.groupCode }}
        </template>
      </el-table-column>
       <el-table-column label="厂商标识ID" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.oemId }}
        </template>
      </el-table-column>
       <el-table-column label="集团标识ID" hidden="hidden" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.groupId }}
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      ref="paginationHeight"
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="pageTotal"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <el-dialog
     :title="showTitle"
     :visible.sync="dialogFormVisible"
     center
     :append-to-body="true"
     width="900px"
     :close-on-click-modal="false"
     @close="closeDialog"
     >
     
     <div class="filter-container filter-params" >
     <el-form
      :model="saveWiCoefParams"
      :rules="rules"
      ref="saveWiCoefParams"
      class="demo-ruleForm"
      :inline-message=true
     >
      <el-row :gutter="10">
        <carBrand :span="8" :isMul="false" :code="saveWiCoefParams.carBrandCode" labelName="车辆品牌" @changeCode="getCarBrandCode"></carBrand>
        <LookupValue
         :span="8"
         :isMul="false"
         :isshow="false"
         :code="saveWiCoefParams.dlrLevelCode"
         :lookuptype="lookuptype"
         labelName="经销商级别"
         @changeCode="getdlrLevelCode"
        />
        <el-col :span="8">
        <el-form-item label="工时系数" prop="wiCoef">
          <el-input 
          v-model.number="saveWiCoefParams.wiCoef" 
          type="number"
          :min="0"
          :step="0.01" 
          placeholder="请输入" 
          size="small"></el-input>
        </el-form-item >
        </el-col>
        <el-col :span="8">
        <el-form-item label="备件系数" prop="partCoef">
          <el-input
          v-model.number="saveWiCoefParams.partCoef" 
          type="number"
          :min="0"
          :step="0.01" 
          placeholder="请输入" 
          size="small"></el-input>
        </el-form-item>
        </el-col>
      </el-row>
      <el-form-item class="dialog-footer">
        <el-button type="primary" @click="saveData('saveWiCoefParams')">保存</el-button>
        <el-button @click="dialogFormVisible = false">取消</el-button>
      </el-form-item>
    </el-form>
    </div>
  </el-dialog>  
  </div>
</template>
<script>
import { seApis } from '@/api/graphQLApiList/se'
import LookupValue from "@/components/org/LookupValue";
import lableName from "@/components/lableName";
import { the_Height } from "@/views/se/makeHeight";
import carBrand from '@/components/org/carBrand/carBrand'
import {
  doQueryList,
  doQuerySave,
  doQueryDelete
} from "@/api/se/basedata/repair/SeDbMaintainWiCoef";
export default {
  filters: {
    isEnableFilter(isEnable) {
      const isEnableMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return isEnableMap[isEnable]
    }
  },
  mixins: [the_Height],
  components: { 
      carBrand,
      LookupValue,
      lableName
    },
  data() {
    return {
      showTitle:'新增/修改',       
      value: '',
      //dlrLevel: '',
      lookuptype:'SE0001',
      //carBrandCn:'',
      carBrandKey:'a',
      dlrLevelKey: 'b',
      //getcarbrandCn:'',
      dialogFormVisible: false,
      tableHeight: 310, // 网格高度
      tableMarginHeight: 15,
      list: [], 
      listLoading: false,
      pageIndex: 1,
      pageSize: 10,
      pageTotal: 0,
      limit: 10,
      listQuery: {
        type: undefined,
        flag:'',
        isEnable: '',
        getcarBrandCn: '',
        getwiCoef: '',
        getpartCoef: '',
        getdlrLevel: ''
      },
      //新增/修改的参数集
      saveWiCoefParams: {
        levelCoefficId: '',	
        carBrandCn: '',
        carBrandCode: '',	
        dlrLevelCode: '',		
        wiCoef: '',		
        partCoef: '',		
        carType: '0',	
        updateControlId: '',		
        isEnable: '1',	
      },
      //查询条件参数集
      queryWiCoefParams: {
        dlrLevelCode: '',	
        //dlrLevel: '',
        carType: '',
        carBrandCode: ''	
      },
      curRow:{},
        rules: {
                carBrandCode: [
                { required: true, message: "请选择车辆品牌", trigger: "change" }
                ],
                dlrLevelCode: [
                { required: true, message: "请选择经销商级别", trigger: "change" }
                ],
                wiCoef: [
                { required: true, message: "请输入工时系数", trigger: "blur" }
                ],
                partCoef: [
                { required: true, message: "请输入备件系数", trigger: "blur" }
                ]
            },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:32px;'
        }
      }
    }
  },
   created(){
    this.fetchData();
  }, 
   watch:{
    queryWiCoefParams(val) {
      this.carBrandKey = this.carBrandKey + 1;
      this.dlrLevelKey = this.dlrLevelKey + 1;
    }
  },
  methods:{
    fetchData() {
      this.listLoading = true;
      //this.queryWiCoefParams.dlrLevel = undefined;
         doQueryList(this.pageSize, this.pageIndex, this.queryWiCoefParams).then(response => {
           if (response.data[seApis.seDbMaintainWiCoefQueryFindAll.ServiceCode].result === '1') {
             this.list = response.data[seApis.seDbMaintainWiCoefQueryFindAll.ServiceCode].rows;
             this.pageTotal = response.data[seApis.seDbMaintainWiCoefQueryFindAll.ServiceCode].records;
             this.listLoading = false;
           } 
          //this.curRow={};
         }); 
      },
    showModifyDialog(formName) {
        if(JSON.stringify(this.curRow) == '{}'){
          this.$alert('请选中一行', '提示', {
          confirmButtonText: '确定',
          type:'warning',
        });
          return;
        }
        else {
          console.log("选中行");
          console.log(this.curRow);
          this.dialogFormVisible = true;
          if (this.$refs[formName] !== undefined) {
              this.$refs[formName].resetFields(); 
          this.saveWiCoefParams.levelCoefficId = this.curRow.levelCoefficId;
          this.saveWiCoefParams.carBrandCn = this.curRow.carBrandCn;
          this.saveWiCoefParams.carBrandCode = this.curRow.carBrandCode;
          this.saveWiCoefParams.dlrLevelCode  = this.curRow.dlrLevelCode;
          this.saveWiCoefParams.wiCoef = this.curRow.wiCoef;
          this.saveWiCoefParams.partCoef = this.curRow.partCoef;
          this.saveWiCoefParams.carType = this.curRow.carType;
          this.saveWiCoefParams.updateControlId = this.curRow.updateControlId;
          this.saveWiCoefParams.isEnable = this.curRow.isEnable;
          }
        }
    },
    showAddDialog(formName){
          this.dialogFormVisible = true;
          if (this.$refs[formName] !== undefined) {
              this.$refs[formName].resetFields(); 
              this.saveWiCoefParams.levelCoefficId = "";
              this.saveWiCoefParams.carBrandCode = "";
              this.saveWiCoefParams.carBrandCn = "";
              this.saveWiCoefParams.dlrLevelCode  = "";
              this.saveWiCoefParams.wiCoef = "";
              this.saveWiCoefParams.partCoef = "";
              this.saveWiCoefParams.carType = "0";
              this.saveWiCoefParams.updateControlId = "";
              this.saveWiCoefParams.isEnable = "1";
          }
    },
    saveData(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {//校验通过
            //this.listLoading=true;
            //去掉车辆品牌中文名
            debugger
            let saveObject = {
              levelCoefficId: this.saveWiCoefParams.levelCoefficId,	
              carBrandCode: this.saveWiCoefParams.carBrandCode,	
              dlrLevelCode: this.saveWiCoefParams.dlrLevelCode,	
              wiCoef: Number(this.saveWiCoefParams.wiCoef),		
              partCoef: Number(this.saveWiCoefParams.partCoef),			
              carType: this.saveWiCoefParams.carType,		
              updateControlId: this.saveWiCoefParams.updateControlId,			
              isEnable: this.saveWiCoefParams.isEnable
            }
            console.log("提交的数据")
            console.log(saveObject)
            doQuerySave(saveObject).then(response => {
              if (response.data[seApis.seDbMaintainWiCoefMutationSave.ServiceCode].result === '1') {
                this.showModifysuccessDialog();
                this.fetchData();
              } else {
                this.$message({
                  type: "error", 
                  message: response.data[seApis.seDbMaintainWiCoefMutationSave.ServiceCode].msg
                });
              }
          this.dialogFormVisible = false;
          this.saveWiCoefParams.levelCoefficId = "";
          this.saveWiCoefParams.carBrandCode = "";
          this.saveWiCoefParams.carBrandCn = "";
          this.saveWiCoefParams.dlrLevelCode  = "";
          this.saveWiCoefParams.wiCoef = "";
          this.saveWiCoefParams.partCoef = "";
          this.saveWiCoefParams.carType = "0"; 
          this.saveWiCoefParams.updateControlId = "";
          this.saveWiCoefParams.isEnable = "1";
          this.$refs.saveWiCoefParams.clearValidate();
        });
          } else {//校验不通过
            //console.log('error submit!!');
            return false;
          }
        });
    },
    showModifysuccessDialog() {
          this.$alert('数据更新成功', '提示', {
          confirmButtonText: '确定',
          type:'success',
        });
          return;
    },
    showDelete() {//提示删除
        this.$confirm('是否删除数据?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // this.$message({
          //   type: 'success',
          //   message: '删除成功!'
          // });
          this.deleteData();
          //this.fetchData();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      },
    deleteData(){
           //this.listLoading = true;
           let deleteData = {
             levelCoefficId: this.curRow.levelCoefficId,
             updateControlId: this.curRow.updateControlId,
             isEnable: '0',
           };
           doQueryDelete(deleteData).then(response => {
           //this.curRow = response.data[seApis.seDbMaintainWiCoefMutationDelete.ServiceCode].rows;
           if (response.data[seApis.seDbMaintainWiCoefMutationDelete.ServiceCode].result === '1') {
             this.$message({
               type: 'success',
               message: '删除成功!'
             });
             this.fetchData();
           } else {
             this.$message({
               type: 'success',
               message: response.data[seApis.seDbMaintainWiCoefMutationDelete.ServiceCode].msg
             });
           }
           this.curRow={};
           //this.listLoading = false;
         }); 
    },
    showDeleteList(){
        if(this.curRow.carBrandCn == null) {
          this.$alert('请选中一行', '提示', {
          confirmButtonText: '确定',
          type:'warning',
        });
          return;
        }
        else{
          this.showDelete();
        }
    },
    reset(){
      //this.listQuery.dlrLevel=[];
      //this.carBrandCn=[];  
      // this.queryWiCoefParams = {
      //   dlrLevelCode: '',	
      //   carType: '',
      //   carBrandCode: ''	
      // }; 
      this.queryWiCoefParams.carBrandCode = "";
      this.queryWiCoefParams.dlrLevelCode = "";
      this.queryWiCoefParams.carType = "";
    },
    rowClicked(row) {
      this.curRow = row;
    },
    getCarBrand(val) {
      this.queryWiCoefParams.carBrandCode = val    
    },
    getCarBrandCode(val, text) {
      this.saveWiCoefParams.carBrandCode = val;
      this.saveWiCoefParams.carBrandCn = text;
    },
    getdlrLevel(val, text){
        this.queryWiCoefParams.dlrLevelCode = val;
        //this.queryWiCoefParams.dlrLevel = text;
    },
    getdlrLevelCode(val, text) {
      this.saveWiCoefParams.dlrLevelCode = val;
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.fetchData()
    },
    handleCurrentChange(val) {
    this.pageIndex = val
    this.fetchData()
  },
  closeDialog(){
      this.dialogFormVisible = false;
  }
}
}
</script>
