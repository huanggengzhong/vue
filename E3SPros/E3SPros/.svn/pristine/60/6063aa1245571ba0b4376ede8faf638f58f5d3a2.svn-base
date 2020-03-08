<template>
  <el-dialog
    title="备件多选"
    :visible.sync="wiOrderVisible"
    center
    :append-to-body="true"
    :close-on-click-modal="false"
    width="70%"
    @close="closeDialog">
    <div class="filter-container filter-params">
      <mix-form ref="wiOrderForm" :dynamicFormFields="queryFields" :dynamicFieldsData="queryFieldsData"></mix-form>
      <mix-button v-if="isShow" name="searchBtns" ref="wiOrderBtn" :dynamicButtons="queryBtns" :isShowMore=false></mix-button>
      <mix-table
        ref="tableList"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        @rowClick="rowClick"
        :isShowSelect="false"
        :isPaging="false"
        :isDialog="true"
        :onetableHeight=270
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
    wiOrderVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
  },
  data() {
    return {
       isShow: true,
       queryFields: [
        { 
          label: '车牌号', 
          codeField: 'carLicense', 
          type: 'inputTxt',
          span: 8,
          rules: { required: true, message: '请输入', trigger: 'blur' }
        },
        {
          label: '客户姓名',
          codeField: 'custName',
          type: 'inputTxt',
          span: 8,
          rules: { required: true, message: '请选择召回专案类型', trigger: 'blur' },
        },
        { 
          label: '客户电话', 
          codeField: 'repairTel', 
          type: 'inputTxt', 
          span: 8,
          rules: { required: true, message: '请输入主题', trigger: 'blur' }
        },
        { 
          label: '派工单号', 
          codeField: 'repairOrderCode', 
          type: 'inputTxt',
          span: 8,
          rules: { required: true, message: '请输入召回专案编号', trigger: 'blur' }
        },
        { 
          label: '保修起止时间', 
          codeField: 'date',
          type: 'inputDate',
          span: 8,
          dateType: 'daterange',
          rules: { required: true, message: '请选择时间', trigger: 'blur' }
        },
        { 
          label: 'VIN码', 
          codeField: 'ctCode',
          type: 'inputTxt',
          span: 8,
          rules: { required: true, message: '请选择故障原因码', trigger: 'blur' }
        },
        { 
          label: '工单所属网点', 
          codeField: 'productFactory', 
          type: 'dropdownList',
          span: 8,
          options: [
            {value: '',label: '全部'},
            {value: '1',label: '乘用车公司'},
          ],
          rules: { required: true, message: '请输入生产工厂', trigger: 'blur' }
        },
        { 
            label: '申请单号', 
            codeField: 'guaranteeApplyCode', 
            type: 'inputTxt',
            span: 8,
            rules: { required: true, message: '请输入责任单位类别', trigger: 'blur' } 
        },
        { 
            label: '同意编号', 
            codeField: 'agreeNo', 
            type: 'inputTxt', 
            span: 8,
            rules: { required: true, message: '请输入责任单位代码', trigger: 'blur' } 
        },
        // { 
        //     label: '已做保修鉴定', 
        //     codeField: 'isUsed', 
        //     type: 'radio', 
        //     span: 8,
        // },
        // { 
        //     label: '未做保修鉴定', 
        //     codeField: 'isUsed', 
        //     type: 'radio',
        //     span: 8
        // }
      ],
      queryFieldsData: {
        dlrId: '',
        custName: '',
        isUsed: '',
        vin: '',
        repairTel: '',
        repairMan: '',
        carLicense: '',
        repairOrderCode: '',
        guaranteeApplyCode: '',
        agreeNo: '',
        repairTimeBegin: '',
        repairTimeEnd: '',
        ownerDlrId: '',
        sceneCode: '',
        carType: '',
        isLike: ''
      },
      queryBtns: {
        left: [

        ],
        right: [
          {
            label: '精确查询',
            name: 'search',
            event: this.fetchData
          },
          {
            label: '模糊查询',
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
      rowClickData: [],
      cols: [
        { label: "派工单号", codeField: "repairOrderCode" },
        { label: "客户姓名", codeField: "custName"},
        { label: "VIN", codeField: "vin" },
        { label: "车牌号", codeField: "carLicense" },
        { label: "保修人", codeField: "repairMan" },
        { label: "保修人电话", codeField: "repairTel" },
        { label: "保修时间", codeField: "recallCaseType" },
        { label: "预计交车时间", codeField: "recallCaseType" },
        { label: "申请单号", codeField: "guaranteeApplyCode" },
        { label: "同意编号", codeField: "agreeNo" },
        { label: "SA姓名", codeField: "saName" },
      ],
      queryParams: {
        APIUrl: recallApi.seChooseRepairOrderQueryFind.APIUrl,
        InputType: recallApi.seChooseRepairOrderQueryFind.InputType,
        ServiceCode: recallApi.seChooseRepairOrderQueryFind.ServiceCode,
        dataInfo: {
          dlrId: '',
          custName: '',
          isUsed: '',
          vin: '',
          repairTel: '',
          repairMan: '',
          carLicense: '',
          repairOrderCode: '',
          guaranteeApplyCode: '',
          agreeNo: '',
          repairTimeBegin: '',
          repairTimeEnd: '',
          ownerDlrId: '',
          sceneCode: '',
          carType: '',
          isLike: ''
        },
        apiQueryRow: [
          'repairOrderId',
          'repairOrderCode',
          'custName',
          'vin',
          'carLicense',
          'repairMan',
          'repairTel',
          'repairTime',
          'preGetDate',
          'guaranteeApplyCode',
          'agreeNo',
          'sceneCode',
          'saName'
        ]
      }
    };
  },

  methods: {
    //查询
    fetchData() {
      this.$refs.tableList.queryList();
    },
    rowClick(val) {
      console.log(val);
      this.rowClickData = val;
    },
    //选择
    chooseData() {
      if (this.rowClickData.length < 1) {
         this.$message({
            type: 'warning',
            message: '暂无数据选中！'
          });
          return;
      }
      this.wiOrderVisible = false;
      this.$emit("changeCode", this.rowClickData);
    },
    //重置
    resetData() {
      this.queryParams.dataInfo.dlrId = '';
      this.queryParams.dataInfo.custName = '';
      this.queryParams.dataInfo.isUsed = '';
      this.queryParams.dataInfo.vin = '';
      this.queryParams.dataInfo.repairTel = '';
      this.queryParams.dataInfo.repairMan = '';
      this.queryParams.dataInfo.carLicense = '';
      this.queryParams.dataInfo.repairOrderCode = '';
      this.queryParams.dataInfo.guaranteeApplyCode = '';
      this.queryParams.dataInfo.repairTimeBegin = '';
      this.queryParams.dataInfo.repairTimeEnd = '';
      this.queryParams.dataInfo.ownerDlrId = '';
      this.queryParams.dataInfo.sceneCode = '';
      this.queryParams.dataInfo.carType = '';
      this.queryParams.dataInfo.isLike = '';
    },
    closeDialog() {
      this.$emit("close", false);
    }
  }
};
</script>