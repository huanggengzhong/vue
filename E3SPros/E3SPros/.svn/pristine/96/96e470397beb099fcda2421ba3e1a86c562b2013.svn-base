    <template>
  <el-dialog
    title="精品销售明细"
    :visible.sync="supplierDialogVisible"
    center
    :append-to-body="true"
    :close-on-click-modal="false"
    width="70%"
    @close="closeDialog"
  >
    <div class="filter-container filter-params">
      <el-form
        :model="listSave"
        :rules="rules"
        ref="ruleForm1"
        class="demo-ruleForm"
        :inline-message="true"
      >
        <div class="filter-container filter-title">单据信息</div>
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item label="销售单号" prop="salesNo">
              <el-input v-model="listSave.salesNo" size="small" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="客户姓名" prop="applyName">
              <el-input v-model="listSave.applyName" size="small" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="退库申请单号" prop="tuikuNo">
              <el-input v-model="listSave.tuikuNo" size="small" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="申请时间" prop="applyStartTime">
              <el-date-picker
                v-model="listSave.applyStartTime"
                type="datetime"
                placeholder="选择日期时间"
                format="yyyy-MM-dd HH:mm:ss"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <LookupValue
            :span="8"
            :isMul="false"
            :isshow="true"
            :code="listSave.applyNameNo"
            labelName="申请人"
            lookuptype="SE0095"
            @changeCode="getApplyNameNo"
          />
        </el-row>
      </el-form>
      <div class="filter-container filter-title">退料明细</div>
      <mix-table
        ref="tableList2"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        :isShowSelect="false"
        :isPaging="false"
        :isDialog="true"
      />
    </div>
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="showSave('ruleForm1')">保存</el-button>
    </div>
  </el-dialog>
</template>
<script>
import mixTable from "@/components/basicComponent/mixTable";
import LookupValue from "@/components/org/LookupValue";
import { doSave, doDelete } from "@/api/se/basedata/repair/partSortDetail";
import { seApis } from "@/api/graphQLApiList/se";
import { format } from "path";
export default {
  components: {
    mixTable,
    LookupValue
  },
  props: {
    supplierDialogVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    rowData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  watch: {
    supplierDialogVisible(newValue, oldValue) {
      if (newValue) {
        this.queryParams.dataInfo.applyStartTime = this.rowData[0].applyStartTime;
        this.listSave.salesNo = this.rowData[0].salesNo;
        this.listSave.applyName = this.rowData[0].applyName;
        var now = new Date();
        this.listSave.applyStartTime = this.$utils.parseTime(now);
        this.$refs.tableList2.queryList();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.queryParams.dataInfo.applyStartTime = this.rowData[0].applyStartTime;
      this.listSave.salesNo = this.rowData[0].salesNo;
      this.listSave.applyName = this.rowData[0].applyName;
      this.listSave.applyStartTime = this.rowData[0].applyStartTime;
      this.$refs.tableList2.queryList();
    });
  },
  data() {
    return {
      applyDate: [],
      carBrandKey: "",
      listSave: {
        applyStartTime: ""
      },
      saveInfo: {
        applyStartTime: "",
        applyEndTime: "",
        salesNo: "",
        retreatNo: "",
        carBrandCode: "",
        carNo: "",
        VIN: "",
        applyNameNo: "",
        detailList: []
      },
      rules: {
        applyStartTime: [
          { required: true, message: "请设置时间", trigger: "change" }
        ]
      },
      cols: [
        { label: "出库单号", codeField: "carBrandCn" },
        { label: "精品编码", codeField: "salesNo" },
        { label: "精品名称", codeField: "carNo" },
        { label: "出库数量", codeField: "chuku" },
        {
          label: "申请退货数量",
          isEdit:"true",
          codeField: "shengqingtuihuo",
          comps: { type: "inputTxt" }
        },
        { label: "已申请退货数量", codeField: "yishengqingtuihuo" },
        { label: "单位", codeField: "applyStartTime" },
        { label: "单价", codeField: "applyStartTime" },
        { label: "备件费", codeField: "applyStartTime" },
        { label: "预估费用", codeField: "applyStartTime" }
      ],
      queryParams: {
        APIUrl: seApis.boutiqueSalesReQueryFindAll.APIUrl,
        InputType: seApis.boutiqueSalesReQueryFindAll.InputType,
        ServiceCode: seApis.boutiqueSalesReQueryFindAll.ServiceCode,
        dataInfo: {
          applyStartTime: "",
          applyEndTime: "",
          salesNo: "",
          retreatNo: "",
          carBrandCode: "",
          carNo: "",
          VIN: "",
          applyNameNo: ""
        },
        apiQueryRow: [
          "carBrandCn",
          "carBrandCode",
          "salesNo",
          "retreatNo",
          "carNo",
          "applyStartTime",
          "applyName",
          "applyNameNo",
          "VIN",
          "boutiqueNo",
          "boutiqueName",
          "applyNumber",
          "retreatNumber",
          "retreatStatus"
        ]
      }
    };
  },

  methods: {
    closeDialog() {
      this.$emit("close", false);
    },
    //提示保存
    showSave(formName) {
      var er = "0";
      this.$refs.tableList2.tableData.forEach(row => {
        debugger;
        let total =
          parseInt(row.shengqingtuihuo) + parseInt(row.yishengqingtuihuo);
        if (total > parseInt(row.chuku)) {
          er = "1";
          this.$alert("超出申请出库数量", "提示", {
            confirmButtonText: "确定",
            type: "warning"
          });
        }
      });
      if (er == "0") {
        this.save(formName);
      }
      if (er == "1") {
        return;
      }
    },
    //保存
    save(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.saveInfo.detailList = this.$refs.tableList2.tableData;
          this.saveInfo.applyNameNo = this.listSave.applyNameNo;
          this.saveInfo.applyStartTime = this.listSave.applyStartTime;
          doSave(this.saveInfo).then(response => {
            if (
              response.data[seApis.partSortDetailMutationSave.ServiceCode]
                .result === "1"
            ) {
              this.$message({
                message: "保存成功",
                type: "success"
              });
              this.$refs.tableList2.queryList();
            } else {
              this.$message({
                message:
                  "保存失败：" +
                  response.data[seApis.partSortDetailMutationSave.ServiceCode]
                    .msg,
                type: "warn",
                uration: 2000
              });
              this.$refs.tableList2.queryList();
            }
            this.supplierDialogVisible = false;
            this.listLoading = false;
          });
        } else {
          //数据校验不通过
          return false;
        }
      });
    },
    //获取申情人code
    getApplyNameNo(val) {
      this.listSave.applyNameNo = val;
    }
  }
};
</script>