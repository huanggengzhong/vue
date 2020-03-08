<template>
    <section>
        <el-dialog width="900px"
        :title="showTitle " 
        :visible.sync="handleVisibled"
        center
        @close="sendCodeHandleVisible"
         v-bind:class="isValiad ? 'checkInput' :'validInput'"
        >
        
        <div class="filter-container filter-title"></div>
        <div class="filter-container filter-params" >
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">               
                <el-row :gutter="10">
                    <el-col :span="8">
                        <el-form-item label="品牌" prop="brandName">
                            <el-select v-model="ruleForm.brandName" placeholder="请选择品牌">
                            <el-option label="东风日产-日产" value="1"></el-option>
                            <el-option label="东风日产-启辰" value="2"></el-option>
                            <el-option label="东风日产-进入尼桑" value="4"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                         <el-form-item label="车系名称" prop="carSeries">
                            <el-input  v-model="ruleForm.carSeries" placeholder="请选择" size="small"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                         <el-form-item label="车系颜色" prop="carColor">
                            <el-input  v-model="ruleForm.carColor" placeholder="请选择" size="small"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="8">
                         <el-form-item label="车型配置" prop="carTypeConfig">
                            <el-input v-model="ruleForm.carTypeConfig" placeholder="请选择" size="small"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="8">
                         <el-form-item label="设置状态" prop="status">
                            <el-select v-model="ruleForm.status" placeholder="请选择设置状态">
                            <el-option label="请选择设置状态" value=""></el-option>
                            <el-option label="未设置" value="0"></el-option>
                            <el-option label="已设置" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                         <el-form-item label="启用状态" prop="isEnable">
                            <el-select v-model="ruleForm.isEnable" placeholder="请选择启用状态">
                            <el-option label="请选择启用状态" value=""></el-option>
                            <el-option label="否" value="0"></el-option>
                            <el-option label="是" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="选择日期" prop="date">
                            <el-date-picker type="date" value-format="yyyy-MM-dd" format="yyyy-MM-dd"  placeholder="选择日期" v-model="ruleForm.date" ></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item class="dialog-footer">
                    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                    <el-button @click="sendCodeHandleVisible">取 消</el-button>
                </el-form-item>
            </el-form>
        </div>
        </el-dialog>
    </section>
</template>
<script>
import { orgApis } from '@/api/graphQLApiList/org'
import { requestGraphQL } from '@/api/commonRequest'
    export default {
        props:{
            handleVisible:{
                type:Boolean,
                default:function(){
                    return false
                }
            },
            handleTitle:{
                type:Number,
                default:function(){
                    return 1
                }
            },
            editData:{
                type:Object,
                default:function(){
                    return {}
                }
            }
        },
        data(){
            return{
                handleVisibled:this.handleVisible,
                showTitle: this.handleTitle == 0? '添加': '修改',
                isValiad:false,
                ruleForm: {
                    brandName: this.editData.brandName || '' ,
                    carSeries: this.editData.carSeries ||'',
                    carColor:this.editData.carColor||'',
                    status: String(this.editData.status)!= 'undefined' ? String(this.editData.status) :'',
                    carTypeConfig:this.editData.carTypeConfig || '',
                    isEnable: String(this.editData.isEnable) != 'undefined' ? String(this.editData.isEnable) :'',
                    date:this.editData.editDate ||''
                 
                },
                rules: {
                    brandName: [
                        { required: true, message: '请选择品牌', trigger: 'blur' },
                        { min: 1, message: '品牌选择不能为空', trigger: 'blur' }
                    ],
                    carSeries: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    carTypeConfig: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    carColor: [
                        { required: true, message: '请选择品牌', trigger: 'blur' },
                        { min: 1, message: '品牌选择不能为空', trigger: 'blur' }
                    ],
                    status: [
                        {  required: true, message: '请选择设置状态', trigger: 'change' }
                    ],
                    isEnable: [
                        { required: true, message: '请选择启用状态', trigger: 'change' }
                    ],
                    date: [
                        { type: 'string', required: false, message: '请选择日期', trigger: 'change' }
                    ],
                }
            }
        },
         created() {
        },
        methods:{
            submitForm(formName) {
                const that  = this
                this.$refs[formName].validate((valid) => {
                if (valid) {
                     let queryObj = {
                        //保存需要传 type="mutation"
                        type:'mutation',
                        // api配置
                        apiConfig: orgApis.sysRoleGlobalMutationSave,
                        // 需要调用的API服务配置
                        apiServices: [{
                            //表格中台返回网格的字段
                            apiQueryRow:['id','brandName','carSeries','catType','carTypeConfig','isEnable','status','editDate']
                        }],
                        //条件/实体参数（变量），根据typeParam中的定义配置
                        variables: {
                            pageSize: 1000,
                            pageIndex: 1,
                            //当前中台使用的名称有dataInfo、info，具体查看API文档
                            dataInfo: that.ruleForm
                        }
                        }
                        //转换了中台请求格式数据
                        var paramD = that.$getParams(queryObj);
                        requestGraphQL(paramD).then(response =>{
                        if(response.data[orgApis.sysRoleGlobalMutationSave.ServiceCode].result === '1' && response.data[orgApis.sysRoleGlobalMutationSave.ServiceCode].rows!=''){
                            //通关如果的状态确认是编辑还是添加
                            if(this.handleTitle == 0){
                                this.$message({message:"添加成功",type: 'success'});
                            }else{
                                this.$message({message:"修改成功",type: 'success'});
                            }
                            this.sendCodeHandleVisible();
                            }
                        })
                } else {
                    this.isValiad = true;
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            sendCodeHandleVisible() {
                this.$emit("visible",false)
            }
        }
    }
</script>

<style lang="scss" scoped>
    /deep/ .filter-params label{
        margin-right: 0px;
    }
    /deep/ .el-input__inner{
        height: 28px;
        line-height: 28px;
    }
    /deep/ .el-input__icon{
        line-height:0
    }
    /deep/ .el-input__prefix{
        top:0px;
    }
    /deep/ .filter-params .el-col{
        margin-bottom:0px;
    }
    /deep/ .filter-title{
        height:0px;
        border-bottom: none;
    }
    /deep/ .checkInput .el-dialog{
        height: 330px;
    }
    /deep/ .validInput .el-dialog{
        height: 254px;
    }
    /deep/.checkInput .el-form-item{ 
        margin-bottom: 22px;
    }
    /deep/ .validInput .el-form-item{
        margin-bottom: 0px;
    }
</style>

