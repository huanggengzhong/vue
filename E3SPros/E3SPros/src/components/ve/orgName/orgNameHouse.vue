<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      title="选择组织"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="800px"
    >
      <div class="filter-container filter-params">
        <el-tree
          :data="menueList"
          @node-click="handleNodeClick"
          :props="defaultProps"
          class="filter-tree el-slide"
          default-expand-all
          node-key="orgTreeId"
          ref="tree"
          :expand-on-click-node="false"
        ></el-tree>
      </div>
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
import { orgApis } from "@/api/graphQLApiList/org";
import { formMixins } from "@/components/mixins/formMixins";
import { requestGraphQL } from "@/api/commonRequest";
import { debuglog } from "util";
import { constants } from "crypto";
export default {
  components: {},
  props: {
    popupsVisible: { type: Boolean, default: false },
    code: { type: String, default: "" },
    comType: { type: String, default: "" },
    codeField: { type: String, default: "" },
    textField: { type: String, default: "" },
    popupsKey: { type: String, default: "" },
    isMul: { type: Boolean, default: true }
  },
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      menueList: [],
      sendData:{},
      curPopupsVisible: this.popupsVisible,
      listQuery: {
        isEnable: "1"
      },
      defaultProps: {
        children: "children",
        label: "orgName"
      },
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: "确定"
        },
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.close(),
          text: "取消"
        }
      ]
    };
  },
  created() {
    this.queryMenue();
  },
  methods: {
    queryMenue(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: orgApis.mdmOrgRelationRealQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "orgName",
              "orgCode",
              "orgBelongType",
              "orgTreeId",
              "linkId",
              "groupCode",
              "groupId",
              "isEnable",
              "parentOrgTreeId",
              "treeType",
              "orgRealId"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10000,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[orgApis.mdmOrgRelationRealQueryByPage.ServiceCode]
            .result === "1" &&
          response.data[orgApis.mdmOrgRelationRealQueryByPage.ServiceCode]
            .rows != ""
        ) {
          var dataList =
            response.data[orgApis.mdmOrgRelationRealQueryByPage.ServiceCode]
              .rows;
          var tree = this.$utils.parseTreeFromList(
            dataList,
            "parentOrgTreeId",
            "orgTreeId"
          );
          this.menueList = tree;
        }
      });
    },
    close() {
      this.$emit("close", "");
    },
    handleNodeClick(data) {
      this.sendData.name = data.orgName;
      this.sendData.orgCode = data.orgTreeId;
      this.sendData.dlrId = data.groupId;
      this.sendData.dlrCode = data.groupCode;
      if (!this.sendData.dlrId) {
        this.sendData.dlrId = "";
      }
      if (!this.sendData.dlrCode) {
        this.sendData.dlrCode = "";
      }
    },
    sendCode() {
      debugger
      if (JSON.stringify(this.sendData) !== '{}' ) {
        this.$emit(
          "changeCode",
          this.sendData.orgCode.toString(),
          this.sendData.name.toString(),
          this.sendData.dlrId.toString(),
          this.sendData.dlrCode.toString(),
          this.codeField,
          this.comType,
          this.popupsKey
        );
      } else {
        this.$emit("changeCode");
      }
    }
  }
};
</Script>

<style lang="scss" scoped>
/deep/.el-slide {
  height: calc(90vh - 185px);
  overflow-y: auto;
  background: #fff;
}
</style>

