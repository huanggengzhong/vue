<template>
  <div class="app-container app-container-table">
    <el-dialog
      :close-on-click-modal="false"
      title="通知信息设置"
      :visible.sync="dialogVisible"
      @close="sendCodeHandleVisible"
      @open="openCodeHandleVisible"
      :append-to-body="true"
      width="1000px"
    >
      <div class="filter-container filter-params" ref="conHeight">
        <el-row :gutter="26">
          <el-col :span="8">
            <label><font color="#ff0000">*</font>{{$t('org.label.ModuleCode')}}</label>
            <!-- 模板编码 -->
            <el-input placeholder="请输入" v-model="sysMsgModuleObj.moduleCode" size="small" clearable></el-input>
          </el-col>
          <el-col :span="8">
            <label><font color="#ff0000">*</font>{{$t('org.label.ModuleName')}}</label>
            <!-- 模板名称 -->
            <el-input placeholder="请输入" v-model="sysMsgModuleObj.moduleName" size="small" clearable></el-input>
          </el-col>
          <belongtoCode
            :span="8"
            :isMul="isMulFlag"
            :key="belongtoCodeKey"
            lookuptype="DB0001"
            :labelName="$t('org.label.serviceModel')"
            textField="lookupValueName"
            :code="sysMsgModuleObj.belongtoCode"
            @changeCode="getBelongtoCode"
          />
          <!-- 业务模块 -->
          <isEnable
            :span="8"
            :isMul="isMulFlag"
            :key="isEnableKey"
            :code="sysMsgModuleObj.isEnable"
            :labelName="$t('ve.label.isEnableCn')"
            :isRequire="true"
            @changeCode="getIsEnableCode"
          />
          <!-- 启用状态 -->
          <el-col :span="24">
            <label><font color="#ff0000">* </font>{{$t('org.label.ModuleTitle')}}</label>
            <!-- 模板标题 -->
            <el-input
              placeholder="请输入"
              v-model="sysMsgModuleObj.titleModule"
              style="width:845px;"
              size="small"
              clearable
            ></el-input>
          </el-col>
          <el-col :span="24">
            <label><font color="#ff0000">* </font>{{$t('org.label.ModuleBody')}}</label>
            <!-- 模板内容 -->
            <el-input
              type="textarea"
              :rows="3"
              style="width:845px;"
              placeholder="请输入内容"
              v-model="sysMsgModuleObj.contentModule"
            ></el-input>
          </el-col>
        </el-row>
      </div>

      <div style="text-align:right;margin-top: 40px">
        <el-button type="primary" size="small" @click="save()">{{$t('sys.button.save')}}</el-button>
        <!-- 保存 -->
        <el-button size="small" @click="resetsysMsgModuleObj()">{{$t('sys.button.reset')}}</el-button>
        <!-- 重置 -->
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import isEnable from "@/components/org/isEnable/isEnable";
import belongtoCode from "@/components/org/LookupValue";

export default {
  components: {
    isEnable,
    belongtoCode
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    sysMsgModuleObjProp: {
      type: Object,
      default: function() {
        return {
          moduleCode: "",
          moduleName: "",
          belongtoCode: "",
          isEnable: "",
          titleModule: "",
          contentModule: ""
        };
      }
    }
  },
  data() {
    return {
      isMulFlag: false,
      userName: "",
      // 网格查询API配置对象
      apiConfig: orgApis.mdsSysSceneSettingQueryByPage,
      isEnableKey: "a",
      belongtoCodeKey: "b",
      showKey: "c",
      sysMsgModuleObj: {
        moduleId:"",
        moduleCode: "",
        moduleName: "",
        belongtoCode: "",
        isEnable: "",
        titleModule: "",
        contentModule: ""
      },
      listQuery: {
        pageIndex: 1,
        pageSize: 10
      },
      // 弹窗状态
      dialogStatus: "",
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  methods: {
    resetsysMsgModuleObj() {
      this.sysMsgModuleObj = {
        moduleId:"",
        moduleCode: "",
        moduleName: "",
        belongtoCode: "",
        isEnable: "",
        titleModule: "",
        contentModule: ""
      };
    },
    getBelongtoCode(val, txt) {
      this.sysMsgModuleObj.belongtoCode = val;
    },
    getIsEnableCode(val) {
      this.sysMsgModuleObj.isEnable = val;
    },
    //保存
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.sysMsgModuleObj.moduleCode)) {
        that.$message({
          message: '请输入模块编码',
          type: 'warning',
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.sysMsgModuleObj.moduleName)) {
        that.$message({
          message: '请输入模块名称',
          type: 'warning',
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.sysMsgModuleObj.titleModule)) {
        that.$message({
          message: '请输入标题信息',
          type: 'warning',
          duration: 2000
        });
        return;
      }

      if (that.$utils.isEmpty(that.sysMsgModuleObj.contentModule)) {
        that.$message({
          message: '请输入内容信息',
          type: 'warning',
          duration: 2000
        });
        return;
      }

      if (that.$utils.isEmpty(that.sysMsgModuleObj.isEnable)) {
        that.$message({
          message: '请选择是否启用',
          type: 'warning',
          duration: 2000
        });
        return;
      }

      //通知场景保存
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: orgApis.mdsSysMsgModuleMutationSave,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.sysMsgModuleObj
        }
      };
      
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.listLoading = false;
          that.$message({
            message: "保存成功",
            type: "success",
            duration: 2000
          });
          that.sendCodeHandleVisible();
        }
      });
    },
    sendCodeHandleVisible() {
      this.$emit("visible", false);
    },
    openCodeHandleVisible() {
      this.sysMsgModuleObj = {
        moduleId:this.sysMsgModuleObjProp.moduleId,
        moduleCode: this.sysMsgModuleObjProp.moduleCode,
        moduleName: this.sysMsgModuleObjProp.moduleName,
        belongtoCode: this.sysMsgModuleObjProp.belongtoCode,
        titleModule:this.sysMsgModuleObjProp.titleModule,
        contentModule:this.sysMsgModuleObjProp.contentModule,
        isEnable: this.sysMsgModuleObjProp.isEnable,
      };
    }
  },
  watch: {
    sysMsgModuleObj(val) {
      this.isEnableKey = this.isEnableKey + 1;
      this.belongtoCodeKey = this.belongtoCodeKey + 1;
    }
  }
};
</script>
<style scoped>
/*按钮列移动到面包屑重合位置*/
.ttt {
  width: 1000px;
  height: 150px;
}
</style>
