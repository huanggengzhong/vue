<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="fetchData()">查询</el-button>

      <!-- <el-button size="small" @click="printf()">打印</el-button> -->
      <el-button size="small" @click="reduction()">重置</el-button>
    </div>

    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="22" class="table-col">
          <el-col :span="6">
            <label>施工单号</label>
            <el-input v-model="listQuery.repairOrderCode" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>车牌号</label>
            <el-input v-model="listQuery.carLicense" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>备件编码</label>
            <el-input v-model="listQuery.partNo" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>备件名称</label>
            <el-input v-model="listQuery.partName" placeholder="请输入" size="small"></el-input>
          </el-col>
        </el-col>

        <el-col :span="2" class="moreBtn" v-if="isShowMoreBtn">
          <el-button :icon="moreBtnIcon" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>

        <el-col :span="22" v-show="toggleParam" class="toggleParam" style="z-index:2000">
          <el-row>
            <el-col :span="6">
              <label>VIN码</label>
              <el-input v-model="listQuery.vin" placeholder="请输入" size="small"></el-input>
            </el-col>
            <el-col :span="6">
              <label>客户名称</label>
              <el-input v-model="listQuery.custName" placeholder="请输入" size="small"></el-input>
            </el-col>
            <el-col :span="6">
              <label>报修时间</label>
              <el-date-picker
                v-model="listQuery.repairTimeBeg"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd HH:mm:ss"
                @blur="checkDateB"
              ></el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>至</label>
              <el-date-picker
                v-model="listQuery.repairTimeEnd"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd HH:mm:ss"
                @blur="checkDateE"
              ></el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>服务代码</label>
              <el-input v-model="listQuery.saName" placeholder="请输入" size="small"></el-input>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      @row-click="detailsQuery"
      :height="tableHeight"
    >
      <el-table-column label="序号" align="center" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column label="施工单号" align="center">
        <!-- <template slot-scope="scope">
          <a style="color:#00F" @click="dataDialogVisible">{{ scope.row.repairOrderCode }}</a>
        </template>-->
        <span
          slot-scope="scope"
          @click="dataDialogVisible(scope.row.repairOrderId, scope.row.relateOrderId)"
          class="repairOrderCode"
        >{{ scope.row.repairOrderCode }}</span>
      </el-table-column>
      <el-table-column label="车牌号" align="center">
        <template slot-scope="scope">{{ scope.row.carLicense }}</template>
      </el-table-column>
      <el-table-column label="客户名称" align="center">
        <template slot-scope="scope">{{ scope.row.custName }}</template>
      </el-table-column>
      <el-table-column label="报修日期" align="center">
        <template slot-scope="scope">{{ scope.row.repairTime }}</template>
      </el-table-column>
      <el-table-column label="VIN码" align="center">
        <template slot-scope="scope">{{ scope.row.vin }}</template>
      </el-table-column>
      <el-table-column label="服务代表" align="center">
        <template slot-scope="scope">{{ scope.row.saName }}</template>
      </el-table-column>
      <el-table-column label="预交车日期" align="center">
        <template slot-scope="scope">{{ scope.row.preGetDate }}</template>
      </el-table-column>
      <el-table-column label="关联单ID" v-if="false">
        <template slot-scope="scope">{{ scope.row.repairOrderId }}</template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      ref="paginationHeight"
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="pageTotal"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />

    <!--施工单明细弹框-->
    <el-dialog title="施工单明细" :visible.sync="dialogVisible" width="70%" :append-to-body="true">
      <div class="filter-container filter-params">
        <el-row :gutter="24">
          <el-col :span="8">
            <div class="filter-container filter-params">
              <LookupValue
                :span="24"
                :isMul="isMul"
                :isShowLabel="isshow"
                :code="listQuery2.dataInfo1.pickingPersonId"
                :lookuptype="lookuptype"
                :labelName="lookupValuelable"
                @changeCode="getLookupValue"
              />
            </div>
          </el-col>
          <el-col :span="16">
            <div class="filter-container filter-button">
              <el-button size="small" @click="saveData">保存</el-button>
              <el-button size="small" @click="printf()">打印</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-table
        v-loading="listLoading"
        :data="list1"
        element-loading-text="Loading"
        ref="multipleTable"
        border
        fit
        stripe
        height="300"
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
        :row-class-name="tableRowClassName"
        @row-click="getRow"
      >
        <el-table-column label="序号" align="center" width="60">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column label="选择" type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="关联单据明细ID" align="center" v-if="false">
          <template slot-scope="scope">{{ scope.row.linkDId }}</template>
        </el-table-column>
        <el-table-column label="备件编码" align="center" width="100">
          <template slot-scope="scope">{{ scope.row.partNo }}</template>
        </el-table-column>
        <el-table-column label="备件ID" align="center" width="100">
          <template slot-scope="scope">{{ scope.row.partId1 }}</template>
        </el-table-column>
        <el-table-column label="备件名称" align="center" width="130">
          <template slot-scope="scope">{{ scope.row.partName }}</template>
        </el-table-column>
        <!--电池包/模组编码 这个字段不要-->
        <!--<el-table-column label="电池包/模组编码+" align="center" width="150">
          <template slot-scope="scope">
            <el-input v-model="scope.row.batteryCode" size="small"></el-input>
          </template>
        </el-table-column>-->
        <!--旧电池包/模组编码 、备件去向 这两个字段不要-->
        <!--<el-table-column label="旧电池包/模组编码+" align="center" width="150">
          <template slot-scope="scope">
            <el-input size="small" ></el-input>
          </template>
        </el-table-column>-->
        <!--<el-table-column label="备件去向+" align="center" width="150">
          <template slot-scope="scope">
            <el-input size="small"></el-input>
          </template>
        </el-table-column>-->
        <el-table-column label="单位" align="center">
          <template slot-scope="scope">{{ scope.row.unit1 }}</template>
        </el-table-column>
        <el-table-column label="本次出库数量+" width="120px" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.outStoreQty1" size="small" @blur="number($event)"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="最小销售数量" align="center" width="120">
          <template slot-scope="scope">{{ scope.row.dlrLeastSaleQty1 }}</template>
        </el-table-column>
        <el-table-column label="领料数" align="center">
          <template slot-scope="scope">{{ scope.row.partQty }}</template>
        </el-table-column>
        <el-table-column label="已出库数" align="center">
          <template slot-scope="scope">{{ scope.row.haveOutStoreQty }}</template>
        </el-table-column>
        <!--<el-table-column label="库存数" align="center">
          <template slot-scope="scope">{{ scope.row.storeQty }}</template>
        </el-table-column>-->
        <el-table-column label="库存数" align="center">
          <template slot-scope="scope">{{ scope.row.canUseQtyTheory }}</template>
        </el-table-column>
        <el-table-column label="可用库存数" align="center" width="120">
          <template slot-scope="scope">{{ scope.row.canUseQtyReal }}</template>
        </el-table-column>
        <el-table-column label="仓库名称" align="center">
          <template slot-scope="scope">{{ scope.row.warehouseName }}</template>
        </el-table-column>
        <el-table-column label="仓位编码" align="center" width="150">
          <template slot-scope="scope">{{ scope.row.placeCode }}</template>
        </el-table-column>
        <el-table-column label="销售单价" align="center">
          <template slot-scope="scope">{{ scope.row.salePrice }}</template>
        </el-table-column>
        <el-table-column label="折扣率" align="center" width="120">
          <template slot-scope="scope">{{ scope.row.partDiscount }}</template>
        </el-table-column>
        <el-table-column label="销售金额" align="center">
          <template slot-scope="scope">{{ scope.row.saleAmount1 }}</template>
        </el-table-column>
        <el-table-column label="维修类别" align="center">
          <template slot-scope="scope">{{ scope.row.repairTypeCode }}</template>
        </el-table-column>
        <el-table-column label="业务类别" align="center">
          <template slot-scope="scope">{{ scope.row.businessType }}</template>
        </el-table-column>
        <el-table-column label="工单ID" align="center" v-if="false">
          <template slot-scope="scope">{{ scope.row.repairOrderId }}</template>
        </el-table-column>
        <el-table-column label="单据类型" align="center" v-if="false">
          <template slot-scope="scope">{{ scope.row.billType }}</template>
        </el-table-column>
        <el-table-column label="不含税库存成本总价" align="center" v-if="false">
          <template slot-scope="scope">{{ scope.row.storeCostAmount }}</template>
        </el-table-column>
        <el-table-column label="含税库存成本总价" align="center" v-if="false">
          <template slot-scope="scope">{{ scope.row.storePriceAmount }}</template>
        </el-table-column>
      </el-table>
    </el-dialog>
    
    <!--打印弹窗-->
    <el-dialog :visible.sync="printfDialogVisible" width="80%" :append-to-body="true">
      <div class="filter-container filter-params">
        <el-row :gutter="24">
          <el-col :span="6">
            <label>出库单号</label>
            <el-select size="small" placeholder="请选择" v-model="listQuery3.outStoreCode" @change="getOutStoreCode">
                <el-option
                v-for="item in outStoreCodeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
              </el-select>
            <!--<LookupValue
              :span="24"
              :isMul="isMul"
              :isShowLabel="isshow"
              :code="listQuery3.pickingPersonId"
              :lookuptype="lookuptype"
              :labelName="lookupValuelable1"
              @changeCode="getLookupValue1"
            />-->
          </el-col>
          <el-col :span="6">
            <label>出库日期</label>
            <el-date-picker
              v-model="outStoreCodeParam.outStoreDateS"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              @change="changeOutStoreDateB"
              :picker-options="outStoreDateBOptions"
              @blur="checkDateB1"
            ></el-date-picker>
          </el-col>
          <el-col :span="6">
            <label>至</label>
            <el-date-picker
              v-model="outStoreCodeParam.outStoreDateE"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              @change="changeOutStoreDateE"
              :picker-options="outStoreDateEOptions"
              @blur="checkDateE1"
            ></el-date-picker>
          </el-col>
        </el-row>
      </div>

      <div style="height:465px;overflow-y:auto;width:100%">
        <div ref="print">
          <el-row :gutter="26">
            <el-col :span="24" align="center">
              <label style="font-size:20px">备件维修出库单</label>
            </el-col>
          </el-row>
          <br />
          <el-row :gutter="26">
            <el-col :span="9">
              <label>出库单号:</label>
              <label>{{this.dlrOutStoreDetail.outStoreCode}}</label>
            </el-col>
            <el-col :span="7">
              <label>车牌号：</label>
              <label>{{this.dlrOutStoreDetail.carLicense}}</label>
            </el-col>
            <el-col :span="7">
              <label>出库时间：</label>
              <label>{{this.dlrOutStoreDetail.outStoreDate}}</label>
            </el-col>
          </el-row>
          <br />
          <el-row :gutter="24">
            <el-col :span="9">
              <label>客户名称:</label>
              <label>{{this.dlrOutStoreDetail.custName}}</label>
            </el-col>
            <el-col :span="7">
              <label>VIN：</label>
              <label>{{this.dlrOutStoreDetail.vin}}</label>
            </el-col>
            <el-col :span="7">
              <label>施工单号：</label>
              <label>{{this.dlrOutStoreDetail.relateOrderCode}}</label>
            </el-col>
          </el-row>
          <br />
          <el-row class="textCenter">
            <el-col :span="1" aglin="center" class="border1 height line-height">序号</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">备件编码</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">备件名称</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">数量</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">单位</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">单价</el-col>
            <!--<el-col :span="2" aglin="center" class="border1 height line-height">折扣率</el-col>-->
            <el-col :span="2" aglin="center" class="border1 height line-height">总价</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">维修类别</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">仓库名称</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">仓位编码</el-col>
          </el-row>
          <el-row class="textCenter" v-for="(item, index) in dlrOutStoreDetailList" :key="index">
            <el-col :span="1" aglin="center" class="border1 height line-height">{{index + 1}}</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height2">{{item.partNo}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.partName}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">{{item.outStoreQty}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">{{item.unit}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">{{item.salePrice}}</el-col>
            <!--折扣率不需要了-->
            <!--<el-col :span="2" aglin="center" class="border1 height line-height"></el-col>-->
            <el-col :span="2" aglin="center" class="border1 height line-height">{{item.saleAmount}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">{{item.repairTypeName}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.warehouseName}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">{{item.placeCode}}</el-col>
          </el-row>

          <br />
          <el-row :gutter="24">
            <el-col :span="12">
              <label>领料人：</label>
              <label>{{this.dlrOutStoreDetail.pickingPersonName}}</label>
            </el-col>
            <el-col :span="12">
              <label>估价合计：</label>
              <label>{{this.SALE_AMOUNT}}</label>
            </el-col>
          </el-row>
          <br />
          <el-row :gutter="26">
            <el-col :span="6">
              <label>领料人签字：</label>
            </el-col>
            <el-col :span="6">
              <label>仓库人员：</label>
              <label>{{this.userName}}</label>
            </el-col>
            <el-col :span="6">
              <label>制表人：</label>
              <label>{{this.userName}}</label>
            </el-col>
            <el-col :span="6">
              <label>制表时间：</label>
              <label>{{this.nowTime}}</label>
            </el-col>
          </el-row>
        </div>
      </div>
      <span slot="footer" class="dialog-footer" style="position">
        <el-button size="small" @click="printf2()">打印</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {
  RepaiOutService001,
  seBuRepairOrderQueryFindAll,
  seBuRepairOrderDQueryFindAll,
  paBuDlrOutStoreMutationSave,
  RepaiOutService005
} from "@/api/pa/outManage/RepairOutService";

import LookupValue from "@/components/org/LookupValue/index";
import dataPicker from "@/views/pa/outManage/paDataPicker";
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import { log } from "util";
import { parse } from "path";
import { the_Height } from "@/components/se/seMixins/makeHeight";
import { paBuDlrOutStoreQueryFindAll } from "@/api/pa/outManage/paBuDlrOutStore";
import { paBuDlrOutStoreDQueryFindAll } from "@/api/pa/outManage/paBuDlrOutStoreD";

export default {
  mixins: [the_Height],
  name: "menu0-1",
  components: {
    LookupValue,
    dataPicker
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      uploadHeaders: {
        Authorization: this.$store.getters.token
      },
      //出库开始日期
      outStoreDateBOptions: {
        disabledDate: time => {
           let endDateVal = this.outStoreCodeParam.outStoreDateE
           if (endDateVal) {
             return time.getTime() > new Date(endDateVal).getTime();
           }
         }
      },
      //出库结束日期
      outStoreDateEOptions: {
        disabledDate: time => {
          let beginDateVal = this.outStoreCodeParam.outStoreDateS
          if (beginDateVal) {
            return time.getTime() < new Date(beginDateVal).getTime();
          }
        }
      },
      //出库单号下拉框
      outStoreCodeOptions: [],
      isMul: false,
      isshow: true,
      code: "1",
      
      list: null,
      list1: null,
      list2: null,
      list3: {
        // OUT_STORE_CODE: "",
        // custName: "",
        // OUT_STORE_DATE: "",
        // vin: "",
        // carLicense: ""
      },
      row: null,
      multipleTable: [],
      lookupValuelable: "领料人",
      lookupValuelable1: "出库单号",
      lookuptype: "PA0022",
      listLoading: false,
      dialogVisible: false,
      printfDialogVisible: false,
      dataDisabled: true,
      billType: "",
      outStoreCode: "",
      pageSize: 10,
      pageIndex: 1,
      pageTotal: 0,
      toggleParam: false,
      isShowMoreBtn: true,
      moreBtnIcon: "",
      listQuery: {
        repairOrderCode: "",
        vin: "",
        custName: "",
        carLicense: "",
        saName: "",
        repairTimeBeg: "",
        repairTimeEnd: "",
        partNo: "",
        partName: "",
        dlrId: "202"//查询传202
      },
      //施工单明细查询条件
      listQuery1: {
        repairOrderId: "",
        dlrId: "202"
      },
      //保存参数
      listQuery2: {
        //主表中获取
        dataInfo1: {
          relateOrderId: '',//关联单ID
          pickingPersonId: '',
          pickingPersonName: '',
          billType: '1',//维修出库传1
          billBigType: '3'//维修出库传3
        },
        //明细表中获取
        dataInfo2: {
          linkDId: '',//关联单据明细ID
          partId: '',//备件ID
          partNo: '',
          unit: '',
          warehouseId: '',
          placeId: '',
          outStoreQty: 0,
          leastSaleQty: '',
          storeCostAmount: '',//不含税库存成本总价
          storePriceAmount: ''//含税库存成本总价
        }
      },
      //施工单明细保存参数2：将对象转成数组
      saveDataArray: [],
      //打印的查询条件
      listQuery3: {
        outStoreCode: "",
        dlrId: "202"
      },
      //出库单号查询条件
      outStoreCodeParam: {
        outStoreDateS: '',
        outStoreDateE: '',
        dlrId: '202'
      },
      //打印-返回的数组
      dlrOutStoreDetailList: [],
      //打印-返回的集合
      dlrOutStoreDetail: {
        outStoreCode: '',//出库单号
        carLicense: '',//车牌号
        outStoreDate: '',//出库时间
        custName: '',//客户姓名
        vin: '',//VIN
        relateOrderCode: '',//施工单号(关联单号)
        pickingPersonName: '',//领料人
      },
      PICKING_PERSON_NAME: "",//领料人
      SALE_AMOUNT: "", //估价合计
      nowTime: "",//制表时间
      //userName: this.$store.getters.userName,//登录用户
      userName: this.$store.getters.name,//登录用户

      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    console.log("this.$store.getters")
    console.log(this.$store.getters)
    console.log(this.userName);
  },
  computed: {},
  methods: {
    //出库开始日期
    changeOutStoreDateB(val) {
      this.outStoreCodeParam.outStoreDateS = val;
    },
    //出库结束日期
    changeOutStoreDateE(val) {
      this.outStoreCodeParam.outStoreDateE = val;
    },
    init() {
      RepaiOutService001(this.listQuery).then(response => {
        if (
          response.data[paApis.RepaiOutService001.ServiceCode].result === "1" &&
          response.data[paApis.RepaiOutService001.ServiceCode].rows != ""
        ) {
          this.listQuery.OEM_CODE =
            response.data[paApis.RepaiOutService001.ServiceCode].rows.OEM_CODE;
          this.listQuery.OEM_ID =
            response.data[paApis.RepaiOutService001.ServiceCode].rows.OEM_ID;
          this.listQuery.GROUP_CODE =
            response.data[
              paApis.RepaiOutService001.ServiceCode
            ].rows.GROUP_CODE;
          this.listQuery.GROUP_ID =
            response.data[paApis.RepaiOutService001.ServiceCode].rows.GROUP_ID;
        }
      });
    },

    resetTime() {
      let startTime = new Date();
      console.log(startTime.toLocaleString());
      return startTime.toLocaleString();
    },
    fetchData() {
      this.listLoading = true;
      seBuRepairOrderQueryFindAll(
        this.pageIndex,
        this.pageSize,
        this.listQuery
      ).then(response => {
        if (
          response.data[paApis.seBuRepairOrderQueryFindAll.ServiceCode]
            .result === "1"
        ) {
          this.list = response.data[paApis.seBuRepairOrderQueryFindAll.ServiceCode].rows;
          this.pageTotal = response.data[paApis.seBuRepairOrderQueryFindAll.ServiceCode].records;
          console.log("主表返回行");
          console.log(this.list);
          this.listLoading = false;
        }
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.fetchData();
    },
    reduction() {
      this.listQuery.carLicense = "";
      this.listQuery.saName = "";
      this.listQuery.repairTimeBeg = "";
      this.listQuery.repairTimeEnd = "";
      this.listQuery.custName = "";
      this.listQuery.partNo = "";
      this.listQuery.partName = "";
      this.listQuery.vin = "";
      this.listQuery.repairOrderCode = "";
    },
    getLookupValue(val, text) {
      this.listQuery2.dataInfo1.pickingPersonId = val;
      this.listQuery2.dataInfo1.pickingPersonName = text;
    },
    //查询出（退）库单号的 ，调用备件出库单查询(专营店备件出库查询)的API
    doQueryOutStoreCode() {
      if (this.outStoreCodeParam.outStoreDateS) {
        this.$message({
          type: "warning", 
          message: "请选择出库开始日期"
        });
        return;
      }
      if (this.outStoreCodeParam.outStoreDateE) {
        this.$message({
          type: "warning", 
          message: "请选择出库结束日期"
        });
        return;
      }
      var pageIndex = -1;
      var pageSize = -1;
      paBuDlrOutStoreQueryFindAll(pageIndex, pageSize, this.outStoreCodeParam).then(response => {
        if(response.data[paApis.paBuDlrOutStoreQueryFindAll.ServiceCode].result === "1") {
           let list = response.data[paApis.paBuDlrOutStoreQueryFindAll.ServiceCode].rows;
           var temp_array = [];
           list.forEach(row => {
             temp_array.push({
               value: row.outStoreCode,
               label: row.outStoreCode
             });
           });
           this.outStoreCodeOptions = temp_array;
        }
      });
    },
    
    getOutStoreCode(val) {
      var saleAmount = "0";
      this.listQuery3.outStoreCode = val;
      var pageIndex = -1;
      var pageSize = -1;
      paBuDlrOutStoreDQueryFindAll(pageSize, pageIndex, this.listQuery3).then(response => {
        if (
          response.data[paApis.paBuDlrOutStoreDQueryFindAll.ServiceCode].result === "1"
        ) {
          this.dlrOutStoreDetailList = response.data[paApis.paBuDlrOutStoreDQueryFindAll.ServiceCode].rows;
          console.log("this.dlrOutStoreDetailList");
          console.log(this.dlrOutStoreDetailList);
          
          this.dlrOutStoreDetail.outStoreCode = this.dlrOutStoreDetailList[0].outStoreCode;
          this.dlrOutStoreDetail.carLicense = this.dlrOutStoreDetailList[0].carLicense;
          this.dlrOutStoreDetail.outStoreDate = this.dlrOutStoreDetailList[0].outStoreDate;
          this.dlrOutStoreDetail.custName = this.dlrOutStoreDetailList[0].custName;
          this.dlrOutStoreDetail.vin = this.dlrOutStoreDetailList[0].vin;
          this.dlrOutStoreDetail.relateOrderCode = this.dlrOutStoreDetailList[0].relateOrderCode;
          this.dlrOutStoreDetail.pickingPersonName = this.dlrOutStoreDetailList[0].pickingPersonName;

          for (var i = 0; i < this.dlrOutStoreDetailList.length; i++) {
            saleAmount = parseFloat(saleAmount) + parseFloat(this.dlrOutStoreDetailList[i].saleAmount);
          }
          this.SALE_AMOUNT = saleAmount;
        }
      });
    },
    detailsQuery(row) {
      this.billType = row.billType;
      this.outStoreCode = row.outStoreCode;
    },
    dataDialogVisible(repairOrderId, relateOrderId) {
      // this.listQuery1.outStoreCode = this.listQuery.outStoreCode;
      this.listQuery1.repairOrderId = repairOrderId;
      this.listQuery2.dataInfo1.relateOrderId = relateOrderId;
      //this.listQuery1.billType = billType
      this.dialogVisible = true;
      seBuRepairOrderDQueryFindAll(this.listQuery1).then(response => {
        if (
          response.data[paApis.seBuRepairOrderDQueryFindAll.ServiceCode]
            .result === "1"
        ) {
          this.list1 = response.data[paApis.seBuRepairOrderDQueryFindAll.ServiceCode].rows;
          console.log("明细表数据行");
          console.log(this.list1);
        }
      });
    },
    printf() {
      this.printfDialogVisible = true;
      this.nowTime = this.resetTime();
      this.doQueryOutStoreCode();
    },
    printf2() {
      this.$print(this.$refs.print);
    },
    checkDateB() {
      if (
        this.listQuery.repairTimeBeg > this.listQuery.repairTimeEnd &&
        this.listQuery.repairTimeEnd != ""
      ) {
        alert("错误");
        this.listQuery.repairTimeBeg = "";
      }
    },
    checkDateE() {
      if (
        this.listQuery.repairTimeEnd < this.listQuery.repairTimeBeg &&
        this.listQuery.repairTimeBeg != ""
      ) {
        alert("错误");
        this.listQuery.repairTimeEnd = "";
      }
    },
    checkDateB1() {
      if (
        this.outStoreCodeParam.outStoreDateS > this.outStoreCodeParam.outStoreDateE &&
        this.outStoreCodeParam.outStoreDateE != ""
      ) {
        alert("错误");
        this.outStoreCodeParam.outStoreDateS = "";
      }
    },
    checkDateE1() {
      if (
        this.outStoreCodeParam.outStoreDateE < this.outStoreCodeParam.outStoreDateS &&
        this.outStoreCodeParam.outStoreDateS != ""
      ) {
        alert("错误");
        this.outStoreCodeParam.outStoreDateE = "";
      }
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
      if (this.toggleParam) {
        this.moreBtnIcon = "el-icon-minus";
      } else {
        this.moreBtnIcon = "el-icon-plus";
      }
    },
    number(e) {
      var count = e.target.value;
      let boolean = new RegExp("^[1-9][0-9]*$").test(e.target.value);
      if (!boolean) {
        this.$message.warning("请输入数字");
      }
      this.list1[this.row.index].SALE_AMOUNT = (
        parseFloat(e.target.value) *
        parseFloat(this.list1[this.row.index].SALE_PRICE)
      ).toFixed(2);
      console, log(this.list1[this.row.index].SALE_AMOUNT);
    },
    getRow(val) {
      (this.row = val), console.log(this.row);
    },
    tableRowClassName({ row, rowIndex }) {
      //把每一行的索引放进row
      row.index = rowIndex;
    },
    saveData() {
      var arr = this.$refs.multipleTable.selection;
      if (arr.length == "0") {
        this.$message.warning("请至少选中一行");
        return false;
      }
      if (this.listQuery2.dataInfo1.pickingPersonId == "") {
        this.$message.warning("领料人不能为空");
        return false;
      }

      for (var i = 0; i < arr.length; i++) {
        //outStoreQty:本次出库数量 canUseQtyReal:可用库存数
        if (
          parseInt(arr[i].outStoreQty) > parseInt(arr[i].canUseQtyReal)
        ) {
          var msg =
            "备件号" +
            arr[i].partNo +
            "，本次出库数量 > 实际可用库存，不允许保存";
          this.$message.warning(msg);
          return false;
        }
        //outStoreQty:本次出库数量 haveOutStoreQty:已出库数 partQty:领料数
        if (
          parseInt(arr[i].outStoreQty) + parseInt(arr[i].haveOutStoreQty) > parseInt(arr[i].partQty)
        ) {
          var msg =
            "备件号" +
            arr[i].partNo +
            "，本次出库数量 > 领料数量-已出库数量，不允许保存";
          this.$message.warning(msg);
          return false;
        }
        //debugger
        this.listQuery2.dataInfo2.linkDId = arr[i].linkDId;
        this.listQuery2.dataInfo2.partId = arr[i].partId1;
        this.listQuery2.dataInfo2.partNo = arr[i].partNo;
        this.listQuery2.dataInfo2.unit = arr[i].unit1;
        this.listQuery2.dataInfo2.warehouseId = arr[i].warehouseId;
        this.listQuery2.dataInfo2.placeId = arr[i].placeId;
        this.listQuery2.dataInfo2.outStoreQty = parseInt(arr[i].outStoreQty1);
        this.listQuery2.dataInfo2.leastSaleQty = arr[i].dlrLeastSaleQty1;
        this.listQuery2.dataInfo2.storeCostAmount = arr[i].storeCostAmount;
        this.listQuery2.dataInfo2.storePriceAmount = arr[i].storePriceAmount;
        this.saveDataArray.push(JSON.parse(JSON.stringify(this.listQuery2.dataInfo2)))
      }
      console.log("this.saveDataArray");
      console.log(this.saveDataArray);
      //debugger
      paBuDlrOutStoreMutationSave(this.listQuery2.dataInfo1, this.saveDataArray).then(response => {
        if (
          response.data[paApis.paBuDlrOutStoreMutationSave.ServiceCode].result === "1") {
            this.$message.success("保存成功！");
        } else {
          this.$message.warning(response.data[paApis.paBuDlrOutStoreMutationSave.ServiceCode].msg);
        }
        this.$refs.multipleTable.clearSelection();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.textCenter {
  text-align: center;
}
.paddingB10 {
  padding-bottom: 10px;
}
.height {
  height: 50px;
}
.line-height {
  line-height: 50px;
}
.line-height2 {
  line-height: 25px;
}
.paddingB5 {
  padding-bottom: 5px;
}
/deep/ .border1 {
  border: 1px solid #797979 !important;
}
.lineHeight32.el-row {
  line-height: 24px;
}
/deep/ .repairOrderCode {
  color: blue;
  cursor: pointer;
}
</style>
