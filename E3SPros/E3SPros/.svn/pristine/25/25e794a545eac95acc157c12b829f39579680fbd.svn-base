<template>
  <div class="app-container app-container-table accountManage" >
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="submitForm('ruleForm')">添加保存</el-button>
      <el-button size="small" >删除</el-button>
      <el-button size="small" @click="reset">重置</el-button>
      <el-button size="small">经销商资金作业批量导入</el-button>
    </div>
    <div class="filter-container filter-title">
      <div>查询条件</div>  
      <div class="more" @click="loadmore">更多
        <i class="el-icon-arrow-up" v-show="!pic"></i>
        <i class="el-icon-arrow-down" v-show="pic"></i>
      </div>
    </div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">               
          <el-row :gutter="24">
              <el-col :span="6">
                <el-form-item label="经销商" prop="dlrCode" >
                  <el-input 
                  suffix-icon="el-icon-search"                    
                  @focus="openDlr"
                  placeholder="请选择"
                  v-model="ruleForm.dlrCode"
                  size="small">
                  </el-input>
                </el-form-item>                  
              </el-col>
              <el-col :span="6">
                    <el-form-item label="账户名称" prop="dlrAccountName">
                      <el-select size="small" placeholder="请选择" v-model="ruleForm.dlrAccountName" >
                        <el-option
                        v-for="item in account"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                  </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="账户余额" prop="dlrBalance" >
                  <el-input 
                  clearable                   
                  placeholder="请选择"
                  v-model="ruleForm.dlrBalance"
                  size="small">
                  </el-input>
                </el-form-item>                  
              </el-col>
              <el-col :span="6">
                <el-form-item label="预扣金额" prop="frozenMoney" >
                  <el-input 
                  clearable                    
                  placeholder="请选择"
                  v-model="ruleForm.frozenMoney"
                  size="small">
                  </el-input>
                </el-form-item>                  
              </el-col>
              <el-col :span="6" v-show="!pic">
                <el-form-item label="可用金额" prop="canUseMoney" >
                  <el-input 
                  clearable                    
                  placeholder="请选择"
                  v-model="canUseMoney"
                  size="small">
                  </el-input>
                </el-form-item>                  
              </el-col>
              <el-col :span="6" v-show="!pic">
                    <el-form-item label="收款账户" prop="pvAccount">
                      <el-select size="small" placeholder="请选择" v-model="ruleForm.pvAccount" >
                        <el-option
                        v-for="item in account"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                  </el-form-item>
              </el-col>
              <el-col :span="6" v-show="!pic">
                <el-form-item label="汇出银行" prop="dlrAccount">
                  <el-select size="small" placeholder="请选择" v-model="ruleForm.dlrAccount" >
                    <el-option
                    v-for="item in account"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6" v-show="!pic">
                <el-form-item label="金额" prop="tranAmount" >
                  <el-input 
                  clearable                    
                  placeholder="请选择"
                  v-model="ruleForm.tranAmount"
                  size="small">
                  </el-input>
                </el-form-item>                  
              </el-col>
              <el-col :span="6" v-show="!pic">
                <el-form-item label="资金操作类型" prop="businessType">
                  <el-select size="small" placeholder="请选择" v-model="ruleForm.businessType" >
                    <el-option
                    v-for="item in handle"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6" v-show="!pic">
                <el-form-item label="明细类别" prop="businessClass">
                  <el-select size="small" placeholder="请选择" v-model="ruleForm.businessClass" >
                    <el-option
                    v-for="item in handle"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6" v-show="!pic">
                <el-form-item label="汇款日期" prop="dlrBalance" >
                  <el-date-picker
                    v-model="ruleForm.businessDate"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>                  
              </el-col>
              <el-col :span="6" v-show="!pic" class="text">
                <span>总记录数：{{count}}</span>
                <span>金额合计：{{money}}</span>  
              </el-col>
              <el-col :span="12" v-show="!pic" class="remark">
                <el-form-item label="备注" prop="remark" >
                  <el-input 
                  clearable                    
                  placeholder="请选择"
                  v-model="ruleForm.remark"
                  size="small">
                  </el-input>
                </el-form-item>                  
              </el-col>
          </el-row>
      </el-form>
      <!-- <el-row :gutter="24">
        <orgDlr @changeCode="changeStoreCode" :popupsVisible="isShowStore" @visibel="handleCode" :key="handleCode"/>
      </el-row> -->
      </div>
      <div class="filter-container filter-title" >查询结果区</div>
      <el-table      
        :data="list"
        element-loading-text="Loading"
        border
        fit
        stripe
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
        @row-click="rowClick"
      >
        <el-table-column prop="id" label="序号" type="index" width="60" align="center">
        </el-table-column>      
        <el-table-column prop="dlrCode" label="经销商编码" width="100" align="center" >
        </el-table-column>
        <el-table-column prop="dlrShortName" label="经销商简称" width="100" align="center" >
        </el-table-column>      
        <el-table-column prop="pvAccount" label="收款账户" align="center" width="150">
          <template slot-scope="scope">
          {{ scope.row.pvAccount == 1 ? '招商银行':'农业银行' }}
          </template>
        </el-table-column>
        <el-table-column prop="tranAmount" label="金额" width="100" align="center" >
        </el-table-column>
        <el-table-column prop="businessType" label="资金操作类型" align="center" width="150">
          <template slot-scope="scope">
          {{ scope.row.businessType == 1 ? '转款':'扣款' }}
          </template>
        </el-table-column>
        <el-table-column prop="businessClass" label="明细类别" align="center" width="120">
          <template slot-scope="scope">
          {{ scope.row.businessClass == 1 ? '其他转账':'业务转账' }}
          </template>
        </el-table-column>
        <el-table-column prop="businessDate" label="汇款日期" width="150" align="center" >
        </el-table-column>
        <el-table-column prop="remark" label="备注" align="center" >
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        prev-text="上一页"
        next-text="下一页"
        layout="prev, pager, next, sizes, ->, total"
        ref="paginationHeight"
        :total="pageTotal" :current-page.sync="listQuery.pageIndex" style="position:fixd">
      </el-pagination>
    </div>
</template>

<script>
import orgDlr from "@/components/org/orgDlr/index.vue"
import { paApis } from '@/api/graphQLApiList/pa'
import { requestGraphQL } from '@/api/commonRequest'
export default {
  name:"pajxszjzy",
    components:{        
        orgDlr        
    },
  data (){
    return {
      pic: true,
      isShowStore: false,
      handleCode: '',
      list:'',
      count:5, 
      canUseMoney: '',
      money:201000,
      account:[{
        value:'0',
        label:'招商银行'
        },
        {
        value:'1',
        label:'工商银行'
        }],
        accountName:[{
        value:'0',
        label:'日产账户'
        },
        {
        value:'1',
        label:'启辰账户'
        }],
      handle:[{
        value:'0',
        label:'转款'
        },
        {
        value:'1',
        label:'扣款'
        }],
      detail:[{
        value:'0',
        label:'其他转账'
        },
        {
        value:'1',
        label:'业务转账'
        }],
      listQuery:{
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        dlrCode: '', //经销商编码
        dlrShortName: '', //经销商名称
        dlrBalance: '', //账户金额
        frozenMoney: '', //预扣金额
        canUseMoney: '', //可用金额
        pvAccount: '', //收款账户
        dlrAccount:'', //汇出银行
        tranAmount:'', //金额
        businessType:'', //资金操作类型
        businessClass:'', //明细类别
        businessDate:'' //汇款日期           
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:32px;'
        }
      },
      rules:{
        dlrCode: [
            { required: true, message: '请选择经销商', trigger: 'blur' },
            { min: 1, message: '经销商不能为空', trigger: 'blur' }
        ],
        dlrAccountName: [
            { required: true, message: '请选择账户', trigger: 'change' }
        ],        
        dlrBalance: [
            { required: true, message: '请输入金额', trigger: 'blur' },
            { min: 1, message: '金额不能为空', trigger: 'blur' }
        ],
        frozenMoney: [
            { required: true, message: '请输入金额', trigger: 'blur' },
            { min: 1, message: '金额不能为空', trigger: 'blur' }
        ],
        pvAccount: [
            { required: true, message: '请选择账户', trigger: 'change' }
        ],
        dlrAccount: [
            { required: true, message: '请选择银行', trigger: 'change' }
        ],
        businessType: [
            { required: true, message: '请选择类型', trigger: 'change' }
        ],
        businessClass: [
            { required: true, message: '请选择明细类别', trigger: 'change' }
        ],
        tranAmount: [
            { required: true, message: '请输入金额', trigger: 'blur' },
            { min: 1, message: '金额不能为空', trigger: 'blur' }
        ]        
      },
      ruleForm:{
        dlrCode: '', //经销商编码
        dlrAccountName: '', //账户名称
        dlrBalance: '', //账户金额
        frozenMoney: '', //预扣金额
        canUseMoney: '', //可用金额
        pvAccount: '', //收款账户
        dlrAccount:'', //汇出银行
        tranAmount:'', //金额
        businessType:'', //资金操作类型
        businessClass:'', //明细类别
        businessDate:'' //汇款日期 
      }
    }
  },
  created(){
    this.textQurey()
  },
  computed(){
        
  },
  updated(){
    this.canUseMoney = this.ruleForm.dlrBalance - this.ruleForm.frozenMoney
  },
  methods: {
    openDlr(){
      this.isShowStore = true
    },
    rowClick(row){
      this.formField = row
      console.log(this.formField)
    },
    changeStoreCode(){
      this.isShowStore = false;
    },
    handleCode(val){
      this.handleCode = val
    },
    handleCurrentChange(val) {
       this.listQuery.pageIndex = val
       this.textQuery()
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.textQuery()
    },
    loadmore(){
      if(this.pic){
        this.pic = false;
      }else{
        this.pic = true;
      }
    },
    reset(){
      this.ruleForm={
        dlrCode: '', //经销商编码
        dlrShortName: '', //经销商名称
        dlrBalance: '', //账户金额
        frozenMoney: '', //预扣金额
        canUseMoney: '', //可用金额
        pvAccount: '', //收款账户
        dlrAccount:'', //汇出银行
        tranAmount:'', //金额
        businessType:'', //资金操作类型
        businessClass:'', //明细类别
        businessDate:'', //汇款日期
        remark: '' //备注
      }
      this.canUseMoney= ' '
    },
    
    submitForm(formName) {
      const that  = this
      this.$refs[formName].validate((valid) => {
        console.log(valid)
        if (valid) {
          this.$message({message:"添加成功",type: 'success'});                                   
          let queryObj = {
            //保存需要传 type="mutation"
            type:'mutation',
            // api配置
            apiConfig: paApis.veBuDlrAccountRLogMutationSave,
            // 需要调用的API服务配置
            apiServices: [{
                //表格中台返回网格的字段
                apiQueryRow:[
                  'oemCode',
                  'groupCode',
                  'dlrId',
                  'dlrAccount',
                  'tranAmount',
                  'businessType',
                  'businessClass',
                  'pvAccount',
                  'businessDate',
                  'dlrAccount',
                  'auditStatus',
                  'modelName',
                  'businessDate',
                  'dlrAccountRInfoId',
                  'updatecontrolid'
                ]
            }],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
                pageSize: 1000,
                pageIndex: 1,
                //当前中台使用的名称有dataInfo、info，具体查看API文档
                dataInfo: that.ruleForm
            }
            }
            //转换了中台请求格式数据
            var paramD = that.$getParams(queryObj);
            requestGraphQL(paramD).then(response =>{
              if(response.data[orgApis.veBuDlrAccountRLogMutationSave.ServiceCode].result === '1' && response.data[orgApis.veBuDlrAccountRLogMutationSave.ServiceCode].rows!=''){
                }
            })
        } else {
          this.isValiad = true;
          console.log('error submit!!');
          return false;
      }
      });
    },
    textQurey(page){
        const that = this
            let queryObj = {
                // api配置
                apiConfig: paApis.veBuDlrAccountRInfoQueryFindAll,
                // 需要调用的API服务配置
                apiServices: [{
                    //表格中台返回网格的字段
                    apiQueryRow:['dlrCode','dlrShortName','pvAccount','dlrAccount','tranAmount','businessType','businessClass','businessDate','remark']
                }],
                //条件/实体参数（变量），根据typeParam中的定义配置
                variables: {
                    pageSize: that.listQuery.pageSize,
                    pageIndex: page || that.listQuery.pageIndex,
                    //当前中台使用的名称有dataInfo、info，具体查看API文档
                    dataInfo: that.formField
                }
            }
            //转换了中台请求格式数据
            var paramD = that.$getParams(queryObj);
            //console.log(paramD)
            // 调用中台API方法（可复用）
            requestGraphQL(paramD).then(response =>{
                //console.log(response)
            if(response.data[paApis.veBuDlrAccountRInfoQueryFindAll.ServiceCode].result === '1' && response.data[paApis.veBuDlrAccountRInfoQueryFindAll.ServiceCode].rows!=''){
                if(page){
                    //查询完返回指定的page页数
                    that.listQuery.pageIndex= page;
                }
                that.pageTotal = response.data[paApis.veBuDlrAccountRInfoQueryFindAll.ServiceCode].records;
                that.list = response.data[paApis.veBuDlrAccountRInfoQueryFindAll.ServiceCode].rows;
                that.listLoading = false;
                }
            })
    },
  }
}
</script>

<style lang="scss" scoped>
  .accountManage .filter-title{
  padding-right:8px; 
  display: flex;
  justify-content: space-between;
}
.el-form-item{
  margin-bottom: 8px;
}
/deep/ .input .el-form-item__error {
  top: 94% !important;
  left: 121px !important;
  padding:0;
}
.filter-params .el-col{
  margin: 0;
}
/deep/ .filter-params .el-col label {
  width: 39% ;
  margin: 0;
}
.accountManage .more{
  cursor:pointer
}
.filter-params{
  text-align: right;
}
.remark{
  text-align: left;
  padding-left:30px !important;
}
.remark>label{
  margin-left:60px;
}
.remarkInput{
  width:510px !important;
}
.text :last-child{
  margin-left:27px;
}
</style>
