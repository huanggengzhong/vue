<!--
* description: 报备申请弹窗
* author: yangsq
* createdDate: 2019-09-21
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      title="出库详细信息"
      :append-to-body="true"
      :dynamicApiConfig="apiConfig"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      :key="popupsTableKey"
      width="1000px"
    >
      <div
        class="filter-container filter-title"
        ref="conTitleHeight"
        v-if="tableComponents1.length > 0"
      >车辆信息</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents1.filter(o => o.isMust === true)"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :is="comp.component"
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :inputType="comp.inputType"
            :valueObject="comp.curValueObject"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
      <div
        class="filter-container filter-title"
        ref="conTitleHeight"
        v-if="tableComponents2.length > 0"
      >客户信息</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents2.filter(o => o.isMust === true)"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :is="comp.component"
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :inputType="comp.inputType"
            :valueObject="comp.curValueObject"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
      <div
        class="filter-container filter-title"
        ref="conTitleHeight"
        v-if="tableComponents3.length > 0"
      >出库信息</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents3.filter(o => o.isMust === true)"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :is="comp.component"
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :inputType="comp.inputType"
            :valueObject="comp.curValueObject"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          v-for="comp in tableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
      </div>
    <el-tabs
        type="card"
        v-model="activeName"
        class="filter-container"
      >
        <el-tab-pane
          label="入库情况说明"
          name="first"
        >
          <one-table-template
            ref="multipleTable1"
            :data="tableData1"
            :dynamicApiConfig="apiConfig"
            :dynamicTableCols="tableCols"
            :dynamicFormFields="formField"
            :dynamicIsShowSelect="true"
            :dynamicIsColumnDrop="true"
          />
        </el-tab-pane>
        <el-tab-pane
          label="出库情况说明"
          name="second"
        >
          <one-table-template
            ref="multipleTable1"
            :dynamicApiConfig="apiConfig"
            :dynamicTableCols="tableCols2"
            :dynamicFormFields="formField"
            :dynamicIsShowSelect="true"
          />
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { requestGraphQL } from "@/api/commonRequest";
import { CacheConfig } from '@/cache/configCache/index'
export default {
  // 组件混入对象
  mixins: [formMixins],
  components: {
    OneTableTemplate
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veApplicationForFiling,
      paChoosePartVisible: false,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "销退出库"
        }
      ],
      tableData1: [],
      // 动态组件-查询条件
      tableCols:
              CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : 
      [
        { prop: "carInspectionCategory", label: "车检类别",width:200, align: "center" },
        { prop: "description", label: "说明",width:600, align: "center" ,
          comps: 
          [
            {
              compKey: "propKey0",
              labelName: "出库", //出库
              codeField: "editControlBtn",
              type:"inputText",
              component: () => import("@/components/org/commonInput"),
            }
          ]
        },
      ],
      tableCols2: [
        { prop: "carInspectionCategory", label: "车检类别",width:200, align: "center",
          comps: 
          [
            {
              compKey: "propKey2",
              labelName: "出库", //出库
              codeField: "editControlBtn",
              type:"inputText",
              component: () => import("@/components/org/commonInput"),
            }
          ]
        },
        { prop: "description", label: "说明",width:600, align: "center" },
      ],
      // 静态组件-查询条件
      tableComponents2: [
        {
          compKey: "compKey15",
          labelName: this.$t('ve.label.custName'),
          // isRequire: true,
          codeField: "custName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },//客户名称
        {
          compKey: "compKey16",
          labelName: this.$t('ve.label.phone'),
          // isRequire: true,
          codeField: "phone",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },//联系电话
        {
          compKey: "compKey17",
          labelName: this.$t('org.label.credTypeCode'),
          // isRequire: true,
          codeField: "credTypeCode",
          lookuptype: 'APP0005',
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },//证件类型
        {
          compKey: "compKey18",
          labelName: this.$t('org.label.credNo'),
          codeField: "credNo",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey19",
          labelName: this.$t('org.label.province'),
          codeField: "province",
          component: () => import("@/components/org/ProvinceQuery"),
          type: "dropdownList",
          isMust: true
        },//省份
        {
          compKey: "compKey20",
          labelName: this.$t('org.label.cityName'),
          codeField: "cityName",
          component: () => import("@/components/org/CitySelect"),
          type: "dropdownList",
          isMust: true
        },//城市

        {
          compKey: "compKey21",
          labelName: "县区",
          codeField: "district",
          component: () => import("@/components/org/SmallArea"),
          type: "dropdownList",
          isMust: true
        },//县区

      ],
      tableComponents3: [
                {
          compKey: "compKey22",
          labelName: this.$t('ve.label.outStockDate'),
          codeField: "outStockDate",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          isMust: true
        },//出库日期
        {
          compKey: "compKey23",
          labelName: "出库人",
          codeField: "outStockPeople",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey24",
          labelName: "交接人",
          codeField: "handoverPerson",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
       tableComponents1: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t("ve.label.contractCode"),
          // isRequire: true,
          codeField: "contractCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey26",
          labelName: this.$t("ve.label.carBrand") /*品牌*/,
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          // isRequire: true,
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t("ve.label.carConfigName") /*车型配置*/,
          codeField: "carConfigId",
          component: () => import("@/components/org/carTypeConfig"),
          // isRequire: true,
          type: "propus",
          isMust: true
        },
        {
          compKey: 'compKey4', 
          labelName: this.$t('org.label.carIncolor'), 
          codeField: 'carIncolorId', 
          // parentFileds: 'carConfigId', 
          // mustFields: 'carConfigId', 
          component: () => import('@/components/org/TrimPopupColor/interiorSelect'), 
          type: 'dropdownList', 
          filterable: true, 
          isMust: true
        }, // 内饰色
        {
          compKey: 'compKey3', 
          labelName: this.$t('org.label.carColor'), 
          codeField: 'carColorId', 
          // parentFileds: 'carConfigId', 
          // mustFields: 'carConfigId', 
          component: () => import('@/components/org/carColor/brandCarColor'), 
          type: 'dropdownList', 
          filterable: true, 
          isMust: true
        }, // 车身颜色
        {
          compKey: "compKey5",
          labelName: this.$t('org.label.optionalPackage'),
          // isRequire: true,
          codeField: "optionalPackage",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },//选装包
        {
          compKey: "compKey6",
          labelName: this.$t('org.label.vin'),
          // isRequire: true,
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },//VIN码
        {
          compKey: "compKey7",
          labelName: this.$t('ve.label.engineNo'),
          // isRequire: true,
          codeField: "engineNo",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },//发动机号
        {
          compKey: "compKey8",
          labelName: this.$t('ve.label.certificateNo'),
          // isRequire: true,
          codeField: "certificateNo",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },//合格证号
        {
          compKey: "compKey9",
          labelName: "入库日期",
          // isRequire: true,
          codeField: "ArrivalDate",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          isMust: true
        },

        {
          compKey: "compKey10",
          labelName: this.$t('ve.label.salesConsultant'),
          // isRequire: true,
          codeField: "salesConsultant",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },//销售顾问
        {
          compKey: "compKey11",
          labelName: "销售时间",
          codeField: "salesDate",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey12",
          labelName: this.$t('ve.label.wareHouseMultiCode'),
          codeField: "wareHouseMultiCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },//仓库
        {
          compKey: "compKey13",
          labelName: "储位",
          codeField: "PlaceCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey14",
          labelName: this.$t('ve.label.CarAreaName'),
          codeField: "AreaCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },//储区名称
      ],
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode:"",
        contractCode: "",
        carConfigCn: "",
        custName:"",
        carConfigId: "",
        carIncolorId: "",
        carColorId: "",
        optionalPackage: "",
        vin: "",
        engineNo: "",
        certificateNo: "",
        ArrivalDate: "",
        salesConsultant: "",
        salesDate: "",
        wareHouseMultiCode: "",
        PlaceCode: "",
        AreaCode: "",
        phone: "",
        credTypeCode: "",
        credNo: "",
        province: "",
        cityName: "",
        district: "",
        outStockDate: "",
        outStockPeople: "",
        handoverPerson: ""
      },
      listLoading: false,
      activeName: "first",
      thimeTitle: "asdadsd",
      handleClick: "",
      paChoosePartVisible: ""
    };
  },
  methods: {
    //查询
    queryTables(page) {
      const that = this;
      that.currentRow = null;
      that.listLoading = true;
      let queryObj = {
        // api配置
        apiConfig: veApis.veApplicationForFiling,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["carInspectionCategory"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // pageSize: that.listQuery.pageSize,
          // pageIndex: page || that.listQuery.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.formField
        }
      };

      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows
        ) {
          that.list = response.data[queryObj.apiConfig.ServiceCode].rows;
          this.saveoInfo = {

          };
          if (that.list.length !== 0) {
            that.formField.carInspectionCategory = that.list[0].carInspectionCategory;
            // that.saveoInfo.sysInfoId = that.list[0].sysInfoId;
          } 
          // else {
          //   that.formField.isEnable = "";
          // }
          that.listLoading = false;
        }
      });
    },
  }
};
</script>
<style scoped>
/deep/ .el-dialog {
  height: 140%;
  /* overflow: hidden; */
  overflow-y: scroll;
}

/deep/ .el-table {
  max-height: 180px!important;
  margin-top: -60px;
  overflow-y: scroll;
}

/*/deep/
 .el-table--border{
 height: 60%;
 } */
</style>
