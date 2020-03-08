<template>
    <div>
        <el-dialog 
        width="60%"
        :append-to-body="true"
        :close-on-click-modal="false"
        :title="showTitle" 
        :visible.sync="dialogVisibled"
        @close="sendVisible"
        v-bind:class="isValid ? 'checkInput' :'validInput'">
            <!--<div class="filter-container filter-title"></div>-->
            <div class="filter-container filter-params" >
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" :inline-message="true">               
                    <el-row :gutter="10">
                    <el-col :span="8">
                        <el-form-item label="模板" prop="wiModelId" >
                        <!--<el-select
                        v-model="ruleForm.wiModelName"
                        placeholder="请选择"
                        size="small"
                        >
                        <el-option label="全部" value="0"></el-option>
                        <el-option label="更换前刹车片" value="1"></el-option>
                        <el-option label="更换制动液" value="2"></el-option>
                        </el-select>-->
                        <el-select
                         :multiple="false"
                         collapse-tags
                         filterable
                         v-model="ruleForm.wiModelId"
                         placeholder="请选择"
                         clearable
                         size="small">
                         <el-option v-for="item in wiModelOptionDatas" 
                         :key="item.wiModelId"
                         :label="item.wiModelName" 
                         :value="item.wiModelId"
                         >
                         </el-option>
                        </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="经销商" prop="dlrShortName">
                        <el-input
                        v-model="ruleForm.dlrShortName"
                        suffix-icon="el-icon-search"
                        placeholder="请选择"
                        size="small"
                        @focus="openComQueChoMu()"
                        :disabled="isEditEnable"
                        />
                        </el-form-item>
                    </el-col>
                    </el-row>
                    <el-form-item class="dialog-footer">
                        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                        <el-button @click="hide()">取 消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { apiSeDbWiPriceModel } from '@/api/graphQLApiList/se'
import { requestGraphQL } from '@/api/commonRequest'
import seComQueryChoDlrMul from "@/components/se/seComQueryChoDlrMul"
import { debuglog } from 'util';

    export default {
        name:"saveDlrDialog",
        components: {
            seComQueryChoDlrMul
        },
        props:{
            doQuery: {
                type: Function,
                default: null
            }
        },
        data() {
            return {
                dialogVisibled: false,
                showTitle: "添加",
                isEditEnable: false,
                seComQueryChoDlrMulkey:'seComQueryChoDlrMulEdit',
                isValid: false,
                //模板编码下拉框
                wiModelOptionDatas: [],
                ruleForm: {
                    wiPriceDlrId: '',//新增可以为空
                    wiModelId: '',
                    wiModelCode: '',
                    //wiModelName: '',
                    dlrId: '',
                    dlrCode: '',
                    dlrShortName: '',
                    oemId: '',
                    groupId: '',
                    oemCode: '',
                    groupCode: '',
                    isEnable: '1',
                    updateControlId: ''//新增可以为空
                },
                rules: {
                    wiModelId: [
                        { required: true, message: '请选择模板', trigger: 'blur' },
                        { min: 1, message: '模板不能为空', trigger: 'blur' }
                    ], 
                    dlrShortName: [
                        { required: true, message: '请选择经销商', trigger: 'blur' },
                        { min: 1, message: '经销商不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
         created() {
        },
        methods:{
            openComQueChoMu() {
                this.$emit("openEditComQueChoMu");
            },
            getComQueChoMu(val) {
                //多选
                // for(let i = 0; i < val.length; i++) {
                //     if(val.length == 0) {
                //         this.ruleForm.dlrShortName = val[0].dlrShortName;
                //         this.ruleForm.dlrCode = val[0].dlrCode;
                //         this.ruleForm.dlrId = val[0].dlrId;
                //         console.log(val[0].dlrFullName);
                //     } else {
                //         this.ruleForm.dlrShortName += ','+ val[i].dlrShortName;
                //         this.ruleForm.dlrCode += ','+ val[i].dlrCode;
                //         this.ruleForm.dlrId += ',' + val[i].dlrId;
                //     }
                //     console.log(val[i].dlrFullName);
                // }
                //单选
                this.ruleForm.dlrShortName = val.dlrShortName;
                this.ruleForm.dlrCode = val.dlrCode;
                this.ruleForm.dlrId = val.dlrId;
            },
            setData(val1, val2, val3) {
                this.ruleForm = val1;
                this.showTitle = val2;
                this.isEditEnable = val3;
            },
            //弹框中模板下拉框获取模板编码及模板名称
            getWiModelData(val) {
                this.wiModelOptionDatas = val;
            },
            submitForm(formName) {
                const that = this
                this.$refs[formName].validate((valid) => {
                    if (valid) { 
                        var wiCodeItems = that.wiModelOptionDatas.filter(o => o.wiModelId == that.ruleForm.wiModelId)
                        if (wiCodeItems.length > 0) that.ruleForm.wiModelCode = wiCodeItems[0].wiModelCode;
                        
                        let submitData = {
                            wiPriceDlrId: this.ruleForm.wiPriceDlrId,
                            wiModelId: this.ruleForm.wiModelId,
                            wiModelCode: this.ruleForm.wiModelCode,
                            //wiModelName: this.ruleForm.wiModelName,
                            dlrId: this.ruleForm.dlrId,
                            dlrCode: this.ruleForm.dlrCode,
                            //dlrShortName: this.ruleForm.dlrShortName,
                            oemId: this.ruleForm.oemId,
                            groupId: this.ruleForm.groupId,
                            oemCode: this.ruleForm.oemCode,
                            groupCode: this.ruleForm.groupCode,
                            isEnable: this.ruleForm.isEnable,
                            updateControlId: this.ruleForm.updateControlId
                        }
                      
                        let queryObj = {
                        //保存需要传 type="mutation"
                        type:'mutation',
                        // api配置
                        apiConfig: apiSeDbWiPriceModel.seDbWiPriceModelDlrMutationSave,
                        // 需要调用的API服务配置
                        apiServices: [{
                            //表格中台返回网格的字段
                            apiQueryRow:[]
                        }],
                        //条件/实体参数（变量），根据typeParam中的定义配置
                        variables: {
                            //当前中台使用的名称有dataInfo、info，具体查看API文档
                            dataInfo: submitData
                        }
                        }
                    //转换了中台请求格式数据
                    var paramD = that.$getParams(queryObj);
                    requestGraphQL(paramD).then(response =>{
                       if(response.data[apiSeDbWiPriceModel.seDbWiPriceModelDlrMutationSave.ServiceCode].result === '1') {
                            if(this.showTitle == "新增") {
                                this.$message({message:"新增成功",type: 'success'});
                            } else {
                                this.$message({message:"修改成功",type: 'success'});
                            }
                            //重新查询数据
                            if (this.doQuery) {
                                this.doQuery();
                            }
                       } else {
                           this.$message({
                               message: response.data[apiSeDbWiPriceModel.seDbWiPriceModelDlrMutationSave.ServiceCode].msg, 
                               type: 'warning'
                            });
                       }
                       this.setNull();
                       this.hide(); 
                       this.setSelectRowDataNull(); 
                     });
                 } else {
                     this.isValid = true;
                     return false;
                }
             });
            },
            sendVisible() {
                this.$refs.ruleForm.clearValidate();
                //console.log("清除样式close");
                this.$emit("visible",false)
            },
            open() {
                this.dialogVisibled = false
                this.$nextTick(()=>{
                    this.dialogVisibled = true
                })
            },
            hide() {
                this.dialogVisibled = false;
                this.sendVisible();
                this.$refs.ruleForm.clearValidate();
                //this.$refs[ruleForm].resetFields();
                //console.log("清除样式");
            },
            setNull() {
                this.ruleForm = {
                    wiModelId: '',
                    wiModelCode: '',
                    dlrId: '',
                    dlrCode: ''
                }
            },
            setSelectRowDataNull() {
                this.$emit("setSelectRowDataNull")
            }
        }
    }
</script>
