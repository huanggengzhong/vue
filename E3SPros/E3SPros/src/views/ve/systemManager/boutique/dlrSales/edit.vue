<!--
* description: 经销商销售扩展信息-修改弹窗
* author: dinggf
* createdDate: 2019-10-19
-->
<template>
  <section class="editDlrSales">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="26" ref="vailComponentList">
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :isMul="comp.isMul"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>

      <one-table-template
        ref="multipleTable"
        :dynamicButtons="tableObj.tableButtons"
        :dynamicComponents="tableObj.tableComponents"
        :dynamicTableCols="tableObj.tableCols"
        :dynamicFormFields="tableObj.formField"
        :dynamicApiConfig="tableObj.apiConfig"
        :dynamicIsShowSelect="false"
        :dynamicIsColumnDrop="true"
      />
      <div slot="footer" class="dialog-footer">
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
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { formMixins } from "@/components/mixins/formMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  mixins: [formMixins, oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 经销商销售扩展信息保存
      apiConfig: orgApis.mdmOrgDlrMutationSaleSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save"),
        }, //保存
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset1(),
          text: this.$t("sys.button.reset")
        } //重置
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          span: 12,
          labelName: "经销商",
          codeField: "dlrShortName",
          isRequire: true,
          component: () => import("@/components/org/orgDlr"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey2",
          span: 12,
          labelName: "ANSWER编码",
          codeField: "dlrAnswerCode",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          span: 12,
          labelName: "经销商规模",
          codeField: "driveType",
          lookuptype: "VE0079",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          span: 12,
          labelName: "SAP编码",
          codeField: "sapDlrId",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey5",
          span: 12,
          labelName: "传真",
          codeField: "saleFax",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey6",
          span: 12,
          labelName: "排放标准",
          codeField: "emissionStandard",
          lookuptype: "VE0079",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey7",
          span: 12,
          labelName: "适应气候",
          codeField: "climateStatus",
          lookuptype: "VE0079",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey8",
          span: 12,
          labelName: "销售热线",
          codeField: "saleTel",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey9",
          span: 12,
          labelName: "销售联络EMAIL",
          codeField: "saleEmail",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey10",
          span: 12,
          labelName: "专营店地址",
          codeField: "linkAddr",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey11",
          span: 12,
          labelName: "邮编",
          codeField: "zip",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey12",
          span: 12,
          labelName: "整车收货地址",
          codeField: "linkManAddr",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey13",
          span: 24,
          labelName: "销售区域",
          codeField: "agent13",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey14",
          labelName: "东风日产-日产",
          span: 4,
          codeField: "japanProduce",
          component: () => import("@/components/org/checkBox"),
          type: "checkbox",
          isMust: true
        }, //东风日产-日产
        {
          compKey: "compKey15",
          labelName: "英菲尼迪-国产",
          span: 4,
          codeField: "infiniti",
          component: () => import("@/components/org/checkBox"),
          type: "checkbox",
          isMust: true
        }, //英菲尼迪-国产
        {
          compKey: "compKey16",
          labelName: "东风启辰-启辰",
          span: 4,
          codeField: "qicheng",
          component: () => import("@/components/org/checkBox"),
          type: "checkbox",
          isMust: true
        }, //东风启辰-启辰
        {
          compKey: "compKey17",
          labelName: "东风日产-进口尼桑",
          span: 4,
          codeField: "nisang",
          component: () => import("@/components/org/checkBox"),
          type: "checkbox",
          isMust: true
        }, //东风日产-进口尼桑
        {
          compKey: "compKey18",
          labelName: "其他品牌",
          span: 4,
          codeField: "others",
          component: () => import("@/components/org/checkBox"),
          type: "checkbox",
          isMust: true
        } //其他品牌
      ],
      formField: {
        dlrShortName: "",
        dlrAnswerCode: "",
        driveType: "",
        sapDlrId: "",
        saleFax: "",
        emissionStandard: "",
        climateStatus: "",
        saleTel: "",
        saleEmail: "",
        linkAddr: "",
        zip: "",
        linkManAddr: ""
      },
      texttitle:'联系人列表',
      tableObj: {
        //经销商联系人查询
        apiConfig: orgApis.mdmOrgDlrLinkInfoQueryList,
        // 动态组件-按钮
        tableButtons: [
          {
            compKey: "btnKey3",
            type: "primary",
            size: "small",
            clickEvent: () => this.queryTable(1),
            text: this.$t("sys.button.query"),
          }, //查询
          {
            compKey: "btnKey4",
            type: "",
            size: "small",
            clickEvent: () => this.save2(),
            text: this.$t("sys.button.save"),
          } //保存
        ],
        tableComponents: [
          {
            compKey: "compKey9",
            labelName: '通知场景对象设置',  //对象类型
            codeField: "11",
            span: 18,
            component: () => import("@/components/org/label"),
            type: "textLabel",
            isMust: true
          },
        ],
        tableCols: [
          {
            prop: "code1",
            label: "类型编码" + "+", //类型编码
            align: "center",
            isComponent: true,
            comps: [
              {
                compKey: "propKey1",
                isShowLabel: false,
                isMul: false,
                codeField: "linkManType",
                textField: "linkManType",
                lookuptype: "VE0188",
                clickEvent: () => null,
                component: () => import("@/components/org/commonInput")
              }
            ]
          },
          {
            prop: "code2",
            label: "姓名" + "+", //姓名
            align: "center",
            isComponent: true,
            comps: [
              {
                compKey: "propKey2",
                isShowLabel: false,
                isMul: false,
                codeField: "linkManName",
                textField: "linkManName",
                lookuptype: "VE0188",
                clickEvent: () => null,
                component: () => import("@/components/org/commonInput")
              }
            ]
          },
          {
            prop: "code3",
            label: "手机" + "+", //手机
            align: "center",
            isComponent: true,
            comps: [
              {
                compKey: "propKey3",
                isShowLabel: false,
                isMul: false,
                codeField: "linkManMobil",
                textField: "linkManMobil",
                lookuptype: "VE0188",
                clickEvent: () => null,
                component: () => import("@/components/org/commonInput")
              }
            ]
          },
          {
            prop: "code4",
            label: "电话" + "+", //电话
            align: "center",
            isComponent: true,
            comps: [
              {
                compKey: "propKey4",
                isShowLabel: false,
                isMul: false,
                codeField: "linkManPhone",
                textField: "linkManPhone",
                lookuptype: "VE0188",
                clickEvent: () => null,
                component: () => import("@/components/org/commonInput")
              }
            ]
          },
          {
            prop: "code5",
            label: "EMAIL" + "+", //EMAIL
            align: "center",
            isComponent: true,
            comps: [
              {
                compKey: "propKey5",
                isShowLabel: false,
                isMul: false,
                codeField: "email",
                textField: "email",
                lookuptype: "VE0188",
                clickEvent: () => null,
                component: () => import("@/components/org/commonInput")
              }
            ]
          },
          {
            prop: "code6",
            label: "邮编" + "+", //EMAIL
            align: "center",
            isComponent: true,
            comps: [
              {
                compKey: "propKey6",
                isShowLabel: false,
                isMul: false,
                codeField: "zip",
                textField: "zip",
                lookuptype: "VE0188",
                clickEvent: () => null,
                component: () => import("@/components/org/commonInput")
              }
            ]
          }
        ],
        formField: {
          linkManType: '',
          linkManName: '',
          linkManMobil: '',
          linkManPhone: '',
          email: '',
          zip: ''
        }
      }
    };
  },
  methods: {
    reset1(){
      for(var key in this.formField){
        this.formField[key] = ''
      }
    },
    save2(){
      const that = this.$refs.multipleTable;
      that.listLoading = true;
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: orgApis.mdmOrgDlrLinkInfoMutationSaveById,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.dynamicFormFields
        }
      };
      //转换了中台请求格式数据
      var paramD = this.$refs.multipleTable.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          this.$refs.multipleTable.queryTable(1, null, 1, this.tableObj.formField);
          that.listLoading = false;
          that.$message({
            message: "保存成功",
            type: "success",
            duration: 2000
          });
        } else {
          this.$message({
            message:
              "保存失败：" +
              response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "warn",
            duration: 2000
          });
        }
      });
    }
  },
};
</script>

<style lang='scss' scoped>
/deep/ .filter-params .el-col label.el-checkbox {
  width: 20%;
  font-size: 12px;
}
/deep/ .filter-params .el-col-24 label {
  width: 124px;
  margin-right: 1.5%;
}
/deep/ .filter-params .el-col label {
    max-width: 50%;
}
/deep/ .filter-params .el-col-4 label {
  width:50%;
}
</style>