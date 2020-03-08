<template>
    <section >
        <el-dialog width="900px"
        :title="showTitle " 
        :visible.sync="handleVisibled"
        center
        @close="sendCodeHandleVisible"
        v-bind:class="isValiad ? 'checkInput' :'validInput'"
        >
        <div class="filter-container filter-title"></div>
        <div class="filter-container filter-params">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">               
                <el-row :gutter="10">
                    <el-col :span="8">
                        <el-form-item label="厂商编码" prop="orgName">
                            <el-input   :disabled="disbleEdit" v-model="ruleForm.orgName" placeholder="请选择" size="small"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                         <el-form-item label="厂商名称" prop="orgCode">
                            <el-input clearable v-model="ruleForm.orgCode" placeholder="请选择" size="small"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                         <el-form-item label="管理员账号" prop="userName">
                            <el-input :disabled="disbleEdit"  v-model="ruleForm.userName" placeholder="请选择" size="small"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="8">
                         <el-form-item label="管理员密码" prop="password">
                            <el-input clearable v-model="ruleForm.password" placeholder="请选择" size="small"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="8">
                         <el-form-item label="管理员角色" prop="roleName">
                            <el-select v-model="ruleForm.roleName" placeholder="请选择管理员角色">
                           
                            <el-option label="服务科科长" value="服务科科长"></el-option>
                            <el-option label="销售科科长" value="销售科科长"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                         <el-form-item label="是否可用" prop="isEnable">
                            <el-select  v-model="ruleForm.isEnable" placeholder="请选择启用状态">
                            
                            <el-option label="否" value="0"></el-option>
                            <el-option label="是" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item class="dialog-footer">
                    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                    <el-button @click="sendCodeHandleVisible">取 消</el-button>
                    <el-button @click="reset">重置</el-button>
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
                showTitle: this.handleTitle == 0? '添加厂商信息': '修改厂商信息',
                disbleEdit:this.handleTitle == 0? false : true,
                isValiad:false,
                ruleForm: {
                    orgName: this.editData.orgName || '' ,
                    orgCode: this.editData.orgCode ||'',
                    userName:this.editData.userName||'',
                    roleName:this.editData.roleName||'',
                    password:this.editData.password || '',
                    isEnable: String(this.editData.isEnable) != 'undefined' ? String(this.editData.isEnable) :'',
                },
                rules: {
                    orgName: [
                        { required: true, message: '请输入厂商编码', trigger: 'change' },
                    ],
                    orgCode: [
                        { required: true, message: '请输入厂商编码', trigger: 'change' }
                    ],
                    userName: [
                        { required: true, message: '请输入管理员账号', trigger: 'change' }
                    ],
                    roleName: [
                        { required: true, message: '请选择管理员角色', trigger: 'change' },
                    ],
                    password: [
                        {  required: true, message: '请输入密码', trigger: 'change' }
                    ],
                    isEnable: [
                        { required: true, message: '请选择启用状态', trigger: 'change' }
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
                        apiConfig: orgApis.mdmOrgInfoFactoryMutationSave,
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
                        if(response.data[orgApis.mdmOrgInfoFactoryMutationSave.ServiceCode].result === '1' && response.data[orgApis.mdmOrgInfoFactoryMutationSave.ServiceCode].rows!=''){
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
            },
            reset(){
                this.ruleForm= {
                    orgName: '',
                    orgCode: '',
                    userName:'',
                    roleName:'',
                    password: '',
                    isEnable:'',
                }
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
    /deep/ .checkInput .el-dialog{
        height: 274px;
    }
    /deep/ .validInput .el-dialog{
        height: 230px;
    }
    /deep/ .filter-title{
        height: 0;
        border-bottom: none;
    }
    /deep/ .el-form-item__error{
        left:43%;
    }
    /deep/.checkInput .el-form-item{ 
        margin-bottom: 22px;
    }
    /deep/ .validInput .el-form-item{
        margin-bottom: 0px;
    }
</style>

