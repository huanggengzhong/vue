<!--
* description: 销售交车首页
* author: guanri
* createdDate: 2019-10-22
-->
<template>
<div>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsInitTable="true"
      :dynamicIsColumnDrop="true"
      :dynamicIsShowMoreBtn="true"
       :dynamicIsShowSelect="false"

    />

     <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>
    </div>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins'
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from './edits'
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name:"orgBrandManage",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins,valueObjectMixins],
  components: {
    OneTableTemplate,
    Edit
  },
   // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},

  data() {
    return {


      // 网格查询API配置对象
      apiConfig: veApis.veContractQry,



      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey2', type: '', size: 'small',  position: "right", clickEvent: () => this.add(), text: this.$t("ve.label.deliveryCar")},//交车
        // {compKey: 'btnKey7', type: '', size: 'small', clickEvent: () => this.synchrony('isEnable,carBrandCode'), text: '同步'},
        // {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.synchronyAll('isEnable,carBrandCode'), text: '全部同步'},
        {compKey: 'btnKey4', type: 'varContractQry', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t("ve.label.search")/*查询*/},
        {compKey: 'btnKey6', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t("ve.label.reset")/*重置*/}
      ],
     
      tableComponents:
          [         
              {
                compKey: "compKey111",
              labelName:  this.$t('ve.label.saleContractCode'), /*合同编号*/
                codeField: "outStoreCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey141",
              labelName: this.$t("ve.label.custName"), /*客户名称*/
                codeField: "outStoreCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey",
                labelName: this.$t("ve.label.carOwnerName")/*车主名称*/,
                codeField: "vin",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },

  {
          compKey: "compKey4",
          labelName: this.$t("ve.label.caEmpId")/*销售顾问*/,
          codeField: "carStockHouseId",
          component: () =>
            import("@/components/ve/hostFatoryWareHouse/wareHouseInput"),
          type: "propus",
          isMust: true
        },

               {
          compKey: "compKey3",
          labelName: this.$t("ve.label.createDateBegin"),//下单日期
          codeField: "beginBusinessDate",
          format: "yyyy/MM/dd HH:mm:ss",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "0",
          isMust: false,
        },
          {
          compKey: "compKey4",
          labelName: this.$t("ve.label.createDateEnd"),  
          codeField: "endBusinessDate",
          format: "yyyy/MM/dd HH:mm:ss",
          component: () => import("@/components/org/datePicker/datePicker"),
           text:"2019/月/日",
          type: "datePicker",
          dateOptionsType: "0",
          isMust: false,
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
                 prop: "saleContractCode",
                 label: this.$t('ve.label.saleContractCode')
               ,//合同编号
                width: 190,
                align: "center",
              },
              {
              prop: "custName",
               label: this.$t("ve.label.custName"),/*客户名称*/
                width: 160,
                align: "center"
              },
              {
                 prop: "abnormalName", 
               label: this.$t("ve.label.carOwnerName"), /*车主名称*/
                width:180,
                align: "center"
              },
              {
                prop: "carBrandCn",
              label: this.$t("ve.label.isImmediateClient") /*是否非直营二网客户*/,
                width: 225,
                align: "center"
              },
              {
                prop: "abnormalName",
                 label: this.$t("ve.label.custName"),//销售顾问
                width: 200,
                align: "center"
              },
              
              {
                prop: "vin",
                 label: this.$t("ve.label.vin"),//vin
                width: 200,
                align: "center"
              },
              {
                prop: "chargeState",
             label: this.$t("ve.label.ReceivedAmount"),/*已收定金*/
                width: 200,
                align: "center"
              },
                
              
           
              // { prop: 'optionalPackage', label: this.$t('org.label.optionalPackage')/*选装包*/, width: 120, align: 'center' },
            
            ],
      formField: {
        carBrandCode: "",
        outStoreCode: "",
        vin: "",
        carStockHouseId: "",
        carConfigId: "",
        carColorId: "",
        carIncolorId: "",
        outStoreDateBegin: "",
        outStoreDateEnd: "",
        outStoreType: "",
        importDateBegin: "",
        importDateEnd: "",
        jiexiStatus: "",
        jiexiDateBegin: "",
        jiexiDateEnd: ""
      },
      custResAppDlaKey: "custResAppDlaKey",
      custResAppDlaVisible: false
    };
  },
  methods: {
    retreat() {
      let that = this.$refs.multipleTable;
      let selData = that.$refs.multipleTable.selection;
      if (selData.length === 0) {
        this.$message({
          message: this.$t("org.message.selOneData") /*请选择一条数据*/,
          type: "warning"
        });
        return false;
      }
      if (selData.length > 1) {
        this.$message({
          message: this.$t("org.message.onlyOneData") /*只能选择一条数据*/,
          type: "warning"
        });
        return false;
      }
      this.editPopupsState = "edit";
      this.editRowData = selData[0];
      console.log(this.editRowData);
      this.custResAppDlaVisible = true;
      this.custResAppDlaKey = this.$utils.generateId();
    },
    close() {
      this.custResAppDlaVisible = false;
    }
  }
};
</script>
<style>

.el-col {

margin-bottom: 15px;
}
.queryRegion{
  border: 1px solid black,
}

</style>
