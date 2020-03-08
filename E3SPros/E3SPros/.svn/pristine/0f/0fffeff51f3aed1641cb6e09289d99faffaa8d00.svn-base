<template>
  <section>
    <el-dialog
      title="适用车型"
      :visible.sync="dialogFormVisible"
      width="80%"
      @closed="closeDialog"
      :append-to-body="true"
      :close-on-click-modal="false"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="24">
          <LookupValue :options="carBrandList" :span="6" :isMul="true" :isShowLabel="true" labelName="品牌" @changeCode="getCarBrand" :code="queryParams.dataInfo.carBrandCode"/>
          <partsCarTypeSelect
            :span="6"
            :isMul="true"
            :carBrandCode="queryParams.dataInfo.carBrandCode"
            :labelName="labelName"
            @changeCode="getcarSeriesCode"
          />
          <el-col :span="6">
            <label>适用车型</label>
            <el-input size="small" v-model="queryParams.dataInfo.carTypeCode"/>
          </el-col>
          <el-col :span="6" class="u-fRight">
            <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
            <el-button size="small" @click.stop="chooseCar()">选择</el-button>
            <el-button size="small" @click="reset()">重置</el-button>
          </el-col>
        </el-row>
      </div>
      <mix-table 
        ref="tableList"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        multipleSelect="selection"
        :isPaging=true
        :isDialog=true />
    </el-dialog>
  </section>
</template>
<script>
import partsCarTypeSelect from "@/components/se/partsCarTypeSelect"
import LookupValue from '@/components/org/LookupValue'
import mixTable from '@/components/basicComponent/mixTable'
import { doQueryList9,doQueryList10 } from '@/api/pa/orderAuditItem/orderAuditItem'
import { paApis } from '@/api/graphQLApiList/pa'
import { orgApis } from "@/api/graphQLApiList/org"
import { seApis } from '@/api/graphQLApiList/se'
import { requestGraphQL } from '@/api/commonRequest'

export default {
  components:{
    partsCarTypeSelect,
    LookupValue,
    mixTable
  },
  props: {
    'dialogFormVisible': {
      type: Boolean,
      default: function() {
        return false
      }
    },
    'partId': {
      type: String,
      default: ''
    }
  },
  created() {
    this.initFetchData()
  },
  data() {
    return {
      labelName: '备用车系',
      list: null,
      list2: null,
      carChoose: '',
      pageSize: 10,
      pageIndex: 1,
      pageTotal: 0,
      codeInside: [],
      carBrandList: [],
      carTypeCn:'',
      cols: [
        { label: '售后品牌', codeField: "carBrandCn", isEdit: true},
        { label: '备用车系', codeField: "carSeriesCn"},
        { label: '适用车型', codeField: "carTypeCn"}
      ],
      queryParams: {
        APIUrl: seApis.seChooseCarTypeQueryFind.APIUrl,
        InputType: seApis.seChooseCarTypeQueryFind.InputType,
        ServiceCode: seApis.seChooseCarTypeQueryFind.ServiceCode,
        dataInfo: {
          carBrandCode: '',
          carSeriesCode: '',
          carTypeCode: ''
        },
        apiQueryRow: [
          'carBrandCn',
          'carBrandCode',
          'carSeriesCn',
          'carSeriesCode',
          'carTypeCn',
          'carTypeCode'
        ]
      }
    }
  },
  methods: {
    initFetchData(){
      const that = this
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'query',
        typeParam:
              '($pageIndex: Int, $pageSize: Int, $dataInfo: '+ orgApis.mdmCarBrandQueryByPage.InputType + ')',
        // 请求API
        apiUrl: orgApis.mdmCarBrandQueryByPage.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: orgApis.mdmCarBrandQueryByPage.ServiceCode,
            // API服务编码&参数
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            // 表格中台返回网格的字段
            apiQueryRow: [
              'carBrandCn',
              'carBrandCode'
            ]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 1000,
          pageIndex: 1,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            "isEnable": "1"
          }
        }
      }
      //转换了中台请求格式数据
      let paramD = that.$getParams(queryObj)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.result === '1'){
            that.carBrandList = response.data[orgApis.mdmCarBrandQueryByPage.ServiceCode].rows
            that.carBrandList.map(function(item, i){
              item.lookupValueCode = item.carBrandCode
              item.lookupValueName = item.carBrandCn
            })
        }else {
            this.$message({
                message: '查询失败：' + response.msg,
                type: 'warn',
                uration: 2000
            })
        }
        that.listLoading = false
      })
    },
    fetchData() {
      this.$refs.tableList.queryList()
    },
    reset() {
        this.queryParams.dataInfo.carSeriesCode = ''
        this.queryParams.dataInfo.carBrandCode = ''
        this.queryParams.dataInfo.carTypeCode = ''
    },
    //选择传值给父组件
    chooseCar() {
      var arr = this.$refs.tableList.currentRow
      let code = []
      let name = []
      if(arr.length === 0){
          this.$message.warning("请至少选中一行")
          return false
      }
      for(var i = 0 ;i < arr.length; i++){
        code.push(arr[i].carTypeCode)
        name.push(arr[i].carTypeCn)
      }
      doQueryList10({
        "pubCarTypeName": name.join(','),
        "pubCarTypeCode": code.join(','),
        "partId": this.partId
      }).then(response=>{
          this.$message.success(response.data[paApis.paDbPartCartypeRfMutationSaveCarType.ServiceCode].msg)
      })
      this.$emit('changeCode', code.join(','))
    },
    getcarSeriesCode(val){
        this.queryParams.dataInfo.carSeriesCode = val
    },
    closeDialog() {
      this.reset()
      this.$emit('changeCode', '!**!')
    },
    getCarBrand(val) {
      this.queryParams.dataInfo.carBrandCode = val
    }
  }
}
</script>
<style>
.u-fRight {
  text-align: right;
}
</style>
