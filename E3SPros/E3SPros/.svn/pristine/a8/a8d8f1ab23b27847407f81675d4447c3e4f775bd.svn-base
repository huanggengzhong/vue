<!--
* description: 集团员工信息
* author: lixb
* createdDate: 2019-10-14
-->
<template>
  <div>
    <div class="app-container app-container-table">
      <TreeTable
        ref="multipleTable"
        :treeObject="treeObject"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicFormFields="formField"
        :dynamicTableCols="tableCols"
        :dynamicApiConfig="apiConfig"
        :dynamicIsShowMoreBtn="isMoreBtn"
        :dynamicIsShowSelect="false"
        :dynamicExpandAll="true"
      />
      <oprtion
        :dlrId="dlrId"
        :dlrCode="dlrCode"
        :showOrgName="showOrgName"
        :showTreeId="showTreeId"
        :popupsState="editPopupsState"
        :dynamicEditRowData="editRowData"
        :popupsVisible="editPopupsVisible"
        :key="editPopupsKey"
        @close="close"
      ></oprtion>
      <toView
        :key="showToView"
        :handleVisible="toViewd"
        :roleOrgType="roleOrgType"
        :roleId="roleId"
      ></toView>
    </div>
  </div>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { veApis } from "@/api/graphQLApiList/ve";
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { requestGraphQL } from "@/api/commonRequest";
import TreeTable from "@/components/templates/treeTable";
import oprtion from "./oprtion";
import toView from "./toView";
export default {
  mixins: [oneTableWithViewTemplateMixins],
  name: "groupstaffManagement",
  components: {
    TreeTable,
    oprtion,
    toView
  },
  mounted() {
    //调用加载树的方法 params1 父节点ID, params2当前节点id
    this.$refs.multipleTable.queryOrganization("parentOrgTreeId", "orgTreeId");
  },
  data() {
    return {
      authKey: "a",
      showToView: "b",
      toViewd: false,
      roleOrgType: "",
      showOrgName: "",
      dlrId: "",
      dlrCode: "",
      showTreeId: "",
      roleId: "",
      //树对象
      treeObject: {
        // 配置树网格查询API配置对象
        treeApiConfig: orgApis.mdmOrgRelationRealGroupQueryByPage,
        // 树接口需要返回的字段
        returnTreeCol: [
          "orgName",
          "orgCode",
          "orgBelongType",
          "orgRealId",
          "groupCode",
          "groupId",
          "orgTreeId",
          "linkId",
          "parentOrgTreeId"
        ],
        // 树的查询条件
        treeQuery: {
          //  orgTreeId:'-1'
          isEnable: "1"
        },
        //排序的对象 label现在是名字 , children 子节点
        defaultProps: {
          children: "children",
          label: "orgName"
        }
      },
      //设置菜单栏宽度
      // siderWidth: 250,
      //设置是否显示更多按钮
      // conHeight: 0,
      isMoreBtn: true,
      // 网格查询API配置对象
      apiConfig: orgApis.mdmOrgEmployeeQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")
        } /*查询*/,
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add1(),
          text: this.$t("sys.button.add")
        } /*新增*/,
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        } /*重置*/
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          span: 8,
          labelName: this.$t("org.label.empName"),
          codeField: "empName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        } /* 员工姓名 */,
        {
          compKey: "compKey2",
          span: 8,
          labelName: this.$t("org.label.userName"),
          codeField: "userName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        } /* 创建登录名 */,
        {
          compKey: "compKey3",
          span: 8,
          labelName: this.$t("org.label.orgName"),
          codeField: "orgName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        } /* 所属组织 */,
        {
          compKey: "compKey4",
          span: 8,
          labelName: this.$t("org.label.situation"), // 在职状态
          codeField: "isEnable",
          component: () => import("./LookupValue/index"),
          lookuptype: "DB0063",
          type: "dropdownList",
          isMust: false
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: this.$t("sys.content.operate"),
          /*操作*/ codeField: "controlBtn",
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: this.$t("sys.button.edit"),
              /*编辑*/ codeField: "",
              clickEvent: this.handleClick,
              component: () => import("@/components/org/linkButton")
            },
            {
              compKey: "propKey1",
              labelName: this.$t("sys.button.getDetail"),
              /*查看*/ codeField: "",
              clickEvent: this.showView,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        {
          prop: "userName",
          label: this.$t("org.label.userName"),
          /*登录账号名*/ width: 150,
          align: "center"
        },
        {
          prop: "empName",
          label: this.$t("org.label.empName"),
          /*员工姓名*/ width: null,
          align: "center"
        },
        {
          prop: "genderName",
          label: this.$t("org.label.genderName"),
          /*性别*/ width: 80,
          align: "center"
        },
        {
          prop: "stationId",
          label: this.$t("org.label.stationName"),
          /*岗位*/ width: 150,
          align: "center",
          hidden: true
        },
        {
          prop: "orgName",
          label: this.$t("org.label.orgName"),
          /*所属组织*/ width: null,
          align: "center"
        },
        //
        {
          //状态
          prop: "isFrozen",
          label: this.$t("org.label.userId"),
          /*empCode*/ width: null,
          align: "center",
          hidden: true
        },
        {
          //冻结状态
          prop: "isFrozen",
          /*empCode*/ width: null,
          align: "center",
          hidden: true
        },
        //
        {
          prop: "isFrozen",
          label: this.$t("org.label.isFrozen"),
          /*状态*/ width: null,
          align: "center",
          isDefalus: true,
          hidden: true
        },
        {
          prop: "isEnable",
          label: this.$t("org.label.isFrozen"),
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isMul: false,
              isShowLabel: false,
              codeField: "isEnable",
              clickEvent: () => null,
              component: () => import("@/components/org/isWork")
            }
          ]
        },
        // {
        //   prop: "isEnable",
        //   label: this.$t("org.label.isEnable"),
        //   /*状态*/ width: null,
        //   hidden: true,
        //   align: "center"
        // },
        // {
        //   prop: "classes",
        //   label: this.$t("org.label.class"),
        //   /*角色*/ width: null,
        //   align: "center"
        // },
        {
          prop: "empId",
          label: this.$t("org.label.empId"),
          /*角色ID*/ width: null,
          align: "center",
          hidden: true
        },
        // 需要带到修改的字段
        {
          prop: "email",
          label: this.$t("org.label.email"),
          /*email*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "deptId",
          label: this.$t("org.label.deptId"),
          /*deptId*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "birthDate",
          label: this.$t("org.label.birthDate"),
          /*birthDate*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "mobile",
          label: this.$t("org.label.mobile"),
          /*mobile*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "workTel",
          label: this.$t("org.label.workTel"),
          /*workTel*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "personAddr",
          label: this.$t("org.label.personAddr"),
          /*personAddr*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "genderCode",
          label: this.$t("org.label.genderCode"),
          /*genderCode*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "degreepro",
          label: this.$t("org.label.degreeCode"),
          /*degreeCode*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "zip",
          label: this.$t("org.label.zip"),
          /*zip*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "fax",
          label: this.$t("org.label.fax"),
          /*fax*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "nationalityCode",
          label: this.$t("org.label.nationalityCode"),
          /*nationalityCode*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "nativePlace",
          label: this.$t("org.label.nativePlace"),
          /*nativePlace*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "marriagedCode",
          label: this.$t("org.label.marriagedCode"),
          /*marriagedCode*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "school",
          label: this.$t("org.label.school"),
          /*school*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "secondMan",
          label: this.$t("org.label.secondMan"),
          /*secondMan*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "secondManTel",
          label: this.$t("org.label.secondManTel"),
          /*secondManTel*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "familyPhone",
          label: this.$t("org.label.familyPhone"),
          /*familyPhone*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "driverDate",
          label: this.$t("org.label.driverDate"),
          /*driverDate*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "nationCode",
          label: this.$t("org.label.nationCode"),
          /*nationCode*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "businessDate",
          label: this.$t("org.label.businessDate"),
          /*businessDate*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "employDate",
          label: this.$t("org.label.employDate"),
          /*employDate*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "employType",
          label: this.$t("org.label.employType"),
          /*employType*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "politicsCode",
          label: this.$t("org.label.politicsCode"),
          /*politicsCode*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "credTypeCode",
          label: this.$t("org.label.credTypeCode"),
          /*credTypeCode*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "credNo",
          label: this.$t("org.label.credNo"),
          /*credNo*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "leaveDate",
          label: this.$t("org.label.leaveDate"),
          /*leaveDate*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "empCode",
          label: this.$t("org.label.empCode"),
          /*empCode*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "userId",
          label: this.$t("org.label.userId"),
          /*empCode*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "dlrId",
          label: this.$t("org.label.dlrId"),
          /*dlrId*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "dlrCode",
          label: this.$t("org.label.dlrCode"),
          /*dlrCode*/ width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "degreeCode",
          label: this.$t("org.label.degreeCode"),
          /*dlrCode*/ width: null,
          align: "center",
          hidden: true
        }
      ],
      //查询条件
      formField: {
        empName: "",
        userName: "",
        orgName: "",
        isEnable: ""
      },
      orgClickData: {}
    };
  },
  methods: {
    // 新增
    add1() {
      if (JSON.stringify(this.orgClickData) == "{}") {
        this.$message({
          message: this.$t("org.message.chooseOrgName") /*请选择组织*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      this.showOrgName = this.formField.orgName;
      this.add();
    },
    reset() {
      this.formField.empName = "";
      this.formField.userName = "";
      this.formField.orgName = "";
      this.formField.isEnable = "";
    },

    // 绑定单击树的事件
    handleNodeClick(data) {
      this.orgClickData = data;
      this.formField.orgName = data.orgName;
      // 组织类型
      this.roleOrgType = data.orgBelongType;
      // 新增/修改需要的值
      this.dlrId = data.groupId;
      this.dlrCode = data.groupCode;
      this.showOrgName = data.orgName;
      this.showTreeId = data.orgTreeId;
      this.queryTable(1);
    },
    //编辑
    handleClick(row) {
      console.log(row);
      const thats = this.$refs.multipleTable;
      this.roleOrgType = thats.list[row].orgName;
      this.edit(row);
    },
    // 查看
    showView(row) {
      const that = this.$refs.multipleTable;
      this.toViewd = true;
      this.showToView = this.showToView + "1";
      this.roleId = that.list[row].userId;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
