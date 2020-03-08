<!--
* description: 经销商交车超期预警天数
* author: yangsq
* createdDate: 2019-10-21
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
      :dynamicIsShowMoreBtn="false"
      :dynamicIsShowSelect="true"
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
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "ExceedFateSetting",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.mdmVeCarSeriesQueryListForPage,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey6",
          type: "",
          size: "small",
          clickEvent: () => this.synchronyAll(),
          text: "全部同步"
        },
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t('sys.button.query')/* 查询 */
        },
                {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t('sys.button.reset')/* 重置 */
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t('sys.button.add')/* 新增 */
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.synchrony("carBrandCode,isEnable,deductDays,oneday,twoday,threeday"),
          text: "同步"
        },        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        },
        {
          compKey: "btnKey7",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t('sys.button.export')/* 导出 */
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
        {
          compKey: "compKey1",
          labelName: "品牌",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "经销商简称",
          codeField: "dlrShortName",
          component: () => import("@/components/org/orgDlr"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "是否启用",
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
        { prop: "carBrandCode", label: "品牌", width: 260, align: "center",
        isComponent: true,
        comps: 
        [
        {
        compKey: 'propKey1',
        codeField: 'carBrandCode',
        isMust: 'true',
        disabled: false,
        type: "dropdownList",
        clickEvent: () => null,
        component: () => import('@/components/org/carBrand/carBrand')}]
        },
        {
          prop: "dlrShortName",
          label: "经销商",
          width: null,
          align: "center"
        },
        {
          prop: "oneday",
          label: "销售顾问预警天数",
          width: null,
          align: "center",
          isComponent: true,
          comps: [{compKey: 'propKey2',
          isShowLabel: false,
           codeField: 'oneday', 
           type: 'inputText',
           clickEvent: () => null,
           component: () => import('@/components/org/commonInput')}]
        },
        {
          prop: "deductDay",
          label: "周期（天）+",
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey6",
              isShowLabel: false,
              codeField: "deductDay",
              clickEvent: () => null,
              component: () => import("@/components/org/commonInput")
            }
          ]
        },
        {
          prop: "twoday",
          label: "销售经理预警天数",
          width: null,
          align: "center",
          isComponent: true,
          comps: [{compKey: 'propKey3',
          isShowLabel: false,
           codeField: 'twoday', 
           type: 'inputText',
           clickEvent: () => null,
           component: () => import('@/components/org/commonInput')}]
        },
        {
          prop: "threeday",
          label: "总经理预警天数",
          width: 150,
          align: "center",
          isComponent: true,
          comps: [{compKey: 'propKey4',
          isShowLabel: false,
           codeField: 'threeday', 
           type: 'inputText',
           clickEvent: () => null,
           component: () => import('@/components/org/commonInput')}]
        },
        {
          prop: "isEnable",
          label: "是否启用",
          width: null,
          align: "center",
          isComponent: true,
          comps: [{compKey: 'propKey5',
          isShowLabel: false,
           codeField: 'isEnable', 
           clickEvent: () => null,
           component: () => import('@/components/org/isEnable/isEnable')}]
        },
        {
          prop: "updateControlId",
          label: "并发字段",
          width: null,
          align: "center",
          hidden: true
        }
            ],
      formField: {
        carBrandCode: "",
        dlrShortName: "",
        isEnable: "",
        updateControlId:""
      }
    };
  },
      methods: {
    synchronyAll() {
      const that = this;
      if (that.$utils.isEmpty(that.formField.CarBrandcode)) {
        that.$message({
          message: "全部同步成功",
          type: "success",
          duration: 2000
        });
        return;
      }
      //全部同步表单
      this.synchronyAllForm();
    }
  }
};
</script>
