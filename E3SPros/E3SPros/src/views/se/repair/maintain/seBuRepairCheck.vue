<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="queryMainData()">查询</el-button>
      <el-button size="small" @click="openTable()">委托维修复核</el-button>
      <el-button size="small" @click="cancel()">撤销复核</el-button>
      <el-button size="small" @click="removeQueryParam()">重置</el-button>
    </div>
    <!--<div class="filter-container filter-title" ref="conTitleHeight">查询条件</div>-->
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <el-col :span="22">
          <el-row>
            <el-col :span="6">
              <label>报修时间</label>
              <el-date-picker
                v-model="ReOrderQuery.repairTimeBeg"
                type="date"
                :picker-options="pickerOptions"
                placeholder="选择日期"
                value-format="yyyy-MM-dd HH:mm:ss"
                format="yyyy-MM-dd HH:mm:ss"
                @change="getriqi"
              ></el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>至</label>
              <el-date-picker
                v-model="ReOrderQuery.repairTimeEnd"
                type="date"
                :picker-options="pickerOptions1"
                placeholder="选择日期"
                value-format="yyyy-MM-dd HH:mm:ss"
                format="yyyy-MM-dd HH:mm:ss"
                @change="getriqi1"
              ></el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>车牌号</label>
              <el-input v-model="ReOrderQuery.carLicense" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="6">
              <label>VIN</label>
              <el-input v-model="ReOrderQuery.vin" placeholder="请输入内容"></el-input>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="2">
          <el-button icon="el-icon-plus" @click="loadmore" class="moreParam">更多</el-button>
        </el-col>

        <el-col :span="22" v-show="!pic">
          <el-row>
            <el-col :span="6">
              <label>报修人</label>
              <el-input v-model="ReOrderQuery.repairMan" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="6">
              <label>报修人电话</label>
              <!--<lableName curLabelName="报修人电话" :isShowLabel="true" :isRequire="false"></lableName> -->
              <el-input v-model="ReOrderQuery.repairTel" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="6">
              <label>派工单号</label>
              <el-input v-model="ReOrderQuery.repairOrderCode" placeholder="请输入内容"></el-input>
            </el-col>
            <!--服务代表-->
            <seCommonQueryServiceSaDDL
              :span="6"
              :isMul="isMul"
              @changeCode="getServiceSaDDL"
              :labelName="name"
              v-model="ReOrderQuery.saEmpId"
              ref="AA"
            />
          </el-row>
          <el-row>
            <!--维修状态-->
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isshow="isshow"
              :code="ReOrderQuery.repairOrderStatus"
              :lookuptype="repairTypeCode"
              :labelName="repairStatusLable"
              @changeCode="getRepairStatus"
              size="small"
            />
            <el-col :span="3">
              <el-checkbox label="全部维修状态" size="small" v-model="isCancelBalance"></el-checkbox>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-row>
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        stripe
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
        ref="multipleTable"
        :height="tableHeight"
      >
        <el-table-column align="center" label="序号" width="60" style="padding-top: 3px;">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column type="selection" width="40" label="选择+" />
        <el-table-column label="施工单号" width="150">
          <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template>
        </el-table-column>
        <el-table-column label="车牌号" width="100">
          <template slot-scope="scope">{{ scope.row.carLicense }}</template>
        </el-table-column>
        <el-table-column label="VIN" width="150">
          <template slot-scope="scope">{{ scope.row.vin }}</template>
        </el-table-column>
        <el-table-column label="车主" width="100">
          <template slot-scope="scope">{{ scope.row.custName }}</template>
        </el-table-column>
        <el-table-column label="维修状态" width="100">
          <template slot-scope="scope">{{ scope.row.repairStatusName }}</template>
        </el-table-column>
        <el-table-column label="收款状态" width="120">
          <template slot-scope="scope">{{ scope.row.isGather }}</template>
        </el-table-column>
        <el-table-column label="报修人" width="100">
          <template slot-scope="scope">{{ scope.row.repairMan }}</template>
        </el-table-column>
        <el-table-column label="报修人电话" width="120">
          <template slot-scope="scope">{{ scope.row.repairTel }}</template>
        </el-table-column>
        <el-table-column label="报修人时间" width="180">
          <template slot-scope="scope">{{ scope.row.repairTime }}</template>
        </el-table-column>
        <el-table-column label="预交车时间" width="180">
          <template slot-scope="scope">{{ scope.row.preGetDate }}</template>
        </el-table-column>
        <el-table-column label="服务代表" width="100">
          <template slot-scope="scope">{{ scope.row.saName }}</template>
        </el-table-column>
        <el-table-column label="施工单ID" v-if="false">
          <template slot-scope="scope">{{ scope.row.repairOrderId }}</template>
        </el-table-column>
        <el-table-column label="服务代表ID" v-if="false">
          <template slot-scope="scope">{{ scope.row.saEmpId }}</template>
        </el-table-column>
        <el-table-column label="行驶里程" v-if="false">
          <template slot-scope="scope">{{ scope.row.mileage }}</template>
        </el-table-column>
        <el-table-column label="估价单状态编码" v-if="false">
          <template slot-scope="scope">{{ scope.row.repairOrderStatus }}</template>
        </el-table-column>
        <el-table-column label="估价单状态名称" v-if="false">
          <template slot-scope="scope">{{ scope.row.repairStatusName }}</template>
        </el-table-column>
        <el-table-column label="结算状态编码" v-if="false">
          <template slot-scope="scope">{{ scope.row.isGather }}</template>
        </el-table-column>
        <el-table-column label="车辆ID" v-if="false">
          <template slot-scope="scope">{{ scope.row.carid }}</template>
        </el-table-column>
        <el-table-column label="交修时间" v-if="false">
          <template slot-scope="scope">{{ scope.row.trunRepairDate }}</template>
        </el-table-column>
        <el-table-column label="客户电话" v-if="false">
          <template slot-scope="scope">{{ scope.row.custTel }}</template>
        </el-table-column>
        <el-table-column label="最后更新时间" v-if="false">
          <template slot-scope="scope">{{ scope.row.lastUpdatedDate }}</template>
        </el-table-column>
        <el-table-column label="并发控制ID" v-if="false">
          <template slot-scope="scope">{{ scope.row.updateControlId }}</template>
        </el-table-column>
        <el-table-column label="创建时间" v-if="false">
          <template slot-scope="scope">{{ scope.row.createdDate }}</template>
        </el-table-column>
        <el-table-column label="发动机号" v-if="false">
          <template slot-scope="scope">{{ scope.row.engineNo }}</template>
        </el-table-column>
        <el-table-column label="品牌编码" v-if="false">
          <template slot-scope="scope">{{ scope.row.carBrandCode }}</template>
        </el-table-column>
        <el-table-column label="会员卡号" v-if="false">
          <template slot-scope="scope">{{ scope.row.cardNo }}</template>
        </el-table-column>
        <el-table-column label="厂商标识" v-if="false">
          <template slot-scope="scope">{{ scope.row.oemCode }}</template>
        </el-table-column>
        <el-table-column label="集团标识" v-if="false">
          <template slot-scope="scope">{{ scope.row.groupCode }}</template>
        </el-table-column>
        <el-table-column label="厂商标识ID" v-if="false">
          <template slot-scope="scope">{{ scope.row.oemId }}</template>
        </el-table-column>
        <el-table-column label="集团标识ID" v-if="false">
          <template slot-scope="scope">{{ scope.row.groupId }}</template>
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
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        ref="paginationHeight"
      />
    </el-row>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogParamVisible"
      center
      width="1000px"
      style="margin:0px;"
    >
      <el-tabs type="border-card" v-model="activeName" style="margin:0px;">
        <el-tab-pane label="客户车辆信息" name="first" style="margin:0px;">
          <div class="filter-container filter-title">客户信息</div>
          <div class="filter-container filter-params">
            <el-row :gutter="10">
              <el-col :span="8">
                <label>车主姓名</label>
                <el-input
                  v-model="allParamet[0].carCustInfo.custName"
                  placeholder="请输入内容"
                  disabled="true"
                  size="small"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>车主电话</label>
                <el-input
                  v-model="allParamet[0].carCustInfo.phone"
                  placeholder="请输入内容"
                  disabled="true"
                  size="small"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>使用者姓名</label>
                <el-input
                  v-model="allParamet[0].caruserinfolist.custName"
                  placeholder="请输入内容"
                  disabled="true"
                  size="small"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>使用者电话</label>
                <el-input
                  v-model="allParamet[0].caruserinfolist.phone"
                  placeholder="请输入内容"
                  disabled="true"
                  size="small"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>客户备注</label>
                <el-input
                  type="textarea"
                  v-model="allParamet[0].carCustInfo.remark"
                  placeholder="请输入内容"
                  disabled="true"
                  size="small"
                  :autosize="{ minRows: 1, maxRows: 4}"
                ></el-input>
              </el-col>
            </el-row>
          </div>
          <div class="filter-container filter-title">车辆信息</div>
          <div class="filter-container filter-params">
            <el-row :gutter="10">
              <el-col :span="8">
                <label>车牌号</label>
                <el-input
                  v-model="allParamet[0].carLicense"
                  size="small"
                  placeholder="请输入内容"
                  disabled="true"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>VIN</label>
                <el-input
                  v-model="allParamet[0].vin"
                  size="small"
                  placeholder="请输入内容"
                  disabled="true"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>车辆品牌</label>
                <el-input
                  v-model="allParamet[0].carBrandCn"
                  size="small"
                  placeholder="请输入内容"
                  disabled="true"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>颜色</label>
                <el-input
                  v-model="allParamet[0].carColorName"
                  size="small"
                  placeholder="请输入内容"
                  disabled="true"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>车系名称</label>
                <el-input
                  v-model="allParamet[0].carSeriesCn"
                  size="small"
                  placeholder="请输入内容"
                  disabled="true"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>车型</label>
                <el-input
                  v-model="allParamet[0].carTypeCode"
                  size="small"
                  placeholder="请输入内容"
                  disabled="true"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>发动机号</label>
                <el-input
                  v-model="allParamet[0].engineNo"
                  size="small"
                  placeholder="请输入内容"
                  disabled="true"
                ></el-input>
              </el-col>
            </el-row>
          </div>
          <div class="filter-container filter-title">单据信息</div>
          <div class="filter-container filter-params">
            <el-row :gutter="10">
              <el-col :span="8">
                <label>派工单号</label>
                <el-input
                  v-model="allParamet[0].repairwilist.workDId"
                  placeholder="请输入内容"
                  disabled="true"
                  size="small"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>服务代表</label>
                <el-input
                  v-model="allParamet[0].saName"
                  size="small"
                  placeholder="请输入内容"
                  disabled="true"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>报修人</label>
                <el-input
                  v-model="allParamet[0].repairMan"
                  size="small"
                  placeholder="请输入内容"
                  disabled="true"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>报修人电话</label>
                <el-input
                  v-model="allParamet[0].repairTel"
                  size="small"
                  placeholder="请输入内容"
                  disabled="true"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>送修时间</label>
                <el-input
                  v-model="allParamet[0].repairTime"
                  size="small"
                  placeholder="请输入内容"
                  disabled="true"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>预计交车时间</label>
                <el-input
                  v-model="allParamet[0].preGetDate"
                  size="small"
                  placeholder="请输入内容"
                  disabled="true"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>行驶里程</label>
                <el-input
                  v-model="allParamet[0].mileage"
                  size="small"
                  placeholder="请输入内容"
                  disabled="true"
                ></el-input>
              </el-col>
            </el-row>
          </div>

          <div class="filter-container filter-title">历史维修记录</div>
          <div class="filter-container filter-params">
            <el-table
              v-loading="listLoading1"
              :data="list1"
              element-loading-text="Loading1"
              border
              fit
              stripe
              :header-cell-style="tableHeaderRowClassName"
              highlight-current-row
              ref="multipleTable1"
              height="100px"
            >
              <el-table-column align="center" label="序号" width="60" style="padding-top: 3px;">
                <template slot-scope="scope">{{ scope.$index + 1 }}</template>
              </el-table-column>
              <el-table-column label="派工单号" width="170">
                <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template>
              </el-table-column>
              <el-table-column label="报修人" width="100">
                <template slot-scope="scope">{{ scope.row.repairMan }}</template>
              </el-table-column>
              <el-table-column label="报修时间" width="150">
                <template slot-scope="scope">{{ scope.row.repairTime }}</template>
              </el-table-column>
              <el-table-column label="主要维修项目" width="170">
                <template slot-scope="scope">{{ scope.row.mainWorkitem}}</template>
              </el-table-column>
              <el-table-column label="最大业务类别" width="130">
                <template slot-scope="scope">{{ scope.row.maxBusinessType }}</template>
              </el-table-column>
              <el-table-column label="推荐项目" width="170">
                <template slot-scope="scope">{{ scope.row.recommendItem }}</template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="车辆维修信息" name="second" style="margin:0px;">
          <el-row :gutter="10">
            <el-col :span="17">
              <el-tabs type="border-card" v-model="activeName1" style="margin:0px;">
                <el-tab-pane label="维修项目" name="third" style="margin:0px;">
                  <el-table
                    v-loading="listLoading2"
                    :data="list2"
                    element-loading-text="Loading2"
                    border
                    fit
                    stripe
                    :header-cell-style="tableHeaderRowClassName"
                    highlight-current-row
                    ref="multipleTable2"
                    height="430px"
                  >
                    <el-table-column align="center" label="序号" width="60" style="padding-top: 3px;">
                      <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                    </el-table-column>
                    <el-table-column label="维修内容" width="170">
                      <template slot-scope="scope">{{ scope.row.repairwilist[0].wiName }}</template>
                    </el-table-column>
                    <el-table-column label="标准工时数" width="100">
                      <template slot-scope="scope">{{ scope.row.repairwilist[0].repairWiId }}</template>
                    </el-table-column>
                    <el-table-column label="维修班组" width="150">
                      <template slot-scope="scope">{{ scope.row.repairwilist[0].repairGroupName }}</template>
                    </el-table-column>
                    <el-table-column label="维修技师" width="170">
                      <template slot-scope="scope">{{ scope.row.repairwilist[0].repairEmpName }}</template>
                    </el-table-column>
                    <el-table-column label="质检时间+" width="130">
                      <template>
                        <el-date-picker
                          v-model="allParamet[0].repairwilist[0].checkDate"
                          type="datetime"
                          placeholder="选择日期时间"
                          :disabled="edit"
                        ></el-date-picker>
                      </template>
                    </el-table-column>
                    <el-table-column label="互检技师+" width="170">
                      <template>
                        <el-select
                          style="fontsize:80px;margin-left:0px;"
                          v-model="allParamet[0].checkemployeelist[0].empName"
                          size="small"
                          placeholder="请选择"
                          :disabled="edit"
                        >
                          <el-option
                            v-for="item in allParamet[0].checkemployeelist"
                            :key="item.empId"
                            :label="item.empName"
                            :value="item.empName"
                          ></el-option>
                        </el-select>
                      </template>
                    </el-table-column>
                    <el-table-column label="维修类别" width="170">
                      <template slot-scope="scope">{{ scope.row.repairwilist[0].repairTypeName }}</template>
                    </el-table-column>
                    <el-table-column label="是否追加" width="170">
                      <template slot-scope="scope">{{ scope.row.repairwilist[0].isAdd }}</template>
                    </el-table-column>
                    <el-table-column label="维修状态" width="170">
                      <template slot-scope="scope">{{ scope.row.repairwilist[0].repairStatusName }}</template>
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="维修备件" name="fourth" style="margin:0px;">
                  <el-table
                    v-loading="listLoading3"
                    :data="list3"
                    element-loading-text="Loading3"
                    border
                    fit
                    stripe
                    :header-cell-style="tableHeaderRowClassName"
                    highlight-current-row
                    ref="multipleTable3"
                    height="430px"
                  >
                    <el-table-column align="center" label="序号" width="60" style="padding-top: 3px;">
                      <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                    </el-table-column>
                    <el-table-column label="备件编号" width="170">
                      <template slot-scope="scope">{{ scope.row.repairpartlist[0].partNo }}</template>
                    </el-table-column>
                    <el-table-column label="备件名称" width="100">
                      <template slot-scope="scope">{{ scope.row.repairpartlist[0].partName }}</template>
                    </el-table-column>
                    <el-table-column label="需求数量" width="150">
                      <template slot-scope="scope">{{ scope.row.repairpartlist[0].partQty }}</template>
                    </el-table-column>
                    <el-table-column label="出库数量" width="170">
                      <template slot-scope="scope">{{ scope.row.repairpartlist[0].outQty }}</template>
                    </el-table-column>
                    <el-table-column label="退货数量" width="130">
                      <template slot-scope="scope">{{ scope.row.repairpartlist[0].returnQty }}</template>
                    </el-table-column>
                    <el-table-column label="维修类别" width="170">
                      <template slot-scope="scope">{{ scope.row.repairpartlist[0].repairTypeName }}</template>
                    </el-table-column>
                    <el-table-column label="是否追加" width="170">
                      <template slot-scope="scope">{{ scope.row.repairpartlist[0].isAdd }}</template>
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
              </el-tabs>
            </el-col>
            <el-col :span="7">
              <div class="filter-container filter-button">
                <el-button type="primary" :disabled="edit" @click="save()" size="small">保存</el-button>
                <el-button size="small" @click="quit()">退出</el-button>
              </div>
              <div class="filter-container filter-title">维修时间</div>
              <div class="filter-container filter-params">
                <el-row>
                  <el-col :span="22">
                    <label>开始时间</label>
                    <el-date-picker
                      v-model="allParamet[0].repairBeginDate"
                      type="datetime"
                      placeholder="选择日期时间"
                      :disabled="edit"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="22">
                    <label>结束时间</label>
                    <el-date-picker
                      v-model="allParamet[0].repairFinishDate"
                      type="datetime"
                      placeholder="选择日期时间"
                      :disabled="edit"
                    ></el-date-picker>
                  </el-col>
                </el-row>
              </div>
              <div class="filter-container filter-title">终检签字</div>
              <div class="filter-container filter-params">
                <el-row>
                  <el-col :span="24">
                    <label>质检员</label>
                    <el-select
                      style="fontsize:80px;margin-left:0px;"
                      v-model="allParamet[0].qualityCheckMan"
                      size="small"
                      placeholder="请选择"
                      :disabled="edit"
                    >
                      <el-option
                        v-for="item in allParamet[0].checkemployeelist"
                        :key="item.empId"
                        :label="item.empName"
                        :value="item.empName"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="24">
                    <label>终检时间</label>
                    <el-date-picker
                      v-model="allParamet[0].qualityFinishDate"
                      type="datetime"
                      placeholder="选择日期时间"
                      :disabled="edit"
                    ></el-date-picker>
                  </el-col>
                </el-row>
              </div>
              <div class="filter-container filter-title">维修费用预估</div>
              <div class="filter-container filter-params">
                <el-row>
                  <el-col :span="24">
                    <label>工时费</label>
                    <el-input v-model="allParamet[0].wiDueAmount" size="small" disabled="true"></el-input>
                  </el-col>
                  <el-col :span="24">
                    <label>备件费</label>
                    <el-input v-model="allParamet[0].partDueAmount" size="small" disabled="true"></el-input>
                  </el-col>
                  <el-col :span="24">
                    <label>其它费</label>
                    <el-input v-model="allParamet[0].otherDueAmount" size="small" disabled="true"></el-input>
                  </el-col>
                  <el-col :span="24">
                    <label>总费用</label>
                    <el-input v-model="allParamet[0].allDueAmount" size="small" disabled="true"></el-input>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>
<script>
import {
  seBuRepairOrderQueryMain,
  seBuRepairCheckQueryAll,
  seBuRepairCheckCancel,
  seBuWorkOrderQueryCheckVerifier,
  seBuRepairCheckMutationSave
} from "@/api/se/repair/maintain/seBuRepairCheck";
import LookupValue from "@/components/org/LookupValue";
import seCommonQueryServiceSaDDL from "@/components/se/seCommonQueryServiceSaDDL";
import { the_Height } from "@/components/se/seMixins/makeHeight";
import lableName from "@/components/lableName";
import { seApis } from "@/api/graphQLApiList/se";

export default {
  mixins: [the_Height],
  name: "testTbale",
  components: {
    LookupValue,
    seCommonQueryServiceSaDDL,
    lableName
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
      villageChooseVisible: false,
      UserChooseVisible: false,
      pageTotal:0,
      list: null,
      list1: null,
      list2: null,
      list3: null,
      edit: false,
      isAccident: false,
      isFirst: false,
      isClean: false,
      AACC: "AA",
      name: "服务代表",
      dialogTitle: "",
      pic: true,
      listLoading: false,
      listLoading1: false,
      listLoading2: false,
      listLoading3: false,
      dialogParamVisible: false,
      activeName: "second",
      activeName1: "third",
      isMul: false, //下拉框是否多选
      isshow: true, //是否显示值列表名称
      repairStatusLable: "维修状态",
      repairTypeCode: "SE0026", //维修估价单状态值编码
      pickerOptions1: "",
      pickerOptions: {
        disabledDate: time => {
          let endDateVal = this.ReOrderQuery.repairTimeBeg;
          if (endDateVal) {
            return time.getTime() > new Date(endDateVal).getTime();
          }
        }
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      },
      allParamet: [
        {
          repairOrderId: "",
          dlrCustNo: "",
          dlrId: "",
          repairOrderCode: "",
          carLicense: "",
          carId: "",
          vin: "",
          carBrandCode: "",
          carBrandCn: "",
          carColorName: "",
          carKeyNo: "",
          engineNo: "",
          carSeriesCn: "",
          carTypeCode: "",
          repairMan: "",
          repairTel: "",
          custName: "",
          custTel: "",
          saName: "",
          repairTime: "",
          preGetDate: "",
          isWait: "",
          isFirst: "",
          isClean: "",
          isAccident: "",
          oil: "",
          fastRepairType: "",
          csDesc: "",
          disposeInfo: "",
          repairDesc: "",
          dealRelustDesc: "",
          recommendItem: "",
          custCarRelationCode: "",
          mileage: "",
          repairOrderStatus: "",
          repairStatusName: "",
          updateControlId: "",
          isGather: "",
          repairBeginDate: "",
          repairFinishDate: "",
          wiDueAmount: "",
          partDueAmount: "",
          otherDueAmount: "",
          delayReason: "",
          delayPlot: "",
          cleanGroupNo: "",
          cleanFinishDate: "",
          qualityCheckMan: "",
          qualityFinishDate: "",
          buyDate: "",
          oemCode: "",
          groupCode: "",
          oemId: "",
          groupId: "",

          repairwilist: [
            {
              repairOrderId: "",
              repairWiId: "",
              wiCode: "",
              wiName: "",
              repairTypeName: "",
              saleWorkQty: "",
              repairStatus: "",
              repairStatusName: "",
              businessType: "",
              repairEmpName: "",
              repairGroupName: "",
              checkEmpId: "",
              checkEmpName: "",
              checkDate: "",
              isAdd: "",
              workDId: "",
              updateControlId: "",
              oemCode: "",
              groupCode: "",
              oemId: "",
              groupId: "",
              dlrId: ""
            }
          ],
          repairpartlist: [
            {
              partNo: "",
              partName: "",
              partQty: "",
              outQty: "",
              returnQty: "",
              repairTypeName: "",
              isAdd: "",
              oemCode: "",
              groupCode: "",
              oemId: "",
              groupId: "",
              dlrId: ""
            }
          ],
          dthistory: [
            {
              repairOrderCode: "",
              repairMan: "",
              repairTime: "",
              mainWorkitem: "",
              maxBusinessType: "",
              oemCode: "",
              groupCode: "",
              oemId: "",
              groupId: "",
              dlrId: "",
              dlrCode: ""
            }
          ],
          checkemployeelist: [
            {
              empId: "",
              empName: "",
              repairGroupId: "",
              groupName: "",
              oemCode: "",
              groupCode: "",
              oemId: "",
              groupId: ""
            }
          ],
          cleangrouplist: [
            {
              repairGroupId: "",
              workGroupCode: "",
              groupName: "",
              oemCode: "",
              groupCode: "",
              oemId: "",
              groupId: ""
            }
          ],
          carCustInfo: [
            {
              carOwnerId: "",
              dlrCustNo: "",
              custName: "",
              phone: "",
              custClassName: "",
              addr: "",
              mileage: "",
              remark: "",
              complain: "",
              birthDate: "",
              oemCode: "",
              groupCode: "",
              oemId: "",
              groupId: ""
            }
          ],
          caruserinfolist: [
            {
              dlrCustNo: "",
              custName: "",
              phone: "",
              addr: "",
              oemCode: "",
              groupCode: "",
              oemId: "",
              groupId: ""
            }
          ],
          repairgroup: [
            {
              repairGroupId: "",
              workGroupCode: "",
              groupName: "",
              workGroupType: "",
              oemCode: "",
              groupCode: "",
              oemId: "",
              groupId: "",
              dlrId: "",
              dlrCode: ""
            }
          ]
        }
      ],
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20
      },
      //查询条件绑定的参数
      ReOrderQuery: {
        //oemcode: "",
        //groupcode: "",
        dlrId: "",
        repairOrderCode: "",
        repairOrderId: "",
        repairMan: "",
        repairTel: "",
        repairTimeBeg: "",
        repairTimeEnd: "",
        carLicense: "",
        vin: "",
        saEmpId: "",
        cardNo: "",
        repairOrderStatus: "",
        isCancelBalance: "",
        queryType: "4000301",
        isAccurate: "1"

        //time: [],
      },
      //全部维修状态复选框状态
      isCancelBalance: "",
      //用于存主表的数据
      ReOrderTable: {
        repairOrderCode: "",
        carLicense: "",
        vin: "",
        custName: "",
        repairStatusName: "",
        isGather: "",
        repairMan: "",
        repairTel: "",
        repairTime: "",
        preGetDate: "",
        saName: "",
        repairOrderId: "",
        saEmpId: "",
        mileage: "",
        repairOrderStatus: "",
        isGather: "",
        carid: "",
        trunRepairDate: "",
        custTel: "",
        lastUpdatedDate: "",
        updateControlId: "",
        createdDate: "",
        engineNo: "",
        carBrandCode: "",
        cardNo: "",
        oemCode: "",
        groupCode: "",
        oemId: "",
        groupId: ""
      }, //维修历史纪录表格数据
      dthistory: {
        repairOrderCode: "",
        repairMan: "",
        repairTime: "",
        mainWorkitem: "",
        maxBuisnessType: "",
        recommendItem: ""
      },
      CheckVerifierList: [
        {
          repairOrderStatus: [
            {
              repairOrderId: "",
              repairOrderStatus: "",
              repairOrderStatusName: "",
              isGather: "",
              isGather: "",
              oemCode: "",
              groupCode: "",
              oemId: "",
              groupId: "",
              dlrId: ""
            }
          ],
          repairpartnotoutfull: [
            {
              repairOrderId: "",
              partNo: "",
              partName: "",
              partQty: "",
              outQty: "",
              notoutpart: "",
              oemCode: "",
              groupCode: "",
              oemId: "",
              groupId: "",
              dlrId: ""
            }
          ]
        }
      ]
    };
  },
  created() {
    this.timeInitialization();
  },
  methods: {
    getBrandCode(val) {
      this.listQuery.brandCode = val;
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.queryMainData()
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.queryMainData()
    },
    ShowUserChoose() {
      this.UserChooseVisible = true;
    },
    getUserChooseCode() {
      this.UserChooseVisible = false;
    },
    ShowVillageChoose() {
      this.villageChooseVisible = true;
    },
    getVillageChooseCode() {
      this.villageChooseVisible = false;
    },
    //获取维修状态下拉框的值
    getRepairStatus(val) {
      this.ReOrderQuery.repairOrderStatus = val;
    },
    //初始化时间查询默认为7天
    timeInitialization() {
      var now = new Date();
      var year = now.getFullYear(); //得到年份
      var month = now.getMonth() + 1; //得到月份
      var formatedMonth = ("0" + month).slice(-2);
      var date = now.getDate(); //得到日期
      var formatedDate = ("0" + date).slice(-2);
      // month = month + 1;
      // if (month < 10) month = "0" + month;
      // if (date < 10) date = "0" + date;
      //var d = year + "-" + month + "-" + date;
      var d =
        year +
        "-" +
        formatedMonth +
        "-" +
        formatedDate +
        " " +
        "00" +
        ":" +
        "00" +
        ":" +
        "00";
      var k = new Date(d);
      k.setDate(k.getDate() - 7);
      this.ReOrderQuery.repairTimeEnd = d;
      //this.ReOrderQuery.repairTimeBeg = k.getFullYear() + "-" + (k.getMonth() + 1) + "-" + k.getDate();
      this.ReOrderQuery.repairTimeBeg =
        k.getFullYear() +
        "-" +
        ("0" + (k.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + k.getDate()).slice(-2) +
        " " +
        "00" +
        ":" +
        "00" +
        ":" +
        "00";
      this.getriqi();
      this.getriqi1();
    },
    //重置查询参数
    removeQueryParam() {
      this.ReOrderQuery.dlrId = "";
      this.ReOrderQuery.repairOrderCode = "";
      this.ReOrderQuery.repairOrderId = "";
      this.ReOrderQuery.repairMan = "";
      this.ReOrderQuery.repairTel = "";
      this.ReOrderQuery.repairTimeBeg = "";
      this.ReOrderQuery.repairTimeEnd = "";
      this.ReOrderQuery.carLicense = "";
      this.ReOrderQuery.vin = "";
      this.ReOrderQuery.saEmpId = "";
      this.ReOrderQuery.cardNo = "";
      this.ReOrderQuery.repairOrderStatus = "";
      this.ReOrderQuery.isCancelBalance = "";
      this.isCancelBalance = "";
      (this.pickerOptions1 = {
        disabledDate(time) {
          return time.getTime() < 0;
        }
      }),
        (this.pickerOptions = {
          disabledDate(time) {
            return time.getTime() < 0;
          }
        }),
        this.$refs.AA.reset();
      this.timeInitialization();
    },
    //查询按钮
    queryMainData() {
      this.listLoading = true;
      if (this.isCancelBalance == true) {
        this.ReOrderQuery.isCancelBalance = "1";
      } else {
        this.ReOrderQuery.isCancelBalance = "0";
      }
      seBuRepairOrderQueryMain(
        this.listQuery.pageSize,
        this.listQuery.pageIndex,
        this.ReOrderQuery
      ).then(response => {
        if (response.data.seBuRepairOrderQueryMain.result == "1") {
          this.list = response.data.seBuRepairOrderQueryMain.rows;
          this.pageTotal=response.data.seBuRepairOrderQueryMain.records;
          this.listLoading = false;
        }
        //this.removeQueryParam();
      });
    },
    //取消复核
    cancel() {
      if (this.$refs.multipleTable.selection.length == 0) {
        this.$alert("请选择数据行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      this.ReOrderTable = this.$refs.multipleTable.selection;
      let cancel = {};
      cancel.repairOrderId = this.ReOrderTable[0].repairOrderId;
      cancel.updateControlId = this.ReOrderTable[0].updateControlId;
      var int = this.ReOrderTable[0].repairOrderStatus;
      if (int==31016) {
        seBuRepairCheckCancel(cancel).then(response => {
          if (response.data[seApis.seBuRepairCheckCancel.ServiceCode].result == 1) {
            this.$alert("撤销成功", "提示", {
              confirmButtonText: "确定",
              type: "success"
            });
            this.queryMainData();
          } else {
            this.$alert("撤销失败", "提示", {
              confirmButtonText: "确定",
              type: "warning"
            });
            this.queryMainData();
            return;
          }
        });
      } else {
        this.$alert("派工单不是质检完毕状态，不能撤销复核", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
    },
    //打开弹窗并进行维修复核校验
    openTable() {
      if (this.$refs.multipleTable.selection.length == 0) {
        this.$alert("请选择数据行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      if (this.$refs.multipleTable.selection.length != 1) {
        this.$alert("请选择一行据行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      this.ReOrderTable = this.$refs.multipleTable.selection;
      let queryCheck = {};
      queryCheck.repairOrderId = this.ReOrderTable[0].repairOrderId;
      queryCheck.dlrId = this.ReOrderTable[0].dlrId;
      seBuWorkOrderQueryCheckVerifier(
        this.listQuery.pageSize,
        this.listQuery.pageIndex,
        queryCheck
      ).then(response => {
        this.CheckVerifierList =
          response.data.seBuWorkOrderQueryCheckVerifier.rows;
        var Sta = this.CheckVerifierList.repairOrderStatus;
        if (Sta == 31011) {
          this.$alert("派工单已交车，只能查看！", "提示", {
            confirmButtonText: "确定",
            type: "warning",
            callback: action => {
              this.edit = true;
              //调用维修复核详情初始化方法
              this.QueryAll();
            }
          });
        } else if (Sta == 31010) {
          this.$alert("派工单结算进行中，只能查看！", "提示", {
            confirmButtonText: "确定",
            type: "warning",
            callback: action => {
              this.edit = true;
              //调用维修复核详情初始化方法
              this.QueryAll();
            }
          });
        } else {
          this.edit = false;
          //调用维修复核详情初始化方法
          this.QueryAll();
        }
      });
    },

    //发出维修复核详情初始化请求
    QueryAll() {
      let queryAllData = {};
      queryAllData.repairOrderId = this.ReOrderTable[0].repairOrderId;
      queryAllData.updateControlId = this.ReOrderTable[0].updateControlId;
      seBuRepairCheckQueryAll(
        this.listQuery.pageSize,
        this.listQuery.pageIndex,
        queryAllData
      ).then(response => {
        
        this.list1 =
          response.data.seBuRepairCheckQueryAllRD.rows[0].dthistory;
          debugger
        this.allParamet = response.data.seBuRepairCheckQueryAllRD.rows;
        this.allParamet[0].allDueAmount =
          parseFloat(this.allParamet[0].wiDueAmount) +
          parseFloat(this.allParamet[0].partDueAmount) +
          parseFloat(this.allParamet[0].otherDueAmount);
        this.list2 = this.allParamet;
        this.list3 = this.allParamet;
        if (this.allParamet[0].isFirst == "1") {
          this.isFirst = true;
        }
        if (this.allParamet[0].isClean == "1") {
          this.isClean = true;
        }
        if (this.allParamet[0].isAccident == "1") {
          this.isAccident = true;
        }
        this.dialogParamVisible = true;
      });
    },
    //弹窗退出
    quit() {
      this.dialogParamVisible = false;
    },
    //弹框保存
    save() {
      seBuRepairCheckMutationSave(this.allParamet).then(response => {
        if (response.data.seBuRepairCheckMutationSave.result == 1) {
          this.$alert("保存成功", "提示", {
            confirmButtonText: "确定",
            type: "success"
          });
          this.quit();
          this.queryMainData();
        } else {
          this.$alert("保存失败", "提示", {
            confirmButtonText: "确定",
            type: "warning"
          });
          this.quit();
          this.queryMainData();
          return;
        }
      });
    },
    //获取服务代表
    getServiceSaDDL(val) {
      this.ReOrderQuery.saEmpId = val;
    },
    getriqi() {
      var riqi = new Date(this.ReOrderQuery.repairTimeBeg);
      this.pickerOptions1 = {
        disabledDate(time) {
          return time.getTime() <= riqi;
        }
      };
    },
    getriqi1() {
      var riqi = new Date(this.ReOrderQuery.repairTimeEnd);
      this.pickerOptions = {
        disabledDate(time) {
          return time.getTime() >= riqi;
        }
      };
    },
    loadmore() {
      if (this.pic) {
        this.pic = false;
      } else {
        this.pic = true;
      }
    }
  }
};
</script>
<!--<style lang="scss" scoped>
.el-input__inner {
  height: 28px;
  line-height: 28px;
}
.el-tabs--border-card > .el-tabs__content {
  padding: 0px;
}
.filter-params .el-col {
  padding-left: 13px;
  padding-right: 13px;
  margin-bottom: 10px;
}
/deep/.el-dialog .el-dialog__body {
  padding-top: 0px;
}
.el-dialog .el-dialog__header {
  padding: 10px 20px;
  height: 0px;
  line-height: 40px;
  text-align: left;
}
/deep/.div.el-col.el-col-6 {
  margin-left: 4px !important;
}
</style>-->