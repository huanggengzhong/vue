<template>
  <div class="app-container app-container-table" style="height:800px">
    <el-tabs v-model="activeName" style="margin-top: 15px;">
      <el-tab-pane label="预约看板" name="first">
        <!-- <div class="filter-container filter-button">
          <template>
            <el-button type="primary" size="small" @click="eduitData()">修改</el-button>
          </template>
          <template>
            <el-button type="primary" size="small" @click="exitData()">作废</el-button>
          </template>
        </div>

        -->

        <div class="filter-container filter-title">查询区</div>
        <div class="filter-container filter-params">
          <el-row :gutter="26">
            <section>
              <el-col :span="6">
                <lableName curLabelName="预约到店日期" :isShowLabel="true" :isRequire="false"></lableName>
                <el-date-picker
                  v-model="date1"
                  type="date"
                  :picker-options="pickerOptions"
                  placeholder="选择日期"
                  @change="findAll"
                  value-format="yyyy-MM-dd HH:mm:ss"
                ></el-date-picker>
              </el-col>
            </section>
            <el-col :span="2">
              <el-button type="primary" size="small" @click="findAll()">刷新</el-button>
            </el-col>

            <el-col :span="0.5">
              <div style="background-color:buttonface;height:20px;width:25px;float:center"></div>
            </el-col>
            <el-col :span="1.5">
              <span class="demonstration">已到店</span>
            </el-col>

            <el-col :span="0.5">
              <div style="background-color:green;height:20px;width:25px;float:center"></div>
            </el-col>
            <el-col :span="1.5">
              <span class="demonstration">未到店</span>
            </el-col>

            <el-col :span="0.5">
              <div style="background-color:red;height:20px;width:25px;float:center"></div>
            </el-col>
            <el-col :span="1.5">
              <span class="demonstration">超时未到店</span>
            </el-col>

            <el-col :span="0.5">
              <div style="background-color:yellow;height:20px;width:25px;float:center"></div>
            </el-col>
            <el-col :span="1.5">
              <span class="demonstration">超出预约容量</span>
            </el-col>

            <el-col :span="0.5">
              <div style="background-color:blue;height:20px;width:25px;float:center"></div>
            </el-col>
            <el-col :span="1.5">
              <span class="demonstration">不可预约</span>
            </el-col>
          </el-row>
        </div>
        <div class="filter-container filter-title">设置区</div>
        <div style="height:300px;overflow:auto">
          <div class="filter-container filter-button">
            <el-table
              v-loading="listLoading"
              :data="kanban1"
              element-loading-text="Loading"
              border
              fit
              stripe
              :header-cell-style="tableHeaderRowClassName"
              highlight-current-row
              :cell-style="finalCellStyle"
              :span-method="objectSpanMethod"
              @cell-click="getClick"
            >
              <template v-for="(col,index) in cols">
                <el-table-column
                  v-if="col.type==='0'"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  align="center"
                  width="180px"
                >
                  <template slot-scope="scope">{{ scope.row.dates }}</template>
                </el-table-column>

                <el-table-column
                  v-if="col.type==='-1'"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  width="80px"
                  align="center"
                >
                  <template slot-scope="scope">{{ scope.row.timess }}</template>
                </el-table-column>

                <el-table-column
                  v-if="col.type===1"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  align="center"
                >
                  <template
                    slot-scope="scope"
                  >{{ scope.row.rongliang1.carLicense }}&nbsp&nbsp{{ scope.row.rongliang1.preComeDate }}&nbsp&nbsp{{ scope.row.rongliang1.saName }}</template>
                </el-table-column>

                <el-table-column
                  v-if="col.type===2"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  align="center"
                >
                  <template
                    slot-scope="scope"
                  >{{ scope.row.rongliang2.carLicense }}&nbsp&nbsp{{ scope.row.rongliang2.preComeDate }}&nbsp&nbsp{{ scope.row.rongliang2.saName }}</template>
                </el-table-column>
                <el-table-column
                  v-if="col.type===3"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  align="center"
                >
                  <template
                    slot-scope="scope"
                  >{{ scope.row.rongliang3.carLicense }}&nbsp&nbsp{{ scope.row.rongliang3.preComeDate }}&nbsp&nbsp{{ scope.row.rongliang3.saName }}</template>
                </el-table-column>

                <el-table-column
                  v-if="col.type===4"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  align="center"
                >
                  <template
                    slot-scope="scope"
                  >{{ scope.row.rongliang4.carLicense }}&nbsp&nbsp{{ scope.row.rongliang4.preComeDate }}&nbsp&nbsp{{ scope.row.rongliang4.saName }}</template>
                </el-table-column>
                <el-table-column
                  v-if="col.type===5"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  align="center"
                >
                  <template
                    slot-scope="scope"
                  >{{ scope.row.rongliang5.carLicense }}&nbsp&nbsp{{ scope.row.rongliang5.preComeDate }}&nbsp&nbsp{{ scope.row.rongliang5.saName }}</template>
                </el-table-column>
                <el-table-column
                  v-if="col.type===6"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  align="center"
                >
                  <template
                    slot-scope="scope"
                  >{{ scope.row.rongliang6.carLicense }}&nbsp&nbsp{{ scope.row.rongliang6.preComeDate }}&nbsp&nbsp{{ scope.row.rongliang6.saName }}</template>
                </el-table-column>
              </template>
            </el-table>

            <el-table
              v-loading="listLoading"
              :data="kanban2"
              element-loading-text="Loading"
              border
              fit
              stripe
              :header-cell-style="tableHeaderRowClassName"
              highlight-current-row
              :cell-style="finalCellStyle"
              :span-method="objectSpanMethod"
              @cell-click="getClick"
            >
              <template v-for="(col,index) in cols2">
                <el-table-column
                  v-if="col.type==='0'"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  width="180px"
                  align="center"
                >
                  <template slot-scope="scope">{{ scope.row.dates }}</template>
                </el-table-column>

                <el-table-column
                  v-if="col.type==='-1'"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  width="80px"
                  align="center"
                >
                  <template slot-scope="scope">{{ scope.row.timess }}</template>
                </el-table-column>

                <el-table-column
                  v-if="col.type===1"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  align="center"
                >
                  <template
                    slot-scope="scope"
                  >{{ scope.row.rongliang1.carLicense }}&nbsp&nbsp{{ scope.row.rongliang1.preComeDate }}&nbsp&nbsp{{ scope.row.rongliang1.saName }}</template>
                </el-table-column>

                <el-table-column
                  v-if="col.type===2"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  align="center"
                >
                  <template
                    slot-scope="scope"
                  >{{ scope.row.rongliang2.carLicense }}&nbsp&nbsp{{ scope.row.rongliang2.preComeDate }}&nbsp&nbsp{{ scope.row.rongliang2.saName }}</template>
                </el-table-column>
                <el-table-column
                  v-if="col.type===3"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  align="center"
                >
                  <template
                    slot-scope="scope"
                  >{{ scope.row.rongliang3.carLicense }}&nbsp&nbsp{{ scope.row.rongliang3.preComeDate }}&nbsp&nbsp{{ scope.row.rongliang3.saName }}</template>
                </el-table-column>

                <el-table-column
                  v-if="col.type===4"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  align="center"
                >
                  <template
                    slot-scope="scope"
                  >{{ scope.row.rongliang4.carLicense }}&nbsp&nbsp{{ scope.row.rongliang4.preComeDate }}&nbsp&nbsp{{ scope.row.rongliang4.saName }}</template>
                </el-table-column>
                <el-table-column
                  v-if="col.type===5"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  align="center"
                >
                  <template
                    slot-scope="scope"
                  >{{ scope.row.rongliang5.carLicense }}&nbsp&nbsp{{ scope.row.rongliang5.preComeDate }}&nbsp&nbsp{{ scope.row.rongliang5.saName }}</template>
                </el-table-column>
                <el-table-column
                  v-if="col.type===6"
                  :prop="col.prop"
                  :label="col.label"
                  :key="index"
                  align="center"
                >
                  <template
                    slot-scope="scope"
                  >{{ scope.row.rongliang6.carLicense }}&nbsp&nbsp{{ scope.row.rongliang6.preComeDate }}&nbsp&nbsp{{ scope.row.rongliang6.saName }}</template>
                </el-table-column>
              </template>
            </el-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="预约查询" name="second">
        <div class="filter-container filter-button">
          <!-- <div class="filter-container filter-title" ></div>
          <div class="filter-container filter-title" ></div>-->
          <el-button type="primary" size="small" @click="findAll2('listQuery')">查询</el-button>

          <el-button size="small" @click="eduitData()">修改</el-button>

          <el-button size="small" @click="cancelData()">作废</el-button>
          <el-button size="small" @click="checkData()">查看</el-button>
          <el-button size="small" @click="insertData()">新增</el-button>
          <el-button size="small" @click="resettingData()">重置</el-button>
        </div>
        <div class="filter-container filter-title">查询区</div>
        <div class="filter-container filter-params">
          <el-form
            :model="dataInfo"
            :rules="rules"
            ref="listQuery"
            inline-message="true"
            class="demo-ruleForm"
          >
            <el-row :gutter="26">
              <!-- <el-col :span="6">
              <lableName curLabelName="预约进店日期" :isShowLabel="true" :isRequire="false"></lableName>
              <el-date-picker
                v-model="dataInfo.preComeDate"
                type="date"
                :picker-options="pickerOptions"
                placeholder="选择日期"
                value-format="yyyy-MM-dd HH:mm:ss"
                @change="getriqi"
              ></el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>至</label>
              <el-date-picker
                v-model="dataInfo.endDate"
                type="date"
                :picker-options="pickerOptions1"
                placeholder="选择日期"
                @change="getriqi1"
                value-format="yyyy-MM-dd HH:mm:ss"
              ></el-date-picker>
              </el-col>-->
              <el-col :span="22">
                <el-col :span="6">
                  <el-form-item prop="appointEnterDate">
                    <lableName curLabelName="预约进店日期" :isShowLabel="true" :isRequire="false"></lableName>
                    <el-date-picker
                      v-model="dataInfo.appointEnterDate"
                      type="daterange"
                      range-separator="-"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      size="small"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <label>预约单号:</label>
                  <el-input v-model="dataInfo.reserveOrderCode" placeholder size="small" />
                </el-col>
                <brand
                  :span="6"
                  :isMul="false"
                  :key="brandKey"
                  :code="dataInfo.carBrandCode"
                  :labelName="cheliangpinpai"
                  @changeCode="getcheliangpinpai"
                ></brand>
                <el-col :span="6">
                  <label class="demonstration">车牌号:</label>
                  <el-input v-model="dataInfo.carLicense" placeholder size="small" />
                </el-col>
              </el-col>
              <el-col :span="2">
                <el-button icon="el-icon-plus" @click="loadmore" class="moreParam">更多</el-button>
              </el-col>
              <el-col :span="22" v-show="!pic">
                <!-- <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isshow"
              :code="dataInfo.carBrandCode"
              :lookuptype="cheliangpinpai1"
              :labelName="cheliangpinpai"
              @changeCode="getcheliangpinpai"
                />-->

                <!-- <seCommonQueryServiceSaDDL
                  :span="6"
                  :labelName="labelName"
                  @changeCode="getCommonQueryServiceSa"
                  :code="dataInfo.saName"
                />-->

                <LookupValue
                  :span="6"
                  :isMul="isMul"
                  :isShowLabel="isshow"
                  :code="dataInfo.reserveSource"
                  :lookuptype="yuyuelaiyuan1"
                  :labelName="yuyuelaiyuan"
                  @changeCode="getyuyuelaiyuan"
                />
                <el-col :span="6">
                  <label class="demonstration">客户姓名:</label>
                  <el-input v-model="dataInfo.custName" placeholder size="small" />
                </el-col>
                <el-col :span="6">
                  <label class="demonstration">VIN码:</label>
                  <el-input v-model="dataInfo.vin" placeholder size="small" />
                </el-col>
              </el-col>

              <el-col :span="22" v-show="!pic">
                <!-- <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isshow"
              :code="dataInfo.reserveType"
              :lookuptype="yuyueleixing1"
              :labelName="yuyueleixing"
              @changeCode="getyuyueleixing"
                />-->
                <LookupValue
                  :span="6"
                  :isMul="isMul"
                  :isShowLabel="isshow"
                  :code="dataInfo.dateType"
                  :lookuptype="dateTypeLookUpType"
                  :labelName="dateTypeLabelName"
                  @changeCode="getDateType"
                />
              </el-col>
            </el-row>
          </el-form>
          <div class="filter-container filter-title">设置区</div>
          <div style="height:230px;overflow:auto">
            <el-table
              v-loading="listLoading1"
              :data="kanban"
              element-loading-text="Loading"
              border
              fit
              stripe
              :header-cell-style="tableHeaderRowClassName"
              highlight-current-row
              @row-click="getRowDate"
            >
              <el-table-column align="center" label="序号" width="60">
                <template slot-scope="scope">{{ scope.$index + 1 }}</template>
              </el-table-column>
              <el-table-column label="预约单号">
                <template slot-scope="scope">{{ scope.row.reserveOrderCode }}</template>
              </el-table-column>
              <el-table-column label="车辆品牌">
                <template slot-scope="scope">{{ scope.row.carBrandCn }}</template>
              </el-table-column>
              <el-table-column label="车牌号">
                <template slot-scope="scope">{{ scope.row.carLicense }}</template>
              </el-table-column>
              <el-table-column label="预约人">
                <template slot-scope="scope">{{ scope.row.custName }}</template>
              </el-table-column>
              <el-table-column label="联系电话">
                <template slot-scope="scope">{{ scope.row.reserveTel }}</template>
              </el-table-column>
              <el-table-column label="预约进店时间">
                <template slot-scope="scope">{{ scope.row.preComeDate }}</template>
              </el-table-column>
              <el-table-column label="预约类型">
                <template slot-scope="scope">{{ scope.row.reserveType }}</template>
              </el-table-column>
              <el-table-column label="预约状态">
                <template slot-scope="scope">{{ scope.row.reserveState }}</template>
              </el-table-column>
              <el-table-column label="服务代表">
                <template slot-scope="scope">{{ scope.row.saName }}</template>
              </el-table-column>
              <el-table-column label="创建预约时间">
                <template slot-scope="scope">{{ scope.row.createdDate }}</template>
              </el-table-column>
              <el-table-column label="预约来源">
                <template slot-scope="scope">{{ scope.row.reserveSourceName }}</template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <el-container>
          <el-main>
            <el-pagination
              background
              layout="prev, pager, next, sizes, ->, total"
              prev-text="上一页"
              next-text="下一页"
              :page-sizes="[10, 20, 30]"
              :page-size="10"
              :total="kanban?seBuReserveOrderQueryRecords:0"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </el-main>
        </el-container>

        <el-dialog
          :visible.sync="zuofeiyuanyin"
          width="30%"
          center
          :close-on-click-modal="false"
          :append-to-body="true"
          @close="closezuofei"
        >
          <div style="height:120px">
            <div class="filter-container filter-params">
              <el-row :gutter="26">
                <LookupValue
                  :span="24"
                  :isMul="isMul"
                  :isShowLabel="isshow"
                  :code="dacancelInfo.cancelType"
                  :lookuptype="cancelTypeLookuptype"
                  :labelName="cancelTypeLabelName"
                  @changeCode="getCancelType"
                />
                <el-col :span="24">
                  <label>作废原因</label>
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入作废原因"
                    v-model="dacancelInfo.cancelReason"
                  ></el-input>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="filter-container filter-button">
            <el-button type="primary" size="small" @click="deletReason()" style="float:left">作废</el-button>
            <el-button type="primary" size="small" @click="resetReason()" style="float:center">重置</el-button>
          </div>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import seCommonQueryServiceSaDDL from "@/components/se/seCommonQueryServiceSaDDL";
import lableName from "@/components/lableName";
import LookupValue from "@/components/org/LookupValue/index";
import { seApis } from "@/api/graphQLApiList/se";
import { requestGraphQL } from "@/api/commonRequest";
import brand from "@/components/org/carBrand/carBrand";
import {
  seBuReserveOrderQueryViewBoard,
  seBuReserveOrderMutationCancel,
  seBuReserveCanQueryFactQty,
  seBuReserveOrderQueryList
} from "@/api/se/repair/appointment/seReserveOrderQueryTrack";

export default {
  components: {
    LookupValue,
    lableName,
    seCommonQueryServiceSaDDL,
    brand
  },
  props: {
    span: {
      type: Number,
      default: function() {
        return 6;
      }
    }
  },
  name: "seReserveOrderQueryTrack",
  data() {
    return {
      cancelTypeLabelName: "作废类型",
      cancelTypeLookuptype: "SE0119",
      the_data: "",
      listLoading1: false,
      activeName: "first",
      pic: true,
      isMul: false,
      isshow: true,
      code: "1",
      labelName: "服务代表",
      yuyuelaiyuan: "预约来源",
      yuyuelaiyuan1: "SE0171",
      yuyueleixing: "预约类型",
      yuyueleixing1: "SE0046",
      dateTypeLabelName: "日期类型",
      dateTypeLookUpType: "SE0173",
      cheliangpinpai: "车辆品牌",
      cheliangpinpai1: "se0001",
      pickerOptions1: "",
      brandKey: "",
      listLoading: false,
      pickerOptions: {
        disabledDate: time => {
          let endDateVal = this.dataInfo.begDate;
          if (endDateVal) {
            return time.getTime() > new Date(endDateVal).getTime();
          }
        }
      },
      rules: {
        appointEnterDate: [
          { required: true, message: "请输入预约进店日期", trigger: "change" }
        ]
      },

      //合并单元格
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          //用于设置要合并的列
          if (rowIndex % 11 === 0) {
            //用于设置合并开始的行号
            return {
              rowspan: 11, //合并的行数
              colspan: 1 //合并的列数，设为０则直接不显示
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
      //进店日期
      jdrq1: "",
      jdrq2: "",
      //传输的数据
      celldates: {
        dlrId: this.$store.getters.orgInfo.DLR_ID,
        reserveOrderId: "",
        cellrow: "",
        vin: ""
      },

      //动态弹窗-预约容量
      rows: "",
      //记录容量超出表一
      record1: 0,
      //记录容量超出表二
      record2: 0,
      //真实的日期1
      realday1: "",
      //真实的日期2
      realday2: "",
      //真实容量1
      realrongliang: 0,
      //真实容量2
      realrongliang1: 0,
      //作废弹窗
      dialogVisible: false,
      //故障原因
      gzyy: "",
      //动态表头1
      cols: "",
      //动态表头2
      cols2: "",
      //预约看板1
      kanban1: [
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        }
      ],
      //预约看板2
      kanban2: [
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        },
        {
          dates: "",
          timess: "",
          rongliang1: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang2: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang3: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang4: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang5: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          },
          rongliang6: {
            carLicense: "",
            preComeDate: "",
            saName: "",
            reserveState: ""
          }
        }
      ],
      //日期
      days: "",
      //预约数据
      kanban: "",
      //预约来店日期
      date1: "",
      //作废原因弹窗
      zuofeiyuanyin: false,
      seBuReserveOrderQueryRecords: null,
      // 预约追踪_查询预约单_右页签
      dataInfo: {
        appointEnterDate: [],
        // cancelReason: "",
        // cancelType: "",
        // cancelReason: "",
        // reserveType: "",
        // reserveSourceName: "",
        // updateControlId: "",
        // reserveSourceId: "",
        // reserveOrderId: "",
        begDate: "", //预约进店开始日期
        // endDate: "", //预约进店结束日期
        // dlrId: this.$store.getters.orgInfo.DLR_ID, //门店ID
        // dlrId: "202", //门店ID
        reserveOrderCode: "", //预约单号
        carBrandCode: "", //车辆品牌
        carLicense: "", //车牌号
        saName: "", //服务代表
        reserveSource: "", //预约来源
        custName: "", //客户姓名
        vin: "", //vin码
        dateType: "3" //日期类型
      },
      //容量查询参数
      rongliangDataInfo: {
        dlrId: "202",
        beginDate: "2019-10-21 00:00:00"
      },
      dacancelInfo: {
        reserveOrderId: "",
        dlrId: "",
        updateControlId: "",
        cancelType: "",
        cancelReason: "",
        reserveSourceId: ""
        // reserveType: "",
        // reserveSourceName: ""
      },
      listQuery: {
        dataInfo: {
          dlrId: "202",
          preComeDate: "2019-10-21 00:00:00"
          // endDate: ""
        },
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
        oemcode: "",
        groupcode: "",
        operatePartId: "",
        operatePartCode: "",
        wiSmallKindId: "",
        repairSmallKindCode: "",
        isSystem: "",
        flag: 0,
        pageTotal: 0,
        isEnable: ""
      },

      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    // this.findAll();
    // this.timeInitialization();
    // this.findAll2();
    this.findrongliang(this.listQuery.dataInfo.preComeDate);
  },
  methods: {
    //赋初值
    /* timeInitialization() {
      var now = new Date();
      var year = now.getFullYear(); //得到年份
      var month = now.getMonth(); //得到月份
      var date = now.getDate(); //得到日期
      month = month + 1;
      if (month < 10) month = "0" + month;
      if (date < 10) date = "0" + date;
      var d = year + "-" + month + "-" + date;
      var k = new Date(d);
      k.setDate(k.getDate() + 1);
      this.dataInfo.preComeDate = d;
      this.date1 = d;
      this.dataInfo.endDate =
        k.getFullYear() + "-" + (k.getMonth() + 1) + "-" + k.getDate();
    }, */
    getriqi() {
      var riqi = new Date(this.dataInfo.begDate);
      this.pickerOptions1 = {
        disabledDate(time) {
          return time.getTime() <= riqi;
        }
      };
    },
    getriqi1() {
      var riqi = new Date(this.dataInfo.endDate);
      this.pickerOptions = {
        disabledDate(time) {
          return time.getTime() >= riqi;
        }
      };
    },
    // pickerOptions1() {
    //       disabledDate(time) {
    //         return time.getTime() >=this.dataInfo.preComeDate;
    //       }
    //     },
    //获取表格的数据
    getRowDate(rows) {
      this.celldates.cellrow = rows;
      // this.celldates.vin = this.dataInfo.vin;
      this.celldates.dlrId = this.$store.getters.orgInfo.DLR_ID;
      // this.celldates.reserveOrderId = this.dataInfo.reserveOrderCode;
    },
    //新增预约单
    insertData() {
      this.celldates = "";
      this.$router.push({
        name: "seBuReserveOrderMutationSave",
        // path :"/semodule/seModu-repairProcess/yuyue-guanli/yuyue-dengji",
        params: {
          the_data: this.celldates
        }
      });
    },
    //作废页面
    cancelData() {
      if (this.celldates.cellrow.reserveState == "作废") {
        this.$alert("该预约单已作废，只能查看！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      }
      if (this.celldates.cellrow == "") {
        this.$alert("您未选中数据！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      }
      if (this.celldates.cellrow.reserveState == "已到店") {
        this.$alert("该车辆已到店，只能查看", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      }
      if (
        this.celldates.cellrow.reserveState != "作废" &&
        this.celldates.cellrow.reserveState != "已到店" &&
        this.celldates.cellrow != ""
      ) {
        this.zuofeiyuanyin = true;
      }
    },
    //重置作废原因
    resetReason() {
      this.dacancelInfo.cancelReason = "";
    },
    //作废预约单
    deletReason() {
      this.dacancelInfo.reserveSourceId = this.celldates.cellrow.reserveSourceId;
      this.dacancelInfo.dlrId = this.celldates.dlrId;
      this.dacancelInfo.updateControlId = this.celldates.cellrow.updateControlId;
      // this.dacancelInfo.cancelType = this.celldates.cellrow.cancelType;
      this.dacancelInfo.reserveOrderId = this.celldates.cellrow.reserveOrderId;
      // dacancelInfo.cancelReason从编辑框获取

      if (
        this.dacancelInfo.cancelReason != "" &&
        this.dacancelInfo.cancelReason != undefined &&
        this.dacancelInfo.cancelReason != null
      ) {
        seBuReserveOrderMutationCancel(this.dacancelInfo).then(response => {
          if (response.data.result === "1") {
            this.$message({
              message: "该预约单已作废！",
              type: "success",
              duration: 2000
            });
            this.resetReason();
            this.findAll2("listQuery");
          }
          this.zuofeiyuanyin = false;
        });
        this.celldates.cellrow = "";
      } else {
        this.$alert("作废原因不能为空！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      }
    },
    //修改页面
    eduitData() {
      if (this.celldates.cellrow.reserveState == "作废") {
        this.$alert("该预约单已作废，只能查看！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      }
      if (this.celldates.cellrow == "") {
        this.$alert("您未选中数据！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      }
      if (this.celldates.cellrow.reserveState == "已到店") {
        this.$alert("该车辆已到店，只能查看", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      }

      if (
        this.celldates.cellrow != "" &&
        this.celldates.cellrow.reserveState != "已到店" &&
        this.celldates.cellrow.reserveState != "作废"
      ) {
        this.$router.push({
          name: "seBuReserveOrderMutationSave",
          // path :"/semodule/seModu-repairProcess/yuyue-guanli/yuyue-dengji",
          params: {
            the_data: this.celldates
          }
        });
      }
    },
    //查看页面
    checkData() {
      if (this.celldates.cellrow == "") {
        this.$alert("您未选中数据！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        });
      } else {
        this.$router.push({
          name: "seBuReserveOrderMutationSave",
          // path :"/semodule/seModu-repairProcess/yuyue-guanli/yuyue-dengji",
          params: {
            the_data: this.celldates
          }
        });
      }
    },
    //作废按钮
    // exitData(){

    // },
    //获取某个单元格的数据
    getClick(row, column) {
      //点击某个单元格，带数据跳转
      if (column.label == "容量一") {
        if (row.rongliang1.reserveState == 1) {
          row.rongliang1.reserveState = "";
          row.rongliang1.saName = "";
          row.rongliang1.carLicense = "";
          row.rongliang1.preComeDate = "";
        }
      }
      if (column.label == "容量二") {
        if (row.rongliang2.reserveState == 1) {
          row.rongliang2.reserveState = "";
          row.rongliang2.saName = "";
          row.rongliang2.carLicense = "";
          row.rongliang2.preComeDate = "";
        }
      }
      if (column.label == "容量三") {
        if (row.rongliang3.reserveState == 1) {
          row.rongliang3.reserveState = "";
          row.rongliang3.saName = "";
          row.rongliang3.carLicense = "";
          row.rongliang3.preComeDate = "";
        }
      }
      if (column.label == "容量四") {
        if (row.rongliang4.reserveState == 1) {
          row.rongliang4.reserveState = "";
          row.rongliang4.saName = "";
          row.rongliang4.carLicense = "";
          row.rongliang4.preComeDate = "";
        }
      }
      if (column.label == "容量五") {
        if (row.rongliang5.reserveState == 1) {
          row.rongliang5.reserveState = "";
          row.rongliang5.saName = "";
          row.rongliang5.carLicense = "";
          row.rongliang5.preComeDate = "";
        }
      }
      if (column.label == "容量六") {
        if (row.rongliang6.reserveState == 1) {
          row.rongliang6.reserveState = "";
          row.rongliang6.saName = "";
          row.rongliang6.carLicense = "";
          row.rongliang6.preComeDate = "";
        }
      }
    },
    //表格颜色
    finalCellStyle({ row, column, rowIndex, columnIndex }) {
      if (row.rongliang1.reserveState === "已到店" && columnIndex === 2) {
        return {
          background: "buttonface"
        };
      }
      if (row.rongliang1.reserveState === "未到店" && columnIndex === 2) {
        return {
          background: "green"
        };
      }
      if (row.rongliang1.reserveState === "超时未到店" && columnIndex === 2) {
        return {
          background: "red"
        };
      }
      if (row.rongliang1.reserveState === "超出预约容量" && columnIndex === 2) {
        return {
          background: "yellow"
        };
      }
      if (row.rongliang1.reserveState === "不可预约" && columnIndex === 2) {
        return {
          background: ""
        };
      }

      if (row.rongliang2.reserveState === "已到店" && columnIndex === 3) {
        return {
          background: "buttonface"
        };
      }
      if (row.rongliang2.reserveState === "未到店" && columnIndex === 3) {
        return {
          background: "green"
        };
      }
      if (row.rongliang2.reserveState === "超时未到店" && columnIndex === 3) {
        return {
          background: "red"
        };
      }
      if (row.rongliang2.reserveState === "超出预约容量" && columnIndex === 3) {
        return {
          background: "yellow"
        };
      }
      if (row.rongliang2.reserveState === "不可预约" && columnIndex === 3) {
        return {
          background: ""
        };
      }

      if (row.rongliang3.reserveState === "已到店" && columnIndex === 4) {
        return {
          background: "buttonface"
        };
      }
      if (row.rongliang3.reserveState === "未到店" && columnIndex === 4) {
        return {
          background: "green"
        };
      }
      if (row.rongliang3.reserveState === "超时未到店" && columnIndex === 4) {
        return {
          background: "red"
        };
      }
      if (row.rongliang3.reserveState === "超出预约容量" && columnIndex === 4) {
        return {
          background: "yellow"
        };
      }
      if (row.rongliang3.reserveState === "不可预约" && columnIndex === 4) {
        return {
          background: ""
        };
      }

      if (row.rongliang4.reserveState === "已到店" && columnIndex === 5) {
        return {
          background: "buttonface"
        };
      }
      if (row.rongliang4.reserveState === "未到店" && columnIndex === 5) {
        return {
          background: "green"
        };
      }
      if (row.rongliang4.reserveState === "超时未到店" && columnIndex === 5) {
        return {
          background: "red"
        };
      }
      if (row.rongliang4.reserveState === "超出预约容量" && columnIndex === 5) {
        return {
          background: "yellow"
        };
      }
      if (row.rongliang4.reserveState === "不可预约" && columnIndex === 5) {
        return {
          background: ""
        };
      }
      if (row.rongliang5.reserveState === "已到店" && columnIndex === 6) {
        return {
          background: "buttonface"
        };
      }
      if (row.rongliang5.reserveState === "未到店" && columnIndex === 6) {
        return {
          background: "green"
        };
      }
      if (row.rongliang5.reserveState === "超时未到店" && columnIndex === 6) {
        return {
          background: "red"
        };
      }
      if (row.rongliang5.reserveState === "超出预约容量" && columnIndex === 6) {
        return {
          background: "yellow"
        };
      }
      if (row.rongliang5.reserveState === "不可预约" && columnIndex === 6) {
        return {
          background: ""
        };
      }
      if (row.rongliang6.reserveState === "已到店" && columnIndex === 7) {
        return {
          background: "buttonface"
        };
      }
      if (row.rongliang6.reserveState === "未到店" && columnIndex === 7) {
        return {
          background: "green"
        };
      }
      if (row.rongliang6.reserveState === "超时未到店" && columnIndex === 7) {
        return {
          background: "red"
        };
      }
      if (row.rongliang6.reserveState === "超出预约容量" && columnIndex === 7) {
        return {
          background: "yellow"
        };
      }
      if (row.rongliang6.reserveState === "不可预约" && columnIndex === 7) {
        return {
          background: ""
        };
      }
    },
    //是否显示更多
    loadmore() {
      if (this.pic) {
        this.pic = false;
      } else {
        this.pic = true;
      }
    },
    closezuofei() {
      this.dialogVisible = false;
    },
    //获取下拉列表值
    getCommonQueryServiceSa(val) {
      this.dataInfo.saName = val;
    },
    getyuyuelaiyuan(val) {
      this.dataInfo.reserveSource = val;
    },
    getyuyueleixing(val) {
      // this.dacancelInfo.reserveType = val;
    },
    getDateType(val) {
      this.dataInfo.dateType = val;
    },
    getcheliangpinpai(val) {
      this.dataInfo.carBrandCode = val;
    },
    getCancelType(val) {
      this.dacancelInfo.cancelType = val;
    },
    //查询表二的数据
    findAll2(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.listLoading1 = true;
          this.dataInfo.begDate = this.dataInfo.appointEnterDate[0];
          this.dataInfo.endDate = this.dataInfo.appointEnterDate[1];
          //预约进店日期存入临时变量
          this.appointEnterDate = this.dataInfo.appointEnterDate;
          this.dataInfo.appointEnterDate = undefined;
          //预约看板接口
          seBuReserveOrderQueryList(
            this.listQuery.pageSize,
            this.listQuery.pageIndex,
            this.dataInfo
          ).then(response => {
            this.dataInfo.appointEnterDate = this.appointEnterDate;
            if (
              response.data[seApis.seBuReserveOrderQueryList.ServiceCode]
                .result === "1" &&
              response.data[seApis.seBuReserveOrderQueryList.ServiceCode]
                .rows != ""
            ) {
              // this.listQuery.pageTotal =
              //   response.data[seApis.seBuReserveOrderQueryList.ServiceCode].records;
              this.seBuReserveOrderQueryRecords =
                response.data[
                  seApis.seBuReserveOrderQueryList.ServiceCode
                ].records;
              this.kanban =
                response.data[
                  seApis.seBuReserveOrderQueryList.ServiceCode
                ].rows;
            }
            this.listLoading1 = false;
          });
        } else {
          this.isValiad = true;
          return false;
        }
      });
    },
    //查询容量
    findrongliang(val) {
      seBuReserveCanQueryFactQty(this.rongliangDataInfo).then(response => {
        if (
          response.data[seApis.seBuReserveCanQueryFactQty.ServiceCode]
            .result === "1" &&
          response.data[seApis.seBuReserveCanQueryFactQty.ServiceCode].rows !=
            ""
        ) {
          this.rows =
            response.data[seApis.seBuReserveCanQueryFactQty.ServiceCode].rows;
          this.weekName = this.calculateWeek(val);
        }
      });
    },
    //重置查询条件
    resettingData() {
      this.pickerOptions1 = {
        disabledDate(time) {
          return time.getTime() < 0;
        }
      };
      this.pickerOptions = {
        disabledDate(time) {
          return time.getTime() < 0;
        }
      };
      this.dataInfo.begDate = "";
      this.dataInfo.endDate = "";
      this.dataInfo.dlrId = "";
      this.dataInfo.reserveOrderCode = "";
      this.dataInfo.carBrandCode = "";
      this.dataInfo.carLicense = "";
      this.dataInfo.vin = "";
      this.dataInfo.saName = "";
      this.dataInfo.reserveSource = "";
      this.dataInfo.custName = "";
      this.dataInfo.carBrandCode = "";
      // this.dacancelInfo.reserveType = "";
      // this.dacancelInfo.reserveSourceName = "";
    },
    //查询数据
    findAll() {
      //清空初始化数据
      for (var i = 0; i < this.kanban1.length; i++) {
        this.kanban1[i].timess = "";
        this.kanban1[i].rongliang1.saName = "";
        this.kanban1[i].rongliang1.carLicense = "";
        this.kanban1[i].rongliang1.preComeDate = "";
        this.kanban1[i].rongliang1.reserveState = "";

        this.kanban1[i].rongliang2.saName = "";
        this.kanban1[i].rongliang2.carLicense = "";
        this.kanban1[i].rongliang2.preComeDate = "";
        this.kanban1[i].rongliang2.reserveState = "";

        this.kanban1[i].rongliang3.saName = "";
        this.kanban1[i].rongliang3.carLicense = "";
        this.kanban1[i].rongliang3.preComeDate = "";
        this.kanban1[i].rongliang3.reserveState = "";

        this.kanban1[i].rongliang4.saName = "";
        this.kanban1[i].rongliang4.carLicense = "";
        this.kanban1[i].rongliang4.preComeDate = "";
        this.kanban1[i].rongliang4.reserveState = "";
        this.kanban1[i].rongliang5.saName = "";
        this.kanban1[i].rongliang5.carLicense = "";
        this.kanban1[i].rongliang5.preComeDate = "";
        this.kanban1[i].rongliang5.reserveState = "";
        this.kanban1[i].rongliang6.saName = "";
        this.kanban1[i].rongliang6.carLicense = "";
        this.kanban1[i].rongliang6.preComeDate = "";
        this.kanban1[i].rongliang6.reserveState = "";

        this.kanban2[i].timess = "";
        this.kanban2[i].rongliang1.saName = "";
        this.kanban2[i].rongliang1.carLicense = "";
        this.kanban2[i].rongliang1.preComeDate = "";
        this.kanban2[i].rongliang1.reserveState = "";

        this.kanban2[i].rongliang2.saName = "";
        this.kanban2[i].rongliang2.carLicense = "";
        this.kanban2[i].rongliang2.preComeDate = "";
        this.kanban2[i].rongliang2.reserveState = "";

        this.kanban2[i].rongliang3.saName = "";
        this.kanban2[i].rongliang3.carLicense = "";
        this.kanban2[i].rongliang3.preComeDate = "";
        this.kanban2[i].rongliang3.reserveState = "";

        this.kanban2[i].rongliang4.saName = "";
        this.kanban2[i].rongliang4.carLicense = "";
        this.kanban2[i].rongliang4.preComeDate = "";
        this.kanban2[i].rongliang4.reserveState = "";
        this.kanban2[i].rongliang5.saName = "";
        this.kanban2[i].rongliang5.carLicense = "";
        this.kanban2[i].rongliang5.preComeDate = "";
        this.kanban2[i].rongliang5.reserveState = "";
        this.kanban2[i].rongliang6.saName = "";
        this.kanban2[i].rongliang6.carLicense = "";
        this.kanban2[i].rongliang6.preComeDate = "";
        this.kanban2[i].rongliang6.reserveState = "";
      }
      var riqi = new Date(this.date1);
      var year = riqi.getFullYear();
      var month = riqi.getMonth();
      var day = riqi.getDate();
      var realmonth = month + 1;
      var day1 = day + 1;
      //格式化预约来店日期
      if (realmonth < 10 && day < 10) {
        this.listQuery.dataInfo.preComeDate =
          year + "-" + "0" + realmonth + "-" + "0" + day;
        // this.listQuery.dataInfo.endDate =
        //   year + "-" + "0" + realmonth + "-" + "0" + day1;
      } else if (realmonth < 10 && day >= 10) {
        this.listQuery.dataInfo.preComeDate =
          year + "-" + "0" + realmonth + "-" + day;
        // this.listQuery.dataInfo.endDate =
        //   year + "-" + "0" + realmonth + "-" + day1;
      } else if (realmonth >= 10 && day < 10) {
        this.listQuery.dataInfo.preComeDate =
          year + "-" + realmonth + "-" + "0" + day;
        // this.listQuery.dataInfo.endDate =
        //   year + "-" + realmonth + "-" + "0" + day1;
      } else if (realmonth >= 10 && day >= 10) {
        this.listQuery.dataInfo.preComeDate =
          year + "-" + realmonth + "-" + day + " 00:00:00";
        // this.listQuery.dataInfo.endDate =
        //   year + "-" + realmonth + "-" + day1 + " 00:00:00";
      }

      var riqi = new Date(this.date1);
      var month = riqi.getMonth();
      var day = riqi.getDate();
      var days = day + 1;
      var realmonth = month + 1;
      this.kanban1[0].dates = realmonth + "月" + day + "日";
      this.kanban2[0].dates = realmonth + "月" + days + "日";
      this.realrongliang = 0; //容量查询结果的最大容量
      this.realrongliang1 = 0; //容量查询结果的最大容量

      seBuReserveOrderQueryViewBoard(
        this.listQuery.pageSize,
        this.listQuery.pageIndex,
        this.listQuery.dataInfo
      ).then(response => {
        if (
          response.data[seApis.seBuReserveOrderQueryViewBoard.ServiceCode]
            .result === "1" &&
          response.data[seApis.seBuReserveOrderQueryViewBoard.ServiceCode]
            .rows != ""
        ) {
          this.listQuery.pageTotal =
            response.data[
              seApis.seBuReserveOrderQueryViewBoard.ServiceCode
            ].records;
          //???预约看板查询出来的数据直接赋值给预约查询网格？两个不同的api
          this.kanban =
            response.data[
              seApis.seBuReserveOrderQueryViewBoard.ServiceCode
            ].rows;
          var list = this.kanban;
          this.rongliangDataInfo.beginDate = this.listQuery.dataInfo.preComeDate;

          //初始化时间段字段
          for (var j = 0; j < 11; j++) {
            this.kanban1[j].timess = j + 8;
            this.kanban2[j].timess = j + 8;
          }

          for (var i = 0; i < list.length; i++) {
            var riqi = new Date(this.date1); //获取日期选择框的数据
            var month = riqi.getMonth();
            var day = riqi.getDate();
            var days = day + 1;
            var realmonth = month + 1;
            var preComeDate = list[i].preComeDate; //获取返回日期
            var getriqi = new Date(preComeDate);
            var getday = getriqi.getDate();
            var saName = list[i].saName;
            var preComeDate = list[i].preComeDate;
            var reserveState = list[i].reserveState; //reserveStateCn字段
            reserveState = "未到店"; //先随便赋值测试
            var hh = list[i].preComeDate.substring(11, 13);
            var carLicense = list[i].carLicense;
            var mi = list[i].preComeDate.substring(14, 16);
            var dangqianshijian = new Date();
            var dangqianyuefen = dangqianshijian.getMonth();
            var dangqianhh = dangqianshijian.getHours();
            var dangqianfenzhong = dangqianshijian.getMinutes();
            //判断是否是当前天数
            // if (getday == day) {
            if (true) {
              for (var k = 0; k < this.kanban1.length; k++) {
                if (hh == this.kanban1[k].timess) {
                  //将api返会的未到店状态分为：超时未到店、未到店
                  if (reserveState == "未到店") {
                    if (dangqianhh > hh) {
                      reserveState = "超时未到店";
                    }
                    if (dangqianhh == hh) {
                      if (dangqianfenzhong >= mi) {
                        reserveState = "超时未到店";
                      } else if (dangqianfenzhong < mi) {
                        reserveState = "未到店";
                      }
                    }
                    if (dangqianhh < hh) {
                      reserveState = "未到店";
                    }
                  }

                  if (this.kanban1[k].rongliang1.saName == "") {
                    this.kanban1[k].rongliang1.reserveState = reserveState;
                    this.kanban1[k].rongliang1.preComeDate = preComeDate;
                    this.kanban1[k].rongliang1.saName = saName;
                    this.kanban1[k].rongliang1.carLicense = carLicense;
                    this.record1 = this.record1 + 1;
                  } else if (this.kanban1[k].rongliang2.saName == "") {
                    this.kanban1[k].rongliang2.reserveState = reserveState;
                    this.kanban1[k].rongliang2.preComeDate = preComeDate;
                    this.kanban1[k].rongliang2.saName = saName;
                    this.kanban1[k].rongliang2.carLicense = carLicense;
                    this.record1 = this.record1 + 2;
                  } else if (this.kanban1[k].rongliang3.saName == "") {
                    this.kanban1[k].rongliang3.reserveState = reserveState;
                    this.kanban1[k].rongliang3.preComeDate = preComeDate;
                    this.kanban1[k].rongliang3.saName = saName;
                    this.kanban1[k].rongliang3.carLicense = carLicense;
                    this.record1 = this.record1 + 3;
                  } else if (this.kanban1[k].rongliang4.saName == "") {
                    this.kanban1[k].rongliang4.reserveState = reserveState;
                    this.kanban1[k].rongliang4.preComeDate = preComeDate;
                    this.kanban1[k].rongliang4.saName = saName;
                    this.kanban1[k].rongliang4.carLicense = carLicense;
                    this.record1 = this.record1 + 4;
                  } else if (this.kanban1[k].rongliang5.saName == "") {
                    this.kanban1[k].rongliang5.reserveState = reserveState;
                    this.kanban1[k].rongliang5.preComeDate = preComeDate;
                    this.kanban1[k].rongliang5.saName = saName;
                    this.kanban1[k].rongliang5.carLicense = carLicense;
                    this.record1 = this.record1 + 5;
                  } else if (this.kanban1[k].rongliang6.saName == "") {
                    this.kanban1[k].rongliang6.reserveState = reserveState;
                    this.kanban1[k].rongliang6.preComeDate = preComeDate;
                    this.kanban1[k].rongliang6.saName = saName;
                    this.kanban1[k].rongliang6.carLicense = carLicense;
                    this.record1 = this.record1 + 6;
                  }
                } //时间段相同

                //record1：某个时间段的实际容量
                // rows[k].canReserveQty：某个时间段查询预约容量返回的预约容量
                //根据星期几和时间段确定某一天某时间段的预约容量
                let currentRongliang = 0;
                if (this.weekName == "星期一") {
                  let kk = 0;
                  switch (k) {
                    case 0:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].mon;
                      break;
                    case 1:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].mon;
                      break;
                    case 2:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].mon;
                      break;
                    case 3:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].mon;
                      break;
                    case 4:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].mon;
                      break;
                    case 5:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].mon;
                      break;
                    case 6:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].mon;
                      break;
                    case 7:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].mon;
                      break;
                    case 8:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].mon;
                      break;
                    case 9:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].mon;
                      break;
                    case 10:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].mon;
                      break;
                  }
                }
                if (this.weekName == "星期二") {
                  let kk = 0;
                  switch (k) {
                    case 0:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].tue;
                      break;
                    case 1:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].tue;
                      break;
                    case 2:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].tue;
                      break;
                    case 3:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].tue;
                      break;
                    case 4:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].tue;
                      break;
                    case 5:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].tue;
                      break;
                    case 6:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].tue;
                      break;
                    case 7:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].tue;
                      break;
                    case 8:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].tue;
                      break;
                    case 9:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].tue;
                      break;
                    case 10:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].tue;
                      break;
                  }
                }
                if (this.weekName == "星期三") {
                  let kk = 0;
                  switch (k) {
                    case 0:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].wed;
                      break;
                    case 1:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].wed;
                      break;
                    case 2:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].wed;
                      break;
                    case 3:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].wed;
                      break;
                    case 4:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].wed;
                      break;
                    case 5:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].wed;
                      break;
                    case 6:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].wed;
                      break;
                    case 7:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].wed;
                      break;
                    case 8:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].wed;
                      break;
                    case 9:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].wed;
                      break;
                    case 10:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].wed;
                      break;
                  }
                }
                if (this.weekName == "星期四") {
                  let kk = 0;
                  switch (k) {
                    case 0:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].thu;
                      break;
                    case 1:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].thu;
                      break;
                    case 2:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].thu;
                      break;
                    case 3:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].thu;
                      break;
                    case 4:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].thu;
                      break;
                    case 5:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].thu;
                      break;
                    case 6:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].thu;
                      break;
                    case 7:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].thu;
                      break;
                    case 8:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].thu;
                      break;
                    case 9:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].thu;
                      break;
                    case 10:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].thu;
                      break;
                  }
                }
                if (this.weekName == "星期五") {
                  let kk = 0;
                  switch (k) {
                    case 0:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].fri;
                      break;
                    case 1:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].fri;
                      break;
                    case 2:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].fri;
                      break;
                    case 3:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].fri;
                      break;
                    case 4:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].fri;
                      break;
                    case 5:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].fri;
                      break;
                    case 6:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].fri;
                      break;
                    case 7:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].fri;
                      break;
                    case 8:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].fri;
                      break;
                    case 9:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].fri;
                      break;
                    case 10:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].fri;
                      break;
                  }
                }
                if (this.weekName == "星期六") {
                  let kk = 0;
                  switch (k) {
                    case 0:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sat;
                      break;
                    case 1:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sat;
                      break;
                    case 2:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sat;
                      break;
                    case 3:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sat;
                      break;
                    case 4:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sat;
                      break;
                    case 5:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sat;
                      break;
                    case 6:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sat;
                      break;
                    case 7:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sat;
                      break;
                    case 8:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sat;
                      break;
                    case 9:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sat;
                      break;
                    case 10:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sat;
                      break;
                  }
                }
                if (this.weekName == "星期日") {
                  let kk = 0;
                  switch (k) {
                    case 0:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sun;
                      break;
                    case 1:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sun;
                      break;
                    case 2:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sun;
                      break;
                    case 3:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sun;
                      break;
                    case 4:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sun;
                      break;
                    case 5:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sun;
                      break;
                    case 6:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sun;
                      break;
                    case 7:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sun;
                      break;
                    case 8:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sun;
                      break;
                    case 9:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sun;
                      break;
                    case 10:
                      kk = k + 8;
                      currentRongliang = this.rows.filter(
                        o => o.timeQuantum == kk
                      )[0].sun;
                      break;
                  }
                }
                if (this.record1 > currentRongliang) {
                  var cha = this.record1 - currentRongliang;
                  if (cha == 1 && this.kanban1[k].rongliang2.saName == "") {
                    this.kanban1[k].rongliang1.reserveState = "超出预约容量";
                  }

                  if (cha == 1 && this.kanban1[k].rongliang2.saName != "") {
                    this.kanban1[k].rongliang2.reserveState = "超出预约容量";
                  }
                  if (cha == 2) {
                    this.kanban1[k].rongliang2.reserveState = "超出预约容量";
                    this.kanban1[k].rongliang3.reserveState = "超出预约容量";
                  }
                  if (cha == 3) {
                    this.kanban1[k].rongliang2.reserveState = "超出预约容量";
                    this.kanban1[k].rongliang3.reserveState = "超出预约容量";
                    this.kanban1[k].rongliang4.reserveState = "超出预约容量";
                  }
                  if (cha == 4) {
                    this.kanban1[k].rongliang2.reserveState = "超出预约容量";
                    this.kanban1[k].rongliang3.reserveState = "超出预约容量";
                    this.kanban1[k].rongliang4.reserveState = "超出预约容量";
                    this.kanban1[k].rongliang5.reserveState = "超出预约容量";
                  }
                  if (cha == 5) {
                    this.kanban1[k].rongliang2.reserveState = "超出预约容量";
                    this.kanban1[k].rongliang3.reserveState = "超出预约容量";
                    this.kanban1[k].rongliang4.reserveState = "超出预约容量";
                    this.kanban1[k].rongliang5.reserveState = "超出预约容量";
                    this.kanban1[k].rongliang6.reserveState = "超出预约容量";
                  }
                }
                this.record1 = 0;
              }
            }
            //days：预约到店日期+1；getday：api返回的日期
            // if (getday == days) {
            if (true) {
              for (var k = 0; k < this.kanban2.length; k++) {
                if (hh == this.kanban2[k].timess) {
                  if (reserveState == "未到店") {
                    if (dangqianhh > hh) {
                      reserveState = "超时未到店";
                    }
                    if (dangqianhh == hh) {
                      if (dangqianfenzhong >= mi) {
                        reserveState = "超时未到店";
                      } else if (dangqianfenzhong < mi) {
                        reserveState = "未到店";
                      }
                    }
                    if (dangqianhh < hh) {
                      reserveState = "未到店";
                    }
                  }
                  if (this.kanban2[k].rongliang1.saName == "") {
                    this.kanban2[k].rongliang1.reserveState = reserveState;
                    this.kanban2[k].rongliang1.preComeDate = preComeDate;
                    this.kanban2[k].rongliang1.saName = saName;
                    this.kanban2[k].rongliang1.carLicense = carLicense;
                    this.record2 = this.record2 + 1;
                  } else if (this.kanban2[k].rongliang2.saName == "") {
                    this.kanban2[k].rongliang2.reserveState = reserveState;
                    this.kanban2[k].rongliang2.preComeDate = preComeDate;
                    this.kanban2[k].rongliang2.saName = saName;
                    this.kanban2[k].rongliang2.carLicense = carLicense;
                    this.record2 = this.record2 + 2;
                  } else if (this.kanban2[k].rongliang3.saName == "") {
                    this.kanban2[k].rongliang3.reserveState = reserveState;
                    this.kanban2[k].rongliang3.preComeDate = preComeDate;
                    this.kanban2[k].rongliang3.saName = saName;
                    this.kanban2[k].rongliang3.carLicense = carLicense;
                    this.record2 = this.record2 + 3;
                  } else if (this.kanban2[k].rongliang4.saName == "") {
                    this.kanban2[k].rongliang4.reserveState = reserveState;
                    this.kanban2[k].rongliang4.preComeDate = preComeDate;
                    this.kanban2[k].rongliang4.saName = saName;
                    this.kanban2[k].rongliang4.carLicense = carLicense;
                    this.record2 = this.record2 + 4;
                  } else if (this.kanban2[k].rongliang5.saName == "") {
                    this.kanban2[k].rongliang5.reserveState = reserveState;
                    this.kanban2[k].rongliang5.preComeDate = preComeDate;
                    this.kanban2[k].rongliang5.saName = saName;
                    this.kanban2[k].rongliang5.carLicense = carLicense;
                    this.record2 = this.record2 + 5;
                  } else if (this.kanban2[k].rongliang6.saName == "") {
                    this.kanban2[k].rongliang6.reserveState = reserveState;
                    this.kanban2[k].rongliang6.preComeDate = preComeDate;
                    this.kanban2[k].rongliang6.saName = saName;
                    this.kanban2[k].rongliang6.carLicense = carLicense;
                    this.record2 = this.record2 + 6;
                  }
                }

                // if (this.record2 > this.rows[k + 11].canReserveQty) {
                //   var cha = this.record2 - this.rows[k + 11].canReserveQty;
                if (this.record2 > 2) {
                  var cha = this.record2 - 2;

                  if (cha == 1 && this.kanban2[k].rongliang2.saName == "") {
                    this.kanban2[k].rongliang1.reserveState = "超出预约容量";
                  }
                  if (cha == 1 && this.kanban2[k].rongliang2.saName != "") {
                    this.kanban2[k].rongliang2.reserveState = "超出预约容量";
                  }
                  if (cha == 2) {
                    this.kanban2[k].rongliang2.reserveState = "超出预约容量";
                    this.kanban2[k].rongliang3.reserveState = "超出预约容量";
                  }
                  if (cha == 3) {
                    this.kanban2[k].rongliang2.reserveState = "超出预约容量";
                    this.kanban2[k].rongliang3.reserveState = "超出预约容量";
                    this.kanban2[k].rongliang4.reserveState = "超出预约容量";
                  }
                  if (cha == 4) {
                    this.kanban2[k].rongliang2.reserveState = "超出预约容量";
                    this.kanban2[k].rongliang3.reserveState = "超出预约容量";
                    this.kanban2[k].rongliang4.reserveState = "超出预约容量";
                    this.kanban2[k].rongliang5.reserveState = "超出预约容量";
                  }
                  if (cha == 5) {
                    this.kanban2[k].rongliang2.reserveState = "超出预约容量";
                    this.kanban2[k].rongliang3.reserveState = "超出预约容量";
                    this.kanban2[k].rongliang4.reserveState = "超出预约容量";
                    this.kanban2[k].rongliang5.reserveState = "超出预约容量";
                    this.kanban2[k].rongliang6.reserveState = "超出预约容量";
                  }
                }
              }
              this.record2 = 0;
            }
          }
          for (var j = 0; j < 11; j++) {
            this.kanban1[j].timess = j + 8 + ":00";
            this.kanban2[j].timess = j + 8 + ":00";
          }
          // this.realrongliang = 3;
          // var riqi1 = new Date(this.rows[0].date); //获取api的返回日期
          var riqi1 = new Date(this.date1); //获取api的返回日期
          var month1 = riqi1.getMonth();
          var day1 = riqi1.getDate();
          var days1 = day1 + 1;
          // for (var j = 0; j < 11; j++) {
          //day和month 日期选择框数据 day1和month1 api返回数据
          //第一个网格
          // if (day == day1 && month == month1) {
          if (this.weekName == "星期一") {
            for (var j = 0; j < 11; j++) {
              if (this.rows[j].mon >= this.realrongliang) {
                this.realrongliang = this.rows[j].mon;
              }
            }
          }
          if (this.weekName == "星期二") {
            for (var j = 0; j < 11; j++) {
              if (this.rows[j].tue >= this.realrongliang) {
                this.realrongliang = this.rows[j].tue;
              }
            }
          }
          if (this.weekName == "星期三") {
            for (var j = 0; j < 11; j++) {
              if (this.rows[j].wed >= this.realrongliang) {
                this.realrongliang = this.rows[j].wed;
              }
            }
          }
          if (this.weekName == "星期四") {
            for (var j = 0; j < 11; j++) {
              if (this.rows[j].thu >= this.realrongliang) {
                this.realrongliang = this.rows[j].thu;
              }
            }
          }
          if (this.weekName == "星期五") {
            for (var j = 0; j < 11; j++) {
              if (this.rows[j].fri >= this.realrongliang) {
                this.realrongliang = this.rows[j].fri;
              }
            }
          }
          if (this.weekName == "星期六") {
            for (var j = 0; j < 11; j++) {
              if (this.rows[j].sat >= this.realrongliang) {
                this.realrongliang = this.rows[j].sat;
              }
            }
          }
          if (this.weekName == "星期日") {
            for (var j = 0; j < 11; j++) {
              if (this.rows[j].sun >= this.realrongliang) {
                this.realrongliang = this.rows[j].sun;
              }
            }
          }
          // } else {
          //   this.realrongliang = 0;
          // }
          //第二个网格
          // if (day == days1 && month == month1) {
          if (this.weekName == "星期一") {
            for (var j = 0; j < 11; j++) {
              if (this.rows[j].mon >= this.realrongliang1) {
                this.realrongliang1 = this.rows[j].mon;
              }
            }
          }
          if (this.weekName == "星期二") {
            for (var j = 0; j < 11; j++) {
              if (this.rows[j].tue >= this.realrongliang1) {
                this.realrongliang1 = this.rows[j].tue;
              }
            }
          }
          if (this.weekName == "星期三") {
            for (var j = 0; j < 11; j++) {
              if (this.rows[j].wed >= this.realrongliang1) {
                this.realrongliang1 = this.rows[j].wed;
              }
            }
          }
          if (this.weekName == "星期四") {
            for (var j = 0; j < 11; j++) {
              if (this.rows[j].thu >= this.realrongliang1) {
                this.realrongliang1 = this.rows[j].thu;
              }
            }
          }
          if (this.weekName == "星期五") {
            for (var j = 0; j < 11; j++) {
              if (this.rows[j].fri >= this.realrongliang1) {
                this.realrongliang1 = this.rows[j].fri;
              }
            }
          }
          if (this.weekName == "星期六") {
            for (var j = 0; j < 11; j++) {
              if (this.rows[j].sat >= this.realrongliang1) {
                this.realrongliang1 = this.rows[j].sat;
              }
            }
          }
          if (this.weekName == "星期日") {
            for (var j = 0; j < 11; j++) {
              if (this.rows[j].sun >= this.realrongliang1) {
                this.realrongliang1 = this.rows[j].sun;
              }
            }
          }
          // } else {
          //   this.realrongliang = 0;
          // }

          // }
          // for (var i = 11; i < 22; i++) {
          //   if (day == days1 && month == month1) {
          //     if (this.rows[i].canReserveQty >= this.realrongliang1) {
          //       this.realrongliang1 = this.rows[i].canReserveQty;
          //     }
          //   } else {
          //     this.realrongliang1 = 0;
          //   }
          // }
          if (this.realrongliang == 0) {
            this.cols = "";
            this.cols = [
              { label: "日期", prop: "node", type: "0" },
              { label: "时间段", prop: "name", type: "-1" }
            ];
          }
          if (this.realrongliang == 1) {
            this.cols = "";
            this.cols = [
              { label: "日期", prop: "node", type: "0" },
              { label: "时间段", prop: "name", type: "-1" },
              { label: "容量一", prop: "type", type: 1 }
            ];
          }
          if (this.realrongliang == 2) {
            this.cols = "";
            this.cols = [
              { label: "日期", prop: "node", type: "0" },
              { label: "时间段", prop: "name", type: "-1" },
              { label: "容量一", prop: "type", type: 1 },
              { label: "容量二", prop: "type2", type: 2 }
            ];
          }
          if (this.realrongliang == 3) {
            this.cols = "";
            this.cols = [
              { label: "日期", prop: "node", type: "0" },
              { label: "时间段", prop: "name", type: "-1" },
              { label: "容量一", prop: "type1", type: 1 },
              { label: "容量二", prop: "type2", type: 2 },
              { label: "容量三", prop: "type3", type: 3 }
            ];
          }
          if (this.realrongliang == 4) {
            this.cols = "";
            this.cols = [
              { label: "日期", prop: "node", type: "0" },
              { label: "时间段", prop: "name", type: "-1" },
              { label: "容量一", prop: "type1", type: 1 },
              { label: "容量二", prop: "type2", type: 2 },
              { label: "容量三", prop: "type3", type: 3 },
              { label: "容量四", prop: "type4", type: 4 }
            ];
          }
          if (this.realrongliang == 5) {
            this.cols = "";
            this.cols = [
              { label: "日期", prop: "node", type: "0" },
              { label: "时间段", prop: "name", type: "-1" },
              { label: "容量一", prop: "type1", type: 1 },
              { label: "容量二", prop: "type2", type: 2 },
              { label: "容量三", prop: "type3", type: 3 },
              { label: "容量四", prop: "type4", type: 4 },
              { label: "容量五", prop: "type5", type: 5 }
            ];
          }
          if (this.realrongliang == 6) {
            this.cols = "";
            this.cols = [
              { label: "日期", prop: "node", type: "0" },
              { label: "时间段", prop: "name", type: "-1" },
              { label: "容量一", prop: "type1", type: 1 },
              { label: "容量二", prop: "type2", type: 2 },
              { label: "容量三", prop: "type3", type: 3 },
              { label: "容量四", prop: "type4", type: 4 },
              { label: "容量五", prop: "type5", type: 5 },
              { label: "容量六", prop: "type6", type: 6 }
            ];
          }

          if (this.realrongliang1 == 0) {
            this.cols2 = "";
            this.cols2 = [
              { label: "日期", prop: "node", type: "0" },
              { label: "时间段", prop: "name", type: "-1" }
            ];
          }
          if (this.realrongliang1 == 1) {
            this.cols2 = "";
            this.cols2 = [
              { label: "日期", prop: "node", type: "0" },
              { label: "时间段", prop: "name", type: "-1" },
              { label: "容量一", prop: "type", type: 1 }
            ];
          }
          if (this.realrongliang1 == 2) {
            this.cols2 = "";
            this.cols2 = [
              { label: "日期", prop: "node", type: "0" },
              { label: "时间段", prop: "name", type: "-1" },
              { label: "容量一", prop: "type", type: 1 },
              { label: "容量二", prop: "type2", type: 2 }
            ];
          }
          if (this.realrongliang1 == 3) {
            this.cols2 = "";
            this.cols2 = [
              { label: "日期", prop: "node", type: "0" },
              { label: "时间段", prop: "name", type: "-1" },
              { label: "容量一", prop: "type1", type: 1 },
              { label: "容量二", prop: "type2", type: 2 },
              { label: "容量三", prop: "type3", type: 3 }
            ];
          }
          if (this.realrongliang1 == 4) {
            this.cols2 = "";
            this.cols2 = [
              { label: "日期", prop: "node", type: "0" },
              { label: "时间段", prop: "name", type: "-1" },
              { label: "容量一", prop: "type1", type: 1 },
              { label: "容量二", prop: "type2", type: 2 },
              { label: "容量三", prop: "type3", type: 3 },
              { label: "容量四", prop: "type4", type: 4 }
            ];
          }
          if (this.realrongliang1 == 5) {
            this.cols2 = "";
            this.cols2 = [
              { label: "日期", prop: "node", type: "0" },
              { label: "时间段", prop: "name", type: "-1" },
              { label: "容量一", prop: "type1", type: 1 },
              { label: "容量二", prop: "type2", type: 2 },
              { label: "容量三", prop: "type3", type: 3 },
              { label: "容量四", prop: "type4", type: 4 },
              { label: "容量五", prop: "type5", type: 5 }
            ];
          }
          if (this.realrongliang1 == 6) {
            this.cols2 = "";
            this.cols2 = [
              { label: "日期", prop: "node", type: "0" },
              { label: "时间段", prop: "name", type: "-1" },
              { label: "容量一", prop: "type1", type: 1 },
              { label: "容量二", prop: "type2", type: 2 },
              { label: "容量三", prop: "type3", type: 3 },
              { label: "容量四", prop: "type4", type: 4 },
              { label: "容量五", prop: "type5", type: 5 },
              { label: "容量六", prop: "type6", type: 6 }
            ];
          }
        }
      });
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.findAll2("listQuery");
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.findAll2("listQuery");
    },
    calculateWeek(val) {
      val = val.substring(0, 10);
      let arr = new Array();
      arr = val.split("-");
      let date = new Date(arr[0], parseInt(arr[1] - 1), arr[2]);
      let week = String(date.getDay())
        .replace("0", "日")
        .replace("1", "一")
        .replace("2", "二")
        .replace("3", "三")
        .replace("4", "四")
        .replace("5", "五")
        .replace("6", "六");
      let weekName = "星期" + week;
      return weekName;
    },
    operation() {}
  }
};

//  document.getElementById('d1').scrollTop=100;//通过scrollTop设置滚动到100位置
//   document.getElementById('d1').scrollLeft=200;//通过scrollTop设置滚动到200位置
</script>
<style scoped>
/deep/#tab-first {
  position: relative;
  left: 890px;
  top: -11px;
}

/deep/#tab-second {
  position: absolute;
  left: 1000px;
  top: -11px;
}
.filter-params .el-col {
  min-width: 50px;
}
</style>
