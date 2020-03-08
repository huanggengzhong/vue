<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="fetchData">查询</el-button>
      <el-button size="small" @click="assign">分配</el-button>
      <el-button size="small" @click="exportData">导出</el-button>
      <el-upload
        class="upload-demo"
        ref="upload"
        action
        :http-request="handleChange"
        :data="uploadData"
        :headers="uploadHeaders"
        name="excelFile"
        :file-list="fileList"
        :on-error="uploadFalse"
        :auto-upload="true"
        :before-upload="beforeAvatarUpload"
        :before-remove="beforeRemove"
        :on-exceed="handleExceed"
        :on-change="handFileListChange"
        :limit="1"
        :show-file-list="false"
        list-type="text"
      >
      <el-button size="small" >导入</el-button>
      </el-upload>
      <el-button size="small" @click="reset">重置</el-button>
    </div>
    
    <div class="filter-container filter-params">
      <el-form>
          <el-row :gutter="26">
            <el-col :span="22">
              <el-col :span="6">
                <label>召回专案类型</label>
                <el-select v-model="queryParams.dataInfo.recallCaseType" placeholder="请选择" @change="getRecallType" clearable>
                  <el-option label="全部" value=""></el-option>
                  <el-option label="专案" value="1"></el-option>
                  <el-option label="召回" value="0"></el-option>
                </el-select>  
              </el-col>
              <el-col :span="6">
                <label>召回专案编码</label>
                <el-input v-model="queryParams.dataInfo.recallCaseCode" placeholder="请输入" size="small" />
              </el-col>
              <el-col :span="6">
                <label>主题</label>
                <el-input v-model="queryParams.dataInfo.topic" placeholder="请输入" size="small"/>
              </el-col>

              <!--<el-col :span="6">
                <label>经销商名称</label>
                <el-input v-model="queryParams.dataInfo.dlrShortName" size="small" readonly="readonly" />
              </el-col>-->
              <el-col :span="6">
              <label>发布起止时间</label>
              <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd HH:mm:ss"
                format="yyyy-MM-dd HH:mm:ss"
                @change="getDate"
              ></el-date-picker>
            </el-col>
            </el-col>
            <el-col :span="2">
              <el-button :icon="moreBtnIcon" @click="changeToggleParam" class="moreParam">更多</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="26" v-show="toggleParam">
            <el-col :span="22">
              <!--<el-col :span="6">
                <label>发布起始时间</label>
                <el-date-picker
                  v-model="queryParams.dataInfo.startReleaseDate"
                  @change="changeBeginDate"
                  type="date"
                  :picker-options="beginPickerOptions"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-col>-->
              <!--<el-col :span="6">
                <label>发布截止时间</label>
                <el-date-picker
                  v-model="queryParams.dataInfo.endReleaseDate"
                  @change="changeEndDate"
                  type="date"
                  :picker-options="endPickerOptions"
                  value-format="yyyy-MM-dd"
                  format="yyyy-MM-dd"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-col>-->
              <el-col :span="6">
                <label>召回专案状态</label>
                <el-select v-model="queryParams.dataInfo.isStop" placeholder="请选择" @change="getRecallStatus" clearable>
                  <el-option label="全部" value=""></el-option>
                  <el-option label="未停止" value="1"></el-option>
                  <el-option label="已停止" value="0"></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <label>负责人</label>
                <el-input v-model="queryParams.dataInfo.prrsonName" placeholder="请输入" size="small"/>
              </el-col>
              <el-col :span="6">
                <label>完成状态</label>
                <el-select v-model="queryParams.dataInfo.finishState" placeholder="请选择" @change="getFinishStatus" clearable>
                  <el-option label="全部" value=""></el-option>
                  <el-option label="已完成" value="1"></el-option>
                  <el-option label="未完成" value="0"></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <label>分配状态</label>
                <el-select v-model="queryParams.dataInfo.tastState" placeholder="请选择" @change="getAssignStatus" clearable>
                  <el-option label="全部" value=""></el-option>
                  <el-option label="已完成" value="1"></el-option>
                  <el-option label="未完成" value="0"></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <label>VIN码</label>
                <el-input v-model="queryParams.dataInfo.vin" placeholder="请输入" size="small"/>
              </el-col>
            </el-col>
          </el-row>
        </el-form>
    </div>
    
    <mix-table
      ref="tableList"
      :queryParams="queryParams"
      :dynamicTableCols="cols"
      :isShowSelect=true
      multipleSelect="selection"
      :isPaging=true
      :isDialog=false /> 
    <!--召回专案分配责任人弹框-->
    <el-dialog width="50%" title="召回专案分配责任人" :visible.sync="selectChargePersonVisible" @closed="cancel"
      :append-to-body="true" :close-on-click-modal="false" center>
      <div class="filter-container filter-params">
        <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm" :inline-message="true">
          <el-row :gutter="10">
            <el-col :span="9">
              <el-form-item label="责任人" prop="personUseId">
                <el-select
                 :multiple="false"
                 collapse-tags
                 filterable
                 v-model="ruleForm.personUseId"
                 placeholder="请选择"
                 @change="getChargePerson"
                 clearable
                 size="small">
                 <el-option v-for="item in chargePersonIdOptions" 
                 :key="item.personUseId"
                 :label="item.personName" 
                 :value="item.personUseId"
                 >
                 </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item class="dialog-footer">
            <el-button type="primary" size="small" @click="saveChargePerson">保存</el-button>
            <el-button size="small" @click="cancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { recallApi } from "@/api/graphQLApiList/se";
import { seDbRecallCaseVinMutationSaveTastAllocation } from "@/api/se/guarantee/recall/recallTaskAssign";
import { requestGraphQL } from "@/api/commonRequest";
import LookupValue from '@/components/org/LookupValue'
import mixTable from "@/components/basicComponent/mixTable"
import mixDetail from "@/components/basicComponent/mixDetail"
import config from '@/utils/config'

export default {
  components: {
    mixTable,
    LookupValue,
    mixDetail,
    config
  },

  data() {
    return {
        moreBtnIcon: "el-icon-plus",
        toggleParam: false,
        selectChargePersonVisible: false,
        date: "",
        beginPickerOptions: {
          disabledDate: time => {
            let endDateVal = this.queryParams.dataInfo.endReleaseDate;
            if (endDateVal) {
              return time.getTime() > new Date(endDateVal).getTime();
            }
          }
        },
        endPickerOptions: {
          disabledDate: time => {
            let beginDateVal = this.queryParams.dataInfo.startReleaseDate;
            if (beginDateVal) {
              return time.getTime() < new Date(beginDateVal).getTime();
            }
          }
        },
        cols:[
          { label: '召回专案类型编码',codeField:"recallCaseType", hidden: true},
          { label: '召回专案类型',codeField:"recallCaseTypeName"},
          { label: '召回专案编码', codeField: "recallCaseCode"},
          { label: '主题', codeField: "topic"},
          { label: '主凶件号', codeField: "pfpCode"},
          { label: '经销商名称', codeField: "dlrShortName"},
          { label: '发布时间', codeField: "releaseDate"},
          { label: 'VIN码', codeField: "vin"},
          { label: '完成状态', codeField: "finishState"},
          { label: '分配状态', codeField: "tastState"},
          { label: '负责人Id', codeField: "prrsonNameId", hidden: true},
          { label: '负责人', codeField: "prrsonName"}
        ],
        queryParams: {
          APIUrl: recallApi.seDbRecallCaseQueryTastAllocation.APIUrl,
          InputType: recallApi.seDbRecallCaseQueryTastAllocation.InputType,
          ServiceCode: recallApi.seDbRecallCaseQueryTastAllocation.ServiceCode,
          dataInfo: {
            recallCaseType: '',
            recallCaseCode: '',
            topic: '',
            dlrShortName: this.$store.getters.orgInfo.DLR_NAME,
            startReleaseDate: '',
            endReleaseDate: '',
            isStop: '',//召回专案状态编码
            prrsonName: '',
            finishState: '',
            tastState: '',
            vin: ''
         },
         apiQueryRow: [
          'recallCaseTypeName',
          'recallCaseType',
          'recallCaseCode',
          'topic',
          'pfpCode',
          'dlrShortName',
          'releaseDate',//发布时间
          'vin',
          'finishState',//完成状态
          'tastState',//分配状态
          'prrsonName',//负责人
          'updateControlId'
        ]
      },
      ruleForm: {
        chargePersonId: '',
        chargePersonName: ''
      },
      chargePersonIdOptions: [],
      //主表选中行
      selectRows: [],
      uploadData: {},
      fileList: [],
      uploadHeaders: {
        Authorization: this.$store.getters.token
      },
    }
  },
  created() {
    console.log(this.$store.getters.orgInfo);
  },
  methods:{
    fetchData() {
      if (this.date == '') {
        this.$message({
          type: "warning",
          message: "请选择日期!"
        });
        return;
      }
      this.$refs.tableList.queryList()
    },
    //分配
    assign() {
      this.selectRows = this.$refs.tableList.currentRow;
      if (this.selectRows.length < 1) {
        this.$message({
          type: 'warning',
          message: '请先选择表格数据后再分配！'
        });
        return;
      } 
      this.selectChargePersonVisible = true;
      this.queryChargePerson();
    },
    //查询召回专案分配责任人
    queryChargePerson() {
        const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam: "($pageIndex: Int, $pageSize: Int, $dataInfo: " + recallApi.chargePersonQuery.InputType + ")",
        // 请求API
        apiUrl: recallApi.chargePersonQuery.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: recallApi.chargePersonQuery.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            apiQueryRow: [
              "personUseId",
              "personName",
            ]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: -1,
          pageIndex: -1,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: ""
        }
      };
      //转换了中台请求格式数据
      let params = this.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(params).then(response => {
        if (response.data.chargePersonQuery.result === "1") {
          this.chargePersonIdOptions = response.data.chargePersonQuery.rows;
        } 
      });
    },
    //重置
    reset() {
      this.queryParams.dataInfo.recallCaseType = "";
      this.queryParams.dataInfo.recallCaseCode = "";
      this.queryParams.dataInfo.topic = "";
      this.queryParams.dataInfo.dlrShortName = "";
      this.queryParams.dataInfo.startReleaseDate = "";
      this.queryParams.dataInfo.endReleaseDate = "";
      this.queryParams.dataInfo.isStop = "";
      this.queryParams.dataInfo.prrsonName = "";
      this.queryParams.dataInfo.finishState = "";
      this.queryParams.dataInfo.tastState = "";
      this.queryParams.dataInfo.vin = "";
    },
    //保存
    saveChargePerson() {
      for (var i = 0; i < this.selectRows.length; i++) {
        this.selectRows[i].a10 = this.ruleForm.personUseId;
        var personNameItems = this.chargePersonIdOptions.filter(o => o.personUseId == this.ruleForm.personUseId)
        if (personNameItems.length > 0) this.ruleForm.personName = personNameItems[0].personName;
        this.selectRows[i].a11 = this.ruleForm.personName;
      }
      seDbRecallCaseVinMutationSaveTastAllocation(this.selectRows).then(response => {
        var resData = response.data[recallApi.seDbRecallCaseVinMutationSaveTastAllocation.ServiceCode];
        if (resData.result === "1" ) {
          this.$message({
            type: 'success',
            message: '保存成功！'
          });
          this.fetchData();
        } else {
          this.$message({
            type: 'success',
            message: '保存失败！'
          });
        }
        this.selectChargePersonVisible = false;
        this.$refs.tableList.clearSelection();
      });
    },
    //取消
    cancel() {
      this.selectChargePersonVisible = false;
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
      //console.log(this.toggleParam);
      if (this.toggleParam) {
        this.moreBtnIcon = "el-icon-minus";
      } else {
        this.moreBtnIcon = "el-icon-plus";
      }
    },
    getChargePerson(val) {
      this.ruleForm.personUseId = val;
    },
    //导出
    exportData() {
      this.$refs.tableList1.exportTableData('excel', '召回专案任务分配', 'Sheet0');
    },
    //导入的URL
    uploadUrl() {
      return (
        recallApi.recallTaskAssignImport.APIUrl + config.cH + "v=" + recallApi.recallTaskAssignImport.ServiceCode
      );
    },
    // 处理文件选择器改变事件
    handleChange(param) {
      var url = this.uploadUrl() // API根据不同功能url不同，请配置到对应模块配置
      var that = this
      this.$requestImport(url, param, function(response) {
        that.uploadSuccess(response)
      })
    },
    uploadSuccess(response) {
      //debugger
      if(response.data.recallTaskAssignImport.result === '1' 
      && response.data.recallTaskAssignImport.rows != null 
      && response.data.recallTaskAssignImport.rows.length > 0) {
        var tempList = response.data.recallTaskAssignImport.rows;
        var implistTemp = [];
        //导入Excel模块列头、数据是否必填
        var excelCols = [
          {name:'召回专案编码',required: true},
          {name:'VIN码',required: true},
          {name:'负责人',required: true}
        ]
        var isErrorTemplate = false // 模版错误
        var firstRow = tempList[0]
        for (let i = 0; i < excelCols.length; i++) {
          if (firstRow.hasOwnProperty(excelCols[i].name) == false) {
            isErrorTemplate = true
           } else {
            isErrorTemplate = false
          }
        }
        if (isErrorTemplate) {
          this.$alert('Excel模版错误', '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
        this.$refs.upload.clearFiles();
        this.$refs.tableList.tableData = [];
        return
        }
        // var dataNullErrorMsg = ''
        // for (var i = 0; i < tempList.length; i++) { // 检查数据是否为空
        //   if (!this.$utils.isEmpty(dataNullErrorMsg)) break
        //   var row = tempList[i]
        //   for (var j = 0; j < excelCols.length; j++) {
        //     var col = excelCols[j]
        //     if (col.required === true && this.$utils.isEmpty(row[col.name])) {
        //       dataNullErrorMsg = `Excel第${i + 2}行“${col.name}”不能为空`
        //       break
        //     }
        //   }
        // }
        // if (!this.$utils.isEmpty(dataNullErrorMsg)) {
        //   this.$alert(dataNullErrorMsg, '提示', {
        //     confirmButtonText: '确定',
        //     type: 'warning'
        //   })
        //   this.$refs.upload.clearFiles();
        //   this.$refs.tableListst.tableData = [];
        //   return
        // }
        for (var j = 0; j < tempList.length; j++) {
          var newRow = {
            recallCaseCode: tempList[j].召回专案编码,
            vin: tempList[j].VIN码,
            prrsonName: tempList[j].负责人
          }
          implistTemp.push(newRow)
        }
        this.$refs.tableList.tableData = implistTemp
        this.$alert('文件导入成功', '提示', {
          confirmButtonText: '确定',
          type: 'success'
        })
    } else {
      this.$alert(`文件导入失败`, '提示', {
        confirmButtonText: '确定',
        type: 'warning'
      })
    }
    this.$refs.upload.clearFiles()
   },
   uploadFalse(response, file, fileList) {
      this.$alert('文件上传失败', '提示', {
        confirmButtonText: '确定',
        type: 'warning'
      })
    },
    beforeAvatarUpload(file) {
      // 上传前对文件进行判断
      const extension = file.name.split('.')[1] === 'xls'
      const extension2 = file.name.split('.')[1] === 'xlsx'
      if (!extension && !extension2) {
        this.$alert('上传文件只能为Excel文件', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        })
      }
      return extension || extension2
    },
    beforeRemove(file, fileList) {
      // this.$alert(
      //   `选择文件类型或大小不符，已移除 ${file.name}，请重新选择`,
      //   '提示',
      //   {
      //     confirmButtonText: '确定',
      //     type: 'warning'
      //   }
      // )
      return (this.firstFile.name = [])
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    handFileListChange(file, fileList) {
      this.firstFile = fileList != null && fileList.length > 0 ? fileList[0] : {}
    },
    getRecallType(val) {
      this.queryParams.dataInfo.recallCaseType = val;
    },
    changeBeginDate(val) {
      this.queryParams.dataInfo.startReleaseDate = val;
    },
    changeEndDate(val) {
      this.queryParams.dataInfo.endReleaseDate = val;
    },
    getRecallStatus(val) {
      this.queryParams.dataInfo.isStop = val;
    },
    getFinishStatus(val) {
      this.queryParams.dataInfo.finishState = val;
    },
    getAssignStatus(val) {
      this.queryParams.dataInfo.tastState = val;
    },
    getDate(val) {
      this.queryParams.dataInfo.startReleaseDate = val[0],
      this.queryParams.dataInfo.endReleaseDate = val[1];
    },
 }
};
</script>
