<template>
  <el-dialog
    title="数据维护"
    :visible.sync="supplierDialogVisible"
    :close-on-click-modal="false"
    width="80%"
    @close="close1()"
    :append-to-body="true"
  >
    <!-- <div class="filter-container filter-params">
      <el-form :model="supplierManagerDialogData" :rules="rules" ref="supplierManagerDialogData" class="supplierManagerDialogData">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item prop="supplierCode">
              <lableName curLabelName="供应商编码" :isShowLabel="true" :isRequire="true"></lableName>
              <el-input
                v-model="supplierManagerDialogData.supplierCode"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="supplierShortName">
              <lableName curLabelName="供应商名称" :isShowLabel="true" :isRequire="true"></lableName>
              <el-input
                v-model="supplierManagerDialogData.supplierShortName"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="supplierType">
              <lableName curLabelName="供应商类型" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="supplierManagerDialogData.supplierType"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="supplierAddr">
              <lableName curLabelName="供应商地址" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="supplierManagerDialogData.supplierAddr"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="taxNo">
              <lableName curLabelName="税率" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input v-model="supplierManagerDialogData.taxNo" clearable size="small" :readonly="false" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="zip">
              <lableName curLabelName="邮政编码" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="supplierManagerDialogData.zip"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="linkMan">
              <lableName curLabelName="业务联系人" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="supplierManagerDialogData.linkMan"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="linkManTel">
              <lableName curLabelName="业务联系人电话" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="supplierManagerDialogData.linkManTel"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="modifyName">
              <lableName curLabelName="财务联系人" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="supplierManagerDialogData.modifyName"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="supplierTel">
              <lableName curLabelName="财务联系人电话" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="supplierManagerDialogData.supplierTel"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="supplierFax">
              <lableName curLabelName="传真" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="supplierManagerDialogData.supplierFax"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="email">
              <lableName curLabelName="Email" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="supplierManagerDialogData.email"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="remark">
              <lableName curLabelName="备注" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="supplierManagerDialogData.remark"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-checkbox v-model="isVehicleSupplier">是否整车供应商</el-checkbox>
          </el-col>
          <el-col :span="4">
            <el-checkbox v-model="isPartsSupplier">是否备件供应</el-checkbox>
          </el-col>
          <el-col :span="4">
            <el-checkbox v-model="supplierManagerDialogData.isSystem">系统数据</el-checkbox>
          </el-col>
          <el-col :span="4">
            <el-checkbox v-model="supplierManagerDialogData.groupId">厂商数据</el-checkbox>
          </el-col>   
        </el-row>

        <el-row :gutter="24">
          <el-col :span="24">
            <el-button @click="save('supplierManagerDialogData')" type="primary">保存</el-button>
            <el-button @click="close1('supplierManagerDialogData')" >取消</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div> -->

    <mix-form
      ref="supplierManagerDialogForm"
      :dynamicFormFields="supplierManagerDialogForm"
      :dynamicFieldsData="supplierManagerDialogData"
    ></mix-form>
    
    <!-- <mix-button
      name="searchBtns"
      :dynamicButtons="btns"
      :isShowMore="false"
    ></mix-button> -->

    <el-row>
      <el-col :span="24">
        <el-button @click="save()" type="primary">保存</el-button>
        <el-button @click="close1()" >取消</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import { supplierDoQMutationList } from "@/api/pa/orderAuditItem/orderAuditItem";
import { paApis } from "@/api/graphQLApiList/pa";
import LookupValue from "@/components/org/LookupValue/index";
import lableName from "@/components/lableName";
import mixForm from "@/components/basicComponent/mixForm";
import mixButton from "@/components/basicComponent/mixButton";

export default {
  components: {
    LookupValue,
    lableName,
    mixForm,
    mixButton
  },

  props: {
    supplierDialogVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },

  data() {
    return {
      //表单
      supplierManagerDialogForm: [
        { label: "供应商编码", codeField: "supplierCode", type: "inputTxt", span: 8,rules: { required: true, message: '请输入供应商编码', trigger: 'blur' }},
        { label: "供应商名称", codeField: "supplierShortName", type: "inputTxt", span: 8,rules: { required: true, message: '请输入供应商名称', trigger: 'blur' }},
        { label: "供应商类型", codeField: "supplierType", type: "inputTxt", span: 8 },
        { label: "供应商地址", codeField: "supplierAddr", type: "inputTxt", span: 8 },
        { label: "税率", codeField: "taxNo", type: "inputTxt", span: 8 },
        { label: "邮政编码", codeField: "zip", type: "inputTxt", span: 8 },
        { label: "业务联系人", codeField: "linkMan", type: "inputTxt", span: 8 },
        { label: "业务联系人电话", codeField: "linkManTel", type: "inputTxt", span: 8 },
        { label: "财务联系人", codeField: "modifyName", type: "inputTxt", span: 8 },
        { label: "财务联系人电话", codeField: "supplierTel", type: "inputTxt", span: 8 },
        { label: "传真", codeField: "supplierFax", type: "inputTxt", span: 8 },
        { label: "Email", codeField: "email", type: "inputTxt", span: 8 },
        { label: "备注", codeField: "remark", type: "inputTxt", span: 8 }, 
        { label: "是否整车供应商", codeField: "isVehicleSupplier", type: "checkbox", span: 4 },
        { label: "是否备件供应", codeField: "isPartsSupplier", type: "checkbox", span: 4 },
        { label: "系统数据", codeField: "isSystem", type: "checkbox", span: 4 },
        { label: "厂商数据", codeField: "groupId", type: "checkbox", span: 4 },
      ],
      supplierManagerDialogData: {
        supplierId: "",
        supplierCode: "",
        supplierShortName: "",
        supplierType: "",
        supplierAddr: "",
        taxNo: "",
        zip: "",
        linkMan: "",
        linkManTel: "",
        modifyName: "",
        supplierTel: "",
        supplierFax: "",
        email: "",
        remark: "",
        isVehicleSupplier: "",
        isPartsSupplier: "",
        isSystem: "",
        groupId: "",
        updateControlId: ""
      },
    };
  },

  created() {},

  methods: {
    //获得父组件的值
    setEditData(val) {  
      debugger
      this.supplierManagerDialogData.supplierId = val[0].supplierId;
      this.supplierManagerDialogData.supplierCode = val[0].supplierCode;
      this.supplierManagerDialogData.supplierShortName = val[0].supplierShortName;
      this.supplierManagerDialogData.supplierFullName = val[0].supplierFullName;
      this.supplierManagerDialogData.supplierType = val[0].supplierType;
      this.supplierManagerDialogData.supplierAddr = val[0].supplierAddr;
      this.supplierManagerDialogData.taxNo = val[0].taxNo;
      this.supplierManagerDialogData.linkMan = val[0].linkMan;
      this.supplierManagerDialogData.linkManTel = val[0].linkManTel;
      this.supplierManagerDialogData.modifyName = val[0].modifyName;
      this.supplierManagerDialogData.supplierTel = val[0].supplierTel;
      this.supplierManagerDialogData.supplierFax = val[0].supplierFax;
      this.supplierManagerDialogData.email = val[0].email;
      this.supplierManagerDialogData.zip = val[0].zip;
      this.supplierManagerDialogData.remark = val[0].remark;
      this.supplierManagerDialogData.isEnable = val[0].isEnable;
      this.supplierManagerDialogData.isSystem = val[0].isSystem === '1' ? true : false;
      this.supplierManagerDialogData.groupId = val[0].groupId === '1' ? true : false;
      this.supplierManagerDialogData.updateControlId = val[0].updateControlId;
    },

    //选择传值给父组件
    close1(formName) {
      if (this.$refs[formName] !== undefined) {
        this.$refs[formName].resetFields();
      }
      var str = false;
      this.$emit("close1", str);
    },

    //保存
     save(formName) {
       if(this.supplierManagerDialogData.isSystem){
         this.supplierManagerDialogData.isSystem = '1';
       }else{
         this.supplierManagerDialogData.isSystem = '0';
       }
       if(this.supplierManagerDialogData.groupId){
         this.supplierManagerDialogData.groupId = '1';
       }else{
         this.supplierManagerDialogData.groupId = '0';
       }
          debugger
          supplierDoQMutationList(this.supplierManagerDialogData).then(response => {
            if(response.data[paApis.paDbDlrSupplierMutationSaveById.ServiceCode].result === "1") {
                this.$message({
                    type: "success",
                    message: "保存成功！"
                });
                this.close1(formName);
            }else{
              this.$message({
                type: "error",
                message: "保存失败！"
              });
            }
          });
    },
  }
};
</script>

<style lang="scss" scoped>
</style>
