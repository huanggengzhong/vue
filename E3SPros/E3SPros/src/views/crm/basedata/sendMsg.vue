<!--
* description: 发送短信
* author: dxuem
* createdDate: 2019-09-17
-->
<template>
  <section>
    <!-- 弹窗 -->
    <el-dialog
      title="发送短信"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      @sentData="sendCode"
      width="900px"
      center
    >
      <div class="filter-container filter-params-crm">
        <el-form>
          <el-row>
            <el-col :span="8">
              <MessageModel @Cetdata=getModel :MessageModel="templateId" ref="templateId" />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" class="crmlong-col">
              <el-form-item label="接收人手机号" class="cust-label" id="crmTeltags">
                <el-col :span="16" class="crmTeltags">
                  <el-tag
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)"
                  >{{tag}}</el-tag>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22" class="crmcontent-col">
              <MsgContent :TxtArea_MsgContent="msgContent" ref="msgContent"></MsgContent>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="19" style="text-align:right">
              <el-button size="small" type="primary" @click="save">保存</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import MessageModel from "@/components/crm/EjectWindows/MessageModel";
import ReceiverCellPhone from "@/components/crm/textbox/Public/Message/ReceiverCellPhone";
import MsgContent from "@/components/crm/textbox/Public/Message/TxtArea_MsgContent";
export default {
  name: "sendMsg",
  // 组件混入对象
  mixins: [formMixins],
  components: {
    MessageModel,
    ReceiverCellPhone,
    MsgContent
  },
  props: {
    sendMsg: {
      dialogVisible: Boolean,
      params: String
    },
    editPerPopupsVisible: { type: Boolean, default: false },

    // 新增、编辑弹窗Key
    editPerPopupsKey: "",
    // 新增、编辑弹窗状态（add/edit/view）
    editPerPopupsState: "",
    // 新增、编辑行对象
    editPerRowData: {},
    // 弹窗状态（add/edit/view）
    popupsState: ""
  },
  data() {
    return {
      params: "",
      dialogVisible: false,
      dynamicTags: [],
      templateName: {
        input: ""
      },
      msgContent: {
        input: ""
      },
      templateId:"",
      // 保存API配置对象
      apiConfig: crmApis.csBuMessSendMutationSaveMore, //短信批量发送
      // 动态组件-按钮

      // 动态组件-查询条件

      // 标题
      textMap: "发送短信",
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        templateId: "",
        contactTel: "",
        msgContent: "",
        bussOwner:this.$store.getters.orgInfo.DLR_CODE
      }
    };
  },
  methods: {
      save() {
        debugger
        let that=this;
        let contactTel=that.dynamicTags.join(',');
      const queryObj = {
        // 保存mutation
        type: 'mutation',
        // api配置
        apiConfig: this.apiConfig,
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            templateId:that.templateId,
            phone:contactTel,
            msgContent:that.$refs.msgContent.input,
            bussOwner:this.$store.getters.orgInfo.DLR_CODE
          }
        }
      }
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj)
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === '1') {
          // 保存成功
          this.sendCode('1')
          this.$message({
            message: '保存成功',
            type: 'success',
            uration: 2000
          })
        } else {
          // 保存失败
          // this.sendCode('0')
          this.$message({
            message: '保存失败：' + response.data[queryObj.apiConfig.ServiceCode].msg,
            type: 'warn',
            uration: 2000
          })
        }
      })
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    init() {
      let that = this;
      that.dialogVisible = this.sendMsg.dialogVisible;
      that.params = this.sendMsg.params;
      let tags = this.params;
      let teltags = tags.substr(1, tags.length - 2);
      that.dynamicTags = teltags.split(",");
    },
    getModel(row){
      debugger
      let  that=this;
      that.msgContent.input=row.templateName;
      that.templateId=row.templateId;
      this.$refs.msgContent.getData();
    }
    // getData(){
    //   debugger
    //   let that=this;
    // }
  }
};
</script>
<style>
.filter-params-crm .crmlong-col label {
  width: 21%;
}
.filter-params-crm .crmcontent-col label {
  width: 11%;
}
.filter-params-crm .crmcontent-col {
  text-align: left;
  width: 89%;
}
.filter-params-crm #crmTeltags {
  text-align: left;
}
.filter-params-crm .crmTeltags {
  text-align: left;
  min-width: 200px;
  padding-left: 0px;
}
</style>
