/**
* description: 储区维护
* author: linwm
* createdDate: 2019-07-25
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
      :dynamicIsShowSelect="false"
      :dynamicIsShowMoreBtn="false"
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
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name: "stockArea",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veStockArea,
           // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t('sys.button.query')
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t('sys.button.add')
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t('sys.button.reset')
        }
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        // 显示组件
        {compKey: 'compKey4', labelName: '品牌', codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', clearable: false, isMust: true},
        {
          compKey: "compKey1",
          labelName:  this.$t('org.label.warnHome'),
          codeField: "carHouseCode",
          textField:"carHouseName",
          component: () =>
            import("@/components/ve/wareHouseMulti/wareHouseMulti"),
          type: "dropdownList",
          isMust: true
        },
         {
          compKey: "compKey2",
          labelName: this.$t('ve.label.CarAreaName'),
          codeField: "carAreaName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t('ve.label.Manger'),
          codeField: "carAreaManager",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        {
          prop: "controlBtn",
          label: this.$t('ve.label.Operate'),
          codeField: "controlBtn",
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: this.$t('sys.button.edit'),
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            },
            {
              compKey: "propKey1",
              labelName: this.$t('sys.button.delete'),/*删除*/
              codeField: "delControlBtn",
              clickEvent: this.del,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        {
          prop: "carStockAreaId",
          label: "主键Id",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "dlrId",
          label: "经销商ID",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "carBrandCode",
          label: "品牌编码",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "carHouseName",
          label: this.$t('ve.label.WarnHomeName'),
          width: null,
          align: "center"
        },
        {
          prop: "carAreaName",
          label: this.$t('ve.label.CarAreaName'),
          width: null,
          align: "center"
        },
        {
          prop: "carAreaManager",
          label: this.$t('ve.label.Manger'),
          width: null,
          align: "center"
        },
        { prop: "isEnable", label: this.$t('ve.label.isEnable'), width: null, align: "center" },
        { prop: "remark", label:this.$t('ve.label.remark'), width: null, align: "center" },
        {
          prop: "carStockHouseId",
          label: "仓库ID",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "updateControlId",
          label: "并发控制",
          width: 0,
          align: "center",
          hidden: true
        }
      ],
      formField: {
        carBrandCode:"",
        carHouseName:"",
        carAreaName: "",
        carAreaManager:""
      }
    };
  },

  methods: {
    //删除
    del(index) {
      var curIndex = index
      const that = this.$refs.multipleTable
      if (curIndex === undefined || curIndex === null) {
        var currentRow
        if (that.isMul === true) {
          // 多选
          var selectData = that.selection
          if (selectData.length > 0) {
            currentRow = selectData[0]
          }
        } else {
          // 单选
          currentRow = that.currentRow
        }
        if (currentRow) {
          curIndex = currentRow.index
        }
      }

      if (curIndex === undefined || curIndex === null) {
        this.$alert('请选择需要删除的数据', '提示')
        return
      }
      var editRowData = that.list[curIndex];
      let obj = {}
      obj.carStockAreaId = editRowData.carStockAreaId;
      obj.updateControlId = editRowData.updateControlId;
      obj.userId = editRowData.userId;
      let queryObj = {
          //保存需要传 type="mutation"
          type:'mutation',
          // api配置
          apiConfig: veApis.veStockAreaDel,
          // 需要调用的API服务配置
          apiServices: [{
            //表格中台返回网格的字段
            apiQueryRow:[]
          }],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              //  pageSize: 1000,
              //  pageIndex: 1,
               //当前中台使用的名称有dataInfo、info，具体查看API文档
               dataInfo: obj
            }
      }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        this.$requestGraphQL(paramD).then(response =>{
            if(response.data[queryObj.apiConfig.ServiceCode].result === '1'){
                //通关如果的状态确认是编辑还是添加
                this.$message({message:this.$t("sys.tips.esTip14"),//删除成功
                type: 'success'});
                this.queryTable(1);
            }else{
                this.$message({message:response.data[queryObj.apiConfig.ServiceCode].msg});
            }
        })
    },
  }
};
</script>
