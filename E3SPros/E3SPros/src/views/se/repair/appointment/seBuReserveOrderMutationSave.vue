<template>
     <div class="app-container app-container-table ">
         <div class="filter-container filter-button">
       <el-button type="primary" size="small" @click="queryFindAll(1)">选择客户</el-button>
      <template>
          <el-button  type="primary" size="small" @click="eduitData()">导入模板</el-button>
      </template>
      <el-button type="primary" size="small" @click="insertData()">保存预约单</el-button>
      <el-button type="primary" size="small" @click="insertData()">退出</el-button>
         </div>
          <div class="filter-container filter-params">
              
              <el-row :gutter="26">
                  <el-col :span="6">
                        <span class="demonstration">VIN码:</span>
                  <el-input v-model="listQuery.dataInfo.carBrandCode" placeholder size="small" />
                  </el-col>
                  <el-col :span="6">
                        <span class="demonstration">客户名称:</span>
                  <el-input v-model="listQuery.dataInfo.carBrandCode" placeholder size="small" />
                  </el-col>
                  <el-col :span="6">
                        <span class="demonstration">客户电话:</span>
                  <el-input v-model="listQuery.dataInfo.carBrandCode" placeholder size="small" />
                  </el-col>
                  <el-col :span="6">
                        <span class="demonstration">预约单号:</span>
                  <el-input v-model="listQuery.dataInfo.carBrandCode" placeholder size="small" />
                  </el-col>
              </el-row>

              <el-row :gutter="26">
                  <el-col :span="6">
                        <span class="demonstration">车牌号:</span>
                  <el-input v-model="listQuery.dataInfo.carBrandCode" placeholder size="small" />
                  </el-col>

                  <el-col :span="6">
                        <span class="demonstration">车辆品牌:</span>
                <el-select v-model="clpp" placeholder="请选择" size="small" >
                <el-option
                    v-for="item in clpps"
                    :key="item.code"
                    :label="item.text"
                    :value="item.code"
                ></el-option>
                </el-select>
                  </el-col>

                  <el-col :span="6">
                        <span class="demonstration">车系:</span>
                <el-select v-model="cx" placeholder="请选择" size="small" >
                <el-option
                    v-for="item in cxs"
                    :key="item.code"
                    :label="item.text"
                    :value="item.code"
                ></el-option>
                </el-select>
                  </el-col>

                  <el-col :span="6">
                        <span class="demonstration">车型:</span>
                <el-select v-model="cxg" placeholder="请选择" size="small" >
                <el-option
                    v-for="item in cxgs"
                    :key="item.code"
                    :label="item.text"
                    :value="item.code"
                ></el-option>
                </el-select>
                  </el-col>
              </el-row>

              <el-row :gutter="26">
                  <el-col :span="6">
                        <span class="demonstration">预约人:</span>
                  <el-input v-model="listQuery.dataInfo.carBrandCode" placeholder size="small" />
                  </el-col>
                  <el-col :span="6">
                        <span class="demonstration">预约人电话:</span>
                  <el-input v-model="listQuery.dataInfo.carBrandCode" placeholder size="small" />
                  </el-col>
                  <el-col :span="6">
                        <span class="demonstration">服务代表:</span>
                <el-select v-model="fwdb" placeholder="请选择" size="small" >
                <el-option
                    v-for="item in fwdbs"
                    :key="item.code"
                    :label="item.text"
                    :value="item.code"
                ></el-option>
                </el-select>
                  </el-col>
                  <el-col :span="6">
                        <span class="demonstration">预约来源:</span>
                <el-select v-model="yyly" placeholder="请选择" size="small" >
                <el-option
                    v-for="item in yylys"
                    :key="item.code"
                    :label="item.text"
                    :value="item.code"
                ></el-option>
                </el-select>
                  </el-col>
              </el-row>

              <el-row :gutter="26">
                  <el-col :span="6">
                        <span class="demonstration">预约到店时间:</span>
                  <el-input v-model="listQuery.dataInfo.carBrandCode" placeholder size="small" />
                  </el-col>
                  <el-col :span="6">
                        <span class="demonstration">预约类型:</span>
                <el-select v-model="yylx" placeholder="请选择" size="small" >
                <el-option
                    v-for="item in yylxs"
                    :key="item.code"
                    :label="item.text"
                    :value="item.code"
                ></el-option>
                </el-select>
                  </el-col>
                  <el-col :span="6">
                        <span class="demonstration">预约状态:</span>
                <el-select v-model="yyzt" placeholder="请选择" size="small" >
                <el-option
                    v-for="item in yyzts"
                    :key="item.code"
                    :label="item.text"
                    :value="item.code"
                ></el-option>
                </el-select>
                  </el-col>
                
              </el-row>
              
              <el-row :gutter="26">
                  <el-col :span="2">
                        <span class="demonstration">预约内容:</span> 
                  </el-col >
                   <el-input 
                        type="textarea"
                        style ="width:85%;float:left;"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入内容"
                        v-model="yynr">
                    </el-input> 
                </el-row>    
 
            <el-row :gutter="26">
                <el-col :span="3">
                </el-col>
                <el-col 
                style="float:left"
                :offset="11"
                :span="6">
                     <el-radio v-model="jiuyuan" label="1">救援</el-radio>
                     <el-radio v-model="ksyy" label="2">快速预约</el-radio>
                </el-col>
            </el-row>
          <el-row :gutter="26" >
              
                <el-col :span="2" >
                   <span class="demonstration">维修工时:</span>
                </el-col>
                <el-col :span="18">
              <el-input v-model="listQuery.dataInfo.carBrandCode" size="small" style="float:left">
              </el-input>
              <!-- </el-col>
              <el-col :span="3"> -->
              <el-button type="primary" size="small" @click="highData()" style="float:left">高级搜索</el-button>
              </el-col>
          </el-row>

          <el-table
          v-loading="listLoading"
          :data="weixiugongshi"
          element-loading-text="Loading"
          border
          fit
          stripe
          :header-cell-style="tableHeaderRowClassName"
          highlight-current-row
        >
          <el-table-column align="center" label="序号" width="60">
            <template slot-scope="scope">{{ scope.$index + 1 }}</template>
          </el-table-column>
          <el-table-column label="工时编号" >
            <template slot-scope="scope">{{ scope.row.carSeriesCn }}</template>
          </el-table-column>
          <el-table-column label="维修内容" >
            <template slot-scope="scope">{{ scope.row.maintainType }}</template>
          </el-table-column>
          <el-table-column label="销售工时" >
            <template slot-scope="scope">{{ scope.row.minMile }}</template>
          </el-table-column>
          <el-table-column label="工时单价" >
            <template slot-scope="scope">{{ scope.row.minMile }}</template>
          </el-table-column>
          <el-table-column label="预估费用" >
            <template slot-scope="scope">{{ scope.row.maxMile }}</template>
          </el-table-column>
          <el-table-column label="业务类别+" >
            <el-select v-model="yyly" placeholder="请选择" size="small" >
                <el-option
                    v-for="item in yylys"
                    :key="item.code"
                    :label="item.text"
                    :value="item.code"
                ></el-option>
                </el-select>
          </el-table-column>
        </el-table>


<el-row :gutter="26" >
              
                <el-col :span="2" >
                   <span class="demonstration">维修备件:</span>
                </el-col>
                <el-col :span="18">
              <el-input v-model="listQuery.dataInfo.carBrandCode" size="small" style="float:left">
              </el-input>
              <!-- </el-col>
              <el-col :span="3"> -->
              <!-- <el-button type="primary" size="small" @click="highData()" style="float:left">高级搜索</el-button> -->
              </el-col>
          </el-row>

          <el-table
          v-loading="listLoading"
          :data="weixiubeijian"
          element-loading-text="Loading"
          border
          fit
          stripe
          :header-cell-style="tableHeaderRowClassName"
          highlight-current-row
        >
          <el-table-column align="center" label="序号" width="60">
            <template slot-scope="scope">{{ scope.$index + 1 }}</template>
          </el-table-column>
          <el-table-column label="备件编号" >
            <template slot-scope="scope">{{ scope.row.carSeriesCn }}</template>
          </el-table-column>
          <el-table-column label="备件名称" >
            <template slot-scope="scope">{{ scope.row.maintainType }}</template>
          </el-table-column>
          <el-table-column label="数量+" >
            <template slot-scope="scope">{{ scope.row.minMile }}</template>
          </el-table-column>
          <el-table-column label="备件单价" >
            <template slot-scope="scope">{{ scope.row.minMile }}</template>
          </el-table-column>
          <el-table-column label="预估费用" >
            <template slot-scope="scope">{{ scope.row.maxMile }}</template>
          </el-table-column>
          <el-table-column label="业务类别+" >
            <el-select v-model="yyly" placeholder="请选择" size="small" >
                <el-option
                    v-for="item in yylys"
                    :key="item.code"
                    :label="item.text"
                    :value="item.code"
                ></el-option>
                </el-select>
          </el-table-column>
        </el-table>

          </div>
       <div class="filter-container filter-title">设置区</div>
        <el-container>
      <el-main>

        

        <el-pagination
          background
          layout="prev, pager, next, sizes, ->, total"
          prev-text="上一页"
          next-text="下一页"
          :page-sizes="[10, 20, 30]"
          :page-size="10"
          :total="list?list.length:0"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-main>
    </el-container>
    </div>

</template>
<script>

import { seApis } from '@/api/graphQLApiList/se'
import { requestGraphQL } from "@/api/commonRequest"

export default {
   props:{
    span:{
      type:Number,
      default:function(){
        return 6
      }
    }
  },
  name: "testTbale",
  // components: {
  //   carBrand,
  //   isEnable,
  //   setStatus,
  //   carType
  // },
  // filters: {
  //   statusFilter(status) {
  //     const statusMap = {
  //       published: "success",
  //       draft: "gray",
  //       deleted: "danger"
  //     };
  //     return statusMap[status];
  //   }
  // },
  data() {
    return {
       
        
      dialogVisible: false,
      isMul: true,
      code: "1",
      list: null,
      listLoading: true,
      //维修备件表
      weixiubeijian:"",
      //维修工时表
      weixiugongshi:"",
      //救援
      jiuyuan:"",
      //快速预约
      ksyy:"",
      //预约内容
      yynr:"",
      //车辆品牌
      clpp:"",
      clpps:[
         { code: "小鹏汽车", text: "小鹏汽车" },
         { code: "东风-日产", text: "东风-日产" },
         { code: "东风-启辰", text: "东风-启辰" },
      ],
      //车系
      cx:"",
      cxs:[
         { code: "SUV", text: "SUV" },
         { code: "宝马", text: "宝马" },
         { code: "奥迪-Q7", text: "奥迪-Q7" },
      ],
      //车型
      cxg:"",
      cxgs:[
         { code: "S", text: "S" },
         { code: "Y", text: "Y" },
         { code: "Z", text: "Z" },
      ],
      //服务代表
      fwdb:"",
      fwdbs:[
         { code: "全部", text: "全部" },
         { code: "张三", text: "张三" },
         { code: "李四", text: "李四" },
      ],
      //预约来源
      yyly:"",
      yylys:[
         { code: "普通预约", text: "普通预约" },
         { code: "客服预约", text: "客服预约" },
         { code: "微信预约", text: "微信预约" },
      ],
      //预约类型
      yylx:"",
      yylxs:[
         { code: "普通维修", text: "普通维修" },
         { code: "免保", text: "免保" },
         { code: "保险", text: "保险" },
         { code: "协议", text: "协议" },
         { code: "维修", text: "维修" },
      ],
      //预约状态
      yyzt:"",
      yyzts:[
         { code: "一小前确认车", text: "一小前确认车" },
         { code: "一天前确认", text: "一天前确认" },
         { code: "未确认", text: "未确认" },
      ],
      listQuery: {
        dataInfo:{
          oemCode:"",
          groupCode:"",
          dlrId:"",
          preComeDateBegin:"",
          preComeDateEnd: "",
          saempid:"",
          partNo:""
        },
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        oemcode: "",
        groupcode: "",
        operatePartId: "",
        operatePartCode: "",
        wiSmallKindId: "",
        repairSmallKindCode: "",
        isSystem: "",
        flag: 0,
        pageTotal:0,
        isEnable:""
      },
      
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      },
    };
  },
  created() {
    // this.queryFindAll();
  },
  methods: {
    
    
    //刷新页面
    //   queryFindAll() {
    //   this.listLoading = true;
    //   const that = this;
    //   that.curTableRow={};
    //   //转换了中台请求格式数据
    //   seReservePartQueryMain(that.listQuery.dataInfo).then(response => {

    //     if (
    //       response.data[seApis.seReservePartQueryMain.ServiceCode].result === "1" &&
    //       response.data[seApis.seReservePartQueryMain.ServiceCode].rows != ""
    //     ) {
    //       // if (page) {
    //       //   //查询完返回指定的page页数
    //       //   that.listQuery.pageIndex = page;
    //       // }
    //       // that.pageTotal = response.data[seApis.seReservePartQueryMain.ServiceCode].records;
    //        that.list1 = response.data[seApis.seReservePartQueryMain.ServiceCode].rows;
           
    //       //  that.list2 = response.data[seApis.SeReservePartQuery.ServiceCode].row;
    //       this.listQuery.dataInfo.partNo = this.list1[0].partNo;
    //         this.listLoading = false;
    //        this.findList2();
    //     }
           
    //   });
    // },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData()
    },
    handleCurrentChange(val) {
       this.listQuery.pageIndex = val
       this.fetchData()
    },

  }
 
};
</script>

