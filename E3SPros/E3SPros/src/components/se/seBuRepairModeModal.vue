<template>
  <section class="seBuRepairModeModal">
    <el-dialog
      :title="thimeTitle"
      :visible.sync="seBuRepairModeModalVisible"
      :close-on-click-modal="false"
      :append-to-body="true"
      @close="close"
      width="1100px"
    >
      <el-row>
        <div class="filter-container filter-title">查询条件</div>
        <div class="filter-container filter-params">
          <el-row>
            <carBrand :span="8" :code="this.code" @changeCode="getBrandCode" />
            <el-col :span="8" class="margin-b-10">
              <label class="margin-r-0">适用车型</label>
              <el-select
                v-model="listQuery.adapType"
                placeholder="请选择"
                @change="changeSelect"
                clearable
                size="small"
              >
                <el-option
                  v-for="item in adapTypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <div class="filter-container filter-button">
              <el-button type="primary" size="small" @click="imports">导入模板</el-button>
              <el-button size="small" @click="select">取消</el-button>
            </div>
          </el-row>
        </div>
        <div class="filter-container filter-title">查询结果</div>
        <el-col :span="8">
          <el-tree
            :data="BRMImportResData"
            :highlight-current="true"
            :props="treeDefaultProps"
            :default-expanded-keys="treeExpandKeys"
            node-key="id"
            @node-click="handleNodeClick"
            show-checkbox
            default-expand-all
          ></el-tree>
        </el-col>
        <el-col :span="16">
          <el-col>
            <div class="filter-container filter-title">维修工时</div>
            <el-table
              :data="detailQueryResDataWi"
              element-loading-text="Loading"
              border
              stripe
              v-loading="detailLoading"
              max-height="155"
              style="width: 100%"
              :header-cell-style="tableHeaderRowClassName"
              highlight-current-row
              @select="tableListSelect"
              ref="detailQueryTable"
              @select-all="tableListSelect"
            >
              <el-table-column align="center" label="序号" width="55">
                <template slot-scope="scope">{{ scope.$index + 1 }}</template>
              </el-table-column>
              <el-table-column label="工时编码">
                <template slot-scope="scope">{{ scope.row.wiCode }}</template>
              </el-table-column>
              <el-table-column label="维修内容">
                <template slot-scope="scope">{{ scope.row.wiName }}</template>
              </el-table-column>
              <el-table-column label="工时数">
                <template slot-scope="scope">{{ scope.row.wiQty }}</template>
              </el-table-column>
              <el-table-column label="业务类别">
                <template slot-scope="scope">{{ scope.row.businessTypeName }}</template>
              </el-table-column>
            </el-table>
            <!-- <el-pagination
                        background
                        layout="prev, pager, next, sizes, ->, total"
                        prev-text="上一页"
                        next-text="下一页"
                        :page-sizes="[10, 20, 30]"
                        :page-size="10"
                        :total="list?list.length:0"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
            />-->
          </el-col>
          <el-col>
            <div class="filter-container filter-title">维修备件</div>
            <el-table
              :data="detailQueryResDataPart"
              element-loading-text="Loading"
              v-loading="detailLoading"
              border
              stripe
              max-height="155"
              style="width: 100%"
              :header-cell-style="tableHeaderRowClassName"
              highlight-current-row
              ref="chooseWiTable"
            >
              <el-table-column align="center" label="序号" width="55">
                <template slot-scope="scope">{{ scope.$index + 1 }}</template>
              </el-table-column>
              <el-table-column label="备件编码">
                <template slot-scope="scope">{{ scope.row.partNo }}</template>
              </el-table-column>
              <el-table-column label="备件名称">
                <template slot-scope="scope">{{ scope.row.partName }}</template>
              </el-table-column>
              <el-table-column label="备件数量">
                <template slot-scope="scope">{{ scope.row.partQty }}</template>
              </el-table-column>
              <el-table-column label="备件价格">
                <template slot-scope="scope">{{ scope.row.partPrice }}</template>
              </el-table-column>
              <el-table-column label="业务类别">
                <template slot-scope="scope">{{ scope.row.businessTypeName }}</template>
              </el-table-column>
            </el-table>
            <!-- <el-pagination
                        background
                        layout="prev, pager, next, sizes, ->, total"
                        prev-text="上一页"
                        next-text="下一页"
                        :page-sizes="[10, 20, 30]"
                        :page-size="10"
                        :total="list?list.length:0"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
            />-->
          </el-col>
        </el-col>
      </el-row>
    </el-dialog>
  </section>
</template>
<script>
import { getCarType } from "@/api/components";
import {
  seCommonQueryRepairModeDetail,
  seDbRepairModeQueryFindAll,
  doAdapType
} from "@/api/se/seBuRepairModeModal";
import carBrand from "@/components/org/carBrand/carBrand";
import { seApis } from "@/api/graphQLApiList/se";

export default {
  components: {
    carBrand
  },
  props: {
    seBuRepairModeModalVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    code: {
      type: String,
      default: function() {
        return "1";
      }
    },
    adapType: {
      type: String,
      default: function() {
        return "1";
      }
    },
    title: {
      type: Number,
      default: function() {
        return 1;
      }
    }
  },
  data() {
    return {
      detailLoading: false,
      treeDefaultProps: {
        children: "children",
        label: "label"
      },
      detailQuery: {
        pageIndex: 1,
        pageSize: 1,
        dataInfo: {
          //   carTypeCode: "",
          repairModeId: ""
        }
      },
      treeExpandKeys: ["0"],
      detailQueryResData: [],
      detailQueryResDataWi: [], //工时列表
      detailQueryResDataPart: [], //备件列表
      BRMImport: {
        pageIndex: 1,
        pageSize: 1000,
        dataInfo: {
          // dlrId: this.$store.getters.orgInfo.DLR_ID,
          dlrId: "202",
          carBrandCode: "",
          repairModeCode: "",
          repairModeName: "",
          isEnable: "",
          isSystem: "",
          payKind: ""
        }
      },
      BRMImportResData: [],
      codeInside: this.code,
      thimeTitle: "导入模板",
      listLoading: true,
      list: [],
      tableList: [],
      tableChooseList: [],
      adapTypeList: [],
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        dataInfo: {
          oemCode: null,
          groupCode: null,
          dlrId: null,
          secondDlrId: null,
          pfpCode: null,
          isLock: null,
          carTypeCode: null,
          wiCode: null,
          wiName: null,
          repairModeId: null,
          repairSmallKindCode: null,
          isSystem: null,
          appendcondition: null,
          adapType: this.adapType
        }
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  watch: {
    seBuRepairModeModalVisible(newValue, oldValue) {
      if (newValue) {
        //清空查询条件
        this.detailQueryResDataWi = [];
        this.detailQueryResDataPart = [];
      }
      // this.fetchData();
    }
  },
  created() {
    this.title
      ? (this.thimeTitle = "导入模板")
      : (this.thimeTitle = "导入模板");
    this.buRepairModeImport();
    // this.fatchAdapType();
  },
  methods: {
    handleNodeClick(val, node, tree) {
      console.log(val);
      console.log(node);
      console.log(tree);
      this.fatchDetail(val);
    },
    getBrandCode(val) {
      console.log(val);
    },
    fetchData() {
      this.listLoading = true;
      doSeChooseWiQuery(
        this.detailQuery.pageSize,
        this.detailQuery.pageIndex,
        this.detailQuery.dataInfo
      ).then(response => {
        this.listLoading = false;
        console.log(response);
      });
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    tableListSelect(selection) {
      this.tableList = selection;
    },
    select() {
      if (this.tableList.length === 0) {
        this.$alert("未选择数据！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      } else {
        if (this.title === 0) {
          if (this.tableList.length > 1) {
            this.$alert("只能选择一条数据！", "信息提示", {
              confirmButtonText: "确定",
              type: "warning",
              callback: action => {}
            });
          } else {
          }
        } else {
        }
      }
    },
    close() {
      this.$emit("close", false);
    },
    fatchDetail(val) {
      this.detailLoading = true;
      this.detailQuery.dataInfo.repairModeId = val.id;
      seCommonQueryRepairModeDetail(
        this.detailQuery.pageSize,
        this.detailQuery.pageIndex,
        this.detailQuery.dataInfo
      ).then(response => {
        this.detailQueryResData =
          response.data[seApis.seCommonQueryRepairModeDetail.ServiceCode].rows;
        if (
          this.detailQueryResData != null &&
          this.detailQueryResData.length > 0
        ) {
          this.detailQueryResDataWi = this.detailQueryResData[0].repairModeWi;
          this.detailQueryResDataPart = this.detailQueryResData[0].repairModePart;
        }

        this.detailLoading = false;
      });
    },
    fatchAdapType() {
      doAdapType(this.detailQuery.dataInfo).then(response => {
        console.log(response.data[seApis.AdapType.ServiceCode]);
        this.adapTypeList = response.data[seApis.AdapType.ServiceCode].rows;
      });
    },
    buRepairModeImport() {
      seDbRepairModeQueryFindAll(
        this.BRMImport.pageSize,
        this.BRMImport.pageIndex,
        this.BRMImport.dataInfo
      ).then(response => {
        console.log(
          response.data[seApis.seDbRepairModeQueryFindAll.ServiceCode]
        );
        let importResData =
          response.data[seApis.seDbRepairModeQueryFindAll.ServiceCode];
        if (importResData.result === "1" && importResData.rows != null) {
          if (importResData.rows != null) {
            importResData.rows.forEach(row => {});
          }
          var temp_array = [];
          importResData.rows.forEach(row => {
            if (
              temp_array.filter(o => o.code == row.repairModeId).length === 0
            ) {
              temp_array.push({
                code: row.repairModeId,
                text: row.repairModeName
              });
            }
          });
          this.operatePartIdOptions = temp_array;
          //加载左边树形结构
          var treeChilds = [];
          importResData.rows.forEach(row => {
            var node = {};
            var nodesExists = treeChilds.filter(o => o.id == row.repairModeId);
            if (nodesExists.length == 0) {
              node = {
                id: row.repairModeId,
                code: row.repairModeCode,
                label: row.repairModeName,
                deep: 1,
                children: []
              };
            } else {
              node = nodesExists[0];
            }
            if (nodesExists.length == 0) {
              treeChilds.push(node);
            }
          });
          this.BRMImportResData = treeChilds;
        }
      });
    },
    changeSelect(val) {
      console.log(val);
    },
    sentCode() {
      this.$emit("sentCode", this.detailQueryResData);
    },
    imports() {
      if (this.detailQueryResData.length != 0) {
        this.sentCode();
      } else {
        this.$message.error("未获取到信息，请重试！");
      }
    }
  }
};
</script>
<style scoped>
.margin-r-0 {
  margin-right: 0;
}
.margin-b-10 {
  margin-bottom: 10px;
}
.padding-l-10 {
  padding-left: 10px;
}
.textalign-l {
  text-align: left;
}
.margin-b-0 {
  margin-bottom: 0;
}
.color_ {
  color: #169bd5;
}
.dis-IB {
  display: inline-block;
}
</style>
