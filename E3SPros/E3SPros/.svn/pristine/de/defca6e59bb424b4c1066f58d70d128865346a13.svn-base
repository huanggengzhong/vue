<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="queryFindAll(1)">查询</el-button>
      <template>
        <el-button  size="small" @click="eduitData('formName1')">修改</el-button>
      </template>
      <el-button  size="small" @click="insertData('formName')">新增</el-button>
      <el-button  size="small" @click="declearData()">重置</el-button>
    </div>

    <!-- <div class="filter-container filter-title" ref="conTitleHeight">查询区</div> -->
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <!--<carBrand :span="6" :code="initCode" @changeCode="getBrandCode"></carBrand>-->

        <el-col :span="6">
          <label>故障部位代码</label>
          <el-input clearable v-model="listQuery.saveList.faultPartCode" placeholder size="small" />
        </el-col>
        <el-col :span="6">
          <label>故障部位名称</label>
          <el-input clearable v-model="listQuery.saveList.faultPartName" placeholder size="small" />
        </el-col>
      </el-row>
    
    </div>

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
          @row-click="rowClicked"
        >
          <el-table-column align="center" label="序号" width="80">
            <template slot-scope="scope">{{ scope.$index + 1 }}</template>
          </el-table-column>
          <!-- <el-table-column type="selection" width="55" label="选择+" /> -->
          <el-table-column label="故障ID" v-if="false">
            <template slot-scope="scope">{{ scope.row.faultPlaceId }}</template>
          </el-table-column>
          <el-table-column label="故障编码" align="center">
            <template slot-scope="scope">{{ scope.row.faultPartCode }}</template>
          </el-table-column>
          <el-table-column label="故障名称" align="center">
            <template slot-scope="scope">{{ scope.row.faultPartName }}</template>
          </el-table-column>
          <el-table-column label="是否可用" v-if="false">
            <template slot-scope="scope">{{ scope.row.isEnable }}</template>
          </el-table-column>
          <el-table-column label="并发控制字段" v-if="false">
            <template slot-scope="scope">{{ scope.row.updateControlId }}</template>
          </el-table-column>
          <el-table-column label="厂商标识" v-if="false">
            <template slot-scope="scope">{{ scope.row.oemCode }}</template>
          </el-table-column>
          <el-table-column label="集团标识" v-if="false">
            <template slot-scope="scope">{{ scope.row.groupCode }}</template>
          </el-table-column>
          <el-table-column label="厂商标识ID" v-if="false">
            <template slot-scope="scope">{{ scope.row.oemId }}</template>
          </el-table-column>
          <el-table-column label="集团标识ID" v-if="false">
            <template slot-scope="scope">{{ scope.row.groupId }}</template>
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
          :total="pageTotal"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      
      
      <el-dialog
        title="修改故障部位"
        :visible.sync="dialogVisible"
     
       width="30%"
        @close="getclose('formName1')"
        :append-to-body="true"
        :close-on-click-modal="false"

       >
       <div style="height:150px">
        <div class="filter-container filter-params">
          <el-form :model="listQuery.dataInfo"
          :rules="rules"
          ref="formName1"
          :inline-message=true
          >
          <el-row :gutter="26">
            <el-col >
            <el-form-item prop="faultPartCode">
                <lableName curLabelName="故障部位代码" :isShowLabel="true" ></lableName>
                <el-input
                  v-model="listQuery.dataInfo.faultPartCode"
                 
                  placeholder="请选择"
                  size="small"
                  :disabled="true"
                />
              </el-form-item>
            </el-col>
            <el-col>
            <el-form-item prop="faultPartName">
                <lableName curLabelName="故障部位名称" :isShowLabel="true" :isRequire="true"></lableName>
                <el-input
                  v-model="listQuery.dataInfo.faultPartName"
               
                  placeholder="请选择"
                  size="small"
                />
              </el-form-item>
            </el-col>
            <el-col>
            <el-form-item >
                <lableName curLabelName="备注" :isShowLabel="true" ></lableName>
                <el-input
                  v-model="listQuery.dataInfo.remark"
                  
                  placeholder="请选择"
                  size="small"
                />
              </el-form-item>
            </el-col>
          </el-row>
        
          <el-row :gutter="26">
            <el-col style="float:right">
              <el-button type="primary" @click="commitXiuGai('formName1') ">保存</el-button>
              <el-button  @click="deleteXiuGai">清除</el-button>
            </el-col>
          </el-row>
          </el-form>
        </div>
      
       </div>
      </el-dialog>
    
     
      <el-dialog
        title="新增故障部位"
        :visible.sync="dialogVisible1"
       width="30%"
        @close="close('formName')"
       :append-to-body="true"
       :close-on-click-modal="false"

       >
       <div style="height:150px">
        <div class="filter-container filter-params">
          <el-form :model="listQuery.dataInfo"
          :rules="rules"
          ref="formName"
          :inline-message=true
          >
          <el-row :gutter="26">
            <el-col>
            <el-form-item prop="faultPartCode">
                <lableName curLabelName="故障部位代码" :isShowLabel="true" :isRequire="true"></lableName>
                <el-input
                  v-model="listQuery.dataInfo.faultPartCode"
                  placeholder="请选择"
                  size="small"
                />
              </el-form-item>
            </el-col>
            <el-col>
            <el-form-item prop="faultPartName">
                <lableName curLabelName="故障部位名称" :isShowLabel="true" :isRequire="true"></lableName>
                <el-input
                  v-model="listQuery.dataInfo.faultPartName"
                  
                  placeholder="请选择"
                  size="small"
                />
              </el-form-item>
            </el-col>
            <el-col>
            <el-form-item >
                <lableName curLabelName="备注" :isShowLabel="true" ></lableName>
                <el-input
                  v-model="listQuery.dataInfo.remark"
                  
                  placeholder="请选择"
                  size="small"
                />
              </el-form-item>
            </el-col>
          </el-row>
        
          <el-row :gutter="26">
            <el-col >
              <el-button type="primary" @click="commitXiuGai('formName')">保存</el-button>
              <el-button  @click="deleteXiuGai1">清除</el-button>
            </el-col>
          </el-row>
             </el-form>
        </div>
       </div>
      </el-dialog>
     
  </div>
  
</template>

<script>
import { seApis } from "@/api/graphQLApiList/se";
import { the_Height } from "@/views/se/makeHeight";
import { requestGraphQL } from "@/api/commonRequest";
import lableName from "@/components/lableName";
import {
  seDbFaultPartQuery,
  seDbFaultPartSave
} from "@/api/se/basedata/repair/seDbFaultPartQuery";
// import { getList, getQueryMock,seDbOpratePlaceQueryFindAll } from "@/api/se/basedata/repair/repairWIType";
// import carBrand from "@/components/carBrand/carBrand";
// import isEnable from "@/components/isEnable/isEnable";
// import setStatus from "@/components/setStatus/setStatus";
// import carType from "@/components/carType/carType";
export default {
  name: "testTbale",
  components: {
    lableName
  },
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
  mixins: [the_Height],
  data() {
    return {
      pageIndex:1,
      pageSize:10,
      dialogVisible: false,
      dialogVisible1: false,
      tableHeight: 310, // 网格高度
      tableMarginHeight: 15,
      isMul: true,
      code: "1",
      list: null,
      listLoading: true,
      pageTotal: 0,
      getfind:{
        
 
  oemCode:"",
  groupCode:"",
  faultPartName:"",
  faultPartCode:""

      },
      rules: {
        faultPartCode: [
          { required: true, message: "请输入故障编码", trigger: "change" }
        ],
        faultPartName: [
          { required: true, message: "请输入故障名称", trigger: "change" }
        ]
      },
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        oemCode: "",
        groupCode: "",
        operatePartId: "",
        operatePartCode: "",
        wiSmallKindId: "",
        repairSmallKindCode: "",
        isSystem: "",
        flag: 0,

        saveList: {
          pageIndex: 1,
          pageSize: 10,
          oemCode: "",
          groupCode: "",
          faultPartName: "",
          faultPartCode: ""
        },

        dataInfo: {
          faultPlaceId: "",
          faultPartCode: "",
          faultPartName: "",
          remark: "",
          updateControlId: "",
          oemCode: "",
          groupCode: "",
          oemId: "",
          groupId: ""
        },

        response: {
          faultPlaceId: "  ",
          faultPartName: " ",
          isEnable: " ",
          updateControlId: "   ",
          faultPartCode: " ",
          remark: " ",
          oemCode: "",
          groupCode: "",
          oemId: "",
          groupId: ""
        }
      },

      
    };
  },
  created() {
    this.queryFindAll();
  },
  methods: {
    close(formName){
      
        this.listQuery.flag = 0;
        if(this.$refs[formName]!==undefined){
          
            this.$refs[formName].clearValidate();
        }
        
        
    },
    getclose(formName){
      
        this.listQuery.flag = 0;
        
        if(this.$refs[formName]!==undefined){
          
            this.$refs[formName].clearValidate();
        }
        
        
    },
    //刷新页面
    queryFindAll(page) {
      this.listLoading = true;
      const that = this;
      that.curTableRow = {};
      //转换了中台请求格式数据
      this.getfind.faultPartName = this.listQuery.saveList.faultPartName;
      this.getfind.faultPartCode =this.listQuery.saveList.faultPartCode;
      this.getfind.oemCode = this.listQuery.oemCode;
  
      this.getfind.groupCode = this.listQuery.groupCode;
      seDbFaultPartQuery(
        this.listQuery.pageSize,
        page || this.listQuery.pageIndex,
       this.getfind
      ).then(response => {
         console.log(response.data[seApis.seDbFaultPartQueryFindAll.ServiceCode].rows)
        if (
          response.data[seApis.seDbFaultPartQueryFindAll.ServiceCode].result === "1" 
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
          that.pageTotal =
            response.data[seApis.seDbFaultPartQueryFindAll.ServiceCode].records;
          that.list = response.data[seApis.seDbFaultPartQueryFindAll.ServiceCode].rows;
         
          that.listLoading = false;
        }
        this.listQuery.flag = 0;
      });
    },
    //重置页面
    declearData() {
      this.listQuery.saveList.faultPartCode = "";
      this.listQuery.saveList.faultPartName = "";
    },
    //新增数据
    insertData(formName) {
      
      this.dialogVisible1 = true;
     
        // if(this.$refs[formName]!==undefined){
          
        //  this.$refs[formName].clearValidate();
        // }
        
          this.$nextTick(()=>{
        this.$refs[formName].resetFields();//等弹窗里的form表单的dom渲染完在执行this.$refs.staffForm.resetFields()，去除验证
      });
         this.listQuery.dataInfo.faultPartCode = "";
       this.listQuery.dataInfo.faultPartName = "";
       this.listQuery.dataInfo.remark = '';
       this.listQuery.dataInfo.faultPlaceId = '';
      
    },
    //修改清除数据
    deleteXiuGai() {
      // this.listQuery.dataInfo.faultPartCode = ''
      this.listQuery.dataInfo.faultPartName = "";
      this.listQuery.dataInfo.remark = "";
    },
    //修改清除数据
    deleteXiuGai1() {
      this.listQuery.dataInfo.faultPartCode = "";
      this.listQuery.dataInfo.faultPartName = "";
      this.listQuery.dataInfo.remark = "";
    },
    //保存数据
    commitXiuGai(formName) {
      debugger
      this.$refs[formName].validate(valid => {
        if(this.listQuery.dataInfo.faultPartCode!=''&&this.listQuery.dataInfo.faultPartName!=''){
          console.log(this.listQuery.dataInfo);
       
        
        seDbFaultPartSave(this.listQuery.dataInfo).then(response => {
          if(response.data[seApis.seDbFaultPartMutationSave.ServiceCode].result === '1'){
            this.$message({
              message: '保存成功',
              type: 'success'
            });

          this.queryFindAll();
        }else{
          this.$message({
                  message: '保存失败：' + response.data[seApis.seDbFaultPartMutationSave.ServiceCode].msg,
                  type: 'warn',
                  uration: 2000
              })
          this.queryFindAll();
          }
          this.$refs[formName].resetFields();
           this.dialogVisible = false;
        this.dialogVisible1 = false;
        });
        // this.listQuery.dataInfo.faultPartName = "";
        // this.listQuery.dataInfo.faultPartCode = "";
        // this.listQuery.dataInfo.remark = "";
        // this.listQuery.dataInfo.faultPlaceId = "";
        // this.listQuery.dataInfo.updatecontrolid = "";
        }
      });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //刷新页面
    // fetchData() {
    //   this.listLoading = true;
    //   getDefaltServiceList(this.listQuery).then(response => {
    //     this.list = response.data.rows;
    //     this.listLoading = false;
    //     this.listQuery.flag = 0
    //   });
    // },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.queryFindAll();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.queryFindAll();
    },

    //修改数据
    eduitData(formName) {
        
      if (this.listQuery.flag == 0) this.$alert("请选定修改行！");
      else {
        this.dialogVisible = true;

        // if(this.$refs[formName]!==undefined){
         
        //  this.$refs[formName].resetFields();
        // }
        // if(this.$refs[formName]!==undefined){
          
        //  this.$refs[formName].clearValidate();
        // }
      //   this.$nextTick(()=>{
      //   this.$refs[formName].resetFields();//等弹窗里的form表单的dom渲染完在执行this.$refs.staffForm.resetFields()，去除验证
      // });
      }
    },
    rowClicked(row) {
      this.listQuery.dataInfo.faultPartName = row.faultPartName;
      this.listQuery.dataInfo.faultPartCode = row.faultPartCode;
      this.listQuery.dataInfo.remark = row.remark;
      // this.listQuery.dataInfo.isEnable = row.isEnable;
      this.listQuery.dataInfo.updateControlId = row.updateControlId;
      this.listQuery.dataInfo.oemCode = row.oemCode;
      this.listQuery.dataInfo.groupCode = row.groupCode;
      this.listQuery.dataInfo.oemId = row.oemId;
      this.listQuery.dataInfo.groupId = row.groupId;
      this.listQuery.dataInfo.faultPlaceId = row.faultPlaceId;
      this.listQuery.flag = 1;
    }
  }
};
</script>
