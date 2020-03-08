<template>
  <section>
    <el-dialog title="备件选择" :visible.sync="dialogFormVisible" width="80%" 
              @close="closeDialog" 
              @sentData="sendCode" 
              :close-on-click-modal="false"
              :append-to-body="true">
      <div class="filter-container filter-title">查询条件</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
           <LookupValue
            :span="6"
            :isMul="true"
            :isShowLabel="true"
            :code="listQuery.orderTypeBrand"
            :lookuptype="listQuery.lookuptypeBrand"
            :labelName="labelNameBrand"
            @changeCode="getLookupValueBrand"
          />
          <el-col :span="6">
             <lableName curLabelName="备件号" 
                      :isShowLabel="true" 
                      :isRequire="false"></lableName>
            <el-input size="small" v-model="listQuery.partNoVal" />
          </el-col>
          <el-col :span="6">
            <lableName curLabelName="备件名称" 
                      :isShowLabel="true" 
                      :isRequire="false"></lableName>
            <el-input size="small" v-model="listQuery.partNameVal" />
          </el-col>
        </el-row>
        <el-row :gutter="26">
          <el-col :span="6">
            <lableName curLabelName="供应商编码" 
                      :isShowLabel="true" 
                      :isRequire="false"></lableName>
            <el-input size="small" v-model="listQuery.supplierVal" />
          </el-col>
          <el-col :span="6">
            <lableName curLabelName="是否精品" 
                      :isShowLabel="true" 
                      :isRequire="false"></lableName>
            <el-select placeholder="请选择" size="small" v-model="listQuery.isButyVal">
              <el-option value="是">
              </el-option>
              <el-option value="否">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="12">
            <el-button @click="fetchData" type="primary">查询</el-button>
            <el-button @click="reset">重置</el-button>
            <el-button @click="sendCode">选择</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <!-- <el-table :data="list" border fit highlight-current-row @current-change="handleChange" @row-click="handleRowClick"> -->
      <el-table :data="list" border fit highlight-current-row @row-click="handleRowClick">
        <el-table-column property="num" label="序号" width="150" align="center">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <!-- <el-table-column property="choosenum" type="selection" label="选择+" width="150"></el-table-column> -->
        <el-table-column property="partbrandcodeName" label="备件品牌" width="150" align="center">
          <template slot-scope="scope">{{ scope.row.partBrandCodeName }}</template>
        </el-table-column>
        <el-table-column property="partno" label="备件号" width="150" align="center">
          <template slot-scope="scope">{{ scope.row.partNo }}</template>
        </el-table-column>
        <el-table-column property="partname" label="备件名称" width="200" align="center">
          <template slot-scope="scope">{{ scope.row.partName }}</template>
        </el-table-column>
        <el-table-column property="partstatename" label="备件状态" align="center">
          <template slot-scope="scope">{{ scope.row.partStateName }}</template>
        </el-table-column>
        <el-table-column property="dlrorderswitch" label="备件开关" align="center">
          <template slot-scope="scope">{{ scope.row.dlrOrderSwitch }}</template>
        </el-table-column>
      </el-table>
       <el-pagination
        background
        layout="prev, pager, next, sizes, ->, total"
        prev-text="上一页"
        next-text="下一页"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="list?pageTotal:0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
    </el-dialog>
  </section>
</template>
<script>
import { paDbPartListQuerySelectPartNo } from '@/api/pa/paDbVarietyMutation1'
import { paApis } from '@/api/graphQLApiList/pa'
import { requestGraphQL } from '@/api/commonRequest'
import lableName from '@/components/lableName'
import LookupValue from "@/components/org/LookupValue"
export default {
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: function() {
        return false
      }
    }
  },
   components: {
      lableName,
      LookupValue
  },
  created() {
    this.fetchData()
  },
  data() {
    return {
      pageTotal: 0,
      list: [],
      codeInside: {
        code: [],
        name: [],
      },
      rowDetail: '',
      rowColumn: '',
      labelNameBrand: "备件品牌",
      listQuery: {
        partNoVal: '', //备件号
        partNameVal: '', //备件名称
        supplierVal: '', //供应商编码
        isButyVal: '', //是否是精品
        orderTypeBrand: "",
        lookuptypeBrand: "PA0008"
      }
    }
  },
  methods: {
    fetchData(page) {
      const that = this;
      let queryObj = {
        // api配置
        // apiConfig: paApis.paDbPartListQueryFindAll,
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "( $dataInfo: " +
          paApis.paDbPartListQueryFindAll.InputType +
          ",  $pageIndex: Int, $pageSize: Int)",
        // 请求API
        apiUrl: paApis.paDbPartListQueryFindAll.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: paApis.paDbPartListQueryFindAll.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            //表格中台返回网格的字段
            apiQueryRow: [
              "costPrice",
              "dlrLeastSaleQty",
              "dlrOrderSwitch",
              "dlrPrice",
              "elementCode",
              "elementId",
              "elementNameCn",
              "emphasisFlag",
              "emphasisFlagName",
              "fitCarTypeId",
              "isPvRequired",
              "isPvRequiredName",
              "lastUpdatedDate",
              "leastPackIn",
              "leastPackOut",
              "logisticsFlag",
              "logisticsFlagName",
              "partBrandCode",
              "partBrandName",
              "partFlowState",
              "partId",
              "partName",
              "partNo",
              "partStateName",
              "partTypeCode",
              "partTypeId",
              "partTypeName",
              "partVarietyName",
              "partWeight",
              "planPrice",
              "pubCarTypeCode",
              "pubCarTypeName",
              "purStateName",
              "pvPurSwitch",
              "remark",
              "replaceCode",
              "replaceId",
              "replacePartNo",
              "saleStateName",
              "stockStateName",
              "storeSwitch",
              "supplierCode",
              "supplierId",
              "transitLimit",
              "transitLimitName",
              "unit",
              "updateControlId"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.listQuery.pageSize,
          pageIndex: page || that.listQuery.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.formField
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[paApis.paDbPartListQueryFindAll.ServiceCode].result ===
            "1" &&
          response.data[paApis.paDbPartListQueryFindAll.ServiceCode].rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
          that.pageTotal =
            response.data[paApis.paDbPartListQueryFindAll.ServiceCode].records;
          that.list =
            response.data[paApis.paDbPartListQueryFindAll.ServiceCode].rows;
          that.listLoading = false;
        }
      });
    },
    reset() {
      this.listQuery.partBrandVal = "";
      this.listQuery.partNoVal = "";
      this.listQuery.partNameVal = "";
      this.listQuery.supplierVal = "";
      this.listQuery.isButyVal = "";
      this.listQuery.orderTypeBrand = "";
    },
    //选择table中的内容
    // handleChange(val) {
    //   this.codeInside.code.push(val.partNO)
    //   this.codeInside.name.push(val.partName)
    //  // this.codeInside.partName.push(val.partName)
    // },
  handleRowClick(row,event,column){  //行点击事件
      this.rowDetail=row;
      this.rowColumn=column;
      console.log("点击行")
      console.log(this.rowDetail.partNo);
      console.log(this.rowColumn.isTrusted);
      this.codeInside.code.push(this.rowDetail.partNo);
      this.codeInside.name.push(this.rowDetail.partName);
      console.log("点击行")
    },
    getLookupValueBrand(val) {
      this.listQuery.orderTypeBrand = val;
    },
    //选择传值给父组件
    sendCode() {
      if(this.rowColumn.isTrusted){
        console.log("触发");
        this.$emit('sentData', this.codeInside);
        this.$message({
                    type: "success", 
                    message: "选择成功！"
                  });

        this.closeDialog();          
      }else{
         this.$alert('请选择一行进行修改！', '信息提示', {
                confirmButtonText: '确定',
                type: 'warning',
                callback: action => {
                }
            });
      }  
    },

     closeDialog(){
        this.codeInside.code.splice(1,1);
        this.codeInside.name.splice(1,1);
        //console.log("this.codeInside"+this.codeInside);
        this.$emit('closeDialog', false);
    },

     handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.fetchData()
    },
    handleCurrentChange(val) {
       this.listQuery.pageIndex = val
       this.fetchData()
    },
  }
}
</script>
