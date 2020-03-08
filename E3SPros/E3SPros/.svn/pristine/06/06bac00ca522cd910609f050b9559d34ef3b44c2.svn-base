<!--
* description: 配车解除
* author: zhhx
* createdDate: 2019-08-06
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsColumnDrop="true"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from '@/cache/configCache/index'
import LangSelect from "@/components/LangSelect";

export default {
  name: "veRelease",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    LangSelect
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.vePurOrderAssignQuery,
      // 动态组件-按钮
      tableButtons: [
        // 查询
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t('sys.button.query')
        },
        // 配车解除
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t('sys.button.carRelease')
        },
        // 重置
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t('sys.button.reset')
        },
        // 导出
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t('sys.button.export')
        }
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        // 显示组件
        // 品牌
        {
          compKey: "compKey1",
          labelName: this.$t('org.label.carBrand'),
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        // 采购单号
        {
          compKey: "compKey2",
          labelName: this.$t('ve.label.purOrderCode'),
          codeField: "purOrderCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        // VIN码
        {
          compKey: "compKey3",
          labelName: this.$t('ve.label.vin'),
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        // 仓库
        {
          compKey: "compKey4",
          labelName: this.$t('ve.label.wareHouseMultiCode'),
          codeField: "wareHouseMultiCode",
          component: () =>
            import("@/components/ve/wareHouseMulti/wareHouseMulti"),
          type: "dropdownList",
          isMust: true
        },
        // 触发弹窗组件（popups：为弹窗组件）
        // 采购单类型
        {
          compKey: "compKey5",
          labelName: this.$t('ve.label.purchaseOrderTypeCode'),
          codeField: "purchaseOrderTypeId",
          parentFileds: "carBrandCode-carBrandCode",
          component: () => import("@/components/ve/PurchaseOrderType"),
          type: "dropdownList",
          isMust: false
        }, // 送货方式（值列表）
        {
          compKey: "compKey8",
          labelName: this.$t('ve.label.deliverModeName'),
          lookuptype: "VE0079",
          codeField: "transportTypeCode",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: false
        },
        // 资金类型
        {
          compKey: "compKey9",
          labelName: this.$t('ve.label.cashType'),
          codeField: "cashTypeId",
          component: () => import("@/components/ve/PurcashType"),
          type: "dropdownList",
          isMust: false
        },
        // 日期控件  分配日期
        {
          compKey: "compKey10",
          labelName: this.$t('ve.label.assignDateBegin'),
          codeField: "assignDateBegin",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        {
          compKey: "compKey11",
          labelName:  this.$t('ve.label.assignDateEnd'),
          codeField: "assignDateEnd",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        // 审核日期
        {
          compKey: "compKey12",
          labelName: this.$t('ve.label.auditDateBegin'),
          codeField: "auditDateBegin",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        {
          compKey: "compKey13",
          labelName: this.$t('ve.label.auditDateEnd'),
          codeField: "auditDateEnd",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        }


      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
      //  品牌
       { prop: "carBrandCn", label: this.$t('org.label.carBrand'), width: 110, align: "center" },
      //  经销商
       { prop: "dlrShortName", label: this.$t('org.label.dlrName'), width: 100, align: "center" },
      //  采购单资金类型
       {
          prop: "purcashTypeName",
          label: this.$t('ve.label.purcashTypeName'),
          width: 120,
          align: "center"
        },
      // 扣款资金类型
      {
          prop: "deductCashTypeName",
          label: this.$t('ve.label.deductCashTypeName'),
          width: 120,
          align: "center"
        },
        // 采购单号
        {
          prop: "purOrderCode",
          label: this.$t('ve.label.purOrderCode'),
          width: 180,
          align: "center"
        },
        // 采购子单号
        {
          prop: "purOrderDCode",
          label: this.$t('ve.label.purOrderDCode'),
          width: 200,
          align: "center"
        },
        // 采购金额
        { prop: "purPrice", label: this.$t('ve.label.purPrice'), width: 100, align: "center" },
      //  冻结金额
       { prop: "bail", label: this.$t('ve.label.bail'), width: 80, align: "center" },
      // VIN
       { prop: "vin", label: this.$t('ve.label.vin'), width: 200, align: "center" },
        // 车型简码
        { prop: "configCode", label: this.$t('org.label.configCode'), width: 120, align: "center" },
        // 车型配置
        {
          prop: "carConfigName",
          label: this.$t('org.label.carConfig'),
          width: 0,
          align: "center",
          hidden: true
        },
        // 车身颜色
        {
          prop: "carColorName",
          label: this.$t('org.label.carColor'),
          width: 180,
          align: "center"
        },
        // 内饰色
        {
          prop: "carIncolorName",
          label: this.$t('org.label.carIncolor'),
          width: 180,
          align: "center"
        },
        // 车系
        { prop: "carSeriseName", label: this.$t('org.label.carSerise'), width: 80, align: "center" },
        // 车型编码
        {
          prop: "carConfigCode",
          label: this.$t('org.label.carTypeCode'),
          width: 0,
          align: "center",
          hidden: true
        },
        // 当前所属仓库
        {
          prop: "curShName",
          label: this.$t('ve.label.curShName'),
          width: 120,
          align: "center"
        },
        // 送货方式
        {
          prop: "deliverMode",
          label: this.$t('ve.label.deliverModeName'),
          width: null,
          align: "center"
        },
        // 搬入地
        { prop: "receiveShId", label: this.$t('ve.label.receiveShId'), width: 180, align: "center" },
        // 下单人
       { prop: "creator", label: this.$t('ve.label.creator'), width: null, align: "center" },
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
        carBrandCode: "",
        cashTypeId: "",
        vin: "",
        wareHouseMultiCode: "",
        purchaseOrderTypeId: "",
        assignDateBegin: "",
        assignDateEnd: "",
        auditDateBegin: "",
        auditDateEnd: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择要处理解配采购单信息",
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
          apiConfig: veApis.veCarRelease,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              purOrderDId: selectData[k].purOrderDId,
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
              message: "采购单信息解配成功",
              type: "success",
              duration: 2000
            });

            that.queryTable(1);
          }
        });
      }
    }
  }
};
</script>
