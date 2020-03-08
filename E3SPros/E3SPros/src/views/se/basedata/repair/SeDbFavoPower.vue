<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
      <el-button @click="showModifyDialog">修改</el-button>

      <el-button size="small" @click="reset()">重置</el-button>
    </div>
    <!--<div class="filter-container filter-title" ref="conTitleHeight">查询区</div>-->
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <LookupValue
          :span="6"
          :isMul="false"
          :isshow="false"
          :code="listQuery.deptName"
          :lookuptype="lookuptype"
          labelName="部门名称"
          @changeCode="getdeptName"
        />
        <el-col :span="6">
          <label>员工姓名</label>
          <el-input v-model="listQuery.empName" placeholder size="small" />
        </el-col>
        <el-col :span="6">
          <label>员工电话</label>
          <el-input v-model="listQuery.mobile" placeholder size="small" />
        </el-col>
        <el-col :span="6">
          <label>员工状态</label>
          <el-select v-model="listQuery.isEnable" size="small" placeholder="请选择" clearable>
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
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
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      @row-click="rowClicked"
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column label="姓名" align="center">
        <template slot-scope="scope">{{ scope.row.empName}}</template>
      </el-table-column>
      <el-table-column label="员工Id" align="center" v-if="false">
        <template slot-scope="scope">{{ scope.row.empid}}</template>
      </el-table-column>
      <el-table-column label="专营店" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.dlrShortName }}</template>
      </el-table-column>
      <el-table-column label="维修工时修改" width="130" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.wiPower == 1">是</span>
          <span v-else-if="scope.row.wiPower == 0">否</span>
        </template>
      </el-table-column>
      <el-table-column label="作废估价单" width="130" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.cancelRepairOrder == 1">是</span>
          <span v-else-if="scope.row.cancelRepairOrder == 0">否</span>
        </template>
      </el-table-column>
      <el-table-column label="部门" align="center">
        <template slot-scope="scope">{{ scope.row.deptName }}</template>
      </el-table-column>
      <el-table-column label="工时折扣率(%)" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.wiRate }}</template>
      </el-table-column>
      <el-table-column label="备件折扣率(%)" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.partRate }}</template>
      </el-table-column>
      <el-table-column label="工时数修改" align="center">
        <template slot-scope="scope">{{ scope.row.wiPower }}</template>
      </el-table-column>
      <el-table-column label="员工电话" align="center">
        <template slot-scope="scope">{{ scope.row.mobile }}</template>
      </el-table-column>
      <el-table-column label="岗位" align="center">
        <template slot-scope="scope">{{ scope.row.stationName }}</template>
      </el-table-column>
      <el-table-column label="性别" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.genderCode }}</template>
      </el-table-column>
      <el-table-column label="工号" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.empCode }}</template>
      </el-table-column>
      <el-table-column label="状态" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.status }}</template>
      </el-table-column>
      <el-table-column label="地址" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.addr }}</template>
      </el-table-column>
      <el-table-column label="员工状态" align="center">
        <template slot-scope="scope">{{ scope.row.isEnable == 1 ? '在职' : '离职' }}</template>
      </el-table-column>
      <el-table-column label="权限Id" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.favoPowerId }}</template>
      </el-table-column>
      <el-table-column label="折扣范围" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.favoType }}</template>
      </el-table-column>
      <el-table-column label="经销商Id" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.dlrId }}</template>
      </el-table-column>
      <el-table-column label="经销商编码" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.dlrCode }}</template>
      </el-table-column>
      <el-table-column label="并发控制ID" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.updateControlId }}</template>
      </el-table-column>
      <el-table-column label="最新更新日期" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.lastUpdatedDate }}</template>
      </el-table-column>
      <el-table-column label="状态编码" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.statusCode }}</template>
      </el-table-column>
      <el-table-column label="厂商标识" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.oemCode }}</template>
      </el-table-column>
      <el-table-column label="集团标识" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.groupCode }}</template>
      </el-table-column>
      <el-table-column label="厂商标识ID" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.oemId }}</template>
      </el-table-column>
      <el-table-column label="集团标识ID" hidden="hidden" v-if="false">
        <template slot-scope="scope">{{ scope.row.groupId }}</template>
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
    <!--修改弹框-->
    <el-dialog
      :title="showTitle"
      :visible.sync="dialogFormVisible"
      center
      :append-to-body="true"
      width="900px"
      :close-on-click-modal="false"
      @close="closeDialog"
    >
      <!--<div class="filter-container filter-title"></div>-->
      <div class="filter-container filter-params">
        <el-form
          :model="listSave"
          :rules="rules"
          ref="ruleForm1"
          class="demo-ruleForm"
          :inline-message=true
        >
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="员工姓名" prop="empName">
                <el-input v-model=" listSave.empName" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="员工岗位" prop="stationName">
                <el-input v-model=" listSave.stationName" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="工时折扣率" prop="wiRate">
                <el-input
                  v-model.number="listSave.wiRate"
                  type="number"
                  size="small"
                  :min="0"
                  :max="1"
                  :step="0.01"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="备件折扣率" prop="partRate">
                <el-input
                  v-model.number="listSave.partRate"
                  type="number"
                  size="small"
                  :min="0"
                  :step="0.01"
                  :max="1"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-checkbox v-model="wiPower">维修工时数修改</el-checkbox>
              <el-checkbox v-model="cancelRepairOrder">作废施工单</el-checkbox>
            </el-col>
            <!--<el-col :span="8">
            <el-checkbox v-model="wiPower">维修工时数修改"></el-checkbox>
          </el-col>
          <el-col :span="8">
            <el-checkbox v-model="cancelRepairOrder">作废施工单</el-checkbox>
            </el-col>-->
          </el-row>
          <el-alert title="备注：折扣率设置100%表示无优惠，80%为八折优惠，0%为免费" type="error" :closable="false"></el-alert>
          <el-form-item class="dialog-footer">
            <el-button type="primary" @click="subsaveData('ruleForm1')">保存</el-button>
            <el-button @click="dialogFormVisible = false">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { seApis } from "@/api/graphQLApiList/se";
import {
  doQueryList,
  doPowerSave
} from "@/api/se/basedata/repair/SeDbFavoPower";
import lableName from "@/components/lableName";
import LookupValue from "@/components/org/LookupValue";
import { the_Height } from "@/views/se/makeHeight";
export default {
  filters: {
    isEnableFilter(isEnable) {
      const isEnableMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return isEnableMap[isEnable];
    }
  },
  mixins: [the_Height],
  components: {
    lableName,
    LookupValue
  },
  data() {
    return {
      wiPower:false, //为false时不勾选
      cancelRepairOrder: false,
      showTitle: "修改",
      value: "",
      options1: [
        {
          value: "1",
          label: "在职"
        },
        {
          value: "0",
          label: "离职"
        }
      ],
      tableHeight: 310, // 网格高度
      tableMarginHeight: 15,
      isEnable: "",
      lookuptype: "DFI0084",
      checked1: false,
      checked2: false,
      carTypeVisible: false,
      dialogFormVisible: false,
      listLoading: false,
      list: [],
      pageTotal: 0,
      pageIndex: 1,
      pageSize: 10,
      listQuery: {
        //type: undefined,
        empCode: "",
        isEnable: "",
        empName: "",
        mobile: "",
        //deptCode: '',
        deptName: ""
      },
      listSave: {
        //limit: 10,
        //type: undefined,
        //flag:'',
        //isEnable: '',
        empName: "",
        empid: "",
        stationName: "",
        //mobile:'',
        //deptName:'',
        wiRate: "",
        partRate: "",
        //wiPowerName:'',
        wiPower: "0",
        cancelRepairOrder: "0",
        updateControlId: "",
        dlrCode: "",
        dlrId: ""
      },
      curRow: {},
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        empName: [
          { required: true, message: "请输入员工姓名", trigger: "change" }
        ],
        stationName: [
          { required: true, message: "请输入岗位", trigger: "change" }
        ],
        wiRate: [
          {
            required: true,
            message: "请输入工时折扣率（%）",
            trigger: "change"
          }
        ],
        partRate: [
          {
            required: true,
            message: "请输入备件折扣率（%）",
            trigger: "change"
          }
        ]
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.listLoading = true;
      //this.listQuery.deptCode = undefined;
      doQueryList(this.pageSize, this.pageIndex, this.listQuery).then(
        response => {
          if (
            response.data[seApis.seDbFavoPowerQueryFindAll.ServiceCode]
              .result === "1"
          ) {
            this.list =
              response.data[seApis.seDbFavoPowerQueryFindAll.ServiceCode].rows;
            this.pageTotal =
              response.data[
                seApis.seDbFavoPowerQueryFindAll.ServiceCode
              ].records;
            //this.curRow={};
            this.listLoading = false;
          }
        }
      );
    },
    showModifyDialog() {
      if (this.curRow.empName == null) {
        this.$alert("请选中一行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      } else {
        this.listSave.empName = this.curRow.empName;
        this.listSave.stationName = this.curRow.stationName;
        this.listSave.wiRate = this.curRow.wiRate;
        this.listSave.partRate = this.curRow.partRate;
        this.listSave.empid = this.curRow.empid;

        if (this.curRow.wiPower) {
          if (this.curRow.wiPower == "1") {
            this.wiPower = true;
            this.listSave.wiPower = "1";
          } else {
            this.wiPower = false;
            this.listSave.wiPower = "0";
          }
        } else {
          this.wiPower = false;
        }
        if (this.curRow.cancelRepairOrder) {
          if (this.curRow.cancelRepairOrder == "1") {
            this.cancelRepairOrder = true;
            this.listSave.cancelRepairOrder = "1";
          } else {
            this.cancelRepairOrder = false;
            this.listSave.cancelRepairOrder = "0";
          }
        } else {
          this.cancelRepairOrder = false;
        }
        this.listSave.updateControlId = this.curRow.updateControlId;
        this.listSave.dlrId = this.curRow.dlrId;
        this.listSave.dlrCode = this.curRow.dlrCode;
        this.dialogFormVisible = true;
      }
    },
    showModifysuccessDialog() {
      this.$alert("修改成功", "提示", {
        confirmButtonText: "确定",
        type: "success"
      });
      return;
    },

    saveData() {
      //debugger
      this.listLoading = true;
      //this.listSave.stationName = undefined;
      //后台不需要传员工岗位，有empId可关联查出来

      let modifyData = {
        //empName: this.listSave.empName,
        empid: this.listSave.empid,
        wiRate: Number(this.listSave.wiRate),
        //favoRate: this.listSave.favoRate,
        partRate: Number(this.listSave.partRate),
        cancelRepairOrder: this.listSave.cancelRepairOrder,
        updateControlId: this.listSave.updateControlId,
        dlrCode: this.listSave.dlrCode,
        dlrId: this.listSave.dlrId,
        wiPower: this.listSave.wiPower
      };
      doPowerSave(modifyData).then(response => {
        //debugger
        if (
          response.data[seApis.seDbFavoPowerMutationSave.ServiceCode].result ===
          "1"
        ) {
          this.showModifysuccessDialog();
          this.fetchData();
        } else {
          this.$message({
            type: "error",
            message:
              response.data[seApis.seDbFavoPowerMutationSave.ServiceCode].msg
          });
        }
        this.dialogFormVisible = false;
        //this.list=response.data[seApis.seDbFavoPowerMutationSave.ServiceCode].rows;
        this.listLoading = false;
      });
    },
    subsaveData(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 校验通过
          if(this.wiPower==true){this.listSave.wiPower='1'} else{this.listSave.wiPower='0'}
          if (this.cancelRepairOrder == true) {
            this.listSave.cancelRepairOrder = "1";
          } else {
            this.listSave.cancelRepairOrder = "0";
          }
          this.saveData();
        } else {
          // 校验不通过
          console.log("error submit!!");
          return false;
        }
      });
    },
    reset() {
      // this.listQuery.deptName= [];
      // this.listQuery.isEnable=[];
      // this.listQuery.empName=[];
      // this.listQuery.mobile=[];
      this.listQuery.deptName = "";
      this.listQuery.empName = "";
      this.listQuery.mobile = "";
      this.listQuery.isEnable = "";
    },
    rowClicked(row) {
      if (row.wiPower == "1") {
        this.wiPower = true;
      } else this.wiPower = false;
      if (row.cancelRepairOrder == "1") {
        this.cancelRepairOrder = true;
      } else this.cancelRepairOrder = false;
      this.curRow = row;
      console.log = row;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.fetchData();
    },
    getdeptName(code, text) {
      //this.listQuery.deptCode = code;
      this.listQuery.deptName = text;
    },
    closeDialog() {
      this.dialogFormVisible = false;
    }
    // setTableHeight(isResize) {
    //   this.$nextTick(() => {
    //     // 调用AppMain中的方法设置网格高度（自适应）
    //     var appMainHeight = this.$utils.getAppMainHeight(
    //       this.$route.path,
    //       this
    //     );
    //     if (appMainHeight > 0) {
    //       var curTableHeight = appMainHeight;
    //       // 减去查询按钮区域高度
    //       if (this.$refs.uHeight1) {
    //         curTableHeight -= this.$refs.uHeight1.offsetHeight;
    //       }
    //       // 减去分页区域高度
    //       if (this.$refs.paginationHeight) {
    //         if (this.$refs.paginationHeight.offsetHeight) {
    //           curTableHeight -= this.$refs.paginationHeight.offsetHeight;
    //         } else {
    //           curTableHeight -= this.$refs.paginationHeight.$el.offsetHeight;
    //         }
    //       }
    //       // 减去margin-top/bottom值
    //       if (!this.$utils.isIE() || isResize) {
    //         this.tableHeight = curTableHeight - this.tableMarginHeight - 30;
    //       } else {
    //         // IE浏览器需要减去额外高度
    //         this.tableHeight = curTableHeight - this.tableMarginHeight - 30;
    //       }
    //     }
    //   });
    // }
  }
};
</script>
<style scoped>
.filter-params .el-col label.el-checkbox {
  width: 30%;
}
</style>
