<template>
  <el-dialog
    title="数据维护"
    :visible.sync="collectionDialogVisible"
    :close-on-click-modal="false"
    width="65%"
    @close="close('ruleForm')"
    :append-to-body="true"
  >
    <div class="filter-container filter-params">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="ruleForm">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item prop="documentCode">
              <lableName curLabelName="单据编号" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="ruleForm.documentCode"
                clearable
                size="small"
                :readonly="true"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="paymenMenthod">
              <lableName curLabelName="结算方式" :isShowLabel="true" :isRequire="false"></lableName>
              <el-select
                v-model="ruleForm.paymenMenthod"
                size="small"
                placeholder="请选择"
                clearable
                @change="paymenMenthods($event)"
              >
                <el-option
                  v-for="item in MenthodOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>  
          </el-col>
          <el-col :span="8">
            <el-form-item prop="receivedAmount">
              <lableName curLabelName="收款金额" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="ruleForm.receivedAmount"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="PaperType">
              <lableName curLabelName="票据类型" :isShowLabel="true" :isRequire="false"></lableName>
              <el-select
                v-model="ruleForm.PaperType"
                size="small"
                placeholder="请选择"
                clearable
              >
                <el-option
                  v-for="item in TypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>  
          </el-col>
          <el-col :span="8">
            <el-form-item prop="paperNo">
              <lableName curLabelName="票据号" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="ruleForm.paperNo"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="paperAmount">
              <lableName curLabelName="票据金额" :isShowLabel="true" :isRequire="true"></lableName>
              <el-input
                v-model="ruleForm.paperAmount"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8" v-show="bankAccountShow">
            <el-form-item prop="bankAccount">
              <lableName curLabelName="银行账户" :isShowLabel="true" :isRequire="false"></lableName>
               <el-select
                v-model="ruleForm.bankAccount"
                size="small"
                placeholder="请选择"
                clearable
              >
                <el-option
                  v-for="item in bankAccountOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="24">
            <el-button @click="save('ruleForm')" type="primary">收款</el-button>
            <el-button @click="close('ruleForm')" >取消</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </el-dialog>
</template>

<script>
import { salesOrdersDoQMutationList } from "@/api/pa/orderAuditItem/orderAuditItem";
import { paApis } from "@/api/graphQLApiList/pa";
import LookupValue from "@/components/org/LookupValue/index";
import lableName from "@/components/lableName";

export default {
  components: {
    LookupValue,
    lableName
  },

  props: {
    collectionDialogVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },

  data() {
    return {
      flag: false,
      bankAccountShow: false,
      MenthodOptions:[
        { value: 1, label: "预收款" },
        { value: 2, label: "银行" },
        { value: 3, label: "挂账" },
        { value: 4, label: "现金" },
        { value: 5, label: "内部" }
      ],
      TypeOptions:[
        { value: 1, label: "增值税发票" },
        { value: 2, label: "银行汇票" },
        { value: 3, label: "转账支票" },
        { value: 4, label: "现金支票" }
      ],
      bankAccountOptions: [],
      ruleForm: {
        documentId: '',
        documentCode: '',
        paymenMenthod: '',
        receivedAmount: '',
        PaperType: '',
        paperNo: '',
        paperAmount: '',
        updateControlId: ''
      },
      rules:{
        paperAmount:[
            {required: true, message: "请输入票据金额", trigger: "change"}
        ],
       
      }
    };
  },

  created() {},

  methods: {
    //获得父组件的值
    setEditData(val) {  
      this.ruleForm.documentId = val[0].documentId;
      this.ruleForm.documentCode = val[0].documentCode;
      this.ruleForm.receivedAmount = val[0].receivedAmount;
      this.ruleForm.updateControlId = val[0].updateControlId;
    },
    //选择传值给父组件
    close(formName) {
      if (this.$refs[formName] !== undefined) {
        this.$refs[formName].resetFields();
      }
      this.bankAccountShow = false;
      var str = false;
      this.$emit("close", str);
    },
    //收款
    save(formName) {
      if(parseFloat(this.ruleForm.paperAmount) > parseFloat(this.ruleForm.receivedAmount)){
        this.flag = true;
      }else{
        this.flag = false;
        this.$message({
          type: "error",
          message: "票据金额需要大于收款金额！"
        });
      }
      if(this.flag){
        this.$refs[formName].validate(valid => {
          if(valid) {
            salesOrdersDoQMutationList(this.ruleForm).then(response => {
              if(response.data[paApis.salesOrdersMutationSave.ServiceCode].result === "1") {
                  this.$message({
                      type: "success",
                      message: "收款成功！"
                  });
                  this.flag = false;
                  this.close(formName);
              }else{
                this.$message({
                  type: "error",
                  message: "收款失败！"
                });
              }
            });
          } else {
            this.$message({
              type: "error",
              message: "收款失败！"
            });
          }
        });
      }
    },
    //银行方式
    paymenMenthods(e){
      if(e==2){
        this.bankAccountShow = true;
      }else{
        this.bankAccountShow = false;
      }
    }
}
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog .el-form-item {
  margin-bottom: 0px;
}
</style>
