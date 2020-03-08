/**
* description: 经销商可分配仓库设置
* author: linwm
* createdDate: 2019-07-23
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
      :dynamicIsShowMoreBtn="true"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name: "dlrCanReleaseStore",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  // 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    console.info(this.$store.getters.orgInfo.OEM_CODE)
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veDbCarStockHouseCanUseQueyFindAll,
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
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.synchrony('storeShowStatus,hid1,hid2,hid3,hid4,hid5,hid6,hid7,hid8,hid9,hid10,carHouseName1,carHouseName2,carHouseName3,carHouseName4,carHouseName5,carHouseName6,carHouseName7,carHouseName8,carHouseName9,carHouseName10'),
          text: this.$t("sys.button.sync") //同步
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.save") //保存
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //重置
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export") //"导出"
        }
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [

        // 显示组件
        {
          compKey: "compKey1",
          labelName: this.$t("org.label.carBrand"), //"品牌"
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isRequire:true,
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.dlrName"),//"经销商"
          codeField: "dlrId",
          component: () => import("@/components/org/orgDlr/index"),
          type: "propus",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path]&& CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
        {
          prop: "carBrandCode",
          label: this.$t("org.label.carBrandCode"),//"品牌编码"
          width: 0,
          align: "center",
          hidden: true
        },
        {
          prop: "carBrandCn",
          label: this.$t("org.label.carBrandCn"),//"品牌名称",
          width: 150,
          align: "center"
        },
        {prop: "bigAreaName",label: this.$t("org.label.region"),/** 大区*/width: 100,align: "center"},
        {prop: "smallAreaName",label: this.$t("org.label.smallAreaName"),/** 小区*/width: 100,align: "center"},
        {prop: "dlrId",label: this.$t("org.label.dlrId"),/**"经销商Id"*/width: 0,align: "center",hidden: true},
        {prop: "dlrShortName",label: this.$t("org.label.dlrName"),/**"经销商"*/width: 150,align: "center"},
        {prop: "carHouseName1",label: "",hidden: true},
        {prop: "carHouseName2",label: "",hidden: true},
        {prop: "carHouseName3",label: "",hidden: true},
        {prop: "carHouseName4",label: "",hidden: true},
        {prop: "carHouseName5",label: "",hidden: true},
        {prop: "carHouseName6",label: "",hidden: true},
        {prop: "carHouseName7",label: "",hidden: true},
        {prop: "carHouseName8",label: "",hidden: true},
        {prop: "carHouseName9",label: "",hidden: true},
        {prop: "carHouseName10",label: "",hidden: true},
          {
          prop: "storeShowStatus",
          label: this.$t("org.label.isShow"),//"是否显示"
          width: 150,
          align: "center",
          isComponent: true,
          comps: [{
            compKey: "propKey1", isMul: false,isShowLabel: false,clearable: false,codeField:"storeShowStatus",clickEvent: () => null,component: () => import("@/components/org/isEnable/isEnable")
          }]
        },
        {prop: "hid1", label: this.$t("ve.label.priorityWareHouse")+"1+"/** 优先仓库1+ */,width: null,align: "center",width: 150,isComponent: true,comps: [{
        compKey: "propKey1", rowFileds:"carBrandCode",isMul: false,isShowLabel: false,codeField:"hid1",textField:"carHouseName1",isAsync:true,isHost:true,clickEvent: () => null,component: () => import("@/components/ve/wareHouseMulti/wareHouseMulti")}]
        },
         {prop: "hid2", label: this.$t("ve.label.priorityWareHouse")+"2+"/** 优先仓库2+ */,width: null,align: "center",width: 150,isComponent: true,comps: [{
          compKey: "propKey1", rowFileds:"carBrandCode",isMul: false,isShowLabel: false,codeField:"hid2",textField:"carHouseName2",isAsync:true,isHost:true,clickEvent: () => null,component: () => import("@/components/ve/wareHouseMulti/wareHouseMulti")}]
        },
         {prop: "hid3", label: this.$t("ve.label.priorityWareHouse")+"3+"/** 优先仓库3+ */,width: null,align: "center",width: 150,isComponent: true,comps: [{
          compKey: "propKey1", rowFileds:"carBrandCode",isMul: false,isShowLabel: false,codeField:"hid3",textField:"carHouseName3",isAsync:true,isHost:true,clickEvent: () => null,component: () => import("@/components/ve/wareHouseMulti/wareHouseMulti")}]
        },
         {prop: "hid4", label: this.$t("ve.label.priorityWareHouse")+"4+"/** 优先仓库4+ */,width: null,align: "center",width: 150,isComponent: true,comps: [{
          compKey: "propKey1", rowFileds:"carBrandCode",isMul: false,isShowLabel: false,codeField:"hid4",textField:"carHouseName4",isAsync:true,isHost:true,clickEvent: () => null,component: () => import("@/components/ve/wareHouseMulti/wareHouseMulti")}]
        },
         {prop: "hid5", label: this.$t("ve.label.priorityWareHouse")+"5+"/** 优先仓库5+ */,width: null,align: "center",width: 150,isComponent: true,comps: [{
          compKey: "propKey1", rowFileds:"carBrandCode",isMul: false,isShowLabel: false,codeField:"hid5",textField:"carHouseName5",isAsync:true,isHost:true,clickEvent: () => null,component: () => import("@/components/ve/wareHouseMulti/wareHouseMulti")}]
        },
         {prop: "hid6", label: this.$t("ve.label.priorityWareHouse")+"6+"/** 优先仓库6+ */,width: null,align: "center",width: 150,isComponent: true,comps: [{
          compKey: "propKey1", rowFileds:"carBrandCode",isMul: false,isShowLabel: false,codeField:"hid6",textField:"carHouseName6",isAsync:true,isHost:true,clickEvent: () => null,component: () => import("@/components/ve/wareHouseMulti/wareHouseMulti")}]
        },
         {prop: "hid7", label: this.$t("ve.label.priorityWareHouse")+"7+"/** 优先仓库7+ */,width: null,align: "center",width: 150,isComponent: true,comps: [{
          compKey: "propKey1", rowFileds:"carBrandCode",isMul: false,isShowLabel: false,codeField:"hid7",textField:"carHouseName7",isAsync:true,isHost:true,clickEvent: () => null,component: () => import("@/components/ve/wareHouseMulti/wareHouseMulti")}]
        },
         {prop: "hid8", label: this.$t("ve.label.priorityWareHouse")+"8+"/** 优先仓库8+ */,width: null,align: "center",width: 150,isComponent: true,comps: [{
          compKey: "propKey1", rowFileds:"carBrandCode",isMul: false,isShowLabel: false,codeField:"hid8",textField:"carHouseName8",isAsync:true,isHost:true,clickEvent: () => null,component: () => import("@/components/ve/wareHouseMulti/wareHouseMulti")}]
        },
         {prop: "hid9", label: this.$t("ve.label.priorityWareHouse")+"9+"/** 优先仓库9+ */,width: null,align: "center",width: 150,isComponent: true,comps: [{
          compKey: "propKey1", rowFileds:"carBrandCode",isMul: false,isShowLabel: false,codeField:"hid9",textField:"carHouseName9",isAsync:true,isHost:true,clickEvent: () => null,component: () => import("@/components/ve/wareHouseMulti/wareHouseMulti")}]
        },
         {prop: "hid10", label: this.$t("ve.label.priorityWareHouse")+"10+"/** 优先仓库10+ */,width: null,align: "center",width: 150,isComponent: true,comps: [{
          compKey: "propKey1", rowFileds:"carBrandCode",isMul: false,isShowLabel: false,codeField:"hid10",textField:"carHouseName10",isAsync:true,isHost:true,clickEvent: () => null,component: () => import("@/components/ve/wareHouseMulti/wareHouseMulti")}]
        },
        {
          prop: "storeShowStatus",
          label: "是否显示编码",
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
        carBrandCode: "",
        dlrId: ""
      }
    };
  },

  methods: {
    checkRepeat(selectData){
      var flag = "0"
      for(var k in selectData)
        var idList = [];
        for(var i = 1; i <= 10; i++){
          if(selectData[k]["hid" + i] !== null && selectData[k]["hid" + i] !== ""){
            idList.push(selectData[k]["hid" + i]);
          }
        }
        var hash = {};
        for (var i in idList) {
          if (hash[idList[i]]){
            flag = "1"
            return flag
          }
          hash[idList[i]] = true;
        }
        if (idList.length < 1) {
          flag = "2"
          return flag
          }
      return flag;
    },
    add() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let successCount = 0;
      let allCount = 0;
      let msg = "";

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择需要保存的经销商可分配仓库数据!",
          type: "warning",
          duration: 2000
        });
        return;
      }
      var flag = this.checkRepeat(selectData);
      if(flag === '1'){
        that.$message({
          message: "仓库数据重复，请重新选择！",
          type: "warning",
          duration: 2000
        });
        return
      }
       if(flag === '2'){
        that.$message({
          message: "请至少选择一个仓库！",
          type: "warning",
          duration: 2000
        });
        return
      }
      var arrPromise = []
      var pIndex = 0
      for (var k in selectData) {
        var oneCount = 0;
        for (var i = 1; i <= 10; i++) {
            allCount++;
            oneCount++;
            let queryObj = {
              // 保存mutation
              type: "mutation",
              // api配置
              apiConfig: veApis.veDbCarStockPriorityMutaionSave,
              variables: {
                //当前中台使用的名称有dataInfo、info，具体查看API文档
                dataInfo: {
                  carBrandCode: selectData[k].carBrandCode,
                  carStockHouseId: selectData[k]["hid" + i],
                  dlrId: selectData[k].dlrId,
                  priority: "" + i,
                  storeShowStatus: selectData[k].storeShowStatus,
                  updateControlId: selectData[k].updateControlId
                }
              }
            };
            //转换了中台请求格式数据
            var paramD = that.$getParams(queryObj);
            // 调用中台API方法（可复用）
            arrPromise[pIndex] = that.$requestGraphQL(paramD).then(response => {
              if (
                response.data[queryObj.apiConfig.ServiceCode].result === "1"
              ) {
                successCount++;
              } else {
                saveState = false;
                msg = response.data[queryObj.apiConfig.ServiceCode].msg;
                that.$message({
                  message: msg,
                  type: "warning",
                  duration: 2000
                });
              }
            });
            pIndex++
          }
        if (oneCount === 0) {
          that.$message({
            message: "请至少选择一个仓库",
            type: "warning",
            duration: 2000
          });
        }
      }
      Promise.all(arrPromise).then(function(){
        if (successCount === allCount && allCount !== 0) {
          that.$message({
            message: "保存成功",
            type: "success",
            duration: 2000
          });
          that.$parent.$refs.multipleTable.queryTable(1);
        }
      })
    }
  }
};
</script>
