/**
* description: 批次分配调用
* author: linwm
* createdDate: 2019-07-27
* author: yangsq
* i18n: 2019-09-16
*/
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name: "veBattchAssignLog",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veBattchAssignLogQry,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")  //查询
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.execute(),
          text: this.$t("ve.label.Implement")  //执行
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")  //重置
        }
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: this.$t("ve.label.carBrand"),  //品牌
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        // 日期控件
        {
          compKey: "compKey2",
          labelName: this.$t("ve.label.StartDate"),  //开始日期
          codeField: "beginDate",
          dateOptionsType: '1',
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("ve.label.EndDate"),  //结束日期
          codeField: "endDate",
          dateOptionsType: '1',
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          isMust: true
        }
      ],
         // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        { prop: 'battchAssign', label: this.$t("ve.label.BattchAssign"), width: 300, align: 'center' },  //批次分配日志
        { prop: 'battchAssignLog', label: this.$t("ve.label.BattchAssignLog"), width: 600, align: 'center' },//批次分配日志内容
        { prop: 'battchAssignLogDate', label: this.$t("ve.label.BattchAssignLogDate"), width: 360, align: 'center' },//批次分配日志记录时间
        { prop: 'updateControlId', label: this.$t("org.label.concurrencyControl"), width: 0, align: 'center' ,hidden: true }//并发控制
        ],
        //表单查询数据（查询条件）
      formField:{
        carBrandCode: '',
        beginDate:'',
        endDate:''
      }
    };
  },
  methods: {
   execute(){
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: '请选择需要执行的批次分配日志',
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
          apiConfig: veApis.veBattchAssign,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response =>{
          if (response.data[queryObj.apiConfig.ServiceCode].result === '1') {
            saveCount++;
          } else {
            saveState = false;
            msg = response.data[queryObj.apiConfig.ServiceCode].msg;
            that.$message({
              message: msg,
              type: 'warning',
              duration: 2000
            });
          }

          if (saveCount == selectData.length) {
            that.$message({
              message: '执行成功',
              type: 'warning',
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

