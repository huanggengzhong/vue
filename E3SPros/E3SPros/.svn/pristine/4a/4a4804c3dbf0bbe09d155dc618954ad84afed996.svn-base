<template>
  <div>
    <div class="app-container app-container-table">
      <div class="filter-container filter-button" ref="searcheHeight">
        <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
        <el-button size="small" @click="reset()">重置</el-button>
      </div>
      <div class="filter-container filter-params">
        <el-form :model="ruleForm">
          <el-row :gutter="26">
            <el-col :span="22">
              <el-col :span="6">
                <label>批复类型</label>
                <el-select v-model="queryParams.dataInfo.replyTypeCode" placeholder="请选择" @change="getReplyType" clearable>
                  <el-option label="全部" value=""></el-option>
                  <el-option label="保修申请" value="1"></el-option>
                  <el-option label="技术报告" value="0"></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <label>批复内容</label>
                <el-input v-model="queryParams.dataInfo.replyContents" size="small"></el-input>
              </el-col>
              <el-col :span="6">
                <label>状态</label>
                <el-select v-model="queryParams.dataInfo.isEnable" placeholder="请选择" @change="getIsEnable" clearable>
                  <el-option label="全部" value=""></el-option>
                  <el-option label="启用" value="1"></el-option>
                  <el-option label="停用" value="0"></el-option>
                </el-select>
              </el-col>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <mixTable 
        ref="tableList"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        multipleSelect="index"
        @rowClick="openReplySaveDialog"
        :isPaging=true
        :isDialog=false />

      <!--<div class="filter-container filter-title">查询结果</div>
      <el-table :data="list" height="370" style="width: 100%" v-loading="listLoading" element-loading-text="Loading"
        border fit stripe highlight-current-row @cell-click="handleGetRow">
        <el-table-column label="序号" width="60" type="index" align="center"></el-table-column>
        <el-table-column v-for="(item, i) in infoColumns.resultColumn" :key="`col_${i}`" :label="item.label" :show-overflow-tooltip=true
          align="center">
          <template slot-scope="{row}">
            <span @click="openReplySaveDialog(row)">{{row[item.fieldName]}}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" prev-text="上一页" next-text="下一页" :page-sizes="[10, 20, 30]"
        :page-size="10" :total="listRecords" @size-change="handleSizeChange" @current-change="handleCurrentChange">
      </el-pagination>-->
    </div>

     <!-- 批复内容维护信息弹窗 -->
    <el-dialog width="70%" title="批复内容维护信息" :visible.sync="replySaveVisible" @closed="resetField(maintenanceInfo)"
      :append-to-body="true" :close-on-click-modal="false" center>
      <div class="filter-container filter-button">
        <el-button type="primary" size="small" @click="replySave">保存</el-button>
        <el-button size="small" @click="resetField(maintenanceInfo)">重置</el-button>
      </div>
      <div class="filter-container filter-params">
        <el-form :model="maintenanceInfo" ref="ruleForm" class="demo-ruleForm" :inline-message="true">
          <el-row :gutter="10">
            <el-col v-for="(item, index) in infoColumns.elemInformation" :key="`elem${index}`" :span="8">
              <el-form-item :label="item.label" :prop="item.fieldName" :rules="item.rules">
                <el-select v-if="item.type === 'select'" placeholder="请选择"
                  v-model="maintenanceInfo[item.fieldName]" @focus="item.focus"
                  :multiple="item.multiple" clearable collapse-tags size="small">
                  <el-option v-for="(obj, i) in item.options"
                    :key="obj.code" :label="obj.text" :value="obj.code">
                  </el-option>
                </el-select>
                <!--<el-input v-if="item.type === 'textarea'" v-model="maintenanceInfo[item.fieldName]" @focus="item.focus"
                  placeholder="请输入" size="small">
                </el-input>-->
                <el-input v-else v-model="maintenanceInfo[item.fieldName]" @focus="item.focus"
                  :readonly="(item.readonly || false)" placeholder="请输入" size="small">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>

  </div>
</template>
<script>
import { apiSeReply } from "@/api/graphQLApiList/se";
import { requestGraphQL } from "@/api/commonRequest";
import chooseSupplier from "@/components/pa/chooseSupplier";
import paChoose from "@/components/pa/paChoose";
import userCarType from "@/views/pa/orderAuditConfigurationItem/ceshi";
import carsModels from "@/components/pa/carsModels";
import lableName from "@/components/lableName";
import LookupValue from "@/components/org/LookupValue";
import mixTable from "@/components/basicComponent/mixTable";
export default {
  components: {
    chooseSupplier,
    paChoose,
    userCarType,
    carsModels,
    lableName,
    LookupValue,
    mixTable
  },
  filters: {
    
  },
  data() {
    return {
      opType: "ADD", //备件信息弹窗状态
      replySaveVisible: false, //批复内容维护信息弹窗显示
      rowInfo: "",
      toggleParam: false,
      moreBtnIcon: "el-icon-plus",
      code: "1",
      list: null,
      listRecords: 0,
      pageTotal: 0,
      replaceList: null, //查看替换链
      ljList: null, //零件号
      listLoading: true,
      chooseSupplierVisible: false,
      paChooseVisible: false,
      paChooseType: "ADD",
      infoColumns: {
        elemInformation: [
          {
            label: "批复类型",
            fieldName: "replyTypeCode",
            type: "select",
            options: [
                { code: "1", text: "保修申请" },
                { code: "0", text: "技术报告" },
            ],
            focus: () => 0,
            rules: { 
                required: true, 
                message: "请选择批复类型", 
                trigger: "change" 
            }
          },
          {
            label: "批复人",
            fieldName: "replyPerson",
            focus: () => 0,
            rules: {
              required: true,
              message: "请输入批复人",
              trigger: "change"
            },
            readonly: true
          },
          {
            label: "状态",
            fieldName: "isEnable",
            type: "select",
            options: [
                { code: "1", text: "启用" },
                { code: "0", text: "停用" },
            ],
            focus: () => 0,
            rules: {
              required: true,
              message: "请选择",
              trigger: "change"
            }
          },
          {
            label: "批复顺序",
            fieldName: "replyOrder",
            focus: () => 0,
            rules: {
              required: true,
              message: "请输入批复顺序",
              trigger: "change"
            }
          },
          {
            label: "批复内容",
            fieldName: "replyContents",
            type: "textarea",
            focus: () => 0,
            rules: {
              required: true,
              message: "请输入内容",
              trigger: "change"
            }
          },
        ],
      },
      ruleForm: {
        replyTypeCode: "",
        replyContents: "",
        isEnable: ""
      },
      rules: {
        brandName: [
          { required: true, message: "请选择品牌" },
          { min: 1, message: "品牌选择不能为空" }
        ]
      },
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
      },
      maintenanceInfo: {
        replyTypeCode: "",
        replyPerson: "",
        isEnable: "",
        replyOrder: "",
        replyContents: ""
      },
      queryParams: {
        APIUrl: apiSeReply.replyContentsSetQuery.APIUrl,
        InputType: apiSeReply.replyContentsSetQuery.InputType,
        ServiceCode: apiSeReply.replyContentsSetQuery.ServiceCode,
        dataInfo: {
          replyTypeCode: "",
          replyContents: "",
          isEnable: ""
        },
        apiQueryRow: [
          "replyTypeName",
          "replyTypeCode",
          "replyPerson",
          "replyContents",
          "replyOrder",
          "isEnable",
          "isEnableCode",
          "replyId"
        ]
      },
      cols: [
        // {
        //   prop: "controlBtn",
        //   label: "AAA",
        //   codeField: "controlBtn",
        //   width: 60,
        //   align: "center",
        //   isComponent: true,
        //   comps: [
        //     {
        //       compKey: "propKey0",
        //       labelName: this.$t('sys.button.edit'),
        //       codeField: "editControlBtn",
        //       clickEvent: this.openReplySaveDialog,
        //       component: () => import ("@/components/org/linkButton")
        //     }
        //   ]
        // },
        { label: "批复类型编码", codeField: "replyTypeCode", hidden: true},
        { label: "批复类型", codeField: "replyTypeName"},
        { label: "批复人", codeField: "replyPerson"},
        { label: "批复内容", codeField: "replyContents"},
        { label: "批复顺序", codeField: "replyOrder"},
        { label: "状态", codeField: "isEnable"},
        { label: "状态编码", codeField: "isEnableCode", hidden: true}
      ],
    };
  },
  created() {
      // this.fetchData();
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
      if (this.toggleParam) {
        this.moreBtnIcon = "el-icon-minus";
      } else {
        this.moreBtnIcon = "el-icon-plus";
      }
    },
    
    fetchData(){
        this.$refs.tableList.queryList()
    },
   //重置
    reset() {
      this.queryParams.dataInfo.replyTypeCode = "";
      this.queryParams.dataInfo.replyContents = "";
      this.queryParams.dataInfo.isEnable = "";
    },
    //打开弹窗
    openReplySaveDialog() {
      //debugger
      this.replySaveVisible = true;
      var rows = this.$refs.tableList.currentRow;
      
      this.maintenanceInfo = Object.assign({}, rows);
      console.log(this.maintenanceInfo)

      this.maintenanceInfo.replyTypeCode = rows[0].replyTypeCode;
      this.maintenanceInfo.replyPerson = rows[0].replyPerson;
      this.maintenanceInfo.isEnable = rows[0].isEnable;
      this.maintenanceInfo.replyOrder = rows[0].replyOrder;
      this.maintenanceInfo.replyContents = rows[0].replyContents;
      
    },
    //弹框信息保存
    replySave() {
      const that = this;
      that.$refs["ruleForm"].validate(valid => {
        if (valid) {
          const queryObj = {
            // 请求类型&参数 保存mutation  查询query
            type: "mutation",
            typeParam:
              "($dataInfo: " + apiSeReply.replyContentsSetSave.InputType + ")",
            // 请求API
            apiUrl: apiSeReply.replyContentsSetSave.APIUrl,
            // 需要调用的API服务配置
            apiServices: [
              {
                // API服务编码&参数
                apiServiceCode: apiSeReply.replyContentsSetSave.ServiceCode,
                apiServiceParam: "(dataInfo: $dataInfo)",
                // 表格中台返回网格的字段
                apiQueryRow: []
              }
            ],
            // 条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              // 当前中台使用的名称有dataInfo、info，具体查看API文档
              dataInfo: this.maintenanceInfo
            }
          };
          //转换了中台请求格式数据
          var paramD = that.$getParams(queryObj);
          requestGraphQL(paramD).then(response => {
            if (
              response.data[apiSeReply.replyContentsSetSave.ServiceCode].result === "1"
            ) {
              this.$message({ message: "保存成功", type: "success" });
              //that.$refs.multipleTable.clearSelection();
            } else {
              this.$message({
                message: "保存失败",
                type: "warning",
                uration: 2000
              });
            }
          });
        } else {
          return false;
        }
      });
    },
    //重置弹窗
    resetField() {

    },
    getReplyType(val) {
        this.queryParams.dataInfo.replyTypeCode = val;
    }, 
    getIsEnable(val) {
        this.queryParams.dataInfo.isEnable = val;
    }
  }
};
</script>
