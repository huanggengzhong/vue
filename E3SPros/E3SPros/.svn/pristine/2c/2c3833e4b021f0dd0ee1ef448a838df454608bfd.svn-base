<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" :disabled="isDisabled" @click="saveClick">提交结算申请</el-button>
      <el-button size="small" @click="printClick">打印结算申请单</el-button>
    </div>

    <!-- 页签 -->
    <el-tabs type="card" v-model="activeName" @tab-click="handleClick" class="filter-container">
      <!-- 页签1 -->
      <el-tab-pane label="客户车辆信息" name="first">
        <div class="filter-container filter-title" ref="conTitleHeight">车辆信息</div>
        <div class="filter-container filter-params">
          <el-row :gutter="26">
            <el-col :span="6">
              <label>车牌号</label>
              <el-input v-model="allParam.carLicense" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <label>VIN码</label>
              <el-input v-model="allParam.vin" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <label>车辆品牌</label>
              <el-input
                v-model="allParam.carCustInfo[0].carBrandCn"
                size="small"
                :readonly="lockFlag"
              />
            </el-col>
            <el-col :span="6">
              <label>颜色</label>
              <el-input v-model="allParam.carColorName" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <label>车系名称</label>
              <el-input
                v-model="allParam.carCustInfo[0].carSeriesName"
                size="small"
                :readonly="lockFlag"
              />
            </el-col>
            <el-col :span="6">
              <label>车型</label>
              <el-input v-model="allParam.carTypeCode" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <label>购车日期</label>
              <el-input v-model="allParam.buyDate" size="small" :readonly="lockFlag" />
            </el-col>
          </el-row>
        </div>

        <div class="filter-container filter-title" ref="conTitleHeight">单据信息</div>
        <div class="filter-container filter-params">
          <el-row :gutter="26">
            <el-col :span="6">
              <label>施工单号</label>
              <el-input v-model="allParam.repairOrderCode" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <label>服务代表</label>
              <el-input v-model="allParam.saName" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <label>报修人</label>
              <el-input v-model="allParam.repairMan" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <label>报修人电话</label>
              <el-input v-model="allParam.repairTel" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <label>送修时间</label>
              <el-input v-model="allParam.repairTime" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <label>预交车时间</label>
              <el-input v-model="allParam.preGetDate" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <label>行驶里程</label>
              <el-input v-model="allParam.mileage" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <label>油量</label>
              <el-input v-model="allParam.oil" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <el-checkbox label="在店等待" :checked="paramOperator.isWait" :disabled="lockFlag"></el-checkbox>
            </el-col>
            <el-col :span="6">
              <el-checkbox label="优先派工" :checked="paramOperator.isFirst" :disabled="lockFlag"></el-checkbox>
            </el-col>
            <el-col :span="6">
              <el-checkbox label="洗车" :checked="paramOperator.isClean" :disabled="lockFlag"></el-checkbox>
            </el-col>
            <el-col :span="6">
              <el-checkbox label="事故车" :checked="paramOperator.isAccident" :disabled="lockFlag"></el-checkbox>
            </el-col>
          </el-row>
        </div>
        <div class="filter-container filter-title" ref="conTitleHeight">客户信息</div>
        <div class="filter-container filter-params">
          <el-row :gutter="26">
            <el-col :span="6">
              <label>车主姓名</label>
              <el-input v-model="allParam.custName" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <label>车主电话</label>
              <el-input v-model="allParam.custTel" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <label>使用人</label>
              <el-input v-model="allParam.useMan" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <label>使用人电话</label>
              <el-input v-model="allParam.useManTel" size="small" :readonly="lockFlag" />
            </el-col>
            <el-col :span="6">
              <label>客户备注</label>
              <el-input v-model="allParam.remark" type="textarea" :readonly="lockFlag" autosize></el-input>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <!-- 页签2 -->
      <el-tab-pane label="维修及备件费用" name="second">
        <div class="filter-container filter-title" ref="conTitleHeight">维修费用</div>
        <!-- 工时表 -->
        <el-table
          class="multipleTable"
          :data="allParam.seBuRepairWi"
          element-loading-text="Loading"
          border
          fit
          stripe
          height="130"
          ref="multipleTable"
        >
          <el-table-column align="center" label="序号" width="60" type="index" prop="id"></el-table-column>
          <el-table-column label="工时编码" prop="wiCode" align="center" width="110">
            <template slot-scope="scope">{{ scope.row.wiCode }}</template>
          </el-table-column>
          <el-table-column label="维修内容" prop="wiName" align="center" width="150">
            <template slot-scope="scope">{{ scope.row.wiName }}</template>
          </el-table-column>
          <el-table-column label="付费性质" prop="payKindName" align="center" width="100">
            <template slot-scope="scope">{{ scope.row.payKindName }}</template>
          </el-table-column>
          <el-table-column label="销售工时" prop="saleWorkQty" align="center" width="80">
            <template slot-scope="scope">{{ scope.row.saleWorkQty }}</template>
          </el-table-column>
          <el-table-column label="工时单价" prop="wiPrice" align="center" width="80">
            <template slot-scope="scope">{{ scope.row.wiPrice }}</template>
          </el-table-column>
          <el-table-column label="工时费" prop="wiAmount" align="center" width="80">
            <template slot-scope="scope">{{ scope.row.wiAmount }}</template>
          </el-table-column>
          <el-table-column label="业务类别" prop="businessTypeName" align="center" width="110">
            <template slot-scope="scope">{{ scope.row.businessTypeName }}</template>
          </el-table-column>
          <el-table-column label="折扣率(%)" prop="wiDiscountRate" align="center" width="100">
            <template slot-scope="scope">{{ scope.row.wiDiscountRate }}</template>
          </el-table-column>
          <el-table-column label="工时费预估" prop="wiDueAmount" align="center" width="100">
            <template slot-scope="scope">{{ scope.row.wiDueAmount }}</template>
          </el-table-column>
          <el-table-column label="制单责任人" prop="dutyMan" align="center" width="100">
            <template slot-scope="scope">{{ scope.row.dutyMan }}</template>
          </el-table-column>
          <el-table-column label="备注" prop="note" align="center">
            <template slot-scope="scope">{{ scope.row.note }}</template>
          </el-table-column>
        </el-table>
        <div class="filter-container filter-title" ref="conTitleHeight">备件费用</div>
        <!-- 备件表 -->
        <el-table
          class="multipleTable"
          :data="allParam.seBuRepairPart"
          element-loading-text="Loading"
          border
          fit
          stripe
          height="130"
          ref="multipleTable"
        >
          <el-table-column align="center" label="序号" width="60" type="index" prop="id"></el-table-column>
          <el-table-column label="备件编码" prop="partNo" align="center" width="150">
            <template slot-scope="scope">{{ scope.row.partNo }}</template>
          </el-table-column>
          <el-table-column label="备件名称" prop="partName" align="center" width="150">
            <template slot-scope="scope">{{ scope.row.partName }}</template>
          </el-table-column>
          <el-table-column label="付费性质" prop="payKindName" align="center" width="80">
            <template slot-scope="scope">{{ scope.row.payKindName }}</template>
          </el-table-column>
          <el-table-column label="数量" prop="partQty" align="center" width="80">
            <template slot-scope="scope">{{ scope.row.partQty }}</template>
          </el-table-column>
          <el-table-column label="单价" prop="partPrice" align="center" width="80">
            <template slot-scope="scope">{{ scope.row.partPrice }}</template>
          </el-table-column>
          <el-table-column label="合计" prop="priceAmount" align="center" width="80">
            <template slot-scope="scope">{{ scope.row.priceAmount }}</template>
          </el-table-column>
          <el-table-column label="业务类别" prop="businessTypeName" align="center" width="100">
            <template slot-scope="scope">{{ scope.row.businessTypeName }}</template>
          </el-table-column>
          <el-table-column label="折扣率（%）" prop="partDiscount" align="center" width="100">
            <template slot-scope="scope">{{ scope.row.partDiscount }}</template>
          </el-table-column>
          <el-table-column label="费用预估" prop="partDueAmount" align="center" width="100">
            <template slot-scope="scope">{{ scope.row.partDueAmount }}</template>
          </el-table-column>
          <el-table-column label="备注" prop="note" align="center">
            <template slot-scope="scope">{{ scope.row.note }}</template>
          </el-table-column>
        </el-table>
        <div class="filter-container filter-title" ref="conTitleHeight">其他费用</div>
        <!-- 其他费用表 -->
        <el-table
          class="multipleTable"
          :data="allParam.seBuRepairOther"
          element-loading-text="Loading"
          border
          fit
          stripe
          height="100"
          ref="multipleTable"
        >
          <el-table-column align="center" label="序号" width="60" type="index" prop="id"></el-table-column>
          <el-table-column label="其他费用类别" prop="otherAmountType" align="center">
            <template slot-scope="scope">{{ scope.row.otherAmountType }}</template>
          </el-table-column>
          <el-table-column label="付费性质" prop="payKindName" align="center">
            <template slot-scope="scope">{{ scope.row.payKindName }}</template>
          </el-table-column>
          <el-table-column label="业务类别" prop="businessTypeName" align="center">
            <template slot-scope="scope">{{ scope.row.businessTypeName }}</template>
          </el-table-column>
          <el-table-column label="其他费用" prop="otherAmount" align="center">
            <template slot-scope="scope">{{ scope.row.otherAmount }}</template>
          </el-table-column>
          <el-table-column label="备注" prop="remark" align="center">
            <template slot-scope="scope">{{ scope.row.remark }}</template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <!-- 页签3 -->
      <el-tab-pane label="总费用" name="third">
        <!-- 滚动条 -->
        <div style="height:465px;overflow-y:auto">
          <div class="filter-container filter-title">维修应收费用</div>
          <div class="filter-container filter-params">
            <el-row :gutter="26">
              <el-col :span="6">
                <label>应收费用</label>
                <el-input
                  size="small"
                  oninput="value=value.replace(/[^0-9.]/g,'')"
                  :readonly="lockFlag"
                  v-model="paramOperator.repairDueAmount"
                />
              </el-col>
              <el-col :span="6">
                <label>工时费</label>
                <el-input
                  size="small"
                  oninput="value=value.replace(/[^0-9.]/g,'')"
                  :readonly="lockFlag"
                  v-model="paramOperator.wiAmount"
                />
              </el-col>
              <el-col :span="6">
                <label>备件费</label>
                <el-input
                  size="small"
                  oninput="value=value.replace(/[^0-9.]/g,'')"
                  :readonly="lockFlag"
                  v-model="paramOperator.partAmount"
                />
              </el-col>
              <el-col :span="6">
                <label>其他费</label>
                <el-input
                  size="small"
                  oninput="value=value.replace(/[^0-9.]/g,'')"
                  :readonly="lockFlag"
                  v-model="paramOperator.otherAmount"
                />
              </el-col>
            </el-row>
          </div>
          <div class="filter-container filter-title">金额/付费性质</div>
          <!-- 第一行 -->
          <el-row :gutter="10">
            <el-col class="floatStyle">
              <label>项目</label>
            </el-col>
            <el-col class="floatStyle">
              <label>普通</label>
            </el-col>
            <el-col class="floatStyle">
              <label>免保</label>
            </el-col>
            <el-col class="floatStyle">
              <label>保修</label>
            </el-col>
            <el-col class="floatStyle">
              <label>保险</label>
            </el-col>
            <el-col class="floatStyle">
              <label>内部</label>
            </el-col>
            <el-col class="floatStyle">
              <label>协议</label>
            </el-col>
            <el-col class="floatStyle">
              <label>PDI</label>
            </el-col>
            <el-col class="floatStyle">
              <label>合计</label>
            </el-col>
          </el-row>
          <!-- 第二行 -->
          <el-row :gutter="10">
            <el-col class="floatStyle">
              <label>应收金额</label>
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.dueCommon"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.dueFree"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.dueGuarantee"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.dueInsure"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.dueInner"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.duePolicy"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.duePDI"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.dueAllAmount"
              />
            </el-col>
          </el-row>
          <!-- 第三行 -->
          <el-row :gutter="10">
            <el-col class="floatStyle">
              <label>实收金额</label>
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.factCommon"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.factFree"
              />
            </el-col>

            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.factGuarantee"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.factInsure"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.factInner"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.factPolicy"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.factPDI"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.factAllAmount"
              />
            </el-col>
          </el-row>
          <!-- 第四行 -->
          <el-row :gutter="10">
            <el-col class="floatStyle">
              <label>差额</label>
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.diffCommon"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.diffFree"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.diffGuarantee"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.diffInsure"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.diffInner"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.diffPolicy"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.diffPDI"
              />
            </el-col>
            <el-col class="floatStyle">
              <el-input
                size="small"
                oninput="value=value.replace(/[^0-9.]/g,'')"
                :readonly="lockFlag"
                v-model="paramOperator.diffAllAmount"
              />
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="6">
              <div class="filter-container filter-title">应收费用分担/按付费方式</div>
              <div class="filter-container filter-params">
                <el-col>
                  <label>总金额</label>
                  <el-input
                    size="small"
                    oninput="value=value.replace(/[^0-9.]/g,'')"
                    :readonly="lockFlag"
                    v-model="paramOperator.sumAmount"
                  />
                </el-col>
                <el-col>
                  <label>总折让额</label>
                  <el-input
                    size="small"
                    oninput="value=value.replace(/[^0-9.]/g,'')"
                    :readonly="lockFlag"
                    v-model="paramOperator.sumDiscount"
                  />
                </el-col>
                <el-col>
                  <label>现金</label>
                  <el-input
                    size="small"
                    oninput="value=value.replace(/[^0-9.]/g,'')"
                    :readonly="lockFlag"
                    v-model="paramOperator.sumCash"
                  />
                </el-col>
                <el-col>
                  <label>银行</label>
                  <el-input
                    size="small"
                    oninput="value=value.replace(/[^0-9.]/g,'')"
                    :readonly="lockFlag"
                    v-model="paramOperator.sumBank"
                  />
                </el-col>
                <el-col>
                  <label>微信</label>
                  <el-input
                    size="small"
                    oninput="value=value.replace(/[^0-9.]/g,'')"
                    :readonly="lockFlag"
                    v-model="paramOperator.sumWechat"
                  />
                </el-col>
                <el-col>
                  <label>支付宝</label>
                  <el-input
                    size="small"
                    oninput="value=value.replace(/[^0-9.]/g,'')"
                    :readonly="lockFlag"
                    v-model="paramOperator.sumAlipay"
                  />
                </el-col>
                <el-col>
                  <label>内部</label>
                  <el-input
                    size="small"
                    oninput="value=value.replace(/[^0-9.]/g,'')"
                    :readonly="lockFlag"
                    v-model="paramOperator.sumInner"
                  />
                </el-col>
                <el-col>
                  <label>厂家挂账</label>
                  <el-input
                    size="small"
                    oninput="value=value.replace(/[^0-9.]/g,'')"
                    :readonly="lockFlag"
                    v-model="paramOperator.sumFactory"
                  />
                </el-col>
                <el-col>
                  <label>保险挂账</label>
                  <el-input
                    size="small"
                    oninput="value=value.replace(/[^0-9.]/g,'')"
                    :readonly="lockFlag"
                    v-model="paramOperator.sumInsure"
                  />
                </el-col>
                <el-col>
                  <label>协议挂账</label>
                  <el-input
                    size="small"
                    oninput="value=value.replace(/[^0-9.]/g,'')"
                    :readonly="lockFlag"
                    v-model="paramOperator.sumPolicy"
                  />
                </el-col>
              </div>
            </el-col>

            <el-col :span="12">
              <div class="filter-container filter-title">应收费用分担-按付费性质分配</div>
              <el-table
                class="multipleTable"
                :data="paramOperator.repairBlaceApplySum"
                element-loading-text="Loading"
                border
                fit
                stripe
                height="150px"
                ref="multipleTable"
              >
                <el-table-column align="center" label="序号" width="60" type="index" prop="id"></el-table-column>
                <el-table-column label="付费性质+" align="center" width="100">
                  <template slot-scope="scope">
                    <el-select
                      collapse-tags
                      filterable
                      v-model="scope.row.payMode"
                      placeholder="请选择"
                      size="small"
                      @change="wiPayKindChange(scope.$index)"
                      ref="selectTest"
                    >
                      <el-option
                        v-for="item in payKindList"
                        :key="item.lookupValueCode"
                        :label="item.lookupValueName"
                        :value="item.lookupValueCode"
                      >{{item.lookupValueName}}</el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column label="应收单位名称+" align="center" width="160">
                  <template slot-scope="{row}">
                    <el-input v-model="row.payCompany" size="mini" placeholder="请输入" />
                  </template>
                </el-table-column>
                <el-table-column label="付费方式+" align="center" width="100">
                  <template slot-scope="scope">
                    <div>
                      <el-select
                        collapse-tags
                        filterable
                        v-model="scope.row.payType"
                        @change="wiPayTypeChange(scope.$index)"
                        placeholder="请选择"
                        size="small"
                      >
                        <el-option
                          v-for="item in payTypeList"
                          :key="item.lookupValueCode"
                          :label="item.lookupValueName"
                          :value="item.lookupValueCode"
                        >{{item.lookupValueName}}</el-option>
                      </el-select>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="应收费用+" prop="dueAmount" align="center" width="100">
                  <template slot-scope="{row}">
                    <el-input
                      size="small"
                      oninput="value=value.replace(/[^0-9.]/g,'')"
                      v-model="row.dueAmount"
                      @change="dueAmountChange"
                    />
                  </template>
                </el-table-column>
                <el-table-column label="备注+" align="center" width="250">
                  <template slot-scope="{row}">
                    <el-input v-model="row.remark" size="mini" placeholder="请输入" />
                  </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="80" align="center">
                  <template slot-scope="scope">
                    <el-button
                      @click.native.prevent="deleteRow(scope.$index, paramOperator.repairBlaceApplySum)"
                      type="text"
                      size="small"
                    >删除</el-button>
                  </template>
                </el-table-column>
              </el-table>

              <div class="filter-container filter-title">折让项目</div>
              <el-table
                class="multipleTable"
                :data="paramOperator.balanceDiscountItems"
                element-loading-text="Loading"
                border
                fit
                stripe
                height="150px"
                ref="multipleTable"
              >
                <el-table-column align="center" label="序号" width="60" type="index" prop="id"></el-table-column>
                <el-table-column fixed="right" label="操作" width="80" align="center">
                  <template slot-scope="scope">
                    <el-button
                      @click.native.prevent="deleteRow(scope.$index, paramOperator.balanceDiscountItems)"
                      type="text"
                      size="small"
                    >删除</el-button>
                  </template>
                </el-table-column>
                <el-table-column label="折让项目+" align="center" width="100">
                  <template slot-scope="scope">
                    <el-select
                      collapse-tags
                      filterable
                      v-model="scope.row.payMode"
                      @change="wiPayKindChange(scope.$index)"
                      placeholder="请选择"
                      size="small"
                    >
                      <el-option
                        v-for="item in payModeList"
                        :key="item.lookupValueCode"
                        :label="item.lookupValueName"
                        :value="item.lookupValueCode"
                      >{{item.lookupValueName}}</el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column label="折让金额" align="center" width="100">
                  <template
                    slot-scope="scope"
                  >{{ scope.row.discountAmount=parseFloat(scope.row.wiDiscount)+parseFloat(scope.row.partDiscount) }}</template>
                </el-table-column>
                <el-table-column label="工时折让+" align="center" width="100">
                  <template slot-scope="{row}">
                    <el-input
                      size="small"
                      oninput="value=value.replace(/[^0-9.]/g,'')"
                      v-model="row.wiDiscount"
                      @change="wiDiscountChange"
                    />
                  </template>
                </el-table-column>
                <el-table-column label="备件折让+" align="center" width="100">
                  <template slot-scope="{row}">
                    <el-input
                      size="small"
                      oninput="value=value.replace(/[^0-9.]/g,'')"
                      v-model="row.partDiscount"
                      @change="partDiscountChange"
                    />
                  </template>
                </el-table-column>
                <el-table-column label="备注" prop="remark" align="center" width="250">
                  <template slot-scope="scope">{{ scope.row.remark }}</template>
                </el-table-column>
              </el-table>
            </el-col>
            <el-col :span="6">
              <div class="filter-container filter-title">推荐项目</div>
              <el-input
                v-model="allParam.recommendItem"
                type="textarea"
                maxlength="5000"
                rows="15"
              />
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog :visible.sync="dialogVisible" :close-on-click-modal="closeOnClickModal" width="80%">
      <div style="height:465px;overflow-y:auto">
        <div ref="print">
          <el-row :gutter="26">
            <el-col :span="12" align="right">
              <label style="font-size:30px">委托维修结算单</label>
            </el-col>

            <el-col :span="12" align="center">
              <table style=" width: 300px;">
                <tr>
                  <th>工单</th>
                  <th>优先派工</th>
                  <th>服务代表</th>
                </tr>
                <tr>
                  <td>{{this.printDataInfo.repairOrderCode}}</td>
                  <td>-</td>
                  <td>{{this.printDataInfo.saName}}</td>
                </tr>
              </table>
            </el-col>
          </el-row>

          <br />
          <br />

          <el-row>
            <el-col :span="12" align="left">
              <label class="fontstyle">{{this.printDataInfo.storesinformation[0].dlrFullName}}</label>
            </el-col>
            <el-col :span="6">
              <label class="fontstyle">服务电话：</label>
              <label class="fontstyle">{{this.printDataInfo.storesinformation[0].serviceTel}}</label>
            </el-col>
            <el-col :span="6">
              <label class="fontstyle">结算时间：</label>
              <label class="fontstyle">null</label>
            </el-col>
            <el-col :span="6">
              <label class="fontstyle">地址：</label>
              <label class="fontstyle">{{this.printDataInfo.storesinformation[0].linkAddr}}</label>
            </el-col>
          </el-row>

          <br />

          <el-row :gutter="26">
            <el-col align="center">
              <table style=" width: 100%;text-align:left;">
                <tr>
                  <td>姓名：{{this.printDataInfo.custName}}</td>
                  <td>电话号码：{{this.printDataInfo.custTelphone}}</td>
                  <td>送修人：{{this.printDataInfo.repairMan}}</td>
                  <td>送修人电话：{{this.printDataInfo.repairTel}}</td>
                </tr>
                <tr>
                  <td>VIN：{{this.printDataInfo.vin}}</td>
                  <td>车牌号：{{this.printDataInfo.carLicense}}</td>
                  <td>车型：{{this.printDataInfo.carTypeCode}}</td>
                  <td>颜色：{{this.printDataInfo.carColorName}}</td>
                </tr>
                <tr>
                  <td>行驶里程：{{this.printDataInfo.mileage}}</td>
                  <td>购车日期：null</td>
                  <td>送修时间：{{this.printDataInfo.trunRepairDate}}</td>
                  <td>完工时间：{{this.printDataInfo.repairFinishDate}}</td>
                </tr>
                <tr>
                  <td colspan="4">地址：</td>
                </tr>
              </table>
            </el-col>
          </el-row>

          <br />

          <el-row :gutter="26">
            <el-col align="center">
              <table style=" width: 100%;text-align:left;">
                <tr>
                  <td style="text-align:center;">客户描述</td>
                  <td style="width:80%">{{this.printDataInfo.csDesc}}</td>
                </tr>
                <tr>
                  <td style="text-align:center;">检查结果</td>
                  <td style="width:80%">{{this.printDataInfo.disposeInfo}}</td>
                </tr>
                <tr>
                  <td style="text-align:center;">建议维修项目</td>
                  <td style="width:80%">{{this.printDataInfo.recommendItem}}</td>
                </tr>
              </table>
            </el-col>
          </el-row>

          <br />

          <el-row class="textCenter">
            <el-col :span="24" aglin="center" class="border1 height line-height">维修项目</el-col>
          </el-row>
          <el-row class="textCenter">
            <el-col :span="1" aglin="center" class="border1 height line-height">序号</el-col>
            <el-col :span="5" aglin="center" class="border1 height line-height">维修内容</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">工时</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">单价</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">工时费</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">预估费用</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">业务类别</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">备注</el-col>
          </el-row>
          <el-row
            class="textCenter"
            v-for="(item, index) in printDataInfo.maintenancework"
            :key="index"
          >
            <el-col :span="1" aglin="center" class="border1 height line-height">{{index}}</el-col>
            <el-col :span="5" aglin="center" class="border1 height line-height">{{item.wiName}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.saleWorkQty}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.wiPrice}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.wiAmount}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.wiPreAmount}}</el-col>
            <el-col
              :span="3"
              aglin="center"
              class="border1 height line-height"
            >{{item.businessTypeName}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.note}}</el-col>
          </el-row>

          <br />

          <el-row class="textCenter">
            <el-col :span="24" aglin="center" class="border1 height line-height">维修备件</el-col>
          </el-row>
          <el-row class="textCenter">
            <el-col :span="1" aglin="center" class="border1 height line-height">序号</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">备件编号</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">备件名称</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">单价</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">数量</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">备件费</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">业务类别</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">预估费用</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">备注</el-col>
          </el-row>
          <el-row
            class="textCenter"
            v-for="(item, index) in printDataInfo.maintenancerepairparts"
            :key="index"
          >
            <el-col :span="1" aglin="center" class="border1 height line-height">{{index}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.partNo}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.partName}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.partPrice}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.partQty}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.partAmount}}</el-col>
            <el-col
              :span="3"
              aglin="center"
              class="border1 height line-height"
            >{{item.businessTypeName}}</el-col>
            <el-col
              :span="3"
              aglin="center"
              class="border1 height line-height"
            >{{item.prePartAmount}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">{{item.note}}</el-col>
          </el-row>

          <br />

          <el-row class="textCenter">
            <el-col :span="24" aglin="center" class="border1 height line-height">其他费用</el-col>
          </el-row>
          <el-row class="textCenter">
            <el-col :span="4" aglin="center" class="border1 height line-height">序号</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">其他费用类别</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">业务类别</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">其他费用合计</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">预估费用</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">备注</el-col>
          </el-row>
          <el-row
            class="textCenter"
            v-for="(item, index) in printDataInfo.otherexpenses"
            :key="index"
          >
            <el-col :span="4" aglin="center" class="border1 height line-height">{{index}}</el-col>
            <el-col
              :span="4"
              aglin="center"
              class="border1 height line-height"
            >{{item.costTypeName}}</el-col>
            <el-col
              :span="4"
              aglin="center"
              class="border1 height line-height"
            >{{item.businessTypeName}}</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">{{item.otherAmount}}</el-col>
            <el-col
              :span="4"
              aglin="center"
              class="border1 height line-height"
            >{{item.preOtherAmount}}</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">{{item.remark}}</el-col>
          </el-row>

          <br />

          <el-row class="textCenter">
            <el-col :span="12">
              <table style=" width: 100%;">
                <tr>
                  <th rowspan="5">应收费用</th>
                  <th></th>
                  <th>费用</th>
                  <th>已付</th>
                  <th>应收</th>
                </tr>
                <tr>
                  <td>工时费用：</td>
                  <td>{{this.shouList[0].allAmount}}</td>
                  <td>{{this.shouList[0].disAmount}}</td>
                  <td>{{this.shouList[0].dueAmount}}</td>
                </tr>
                <tr>
                  <td>备件费用：</td>
                  <td>{{this.shouList[1].allAmount}}</td>
                  <td>{{this.shouList[1].disAmount}}</td>
                  <td>{{this.shouList[1].dueAmount}}</td>
                </tr>
                <tr>
                  <td>其他费用：</td>
                  <td>{{this.shouList[2].allAmount}}</td>
                  <td>{{this.shouList[2].disAmount}}</td>
                  <td>{{this.shouList[2].dueAmount}}</td>
                </tr>
                <tr>
                  <td>合计：</td>
                  <td>{{this.shouList[3].allAmount}}</td>
                  <td>{{this.shouList[3].disAmount}}</td>
                  <td>{{this.shouList[3].dueAmount}}</td>
                </tr>
              </table>
            </el-col>

            <el-col :span="10" style="margin-left:20px;height：150px;">
              <table style=" width: 100%;" class="tdHeight">
                <tr>
                  <th rowspan="5">实收费用</th>
                  <td colspan="3">应收总计：</td>
                  <td>{{this.factList[0].amount}}</td>
                </tr>
                <tr>
                  <td colspan="3">折让：</td>
                  <td>{{this.factList[1].amount}}</td>
                </tr>
                <tr>
                  <td colspan="3">公司挂账：</td>
                  <td>{{this.factList[2].amount}}</td>
                </tr>
                <tr>
                  <td colspan="3">最终客户付款：</td>
                  <td>{{this.factList[3].amount}}</td>
                </tr>
              </table>
            </el-col>
          </el-row>

          <br />
          <br />
          <br />

          <div>
            <el-col :span="6">服务代表签名：</el-col>
            <el-col :span="6">日期：</el-col>
            <el-col :span="6">客户签名：</el-col>
            <el-col :span="6">日期：</el-col>
          </div>
        </div>
      </div>
      <div style="height:40px;float:right;padding-top:20px">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="printOrder()">打 印</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import LookupValue from "@/components/org/LookupValue";
import datePicker from "@/components/org/datePicker/datePicker";
import { apiRepairBalanceApply, seApis } from "@/api/graphQLApiList/se";
import {
  doQueryDetail,
  saveApply,
  queryPrint
} from "@/api/se/repair/serviceRepairBalanceApply";
import { doQueryValueList } from "@/api/se/process/settlement/seBuRepairBalanceQuery";
export default {
  name: "repairBalanceApplyDetail",
  components: {
    LookupValue,
    datePicker,
    seApis
  },
  props: {
    closeOnClickModal: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  created() {
    this.queryLoadDetail(1);
    this.calculate();
  },
  //渲染后
  mounted() {},
  data() {
    return {
      //付费性质值列表查询参数
      paramKind: {
        oemCode: "",
        groupCode: "",
        lookupTypeCode: "SE0022",
        lookupValueCode: "",
        lookupValueName: "",
        remark: ""
      },
      //付费方式值列表查询参数
      paramType: {
        oemCode: "",
        groupCode: "",
        lookupTypeCode: "FI0001",
        lookupValueCode: "",
        lookupValueName: "",
        remark: ""
      },
      payMode: {
        lookupTypeCode: "SE0045",
        lookupValueCode: "",
        lookupValueName: "",
        remark: ""
      },
      payKindList: [], //付费性质值列表
      payTypeList: [], //付费方式值列表
      payModeList: [],
      //实收费用数组
      factList: [
        { LabName: "应收总计", amount: 0 },
        { LabName: "折让", amount: 0 },
        { LabName: "公司挂账", amount: 0 },
        { LabName: "最终客户付款", amount: 0 }
      ],
      //应收费用数组
      shouList: [
        { LabName: "工时费用：", allAmount: 0, disAmount: 0, dueAmount: 0 },
        { LabName: "备件费用：", allAmount: 0, disAmount: 0, dueAmount: 0 },
        { LabName: "其他费用：", allAmount: 0, disAmount: 0, dueAmount: 0 },
        { LabName: "合计：", allAmount: 0, disAmount: 0, dueAmount: 0 }
      ],
      //打印界面参数
      viewPrint: {
        // 工时
        wiAmount: 0,
        wiDisAmount: 0,
        wiDueAmount: 0,

        // 备件
        partAmount: 0,
        partDisAmount: 0,
        partDueAmount: 0,

        //其他费用
        otherAmount: 0,
        otherDisAmount: 0,
        otherDueAmount: 0,

        // 总计
        allAmount: 0,
        allDisAmount: 0,
        allDueAmount: 0,

        // 实收费
        amount: 0,
        disAmount: 0,
        runupAmount: 0,
        factAmount: 0
      },
      //查询打印参数
      paramPrint: {
        oemCode: "",
        groupCode: "",
        repairOrderId: ""
      },
      //查询打印结果
      printDataInfo: {
        repairOrderCode: "",
        isFirst: "",
        saName: "",
        custName: "",
        addr: "",
        custTelphone: "",
        carSeriesCode: "",
        carTypeCode: "",
        vin: "",
        carLicense: "",
        engineNo: "",
        deliveryDate: "",
        carColorName: "",
        submitBalanceDate: "",
        mileage: "",
        invoiceDate: "",
        repairTime: "",
        preGetDate: "",
        trunRepairDate: "",
        repairFinishDate: "",
        csDesc: "",
        disposeInfo: "",
        recommendItem: "",
        wiAmount: "",
        partAmount: "",
        otherAmount: "",
        amountTotal: "",
        wiDueAmount: "",
        partDueFee: "",
        sumOtherDueAmount: "",
        dueAmountTotal: "",
        receiptsAmount: "",
        pactRunupAmount: "",
        discountAmount: "",
        amountTotal: "",
        repairMan: "",
        repairTel: "",
        actionType: "",
        storesinformation: [
          {
            dlrFullName: "",
            dlrCode: "",
            dlrId: "",
            dlrShortName: "",
            linkAddr: "",
            serviceTel: ""
          }
        ],
        otherexpenses: [
          {
            preOtherAmount: "",
            otherAmount: "",
            costTypeName: "",
            businessTypeName: "",
            remark: ""
          }
        ],
        maintenancework: [
          {
            wiCode: "",
            wiName: "",
            saleWorkQty: "",
            wiPrice: "",
            wiAmount: "",
            wiPreAmount: "",
            businessTypeName: "",
            note: ""
          }
        ],
        maintenancerepairparts: [
          {
            partNo: "",
            partName: "",
            partQty: "",
            partPrice: "",
            partAmount: "",
            prePartAmount: "",
            businessTypeName: "",
            note: ""
          }
        ]
      },
      //打印界面可见性
      dialogVisible: false,
      title: "维修结算单",
      a: "",
      lockFlag: true,
      isSuccess: true, //保存结果标识
      errorMsg: "", //错误信息记录器
      isDisabled: true, //保存按钮是否可用
      isMul: false, //下拉框是否多选
      isshow: false, //是否显示值列表名称
      payKindCode: "SE0022", //付费性质编码
      payTypeCode: "", //付款方式值编码
      discountItemCode: "SE0045", //折让项目
      //页面加载数据
      allParam: null,

      //界面操作参数集合
      paramOperator: {
        //复选框复制参数
        isWait: null, //是否在店等待
        isFirst: null, //是否优先派工
        isClean: null, //是否洗车
        isAccident: null, //是否事故车

        //维修应收费用
        repairDueAmount: 0, //应收
        wiAmount: 0, //工时
        partAmount: 0, //备件
        otherAmount: 0, //其他

        //金额/付费性质
        dueCommon: 0, //应收普通
        dueFree: 0, //应收免保
        dueGuarantee: 0, //应收保修
        dueInsure: 0, //应收保险
        dueInner: 0, //应收内部
        duePolicy: 0, //应收协议
        duePDI: 0, //应收pdi
        dueAllAmount: 0, //应收总费用

        factCommon: 0, //实收普通
        factFree: 0, //实收免保
        factGuarantee: 0, //实收保修
        factInsure: 0, //实收保险
        factInner: 0, //实收内部
        factPolicy: 0, //实收协议
        factPDI: 0, //实收pdi
        factAllAmount: 0, //实收总费用

        diffCommon: 0, //差额普通
        diffFree: 0, //差额免保
        diffGuarantee: 0, //差额保修
        diffInsure: 0, //差额保险
        diffInner: 0, //差额内部
        diffPolicy: 0, //差额协议
        diffPDI: 0, //差额pdi
        diffAllAmount: 0, //差额总费用

        //维修费用分担/按付费方式
        sumAmount: 0, //合计总金额
        sumDiscount: 0, //合计折让金额
        sumCash: 0, //现金
        sumBank: 0, //银行
        sumWechat: 0, //微信
        sumAlipay: 0, //支付宝
        sumInner: 0, //内部
        sumFactory: 0, //厂家挂账
        sumInsure: 0, //保险挂账
        sumPolicy: 0, //协议挂账

        repairBlaceApplySum: [],
        //折让
        balanceDiscountItems: []
      },
      //提交结算申请操作参数
      paramSave: {
        oemCode: "",
        groupcode: "",
        oemId: "",
        groupId: "",
        repairGatheringId: "",
        custName: "",
        vin: "",
        carBrandCode: "",
        carId: "",
        saEmpName: "",
        repairOrderId: "",
        repairOrderCode: "",
        recommendItem: "",
        wiAmount: 0,
        partAmount: 0,
        otherAmount: 0,
        receiptsAmount: 0,
        runupAmount: 0,
        gatheringEmpId: "",
        gatheringEmpName: "",
        cashAmount: 0,
        bankAmount: 0,
        collectAmount: 0,
        discountAmount: 0,
        factoyrRunupAmount: 0,
        pactRunupAmount: 0,
        dlrId: "",
        cardAmount: 0,
        dueWiAmount: 0,
        duePartAmount: 0,
        dueOtherAmount: 0,
        mobilePay: 0,
        repairOrderId: "",
        updateControlId: "",
        repairBlaceApplySum: [],
        balanceDiscountItems: []
      },
      num: 0,
      //页面加载参数
      paramLoad: {
        dlrId: "202",
        oemCode: "",
        groupCode: "",
        repairGatheringId: "1",
        repairOrderId: "",
        repairOrderCode: "",
        vin: "",
        pactCompanyId: "",
        repairBalanceCode: ""
      },
      listLoading: false,
      activeName: "third"
    };
  },
  methods: {
    //付费方式值变更
    wiPayTypeChange(index) {
      var payKind = this.paramOperator.repairBlaceApplySum[index].payMode;
      var payType = this.paramOperator.repairBlaceApplySum[index].payType;
      if (payKind == "31301") {
        //普通
        if (payType == "3") {
          this.$alert("付费性质为普通时，付费方式不能是挂账", "提示", {
            confirmButtonText: "确定"
          });
          this.paramOperator.repairBlaceApplySum[index].payType = "";
          return;
        }
      } else if (payKind == "31302") {
        if (payType != "3") {
          this.$alert("付费性质为免保时，付费方式只能为挂账！", "提示", {
            confirmButtonText: "确定"
          });
          this.paramOperator.repairBlaceApplySum[index].payType = "";

          return;
        }
        //免保
      } else if (payKind == "31303") {
        //保修
      } else if (payKind == "31304") {
        if (payType != "0" && payType != "5" && payType != "6") {
          this.$alert(
            "付费性质为保险时，付费方式只能为现金、支付宝、微信！",
            "提示",
            {
              confirmButtonText: "确定"
            }
          );
          this.paramOperator.repairBlaceApplySum[index].payType = "";

          return;
        }
        //保险
      } else if (payKind == "31305") {
        if (payType != "2") {
          this.$alert("付费性质为内部时，付费方式只能为内部！", "提示", {
            confirmButtonText: "确定"
          });
          this.paramOperator.repairBlaceApplySum[index].payType = "";

          return;
        }
        //内部
      } else if (payKind == "31306") {
        //协议
      } else if (payKind == "31307") {
        //PDI
      }
    },
    //付费性质值变更
    wiPayKindChange(index) {
      //判断付费性质是否有对应费用
      console.log(this.$refs.selectTest.value, index);
      var payKind = this.paramOperator.repairBlaceApplySum[index].payMode;
      if (payKind == "31302" && this.paramOperator.dueFree == 0) {
        this.$alert("没有免保费用，无法选择免保付费性质！", "提示", {
          confirmButtonText: "确定"
        });
        return;
      } else if (payKind == "31303" && this.paramOperator.dueGuarantee == 0) {
        this.$alert("没有保修费用，无法选择保修付费性质！", "提示", {
          confirmButtonText: "确定"
        });
        return;
      } else if (payKind == "31304" && this.paramOperator.dueInsure == 0) {
        this.$alert("没有保险费用，无法选择保险付费性质！", "提示", {
          confirmButtonText: "确定"
        });
        return;
      } else if (payKind == "31305" && this.paramOperator.dueInner == 0) {
        this.$alert("没有内部费用，无法选择内部付费性质！", "提示", {
          confirmButtonText: "确定"
        });
        return;
      } else if (payKind == "31306" && this.paramOperator.duePolicy == 0) {
        this.$alert("没有协议费用，无法选择协议付费性质！", "提示", {
          confirmButtonText: "确定"
        });
        return;
      } else if (payKind == "31307" && this.paramOperator.duePDI == 0) {
        this.$alert("没有PDI费用，无法选择PDI付费性质！", "提示", {
          confirmButtonText: "确定"
        });
        return;
      }

      this.paramOperator.repairBlaceApplySum[index].payType = "";
    },
    //查询付费性质
    queryKind(page) {
      const that = this;
      doQueryValueList(50, page, that.paramKind).then(response => {
        if (response.data.mdsLookupValueQueryByPage.result === "1") {
          that.payKindList =
            response.data[seApis.mdsLookupValueQueryByPage.ServiceCode].rows;
        }
      });
    },
    //查询付费方式
    queryType(page) {
      const that = this;
      doQueryValueList(50, page, that.paramType).then(response => {
        if (response.data.mdsLookupValueQueryByPage.result === "1") {
          that.payTypeList =
            response.data[seApis.mdsLookupValueQueryByPage.ServiceCode].rows;
        }
      });
    },
    //折让项目查询
    queryType(page) {
      const that = this;
      doQueryValueList(50, page, that.payMode).then(response => {
        if (response.data.mdsLookupValueQueryByPage.result === "1") {
          that.payModeList =
            response.data[seApis.mdsLookupValueQueryByPage.ServiceCode].rows;
        }
      });
    },
    //校验付费性质与付款方式
    checkPayKindAndType() {
      //debugger;
      var rows = this.paramOperator.repairBlaceApplySum;
      for (var n = 0; n < rows.length; n++) {
        if (rows[n].payMode == "31301") {
          //普通
          if (rows[n].payType == "3") {
            this.$alert(
              "【应收费用分担-按付费性质分配】中，付费性质为普通时，付款方式不能为挂账！",
              "提示",
              {
                confirmButtonText: "确定"
              }
            );
            return;
          }
        } else if (rows[n].payMode == "31302") {
          //免保
          if (
            parseFloat(rows[n].dueAmount) != 0 &&
            this.paramOperator.factFree == 0
          ) {
            this.$alert(
              "【应收费用分担-按付费性质分配】中，该单据没有付费性质为免保的消费，付费性质不能选择免保",
              "提示",
              {
                confirmButtonText: "确定"
              }
            );
            return;
          }
          if (rows[n].payType != "3") {
            this.$alert(
              "【应收费用分担-按付费性质分配】中，付费性质为免保时，付费方式只能是挂账",
              "提示",
              {
                confirmButtonText: "确定"
              }
            );
            return;
          }
        } else if (rows[n].payMode == "31303") {
          //保修
          if (
            parseFloat(rows[n].dueAmount) != 0 &&
            this.paramOperator.factGuarantee == 0
          ) {
            this.$alert(
              "【应收费用分担-按付费性质分配】中，该单据没有付费性质为保修的消费，付费性质不能选择保修",
              "提示",
              {
                confirmButtonText: "确定"
              }
            );
            return;
          }
        } else if (rows[n].payMode == "31304") {
          //保险

          if (
            parseFloat(rows[n].dueAmount) != 0 &&
            this.paramOperator.factInsure == 0
          ) {
            this.$alert(
              "【应收费用分担-按付费性质分配】中，该单据没有付费性质为保险的消费，付费性质不能选择保险",
              "提示",
              {
                confirmButtonText: "确定"
              }
            );
            return;
          }
          if (
            rows[n].payType == "2" ||
            rows[n].payType == "3" ||
            rows[n].payType == "4"
          ) {
            this.$alert(
              "【应收费用分担-按付费性质分配】中，付费性质为保险时，付费方式不能是内部、挂账、预收款",
              "提示",
              {
                confirmButtonText: "确定"
              }
            );
            return;
          }
        } else if (rows[n].payMode == "31305") {
          //内部
          if (
            parseFloat(rows[n].dueAmount) != 0 &&
            this.paramOperator.factInner == 0
          ) {
            this.$alert(
              "该单据没有付费性质为内部的消费，付费性质不能选择内部",
              "提示",
              {
                confirmButtonText: "确定"
              }
            );
            return;
          }
          if (rows[n].payType != "2") {
            this.$alert(
              "【应收费用分担-按付费性质分配】中，付费性质为内部时，付费方式只能是内部",
              "提示",
              {
                confirmButtonText: "确定"
              }
            );
            return;
          }
        } else if (rows[n].payMode == "31306") {
          //协议
          if (
            parseFloat(rows[n].dueAmount) != 0 &&
            this.paramOperator.factPolicy == 0
          ) {
            this.$alert(
              "【应收费用分担-按付费性质分配】中，该单据没有付费性质为协议的消费，付费性质不能选择协议",
              "提示",
              {
                confirmButtonText: "确定"
              }
            );
            return;
          }
        } else if (rows[n].payMode == "31307") {
          //PDI
          if (
            parseFloat(rows[n].dueAmount) != 0 &&
            this.paramOperator.factPDI == 0
          ) {
            this.$alert(
              "【应收费用分担-按付费性质分配】中，该单据没有付费性质为PDI的消费，付费性质不能选择PDI",
              "提示",
              {
                confirmButtonText: "确定"
              }
            );
            return;
          }
        } else {
          this.$alert(
            "【应收费用分担-按付费性质分配】中，付费性质不存在",
            "提示",
            {
              confirmButtonText: "确定"
            }
          );
          return;
        }
      }
    },
    //打印事件
    printOrder() {
      this.$print(this.$refs.print);
      this.dialogVisible = false;
    },
    //打印弹框
    printClick() {
      console.log(this.allParam);
      return;
      var that = this;
      //构建查询参数
      this.paramPrint.oemCode = this.paramLoad.oemCode;
      this.paramPrint.groupCode = this.paramLoad.groupCode;
      this.paramPrint.repairOrderId = this.paramLoad.repairOrderId;
      //查询打印数据
      queryPrint(10, 1, that.paramPrint).then(response => {
        if (response.data.seBuRepairBalanceApplyPrint.result === "1") {
          that.printDataInfo =
            response.data[
              apiRepairBalanceApply.seBuRepairBalanceApplyPrint.ServiceCode
            ].rows;

          //计算打印界面相关费用
          //工时
          this.viewPrint.wiAmount = parseFloat(this.printDataInfo.wiAmount);
          this.viewPrint.wiDisAmount =
            parseFloat(this.printDataInfo.wiAmount) -
            parseFloat(this.printDataInfo.wiDueAmount);
          this.viewPrint.wiDueAmo = parseFloat(this.printDataInfo.wiDueAmount);
          //备件
          this.viewPrint.partAmount = parseFloat(this.printDataInfo.partAmount);
          this.viewPrint.partDisAmount =
            parseFloat(this.printDataInfo.partAmount) -
            parseFloat(this.printDataInfo.partDueFee);
          this.viewPrint.partDueAmount = parseFloat(
            this.printDataInfo.partDueFee
          );
          //其他
          this.viewPrint.otherAmount = parseFloat(
            this.printDataInfo.otherAmount
          );
          this.viewPrint.otherDisAmount =
            parseFloat(this.printDataInfo.otherAmount) -
            parseFloat(this.printDataInfo.sumOtherDueAmount);
          this.viewPrint.otherDueAmount = parseFloat(
            this.printDataInfo.sumOtherDueAmount
          );
          //总计
          this.viewPrint.allAmount = parseFloat(this.printDataInfo.amountTotal);
          this.viewPrint.allDisAmount =
            parseFloat(this.printDataInfo.amountTotal) -
            parseFloat(this.printDataInfo.dueAmountTotal);
          this.viewPrint.allDueAmount = parseFloat(
            this.printDataInfo.dueAmountTotal
          );

          this.viewPrint.amount = parseFloat(this.printDataInfo.amountTotal);
          this.viewPrint.disAmount = parseFloat(
            this.printDataInfo.discountAmount
          );
          this.viewPrint.runupAmount = parseFloat(
            this.printDataInfo.pactRunupAmount
          );
          this.viewPrint.factAmount = parseFloat(
            this.printDataInfo.receiptsAmount
          );
          //构建应收费用数组
          this.shouList[0].allAmount = this.viewPrint.wiAmount;
          this.shouList[0].disAmount = this.viewPrint.wiDisAmount;
          this.shouList[0].dueAmount = this.viewPrint.wiDueAmount;

          this.shouList[1].allAmount = this.viewPrint.partAmount;
          this.shouList[1].disAmount = this.viewPrint.partDisAmount;
          this.shouList[1].dueAmount = this.viewPrint.partDueAmount;

          this.shouList[2].allAmount = this.viewPrint.otherAmount;
          this.shouList[2].disAmount = this.viewPrint.otherDisAmount;
          this.shouList[2].dueAmount = this.viewPrint.otherDueAmount;

          this.shouList[3].allAmount = this.viewPrint.allAmount;
          this.shouList[3].disAmount = this.viewPrint.allDisAmount;
          this.shouList[3].dueAmount = this.viewPrint.allDueAmount;

          //构建实收费用数组
          this.factList[0].amount = this.viewPrint.amount;
          this.factList[1].amount = this.viewPrint.disAmount;
          this.factList[2].amount = this.viewPrint.runupAmount;
          this.factList[3].amount = this.viewPrint.factAmount;
        }
      });

      this.dialogVisible = true;
    },
    //保存结果显示
    dialogBigSaveAfter() {
      if (this.isSuccess == true) {
        //保存成功，弹窗消失
        this.$alert("保存成功", "提示", {
          confirmButtonText: "确定"
        });
      } else {
        //保存失败
        this.$alert(this.errorMsg, "提示", {
          confirmButtonText: "确定"
        });
      }
    },
    //删除行
    deleteRow(index, rows) {
      rows.splice(index, 1);
      this.calculate();
    },

    //金额计算器
    calculate() {
      //清空
      this.paramOperator.factCommon = 0; //实收普通
      this.paramOperator.factFree = 0; //实收免保
      this.paramOperator.factGuarantee = 0; //实收保修
      this.paramOperator.factInsure = 0; //实收保险
      this.paramOperator.factInner = 0; //实收内部
      this.paramOperator.factPolicy = 0; //实收协议
      this.paramOperator.factPDI = 0; //实收pdi
      this.paramOperator.factAllAmount = 0; //实收总费用

      this.paramOperator.diffCommon = 0; //差额普通
      this.paramOperator.diffFree = 0; //差额免保
      this.paramOperator.diffGuarantee = 0; //差额保修
      this.paramOperator.diffInsure = 0; //差额保险
      this.paramOperator.diffInner = 0; //差额内部
      this.paramOperator.diffPolicy = 0; //差额协议
      this.paramOperator.diffPDI = 0; //差额pdi
      this.paramOperator.diffAllAmount = 0; //差额总费用

      //维修费用分担/按付费方式
      this.paramOperator.sumAmount = 0; //合计总金额
      this.paramOperator.sumDiscount = 0; //合计折让金额
      this.paramOperator.sumCash = 0; //现金
      this.paramOperator.sumBank = 0; //银行
      this.paramOperator.sumWechat = 0; //微信
      this.paramOperator.sumAlipay = 0; //支付宝
      this.paramOperator.sumInner = 0; //内部
      this.paramOperator.sumFactory = 0; //厂家挂账
      this.paramOperator.sumInsure = 0; //保险挂账
      this.paramOperator.sumPolicy = 0; //协议挂账

      var repairBlaceApplySum = this.paramOperator.repairBlaceApplySum;

      for (var n = 0; n < repairBlaceApplySum.length; n++) {
        //金额/付费性质-实收金额行
        if (repairBlaceApplySum[n].payMode == "31301") {
          //1、普通
          this.paramOperator.factCommon += parseFloat(
            repairBlaceApplySum[n].dueAmount
          );
        } else if (repairBlaceApplySum[n].payMode == "31302") {
          //2、免保
          this.paramOperator.factFree += parseFloat(
            repairBlaceApplySum[n].dueAmount
          );
        } else if (repairBlaceApplySum[n].payMode == "31303") {
          //3、保修
          this.paramOperator.factGuarantee += parseFloat(
            repairBlaceApplySum[n].dueAmount
          );
        } else if (repairBlaceApplySum[n].payMode == "31304") {
          //4、保险
          this.paramOperator.factInsure += parseFloat(
            repairBlaceApplySum[n].dueAmount
          );
        } else if (repairBlaceApplySum[n].payMode == "31305") {
          //5、内部
          this.paramOperator.factInner += parseFloat(
            repairBlaceApplySum[n].dueAmount
          );
        } else if (repairBlaceApplySum[n].payMode == "31306") {
          //6、协议
          this.paramOperator.factPolicy += parseFloat(
            repairBlaceApplySum[n].dueAmount
          );
        } else if (repairBlaceApplySum[n].payMode == "31307") {
          // 7、PDI
          this.paramOperator.factPDI += parseFloat(
            repairBlaceApplySum[n].dueAmount
          );
        }

        // 应收费用分担/按付费方式
        if (repairBlaceApplySum[n].payType == "0") {
          // 1、现金
          this.paramOperator.sumCash =
            this.paramOperator.sumCash +
            parseFloat(repairBlaceApplySum[n].dueAmount);
        } else if (repairBlaceApplySum[n].payType == "1") {
          // 2、银行
          this.paramOperator.sumBank =
            this.paramOperator.sumBank +
            parseFloat(repairBlaceApplySum[n].dueAmount);
        } else if (repairBlaceApplySum[n].payType == "5") {
          // 3、微信
          this.paramOperator.sumWechat =
            this.paramOperator.sumWechat +
            parseFloat(repairBlaceApplySum[n].dueAmount);
        } else if (repairBlaceApplySum[n].payType == "6") {
          // 4、支付宝
          this.paramOperator.sumAlipay =
            this.paramOperator.sumAlipay +
            parseFloat(repairBlaceApplySum[n].dueAmount);
        } else if (repairBlaceApplySum[n].payType == "2") {
          // 5、内部
          this.paramOperator.sumInner =
            this.paramOperator.sumInner + repairBlaceApplySum[n].dueAmount;
        } else if (
          repairBlaceApplySum[n].payType == "3" &&
          (repairBlaceApplySum[n].payMode == "31302" ||
            repairBlaceApplySum[n].payMode == "31303" ||
            repairBlaceApplySum[n].payMode == "31307")
        ) {
          // 6、厂家挂账(对应付费性质：保修，免保，pdi)
          this.paramOperator.sumFactory =
            this.paramOperator.sumFactory +
            parseFloat(repairBlaceApplySum[n].dueAmount);
        } else if (
          repairBlaceApplySum[n].payType == "3" &&
          repairBlaceApplySum[n].payMode == "31304"
        ) {
          // 7、保险挂账
          this.paramOperator.sumInsure =
            this.paramOperator.sumInsure +
            parseFloat(repairBlaceApplySum[n].dueAmount);
        } else if (
          repairBlaceApplySum[n].payType == "3" &&
          repairBlaceApplySum[n].payMode == "31306"
        ) {
          // 8、协议挂账
          this.paramOperator.sumPolicy =
            this.paramOperator.sumPolicy +
            parseFloat(repairBlaceApplySum[n].dueAmount);
        }
      }
      //实收合计
      this.paramOperator.factAllAmount =
        this.paramOperator.factCommon +
        this.paramOperator.factFree +
        this.paramOperator.factGuarantee +
        this.paramOperator.factInsure +
        this.paramOperator.factInner +
        this.paramOperator.factPolicy +
        this.paramOperator.factPDI;

      //金额付费性质
      this.paramOperator.diffCommon =
        this.paramOperator.dueCommon - this.paramOperator.factCommon; //差额普通
      this.paramOperator.diffFree =
        this.paramOperator.dueFree - this.paramOperator.factFree; //差额免保
      this.paramOperator.diffGuarantee =
        this.paramOperator.dueGuarantee - this.paramOperator.factGuarantee; //差额保修
      this.paramOperator.diffInsure =
        this.paramOperator.dueInsure - this.paramOperator.factInsure; //差额保险
      this.paramOperator.diffInner =
        this.paramOperator.dueInner - this.paramOperator.factInsure; //差额内部
      this.paramOperator.diffPolicy =
        this.paramOperator.duePolicy - this.paramOperator.factPolicy; //差额协议
      this.paramOperator.diffPDI =
        this.paramOperator.duePDI - this.paramOperator.factPDI; //差额pdi

      this.paramOperator.diffAllAmount =
        this.paramOperator.dueAllAmount - this.paramOperator.factAllAmount; //差额总费用

      // 应收费用分担/按付费方式-总金额
      this.paramOperator.sumAmount =
        this.paramOperator.sumCash +
        this.paramOperator.sumBank +
        this.paramOperator.sumWechat +
        this.paramOperator.sumAlipay +
        this.paramOperator.sumInner +
        this.paramOperator.sumFactory +
        this.paramOperator.sumInsure +
        this.paramOperator.sumPolicy;

      //折让项目遍历
      var balanceDiscountItems = this.paramOperator.balanceDiscountItems;
      for (var n = 0; n < balanceDiscountItems.length; n++) {
        this.paramOperator.sumDiscount +=
          parseFloat(balanceDiscountItems[n].wiDiscount) +
          parseFloat(balanceDiscountItems[n].partDiscount);
      }
    },

    //应收费用集合
    dueAmountChange() {
      this.addEmptyShould();
      this.calculate();
    },
    //备件折让变更
    partDiscountChange(val) {
      this.addEmptyDiscount();
      this.calculate();
    },
    //工时折让变更
    wiDiscountChange(val) {
      this.addEmptyDiscount();
      this.calculate();
    },
    //折让项目添加空白行
    addEmptyDiscount() {
      //添加空白行（用于新增付费性质）
      var hasEmpty = false; //用于标记是否已经有空白行
      var rows = this.paramOperator.balanceDiscountItems;
      for (var n = 0; n < rows.length; n++) {
        if (
          (rows[n].discountItemCode == null ||
            rows[n].discountItemCode == "") &&
          (rows[n].wiDiscount == null || rows[n].wiDiscount == 0) &&
          (rows[n].partDiscount == null || rows[n].partDiscount == 0)
        ) {
          hasEmpty = true;
        }
      }
      //如果没有空白行，则添加空白行
      if (!hasEmpty) {
        this.paramOperator.balanceDiscountItems.push({
          repairDiscountId: "",
          repairGatheringId: "",
          balanceOrderCode: "",
          discountItemCode: "",
          discountItemName: "",
          discountAmount: 0,
          wiDiscount: 0,
          partDiscount: 0,
          remarkv: "",
          isEnable: "",
          updateControlId: ""
        });
      }
    },
    //应收费用分摊添加空白行
    addEmptyShould() {
      //添加空白行（用于新增付费性质）
      var hasEmpty = false; //用于标记是否已经有空白行
      var rows = this.paramOperator.repairBlaceApplySum;
      for (var n = 0; n < rows.length; n++) {
        if (
          (rows[n].payMode == null || rows[n].payMode == "") &&
          (rows[n].payType == null || rows[n].payType == "") &&
          (rows[n].dueAmount == null || rows[n].dueAmount == 0)
        ) {
          hasEmpty = true;
        }
      }
      //如果没有空白行，则添加空白行
      if (!hasEmpty) {
        this.paramOperator.repairBlaceApplySum.push({
          repairGatheringDId: "",
          repairGatheringId: "",
          balanceOrderCode: "",
          payMode: "",
          payCompany: "",
          insureType: "",
          payType: "",
          dueAmount: 0,
          factAmount: "",
          discountReason: "",
          runupBalanceDate: "",
          runupEmpId: "",
          runupEmpName: "",
          remark: "",
          balanceType: "",
          balanceState: "",
          gatheringEmpId: "",
          gatheringEmpName: "",
          gatheringDate: "",
          checkEmpId: "",
          checkEmpName: "",
          checkDate: "",
          checkState: "",
          invoiceNo: "",
          invoiceDate: "",
          invoiceAmount: "",
          billType: "",
          isEnable: "",
          isEnableName: "",
          updateControlId: ""
        });
      }
    },
    //付款方式变更
    payTypeChange(val) {
      this.addEmptyShould();
      this.calculate();
    },
    //付费性质值变更
    payKindChange(val) {
      this.addEmptyShould();
      this.calculate();
    },
    //保存结算申请
    saveClick() {
      // 数据校验
      //1、应收费用分担-按付费性质分配校验
      var rows1 = this.paramOperator.repairBlaceApplySum;
      for (var n = 0; n < rows1.length; n++) {
        if (
          (rows1[n].payMode == null || rows1[n].payMode == "") &&
          (rows1[n].payType == null || rows1[n].payType == "") &&
          (rows1[n].dueAmount == null || rows1[n].dueAmount == 0)
        ) {
          //删除空白行
          rows1.splice(rows1.indexOf(rows1[n]), 1);
          continue;
        }
        if (rows1[n].payMode == null || rows1[n].payMode == "") {
          this.$alert(
            "应收费用分担-按付费性质分配：第" +
              (n + 1) +
              "行付费性质为空，无法保存！",
            "提示",
            {
              confirmButtonText: "确定"
            }
          );
          return;
        }
        if (rows1[n].payType == null || rows1[n].payType == "") {
          this.$alert(
            "应收费用分担-按付费性质分配：第" +
              (n + 1) +
              "行付费方式为空，无法保存！",
            "提示",
            {
              confirmButtonText: "确定"
            }
          );
          return;
        }
        if (rows1[n].dueAmount == null || rows1[n].dueAmount == 0) {
          this.$alert(
            "应收费用分担-按付费性质分配：第" +
              (n + 1) +
              "行应收费用为空，无法保存！",
            "提示",
            {
              confirmButtonText: "确定"
            }
          );
          return;
        }
      }

      //2、校验折让项目
      var rows2 = this.paramOperator.balanceDiscountItems;
      for (var n = 0; n < rows2.length; n++) {
        if (
          (rows2[n].discountItemCode == null ||
            rows2[n].discountItemCode == "") &&
          (rows2[n].wiDiscount == null || rows2[n].wiDiscount == 0) &&
          (rows2[n].partDiscount == null || rows2[n].partDiscount == 0)
        ) {
          //删除空白行
          rows2.splice(rows2.indexOf(rows2[n]), 1);
          continue;
        }
        if (
          rows2[n].discountItemCode == null ||
          rows2[n].discountItemCode == ""
        ) {
          this.$alert(
            "折让项目：第" + (n + 1) + "行折让项目为空，无法保存！",
            "提示",
            {
              confirmButtonText: "确定"
            }
          );
          return;
        }
      }

      //3、校验保险差额
      if (this.paramOperator.diffInsure != 0) {
        this.$confirm(
          "金额/付费性质中，保险费用存在差额，是否继续保存？",
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }
        );
        then(() => {}).catch(() => {
          return;
        });
      }

      //4、校验保修差额
      if (this.paramOperator.diffGuarantee != 0) {
        this.$confirm(
          "金额/付费性质中，保修费用存在差额，是否继续保存？",
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }
        )
          .then(() => {})
          .catch(() => {
            return;
          });
      }

      //5、校验免保差额
      if (this.paramOperator.diffFree != 0) {
        this.$confirm(
          "金额/付费性质中，免保费用存在差额，是否继续保存？",
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }
        )
          .then(() => {})
          .catch(() => {
            return;
          });
      }

      //6、实收金额+折让金额不能大于应收金额
      if (
        this.paramOperator.sumAmount + this.paramOperator.sumDiscount !=
        this.paramOperator.repairDueAmount
      ) {
        this.$alert("【总金额】+【总折让额】不等于【应收费用】", "提示", {
          confirmButtonText: "确定"
        });
        return;
      }
      //7校验付费性质与付费方式
      this.checkPayKindAndType();
      //构建保存参数
      this.paramSave.groupcode = "";
      this.paramSave.oemId = "";
      this.paramSave.groupId = "";
      this.paramSave.repairGatheringId = this.paramLoad.repairGatheringId;
      this.paramSave.custName = this.allParam.custName;
      this.paramSave.vin = this.paramLoad.vin;
      this.paramSave.carBrandCode = this.allParam.carBrandCode;
      this.paramSave.carId = this.allParam.carId;
      this.paramSave.saEmpName = this.allParam.repairBalanceOrder.saEmpName;
      this.paramSave.repairOrderId = this.allParam.repairOrderId;
      this.paramSave.repairOrderCode = this.allParam.repairOrderCode;
      this.paramSave.recommendItem = this.allParam.recommendItem;
      this.paramSave.wiAmount = this.paramOperator.wiAmount;
      this.paramSave.partAmount = this.paramOperator.partAmount;
      this.paramSave.otherAmount = this.paramOperator.otherAmount;
      this.paramSave.receiptsAmount = this.paramOperator.sumAmount;
      this.paramSave.runupAmount =
        this.paramOperator.sumFactory + this.paramOperator.sumInsure;
      this.paramSave.gatheringEmpId = this.allParam.repairBalanceOrder.gatheringEmpId;
      this.paramSave.gatheringEmpName = this.allParam.repairBalanceOrder.gatheringEmpName;
      this.paramSave.cashAmount = this.paramOperator.sumCash;
      this.paramSave.bankAmount = this.paramOperator.sumBank;
      this.paramSave.collectAmount = 0;
      this.paramSave.discountAmount = this.paramOperator.sumDiscount;
      this.paramSave.factoyrRunupAmount = this.paramOperator.sumFactory;
      this.paramSave.pactRunupAmount = this.paramOperator.sumPolicy;
      this.paramSave.dlrId = this.allParam.dlrId;
      this.paramSave.cardAmount = 0;
      this.paramSave.dueWiAmount = this.paramOperator.wiAmount;
      this.paramSave.duePartAmount = this.paramOperator.partAmount;
      this.paramSave.dueOtherAmount = this.paramOperator.otherAmount;
      this.paramSave.mobilePay = 0;
      this.paramSave.repairOrderId = this.paramLoad.repairOrderId;
      this.paramSave.updateControlId = this.paramLoad.updateControlId;
      this.paramSave.repairBlaceApplySum = this.paramOperator.repairBlaceApplySum;
      this.paramSave.balanceDiscountItems = this.paramOperator.balanceDiscountItems;

      const that = this;
      saveApply(this.paramSave).then(response => {
        // that.listLoading = false;
        if (
          response.data[
            apiRepairBalanceApply.fiBuRepairGatheringMutationApplySave
              .ServiceCode
          ].result === "1"
        ) {
          this.isSuccess = true;
          //禁用保存按钮
          this.isDisabled = true;
        } else {
          this.isSuccess = false;
          this.errorMsg =
            response.data[
              apiRepairBalanceApply.fiBuRepairGatheringMutationApplySave.ServiceCode
            ].msg;
        }
        this.dialogBigSaveAfter();
        // this.textQuery();
      });
    },
    handleClick() {
      //this.num = this.num.replace(/^[1-9]\d*$/, "");
    },
    //页面加载方法
    pageLoad() {
      this.queryKind(1);
      this.queryType(1);
      // 判断新增还是浏览
      if (this.actionType == "add") {
        // 新增

        this.LoadFees_Add();
      } else if (this.actionType == "view") {
        // 浏览
        this.LoadFees_View();
      }
      this.calculate();
    },
    //新增-页面加载
    LoadFees_Add() {
      this.isDisabled = false;
      //一、页签一
      // 复选框赋值
      if (this.allParam.isWait == "1") {
        this.paramOperator.isWait = true;
      } else {
        this.paramOperator.isWait = false;
      }

      if (this.allParam.isFirst == "1") {
        this.paramOperator.isFirst = true;
      } else {
        this.paramOperator.isFirst = false;
      }

      if (this.allParam.isClean == "1") {
        this.paramOperator.isClean = true;
      } else {
        this.paramOperator.isClean = false;
      }

      if (this.allParam.isAccident == "1") {
        this.paramOperator.isAccident = true;
      } else {
        this.paramOperator.isAccident = false;
      }

      //三、页签三
      //绑定折让项目表格
      this.paramOperator.balanceDiscountItems = this.allParam.balanceDiscountItems;
      //应收费用分担-按付费性质分配表
      this.paramOperator.repairBlaceApplySum = this.allParam.repairBlaceApplySum;

      var wiList = this.allParam.seBuRepairWi;
      var partList = this.allParam.seBuRepairPart;
      var otherList = this.allParam.seBuRepairOther;

      //1、计算维修应收费用：工时、备件、其他
      if (wiList != null && wiList.length > 0) {
        for (var n = 0; n < wiList.length; n++) {
          this.paramOperator.wiAmount += wiList[n].wiAmount;
        }
      }
      if (partList != null && partList.length > 0) {
        for (var n = 0; n < partList.length; n++) {
          this.paramOperator.partAmount += partList[n].priceAmount;
        }
      }
      if (otherList != null && otherList.length > 0) {
        for (var n = 0; n < otherList.length; n++) {
          this.paramOperator.otherAmount += otherList[n].otherAmount;
        }
      }

      //应收总费用
      this.paramOperator.repairDueAmount =
        this.paramOperator.wiAmount +
        this.paramOperator.partAmount +
        this.paramOperator.otherAmount;

      //2、金额/付费性质
      var dtDue = this.allParam.repairBlaceApplySum;
      // 2.1应收
      if (dtDue != null && dtDue.length > 0) {
        for (var n = 0; n < dtDue.length; n++) {
          //付费性质：普通
          if (dtDue[n].payMode == "31301") {
            this.paramOperator.dueCommon += dtDue[n].dueAmount;
          }
          //免保
          else if (dtDue[n].payMode == "31302") {
            this.paramOperator.dueFree += dtDue[n].dueAmount;
          }
          //保修
          else if (dtDue[n].payMode == "31303") {
            this.paramOperator.dueGuarantee += dtDue[n].dueAmount;
          }
          //保险
          else if (dtDue[n].payMode == "31304") {
            this.paramOperator.dueInsure += dtDue[n].dueAmount;
          }
          //内部
          else if (dtDue[n].payMode == "31305") {
            this.paramOperator.dueInner += dtDue[n].dueAmount;
          }
          //协议
          else if (dtDue[n].payMode == "31306") {
            this.paramOperator.duePolicy += dtDue[n].dueAmount;
          }
          //pdi
          else if (dtDue[n].payMode == "31307") {
            this.paramOperator.duePDI += dtDue[n].dueAmount;
          }
        }
      }

      //2.2备件分摊
      //普通应收费=（付费性质=普通）+（备件分摊=免保+保修）
      //免保应收费=（付费性质=免保）-（备件分摊付费性质=免保）
      //保修应收费=（付费性质=保修）-（备件分摊付费性质=保修）
      var dtPartShare = this.allParam.shareAmountByPayKind;
      if (dtPartShare != null && dtPartShare.length > 0) {
        for (var n = 0; n < dtPartShare.length; n++) {
          if (dtPartShare[n].payKind == "31302") {
            //在客付基础上加
            this.paramOperator.dueCommon =
              this.paramOperator.dueCommon + dtPartShare[n].custAmount;
            // 在免保基础上减去
            this.paramOperator.dueFree =
              this.paramOperator.dueFree - dtPartShare[n].custAmount;
          } else if (dtPartShare[n].payKind == "31303") {
            //在客付基础上加
            this.paramOperator.dueCommon =
              this.paramOperator.dueCommon + dtPartShare[n].custAmount;
            // 在保修基础上减去
            this.paramOperator.dueGuarantee =
              this.paramOperator.dueGuarantee - dtPartShare[n].custAmount;
          }
        }
      }
      //计算应收合计
      this.paramOperator.dueAllAmount =
        this.paramOperator.dueCommon +
        this.paramOperator.dueFree +
        this.paramOperator.dueGuarantee +
        this.paramOperator.dueInsure +
        this.paramOperator.dueInner +
        this.paramOperator.duePolicy +
        this.paramOperator.duePDI;
    },
    //查看-页面加载
    LoadFees_View() {
      this.isDisabled = true;
      //一、页签一
      // 复选框赋值
      if (this.allParam.isWait == "1") {
        this.paramOperator.isWait = true;
      } else {
        this.paramOperator.isWait = false;
      }

      if (this.allParam.isFirst == "1") {
        this.paramOperator.isFirst = true;
      } else {
        this.paramOperator.isFirst = false;
      }

      if (this.allParam.isClean == "1") {
        this.paramOperator.isClean = true;
      } else {
        this.paramOperator.isClean = false;
      }

      if (this.allParam.isAccident == "1") {
        this.paramOperator.isAccident = true;
      } else {
        this.paramOperator.isAccident = false;
      }

      //三、页签三
      //绑定折让项目表格
      this.paramOperator.balanceDiscountItems = this.allParam.balanceDiscountItems;
      //绑定应收费用分担-按付费性质分配表
      this.paramOperator.repairBlaceApplySum = this.allParam.repairBlaceApplySum;

      var wiList = this.allParam.seBuRepairWi;
      var partList = this.allParam.seBuRepairPart;
      var otherList = this.allParam.seBuRepairOther;

      //1、计算维修应收费用：工时、备件、其他
      if (wiList != null && wiList.length > 0) {
        for (var n = 0; n < wiList.length; n++) {
          this.paramOperator.wiAmount += wiList[n].wiAmount;
        }
      }
      if (partList != null && partList.length > 0) {
        for (var n = 0; n < partList.length; n++) {
          this.paramOperator.partAmount += partList[n].priceAmount;
        }
      }
      if (otherList != null && otherList.length > 0) {
        for (var n = 0; n < otherList.length; n++) {
          this.paramOperator.otherAmount += otherList[n].otherAmount;
        }
      }

      //应收总费用
      this.paramOperator.repairDueAmount =
        this.paramOperator.wiAmount +
        this.paramOperator.partAmount +
        this.paramOperator.otherAmount;

      //2、金额/付费性质
      var dtDue = this.allParam.repairBlaceApplySum;
      // 2.1应收
      if (dtDue != null && dtDue.length > 0) {
        for (var n = 0; n < dtDue.length; n++) {
          //付费性质：普通
          if (dtDue[n].payMode == "31301") {
            this.paramOperator.dueCommon += dtDue[n].dueAmount;
          }
          //免保
          else if (dtDue[n].payMode == "31302") {
            this.paramOperator.dueFree += dtDue[n].dueAmount;
          }
          //保修
          else if (dtDue[n].payMode == "31303") {
            this.paramOperator.dueGuarantee += dtDue[n].dueAmount;
          }
          //保险
          else if (dtDue[n].payMode == "31304") {
            this.paramOperator.dueInsure += dtDue[n].dueAmount;
          }
          //内部
          else if (dtDue[n].payMode == "31305") {
            this.paramOperator.dueInner += dtDue[n].dueAmount;
          }
          //协议
          else if (dtDue[n].payMode == "31306") {
            this.paramOperator.duePolicy += dtDue[n].dueAmount;
          }
          //pdi
          else if (dtDue[n].payMode == "31307") {
            this.paramOperator.duePDI += dtDue[n].dueAmount;
          }
        }
      }

      //2.2备件分摊
      //普通应收费=（付费性质=普通）+（备件分摊=免保+保修）
      //免保应收费=（付费性质=免保）-（备件分摊付费性质=免保）
      //保修应收费=（付费性质=保修）-（备件分摊付费性质=保修）
      var dtPartShare = this.allParam.shareAmountByPayKind;
      if (dtPartShare != null && dtPartShare.length > 0) {
        for (var n = 0; n < dtPartShare.length; n++) {
          if (dtPartShare[n].payKind == "31302") {
            //在客付基础上加
            this.paramOperator.dueCommon =
              this.paramOperator.dueCommon + dtPartShare[n].custAmount;
            // 在免保基础上减去
            this.paramOperator.dueFree =
              this.paramOperator.dueFree - dtPartShare[n].custAmount;
          } else if (dtPartShare[n].payKind == "31303") {
            //在客付基础上加
            this.paramOperator.dueCommon =
              this.paramOperator.dueCommon + dtPartShare[n].custAmount;
            // 在保修基础上减去
            this.paramOperator.dueGuarantee =
              this.paramOperator.dueGuarantee - dtPartShare[n].custAmount;
          }
        }
      }
      //计算应收合计
      this.paramOperator.dueAllAmount =
        this.paramOperator.dueCommon +
        this.paramOperator.dueFree +
        this.paramOperator.dueGuarantee +
        this.paramOperator.dueInsure +
        this.paramOperator.dueInner +
        this.paramOperator.duePolicy +
        this.paramOperator.duePDI;
    },
    //查询页面加载详情数据
    queryLoadDetail(page) {
      //获取父页面参数
      //this.paramLoad.repairGatheringId = this.$route.params.repairGatheringId;
      this.paramLoad.repairOrderId = this.$route.params.repairOrderId;
      this.paramLoad.repairOrderCode = this.$route.params.repairOrderCode;
      this.paramLoad.vin = this.$route.params.vin;
      this.paramLoad.pactCompanyId = this.$route.params.pactCompanyId;
      this.paramLoad.repairBalanceCode = this.$route.params.repairBalanceCode;
      this.actionType = this.$route.params.actionType;
      const that = this;
      doQueryDetail(10, page, that.paramLoad).then(response => {
        //debugger;
        if (response.data.fiBuRepairGatheringQueryFindAllRD.result === "1") {
          that.allParam =
            response.data[
              apiRepairBalanceApply.fiBuRepairGatheringQueryFindAllRD.ServiceCode
            ].rows[0];
          //页面加载
          this.pageLoad();
        }
      });
    }
  }
};
</script>
<style  lang="scss" scoped>
.colnm {
  text-align: center;
}
.filter-params .el-col {
  padding-left: 0px;
  padding-right: 0px;
  margin-bottom: 2px;
}
/deep/ .filter-params {
  margin: 0 !important;
}
.toptext {
  line-height: 15px;
}

.left {
  width: 33%;
  background: #fff;
}
.middle {
  background: #fff;
  width: 33%;
}
.right {
  background: #fff;
  width: 33%;
}

.floatStyle {
  float: left;
  width: 11%;
  text-align: center;
  margin-top: 5px;
}

.floatStyle2 {
  float: left;
  width: 10%;
  text-align: center;
  margin-top: 5px;
}
.el-main {
  padding: 0px;
}
.el-aside {
  background-color: white;
}
.textCenter {
  text-align: center;
}
.paddingB10 {
  padding-bottom: 10px;
}
.height {
  height: 30px;
}
.line-height {
  line-height: 30px;
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
.kk {
  font-size: 20px;
}
table,
table tr th,
table tr td {
  border: 1px solid;
}
table {
  min-height: 25px;
  line-height: 25px;
  text-align: center;
  border-collapse: collapse;
}
.fontstyle {
  font-weight: lighter;
}
.tdHeight td {
  height: 35px;
}
</style>


