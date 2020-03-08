<!--
* description: 申请审核管理-新增、修改弹窗
* author: ydche
* createdDate: 2019-10-14
-->
<template>
  <section class="editCarIncolor">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="close"
      width="1000px"
    >
      <div class="app-container app-container-table paddingTop40 zindex1" >
         <div>
              <div class="filter-container filter-title marginTop0">{{$t('ve.label.orderInfo')/*订单信息*/}}</div>
              <div class="filter-container filter-params margin0">
                            <el-row :gutter="26">
                            <component
                                v-for="comp in tableComponents.filter(o => o.isMust === true)"
                                :key="comp.compKey"
                                :codeField="comp.codeField"
                                :textField="comp.textField"
                                :popupsKey="comp.compKey"
                                :is="comp.component"
                                :code="formField[comp.codeField]"
                                @changeCode="getComponentCode"
                                @focusCode="getFocusCode"
                                 :validrule="comp.validrule"
                                :disabled="comp.disabled"
                                :isRequire="comp.isRequire"
                                :span="comp.span || 6"
                                :labelName="comp.labelName"
                                :lookuptype="comp.lookuptype"
                                :dateOptionsType="comp.dateOptionsType"
                                :dateType="comp.dateType"
                                :isMul="false"
                            ></component>
                            </el-row>
              </div>
              <div class="filter-container filter-title marginTop0">{{$t('ve.label.unsubscribeInfo')/*退订信息*/}}</div>
              <div class="filter-container filter-params margin0">
                            <el-row :gutter="26">
                            <component
                                v-for="comp in tableComponentsSecond.filter(o => o.isMust === true)"
                                :key="comp.compKey"
                                :codeField="comp.codeField"
                                :textField="comp.textField"
                                :popupsKey="comp.compKey"
                                 :validrule="comp.validrule"
                                :is="comp.component"
                                :code="formField[comp.codeField]"
                                @changeCode="getComponentCode"
                                @focusCode="getFocusCode"
                                :disabled="comp.disabled"
                                :isRequire="comp.isRequire"
                                :span="comp.span || 6"
                                :labelName="comp.labelName"
                                :lookuptype="comp.lookuptype"
                                :dateOptionsType="comp.dateOptionsType"
                                :dateType="comp.dateType"
                                :isMul="false"
                            ></component>
                            <el-col :span="6" class="lineHeight28">
                               <a type="primary" @click="seeCusInfo" :underline="false">{{$t('ve.label.customerInfo')/*客户信息*/}}</a>
                            </el-col>
                            </el-row>
              </div>
              <div class="filter-container filter-title marginTop0">{{$t('sys.button.check')/*审核*/}}</div>
              <div class="filter-container filter-params margin0 labelWidth5">
                            <el-row :gutter="26">
                            <component
                                v-for="comp in tableComponentsThird.filter(o => o.isMust === true)"
                                :key="comp.compKey"
                                :codeField="comp.codeField"
                                :textField="comp.textField"
                                :popupsKey="comp.compKey"
                                :is="comp.component"
                                :code="formField[comp.codeField]"
                                @changeCode="getComponentCode"
                                @focusCode="getFocusCode"
                                 :validrule="comp.validrule"
                                :disabled="comp.disabled"
                                :isRequire="comp.isRequire"
                                :span="comp.span || 6"
                                :labelName="comp.labelName"
                                :lookuptype="comp.lookuptype"
                                :dateOptionsType="comp.dateOptionsType"
                                :dateType="comp.dateType"
                                :isMul="false"
                            ></component>
                            </el-row>
              </div>
              <div slot="footer" class="dialog-footer">
                          <el-button
                            v-for="comp in tableButtonsA"
                            :key="comp.compKey"
                            :type="comp.type"
                            @click="comp.clickEvent"
                          >{{comp.text}}</el-button>
              </div>
         </div>
    </div>
    <cusInfor
      :initData="initData"
      :dynamicEditRowData="initData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></cusInfor>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import cusInfor from './cusInfor'
import OneTableTemplate from "@/components/templates/popupsOneTable";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  // 组件混入对象
  mixins: [formMixins],
  components: {
    cusInfor
  },
  data() {
    return {
      show:true,
      // 保存API配置对象
      apiConfig: orgApis.mdmCarIncolorMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save") //"保存"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //"重置"
        },

        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel")
        }
      ],
      tableButtonsA:[
        {compKey: 'btnKey2', type: 'primary', size: 'small', clickEvent: () => this.unsubscribeAgreePop(), text:this.$t('sys.button.agree')},//同意
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.unsubscribeRejectPop(), text:this.$t('sys.button.reject')},//驳回
        {compKey: 'btnKey1', type: '', size: 'small', clickEvent: () => this.reset(), text:this.$t('sys.button.reset')},//刷新
      ],
        tableComponentsA:[
            {
            compKey: "compKey1",
            labelName: this.$t('org.label.carType'),/*车型*/
            codeField: "carSeriesCn",
            component: () => import("@/components/org/carTypeConfig"),
            type: "propus",
            disabled:true,
            isMust: true
            },
            {
            compKey: "compKey2",
            labelName: this.$t('ve.label.vin')/*VIN码*/,
            codeField: "vin",
            component: () => import("@/components/org/commonInput"),
            disabled:true,
            type: "inputText",
            isMust: true
            },
            {compKey: 'compKey3',disabled:true, labelName:  this.$t('org.label.carColor')/*车身颜色*/,textField:'carColorCode', codeField: 'carColorId', component: () => import('@/components/org/carColor'), type: 'propus', isMust: true},
            {compKey: 'compKey4',disabled:true, labelName: this.$t('org.label.carIncolor')/*内饰色*/,textField:'carIncolorCode', codeField: 'carIncolorId', component: () => import('@/components/org/TrimPopupColor'), type: 'propus', isMust: true},
            {
            compKey: "compKey5",
            labelName: this.$t('ve.label.orderNums')/*订单编号*/,
            codeField: "orderNums",disabled:true,
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey6",
            labelName: this.$t('ve.label.sellingPrice')/*销售价格*/,
            codeField: "specialAmount",disabled:true,
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey7",
            labelName: this.$t('ve.label.contractReceived'),/*已收合同款*/
            codeField: "specialAmount",disabled:true,
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey8",
            labelName: this.$t('org.label.optionalPackage')/*选装包*/,
            codeField: "optionalPackage",disabled:true,
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
        ],
        tableComponentsB:[
            {
            compKey: "compKey9",
            labelName: this.$t('ve.label.unsubscribeReason'),/*退订原因*/
            codeField: "reson",disabled:true,
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey10",
            labelName: this.$t('ve.label.unsubscribeAmount'),/*退订金额*/
            codeField: "specialAmount",disabled:true,
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey11",
            labelName: this.$t('ve.label.fine'),/*罚金*/
            codeField: "specialAmount",disabled:true,
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {compKey: 'compKey12',disabled:true, labelName: this.$t('ve.label.unsubscribeReviewDate')/*退订审核日期*/, codeField: 'outStoreDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: true },
            {compKey: 'compKey13',disabled:true,span:12, labelName: this.$t('ve.label.remark')/*备注*/, codeField: 'remark', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},

        ],
        tableComponentsC:[
            {compKey: 'compKey14', labelName: this.$t('ve.label.remark')/*备注*/, codeField: 'remark', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true ,span:24, inputType:'textarea'},
        ],
        tableComponentsD:[
            {
            compKey: "compKey15",
            labelName: this.$t('org.label.carConfig'),/*车型配置*/
            codeField: "carConfigCn",
            component: () => import("@/components/org/carTypeConfig"),
            type: "propus",disabled:true,
            isMust: true
            },
            {
            compKey: "compKey16",
            labelName: this.$t('ve.label.vin')/*VIN码*/,
            codeField: "vin",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",disabled:true,
            isMust: true
            },
            {compKey: 'compKey35',disabled:true, labelName:  this.$t('org.label.carColor')/*车身颜色*/, codeField: 'carColorId',textField: 'carColorCode', component: () => import('@/components/org/carColor'), type: 'propus', isMust: true},
            {compKey: 'compKey56',disabled:true, labelName: this.$t('org.label.carIncolor')/*内饰色*/, codeField: 'carIncolorId',textField: 'carIncolorCode', component: () => import('@/components/org/TrimPopupColor'), type: 'propus', isMust: true},
            {
            compKey: "compKey17",disabled:true,
            labelName: this.$t('ve.label.sellingPrice')/*销售价格*/,
            codeField: "specialAmount",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey18",disabled:true,
            labelName: this.$t('ve.label.sellingPrice'),/*车务费用*/
            codeField: "specialAmount",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey19",disabled:true,
            labelName: this.$t('ve.label.sellingPrice'),/*保险费用*/
            codeField: "specialAmount",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey20",disabled:true,
            labelName: this.$t('ve.label.boutiqueFee'),/*精品费用*/
            codeField: "specialAmount",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey21",disabled:true,
            labelName: this.$t('ve.label.carReceived'),/*车辆已收*/
            codeField: "specialAmount",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey22",disabled:true,
            labelName: this.$t('ve.label.carServiceReceived')/*车务已收*/,
            codeField: "specialAmount",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey23",disabled:true,
            labelName: this.$t('ve.label.insuranceReceived')/*保险已收*/,
            codeField: "specialAmount",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey24",disabled:true,
            labelName: this.$t('ve.label.boutiqueReceived')/*精品已收*/,
            codeField: "specialAmount",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey25",disabled:true,
            labelName: this.$t('ve.label.contractCode')/*合同编号*/,
            codeField: "specialAmount",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey26",disabled:true,
            labelName: this.$t('ve.label.contractReceived')/*已收合同款*/,
            codeField: "specialAmount",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey27",disabled:true,
            labelName: this.$t('ve.label.orderStatus')/*订单状态*/,
            codeField: "states",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey28",disabled:true,
            labelName: this.$t('org.label.optionalPackage')/*选装包*/,
            codeField: "optionalPackage",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },

        ],
        tableComponentsE:[
        {
            compKey: "compKey29",disabled:true,
            labelName: this.$t('ve.label.unsubscribeReason'),/*退订原因*/
            codeField: "reson",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey30",disabled:true,
            labelName: this.$t('ve.label.unsubscribeAmount'),/*退订金额*/
            codeField: "specialAmount",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {
            compKey: "compKey31",disabled:true,
            labelName: this.$t('ve.label.fine'),/*罚金*/
            codeField: "specialAmount",
            component: () => import("@/components/org/commonInput"),
            type: "inputText",
            isMust: true
            },
            {compKey: 'compKey32',disabled:true, labelName: this.$t('ve.label.unsubscribeReviewDate')/*退订审核日期*/, codeField: 'doneDate', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '1', isMust: true },
            {compKey: 'compKey33',disabled:true,span:12, labelName: this.$t('ve.label.remark')/*备注*/, codeField: 'remark', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},

        ],
        tableComponentsF:[
            {compKey: 'compKey34', labelName: this.$t('ve.label.remark')/*备注*/, codeField: 'remark', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true ,span:24, inputType:'textarea'},
        ],
      tableComponentsSecond:[],
      tableComponentsThird:[],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.carBrand"), //"品牌",
                codeField: "carBrandCode",
                isRequire: this.popupsState == "edit" ? true : true,
                disabled: this.popupsState == "edit" ? true : false,
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.carIncolorCode"), //"内饰色编码",
                codeField: "carIncolorCode",
                isRequire: this.popupsState == "edit" ? true : true,
                disabled: this.popupsState == "edit" ? true : false,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.carIncolorName"), //"内饰色名称",
                codeField: "carIncolorName",
                isRequire: true,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.supplyStatus"), //"供应状态",
                lookuptype: "VE0014",
                codeField: "supplyStatus",
                isRequire: true,
                // disabled: this.popupsState == "edit" ? true : false,
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: this.$t("org.label.EnableSituation"), //"是否启用",
                codeField: "isEnable",
                isRequire: true,
                // disabled: this.popupsState == "edit" ? true : false,
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: true
              }
            ],
      // 标题
      textMap: {
        retreat: "销退审核",
        unsubscribe: "退订审核"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCn: "",
        dlrName:"",
        costPrice: "",
        type: "",
        comName: "",
        phone: "",
        states: "",
        curName:"",
        specialAmount:"",
        remark:'',
        carSeriesCn:"",
        carConfigCn:"",
        vin:"",
        carColorCode:"",
        carIncolorCode:"",
        optionalPackage:"",
        carSeriesCode:"",
      },
      initData:this.dynamicEditRowData,
      editPopupsVisible:false,
      editPopupsKey:'editPopupsKey',
      editPopupsState:1,
    };
  },
  created(){
      if (this.isUseRowData) {
        for (var key in this.formField) {
          if (this.dynamicEditRowData[key]) {
            this.formField[key] = this.dynamicEditRowData[key]
          } else {
            if (typeof key === 'number') {
              this.formField[key] = 0
            } else if (typeof key === 'string') {
              this.formField[key] = ''
            }

            // 两层处理
            for (var rKey in this.dynamicEditRowData) {
              if (rKey.indexOf('.') > -1) {
                var tmpKey = rKey.split('.')[1]
                if (tmpKey === key) {
                  this.formField[tmpKey] = this.dynamicEditRowData[rKey]
                  break
                }
              }
            }
          }
        }
      }
    if (this.popupsState === 'retreat') {
      this.tableComponents = this.tableComponentsA
      this.tableComponentsSecond = this.tableComponentsB
      this.tableComponentsThird = this.tableComponentsC
      
    }else{
      this.tableComponents = this.tableComponentsD
      this.tableComponentsSecond = this.tableComponentsE
      this.tableComponentsThird = this.tableComponentsF
    }
    // 备份fromField（用于重置）
    // 初始化品牌
    if (this.formField.carBrandCode === '' && this.isSetDefaultBrand === true) {
      this.formField.carBrandCode = this.$store.getters.orgInfo.BRAND_CODE
    }
    this.backFormField = JSON.parse(JSON.stringify(this.formField))

    // 联动组件获取父组件传值
    this.$nextTick(() => {
      // 监听
      this.watchComp(true)
    })
  },
  methods: {
    close(){
      this.editPopupsVisible = false
    },
    getFocusCode(){},
    getComponentCode(){},
    //保存
    save() {
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        const that = this;
        this.saveForm();
      }
    },
     seeCusInfo(){
      this.editPopupsKey = this.$utils.generateId()
      this.editPopupsVisible = true
    },
     unsubscribeAgreePop(){
      if(this.formField.vin === ''){
        this.$message({
          message:  this.$t('org.message.selOneData')/*请选择一条数据*/ ,
          type: "warning",
          duration: 2000
        });
        return false;
      }
      this.$confirm(this.$t('ve.label.confirmTheApprovalPassed')+'?'/*确认审核通过*/, this.$t('org.label.warnning')/*提示*/, {
          confirmButtonText: this.$t('sys.button.confirm'),
          cancelButtonText: this.$t('sys.button.cancel'),
          type: 'warning'
        }).then(() => {
         this.unsubscribeAgree()
        }).catch(() => {
        });
    },
    unsubscribeRejectPop(){
      if(this.formField.vin === ''){
        this.$message({
          message:  this.$t('org.message.selOneData')/*请选择一条数据*/ ,
          type: "warning",
          duration: 2000
        });
        return false;
      }
      this.$confirm(this.$t('ve.label.confirmRejection')+'?'/*确认驳回?*/, this.$t('org.label.warnning')/*提示*/, {
          confirmButtonText: this.$t('sys.button.confirm'),
          cancelButtonText: this.$t('sys.button.cancel'),
          type: 'warning'
        }).then(() => {
         this.unsubscribeReject()
        }).catch(() => {
        });
    },
    unsubscribeAgree(){
      let queryObj = {
				// 保存mutation
				type: 'mutation',
				// api配置
				apiConfig: veApis.carSellSetMock2,
				//条件/实体参数（变量），根据typeParam中的定义配置
				variables: {
					//当前中台使用的名称有dataInfo、info，具体查看API文档
					dataInfo: this.formField,
				},
			};
			//转换了中台请求格式数据
			var paramD = this.$getParams(queryObj);
			 this.$requestGraphQL(paramD).then(response => {
				if (response.data[queryObj.apiConfig.ServiceCode].result === '1') {
              this.$message({
                  message: this.$t('sys.tips.esTip5')/*保存成功*/,
                  type: 'success',
                  duration: 2000,
              });
              this.reset()
              this.queryTable(1)
			  	}else{
            this.$message({
                message: this.$t('sys.tips.esTip10') + response.data[queryObj.apiConfig.ServiceCode].msg,
                type: 'warning',
                duration: 2000
            })
            this.reset()
            this.queryTable(1)
          }
			});
    },
    unsubscribeReject(){
      let queryObj = {
				// 保存mutation
				type: 'mutation',
				// api配置
				apiConfig: veApis.carSellSetMock2,
				//条件/实体参数（变量），根据typeParam中的定义配置
				variables: {
					//当前中台使用的名称有dataInfo、info，具体查看API文档
					dataInfo: this.formField,
				},
			};
			//转换了中台请求格式数据
			var paramD = this.$getParams(queryObj);
			 this.$requestGraphQL(paramD).then(response => {
				if (response.data[queryObj.apiConfig.ServiceCode].result === '1') {
              this.$message({
                  message: this.$t('sys.tips.esTip5')/*保存成功*/,
                  type: 'success',
                  duration: 2000,
              });
              this.reset()
              this.queryTable(1)
			  	}else{
            this.$message({
                message: this.$t('sys.tips.esTip10') + response.data[queryObj.apiConfig.ServiceCode].msg,
                type: 'warning',
                duration: 2000
            })
            this.reset()
            this.queryTable(1)
          }
			});
    },
  }
};
</script>
<style scoped>
/deep/.filter-container.filter-title {
    margin-top: 20px;
}
.paddingTop40{
    margin-top: 0px;
}
/deep/.filter-container.filter-title.marginTop0{
    margin-top: 0;
}
/deep/.el-scrollbar {
    height: 209px;
}
/deep/.filter-container.filter-params.margin0{
  margin: 0;
}
/deep/.labelWidth5 label{
  width: 4.6%;
}
.dialog-footer {
    text-align: right;
    padding-bottom: 10px;
    padding-right: 15px;
}
/deep/ .el-col-12 label {
  width: 12%;
}
/deep/ .el-col-12 input {
  width: 126%;
}
/deep/ .lineHeight28{
  line-height: 28px;
}
/deep/ .zindex1{
  z-index: 1;
}
/deep/ .el-col-24 input{
  width: 138%;
}
</style>
