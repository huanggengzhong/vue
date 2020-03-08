<!--
* description: 业务岗位管理-新增、修改弹窗
* author: liyanm
* createdDate: 2019-08-04
-->
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
          :props="defaultProps"
          @node-click="handleNodeClick"
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
import { formMixins } from "@/components/mixins/formMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  components: {},
  // name: "deptNames",
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.mdmOrgStationMutationSaveById,
      menueList: [],
      sendData: {
        orgName: [],
        orgTreeId: [],
        dlrID: [],
        dlrCode: []
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
          clickEvent: () => this.sendCode(),
          text: "取消"
        }
      ],
      defaultProps: {
        children: "children",
        label: "orgName"
      },
      // 动态组件-查询条件
      tableComponents: [],
      listQuery: {
        isEnable: "1"
      },
      // 标题
      textMap: {
        add: "所属组织"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        deptId: "",
        stationName: "",
        stationId: "",
        stationCode: "",
        isEnable: "",
        deptName: ""
      }
    };
  },
  created() {
    this.queryMenue(true);
  },
  methods: {
    handleNodeClick(data) {
      this.sendData.orgName = data.orgName;
      this.sendData.orgTreeId = data.orgTreeId;
      this.sendData.dlrID = data.groupId;
      this.sendData.dlrCode = data.groupCode;
    },
    queryMenue(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: orgApis.mdmOrgRelationRealGroupQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "orgName",
              "orgCode",
              "orgBelongType",
              "orgRealId",
              "groupCode",
              "groupId",
              "orgTreeId",
              "linkId",
              "parentOrgTreeId"
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
      // debugger;
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data.mdmOrgRelationRealGroupQueryByPage.result === "1" &&
          response.data.mdmOrgRelationRealGroupQueryByPage.rows != ""
        ) {
          var dataList = response.data.mdmOrgRelationRealGroupQueryByPage.rows;
          var tree = this.$utils.parseTreeFromList(
            dataList,
            "parentOrgTreeId",
            "orgTreeId"
          );
          this.menueList = tree;
        }
      });
    },
    sendCode() {
      this.$emit(
        "changeCode",
        this.sendData.orgName.toString(),
        this.sendData.orgTreeId.toString(),
        this.sendData.dlrCode.toString(),
        this.sendData.dlrId.toString(),
        this.codeField,
        this.popupsKey
      );
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/.el-slide {
  height: calc(90vh - 185px);
  overflow-y: auto;
  background: #fff;
}
</style>
