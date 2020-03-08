<!--
* description: 经销商资金作业
* author: chchhui
* createdDate: 2019-08-9
* logs：
*  20190809 新增页面功能
-->
<template>
  <div class="app-container app-container-table accountManage">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="submitForm('ruleForm')">添加保存</el-button>
      <el-button size="small" @click="deleteDlr">删除</el-button>
      <el-button size="small" @click="reset">重置</el-button>
      <el-button size="small" @click="upload">导入</el-button>
    </div>
    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-row :gutter="24">
          <el-col :span="22">
            <el-row>
              <el-col :span="6">
                <el-form-item label="经销商编码" prop="dlrCode">
                  <el-input
                    v-model="ruleForm.dlrCode"
                    suffix-icon="el-icon-search"
                    placeholder="请选择"
                    size="small"
                    @focus="openDlr"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="经销商名称" prop="dlrShortName">
                  <el-input
                    v-model="dlrInfo.dlrShortName"
                    suffix-icon="el-icon-search"
                    size="small"
                  />
                </el-form-item>
              </el-col>
              <seCommonQueryChooseDlr
                ref="seCommonQueryChooseDlr"
                :isMul="isMul"
                :seComQueChoDlrVisible="isShowStore"
                @sentCode="getComQueCho"
                @close="closeComQueCho"
              />
              <capitalUpload
                :capitalUploadVisible="capitalUploadVisible"
                @changeCode="getsendCode"
              />
              <el-col :span="6">
                <el-form-item label="账户余额" prop="dlrBalance">
                  <el-input clearable placeholder="请选择" v-model="dlrInfo.dlrBalance" size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="预扣金额" prop="frozenMoney">
                  <el-input clearable placeholder="请选择" v-model="dlrInfo.frozenMoney" size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              <el-col :span="6">
                <el-form-item label="可用金额" prop="useAmount">
                  <el-input clearable placeholder="请选择" v-model="dlrInfo.useAmount" size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="收款账户" prop="pvAccount">
                  <el-select size="small" placeholder="请选择" v-model="ruleForm.pvAccount">
                    <el-option
                      v-for="item in account"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="汇出银行" prop="dlrAccount">
                  <el-select size="small" placeholder="请选择" v-model="ruleForm.dlrAccount">
                    <el-option
                      v-for="item in account"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="金额" prop="tranAmount">
                  <el-input clearable placeholder="请选择" v-model="ruleForm.tranAmount" size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="资金操作类" prop="businessType">
                  <el-select size="small" placeholder="请选择" v-model="ruleForm.businessType">
                    <el-option
                      v-for="item in handle"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="明细类别" prop="businessClass">
                  <el-select size="small" placeholder="请选择" v-model="ruleForm.businessClass">
                    <el-option
                      v-for="item in handle"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="汇款日期" prop="businessDate">
                  <el-date-picker
                    v-model="ruleForm.businessDate"
                    type="datetime"
                    placeholder="选择日期"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6" class="text">
                <span>总记录数：{{count}}</span>
                <span>金额合计：{{money}}</span>
              </el-col>
              <el-col :span="12" class="remark">
                <label>备注</label>
                <el-input clearable placeholder="请输入" v-model="ruleForm.remark" size="small"></el-input>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title">查询结果区</div>
    <el-table
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      @row-click="getRowCode"
    >
      <el-table-column prop="id" label="序号" type="index" width="60" align="center"></el-table-column>
      <el-table-column prop="dlrCode" label="经销商编码" width="100" align="center"></el-table-column>
      <el-table-column prop="dlrShortName" label="经销商简称" width="150" align="center"></el-table-column>
      <el-table-column prop="pvAccount" label="收款账户" align="center" width="100"></el-table-column>
      <el-table-column prop="tranAmount" label="金额" width="100" align="center"></el-table-column>
      <el-table-column prop="businessTypeName" label="资金操作类型" align="center" width="120"></el-table-column>
      <el-table-column prop="businessClassName" label="明细类别" align="center" width="120"></el-table-column>
      <el-table-column prop="businessDate" label="汇款日期" width="170" align="center"></el-table-column>
      <el-table-column prop="remark" label="备注" align="center"></el-table-column>
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
      :total="list?pageTotal:0"
    ></el-pagination>
  </div>
</template>

<script>
import seCommonQueryChooseDlr from "@/components/se/seCommonQueryChooseDlr";
import capitalUpload from "./capitalUpload";
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "pajxszjzy",
  components: {
    seCommonQueryChooseDlr,
    capitalUpload
  },
  data() {
    return {
      pageTotal: 1,
      isMul: false,
      delRow: {},
      isShowStore: false,
      capitalUploadVisible: false,
      list: [],
      count: 0,
      money: 0,
      toggleParam: false,
      dlrInfo: {
        useAmount: "",
        dlrBalance: "",
        frozenMoney: ""
      },
      account: [
        {
          value: "0",
          label: "招商银行"
        },
        {
          value: "1",
          label: "工商银行"
        }
      ],
      accountName: [
        {
          value: "0",
          label: "日产账户"
        },
        {
          value: "1",
          label: "启辰账户"
        }
      ],
      handle: [
        {
          value: "0",
          label: "转款"
        },
        {
          value: "1",
          label: "扣款"
        }
      ],
      detail: [
        {
          value: "0",
          label: "其他转账"
        },
        {
          value: "1",
          label: "业务转账"
        }
      ],
      pageIndex: 1,
      pageSize: 10,
      limit: 20,
      listQuery: {
        dlrId: "202",
        //dlrId: this.$store.getters.orgInfo.DLR_ID,  获取登录账户的ID
        modelName: "PA",
        businessClass: "",
        auditDate: "",
        auditStatus: "1"
      },
      dlrListQuery: {
        dlrId: "202"
        //dlrId: this.$store.getters.orgInfo.DLR_ID,  获取登录账户的ID
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      },
      rules: {
        pvAccount: [
          { required: true, message: "请选择账户", trigger: "change" }
        ],
        dlrAccount: [
          { required: true, message: "请选择银行", trigger: "change" }
        ],
        businessType: [
          { required: true, message: "请选择类型", trigger: "change" }
        ],
        businessClass: [
          { required: true, message: "请选择明细类别", trigger: "change" }
        ],
        businessDate: [
          { required: true, message: "请选择汇款日期", trigger: "change" }
        ],
        tranAmount: [
          { required: true, message: "请输入金额", trigger: "blur" },
          { min: 1, message: "金额不能为空", trigger: "blur" }
        ]
      },
      ruleForm: {
        dlrId: "",
        carBrandCode: "",
        dlrAccount: "",
        tranAmount: "",
        auditDate: "",
        dlrAccount: "",
        auditStatus: "",
        modelName: "",
        businessDate: "",
        dlrAccountRInfoId: "",
        updateControlId: "",
        dlrShortName: "",
        pvAccount: "", //收款账户
        dlrAccount: "", //汇出银行
        tranAmount: "", //金额
        businessType: "", //资金操作类型
        businessClass: "", //明细类别
        businessDate: "" //汇款日期
      }
    };
  },
  created() {
    this.textQuery();
    this.dlrQuery();
    this.countQurey();
  },
  updated() {
    this.canUseMoney = this.ruleForm.dlrBalance - this.ruleForm.frozenMoney;
  },
  methods: {
    openDlr() {
      this.isShowStore = true;
    },
    upload() {
      this.capitalUploadVisible = true;
    },
    getsendCode(val) {
      this.capitalUploadVisible = val;
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    //获取经销商名称
    getComQueCho(val) {
      this.ruleForm.dlrShortName = val.dlrFullName;
      this.isShowStore = false;
    },
    closeComQueCho(val) {
      //点击弹框右上角关闭弹窗，不传递数据
      this.isShowStore = val;
    },

    handleCurrentChange(val) {
      this.pageIndex = val;
      this.textQuery();
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.textQuery();
    },
    getRowCode(selection) {
      this.delRow = {
        dlrId: this.listQuery.dlrId,
        dlrAccountRInfoId: selection.dlrAccountRInfoId
      };
    },

    reset() {
      this.ruleForm = {
        dlrShortName: "", //经销商名称
        pvAccount: "", //收款账户
        dlrAccount: "", //汇出银行
        tranAmount: "", //金额
        businessType: "", //资金操作类型
        businessClass: "", //明细类别
        businessDate: "", //汇款日期
        remark: "" //备注
      };
      this.$refs.ruleForm.clearValidate();
    },
    //删除记录
    deleteDlr() {
      if (this.delRow.length == "") {
        this.$alert("请选择一条您要删除的数据", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
      } else {
        this.$confirm("是否确认删除选中信息？", "确认信息", {
          distinguishCancelAndClose: true,
          confirmButtonText: "确认",
          cancelButtonText: "取消删除"
        })
          .then(() => {
            const that = this;
            let queryObj = {
              // 需要传 mutation
              type: "mutation",
              // api配置
              apiConfig: paApis.veBuDlrAccountRInfoMutationWorkDelete,
              //条件/实体参数（变量），根据typeParam中的定义配置
              variables: {
                dataInfo: that.delRow
              }
            };
            //转换了中台请求格式数据
            var paramD = that.$getParams(queryObj);
            //console.log(paramD)
            // 调用中台API方法（可复用）
            requestGraphQL(paramD).then(response => {
              //console.log(response)
              if (
                response.data[
                  paApis.veBuDlrAccountRInfoMutationWorkDelete.ServiceCode
                ].result === "1"
              ) {
                this.$message({ message: "删除成功", type: "success" });
                this.textQuery();
              }
            });
          })
          .catch(action => {
            this.$message({
              type: "info",
              message: action === "cancel" ? "已取消删除" : "已取消删除"
            });
          });
      }
    },
    // 提交保存
    submitForm(formName) {
      const that = this;
      this.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          this.$message({ message: "添加成功", type: "success" });
          let queryObj = {
            //保存需要传 type="mutation"
            type: "mutation",
            // api配置
            apiConfig: paApis.veBuDlrAccountRLogMutationSave,
            // 需要调用的API服务配置
            apiServices: [
              {
                //表格中台返回网格的字段
                apiQueryRow: []
              }
            ],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              //当前中台使用的名称有dataInfo、info，具体查看API文档
              dataInfo: that.ruleForm
            }
          };
          //转换了中台请求格式数据
          var paramD = that.$getParams(queryObj);
          requestGraphQL(paramD).then(response => {
            if (
              response.data[orgApis.veBuDlrAccountRLogMutationSave.ServiceCode]
                .result === "1" &&
              response.data[orgApis.veBuDlrAccountRLogMutationSave.ServiceCode]
                .rows != ""
            ) {
            }
          });
        } else {
          this.isValiad = true;
          console.log("error submit!!");
          return false;
        }
      });
    },

    // 主表数据查询
    textQuery(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: paApis.veBuDlrAccountRInfoQueryWorkFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "dlrCode",
              "dlrShortName",
              "tranAmount",
              "businessType",
              "businessTypeName",
              "businessClass",
              "businessClassName",
              "pvAccount",
              "pvBank",
              "businessDate",
              "remark",
              "updateControlId",
              "dlrAccountRInfoId",
              "carBrandCode"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.pageSize,
          pageIndex: page || that.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      //console.log(paramD)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        //console.log(response)
        if (
          response.data[paApis.veBuDlrAccountRInfoQueryWorkFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.veBuDlrAccountRInfoQueryWorkFindAll.ServiceCode]
            .rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              paApis.veBuDlrAccountRInfoQueryWorkFindAll.ServiceCode
            ].records;
          that.list =
            response.data[
              paApis.veBuDlrAccountRInfoQueryWorkFindAll.ServiceCode
            ].rows;
          that.listLoading = false;
        }
      });
    },
    // 账户查询
    dlrQuery(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: paApis.paBuOemDlrAccountQueryWorkFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "dlrCode",
              "carBrandCode",
              "dlrShortName",
              "dlrBalance",
              "frozenMoney",
              "useAmount"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.dlrListQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      //console.log(paramD)
      // 调用中台API方法（可复用）
      let dlrList = {};
      requestGraphQL(paramD).then(response => {
        //console.log(response)
        if (
          response.data[paApis.paBuOemDlrAccountQueryWorkFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.paBuOemDlrAccountQueryWorkFindAll.ServiceCode]
            .rows != ""
        ) {
          this.dlrInfo.dlrShortName =
            response.data[
              paApis.paBuOemDlrAccountQueryWorkFindAll.ServiceCode
            ].rows[0].dlrShortName;
          this.dlrInfo.useAmount =
            response.data[
              paApis.paBuOemDlrAccountQueryWorkFindAll.ServiceCode
            ].rows[0].useAmount;
          this.dlrInfo.dlrBalance =
            response.data[
              paApis.paBuOemDlrAccountQueryWorkFindAll.ServiceCode
            ].rows[0].dlrBalance;
          this.dlrInfo.frozenMoney =
            response.data[
              paApis.paBuOemDlrAccountQueryWorkFindAll.ServiceCode
            ].rows[0].frozenMoney;
        }
      });
    },
    // 总数量，总金额查询
    countQurey() {
      const that = this;
      let queryObj = {
        type: "query",
        typeParam:
          "($dataInfo: " +
          paApis.veBuDlrAccountRInfoQueryAuditFindCount.InputType +
          ")",
        // 请求API
        apiUrl: paApis.veBuDlrAccountRInfoQueryAuditFindCount.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode:
              paApis.veBuDlrAccountRInfoQueryAuditFindCount.ServiceCode,
            apiServiceParam: "(dataInfo: $dataInfo)",
            // 表格中台返回网格的字段
            apiQueryRow: ["records", "totalAmount"]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      //console.log(paramD)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        //console.log(response)
        if (
          response.data[
            paApis.veBuDlrAccountRInfoQueryAuditFindCount.ServiceCode
          ].result === "1" &&
          response.data[
            paApis.veBuDlrAccountRInfoQueryAuditFindCount.ServiceCode
          ].rows != ""
        ) {
          that.count =
            response.data[
              paApis.veBuDlrAccountRInfoQueryAuditFindCount.ServiceCode
            ].rows[0].records;
          that.money =
            response.data[
              paApis.veBuDlrAccountRInfoQueryAuditFindCount.ServiceCode
            ].rows[0].totalAmount;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .remark {
  display: inline-block;
  text-align: left;
}
</style>
