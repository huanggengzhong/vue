/**
* description: 搬入地设置
* author: linwm
* createdDate: 2019-07-23
*/
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamic-buttons="tableButtons"
      :dynamic-components="tableComponents"
      :dynamic-api-config="apiConfig"
      :dynamic-table-cols="tableCols"
      :dynamic-form-fields="formField"
      :dynamic-is-show-more-btn="true"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/oneTable'
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name: 'MoveInAddr',
  components: {
    OneTableTemplate
  },
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) { CacheConfig.initData(to.path, function() { next() }) },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.moveInAddressQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: 'btnKey1',
          type: 'primary',
          size: 'small',
          clickEvent: () => this.queryTable(1),
          text: this.$t('sys.button.query')//查询
        },
        {
          compKey: 'btnKey3',
          type: '',
          size: 'small',
          clickEvent: () => this.add(),
          text: this.$t('sys.button.save')//保存
        },
        {
          compKey: 'btnKey4',
          type: '',
          size: 'small',
          clickEvent: () => this.reset(),
          text:  this.$t('sys.button.reset')//重置
        }
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [

        // 显示组件
        {
          compKey: 'compKey1',
          labelName: this.$t('ve.label.carBrandCode'),//品牌
          codeField: 'carBrandCode',
          component: () => import('@/components/org/carBrand/carBrand'),
          type: 'dropdownList',
          isMust: true
        },
        {
          compKey: 'compKey2',
          labelName: this.$t('ve.label.dlr'),//经销商
          codeField: 'dlrId',
          component: () => import('@/components/org/orgDlr/index'),
          type: 'propus',
          isMust: true
        },
        {
          compKey: 'compKey3',
          labelName: this.$t('org.label.isAble'),//是否启用
          codeField: 'isEnable',
          component: () => import('@/components/org/isEnable/isEnable'),
          type: 'dropdownList',
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols : [
        {
          prop: 'carBrandCn',
          label: this.$t('ve.label.carBrandCode'),//品牌
          width: 150,
          align: 'center'
        },
        {
          prop: 'areaName',
          label: this.$t('ve.label.county1'),//地区
          width: 100,
          align: 'center'
        },
        {
          prop: 'bigAreaName',
          label: this.$t('ve.label.bigarea'),//大区
          width: 100,
          align: 'center'
        },
        {
          prop: 'smallAreaName',
          label: this.$t('ve.label.smallArea'),//小区
          width: 100,
          align: 'center'
        },
        {
          prop: 'provinceName',
          label: this.$t('ve.label.province'),//省份
          width: 100,
          align: 'center'
        },
        {
          prop: 'cityName',
          label: this.$t('ve.label.city'),//城市
          width: 100,
          align: 'center'
        },
        {
          prop: 'dlrShortName',
          label: this.$t('ve.label.dlrShortName'),//经销商
          width: 180,
          align: 'center'
        },
        {
          prop: 'carHouseName',
          label: this.$t('org.label.warnHomeName'),//仓库名称
          width: 180,
          align: 'center'
        },
        {
          prop: 'carHouseAddr',
          label: this.$t('org.label.carHouseAddr'),//仓库地址
          width: 400,
          align: 'center'
        },
        {
          prop: 'carHouseCode',
          label: this.$t('org.label.warnHomeCodes'),//仓库编码+
          width: 130,
          align: 'center',
          isComponent: true,
          comps: [
            {
              compKey: 'propKey1',
              isShowLabel: false,
              codeField: 'carHouseCode',
              clickEvent: () => null,
              component: () => import('@/components/org/commonInput')
            }
          ]
        },
        // { prop: 'isEnable', label:this.$t('org.label.isEffective'),//是否有效+
        // width: 150, align: 'center', isComponent: true,
        //   comps: [{ compKey: 'propKey1', isShowLabel: false, codeField: 'isEnable', isClearable: 'false', clickEvent: () => null, component: () => import('@/components/org/isEnable/isEnable') }] },
        { prop: 'isDefaultAddr', label: this.$t('org.label.isDefaultMoveInPlace'), //是否默认搬入地+
        width: 130, align: 'center', isComponent: true,
          comps: [{ compKey: 'propKey2', isShowLabel: false, codeField: 'isDefaultAddr', isClearable: 'false', clickEvent: () => null, component: () => import('@/components/org/isEnable/isEnable') }]
        },
        { prop: 'isEnable', label: this.$t('org.label.isAble')+'+', //是否启用
        width: 130, align: 'center', isComponent: true,
          comps: [{ compKey: 'propKey3', isShowLabel: false, codeField: 'isEnable', clickEvent: () => null, component: () => import('@/components/org/isEnable/isEnable') }]
        },
        {
          prop: 'carBrandCode',
          label: this.$t('org.label.carBrandCode'),//品牌编码
          width: 0,
          align: 'center',
          hidden: true
        },
        {
          prop: 'dlrId',
          label: this.$t('org.label.dlrId'),//经销商Id
          width: 0,
          align: 'center',
          hidden: true
        },
        {
          prop: 'carStockHouseId',
          label: this.$t('org.label.warnHomeID'),//仓库Id
          width: 0,
          align: 'center',
          hidden: true
        },

        {
          prop: 'updateControlId',
          label: this.$t('org.label.concurrencyControl'),//并发控制
          width: 0,
          align: 'center',
          hidden: true
        }
      ],
      formField: {
        carBrandCode: '',
        dlrId: '',
        isEnable: ''
      }
    }
  },

  methods: {
    add() {
      const that = this.$refs.multipleTable
      let saveState = true
      let saveCount = 0
      let msg = ''

      const selectData = that.$refs.multipleTable.selection
      if (selectData.length < 1) {
        that.$message({
          message: '请选择需要保存的经销商可分配仓库数据',
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
          apiConfig: veApis.veDbMoveInMutationSave,
          variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carStockHouseId: selectData[k].carStockHouseId,
              carHouseCode: selectData[k].carHouseCode,
              dlrId: selectData[k].dlrId,
              isDefaultAddr: selectData[k].isDefaultAddr,
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
