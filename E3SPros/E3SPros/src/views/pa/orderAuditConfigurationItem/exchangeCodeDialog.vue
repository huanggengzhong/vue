<template>
    <el-dialog title="互换码维护" 
               :visible.sync="exchangeCodeDialogVisible" 
               width="65%" 
               :close-on-click-modal="false"
               @close="close1"
               >
    <div class="filter-container filter-params">  
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">	
        <el-row :gutter="24">
            <el-col :span="8">
                <el-form-item  prop="partNo">
                    <lableName curLabelName="互换码编码" 
                                :isShowLabel="true" 
                                :isRequire="false">
                    </lableName>
                    <el-input v-model="ruleForm.partNo" clearable size="small" />
                </el-form-item>  
            </el-col>
            <el-col :span="8">
                <el-form-item  prop="partName">
                    <lableName curLabelName="互换码名称" 
                                :isShowLabel="true" 
                                :isRequire="false">
                    </lableName>
                    <el-input v-model="ruleForm.partName" clearable size="small" />
                </el-form-item>  
            </el-col>
            <el-col :span="8">
                <el-form-item label="是否启用"  prop="PartNameEN">
                    <el-input v-model="ruleForm.PartNameEN" clearable size="small" />
                </el-form-item>  
            </el-col>
        </el-row>
		<el-row :gutter="24">
            <el-col :span="8">
                <el-form-item label="排序号"  prop="unit">
                    <el-input v-model="ruleForm.unit" clearable size="small" />
                </el-form-item>  
            </el-col>
            <el-col :span="8">
                <el-form-item label="定义"  prop="SNP">
                    <el-input type="textarea" v-model="ruleForm.SNP" clearable size="small" autosize/>
                </el-form-item>  
            </el-col> 
		</el-row>    
        <el-row :gutter="24">
            <el-col :span="24">
                <el-button @click="save('ruleForm')" type="primary">保存</el-button>
                <el-button @click="close1" type="primary">取消</el-button>
            </el-col>  
        </el-row>
      </el-form> 
    </div>
  </el-dialog>
</template>

<script>
import { doQueryList7 } from '@/api/pa/orderAuditItem/orderAuditItem'
import LookupValue from '@/components/org/LookupValue/index'
import lableName from '@/components/lableName'
export default {
   components:{
    LookupValue,
    lableName
  },

  props: {
    exchangeCodeDialogVisible: {
      type: Boolean,
      default: function() {
        return false
      }
    },
    editData:{
        type:Object,
        default:function(){
        return {}
      }
    },
  },

  data() {
    return {
      listQuery: {
        pageSize: '',
        pageIndex: ''
      },
      // ruleForm:{},
      ruleForm: {
                    partNo: this.editData.partNo,
                    partName: this.editData.partName,
                    PartNameEN: this.editData.PartNameEN,
                    unit: this.editData.unit,
                    SNP: this.editData.SNP,
                },
      rules: {
         partNo: [
                { required: true, message: '请输入互换码编码', trigger: 'change' },
                // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
           ],
          partName: [
                { required: true, message: '请输入互换码名称', trigger: 'change' },
                // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
           ],
           PartNameEN: [
                { required: true, message: '请输入是否启用', trigger: 'change' },
                // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
           ],
           unit: [
                { required: true, message: '请输入排序号', trigger: 'change' },
                // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
           ], 
      }          
    }
  },

  created(){
    console.log("Aaa");
    console.log(this.exchangeCodeDialogVisible);
    console.log(this.editData)
  },

  methods: {
    save(formName){
       const that  = this
       this.$refs[formName].validate((valid) => {
         if (valid) {
            doQueryList7(that.listQuery.pageSize,
                         that.listQuery.pageIndex,
                         that.listQuery).then(response =>{
              //  alert(response.data.paDbPartListMutationSavePartOrderSwitch.msg)
                  this.$message({
                    type: "success", 
                    message: "保存成功！"
                  });
              })
         
            this.close1();
            } else {
                   this.$message({
                    type: "error", 
                    message: "保存失败！"
                  });
                }
        });    
      },

    //获得父组件的值
    // setEditData(val){
    //   //debugger
    //   this.ruleForm=val;
    //   console.log(ruleForm)
    // },

    //选择传值给父组件
    close1() {
      this.$emit('close1', false)
    },
    
    },
  }

</script>

<style lang="scss" scoped>
    /deep/ .filter-params .el-row{
        margin-bottom:0px;
    }
    /deep/ .filter-params label{
        margin-right: 0px;
    }
    /deep/ .checkInput .el-dialog{
        height: 150px;
    }
    /deep/ .validInput .el-dialog{
        height: 160px;
    }
    /deep/.checkInput .el-form-item{ 
        margin-bottom: 0px;
    }
    /deep/ .validInput .el-form-item{
        margin-bottom: 0px;
    }
    /deep/ .el-dialog .el-form-item{
      margin-bottom: 0px;
    }
</style>
