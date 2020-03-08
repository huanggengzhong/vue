<template>
  <div>
    <div class="app-container app-container-table">
      <div class="filter-container filter-button" ref="searcheHeight">
          
            <a class="linkFont" href="www.baidu.com">模板文件下载</a>
            <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
            <el-button size="small" @click="openSelectPart">新增</el-button>
            <el-button size="small" @click="showSave">保存</el-button>
            <el-button size="small" @click="showDelete">删除</el-button>
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
            <el-button size="small" @click="reset()">重置</el-button>
        
      </div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="6">
            <label>备件编码</label>
            <el-input v-model="queryParams.dataInfo.partNo" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>备件名称</label>
            <el-input v-model="queryParams.dataInfo.partName" placeholder="请输入" size="small"></el-input>
          </el-col>
          <!-- <el-col :span="6">
                            <label>备件类别</label>
                            <el-input placeholder="请输入" size="small"></el-input>
          </el-col>-->
          <LookupValue
            :span="6"
            :isMul="false"
            :isshow="true"
            :code="queryParams.dataInfo.partTypeId"
            labelName="备件类型"
            lookuptype="PA0009"
            @changeCode="getPartTypeNo"
          />
        </el-row>
      </div>
      <mix-table
        ref="tableList"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        :isShowSelect="false"
        :isPaging="true"
        :isDialog="false"
      />
    </div>
    <!--备件选择弹窗 -->
    <paChoosePartSelect
      :paChoosePartVisible="paChoosePartVisible"
      :title="1"
      @seChoosePartData="getPartDataDialog"
      @close="closeChoosePaSelect"
    ></paChoosePartSelect>
    <!-- 新增/修改弹框 -->
    <!-- <el-dialog width="70%" title="新增/修改" :visible.sync="dialogAddVisible"
           :append-to-body="true" :close-on-click-modal="false" center>
           <div class="filter-container filter-params">
               <el-form >
                   <el-row :gutter="10">
                       <el-col :span="8">
                           <el-form-item label="备件编号" prop>
                               <el-input placeholder="请输入" size="small"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="8">
                           <el-form-item label="备件名称" prop>
                               <el-input placeholder="请输入" size="small"></el-input>
                           </el-form-item>
                       </el-col>
                       <LookupValue
                            :span="8"
                            :isMul="false"
                            :isshow="true"
                            labelName="备件类型"
                            lookuptype="PA0009"
                            @changeCode="getPartTypeNo"
                            />
                       <el-col :span="8">
                           <el-form-item label="备注" prop>
                               <el-input placeholder="请输入" size="small"></el-input>
                           </el-form-item>
                       </el-col>
                   </el-row>
                   <el-form-item class="dialog-footer">
                       <el-button type="primary">保存</el-button>
                       <el-button >取消</el-button>
                   </el-form-item>
               </el-form>
           </div>
    </el-dialog>-->
  </div>
</template>
<script>
import mixTable from "@/components/basicComponent/mixTable";
import LookupValue from "@/components/org/LookupValue";
import { seApis } from "@/api/graphQLApiList/se";
import config from "@/utils/config";
import paChoosePartSelect from "@/components/se/paChoosePart";
import { doSave,doDelete } from "@/api/se/basedata/repair/partSortDetail";
export default {
  components: {
    mixTable,
    LookupValue,
    paChoosePartSelect
  },
  filters: {},
  data() {
    return {
      dialogAddVisible: false,
      paChoosePartVisible: false,
      pageSize: 10,
      pageIndex: 1,
      pageTotal: 0,
      partNo: "",
      partName: "",
      partTypeId: "",
      parttype: "",
      remark: "",
      listQuery: {},
      fileList:[],
      firstFile: {},
      uploadData: {},
      uploadHeaders: {
        Authorization: this.$store.getters.token
      },
      cols: [
        { label: "备件编码", codeField: "partNo" },
        { label: "备件名称", codeField: "partName" },
        {
          label: "备件类型",
          isComponent: true,
          comps: [
            {
              codeField: "partTypeId",
              compKey: "propKey2",
              lookuptype: "PA0009",
              clickEvent: () => null,
              isMul: false,
              isShowLabel: false,
              component: () => import("@/components/org/LookupValue")
            }
          ]
        },
        {
          label: "备注",
          codeField: "remark",
          comps: {
            type: "inputTxt"
          }
        }
      ],
      queryParams: {
        APIUrl: seApis.partSortQueryFindAll.APIUrl,
        InputType: seApis.partSortQueryFindAll.InputType,
        ServiceCode: seApis.partSortQueryFindAll.ServiceCode,
        dataInfo: {
          partNo: "",
          partName: "",
          partTypeId: ""
        },
        apiQueryRow: [
          "partNo",
          "partName",
          "partTypeId",
          "partType",
          "remark",
          "updateControlId"
        ]
      }
    };
  },
  created() {},
  methods: {
    getPartTypeNo(val) {
      this.queryParams.dataInfo.partTypeId = val;
    },
    //查询
    fetchData() {
      this.$refs.tableList.queryList();
    },
    //提示保存
    showSave(){
        if(this.$refs.tableList.tableData==null||this.$refs.tableList.tableData==''){
        this.$alert("无数据","提示",{
          confirmButtonText:'确定',
          type:'warning'
        })
        return;
        } else{
            this.$confirm('是否保存表格修改数据？','提示',{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning'
            })
             .then(() =>{
                 var saveList=[];
                 this.$refs.tableList.tableData.forEach(row => {
                    saveList.push({
                        partNo:row.partNo,
                        partName:row.partName,
                        partTypeId:row.partTypeId,
                        partTypeName:row.partTypeName,
                        remark:row.remark
                    });                 
                 });
                 this.save(saveList);
             })
             .catch(()=>{});
        }
    },
    //保存
    save(saveList){
        this.$refs.tableList.ListLoading = true;
        const that = this;
        var allCount = saveList.length;
        var saveCount = 0;
        var successCount = 0;
        var failCount = 0;
        saveList.forEach(row=>{
            doSave(row).then(response=>{
                if (
            response.result === "1" &&
            response.data[seApis.partSortDetailMutationSave.ServiceCode]
              .result === "1"
          ) {
            successCount++;
          } else {
            failCount++;
          }
          saveCount++;
          if (saveCount == allCount) {
            that.ListLoading = false;
            if (successCount == 0) {
              that.$message({
                type: "error",
                message: "保存失败"
              });
            } 
            else if (failCount == 0) {
              that.$message({
                type: "success",
                message: "保存成功!"
              });
              that.fetchData();
            } 
            else {
              that.$message({
                type: "info",
                message: `保存成功${successCount}行,失败${failCount}行`
              });
              that.fetchData();
            }
          }
            });
        });
    },
    //提示删除
    showDelete(){
        debugger
        if(this.$refs.tableList.currentRow.length== 0) {
          this.$alert('请选中一行', '提示', {
          confirmButtonText: '确定',
          type:'warning',
        });
          return;
        }
        else{
          this.$confirm('是否删除数据?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.delete();       
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
        }
    },
    //删除
    delete(){
        let deleteData = {
             partNo: this.$refs.tableList.currentRow[0].partNo,
             updateControlId: this.$refs.tableList.currentRow[0].updateControlId
           };
           doDelete(deleteData).then(response => {
           if (response.data[seApis.partSortDetailDelete.ServiceCode].result === '1') {
             this.$message({
               type: 'success',
               message: '删除成功!'
             });
             this.fetchData();
           } else {
             this.$message({
               type: 'success',
               message: response.data[seApis.partSortDetailDelete.ServiceCode].msg
             });
           }
           
           this.$refs.tableList.currentRow=[];
           this.$refs.tableList.currentRow.length=0;
           debugger
         }); 

    },
    //导入的URL
    uploadUrl: function() {
      return (
        seApis.partResolve.APIUrl + config.cH + "v=" + seApis.partResolve.ServiceCode
      );
    },
    // 重置
    reset() {
      this.queryParams.dataInfo.partNo = "";
      this.queryParams.dataInfo.partName = "";
      this.queryParams.dataInfo.partTypeId = "";
    },
    //打开备件选择弹框
    openSelectPart() {
      this.paChoosePartVisible = true;
    },
    //得到备件多选弹框的值，绑定到表格
    getPartDataDialog(val) {
      for (let index in val) {
        debugger;
        // val[index].partNo=this.partNo;
        // val[index].partName=this.partName;
        
          this.$refs.tableList.tableData.push(val[index]);
        
      }
      this.paChoosePartVisible = false;
    },
    //关闭备件选择弹框
    closeChoosePaSelect(val) {
      val === "!**!" ? (this.paChoosePartVisible = false) : "";
    },
    //导入操作
    uploadSuccess(response) { 
        debugger
      if (response.result === '1' && response.data.rows != null && response.data.rows.length > 0) {
        var tempList = response.data.rows
        var implistTemp = []
        // 导入Excel模块列头、数据是否必填
        var excelCols = [{ name: '备件编码', required: true }, { name: '备件名称', required: true }, { name: '备件类型', required: true }, { name: '备注', required: true }]
        var isErrorTemplate = false // 模版错误
        var firstRow = tempList[0]
        excelCols.forEach(col => { // 检查模版是否错误
          if (!firstRow.hasOwnProperty(col.name)) isErrorTemplate = true
        })
        if (isErrorTemplate) {
          this.$alert('Excel模版错误', '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
          this.$refs.upload.clearFiles()
          this.$refs.tableList.tableData = []
          return
        }
        var dataNullErrorMsg = ''
        for (var i = 0; i < tempList.length; i++) { // 检查数据是否为空
          if (!this.$utils.isEmpty(dataNullErrorMsg)) break
          var row = tempList[i]
          for (var j = 0; j < excelCols.length; j++) {
            var col = excelCols[j]
            if (col.required === true && this.$utils.isEmpty(row[col.name])) {
              dataNullErrorMsg = `Excel第${i + 2}行“${col.name}”不能为空`
              break
            }
          }
        }
        if (!this.$utils.isEmpty(dataNullErrorMsg)) {
          this.$alert(dataNullErrorMsg, '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
          this.$refs.upload.clearFiles()
          this.$refs.tableListst = []
          return
        }
        var partTypeNotMatch = false
        var partTypeNameError = ''
        // var partTypeOptions = this.$refs.select_carBrandCode.optionDatas
        // var codeField = this.$refs.select_carBrandCode.codeField
        // var textField = this.$refs.select_carBrandCode.textField      
        // console.log('导入后判断')
        tempList.forEach(row => {
        //   if ( partTypeNotMatch) return
        //   // 备件类型中文转换为对应编码
        //   var partTypeItems = partTypeOptions.filter(o => o[textField] === row.备件类型)
        //   if (partTypeItems.length === 0) {
        //     partTypeNotMatch = true
        //     partTypeNameError = row.备件类型
        //     return
        //   }
          var newRow = {
            partNo: row.备件编码,
            partTypeId: row.备件类型,
            partName: row.备件名称,
            remark: row.备注
          }
          
          implistTemp.push(newRow)
    
        })
        if (partTypeNotMatch) {
          this.$alert(`导入数据备件类型名称${partTypeNameError}不存在`, '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
        } 
        else {
          this.$refs.tableList.tableData = implistTemp
          this.$alert('文件导入成功', '提示', {
            confirmButtonText: '确定',
            type: 'success'
          })
         }
      }
      else {
        this.$alert('文件导入失败', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        })
      }
      this.$refs.upload.clearFiles()
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
    uploadFalse(response, file, fileList) {
      this.$alert('文件上传失败', '提示', {
        confirmButtonText: '确定',
        type: 'warning'
      })
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
    // 处理文件选择器改变事件
    handleChange(param) {
      var url = this.uploadUrl() // API根据不同功能url不同，请配置到对应模块配置
      var that = this
      this.$requestImport(url, param, function(response) {
        console.info(response)
        that.uploadSuccess(response)
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.linkFont {
  color: blue;
  font-size: 5px;
  text-decoration: underline;
}
</style>