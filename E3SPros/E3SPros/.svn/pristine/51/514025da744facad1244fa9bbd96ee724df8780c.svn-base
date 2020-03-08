<!--
* description: VIN显示开关控制
* author: ydche
* createdDate: 2019-10-19
-->
<template>
    <div>
        <div class="filter-container filter-params carBr" ref="conHeight">
        <!-- 品牌组件 -->
        <el-row>
            <carBrandRadio
            ref="carBrandRadio"
            class="carcar"
            :span="12"
            @changeCode="getBrandCodeRadio"
            />
        </el-row>
        </div>
        <div class="app-container app-container-table">
            <one-table-template
            ref="multipleTable"
            :dynamic-buttons="tableButtons"
            :dynamic-components="tableComponents"
            :dynamic-api-config="apiConfig"
            :dynamic-table-cols="tableCols"
            :dynamic-form-fields="formField"
            :dynamic-is-init-table="false"
            :dynamic-is-column-drop="true"
            :is-absolute="true"
            />
        </div>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins'
import { veApis } from '@/api/graphQLApiList/ve'
import carBrandRadio from "@/components/org/carBrandRadio/carBrandRadio"; //品牌组件
import OneTableTemplate from '@/components/templates/oneTable'
import { CacheConfig } from '@/cache/configCache/index'
export default {
  name: 'VePurchaseReject',
  components: {
    OneTableTemplate,carBrandRadio
  },
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() { next() })
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.vinDisplaySwitchControlQuery,
      // 动态组件-按钮
      tableButtons: [
        { compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query') }, // 查询
        { compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.synchrony(), text: this.$t('sys.button.sync') }, // 同步
        { compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.save(), text: this.$t('sys.button.save') }, // 保存
        { compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset') }, // 重置
        { compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.exportExcel(), text: this.$t('sys.button.export') }// 导出
      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents : [
        // 显示组件
        {
            compKey: "compKey1",
            labelName: this.$t("org.label.dlrName") /*经销商*/,
            codeField: "dlrId",
            component: () => import("@/components/org/orgDlr"),
            type: "propus",
            isMust: true
        },
        {compKey: "compKey2",labelName: '入库前显示VIN码' /**"优先扣款" */,codeField: "caroutPriFlag",component: () => import("@/components/org/isEnable/isEnable"), type: "dropdownList",isMust: true},
        {compKey: "compKey3",labelName: '扣款前显示VIN码' /**"优先扣款" */,codeField: "caroutPriFlag",component: () => import("@/components/org/isEnable/isEnable"), type: "dropdownList",isMust: true},
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols : [
        { prop: 'carBrand', label: this.$t('org.label.carBrandCn'), // 品牌
          width: null, align: 'center' },
        { prop: 'bigAreaName', label: this.$t('org.label.region'), // 大区
          width: null, align: 'center' },
        { prop: 'provinceName', label: this.$t('org.label.province'), // 省份
          width: null, align: 'center' },
        { prop: 'dlrName', label: this.$t('org.label.dlrName'), // 经销商
          width: null, align: 'center' },
        {
          prop: "isEnable",
          label: '入库前显示VIN码'+"+",
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isMul: false,
              isShowLabel: false,
              codeField: "caroutPriFlag",
              clickEvent: () => null,
              component: () => import("@/components/org/isEnable/isEnable")
            }
          ]
        },
        {
          prop: "isEnable2",
          label: '扣款前显示VIN码'+"+",
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isMul: false,
              isShowLabel: false,
              codeField: "caroutPriFlag",
              clickEvent: () => null,
              component: () => import("@/components/org/isEnable/isEnable")
            }
          ]
        },
      ],
      // 表单查询数据（查询条件）
      formField: {
        carBrandCode: '',
        purOrderCode: '',
        vin: '',
        cashTypeCode: '',
        dlr: '',
        carConfigId: '',
        carColorId: '',
        carIncolorId: '',
        auditDateBegin: '',
        auditDateEnd: '',
        sendTypeCode: ''
      }
    }
  },
  created() {},
  methods: {
    // 保存
    save() {
      const that = this.$refs.multipleTable
      let saveState = true
      let saveCount = 0
      let msg = ''

      const selectData = that.$refs.multipleTable.selection
      if (selectData.length < 1) {
        that.$message({
          message: '请选择要保存的数据选项',
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
          apiConfig: veApis.veDbReplaceCarConfigMutationSave,
          variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              isEnable: selectData[k].isEnable,
              isEnable2: selectData[k].isEnable2
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
    },
    getBrandCodeRadio(val) {
      const that = this;
      this.formField.carBrandCode = val;
    },
  }
}
</script>
<style scoped>
/deep/.carBr{
    background-color: #efefef;
    margin-top: 0px;
    padding-bottom: 5px;
}
/deep/.filter-container.filter-button {
    position: absolute;
    top: -80px;
    right: 10px;
    margin-top:0px;
}
/deep/ .el-row{
  margin-bottom: 10px;
  background-color: #fff;
}
/deep/.carcar{
padding-top: 15px;
}
</style>
