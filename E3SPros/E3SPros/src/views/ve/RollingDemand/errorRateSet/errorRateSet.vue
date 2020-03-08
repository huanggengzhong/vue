<!--
 * description:滚动需求误差率系数设置
 * author: zhhx
 * createdDate: 2019-09-20
 * logs:
 -->
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
      :dynamicIsShowSelect="isShowSelect"
      :dynamicIsShowMoreBtn="isShowMoreBtn"
    />
      <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>
  </div>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { orgApis } from "@/api/graphQLApiList/org";
import TwoTable from "@/components/templates/twoTable";
// import OneTableTemplate from "@/components/templates/oneTable";
import { requestGraphQL } from "@/api/commonRequest";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import Edit from "./edit";
export default {
  mixins: [oneTableWithViewTemplateMixins],
  name: "errorRateSet",
  components: {
    TwoTable,
    Edit

  },
  mounted() {},
  data() {
    return {
      //树对象
      rightTableObject: {
        // 配置右侧网格查询API配置对象
        apiConfig: veApis.veErrorRateSettingQuery,
        //设置是否显示更多按钮
        isShowSelect: true,
        // 动态组件-按钮
        tableButtons: [
          {
            compKey: "btnKey1",
            type: "primary",
            size: "small",
            clickEvent: () => this.$refs.multipleTable.queryRightTable(1,this.formField),
            text: "查询"
          },
          {
            compKey: "btnKey2",
            type: "",
            size: "small",
            clickEvent: () => this.synchrony(),
            text: "同步"
          },
          {
            compKey: "btnKey3",
            type: "",
            size: "small",
            clickEvent: () => this.$refs.multipleTable.save(),
            text: "保存"
          },
         {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: "导出"
        },
        ],
        // 动态组件-查询条件
        tableComponents: [
          // 显示组件
          // {
          //   compKey: "compKey1",
          //   labelName: "值列表明细编码",
          //   codeField: "lookupValueCode",
          //   isRequire: true,
          //   component: () => import("@/components/org/commonInput"),
          //   type: "inputText",
          //   isMust: true
          // },
          // {
          //   compKey: "compKey2",
          //   labelName: "值列表明细名称",
          //   isRequire: true,
          //   codeField: "lookupValueName",
          //   component: () => import("@/components/org/commonInput"),
          //   type: "inputText",
          //   isMust: true
          // },
          // {
          //   compKey: "compKey4",
          //   labelName: "是否内置",
          //   codeField: "isEnable",
          //   component: () => import("@/components/org/isEnable/isEnable"),
          //   type: "dropdownList",
          //   isMust: false
          // }
        ],
        // 动态生成网格列
        tableCols: [
          // 品牌
        {
          prop: "carBrandCn",
          label: "品牌",
          width: null,
          align: "center"
        },
         { prop: 'carSeriesCn', label: this.$t('org.label.carSerise'), width: null, align: 'center'},//车系
        { prop: 'batchSeriesId', label: '车系ID', width: null, align: 'center', hidden: true },
          {
          prop: "weightcoefficient",
          label: "权重系数+",
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
            compKey: "propKey1",
            isShowLabel: false,
            codeField: "weightcoefficient",
            clickEvent: "",
            component: () => import("@/components/org/commonInput")
            }
          	]
           },

          {
            prop: "updateControlId",
            label: "并发控制",
            width: 0,
            align: "center",
            hidden: true
          }
        ],
        //表单查询数据（查询条件）
        formField: {

        }
      },
      // formLeftField: '',
      //设置是否显示更多按钮
      isShowSelect: true,
      isShowMoreBtn: true,
      clickRowsData: {},
      // 网格查询API配置对象
      apiConfig: veApis.veErrorRateSetQuery,
      tableButtons: [
        {
            compKey: "btnKey1",
            type: "primary",
            size: "small",
            clickEvent: () => this.queryTable(1),
            text: "查询"
          },
          {
            compKey: "btnKey2",
            type: "",
            size: "small",
            clickEvent: () => this.save(),
            text: "保存"
          },
          {
            compKey: "btnKey5",
            type: "",
            size: "small",
            clickEvent: () => this.add(),
            text: "新增"
          },
          {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.$refs.multipleTable.exportExcel(),
          text: "导出"
        },
        {
            compKey: "btnKey4",
            type: "",
            size: "small",
            clickEvent: () => this.reset(),
            text: "重置"
          }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
                compKey: "compKey1",
                labelName: this.$t("org.label.carBrand") /*品牌*/,
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
        },
         {
                compKey: "compKey2",
                labelName: '适用月份',
                codeField: "appliMonth",
                component: () => import("@/components/org/datePicker/datePicker"),
                type: "dropdownList",
                isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "N-3月",
          codeField: "NMinusThreeMonth",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey4",
          labelName: "N-2月",
          codeField: "NMinusTwoMonth",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        },
        {
          compKey: "compKey5",
          labelName: "N-1月",
          codeField: "NMinusOneMonth",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        //品牌
        {
          prop: "carBrandCn",
          label: "品牌",
          width: null,
          align: "center"
        },
        //适用月份
        {
          prop: "appliMonth",
          label: "适用月份",
          width: null,
          align: "center"
        },



        {
          prop: "NMinusThreeMonth",
          label: "N-3月+",
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
            compKey: "propKey1",
            isShowLabel: false,
            codeField: "NMinusThreeMonth",
            clickEvent: "",
            component: () => import("@/components/org/commonInput")
            }
          	]
           },
          {
          prop: "NMinusTwoMonth",
          label: "N-2月+",
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
            compKey: "propKey2",
            isShowLabel: false,
            codeField: "NMinusTwoMonth",
            clickEvent: "",
            component: () => import("@/components/org/commonInput")
            }
          	]
           },
            {
          prop: "NMinusOneMonth",
          label: "N-1月+",
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
            compKey: "propKey3",
            isShowLabel: false,
            codeField: "NMinusOneMonth",
            clickEvent: "",
            component: () => import("@/components/org/commonInput")
            }
          	]
           },
        {
          prop: "updateControlId",
          label: "并发控制",
          width: null,
          align: "center",
          hidden: true
        }
      ],
      //表单查询数据
      formField: {
        carBrandCode: "",
        appliMonth: "",
        NMinusThreeMonth: "",
        NMinusTwoMonth: "",
        NMinusOneMonth: "",
      },
      //联动数据
      toAnotherChild: {
        key: "",
        val: ""
      }
    };
  },
  watch: {
    "toAnotherChild.val"(curVal, oldVal) {
      // debugger;
      if (curVal !== oldVal) {
        this.rightTableObject.formField.lookupTypeCode = curVal;
        this.$refs.multipleTable.queryRightTable(1, this.toAnotherChild);
      }
    },
    clickRowsData(curVal, oldVal) {
      this.toAnotherChild.val = curVal.lookupTypeCode;
      this.toAnotherChild.key = "lookupTypeCode";
    },
    deep: true
  },
  methods: {
    //重置
    reset() {
      // this.formField.carBrandCode = "";
      this.formField.appliMonth = "";
      this.formField.NMinusThreeMonth = "";
      this.formField.NMinusTwoMonth = "";
      this.formField.NMinusOneMonth = "";
    },
   save(){    //
      const that = this.$refs.multipleTable;
      // let saveState = true;
      // let saveCount = 0;

      let msg = '';

      let selectData = that.multipleLeftSelection;
       console.log(selectData)

      if (selectData.length < 1) {
        that.$message({
          message: this.$t('sys.tips.esTip7'),
          type: 'warning',
          duration: 2000
        });
        return;
      }
      for(var k in selectData){

        let queryObj = {
          // 保存mutation
          type: 'mutation',
          // api配置
          apiConfig: veApis.veErrorRateSetMutationSave,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo:
            {
              carBrandCode: selectData[k].carBrandCode,
              appliMonth: selectData[k].appliMonth,
               NMinusThreeMonth: selectData[k].NMinusThreeMonth,
              NMinusTwoMonth: selectData[k].NMinusTwoMonth,
               NMinusOneMonth: selectData[k].NMinusOneMonth,
              updateControlId: selectData[k].updateControlId
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response =>{
        //  if(response.data[queryObj.apiConfig.ServiceCode].result === '1' && response.data[queryObj.apiConfig.ServiceCode].rows!=''){
            // this.orgManageVisible = false
            this.$message({
              message: this.$t('sys.tips.esTip5'),
              type: 'success',
              duration: 1000
            });
             that.queryTable(1);
            // }
        });
        }

    },
    //右边查询
    synchrony(){
      debugger
      console.log(this)
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .el-main {
  margin-top: 25px;
}
</style>































