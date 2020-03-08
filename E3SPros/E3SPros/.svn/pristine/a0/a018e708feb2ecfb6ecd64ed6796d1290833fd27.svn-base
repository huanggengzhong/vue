<!--
* description: 备件仓库维护/新增--弹窗
* author: chchhui
* createdDate: 2019-08-01
* logs：
*  20190801 新增页面功能
-->
<template>
  <section>
    <el-dialog
      :append-to-body="true"
      width="900px"
      :title="showTitle "
      :visible.sync="handleVisibled"
      center
      @close="sendCodeHandleVisible"
      v-bind:class="isValiad ? 'checkInput' :'validInput'"
    >
      <div class="filter-container filter-params">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="仓库编码" prop="warehouseCode" clearable>
                <el-input v-model="ruleForm.warehouseCode" placeholder="请选择" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="仓库名称" prop="warehouseName" clearable>
                <el-input v-model="ruleForm.warehouseName" placeholder="请选择" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="仓库地址" prop="warehouseAddr" clearable>
                <el-input v-model="ruleForm.warehouseAddr" placeholder="请选择" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="是否中心库" prop="isCenterWarehouse" clearable>
                <el-select v-model="ruleForm.isCenterWarehouse" placeholder="请选择">
                  <el-option label="是" value="1"></el-option>
                  <el-option label="否" value="0"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="是否虚拟库" prop="isVirtualStore" clearable>
                <el-select v-model="ruleForm.isVirtualStore" placeholder="请选择">
                  <el-option label="是" value="1"></el-option>
                  <el-option label="否" value="0"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="是否物流库" prop="isLogistic" clearable>
                <el-select v-model="ruleForm.isLogistic" placeholder="请选择">
                  <el-option label="是" value="1"></el-option>
                  <el-option label="否" value="0"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="是否启用" prop="isEnable" clearable>
                <el-select v-model="ruleForm.isEnable" placeholder="请选择启用状态">
                  <el-option label="是" value="1"></el-option>
                  <el-option label="否" value="0"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="16" class="remark">
              <el-form-item label="备注" prop="remark">
                <el-input v-model="ruleForm.remark" placeholder="请选择" size="small"></el-input>
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
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  props: {
    handleVisible: {
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
      options: [
        {
          value: "1",
          lable: "是"
        },
        {
          value: "0",
          lable: "否"
        }
      ],
      state: this.handleTitle == 1 ? false : true,
      handleVisibled: this.handleVisible,
      showTitle: this.handleTitle == 0 ? "仓库编辑" : "添加仓库",
      isValiad: false,
      ruleForm: {
        warehouseId: this.editData.warehouseId || "",
        updateControlId: this.editData.updateControlId || "",
        warehouseCode: this.editData.warehouseCode || "",
        warehouseName: this.editData.warehouseName || "",
        warehouseAddr: this.editData.warehouseAddr || "",
        isCenterWarehouse:
          String(this.editData.isCenterWarehouse) != "undefined"
            ? String(this.editData.isCenterWarehouse)
            : "",
        isVirtualStore:
          String(this.editData.isVirtualStore) != "undefined"
            ? String(this.editData.isVirtualStore)
            : "",
        isLogistic:
          String(this.editData.isLogistic) != "undefined"
            ? String(this.editData.isLogistic)
            : "",
        isEnable:
          String(this.editData.isEnable) != "undefined"
            ? String(this.editData.isEnable)
            : "",
        remark: this.editData.remark || ""
      },
      rules: {
        warehouseCode: [
          { required: true, message: "请输入仓库编码", trigger: "blur" }
        ],
        warehouseName: [
          { required: true, message: "请输入仓库名称", trigger: "change" }
        ],
        warehouseAddr: [
          { required: true, message: "请输入仓库地址", trigger: "change" }
        ],
        isCenterWarehouse: [
          { required: true, message: "请选择是否中心库", trigger: "change" }
        ],
        isVirtualStore: [
          { required: true, message: "请选择是否虚拟库", trigger: "change" }
        ],
        isLogistic: [
          { required: true, message: "请选择是否物流库", trigger: "change" }
        ],
        isEnable: [
          { required: true, message: "请选择是否启用", trigger: "change" }
        ]
      }
    };
  },
  created() {},
  methods: {
    submitForm(formName) {
      const that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          let queryObj = {
            //保存需要传 type="mutation"
            type: "mutation",
            // api配置
            apiConfig: paApis.partsOemWareHouseMutationSave,
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
              response.data[paApis.partsOemWareHouseMutationSave.ServiceCode]
                .result === "1"
            ) {
              //通关如果的状态确认是编辑还是添加
              if (this.handleTitle == 0) {
                this.$message({ message: "修改成功", type: "success" });
              } else {
                this.$message({ message: "添加成功", type: "success" });
              }
              this.sendCodeHandleVisible();
            } else {
              // 保存失败
              this.$message({
                message:
                  "保存失败：" +
                  response.data[queryObj.apiConfig.ServiceCode].msg,
                type: "warn",
                uration: 2000
              });
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
      this.$emit("visible", false);
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .remark .el-form-item__label {
  width: 14%;
}
/deep/ .remark .el-form-item__content .el-input {
  width: 84%;
}

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
  margin-bottom: 15px;
}
/deep/ .filter-title {
  height: 0px;
  border-bottom: 0;
}
/deep/ .checkInput .el-dialog {
  height: 330px;
}
/deep/ .validInput .el-dialog {
  height: 254px;
}
/deep/.checkInput .el-form-item {
  margin-bottom: 22px;
}
/deep/ .validInput .el-form-item {
  margin-bottom: 0px;
}
</style>

