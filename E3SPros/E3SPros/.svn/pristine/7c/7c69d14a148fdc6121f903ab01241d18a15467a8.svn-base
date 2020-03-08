<template>
  <div>
    <el-dialog
      :visible.sync="seRepairReportDetailVisible"
      width="74%"
      @close="close"
    >
      <div class="filter-container filter-title" style="text-align:center;border:none">
        <span style="font-weight:bold;font-size:14px;margin-top:0px;">派工单</span>
      </div>
      <div class="filter-container filter-params">
            <el-row :gutter="28">
               <el-col :span="7">
                 <label>派工单号</label>
                 <el-input v-model="detailInfo.repairOrderCode" :disabled="true"></el-input>
               </el-col>
               <el-col :span="7">
                 <label>车牌号</label>
                 <el-input v-model="detailInfo.carLicense" :disabled="true"></el-input>
               </el-col>
               <el-col :span="7">
                 <label>客户名称</label>
                 <el-input v-model="detailInfo.custName" :disabled="true"></el-input>
               </el-col>
             </el-row>
      </div>
      <div>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="派工资料" name="first"><!-- 对应工单信息 -->
              <div class="filter-container filter-params">
                <el-row :gutter="28">
                  <el-col :span="7">
                    <label>工时费</label>
                    <el-input v-model="dtrepairorderDetail.wiAmount" :disabled="true"></el-input>
                  </el-col>
                    <el-col :span="7">
                    <label>备件费</label>
                  <el-input v-model="dtrepairorderDetail.partAmount" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>其他费</label>
                    <el-input v-model="dtrepairorderDetail.otherAmount" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <label>合计</label>
                    <el-input v-model="dtrepairorderDetail.repairOrderAmount" :disabled="true"></el-input>
                  </el-col>
                    <el-col :span="7">
                    <label>报修时间</label>
                  <el-input v-model="dtrepairorderDetail.repairTime" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>预计交车</label>
                    <el-input v-model="dtrepairorderDetail.preGetDate" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <label>行驶里程</label>
                    <el-input v-model="dtrepairorderDetail.mileage" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <el-checkbox label="优先派工" v-model="dtrepairorderDetail.isFirst" :disabled="true" :checked="isFirstChecked"></el-checkbox>
                  </el-col>
               </el-row>
              </div>
              <div class="filter-container filter-title" style="margin-top:0px;">送修问题</div>
              <el-input type="textarea" v-model="dtrepairorderDetail.csDesc" :disabled="true"></el-input>
              <div class="filter-container filter-title" style="margin-top:0px;" :disabled="true">处理方法及检查结果</div>
              <el-input type="textarea" v-model="dtrepairorderDetail.disposeInfo" :disabled="true"></el-input>
              <div class="filter-container filter-title" style="margin-top:0px;">推荐项目</div>
              <el-input type="textarea" v-model="dtrepairorderDetail.recommendItem" :disabled="true"></el-input>
            </el-tab-pane>

            <el-tab-pane label="客户/车辆资料" name="second">
              <div class="filter-container filter-title" style="margin-top:0px;">车主信息</div>
              <div class="filter-container filter-params">
                <el-row :gutter="28">
                  <el-col :span="7">
                    <label>客户姓名</label>
                    <el-input v-model="custCarDetail.custName" :disabled="true"></el-input>
                  </el-col>
                    <el-col :span="7">
                    <label>客户电话</label>
                  <el-input v-model="custCarDetail.phone" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>客户地址</label>
                    <el-input v-model="custCarDetail.addr" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <label>性别</label>
                    <el-input v-model="custCarDetail.genderName" :disabled="true"></el-input>
                  </el-col>
                    <el-col :span="7">
                    <label>证件号码</label>
                  <el-input v-model="custCarDetail.credNo" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>生日</label>
                    <el-input v-model="custCarDetail.birthDate" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <label>Email</label>
                    <el-input v-model="custCarInfo.mail" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               </div>
               <div class="filter-container filter-title" style="margin-top:0px;">使用人信息</div>
               <div class="filter-container filter-params">
                <el-row :gutter="28">
                  <el-col :span="7">
                    <label>客户姓名</label>
                    <el-input v-model="custCarDetail.custName" :disabled="true"></el-input>
                  </el-col>
                    <el-col :span="7">
                    <label>客户电话</label>
                  <el-input v-model="custCarDetail.phone" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>客户地址</label>
                    <el-input v-model="custCarDetail.addr" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <label>性别</label>
                    <el-input v-model="custCarDetail.genderName" :disabled="true"></el-input>
                  </el-col>
                    <el-col :span="7">
                    <label>证件号码</label>
                  <el-input v-model="custCarDetail.credNo" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>生日</label>
                    <el-input v-model="custCarDetail.birthDate" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <label>Email</label>
                    <el-input v-model="custCarDetail.mail" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               </div>
               <div class="filter-container filter-title" style="margin-top:0px;">车辆信息</div>
               <div class="filter-container filter-params">
                <el-row :gutter="28">
                <el-col :span="7">
                    <label>品牌</label>
                    <el-input v-model="custCarDetail.carBrandCn" :disabled="true"></el-input>
                  </el-col>
                    <el-col :span="7">
                    <label>车系</label>
                  <el-input v-model="custCarDetail.carSeriesName" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>车型</label>
                    <el-input v-model="custCarDetail.carTypeName" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <label>VIN码</label>
                    <el-input v-model="custCarDetail.vin" :disabled="true"></el-input>
                  </el-col>
                    <el-col :span="7">
                    <label>销售商</label>
                  <el-input v-model="custCarDetail.dlrShortName" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>发动机号</label>
                    <el-input v-model="custCarDetail.engineNo" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <label>车身颜色</label>
                    <el-input v-model="custCarDetail.carColorName" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>购车日期</label>
                    <el-input v-model="custCarDetail.saleDate" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>钥匙号</label>
                    <el-input v-model="custCarDetail.carKeyNo" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <label>底盘号</label>
                    <el-input v-model="custCarDetail.underpanNo" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>变速箱</label>
                    <el-input v-model="custCarDetail.tranType" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>购车用途</label>
                    <el-input v-model="custCarDetail.buyCaruseName" :disabled="true"></el-input>
                  </el-col>

               </el-row>
               </div>
            </el-tab-pane>
            <el-tab-pane label="估价项目" name="third">
                <el-table
                :data="repairOrderDataList"
                element-loading-text="Loading"
                v-loading="listLoading"
                border
                fit
                stripe
                highlight-current-row
                :header-cell-style="tableHeaderRowClassName"
                height="250px"
                >
                  <el-table-column align="center" label="序号" width="60">
                      <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="维修状态" width="120">
                      <template slot-scope="scope">{{ scope.row.repairStatusName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="工时编码" width="140">
                      <template slot-scope="scope">{{ scope.row.wiCode }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="维修内容" width="140">
                      <template slot-scope="scope">{{ scope.row.wiName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="工时数量" width="100">
                      <template slot-scope="scope">{{ scope.row.wiWorkQty }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="工时单价" width="100">
                      <template slot-scope="scope">{{ scope.row.wiPrice }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="应收费" width="100">
                      <template slot-scope="scope">{{ scope.row.oldprice }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="付费性质" width="100">
                      <template slot-scope="scope">{{ scope.row.payKindName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="业务类别" width="110">
                      <template slot-scope="scope">{{ scope.row.businessTypeName }}</template>
                  </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="维修项目" name="fourth">
                <el-table
                :data="dtrepairassignDataList"
                element-loading-text="Loading"
                v-loading="listLoading"
                border
                fit
                stripe
                highlight-current-row
                :header-cell-style="tableHeaderRowClassName"
                height="250px"
                style="width:100%"
                >
                  <el-table-column align="center" label="序号" width="60">
                      <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="维修状态" width="150">
                      <template slot-scope="scope">{{ scope.row.rrpairStatusName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="维修内容" width="160">
                      <template slot-scope="scope">{{ scope.row.itemName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="派工工时数" width="150">
                      <template slot-scope="scope">{{ scope.row.workWiQty }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="维修班组" width="150">
                      <template slot-scope="scope">{{ scope.row.repairGroupName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="维修技师" width="150">
                      <template slot-scope="scope">{{ scope.row.repairEmpName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="维修工位" width="150">
                      <template slot-scope="scope">{{ scope.row.workStationName }}</template>
                  </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="维修备件" name="fifth">
                <el-table
                :data="repairPartDataList"
                element-loading-text="Loading"
                v-loading="partlistLoading"
                border
                fit
                stripe
                highlight-current-row
                :header-cell-style="tableHeaderRowClassName"
                height="250px"
                >
                  <el-table-column align="center" label="序号" width="60">
                      <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="出库标志" width="120">
                      <template slot-scope="scope">{{ scope.row.stockSymbol }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="备件编号" width="140">
                      <template slot-scope="scope">{{ scope.row.partNo }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="备件名称" width="140">
                      <template slot-scope="scope">{{ scope.row.partName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="业务类别" width="100">
                      <template slot-scope="scope">{{ scope.row.businessTypeName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="需求数量" width="100">
                      <template slot-scope="scope">{{ scope.row.partQty }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="出库数量" width="100">
                      <template slot-scope="scope">{{ scope.row.outQty }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="退货数量" width="100">
                      <template slot-scope="scope">{{ scope.row.returnQty }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="单价" width="110">
                      <template slot-scope="scope">{{ scope.row.partPrice }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="合计金额" width="110">
                      <template slot-scope="scope">{{ scope.row.partAmount }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="费用预估" width="110">
                      <template slot-scope="scope">{{ scope.row.prePartAmount }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="备件类别" width="110">
                      <template slot-scope="scope">{{ scope.row.partTypeName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="单位" width="110">
                      <template slot-scope="scope">{{ scope.row.unit }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="付费性质" width="110">
                      <template slot-scope="scope">{{ scope.row.payKindName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="维修类别" width="110">
                      <template slot-scope="scope">{{ scope.row.repairTypeName }}</template>
                  </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="维修出库单" name="sixth">
                <el-table
                :data="dtrepairoutpartDataList"
                element-loading-text="Loading"
                border
                fit
                stripe
                highlight-current-row
                :header-cell-style="tableHeaderRowClassName"
                height="250px"
                >
                  <el-table-column align="center" label="序号" width="60">
                      <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="出库单号" width="140">
                      <template slot-scope="scope">{{ scope.row.outStoreCode }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="出库时间" width="140">
                      <template slot-scope="scope">{{ scope.row.outStoreDate }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="仓库人员" width="140">
                      <template slot-scope="scope">{{ scope.row.empName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="备件编号" width="120">
                      <template slot-scope="scope">{{ scope.row.partNo }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="备件名称" width="100">
                      <template slot-scope="scope">{{ scope.row.partName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="单位" width="100">
                      <template slot-scope="scope">{{ scope.row.uint }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="数量" width="100">
                      <template slot-scope="scope">{{ scope.row.outStoreQty }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="单价" width="110">
                      <template slot-scope="scope">{{ scope.row.partPrice }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="合计" width="110">
                      <template slot-scope="scope">{{ scope.row.partAmount }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="应收费" width="110">
                      <template slot-scope="scope">{{ scope.row.prePartAmount }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="备件类别" width="120">
                      <template slot-scope="scope">{{ scope.row.partTypeName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="仓位编号" width="110">
                      <template slot-scope="scope">{{ scope.row.placeCode }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="付费性质" width="110">
                      <template slot-scope="scope">{{ scope.row.payKindName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="业务类别" width="110">
                      <template slot-scope="scope">{{ scope.row.businessTypeName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="维修类别" width="110">
                      <template slot-scope="scope">{{ scope.row.repairTypeName }}</template>
                  </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="出库退货" name="seventh">
                 <el-table
                :data="dtrepairoutreturnDataList"
                element-loading-text="Loading"
                border
                fit
                stripe
                highlight-current-row
                :header-cell-style="tableHeaderRowClassName"
                height="250px"
                >
                  <el-table-column align="center" label="序号" width="60">
                      <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="退料申请单号" width="120">
                      <template slot-scope="scope">{{ scope.row.relateOrderCode }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="出库时间" width="140">
                      <template slot-scope="scope">{{ scope.row.outStoreDate }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="仓库人员" width="140">
                      <template slot-scope="scope">{{ scope.row.empName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="备件编号" width="100">
                      <template slot-scope="scope">{{ scope.row.partNo }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="备件名称" width="100">
                      <template slot-scope="scope">{{ scope.row.partName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="单位" width="100">
                      <template slot-scope="scope">{{ scope.row.unit }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="数量" width="100">
                      <template slot-scope="scope">{{ scope.row.outStoreQty }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="单价" width="110">
                      <template slot-scope="scope">{{ scope.row.partPrice }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="合计" width="110">
                      <template slot-scope="scope">{{ scope.row.partAmount }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="应收费" width="110">
                      <template slot-scope="scope">{{ scope.row.prePartAmount }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="备件类别" width="110">
                      <template slot-scope="scope">{{ scope.row.partTypeName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="仓位编号" width="110">
                      <template slot-scope="scope">{{ scope.row.placeCode }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="付费性质" width="110">
                      <template slot-scope="scope">{{ scope.row.payKindName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="业务类别" width="110">
                      <template slot-scope="scope">{{ scope.row.businessTypeName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="维修类别" width="110">
                      <template slot-scope="scope">{{ scope.row.repairTypeName }}</template>
                  </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="结算记录" name="eighth">
                 <el-table
                :data="dtrepairgatherDataList"
                element-loading-text="Loading"
                border
                fit
                stripe
                highlight-current-row
                :header-cell-style="tableHeaderRowClassName"
                height="250px"
                style="width:100%"
                >
                  <el-table-column align="center" label="序号" width="60">
                      <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="结算单号" width="150">
                      <template slot-scope="scope">{{ scope.row.balanceOrderCode }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="结算日期" width="160">
                      <template slot-scope="scope">{{ scope.row.balanceDate }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="应收费" width="150">
                      <template slot-scope="scope">{{ scope.row.totalAmount }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="折扣费" width="150">
                      <template slot-scope="scope">{{ scope.row.discountAmount }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="实收费" width="150">
                      <template slot-scope="scope">{{ scope.row.receiptsAmount }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="付款方式" width="150">
                      <template slot-scope="scope">{{ scope.row.payType }}</template>
                  </el-table-column>
                   <el-table-column align="center" label="结算人员" width="150">
                      <template slot-scope="scope">{{ scope.row.gatheringEmpName }}</template>
                  </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="反结算记录" name="ninth">
                 <el-table
                :data="dtrepairrefundDataList"
                element-loading-text="Loading"
                border
                fit
                stripe
                highlight-current-row
                :header-cell-style="tableHeaderRowClassName"
                height="250px"
                style="width:100%"
                >
                  <el-table-column align="center" label="序号" width="60">
                      <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="结算日期" width="150">
                      <template slot-scope="scope">{{ scope.row.balanceDate }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="反结算日期" width="150">
                      <template slot-scope="scope">{{ scope.row.cancelDate }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="应收费" width="150">
                      <template slot-scope="scope">{{ scope.row.receiptsAmount }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="实收费" width="150">
                      <template slot-scope="scope">{{ scope.row.totalAmount }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="付款方式" width="150">
                      <template slot-scope="scope">{{ scope.row.payTypeCn }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="结算人员" width="150">
                      <template slot-scope="scope">{{ scope.row.gatheringEmpName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="反结算人员" width="150">
                      <template slot-scope="scope">{{ scope.row.cancelEmpName }}</template>
                  </el-table-column>
                  <el-table-column align="center" label="反结算原因" width="150">
                      <template slot-scope="scope">{{ scope.row.cancelReason }}</template>
                  </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="其他资料" name="tenth">
                <div class="filter-container filter-params">
                <el-row :gutter="28">
                  <el-col :span="7">
                    <label>客户姓名</label>
                    <el-input v-model="dtuserInfo.custName" :disabled="true"></el-input>
                  </el-col>
                    <el-col :span="7">
                    <label>客户电话</label>
                  <el-input v-model="dtuserInfo.phone" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>客户地址</label>
                    <el-input v-model="dtuserInfo.addr" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <label>性别</label>
                    <el-input v-model="dtuserInfo.genderName" :disabled="true"></el-input>
                  </el-col>
                    <el-col :span="7">
                    <label>证件号码</label>
                  <el-input v-model="dtuserInfo.credNo" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>生日</label>
                    <el-input v-model="dtuserInfo.birthDate" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <label>Email</label>
                    <el-input v-model="dtuserInfo.mail" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               </div>
               <div class="filter-container filter-title" style="margin-top:0px;">车辆信息</div>
               <div class="filter-container filter-params">
                <el-row :gutter="28">
                <el-col :span="7">
                    <label>清洁班组</label>
                    <el-input v-model="dtworkorder.groupName" :disabled="true"></el-input>
                  </el-col>
                    <el-col :span="7">
                    <label>清洁时间</label>
                  <el-input v-model="dtworkorder.cleanFinishDate" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>总检签字</label>
                    <el-input v-model="dtworkorder.qualityCheckMan" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <label>总检时间</label>
                    <el-input v-model="dtworkorder.qualityFinishDate" :disabled="true"></el-input>
                  </el-col>
                    <el-col :span="7">
                    <label>结算人员</label>
                  <el-input v-model="dtworkorder.carBrandCode" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>结算时间</label>
                    <el-input v-model="dtworkorder.carSeries" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <label>应收费用</label>
                    <el-input v-model="dtworkorder.vin" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>其他费</label>
                    <el-input v-model="dtworkorder.vin" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>实收费</label>
                    <el-input v-model="dtworkorder.vin" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <label>折扣费</label>
                    <el-input v-model="dtworkorder.vin" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>现金</label>
                    <el-input v-model="dtworkorder.vin" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>银行</label>
                    <el-input v-model="dtworkorder.vin" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <label>内部</label>
                    <el-input v-model="custCarInfo.vin" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                     <!--<label>主机厂挂账</label>-->
                     <lableName :curLabelName="dlrRunupLabelName" :isShowLabel="isShowLabel" :isRequire="isRequire"></lableName>
                    <el-input v-model="custCarInfo.vin" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                     <!--<label>保险公司挂账</label>-->
                     <lableName :curLabelName="insurRunupLabelName" :isShowLabel="isShowLabel" :isRequire="isRequire"></lableName>
                    <el-input v-model="dtworkorder.vin" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <!--<label>协议单位挂账</label>-->
                    <lableName :curLabelName="agreeRunupLabelName" :isShowLabel="isShowLabel" :isRequire="isRequire"></lableName>
                    <el-input v-model="custCarInfo.vin" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <label>厂家积分</label>
                    <el-input v-model="custCarInfo.vin" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <!--<label>专营店积分</label>-->
                    <lableName :curLabelName="dlrLabelName" :isShowLabel="isShowLabel" :isRequire="isRequire"></lableName>
                    <el-input v-model="custCarInfo.vin" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               <el-row :gutter="28">
                  <el-col :span="7">
                    <!--<label>卡金额支付额</label>-->
                    <lableName :curLabelName="payForLabelName" :isShowLabel="isShowLabel" :isRequire="isRequire"></lableName>
                    <el-input v-model="custCarInfo.vin" :disabled="true"></el-input>
                  </el-col>
                  <el-col :span="7">
                    <!--<label>厂家会员优惠券</label>-->
                    <lableName :curLabelName="couponLabelName" :isShowLabel="isShowLabel" :isRequire="isRequire"></lableName>
                    <el-input v-model="custCarInfo.vin" :disabled="true"></el-input>
                  </el-col>
               </el-row>
               </div>
            </el-tab-pane>
            <el-tab-pane label="外观记录" name="elevevth">
                <div class="filter-container filter-title" style="margin-top:0px;">单击检查点信息图片，可查看大图</div>
                <div style="width:410px;height:400px;margin-right:10px;border:1px solid #000">
                  <img :src="appearRecordSrc" width="410px" height="400px" @click="dbClick"/>
                </div>
            </el-tab-pane>
          </el-tabs>
      </div>
    </el-dialog>

    <seBuRepairHistoryQueryDetailMore
      @ClosePage="getClose"
      :detailVisible="detailVisible"
      ref="toSon"
    />
    <!--外观记录图片大图弹窗-->
    <el-dialog :visible.sync="picVisible" center width="700px" height="650px">
      <img :src="appearRecordSrc" style="width:610px;height:610px">
    </el-dialog>
  </div>
</template>

<script>
import seBuRepairHistoryQueryDetailMore from "@/views/se/public/repairHistory/seBuRepairHistoryQueryDetailMore";
import { doQueryList } from "@/api/se/basedata/repair/seRepairReportMaintainVehicle";       
import { apiRepairReportQueryListDetail } from '@/api/graphQLApiList/se'
import { requestGraphQL } from '@/api/commonRequest'
import seComQueChoMu from "@/components/se/seComQueChoMu"
import lableName from "@/components/lableName/index"

export default {
  components: {
    seBuRepairHistoryQueryDetailMore,
    seComQueChoMu,
    lableName
  },
  props: {
    seRepairReportDetailVisible: {
      type:Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      dlrRunupLabelName: '主机厂挂账',
      insurRunupLabelName: '保险公司挂账',
      agreeRunupLabelName: '协议公司挂账',
      dlrLabelName: '专营店积分',
      payForLabelName: '卡金额支付额',
      couponLabelName: '厂家会员优惠券',
      isShowLabel: true,
      isFirstChecked: false,
      //详细数据
      detailInfo: {
        repairOrderCode: '',
        carLicense: '',
        custName: ''
      },
      //派工资料信息
      dtrepairorderDetail: {
        wiAmount: '',
        partAmount: '',
        otherAmount: '',
        repairOrderAmount: '',
        repairTime: '',
        preGetDate: '',
        mileage: '',
        isFirst: '',
        csDesc: '',
        disposeInfo: '',
        recommendItem: ''
      },
      //客户/车辆资料
      custCarDetail: {
        custName: '',
        phone: '',
        addr: '',
        genderName: '',
        credNo: '',
        birthDate: '',
        mail: '',
        carBrandCn: '',
        carSeriesName: '',
        carTypeName: '',
        vin: '',
        dlrShortName: '',
        engineNo: '',
        carColorName: '',
        saleDate: '',
        carKeyNo: '',
        underpanNo: '',
        tranType: '',
        buyCaruseName: ''
      },
      //其他资料
      dtuserInfo: {
        custName: '',
        phone: '',
        addr: '',
        genderName: '',
        credNo: '',
        birthDate: '',
        mail: ''
      },
      //维修派工主表信息
      dtworkorder: {
        groupName: '',
        cleanFinishDate: '',
        qualityCheckMan: '',
        qualityFinishDate: ''
      },
      //图片外观记录地址
      appearRecordSrc: '',
      //维修项目表数据
      dtrepairassignDataList: null,
      //维修备件表数据
      repairPartDataList: null,
      //估价项目表数据
      repairOrderDataList: null,
      //维修出库单表数据
      dtrepairoutpartDataList: null,
      //出库退货表数据
      dtrepairoutreturnDataList: null,
      //结算记录表数据
      dtrepairgatherDataList: null,
      //反结算表数据
      dtrepairrefundDataList: null,
      //存储返回的结果集
      resultList: null,
      //默认显示第一个
      activeName: "first",
      //外观记录弹框Visible
      picVisible: false,
      tableHeaderRowClassName({ row, rowIndex }) {
            if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:30px;'
        }
      },
        //客户车辆信息
        custCarInfo: {
            vin: '',
            carBrandCode: '',
            carSeries: '',
            carType: '',
            carLicense: '',
            custName: '',
            custTel: ''
        },
        //查询区条件
        formField: {
            startTime: '',
            endTime: '',
            repairRecords: '',
            dlrShortName: [],
            isCancelBalance: '',
        },
        //显示隐藏经销商弹框
        seComQueChoMuDlrVisible: false,
    };
  },
  created() {
    this.textQuery(); 
  },

  methods: {
    //获取传过来的数据
    getData(val) {
      this.detailInfo = val
    },

    textQuery(val) {
      const that = this
      let queryObj = {
        // api配置
        apiConfig: apiRepairReportQueryListDetail.seRepairReportQueryList,
        // 需要调用的API服务配置
        apiServices: [{
            //表格中台返回网格的字段
            apiQueryRow:[]
        }],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.detailInfo
        }
      }
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response =>{
        if(response.data[apiRepairReportQueryListDetail.seRepairReportQueryList.ServiceCode].result === '1' 
        && response.data[apiRepairReportQueryListDetail.seRepairReportQueryList.ServiceCode].rows!=''){
            that.resultList = response.data[apiRepairReportQueryListDetail.seRepairReportQueryList.ServiceCode].rows;
            console.log(that.resultList)
            that.dtrepairorderDetail = that.resultList[0].dtrepairorder[0];//工单信息
            if (that.dtrepairorderDetail.isFirst == '是') {
              that.isFirstChecked = true
            }
            that.custCarDetail = that.resultList[0].dtcarcustinfo[0];//客户车辆信息
            //debugger
            that.repairPartDataList = that.resultList[0].dtrepairpart;//维修备件信息
            that.dtrepairassignDataList = that.resultList[0].dtrepairassign;//维修项目信息
            that.dtrepairoutpartDataList = that.resultList[0].dtrepairoutpart;//维修出库单信息
            that.dtrepairoutreturnDataList = that.resultList[0].dtrepairoutreturn;//出库信息
            that.dtrepairgatherDataList = that.resultList[0].dtrepairgather;//结算记录信息
            that.dtrepairrefundDataList = that.resultList[0].dtrepairrefund;//反结算记录信息
            that.dtuserInfo = that.resultList[0].dtuser[0];//使用人信息
            that.dtworkorder = that.resultList[0].dtworkorder[0];//维修派工主表信息   
            that.appearRecordSrc = that.resultList[0].appearRecordSrc;//外观记录图片
        }
      })
    },
    dbClick() {
      this.picVisible = true
    },

    close() {
      this.$emit("closePage", false);
    },
    getClose(data) {
      this.detailVisible = false;
    },
  }
};
</script>
<style lang="scss" scoped>
/deep/.el-input__inner {
    height: 28px;
    line-height: 28px;
}
/deep/.el-dialog .el-dialog__header {
    height: 0px;
}
/deep/.filter-title {
    margin-top: 0px;
}
/deep/.el-textarea__inner {
  line-height: 2.1;
}
/deep/.filter-params .el-col {
    margin-bottom: 4px;
}
/deep/.el-dialog--center .el-dialog__body {
  text-align: center;
}
</style>