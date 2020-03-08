<!--
* description: 备件仓库仓位维护
* author: chchhui
* createdDate: 2019-08-01
* logs：
*  20190801 新增页面功能
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button size="small" type="primary" @click="openEdit">修改</el-button>
      <el-button size="small" @click="addWareHouse">新增</el-button>
    </div>
    <PartsDlrWareHouse
      :editData="wareHouseDialog"
      :key="showWareHouseCare"
      :wareHouseDialogFormVisible="showWareHouseCare"
      :handleTitle="handleTitle"
      @visible="handDialogVisibleFunc"
    ></PartsDlrWareHouse>
    <el-dialog
      title="仓位维护"
      :visible.sync="wearPlaceVisible"
      :append-to-body="true"
      width="900px"
      @close="closeDialog"
    >
      <div class="filter-container filter-params">
        <el-table
          :data="placeList"
          element-loading-text="Loading"
          height="200"
          border
          fit
          stripe
          highlight-current-row
          @select="isSelect"
          @select-all="isSelect"
        >
          <el-table-column label="序号" type="index" width="60" align="center"></el-table-column>
          <el-table-column type="selection" width="55" label="选择+" />
          <el-table-column label="仓位编码+" prop="placeCode" align="center" width="110">
            <template slot-scope="scope">
              <el-input
                size="mini"
                controls-position="center"
                v-model="scope.row.placeCode"
                placeholder="请输入"
                @change="getInputValue"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column label="是否有备件" align="center" width="120">
            <template slot-scope="scope">
              <el-select v-model="scope.row.hasPart" placeholder="请选择" size="small">
                <el-option label="是" value="1"></el-option>
                <el-option label="否" value="0"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="remark" label="备注" align="left">
            <template slot-scope="scope">
              <el-input size="small" v-model="scope.row.remark" placeholder="请输入"></el-input>
            </template>
          </el-table-column>
        </el-table>
        <div class="filter-container filter-button">
          <el-button type="primary" @click="addPlace">新增仓位</el-button>
          <el-button @click="delPlace">删除仓位</el-button>
          <el-button @click="placeSave">保存</el-button>
        </div>
      </div>
    </el-dialog>
    <div class="filter-container filter-title">仓库维护</div>
    <el-table
      v-loading="listLoading"
      :data="wareHouseList"
      element-loading-text="Loading"
      border
      fit
      stripe
      highlight-current-row
      @row-click="isSelected"
    >
      <el-table-column label="序号" type="index" width="60%" align="center"></el-table-column>
      <el-table-column prop="warehouseCode" label="仓库编码" align="center"></el-table-column>
      <el-table-column prop="warehouseName" label="仓库名称" align="center">
        <template slot-scope="scope">
          <el-button type="text" v-text="scope.row.warehouseName" @click="changeWareHouse(scope)"></el-button>
        </template>
      </el-table-column>
      <el-table-column label="是否启用" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.isEnable == '1'">是</span>
          <span v-else>否</span>
        </template>
      </el-table-column>
      <el-table-column label="是否有备件" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.hasPart == '1'">有</span>
          <span v-else>无</span>
        </template>
      </el-table-column>
      <el-table-column label="是否有仓位" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.hasPlace == '1'">有</span>
          <span v-else>无</span>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" align="left"></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="wareHouseList?pageTotal:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { requestGraphQL } from "@/api/commonRequest";
import PartsDlrWareHouse from "@/components/pa/PartsDlrWareHouse";
import { paApis } from "@/api/graphQLApiList/pa";
import { getPartsWareHouseList } from "@/api/pa/paPartsDlrWareHouse";
export default {
  name: "pabjckcwwh",
  components: {
    PartsDlrWareHouse
  },
  data() {
    return {
      wearPlaceVisible: false,
      pageTotal: undefined,
      listLoading: false,
      select: undefined,
      part: undefined,
      place: undefined,
      handleTitle: 0,
      popup: "",
      wareHouseDialog: {},
      showWareHouseCare: false,
      wareHouseList: [],
      placeList: [],
      dialogWareHouseList: "",
      pageIndex: 1,
      pageSize: 10,
      limit: 20,
      listQuery: {
        dlrId: this.$store.getters.orgInfo.DLR_ID
      },
      placeQueryData: {
        dlrId: this.$store.getters.orgInfo.DLR_ID,
        warehouseId: ""
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    //请求数据
    fetchData(page) {
      const that = this;
      that.listLoading = true;
      let queryObj = {
        // api配置
        apiConfig: paApis.partsDlrWareHouseQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "warehouseId",
              "warehouseCode",
              "warehouseName",
              "remark",
              "isEnable",
              "dlrId",
              "updateControlId",
              "oemId",
              "groupId",
              "oemCode",
              "groupCode",
              "hasPlace",
              "hasPart"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageIndex: that.pageIndex,
          pageSize: that.pageSize,
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      //console.log(paramD)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        //console.log(response)
        if (
          response.data[paApis.partsDlrWareHouseQueryFindAll.ServiceCode]
            .result === "1"
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              paApis.partsDlrWareHouseQueryFindAll.ServiceCode
            ].records;
          that.wareHouseList =
            response.data[
              paApis.partsDlrWareHouseQueryFindAll.ServiceCode
            ].rows;
          that.listLoading = false;
        }
      });
    },

    //关闭弹窗
    closeDialog() {
      this.wearPlaceVisible = false;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.fetchData();
    },
    handDialogVisibleFunc(val) {
      this.showWareHouseCare = val;
      this.wareHouseDialog = {};
      this.fetchData();
    },

    //点击仓库名称事件
    changeWareHouse(scope) {
      this.placeQueryData.warehouseId = scope.row.warehouseId;
      this.wearPlaceVisible = true;
      this.placeQuery();
    },

    //获取输入框值
    getInputValue() {},

    //选择后
    isSelected(row) {
      this.wareHouseDialog = row;
    },

    //仓位保存
    placeSave() {
      const that = this;
      let queryObj = {
        //保存需要传 type="mutation"
        type: "mutation",
        // api配置
        apiConfig: paApis.partsDlrPlaceMutationSave,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: saveCode
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      requestGraphQL(paramD).then(response => {
        if (
          response.data[paApis.partsDlrPlaceMutationSave.ServiceCode].result ===
          "1"
        ) {
          this.$message({ message: "保存成功", type: "success" });
        }
      });
    },

    //选中要删除的仓位
    isSelect(selection) {
      const tempList = selection;
      var tempOptions = [];
      tempList.forEach(row => {
        tempOptions.push({
          placeId: row.placeId,
          updateControlId: row.updateControlId
        });
      });
      this.selected = tempOptions;
    },

    //新增仓位
    addPlace() {
      this.i = this.placeList.length;
      this.i += 1;
      this.placeList.push({
        dlrId: this.$store.getters.orgInfo.DLR_ID,
        warehouseId: this.placeQueryData.warehouseId,
        hasPart: "",
        placeCode: String(this.i),
        remark: ""
      });
    },

    //删除仓位
    delPlace() {},

    //仓位查询
    placeQuery(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: paApis.partsDlrPlaceQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "placeCode",
              "hasPart",
              "remark",
              "placeId",
              "updateControlId",
              "dlrId",
              "warehouseId"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageIndex: that.pageIndex,
          pageSize: page || that.pageSize,
          dataInfo: that.placeQueryData
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      //console.log(paramD)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        //console.log(response)
        if (
          response.data[paApis.partsDlrPlaceQueryFindAll.ServiceCode].result ===
          "1"
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[paApis.partsDlrPlaceQueryFindAll.ServiceCode].records;
          that.placeList =
            response.data[paApis.partsDlrPlaceQueryFindAll.ServiceCode].rows;
        }
      });
    },

    //修改
    openEdit() {
      if (JSON.stringify(this.wareHouseDialog) == "{}") {
        this.$alert("请选择一条您要修改的内容", "提示", {
          confirmButtonText: "确定"
        });
      } else {
        this.handleTitle = 1;
        this.showWareHouseCare = true;
      }
    },

    //添加
    addWareHouse() {
      this.wareHouseDialog = {};
      this.handleTitle = 0;
      this.showWareHouseCare = true;
    }
  }
};
</script>
