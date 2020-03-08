<!--
 * description: 参与批次分配采购单时间范围设置
 * author: zhhx
 * createdDate: 2019-09-19
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

     <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>


    <el-dialog
        :title= " $t('sys.button.switchSet') "
        :visible.sync="orgManageVisible"
        width="300px"
        height="150px"
        :append-to-body="true"
        center
        @close="sendCode"
        class="orgManageDialog"
        >
            <div class="filter-container filter-params">

                <el-row :gutter="26">
                  <div class="onOffPart">

              <span>{{'车系采购单确认时间设置开关'}}</span>
                     <el-radio v-model="radio" label="1" @change="onOffChange">开</el-radio>
                     <el-radio v-model="radio" label="0" @change="onOffChange">关</el-radio>
                  </div>
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
import Edit from "./edit";
import LangSelect from "@/components/LangSelect";
export default {
  name:"batchDistPurOrderSet",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit,
    LangSelect
  },
  // 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veDbBatchordScheduleQueryFindAll,
      //弹框
        orgManageVisible: false,
        //开关保存数据
        onOffSavaData:{purcashTypeId:''},
      //开关标签
        radio:'1',

      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: '', size: 'small', clickEvent: () => this.onOffSet(), text: this.$t('sys.button.switchSet')},//开关设置
        {compKey: 'btnKey2', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')}, //查询

        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.synchrony('isEnable,orderBeginTime,orderEndTime'), text: this.$t('sys.button.sync')},  //同步
        //新增
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.add(), text: this.$t('sys.button.newAdd')},  //新增
          //
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.save(), text: this.$t('sys.button.save')},   //保存
        //
        {compKey: 'btnKey6', type: '', size: 'small', clickEvent: () => this.del(), text: this.$t('sys.button.delete')},  // 删除
         {
          compKey: "btnKey7",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t('sys.button.reset')
        }


      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
      //品牌
      {compKey: 'compKey1', labelName: this.$t('org.label.carBrand'), codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        // 车系
        { compKey: "compKey2",
          labelName: this.$t('org.label.carSerise'),
          codeField: "carSeriesId",
          parentFields: 'carBrandCode-carBrandCode',
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: true},
          // 状态
          {
          compKey: "compKey3",
          labelName: this.$t('ve.label.sStatus'),
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        //值列表编码  类型       --待定
        {
          compKey: "compKey4",
          labelName: this.$t('ve.label.setTypeCode'),
          lookuptype: "DB0001",
          codeField: "setTypeCode",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        //采购单开始日期
        {
          compKey: "compKey5",
          labelName: this.$t('ve.label.orderBeginTime'),
          codeField: "orderBeginTime",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "0",
          isMust: false
        },
        // 采购单结束日期
        {
          compKey: "compKey6",
          labelName: this.$t('ve.label.orderEndTime'),
          codeField: "orderEndTime",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "0",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path]&& CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [
      //  品牌
       { prop: 'carBrandCn', label: this.$t('org.label.carBrand'), width: null, align: 'center' },
        { prop: 'carBrandCode', label: '品牌ID', width: null, align: 'center', hidden: true },
        // 车系
          { prop: 'carSeriesCn', label: this.$t('ve.label.carSeriseName'), width: null, align: 'center' },
           { prop: 'carSeriesId', label: '车系ID', width: null, align: 'center', hidden: true },
          //类型
        { prop: 'setTypeCn', label: this.$t('ve.label.setTypeCode'), width: null, align: 'center' },
        { prop: 'setTypeCode', label: '类型编码', width: null, align: 'center', hidden: true },
        //状态
        {
          prop: "isEnable",
          label: this.$t('ve.label.sStatus') + '+',
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              codeField: "isEnable",
              clickEvent: () => null,
              component: () => import("@/components/org/isEnable/isEnable")
            }
          ]
        },
        //
         {
          prop: "orderBeginTime",
          label: this.$t('ve.label.orderBeginTime') + '+',
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey2",
              isShowLabel: false,
              codeField: "orderBeginTime",
              clickEvent: () => null,
              component: () => import("@/components/org/datePicker/datePicker")
            }
          ]
        }, {
          prop: "orderEndTime",
          label: this.$t('ve.label.orderEndTime') + '+',
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey3",
              isShowLabel: false,
              codeField: "orderEndTime",
              clickEvent: () => null,
              component: () => import("@/components/org/datePicker/datePicker")
            }
          ]
        },
       //批次分配采购单时间范围主键ID
        { prop: 'batchOrderScheduleId', label: '主键ID', width: null, align: 'center', hidden: true }
      ],
      //表单查询数据
      formField:{
        carBrandCode: '',
        carSeriesId: '',
        isEnable: '',
        setTypeCode: '',
        orderBeginTime: '',
        orderEndTime: ''

      }
    }
  },
  methods: {
    //开关设置  字段待确认
    onOffSet() {
      this.orgManageVisible = true
      this.radio="1"
    },
    onOffChange(val) {
      this.onOffSavaData.purcashTypeId = val
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
          apiConfig: veApis.veDbBatchordScheduleMutationSave,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo:
            {
              carBrandCode: selectData[k].carBrandCode,
              carSeriesId: selectData[k].carSeriesId,
               setTypeCode: selectData[k].setTypeCode,
              isEnable: selectData[k].isEnable,
               orderBeginTime: selectData[k].orderBeginTime,
              orderEndTime: selectData[k].orderEndTime,
              updateControlId: selectData[k].updateControlId
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
