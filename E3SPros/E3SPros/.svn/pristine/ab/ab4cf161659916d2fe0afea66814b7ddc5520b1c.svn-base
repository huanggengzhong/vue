/**
* description: 车辆数据视图
* author: ydche
* createdDate: 2019-08-14
* logs：
*  
*/

<template>
  <div class="app-container app-container-table" style="height: 560px;">
    <div class="filter-container filter-button">
    </div>
    <el-scrollbar style="height:100%">
        <div class="filter-container filter-title">车辆基本信息</div>
        <div class="filter-container filter-params">
            <el-row :gutter="26">
                <el-col :span="18">
                    <el-col :span="8" class="margin-r-0">
                            <label>VIN：</label>
                            <el-input
                            v-model="queryFindAllData.vin"
                            size="small" :disabled="true"
                            />
                        </el-col>
                        <el-col :span="8" class="margin-r-0">
                            <label>车牌号：</label>
                            <el-input
                            v-model="queryFindAllData.carLicenseNo"
                            size="small" :disabled="true"
                            />
                        </el-col>
                        <el-col :span="8" class="margin-r-0">
                            <label>车身颜色：</label>
                            <el-input
                            v-model="queryFindAllData.carColorName"
                            size="small" :disabled="true"
                            />
                        </el-col>
                        <el-col :span="8" class="margin-r-0">
                            <label>车系：</label>
                            <el-input
                            v-model="queryFindAllData.carSeriesCn"
                            size="small" :disabled="true"
                            />
                        </el-col>
                        <el-col :span="8" class="margin-r-0">
                            <label>车型：</label>
                            <el-input
                            v-model="queryFindAllData.smallCarTypeCn"
                            size="small" :disabled="true"
                            />
                        </el-col>
                        <el-col :span="8" class="margin-r-0">
                            <label>内饰色：</label>
                            <el-input
                            v-model="queryFindAllData.carIncolorName"
                            size="small" :disabled="true"
                            />
                        </el-col>
                        <el-col :span="8" class="margin-r-0">
                            <label>电机编号：</label>
                            <el-input
                            v-model="queryFindAllData.engineCode"
                            size="small" :disabled="true"
                            />
                        </el-col>
                        <el-col :span="8" class="margin-r-0">
                            <label>电控编号：</label>
                            <el-input
                            v-model="queryFindAllData.cdu"
                            size="small" :disabled="true"
                            />
                        </el-col>
                        <el-col :span="8" class="margin-r-0">
                            <label>电池编号：</label>
                            <el-input
                            v-model="queryFindAllData.batteryNumber"
                            size="small" :disabled="true"
                            />
                        </el-col>
                        <el-col :span="8" class="margin-r-0">
                            <label>大屏编号：</label>
                            <el-input
                            v-model="queryFindAllData.screenNo"
                            size="small" :disabled="true"
                            />
                        </el-col>
                        <el-col :span="8" class="margin-r-0">
                            <label>下线日期：</label>
                            <el-input
                            v-model="queryFindAllData.offlineDate"
                            size="small" :disabled="true"
                            />
                        </el-col>
                        <el-col :span="8" class="margin-r-0">
                            <el-tooltip class="item" effect="dark" content="电池包续航里程" placement="bottom">
                            <label>电池包续...：</label>
                            </el-tooltip>
                            <el-input
                            v-model="queryFindAllData.batteryEnduranceMileage"
                            size="small" :disabled="true"
                            />
                        </el-col>
                        <el-col :span="8" class="margin-r-0">
                            <label>合格证编号：</label>
                            <el-input
                            v-if="false"
                            v-model="queryFindAllData.qualifiedCertNo"
                            size="small" :disabled="true"
                            />
                            <span class="inputSpan">{{ computData(this.queryFindAllData.qualifiedCertNo) }}</span>
                        </el-col>
                        <el-col :span="8" class="margin-r-0">
                            <label>车辆用途：</label>
                            <el-input
                            v-model="queryFindAllData.buyCaruseName"
                            size="small" :disabled="true"
                            />
                        </el-col>
                </el-col>
                <el-col :span="6">
                    <img :src="url" class="hw50">
                </el-col>
            </el-row>
        </div>

        <div class="filter-container filter-title">车辆交付信息</div>
        <div class="filter-container filter-params">
            <el-row :gutter="26">
            <el-col :span="6" class="margin-r-0">
                    <label>交付时间：</label>
                    <el-input
                    v-model="PayMsgMapQueryData.deliveryDate"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>交付门店：</label>
                    <el-input
                    v-model="PayMsgMapQueryData.dlrShortName"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>交付专员：</label>
                    <el-input
                    v-model="PayMsgMapQueryData.empName "
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <el-tooltip class="item" effect="dark" content="交付专员邮箱" placement="bottom">
                        <label>交付专员...：</label>
                    </el-tooltip>
                    <el-input
                    v-model="PayMsgMapQueryData.deliveryEmpEmail"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>发票号：</label>
                    <el-input
                    v-model="PayMsgMapQueryData.invoiceNo"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>开票日期：</label>
                    <el-input
                    v-model="PayMsgMapQueryData.invoiceDate"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>开票金额：</label>
                    <el-input
                    v-model="PayMsgMapQueryData.invoicePrice"
                    size="small" :disabled="true"
                    />
                </el-col>
                <!-- <el-col :span="6" class="margin-r-0">
                    <el-tooltip class="item" effect="dark" content="纳税人识别号" placement="bottom">
                        <label>纳税人识...：</label>
                    </el-tooltip>
                    <el-input
                    v-model="PayMsgMapQueryData.buyerIdentificationNum"
                    size="small" :disabled="true"
                    ></el-input>
                </el-col> -->
                <el-col :span="6" class="margin-r-0">
                    <el-tooltip class="item" effect="dark" content="纳税人识别号" placement="bottom">
                        <label>纳税人识...：</label>
                    </el-tooltip>
                    <span class="inputSpan">{{ computData(this.PayMsgMapQueryData.buyerIdentificationNum) }}</span>
                </el-col>
                <!-- <el-col :span="12" class="margin-r-0">
                    <label>身份证/组织机构代码：</label>
                    <el-input
                    v-model="PayMsgMapQueryData.credNo"
                    size="small" :disabled="true"
                    />
                </el-col> -->
                <el-col :span="12" class="margin-r-0">
                    <label>身份证/组织机构代码：</label>
                    <span class="inputSpan">{{ computData(this.PayMsgMapQueryData.credNo) }}</span>
                </el-col>
                <el-col :span="12" class="margin-r-0">
                    <label>销货单位名称：</label>
                    <el-input
                    v-model="PayMsgMapQueryData.dlrFullName"
                    size="small" :disabled="true"
                    />
                </el-col>
            </el-row>
        </div>

        <div class="filter-container filter-title">车联网信息</div>
        <div class="filter-container filter-params">
            <el-row :gutter="26">
                <el-col :span="6" class="margin-r-0">
                    <el-checkbox v-model="PayMsgMapQueryData.internetVechleStatus==='1'? true:false">开通车联网</el-checkbox>
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <el-checkbox v-model="PayMsgMapQueryData.internetVechleStatus==='1'? true:false">开通流量</el-checkbox>
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <el-checkbox v-model="PayMsgMapQueryData.electricPakegeStatus==='1'? true:false">开通电量包</el-checkbox>
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <el-button>查询车联网详细信息</el-button>
                </el-col>
            </el-row>
        </div>

        <div class="filter-container filter-title">保险信息</div>
        <div class="filter-container filter-params">
            <el-row :gutter="26">
            <el-col :span="6" class="margin-r-0">
                    <label>交强险公司：</label>
                    <el-input
                    v-model="InsureAndFinanceQueryData.jinsureCompCn"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>保单金额：</label>
                    <el-input
                    v-model="InsureAndFinanceQueryData.jinsureAmount"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>开始日期：</label>
                    <el-input
                    v-model="InsureAndFinanceQueryData.jinsureDate"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>截止日期：</label>
                    <el-input
                    v-model="InsureAndFinanceQueryData.jinsureExpireDate"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>商业险公司：</label>
                    <el-input
                    v-model="InsureAndFinanceQueryData.sinsureCompCn"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>保单金额：</label>
                    <el-input
                    v-model="InsureAndFinanceQueryData.sinsureAmount"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>开始日期：</label>
                    <el-input
                    v-model="InsureAndFinanceQueryData.sinsureDate"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>截止日期：</label>
                    <el-input
                    v-model="InsureAndFinanceQueryData.sinsureExpireDate"
                    size="small" :disabled="true"
                    />
                </el-col>
            </el-row>
        </div>

        <div class="filter-container filter-title">金融征信信息</div>
        <div class="filter-container filter-params">
            <el-row :gutter="26">
            <el-col :span="6" class="margin-r-0">
                    <label>征信状态：</label>
                    <el-select
                    v-model="InsureAndFinanceQueryData.creditStatus"
                    placeholder="请选择"
                    clearable
                    size="small">
                    <el-option v-for="item in optionDatas" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>金融机构</label>
                    <el-input
                    v-model="InsureAndFinanceQueryData.loanIsnstitutionName"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>期数：</label>
                    <el-input
                    v-model="InsureAndFinanceQueryData.payTimes"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>贷款状态：</label>
                    <el-select
                    v-model="InsureAndFinanceQueryData.creditStatus"
                    placeholder="请选择"
                    clearable
                    size="small">
                    <el-option v-for="item in optionDatas" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>放款金额：</label>
                    <el-input
                    v-model="InsureAndFinanceQueryData.realAmount"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>首付金额：</label>
                    <el-input
                    v-model="InsureAndFinanceQueryData.firstPay"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>贴息金额：</label>
                    <el-input
                    v-model="InsureAndFinanceQueryData.discountAmount"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>同贷金额：</label>
                    <el-input
                    v-model="InsureAndFinanceQueryData.creditAmount"
                    size="small" :disabled="true"
                    />
                </el-col>
            </el-row>
        </div>

        <div class="filter-container filter-title">选装信息</div>
        <div class="filter-container filter-params">
            <el-row :gutter="26">
                <el-table
                v-loading="ChooseMsgQueryDataLoading"
                :data="ChooseMsgQueryData"
                element-loading-text="Loading"
                max-height="180px"
                height="180px"
                border
                fit
                stripe
                :header-cell-style="tableHeaderRowClassName"
                highlight-current-row
                >
                <el-table-column align="center" label="序号" width="60">
                    <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                </el-table-column>
                <el-table-column label="选装包类型">
                    <template slot-scope="scope" >
                            {{ scope.row.chooseType }}
                    </template>
                </el-table-column>
                <el-table-column label="选装包名称">
                    <template slot-scope="scope">
                            {{ scope.row.chooseContent }}
                    </template>
                </el-table-column>
                <el-table-column label="描述">
                    <template slot-scope="scope">
                            {{ scope.row.chooseRemark }}
                    </template>
                </el-table-column>
                <el-table-column label="价格">
                    <template slot-scope="scope">
                            {{ scope.row.price }}
                    </template>
                </el-table-column>
                <el-table-column label="购买时间" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.createdDate }}
                    </template>
                </el-table-column>
                <el-table-column label="安装时间" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.assignDate }}
                    </template>
                </el-table-column>
                <el-table-column label="售后工单" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.assignWorkCode }}
                    </template>
                </el-table-column>
                </el-table>
            </el-row>
        </div>

        <div class="filter-container filter-title">车辆人员信息</div>
        <div class="filter-container filter-params">
            <el-row :gutter="26">
                <el-table
                v-loading="CarPersonMsgQueryDataLoading"
                :data="CarPersonMsgQueryData"
                height="180px"
                max-height="180px"
                element-loading-text="Loading"
                border
                fit
                stripe
                :header-cell-style="tableHeaderRowClassName"
                highlight-current-row
                >
                <el-table-column align="center" label="序号" width="60">
                    <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                </el-table-column>
                <el-table-column label="客户ID">
                    <template slot-scope="scope" >
                            {{ scope.row.custNo }}
                    </template>
                </el-table-column>
                <el-table-column label="姓名">
                    <template slot-scope="scope">
                            {{ scope.row.custName }}
                    </template>
                </el-table-column>
                <el-table-column label="性别">
                    <template slot-scope="scope">
                            {{ scope.row.genderName }}
                    </template>
                </el-table-column>
                <el-table-column label="常用电话">
                    <template slot-scope="scope">
                            {{ scope.row.phone }}
                    </template>
                </el-table-column>
                <el-table-column label="关系" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.carowner }}
                    </template>
                </el-table-column>
                <el-table-column label="车主类型" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.carownerType }}
                    </template>
                </el-table-column>
                <el-table-column label="绑定时间" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.createdDate }}
                    </template>
                </el-table-column>
                </el-table>
            </el-row>
        </div>

        <div class="filter-container filter-title">维修履历</div>
        <div class="filter-container filter-params">
            <el-row :gutter="26">
                <el-table
                v-loading="RepairRecordQueryDataLoading"
                :data="RepairRecordQueryData"
                element-loading-text="Loading"
                max-height="180px"
                height="180px"
                border
                fit
                stripe
                :header-cell-style="tableHeaderRowClassName"
                highlight-current-row
                >
                <el-table-column align="center" label="序号" width="60">
                    <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                </el-table-column>
                <el-table-column label="维修工单">
                    <template slot-scope="scope" >
                            {{ scope.row.repairOrderCode }}
                    </template>
                </el-table-column>
                <el-table-column label="门店">
                    <template slot-scope="scope">
                            {{ scope.row.dlrShortName }}
                    </template>
                </el-table-column>
                <el-table-column label="送车时间">
                    <template slot-scope="scope">
                            {{ scope.row.repairTime }}
                    </template>
                </el-table-column>
                <el-table-column label="交车时间">
                    <template slot-scope="scope">
                            {{ scope.row.deliveryDate }}
                    </template>
                </el-table-column>
                <el-table-column label="维修工程师" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.saName }}
                    </template>
                </el-table-column>
                <el-table-column label="报修人" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.repairMan }}
                    </template>
                </el-table-column>
                <el-table-column label="报修人电话" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.repairTel }}
                    </template>
                </el-table-column>
                <el-table-column label="主要维修项目" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.mainWorkitem }}
                    </template>
                </el-table-column>
                <el-table-column label="状态" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.repairOrderStatus }}
                    </template>
                </el-table-column>
                </el-table>
            </el-row>
        </div>

        <div class="filter-container filter-title">历任车主信息</div>
        <div class="filter-container filter-params">
            <el-row :gutter="26">
                <el-table
                v-loading="CarOwnerHistoryQueryDataLoading"
                :data="CarOwnerHistoryQueryData"
                element-loading-text="Loading"
                max-height="180px"
                height="180px"
                border
                fit
                stripe
                :header-cell-style="tableHeaderRowClassName"
                highlight-current-row
                >
                <el-table-column align="center" label="序号" width="60">
                    <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                </el-table-column>
                <el-table-column label="客户ID">
                    <template slot-scope="scope" >
                            {{ scope.row.custNo }}
                    </template>
                </el-table-column>
                <el-table-column label="姓名">
                    <template slot-scope="scope">
                            {{ scope.row.custName }}
                    </template>
                </el-table-column>
                <el-table-column label="常用电话">
                    <template slot-scope="scope">
                            {{ scope.row.phone }}
                    </template>
                </el-table-column>
                <el-table-column label="性别">
                    <template slot-scope="scope">
                            {{ scope.row.genderName }}
                    </template>
                </el-table-column>
                <el-table-column label="车主类型" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.carOwnerType }}
                    </template>
                </el-table-column>
                <el-table-column label="绑定时间" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.createdDate }}
                    </template>
                </el-table-column>
                <el-table-column label="用户权益" align="center">
                    <template slot-scope="scope">
                            <a href="#">
                                用户权益
                            </a>
                    </template>
                </el-table-column>
                </el-table>
            </el-row>
        </div>

        <div class="filter-container filter-title">上牌信息</div>
        <div class="filter-container filter-params">
            <el-row :gutter="26">
            <el-col :span="6" class="margin-r-0">
                    <label>上牌省份：</label>
                    <el-input
                    v-model="PayMsgMapQueryData.licenseLocationProvince"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>上牌城市：</label>
                    <el-input
                    v-model="PayMsgMapQueryData.licenseLocationCity"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>上牌员：</label>
                    <el-input
                    v-model="PayMsgMapQueryData.licenseLocationProvince"
                    size="small" :disabled="true"
                    />
                </el-col>
                <el-col :span="6" class="margin-r-0">
                    <label>上牌日期</label>
                    <el-input
                    v-model="PayMsgMapQueryData.licenseLocationProvince"
                    size="small" :disabled="true"
                    />
                </el-col>
            </el-row>
        </div>

        <div class="filter-container filter-title">充电桩信息</div>
        <div class="filter-container filter-params">
            <el-row :gutter="26">
                <el-table
                v-loading="CharginpoleMsgQueryDataLoading"
                :data="CharginpoleMsgQueryData"
                element-loading-text="Loading"
                max-height="180px"
                height="180px"
                border
                fit
                stripe
                :header-cell-style="tableHeaderRowClassName"
                highlight-current-row
                >
                <el-table-column align="center" label="序号" width="60">
                    <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                </el-table-column>
                <el-table-column label="充电桩型号">
                    <template slot-scope="scope" >
                            {{ scope.row.chargingpolemodel }}
                    </template>
                </el-table-column>
                <el-table-column label="堪称时间">
                    <template slot-scope="scope">
                            {{ scope.row.inspectiondate }}
                    </template>
                </el-table-column>
                <el-table-column label="安装时间">
                    <template slot-scope="scope">
                            {{ scope.row.constructiondate }}
                    </template>
                </el-table-column>
                <el-table-column label="实际安装地址">
                    <template slot-scope="scope">
                            {{ scope.row.addr }}
                    </template>
                </el-table-column>
                <el-table-column label="接单公司" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.acceptcompany }}
                    </template>
                </el-table-column>
                <el-table-column label="接单负责人" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.acceptpersonincharge }}
                    </template>
                </el-table-column>
                <el-table-column label="接单联系电话" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.acceptpersonphone }}
                    </template>
                </el-table-column>
                </el-table>
            </el-row>
        </div>

        <div class="filter-container filter-title">车主变更记录</div>
        <div class="filter-container filter-params">
            <el-row :gutter="26">
                <el-table
                v-loading="CarownerChangeLogQueryDataLoading"
                :data="CarownerChangeLogQueryData"
                element-loading-text="Loading"
                max-height="180px"
                height="180px"
                border
                fit
                stripe
                :header-cell-style="tableHeaderRowClassName"
                highlight-current-row
                >
                <el-table-column align="center" label="序号" width="60">
                    <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                </el-table-column>
                <el-table-column label="原客户ID">
                    <template slot-scope="scope" >
                            {{ scope.row.olduseruid }}
                    </template>
                </el-table-column>
                <el-table-column label="姓名">
                    <template slot-scope="scope">
                            {{ scope.row.oldcustname }}
                    </template>
                </el-table-column>
                <el-table-column label="常用电话">
                    <template slot-scope="scope">
                            {{ scope.row.oldphone }}
                    </template>
                </el-table-column>
                <el-table-column label="新车主ID">
                    <template slot-scope="scope">
                            {{ scope.row.newolduseruid }}
                    </template>
                </el-table-column>
                <el-table-column label="新车主姓名" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.newcustname }}
                    </template>
                </el-table-column>
                <el-table-column label="变更时间" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.createdDate }}
                    </template>
                </el-table-column>
                <el-table-column label="备注" align="center">
                    <template slot-scope="scope">
                            {{ scope.row.remark }}
                    </template>
                </el-table-column>
                </el-table>
            </el-row>
        </div>

    </el-scrollbar>
  </div>
</template>
<script>
import { docarViewCarBaseInfoQueryFindAll, docarViewCarownerChangeLogQueryFindAll, docarViewCharginpoleMsgQueryFindAll, docarViewCarOwnerHistoryQueryFindAll, docarViewRepairRecordQueryFindAll, docarViewCarPersonMsgQueryFindAll, docarViewChooseMsgQueryFindAll, docarViewCarPayMsgMapQueryFindAll, docarViewInsureAndFinanceQueryFindAll} from "@/api/se/carInfo/vehicleDataView";
import { seApis } from '@/api/graphQLApiList/se'

export default {
    name:'vehicleDataView',
  components: {
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
        url:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        VIN:'',
        checked:false,
        list:[],
        listLoading:false,
        queryFindAll:{
            pageIndex:1,
            pageSize:1,	
            dataInfo:{
                oemCode:'',
                groupCode:'',
                vin	:'',
            }
        },
        queryFindAllData:[],
        optionDatas: [
            {
            value: '1',
            label: '机电'
            },
            {
            value: '2',
            label: '钣喷'
            },
            {
            value: '3',
            label: '质检'
            },
            {
            value: '4',
            label: '清洁'
            },
        ],
        PayMsgMapQueryData:[],
        InsureAndFinanceQueryData:[],
        ChooseMsgQueryData:[],
        ChooseMsgQueryDataLoading:false,
        CarPersonMsgQueryData:[],
        CarPersonMsgQueryDataLoading:false,
        RepairRecordQueryData:[],
        RepairRecordQueryDataLoading:false,
        CarOwnerHistoryQueryData:[],
        CarOwnerHistoryQueryDataLoading:false,
        CharginpoleMsgQueryData:[],
        CharginpoleMsgQueryDataLoading:false,
        CarownerChangeLogQueryData:[],
        CarownerChangeLogQueryDataLoading:false,
        tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  computed: {
  },
  created() {
      this.queryFindAll.dataInfo = this.$route.query.dataInfo
      this.doFindAll()
      this.doPayMsgMapQueryFindAll()
      this.doInsureAndFinanceQueryFindAll()
      this.doChooseMsgQueryFindAll()
      this.doCarPersonMsgQuery()
      this.doRepairRecordQueryFindAll()
      this.doCarOwnerHistoryQueryFindAll()
      this.doCharginpoleMsgQueryFindAll()
      this.doCarownerChangeLogQueryFindAll()
  },
  methods: {
      computData: function (val){
          let num = val
          let tmp = num.substring(1,num.length-1)
          let len = num.length-2
          let str = []
          for(let i = 1 ;i < len; i++){
              str.push('*')
          }
          return num.replace(tmp,str.join(''))
      },
      doFindAll(page){
          let that = this
          docarViewCarBaseInfoQueryFindAll(that.queryFindAll.pageSize,page || that.queryFindAll.pageIndex,that.queryFindAll.dataInfo).then(response => {//调用
            this.queryFindAllData=response.data[seApis.carViewCarBaseInfoQueryFindAll.ServiceCode].rows[0]
            console.log(this.queryFindAllData)
        })
      },
      doPayMsgMapQueryFindAll(page){
          let that = this
          docarViewCarPayMsgMapQueryFindAll(that.queryFindAll.pageSize,page || that.queryFindAll.pageIndex,that.queryFindAll.dataInfo).then(response => {//调用
            this.PayMsgMapQueryData=response.data[seApis.carViewCarPayMsgMapQueryFindAll.ServiceCode].rows[0]
            console.log(this.PayMsgMapQueryData)
        })
      },
      doInsureAndFinanceQueryFindAll(page){
          let that = this
          docarViewInsureAndFinanceQueryFindAll(that.queryFindAll.pageSize,page || that.queryFindAll.pageIndex,that.queryFindAll.dataInfo).then(response => {//调用
            this.InsureAndFinanceQueryData = response.data[seApis.carViewInsureAndFinanceQueryFindAll.ServiceCode].rows[0]
            console.log(this.InsureAndFinanceQueryData)
        })
      },
      doChooseMsgQueryFindAll(page){
          this.ChooseMsgQueryDataLoading = true
          let that = this
          docarViewChooseMsgQueryFindAll(that.queryFindAll.pageSize,page || that.queryFindAll.pageIndex,that.queryFindAll.dataInfo).then(response => {//调用
            this.ChooseMsgQueryData = response.data[seApis.carViewChooseMsgQueryFindAll.ServiceCode].rows
            console.log(this.ChooseMsgQueryData)
            this.ChooseMsgQueryDataLoading = false
        })
      },
      doCarPersonMsgQuery(page){
          this.CarPersonMsgQueryDataLoading = true
          let that = this
          docarViewCarPersonMsgQueryFindAll(that.queryFindAll.pageSize,page || that.queryFindAll.pageIndex,that.queryFindAll.dataInfo).then(response => {//调用
            this.CarPersonMsgQueryData = response.data[seApis.carViewCarPersonMsgQueryFindAll.ServiceCode].rows
            console.log(this.CarPersonMsgQueryData)
            this.CarPersonMsgQueryDataLoading = false
        })
      },
      doRepairRecordQueryFindAll(page){
          this.RepairRecordQueryDataLoading = true
          let that = this
          docarViewRepairRecordQueryFindAll(that.queryFindAll.pageSize,page || that.queryFindAll.pageIndex,that.queryFindAll.dataInfo).then(response => {//调用
            this.RepairRecordQueryData = response.data[seApis.carViewRepairRecordQueryFindAll.ServiceCode].rows
            console.log(this.RepairRecordQueryData)
            this.RepairRecordQueryDataLoading = false
        })
      },
      doCarOwnerHistoryQueryFindAll(page){
          this.CarOwnerHistoryQueryDataLoading = true
          let that = this
          docarViewCarOwnerHistoryQueryFindAll(that.queryFindAll.pageSize,page || that.queryFindAll.pageIndex,that.queryFindAll.dataInfo).then(response => {//调用
            this.CarOwnerHistoryQueryData = response.data[seApis.carViewCarOwnerHistoryQueryFindAll.ServiceCode].rows
            console.log(this.CarOwnerHistoryQueryData)
            this.CarOwnerHistoryQueryDataLoading = false
        })
      },
      doCharginpoleMsgQueryFindAll(page){
          this.CharginpoleMsgQueryDataLoading = true
          let that = this
          docarViewCharginpoleMsgQueryFindAll(that.queryFindAll.pageSize,page || that.queryFindAll.pageIndex,that.queryFindAll.dataInfo).then(response => {//调用
            this.CharginpoleMsgQueryData = response.data[seApis.carViewCharginpoleMsgQueryFindAll.ServiceCode].rows
            console.log(this.CharginpoleMsgQueryData)
            this.CharginpoleMsgQueryDataLoading = false
        })
      },
      doCarownerChangeLogQueryFindAll(page){
          this.CarownerChangeLogQueryDataLoading = true
          let that = this
          docarViewCarownerChangeLogQueryFindAll(that.queryFindAll.pageSize,page || that.queryFindAll.pageIndex,that.queryFindAll.dataInfo).then(response => {//调用
            this.CarownerChangeLogQueryData = response.data[seApis.carViewCarownerChangeLogQueryFindAll.ServiceCode].rows
            console.log(this.CarownerChangeLogQueryData)
            this.CarownerChangeLogQueryDataLoading = false
        })
      }
  }
};
</script>
<style scoped>
.service-range-from-item .el-form-item__label{
    margin-right: 0px;
}
a{
  color: #409eff;

}
.margin-r-0 label{
  margin-right: 0;
}
.hw50{
    height: 180px;
    width: 180px;
    margin-right: 50px;
}
.inputSpan{
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #f5f7fa;
    color: #C0C4CC;
    height: 28px;
    line-height: 28px;
    border-radius: 2px;
    font-size: 12px;
    width: 68%;
    padding-top: 0px;
    padding-bottom: 0px;
    border: 1px solid #E4E7ED;
    text-align: left;
}
</style>
