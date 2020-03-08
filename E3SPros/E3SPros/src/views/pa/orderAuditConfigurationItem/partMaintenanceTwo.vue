<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click.native="fetchData(1)">查询</el-button>
      <el-button size="small" @click.native="resetData()">重置</el-button>
    </div>
    <!--************************************ 查询区 *********************************  -->
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="6">
          <label>备件类型代码</label>
          <el-input v-model="dataInfo.partTypeCode" clearable size="small"></el-input>
        </el-col>
        <el-col :span="6">
          <label>备件类型名称</label>
          <el-input v-model="dataInfo.partTypeName" clearable size="small"></el-input>
        </el-col>
        <LookupValue
          :span="6"
          :options="refindOption" 
          :isMul="isMul"
          :isshow="isshow"
          labelName="是否精品"
          @changeCode="getRepairStatus4"
        />
        <LookupValue
          :span="6"
          :options="statusOption" 
          :isMul="isMul"
          :isshow="isshow"
          labelName="状态"
          @changeCode="getRepairStatus5"
        />
      </el-row>
    </div>
    <!--*****************************************查询结果************************************-->
    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :height="tableHeight"
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>

      <el-table-column label="备件类型代码" align="center">
        <template slot-scope="scope">{{ scope.row.partTypeCode }}</template>
      </el-table-column>

      <el-table-column label="备件类型名称" align="center">
        <template slot-scope="scope">{{ scope.row.partTypeName }}</template>
      </el-table-column>

      <el-table-column label="是否精品" align="center">
        <template slot-scope="scope">{{ scope.row.isRefineCn }}</template>
      </el-table-column>

      <el-table-column label="备件属性" align="center">
        <template slot-scope="scope">{{ scope.row.partPropertyName }}</template>
      </el-table-column>

      <el-table-column label="状态" align="center">
        <template slot-scope="scope">{{ scope.row.isEnableCn }}</template>
      </el-table-column>

      <el-table-column label="备注" align="center">
        <template slot-scope="scope">{{ scope.row.remark }}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      ref="paginationHeight"
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?listRecords:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import {
  doQueryList8,
  doQueryList5
} from "@/api/pa/orderAuditItem/orderAuditItem"
import { paApis } from "@/api/graphQLApiList/pa"
import { orgApis } from "@/api/graphQLApiList/org"
import { requestGraphQL } from '@/api/commonRequest'
import LookupValue from "@/components/org/LookupValue/index"
import lableName from '@/components/lableName'
import { the_Height } from "@/views/se/makeHeight"
export default {
  mixins: [the_Height],
  components: {
    LookupValue,
    lableName
  },
  data() {
    return {
      listRecords: 0,

      isMul: false, //下拉框是否多选
      isshow: true, //是否显示lable
      tableHeight: 360, //首先给定table的默认高度
      tableMarginHeight: 15,
      toggleParam: false,
      list: [],
     
     
      listLoading: true,
      

      statusOption: [],
      refindOption: [],
      spAttrOption: [],
      dataInfo: {
        pageIndex: 1,
        pageSize: 10,
        query: "",
        oemCode: "",
        groupCode: "",
        partTypeId: "",
        partTypeCode: "",
        partTypeName: "",
        isRefine: "",
        isEnable: ""
      },
      listQuery: {
        pageIndex: "",
        pageSize: ""
      },
      lookupVari: [
        "oemCode",
        "groupCode",
        "lookupTypeCode",
        "lookupValueCode",
        "lookupValueName"
      ],
    };
  },
  created() {
    this.fetchData(1);
    this.initFetchData();
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    initFetchData(page) {
      const that = this
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'query',
        typeParam:
              '($pageIndex: Int, $pageSize: Int, $dataInfoA: '+ orgApis.mdsLookupValueQueryByPage.InputType
              +', $dataInfoB: ' + orgApis.mdsLookupValueQueryByPage.InputType 
              +', $dataInfoC: ' + orgApis.mdsLookupValueQueryByPage.InputType + ')',
        // 请求API
        apiUrl: paApis.paDbPartListQueryList.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: orgApis.mdsLookupValueQueryByPage.ServiceCode,
            // API服务编码&参数
            apiServiceParam:
              "(dataInfo: $dataInfoA, pageIndex: $pageIndex, pageSize: $pageSize)",
            // 表格中台返回网格的字段
            apiQueryRow: that.lookupVari
          },{
            apiServiceCode: orgApis.mdsLookupValueQueryByPage.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfoB, pageIndex: $pageIndex, pageSize: $pageSize)",
            apiQueryRow: that.lookupVari
          },{
            apiServiceCode: orgApis.mdsLookupValueQueryByPage.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfoC, pageIndex: $pageIndex, pageSize: $pageSize)",
            apiQueryRow: that.lookupVari
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.listQuery.pageSize,
          pageIndex: that.listQuery.pageIndex,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfoA: {
            "isEnable": "1",
            "lookupTypeCode": "DB0064"//是否
          },
          dataInfoB: {
            "isEnable": "1",
            "lookupTypeCode": "DB0052"//是否启用
          },
          dataInfoC: {
            "isEnable": "1",
            "lookupTypeCode": "PA0030"//备件属性
          }
        }
      }
      //转换了中台请求格式数据
      let paramD = that.$getParams(queryObj)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.result === '1'){
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page
          }
         for(let i in response.data){
            switch(i){
              case 'A':
                that.refindOption= response.data.A.rows
                break
              case 'B':
                that.statusOption = response.data.B.rows
                break
              case 'C':
                that.spAttrOption = response.data.C.rows
                break
            }
          }
          that.listLoading = false
        }else {
            this.$message({
                message: '查询失败：' + response.msg,
                type: 'warn',
                uration: 2000
            })
        }
      })
    },
    fetchData(page) {
      //查询  备件类型查询
      this.listLoading = true;
      let obj = {};
      obj.oemCode = this.dataInfo.oemCode;
      obj.groupCode = this.dataInfo.groupCode;
      obj.partTypeCode = this.dataInfo.partTypeCode;
      obj.partTypeId = this.dataInfo.partTypeId;
      obj.isEnable = this.dataInfo.isEnable;
      obj.partTypeName = this.dataInfo.partTypeName;
      obj.isRefine = this.dataInfo.isRefine;
      doQueryList8(this.dataInfo.pageSize, page||this.dataInfo.pageIndex, obj).then(
        response => {
          if (response.data[paApis.paDbAttrTypeQueryList.ServiceCode].result === "1") {
            if(page){
              this.dataInfo.pageIndex = page;
            }
            this.list =
              response.data[paApis.paDbAttrTypeQueryList.ServiceCode].rows;
            this.listRecords = parseInt(
              response.data[paApis.paDbAttrTypeQueryList.ServiceCode].records
            );
          }
          this.listLoading = false;
        }
      );
    },

    resetData() {
      //重置
      this.dataInfo.partTypeCode = "";
      this.dataInfo.partTypeName = "";
      this.dataInfo.isRefine = "";
      this.dataInfo.isEnable = "";
    },

    getRepairStatus4(val) {
      this.dataInfo.isRefine = val;
    },
    getRepairStatus5(val) {
      this.dataInfo.isEnable = val;
    },

    handleSizeChange(val) {
      //页数改变重新查找
      this.dataInfo.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.dataInfo.pageIndex = val;
      this.fetchData();
    }
  }
};
</script>