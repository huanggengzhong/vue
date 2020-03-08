<!--回访任务导入 CQ-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-title">导入区</div>
    <div class="filter-container filter-params query-params">
      <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <el-col :span="6">
            <sct_CarBrand :sct_CarBrand="sBrand" ref="sct_CarBrand"></sct_CarBrand>
          </el-col>
          <el-col :span="6">
            <VisitBigType :VisitBigType="VBigType" ref="VisitBigType"></VisitBigType>
          </el-col>
          <el-col :span="6">
            <ReturnvisitSmallClass :ReturnvisitSmallClass="RSmallClass" ref="ReturnvisitSmallClass"></ReturnvisitSmallClass>
          </el-col>
          <el-col :span="6">
            <ReturnVisitTask :ReturnVisitTask="RVisitTask" ref="ReturnVisitTask"></ReturnVisitTask>
          </el-col>
        </el-row>

        <el-row>
          <el-col style="margin-left:-800px">
            <el-form label-position="right">
              <el-row>
                <el-col :span="24">
                  <el-upload
                    class="upload-demo"
                    ref="upload" 
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    :auto-upload="false"
                  >
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <el-button
                      style="margin-left: 10px;"
                      size="small"
                      type="success"
                      @click="handleSelect2"
                    >导入</el-button>
                    <el-button style="margin-left: 10px;" size="small" @click="1">模板下载</el-button>
                    <div
                      style="margin-left: 10px;"
                      slot="tip"
                      class="el-upload__tip"
                    >只能导入.xls/.xlsx文件</div>
                  </el-upload>
                </el-col>
              </el-row>
              <el-row></el-row>
            </el-form>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="filter-container filter-title">异常区</div>
    <Table :tabledatas="tabledatas"></Table>
  </div>
</template>
<script>
import Table from "@/components/crm/table/Table";
import sct_CarBrand from "@/components/crm/Select/Common/sct_CarBrand.vue";
import VisitBigType from "@/components/crm/Select/Clue/VisitBigType.vue";
import ReturnvisitSmallClass from "@/components/crm/Select/Clue/ReturnvisitSmallClass.vue";
import ReturnVisitTask from "@/components/crm/EjectWindows/ReturnVisitTask.vue";

import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name: "ReturnTaskIpmort",
  components: {
    Table,
    sct_CarBrand,
    VisitBigType,
    ReturnvisitSmallClass,
    ReturnVisitTask
  },
  data() {
    return {
      toggleParam: false,
      delayreason: "",
      tabledatas: {
        // 操作列
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [{ label: "错误内容", value: "" }],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: [
            "sct_CarBrand",
            "VisitBigType",
            "ReturnvisitSmallClass",
            "ReturnVisitTask"
          ],
          params: {
            sct_CarBrand: "",
            VisitBigType: "",
            ReturnvisitSmallClass: "",
            ReturnVisitTask: ""
          }
        }
      },

      //初始化value
      sBrand: {
        value: ""
      },
      VBigType: {
        value: ""
      },
      RSmallClass: {
        value: ""
      },
      RVisitTask: {
        value: ""
      }
    };
  },
  methods: {
    query: function() {
      this.queryObj.params.sct_CarBrand = this.$refs.sct_CarBrand.value;
      this.queryObj.params.VisitBigType = this.$refs.VisitBigType.value;
      this.queryObj.params.ReturnvisitSmallClass = this.$refs.ReturnvisitSmallClass.value;
      this.queryObj.params.ReturnVisitTask = this.$refs.ReturnVisitTask.value;
      this.$refs.Table.getDatas();
    },
    // reset: function() {
    //   this.$refs.dt_BuildMenuDates.reset();
    //   this.$refs.CloseCaseDate.reset();
    // },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    }
  }
};
</script>
<style>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col {
  margin-bottom: 0px;
}
</style>
