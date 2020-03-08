/**
* description: 储位维护
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
      :dynamicIsShowMoreBtn="true"
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
  name: "stockPlace",
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
      apiConfig: veApis.veStockPlace,
      // 动态组件-按钮
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
          clickEvent: () => this.add(),
          text: "新增"
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
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        // 显示组件
        //  {
        //         compKey: "compKey5",
        //         labelName: this.$t("org.label.carBrandCn") /*品牌*/,
        //         codeField: "carBrandCode",
        //         component: () => import("@/components/org/carBrand/carBrand"),
        //         type: "dropdownList",
        //         isMust: true
        // },
        {
          compKey: "compKey1",
          labelName: "仓库",
          codeField: "carHouseCode",
          component: () =>
            import("@/components/ve/wareHouseMulti/wareHouseMulti"),
          type: "dropdownList",
          isMust: true
        },
         {
          compKey: "compKey2",
          labelName: "储区名称",
          codeField: "carAreaName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "管理人",
          codeField: "carPlaceManager",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "储位名称",
          codeField: "carPlaceName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 100,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: "编辑",
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            },
            {
              compKey: "propKey1",
              labelName: "删除",
              codeField: "delControlBtn",
              clickEvent: this.del,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        {
          prop: "carStockPlaceId",
          label: "主键Id",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "drlId",
          label: "经销商",
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "carHouseName",
          label: "仓库名称",
          align: "center"
        },
        {
          prop: "carAreaName",
          label: "储区名称",
          align: "center"
        },
        {
          prop: "carPlaceName",
          label: "储位名称",
          align: "center"
        },
        {
          prop: "carPlaceManager",
          label: "管理人",
          align: "center"
        },
         {
          prop: "carStockAreaId",
          label: "储区ID",
          align: "center",
          hidden:true
        },
        { prop: "isEnable", label: "是否启用", width: 200, align: "center" },
        {
          prop: "updateControlId",
          label: "并发控制",
          width: 0,
          align: "center",
          hidden: true
        }
      ],
      formField: {
        carHouseCode: "",
        carAreaName: "",
        carPlaceManager: "",
        carPlaceName: ""
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
      obj.carStockPlaceId = editRowData.carStockPlaceId;
      obj.updateControlId = editRowData.updateControlId;
      let queryObj = {
          //保存需要传 type="mutation"
          type:'mutation',
          // api配置
          apiConfig: veApis.veStockPlaceDel,
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
            if(response.data[veApis.veStockPlaceDel.ServiceCode].result === '1'){
                //通关如果的状态确认是编辑还是添加
                this.$message({message:"删除成功",type: 'success'});
                this.queryTable(1);
            }else{
                this.$message({message:response.data[veApis.veStockPlaceDel.ServiceCode].msg});
            }
        })
    },
  }
};
</script>

<style scoped>
/deep/ a {
    color: #409eff;
}
</style>
