<template>
  <div>
    <TwoTable
      ref="multipleTable"
      :rightTableObject="rightTableObject"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicFormFields="formField"
      :dynamicTableCols="tableCols"
      :dynamicApiConfig="apiConfig"
      :dynamicIsShowMoreBtn="true"
      :dynamicIsInitAllTable="true"
      :dynamicTableOtherHeight="47"
      :dynamicIsShowRightPagination="false"
      :dynamicRightTableNum=20000
    />
 <div class="filter-container filter-params rightParam">
        <el-row
          :gutter="26"
          ref="vailComponentList"
        >
          <component
            v-for="comp in tableComponents1.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="formField1[comp.codeField]"
            @changeCode="getComponentCode1"
          
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :isMul="comp.isMul"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
       <div
        slot="footer"
        class="rightBtn"
      >
        <el-button
          v-for="comp in tableButtons1"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
       </div>


  </div>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import TwoTable from "@/components/templates/twoTable";
import { requestGraphQL } from "@/api/commonRequest";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { CacheConfig } from "@/cache/configCache/index";

export default {
  name: "mdsSysPosition",
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    TwoTable
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      //树对象
      rightTableObject: {
        // 配置右侧网格查询API配置对象
        apiConfig: orgApis.mdsSysPositionDetailQueryFindAll,
        //设置是否显示更多按钮
        isShowRightMoreBtn: true,
        isShowSelect: true,
        // 动态组件-按钮
        tableButtons: [
          {
            compKey: "btnKey1",
            type: "primary",
            size: "small",
            clickEvent: () => this.saveIt(),
            text: this.$t("sys.button.save") //保存
          },
          {
            compKey: "btnKey3",
            type: "",
            size: "small",
            clickEvent: () => this.resetRight(),
            text: this.$t("sys.button.reset") //重置
          }
        ],
        // 动态组件-查询条件
        tableComponents:
          CacheConfig.cacheData[this.$route.path] &&
          CacheConfig.cacheData[this.$route.path].tableComponents &&
          CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
            ? CacheConfig.cacheData[this.$route.path].tableComponents
            : [
                // 显示组件
                {
                  compKey: "compKey1",
                  labelName: this.$t("org.label.PositionCode"), //岗位编码
                  codeField: "positionCode",
                  component: () => import("@/components/org/commonInput"),
                  type: "inputText",
                  isMust: true,
                  isRequire: true
                },
                {
                  compKey: "compKey2",
                  labelName: this.$t("org.label.PositionName"), //岗位名称
                  codeField: "positionName",
                  component: () => import("@/components/org/commonInput"),
                  type: "inputText",
                  isMust: true,
                  isRequire: true
                },
                {
                  compKey: "compKey3",
                  labelName: this.$t("org.label.OrganizationType"), //组织类型
                  codeField: "orgType",
                  lookuptype: "BASE0003",
                  isMul: false,
                  component: () => import("@/components/org/LookupValue"),
                  type: "dropdownList",
                  isMust: false
                },
                {
                  compKey: "compKey4",
                  labelName: this.$t("org.label.isEnable"), //是否启用
                  codeField: "isEnable",
                  component: () => import("@/components/org/isEnable/isEnable"),
                  type: "inputText",
                  isMust: false,
                  isRequire: true
                }
              ],
        // 动态生成网格列
        tableCols:
          CacheConfig.cacheData[this.$route.path] &&
          CacheConfig.cacheData[this.$route.path].tableCols &&
          CacheConfig.cacheData[this.$route.path].tableCols.length > 0
            ? CacheConfig.cacheData[this.$route.path].tableCols
            : [
                {
                  prop: "stationId",
                  label: "业务岗位Id",
                  hidden: true,
                  align: "center"
                },
                {
                  prop: "stationCode",
                  label: this.$t("org.label.StationCode"), //业务岗位编码
                  width: null,
                  align: "center"
                },
                {
                  prop: "stationName",
                  label: this.$t("org.label.StationName"), //业务岗位名称
                  width: null,
                  align: "center"
                },
                {
                  prop: "deptName",
                  label: this.$t("org.label.DeptName"),
                  width: null,
                  align: "center"
                }, //所属部门
                {
                  prop: "isSelected",
                  label: this.$t("org.label.IsSelected"),
                  hidden: true,
                  align: "center"
                } //是否选择
              ],
        //表单保存数据（保存条件）
        formField: {
          positionId: "",
          carBrandCode: this.$store.getters.orgInfo.BRAND_CODE,
          positionCode: "",
          positionName: "",
          orgType: "",
          isEnable: "",
          stationList: "",
          updateControlId: ""
        }
      },
      //设置是否显示更多按钮
      isMoreBtn: true,
      clickRowsData: {},
      // 网格查询API配置对象
      apiConfig: orgApis.mdsSysPositionQueryFindAll,
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.$refs.multipleTable.queryTable(1),
          text: this.$t("sys.button.query") //查询
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.resetLeft(),
          text: this.$t("sys.button.reset") //重置
        }
      ],
      tableButtons1: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.$refs.multipleTable.queryRightTable(1,this.formField1 ,function(item) {
            debugger
        this.$refs.multipleTable.tableData.forEach(sysStation => {
          if (sysStation.isSelected == "1") {
            this.$refs.multipleTable.toggleRowSelection(
              sysStation,
              true
            );
          }
        });
      }),
          text: this.$t("sys.button.query") //查询
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.resetRightBottom(),
          text: this.$t("sys.button.reset") //重置
        }
      ],
      tableComponents1:[
         {
                compKey: "compKey1",
                labelName: this.$t("org.label.StationName"), //业务岗位名称
                codeField: "stationName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
      ],
      formField1:{
           stationName:"",
           positionId:""
      },
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.PositionCode"), //岗位编码
                codeField: "positionCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.PositionName"), //岗位名称
                codeField: "positionName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.OrganizationType"), //组织类型
                codeField: "orgType",
                lookuptype: "BASE0003",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.isEnable"), //是否启用
                codeField: "isEnable",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: false
              }
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "positionId",
                label: "岗位id",
                hidden: true,
                align: "center"
              },
              {
                prop: "positionCode",
                label: this.$t("org.label.PositionCode"), //岗位编码
                width: null,
                align: "center"
              },
              {
                prop: "carBrandCode",
                label: this.$t("org.label.carBrandCode"),
                hidden: true,
                align: "center"
              }, //品牌
              {
                prop: "positionName",
                label: this.$t("org.label.PositionName"),
                width: null,
                align: "center"
              }, //岗位名称
              {
                prop: "orgTypeName",
                label: this.$t("org.label.OrganizationType"),
                width: null,
                align: "center"
              }, //组织类型
              {
                prop: "orgType",
                label: this.$t("org.label.OrganizationType"),
                hidden: true,
                align: "center"
              }, //组织类型
              {
                prop: "isEnable",
                label: this.$t("org.label.isEnable"),
                width: null,
                align: "center"
              }, //是否启用
              {
                prop: "updateControlId",
                label: this.$t("org.label.concurrencyControl"), //并发控制
                align: "center",
                hidden: true
              }
            ],
      //表单查询数据
      formField: {
        positionCode: "",
        positionName: "",
        orgType: "",
        isEnable: ""
      },
      updateControlId: "",
      saveOrUpdate: "update"
    };
  },
  watch: {
    clickRowsData(curVal, oldVal) {
      if (curVal === undefined) {
        return;
      }
      var queryField = {
        // carBrandCode: curVal.carBrandCode,
        positionId: curVal.positionId,
        stationName:this.formField1.stationName
      };
      this.formField1.positionId=curVal.positionId
      this.rightTableObject.formField.updateControlId = curVal.updateControlId;
      this.saveOrUpdate = "update";
      var that = this;
      this.$refs.multipleTable.queryRightTable(1, queryField, function(item) {
        debugger
        that.$refs.multipleTable.rightList.forEach(sysStation => {
          if (sysStation.isSelected == "1") {
            that.$refs.multipleTable.$refs.multipleTable.toggleRowSelection(
              sysStation,
              true
            );
          }
        });
      });
    },
    deep: true
  },
  methods: {
    resetRightBottom(){
       this.formField1.stationName=""
    },
    resetRight() {
      this.rightTableObject.formField.positionId = "";
      this.rightTableObject.formField.positionCode = "";
      this.rightTableObject.formField.positionName = "";
      this.rightTableObject.formField.orgType = "";
      this.rightTableObject.formField.isEnable = "";
      this.rightTableObject.formField.stationList = "";
      this.rightTableObject.formField.updateControlId = "";
      this.$refs.multipleTable.$refs.multipleTable.clearSelection();
    },
    resetLeft() {
      this.formField.positionCode = "";
      this.formField.positionName = "";
      this.formField.orgType = "";
      this.formField.isEnable = "";
    },
     getComponentCode1(val, txt, codeField, comType, popupsKey, textField) {
      if (comType === 'propus' && !this.$utils.isEmpty(popupsKey)) {
        // 弹窗赋值
        // 根据popupsKey找到对应的弹窗key的弹窗组件
        var dynamicPopup = this.dynamicComponents.filter(o => o.compKey === popupsKey)
        if (dynamicPopup.length > 0) {
          if (dynamicPopup[0].popups && dynamicPopup[0].popups.state) {
            // 弹窗状态不是为已打开才进行计算
            dynamicPopup[0].popups.state = false
            dynamicPopup[0].popups.key = codeField + this.$utils.generateId()
          }
        }
      }
      // 赋值
      if (codeField in this.formField1) {
        this.formField1[codeField] = val
      }
      if (textField in this.formField1) {
        this.formField1[textField] = txt
      }
    },
    saveIt() {
      this.$utils.validataMoth(this, "validpage", "twoTable");
      if (this.valid) {
        this.save(function() {
          this.queryTable(1, function() {
            var curVal = this.list.filter(
              o =>
                o.positionCode === this.rightTableObject.formField.positionCode
            );
            this.handleTableRowChange(curVal[0]);
          });
        });
      }
    },
    save(cb) {
      const that = this;
      let selectData = that.$refs.multipleTable.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        this.$alert(this.$t("org.label.StationListNotNull"), "提示", {
          //业务岗位列表不能为空
          confirmButtonText: this.$t("org.label.OK"), //确定
          type: "warning"
        });
        return;
      }
      let stationListTemp = "";
      for (var i = 0; i < selectData.length; i++) {
        stationListTemp = stationListTemp + selectData[i].stationId + ",";
      }
      stationListTemp = stationListTemp.substr(0, stationListTemp.length - 1);
      that.rightTableObject.formField.stationList = stationListTemp;
      //通知场景保存
      const queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: orgApis.mdsSysPositionMutationSave,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.rightTableObject.formField
        }
      };

      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.listLoadingStation = false;
          that.$message({
            message: this.$t("sys.tips.esTip5"), //保存成功
            type: "success",
            duration: 2000
          });
        } else {
          that.$message({
            message:
              this.$t("org.label.SaveFailed") +
              response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "warning",
            duration: 2000
          });
        }
        if (typeof cb === "function") {
          cb.call(this, response);
        }
      });
      this.listLoading = true;
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-main {
  margin-top: 25px;
}
// /deep/.app-container {
//    margin-top:-50px
// }
.rightBtn{
position: absolute;
    right: 23px;
    bottom: 37px;
}

.rightParam{
    padding: 11px;
    margin: 0;
    width: 99%;
}
.rightParam /deep/ .el-input--suffix{
  width: 40%;
}
</style>