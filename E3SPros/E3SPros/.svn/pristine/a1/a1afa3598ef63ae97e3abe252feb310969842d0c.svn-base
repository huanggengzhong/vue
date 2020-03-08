<template>
  <el-dialog
    title="选择派工单"
    :visible.sync="choosePartOEMVisible"
    center
    :append-to-body="true"
    :close-on-click-modal="false"
    width="70%"
    @close="closeDialog">
    <div class="filter-container filter-params">
      <mix-form ref="partOEMForm" :dynamicFormFields="queryFields" :dynamicFieldsData="queryParams.dataInfo"></mix-form>
      <mix-button name="searchBtns" :dynamicButtons="queryBtns" :isShowMore=false></mix-button>
      <mix-table
        ref="tableList"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        @rowClick="rowClick"
        :isShowSelect="true"
        :isPaging="false"
        :isDialog="true"
        :onetableHeight=270
        multipleSelect="selection"
      />
    </div>
  </el-dialog>
</template>
<script>
import mixTable from "@/components/basicComponent/mixTable";
import mixForm from '@/components/basicComponent/mixForm'
import mixButton from '@/components/basicComponent/mixButton'
import { recallApi } from "@/api/graphQLApiList/se";
import { format } from "path";
export default {
  components: {
    mixTable,
    mixForm,
    mixButton
  },
  props: {
    choosePartOEMVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
       isShow: true,
       queryFields: [
        { 
          label: '备件品牌', 
          codeField: 'partBrandCode', 
          type: 'dropdownList',
          span: 8,
          rules: { required: true, message: '请选择', trigger: 'blur' }
        },
        {
          label: '备件编码',
          codeField: 'partName',
          type: 'inputTxt',
          span: 8,
          rules: { required: true, message: '请输入', trigger: 'blur' },
        },
        { 
          label: '备件名称', 
          codeField: 'elementNameCn', 
          type: 'inputTxt', 
          span: 8,
          rules: { required: true, message: '请输入', trigger: 'blur' }
        },
      ],
      queryBtns: {
        left: [

        ],
        right: [
          {
            label: '查询',
            name: 'search',
            event: this.fetchData
          },
          {
            label: '选择',
            name: 'choose',
            event: this.chooseData
          },
          {
            label: '重置',
            name: 'reset',
            event: this.resetData
          }
        ]
      },
      cols: [
        { label: "备件id", codeField: "partId" },
        { label: "备件品牌", codeField: "partBrandCodeName" },
        { label: "备件编码", codeField: "partNo"},
        { label: "配件名称", codeField: "elementNameCn" },
        { label: "规格参数", codeField: "partTechSummary" },
        { label: "最小包装量", codeField: "" },
        { label: "用户价", codeField: "repairTel" },
        { label: "网点价", codeField: "dlrPrice" }
      ],
      queryParams: {
        APIUrl: recallApi.seChoosePartListQueryFind.APIUrl,
        InputType: recallApi.seChoosePartListQueryFind.InputType,
        ServiceCode: recallApi.seChoosePartListQueryFind.ServiceCode,
        dataInfo: {
          partBrandCode: '',
          elementNameCn: '',
          partName: ''
        },
        apiQueryRow: [
          'partId',
          'partBrandCodeName',
          'partNo',
          'elementNameCn',
          'isRefine',
          'partTechSummary',
          'costPrice',
          'dlrPrice',
          'updateControlId'
        ]
      },
      selectRows: [],
    };
  },

  methods: {
    //查询
    fetchData() {
      this.$refs.tableList.queryList();
    },
    // rowClick(val) {
    //   console.log(val);
    //   this.rowClickData = val;
    // },
    //选择
    chooseData() {
      this.selectRows = this.$refs.tableList.currentRow;
      if (this.selectRows.length < 1) {
         this.$message({
            type: 'warning',
            message: '暂无数据选中！'
          });
          return;
      }
      this.choosePartOEMVisible = false;
      this.$emit("changeCode", this.selectRows);
    },
    //重置
    resetData() {
      this.queryParams.dataInfo.partBrandCode = '';
      this.queryParams.dataInfo.elementNameCn = '';
      this.queryParams.dataInfo.partName = '';
    },
    closeDialog() {
      this.$emit("close", false);
    }
  }
};
</script>