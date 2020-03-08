<!--
* description: 客户销退时间限制设置
* author:liudl
* createdDate: 2019-10-11
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamic-buttons="tableButtons"
      :dynamic-components="tableComponents"
      :dynamic-api-config="apiConfig"
      :dynamic-table-cols="tableCols"
      :dynamic-form-fields="formField"
      :dynamicIsShowMoreBtn="false"

      
    />
    <edit
      :dynamic-edit-row-data="editRowData"
      :popups-visible="editPopupsVisible"
      :key="editPopupsKey"
      :popups-state="editPopupsState"
      @close="close"
    />
  
    <!-- 开关对话框 -->
    <onOffsetDialog
    :dynamicEditRowData="settingMothRowData"
    :popupsVisible="settingMothPopupsVisible"
    :key="settingMothPopupsKey"
    :popupsState="settingMothPopupsState"
    @close="settingMothclose"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins'
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'
import Edit from './edit'
import onOffsetDialog from './onOffsetDialog'
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name: "clientquittimelimit",
  components: {
    OneTableTemplate,
    Edit,
    onOffsetDialog
  },
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
    // 阻塞路由预加载网格中组件的数据
beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    return {
      // // dialogVisible: false,
      // dialogFormVisible: false,
      // onOffsetDialog:'onOffsetDialog',
      // radio: '1', // 开关标签
      // 网格查询API配置对象
      apiConfig: veApis.veSaleTimeLimitQry,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: 'btnKey5',
          type: '',
          size: 'small',
          clickEvent: () => this.settingMoth(),
          text: this.$t('ve.label.setSwitch') 
        }, // 设置开关
        {
          compKey: 'btnKey6',
          type: '',
          size: 'small',
          clickEvent: () => this.add(),
          text: this.$t('ve.label.AllclientSet')
        }, // 全国经销商设置
        {
          compKey: 'btnKey1',
          type: 'primary',
          size: 'small',
          clickEvent: () => this.queryTable(1),
          text: this.$t('sys.button.query')
        }, // 查询
        {
          compKey: 'btnKey4',
          type: '',
          size: 'small',
          clickEvent: () => this.reset(),
          text: this.$t('sys.button.reset')
        }, // 重置
        {
          compKey: 'btnKey2',
          type: '',
          size: 'small',
          clickEvent: () => this.synchrony('pactEndDate'),
          text: this.$t('ve.label.synchronization')
        }, // '同步'
        {
          compKey: 'btnKey7',
          type: '',
          size: 'small',
          clickEvent: () => this.save(),
          text: this.$t('sys.button.save')
        }, // '保存'
        {
          compKey: 'btnKey3',
          type: '',
          size: 'small',
          clickEvent: () => this.exportExcel(),
          text: this.$t('sys.button.export')
        } // '导出'
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
        ? CacheConfig.cacheData[this.$route.path].tableComponents
        : [
          // 显示组件
          {
            compKey: 'compKey1',
            labelName: this.$t('org.label.carBrandCn'),
            codeField: 'carBrandCode',
            component: () => import('@/components/org/carBrand/carBrand'),
            isRequire: true,
            type: 'dropdownList',
            isMust: true
          }, // 品牌
          {
            compKey: 'compKey2',
            span: 6,
            labelName: this.$t('org.label.dlrName'), // "经销商",
            codeField: 'dlrId',
            textField: 'distributor',
            component: () => import('@/components/org/orgDlr'),
            type: 'propus',
            isMust: true
          },
          {
            compKey: 'compKey3',
            labelName: this.$t('org.label.isEnable'),
            lookuptype: 'VE0188',
            codeField: 'isEnable',
            component: () => import('@/components/org/isEnable/isEnable'),
            type: 'dropdownList',
            isMust: true
          } // 是否启用
        ],
      // 动态生成网格列
      tableCols: this.getCols(),
      // 表单查询数据
      formField: {
        isEnable: '',
        dlrId: '',
        carBrandCode: ''
      },
      settingMothPopupsVisible: false, //是否显示历史价格弹窗
      // 新增、编辑弹窗Key
      settingMothPopupsKey: "settingMoth",
      // 新增、编辑弹窗状态（add/edit/view）
      settingMothPopupsState: "",
      // 新增、编辑行对象
      settingMothRowData: {}
    }
  },
 
  methods: {

    // 动态生成网格列
    getCols() {
      var cols = []
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols)
      } else {
        cols = cols.concat([
          {
            prop: 'carBrandName',
            label: this.$t('org.label.carBrandCn'),
            width: 120,
            align: 'center'
          }, // 品牌名称
          {
            prop: 'carBrandCode',
            label: '品牌编码',
            width: 100,
            align: 'center',
            hidden: true
          }, // 品牌ID
          {
            prop: 'areaName',
            label: '地区',
            width: 80,
            align: 'center'
          }, // 地区
          {
            prop: 'bigAreaName',
            label: '大区',
            width: 80,
            align: 'center'
          }, // 大区
          {
            prop: 'bigAreaId',
            label: '大区ID',
            width: 80,
            align: 'center',
            hidden: true
          }, // 大区ID
          {
            prop: 'smallAreaName',
            label: '小区',
            width: 80,
            align: 'center'
          }, // 小区
          {
            prop: 'smallAreaId',
            label: '小区ID',
            width: 80,
            align: 'center',
            hidden: true
          }, // 小区ID
          {
            prop: 'provinceName',
            label: '省份',
            width: 60,
            align: 'center'
          }, // 省份
          {
            prop: 'provinceId',
            label: '省份ID',
            width: 60,
            align: 'center',
            hidden: true
          }, // 省份ID
          {
            prop: 'cityName',
            label: '城市',
            width: 60,
            align: 'center'
          }, // 城市
          {
            prop: 'cityId',
            label: '城市ID',
            width: 60,
            align: 'center',
            hidden: true
          }, // 城市ID
          {
            prop: 'dlrShortName',
            label: '经销商',
            width: 80,
            align: 'center'
          }, // 经销商
          {
            prop: 'dlrId',
            label: '经销商',
            width: 80,
            align: 'center',
            hidden: true
          }, // 经销商ID
          {
            prop: 'isEnableName',
            label: this.$t('org.label.isEnable'),
            width: 100,
            align: 'center',
            isComponent: true,
            comps: [{ 
              compKey: 'propKey3', 
              isShowLabel: false, 
              codeField: 'isEnable',
              clickEvent: () => null,
              component: () => import('@/components/org/isEnable/isEnable') }]
         
          }, // 是否启用
          {
            prop: 'saleReturnBeginDate',
            label: '客户销退开始时间',
            width: 140,
            align: 'center',
            isComponent: true,
            comps: [
              {
                compKey: "propKey2",
                isShowLabel: false,
                codeField: "saleReturnBeginDate",
                clickEvent: () => null,
                component: () => import("@/components/org/timePicker/timePicker")
              }
            ]
          }, // 客户销退开始时间
          {
            prop: 'saleReturnEndDate',
            label: '客户销退结束时间',
            width: 140,
            align: 'center',
            isComponent: true,
            comps: [
              {
                compKey: "propKey2",
                isShowLabel: false,
                codeField: "saleReturnEndDate",
                clickEvent: () => null,
                component: () => import("@/components/org/timePicker/timePicker")
              }
            ]
          }, // 客户销退结束时间
          {
            prop: 'limitSaleReturnBeginDate',
            label: '客户限制销退开始时间',
            width: 180,
            align: 'center',
            isComponent: true,
            comps: [
              {
                compKey: "propKey2",
                isShowLabel: false,
                type: "datePicker",
                dateType:"datetime",
                dateFormat: 'yyyy-MM-dd HH:mm:ss',
                codeField: "limitSaleReturnBeginDate",
                clickEvent: () => null,
                component: () => import("@/components/org/datePicker/datePicker")
              }
            ]
          }, // 客户限制销退开始时间
          {
            prop: 'limitSaleReturnEndDate',
            label: '客户限制销退结束时间',
            width: 180,
            align: 'center',
            isComponent: true,
            comps: [
              {
                compKey: "propKey2",
                isShowLabel: false,
                type: "datePicker",
                dateType:"datetime",
                dateFormat: 'yyyy-MM-dd HH:mm:ss',
                codeField: "limitSaleReturnEndDate",
                clickEvent: () => null,
                component: () => import("@/components/org/datePicker/datePicker")
              }
            ]
          }// 客户限制销退结束时间
        ])
      }
      return cols
    },
    // 开关设置启用开关事件
    settingMoth(index) {
      const that = this.$refs.multipleTable;
      this.showsettingMothEdit("edit");
    },
    // 经销商启用开关弹窗
    showsettingMothEdit(type) {
      this.settingMothPopupsState = type;
      this.settingMothPopupsVisible = true;
      this.settingMothPopupsKey = this.$utils.generateId();
    },
    // 关闭经销商启用开关弹窗
    settingMothclose(type) {
      this.settingMothPopupsVisible = false;
      this.settingMothPopupsKey = this.$utils.generateId();
    },
   
    // 保存
    save() {
      const that = this.$refs.multipleTable
      let saveState = true
      let saveCount = 0
      let msg = ''

      const selectData = that.$refs.multipleTable.selection
      if (selectData.length < 1) {
        that.$message({
          message: '请选择需要保存数据选项',
          type: 'warning',
          duration: 2000
        })
        return
      }
      for (var k in selectData) {
        const queryObj = {
          // 保存mutation
          type: 'mutation',
          // api配置
          apiConfig: veApis.veSaleTimeLimitM,
          variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              saleReturnTimeLimitId: selectData[k].saleReturnTimeLimitId,
              carBrandCode: selectData[k].carBrandCode,
              dlrId: selectData[k].dlrId,
              saleReturnBeginDate: selectData[k].saleReturnBeginDate,
              saleReturnEndDate: selectData[k].saleReturnEndDate,
              limitSaleReturnBeginDate: selectData[k].limitSaleReturnBeginDate,
              limitSaleReturnEndDate: selectData[k].limitSaleReturnEndDate,
              isEnable: selectData[k].isEnable,
              updateControlId: selectData[k].updateControlId
            }
          }
        }

        // 转换了中台请求格式数据
        var paramD = that.$getParams(queryObj)
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === '1') {
            saveCount++
          } else {
            saveState = false
            msg = response.data[queryObj.apiConfig.ServiceCode].msg
            that.$message({
              message: msg,
              type: 'warning',
              duration: 2000
            })
          }

          if (saveCount == selectData.length) {
            that.$message({
              message: '保存成功',
              type: 'success',
              duration: 2000
            })

            that.queryTable(1)
          }
        })
      }
    }
  }
}
</script>

