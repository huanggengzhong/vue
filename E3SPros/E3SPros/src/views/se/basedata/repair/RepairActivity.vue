<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="queryFindALL()">查询</el-button>
      <el-button size="small" @click="deletOrTermination(1)">删除</el-button>
      <el-button size="small" @click="deletOrTermination()">终止</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>
    <div class="filter-container filter-params">
      <el-row>
        <el-col :span="6">
          <label>活动编码</label>
          <el-input placeholder="请输入" v-model="queryParams1.dataInfo.repairActivityId" size="small"></el-input>
        </el-col>
        <el-col :span="6">
          <label>活动名称</label>
          <el-input
            placeholder="请输入"
            size="small"
            v-model="queryParams1.dataInfo.repairActivityName"
          ></el-input>
        </el-col>
        <el-col :span="6">
          <label>活动时间</label>
          <el-date-picker
            type="daterange"
            v-model="querytime"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd HH:mm:ss"
            size="small"
          ></el-date-picker>
        </el-col>
        <el-col :span="6">
          <label>状态</label>
          <el-select placeholder="请选择" v-model="queryParams1.dataInfo.actionState">
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
      @rowClick="rowClick"
      :onetableHeight = 250
    />
    <el-tabs type="border-card" tab-position="right">
      <el-tab-pane label="活动信息">
        <div class="filter-container filter-button">
          <el-button size="small" @click="saveActivityInformation()">保存</el-button>
          <el-button size="small" @click="removeActivityInformation()">取消</el-button>
        </div>
        <div class="filter-container filter-params">
          <el-form class="demo-ruleForm" :model="activityInformation" :rules="rules" ref="activityInformation"  :inline-message="true">
            <el-row>
              <el-col :span="6">
                <el-form-item label="活动编码" >
                  <el-input
                    size="small"
                    v-model="activityInformation.actionCode"
                    placeholder="请输入内容"
                    disabled="true"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="活动名称" prop="repairActivityName">
                  <el-input
                    size="small"
                    v-model="activityInformation.repairActivityName"
                    placeholder="请输入内容"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="活动类型" prop="repairActivityName">
                  <el-select placeholder="请选择" v-model="activityInformation.actionTypeCode">
                    <el-option
                      v-for="item in refindOption"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="活动日期" prop="Date1">
                  <el-date-picker
                    type="daterange"
                    range-separator="-"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    size="small"
                    v-model="Date1"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="纪念日类型">
                  <el-select
                    placeholder="请选择"
                    v-model="activityInformation.dayType"
                    @change="chagedayType"
                  >
                    <el-option
                      v-for="item in memoryOption"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="纪念日日期">
                  <el-date-picker
                    type="daterange"
                    range-separator="-"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    size="small"
                    v-model="Date2"
                    :disabled="showDate2"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-checkbox v-model="activityInformation.isPartCustDesc">协议客户不参与</el-checkbox>
              </el-col>
              <el-col :span="12">
                <el-form-item label="活动描述">
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="activityInformation.actionDesc"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="活动车型" :disabled="Isshow">
        <div class="filter-container filter-button">
          <el-button size="small" @click="openAddCarType()">新增</el-button>
          <el-button size="small" @click="saveCarType()">保存</el-button>
          <el-button size="small" @click="deletCarType()">删除</el-button>
        </div>
        <mix-table
          ref="ActivityCartype"
          :queryParams="queryCarParams"
          :dynamicTableCols="ActivityCartypecols"
          :isShowSelect="true"
          :isPaging="false"
          :isDialog="true"
          @rowClick="rowClickCarType"
          :onetableHeight = 180
        />
      </el-tab-pane>
      <el-tab-pane label="工时优惠" :disabled="Isshow">
        <div class="filter-container filter-button">
          <el-button size="small" @click="showChooseWiData()">新增</el-button>
          <el-button size="small" @click="saveWiper()">保存</el-button>
          <el-button size="small" @click="deletWiPre()">删除</el-button>
        </div>
        <mix-table
          ref="wiPrefer"
          :queryParams="queryWiPreferParams"
          :dynamicTableCols="wiPreferCols"
          :isShowSelect="true"
          :isPaging="false"
          :isDialog="true"
          @rowClick="rowClickWiPrefer"
          :onetableHeight = 180
        />
      </el-tab-pane>
      <el-tab-pane label="备件优惠" :disabled="Isshow">
        <div class="filter-container filter-button">
          <el-button type="text" size="small">保养模板文件下载</el-button>
          <el-button size="small" @click="addParts()">新增</el-button>
          <el-button size="small" @click="savePartFavo()">保存</el-button>
          <el-button size="small" @click="deletPartFavo()">删除</el-button>
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
            <el-button size="small">批量导入</el-button>
          </el-upload>
        </div>
        <mix-table
          ref="partFavour"
          :queryParams="queryPartFavourParams"
          :dynamicTableCols="partFavourCols"
          :isShowSelect="true"
          :isPaging="false"
          :isDialog="true"
          @rowClick="rowClickPartFavour"
          :onetableHeight = 180
        />
      </el-tab-pane>
      <el-tab-pane label="赠送" :disabled="Isshow">
        <div class="filter-container filter-button">
          <el-button size="small" @click="openAddGive()">新增</el-button>
          <el-button size="small" @click="saveGive()">保存</el-button>
          <el-button size="small" @click="deletGive()">删除</el-button>
        </div>
        <mix-table
          ref="actionGive"
          :queryParams="queryActionGiveParams"
          :dynamicTableCols="actionGiveCols"
          :isShowSelect="true"
          :isPaging="false"
          :isDialog="true"
          @rowClick="rowClickActionGive"
          :onetableHeight = 180
        />
      </el-tab-pane>
    </el-tabs>
    <!--选择车型弹框-->
    <CarTypeModal :isMul="true" ref="CarTypeModal" @changeCode="getCarTypeCode" />
    <!--选择备件弹框-->
    <paChoosePart
      :paChoosePartVisible="paChoosePartVisible"
      :title="1"
      @seChoosePartData="getParts"
      @close="closePartsChoose"
    ></paChoosePart>

    <!--赠送选择备件弹框-->
    <paChoosePart
      :paChoosePartVisible="GivepaChoosePartVisible"
      :title="1"
      @seChoosePartData="getGiveParts"
      @close="closePartsChoose1"
    ></paChoosePart>

    <!--工时选中弹窗-->
    <seChooseWiSelect
      ref="seChooseWiSelect"
      :seChooseWiSelectVisibles="seChooseWiSelectVisibles"
      :title="1"
      @seChooseWiData="getChooseWiData"
      @close="closeChooseWiData"
    ></seChooseWiSelect>
  </div>
</template>
<script>
import { seApis } from "@/api/graphQLApiList/se";
import { orgApis } from "@/api/graphQLApiList/org";
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import mixTable from "@/components/basicComponent/mixTable";
import CarTypeModal from "@/components/se/CarTypeModal/CarTypeModal";
import paChoosePart from "@/components/se/paChoosePart";
import seChooseWiSelect from "@/components/se/seChooseWiSelect";
import config from "@/utils/config";
import {
  seDbActionMutationDelete,
  seDbActionMutationStop,
  seDbActionMutationSave,
  seDbActionCartypeMutationSave,
  seDbActionPartMutationSave,
  seDbActionPersentMutationSave,
  seDbActionWiMutationSave
} from "@/api/se/basedata/repair/RepairActivity";

export default {
  components: {
    mixTable,
    CarTypeModal,
    paChoosePart,
    seChooseWiSelect,
    config
  },
  created() {},
  watch: {
    chuange1: function(val, val1) {
      if (val != "") {
        this.showDate2 = false;
      } else {
        this.showDate2 = true;
      }
    }
  },
  data() {
    return {
      show: true,
      pageSize: 10,
      pageIndex: 1,
      dialogParamVisible: false,
      paChoosePartVisible: false,
      GivepaChoosePartVisible: false,
      seChooseWiSelectVisibles: false,
      Isshow: true,
      showDate2: true,
      chuange1: "",
      list: {},
      querytime: [],
      fileList: [],
      uploadHeaders: {
        Authorization: this.$store.getters.token
      },
      Date1: [],
      Date2: [],
      paramA: [],
      deletCarTypeNum: -1,
      deletPartFavour: -1,
      deletActionGive: -1,
      deletWiPrefer: -1,
      //协议公司保存校验
      rules: {
        repairActivityName: [
          { required: true, message: "请输入活动名称", trigger: "blur" }
        ],
        repairActivityName: [
          { required: true, message: "请选择活动类型", trigger: "change" }
        ],
        Date1: [
          { required: true, message: "请选择活动日期", trigger: "change" }
        ]
      },
      queryParams1: {
        APIUrl: seApis.seDbActionQueryFindAll.APIUrl,
        InputType: seApis.seDbActionQueryFindAll.InputType,
        ServiceCode: seApis.seDbActionQueryFindAll.ServiceCode,
        dataInfo: {
          repairActivityId: "",
          repairActivityName: "",
          beginDate: "",
          endDate: "",
          actionState: ""
        },
        apiQueryRow: [
          "dlrCode",
          "actionCode",
          "repairActivityName",
          "favoType",
          "actionTypeCode",
          "stopActiveDate",
          "dayBegDate",
          "dayEndDate",
          "endDate",
          "beginDate",
          "actionState",
          "repairActivityId",
          "dayType",
          "isPartCustDesc",
          "actionDesc",
          "isEnable",
          "updateControlId",
          "dlrId",
          "carBrandCode",
          "isSystem"
        ]
      },
      queryCarParams: {
        APIUrl: seApis.seDbActionCartypeQueryFindAll.APIUrl,
        InputType: seApis.seDbActionCartypeQueryFindAll.InputType,
        ServiceCode: seApis.seDbActionCartypeQueryFindAll.ServiceCode,
        dataInfo: {
          repairActivityId: ""
        },
        apiQueryRow: [
          "actionCartypeId",
          "carSeriesCode",
          "carTypeCode",
          "carBrandCode",
          "carBrandCn",
          "carSeriesCn",
          "isSystem",
          "isEnable",
          "updateControlId",
          "repairActivityId"
        ]
      },
      queryPartFavourParams: {
        APIUrl: seApis.seDbActionPartQueryFindAll.APIUrl,
        InputType: seApis.seDbActionPartQueryFindAll.InputType,
        ServiceCode: seApis.seDbActionPartQueryFindAll.ServiceCode,
        dataInfo: {
          repairActivityId: ""
        },
        apiQueryRow: [
          "actionPartId",
          "dlrCode",
          "favoType",
          "partName",
          "partNo",
          "partFavourType",
          "disCount",
          "isEnable",
          "updateControlId",
          "dlrId",
          "repairActivityId",
          "isSystem"
        ]
      },
      queryActionGiveParams: {
        APIUrl: seApis.seDbActionPersentQueryFindAll.APIUrl,
        InputType: seApis.seDbActionPersentQueryFindAll.InputType,
        ServiceCode: seApis.seDbActionPersentQueryFindAll.ServiceCode,
        dataInfo: {
          repairActivityId: ""
        },
        apiQueryRow: [
          "actionGiveId",
          "dlrCode",
          "leastAmount",
          "partName",
          "giveNumber",
          "partNo",
          "oneOfManay",
          "isEnable",
          "updateControlId",
          "dlrId",
          "repairActivityId",
          "isSystem"
        ]
      },
      queryWiPreferParams: {
        APIUrl: seApis.seDbActionWiQueryFindAll.APIUrl,
        InputType: seApis.seDbActionWiQueryFindAll.InputType,
        ServiceCode: seApis.seDbActionWiQueryFindAll.ServiceCode,
        dataInfo: {
          repairActivityId: ""
        },
        apiQueryRow: [
          "actionWiId",
          "dlrCode",
          "favoType",
          "isSystem",
          "repairContent",
          "wiPreferAmount",
          "oprateCode",
          "discount",
          "isEnable",
          "updateControlId",
          "dlrId",
          "repairActivityId"
        ]
      },
      cols: [
        { label: "活动编码", codeField: "actionCode" },
        { label: "活动名称", codeField: "repairActivityName" },
        { label: "活动类型", codeField: "actionTypeCode" },
        { label: "状态", codeField: "actionState" },
        { label: "活动开始日期", codeField: "beginDate" },
        { label: "活动结束日期", codeField: "endDate" },
        { label: "纪念日期类型", codeField: "dayType" },
        { label: "开始纪念日", codeField: "dayBegDate" },
        { label: "结束纪念日", codeField: "dayEndDate" },
        { label: "协议客户不参与", codeField: "isPartCustDesc" },
        { label: "终止日期", codeField: "stopActiveDate" }
      ],
      ActivityCartypecols: [
        { label: "车辆品牌", codeField: "carBrandCn" },
        { label: "车系", codeField: "carSeriesCn" },
        { label: "车型编码", codeField: "carTypeCode" }
      ],
      wiPreferCols: [
        { label: "工时编码", codeField: "oprateCode" },
        { label: "工时名称", codeField: "repairContent" },
        {
          label: "工时折扣（%）",
          codeField: "discount",
          isEdit: true,
          comps: {
            type: "inputNum"
          }
        }
      ],
      partFavourCols: [
        { label: "备件编码", codeField: "partNo" },
        { label: "备件名称", codeField: "partName" },
        {
          label: "备件折扣（%）",
          codeField: "disCount",
          isEdit: true,
          comps: {
            type: "inputNum"
          }
        }
      ],
      actionGiveCols: [
        { label: "备件编号", codeField: "partNo" },
        { label: "备件名称", codeField: "partName" },
        {
          label: "多选一",
          codeField: "oneOfManay",
          isEdit: true,
          comps: {
            type: "checkBox"
          }
        }
      ],
      carTypesaveParam: {
        carSeriesCode: "",
        carTypeCode: "",
        carBrandCode: "",
        repairActivityId: ""
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      lookupVari: [
        "oemCode",
        "groupCode",
        "lookupTypeCode",
        "lookupValueCode",
        "lookupValueName"
      ],
      statusOption: [],
      refindOption: [],
      memoryOption: [],
      //活动设置参数
      activityInformation: {
        dlrCode: "",
        actionCode: "",
        repairActivityName: "",
        favoType: "1",
        actionTypeCode: "",
        stopActiveDate: "",
        dayBegDate: "",
        dayEndDate: "",
        endDate: "",
        beginDate: "",
        actionState: "",
        repairActivityId: "",
        dayType: "",
        isPartCustDesc: true,
        actionDesc: "",
        isEnable: "",
        updateControlId: "",
        dlrId: "",
        carBrandCode: ""
      }
    };
  },
  created() {
    this.initFetchData();
  },
  methods: {
    initFetchData(page) {
      const that = this;
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfoA: " +
          orgApis.mdsLookupValueQueryByPage.InputType +
          ", $dataInfoB: " +
          orgApis.mdsLookupValueQueryByPage.InputType +
          ", $dataInfoC: " +
          orgApis.mdsLookupValueQueryByPage.InputType +
          ")",
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
          },
          {
            apiServiceCode: orgApis.mdsLookupValueQueryByPage.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfoB, pageIndex: $pageIndex, pageSize: $pageSize)",
            apiQueryRow: that.lookupVari
          },
          {
            apiServiceCode: orgApis.mdsLookupValueQueryByPage.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfoC, pageIndex: $pageIndex, pageSize: $pageSize)",
            apiQueryRow: that.lookupVari
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.pageSize,
          pageIndex: that.pageIndex,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfoA: {
            isEnable: "1",
            lookupTypeCode: "SE0058" //是否
          },
          dataInfoB: {
            isEnable: "1",
            lookupTypeCode: "SE0059" //是否启用
          },
          dataInfoC: {
            isEnable: "1",
            lookupTypeCode: "SE0180" //是否启用
          }
        }
      };
      //转换了中台请求格式数据
      let paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.result === "1") {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          for (let i in response.data) {
            switch (i) {
              case "A":
                var temp_array = [];
                response.data.A.rows.forEach(row => {
                  temp_array.push({
                    value: row.lookupValueCode,
                    label: row.lookupValueName
                  });
                });
                that.statusOption = temp_array;
                console.log(JSON.stringify(that.statusOption));
                break;
              case "B":
                var temp_array = [];
                response.data.B.rows.forEach(row => {
                  temp_array.push({
                    value: row.lookupValueCode,
                    label: row.lookupValueName
                  });
                });
                that.refindOption = temp_array;
                console.log(JSON.stringify(that.statusOption));
                break;
              case "C":
                var temp_array = [];
                response.data.C.rows.forEach(row => {
                  temp_array.push({
                    value: row.lookupValueCode,
                    label: row.lookupValueName
                  });
                });
                that.memoryOption = temp_array;
                console.log(JSON.stringify(that.memoryOption));
                break;
            }
          }
          that.listLoading = false;
        } else {
          this.$message({
            message: "查询失败：" + response.msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    },
    //关闭详细弹窗
    closeDialog() {},
    queryFindALL() {
      //如果查询条件活动时间不为空则把活动时间赋值到查询参数queryFindAllList中
      if (this.querytime.length != 0) {
        this.queryParams1.dataInfo.beginDate = this.querytime[0];
        this.queryParams1.dataInfo.endDate = this.querytime[1];
      }
      this.$refs.tableList.queryList();
    },
    //主表删除与终止  当X为1时为删除
    deletOrTermination(x) {
      let obj = {};
      //判断是否选中行
      if (this.$refs.tableList.currentRow == "") {
        this.$alert("请选择数据", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return false;
      }
      //主表删除操作
      if (x == 1) {
        //把取到的行数据给删除数据赋值
        obj.repairActivityId = this.$refs.tableList.currentRow[0].repairActivityId;
        obj.updateControlId = this.$refs.tableList.currentRow[0].updateControlId;
        seDbActionMutationDelete(obj).then(response => {
          if (
            response.data[seApis.seDbActionMutationDelete.ServiceCode].result ==
            "1"
          ) {
            this.$message({
              message: "删除成功",
              type: "success"
            });
            this.$refs.tableList.queryList();
            this.removeActivityInformation();
          } else {
            this.$message({
              message:
                "删除失败：" +
                response.data[seApis.seDbActionMutationDelete.ServiceCode].msg,
              type: "warn",
              uration: 2000
            });
            this.$refs.tableList.queryList();
            this.removeActivityInformation();
          }
        });
      }
      //主表终止操作
      else {
        obj.repairActivityId = this.$refs.tableList.currentRow[0].repairActivityId;
        obj.updateControlId = this.$refs.tableList.currentRow[0].updateControlId;
        obj.actionState = this.$refs.tableList.currentRow[0].actionState;
        seDbActionMutationStop(obj).then(response => {
          if (
            response.data[seApis.seDbActionMutationStop.ServiceCode].result ==
            "1"
          ) {
            this.$message({
              message: "终止成功",
              type: "success"
            });
            this.$refs.tableList.queryList();
            this.removeActivityInformation();
          } else {
            this.$message({
              message:
                "终止失败：" +
                response.data[seApis.seDbActionMutationStop.ServiceCode].msg,
              type: "warn",
              uration: 2000
            });
            this.$refs.tableList.queryList();
            this.removeActivityInformation();
          }
        });
      }
    },
    //活动信息保存
    saveActivityInformation() {
      this.$refs['activityInformation'].validate((valid) => {
      if (valid) {
        if (this.activityInformation.dayType != "") {
          this.activityInformation.dayBegDate = this.Date2[0];
          this.activityInformation.dayEndDate = this.Date2[1];
        }
        this.activityInformation.beginDate = this.Date1[0];
        this.activityInformation.endDate = this.Date1[1];
        seDbActionMutationSave(this.activityInformation).then(response => {
          if (
            response.data[seApis.seDbActionMutationSave.ServiceCode].result == "1"
          ) {
            this.$message({
              message: "保存成功",
              type: "success"
            });
            this.removeActivityInformation();
          } else {
            this.$message({
              message:
                "保存失败：" +
                response.data[seApis.seDbActionMutationSave.ServiceCode].msg,
              type: "warn",
              uration: 2000
            });
          }
        });
      }})
      
    },
    //点击主表信息加载页签的数据
    rowClick(val) {
      //拿到选中行的主键ID加载页签数据
      this.Isshow = false;
      let obj = {};
      obj = val[0].repairActivityId;
      //活动设置赋值给表单---------------------------------------
      this.activityInformation.dlrCode = val[0].dlrCode;
      this.activityInformation.actionCode = val[0].actionCode;
      this.activityInformation.repairActivityName = val[0].repairActivityName;
      this.activityInformation.favoType = val[0].favoType;
      this.activityInformation.actionTypeCode = val[0].actionTypeCode;
      this.activityInformation.stopActiveDate = val[0].stopActiveDate;
      this.activityInformation.endDate = val[0].endDate;
      this.activityInformation.beginDate = val[0].beginDate;
      //活动日期绑定date1 当活动日期开始日期不为空时 给活动日期赋值
      if (val[0].beginDate != "") {
        this.Date1[0] = val[0].beginDate;
        this.Date1[1] = val[0].endDate;
      }
      this.activityInformation.actionState = val[0].actionState;
      this.activityInformation.repairActivityId = val[0].repairActivityId;
      this.activityInformation.dayType = val[0].dayType;
      // 当纪念日期类型不为空时 给纪念日期赋值
      if (this.activityInformation.dayType != "") {
        this.activityInformation.dayBegDate = val[0].dayBegDate;
        this.activityInformation.dayEndDate = val[0].dayEndDate;
        this.Date2[0] = val[0].dayBegDate;
        this.Date2[1] = val[0].dayEndDate;
        this.showDate2 = false;
      }
      this.activityInformation.isPartCustDesc = val[0].isPartCustDesc;
      this.activityInformation.actionDesc = val[0].actionDesc;
      this.activityInformation.isEnable = val[0].isEnable;
      this.activityInformation.updateControlId = val[0].updateControlId;
      this.activityInformation.dlrId = val[0].dlrId;
      this.activityInformation.carBrandCode = val[0].carBrandCode;
      //----------------------------------------------------
      //活动车型表格查询参数赋值后 调用queryList方法  查询活动车型
      this.queryCarParams.dataInfo.repairActivityId = val[0].repairActivityId;
      this.$refs.ActivityCartype.queryList();
      //同上 初始化详细查询备件优惠
      this.queryPartFavourParams.dataInfo.repairActivityId =
        val[0].repairActivityId;
      this.$refs.partFavour.queryList();
      //同上 初始化详细查询赠送
      this.queryActionGiveParams.dataInfo.repairActivityId =
        val[0].repairActivityId;
      this.$refs.actionGive.queryList();
      // 同上  初始化详细 查询工时
      this.queryWiPreferParams.dataInfo.repairActivityId =
        val[0].repairActivityId;
      this.$refs.wiPrefer.queryList();
    },
    //活动信息取消按钮
    removeActivityInformation() {
      this.activityInformation.dlrCode = "";
      this.activityInformation.actionCode = "";
      this.activityInformation.repairActivityName = "";
      this.activityInformation.favoType = "1";
      this.activityInformation.actionTypeCode = "";
      this.activityInformation.stopActiveDate = "";
      this.activityInformation.dayBegDate = "";
      this.activityInformation.dayEndDate = "";
      this.activityInformation.endDate = "";
      this.activityInformation.beginDate = "";
      this.activityInformation.actionState = "";
      this.activityInformation.repairActivityId = "";
      this.activityInformation.dayType = "";
      this.activityInformation.isPartCustDesc = true;
      this.activityInformation.actionDesc = "";
      this.activityInformation.isEnable = "";
      this.activityInformation.updateControlId = "";
      this.activityInformation.dlrId = "";
      this.activityInformation.carBrandCode = "";
      //由于使用的双日期 需要再清除绑定的model 数据
      this.Date1 = [];
      this.Date2 = [];
      //清除4个表的数据
      this.$refs.ActivityCartype.tableData = [];
      this.$refs.partFavour.tableData = [];
      this.$refs.actionGive.tableData = [];
      this.$refs.wiPrefer.tableData = [];
      this.Isshow = true;
      this.showDate2 = true; 
      this.$nextTick(()=>{

      this.$refs['activityInformation'].clearValidate();
      })
    },
    //查询车型输入框 获取车型弹窗返回的数据
    getCarTypeCode(
      code,
      text,
      codeField,
      carBrandCn,
      carTypeCode,
      comType,
      popupsKey,
      rows
    ) {
      var selectCarTypeRow = {};
      for (var n = 0; n < rows.length; n++) {
        let flag = true;
        if (this.$refs.ActivityCartype.tableData.length != null) {
          for (
            var m = 0;
            m < this.$refs.ActivityCartype.tableData.length;
            m++
          ) {
            if (
              this.$refs.ActivityCartype.tableData[m].carBrandCode ==
                rows[n].carBrandCode &&
              this.$refs.ActivityCartype.tableData[m].carTypeCode ==
                rows[n].carTypeCode
            )
              flag = false;
          }
        }
        if (flag) {
          selectCarTypeRow.carBrandCode = rows[n].carBrandCode;
          selectCarTypeRow.carBrandCn = rows[n].carBrandCn;
          selectCarTypeRow.carSeriesCode = rows[n].carSeriesCode;
          selectCarTypeRow.carSeriesCn = rows[n].carSeriesCn;
          selectCarTypeRow.carTypeCode = rows[n].carTypeCode;
          //selectCarTypeRow.carTypeCn = rows[n].carTypeCn;
          this.$refs.ActivityCartype.tableData.push(
            JSON.parse(JSON.stringify(selectCarTypeRow))
          );
        }
      }
    },
    //活动车型新增按钮，打开车型选择弹窗
    openAddCarType() {
      this.$refs.CarTypeModal.open();
    },
    //活动车型保存按钮
    saveCarType() {
      let obj = this.$refs.ActivityCartype.tableData;
      this.carTypesaveParam.carSeriesCode = "";
      this.carTypesaveParam.carTypeCode = "";
      this.carTypesaveParam.carBrandCode = "";
      this.carTypesaveParam.repairActivityId = "";
      for (var a = 0; a < obj.length; a++) {
        this.carTypesaveParam.carSeriesCode = obj[a].carSeriesCode;
        this.carTypesaveParam.carTypeCode = obj[a].carTypeCode;
        this.carTypesaveParam.carBrandCode = obj[a].carBrandCode;
        this.carTypesaveParam.repairActivityId = this.activityInformation.repairActivityId;
        this.paramA.push(this.carTypesaveParam);
      }
      seDbActionCartypeMutationSave(this.paramA).then(response => {
        if (
          response.data[seApis.seDbActionCartypeMutationSave.ServiceCode]
            .result == "1"
        ) {
          this.$message({
            message: "保存成功",
            type: "success"
          });
          this.$refs.ActivityCartype.queryList();
        } else {
          this.$message({
            message:
              "保存失败：" +
              response.data[seApis.seDbActionCartypeMutationSave.ServiceCode]
                .msg,
            type: "warn",
            uration: 2000
          });
        }
      });
      console.log(obj);
    },
    //活动车型删除按钮 为界面删除，删除后需要点击提交按钮保存至后台
    deletCarType() {
      if (this.deletCarTypeNum != -1) {
        this.$refs.ActivityCartype.tableData.splice(this.deletCarTypeNum, 1);
        this.deletCarTypeNum = -1;
      } else {
        this.$alert("请选择数据", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return false;
      }
    },
    //活动车型获取选中行方法
    rowClickCarType(val) {
      let obj = {};
      obj = val[0];
      for (var a = 0; this.$refs.ActivityCartype.tableData.length > a; a++) {
        if (
          obj.carTypeCode == this.$refs.ActivityCartype.tableData[a].carTypeCode
        ) {
          //获取选中行的位子
          this.deletCarTypeNum = a;
        }
      }
    },
    //备件优惠保存按钮
    savePartFavo() {
      let obj = this.$refs.partFavour.tableData;
      let saveParams = [];
      for (var a = 0; a < obj.length; a++) {
        let getParam = {};
        getParam.favoType = obj[a].favoType;
        getParam.partName = obj[a].partName;
        getParam.partNo = obj[a].partNo;
        getParam.disCount = obj[a].disCount;
        getParam.repairActivityId = this.activityInformation.repairActivityId;
        saveParams.push(getParam);
      }
      seDbActionPartMutationSave(saveParams).then(response => {
        if (
          response.data[seApis.seDbActionPartMutationSave.ServiceCode].result ==
          "1"
        ) {
          this.$message({
            message: "保存成功",
            type: "success"
          });
          this.$refs.partFavour.queryList();
        } else {
          this.$message({
            message:
              "保存失败：" +
              response.data[seApis.seDbActionPartMutationSave.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    },
    //获取备件优惠选中行数
    rowClickPartFavour(val) {
      let obj = {};
      obj = val[0];
      for (var a = 0; this.$refs.partFavour.tableData.length > a; a++) {
        if (obj.partNo == this.$refs.partFavour.tableData[a].partNo) {
          //获取选中行的位子
          this.deletPartFavour = a;
        }
      }
    },
    //备件优惠删除按钮
    deletPartFavo() {
      if (this.deletPartFavour != -1) {
        this.$refs.partFavour.tableData.splice(this.deletPartFavour, 1);
        this.deletPartFavour = -1;
      } else {
        this.$alert("请选择数据", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return false;
      }
    },
    //获取选中的备件
    getParts(val) {
      this.paChoosePartVisible = false;
      var selectPartsRow = {
        partNo: "",
        partName: "",
        discount: 0
      };
      for (var n = 0; n < val.length; n++) {
        let flag = true;
        if (this.$refs.partFavour.tableData.length != null) {
          for (var m = 0; m < this.$refs.partFavour.tableData.length; m++) {
            if (this.$refs.partFavour.tableData[m].partNo == val[n].partNo)
              flag = false;
          }
        }
        if (flag) {
          selectPartsRow.partNo = val[n].partNo;
          selectPartsRow.partName = val[n].partName;
          selectPartsRow.discount = 0;
          this.$refs.partFavour.tableData.push(
            JSON.parse(JSON.stringify(selectPartsRow))
          );
        }
      }
    },
    //备件优惠新增备件
    addParts() {
      this.paChoosePartVisible = true;
    },
    //获取赠送表格选中行 用于删除
    rowClickActionGive(val) {
      let obj = {};
      obj = val[0];
      for (var a = 0; this.$refs.actionGive.tableData.length > a; a++) {
        if (obj.partNo == this.$refs.actionGive.tableData[a].partNo) {
          //获取选中行的位子
          this.deletActionGive = a;
        }
      }
    },
    //赠送 删除
    deletGive() {
      if (this.deletActionGive != -1) {
        this.$refs.actionGive.tableData.splice(this.deletActionGive, 1);
        this.deletActionGive = -1;
      } else {
        this.$alert("请选择数据", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return false;
      }
    },
    // 赠送保存
    saveGive() {
      let obj = this.$refs.actionGive.tableData;
      let saveParams = [];
      for (var a = 0; a < obj.length; a++) {
        let getParam = {};
        getParam.partName = obj[a].partName;
        getParam.partNo = obj[a].partNo;
        getParam.oneOfmanay = obj[a].oneOfmanay;
        getParam.leastAmount = 0;
        getParam.giveNumber = 1;
        getParam.repairActivityId = this.activityInformation.repairActivityId;
        saveParams.push(getParam);
      }
      seDbActionPersentMutationSave(saveParams).then(response => {
        if (
          response.data[seApis.seDbActionPersentMutationSave.ServiceCode]
            .result == "1"
        ) {
          this.$message({
            message: "保存成功",
            type: "success"
          });
          this.$refs.actionGive.queryList();
        } else {
          this.$message({
            message:
              "保存失败：" +
              response.data[seApis.seDbActionPersentMutationSave.ServiceCode]
                .msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    },
    //赠送 选中备件弹窗回调函数
    getGiveParts(val) {
      this.GivepaChoosePartVisible = false;
      var selectPartsRow = {
        partNo: "",
        partName: "",
        oneOfmanay: 1
      };
      for (var n = 0; n < val.length; n++) {
        let flag = true;
        if (this.$refs.actionGive.tableData.length != null) {
          for (var m = 0; m < this.$refs.actionGive.tableData.length; m++) {
            if (this.$refs.actionGive.tableData[m].partNo == val[n].partNo)
              flag = false;
          }
        }
        if (flag) {
          selectPartsRow.partNo = val[n].partNo;
          selectPartsRow.partName = val[n].partName;
          selectPartsRow.partName = 0;
          this.$refs.actionGive.tableData.push(
            JSON.parse(JSON.stringify(selectPartsRow))
          );
        }
      }
    },
    //打开新增 赠送弹窗
    openAddGive() {
      this.GivepaChoosePartVisible = true;
    },
    closePartsChoose() {
      this.paChoosePartVisible = false;
    },
    closePartsChoose1() {
      this.GivepaChoosePartVisible = false;
    },
    closeChooseWiData() {
      this.seChooseWiSelectVisibles = false;
    },
    //获取选择工时返回值
    getChooseWiData(val) {
      this.seChooseWiSelectVisibles = false;
      var selectWiRow = {};
      for (var n = 0; n < val.length; n++) {
        let flag = true;
        if (this.$refs.wiPrefer.tableData.length != null) {
          for (var m = 0; m < this.$refs.wiPrefer.tableData.length; m++) {
            if (this.$refs.wiPrefer.tableData[m].oprateCode == val[n].wiCode)
              flag = false;
          }
        }
        if (flag) {
          selectWiRow.oprateCode = val[n].wiCode;
          selectWiRow.repairContent = val[n].wiName;
          selectWiRow.discount = 0;
          this.$refs.wiPrefer.tableData.push(
            JSON.parse(JSON.stringify(selectWiRow))
          );
        }
      }
    },
    //打开工时选择弹窗
    showChooseWiData() {
      this.seChooseWiSelectVisibles = true;
    },
    //拿到工时表选择的行
    rowClickWiPrefer(val) {
      let obj = {};
      obj = val[0];

      for (var a = 0; this.$refs.wiPrefer.tableData.length > a; a++) {
        if (obj.oprateCode == this.$refs.wiPrefer.tableData[a].oprateCode) {
          //获取选中行的位子
          this.deletWiPrefer = a;
        }
      }
    },
    //删除工时
    deletWiPre() {
      if (this.deletWiPrefer != -1) {
        this.$refs.wiPrefer.tableData.splice(this.deletWiPrefer, 1);
        this.deletWiPrefer = -1;
      } else {
        this.$alert("请选择数据", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return false;
      }
    },
    //保存工时
    saveWiper() {
      let obj = this.$refs.wiPrefer.tableData;
      let saveParams = [];
      for (var a = 0; a < obj.length; a++) {
        let getParam = {};
        getParam.oprateCode = obj[a].oprateCode;
        getParam.repairContent = obj[a].repairContent;
        getParam.discount = obj[a].discount;
        getParam.favoType = 2;
        getParam.repairActivityId = this.activityInformation.repairActivityId;
        saveParams.push(getParam);
      }
      seDbActionWiMutationSave(saveParams).then(response => {
        if (
          response.data[seApis.seDbActionWiMutationSave.ServiceCode].result ==
          "1"
        ) {
          this.$message({
            message: "保存成功",
            type: "success"
          });
          this.$refs.wiPrefer.queryList();
        } else {
          this.$message({
            message:
              "保存失败：" +
              response.data[seApis.seDbActionWiMutationSave.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    },
    //重置按钮
    reset() {
      this.queryParams1.dataInfo.repairActivityId = "";
      this.queryParams1.dataInfo.repairActivityName = "";
      this.querytime = "";
      this.queryParams1.dataInfo.actionState = "";
      this.queryParams1.dataInfo.beginDate = "";
      this.queryParams1.dataInfo.endDate = "";
      this.showDate2 = true;
    },
    chagedayType(val) {
      this.chuange1 = val;
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
        debugger
        var a = [{ partNo: "" },{ partName: "" },{ disCount: "" }];
        for (var i = 0; i < tempList.length; i++) {
          if (tempList[i]["备件编码"]) {
            a[i].partNo = tempList[i]["备件编码"];

          } if(tempList[i]["备件名称"]){
            a[i].partName = tempList[i]["备件名称"];

          }if(tempList[i]["备件折扣(%)"]){
            a[i].disCount = tempList[i]["备件折扣(%)"];
          }
        
        }

        this.$refs.partFavour.tableData = a;
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
    //处理文件选择器改变事件
    handleChange(param) {
      var url = "/ly/mp/busicen/asc/excel/resolve.do"; // API根据不同功能url不同，请配置到对应模块配置
      var that = this;
      this.$requestImport(url, param, function(response) {
        that.uploadSuccess(response);
      });
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