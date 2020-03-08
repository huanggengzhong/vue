<!--
* description: 经销商目标量反馈时机设置
* author: zhhx
* createdDate: 2019-09-21
* logs:
*
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="true"
      :dynamicIsInitTable="true"
      :dynamicIsColumnDrop="true"
    />


    <el-dialog
        :title= " $t('sys.button.switchSet') "
        :visible.sync="orgManageVisible"
        width="500px"
        height="500px"
        :append-to-body="true"
        center
        @close="sendCode"
        class="orgManageDialog"
        >
            <div class="filter-container filter-params">

                <el-row>
                  <el-col  :span="30">
                  <div>
                      <carBrandDialog
                       :span = "30"
                       :isMul=false
                       @changeCode="changCarBrandCode">
                       </carBrandDialog>
                  </div>
                 </el-col>
                </el-row>

                <el-row :gutter="20">

              <!-- <div class="onOffPart"> -->
               <el-col :span="40">

              <span>{{'目标量反馈时间设置开关'}}</span>
               </el-col>
               <el-col :span="14">
                     <el-radio  :span="7"  v-model="onOffSavaData.timeOffSet" label="1">开</el-radio>
                     <el-radio   :span="7" v-model="onOffSavaData.timeOffSet" label="0">关</el-radio>
                </el-col>
                </el-row>
                <el-row>
                  <!-- </div> -->
                    <div class="filter-container filter-button orgManageBtn">
                        <el-button type="primary" size="small" @click="saveOrg()">保存</el-button>
                        <!-- <el-button size="small" @click="reset()">重置</el-button> -->
                    </div>

                </el-row>
            </div>
        </el-dialog>
  </div>


</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';

import { veApis } from "@/api/graphQLApiList/ve"
import OneTableTemplate from '@/components/templates/oneTable'
// import Edit from './edit'
import { CacheConfig } from '@/cache/configCache/index'
import LangSelect from "@/components/LangSelect";
import carBrandDialog from '@/components/org/carBrand/carBrand'
export default {
  name:"veDbMtargettimeSet",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    LangSelect,
    carBrandDialog
  },
  // 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veDbMtargettimeSetQueryFindAll,
      //弹框
        orgManageVisible: false,
        //开关保存数据
        onOffSavaData:{timeOffSet:'1',carBrandCode: ''},


      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: '', size: 'small', clickEvent: () => this.onOffSet(), text: this.$t('sys.button.switchSet')},//开关设置
        {compKey: 'btnKey2', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')}, //查询

        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.synchrony('beginDate,endDate'), text: this.$t('sys.button.sync')},  //同步
          //保存
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.save(), text: this.$t('sys.button.save')},   //保存
         {
          compKey: "btnKey7",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t('sys.button.reset')
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: "导出"
        }


      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
      //品牌
      {compKey: 'compKey1', labelName: this.$t('org.label.carBrand'), codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
         {
           compKey: "compKey2",
           labelName: this.$t("org.label.dlrName") /*经销商*/,
           codeField: "dlrId",
           component: () => import("@/components/org/orgDlr"),
           type: "propus",
           isMust: true
        },

        //目标量类型     targetTypeName名称
        {
          compKey: "compKey3",
          labelName: '目标量类型 ',
          lookuptype: "VE0275",
          codeField: "targetTypeId",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        //目标量年份
       { compKey: "compKey5",
          labelName: this.$t('ve.label.targetQuaYear'),//目标量年份
          codeField: "targetYear",
          isMul: false,
          component: () => import("@/components/ve/targetQuantityYear"),
          type: "dropdownList",
          isMust: true
        },
        // 目标量月份
       { compKey: "compKey6",
          labelName: this.$t('ve.label.targetQuaMon'),//目标量月份
          codeField: "targetMonth",
          component: () => import("@/components/ve/targetQuantityMonth"),
          type: "dropdownList",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path]&& CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
      { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: null, align: 'center' },//品牌名称
        { prop: "areaName", label: this.$t('org.label.area')/*区域*/,  align: "center" },
        { prop: "bigAreaName", label: this.$t('org.label.region')/*大区*/,  align: "center" },
        { prop: "smallAreaName", label: this.$t('org.label.village')/*小区*/,  align: "center" },
        { prop: "provinceName", label: this.$t('org.label.province')/*省份*/,  align: "center" },
        { prop: "cityName", label: this.$t('org.label.cityName')/*城市*/,  align: "center" },
        { prop: "dlrShortName", label: this.$t('org.label.dlrName')/*经销商*/,  align: "center" },
        { prop: "targetTypeName", label: "目标量类型"/*目标量类型*/,  align: "center" },
        { prop: "targetMonth", label: "目标量月份"/*目标量类型*/,  align: "center" },
        { prop: "dlrId", label: '经销商ID', hidden: true, align: "center" },
         { prop: "targetTypeId", label: '目标量类型ID', hidden: true, align: "center" },
         { prop: "targetDistinStageId", label: '目标量区分阶段ID', hidden: true, align: "center" },
         { prop: "targetYear", label: '目标量年份', hidden: true, align: "center" },


         //制定开始时间+
         {
          prop: "beginDate",
          label: '制定开始时间+',
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey2",
              isShowLabel: false,
              codeField: "beginDate",
              clickEvent: () => null,
              component: () => import("@/components/org/datePicker/datePicker")
            }
          ]
        },
        //制定结束时间+
        {
          prop: "endDate",
          label: '制定结束时间+',
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey3",
              isShowLabel: false,
              codeField: "endDate",
              clickEvent: () => null,
              component: () => import("@/components/org/datePicker/datePicker")
            }
          ]
        },
       //主键ID
        { prop: 'targetTimeSetId', label: '主键ID', width: null, align: 'center', hidden: true }
      ],
      //表单查询数据
      formField:{
        carBrandCode: '',
        dlrId: '',
        targetTypeId: '',
        targetYear: '',
        targetMonth: ''
      }
    }
  },
  methods: {
    //开关设置  字段待确认
    onOffSet() {
      this.orgManageVisible = true
      // this.onOffSavaData.timeOffSet="1"
    },
    // onOffChange(val) {

    //   this.onOffSavaData.timeOffSet = val
    // },
    changCarBrandCode(val){
      this.onOffSavaData.carBrandCode=val
    },
      //保存
    save(){
      const that = this.$refs.multipleTable;
      // let saveState = true;
      // let saveCount = 0;
      let msg = '';

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: this.$t('sys.tips.esTip7'),
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
          apiConfig: veApis.veDbMtargettimeSetMutationSave,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo:
            {
              carBrandCode: selectData[k].carBrandCode,
              dlrId: selectData[k].dlrId,
              targetTypeId: selectData[k].targetTypeId,
              targetDistinId: selectData[k].targetDistinId,   //目标量区分id
              targetDistinStageId: selectData[k].targetDistinStageId,  //目标量区分阶段ID
              beginDate: selectData[k].beginDate,
              endDate: selectData[k].endDate
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response =>{
        //  if(response.data[queryObj.apiConfig.ServiceCode].result === '1' && response.data[queryObj.apiConfig.ServiceCode].rows!=''){
            // this.orgManageVisible = false
            this.$message({
              message: this.$t('sys.tips.esTip5'),
              type: 'success',
              duration: 1000
            });
             that.queryTable(1);
            // }
        });
        }

    },
       //保存开关
    saveOrg(){
       const that = this.$refs.multipleTable;

        let queryObj = {
          // 保存mutation
          type: 'mutation',
          // api配置    api待定
          apiConfig: veApis.purOrderFreezeOnOffMutaionUpdate,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: this.onOffSavaData

          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response =>{
         if(response.data[queryObj.apiConfig.ServiceCode].result === '1' && response.data[queryObj.apiConfig.ServiceCode].rows!=''){
            this.orgManageVisible = false
            this.$message({
              message: this.$t('sys.tips.esTip5'),
              type: 'success',
              duration: 1000
            });
             that.queryTable(1);
            }


        });
      },

      del() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: this.$t('ve.label.batchDistPurOrderSelectTip'),
          type: "warning",
          duration: 2000
        });
        return;
      }
      for (var k in selectData) {
        let queryObj = {
          // 删除mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.veDbBatchordScheduleMutationDelete,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: selectData[k].carBrandCode,
              purRequireId: selectData[k].batchOrderScheduleId,
              updateControlId: selectData[k].updateControlId
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
            saveCount++;
          } else {
            saveState = false;
            msg = response.data[queryObj.apiConfig.ServiceCode].msg;
            that.$message({
              message: msg,
              type: "warning",
              duration: 2000
            });
          }
          if (saveCount == selectData.length) {
            that.$message({
              message: this.$t('sys.tips.esTip14'),
              type: "success",
              duration: 2000
            });
            that.queryTable(1);
          }
        });
      }
    }
    }

}
</script>
<style scoped>
.onOffPart{
  text-align: left;
}
</style>
