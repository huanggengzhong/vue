<!--
* description: 经销商开关设置
* author: yangsq
* createdDate: 2019-09-20
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
      :dynamicIsShowSelect="isMul"
      :dynamicIsShowTableSelect="isMul"
      :dynamicIsShowMoreBtn="false"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from '@/cache/configCache/index'

export default {
    name: "DealerSwitchSetting",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
   data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veDealerSwitchSetting,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query") //查询
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //重置
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.synchrony('syscobutton,tdcmsbutton'),
          text: this.$t("sys.button.sync") //同步
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save") //同步
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export") //同步
        }

      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: this.$t("ve.label.carBrandCode"),//品牌
          codeField: "carBrandCode",
          isMul:false,
          component: () =>import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
         {
          compKey: "compKey2",
          labelName: this.$t("org.label.dlrShortName"),//经销商简称
          codeField: "dlrShortName",
          component: () => import("@/components/org/orgDlr"),
          type: "dropdownList",
          isMul:false,
          isMust: true
        },
         {
          compKey: "compKey3",
          labelName: this.$t("ve.label.WhenTheSE"),// 次搬开关勾上时，融资只能选择主搬入地
          codeField: "textalign",
          component: () => import("@/components/org/linkButton"),
          type: "textButton",
          isMul:false,
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [

        {
          prop: "carBrandCode",
          label: this.$t("ve.label.carBrandCode"),//品牌
          codeField: "carBrandCode",
          width: null,
          align: "center",
        },
        {
          prop: "provinceld",
          label: this.$t("org.label.prohibit"),//省份
          width: null,
          align: "center",
        },
        {
          prop: "city",
          label: this.$t("org.label.cityName"),//城市
          width: null,
          align: "center",
        },
        {
          prop: "dlr",
          label: this.$t("org.label.dlrName"),//经销商名称
          width: null,
          align: "center",
        },
        {
          prop: "tdcmsbutton",
          label: this.$t("ve.label.SecondarySwitch"),//次搬开关
          width: null,
          align: "center",
          isComponent: true,
          comps: [{compKey: 'propKey1',
          isShowLabel: false,
          codeField: 'tdcmsbutton', clickEvent: () => null,
          component: () => import('@/components/org/isEnable/isEnable')}]
        },
        {
          prop: "syscobutton",
          label: this.$t("ve.label.DeductionMS"),// 扣款匹配开关",
          width: null,
          align: "center",
          isComponent: true,
          comps: [{compKey: 'propKey2',
          isShowLabel: false,
          codeField: 'syscobutton', clickEvent: () => null,
          component: () => import('@/components/org/isEnable/isEnable')}]
        },
        {
          prop: "area",
          label: this.$t("org.label.area"),// 区域",
          width: null,
          align: "center",
        },
        {
          prop: "bigArea",
          label: this.$t("ve.label.bigarea"),// 大区
          width: null,
          align: "center",
        },
        {
          prop: "smallArea",
          label: this.$t("ve.label.smallArea"),//小区
          width: null,
          align: "center",
          type: "selection",
        }
      ],
      formField: {
        carBrandCode: '',
        dlrShortName: ''
      }
    };

  },
    methods: {
        //新增
    save() {
      const that = this;
      //获取选择行的值    this.$refs.multipleTable获取网格  需要在网格添加ref="multipleTable"
      let selectData = that.$refs.multipleTable.selection;
      var selectIndexSort = [];
      for (var k in selectData) {
        selectIndexSort.push(selectData[k].index);
      }
      //选择行重新排序
      selectIndexSort.sort(function(a, b) {
        return a > b ? 1 : -1;
      });
      for (var i = 1; i < selectIndexSort.length; i++) {
        //将选择第一行的某个字段数据赋给其他选择行, 可以多个
        that.list[selectIndexSort[i]].carTypeConfig =
          that.list[selectIndexSort[0]].carTypeConfig;
        that.list[selectIndexSort[i]].editDate =
          that.list[selectIndexSort[0]].editDate;
        that.list[selectIndexSort[i]].isEnable = String(
          that.list[selectIndexSort[0]].isEnable
        );
        that.list[selectIndexSort[i]].carColor = String(
          that.list[selectIndexSort[0]].carColor
        );
      }
    },
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.codeField.dlrShortName)) {
        that.$message({
          message:"保存成功",
          type: "success",
          duration: 2000
        });
        return;
      }

      //保存
      this.saveForm();
    },
  }
}
</script>
