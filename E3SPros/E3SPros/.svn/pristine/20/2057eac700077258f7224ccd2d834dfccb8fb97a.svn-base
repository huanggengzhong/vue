<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <!--<el-radio-group v-model="ReOrderQuery.repairOrderStatus">
        <el-radio :label="1">未派工</el-radio>
        <el-radio :label="2">全部维修状态</el-radio>
      </el-radio-group>-->
      <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
      <el-button size="small" @click="browse()">浏览</el-button>
      <el-button size="small" @click="entrustMaintain()">委托维修派工</el-button>
      <el-button size="small" @click="revocationWork()">撤销派工</el-button>
      <el-button size="small" @click="removeOrderQueryParam()">重置</el-button>
    </div>

    <!--<div class="filter-container filter-title" ref="conTitleHeight">查询区</div>-->
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <el-col :span="22">
          <el-row>
            <el-col :span="12">
              <label>报修时间</label>
              <el-date-picker
                v-model="repairDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                unlink-panels
                value-format="yyyy-MM-dd HH:mm:ss"
                format="yyyy-MM-dd HH:mm:ss"
                @change="getRepairTime"
              ></el-date-picker>
            </el-col>
            <!-- <el-col :span="6">
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
            </el-col>-->
            <!-- <el-col :span="6">
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
            </el-col>-->
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
              <el-input v-model="ReOrderQuery.repairTel" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="6">
              <label>施工单号</label>
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
      ref="multipleTable"
      :height="tableHeight"
    >
      <el-table-column align="center" label="序号" width="60" style="padding-top: 3px;">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column type="selection" width="40" label="选择+" />
      <el-table-column label="施工单号" width="100">
        <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template>
      </el-table-column>
      <el-table-column label="车牌号" width="100">
        <template slot-scope="scope">{{ scope.row.carLicense }}</template>
      </el-table-column>
      <el-table-column label="VIN" width="100">
        <template slot-scope="scope">{{ scope.row.vin }}</template>
      </el-table-column>
      <el-table-column label="车主" width="100">
        <template slot-scope="scope">{{ scope.row.custName }}</template>
      </el-table-column>
      <el-table-column label="维修状态" width="100">
        <template slot-scope="scope">{{ scope.row.repairStatusName }}</template>
      </el-table-column>
      <el-table-column label="收款状态" width="100">
        <template slot-scope="scope">{{ scope.row.isGatherName }}</template>
      </el-table-column>
      <el-table-column label="报修人" width="100">
        <template slot-scope="scope">{{ scope.row.repairMan }}</template>
      </el-table-column>
      <el-table-column label="报修人电话" width="110">
        <template slot-scope="scope">{{ scope.row.repairTel }}</template>
      </el-table-column>
      <el-table-column label="报修时间" width="130">
        <template slot-scope="scope">{{ scope.row.repairTime }}</template>
      </el-table-column>
      <el-table-column label="预交车时间" width="100">
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
        <template slot-scope="scope">{{ scope.row.carId }}</template>
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

    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogParamVisible"
      center
      width="80%"
      style="margin:0px;"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
      <el-tabs type="border-card" style="margin:0px;">
        <el-tab-pane label="客户信息" style="margin:0px;">
          <div class="filter-container filter-title">客户信息</div>
          <div class="filter-container filter-params">
            <el-row :gutter="10">
              <el-col :span="8">
                <label>车主姓名</label>
                <el-input v-model="custInfoObject.custName" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>车主电话</label>
                <el-input v-model="custInfoObject.custTel" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>用车人姓名</label>
                <el-input v-model="custInfoObject.custName" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>用车人电话</label>
                <el-input v-model="custInfoObject.custTel" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>客户备注</label>
                <el-input
                  type="textarea"
                  v-model="custInfoObject.remark"
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
                <label>VIN</label>
                <el-input v-model="carInfoOBject.vin" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>车牌号</label>
                <el-input v-model="carInfoOBject.carLicense" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>车辆品牌</label>
                <el-input v-model="carInfoOBject.carBrandCn" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>车系</label>
                <el-input v-model="carInfoOBject.carSeriesCn" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>车型</label>
                <el-input v-model="carInfoOBject.carType" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>车辆颜色</label>
                <el-input v-model="carInfoOBject.carColorName" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>发动机号</label>
                <el-input v-model="carInfoOBject.engineNo" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>电池编号</label>
                <el-input
                  v-model="carInfoOBject.batteryNumber"
                  placeholder="请输入内容"
                  :disabled="true"
                ></el-input>
              </el-col>
            </el-row>
          </div>
          <div class="filter-container filter-title">单据信息</div>
          <div class="filter-container filter-params">
            <el-row :gutter="10">
              <el-col :span="8">
                <label>施工单号</label>
                <el-input
                  v-model="billInfoObject.repairOrderCode"
                  placeholder="请输入内容"
                  disabled="true"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <label>报修人</label>
                <el-input v-model="billInfoObject.repairMan" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>报修人电话</label>
                <el-input v-model="billInfoObject.repairTel" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>服务代表</label>
                <el-input v-model="billInfoObject.saName" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>送修时间</label>
                <el-input v-model="billInfoObject.repairTime" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>预计交车时间</label>
                <el-input v-model="billInfoObject.preGetDate" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>行驶里程</label>
                <el-input v-model="billInfoObject.mileage" placeholder="请输入内容" :disabled="true"></el-input>
              </el-col>
            </el-row>
          </div>
          <div class="filter-container filter-title">维修履历</div>
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
              <el-table-column label="施工单号" width="170" align="center" >
                <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template>
              </el-table-column>
              <el-table-column label="报修人" width="100" align="center" >
                <template slot-scope="scope">{{ scope.row.repairMan }}</template>
              </el-table-column>
              <el-table-column label="报修时间" width="150" align="center" >
                <template slot-scope="scope">{{ scope.row.repairTime }}</template>
              </el-table-column>
              <el-table-column label="主要维修项目" width="170" align="center" >
                <template slot-scope="scope">{{ scope.row.mainWorkitem }}</template>
              </el-table-column>
              <el-table-column label="业务类别" width="100" align="center" >
                <template slot-scope="scope">{{ scope.row.maxBusinessType }}</template>
              </el-table-column>
              <el-table-column label="推荐项目" width="100" align="center" >
                <template slot-scope="scope">{{ scope.row.recommendItem }}</template>
              </el-table-column>
              <el-table-column label="维修经销商" width="100" align="center" >
                <template slot-scope="scope">{{ scope.row.dlrShortName }}</template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="维修信息">
          <el-row :gutter="20">
            <el-col :span="17">
              <div class="filter-container filter-title">维修工项</div>
              <div class="filter-container filter-params">
                <el-table
                  v-loading="listLoading2"
                  :data="list2"
                  element-loading-text="Loading2"
                  border
                  fit
                  stripe
                  :row-class-name="tableRowClassName"
                  :header-cell-style="tableHeaderRowClassName"
                  highlight-current-row
                  ref="multipleTable2"
                  height="100px"
                >
                  <el-table-column align="center" label="序号" width="60" style="padding-top: 3px;">
                    <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                  </el-table-column>
                  <el-table-column label="维修内容" width="100" align="center" >
                    <template slot-scope="scope">{{ scope.row.wiName }}</template>
                  </el-table-column>
                  <el-table-column label="销售工时数" width="100" align="center" >
                    <template slot-scope="scope">{{ scope.row.saleWorkQty }}</template>
                  </el-table-column>
                  <el-table-column label="维修班组+" width="100" align="center" >
                    <template slot-scope="{row}">
                      <el-select
                        style="fontsize:80px;margin-left:0px;"
                        v-model="row.repairGroupId"
                        size="small"
                        placeholder="请选择"
                        @change="groupChanged(row)"
                        :disabled="edit2"
                      >
                        <el-option
                          v-for="(item,i) in repairgroupParam"
                          :key="`repairgroupParam_${i}`"
                          :label="item.text"
                          :value="item.code"
                        >{{item.text}}</el-option>
                      </el-select>
                    </template>
                  </el-table-column>
                  <el-table-column label="维修技师+" width="100" align="center" >
                    <template slot-scope="{row}">
                      <el-select
                        style="fontsize:80px;margin-left:0px;"
                        v-model="row.empId"
                        size="small"
                        placeholder="请选择"
                        :disabled="edit2"
                      >
                        <el-option
                          v-for="(item,i) in row.option"
                          :key="`checkEmployeeListParam_${i}`"
                          :label="item.text"
                          :value="item.code"
                        >{{item.text}}</el-option>
                      </el-select>
                    </template>
                  </el-table-column>
                  <el-table-column label="维修类别" width="80" align="center" >
                    <template slot-scope="scope">{{ scope.row.repairTypeName }}</template>
                  </el-table-column>
                  <el-table-column label="维修状态" width="80" align="center" >
                    <template slot-scope="scope">{{ scope.row.repairStatusName }}</template>
                  </el-table-column>
                  <el-table-column label="是否追加" width="77" align="center" >
                    <template slot-scope="scope">{{ scope.row.isAddName }}</template>
                  </el-table-column>
                  <el-table-column label="施工单ID" width="77" v-if="false">
                    <template slot-scope="scope">{{ scope.row.repairOrderId}}</template>
                  </el-table-column>
                  <el-table-column label="标准工时" width="77" v-if="false">
                    <template slot-scope="scope">{{ scope.row.wiRepairQty}}</template>
                  </el-table-column>
                  <el-table-column label="工时编码" width="77" v-if="false">
                    <template slot-scope="scope">{{ scope.row.wiCode}}</template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="filter-container filter-title">维修备件</div>
              <div class="filter-container filter-params">
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
                  height="100px"
                >
                  <el-table-column align="center" label="序号" width="60" style="padding-top: 3px;">
                    <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                  </el-table-column>
                  <el-table-column label="备件编号" width="160" align="center" >
                    <template slot-scope="scope">{{ scope.row.partNo }}</template>
                  </el-table-column>
                  <el-table-column label="备件名称" width="140" align="center" >
                    <template slot-scope="scope">{{ scope.row.partName }}</template>
                  </el-table-column>
                  <el-table-column label="数量" width="120" align="center" >
                    <template slot-scope="scope">{{ scope.row.partQty }}</template>
                  </el-table-column>
                  <el-table-column label="维修类别" width="125" align="center" >
                    <template slot-scope="scope">{{ scope.row.repairTypeName }}</template>
                  </el-table-column>
                  <el-table-column label="是否追加" width="91" align="center" >
                    <template slot-scope="scope">{{ scope.row.isAddname }}</template>
                  </el-table-column>
                </el-table>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="filter-container filter-button">
                <el-button type="primary" :disabled="edit" size="small" @click="save()">保存</el-button>
                <el-button size="small" @click="quit()">退出</el-button>
              </div>
              <div class="filter-container filter-title">维修时间</div>
              <div class="filter-container filter-params timeA">
                <el-row>
                  <el-col>
                    <label>选择时间</label>
                    <el-date-picker
                      v-model="repairDateDe"
                      type="datetimerange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      unlink-panels
                      value-format="yyyy-MM-dd HH:mm:ss"
                      format="yyyy-MM-dd HH:mm:ss"
                      @change="getRepairTimeDe"
                      :span="12"
                    ></el-date-picker>
                  </el-col>
                  <!-- <el-col :span="22">
                    <label>开始时间</label>
                    <el-date-picker
                      v-model="allParamet[0].repairBeginDate"
                      type="datetime"
                      placeholder="选择日期时间"
                      :picker-options="pickerOptions2"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      format="yyyy-MM-dd HH:mm:ss"
                      :disabled="edit"
                      @change="getriqi2"
                    ></el-date-picker>
                  </el-col>-->
                  <!-- <el-col :span="22">
                    <label>结束时间</label>
                    <el-date-picker
                      v-model="allParamet[0].repairFinishDate"
                      type="datetime"
                      placeholder="选择日期时间"
                      :picker-options="pickerOptions3"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      format="yyyy-MM-dd HH:mm:ss"
                      :disabled="edit"
                      @change="getriqi3"
                    ></el-date-picker>
                  </el-col>-->
                </el-row>
                <div class="filter-container filter-title">送修问题</div>
                <el-row>
                  <el-input v-model="allParamet[0].csDesc" placeholder="请输入内容" :disabled="true"></el-input>
                </el-row>
                <div class="filter-container filter-title">处理方法和检查结果</div>
                <el-row>
                  <el-input
                    v-model="allParamet[0].disposeInfo"
                    placeholder="请输入内容"
                    :disabled="true"
                  ></el-input>
                </el-row>
                <div class="filter-container filter-title">处理方法和检查结果</div>
                <el-row>
                  <el-input
                    v-model="allParamet[0].dealRelustDesc"
                    placeholder="请输入内容"
                    :disabled="true"
                  ></el-input>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <div class="filter-container filter-title">维修费用预估</div>
            <div class="filter-container filter-params">
              <el-col :span="8">
                <label>工时费</label>
                <el-input v-model="dueFeeInfoObject.wiDueAmount" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>备件费</label>
                <el-input v-model="dueFeeInfoObject.partDueAmount" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>其它费</label>
                <el-input v-model="dueFeeInfoObject.otherDueAmount" :disabled="true"></el-input>
              </el-col>
              <el-col :span="8">
                <label>总费用</label>
                <el-input v-model="dueFeeInfoObject.allDueAmount" :disabled="true"></el-input>
              </el-col>
            </div>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>
<script>
import {
  seBuRepairOrderQueryMain,
  seBuWorkOrderMutationCancel,
  seBuWorkOrderQueryFindAllRD,
  seBuWorkOrderMutationSave
} from "@/api/se/repair/maintain/seBuRepairWork";
import {
  doSeDbRepairGroupTechQuery,
  doSeDbRepairGroupQuery
} from "@/api/se/basedata/seDbRepairGroup";
import carBrand from "@/components/org/carBrand/carBrand";
import { seApis } from "@/api/graphQLApiList/se";
import villageChoose from "@/components/org/villageChoose/villageChoose";
import seCommonQueryServiceSaDDL from "@/components/se/seCommonQueryServiceSaDDL";
import { the_Height } from "@/components/se/seMixins/makeHeight";
export default {
  mixins: [the_Height],
  name: "testTbale",
  components: {
    carBrand,
    villageChoose,
    seCommonQueryServiceSaDDL
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
      repairDate: [],
      repairDateDe: [],
      selectRepairGroupData: "",
      dlrId: "",
      villageChooseVisible: false,
      UserChooseVisible: false,
      dialogParamVisible: false,
      dialogTitle: "",
      code: "1",
      list: null,
      list1: null,
      list2: null,
      listD: [],
      list3: null,
      isMul: false,
      name: "服务代表",
      listLoading: false,
      listLoading1: false,
      listLoading2: false,
      listLoading3: false,
      edit: false,
      edit2: false,
      select2: [],
      pic: true,
      pickerOptions1: "",
      pickerOptions3: "",
      pickerOptions: {
        disabledDate: time => {
          let endDateVal = this.ReOrderQuery.repairTimeBeg;
          if (endDateVal) {
            return time.getTime() > new Date(endDateVal).getTime();
          }
        }
      },
      pickerOptions2: {
        disabledDate: time => {
          let endDateVal = this.allParamet[0].repairBeginDate;
          if (endDateVal) {
            return time.getTime() > new Date(endDateVal).getTime();
          }
        }
      },

      //维修班组下拉框数据
      repairgroupParam: [
        {
          repairGroupId: "",
          workGroupCode: "",
          groupName: "",
          workGroupType: ""
        }
      ],
      //维修技师下拉框数据
      checkEmployeeListParam: [
        {
          empId: "",
          empName: "",
          repairGroupId: "",
          groupName: ""
        }
      ],
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      },
      pageTotal: 0,
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
        queryType: "4000301",
        isAccurate: "0"
      },
      //浏览查询参数
      findAllRDParam: {
        oemCode: "",
        groupCode: "",
        repairOrderId: "",
        dlrId: "202"
      },
      //撤销派工参数
      seBuWorkCancelParam: {
        repairOrderId: "",
        updateControlId: ""
      },
      //客户信息集合
      custInfoObject: {
        custName: "", //车主姓名？
        custTel: "", //车主电话？
        custName: "", //用车人姓名？
        custTel: "", //用车人电话？
        remark: "" //客户备注
      },
      //车辆信息集合
      carInfoOBject: {
        vin: "",
        carLicense: "", //车牌号
        carBrandCn: "", //车辆品牌
        carSeriesCn: "", //车系
        carTypeCn: "", //车型
        carColorName: "", //车辆颜色
        engineNo: "", //发动机号
        batteryNumber: "" //电池编号(缺失)
      },
      //单据信息集合
      billInfoObject: {
        repairOrderCode: "", //施工单号
        repairMan: "", //报修人
        repairTel: "", //报修人电话
        saName: "", //服务代表
        repairTime: "", //送修时间(是否为报修时间)？
        preGetDate: "", //预计交车时间
        mileage: 0 //行驶里程，默认为0
      },
      //维修费用预估
      dueFeeInfoObject: {
        wiDueAmount: "", //工时费用
        partDueAmount: "", //备件费用
        otherDueAmount: "", //其他费用
        repairDueAmount: "" //总费用(缺失) (是否为工单应收总费用)？
      },
      //维修时间
      repairTimeObject: {
        //维修开始时间(缺失)
        //维修结束时间(缺失)
      },
      //送修问题
      csDesc: "",
      //处理方法
      disposeInfo: "",
      //检查结果
      dealRelustDesc: "",

      //表格绑定的参数
      // ReOrder: {
      //   repairOrderCode: "",
      //   carLicense: "",
      //   vin: "",
      //   custName: "",
      //   repairStatusName: "",
      //   isGatherName: "",
      //   repairMan: "",
      //   repairTel: "",
      //   repairTime: "",
      //   preGetDate: "",
      //   saName: "",
      //   repairOrderId: "",
      //   saEmpId: "",
      //   mileage: "",
      //   repairOrderStatus: "",
      //   repairStatusName: "",
      //   isGather: "",
      //   carid: "",
      //   trunRepairDate: "",
      //   custTel: "",
      //   lastUpdatedDate: "",
      //   updateControlId: "",
      //   createdDate: "",
      //   engineNo: "",
      //   carBrandCode: "",
      //   cardNo: "",
      //   oemCode: "",
      //   groupCode: "",
      //   oemId: "",
      //   groupId: ""
      // },
      allParamet: [
        {
          allDueAmount: "",
          batteryNumber: "",
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
          policyCompanyId: "",
          repairBeginDate: "",
          repairFinishDate: "",
          wiDueAmount: "",
          partDueAmount: "",
          otherDueAmount: "",
          buyDate: "",
          oemCode: "",
          groupCode: "",
          oemId: "",
          groupId: "",
          dlrCode: "",
          dtowner: [],
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
          groupId: "",
          dtuser: [],
          dlrCustNo: "",
          custName: "",
          phone: "",
          addr: "",
          oemCode: "",
          groupCode: "",
          oemId: "",
          groupId: "",
          dtwidata: [],
          repairOrderId: "",
          repairWiId: "",
          wiCode: "",
          wiName: "",
          repairTypeCode: "",
          repairTypeName: "",
          saleWiQty: "",
          workWiQty: "",
          repairStatus: "",
          repairStatusName: "",
          planBegDate: "",
          planEndDate: "",
          isAdd: "",
          workDId: "",
          dtpartdata: [],
          partNo: "",
          partName: "",
          partQty: "",
          outQty: "",
          returnQty: "",
          repairTypeName: "",
          isAdd: "",
          dthistory: [],
          repairOrderCode: "",
          repairMan: "",
          repairTime: "",
          mainWorkitem: "",
          recommendItem: "",
          maxBusinessType: "",
          oemCode: "",
          groupCode: "",
          oemId: "",
          groupId: "",
          dlrId: "",
          dlrCode: "",
          cleanGroupList: [
            {
              repairGroupId: "",
              workGroupCode: "",
              groupName: "",
              workGroupType: ""
            }
          ],
          oemCode: "",
          groupCode: "",
          oemId: "",
          groupId: "",
          dlrId: "",
          dlrCode: "",
          repairemp: [
            {
              empId: "",
              empName: "",
              repairGroupId: "",
              groupName: ""
            }
          ],
          oemCode: "",
          groupCode: "",
          oemId: "",
          groupId: "",
          dlrId: "",
          dlrCode: "",
          dlrShortName: "",
          groupName: ""
        }
      ],
      cleanGroupList: [
        //维修班组数据
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
      ],
      checkEmployeeList: [
        {
          empId: "",
          empName: "",
          repairGroupId: "",
          groupName: "",
          oemCode: "",
          groupCode: "",
          oemId: "",
          groupId: "",
          dlrId: "",
          dlrCode: ""
        }
      ]
    };
  },
  created() {
    var now = new Date();
    let beginDate = this.$utils.parseTime(now, "{y}-{m}-{d}");
    beginDate += " 00:00:00";
    now.setTime(now.getTime() - 7 * 24 * 3600 * 1000);
    let endDate = this.$utils.parseTime(now, "{y}-{m}-{d}");
    endDate += " 00:00:00";
    this.repairDate = [];
    this.repairDate.push(endDate);
    this.repairDate.push(beginDate);
    // this.timeInitialization();
  },
  methods: {
    getBrandCode(val) {
      this.listQuery.brandCode = val;
    },
    //维修默认时间
    repairFirstTime() {
      var now = new Date();
      // var year = date.getFullYear();
      // var month = date.getMonth() + 1;
      // var day = date.getDate();
      // var hour = date.getHours();
      // var minute = date.getMinutes();
      // var second = date.getSeconds();
      // endDate += " 00:00:00";
      let endDate = this.$utils.parseTime(now, "{y}-{m}-{d} {h}:{i}:{s}");
      now.setHours(now.getHours() + 1);
      let beginDate = this.$utils.parseTime(now, "{y}-{m}-{d} {h}:{i}:{s}");
      this.repairDateDe = [];
      this.repairDateDe.push(endDate);
      this.repairDateDe.push(beginDate);
    },
    //获取查询时间
    getRepairTime(val) {
      this.ReOrderQuery.repairTimeBeg = val[0];
      this.ReOrderQuery.repairTimeEnd = val[1];
    },
    getRepairTimeDe(val) {
      this.allParamet[0].repairBeginDate = val[0];
      this.allParamet[0].repairFinishDate = val[1];
    },
    //查询请求后台
    fetchData() {
      this.listLoading = true;
      this.ReOrderQuery.repairTimeBeg = this.repairDate[0];
      this.ReOrderQuery.repairTimeEnd = this.repairDate[1];
      seBuRepairOrderQueryMain(
        this.listQuery.pageSize,
        this.listQuery.pageIndex,
        this.ReOrderQuery
      ).then(response => {
        if (response.data.seBuRepairOrderQueryMain.result == "1") {
          this.list = response.data.seBuRepairOrderQueryMain.rows;
          this.pageTotal = response.data.seBuRepairOrderQueryMain.records;
          this.listLoading = false;
          //this.removeOrderQueryParam();
        }
      });
    },
    //查询维修班组
    queryBZ() {
      const that = this;
      var pageSize = -1;
      var pageIndex = -1;
      let dlrId = "202";
      // var selection = this.$refs.multipleTable.selection;
      // this.findAllRDParam.repairOrderId = selection[0].repairOrderId;

      doSeDbRepairGroupQuery(pageSize, pageIndex, { dlrId }).then(response => {
        if (
          response.data[seApis.SeDbRepairGroupQuery.ServiceCode].result === "1"
        ) {
          let list =
            response.data[seApis.SeDbRepairGroupQuery.ServiceCode].rows;
          //第一次加载，下拉框
          var temp_array = [];
          list.forEach(row => {
            if (
              temp_array.filter(o => o.code == row.repairGroupId).length === 0
            ) {
              temp_array.push({
                code: row.repairGroupId,
                text: row.groupName
              });
            }
          });
          this.repairgroupParam = temp_array;
        }
      });
    },
    //查询维修技师
    queryJS(val) {
      const that = this;
      let isEnable = "1";
      // let dlrId = this.$store.getters.orgInfo.DLR_ID;
      let dlrId = "202";
      //  let that = this;
      // this.repairGroupTechData = [];
      // this.listLoading = true;
      // let repairGId = val;
      // let isEnable = "1"; //只查询状态为在职的技师
      // that.selectRepairGroupData.dataInfo.repairGroupId = repairGId;
      // that.selectRepairGroupData.dataInfo.isEnable = isEnable;
      // that.selectRepairGroupData.dataInfo.dlrId = this.dlrId;

      // that.selectRepairGroupData.pageSize = 1000,
      // that.selectRepairGroupData.pageIndex =1
      doSeDbRepairGroupTechQuery(1000, 1, {
        dlrId,
        isEnable,
        repairGroupId: val.repairGroupId
      }).then(response => {
        var resData =
          response.data[seApis.SeDbRepairGroupTechQuery.ServiceCode].rows;

        if (resData.length == 0) {
          this.checkEmployeeListParam = [];
          return;
        } else {
          val.option = [];
          resData.forEach(row => {
            val.option.push({
              code: row.empId,
              text: row.empName
              // code: row[0].checkEmployeeList.empId,
              // text: row[0].checkEmployeeList.empName
            });
          });
        }
      });
    },
    //浏览--查询派工详情
    browse() {
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
        this.$refs.multipleTable.clearSelection();
        return;
      }

      this.dialogParamVisible = true;
      this.edit = true;
      this.edit2 = true;
      //this.ReOrder = this.$refs.multipleTable.selection;
      this.findAllRDParam.repairOrderId = this.$refs.multipleTable.selection[0].repairOrderId;
      seBuWorkOrderQueryFindAllRD(
        this.listQuery.pageSize,
        this.listQuery.pageIndex,
        this.findAllRDParam
      ).then(response => {
        if (response.data.seBuWorkOrderQueryFindAllRD.result == "1") {
          var rows = response.data.seBuWorkOrderQueryFindAllRD.rows;
          console.log("rows");
          console.log(rows);
          //客户信息
          this.custInfoObject.custName = rows[0].custName;
          this.custInfoObject.custTel = rows[0].custTel;
          this.custInfoObject.remark = rows[0].remark;
          //车辆信息
          this.carInfoOBject.vin = rows[0].vin;
          this.carInfoOBject.carLicense = rows[0].carLicense;
          this.carInfoOBject.carBrandCn = rows[0].carBrandCn;
          this.carInfoOBject.carSeriesCn = rows[0].carSeriesCn;
          this.carInfoOBject.carTypeCn = rows[0].carTypeCn;
          this.carInfoOBject.carColorName = rows[0].carColorName;
          this.carInfoOBject.engineNo = rows[0].engineNo;
          this.carInfoOBject.batteryNumber = rows[0].batteryNumber;
          //单据信息
          this.billInfoObject.repairOrderCode = rows[0].repairOrderCode;
          this.billInfoObject.repairMan = rows[0].repairMan;
          this.billInfoObject.repairTel = rows[0].repairTel;
          this.billInfoObject.saName = rows[0].saName;
          this.billInfoObject.repairTime = rows[0].repairTime;
          this.billInfoObject.preGetDate = rows[0].preGetDate;
          this.billInfoObject.mileage = rows[0].mileage;
          //维修历史
          this.list1 =
            response.data.seBuWorkOrderQueryFindAllRD.rows[0].dthistory;
          //维修工时
          this.list2 =
            response.data.seBuWorkOrderQueryFindAllRD.rows[0].seBuRepairWi;
          // debugger;
          // for (var i = 0; i < this.list2.length; i++) {
          //   this.listD.push({
          //     empId: "",
          //     repairOrderId: "",
          //     repairWiId: "",
          //     wiCode: "",
          //     wiName: "",
          //     repairTypeCode: "",
          //     repairTypeName: "",
          //     saleWorkQty: "",
          //     wiWorkQty: "",
          //     repairStatus: "",
          //     repairStatusName: "",
          //     planBegDate: "",
          //     planEndDate: "",
          //     empName: "",
          //     repairGroupId: "",
          //     groupName: "",
          //     isAdd: "",
          //     isAddname:"",
          //     workDId: ""
          //   });
          //   this.listD[i].empId = this.list2[i].repairEmpId;
          // }
          //维修班组下拉框赋值
          // let list = response.data.seBuWorkOrderQueryFindAllRD.rows;
          //第一次加载，下拉框
          // var temp_array = [];
          // list.forEach(row => {
          //返回数据，按ID去重后的数据
          //   if (
          //     temp_array.filter(o => o.code == row.cleanGroupList.repairGroupId)
          //       .length === 0
          //   ) {
          //     temp_array.push({
          //       code: row.cleanGroupList.repairGroupId,
          //       text: row.cleanGroupList.groupName
          //     });
          //   }
          // });
          // this.repairgroupParam = temp_array;
          this.queryBZ;

          //维修备件
          this.list3 =
            response.data.seBuWorkOrderQueryFindAllRD.rows[0].seBuRepairPart;
          //this.allParamet = response.data.seBuWorkOrderQueryFindAllRD.rows;
          // this.allParamet[0].allDueAmount =
          //   parseFloat(this.allParamet[0].wiDueAmount) +
          //   parseFloat(this.allParamet[0].partDueAmount) +
          //   parseFloat(this.allParamet[0].otherDueAmount);
          // this.repairgroupParam =
          //   response.data.seBuWorkOrderQueryFindAllRD.rows[0].cleanGroupList;
          // this.checkEmployeeList =
          //   response.data.seBuWorkOrderQueryFindAllRD.rows[0].repairemp;

          //this.dialogParamVisible = true;
          //维修费用预估
          this.dueFeeInfoObject.wiDueAmount = rows[0].wiDueAmount;
          this.dueFeeInfoObject.partDueAmount = rows[0].partDueAmount;
          this.dueFeeInfoObject.otherDueAmount = rows[0].otherDueAmount;
          this.dueFeeInfoObject.repairDueAmount = rows[0].repairDueAmount;
          this.dueFeeInfoObject.allDueAmount =
            parseInt(this.dueFeeInfoObject.wiDueAmount) +
            parseInt(this.dueFeeInfoObject.partDueAmount) +
            parseInt(this.dueFeeInfoObject.otherDueAmount);
          //送修问题
          this.allParamet[0].csDesc = rows[0].csDesc;
          //处理方法
          this.allParamet[0].disposeInfo = rows[0].disposeInfo;
          //检查结果
          this.allParamet[0].dealRelustDesc = rows[0].dealRelustDesc;
          //维修时间
          this.repairDateDe = [];
          this.repairDateDe.push(rows[0].repairBeginDate);
          this.repairDateDe.push(rows[0].repairFinishDate);
        }
      });
    },

    //委托维修派工--查询派工详情(可修改)
    entrustMaintain() {
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
        this.$refs.multipleTable.clearSelection();
        return;
      }
      var selection = this.$refs.multipleTable.selection;
      this.findAllRDParam.repairOrderId = selection[0].repairOrderId;
      if (selection[0].repairOrderStatus == 31011) {
        this.$alert("派工单已交车，只能查看", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        this.$refs.multipleTable.clearSelection();
        return;
      } else if (selection[0].repairOrderStatus == 31010) {
        this.$alert("派工单结算进行中，只能查看", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        this.$refs.multipleTable.clearSelection();
        return;
      } else {
        //王大力
        this.dialogParamVisible = true;
        this.repairFirstTime();
        this.edit = false;
        this.edit2 = false;
        seBuWorkOrderQueryFindAllRD(
          this.listQuery.pageSize,
          this.listQuery.pageIndex,
          this.findAllRDParam
        ).then(response => {
          if (response.data.seBuWorkOrderQueryFindAllRD.result == "1") {
            var rows = response.data.seBuWorkOrderQueryFindAllRD.rows;
            console.log("rows");
            console.log(rows);
            //客户信息
            this.custInfoObject.custName = rows[0].custName;
            this.custInfoObject.custTel = rows[0].custTel;
            this.custInfoObject.remark = rows[0].remark;
            //车辆信息
            this.carInfoOBject.vin = rows[0].vin;
            this.carInfoOBject.carLicense = rows[0].carLicense;
            this.carInfoOBject.carBrandCn = rows[0].carBrandCn;
            this.carInfoOBject.carSeriesCn = rows[0].carSeriesCn;
            this.carInfoOBject.carType = rows[0].carType;
            this.carInfoOBject.carColorName = rows[0].carColorName;
            this.carInfoOBject.engineNo = rows[0].engineNo;
            this.carInfoOBject.batteryNumber = rows[0].batteryNumber;
            //单据信息
            this.billInfoObject.repairOrderCode = rows[0].repairOrderCode;
            this.billInfoObject.repairMan = rows[0].repairMan;
            this.billInfoObject.repairTel = rows[0].repairTel;
            this.billInfoObject.saName = rows[0].saName;
            this.billInfoObject.repairTime = rows[0].repairTime;
            this.billInfoObject.preGetDate = rows[0].preGetDate;
            this.billInfoObject.mileage = rows[0].mileage;
            this.list1 =
              response.data.seBuWorkOrderQueryFindAllRD.rows[0].dthistory;
            this.list2 =
              response.data.seBuWorkOrderQueryFindAllRD.rows[0].seBuRepairWi;
            this.list3 =
              response.data.seBuWorkOrderQueryFindAllRD.rows[0].seBuRepairPart;
            //维修费用预估
            this.dueFeeInfoObject.wiDueAmount = rows[0].wiDueAmount;
            this.dueFeeInfoObject.partDueAmount = rows[0].partDueAmount;
            this.dueFeeInfoObject.otherDueAmount = rows[0].otherDueAmount;
            this.dueFeeInfoObject.repairDueAmount = rows[0].repairDueAmount;
            this.dueFeeInfoObject.allDueAmount =
              parseInt(this.dueFeeInfoObject.wiDueAmount) +
              parseInt(this.dueFeeInfoObject.partDueAmount) +
              parseInt(this.dueFeeInfoObject.otherDueAmount);
            //送修问题
            this.allParamet[0].csDesc = rows[0].csDesc;
            //处理方法
            this.allParamet[0].disposeInfo = rows[0].disposeInfo;
            //检查结果
            this.allParamet[0].dealRelustDesc = rows[0].dealRelustDesc;
            this.queryBZ();
            
            // this.queryJS();
          }
        });
      }
    },
    //撤销派工
    revocationWork() {
      if (this.$refs.multipleTable.selection.length == 0) {
        this.$alert("请选择数据行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      //this.ReOrder = this.$refs.multipleTable.selection;
      var selection = this.$refs.multipleTable.selection;
      this.seBuWorkCancelParam.repairOrderId = selection[0].repairOrderId;
      this.seBuWorkCancelParam.updateControlId = selection[0].updateControlId;
      var int = selection[0].repairOrderStatus;
      if (
        //31001:接待完毕  31016：质检完毕
        int == 31001 ||
        int == 31009 ||
        int == 31010 ||
        int == 31011 ||
        int == 31014 ||
        int == 31016
      ) {
        this.$alert("此状态下不允许撤销派工", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        this.$refs.multipleTable.clearSelection();
        return;
      }

      seBuWorkOrderMutationCancel(this.seBuWorkCancelParam).then(response => {
        if (response.data.seBuWorkOrderMutationCancel.result == "1") {
          this.$alert("撤销成功", "提示", {
            confirmButtonText: "确定",
            type: "success"
          });
          this.fetchData();
        } else {
          this.$alert("撤销失败", "提示", {
            confirmButtonText: "确定",
            type: "warning"
          });
          return;
        }
      });
    },
    //重置查询参数
    removeOrderQueryParam() {
      //this.ReOrderQuery.oemcode = "";
      //this.ReOrderQuery.groupcode = "";
      this.ReOrderQuery.dlrId = "";
      this.ReOrderQuery.repairOrderCode = "";
      this.ReOrderQuery.repairOrderId = "";
      this.ReOrderQuery.repairMan = "";
      this.ReOrderQuery.repairTel = "";
      this.ReOrderQuery.repairTimeBeg = "";
      this.ReOrderQuery.repairTimeEnd = "";
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
        (this.ReOrderQuery.carLicense = "");
      this.ReOrderQuery.vin = "";
      //this.$refs.AA.reset();
      this.ReOrderQuery.saEmpId = "";
      this.ReOrderQuery.cardNo = "";
      //this.ReOrderQuery.repairOrderStatus = [];
      this.ReOrderQuery.repairOrderStatus = "";
      this.timeInitialization();
    },

    //退出
    quit() {
      this.dialogParamVisible = false;
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
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
    //初始化时间查询默认为7天
    timeInitialization() {
      var now = new Date();
      var year = now.getFullYear(); //得到年份
      var month = now.getMonth() + 1; //得到月份
      //格式化月份(两位数)
      var formatedMonth = ("0" + month).slice(-2);
      var date = now.getDate(); //得到日期
      //格式化日期(两位数)
      var formatedDate = ("0" + date).slice(-2);
      //var hour = now.getHours();//得到小时
      //var minute = now.getMinutes();//得到分钟
      //var second = now.getSeconds();//得到秒钟

      //var d = year + "-" + formatedMonth + "-" + formatedDate + " " + hour + ":" + minute + ":" + second;
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
      //var d = year + "-" + formatedMonth + "-" + formatedDate;
      var k = new Date(d);
      k.setDate(k.getDate() - 7);
      this.ReOrderQuery.repairTimeEnd = d;
      //this.ReOrderQuery.repairTimeBeg = k.getFullYear() + "-" + ("0" + (k.getMonth() + 1)).slice(-2) + "-" + ("0" + k.getDate()).slice(-2) + " " + k.getHours() + ":" + k.getMinutes() + ":" + k.getSeconds();
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
      //this.ReOrderQuery.repairTimeBeg = k.getFullYear() + "-" + ("0" + (k.getMonth() + 1)).slice(-2) + "-" + ("0" + k.getDate()).slice(-2);
      this.getriqi();
      this.getriqi1();
    },
    //联动维修技师下拉框
    groupChanged(row) {
      debugger;
      // let roles = [];
      // this.select2 = [];
      // this.allParamet[0].empName = "";
      // for (var val of this.checkEmployeeList) {
      //   if (this.allParamet[0].groupName === val.groupName) {
      //     roles.push({ label: val.empName, value: val.empName });
      //   }
      //   this.select2 = roles;
      // }
      //  let obj = {};
      // obj = this.model.find((item)=>{//model就是上面的数据源
      //     return item.id === id;//筛选出匹配数据
      // });
      // vm.modelName=obj.model;

      this.repairgroupParam[0].repairGroupId = row.repairGroupId;
      // this.checkEmployeeListParam[0].empId = "";
      this.queryJS(row);
    },
    //维修派工保存
    save() {
      this.allParamet[0].repairBeginDate = this.repairDateDe[0];
      this.allParamet[0].repairFinishDate = this.repairDateDe[1];
      let savedata = {
        repairOrderId: this.$refs.multipleTable.selection[0].repairOrderId,
        updateControlId: this.$refs.multipleTable.selection[0].updateControlId,
        // this.allParamet[0].repairBeginDate=this.repairDateDe[0],
        repairBeginDate: this.allParamet[0].repairBeginDate,
        repairFinishDate: this.allParamet[0].repairFinishDate
      };
      var savedata2 = [];
      var temp = [];
      // var wiCodeItems = that.wiModelOptionDatas.filter(o => o.wiModelId == that.ruleForm.wiModelId)
      // if (wiCodeItems.length > 0) that.ruleForm.wiModelCode = wiCodeItems[0].wiModelCode;

      this.list2.forEach(row => {
        const that = this;

        var groupNameItem = that.repairgroupParam.filter(
          o => o.code == row.repairGroupId
        );
        if (groupNameItem.length > 0)
          that.cleanGroupList[0].groupName = groupNameItem[0].text;
        debugger;
        var empNameItem = row.option.filter(o => o.code == row.empId);
        if (empNameItem.length > 0)
          that.checkEmployeeList[0].empName = empNameItem[0].text;
        // debugger
        savedata2.push({
          repairOrderId: row.repairOrderId,
          repairTypeCode: row.repairTypeCode,
          repairWiId: row.repairWiId,
          wiCode: row.wiCode,
          wiName: row.wiName,
          repairTypeCode: row.repairTypeCode,
          saleWiQty: row.saleWorkQty,
          workWiQty: row.wiWorkQty,
          repairStatus: row.repairStatus,
          repairEmpId: row.empId,
          repairGroupId: row.repairGroupId,
          repairEmpName: that.checkEmployeeList[0].empName,
          repairGroupName: that.cleanGroupList[0].groupName,
          // repairEmpName: $("#that.checkEmployeeList[0].empId option:selected").text,
          // repairGroupName: $("#that.cleanGroupList[0].repairGroupId option:selected").text ,
          repairWorkType: "1", //派工方式：默认1派工到技师
          // workType: row.workType,
          // itemCode: row.itemCode,
          // itemName: row.itemName,
          wiRepairQty: row.wiRepairQty
        });
      });
      seBuWorkOrderMutationSave(savedata, savedata2).then(response => {
        if (response.data.seBuWorkOrderMutationSave.result == 1) {
          this.$alert("保存成功", "提示", {
            confirmButtonText: "确定",
            type: "success"
          });
          this.dialogParamVisible = false;
          this.fetchData();
        } else {
          this.$message({
            type: "error",
            message: "保存失败，" + response.msg
          });
          this.dialogParamVisible = false;
          this.fetchData();
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
    getriqi2() {
      var riqi = new Date(this.allParamet[0].repairBeginDate);
      this.pickerOptions2 = {
        disabledDate(time) {
          return time.getTime() >= riqi;
        }
      };
    },
    getriqi3() {
      var riqi = new Date(this.allParamet[0].repairFinishDate);
      this.pickerOptions3 = {
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
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    }
  }
};
</script>
<!--<style scoped>
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
  margin-bottom: 3px;
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
.timeA {
     padding-left: 0px;
    padding-right: 0px;
}
</style>-->
