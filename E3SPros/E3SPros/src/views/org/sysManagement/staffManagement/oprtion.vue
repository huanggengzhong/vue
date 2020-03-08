<template>
  <section>
    <el-dialog
      width="900px"
      height="100%"
      :title="showTitle"
      :visible.sync="handleVisibled"
      :append-to-body="true"
      center
     
      @close="sendCodeHandleVisible"
      v-bind:class="isValiad ? 'checkInput' :'validInput'"
    >
      <div class="filter-container filter-title"></div>
      <div class="filter-container filter-params">
        <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
          <el-row :gutter="10">
            <el-col :span="8">
              <!-- 员工姓名 -->
              <el-form-item required :label="$t('org.label.empName')" prop="empName">
                <el-input v-model="ruleForm.empName" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 所属组织 -->
              <el-form-item required  :label="$t('org.label.orgName')" prop="orgName">
                <el-input clearable v-model="ruleForm.orgName" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 岗位 -->
              <el-form-item  required  :label="$t('org.label.stationName')" prop="stationId">
                <el-input v-model="ruleForm.stationId" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 员工性别 -->
              <el-form-item required  :label="$t('org.label.genderName')" prop="genderName">
                <!-- <el-input clearable v-model="ruleForm.genderName" placeholder="请选择" size="small"></el-input> -->
                 <el-select clearable v-model="ruleForm.genderName"  placeholder="请选择">
                  <el-option label="女" value="0"></el-option>
                  <el-option label="男" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 创建登录名 -->
              <el-form-item required  :label="$t('org.label.userName')" prop="userName">
                <!--<el-select v-model="ruleForm.userName" placeholder="请选择管理员角色">
                            <el-option label="否" value="0"></el-option>
                            <el-option label="是" value="1"></el-option>
                </el-select>-->
                <el-input clearable v-model="ruleForm.userName" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 登录帐号名 -->
              <el-form-item :label="$t('org.label.userName1')" prop="userName">
                <el-input clearable v-model="ruleForm.userName" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 登录密码 -->
              <el-form-item :label="$t('org.label.password')" prop="password">
                <el-input
                  :disabled="disbleEdit"
                  clearable
                  v-model="ruleForm.password"
                  placeholder="请输入"
                  size="small"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 冻结状态 -->
              <el-form-item :label="$t('org.label.isFrozen1')" prop="isFrozen">
                <el-select v-model="ruleForm.isFrozen" placeholder="请选择冻结状态">
                  <el-option label="否" value="0"></el-option>
                  <el-option label="是" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 手机号码 -->
              <el-form-item required  :label="$t('org.label.mobile')" prop="mobile">
                <el-input clearable v-model="ruleForm.mobile" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 证件类型 -->
              <el-form-item required  :label="$t('org.label.credTypeCode')" prop="credTypeCode">
                <el-select v-model="ruleForm.credTypeCode" placeholder="请选择证件类型">
                  <!-- 身份证 -->
                  <el-option :label="$t('org.label.shenFenZheng')" value="0"></el-option>
                  <!-- 护照 -->
                  <el-option :label="$t('org.label.huZhao')" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 证件号码 -->
              <el-form-item :label="$t('org.label.credNo')" prop="credNo">
                <el-input clearable v-model="ruleForm.credNo" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 工作电话 -->
              <el-form-item required  :label="$t('org.label.workTel')" prop="workTel">
                <el-input clearable v-model="ruleForm.workTel" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 招聘方式 -->
              <el-form-item :label="$t('org.label.employType')" prop="employType">
                <el-select v-model="ruleForm.employType" placeholder="请选择招聘方式">
                  <el-option label="校招" value="0"></el-option>
                  <el-option label="社招" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 入职日期 -->
              <el-form-item :label="$t('org.label.employDate')" prop="employDate">
                <el-date-picker v-model="ruleForm.employDate" type="date" placeholder="选择入职日期"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 公历日期 -->
              <el-form-item :label="$t('org.label.birthDate')" prop="birthDate">
                <el-date-picker v-model="ruleForm.birthDate" type="date" placeholder="选择公历日期"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item required  label="Email" prop="email">
                <el-input clearable v-model="ruleForm.email" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 紧急联系人 -->
              <el-form-item :label="$t('org.label.secondMan')" prop="secondMan">
                <el-input clearable v-model="ruleForm.secondMan" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 国籍 -->
              <el-form-item :label="$t('org.label.nationalityCode')" prop="nationalityCode">
                <el-select v-model="ruleForm.nationalityCode" placeholder="请选择国籍">
                  <el-option label="中国" value="0"></el-option>
                  <el-option label="美国" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 籍贯 -->
              <el-form-item :label="$t('org.label.nativePlace')" prop="nativePlace">
                <el-input clearable v-model="ruleForm.nativePlace" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 民族 -->
              <el-form-item :label="$t('org.label.nationCode')" prop="nationCode">
                <el-select v-model="ruleForm.nationCode" placeholder="请选择民族">
                  <el-option label="汉族" value="0"></el-option>
                  <el-option label="苗族" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 政治面貌 -->
              <el-form-item :label="$t('org.label.politicsCode')" prop="politicsCode">
                <el-input clearable v-model="ruleForm.politicsCode" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 婚姻状况 -->
              <el-form-item :label="$t('org.label.marriagedCode')" prop="marriagedCode">
                <el-select v-model="ruleForm.marriagedCode" placeholder="请选择">
                  <el-option label="否" value="0"></el-option>
                  <el-option label="是" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 学历 -->
              <el-form-item :label="$t('org.label.degreeCode')" prop="degreeCode">
                <el-select v-model="ruleForm.degreeCode" placeholder="请选择学历">
                  <el-option label="本科" value="0"></el-option>
                  <el-option label="专科" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 毕业学校 -->
              <el-form-item :label="$t('org.label.school')" prop="school">
                <el-input clearable v-model="ruleForm.school" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 专业 -->
              <el-form-item :label="$t('org.label.degreepro')" prop="degreepro">
                <el-input clearable v-model="ruleForm.degreepro" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 传真 -->
              <el-form-item :label="$t('org.label.fax')" prop="fax">
                <el-input clearable v-model="ruleForm.fax" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 联系人电话 -->
              <el-form-item :label="$t('org.label.secondManTel')" prop="secondManTel">
                <el-input clearable v-model="ruleForm.secondManTel" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 家庭电话 -->
              <el-form-item :label="$t('org.label.familyPhone')" prop="familyPhone">
                <el-input clearable v-model="ruleForm.familyPhone" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 个人通信地址 -->
              <el-form-item :label="$t('org.label.personAddr')" prop="personAddr">
                <el-input clearable v-model="ruleForm.personAddr" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 领驾照时间 -->
              <el-form-item :label="$t('org.label.driverDate')" prop="driverDate">
                <el-date-picker v-model="ruleForm.driverDate" type="date" placeholder="选择领取驾照时间"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 从事汽车行业时间 -->
              <el-form-item :label="$t('org.label.businessDate')" prop="businessDate">
                <el-date-picker v-model="ruleForm.businessDate" type="date" placeholder="从事汽车行业时间"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 邮编 -->
              <el-form-item :label="$t('org.label.zip')" prop="zip">
                <el-input clearable v-model="ruleForm.zip" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 状态 -->
              <el-form-item :label="$t('org.label.isFrozen2')" prop="isFrozen">
                <el-select v-model="ruleForm.isFrozen" placeholder="请选择">
                  <el-option label="在职" value="0"></el-option>
                  <el-option label="离职" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <!-- 离职日期 -->
              <el-form-item :label="$t('org.label.leaveDate')" prop="leaveDate">
                <el-date-picker v-model="ruleForm.leaveDate" type="date" placeholder="从事汽车行业时间"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item class="dialog-footer">
            <!-- 保存 -->
            <el-button type="primary" @click="submitForm('ruleForm')">{{this.$t('sys.button.save')}}</el-button>
            <el-button @click="sendCodeHandleVisible">{{this.$t('sys.button.cancel')}}</el-button>
            <!-- 取消 -->
            <el-button @click="reset">{{this.$t('sys.button.reset')}}</el-button>
            <!-- 重置 -->
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";

import { constants } from "crypto";
// import { timeChoose } from "@/components/org/datePicker";
export default {
//   components: {
//     timeChoose
//   },
  props: {
    handleVisible: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    handleTitle: {
      type: Number,
      default: function() {
        return 1;
      }
    },
    editData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      handleVisibled: this.handleVisible,
      showTitle:
        this.handleTitle == 0 ? "添加厂商员工管理" : "修改厂商员工管理",
      disbleEdit: this.handleTitle == 0 ? false : true,
      isValiad: false,
      ruleForm: {
        //员工姓名
        empName: this.editData.empName || "",
        //员工编码
        empCode: this.editData.empCode || "",
        //经销商编码
        dlrCode: this.editData.dlrCode || "",
        //所属经销商Id
        dlrId: this.editData.dlrId || "",
        //所属品牌
        carBrandCode: this.editData.carBrandCode || "1",
        //所属组织
        orgName: this.editData.orgName || "",
        deptId: this.editData.deptId || "",
        // orgId: this.editData.orgId || "",
        //岗位
        stationId: this.editData.stationId || "",
        //员工性别
        genderName: this.editData.genderName || "",
        //登录名和账号名
        userName: this.editData.userName || "",
        //密码
        password: this.handleTitle == 0 ? "" : "******",
        //冻结状态
        isFrozen:
          String(this.editData.isFrozen) != "undefined"
            ? String(this.editData.isFrozen)
            : "",
        //手机号码
        mobile: this.editData.mobile || "",
        //证件类型
        credTypeCode:
          String(this.editData.credTypeCode) != "undefined"
            ? String(this.editData.credTypeCode)
            : "",
        //身份证号码
        credNo: this.editData.credNo || "",
        //工作号码
        workTel: this.editData.workTel || "",
        //招聘方式
        employType:
          String(this.editData.employType) != "undefined"
            ? String(this.editData.employType)
            : "",
        //入职日期
        employDate: this.editData.employDate || "",
        //公历日期
        birthDate: this.editData.birthDate || "",
        //Email
        email: this.editData.email || "",
        //紧急联络人
        secondMan: this.editData.secondMan || "",
        //紧急联络人联系方式
        secondManTel: this.editData.secondManTel || "",
        //国籍

        nationalityCode:
          String(this.editData.nationalityCode) != "undefined"
            ? String(this.editData.nationalityCode)
            : "",
        //籍贯
        nativePlace: this.editData.nativePlace || "",
        //民族
        nationCode:
          String(this.editData.nationCode) != "undefined"
            ? String(this.editData.nationCode)
            : "",
        //政治面貌
        politicsCode: this.editData.politicsCode || "",
        //婚姻状态
        marriagedCode: this.editData.marriagedCode || "",
        //学历(学历编码)
        degreeCode: this.editData.degreeCode || "",
        //毕业学校
        school: this.editData.school || "",
        //专业
        degreepro: this.editData.degreepro || "",
        //传真
        fax: this.editData.fax || "",
        //家庭电话
        familyPhone: this.editData.familyPhone || "",
        //联系地址
        personAddr: this.editData.personAddr || "",
        //驾照日期
        driverDate: this.editData.driverDate || "",
        //从事汽车行业时间
        businessDate: this.editData.businessDate || "",
        //邮编
        zip: this.editData.zip || "",
        //状态
        isFrozen: this.editData.isFrozen || "",
        //离职日期
        leaveDate: this.editData.leaveDate || ""
      }
    };
  },
  created() {},
  methods: {
    submitForm(formName) {
      const that = this;
      this.$refs[formName].validate(valid => {
      //   if (this.ruleForm.empName == "") {
      //     this.$message({ message: "不能为空", type: "warning" });
      //     return false;
      //   }
      //   if (this.ruleForm.orgName == "") {
      //     this.$message({ message: "不能为空", type: "warning" });
      //     return false;
      //   }
      //   if (this.ruleForm.stationId == "") {
      //     this.$message({ message: "不能为空", type: "warning" });
      //     return false;
      //   }
      //   if (this.ruleForm.genderName == "") {
      //     this.$message({ message: "不能为空", type: "warning" });
      //     return false;
      //   }
      //   if (this.ruleForm.userName == "") {
      //     this.$message({ message: "不能为空", type: "warning" });
      //     return false;
      //   }
      //   if (this.ruleForm.password == "") {
      //     this.message({ message: "不能为空", type: "warning" });
      //     return false;
      //   }
        if (valid) {
          let queryObj = {
            //保存需要传 type="mutation"
            type: "mutation",
            // api配置
            apiConfig: orgApis.mdmOrgEmployeeMutationSaveById,
            // 需要调用的API服务配置
            apiServices: [
              {
                //表格中台返回网格的字段
                apiQueryRow: []
              }
            ],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              pageSize: 1000,
              pageIndex: 1,
              //当前中台使用的名称有dataInfo、info，具体查看API文档
              dataInfo: that.ruleForm
            }
          };
          //转换了中台请求格式数据
          var paramD = that.$getParams(queryObj);
          requestGraphQL(paramD).then(response => {
            if (
              response.data[orgApis.mdmOrgEmployeeMutationSaveById.ServiceCode]
                .result === "1"
            ) {
              //通关如果的状态确认是编辑还是添加
              if (this.handleTitle == 0) {
                this.$message({ message: "添加成功", type: "success" });
              } else {
                this.$message({ message: "修改成功", type: "success" });
              }
              this.sendCodeHandleVisible();
            }
          });
        } else {
          this.isValiad = true;
          console.log("error submit!!");
          return false;
        }
      });
    },
    sendCodeHandleVisible() {
      this.handleVisibled = false;
      this.$emit("visible", false);
    },
    reset() {
      this.ruleForm = {
        orgName: "",
        orgCode: "",
        userName: "",
        roleName: "",
        password: "",
        isEnable: ""
      };
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .filter-params label {
  margin-right: 0px;
}
/deep/ .el-input__inner {
  height: 28px;
  line-height: 28px;
}
/deep/ .el-input__icon {
  line-height: 0;
}
/deep/ .el-input__prefix {
  top: 0px;
}
/deep/ .filter-params .el-col {
  margin-bottom: 10px;
}
/deep/ .el-dialog__wrapper .el-dialog {
  height: 605px;
  margin-top: 10px !important;
}
/deep/ .validInput .el-dialog {
  // height: 230px;
}
/deep/ .filter-title {
  height: 0;
  border-bottom: none;
}
/deep/ .el-form-item__error {
  left: 43%;
}
/deep/.checkInput .el-form-item {
  margin-bottom: 22px;
}
/deep/ .validInput .el-form-item {
  margin-bottom: 10px;
}
/deep/ .el-dialog--center{
height: 95%;

  }
</style>