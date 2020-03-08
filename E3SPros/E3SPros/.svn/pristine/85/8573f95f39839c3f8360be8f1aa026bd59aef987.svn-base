<!--
* description: 试乘试驾管理-导入
* author: zouzx
* createdDate: 2019-10-10
-->
<template>
  <section>
    <el-dialog
      class="editsettingPrice"
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="700px"
    >
      <div class="filter-container filter-params-crm">
        <el-row style="text-align:left">
            <el-upload class="upload-demo upload"
              style="text-align:left" ref="upload" action :http-request="handleChange" :data="uploadData" :headers="uploadHeaders" name="excelFile" :on-remove="handleRemove" :file-list="fileList" :on-error="uploadFalse" :auto-upload="true" :before-upload="beforeAvatarUpload" :before-remove="beforeRemove" :on-exceed="handleExceed" :on-change="handFileListChange" :limit="1" :show-file-list="true" list-type="text">
              <el-button size="small" slot="trigger">导入</el-button>
              <!-- <el-button size="small" type="text" @click="1">模板下载</el-button> -->
              <a @click.prevent="downloadItem('../crmTestDrivingManage/试乘试驾导入模板.xlsx')"  href="../crmTestDrivingManage/试乘试驾导入模板.xlsx" target="_blank" download>模板下载</a>
              <span style="color:red">只能导入xls/xlsx文件</span>
            </el-upload>
        </el-row>
      </div>
      <!-- <div
        slot="footer"
        class="dialog-footer"
      >
      </div> -->
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import Axios from 'axios'
export default {
  name: "orghistory",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  props: {
    DRPopupsVisible: { type: Boolean, default: false },
    // 弹窗状态（add/edit/view）
    // 新增、编辑弹窗Key
    DRPopupsKey: "",
    // 新增、编辑弹窗状态（add/edit/view）
    DRPopupsState: "",
    // 弹窗状态（add/edit/view）
    popupsState: ""
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: crmApis.csDbNodeGroupQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.enable(1),
          text: "保存"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 内饰色
        {
          compKey: "compKey1",
          labelName: "评价类型",
          codeField: "carBrandCode",
          isRequire: true,
          lookuptype: "VE0059",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        // 车身颜色
        {
          compKey: "compKey2",
          labelName: "评价项",
          codeField: "",
          isRequire: true,
          lookuptype: "VE0059",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "评价结果",
          codeField: "",
          isRequire: true,
          lookuptype: "VE0059",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "备注",
          codeField: "",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "",
          label: "评价类型",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "评价类型",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "评价结果",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "评价时间",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "评价人",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "备注",
          width: null,
          align: "center"
        }
      ],
      // 标题
      textMap: {
        edit: "导入"
      },
      //表单查询数据
      formField: {
        carConfigId: "",
        carSeriesId: "",
        dlrId: "",
        carBrandCode: "",
        validBeginDate: "",
        validEndDate: ""
      },
      isUseRowData: true,
      uploadData: {}, //上传时附带的额外参数
      fileList: [],
      uploadHeaders: {
        Authorization: this.$store.getters.token
      }
    };
  },
  created() {
    // 赋值formField
    if (this.popupsState === "edit") {
        debugger
      if (this.isUseRowData) {
        for (var key in this.formField) {
          if (this.$attrs.dynamicEditRowData[key]) {
            this.formField[key] = this.$attrs.dynamicEditRowData[key];
          } else {
            this.formField[key] = "";
          }
        }
      }
    }
  },
  methods: {
    downloadItem (url) {
      debugger
      Axios.get(url, { responseType: 'blob' })
        .then(({ data }) => {
          debugger
          // 为了简单起见这里blob的mime类型 固定写死了
          let blob = new Blob([data], { type: 'application/vnd.ms-excel' })
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = url.split('/').pop()
          link.click()
        .catch(error => {
          console.error(error)
        })
      })
    },
    // 处理文件选择器改变事件
    handleChange(param) {
      var url = this.uploadUrl(); // API根据不同功能url不同，请配置到对应模块配置
      var that = this;
      this.$requestImport(url, param, function(response) {
        console.info(response);
        that.uploadSuccess(response);
      });
    },
    uploadUrl: function() {
      return (
        crmApis.resolve.APIUrl + config.cH + "v=" + crmApis.resolve.ServiceCode
      );
    },
    uploadSuccess(response) {
      if (
        response.result == "1" &&
        response.data.rows != null &&
        response.data.rows.length > 0
      ) {
        var tempList = response.data.rows;

        var implistTemp = [];
        console.log("uploadSuccess");
        var isDataNull = false;
        // tempList.forEach(row => {
        //   if (
        //     isDataNull == true ||
        //     row.可欠拨 == null ||
        //     row.可欠拨 == "" ||
        //     row.备件品牌 == null ||
        //     row.备件品牌 == "" ||
        //     row.备件号 == null ||
        //     row.备件号 == "" ||
        //     row.备件名称 == null ||
        //     row.备件名称 == "" ||
        //     row.订货数 == null ||
        //     row.订货数 == "" ||
        //     row.SNP == null ||
        //     row.SNP == "" ||
        //     row.单价 == null ||
        //     row.单价 == "" ||
        //     row.库存数 == null ||
        //     row.库存数 == ""
        //   ) {
        //     isDataNull = true;
        //     return;
        //   }
        //   var newRow = {
        //     isCanLack: row.可欠拨,
        //     partBrandName: row.备件品牌,
        //     partNo: row.备件号,
        //     partName: row.备件名称,
        //     purQty: row.订货数,
        //     SNP: row.SNP,
        //     dlrPrice: row.单价,
        //     storeQty: row.库存数
        //   };
        //   implistTemp.push(newRow);
        // });
        // if (isDataNull) {
        //   this.$alert("Excel每行数据不能为空，请检查", "提示", {
        //     confirmButtonText: "确定",
        //     type: "warning"
        //   });
        //   this.$refs.upload.clearFiles();
        //   return;
        // }
        this.listQuery.listDetail = implistTemp;
        this.$alert("文件导入成功", "提示", {
          confirmButtonText: "确定",
          type: "success"
        });
      } else {
        this.$alert("文件导入失败", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
      }
      this.$refs.upload.clearFiles();
    },
    handleRemove(file, fileList) {},
    uploadFalse(response, file, fileList) {
      this.$alert("文件上传失败", "提示", {
        confirmButtonText: "确定",
        type: "warning"
      });
    },
    beforeAvatarUpload(file) {
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
    beforeRemove(file, fileList) {},
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    handFileListChange(file, fileList) {}
  }
};
</script>
<style scoped>
</style>

