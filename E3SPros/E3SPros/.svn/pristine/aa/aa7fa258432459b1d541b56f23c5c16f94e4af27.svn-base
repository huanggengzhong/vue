<!--
* description: 车身颜色维护弹窗
* author: xulfan
* createdDate: 2019-08-02
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      :title="$t('org.label.textMap1.carTypeAndCarColor')"
      :visible.sync="curdialogVisible"
      width="1000px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
      <one-table-template
        ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicUnFormFields="unFormField"
        :dynamicApiConfig="apiConfig"
        :dynamicIsInitTable="true"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
      />
      <ColorEdit
        :popupsVisible="editPopupsVisible"
        :key="editPopupsKey"
        @close="close"
        @changeCode="handdialogVisibleEditFunc"
        :popupsState="editPopupsState"
        :dynamicEditRowData="editRowData"
        :dialogVisible="dialogVisibleEdit"
        :append-to-body="true"
      />
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import ColorEdit from "./ColorEdit";

export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins, valueObjectMixins],
  components: {
    OneTableTemplate,
    ColorEdit
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    carcolorDatas: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },

  data() {
    return {
      currentRow: null,
      dialogVisibleEdit: true,
      curdialogVisible: this.dialogVisible,

      // 网格查询API配置对象
      apiConfig: orgApis.mdmCarTypeColorQueryListForPage,
      // 保存用
      hisFormField: {
        carIncolorCode: "",
        carConfigCode: "",
        // carIncolorId:"",
        carIncolorId: this.value,
        carColorId: this.value1,
        supplyColorPrice: "",
        isEnable: ""
      },

      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")
        },
        {
          compKey: "btnKey2",
          size: "small",
          clickEvent: () => this.opendialogs(),
          text: this.$t("sys.button.add")
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.enable(1),
          text: this.$t("sys.button.enable")
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.disable(0),
          text: this.$t("sys.button.disable")
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 车型
        {
          compKey: "compKey1",
          labelName: this.$t("org.label.carConfig"),
          codeField: "carConfigCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMul: false,
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("org.label.carIncolor"),
          codeField: "carIncolorId",
          parentFileds: "carConfigId",
          mustFields: "carConfigId",
          component: () =>
            import("@/components/org/TrimPopupColor/interiorSelect"),
          type: "dropdownList",
          filterable: true,
          isMust: true
        }, // 内饰色
        {
          compKey: "compKey7",
          labelName: this.$t("org.label.carColor"),
          codeField: "carColorId",
          parentFileds: "carConfigId",
          mustFields: "carConfigId",
          component: () => import("@/components/org/carColor/brandCarColor"),
          type: "dropdownList",
          filterable: true,
          isMust: true
        }, // 车身颜色
        // {
        //   compKey: "compKey3",
        //   labelName: this.$t('org.label.carPrice'),/*车身价*/
        //   codeField: "supplyColorPrice",
        //   component: () => import("@/components/org/commonInput"),
        //   type: "inputText",
        //   isMust: false
        // },
        {
          compKey: "compKey4",
          labelName: this.$t('org.label.isAble'),/*状态*/
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "carColorId",
          label: this.$t("org.label.carColorCode") /*车身颜色编码*/,
          width: null,
          hidden: true,
          align: "center"
        },
        {
          prop: "mdmCarColorExtend.carColorName",
          label: this.$t("org.label.carColorName") /*车身颜色名称*/,
          width: null,
          align: "center"
        },
        {
          prop: "mdmCarIncolorExtend.carIncolorName",
          label: this.$t("org.label.carIncolorName") /*内饰颜色名称*/,
          width: null,
          align: "center"
        },
        {
          prop: "supplyColorPrice",
          label: this.$t("org.label.carColorPrice") /*车身颜色价*/,
          width: null,
          align: "center"
        },
        {
          prop: "isEnable",
          label: this.$t("org.label.isEnableCn"),
          width: null,
          align: "center"
        } /*启用状态*/,
        {
          prop: "carConfigId",
          label: "车型配置ID",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "carColorId",
          label: "车身颜色ID",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "carIncolorId",
          label: "内饰色ID",
          width: null,
          align: "center",
          hidden: true
        },
        // {
        //   prop: "carIncolorCode",
        //   label: "内饰色编码",
        //   width: null,
        //   align: "center",
        //   hidden: true
        // },
        {
          prop: "carTypeColorId",
          label: "车型配置车身颜色关系ID",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "updateControlId",
          label: "并发控制字段",
          width: null,
          align: "center",
          hidden: true
        }
      ],
      //表单查询数据（查询条件）
      formField: {
        carIncolorId: "",
        carColorId: "",
        carConfigId: "",
        carConfigCode: "",
        isEnable: ""
      },
      unFormField:{
        carConfigCode:''
      },
     
      // 启停用（查询条件）
      enableFormField: {
        // carConfigId: "",
        CarIncolorId: "",
        carColorId: "",
        carIncolorName: "",
        supplyColorPrice: "",
        isEnable: "",
        updateControlId: ""
      }
    };
  },
  created() {
    if (this.carcolorDatas && typeof this.carcolorDatas === 'object') {
      for (var key in this.formField) {
        if (this.carcolorDatas[key]) {
          this.formField[key] = this.carcolorDatas[key]
        } else {
          this.formField[key] = ''
        }
      }
    }
  
  },
  methods: {
    // 新增按钮事件
    add() {
      this.editRowData.carConfigId = this.carcolorDatas.carConfigId
      this.editRowData.carConfigCode = this.carcolorDatas.carConfigCode
      this.showEdit('add')
    },
    enable(val) {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: this.$t(
            "org.label.MSG.selectEnableCarColor"
          ) /*请选择需要启用的车身颜色*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      for (var k in selectData) {
        let queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: orgApis.mdmCarTypeColorMutationSave,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              isEnable: "1",
              carConfigId: selectData[k].carConfigId,
              carColorId: selectData[k].carColorId,
              carIncolorId: selectData[k].carIncolorId,
              carTypeColorId: selectData[k].carTypeColorId,
              supplyColorPrice: selectData[k].supplyColorPrice,
              updateControlId: selectData[k].updateControlId
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
            saveCount++;
          } else {
            saveState = false;
            msg = response.data[queryObj.apiConfig.ServiceCode].msg;
            that.$message({
              message: msg,
              type: "warning",
              duration: 2000
            });
          }
          if (saveCount == selectData.length) {
            that.$message({
              message: this.$t("org.label.MSG.enableSuccess") /*启用成功*/,
              type: "success",
              duration: 2000
            });
            that.queryTable(1);
          }
        });
      }
    },
    disable(val) {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: this.$t(
            "org.label.MSG.selectDisableCarColor"
          ) /*请选择需要停用的车身颜色*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      for (var k in selectData) {
        let queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: orgApis.mdmCarTypeColorMutationSave,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              isEnable: "0",
              carConfigId: selectData[k].carConfigId,
              carColorId: selectData[k].carColorId,
              carIncolorId: selectData[k].carIncolorId,
              carTypeColorId: selectData[k].carTypeColorId,
              supplyColorPrice: selectData[k].supplyColorPrice,
              updateControlId: selectData[k].updateControlId
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
            saveCount++;
          } else {
            saveState = false;
            msg = response.data[queryObj.apiConfig.ServiceCode].msg;
            that.$message({
              message: msg,
              type: "warning",
              duration: 2000
            });
          }
          if (saveCount == selectData.length) {
            that.$message({
              message: this.$t("org.label.MSG.disableSuccess") /*停用成功*/,
              type: "success",
              duration: 2000
            });
            that.queryTable(1);
          }
        });
      }
    },
    query() {
      this.queryTable();
    },
    opendialogs() {
      this.add();
    },
    // 不知道干嘛用的，先放在这里
    handdialogVisibleEditFunc(val) {
      this.dialogVisibleEdit = false;
    }
  }
};
</script>