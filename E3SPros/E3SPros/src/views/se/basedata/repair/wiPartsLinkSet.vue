<!--
* description: 工时备件关联设置
* author: pukuim
* createdDate: 2019-07-24
* logs：
*  20190720 新增页面功能
-->

<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="queryFindAll(1)">查询</el-button>
      <el-button size="small" @click="resetControl()">重置</el-button>
    </div>

    <div class="filter-container filter-params" ref="conHeight">
      <el-row>
        <el-col :span="22">
          <el-row>
            <el-col :span="6">
              <label>维修大类</label>
              <el-select
                collapse-tags
                filterable
                v-model="listQuery.operatePartId"
                placeholder="全部"
                clearable
                @change="operatePartChange"
                size="small"
              >
                <el-option
                  v-for="item in operatePartIdOptions"
                  :key="item.code"
                  :label="item.text"
                  :value="item.code"
                >{{item.text}}</el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <label>维修小类</label>
              <el-select
                collapse-tags
                filterable
                v-model="listQuery.wiSmallKindId"
                placeholder="全部"
                clearable
                size="small"
              >
                <el-option
                  v-for="item in wiSmallKindIdOptions"
                  :key="item.code"
                  :label="item.text"
                  :value="item.code"
                >{{item.text}}</el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <label>工时编码</label>
              <el-input v-model="listQuery.wiCode" placeholder size="small" />
            </el-col>
            <el-col :span="6">
              <label>维修内容</label>
              <el-input v-model="listQuery.wiName" placeholder size="small" />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button :icon="toggleParamIcon" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam">
          <el-row>
            <el-col :span="6">
              <label>备件编码</label>
              <el-input v-model="listQuery.partNo" placeholder size="small" />
            </el-col>
            <el-col :span="6">
              <label>备件名称</label>
              <el-input v-model="listQuery.partName" placeholder size="small" />
            </el-col>
            <el-col :span="6">
              <label>备件类别</label>
              <el-select
                collapse-tags
                filterable
                v-model="listQuery.partTypeCode"
                placeholder="全部"
                clearable
                size="small"
              >
                <el-option
                  v-for="item in partTypeOptions"
                  :key="item.code"
                  :label="item.text"
                  :value="item.code"
                >{{item.text}}</el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <label>备件属性</label>
              <el-select
                collapse-tags
                filterable
                v-model="listQuery.partPropertyCode"
                placeholder="全部"
                clearable
                size="small"
              >
                <el-option
                  v-for="item in partPropertyOptions"
                  :key="item.code"
                  :label="item.text"
                  :value="item.code"
                >{{item.text}}</el-option>
              </el-select>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      v-loading="listLoading"
      ref="multipleTable"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :height="tableHeight"
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      @cell-click="cellClick"
      @current-change="curRowChange"
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <!-- <el-table-column type="selection" width="55" label="选择+" /> -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <span class="operate" v-if="scope.row.partNo != null && scope.row.partNo != ''">取消关联</span>
          <span class="operate" v-else>设置关联</span>
        </template>
      </el-table-column>
      <el-table-column label="工时编码" v-if="false">
        <template slot-scope="scope">{{ scope.row.wiCode }}</template>
      </el-table-column>
      <el-table-column label="维修内容">
        <template slot-scope="scope">{{ scope.row.wiName }}</template>
      </el-table-column>
      <el-table-column label="工时来源" v-if="true">
        <template slot-scope="scope">{{ scope.row.isSystemName }}</template>
      </el-table-column>
      <el-table-column label="备件编码">
        <template slot-scope="scope">{{ scope.row.partNo }}</template>
      </el-table-column>
      <el-table-column label="备件名称">
        <template slot-scope="scope">{{ scope.row.partName }}</template>
      </el-table-column>
      <el-table-column label="备件类别" v-if="false">
        <template slot-scope="scope">{{ scope.row.partTypeName }}</template>
      </el-table-column>
      <el-table-column label="备件属性" align="center">
        <template slot-scope="scope">{{ scope.row.partPropertyName }}</template>
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
      :current-page.sync="pageIndex"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      ref="paginationHeight"
    />
    <paChoosePart
      :paChoosePartVisible="paChoosePartVisible"
      :type="0"
      @seChooseWiData="getPartInfo"
      @close="closeChooseWiSelect"
    ></paChoosePart>
  </div>
</template>
<script>
import {
  doQueryFindAll,
  doQueryFindSmall
} from "@/api/se/basedata/repair/repairWIType";
import {
  doLinkRemove,
  doLinkSave,
  doQueryList
} from "@/api/se/basedata/repair/wiPartsLinkSet";
import { doQueryDbAttrTypeList } from "@/api/pa/orderAuditItem/orderAuditItem";
import { seApis } from "@/api/graphQLApiList/se";
import { paApis } from "@/api/graphQLApiList/pa";
import paChoosePart from "@/components/se/paChoosePart";
import { the_Height } from "@/components/se/seMixins/makeHeight";
export default {
  name: "wiPartsLinkSet_vue",
  mixins: [the_Height],
  components: {
    paChoosePart
  },
  props: {
    closeOnClickModal: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      toggleParamIcon: "el-icon-plus",
      toggleParam: false,
      code: 1,
      list: null,
      curTableRow: {},
      //isValid:false,
      pageTotal: 0,
      paChoosePartVisible: false,
      listLoading: true,
      pageIndex: 1,
      pageSize: 10,
      listQuery: {
        oemCode: this.$store.getters.orgInfo.OEM_CODE,
        groupCode: this.$store.getters.orgInfo.GROUP_CODE,
        operatePartId: "",
        wiSmallKindId: "",
        wiCode: "",
        wiName: "",
        partNo: "",
        partName: "",
        multiCarTypeCode: "",
        partTypeCode: "",
        partPropertyCode: ""
      },
      bigTypeQuery: {
        //维修大类查询参数
        operatePartId: "",
        operatePartCode: "",
        wiSmallKindId: "",
        repairSmallKindCode: "",
        isSystem: ""
      },
      selectedPartInfo: {
        //备件选择窗口返回的单条备件数据
        partNo: "",
        partName: "",
        partQty: 1,
        multiCarTypeCode: ""
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      },

      isSystemOptions: this.$suit.constData.IS_SYSTEM_OPTIONS,
      operatePartIdOptions: [],
      partTypeOptions: [], // 备件类别
      partPropertyOptions: [], // 备件属性
      wiSmallKindIdOptions: [],
      defaultProps: {}
    };
  },
  created() {
    this.queryFindBigType(1, 1);
    this.fetchPaTypeOptions();
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
      if (!this.toggleParam) {
        this.toggleParamIcon = "el-icon-plus";
      } else {
        this.toggleParamIcon = "el-icon-minus";
      }
    },
    fetchPaTypeOptions() {
      //查询备件类别下拉列表
      let obj = {
        oemCode: this.listQuery.oemCode,
        groupCode: this.listQuery.groupCode,
        partTypeCode: "",
        partTypeId: "",
        isEnable: "",
        partTypeName: "",
        isRefine: ""
      };
      doQueryDbAttrTypeList(-1, 1, obj).then(response => {
        var resData = response.data[paApis.paDbAttrTypeQueryList.ServiceCode];
        if (resData.result === "1" && resData.rows != null) {
          resData.rows.forEach(row => {
            this.partTypeOptions.push({
              code: row.partTypeCode,
              text: row.partTypeName
            });
            if (
              this.partPropertyOptions.filter(
                o => o.code == row.partPropertyCode
              ).length == 0
            ) {
              this.partPropertyOptions.push({
                code: row.partPropertyCode,
                text: row.partPropertyName
              });
            }
          });
        }
      });
    },
    curRowChange(curRow, oldRow) {
      if (curRow != null) {
        this.curTableRow = curRow;
      }
    },
    cellClick(row, column, cell, event) {
      if (column.label == "操作") {
        if (cell.innerText.indexOf("取消关联") != -1) {
          this.$confirm("是否取消该工时与备件的关联关系?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "info"
          })
            .then(() => {
              //调用取消关联接口
              this.linkRemove(row);
            })
            .catch(() => {});
          event.cancelBubble = true;
        } else if (cell.innerText.indexOf("设置关联") != -1) {
          this.curTableRow = row;
          //TODO 弹窗选择备件，然后再调用接口设置关联
          //调用取消关联接口
          this.showChooseWiSelect();
          event.cancelBubble = true;
        }
      }
    },
    getPartInfo(rowDatas) {
      //选择备件弹窗口回调事件
      if (!rowDatas) {
        this.$message({
          type: "warning",
          message: `请选择备件'`
        });
        return false;
      }
      this.selectedPartInfo.partNo = rowDatas.partNo;
      this.selectedPartInfo.partName = rowDatas.partName;
      this.selectedPartInfo.partQty = rowDatas.partQty || 1;
      this.selectedPartInfo.multiCarTypeCode = rowDatas.pubCarTypeCode;
      this.paChoosePartVisible = false;
      this.linkSave(this.curTableRow);
    },
    showChooseWiSelect() {
      this.paChoosePartVisible = true;
    },
    closeChooseWiSelect() {
      this.paChoosePartVisible = false;
    },

    linkSave(curRow) {
      if (curRow.partNo != null && curRow.partNo !== "") {
        this.$message({
          type: "warning",
          message: `一个工时只能关联一种备件'`
        });
        return;
      }
      let datainfo = {
        wiId: curRow.wiId,
        wiCode: curRow.wiCode,
        wiName: curRow.wiName,
        partNo: this.selectedPartInfo.partNo,
        partName: this.selectedPartInfo.partName,
        partQty: this.selectedPartInfo.partQty || 1,
        multiCarTypeCode: this.selectedPartInfo.multiCarTypeCode,
        isSystem: curRow.isSystem,
        dlrCode: this.$store.getters.orgInfo.DLR_CODE,
        dlrId: this.$store.getters.orgInfo.DLR_ID,
        oemId: this.$store.getters.orgInfo.OEM_ID,
        groupId: this.$store.getters.orgInfo.GROUP_ID,
        oemCode: this.$store.getters.orgInfo.OEM_CODE,
        groupCode: this.$store.getters.orgInfo.GROUP_CODE,
        isEnable: "1",
        updateControlId: ""
      };
      const that = this;
      doLinkSave(datainfo).then(response => {
        var resData = response.data[seApis.SeDbWiPartMutationSave.ServiceCode];
        if (resData.result === "1") {
          that.$alert("关联成功", "提示", {
            type: "info",
            confirmButtonText: "确定"
          });
          that.queryFindAll();
        } else {
          that.$alert(resData.msg, "提示", {
            type: "error",
            confirmButtonText: "确定"
          });
        }
      });
    },
    linkRemove(curRow) {
      const that = this;
      doLinkRemove({
        wiPartId: curRow.wiPartId,
        updateControlId: curRow.updateControlId
      }).then(response => {
        var resData =
          response.data[seApis.SeDbWiPartMutationRemove.ServiceCode];
        if (resData.result === "1") {
          that.$alert("取消关联成功", "提示", {
            type: "info",
            confirmButtonText: "确定"
          });
          that.queryFindAll();
        } else {
          that.$alert(resData.msg, "提示", {
            type: "error",
            confirmButtonText: "确定"
          });
        }
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.queryFindAll();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.queryFindAll();
    },
    operatePartChange() {
      this.bigTypeQuery.operatePartId = this.listQuery.operatePartId;
      console.log("bigid:" + this.bigTypeQuery.operatePartId);
      this.queryFindSmall(this.bigTypeQuery.operatePartId);
    },

    queryFindAll(page) {
      this.listLoading = true;
      const that = this;
      that.curTableRow = {};
      //转换了中台请求格式数据
      doQueryList(that.pageSize, page || that.pageIndex, that.listQuery).then(
        response => {
          if (response.result !== "1") {
            this.listLoading = false;
            this.$message({
              type: "error",
              message: response.msg
            });
            return;
          }
          var resData =
            response.data[seApis.SeDbWiPartQueryFindAll.ServiceCode];
          if (resData.result === "1") {
            if (page) {
              //查询完返回指定的page页数
              that.pageIndex = page;
            }
            that.pageTotal = Number(resData.records);
            var isSystemDic = {};
            this.isSystemOptions.forEach(row => {
              isSystemDic[row.code] = row.text;
            });

            resData.rows.forEach(row => {
              if (!row.hasOwnProperty("isSystemName")) {
                row.isSystemName = isSystemDic[row.isSystem] || "";
              }
            });
            that.list = resData.rows;
            that.listLoading = false;
          } else {
            that.listLoading = false;
            this.$message({
              message: resData.msg,
              type: "warning",
              duration: 2000
            });
          }
        }
      );
    },
    queryFindBigType(page, firstLoad = "0") {
      this.listLoading = true;
      const that = this;
      //转换了中台请求格式数据
      doQueryFindAll(1000, page || 1, that.bigTypeQuery).then(response => {
        if (response.result !== "1") {
          this.listLoading = false;
          this.$message({
            type: "error",
            message: response.msg
          });
          console.log(response.errors.join(" "));
          return;
        }
        var resData =
          response.data[seApis.seDbOpratePlaceQueryFindAll.ServiceCode];
        that.listLoading = false;
        if (resData.result === "1" && resData.rows != null) {
          var listTemp = resData.rows;
          if (firstLoad == "1") {
            //第一次加载，大类下拉框
            var temp_array = [];
            listTemp.forEach(row => {
              if (
                temp_array.filter(o => o.code == row.operatePartId).length == 0
              ) {
                temp_array.push({
                  code: row.operatePartId,
                  text: row.opratePlaceName
                });
              }
            });
            this.operatePartIdOptions = temp_array;
          }
        }
      });
    },
    queryFindSmall(operatePartId) {
      //查询小类下拉框。传入大类ID
      const that = this;
      doQueryFindSmall(1000, 1, {
        operatePartId: operatePartId || that.bigTypeQuery.operatePartId
      }).then(response => {
        var resData =
          response.data[seApis.seDbOpratePlaceQueryFindSmalll.ServiceCode];
        if (resData.result === "1" && resData.rows != null) {
          var temp_array = [];
          if (temp_array.filter(o => o.code == row.wiSmallKindId).length == 0) {
            resData.rows.forEach(row => {
              temp_array.push({
                code: row.wiSmallKindId,
                text: row.repairSmallKindName
              });
            });
          }
          this.wiSmallKindIdOptions = temp_array;
        }
      });
    },
    resetControl() {
      this.listQuery.operatePartId = "";
      this.listQuery.wiSmallKindId = "";
      this.listQuery.wiCode = "";
      this.listQuery.wiName = "";
      this.listQuery.partNo = "";
      this.listQuery.partName = "";
      this.listQuery.multiCarTypeCode = "";
      this.listQuery.partTypeCode = "";
      this.listQuery.partPropertyCode = "";
    }
  }
};
</script>
<style scoped>
.el-form-item__label {
  margin-right: 0;
}
.minCode11 {
  text-align: left;
  float: left;
  width: 40px;
}
.minCode21 {
  text-align: left;
  float: left;
  width: 40px;
}
span.operate {
  color: #0077ff;
  cursor: pointer;
  text-decoration: underline;
}
</style>
