<!--
* description: 备件仓库仓位维护--弹窗
* author: chchhui
* createdDate: 2019-08-01
* logs：
*  20190801 新增页面功能
-->
<template>
  <section>
    <el-dialog
      :title="this.handleTitle == 0 ? '添加仓库' : '维护仓库'"
      :visible.sync="wareHouseDialogFormVisible"
      :append-to-body="true"
      width="900px"
      @close="sendCodeHandleVisible"
      v-bind:class="isValiad ? 'checkInput' :'validInput'"
    >
      <div class="filter-container filter-params">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-row>
            <el-col :span="8">
              <el-form-item label="仓库编码" prop="warehouseCode">
                <el-input
                  v-model="ruleForm.warehouseCode"
                  size="small"
                  :disabled="this.handleTitle == 0 ? false : true"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="仓库名称" prop="warehouseName">
                <el-input v-model="ruleForm.warehouseName" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="是否启用" prop="isEnable" clearable>
                <el-select v-model="ruleForm.isEnable" placeholder="请选择" @change="getIsEnable">
                  <el-option label="是" value="1"></el-option>
                  <el-option label="否" value="0"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <!-- <el-col :span="8">
              <el-form-item label="是否有备件" prop="hasPart" clearable>
                <el-select v-model="ruleForm.hasPart" placeholder="请选择" @change="getIsEnable">
                  <el-option label="是" value="1"></el-option>
                  <el-option label="否" value="0"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="是否有仓位" prop="hasPlace" clearable>
                <el-select v-model="ruleForm.hasPlace" placeholder="请选择" @change="getIsEnable">
                  <el-option label="是" value="1"></el-option>
                  <el-option label="否" value="0"></el-option>
                </el-select>
              </el-form-item>
            </el-col>-->
            <el-col :span="20">
              <label class="remark">备注</label>
              <el-input v-model="ruleForm.remark" placeholder="请输入" size="small"></el-input>
            </el-col>
          </el-row>
          <div class="filter-container filter-button">
            <el-button @click="submitForm('ruleForm')" type="primary">保存</el-button>
          </div>
        </el-form>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  props: {
    wareHouseDialogFormVisible: {
      type: Boolean,
      default: function() {
        return false;
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
      uploadHeaders: {
        Authorization: this.$store.getters.token
      },
      warehouseId: "",
      list: [],
      selected: "",
      i: 0,
      showTitle: this.handleTitle == 0 ? "仓库编辑" : "添加仓库",
      isValiad: false,
      pageIndex: 1,
      pageSize: 10,
      listQuery: {
        dlrId: this.$store.getters.orgInfo.DLR_ID || undefined,
        warehouseId: this.editData.warehouseId || undefined,
        oemCode: this.editData.oemCode || undefined,
        groupCode: this.editData.groupCode || undefined
      },
      ruleForm: {
        warehouseId: this.editData.warehouseId || "",
        updateControlId: this.editData.updateControlId || "",
        dlrId: this.$store.getters.orgInfo.DLR_ID,
        warehouseCode: this.editData.warehouseCode || "",
        warehouseName: this.editData.warehouseName || "",
        isEnable: this.editData.isEnable || "",
        // hasPart: this.editData.hasPart || "",
        // hasPlace: this.editData.hasPlace || "",
        remark: this.editData.remark || ""
      },
      rules: {
        warehouseCode: [
          { required: true, message: "请填写仓库编码", trigger: "blur" }
        ],
        warehouseName: [
          { required: true, message: "请填写仓库名称", trigger: "blur" }
        ],
        isEnable: [
          { required: true, message: "请选择是否启用", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    if (this.handleTitle == 0) {
      return;
    } else {
      this.placeQuery();
    }
  },

  methods: {
    getInputCode(val) {},
    getIsEnable(val) {
      this.ruleForm.isEnable = val;
    },

    //仓库保存
    submitForm(formName) {
      const that = this;
      that.$refs[formName].validate(valid => {
        if (valid) {
          let queryObj = {
            //保存需要传 type="mutation"
            type: "mutation",
            // api配置
            apiConfig: paApis.partsDlrWareHouseMutationSave,
            // 需要调用的API服务配置
            apiServices: [
              {
                //表格中台返回网格的字段
                apiQueryRow: []
              }
            ],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              //当前中台使用的名称有dataInfo、info，具体查看API文档
              dataInfo: that.ruleForm
            }
          };
          //转换了中台请求格式数据
          var paramD = that.$getParams(queryObj);
          requestGraphQL(paramD).then(response => {
            if (
              response.data[paApis.partsDlrWareHouseMutationSave.ServiceCode]
                .result === "1"
            ) {
              //通关如果的状态确认是编辑还是添加
              if (that.handleTitle == 0) {
                that.$message({ message: "添加成功", type: "success" });
                let str =
                  response.data[
                    paApis.partsDlrWareHouseMutationSave.ServiceCode
                  ].rows;
              } else {
                that.$message({ message: "修改成功", type: "success" });
              }
              that.wareHouseDialogFormVisible = false;
            } else {
              // 保存失败
              that.$message({
                message:
                  "保存失败：" +
                  response.data[
                    paApis.partsDlrWareHouseMutationSave.ServiceCode
                  ].msg,
                type: "warn",
                uration: 2000
              });
            }
          });
        } else {
          that.isValiad = true;
          console.log("error submit!!");
          return false;
        }
      });
    },

    sendCodeHandleVisible() {
      this.$emit("visible", false);
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .remark {
  width: 60px !important;
}
// /deep/ .filter-params .el-col .el-input {
//   width: 84% !important;
// }
</style>

