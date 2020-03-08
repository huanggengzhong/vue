<!--
* description: 车系权限-新增、修改弹窗
* author: luojx
* createdDate: 2019-08-04
-->
<template>
  <section class="wareHouse">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="formField[comp.codeField]"
            :text="formField[comp.textField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :span="comp.span || 8"
            :isMul="comp.isMul"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button
          v-for="comp in tableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veStockHouseSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.confirm")
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        },
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel")
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        // {
        //   compKey: "compKey1",
        //   labelName: "品牌",
        //   codeField: "carBrandCode",
        //   isRequire: true,
        //   component: () => import("@/components/org/carBrand/carBrand"),
        //   type: "dropdownList",
        //   isMul:false,
        //   isMust: true
        // },
        {
          compKey: "compKey10",
          labelName: this.$t("org.label.warnHomeCode"),
          isRequire: true,
          codeField: "carHouseCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
          disabled: !this.isAdd()
        },
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.carHouseTel"),
          codeField: "carHouseTel",
          isRequire: true,

          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("org.label.warnHomeName"),
          isRequire: true,
          codeField: "carHouseName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("org.label.answerCode"),
          isRequire: true,
          codeField: "answerCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: this.$t("org.label.carHouseAddr"),
          codeField: "carHouseAddr",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,

          isMust: true
        },
        {
          //仓库传真
          compKey: "compKey8",
          labelName: this.$t("org.label.carHouseFax"),
          codeField: "carHouseFax",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey9",
          labelName: this.$t("org.label.carHouseManager"),
          codeField: "carHouseManager",
          isRequire: true,

          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        // {compKey: 'compKey10', labelName: '仓库类别', codeField: 'carHouseType',  component: () => import('@/components/org/commonInput'), type: 'inputText', hidden: true, isMust: true},
        // {compKey: 'compKey11', labelName: '仓库编码', codeField: 'carHouseCode',  component: () => import('@/components/org/commonInput'), type: 'inputText', hidden: true, isMust: true},
        {
          compKey: "compKey15",
          labelName: this.$t("org.label.warnHomeType"),
          codeField: "carStoreClass",
          isRequire: true,
          component: () =>
            import("@/components/ve/warehouseClass/warehouseClass"),
          type: "dropdownList",
          isMul: false,
          isMust: true
        }
      ],

      // 标题
      textMap: {
        edit: this.$t(
          "org.label.textMap3.editWarnHomeInfo"
        ) /*修改仓库权限信息*/,
        add: this.$t("org.label.textMap3.addWarnHomeInfo") /*新增仓库权限信息*/
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        // carBrandCode:'',
        oemCode: "",
        carHouseTel: "",
        carHouseName: "",
        dlrId: "1",
        answerCode: "",
        carHouseAddr: "",
        carHouseFax: "",
        carHouseManager: "",
        carHouseType: this.isAdd() ? "" : "3",
        updateControlId: "",
        carStoreClass: "",
        carHouseCode: "",
        carStockHouseId:''
      },
      carhouseTypeApiConfig: orgApis.mdsLookupValueQueryByPage,
      carhouseTypeapiQueryRow: [
        "lookupTypeCode",
        "lookupTypeName",
        "lookupValueCode",
        "lookupValueName"
      ],
      carhouseTypeData: []
    };
  },
  created() {
    if (this.isAdd()) {
      this.queryCarhouseType(
        this.carhouseTypeApiConfig,
        this.carhouseTypeapiQueryRow
      );
    }
    this.formField.carHouseType = "3";
  },
  methods: {
    getCarhouseType() {
      if (this.isAdd()) {
        let orgType = this.$store.getters.orgInfo.ORG_TYPE;
        let dlrOrgType = this.$store.getters.orgInfo.DLR_ORG_TYPE;
        let parentDlrCode = this.$store.getters.orgInfo.PARENT_DLR_CODE;
        this.formField.carHouseType = "1";
        console.log(this.formField.carHouseType);
        // if(orgType === dlrOrgType){
        //   this.formField.carHouseType = "1"
        // }else if(orgType != dlrOrgType){

        // }
      }
    },
    queryCarhouseType(apiConfig, apiQueryRow) {
      const queryObj = {
        // api配置
        apiConfig: apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            // 表格中台返回网格的字段
            apiQueryRow: apiQueryRow
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 100,
          pageIndex: 1,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: { lookupTypeCode: "VE0015" }
        }
      };
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj);
      // 检查查询结果已经存在且未过期
      var cacheData = this.$OrgCacheData.CacheObject[
        queryObj.apiConfig.ServiceCode
      ];
      if (cacheData) {
        this.carhouseTypeData = cacheData.getData(queryObj) || [];
      } else {
        this.carhouseTypeData = [];
      }
      // var cacheData = this.$OrgCacheData.CacheObject.cacheDatas.filter(o => o.cacheName === queryObj.apiConfig.ServiceCode && o.useCache === true)
      if (this.carhouseTypeData.length === 0) {
        // 不存在则请求中台API数据
        // 调用中台API方法（可复用）
        this.$requestGraphQL(paramD).then(response => {
          if (
            response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
            response.data[queryObj.apiConfig.ServiceCode].rows
          ) {
            this.carhouseTypeData =
              response.data[queryObj.apiConfig.ServiceCode].rows;
            console.log(this.carhouseTypeData);
            this.getCarhouseType();
            // 赋值缓存
            if (cacheData) {
              cacheData.setData(
                queryObj,
                response.data[queryObj.apiConfig.ServiceCode].rows
              );
            }
          }
        });
      }
    },
    //保存
    save() {
      const that = this;
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        //保存表单
        this.saveForm();
      }
    }
  }
};
</script>
