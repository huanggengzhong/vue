<!--
* description: 汽车销售机动车开票弹窗
* author: lixb
* createdDate: 2019-10 -21
-->
<template>
  <section class="filter-params-e3s kaipiao">
    <el-dialog
      width="900px"
      title="机动车开票"
      :append-to-body="true"
      center
      :close-on-click-modal="false"
      :visible.sync="handleVisibled"
      @close="sendCode"
      class="kaipiao"
    >
      <h4 class="tTitle">机动车销售统一发票</h4>
      <h6 class="subTitle">发票联</h6>
      <div class="tTips">
        <span>开票日期 2019-10-21</span>
        <span>发票代码</span>
        <span>发票号码</span>
      </div>
      <div
        class="filter-container filter-params mb-0"
        v-if="tableComponents.length > 0"
        ref="conHeight"
      >
        <el-row>
          <el-col :span="23" class="table-col">
            <component
              v-for="comp in tableComponents.filter(o => o.isMust === true)"
              :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
              :key="comp.compKey"
              :v-show="comp.isShow"
              :codeField="comp.codeField"
              :textField="comp.textField"
              :popupsKey="comp.compKey"
              :is="comp.component"
              :isShow="comp.isShow || true"
              :code="formField[comp.codeField]"
              :disabled="comp.disabled"
              :isMul="comp.isMul"
              :isRequire="comp.isRequire"
              :span="comp.span || 11"
              :labelName="comp.labelName"
              :lookuptype="comp.lookuptype"
              :dateOptionsType="comp.dateOptionsType"
              :format="comp.format"
              :dateType="comp.dateType"
              :valueObject="curValueObject"
              :inputType="comp.inputType"
              :clearable="comp.clearable"
              :filterable="comp.filterable"
              :parentFileds="comp.parentFileds || ''"
              :mustFields="comp.mustFields || ''"
              :returnCodeField="comp.returnCodeField"
              :returnTextField="comp.returnTextField"
              :otherField="comp.otherField"
              :validrule="comp.validrule"
              :isUseDefault="comp.isUseDefault"
              :isHost="comp.isHost"
              :oFields="comp.oFields"
            ></component>
            <div
              class="filter-container filter-params fix"
              v-if="tableComponentFix.length > 0"
              ref="conHeight"
            >
              <el-row>
                <el-col :span="24" class="table-colp-rel">
                  <component
                    v-for="comp in tableComponentFix.filter(o => o.isMust === true)"
                    :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
                    :key="comp.compKey"
                    :v-show="comp.isShow"
                    :codeField="comp.codeField"
                    :textField="comp.textField"
                    :popupsKey="comp.compKey"
                    :is="comp.component"
                    :isShow="comp.isShow || true"
                    :code="formField[comp.codeField]"
                    :disabled="comp.disabled"
                    :isMul="comp.isMul"
                    :isRequire="comp.isRequire"
                    :span="comp.span || 24"
                    :labelName="comp.labelName"
                    :lookuptype="comp.lookuptype"
                    :dateOptionsType="comp.dateOptionsType"
                    :format="comp.format"
                    :dateType="comp.dateType"
                    :valueObject="curValueObject"
                    :inputType="comp.inputType"
                    :clearable="comp.clearable"
                    :filterable="comp.filterable"
                    :parentFileds="comp.parentFileds || ''"
                    :mustFields="comp.mustFields || ''"
                    :returnCodeField="comp.returnCodeField"
                    :returnTextField="comp.returnTextField"
                    :otherField="comp.otherField"
                    :validrule="comp.validrule"
                    :isUseDefault="comp.isUseDefault"
                    :isHost="comp.isHost"
                    :oFields="comp.oFields"
                  ></component>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="tBips">
        <span>销货单位盖章</span>
        <span>开票人 张小经</span>
        <span>备注 一车一票</span>
      </div>
      <div class="filter-container filter-button text-center" ref="searcheHeight">
        <el-button
          v-for="comp in tableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { oneTableTemplateMixins } from "@/components/mixins/oneTableTemplateMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { contsMixins } from "@/components/mixins/contsMixins";
import { CacheConfig } from "@/cache/configCache/index";
import { veApis } from "@/api/graphQLApiList/ve";
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [valueObjectMixins, contsMixins],
  components: {},
  props: {
    handleVisible: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    clickRows: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veDlrInvoiceM,
      handleVisibled: this.handleVisible,
      listLoading: false,
      rowsData: this.clickRows,

      oneTableKey: "a",
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.save("0"),
          text: this.$t("sys.button.drawer")
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.queryTable(),
          text: this.$t("sys.button.print")
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.save("1"),
          text: this.$t("sys.button.invalid")
        }
      ],
      tableComponentFix:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponentFix.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponentFix
          : [
              {
                compKey: "compKey2",
                /* "税控代码", */
                labelName: this.$t("ve.label.TaxCode"),
                codeField: "",
                disabled: true,
                component: () => import("@/components/org/commonInput"),
                isMust: true
              },
              {
                compKey: "compKey6",
                labelName: this.$t("ve.label.taxpayerRegistration"),
                /* 纳税人识别号 */
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                isMust: true
              }
            ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                /* "机打代码", */
                labelName: this.$t("ve.label.MachineCode"),
                disabled: true,
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKeyA2", //隐藏的
                /* "税控码", */
                labelName: this.$t("ve.label.TaxCodes"),
                disabled: true,
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },

              {
                compKey: "compKey3",
                labelName: this.$t("ve.label.MachineNum"),
                disabled: true,
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKeyA3", //隐藏的
                /* "机打号码", */ labelName: this.$t("ve.label.MachineCode"),
                // span:8,
                disabled: true,
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("ve.label.MachineNo"),
                disabled: true,
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKeyA4", //隐藏的
                /* "机器编号", */
                labelName: this.$t("ve.label.MachineN"),
                disabled: true,
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey5",
                /* "购买方名称", */
                labelName: this.$t("ve.label.BuyerName"),
                disabled: true,
                codeField: "buyCustName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKeyA5",
                labelName: "购买方名称",
                codeField: "buyCustName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },

              {
                compKey: "compKey7",
                labelName: this.$t("ve.label.organizationCode"),
                /* "身份证、组织机构代码", */
                codeField: "SFZ",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKeyA7",
                /* "车辆类型", */
                labelName: this.$t("ve.label.VehicleType"),
                codeField: "CLLX",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey8",
                /* "车辆类型", */
                labelName: this.$t("ve.label.VehicleType"),
                codeField: "CLLX",
                span: 8,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey9",
                labelName: this.$t("ve.label.LabelNo"),
                /*  "厂牌号码", */
                span: 8,
                codeField: "CPXH",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey10",
                /* "产地", */
                labelName: this.$t("ve.label.produceAddr"),
                span: 8,
                codeField: "CD",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey11",
                /* "合格证号", */
                labelName: this.$t("ve.label.certificateNo"),
                span: 8,
                codeField: "HGZH",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey12",
                /*  "进口说明书号", */
                labelName: this.$t("ve.label.specificationNo"),
                span: 8,
                codeField: "JKSMS",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey13",
                /* "商检单号", */
                labelName: this.$t("ve.label.InspectionNo"),
                span: 8,
                codeField: "SJDH",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey14",
                /* "发动机号码", */
                labelName: this.$t("ve.label.EngineNo"),
                span: 8,
                codeField: "FDJHM",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey15",
                /* "车辆识别号/车架号码", */
                labelName: this.$t("ve.label.FrameNo"),
                span: 8,
                codeField: "CLSBH",
                disabled: true,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey16",
                /* "生产企业名称", */
                labelName: this.$t("ve.label.enterpriseName"),
                span: 8,
                codeField: "SCQYMC",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey17",
                /* "价税合计", */
                labelName: this.$t("ve.label.PriceSum"),
                disabled: true,
                codeField: "daxie",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey18",
                /* "小写", */
                labelName: this.$t("ve.label.smallTxt"),
                codeField: "factPrice",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey19",
                labelName: this.$t("ve.label.SalesUnit"),
                /* "销货单位名称", */
                disabled: true,
                codeField: "XHDWMC",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey20",
                /* "电话", */
                labelName: this.$t("ve.label.tel"),
                codeField: "tel",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey21",
                /* "纳税人识别号", */
                labelName: this.$t("ve.label.taxpayerRegistration"),
                disabled: true,
                codeField: "NSRSBH",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey22",
                /* 账号", */
                labelName: this.$t("ve.label.bankAccount"),
                codeField: "bankNo",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey23",
                labelName: this.$t("ve.label.address"),
                /* "地址*/
                codeField: "address",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey24",
                labelName: this.$t("ve.label.depositBank"),
                /* "开户银行", */
                codeField: "bankName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey25",
                labelName: this.$t("ve.label.recoveryRate"),
                /*  "增值税率或征收率", */
                codeField: "taxRate",
                span: 8,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey26",
                labelName: this.$t("ve.label.VATAllowance"),
                /* "增值税税额", */
                span: 8,
                disabled: true,
                codeField: "ZSZSE",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey27",
                /* "主管税务机关及代码", */
                labelName: this.$t("ve.label.authoritiesAndCode"),
                span: 8,
                disabled: true,
                codeField: "ZGSWJG",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey28",
                /* "不含税价", */
                labelName: this.$t("ve.label.noTaxPrice"),
                codeField: "shiji",
                disabled: true,
                span: 6,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey29",
                /* "完税凭证号码", */
                labelName: this.$t("ve.label.CertificateNo"),
                span: 6,
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey30",
                labelName: this.$t("ve.label.shippingTon"),
                /* "吨位", */
                span: 6,
                codeField: "DW",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey31",
                labelName: "限承人数",
                labelName: this.$t("ve.label.BearingLimit"),
                codeField: "XCRS",
                span: 6,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              }
            ],
      // 动态生成网格列
      //表单查询数据
      formField: {}
    };
  },
  methods: {
    // 作废/冲红
    cancellation(status) {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";
      const queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veDelorder,
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            carBrandCode: ""
          }
        }
      };
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj);
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (response.data.vecldbsqOutConfirm.result === "1") {
          // 保存成功
          this.$message({
            message: status === "0" ? "作废成功" : "冲红成功",
            type: "success",
            uration: 2000
          });
        } else {
          // 保存失败
          // this.sendCode('0')
          this.$message({
            message: status === "0" ? "作废失败" : "冲红失败",
            type: "warn",
            uration: 2000
          });
        }
        this.queryTable(1);
      });
    },
    sendCode() {
      this.handleVisibled = false;
    },
    save() {
      const that = this.$refs.multipleTable;
      const queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veDelorder,
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            carBrandCode: ""
          }
        }
      };
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj);
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (response.data.vecldbsqOutConfirm.result === "1") {
          // 保存成功
          this.$message({
            message: status === "0" ? "开票成功" : "作废成功",
            type: "success",
            uration: 2000
          });
        } else {
          // 保存失败
          // this.sendCode('0')
          this.$message({
            message: status === "0" ? "开票失败" : "作废失败",
            type: "warn",
            uration: 2000
          });
        }
      });
    }
  },
  mounted() {
    this.formField = this.rowsData;
  }
};
</script>
<style lang="scss" scoped>
/deep/.p-rel {
  position: relative;
}
/deep/.fix {
  position: absolute;
  top: -12px;
  left: 47.3%;
  width: 48.5%;
  margin: 0 !important;
  background: #fff;
  padding: 10px 10px 0px 10px;
  max-height: 190px;
  height: 190px;
}

/deep/.tTitle {
  margin: 0;
  margin-bottom: 3px;
  font-weight: normal;
  text-align: center;
  font-size: 20px;
}
/deep/.subTitle {
  margin: 0;
  text-align: center;
  font-size: 14px;
}

/deep/.tTips {
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
}
/deep/.tBips {
  display: flex;
  justify-content: space-around;
  margin-bottom: 8px;
}
/deep/.filter-params .table-col .el-col {
  margin-bottom: 8px;
}
/deep/.fix .table-col .el-col {
  height: 81.5px;
  margin-bottom: 8px;
}
/deep/.fix .el-col .el-input {
  height: 81.5px;
  width: 68.5%;
}
/deep/.text-center {
  text-align: center !important;
}
/deep/.mb-0 {
  margin-bottom: 0 !important;
}
/deep/.chapter {
  text-align: right;
  padding-right: 207px;
  font-size: 14px;
  margin: 0;
  z-index: 9999;
}
/deep/.fix .el-col label {
  width: 20% !important;
}
/deep/.fix > .el-row > .el-col {
  margin-bottom: 0;
}
/deep/.fix .el-input--small .el-input__inner {
  max-height: 81.5px !important;
  height: 81.5px;
}
</style>
