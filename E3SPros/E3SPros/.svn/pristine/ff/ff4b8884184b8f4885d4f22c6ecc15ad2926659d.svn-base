<template>
  <el-dialog
    title="销售开关维护"
    :visible.sync="editDialogMaintenanceVisible"
    :close-on-click-modal="false"
    width="65%"
    @close="close2()"
    :append-to-body="true"
  >
    <div class="filter-container filter-params">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="ruleForm">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item prop="partNo">
              <lableName curLabelName="备件号" :isShowLabel="true" :isRequire="false"></lableName>
              <!-- <el-input v-model="ruleForm.partNo" clearable size="small" disabled="disabled" /> readonly  -->
              <el-input v-model="ruleForm.partNo" clearable size="small" disabled="disabled" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="partName">
              <lableName curLabelName="备件名称" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input v-model="ruleForm.partName" clearable size="small" disabled="disabled" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="PartNameEN">
              <lableName curLabelName="英文名称" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input v-model="ruleForm.PartNameEN" clearable size="small" disabled="disabled" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="unit">
              <lableName curLabelName="计量单位" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input v-model="ruleForm.unit" clearable size="small" disabled="disabled" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="leastPackOut">
              <lableName curLabelName="SNP" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input v-model="ruleForm.leastPackOut" clearable size="small" disabled="disabled" />
            </el-form-item>
          </el-col>
          <!--备件状态-->
          <LookupValue
            :span="8"
            :isMul="false"
            :isshow="true"
            :options="statusOption"
            :code="ruleForm.partStateName"
            :disabled="disabled"
            labelName="备件状态"
            @changeCode="getRepairStatus1"
          />
        </el-row>
        <el-row :gutter="24">
          <!--库存开关-->
          <LookupValue
            :span="8"
            :isMul="false"
            :isshow="true"
            :options="inventoryOption"
            :code="ruleForm.storeSwitch"
            :disabled="disabled"
            labelName="库存开关"
            @changeCode="getRepairStatus2"
          />
          <!--采购开关-->
          <LookupValue
            :span="8"
            :isMul="false"
            :isshow="true"
            :options="procurementOption"
            :code="ruleForm.pvPurSwitch"
            :disabled="disabled"
            labelName="采购开关"
            @changeCode="getRepairStatus3"
          />
          <el-col :span="8">
            <el-form-item prop="remark">
              <lableName curLabelName="备注" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input v-model="ruleForm.remark" clearable size="small" disabled="disabled" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <!--销售开关-->
          <!-- <LookupValue 
            :span="8"
            :isMul="false"
            :isshow="true"
            :options="refindOption"
            :code="ruleForm.dlrOrderSwitch"
            labelName="销售开关"
          @changeCode="getRepairStatus4"/>-->
          <el-col :span="8">
            <el-form-item prop="dlrOrderSwitch">
              <lableName curLabelName="销售开关" :isShowLabel="true" :isRequire="true"></lableName>
              <el-select v-model="ruleForm.dlrOrderSwitch" size="small" placeholder="请选择" clearable>
                <el-option
                  v-for="item in refindOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item prop="operateReason">
              <lableName curLabelName="修改原因" :isShowLabel="true" :isRequire="true"></lableName>
              <el-input v-model="ruleForm.operateReason" clearable size="small" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="24">
            <el-button @click="save('ruleForm')" type="primary">保存</el-button>
            <el-button @click="close1('ruleForm',true,1)" type="primary">取消</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </el-dialog>
</template>
<script>
import { doQueryList7 } from "@/api/pa/orderAuditItem/orderAuditItem";
import { paDbPartListQuerySelectPartNo } from "@/api/pa/paDbVarietyMutation1";
import LookupValue from "@/components/org/LookupValue/index";
import lableName from "@/components/lableName";
import { paApis } from "@/api/graphQLApiList/pa";
export default {
  components: {
    LookupValue,
    lableName
  },

  props: {
    editDialogMaintenanceVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },

  data() {
    return {
      rowDetail: "",
      kaiguan: '',
      flag: false,
      inventoryOption: [], // 库存开关
      procurementOption: [], // 采购开关
      statusOption: [], // 备件状态
      refindOption: [], // 销售开关

      disabled: true,
      listQuery: {
        partId: "",
        dlrOrderSwitch: "",
        updateControlId: ""
      },
      ruleForm: {
        partId: "",
        partNo: "",
        partName: "",
        PartNameEN: "",
        unit: "",
        leastPackOut: "",
        partStateName: "",
        storeSwitch: "",
        //stockStateName: '',
        pvPurSwitch: "",
        //purStateName: '',
        dlrOrderSwitch: "",
        remark: "",
        operateReason: "",
        updateControlId: ""
      },
      rules: {
        operateReason: [
          { required: true, message: "请输入修改原因", trigger: "change" }
          // { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'change' }
        ],
        dlrOrderSwitch: [
          { required: true, message: "请选择销售开关", trigger: "change" }
        ]
      }
    };
  },

  created() {
  },

  methods: {
    save(formName) {
        if(this.kaiguan == this.ruleForm.dlrOrderSwitch){   //检测销售开关状态值是否改变
          this.flag = false;
        }else{
          this.flag = true;
        }
        this.$refs[formName].validate(valid => {
        if (valid) {
          if(this.flag){
            let saveData = {
              partId: this.ruleForm.partId,
              operateReason: this.ruleForm.operateReason,
              updateControlId: this.ruleForm.updateControlId,
              dlrOrderSwitch: this.ruleForm.dlrOrderSwitch
           };
            doQueryList7(saveData).then(response => {
              if (response.data[paApis.paDbPartListMutationSavePartOrderSwitch.ServiceCode].result === "1") {
                this.$message({
                  type: "success",
                  message: "保存成功！"
                });
                if (this.$refs[formName] !== undefined) {
                  this.$refs[formName].resetFields();
                }
                this.close1(formName,false,0);
              } else {
                this.$message({
                  type: "error",
                  message: "保存失败！"
                });
              }
            });
          }else{
            this.$message({
            type: "error",
            message: "销售开关状态没有改变!"
          });
          }
        } else {
          this.isValiad = false;
          this.$message({
            type: "error",
            message: "请填写修改原因!"
          });
        }
      });
    },

    //获得父组件的值
    setEditData(val) {
      this.rowDetail = val[0]; //行值
      this.inventoryOption = val[1]; // 库存开关
      this.procurementOption = val[2]; // 采购开关
      this.statusOption = val[3]; // 备件状态
      //  this.refindOption = val[4];    // 销售开关

      var temp_array = [];
      val[4].forEach(row => {
        temp_array.push({
          value: row.lookupValueCode,
          label: row.lookupValueName
        });
      });
      this.refindOption = temp_array;

      this.ruleForm.partId = this.rowDetail.partId;
      this.ruleForm.partNo = this.rowDetail.partNo;
      this.ruleForm.partName = this.rowDetail.partName;
      this.ruleForm.PartNameEN = this.rowDetail.PartNameEN;
      this.ruleForm.unit = this.rowDetail.unit;
      this.ruleForm.leastPackOut = this.rowDetail.leastPackOut;
      this.ruleForm.partStateName = this.rowDetail.partStateName;
      this.ruleForm.storeSwitch = this.rowDetail.storeSwitch;
      this.ruleForm.pvPurSwitch = this.rowDetail.pvPurSwitch;
      this.ruleForm.dlrOrderSwitch = this.rowDetail.dlrOrderSwitch;
      this.kaiguan = this.rowDetail.dlrOrderSwitch;   //暂存销售开关状态值
      this.ruleForm.remark = this.rowDetail.remark;
      this.ruleForm.operateReason = this.rowDetail.operateReason;
      this.ruleForm.updateControlId = this.rowDetail.updateControlId;
    },

    //选择传值给父组件
    close2() {
      this.$emit("close2", false);
    },
    close1(formName,a,b) {
      if(this.$refs[formName]!==undefined){
        this.$refs[formName].resetFields();
      }
      var str = false + " " + a + " " + b;
     // console.log("弹窗:"+str)
      this.$emit("close1", str);
    },

    getRepairStatus1(val) {
      this.ruleForm.partStateName = val;
    },
    getRepairStatus2(val) {
      this.ruleForm.storeSwitch = val;
    },
    getRepairStatus3(val) {
      this.ruleForm.pvPurSwitch = val;
    },
    getRepairStatus4(val) {
      this.ruleForm.dlrOrderSwitch = val;
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog .el-form-item {
  margin-bottom: 0px;
}
</style>
