<!--
* description: 系统设置
* author: yxyan
* createdDate: 2019-10-17
-->
<template>
  <section class="systemSet">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="385px"
     
    >
    <el-tabs v-model="activeName"  type="border-card"  @tab-click="handleClick">
     <el-tab-pane label="系统设置" name="first">
     <div class="filter-container filter-params">
        <el-row
          :gutter="26"
          ref="vailComponentList"
        >
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
            :inputType="comp.inputType"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
         <div
              class="dialog-footer setIntoRight"
              style="position: fixed;bottom:20px;right:20px;"
            >
              <el-button
                v-for="comp in tableButtons"
                :key="comp.compKey"
                :type="comp.type"
                @click="comp.clickEvent"
              >{{comp.text}}</el-button>
            </div>
          
        </el-row>
      </div>
      </el-tab-pane>
    <el-tab-pane label="密码规则设置" name="second">
       <div class="filter-container filter-params">
        <el-row
          :gutter="26"
          ref="vailComponentList"
        >
          <component
            v-for="comp in tableComponents1.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="formField1[comp.codeField]"
            @changeCode="getComponentCode1"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :isMul="comp.isMul"
            :inputType="comp.inputType"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
            <div
              class="dialog-footer setIntoRight"
              style="position: fixed;bottom:20px;right:20px;"
            >
              <el-button
                v-for="comp in tableButtons1"
                :key="comp.compKey"
                :type="comp.type"
                @click="comp.clickEvent"
              >{{comp.text}}</el-button>
            </div>
        </el-row>
      </div>
     
    </el-tab-pane>
    </el-tabs>
     
      
      
     
     
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import { validUsername } from "@/utils/validate";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      //默认选第一个选项卡
      activeName:'first',
      // 保存API配置对象
      apiConfig: orgApis.sysRoleMutationGlobalSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        }, // '保存'
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        } //重置
      ],
      tableButtons1: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save1(),
          text: this.$t("sys.button.save")
        }, // '保存'
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        } //重置
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "公司名称",//this.$t("org.label.roleCode"),
          codeField: "CompanyName",
           span: 24,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //公司名称
        {
          compKey: "compKey2",
          labelName:  "系统名称",//this.$t("org.label.roleName"),
          codeField: "sysName",
          inputType:"text",
          span: 24,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //系统名称
    
        {
          compKey: "compKey3",
          labelName:  "系统备案号",// this.$t("org.label.roleDesc"),
          codeField: "sysRegs",
          span: 24,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },//系统备案号
        {
          compKey: "compKey4",
          labelName:  "系统编号",// this.$t("org.label.roleDesc"),
          codeField: "sysCode",
          span: 24,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },//系统编号
        {
          compKey: "compKey5",
          labelName:  "系统版本号",// this.$t("org.label.roleDesc"),
          codeField: "sysVersion",
          span: 24,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        } //系统版本号
      ],
      tableComponents1: [
        {
          compKey: "compKey1",
          labelName: "密码规则",//this.$t("org.label.roleCode"),
          codeField: "pwd_express",
           span: 24,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //密码规则
        {
          compKey: "compKey2",
          labelName:  "规则描述",//this.$t("org.label.roleName"),
          codeField: "pwd_express_desc",
          inputType:"text",
          span: 24,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //规则描述
    
        {
          compKey: "compKey3",
          labelName:  "过期时间",// this.$t("org.label.roleDesc"),
          codeField: "usr_expires",
          span: 24,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },//过期时间
        {
          compKey: "compKey4",
          labelName:  "冲突次数",// this.$t("org.label.roleDesc"),
          codeField: "usr_errnums",
          span: 24,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },//冲突次数

      ],
     
      // 标题
      textMap: {
        edit:'系统设置', //修改弹框名字
        add: this.$t("org.label.addRole") //新增弹框名字
      },
  
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
       sysName:'',
       CompanyName:'',//{"ZH_CN":""},
       sysRegs:'',
       sysCode:'',
       sysVersion:''
      },
      formField1: {
        pwd_express: "",
        pwd_express_desc: "",
        usr_errnums: "",
        usr_expires: "",

     
      },
       infos: {
           l0200400014:"保存成功",
          l0200400015:"保存失败",
          l0200300006:"获取菜单树失败!",
          l0200300007:"加载系统设置成功",
          l0200300008:"加载系统设置失败",
          l0200300009:"保存系统设置成功",
          l0200300010:"保存系统设置失败",
          l0200300011:"密码不符合密码规则",
          l0200300012:"新密码不能与最近三次设置的密码相同",
      },
      //查询返回结果
      rows:'',
      rows:''
    };
  },
  watch: {
    popupsVisible(newV, oldV) {
      this.curPopupsVisible = newV
      if (newV === true) {
     
         this.query()
     
    

     
      }
    },
    //  activeName(newV,oldV){
    //       if(newV==="first"){
    //        this.query()
    //       }
    //       else if(newV==="second"){
    //        this.query1()
    //       }

    //   }
   

  },
  methods: {
     handleClick(tab, event) {
      
        if(tab.name=='first'){
           this.query()
        };
         if(tab.name=='second'){
           this.query1()
        }
      },

    getComponentCode1(val, txt, codeField, comType, popupsKey, textField) {
      if (comType === 'propus' && !this.$utils.isEmpty(popupsKey)) {
        // 弹窗赋值
        // 根据popupsKey找到对应的弹窗key的弹窗组件
        var dynamicPopup = this.dynamicComponents.filter(o => o.compKey === popupsKey)
        if (dynamicPopup.length > 0) {
          if (dynamicPopup[0].popups && dynamicPopup[0].popups.state) {
            // 弹窗状态不是为已打开才进行计算
            dynamicPopup[0].popups.state = false
            dynamicPopup[0].popups.key = codeField + this.$utils.generateId()
          }
        }
      }
      // 赋值
      if (codeField in this.formField1) {
        this.formField1[codeField] = val
      }
      if (textField in this.formField1) {
        this.formField1[textField] = txt
      }
    },
    //查询系统设置
    query(){
       const that = this;
       this.$store.dispatch("user/systemSetLoad",{datatype:'4'})
       .then((response)=>{
         this.rows=response.rows
         let resData=JSON.parse(response.rows.xml_string);
        this.formField.CompanyName=resData.CompanyName.ZH_CN?resData.CompanyName.ZH_CN:'';
        this.formField.sysName=resData.SysName.ZH_CN?resData.SysName.ZH_CN:'';
        this.formField.sysRegs=resData.SysRegs.ZH_CN?resData.SysRegs.ZH_CN:'';  
        this.formField.sysCode=resData.SysCode;   
        this.formField.sysVersion=resData.SysVersion;  
       })
       
    },
    //保存系统设置
    save() {
      const that = this;

       var json1={
         SysName:{
           "ZH_CN":that.formField.sysName
           ,"EN_US":"","JA_JP":""
         },
       CompanyName:{
          "ZH_CN":that.formField.CompanyName
          ,"EN_US":"","JA_JP":""
       },//{"ZH_CN":""},
       SysRegs:{
         "ZH_CN":that.formField.sysRegs
         ,"EN_US":"","JA_JP":""
       },
       SysCode:that.formField.sysCode,
       SysVersion:that.formField.sysCode,
      //  aboutsystem:{"apinfo":"","dbinfo":""},
      //  Language:"zh-CN",
      //  process_tree:"0",
      //  menu_tree:"0",
      //  processstart_tree:"0"
     }
      var saveform={
      pwdexpress:  that.rows.pwd_express,
       expires: that.rows.usr_expires,
       errnums: that.rows.usr_errnums,
      json:JSON.stringify(json1),
      datatype:'4'
       }
       this.$store.dispatch("user/systemSetSave",saveform)
       .then((response) => {
             if(response.result=='1'){
               that.$message({
                message: this.$t('sys.tips.esTip5'),/*保存成功*/
                type: "success",
                duration: 2000
              });
             that.curPopupsVisible = false;
             
             }else{
              let errInfo = "保存失败,请重试";
              if (that.infos[response.msg]) {
                errInfo = that.infos[response.msg];
              }
               that.$message({
                message: errInfo,
                type: "warning",
                duration: 2000
              });
             }
            })
       .catch(response => {
              let errInfo = "保存失败,请重试";
              if (that.infos[response.msg]) {
                errInfo = that.infos[response.msg];
              }
             
              that.$message({
                message: errInfo,
                type: "warning",
                duration: 2000
              });
              that.loading = false;
            });
       ;
       


     // }
    },
    //查询安全设置
    query1(){
       const that = this;
       this.$store.dispatch("user/systemSetLoad",{datatype:'5'})
       .then((response)=>{
         that.rows1=response.rows
         debugger
        that.formField1.pwd_express=that.rows1.pwd_express;
        that.formField1.pwd_express_desc=that.rows1.pwd_express_desc;
        that.formField1.usr_expires=that.rows1.usr_expires;
        that.formField1.usr_errnums=that.rows1.usr_errnums;   
      
       })
       
    },
    //保存安全设置
    save1() {
      const that = this;

       let json2={
         "syssetting":true,
         "updatepwd":false,
         "logout":true,
         "menumgr":true,
         "notice":false,
         "safenormal":true,
         "normallogin":true,
         "safedouble":false,
         "dycodelogin":false,
         "weixinlogin":false,
         "facelogin":false,
         "adlogin":false
       
      }

      let saveform={
        pwdexpdesc:that.formField1.pwd_express_desc,
       pwdexpress:  that.formField1.pwd_express,
       expires: that.formField1.usr_expires,
       errnums: that.formField1.usr_errnums,
      json:JSON.stringify(json2),
      datatype:'5'
       }
       debugger
       this.$store.dispatch("user/systemSetSave",saveform)
       .then((response) => {
             if(response.result=='1'){
               that.$message({
                message: this.$t('sys.tips.esTip5'),/*保存成功*/
                type: "success",
                duration: 2000
              });
             that.curPopupsVisible = false;
             
             }else{
              let errInfo = "保存失败,请重试";
              if (that.infos[response.msg]) {
                errInfo = that.infos[response.msg];
              }
               that.$message({
                message: errInfo,
                type: "warning",
                duration: 2000
              });
             }
            })
       .catch(response => {
              let errInfo = "保存失败,请重试";
              if (that.infos[response.msg]) {
                errInfo = that.infos[response.msg];
              }
             
              that.$message({
                message: errInfo,
                type: "warning",
                duration: 2000
              });
              that.loading = false;
            });
       ;
       


     // }
    }
  }
};
</script>
<style scoped >
/deep/ .el-tabs--border-card{
  height: 300px;
}
</style>
