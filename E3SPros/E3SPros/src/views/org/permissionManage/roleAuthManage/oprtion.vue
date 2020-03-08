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
                        <el-form-item label="角色名称" prop="roleName">
                            <el-input    v-model="ruleForm.roleName" placeholder="请输入角色名称" size="small"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                         <el-form-item label="所属组织" prop="orgName">
                            <el-input :disabled="disbleEdit"  clearable v-model="ruleForm.orgName" placeholder="请输入所属组织" size="small"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                         <el-form-item label="角色编号" prop="roleCode">
                            <el-input  v-model="ruleForm.roleCode" placeholder="请输入角色编号" size="small"></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :span="24">
                         <el-form-item label="角色描述" prop="roleDesc">
                            <el-input type="textarea" :rows="3" clearable v-model="ruleForm.roleDesc" placeholder="请输入角色描述" ></el-input>
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
            },
            orgId:{
                type:null
            },
            
        },
        data(){
            return{
                handleVisibled:this.handleVisible,
                showTitle: this.handleTitle == 0? '添加厂商信息': '修改厂商信息',
                disbleEdit:this.handleTitle == 0? false : true,
                isValiad:false,
                ruleForm: {
                    roleName: this.editData.roleName || '' ,
                    orgName: this.editData.depName ||'',
                    roleCode:this.editData.roleCode||'',
                    roleDesc:this.editData.roleDesc || '',
                    orId:this.orgId ||''
                },
                rules: {
                    roleName: [
                        { required: true, message: '请输入角色名称', trigger: 'change' },
                    ],
                    roleCode: [
                        { required: true, message: '请输入角色编码', trigger: 'change' }
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
                        apiConfig: orgApis.sysRoleMutationCommonSave,
                        // 需要调用的API服务配置
                        apiServices: [{
                            //表格中台返回网格的字段
                            apiQueryRow:[]
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
                        if(response.data[orgApis.sysRoleMutationCommonSave.ServiceCode].result === '1'){
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
                this.handleVisibled = false;
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
        height: 309px;
    }
    /deep/ .validInput .el-dialog{
        height: 250px;
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
    /deep/ .el-col-24 label{
        width: 10.4%;
    }
    /deep/ .el-textarea{
        float: left;
        width: 89.6% !important;
    }
    .dialog-footer{
        margin-top: 50px
    }
</style>

