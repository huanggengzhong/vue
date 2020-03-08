<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button size="small" @click="fetchData()">查询</el-button>
      <el-button size="small" @click="addClick()">新增</el-button>
      <!--<el-button size="small" @click="modify()" :disabled="isModifyDisabled">修改</el-button>-->
      <el-button size="small" @click="publish()" :disabled="isReleaseDisabled">发布</el-button>
      <el-button size="small" @click="stop()" :disabled="isStopDisabled">停止</el-button>
      <el-button size="small" @click="deleteOne()" :disabled="isDeleteDisabled">删除</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-params" ref="conHeight">
      <el-form>
        <el-row :gutter="26">
          <el-col :span="22">
            <carBrand
              :code="recallQueryParams.dataInfo.carBrandCode"
              v-model="recallQueryParams.dataInfo.carBrandCode"
              @changeCode="getBrand"
            />
            <el-col :span="6">
              <label>召回专案编码</label>
              <el-input
                @focus="queryRecallCode()"
                size="small"
                v-model="recallQueryParams.dataInfo.recallCaseCode"
              />
            </el-col>
            <el-col :span="6">
              <label>主题</label>
              <el-input v-model="recallQueryParams.dataInfo.topic" />
            </el-col>
            <el-col :span="6">
              <label>召回专案状态</label>
              <el-select v-model="recallQueryParams.dataInfo.caseStatus" size="small" >
                <el-option label="全部" value=""></el-option>
                <el-option label="未发布" value="1"></el-option>
                <!--发布了才有停止跟不停止-->
                <el-option label="已发布 （未停止）" value="0"></el-option>
                <el-option label="（已发布）已停止" value="2"></el-option>
              </el-select>
            </el-col>
          </el-col>
        </el-row>
        <el-row :gutter="26">
          <el-col :span="22">
            <el-col :span="6">
              <label>召回专案类型</label>
              <el-select v-model="recallQueryParams.dataInfo.recallCaseType" size="small" >
                <el-option label="全部" value=""></el-option>
                <el-option label="专案" value="1"></el-option>
                <el-option label="召回" value="2"></el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <label>起止时间</label>
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
        </el-row>
      </el-form>
    </div>

     <chooseRecallDialog
      :recallDialogVisible="recallDialogVisible"
      @changeCode="getRecall"
      @close="closeDialog"
    ></chooseRecallDialog>

    <mix-table
      ref="queryRecallTable"
      :isShowSelect="true"
      :isDialog="true"
      :queryParams="recallQueryParams"
      :isMore=true
      :moreQueryParam="moreQueryParam"
      :moreQueryParamType="moreQueryParamType"
      :moreQueryParamValue="moreQueryParamValue"
      :dynamicTableCols="recallCols"
      :isPaging="true"
      @rowClick="queryRecallClick"
    ></mix-table>

    <div>
      <el-dialog
        :visible.sync="stopVisiable"
        center
        width="300px"
        style="height:200px;"
        :append-to-body="true"
      >
        <span>确定停止？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="stopVisiable = false">取 消</el-button>
          <el-button type="primary" @click="doStop()">确 定</el-button>
        </span>
      </el-dialog>
    </div>

    <div>
      <el-dialog
        :visible.sync="deleteVisiable"
        center
        width="300px"
        style="height:200px;"
        :append-to-body="true"
      >
        <span>确定删除？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="deleteVisiable = false">取 消</el-button>
          <el-button type="primary" @click="doDelete()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template> 


<script>
import carBrand from "@/components/org/carBrand/carBrand";
import { recallApi } from "@/api/graphQLApiList/se";
import mixTable from "@/components/basicComponent/mixTable";
import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";
import lableName from "@/components/lableName/index";
import { dorecallFindingDetail } from "@/api/se/guarantee/recall/recallFinding";
import { doseDbRecallCaseMutationSaveIsPublish,seDbRecallCaseQueryListForPage } from "@/api/se/guarantee/recall/recallSetting";
import chooseRecallDialog from "@/views/se/guarantee/recall/chooseRecallDialog";

export default {
  name: "recallSetting",
  mixins: [the_Height],
  components: {
    carBrand,
    mixTable,
    lableName,
    chooseRecallDialog
  },
  created() {},
  data() {
    return {
      date: "",
      recallDialogVisible:false,
      stopVisiable: false,
      deleteVisiable: false,
      isModifyDisabled: false,
      isReleaseDisabled: false,
      isStopDisabled: false,
      isDeleteDisabled: false,
      themeToStar: "主题",
      listQuery3: {
        recallCaseId: ""
      },
      listToSave: {
        dataInfo: {}
      },
      listToPublish: {
        dataInfo: {}
      },
      listToStop: {
        dataInfo: {}
      },
      listToDelete: {
        dataInfo: {}
      },
      recallCols: [
        { label: "车辆品牌", codeField: "carBrandCn" },
        { label: "召回专案编码", codeField: "recallCaseCode" },
        { label: "召回专案类型", codeField: "recallCaseTypeName" },
        { label: "录入时间", codeField: "operDate" },
        { label: "主题", codeField: "topic" },
        { label: "主凶件号", codeField: "pfpCode" },
        { label: "故障部位名称", codeField: "opratePlaceName" },
        { label: "状态", codeField: "caseStatus" }
      ],
      recallQueryParams: {
        APIUrl: recallApi.seDbRecallCaseQueryListForPage.APIUrl,
        InputType: recallApi.seDbRecallCaseQueryListForPage.InputType,
        ServiceCode: recallApi.seDbRecallCaseQueryListForPage.ServiceCode,
        dataInfo: {
          carBrandCode: "1",
          recallCaseCode: "",
          topic: "",
          caseStatus: "",
          recallCaseType: "",
          startOperDate: "",
          endOperDate: "",
          isLinkRecallCase: "",
          dlrId: this.$store.getters.orgInfo.DLR_ID,
        },
        apiQueryRow: [
          "recallCaseCode",
          "pfpCode",
          "topic",
          "carBrandCn",
          "carBrandCode",
          "operDate",
          "recallCaseType",
          "recallCaseTypeName",
          "opratePlaceName",
          "caseStatus",
          "isLinkRecallCase",
          "recallCaseId",
          "updateControlId"
        ]
      },
      moreQueryParam: 'flag',
      moreQueryParamType: '$flag',
      moreQueryParamValue: 'String',
      dataInfo: {
        carBrandCode: "",
        recallCaseCode: "",
        topic: "",
        caseStatus: "",
        recallCaseType: "",
        startOperDate: "",
        endOperDate: "",
        isLinkRecallCase: "",
        dlrId: this.$store.getters.orgInfo.DLR_ID
      },
    };
  },
  methods: {
    fetchData() {
      if (this.date == '') {
        this.$message({
          type: "warning",
          message: "请选择日期!"
        });
        return;
      }
      this.$refs.queryRecallTable.queryList();
    },
    addClick() {
      this.listQuery3.recallCaseId = "";
      this.$router.push({
        name: "recallSettingDetail",
        params: {
          the_data: this.listQuery3.recallCaseId
        }
      });
    },
    // modify() {
    //   if (this.checkNull()) {
    //     return;
    //   }
    //   this.listQuery3.recallCaseId = this.$refs.queryRecallTable.currentRow[0].recallCaseId;
    //   this.$router.push({
    //     name: "recallSettingDetail",
    //     params: {
    //       the_data: this.listQuery3.recallCaseId
    //     }
    //   });
    // },
    publish() {
      if (this.checkNull()) {
        return;
      }
      const that = this;
      that.listToPublish.dataInfo.recallCaseId =
        that.$refs.queryRecallTable.currentRow[0].recallCaseId;
      that.listToPublish.dataInfo.updateControlId =
        that.$refs.queryRecallTable.currentRow[0].updateControlId;
      that.listToPublish.dataInfo.isPublish = "1";

      doseDbRecallCaseMutationSaveIsPublish(that.listToPublish.dataInfo).then(
        response => {
          if (
            response.data.seDbRecallCaseMutationSaveIsPublish.result === "1"
          ) {
            this.$message({
              type: "success",
              message: "发布成功!"
            });
            this.fetchData();
          } else {
            this.$message({
              type: "error",
              message: "发布失败!"
            });
          }
        }
      );
    },
    stop() {
      if (this.checkNull()) {
        return;
      }
      this.stopVisiable = true;
    },
    doStop() {
      this.stopVisiable = false;
      const that = this;
      that.listToPublish.dataInfo.recallCaseId =
        that.$refs.queryRecallTable.currentRow[0].recallCaseId;
      that.listToPublish.dataInfo.updateControlId =
        that.$refs.queryRecallTable.currentRow[0].updateControlId;
      that.listToPublish.dataInfo.isPublish = "2";

      doseDbRecallCaseMutationSaveIsPublish(that.listToPublish.dataInfo).then(
        response => {
          if (
            response.data.seDbRecallCaseMutationSaveIsPublish.result === "1"
          ) {
            this.$message({
              type: "success",
              message: "停止成功!"
            });
            this.fetchData();
          } else {
            this.$message({
              type: "error",
              message: "停止失败!"
            });
          }
        }
      );
    },
    deleteOne() {
      if (this.checkNull()) {
        return;
      }
      this.deleteVisiable = true;
    },
    doDelete() {
      this.deleteVisiable = false;
      const that = this;
      that.listToPublish.dataInfo.recallCaseId =
        that.$refs.queryRecallTable.currentRow[0].recallCaseId;
      that.listToPublish.dataInfo.updateControlId =
        that.$refs.queryRecallTable.currentRow[0].updateControlId;
      that.listToPublish.dataInfo.isPublish = "3";

      doseDbRecallCaseMutationSaveIsPublish(that.listToPublish.dataInfo).then(
        response => {
          if (
            response.data.seDbRecallCaseMutationSaveIsPublish.result === "1"
          ) {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.fetchData();
          } else {
            this.$message({
              type: "error",
              message: "删除失败!"
            });
          }
        }
      );
    },
    reset() {
      (this.recallQueryParams.dataInfo.carBrandCode = "1"),
      (this.recallQueryParams.dataInfo.recallCaseCode = ""),
      (this.recallQueryParams.dataInfo.topic = ""),
      (this.recallQueryParams.dataInfo.caseStatus = "0"),
      (this.recallQueryParams.dataInfo.recallCaseType = "0"),
      (this.recallQueryParams.dataInfo.startOperDate = ""),
      (this.recallQueryParams.dataInfo.endOperDate = ""),
      (this.date = "");
    },
    queryRecallCode() {
      this.recallDialogVisible = true;
    },
    closeDialog() {
      this.recallDialogVisible = false;
    },
    getRecall(val) {
      this.recallQueryParams.dataInfo.recallCaseCode = val[0].recallCaseCode;
      this.recallDialogVisible = false
    },
    getBrand() {},
    getDate(val) {
      (this.recallQueryParams.dataInfo.startOperDate = val[0]),
      (this.recallQueryParams.dataInfo.endOperDate = val[1]);
    },
    //单击表格行跳转到详情页
    queryRecallClick() {
      this.$router.push({
        name: "recallSettingDetail",
        params: {
          the_data: this.listQuery3.recallCaseId
        }
      });
    },

    checkNull() {
      //判断是否有记录被选中
      if (this.$refs.queryRecallTable.currentRow[0] == null) {
        this.$message({
          type: "error",
          message: "请先选择一条记录!"
        });
        return true;
      }
      return false;
    }
    //表格自适应
    // makeHeight(mh) {
    //   var str = this.$refs.queryRecallTable.$refs.paginationHeight.$el
    //     .offsetHeight;
    //   var str1 = this.$refs.queryRecallTable.$refs.resultTitleHeight
    //     .offsetHeight;
    //   // 减去margin-top/bottom值
    //   if (!this.$utils.isIE() || isResize) {
    //     this.tableHeight = mh - this.tableMarginHeight - str - str1 - 300;
    //     this.$refs.queryRecallTable.tableHeight = this.tableHeight;
    //   } else {
    //     // IE浏览器需要减去额外高度
    //     this.tableHeight =
    //       mh - this.tableMarginHeight - this.ieHeight - str - str1 - 300;
    //     this.$refs.queryRecallTable.tableHeight = this.tableHeight;
    //   }
    //   console.log("make Height")
    // }
  }
};
</script>
