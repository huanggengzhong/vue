<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="text" size="small">保养模板文件下载</el-button>
      <el-button type="primary" size="small" @click="queryFindALL()">查询</el-button>
      <el-button size="small" @click="showdialog()">新增</el-button>
      <el-upload
        class="upload-demo"
        ref="upload"
        :file-list="fileList"
        name="excelFile"
        action
        :headers="uploadHeaders"
        :http-request="handleChange"
        :on-success="uploadSuccess"
        :auto-upload="true"
        :before-upload="beforeAvatarUpload"
        :before-remove="beforeRemove"
        :on-exceed="handleExceed"
        :limit="1"
        :show-file-list="false"
        list-type="text"
      >
        <el-button size="small">导入</el-button>
      </el-upload>
      <el-button size="small" @click="remove()">重置</el-button>
    </div>
    <div class="filter-container filter-params">
      <el-row>
        <el-col :span="6">
          <label>备件编码</label>
          <el-input placeholder="请输入" v-model="queryParams1.dataInfo.partNo" size="small"></el-input>
        </el-col>
        <el-col :span="6">
          <label>备件名称</label>
          <el-input placeholder="请输入" size="small" v-model="queryParams1.dataInfo.partName"></el-input>
        </el-col>
        <el-col :span="6">
          <label>分类</label>
          <el-select placeholder="请选择" v-model="queryParams1.dataInfo.A1">
            <el-option
              v-for="item in statusOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
    <mix-table
      ref="tableList"
      :queryParams="queryParams1"
      :dynamicTableCols="cols"
      :isShowSelect="true"
      :isPaging="true"
      :isDialog="true"
    />
    <el-dialog
      :visible.sync="dialogParamVisible"
      title="零件分类设置维护"
      :close-on-click-modal="false"
      center
      width="900px"
      :append-to-body="true"
      @close="closeDialog"
    >
      <div class="filter-container filter-params">
        <el-form class="demo-ruleForm" :inline-message="true">
          <el-row>
            <el-col :span="8">
              <el-form-item label="分类">
                <el-select placeholder="请选择" v-model="saveParam.A1" :disabled="ISshow?false:true">
                  <el-option
                    v-for="item in statusOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="备注">
                <el-input
                  type="textarea"
                  placeholder="请输入内容"
                  v-model="saveParam.remark"
                  :autosize="{ minRows: 2, maxRows: 2}"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="filter-container filter-button">
          <el-button size="small" @click="showAddPart()" v-show="ISshow">备件新增</el-button>
          <el-button size="small" @click="deletPartFavo()" v-show="ISshow">删除</el-button>
        </div>
        <mix-table
          ref="tableList1"
          :dynamicTableCols="Partcols"
          :isShowSelect="true"
          :isPaging="true"
          :isDialog="true"
          @rowClick="rowClickPart"
        />
        <div class="filter-container filter-button">
          <el-button size="small" @click="saveAll()">保存</el-button>
          <el-button size="small" @click="cancel()">取消</el-button>
        </div>
      </div>
    </el-dialog>

    <!--选择备件弹框-->
    <paChoosePart
      :paChoosePartVisible="paChoosePartVisible"
      :title="1"
      @seChoosePartData="getParts"
      @close="closePartsChoose"
    ></paChoosePart>
  </div>
</template>
<script>
import mixTable from "@/components/basicComponent/mixTable";
import { seApis } from "@/api/graphQLApiList/se";
import { orgApis } from "@/api/graphQLApiList/org";
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import paChoosePart from "@/components/se/paChoosePart";
import {
  seDbPartGroupingSave,
  seDbPartGroupingDelet
} from "@/api/se/basedata/repair/partGrouping";

export default {
  components: {
    mixTable,
    paChoosePart
  },
  created() {},
  data() {
    return {
      pageSize: 10,
      pageIndex: 1,
      aaa: "",
      dialogParamVisible: false,
      paChoosePartVisible: false,
      ISshow: true,
      deletPart: -1,
      fileList: [],
      uploadHeaders: {
        Authorization: this.$store.getters.token
      },
      cols: [
        {
          label: "操作",
          labelName: "修改",
          comps: {
            type: "button",
            event: this.chuange
          }
        },
        {
          label: "操作",
          labelName: "删除",
          comps: {
            type: "button",
            event: this.deletePartGp
          }
        },
        { label: "备件编码", codeField: "partNo" },
        { label: "备件名称", codeField: "partName" },
        { label: "分类", codeField: "A1" },
        { label: "备注", codeField: "remark" }
      ],
      Partcols: [
        { label: "备件编码", codeField: "partNo" },
        { label: "备件名称", codeField: "partName" }
      ],
      queryParams1: {
        APIUrl: seApis.seDbPartGroupingQueryFind.APIUrl,
        InputType: seApis.seDbPartGroupingQueryFind.InputType,
        ServiceCode: seApis.seDbPartGroupingQueryFind.ServiceCode,
        dataInfo: {
          partNo: "",
          partName: "",
          A1: ""
        },
        apiQueryRow: ["partNo", "partName", "A1", "remark"],
        statusOption: []
      },
      saveParam: {
        A1: "",
        C1: "",
        remark: ""
      },
      PartdataInfo: [
        {
          partNo: "",
          partName: ""
        }
      ]
    };
  },
  created() {},
  methods: {
    // 主界面新增按钮
    showdialog() {
      this.dialogParamVisible = true;
      this.ISshow = true;
    },
    // 修改按钮
    chuange(val) {
      this.showdialog();
      this.saveParam.A1 = val.A1;
      this.saveParam.C1 = val.C1;
      this.saveParam.remark = val.remark;
      this.PartdataInfo[0].partName = val.partName;
      this.PartdataInfo[0].partNo = val.partNo;
      this.$nextTick(() => {
        this.$refs.tableList1.tableData = this.PartdataInfo;
        this.ISshow = false;
      });
    },
    // 关闭零件分类设置维护弹窗
    closeDialog() {
      this.dialogParamVisible = false;
      this.saveParam.A1 = "";
      this.saveParam.C1 = "";
      this.saveParam.remark = "";
      this.PartdataInfo[0].partName = "";
      this.PartdataInfo[0].partNo = "";
      this.$refs.tableList1.tableData = [];
    },
    //备件选择弹窗字传父方法  获取选中数据
    getParts(val) {
      this.paChoosePartVisible = false;
      var selectPartsRow = {
        partNo: "",
        partName: ""
      };
      for (var n = 0; n < val.length; n++) {
        let flag = true;
        if (this.$refs.tableList1.tableData.length != null) {
          for (var m = 0; m < this.$refs.tableList1.tableData.length; m++) {
            if (this.$refs.tableList1.tableData[m].partNo == val[n].partNo)
              flag = false;
          }
        }
        if (flag) {
          selectPartsRow.partNo = val[n].partNo;
          selectPartsRow.partName = val[n].partName;
          this.$refs.tableList1.tableData.push(
            JSON.parse(JSON.stringify(selectPartsRow))
          );
        }
      }
    },
    // 备件选择弹窗回调函数 关闭弹窗
    closePartsChoose() {
      this.paChoosePartVisible = false;
    },
    //弹窗备件新增按钮 打开备件选择弹窗
    showAddPart() {
      this.paChoosePartVisible = true;
    },
    //主表查询  调用Mixtable 组件方法查询
    queryFindALL() {
      this.$refs.tableList.queryList();
    },
    //表单删除按钮 mixtable直接返回选中行数据
    deletePartGp(val) {
      seDbPartGroupingDelet(val).then(response => {
        if (
          response.data[seApis.seDbPartGroupingDelet.ServiceCode].result == "1"
        ) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.$refs.tableList.queryList();
        } else {
          this.$message({
            message:
              "删除失败：" +
              response.data[seApis.seDbPartGroupingDelet.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    },
    // 重置 按钮
    remove() {
      this.queryParams1.dataInfo.partNo = "";
      this.queryParams1.dataInfo.partName = "";
      this.queryParams1.dataInfo.A1 = "";
    },
    // 详细 保存按钮
    saveAll() {
      let obj = {};
      obj.remark = this.saveParam.remark;
      obj.C1 = this.saveParam.C1;
      obj.A1 = this.saveParam.A1;
      obj.dataInfo = this.$refs.tableList1.tableData;
      seDbPartGroupingSave(obj).then(response => {
        if (
          response.data[seApis.seDbPartGroupingSave.ServiceCode].result == "1"
        ) {
          this.$message({
            message: "保存成功",
            type: "success"
          });
          this.dialogParamVisible = false;
          this.$refs.tableList.queryList();
        } else {
          this.$message({
            message:
              "保存失败：" +
              response.data[seApis.seDbPartGroupingSave.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    },
    //绑定mixtable 选中方法 获取备件选中行数
    rowClickPart(val) {
      let obj = {};
      obj = val[0];
      for (var a = 0; this.$refs.tableList1.tableData.length > a; a++) {
        if (obj.partNo == this.$refs.tableList1.tableData[a].partNo) {
          //获取选中行的位子
          this.deletPart = a;
        }
      }
    },
    //详细删除按钮
    deletPartFavo() {
      if (this.deletPart != -1) {
        this.$refs.tableList1.tableData.splice(this.deletPart, 1);
        this.deletPart = -1;
      } else {
        this.$alert("请选择数据", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return false;
      }
    },
    //弹框取消按钮

    cancel() {
      this.dialogParamVisible = false;
    },
    //处理文件选择器改变事件
    handleChange(param) {
      var url = "/ly/mp/busicen/asc/excel/resolve.do"; // API根据不同功能url不同，请配置到对应模块配置
      var that = this;
      this.$requestImport(url, param, function(response) {
        that.uploadSuccess(response);
      });
    },
    uploadSuccess(response) {
      if (
        response.data.result === "1" &&
        response.data.rows != null &&
        response.data.rows.length > 0
      ) {
        var tempList = response.data.rows;
        var implistTemp = [];
        //导入Excel模块列头、数据是否必填
        // var excelCols = [
        //   { name: '备件号', required: true },
        //   { name: '网点价', required: true },
        //   { name: '建议零售价', required: true }
        // ]
        // var isErrorTemplate = false // 模版错误
        // var firstRow = tempList[0]
        // excelCols.forEach(col => {
        //   // 检查模版是否错误
        //   if (!firstRow.hasOwnProperty(col.name)) isErrorTemplate = true
        // })
        // if (isErrorTemplate) {
        //   this.$alert('Excel模版错误', '提示', {
        //     confirmButtonText: '确定',
        //     type: 'warning'
        //   })
        //   this.$refs.upload.clearFiles()
        //   this.reviseForm.importList = []
        //   return
        // }
        // var dataNullErrorMsg = ''
        // for (var i = 0; i < tempList.length; i++) {
        //   // 检查数据是否为空
        //   if (!this.$utils.isEmpty(dataNullErrorMsg)) break
        //   var row = tempList[i]
        //   for (var j = 0; j < excelCols.length; j++) {
        //     var col = excelCols[j]
        //     if (col.required == true && this.$utils.isEmpty(row[col.name])) {
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
        //   this.$refs.upload.clearFiles()
        //   this.reviseForm.importList = []
        //   return
        // }
        // debugger
        // tempList.forEach(row => {
        //   var newRow = {
        //     partNo: row.partNo,
        //     partName: row.partName,
        //     partName: row.salePriceNr,
        //     userPriceNr: row.userPriceNr
        //   }
        //   implistTemp.push(newRow)
        // })
        // var keys=[]
        let b = [];
        let a = [{ partNo: "" },{ partName: "" },{ remark: "" },{ A1: "" }]
        debugger
        for (var i = 0; i < tempList.length; i++) {
          if (tempList[i]["备件编码"]) {
            a[i].partNo = tempList[i]["备件编码"];

          } if(tempList[i]["备件名称"]){
            a[i].partName = tempList[i]["备件名称"];

          }if(tempList[i]["备注"]){
            a[i].remark = tempList[i]["备注"];

          }if(tempList[i]["分类"]){
            a[i].A1 = tempList[i]["分类"];
          }
          b.push( a[i])
        }
        this.$refs.tableList.tableData = b;
        this.$alert("文件导入成功", "提示", {
          confirmButtonText: "确定",
          type: "success"
        });
      } else {
        this.$alert(`文件导入失败${response.data.msg}`, "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
      }
      this.$refs.upload.clearFiles();
    },
    //导入路径
    beforeAvatarUpload(file) {
      // this.reviseForm.fileName=file.name
      const extension = file.name.split(".")[1] === "xls";
      const extension2 = file.name.split(".")[1] === "xlsx";
      if (!extension && !extension2) {
        this.$alert("上传文件只能为Excel文件", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
      }
      return extension || extension2;
    },
    beforeRemove(file, fileList) {
      this.$alert(
        `选择文件类型或大小不符，已移除 ${file.name}，请重新选择`,
        "提示",
        {
          confirmButtonText: "确定",
          type: "warning"
        }
      );
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    }
  }
};
</script>