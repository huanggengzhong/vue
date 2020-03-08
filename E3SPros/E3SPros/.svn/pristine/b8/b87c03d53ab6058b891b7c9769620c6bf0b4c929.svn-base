<!--
* description: 报备申请
* author: yangsq
* createdDate: 2019-09-21
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="true"
      :dynamicIsShowMoreBtn="true"
    />
    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      height="780px"
      :dynamicApiConfig="apiConfig"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from '@/cache/configCache/index'

export default {
    name: "veApplicationFilingS",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  // 阻塞路由预加载网格中组件的数据
 beforeRouteEnter(to, from, next) {
  CacheConfig.initData(to.path, function(){next()})
 },
   data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veApplicationForFiling,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query") //查询
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: '申请' //申请
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.delete(),
           text: '删除' //删除
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //重置
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export") //导出
        }

      ],
      // 动态组件-查询条件
      tableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: this.$t("ve.label.carBrandCode"),//品牌
          codeField: "carBrandCode",
          isMul:true,
          component: () =>import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
         {
          compKey: "compKey2",
          labelName: this.$t("org.label.dlrName"),//经销商
          codeField: "dlr",
          component: () => import("@/components/org/orgDlr"),
          type: "propus",
          isMul:false,
          isMust: true
        },
         {
          compKey: "compKey3",
          labelName: "申请时间",//申请时间
          codeField: "applyDate",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          isMul:false,
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "至",//至
          codeField: "reach",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          isMul:false,
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("ve.label.applyType"),//申请状态
          codeField: "custName",
          lookuptype: 'VE0305',
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMul:false,
          isMust: false
        },
        {
          compKey: "compKey6",
          labelName: "政策类型",//政策类型
          lookuptype: 'VE0192',
          codeField: "policyType",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMul:false,
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableCols && CacheConfig.cacheData[this.$route.path].tableCols.length > 0 ? CacheConfig.cacheData[this.$route.path].tableCols: [

        {
          prop: "carBrandCode",
          label: this.$t("ve.label.carBrandCode"),//品牌
          codeField: "carBrandCode",
          width: 160,
          align: "center",
        },
        {
          prop: "bigArea",
          label: "大区",//大区
          width: null,
          align: "center",
        },
        {
          prop: "smallArea",
          label: "小区",//小区
          width: null,
          align: "center",
        },
        {
          prop: "prohibit",
          label: "省份",//省份
          width: null,
          align: "center",

        },
        {
          prop: "cityName",
          label: "城市",//城市
          width: null,
          align: "center",
        },
        {
          prop: "dlr",
          label: "经销商",//经销商
          width: null,
          align: "center",
        },
        {
          prop: "custName",
          label: "客户名称",//客户名称
          width: null,
          align: "center",
        },
        {
          prop: "custType",
          label: "客户类型",//客户类型
          width: null,
          align: "center",
        },
        {
          prop: "credNo",
          label: "证件号码",//证件号码
          width: 160,
          align: "center",
        },
        {
          prop: "policyType",
          label: "政策类型",//政策类型
          width: null,
          align: "center",
        },
        {
          prop: "applyType",
          label: "申请状态",//申请状态
          width: null,
          align: "center",
        },
        {
          prop: "applyPeople",
          label: "申请人",//申请人
          width: null,
          align: "center",
        },
        {
          prop: "auditTime",
          label: "审核时间",//审核时间
          width: null,
          align: "center",
        },
        {
          prop: "auditExplain",
          label: "审核说明",//审核说明
          width: null,
          align: "center",

        },
        {
          prop: "validityPeriodOfFiling",
          label: "报备有效期",//报备有效期
          width: 120,
          align: "center",
        },
        {
          prop: "closingDate",
          label: "截止日期",//截止日期
          width: null,
          align: "center",
        },
        {
          prop: "toReviewPeople",
          label: "复核人",//复核人
          width: null,
          align: "center",
        },
        {
          prop: "toReviewDate",
          label: "复核时间",//复核时间
          width: null,
          align: "center",
        },
        {
          prop: "toReviewExplain",
          label: "复核说明",//复核说明
          width: null,
          align: "center",
        },
        {
          prop: "applyFrequency",
          label: "申请次数",//申请次数
          width: null,
          align: "center",
        },
        {
          prop: "useUnitName",
          label: "使用单位名称",//使用单位名称
          width: 120,
          align: "center",
        },
        {
          prop: "purchasingUnitAddress",
          label: "采购单位地址",//采购单位地址
          width: 120,
          align: "center",
        },
        {
          prop: "personInChargeName",
          label: "经办人姓名",//经办人姓名
          width: 120,
          align: "center",
        },
        {
          prop: "personInChargePost",
          label: "经办人职务",//经办人职务
          width: 120,
          align: "center",
        },
        {
          prop: "personInChargePhoneNumber",
          label: "经办人手机号",//经办人手机号
          width: 120,
          align: "center",
        },
        {
          prop: "personInChargeLandline",
          label: "经办人座机",//经办人座机
          width: 120,
          align: "center",
        },
        {
          prop: "decisionMakerName",
          label: "决策者姓名",//决策者姓名
          width: 120,
          align: "center",
        },
        {
          prop: "decisionMakerPost",
          label: "决策者职务",//决策者职务
          width: 120,
          align: "center",
        },
        {
          prop: "decisionMakerphoneNumber",
          label: "决策者手机号",//决策者手机号
          width: 120,
          align: "center",
        },
        {
          prop: "decisionMakerLandline",
          label: "决策者座机",//决策者座机
          width: 120,
          align: "center",
        },
        {
          prop: "thisTimePurchaseNumber",
          label: "本次采购数量",//本次采购数量
          width: 120,
          align: "center",
        },
        {
          prop: "estimatePurchaseDate",
          label: "预计采购日期",//预计采购日期
          width: 120,
          align: "center",
        },
        {
          prop: "thisYearPurchaseNumber",
          label: "本年度采购总量",//本年度采购总量
          width: 120,
          align: "center",
        },
        {
          prop: "businessScope",
          label: "经营范围",//经营范围
          width: null,
          align: "center",
        },
        {
          prop: "beVisitedPeople",
          label: "被访问者",//被访问者
          width: null,
          align: "center",
        },
        {
          prop: "beVisitedPeoplePost",
          label: "被访问者职务",//被访问者职务
          width: 120,
          align: "center",
        },
        {
          prop: "visitedType",
          label: "访问方式",//访问方式
          width: null,
          align: "center",
        },
        {
          prop: "visitedDate",
          label: "访问日期",//访问日期
          width: null,
          align: "center",
        },
        {
          prop: "negotiationResults",
          label: "商谈结果",//商谈结果
          width: null,
          align: "center",
        },
        {
          prop: "updateControlId",
          label: "并发字段",
          width: null,
          align: "center",
          hidden: true
        }
      ],
      formField: {
        carBrandCode: '',
        dlr: '',
        applyDate: '',
        reach: '',
        updateControlId:'',
        applyType: '',
        policyType: ''
      },
      CacheConfig : '',
    };

  },
    methods: {
    //驳回
    rejectOrder(){
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: '请选择需要驳回的财务单',
          type: 'warning',
          duration: 2000
        });
        return;
      }

      for(var k in selectData){
        let queryObj = {
          // 保存mutation
          type: 'mutation',
          // api配置
          apiConfig: veApis.veApplicationForFiling,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              dlrAccountId: selectData[k].dlrAccountCode,
              dlrAccountRInfoId: selectData[k].purcashTypeId,
              updateControlId	: selectData[k].updateControlId
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response =>{
          if (response.data[queryObj.apiConfig.ServiceCode].result === '1') {
            saveCount++;
          } else {
            saveState = false;
            msg = response.data[queryObj.apiConfig.ServiceCode].msg;
            that.$message({
              message: msg,
              type: 'warning',
              duration: 2000
            });
          }
          if (saveCount == selectData.length) {
            that.$message({
              message: '驳回成功',
              type: 'success',
              duration: 2000
            });

            that.queryTable(1);
          }
        });
      }
    },
    // 复核
    examine(){
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = '';
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: '请选择需要复核的报备申请',
          type: 'warning',
          duration: 2000
        });
        return;
      }
        for(var k in selectData){
        let queryObj = {
          // 保存mutation
          type: 'mutation',
          // api配置
          apiConfig: veApis.veApplicationForFiling,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              dlrAccountId: selectData[k].dlrAccountCode,
              dlrAccountRInfoId: selectData[k].purcashTypeId,
              updateControlId	: selectData[k].updateControlId,
              businessType:selectData[k].businessType,
              businessClass: selectData[k].businessClass,
              amount: selectData[k].amount,
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response =>{
          if (response.data[queryObj.apiConfig.ServiceCode].result === '1') {
            saveCount++;
          } else {
            saveState = false;
            msg = response.data[queryObj.apiConfig.ServiceCode].msg;
            that.$message({
              message: msg,
              type: 'warning',
              duration: 2000
            });
          }
          if (saveCount == selectData.length) {
            that.$message({
              message: '复核成功',
              type: 'success',
              duration: 2000
            });
            that.queryTable(1);
          }
        });
      }
    },
  delete(){
      const that = this.$refs.multipleTable;
      let selectData = that.$refs.multipleTable.selection;
      if(selectData.length<1){
          that.$message({
          message: "请选择需要删除的内容",
          type: "warning",
          duration: 2000
        });
        return;
      }
      for(var k in selectData){
      //通知场景保存
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veApplicationForFiling,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            inStoreId:selectData[k].inStoreId,
            updateControlId:selectData[k].updateControlId
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      that.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.listLoading = false;
            that.$message({
              message: "删除成功",
              type: "success",
              duration: 2000
            });
          }
      });
  }
  },
  }
}
</script>
