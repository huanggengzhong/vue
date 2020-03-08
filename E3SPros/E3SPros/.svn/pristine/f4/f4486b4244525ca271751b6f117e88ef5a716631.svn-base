<!--
* description: 采购单驳回
* author: luojx
* createdDate: 2019-07-31
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
      :dynamicIsInitTable="false"
      :dynamicIsColumnDrop="true"
      :key="forCols"
      :dynamicTableOtherHeight="120"
    />
    <div class="filter-container filter-title">{{$t('ve.label.RejectReminderArea')/*驳回区提醒*/}}</div>
    <div class="filter-container filter-params" style="padding-bottom:15px;height:20px;">
      <el-input
        type="textarea"
        :rows="4"
        :placeholder="this.$t('sys.tips.esTip13')"
        v-model="rejectNote"
        :autosize="{ minRows: 3}"
      ></el-input>
    </div>
    <apply :planApplyVisible="planApplyVisible" @changeCode="sendCode" />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { testTableColConfig } from "@/api/table";
import apply from "./planApply/apply";
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name: "planningApply",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    apply
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veBuMonthPlanQueryFindAll,
      planApplyVisible: false,
      rejectNote: "",
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.query(),
          text: this.$t('sys.button.query')
        },//查询
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.apply(),
          text:this.$t('sys.button.application')
        },//申请,
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text:this.$t('sys.button.reset')
        }//重置
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: this.$t('org.label.carBrand')/*品牌*/,
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t('org.label.planMonth')/*计划年月*/,
          codeField: "planMonth",
          dateType: "month",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t('org.label.carType')/*车型*/,
          codeField: "carConfigId",
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t('org.label.carColor')/*车身颜色*/,
          codeField: "carColorId",
          component: () => import("@/components/org/carColor"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t('org.label.carIncolor')/*内饰色*/,
          codeField: "carIncolorId",
          component: () => import("@/components/org/TrimPopupColor"),
          type: "propus",
          isMust: false
        },
        {
          label: this.$t('org.label.isEnable')/*状态*/,
          compKey: "compKey6",
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: "carBrandCn", label: this.$t('org.label.carBrand')/*品牌*/, width: 200, align: "center" },
        {
          prop: "carBrandCode",
          label: "品牌编号",
          width: 0,
          align: "center",
          hidden: true
        },
        { prop: "carSeriesCn", label: this.$t('org.label.carSerise')/*车系*/, width: 200, align: "center" },
        {
          prop: "carConfigCode",
          label: this.$t('org.label.carConfig')/*车型配置编码*/,
          width: 200,
          align: "center"
        },
        {
          prop: "carColorName",
          label: this.$t('org.label.carColor')/*车身颜色*/,
          width: 200,
          align: "center"
        },
        {
          prop: "carInColorName",
          label: this.$t('org.label.carIncolor')/*内饰色*/,
          width: 200,
          align: "center"
        },
        { prop: "planMonth", label: this.$t('org.label.planMonth')/*计划年月*/, width: 80, align: "center" },
        {
          prop: "planQty",
          label: this.$t('org.label.planQty')/*计数数量*/,
          width: 100,
          align: "center"
        },
        {
          prop: "makeEmpId",
          label: this.$t('org.label.makeEmpId')/*制作人*/,
          width: 200,
          align: "center"
        },
        {
          prop: "makingYears",
          label: this.$t('org.label.makingYears')/*制作时间*/,
          width: 200,
          align: "center"
        },
        {
          prop: "isEnable",
          label: this.$t('org.label.isEnable')/*状态*/,
          width: 200,
          align: "center"
        },
        {
          prop: "auditTime",
          label: this.$t('org.label.auditTime')/*审核时间*/,
          width: 200,
          align: "center"
        },
        {
          prop: "planStatus",
          label: this.$t('org.label.planStatus')/*主机厂审核*/,
          width: 200,
          align: "center"
        },
        {
          prop: "rejectNote",
          label: "主机厂审核",
          width: 200,
          align: "center",
          hidden:true
        }

      ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "",
        planMonth: "",
        carConfigId: "",
        carColorId: "",
        carIncolorId: "",
        isEnable: "",
        dlrId: "1",
        requireType: "1"
      },
      forCols: "a"
    };
  },
  mounted() {},
  methods: {
    apply() {
      this.planApplyVisible = true;
    },
    query() {
      const this_ = this;
      this.queryTable(1, null, null, null, function(){
        console.log(this_.$refs.multipleTable.list)
        if(this_.$refs.multipleTable.list.length>1){
          this_.rejectNote = this_.$refs.multipleTable.list[0].rejectNote;
        }
      });
    },
    sendCode(val) {
      this.planApplyVisible = false;
    }
  }
};
</script>
