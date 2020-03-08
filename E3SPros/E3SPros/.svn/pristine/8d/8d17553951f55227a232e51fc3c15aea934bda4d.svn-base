<!--
* description: 维修施工单-打印
* author: ydche
* createdDate: 2019-08-08
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1200px">
      <el-row class="textCenter paddingB10" >
          <el-col :span="6">
            厂商标志
          </el-col>
          <el-col :span="12">
              <h2 style="margin:0">维修施工单</h2>
          </el-col>
      </el-row>
      <el-row class="textCenter paddingB5">
          <el-col :span="8">
            门店简称：{{this.dlrinfo.dlrShortName}}
          </el-col>
          <el-col :span="8">
              售后服务热线：{{this.dlrinfo.serviceTel}}
          </el-col>
          <el-col :span="8">
              服务顾问：{{this.list.saName}}
          </el-col>
      </el-row>
      <el-row class="textCenter paddingB5">
          <el-col :span="8">
            门店地址：{{this.dlrinfo.linkAddr}}
          </el-col>
          <el-col :span="8" :offset="8">
              打印时间：{{time | formatDate}}
          </el-col>
      </el-row>

      <el-row class="lineHeight32">
        <el-row class="paddingB10">
          <el-row class="textCenter">
            <el-col :span="2" class="border1">
              施工单号：
            </el-col>
            <el-col :span="4" class="border1">
              {{this.list.repairOrderCode}}
            </el-col>
            <el-col :span="2" class="border1">
              行驶里程：
            </el-col>
            <el-col :span="3" class="border1">
              {{this.list.mileage}}(KM)
            </el-col>
            <el-col :span="2" class="border1">
              报修时间：
            </el-col>
            <el-col :span="4" class="border1">
              {{this.list.repairTime}}
            </el-col>
            <el-col :span="3" class="border1">
              预约交车时间：
            </el-col>
            <el-col :span="4" class="border1">
              {{this.list.preGetDate}}
            </el-col>
          </el-row>
          <el-row class="textCenter">
            <el-col :span="2" class="border1">
              VIN：
            </el-col>
            <el-col :span="4" class="border1">
              {{this.list.vin}}
            </el-col>
            <el-col :span="2" class="border1">
              车牌号：
            </el-col>
            <el-col :span="3" class="border1">
              {{this.list.carLicenseNo}}
            </el-col>
            <el-col :span="2" class="border1">
              车型：
            </el-col>
            <el-col :span="4" class="border1">
              {{this.list.carTypeName}}
            </el-col>
            <el-col :span="3" class="border1">
              颜色：
            </el-col>
            <el-col :span="4" class="border1">
              {{this.list.carColorName}}
            </el-col>
          </el-row>
          <el-row class="textCenter">
            <el-col :span="2" class="border1">
              客户姓名：
            </el-col>
            <el-col :span="4" class="border1">
              {{this.list.custName}}
            </el-col>
            <el-col :span="2" class="border1">
              客户电话：
            </el-col>
            <el-col :span="3" class="border1">
              {{this.list.custTel}}
            </el-col>
            <el-col :span="2" class="border1">
              送修人：
            </el-col>
            <el-col :span="4" class="border1">
              {{this.list.repairMan}}
            </el-col>
            <el-col :span="3" class="border1">
              送修人电话：
            </el-col>
            <el-col :span="4" class="border1">
              {{this.list.repairTel}}
            </el-col>
          </el-row>
          <el-row class="textCenter">
            <el-col :span="2" class="border1">
              购车日期：
            </el-col>
            <el-col :span="4" class="border1">
              {{this.list.buyDate}}
            </el-col>
            <el-col :span="2" class="border1">
              是否预约：
            </el-col>
            <el-col :span="3" class="border1">
              {{this.list.isReserve==='1'? '是':'否'}}
            </el-col>
            <el-col :span="2" class="border1">
              在店等待：
            </el-col>
            <el-col :span="4" class="border1">
              {{this.list.isWait==='1'? '是':'否'}}
            </el-col>
            <el-col :span="3" class="border1">
              是否洗车
            </el-col>
            <el-col :span="4" class="border1">
              {{this.list.isClean==='1'? '是':'否'}}
            </el-col>
          </el-row>
          <el-row class="textCenter">
            <el-col :span="2" class="border1">
              客户地址：
            </el-col>
            <el-col :span="22" class="border1" style="text-align:left">
              {{this.list.addr}}
            </el-col>
          </el-row>
          <el-row class="textCenter">
            <el-col :span="2" class="border1">
              客户描述：
            </el-col>
            <el-col :span="22" class="border1" style="text-align:left">
              {{this.list.csDesc}}
            </el-col>
          </el-row>
          <el-row class="textCenter ">
            <el-col :span="2" class="border1">
              处理方法：
            </el-col>
            <el-col :span="22" class="border1" style="text-align:left">
              {{this.list.disposeInfo}}
            </el-col>
          </el-row>
        </el-row>
        <el-row class="paddingB10">
          <el-row class="textCenter ">
            <el-col :span="1" class="border1" style="padding:0">
              序号：
            </el-col>
            <el-col :span="3" class="border1" >
              业务类别：
            </el-col>
            <el-col :span="3" class="border1" >
              维修类别：
            </el-col>
            <el-col :span="4" class="border1" >
              代码：
            </el-col>
            <el-col :span="4" class="border1" >
              项目名称：
            </el-col>
            <el-col :span="3" class="border1" >
              工时数量：
            </el-col>
            <el-col :span="3" class="border1" >
              单价：
            </el-col>
            <el-col :span="3" class="border1" >
              金额：
            </el-col>
          </el-row>
          <el-row class="textCenter ">
            <el-col class="border1" style="text-align:left">
              维修项目：
            </el-col>
          </el-row>
          <el-row class="textCenter " v-for="(item, index) in wiinfo" :key="index">
            <el-col :span="1" class="border1">
              {{index+1}}
            </el-col>
            <el-col :span="3" class="border1" >
              {{item.businessType}}
            </el-col>
            <el-col :span="3" class="border1" >
              {{item.repairTypeCode}}
            </el-col>
            <el-col :span="4" class="border1" >
              {{item.wiCode}}
            </el-col>
            <el-col :span="4" class="border1" >
              {{item.wiName}}
            </el-col>
            <el-col :span="3" class="border1" >
              {{item.saleWorkQty}}
            </el-col>
            <el-col :span="3" class="border1" >
              {{item.wiPrice}}
            </el-col>
            <el-col :span="3" class="border1" >
              {{item.wiAmount}}
            </el-col>
            <el-col :span="21" v-if="item.discountAmount!=0? true : false" class="border1" style="text-align:right">
              优惠
            </el-col>
            <el-col :span="3" v-if="item.discountAmount!=0? true : false" class="border1" >
            {{item.discountAmount}}
            </el-col>
          </el-row>
        </el-row>
        <el-row class="paddingB10">
          <el-row class="textCenter ">
              <el-col class="border1" style="text-align:left">
                备件项目：
              </el-col>
          </el-row>
          <el-row class="textCenter " v-for="(item, index) in partinfo" :key="index">
              <el-col :span="1" class="border1">
                {{index+1}}
              </el-col>
              <el-col :span="3" class="border1" >
                {{item.businessType}}
              </el-col>
              <el-col :span="3" class="border1" >
                {{item.repairTypeCode}}
              </el-col>
              <el-col :span="4" class="border1" >
                {{item.partNo}}
              </el-col>
              <el-col :span="4" class="border1" >
                {{item.partName}}
              </el-col>
              <el-col :span="3" class="border1" >
                {{item.partQty}}
              </el-col>
              <el-col :span="3" class="border1" >
                {{item.partPrice}}
              </el-col>
              <el-col :span="3" class="border1" >
                {{item.partAmount}}
              </el-col>
              <el-col :span="21" v-if="item.discountAmount!=0? true : false" class="border1" style="text-align:right">
                优惠
              </el-col>
              <el-col :span="3" v-if="item.discountAmount!=0? true : false" class="border1" >
                {{item.discountAmount}}
              </el-col>
          </el-row>
        </el-row>
      </el-row>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { requestGraphQL } from '@/api/commonRequest'
import { seApis } from '@/api/graphQLApiList/se'
import OneTableTemplate from '@/components/templates/popupsOneTable'
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: seApis.mdmCarBrandBizSave,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey3', type: 'primary', size: 'small', clickEvent: () => this.save(), text: '确认'},
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text: '重置'},
      ],
      // 动态组件-查询条件
      tableComponents: [
        {compKey: 'compKey1', labelName: '备件编号', codeField: 'partNo', isRequire: true, component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey2', labelName: '备件名称', codeField: 'partName', isRequire: true, component: () => import('@/components/org/commonInput'), type: 'inputText', disabled: true, isMust: true},
        {compKey: 'compKey3', labelName: '数量', codeField: 'partQty', isRequire: true, component: () => import('@/components/org/commonInput'), type: 'inputText', disabled: true, isMust: true},
        {compKey: 'compKey4', labelName: '单价', codeField: 'partPrice', isRequire: true, component: () => import('@/components/org/commonInput'), type: 'inputText', disabled: true, isMust: true},
        {compKey: 'compKey5', labelName: '付费性质', codeField: 'payKind', isRequire: true, component: () => import('@/components/org/commonInput'), type: 'inputText', disabled: true, isMust: true},
        {compKey: 'compKey6', labelName: '合计金额', codeField: 'dueAmount', isRequire: true, component: () => import('@/components/org/commonInput'), type: 'inputText', disabled: true, isMust: true},
        {compKey: 'compKey7', labelName: '厂家付费单价', codeField: 'otherPrice', isRequire: true, component: () => import('@/components/org/commonInput'), type: 'inputText', disabled: true, isMust: true},
        {compKey: 'compKey8', labelName: '厂家比例(%)', codeField: 'otherDiscount', isRequire: true, component: () => import('@/components/org/commonInput'), type: 'inputText', disabled: true, isMust: true},
        {compKey: 'compKey9', labelName: '厂家承担金额', codeField: 'otherDueAmount', isRequire: true, component: () => import('@/components/org/commonInput'), type: 'inputText', disabled: true, isMust: true},
        {compKey: 'compKey10', labelName: '客户付费单价', codeField: 'custPrice', isRequire: true, component: () => import('@/components/org/commonInput'), type: 'inputText', disabled: true, isMust: true},
        {compKey: 'compKey11', labelName: '客户比例(%)', codeField: 'custDiscount', isRequire: true, component: () => import('@/components/org/commonInput'), type: 'inputText', disabled: true, isMust: true},
        {compKey: 'compKey12', labelName: '客户承担金额', codeField: 'custDueAmount', isRequire: true, component: () => import('@/components/org/commonInput'), type: 'inputText', disabled: true, isMust: true},
        {compKey: 'compKey13', labelName: '业务类别', codeField: 'businessType', isRequire: true, component: () => import('@/components/org/commonInput'), type: 'inputText', disabled: true, isMust: true},
        {compKey: 'compKey14', labelName: '折扣额', codeField: 'discountAmount', isRequire: true, component: () => import('@/components/org/commonInput'), type: 'inputText', disabled: true, isMust: true},
      ],
      // 标题
      textMap: {
        edit: '服务车型维护',
        add: '添加品牌信息'
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        partNo: '',
        partName:'',
				partQty:'',
				partPrice:'',
				payKind:'',
				dueAmount:'',
				otherPrice:'',
				otherDiscount:'',
				otherDueAmount:'',
				custPrice:'',
				custDiscount:'',
				custDueAmount:'',
				businessType:'',
				discountAmount:''
      },
      queryList:{
        pageIndex:1,
        pageSize:1,
        query:1,
        dataInfo:{
          oemCode:'',
          groupCode:'',
          dlrId:'',
          repairOrderId	:'',
        }
      },
      list:{},
      dlrinfo:{},
      otherfeeinfo:[],
      partinfo:[],
      wiinfo:[],
      time:Date.parse(new Date()),
    };

  },
  filters: {
                formatDate: function (value) {
                let date = new Date(value);
                let y = date.getFullYear();
                let MM = date.getMonth() + 1;
                MM = MM < 10 ? ('0' + MM) : MM;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                let h = date.getHours();
                h = h < 10 ? ('0' + h) : h;
                let m = date.getMinutes();
                m = m < 10 ? ('0' + m) : m;
                let s = date.getSeconds();
                s = s < 10 ? ('0' + s) : s;
               return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
              }
            },
  created:function(){
  },
  methods: {
    open(data){
      let str = {}
      str = data
      this.curPopupsVisible = true
      this.queryList.dataInfo.repairOrderId = str.repairOrderId
      this.queryList.dataInfo.dlrId = str.dlrId
      this.queryList.dataInfo.groupCode = str.groupCode
      this.queryList.dataInfo.oemCode = str.oemCode
      this.featchData(this.queryList.pageSize, this.queryList.pageIndex, this.queryList.dataInfo)
    },
    //保存
    save(){
      const that = this;
      if (that.$utils.isEmpty(that.formField.partNo)||that.formField.partNo === '') {
        that.$message({
          message: '请输入备件编号',
          type: 'warning',
          duration: 2000
        });
        return;
      }
      //保存表单
      this.saveForm()
    },
    featchData(pageSize,pageIndex,dataInfo){
        const that = this
        const queryObj = {
            // 请求类型&参数 保存mutation  查询query
            type: 'query',
            typeParam:
                '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seBuRepairOrderQueryPrint.InputType + ')',
            // 请求API
            apiUrl: seApis.seBuRepairOrderQueryPrint.APIUrl,
            // 需要调用的API服务配置
            apiServices: [
            {
                // API服务编码&参数
                apiServiceCode: seApis.seBuRepairOrderQueryPrint.ServiceCode,
                apiServiceParam:
                    '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
                // 表格中台返回网格的字段
                apiQueryRow: [

                ]
            }
            ],
            // 条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
            pageSize: pageSize,
            pageIndex: pageIndex,
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: dataInfo
            }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
            console.log(response.data[seApis.seBuRepairOrderQueryPrint.ServiceCode].rows)
              that.list = response.data[seApis.seBuRepairOrderQueryPrint.ServiceCode].rows[0];
              that.dlrinfo = that.list.dlrinfo[0]
              that.otherfeeinfo = that.list.otherfeeinfo
              that.partinfo = that.list.partinfo
              that.wiinfo = that.list.wiinfo
        })
    },
  }
};
</script>
<style scoped>
.textCenter{
    text-align: center
}
.paddingB10{
    padding-bottom: 10px
}
.paddingB5{
    padding-bottom: 5px
}
.border1{
    border: 1px solid #797979;
}
.lineHeight32.el-row {
    line-height: 24px;
}
</style>

