/**
* description: 经销商选择
* author: ydche
* createdDate: 2019-08-14
* logs：
*
*/
<template>
    <section class="carType">
        <el-dialog 
        :key="isMul"
        :title="thimeTitle"
        :visible.sync="seComQueChoDlrVisible"
        center
        @close="close"
        width="1000px"
        :append-to-body="true"
        >
        <el-row>
            <el-col :span="this.MuSpan">
                <el-row>
                        <div class="filter-container filter-params">
                            <el-row :gutter="10">
                                <!-- 组织品牌 -->
                                <carBrand 
                                :span="8" 
                                :key="componentsKeys.carBrandCode"
                                :code="formCode.carBrandCode" 
                                labelName="组织品牌" 
                                @changeCode="getBrandCode" 
                                ref="carBrand"
                                :isMul="false"></carBrand>

                                <!--大区-->
                                <BigArea 
                                :span="8" 
                                :code="formCode.bigAreaCode"
                                :key="componentsKeys.bigAreaCode"
                                @changeCode="getBigArea" 
                                :carBrandCode="formField.dataInfo.carBrandCode"
                                ref="bigArea"
                                :isMul="false"/>
                                <!--小区-->
                                <SmallArea 
                                :span="8" 
                                :code="formCode.smallAreaCode"
                                :key="componentsKeys.smallAreaCode"
                                @changeCode="getSmallArea" 
                                :bigAreaId="formField.dataInfo.bigAreaId"
                                ref="small"
                                :isMul="false"/>

                                <!--省份-->
                                <ProvinceQuery 
                                :span="8" 
                                :key="componentsKeys.provinceCode"
                                :code="formCode.provinceCode"
                                ref="province" 
                                @changeCode="getProvince" 
                                :isMul="false"/>
                                <!--城市-->
                                <CitySelect 
                                :span="8" 
                                :key="componentsKeys.cityCode"
                                :code="formCode.cityCode"
                                ref="city"
                                :provinceId="formField.dataInfo.provinceId"
                                @changeCode="getCity" 
                                :isMul="false"/>

                                <!--营业状态-->
                                <LookupValue
                                :span="8"
                                :isMul="false"
                                :isshow="true"
                                :code="formField.dlrStatus"
                                :lookuptype="dlrStatusCode"
                                :labelName="dlrStatusName"
                                @changeCode="getDlrStatus"
                                />
                                <el-col :span="8" class="margin-b-10">
                                  <!--<label class="margin-r-0">经销商名称</label>-->
                                  <lableName curLabelName="经销商简称" :isShowLabel="true" :isRequire="false">经销商名称</lableName>
                                  <el-input
                                    v-model="formField.dlrShortName"
                                    size="small"
                                  />
                                </el-col>
                                <el-col :span="8" class="margin-b-10">
                                  <!--<label class="margin-r-0">经销商编码</label>-->
                                  <lableName curLabelName="经销商编码" :isShowLabel="true" :isRequire="false">经销商编码</lableName>
                                  <el-input
                                    v-model="formField.dlrCode"
                                    size="small"
                                  />
                                </el-col>
                                <!--经销商类型-->
                                <LookupValue
                                :span="8"
                                :isMul="false"
                                :isshow="true"
                                :code="formField.orgType"
                                :lookuptype="orgTypeCode"
                                :labelName="orgTypeName"
                                @changeCode="getOrgType"
                                />
                                <el-col class="margin-b-0">
                                    <div class="filter-container filter-button">
                                        <el-button type="primary" size="small" @click="fetchComQueChoDlr()">查询</el-button>
                                        <el-button size="small" @click="select">选择</el-button>
                                        <el-button size="small" @click="reset">重置</el-button>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <!--<div class="filter-container filter-title">查询结果</div>-->
                        <el-col v-if="radio">
                            <el-table
                            :data="list"
                            element-loading-text="listLoading"
                            border
                            stripe
                            max-height="230"
                            v-loading="listLoading"
                            highlight-current-row
                            @row-click="rowClickSelect"
                            ref="chooseWiTable"
                            >
                                <el-table-column align="center" label="序号" width="55">
                                    <template slot-scope="scope">
                                    {{ scope.$index + 1 }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="组织品牌" width="120" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.carBrandCn }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="地区" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.areaName }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="大区" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.bigAreaName }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="小区" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.smallAreaName }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="经销商编码" width="120" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.dlrCode }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="经销商Id" v-if="false">
                                    <template slot-scope="scope">
                                    {{ scope.row.dlrId }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="经销商简称" width="150" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.dlrShortName }}
                                    </template>
                                </el-table-column>
                                 <el-table-column label="经销商名称" width="150" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.dlrFullName }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="经销商地址" width="120" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.areaName }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="经销商类型" width="120" align="center" v-if="false">
                                    <template slot-scope="scope">
                                    <!--{{ scope.row.dlrType }}-->
                                    <span v-if="scope.row.dlrType == 1">4S店</span>
                                    <span v-else-if="scope.row.dlrType == 2">直营二网</span>
                                    <span v-else-if="scope.row.dlrType == 3">虚拟4S店</span>
                                    <span v-else-if="scope.row.dlrType == 4">备件采购类</span>
                                    <span v-else-if="scope.row.dlrType == 5">服务类</span>
                                    <span v-else-if="scope.row.dlrType == 6">钣喷中心</span>
                                    <span v-else-if="scope.row.dlrType == 7">二手车中心</span>
                                    <span v-else-if="scope.row.dlrType == 8">配送中心</span>
                                    <span v-else-if="scope.row.dlrType == 9">服务二网</span>
                                    <span v-else-if="scope.row.dlrType == 10">其他</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="营业状态" width="120" align="center" v-if="false">
                                    <template slot-scope="scope">
                                    {{ scope.row.dlrStatusName }}
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                            background
                            layout="prev, pager, next, sizes, ->, total"
                            prev-text="上一页"
                            next-text="下一页"
                            :page-sizes="[10, 20, 30]"
                            :page-size="10"
                            :total="pageTotal"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            />
                        </el-col>
                        <el-col v-if="multiple">
                            <el-table
                            :data="list"
                            element-loading-text="listLoading"
                            border
                            stripe
                            max-height="230"
                            style="width: 100%"
                            v-loading="listLoading"
                            highlight-current-row
                            @select="selectTable"
                            @select-all="selectTable"
                            ref="chooseWiTabless"
                            >
                                <el-table-column align="center" label="序号" width="55">
                                    <template slot-scope="scope">
                                    {{ scope.$index + 1 }}
                                    </template>
                                </el-table-column>
                                <el-table-column
                                type="selection"
                                width="45">
                                </el-table-column>
                                <el-table-column label="组织品牌" width="120" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.carBrandCn }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="地区" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.areaName }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="大区" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.bigAreaName }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="小区" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.smallAreaName }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="经销商编码" width="120" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.dlrCode }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="经销商Id" v-if="false">
                                    <template slot-scope="scope">
                                    {{ scope.row.dlrId }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="经销商简称" width="150" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.dlrShortName }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="经销商名称" width="300" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.dlrFullName }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="经销商地址" width="120" align="center"> 
                                    <!--地区跟经销商地址有什么区别-->
                                    <template slot-scope="scope">
                                    {{ scope.row.areaName }}
                                    </template>
                                </el-table-column>
                                <el-table-column label="经销商类型" width="120" align="center">
                                    <template slot-scope="scope">  
                                    <!--{{ scope.row.dlrType }}-->
                                    <!--后台提供对应关系-->
                                    <span v-if="scope.row.dlrType == 1">4S店</span>
                                    <span v-else-if="scope.row.dlrType == 2">直营二网</span>
                                    <span v-else-if="scope.row.dlrType == 3">虚拟4S店</span>
                                    <span v-else-if="scope.row.dlrType == 4">备件采购类</span>
                                    <span v-else-if="scope.row.dlrType == 5">服务类</span>
                                    <span v-else-if="scope.row.dlrType == 6">钣喷中心</span>
                                    <span v-else-if="scope.row.dlrType == 7">二手车中心</span>
                                    <span v-else-if="scope.row.dlrType == 8">配送中心</span>
                                    <span v-else-if="scope.row.dlrType == 9">服务二网</span>
                                    <span v-else-if="scope.row.dlrType == 10">其他</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="营业状态" width="120" align="center">
                                    <template slot-scope="scope">
                                    {{ scope.row.dlrStatusName }}
                                    <!--<span v-if="scope.row.dlrStatus == 0">停业</span>
                                    <span v-else-if="scope.row.dlrStatus == 1">营业</span>
                                    <span v-else-if="scope.row.dlrStatus == 2">在建</span>
                                    <span v-else-if="scope.row.dlrStatus == 3">取消</span>
                                    <span v-else-if="scope.row.dlrStatus == 4">整改</span>
                                    <span v-else-if="scope.row.dlrStatus == 7">建店撤销</span>-->
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                            background
                            layout="prev, pager, next, sizes, ->, total"
                            prev-text="上一页"
                            next-text="下一页"
                            :page-sizes="[10, 20, 30]"
                            :page-size="10"
                            :total="pageTotal"
                            :current-page.sync="listQuery.pageIndex"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            />
                    </el-col>
            </el-row>
            </el-col>
            <el-col :span="8" v-if="multiple">
                <seCommonQueryChooseDlrMu ref="seComQueCho" @sentData="getMuData" @clearSelect="clearSelect"/>
            </el-col>
        </el-row>
        </el-dialog>
    </section>
 </template>
<script>
import { doseCommonQueryChooseDlr} from '@/api/se/seCommonQueryChooseDlr'
import { seApis,seComQueChoDlrApi } from '@/api/graphQLApiList/se'
import carBrand from '@/components/org/carBrand/carBrand'
import CitySelect from '@/components/org/CitySelect'
import BigArea from '@/components/org/BigArea'
import SmallArea from '@/components/org/SmallArea'
import ProvinceQuery from '@/components/org/ProvinceQuery'
import seCommonQueryChooseDlrMu from './seCommonQueryChooseDlrMu'
import lableName from "@/components/lableName/index"
import LookupValue from "@/components/org/LookupValue"
import { requestGraphQL } from '@/api/commonRequest'
import { watch } from 'fs'

export default {
 components: {
    carBrand,
    CitySelect,
    BigArea,
    SmallArea,
    ProvinceQuery,
    seCommonQueryChooseDlrMu,
    lableName,
    LookupValue
  },
  props:{
    seComQueChoDlrVisible:{
      type:Boolean,
      default:function(){
        return false
      }
    },
    code:{
      type:String,
      default:function(){
        return ''
      }
    },
    isMul:{
      type:Boolean,
      default:function(){
        return false
      }
    }
  },
  data() {
    return {
      dlrStatusCode: 'DB0066',
      dlrStatusName: '营业状态',
      orgTypeCode: 'DB0062',
      orgTypeName: '经销商类别',
      radio:true,
      multiple:false,
      codeInside: this.code,
      thimeTitle:'客户多选',
      listLoading: false,
      carTypeVisible:false,
      list: [],
      selectTableList:[],
      rowClickData: {},
      orgBrand:[],
      busStatus:[],
      orgTypeList:[],
      MuSpan:24,
      pageTotal: 0,
      listQuery: {
        pageIndex:1,
        pageSize:10
      },
      formField: {
          dlrStatus:'',
          orgType:'',
          dlrCode:'',
          dlrShortName:'',
          dlrId:'',
          dataInfo: {
              provinceId:'',
              cityId: '',
              carBrandCode: '',
              bigAreaId:'',
              smallAreaId:'',
          }
      },
      componentsKeys: {
          carBrandCode: 'a',
          bigAreaCode: 'b',
          smallAreaCode: 'c',
          cityCode: "d",
          provinceCode: "e",
      },
      formCode: {
          carBrandCode: "",//车辆品牌code
          bigAreaCode: "",//大区code
          smallAreaCode: "",//小区code
          provinceCode: "", //省份code
          cityCode: "", //城市code
      },
      //表单查询数据备份对象（用于重置）
      backFormField: {},
      backFormCode: {}
    }
  },
  watch: {
    isMul(newValue, oldValue) {
      if(newValue){
        this.thimeTitle='经销商多选'
        this.radio = false
        this.multiple = true
        this.MuSpan = 16
    }else{
        this.thimeTitle='经销商单选'
        this.radio = true
        this.multiple = false
        this.MuSpan = 24
        }
    }
  },
  created() {
    if(this.isMul){
        this.thimeTitle='经销商多选'
        this.radio = false
        this.multiple = true
        this.MuSpan = 16
    }else{
        this.thimeTitle='经销商单选'
        this.radio = true
        this.multiple = false
        this.MuSpan = 24
    }
    
   


    // 赋值formField
    if (this.curValueObject && typeof this.curValueObject === 'object') {
      for (var key in this.formField.dataInfo) {
        if (this.curValueObject[key]) {
          this.formField.dataInfo[key] = this.curValueObject[key]
        } else {
          this.formField.dataInfo[key] = ''
        }
      }
    }
    this.backFormField = JSON.parse(JSON.stringify(this.formField.dataInfo))
    this.backFormCode = JSON.parse(JSON.stringify(this.formCode))
  },

  methods: {
    getBrandCode(val, text, cs, cd, cb) {
        this.formField.dataInfo.carBrandCode = val;
        this.formField.dataInfo.bigAreaId = '';
        this.formField.dataInfo.smallAreaId = '';
        this.componentsKeys.bigAreaCode = 'bigAreaCode' + this.$utils.generateId();
        this.componentsKeys.smallAreaCode = 'smallAreaCode' + this.$utils.generateId();
    },
    getBigArea(val, text, cs, cd, cb){
        this.formField.dataInfo.bigAreaId = val;
        this.formField.dataInfo.smallAreaId = '';
        this.componentsKeys.smallAreaCode = 'smallAreaCode' + this.$utils.generateId();
    },
    getSmallArea(val, text, cs, cd, cb){
        this.formField.dataInfo.smallAreaId = val
    },
    getProvince(val, text, cs, cd, cb) {
        this.formField.dataInfo.provinceId = val;
        this.formField.dataInfo.cityId = '';
        this.componentsKeys.cityCode = 'cityCode' + this.$utils.generateId();
    },
    getCity(val, text, cs, cd, cb){
        //this.listQuery.bigAreaId = val
        this.formField.dataInfo.cityId = val;
    },
    fetchComQueChoDlr(pageSize, pageIndex, dataInfo){
        this.listLoading = true;
        let queryParam = {
             dlrStatus: this.formField.dlrStatus,
             orgType: this.formField.orgType,
             dlrCode: this.formField.dlrCode,
             dlrShortName: this.formField.dlrShortName,
             dlrId: this.formField.dlrId,
             provinceId: this.formField.dataInfo.provinceId,
             cityId: this.formField.dataInfo.cityId,
             carBrandCode: this.formField.carBrandCode,
             bigAreaId: this.formField.dataInfo.bigAreaId,
             smallAreaId: this.formField.dataInfo.smallAreaId,
             carBrandCode :this.formField.dataInfo.carBrandCode
        };
        doseCommonQueryChooseDlr(this.listQuery.pageSize,this.listQuery.pageIndex,queryParam).then(response => {
            if (response.data[seComQueChoDlrApi.mdmOrgdlrQueryByPage.ServiceCode].result === "1") {
                this.list = response.data[seComQueChoDlrApi.mdmOrgdlrQueryByPage.ServiceCode].rows;
                this.pageTotal = response.data[seComQueChoDlrApi.mdmOrgdlrQueryByPage.ServiceCode].records;
            }
            this.listLoading = false
        })
    },
    reset(){
        (this.componentsKeys = {
            carBrandCode: "a" + Math.random(),
            bigAreaCode: "b" + Math.random(),
            smallAreaCode: "c" + Math.random(),
            cityCode: "d" + Math.random(),
            provinceCode: "e" + Math.random()
        });
        this.formCode = JSON.parse(JSON.stringify(this.backFormCode));
        this.formField.dataInfo = JSON.parse(JSON.stringify(this.backFormField));
        this.formField.dlrStatus = ''
        this.formField.dlrCode = ''
        this.formField.dlrShortName = ''
        this.formField.orgType = ''
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.fetchComQueChoDlr()
    },
    handleCurrentChange(val) {
       this.listQuery.pageIndex = val
       this.fetchComQueChoDlr()
    },
    select(){
        if(this.isMul){
            if (this.selectTableList.length === 0) {
                this.$alert('您未选中数据！', '信息提示', {
                    confirmButtonText: '确定',
                    type: 'warning',
                    callback: action => {
                    }
                }); 
            } else {
                  var selectDlrsRow = {
                        dlrCode: "",
                        dlrFullName: "",
                        dlrId:"",
                        carBrandCn:""
                    };
                    for (var n = 0; n < this.selectTableList.length; n++) {
                        let flag = true;
                        if (this.$refs.seComQueCho.list.length != null) {
                        for (var m = 0; m < this.$refs.seComQueCho.list.length; m++) {
                            if (this.$refs.seComQueCho.list[m].dlrCode == this.selectTableList[n].dlrCode)
                            flag = false;
                        }
                        }
                        if (flag) {
                        selectDlrsRow.dlrCode = this.selectTableList[n].dlrCode;
                        selectDlrsRow.dlrFullName = this.selectTableList[n].dlrFullName;
                        selectDlrsRow.dlrShortName = this.selectTableList[n].dlrShortName;
                        selectDlrsRow.dlrId = this.selectTableList[n].dlrId;
                        selectDlrsRow.carBrandCn = this.selectTableList[n].carBrandCn;
                        this.$refs.seComQueCho.list.push(
                            JSON.parse(JSON.stringify(selectDlrsRow))
                        );
                        }
                    }
                // this.$refs.seComQueCho.getData(this.selectTableList);
            }
        } else {
            if(JSON.stringify(this.rowClickData)=='{}') {
                this.$alert('您未选中数据！', '信息提示', {
                    confirmButtonText: '确定',
                    type: 'warning',
                    callback: action => {
                    }
                });
            } else {
                this.$emit("sentCode", this.rowClickData)
                this.close()
            }
        }
    },
    // sentRowClick(){
    //     this.$emit("sentCode", this.rowClickData)
    // },
    close(){
        this.$emit("close",false)
    },
    
    rowClickSelect(row, event) {
        this.rowClickData = row
    },
    resetList(){
        this.reset()
        this.list = []
        this.selectTableList = []
        this.$refs.seComQueCho.resetList()
    },
    selectTable(selection){
        this.selectTableList = selection;
    },
    getMuData(val){
        this.$emit("sentData", val)
        this.close()
    },
    getDlrStatus(val) {
        this.formField.dlrStatus = val
    },
    getOrgType(val, text) {
        this.formField.orgType = val
    },
    clearSelect() {
        this.$refs.chooseWiTabless.clearSelection();
        this.resetList();
    }
  }
}
</script>
<style scoped>
.margin-r-0{
    margin-right: 0;
}
.margin-b-10{
    margin-bottom: 10px;
}
.margin-b-0{
    margin-bottom: 0;
}
.padding-l-10{
    padding-left: 10px;
}
.textalign-l{
    text-align: left;
}
.color_{
    color: #169BD5;
}
.dis-IB{
    display: inline-block;
}
</style>
