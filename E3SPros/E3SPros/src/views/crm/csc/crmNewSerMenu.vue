<!--
* 描述: 新建服务单
* 创建人: dxuem
* 创建时间: 2019-07-27 15:42
* 记录：
*  20190727 新建 dxuem
*  20190802 修改 dxuem
-->
<template>
  <div class="app-container app-container-table filter-params-crm-scroll">
    <div class="filter-container filter-button">
      <el-button size="small" v-if="display" @click="finish(form)">安抚结案</el-button>
      <!-- <el-button type="primary" @click="addcar()">新增车辆</el-button> -->
      <el-button type="primary" size="small" @click="save(form)">暂存</el-button>
      <el-button size="small" @click="submit(form)">提交</el-button>
      <el-button size="small" v-if="clue" @click="turnclue()">转线索</el-button>
    </div>
    <div class="filter-container filter-title-crm">客户车辆信息</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6" class="crm-label-required">
            <CustomersNameAdd
              :CustomersName_Add="form.custName"
              @CatData="choosecust"
              ref="custadd"
            ></CustomersNameAdd>
          </el-col>
          <el-col :span="6">
            <Sex :Sex="form.gender" ref="gender"></Sex>
          </el-col>
          <el-col :span="6" style="padding-left:31px;padding-right:0px" class="crm-label-required">
            <el-col :span="18" style="padding-right: 0px;">
              <PhoneNumber :PhoneNumber="form.contactTel" ref="contactTel"></PhoneNumber>
            </el-col>
            <el-col
              :span="6"
              style="font-size:26px;padding-left:0px;padding-right:0px;text-align: left;"
            >
              <i class="el-icon-phone-crm el-icon-phone" @click="callscreen()"></i>
              <i class="el-icon-message-crm el-icon-message" @click="msgmod()"></i>
            </el-col>
          </el-col>
          <el-col :span="6">
            <BackupPhone :BackupPhone="form.backupTel" ref="backupTel"></BackupPhone>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <UseCarName :UseCarName="form.useCustName" ref="useCustName"></UseCarName>
          </el-col>
          <el-col :span="6">
            <Sex :Sex="form.useGenderCode" ref="useGenderCode"></Sex>
          </el-col>
          <el-col :span="6" style="padding-left:31px;padding-right:0px">
            <el-col :span="18" style="padding-right: 0px;">
              <UseCarPhone :UseCarPhone="form.usePhone" ref="usePhone"></UseCarPhone>
            </el-col>
            <el-col
              :span="6"
              style="font-size:26px;padding-left:0px;padding-right:0px;text-align: left;"
            >
              <i class="el-icon-phone-crm el-icon-phone" @click="usercall()"></i>
              <i class="el-icon-message-crm el-icon-message" @click="backupMsg()"></i>
            </el-col>
          </el-col>
          <el-col :span="6">
            <BackupPhone :BackupPhone="form.useBackupTel" ref="useBackupTel"></BackupPhone>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <CarSeries :CarSeries="form.vCarseriesDesc" ref="vCarseriesDesc"></CarSeries>
          </el-col>
          <el-col :span="6">
            <CarBrandNumber :CarBrandNumber="form.carLicense" ref="carLicense"></CarBrandNumber>
          </el-col>
          <el-col :span="6">
            <VINCode :VINCode="form.vin" ref="vin"></VINCode>
          </el-col>
          <el-col :span="6">
            <EngineNumber :EngineNumber="form.engineNo" ref="engineNo"></EngineNumber>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <CarBrand :CarBrand="form.carBrandCode" ref="carbran"></CarBrand>
          </el-col>
          <el-col :span="6">
            <CarModel :CarModel="form.vCartypeDesc" ref="vCartypeDesc"></CarModel>
          </el-col>
          <el-col :span="6">
            <NumberAttributtion :NumberAttributtion="Numattr" ref="numattr"></NumberAttributtion>
          </el-col>
          <el-col :span="6" style="text-align:center">
            <el-button @click="Telattr">号码归属地</el-button>
            <el-button @click="carAttr">车辆归属地</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="客户标签" class="cust-label" style="text-align: left;">
              <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)"
              >{{tag}}</el-tag>

              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              ></el-input>
              <el-button v-else class="button-new-tag" size="mini" @click="showInput">+ 添加标签</el-button>
            </el-form-item>
          </el-col>
        </el-row>

        <div class="filter-container filter-title-crm" ref="resultTitleHeight">单据信息</div>
        <el-tabs v-model="activeName" class="tabs" type="card" @tab-click="handleClick">
          <el-tab-pane label="救援" name="first">
            <el-row>
              <el-col :span="6">
                <RescueType :RescueType="resc" ref="resc"></RescueType>
              </el-col>
              <el-col :span="6">
                <ExpectArrivalTime :ExpectArrivalTime="expe" ref="expe"></ExpectArrivalTime>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="投诉" name="second">
            <el-row>
              <el-col :span="6">
                <ComplaintDate :ComplaintDate="form.createdDate" ref="comp"></ComplaintDate>
              </el-col>
              <el-col :span="6" class="crm-label-required">
                <sctComplaintRoute :sct_ComplaintRoute="form.serverSourceCode" ref="sctc"></sctComplaintRoute>
              </el-col>
              <el-col :span="6">
                <SourceNumber :SourceNumber="form.linkBillCode" ref="sour"></SourceNumber>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <ErrorDate :ErrorDate="form.faultDate" ref="edate"></ErrorDate>
              </el-col>
              <el-col :span="6">
                <ErrorDistance :ErrorDistance="form.faultMileage" ref="edist"></ErrorDistance>
              </el-col>
              <el-col :span="6">
                <RunDistance :RunDistance="form.mileage" ref="rdist"></RunDistance>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6" class="crm-label-required">
                <swdcomplaintCategory
                  :swd_complaintCategory="form.serverFullClassName"
                  @CatData="getbigclass"
                  ref="serverFullClassName"
                ></swdcomplaintCategory>
              </el-col>
              <el-col :span="6" class="crm-label-required">
                <RelatedBenchmarkCar
                  @getcarBrand="getcarBrand"
                  :RelatedBenchmarkCar="form.baseSeriesName"
                  ref="baseSeriesName"
                ></RelatedBenchmarkCar>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <ResponsibleAgent
                  :ResponsibleAgent="form.dutyDlrName"
                  ref="dutyDlrName"
                  @CatData="getBrand"
                ></ResponsibleAgent>
              </el-col>
              <el-col :span="6" class="crm-label-required">
                <ProcessingMethod :ProcessingMethod="form.proc" ref="proc" @changeCode="prochange"></ProcessingMethod>
              </el-col>
              <el-col :span="6">
                <ResponsibleDepartment :ResponsibleDepartment="form.nextDealOrgName" ref="respd"></ResponsibleDepartment>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <swd_Responsible :swd_Responsible="form.nextDealEmpName" ref="respo"></swd_Responsible>
              </el-col>
              <el-col :span="6">
                <DutyPeoplePhone :DutyPeoplePhone="form.nextDealPhone" ref="duty"></DutyPeoplePhone>
              </el-col>
              <el-col :span="6" class="crm-label-required">
                <ComplaintLevel :ComplaintLevel="form.serverLevel" ref="compl"></ComplaintLevel>
              </el-col>
              <el-col :span="6">
                <WhetherUrgent :WhetherUrgent="form.serverUrgency" ref="whet"></WhetherUrgent>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <JobDescription :JobDescription="form.distRemark" ref="jobd"></JobDescription>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <Remarks :Remarks="form.remark" ref="rema"></Remarks>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6" class="crm-label-required">
                <Abstract :Abstract="form.serverTitle" ref="abst1"></Abstract>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <CustomerRequest :CustomerRequest="form.custRequirement" ref="cust"></CustomerRequest>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6" class="crm-label-required">
                <DealWithContent :ComplainContent="form.complainDesc" ref="deal"></DealWithContent>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6" class="crm-label-required">
                <CustomerServiceAnswer
                  :CustomerServiceAnswer="form.serverAnswer"
                  ref="serverAnswer"
                ></CustomerServiceAnswer>
              </el-col>
            </el-row>
            <!-- 上传附件 -->
            <!-- <el-row>
              <el-col :span="8">
                <UpLoad ref="uplo"></UpLoad>
              </el-col>
            </el-row>-->
          </el-tab-pane>
          <el-tab-pane label="线索" name="third">
            <el-row>
              <el-col :span="6" class="crm-label-required">
                <ClueType :ClueType="form.clueType" ref="cluet"></ClueType>
              </el-col>
              <el-col :span="6" class="crm-label-required">
                <ContactWay
                  :ContactWay="form.cantactWayCode"
                  ref="contw"
                  @changeCode="contactWayChange"
                />
              </el-col>
              <el-col :span="6" class="crm-label-required">
                <ChannelBigClass
                  :ChannelBigClass="form.infoChanMCode"
                  ref="chanb"
                  @changeCode="channelBigClassChange"
                />
              </el-col>
              <el-col :span="6" class="crm-label-required">
                <ChannelSmallClass
                  :ChannelSmallClass="form.infoChanDName"
                  @getChannelSmallClass="getDchan"
                  ref="chans"
                />
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="6" class="crm-label-required">
                <RelatedBenchmarkCar
                  :RelatedBenchmarkCar="form.carSeriesCn"
                  ref="relab"
                  @getcarBrand="cluecarBrand"
                />
              </el-col>
              <el-col :span="6" class="crm-label-required">
                <PlannedCarPurchaseTime :PlannedCarPurchaseTime="form.buyPlanCode" ref="planc"></PlannedCarPurchaseTime>
              </el-col>
              <el-col :span="6">
                <TransferObject :TransferObject="form.transferObject" ref="tranobj" />
              </el-col>
              <el-col :span="6">
                <IntentionalOutlet
                  :IntentionalOutlet="form.dlrShortName"
                  @CatData="getIntendlr"
                  ref="inteo"
                />
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6" class="crm-label-required">
                <IntentionLevel :IntentionLevel="form.clueLevelCode" ref="intel" />
              </el-col>
              <el-col :span="6">
                <Descripts :Descripts="form.clueDesc" ref="descri" />
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="咨询" name="fourth">
            <el-row>
              <el-col :span="6">
                <ConsultDate :ConsultDate="consdate" ref="consdate"></ConsultDate>
              </el-col>
              <el-col :span="6">
                <MessageSources :MessageSources="Msg" ref="msg"></MessageSources>
              </el-col>
              <el-col :span="6">
                <sctActivityName :sct_ActivityName="actname" ref="actname"></sctActivityName>
              </el-col>
              <el-col :span="6">
                <ServiceMenuNumber :ServiceMenuNumber="sermenu" ref="sermenu"></ServiceMenuNumber>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <Abstract :Abstract="abst" ref="abst"></Abstract>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <ResponsibleAgent :ResponsibleAgent="respa" ref="respa"></ResponsibleAgent>
              </el-col>
              <el-col :span="6">
                <ConsultingCategory :swd_ConsultingCategory="conscate" ref="conscate"></ConsultingCategory>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <ResponsibleDepartment :ResponsibleDepartment="respd1" ref="respd1"></ResponsibleDepartment>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <CustomerRequest :CustomerRequest="custre" ref="custre"></CustomerRequest>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <JobDescription :JobDescription="jobd" ref="jobdZX"></JobDescription>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <Remarks :Remarks="rema" ref="remaZX"></Remarks>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <AskContent :AskContent="askcon" ref="askcon"></AskContent>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <CustomerServiceAnswer :CustomerServiceAnswer="custs" ref="custs"></CustomerServiceAnswer>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-form>
      <!-- 添加车辆 -->

      <el-dialog
        :visible.sync="addflag"
        :width="width"
        class="dialog"
        title="添加车辆"
        center
        modal-append-to-body
        append-to-body
      >
        <div class="filter-container filter-title-crm">
          <el-form label-position="right">
            <el-row>
              <el-col :span="14">
                <el-input :disabled="true" v-model="addcust.input"></el-input>
              </el-col>
              <el-col :span="10">
                <div class="filter-container filter-button">
                  <el-button type="primary" @click="addcarquery()">查询</el-button>
                  <el-button @click="changeowner()">变更车主</el-button>
                  <el-button>新增用车人</el-button>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="filter-container filter-params-crm">
          <el-form label-position="right">
            <el-row>
              <el-col :span="9">
                <CarBrandNumber :CarBrandNumber="Carbrannum" ref="tjcarbrannum"></CarBrandNumber>
              </el-col>
              <el-col :span="9">
                <VINCode :VINCode="Vinco" ref="tjvinco"></VINCode>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="filter-container filter-title-crm">查询结果</div>
        <Table v-bind:tabledatas="modcardata" ref="tableCAR"></Table>
      </el-dialog>
      <!-- 号码归属地 -->
      <el-dialog
        :visible.sync="Attrflag"
        :width="width"
        class="dialog"
        title="号码归属地"
        center
        modal-append-to-body
        append-to-body
      >
        <div class="filter-container filter-title-crm">
          <el-form>
            <el-row>
              <el-col :span="4" style="padding:0">查询条件</el-col>
              <el-col :span="20">
                <div class="filter-container filter-button">
                  <el-button type="primary" @click="telattrquery()">查询</el-button>
                  <el-button @click="addtelattr()">新增</el-button>
                  <el-button @click="telreset()">重置</el-button>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="filter-container filter-params-crm">
          <el-form label-position="right">
            <el-row>
              <el-col :span="8">
                <Province :Province="Telpeov" @changeCode="telprochange" ref="telpeov"></Province>
              </el-col>
              <el-col :span="8">
                <City :City="Telcity" ref="telcity"></City>
              </el-col>
              <el-col :span="8">
                <EnableOrDisable :EnableOrDisable="Telenable" ref="telenable"></EnableOrDisable>
              </el-col>
              <el-col :span="8">
                <PhonePrefix :PhonePrefix="Telphonepre" ref="telphonepre"></PhonePrefix>
              </el-col>
              <el-col :span="8">
                <AreaCode :AreaCode="Telarea" ref="telarea"></AreaCode>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="filter-container filter-title-crm">查询结果</div>
        <el-row class="table">
          <el-table
            :data="teldata.tableDatas"
            :stripe="flag"
            highlight-current-row
            style="width: 100%;height:335px;"
            v-loading.body="false"
            element-loading-text="Loading"
            border
            fit
          >
            <el-table-column type="selection" width="50" v-if="isdisplay.ismuti"></el-table-column>
            <el-table-column type="index" label="序号" width="60"></el-table-column>
            <el-table-column label="操作">
              <!-- scope.row:选中的一行数据 -->
              <template slot-scope="scope">
                <el-button size="mini" type="text" @click="teledit(scope.$index, scope.row)">修改</el-button>
              </template>
            </el-table-column>
            <el-table-column
              v-for="item in teldata.colnames"
              :key="item.value"
              :label="item.label"
              :prop="item.value"
              align="center"
            ></el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="9"
            :page-size="teldata.pagesize"
            :current-page="teldata.pageindex"
          ></el-pagination>
        </el-row>
      </el-dialog>
      <!-- 号码归属地维护 -->
      <el-dialog
        :visible.sync="telEditFlag"
        :width="width"
        class="dialog"
        title="号码归属地维护"
        center
        modal-append-to-body
        append-to-body
      >
        <div class="filter-container filter-params-crm">
          <el-form label-position="right">
            <el-row>
              <el-col :span="8">
                <Province :Province="Proctel" @changeCode="telattrpro" ref="proctel"></Province>
              </el-col>
              <el-col :span="8">
                <City :City="Citytel" ref="citytel"></City>
              </el-col>
              <el-col :span="8">
                <PhonePrefix :PhonePrefix="Phonetel" ref="phonetel"></PhonePrefix>
              </el-col>
              <el-col :span="8">
                <AreaCode :AreaCode="Areatel" ref="areatel"></AreaCode>
              </el-col>
              <el-col :span="8">
                <EnableOrDisable :EnableOrDisable="Isabletel" ref="isabletel"></EnableOrDisable>
              </el-col>
              <el-col :span="8">
                <el-button type="primary" @click="telsave()">保存</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-dialog>
      <!-- 车辆归属地 -->
      <el-dialog
        :visible.sync="carAttrflag"
        :width="width"
        class="dialog"
        title="车辆归属地"
        center
        modal-append-to-body
        append-to-body
      >
        <div class="filter-container filter-title-crm">
          <el-form>
            <el-row>
              <el-col :span="4" style="padding:0">查询条件</el-col>
              <el-col :span="20">
                <div class="filter-container filter-button">
                  <el-button type="primary" @click="carsttrquery()">查询</el-button>
                  <el-button @click="addcarattr()">新增</el-button>
                  <el-button @click="carreset()">重置</el-button>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="filter-container filter-params-crm">
          <el-form label-position="right">
            <el-row>
              <el-col :span="8">
                <Province :Province="Proccar" ref="proccar" @changeCode="carprochange"></Province>
              </el-col>
              <el-col :span="8">
                <City :City="Citycar" ref="citycar"></City>
              </el-col>
              <el-col :span="8">
                <EnableOrDisable :EnableOrDisable="Isablecar" ref="isablecar"></EnableOrDisable>
              </el-col>
              <el-col :span="8">
                <CarBrandNumber :CarBrandNumber="Carbrancar" ref="carbrancar"></CarBrandNumber>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="filter-container filter-title-crm">查询结果</div>
        <el-row class="table">
          <el-table
            :data="cardata.tableDatas"
            :stripe="flag"
            highlight-current-row
            style="width: 100%;height:335px;"
            v-loading.body="false"
            element-loading-text="Loading"
            border
            fit
          >
            <el-table-column type="selection" width="50" v-if="isdisplay.ismuti"></el-table-column>
            <el-table-column type="index" label="序号" width="60"></el-table-column>
            <el-table-column label="操作">
              <!-- scope.row:选中的一行数据 -->
              <!-- 打开新建服务单（带值） -->
              <template slot-scope="scope">
                <el-button size="mini" type="text" @click="caredit(scope.$index, scope.row)">修改</el-button>
              </template>
            </el-table-column>
            <el-table-column
              v-for="item in cardata.colnames"
              :key="item.value"
              :label="item.label"
              :prop="item.value"
              align="center"
            ></el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="cardata.total"
            :page-size="cardata.pageSize"
            :current-page="cardata.pageIndex"
            @prev-click="carprev"
            @next-click="carnext"
            @current-change="carchangepage"
          ></el-pagination>
          <!-- <Table :tabledatas="tabledata" ref="table" class="table"></Table> -->
        </el-row>
      </el-dialog>
      <!-- 车辆归属地维护 -->

      <el-dialog
        :visible.sync="carAttradd"
        width="900px"
        class="dialog"
        title="车辆归属地维护"
        center
        modal-append-to-body
        append-to-body
      >
        <div class="filter-container filter-params-crm">
          <el-form label-position="right">
            <el-row>
              <el-col :span="8">
                <Province :Province="Carpro" @changeCode="carattrpro" ref="carpro"></Province>
              </el-col>
              <el-col :span="8">
                <City :City="Carcity" ref="carcity"></City>
              </el-col>
              <el-col :span="8">
                <EnableOrDisable :EnableOrDisable="Carsable" ref="carsable"></EnableOrDisable>
              </el-col>
              <el-col :span="8">
                <CarBrandNumber :CarBrandNumber="Carbrancode" ref="carbrancode"></CarBrandNumber>
              </el-col>
              <el-col :span="16">
                <el-button type="primary" @click="carsave()">保存</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-dialog>
      <!-- 外呼 -->
      <el-dialog
        :visible.sync="callflag"
        :width="width"
        style="height:700px;margin:0 0 0 0;overflow-y: scroll"
        class="dialog"
        title="外呼"
        append-to-body
      >
        <div class="filter-container filter-params-crm">
          <el-form label-position="right">
            <el-row>
              <el-col :span="8">
                <CustomerName :txt_CustomerName="custtxt" ref="custtxt"></CustomerName>
              </el-col>
              <el-col :span="8">
                <PhoneNumber :PhoneNumber="callphone" ref="callphone"></PhoneNumber>
              </el-col>
              <el-col :span="4">
                <el-button @click="callout">外呼</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-dialog>
      <!-- 短信发送弹窗 -->
      <el-dialog
        :visible.sync="Msgmodflag"
        :width="width"
        class="dialog"
        title="短信模板"
        append-to-body
      >
        <div class="filter-container filter-params-crm">
          <el-form label-position="right">
            <el-row>
              <el-col :span="22">
                <el-row>
                  <el-col :span="9" class="crm-label-required">
                    <ModelName ref="ModelName" :ReceiverCellPhone="modn"></ModelName>
                  </el-col>
                  <el-col :span="9" class="crm-label-required">
                    <MsgModel ref="MsgModel" :MessageModel="msgModel" @Cetdata="getMsg"></MsgModel>
                  </el-col>
                  <el-col :span="9" class="crm-label-required">
                    <ModelContentText ref="ModelContentText" :ModelContentTextarea="modc"></ModelContentText>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="18" class="crm-label-required">
                    <el-button type="primary" @click.native="query">发送</el-button>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import UseCarPhone from "@/components/crm/textbox/Public/customerInfos/UseCarPhone";
import CustomersNameAdd from "@/components/crm/EjectWindows/CustomersName_Add";
import Sex from "@/components/crm/Select/Common/Customer/Sex";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import BackupPhone from "@/components/crm/textbox/Public/customerInfos/BackupPhone";
import CarSeries from "@/components/crm/textbox/Public/carInfo/CarSeries";
import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber";
import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode";
import UseCarName from "@/components/crm/textbox/Public/customerInfos/UseCarName";
import CarBrand from "@/components/crm/textbox/Public/carInfo/CarBrand";
import CarModel from "@/components/crm/textbox/Public/carInfo/CarModel";
import GearBoxName from "@/components/crm/textbox/Public/carInfo/GearBoxName";
import LeakMount from "@/components/crm/textbox/Public/carInfo/LeakMount";
import NumberAttributtion from "@/components/crm/textbox/customerInfo/NumberAttributtion";
import EngineNumber from "@/components/crm/textbox/Public/customerInfos/EngineNumber";
import GearBoxNumber from "@/components/crm/textbox/Public/carInfo/GearBoxNumber";

// 救援
import RescueType from "@/components/crm/Select/Clue/Rescue/RescueType";
import ExpectArrivalTime from "@/components/crm/Time/ExpectArrivalTime";

// 投诉
import ComplaintDate from "@/components/crm/Time/ComplaintDate";
import sctComplaintRoute from "@/components/crm/Select/Complaint/sct_ComplaintRoute";
import SourceNumber from "@/components/crm/EjectWindows/SourceNumber";
import CustomerSource from "@/components/crm/Select/Common/Customer/CustomerSource";
import ProcessingMethod from "@/components/crm/Select/Complaint/ProcessingMethod";
import ErrorDate from "@/components/crm/Time/ErrorDate";
import ErrorDistance from "@/components/crm/textbox/Complaint/ErrorDistance";
import RunDistance from "@/components/crm/textbox/Complaint/RunDistance";
import swdcomplaintCategory from "@/components/crm/EjectWindows/swd_complaintCategory";
import RelatedBenchmarkCar from "@/components/crm/EjectWindows/RelatedBenchmarkCar";
import ResponsibleAgent from "@/components/crm/EjectWindows/ResponsibleAgent";
import ResponsibleDepartment from "@/components/crm/EjectWindows/ResponsibleDepartment";
import swd_Responsible from "@/components/crm/EjectWindows/swd_Responsible";
import DutyPeoplePhone from "@/components/crm/textbox/Complaint/DutyPeoplePhone";
import ComplaintLevel from "@/components/crm/Select/Complaint/ComplaintLevel";
import WhetherUrgent from "@/components/crm/Select/Whether/WhetherUrgent";
import JobDescription from "@/components/crm/textbox/Complaint/JobDescription";
import Remarks from "@/components/crm/textbox/Complaint/Remarks";
import Abstract from "@/components/crm/textbox/Public/Abstract";
import CustomerRequest from "@/components/crm/textbox/Public/CustomerRequest";
import DealWithContent from "@/components/crm/textbox/Complaint/ComplainContent";
import CustomerServiceAnswer from "@/components/crm/textbox/Public/CustomerServiceAnswer";
import UpLoad from "@/components/crm/EjectWindows/UpLoad";
// 线索
import ClueType from "@/components/crm/Select/Clue/ClueType";
import ContactWay from "@/components/crm/Select/Common/ContactWay";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass";
import ChannelSmallClass from "@/components/crm/EjectWindows/ChannelSmallClass";
import PlannedCarPurchaseTime from "@/components/crm/Select/Common/Customer/PlannedCarPurchaseTime";
import TransferObject from "@/components/crm/Select/Common/Customer/TransferObject";
import IntentionalOutlet from "@/components/crm/EjectWindows/IntentionalOutlet";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel";
import Descripts from "@/components/crm/textbox/Public/Descripts";
import Table from "@/components/crm/table/Table";
import { debuglog } from "util";

// 咨询
import sctActivityName from "@/components/crm/Select/Clue/Rescue/sct_ActivityName";

import ConsultDate from "@/components/crm/Time/ConsultDate";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import ConsultingCategory from "@/components/crm/EjectWindows/swd_ConsultingCategory";
import AskContent from "@/components/crm/textbox/Clue/advisory/AskContent.vue";
import MessageSources from "@/components/crm/Select/MessageSources.vue";
// 号码归属地
import Province from "@/components/crm/Select/Common/Province.vue";
import City from "@/components/crm/Select/Common/City.vue";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable.vue";
import PhonePrefix from "@/components/crm/textbox/Public/PhonePrefix.vue";
import AreaCode from "@/components/crm/textbox/Public/AreaCode.vue";
// 短信模板
import ModelName from "@/components/crm/textbox/Public/Message/ReceiverCellPhone";
import MsgModel from "@/components/crm/EjectWindows/MessageModel";
import ModelContentText from "@/components/crm/textbox/Public/Message/ModelContentTextarea";

import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

import "@/plugs/lodash.min";

export default {
  name: "crmNewSerMenu",
  components: {
    // 号码归属地
    CustomerName,
    ModelName,
    ModelContentText,
    EnableOrDisable,
    PhonePrefix,
    AreaCode,
    CustomerSource,
    Table,
    MessageSources,
    AskContent,
    ConsultingCategory,
    ServiceMenuNumber,
    sctActivityName,
    ConsultDate,
    CustomersNameAdd,
    Sex,
    PhoneNumber,
    BackupPhone,
    VINCode,
    UseCarName,
    CarBrand,
    CarModel,
    GearBoxName,
    LeakMount,
    NumberAttributtion,
    EngineNumber,
    GearBoxNumber,
    UseCarPhone,
    CarSeries,
    CarBrandNumber,

    Descripts,
    IntentionLevel,
    IntentionalOutlet,
    City,
    Province,
    TransferObject,
    ChannelSmallClass,
    PlannedCarPurchaseTime,
    ChannelBigClass,
    ClueType,
    ContactWay,
    RescueType,
    ExpectArrivalTime,
    ComplaintDate,
    sctComplaintRoute,
    SourceNumber,
    ProcessingMethod,
    ErrorDate,
    ErrorDistance,
    RunDistance,
    swdcomplaintCategory,
    RelatedBenchmarkCar,
    ResponsibleAgent,
    ResponsibleDepartment,
    swd_Responsible,
    DutyPeoplePhone,
    ComplaintLevel,
    WhetherUrgent,
    JobDescription,
    Remarks,
    Abstract,
    CustomerRequest,
    DealWithContent,
    CustomerServiceAnswer,
    UpLoad,
    MsgModel
  },
  data() {
    return {
      params: this.$route.params,
      toggleParam: false,
      flag: true,
      Attrflag: false,
      carAttrflag: false,
      telEditFlag: false,
      callflag: false,
      commrecord: false,
      Msgmodflag: false,
      carAttradd: false,
      width: "900px",
      activeName: "first",
      display: false,
      clue: false,
      addflag: false,
      dynamicTags: [],
      inputVisible: false,
      inputValue: "",
      callin: "", //呼入类型
      callphone: {
        input: ""
      },
      form: {
        custName: {
          input: ""
        },
        gender: {
          value: ""
        },
        contactTel: {
          input: ""
        },
        backupTel: {
          input: ""
        },
        useCustName: {
          input: ""
        },
        useGenderCode: {
          value: ""
        },
        usePhone: {
          input: ""
        },
        useBackupTel: {
          input: ""
        },
        vCarseriesDesc: {
          input: "",
          isdisable: true
        },
        linkBillCode: {
          input: ""
        },
        requOrgCode: {
          input: ""
        },
        nextDealOrgName: {
          input: "",
          isdisable: true,
          dialogVisible: false
        },
        nextDealPhone: {
          input: "",
          isdisable: true,
          dialogVisible: false
        },
        nextDealEmpName: {
          input: "",
          isdisabled: true,
          dialogVisible: false
        },
        dutyDlrName: {
          input: ""
        },
        baseSeriesName: {
          input: ""
        },
        serverLevel: {
          value: ""
        },
        vin: {
          input: "",
          isdisabled: true
        },
        serverSourceCode: {
          value: "1"
        },
        engineNo: {
          input: "",
          disabled: true
        },
        // carSeriesCode: {
        //   value: "",
        //   isdisable:true
        // },
        carLicense: {
          input: "",
          isdisabled: true
        },
        carBrandCode: {
          value: "",
          isdisabled: true
        },
        vCartypeDesc: {
          input: "",
          isdisabled: true
        },
        serverTitle: {
          input: ""
        },
        serverSource: {
          value: ""
        },
        custRequirement: {
          input: ""
        },
        complainDesc: {
          input: ""
        },
        serverAnswer: {
          input: ""
        },
        faultDate: {
          value: ""
        },
        faultMileage: {
          input: ""
        },
        mileage: {
          input: ""
        },
        remark: {
          input: ""
        },
        createdDate: {
          value: "",
          isdisabled: true
        },
        distRemark: {
          input: ""
        },
        serverUrgency: {
          value: ""
        },
        serverFullClassName: {
          input: ""
        },
        proc: {
          value: ""
        },
        //线索
        clueType: {
          value: ""
        },
        cantactWayCode: {
          value: ""
        },
        infoChanMCode: {
          value: "",
          pcode: ""
        },
        infoChanDName: {
          input: "",
          pcode: ""
        },
        buyPlanCode: {
          value: ""
        },
        dlrShortName: {
          input: ""
        },
        clueLevelCode: {
          value: ""
        },
        clueDesc: {
          input: ""
        },
        transferObject: {
          value: "2"
        },
        carSeriesCn: {
          input: ""
        }
      },
      respa: {
        input: ""
      },
      addcust: {
        input: ""
      },
      custre: {
        input: ""
      },
      sermenu: {
        input: ""
      },
      actname: {
        value: ""
      },
      Carbrannum: {
        input: "",
        isdisable: false
      },
      Vinco: {
        input: ""
      },
      conscate: {
        input: ""
      },
      consdate: {
        value: ""
      },
      Msg: {
        value: ""
      },
      Numattr: {
        input: "",
        isdisable: true
      },
      Carmod: {
        input: "",
        isdisable: false
      },
      askcon: {
        input: ""
      },
      Carbran: {
        input: "",
        isdisable: false
      },
      Vin: {
        input: "",
        isdisable: false
      },
      Carbrannum: {
        input: "",
        isdisable: true
      },
      Carserie: {
        input: "",
        isdisable: false
      },
      Userphone: {
        input: ""
      },
      Username: {
        input: ""
      },
      Backup: {
        input: ""
      },
      Phone: {
        input: ""
      },
      //非空校验

      Se1: {
        value: ""
      },
      resc: {
        value: ""
      },
      expe: {
        value: ""
      },
      sour: {
        input: ""
      },
      edist: {
        input: ""
      },
      rdist: {
        input: ""
      },

      baseSeriesName: {
        input: ""
      },
      // respo: {
      //   input: "",
      //   // isdisable: true,
      //   // dialogVisible: false
      // },
      compl: {
        value: ""
      },
      whet: {
        value: ""
      },
      jobd: {
        input: ""
      },
      rema: {
        input: ""
      },
      abst: {
        input: ""
      },
      cust: {
        input: ""
      },
      deal: {
        input: ""
      },
      custs: {
        input: ""
      },
      respd1: {
        input: ""
      },
      isdisplay: {
        ismuti: false
      },
      Proccar: {
        value: ""
      },
      Citycar: {
        value: "",
        pcode: ""
      },
      Isablecar: {
        value: ""
      },
      Carbrancar: {
        value: ""
      },

      // 号码归属地组件
      Telarea: {
        input: ""
      },
      Telenable: {
        value: ""
      },
      Telphonepre: {
        input: ""
      },
      Telarea: {
        input: ""
      },
      Proctel: {
        value: ""
      },
      Citytel: {
        value: "",
        pcode: ""
      },
      Isabletel: {
        value: ""
      },
      Phonetel: {
        input: ""
      },
      Areatel: {
        input: ""
      },
      Telpeov: {
        value: ""
      },
      Telcity: {
        value: ""
      },

      // 车辆归属地
      Carpro: {
        value: ""
      },
      Carcity: {
        value: "",
        pcode: ""
      },
      Carsable: {
        value: ""
      },
      Carbrancode: {
        input: ""
      },
      // 来电弹屏
      call: {
        input: ""
      },
      attr: {
        input: ""
      },
      // 短信模板
      modn: {
        input: ""
      },
      msgModel: {
        input: ""
      },
      modc: {
        input: ""
      },
      //外呼弹窗
      custtxt: {
        input: "",
        isreadonly: false
      },
      // 添加车辆
      modcardata: {
        colnames: [
          { label: "客户名称", value: "custName" },
          { label: "电话", value: "phone" },
          { label: "备用电话", value: "backTel" },
          { label: "性别", value: "genderName" },
          { label: "是否车主", value: "isCarowner" },
          { label: "车辆品牌", value: "carBrandName" },
          { label: "车系", value: "seCarSeriesName" },
          { label: "车型名称", value: "seCarTypeName" },
          { label: "车牌号", value: "carLicenseNo" },
          { label: "VIN码", value: "vin" },
          { label: "发动机号", value: "engineNo" },
          { label: "省份", value: "addrProvince" },
          { label: "城市", value: "addrCity" },
          { label: "区县", value: "addrCounty" }
        ],
        data: [],
        queryObj: {
          apiConfig: crmApis.mdmDlrCustInfoQuery, //专营店客户信息查询
          apiQueryRow: [
            "custNo",
            "dlrCustNo",
            "custName",
            "phone",
            "backTel",
            "isCarowner",
            "genderName",
            "carBrandName",
            "seCarSeriesName",
            "seCarTypeName",
            "carLicenseNo",
            "vin",
            "engineNo",
            "addrProvince",
            "addrCity",
            "addrCounty"
            //"carBrandCode"
          ],
          params: {
            oemCode: "1",
            groupCode: "1",
            vin: "",
            carLicenseNo: "",
            isPV800: "1"
          }
          //变更车主，新增用车人参数
        },
        pageSize: 10,
        pageIndex: 1
      },
      // 号码归属地
      teldata: {
        colnames: [
          { label: "省份", value: "cc" },
          { label: "城市", value: "city" },
          { label: "电话前缀", value: "prephone" },
          { label: "区号", value: "cityAreano" },
          { label: "是否可用", value: "isEnable" }
        ],
        tableDatas: [],
        queryObj: {
          apiConfig: crmApis.csDbPhonenoPlaceQueryFindAll, //号码归属地表查询
          apiQueryRow: [
            "provinceId",
            "cityId",
            "phoneNo",
            "cityAreano",
            "isEnable",
            "updateControlId",
            "placeId"
          ],
          params: {
            provinceId: "",
            cityId: "",
            phoneNo: "",
            isEnable: "",
            cityAreano: ""
          },
          editparams: {
            provinceId: "",
            cityId: "",
            phoneNo: "",
            isEnable: "",
            cityAreano: "",
            placeId: "",
            updateControlId: ""
          }
        },
        pageSize: 10,
        pageIndex: 1
      },
      // 车辆归属地
      cardata: {
        colnames: [
          { label: "省份", value: "provinceName" },
          { label: "城市", value: "cityName" },
          { label: "是否可用", value: "isEnableName" },
          { label: "车牌号", value: "license" }
        ],
        tableDatas: [],
        queryObj: {
          apiConfig: crmApis.csDbLicenseAddrQueryFindAll, //车辆归属地查询

          // 返回的字段，获取的表单数据
          apiQueryRow: [
            "provinceName",
            "cityName",
            "isEnableName",
            "license",
            "provinceId",
            "cityId",
            "isEnable",
            "licenseAddrId",
            "updateControlId"
          ],
          params: {
            oemCode: "1",
            groupCode: "1",
            // oemCode: "1",
            // groupCode: "1",
            provinceId: "",
            cityId: "",
            license: "",
            isEnable: ""
          },
          editparams: {
            licenseAddrId: "",
            license: "",
            provinceId: "",
            cityId: "",
            updateControlId: ""
          }
        },
        pageSize: 10,
        pageIndex: 1,
        total: 0
      },
      // 短信模板
      msgmoddata: {
        flag: true,
        colnames: [
          { label: "模板名称", value: "templateContent" },
          { label: "短信模板内容", value: "templateName" },
          { label: "是否启用", value: "isEnable" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.NavigateMap001,
          apiQueryRow: ["templateContent", "templateName", "isEnable"],
          params: {
            ModelName: "",
            ModelContentText: ""
          }
        },
        params: { code: "1" },
        isoperat: false,
        url: "/table",
        havedistrbute: false,
        haveEdit: false,
        haveDel: false
      },
      // 初始化
      initdatas: {
        flag: true,
        queryObj: {
          comapiConfig: "", //投诉单查询
          // 返回的字段，获取的表单数据
          apiQueryRowTS: [
            // 客户信息
            "custTag",
            "custName",
            "gender",
            "contactTel",
            "backupTel",
            "bigClassCode",
            "useCustName",
            "useGenderCode",
            "usePhone",
            "useBackupTel",
            "vCarseriesDesc",
            "carLicense",
            "vin",
            "engineNo",
            "custNo",
            "carBrandCode",
            "vCartypeDesc",
            "serverClassCode",
            "serverSourceCode",
            "linkBillCode",
            "faultDate",
            "faultMileage",
            "dutyDlrCode", //责任网点
            "dutyDlrName", //责任网点名称
            "nextDealPhone", //责任人电话
            "mileage",
            "baseSeriesCode",
            "baseSeriesName",
            "nextDealOrgName", //责任部门
            "nextDealEmpName",
            "serverLevel",
            "remark",
            "serverTitle",
            "custRequirement",
            "complainDesc",
            "serverAnswer",
            "distRemark", //派工说明
            "serverUrgency", //紧急程度（是否紧急）
            "createdDate", //建单时间(投诉日期)
            "crruNode", //节点编码
            "serverFullClassName" //投诉类别（服务类别全称）
          ],
          apiQueryRowXS: [
            "custId",
            "status",
            "actionDesc",
            "actionName",
            "actionType",
            "activeTime",
            "addrZip",
            "applicant",
            "applicantId",
            "applicantTime",
            "arrivedDate",
            "assignDate",
            "assignQty",
            "assignStatus",
            "assignStatusName",
            "auditResult",
            "auditType",
            "auitOpinion",
            "backupTel",
            "batchNo",
            "birthDate",
            "brandid",
            "buyCaruseCode",
            "buyFormCode",
            "buyPlanCode",
            "buyPlanName",
            "buyTypeCode",
            "buyTypeName",
            "buyingFormSite",
            "buypriceoff",
            "buytime",
            "caEmpId",
            "caEmpName",
            "callednum",
            "campaignId",
            "cantactWayCode",
            "cantactWayName",
            "carBrandCode",
            "carBrandName",
            "carConfigCn",
            "carConfigId",
            "carExhiName",
            "carLicense",
            "carSeriesCn",
            "caseTime",
            "changeIntentDate",
            "city",
            "cleanFlag",
            "cleanFlagName",
            "cleanQty",
            "clueBelongType",
            "clueCiytId",
            "clueCode",
            "clueDate",
            "clueDesc",
            "clueFrom",
            "clueId",
            "clueLevelCode",
            "clueSource",
            "clueStatus",
            "clueType",
            "clueTypeName",
            "color",
            "colorName",
            "communicater",
            "contStatus",
            "contactTel",
            "convTimeCode",
            "convTimeName",
            "createdDate",
            "createdName",
            "creator",
            "credNo",
            "credTypeCode",
            "credTypeName",
            "crruLevel",
            "crruNode",
            "crruNodeName",
            "csr",
            "custAddr",
            "custClassCode",
            "custClassName",
            "custClueCode",
            "custCounty",
            "custCountyId",
            "custFullName",
            "custName",
            "custSource",
            "dealNode",
            "dealStatus",
            "dealType",
            "degreeCode",
            "degreeName",
            "deliveryCarSeriesId",
            "deliveryCarSeriesName",
            "deliveryCarTypeCode",
            "deliveryCarTypeName",
            "dlrCode",
            "dlrShortName",
            "driveDate",
            "gender",
            "genderName",
            "groupCode",
            "groupId",
            "inteTypeId",
            "inteSeriesCode",
            "inteSeriesId",
            "inteTypeCode",
            "inteTypeCode",
            "inteTypeCode",
            "infoChanDCode",
            "infoChanDName",
            "infoChanMCode",
            "infoChanMName",
            "innerColor",
            "innerColorName",
            "intentPriceCode",
            "intentionalPrice",
            "isEnable",
            "orderAmount",
            "orderCode",
            "orderDate",
            "orderStatusName",
            "preArriveDlrTime",
            "processingAction",
            "recommendFlag",
            "recommendName",
            "serverOrder",
            "tbCarExhiId",
            "touchStatus",
            "touchStatusName",
            "vin",
            "vipTypeCode"
          ],
          params: {
            serverOrder: "",
            //serverType: "",
            vin: "",
            oemCode: "1",
            groupCode: "1"
            // oemCode: "1",
            // groupCode: "1"
            // custNo:"",
          },
          clueparams: {}
        },
        pagesize: 10,
        pageindex: 1
        // total
      },
      // 新建服务单提交
      tabledata: {
        flag: true,
        queryObj: {
          apiConfig: "",
          apiQueryRow: [],
          params: {},
          // 新建投诉单参数
          comparams: {
            //  客户车辆信息
            custName: "",
            gender: "",
            contactTel: "",
            backupTel: "",
            useCustName: "",
            useGenderCode: "",
            usePhone: "",
            useBackupTel: "",
            carLicense: "",
            vin: "",
            carBrandCode: "",
            // 投诉
            createdDate: "",
            // oemCode: "1",
            // groupCode: "1",
            oemCode: "1",
            groupCode: "1",
            serverSourceCode: "",
            serverSource: "",
            linkBillCode: "",
            faultDate: "",
            // faultMileage: "", //type=long
            // mileage: "", //type=long
            baseSeriesCode: "", // 相关基准车系
            baseSeriesName: "",
            dutyOrgCode: "",
            serverLevel: "",
            serverUrgency: "",
            remark: "",
            serverTitle: "",
            custRequirement: "",
            serverAnswer: "",

            serverType: "2",
            serverBrandCode: "",
            bigClassCode: "",
            serverClassCode: "",
            serverFullClassName: "",
            crruNode: "",
            complainDesc: "",
            // 下一责任人信息
            nextDealOrgId: "",
            nextDealEmpId: "",
            nextDealUserId: "",
            nextDealEmpName: "",
            nextDealOrgName: "",
            nextDealUserName: "",
            distRemark: "",
            custTag: "" //客户标签
            // addQty:"0",
          },
          clueparams: {
            custName: "",
            gender: "",
            contactTel: "",
            backupTel: "",
            useCustName: "",
            useGenderCode: "",
            usePhone: "",
            useBackupTel: "",
            // serverType: "4", //单据类型
            clueType: "", //线索类型
            cantactWayCode: "", //接触方式
            infoChanMCode: "", //渠道大类
            infoChanDCode: "", //渠道小类
            buyPlanCode: "", //计划购车时间
            inteSeriesId: "", //意向车系id
            inteSeriesCode: "", //意向车系code
            inteTypeId: "", //意向车型id
            inteTypeCode: "", //意向车型code
            transferObject: "", //传输对象
            custProvinceId: "",
            custCityId: "",
            clueDesc: "", //描述
            clueLevelCode: "", //线索级别
            dlrCode: "", //意向网点

            handleCode: "1" //操作码
          }
        },
        pagesize: 10,
        pageindex: 1
      },
      // 下一步责任人信息
      nextdata: {
        queryObj: {
          params: {
            oemCode: "1",
            groupCode: "1",
            carBrandCode: "",
            serverClassCode: "",
            nodeCode: "",
            serverType: "2" //投诉的服务类别为2
          }
        }
      },
      // 暂存
      zcdata: {
        flag: true,
        queryObj: {
          apiConfig: crmApis.csBuComplaintOrderMutationSaveTS, //新建服务单暂存
          apiQueryRow: [],
          params: {},

          // 暂存投诉单参数
          comparams: {
            //  客户车辆信息
            // custName: "",
            custName: "",
            gender: "",
            contactTel: "",
            backupTel: "",
            useCustName: "",
            useGenderCode: "",
            usePhone: "",
            useBackupTel: "",
            carBrandCode: "",

            // 投诉
            oemCode: "1",
            groupCode: "1",
            // oemCode: "1",
            // groupCode: "1",
            createdDate: "",
            serverSourceCode: "",
            serverSource: "",
            linkBillCode: "",
            faultDate: "",
            // faultMileage: "", //type=long?
            // mileage: "", //type=long?
            baseSeriesCode: "", // 相关基准车系
            baseSeriesName: "",
            dutyOrgCode: "",
            serverLevel: "",
            serverUrgency: "",
            serverType: "2",
            remark: "",
            serverTitle: "",
            custRequirement: "",
            serverAnswer: "",
            serverSource: "",
            serverBrandCode: "",
            serverClassCode: "",
            serverFullClassName: "",
            bigClassCode: "",
            crruNode: "",

            complainDesc: "",

            nextDealOrgId: "",
            nextDealEmpId: "",
            nextDealUserId: "",
            nextDealEmpName: "",
            nextDealOrgName: "",
            nextDealUserName: "",

            distRemark: "",
            custTag: "" //客户标签
            // addQty:"0",
          },

          clueparams: {
            custName: "",
            gender: "",
            contactTel: "",
            backupTel: "",
            useCustName: "",
            useGenderCode: "",
            usePhone: "",
            useBackupTel: "",
            clueType: "",
            cantactWayCode: "",
            infoChanMCode: "",
            infoChanDCode: "",
            clueLevelCode: "",
            buyPlanCode: "",
            inteSeriesId: "", //意向车系id
            inteSeriesCode: "", //意向车系code
            inteTypeId: "", //意向车型id
            inteTypeCode: "", //意向车型code
            transferObject: "",
            custProvinceId: "",
            custCityId: "",
            clueDesc: "",
            clueLevelCode: "",
            dlrCode: "",
            // serverType: "4", //单据类型

            handleCode: "0", //操作码
            status: "0"
          }
        },
        pagesize: 10,
        pageindex: 1
      }
    };
  },
  created() {
    this.debouncesave = _.debounce(this.submit, 800);
    this.debouncesave = _.debounce(this.save, 800);
  },
  mounted: function() {
    let that = this;
    this.$refs.custadd.resetinput();
    this.$refs.contactTel.reset();
    this.$refs.backupTel.reset();
    this.$refs.useCustName.reset();
    this.$refs.usePhone.reset();
    this.$refs.useBackupTel.reset();
    this.$refs.vCarseriesDesc.reset();
    this.$refs.carLicense.reset();
    this.$refs.vin.reset();
    this.$refs.vCarseriesDesc.reset();
    this.$refs.engineNo.reset();
    this.$refs.carbran.reset();
    this.$refs.vCartypeDesc.reset();
    this.$refs.abst1.reset();
    this.$refs.cust.reset();
    this.$refs.deal.reset();
    this.$refs.edist.reset();
    this.$refs.rdist.reset();
    this.$refs.gender.reset();
    this.$refs.useGenderCode.reset();
    this.$refs.edate.reset();
    this.$refs.compl.reset();

    // 线索
    this.$refs.cluet.reset();
    this.$refs.contw.reset();
    this.$refs.chanb.reset();
    this.$refs.chans.resetinput();
    this.$refs.relab.resetinput();
    this.$refs.planc.reset();
    this.$refs.inteo.resetinput();
    this.$refs.descri.reset();
    this.$refs.intel.reset();
    this.$refs.useGenderCode.reset();
    if (
      this.$route.params.serverOrder != "" &&
      this.$route.params.serverOrder != undefined
    ) {
      this.$nextTick(function() {
        this.initdata(this.$route.params.serverOrder);
      });
    }
    let time1 = new Date().getFullYear();
    let time2 = new Date().getMonth() + 1;
    if (time2 < 10) {
      time2 = "0" + time2;
    }
    let time3 = new Date().getDate();
    if (time3 < 10) {
      time3 = "0" + time3;
    }
    let time4 = new Date().getHours();
    if (time4 < 10) {
      time4 = "0" + time4;
    }
    let time5 = new Date().getMinutes();
    if (time5 < 10) {
      time5 = "0" + time5;
    }
    let time6 = new Date().getSeconds();
    if (time6 < 10) {
      time6 = "0" + time6;
    }
    that.form.createdDate.value =
      time1 +
      "-" +
      time2 +
      "-" +
      time3 +
      " " +
      time4 +
      ":" +
      time5 +
      ":" +
      time6;
    if (this.$refs.comp != undefined) {
      this.$refs.comp.getData();
    }
  },
  methods: {
    initKHData(custid) {
      let that = this;
      if (custid == undefined) {
        return;
      }
      let queryObj = {
        // api配置
        apiConfig: crmApis.mdmDlrCustInfoQuery,
        // 需要调用的API服务配置
        apiServices: [
          {
            apiQueryRow: [
              "carBrandName",
              "carSeriesCn",
              "carLicenseNo",
              "engineNo",
              "smallCarTypeCn",
              "vin"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            oemCode: "1",
            groupCode: "1",
            dlrCustNo: custid,
            isPV800: "1"
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          that.form.vCarseriesDesc.input = results.carSeriesCn;
          that.$refs.vCarseriesDesc.getData();
          that.form.carLicense.input = results.carLicenseNo;
          that.$refs.carLicense.getData();
          that.form.vin.input = results.vin;
          that.$refs.vin.getData();
          that.form.engineNo.input = results.engineNo;
          that.$refs.engineNo.getData();
          that.form.carBrandCode.input = results.carBrandName;
          that.$refs.carbran.getData();
          that.form.vCartypeDesc.input = results.smallCarTypeCn;
          that.$refs.vCartypeDesc.getData();
          that.form.vCartypeDesc.input = results.smallCarTypeCn;
          that.$refs.vCartypeDesc.getData();
        }
      });
    },
    choosecust(rowData) {
      let that = this;
      // that.form.custName.input=rowData.custName;
      that.form.gender.value = rowData.genderCode;
      that.form.contactTel.input = rowData.phone;
      that.form.backupTel.input = rowData.backTel;
      that.form.vCarseriesDesc.input = rowData.carSeriesCn;
      that.form.carLicense.input = rowData.carLicenseNo;
      that.form.vin.input = rowData.vin;
      that.form.engineNo.input = rowData.engineNo;
      that.form.carBrandCode.input = rowData.carBrandName;
      that.form.vCartypeDesc.input = rowData.smallCarTypeCn;
      that.tabledata.queryObj.comparams.custNo = rowData.dlrCustNo;
      that.zcdata.queryObj.comparams.custNo = rowData.dlrCustNo;
      that.tabledata.queryObj.clueparams.custId = rowData.dlrCustNo;
      that.zcdata.queryObj.clueparams.custId = rowData.dlrCustNo;
      // this.$refs.custadd.getData();
      this.$refs.gender.getData();
      this.$refs.contactTel.getData();
      this.$refs.backupTel.getData();
      this.$refs.vCarseriesDesc.getData();
      this.$refs.carLicense.getData();
      this.$refs.vin.getData();
      this.$refs.engineNo.getData();
      this.$refs.carbran.getData();
      this.$refs.vCartypeDesc.getData();
    },
    // 号码归属地
    Telattr() {
      let that = this;
      that.Attrflag = true;
    },
    telattrquery() {
      let that = this;
      that.teldata.queryObj.params.provinceId = this.$refs.telpeov.value;
      that.teldata.queryObj.params.cityId = this.$refs.telcity.value;
      that.teldata.queryObj.params.isEnable = this.$refs.telenable.input;
      that.teldata.queryObj.params.phoneNo = this.$refs.telphonepre.value;
      that.teldata.queryObj.params.cityAreano = this.$refs.telarea.value;
      let queryObj = {
        // api配置
        type: "query",
        apiConfig: that.teldata.queryObj.apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            apiQueryRow: that.teldata.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.teldata.pageSize,
          pageIndex: that.teldata.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.teldata.queryObj.params
        }
      };

      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          that.teldata.tableDatas =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.teldata.pageIndex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.teldata.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        } else {
          that.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
        }
      });
    },
    teledit(index, rowData) {
      let that = this;
      if (
        this.$refs.telpeov == undefined &&
        this.$refs.telcity == undefined &&
        this.$refs.telenable == undefined &&
        this.$refs.telphonepre == undefined &&
        this.$refs.telarea == undefined
      ) {
        that.Telpeov.value = rowData.provinceId;
        that.Telcity.value = rowData.cityId;
        that.Telenable.value = rowData.isEnable;
        that.Telphonepre.input = rowData.phoneNo;
        that.Telarea.input = rowData.cityAreano;
        that.telEditFlag = true;
        that.teldata.queryObj.editparams.placeId = rowData.placeId;
        that.teldata.queryObj.editparams.updateControlId =
          rowData.updateControlId;
      } else {
        that.Telpeov.value = rowData.provinceId;
        that.Telcity.value = rowData.cityId;
        that.Telenable.value = rowData.isEnable;
        that.Telphonepre.input = rowData.phoneNo;
        that.Telarea.input = rowData.cityAreano;
        this.$refs.telpeov.getData();
        this.$refs.telcity.getData();
        this.$refs.telenable.getData();
        this.$refs.telphonepre.getData();
        this.$refs.telarea.getData();
        that.telEditFlag = true;
        that.teldata.queryObj.editparams.placeId = rowData.placeId;
        that.teldata.queryObj.editparams.updateControlId =
          rowData.updateControlId;
      }
    },
    addtelattr() {
      let that = this;
      if (
        this.$refs.telpeov == undefined &&
        this.$refs.telcity == undefined &&
        this.$refs.telenable == undefined &&
        this.$refs.telphonepre == undefined &&
        this.$refs.telarea == undefined
      ) {
        that.telEditFlag = true;
        that.teldata.queryObj.editparams.placeId = "";
      } else {
        this.$refs.telpeov.reset();
        this.$refs.telcity.reset();
        this.$refs.telenable.reset();
        this.$refs.telphonepre.reset();
        this.$refs.telarea.reset();
        that.telEditFlag = true;
        that.teldata.queryObj.editparams.placeId = "";
      }
    },
    telsave() {
      let that = this;
      that.teldata.queryObj.editparams.provinceId = this.$refs.proctel.value;
      that.teldata.queryObj.editparams.cityId = this.$refs.citytel.value;
      that.teldata.queryObj.editparams.isEnable = this.$refs.isabletel.value;
      that.teldata.queryObj.editparams.phoneNo = this.$refs.phonetel.input;
      that.teldata.queryObj.editparams.cityAreano = this.$refs.areatel.input;
      let queryObj = {
        //api配置
        type: "mutation",
        // api配置
        apiConfig: crmApis.csDbPhonenoPlaceMutationSaveById,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //写入参数赋值
          dataInfo: that.teldata.queryObj.editparams
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.$crmcf.showMessages(that, "success", "保存成功！");
          that.teldata.tableDatas =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.telEditFlag = false;
          this.telattrquery();
        } else {
          that.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
        }
      });
    },
    telreset() {
      this.$refs.telpeov.reset();
      this.$refs.telcity.reset();
      this.$refs.telenable.reset();
      this.$refs.telphonepre.reset();
      this.$refs.telarea.reset();
    },
    //联动
    telprochange(val) {
      let that = this;
      that.Telcity.pcode = val;
      if (that.$refs.telcity == undefined) {
      } else {
        that.$refs.telcity.getData();
      }
    },
    clueprpo(val) {
      let that = this;
      that.form.city.pcode = val;
      if (that.$refs.citys == undefined) {
      } else {
        that.$refs.citys.getData();
      }
    },
    telattrpro(val) {
      let that = this;
      that.Citytel.pcode = val;
      if (that.$refs.citytel == undefined) {
      } else {
        that.$refs.citytel.getData();
      }
    },
    contactWayChange(val) {
      let that = this;
      that.form.infoChanMCode.pcode = val;
      if (that.$refs.chanb == undefined) {
      } else {
        that.$refs.chanb.getData();
      }
    },
    channelBigClassChange(val) {
      let that = this;
      that.form.infoChanDName.pcode = val;
      if (that.$refs.chans == undefined) {
      } else {
        that.$refs.chans.getData();
      }
    },
    getDchan(row) {
      this.zcdata.queryObj.clueparams.infoChanDCode = row.infoChanDCode;
      this.tabledata.queryObj.clueparams.infoChanDCode = row.infoChanDCode;
    },
    //车辆归属地
    carAttr() {
      let that = this;
      that.carAttrflag = true;
    },
    carsttrquery() {
      let that = this;
      that.cardata.queryObj.params.provinceId = this.$refs.proccar.value;
      that.cardata.queryObj.params.cityId = this.$refs.citycar.value;
      that.cardata.queryObj.params.license = this.$refs.carbrancar.input;
      that.cardata.queryObj.params.isEnable = this.$refs.isablecar.value;
      let queryObj = {
        // api配置
        type: "query",
        apiConfig: that.cardata.queryObj.apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            apiQueryRow: that.cardata.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.cardata.pageSize,
          pageIndex: that.cardata.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.cardata.queryObj.params
        }
      };

      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          that.cardata.tableDatas =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.cardata.pageIndex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.cardata.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        } else {
          that.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
        }
      });
    },
    addcarattr() {
      let that = this;
      if (
        this.$refs.carpro == undefined &&
        this.$refs.carsable == undefined &&
        this.$refs.carcity == undefined &&
        this.$refs.carbrancode == undefined
      ) {
        that.carAttradd = true;
        that.cardata.queryObj.editparams.licenseAddrId = "";
      } else {
        this.$refs.carpro.reset();
        this.$refs.carcity.reset();
        this.$refs.carsable.reset();
        this.$refs.carbrancode.reset();
        that.carAttradd = true;
        that.cardata.queryObj.editparams.licenseAddrId = "";
      }
    },
    caredit(index, rowData) {
      let that = this;
      if (
        this.$refs.carpro == undefined &&
        this.$refs.carsable == undefined &&
        this.$refs.carcity == undefined &&
        this.$refs.carbrancode == undefined
      ) {
        that.Carpro.value = rowData.provinceId;
        that.Carsable.value = rowData.isEnable;
        that.Carcity.value = rowData.cityId;
        that.Carbrancode.input = rowData.license;
        that.carAttradd = true;
        that.cardata.queryObj.editparams.licenseAddrId = rowData.licenseAddrId;
        that.cardata.queryObj.editparams.updateControlId =
          rowData.updateControlId;
      } else {
        that.Carpro.value = rowData.provinceId;
        that.Carsable.value = rowData.isEnable;
        that.Carcity.value = rowData.cityId;
        that.Carbrancode.input = rowData.license;
        this.$refs.carpro.getData();
        this.$refs.carcity.getData();
        this.$refs.carsable.getData();
        this.$refs.carbrancode.getData();
        that.carAttradd = true;
        that.cardata.queryObj.editparams.licenseAddrId = rowData.licenseAddrId;
        that.cardata.queryObj.editparams.updateControlId =
          rowData.updateControlId;
      }
    },
    carsave() {
      let that = this;
      that.cardata.queryObj.editparams.license = this.$refs.carbrancode.input;
      that.cardata.queryObj.editparams.provinceId = this.$refs.carpro.value;
      that.cardata.queryObj.editparams.cityId = this.$refs.carcity.value;
      let queryObj = {
        //api配置
        type: "mutation",
        // api配置
        apiConfig: crmApis.csDbLicenseAddrMutationSaveById,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //写入参数赋值
          dataInfo: that.cardata.queryObj.editparams
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.$crmcf.showMessages(that, "success", "保存成功！");
          that.cardata.tableDatas =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.carAttradd = false;
          this.carsttrquery();
        } else {
          that.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
        }
      });
    },
    carreset() {
      this.$refs.proccar.reset();
      this.$refs.citycar.reset();
      this.$refs.carbrancar.reset();
      this.$refs.isablecar.reset();
    },
    //分页
    carprev() {
      let that = this;
      if (this.cardata.pageIndex > 1) {
        that.cardata.pageIndex = this.cardata.pageIndex - 1;
        this.carsttrquery();
      }
    },
    carnext() {
      let that = this;
      if (true) {
        that.cardata.pageIndex = this.cardata.pageIndex + 1;
        this.carsttrquery();
      }
    },
    carchangepage(index) {
      let that = this;
      that.cardata.pageIndex = index;
      this.carsttrquery();
    },
    carprochange(val) {
      let that = this;
      that.Citycar.pcode = val;
      if (that.$refs.citycar == undefined) {
      } else {
        that.$refs.citycar.getData();
      }
    },
    carattrpro(val) {
      let that = this;
      that.Carcity.pcode = val;
      if (that.$refs.carcity == undefined) {
      } else {
        that.$refs.carcity.getData();
      }
    },
    // 来电弹屏
    callscreen() {
      let that = this;
      that.custtxt.input = this.$refs.custadd.input;
      that.callphone.input = this.$refs.contactTel.input;
      if (
        this.$refs.custtxt != undefined &&
        this.$refs.callphone != undefined
      ) {
        this.$refs.custtxt.getData();
        this.$refs.callphone.getData();
      }
      that.callflag = true;
    },
    usercall() {
      let that = this;
      that.custtxt.input = this.$refs.useCustName.input;
      that.callphone.input = this.$refs.usePhone.input;
      if (
        this.$refs.custtxt != undefined &&
        this.$refs.callphone != undefined
      ) {
        this.$refs.custtxt.getData();
        this.$refs.callphone.getData();
      }
      that.callflag = true;
    },
    choose(index, rowData) {
      let that = this;
      that.commrecord = true;
    },
    // 短信模板
    msgmod() {
      let that = this;
      that.modn.input = this.$refs.contactTel.input;
      if (this.$refs.ModelName != undefined) {
        this.$refs.ModelName.getData();
      }
      that.Msgmodflag = true;
    },
    backupMsg() {
      let that = this;
      that.modn.input = this.$refs.usePhone.input;
      if (this.$refs.ModelName != undefined) {
        this.$refs.ModelName.getData();
      }
      that.Msgmodflag = true;
    },

    msgreset: function() {
      this.$refs.ModelName.reset();
      this.$refs.ModelContentText.reset();
    },
    // 页面初始化
    initdata(serverOrder) {
      let that = this;

      if (this.$route.params.serverType == "2") {
        // that.form.vCarseriesDesc.isdisable= true;
        that.initdatas.queryObj.params.serverOrder = this.$route.params.serverOrder;
        //that.initdatas.queryObj.params.serverType = this.$route.params.serverType;
        that.initdatas.queryObj.params.vin = this.$route.params.vin;

        that.tabledata.queryObj.comparams.serverId = this.$route.params.serverId;
        that.tabledata.queryObj.comparams.serverOrder = this.$route.params.serverOrder;

        that.zcdata.queryObj.comparams.serverId = this.$route.params.serverId;
        that.zcdata.queryObj.comparams.serverOrder = this.$route.params.serverOrder;

        that.tabledata.queryObj.apiConfig =
          crmApis.csBuComplaintOrderMutationCommitTS;
        that.zcdata.queryObj.apiConfig =
          crmApis.csBuComplaintOrderMutationSaveTS;
        //投诉初始化
        let queryObj = {
          // api配置
          apiConfig: crmApis.csBuComplaintOrderQueryFindAll,
          // 需要调用的API服务配置
          apiServices: [
            {
              //表格中台返回网格的字段
              apiQueryRow: that.initdatas.queryObj.apiQueryRowTS
            }
          ],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: that.initdatas.pagesize,
            pageIndex: that.initdatas.pageindex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: this.initdatas.queryObj.params
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response => {
          if (
            response.data[queryObj.apiConfig.ServiceCode].result == "1"
            //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
          ) {
            let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];

            for (let key in that.form) {
              if ("input" in that.form[key]) {
                if (results.hasOwnProperty(key)) {
                  that.form[key].input = results[key];
                }
              } else {
                if (results.hasOwnProperty(key)) {
                  that.form[key].value = results[key];
                }
              }
            }
            that.nextdata.queryObj.params.serverClassCode =
              results.bigClassCode;
            that.nextdata.queryObj.params.carBrandCode = results.carBrandCode;

            that.tabledata.queryObj.comparams.bigClassCode =
              results.bigClassCode;
            that.tabledata.queryObj.comparams.serverClassCode =
              results.serverClassCode;
            that.tabledata.queryObj.comparams.baseSeriesCode =
              results.baseSeriesCode;
            that.tabledata.queryObj.comparams.carBrandCode =
              results.carBrandCode;
            that.tabledata.queryObj.comparams.serverBrandCode =
              results.carBrandCode;
            that.tabledata.queryObj.comparams.baseSeriesName =
              results.baseSeriesName; //

            that.zcdata.queryObj.comparams.bigClassCode = results.bigClassCode;
            that.zcdata.queryObj.comparams.serverClassCode =
              results.serverClassCode;
            that.zcdata.queryObj.comparams.baseSeriesCode =
              results.baseSeriesCode;
            that.zcdata.queryObj.comparams.carBrandCode = results.carBrandCode;
            that.zcdata.queryObj.comparams.serverBrandCode =
              results.carBrandCode;
            that.zcdata.queryObj.comparams.baseSeriesName =
              results.baseSeriesName;
            let Tag = results.custTag;
            let custTags = Tag.substr(1, Tag.length-2);
            if (custTags != "") {
              this.dynamicTags = custTags.split(","); //客户标签
            }
            that.tabledata.queryObj.apiConfig =
              crmApis.csBuComplaintOrderMutationCommitTS;
            that.zcdata.queryObj.apiConfig =
              crmApis.csBuComplaintOrderMutationSaveTS;

            //客户信息
            that.$refs.custadd.getData();
            that.$refs.gender.getData();
            that.$refs.contactTel.getData();
            that.$refs.backupTel.getData();
            that.$refs.useCustName.getData();
            that.$refs.useGenderCode.getData();
            that.$refs.usePhone.getData();
            that.$refs.useBackupTel.getData();
            // that.$refs.vCarseriesDesc.getData();
            // that.$refs.carLicense.getData();
            // that.$refs.vin.getData();
            // that.$refs.engineNo.getData();
            // that.$refs.carbran.getData();
            // that.$refs.vCartypeDesc.getData();
            that.initKHData(results.custNo);
            // 投诉
            that.$refs.comp.getData();
            that.$refs.sctc.getData();
            that.$refs.sour.getData();
            that.$refs.proc.getData();

            that.$refs.edate.getData();
            that.$refs.edist.getData();
            that.$refs.rdist.getData();

            that.$refs.serverFullClassName.getData();
            that.$refs.dutyDlrName.getData();
            that.$refs.baseSeriesName.getData();
            that.$refs.respd.getData();

            that.$refs.respo.getData();

            that.$refs.duty.getData();
            that.$refs.compl.getData();
            that.$refs.whet.getData();
            that.$refs.jobd.getData();

            that.$refs.rema.getData();
            that.$refs.abst1.getData();
            that.$refs.cust.getData();
            that.$refs.deal.getData();
            that.$refs.serverAnswer.getData();
            if (results.crruNode == "TS_JA") {
              that.form.proc.value == "1";
            } else if (results.crruNode == "TS_ZJPD") {
              that.form.proc.value == "3";
            } else if (results.crruNode == "TS_PVPD") {
              that.form.proc.value == "2";
            } else if (results.crruNode == "TS_DLRPD") {
              that.form.proc.value == "2";
            }
            this.$refs.proc.getData();
          } else {
            that.$crmcf.showMessages(
              that,
              "error",
              response.data[queryObj.apiConfig.ServiceCode].msg
            );
          }
        });
        // }
        that.activeName = "second";
        that.display = true;
        that.clue = false;
        //this.$route.params.serverOrder = "";
        //this.$route.params.serverType = "";
        //this.$route.params.vin = "";
      } else if (this.$route.params.serverType == "4") {
        that.initdatas.queryObj.clueparams.serverOrder = this.$route.params.serverOrder;
        //线索初始化
        let queryObj = {
          // api配置
          apiConfig: crmApis.clueServerQueryDetailFromHeadquarters, //总部线索详情
          // 需要调用的API服务配置
          apiServices: [
            {
              //表格中台返回网格的字段
              apiQueryRow: that.initdatas.queryObj.apiQueryRowXS
            }
          ],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: that.initdatas.pagesize,
            pageIndex: that.initdatas.pageindex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: this.initdatas.queryObj.clueparams
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response => {
          if (
            response.data[queryObj.apiConfig.ServiceCode].result == "1"
            //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
          ) {
            let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];

            for (let key in that.form) {
              if ("input" in that.form[key]) {
                if (results.hasOwnProperty(key)) {
                  that.form[key].input = results[key];
                }
              } else if ("value" in that.form[key]) {
                if (results.hasOwnProperty(key)) {
                  that.form[key].value = results[key];
                }
              }
            }
            that.tabledata.queryObj.clueparams.carBrandCode = results.carBrandCode;
            that.tabledata.queryObj.clueparams.inteSeriesId = results.inteSeriesId;
            that.tabledata.queryObj.clueparams.serverOrder = results.serverOrder;
            that.tabledata.queryObj.clueparams.dlrCode = results.dlrCode;
            that.tabledata.queryObj.clueparams.tbCarExhiId = results.tbCarExhiId;
            that.tabledata.queryObj.clueparams.carExhiName = results.carExhiName;
            that.tabledata.queryObj.clueparams.inteTypeId = results.inteTypeId;
            that.tabledata.queryObj.clueparams.inteTypeCode = results.inteTypeCode;
            that.tabledata.queryObj.clueparams.inteSeriesCode = results.inteSeriesCode;
            that.tabledata.queryObj.clueparams.infoChanDCode = results.infoChanDCode;

            that.zcdata.queryObj.clueparams.carBrandCode = results.carBrandCode;
            that.zcdata.queryObj.clueparams.inteTypeId = results.inteTypeId;
            that.zcdata.queryObj.clueparams.inteTypeCode = results.inteTypeCode;
            that.zcdata.queryObj.clueparams.inteSeriesId = results.inteSeriesId;
            that.zcdata.queryObj.clueparams.inteSeriesCode = results.inteSeriesCode;
            that.zcdata.queryObj.clueparams.serverOrder = results.serverOrder;
            that.zcdata.queryObj.clueparams.tbCarExhiId = results.tbCarExhiId;
            that.zcdata.queryObj.clueparams.carExhiName = results.carExhiName;
            that.zcdata.queryObj.clueparams.dlrCode = results.dlrCode;
            that.zcdata.queryObj.clueparams.infoChanDCode = results.infoChanDCode;
            
            that.tabledata.queryObj.apiConfig =
              crmApis.clueServerMutationCreateServerOrder;
            that.zcdata.queryObj.apiConfig =
              crmApis.clueServerMutationCreateServerOrder;
            that.tabledata.queryObj.clueparams.custId = results.custId;
            that.zcdata.queryObj.clueparams.custId = results.custId;

            //客户信息
            that.$refs.custadd.getData();
            that.$refs.gender.getData();
            that.$refs.contactTel.getData();
            that.$refs.backupTel.getData();
            that.$refs.useCustName.getData();
            that.$refs.useGenderCode.getData();
            that.$refs.usePhone.getData();
            that.$refs.useBackupTel.getData();
            that.initKHData(results.custId);
            //线索
            that.$refs.cluet.getData();
            that.$refs.contw.getData();
            that.$refs.chanb.getData();
            that.$refs.chans.getDatas();
            that.$refs.relab.getData();
            that.$refs.planc.getData();
            that.$refs.tranobj.getData();
            // that.$refs.prov.getData();
            // that.$refs.citys.getData();

            that.$refs.inteo.getData();
            that.$refs.intel.getData();
            that.$refs.consdate.getData();
            that.$refs.msg.getData();
            that.$refs.actname.getData();
            that.$refs.sermenu.getData();
            that.$refs.abst.getData();
            that.$refs.dutyDlrName.getData();
            that.$refs.respd1.getData();
            that.$refs.custre.getData();
            that.$refs.jobd.getData();
            that.$refs.rema.getData();

            this.$refs.askcon.getData();
            this.$refs.custs.getData();
            this.$refs.descri.getData();
          } else {
            that.$crmcf.showMessages(
              that,
              "error",
              response.data[queryObj.apiConfig.ServiceCode].msg
            );
          }
        });
        that.activeName = "third";
        that.display = false;
        that.clue = false;
        //this.$route.params.serverOrder = "";
        //this.$route.params.serverType = "";
        //this.$route.params.vin = "";
      }
    },
    // 暂存
    save(formName) {
      let that = this;
      // 投诉
      if (
        that.zcdata.queryObj.apiConfig.ServiceCode ==
        "csBuComplaintOrderMutationSaveTS" //暂存投诉单
      ) {
        that.zcdata.queryObj.comparams.custTag = that.dynamicTags; //客户标签

        that.zcdata.queryObj.comparams.createdDate = this.$refs.comp.value; //建单（投诉）日期
        that.zcdata.queryObj.comparams.faultDate = this.$refs.edate.value; //故障日期
        that.zcdata.queryObj.comparams.distRemark = this.$refs.jobd.input; //派工说明
        that.zcdata.queryObj.comparams.linkBillCode = this.$refs.sour.input; //来源单号
        that.zcdata.queryObj.comparams.serverSource = this.$refs.sctc.value; //服务来源
        that.zcdata.queryObj.comparams.serverSourceCode = this.$refs.sctc.value; //投诉途径
        that.zcdata.queryObj.comparams.serverUrgency = this.$refs.whet.value; //是否紧急
        that.zcdata.queryObj.comparams.custName = this.$refs.custadd.input;
        that.zcdata.queryObj.comparams.gender = this.$refs.gender.value;
        that.zcdata.queryObj.comparams.contactTel = this.$refs.contactTel.input;
        that.zcdata.queryObj.comparams.backupTel = this.$refs.backupTel.input;
        that.zcdata.queryObj.comparams.useCustName = this.$refs.useCustName.input;
        that.zcdata.queryObj.comparams.usePhone = this.$refs.usePhone.input;
        that.zcdata.queryObj.comparams.useGenderCode = this.$refs.useGenderCode.value;
        that.zcdata.queryObj.comparams.useBackupTel = this.$refs.useBackupTel.input;
        that.zcdata.queryObj.comparams.engineNo = this.$refs.engineNo.input;
        that.zcdata.queryObj.comparams.mileage =
          this.$refs.rdist.input == "" || this.$refs.rdist.input == null
            ? undefined
            : this.$refs.rdist.input; //行驶里程
        that.zcdata.queryObj.comparams.faultMileage =
          this.$refs.edist.input == "" || this.$refs.edist.input == null
            ? undefined
            : this.$refs.edist.input; //故障里程
        that.zcdata.queryObj.comparams.serverTitle = this.$refs.abst1.input;
        that.zcdata.queryObj.comparams.custRequirement = this.$refs.cust.input;
        that.zcdata.queryObj.comparams.serverAnswer = this.$refs.serverAnswer.input;
        that.zcdata.queryObj.comparams.complainDesc = this.$refs.deal.input;
        that.zcdata.queryObj.comparams.vin = this.$refs.vin.input;
        that.zcdata.queryObj.comparams.carLicense = this.$refs.carLicense.input;
        that.zcdata.queryObj.comparams.serverLevel = this.$refs.compl.value;
        that.zcdata.queryObj.comparams.remark = this.$refs.rema.input; //备注
        that.zcdata.queryObj.comparams.serverFullClassName = this.$refs.serverFullClassName.input; //投诉类别全称
        that.zcdata.queryObj.comparams.serverUrgency = this.$refs.whet.value; //是否紧急
        that.zcdata.queryObj.comparams.crruNode = "TS_XJZC";
        let flag = false;
        var config = this.config;
        config = {
          custName: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.zcdata.queryObj.comparams.custName,
            "客户名称",
            "不能为空"
          ],
          contactTel: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.zcdata.queryObj.comparams.contactTel,
            "电话",
            "不能为空",
            ""
          ],
          serverTitle: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.zcdata.queryObj.comparams.serverTitle,
            "摘要",
            "不能为空"
          ],
          serverAnswer: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.zcdata.queryObj.comparams.serverAnswer,
            "坐席回答",
            "不能为空"
          ],
          complainDesc: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.zcdata.queryObj.comparams.complainDesc,
            "处理内容",
            "不能为空"
          ],
          serverLevel: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.zcdata.queryObj.comparams.serverLevel,
            "投诉级别",
            "不能为空"
          ],
          serverFullClassName: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "input",
            that.zcdata.queryObj.comparams.serverFullClassName,
            "投诉类别",
            "不能为空"
          ],
          baseSeriesName: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "input",
            this.$refs.baseSeriesName.input,
            "相关基准车系",
            "不能为空"
          ],
          serverSourceCode: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "input",
            that.zcdata.queryObj.comparams.serverSourceCode,
            "投诉途径",
            "不能为空"
          ]
        };
        this.$crmcf.validForm(that, formName, config, function(flag) {
          if (flag) {
            let queryObj = {
              // api配置
              type: "mutation",
              apiConfig: that.zcdata.queryObj.apiConfig,

              // 需要调用的API服务配置
              apiServices: [
                {
                  //表格中台返回网格的字段
                  apiQueryRow: ["serverId", "serverOrder"]
                }
              ],
              //条件/实体参数（变量），根据typeParam中的定义配置
              variables: {
                pageSize: that.zcdata.pagesize,
                pageIndex: that.zcdata.pageindex,
                //当前中台使用的名称有dataInfo、info，具体查看API文档
                dataInfo: that.zcdata.queryObj.comparams
              }
            };

            //转换了中台请求格式数据
            var paramD = that.$getParams(queryObj);
            // 调用中台API方法（可复用）
            requestGraphQL(paramD).then(response => {
              if (
                response.data[queryObj.apiConfig.ServiceCode].result == "1"
                // &&response.data[queryObj.apiConfig.ServiceCode].rows != ""
              ) {
                that.$crmcf.showMessages(that, "success", "暂存成功！");
                that.zcdata.queryObj.comparams.serverOrder =
                  response.data[
                    queryObj.apiConfig.ServiceCode
                  ].rows.serverOrder;
                that.tabledata.queryObj.comparams.serverOrder =
                  response.data[
                    queryObj.apiConfig.ServiceCode
                  ].rows.serverOrder;
                that.zcdata.queryObj.comparams.serverId =
                  response.data[
                    queryObj.apiConfig.ServiceCode
                  ].rows.serverId;
                that.tabledata.queryObj.comparams.serverId =
                  response.data[
                    queryObj.apiConfig.ServiceCode
                  ].rows.serverId;
              } else {
                that.$crmcf.showMessages(
                  that,
                  "error",
                  response.data[queryObj.apiConfig.ServiceCode].msg
                );
              }
            });
          }
        });
      } else if (
        that.zcdata.queryObj.apiConfig.ServiceCode ==
        "clueServerMutationCreateServerOrder"
      ) {
        that.zcdata.queryObj.clueparams.custName = this.$refs.custadd.input;
        that.zcdata.queryObj.clueparams.gender = this.$refs.gender.value;
        that.zcdata.queryObj.clueparams.contactTel = this.$refs.contactTel.input;
        that.zcdata.queryObj.clueparams.backupTel = this.$refs.backupTel.input;
        that.zcdata.queryObj.clueparams.useCustName = this.$refs.useCustName.input;
        that.zcdata.queryObj.clueparams.usePhone = this.$refs.usePhone.input;
        that.zcdata.queryObj.clueparams.useGenderCode = this.$refs.useGenderCode.value;
        that.zcdata.queryObj.clueparams.useBackupTel = this.$refs.useBackupTel.input;

        that.zcdata.queryObj.clueparams.clueType = this.$refs.cluet.value;
        that.zcdata.queryObj.clueparams.cantactWayCode = this.$refs.contw.value;
        that.zcdata.queryObj.clueparams.infoChanMCode = this.$refs.chanb.value;
        that.zcdata.queryObj.clueparams.buyPlanCode = this.$refs.planc.value;
        that.zcdata.queryObj.clueparams.transferObject = this.$refs.tranobj.value;
        that.zcdata.queryObj.clueparams.clueDesc = this.$refs.descri.input;
        that.zcdata.queryObj.clueparams.clueLevelCode = this.$refs.intel.value;
        let flag = false;
        var config = this.config;
        config = {
          custName: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.zcdata.queryObj.clueparams.custName,
            "客户名称",
            "不能为空"
          ],
          contactTel: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.zcdata.queryObj.clueparams.contactTel,
            "电话",
            "不能为空",
            ""
          ],
          clueType: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.zcdata.queryObj.clueparams.clueType,
            "线索类型",
            "不能为空"
          ],
          cantactWayCode: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.zcdata.queryObj.clueparams.cantactWayCode,
            "接触方式",
            "不能为空"
          ],
          infoChanMCode: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.zcdata.queryObj.clueparams.infoChanMCode,
            "渠道大类",
            "不能为空"
          ],
          infoChanDCode: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.zcdata.queryObj.clueparams.infoChanDCode,
            "渠道小类",
            "不能为空"
          ],
          buyPlanCode: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.zcdata.queryObj.clueparams.buyPlanCode,
            "计划购车时间",
            "不能为空"
          ],
          relab: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "input",
            this.$refs.relab.input,
            "相关基准车系",
            "不能为空"
          ],
          clueLevelCode: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "input",
            that.zcdata.queryObj.clueparams.clueLevelCode,
            "意向级别",
            "不能为空"
          ]
        };
        this.$crmcf.validForm(that, formName, config, function(flag) {
          if (flag) {
            let queryObj = {
              // api配置
              type: "mutation",
              apiConfig: that.zcdata.queryObj.apiConfig,

              // 需要调用的API服务配置
              apiServices: [
                {
                  //表格中台返回网格的字段
                  apiQueryRow: ["serverOrder"]
                }
              ],
              //条件/实体参数（变量），根据typeParam中的定义配置
              variables: {
                pageSize: that.zcdata.pagesize,
                pageIndex: that.zcdata.pageindex,
                //当前中台使用的名称有dataInfo、info，具体查看API文档
                dataInfo: that.zcdata.queryObj.clueparams
              }
            };

            //转换了中台请求格式数据
            var paramD = that.$getParams(queryObj);
            // 调用中台API方法（可复用）
            requestGraphQL(paramD).then(response => {
              if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
                that.$crmcf.showMessages(that, "success", "暂存成功！");
                that.zcdata.queryObj.clueparams.serverOrder =
                  response.data[
                    queryObj.apiConfig.ServiceCode
                  ].rows.serverOrder;
                that.tabledata.queryObj.clueparams.serverOrder =
                  response.data[
                    queryObj.apiConfig.ServiceCode
                  ].rows.serverOrder;
              } else {
                that.$crmcf.showMessages(
                  that,
                  "error",
                  response.data[queryObj.apiConfig.ServiceCode].msg
                );
              }
            });
          }
        });
      }
    },
    // 获取下一步责任人信息
    getNext() {
      let that = this;

      that.form.proc.value = this.$refs.proc.value;
      if (this.$refs.proc.value == "1") {
        that.nextdata.queryObj.params.nodeCode = "TS_JA";
        that.tabledata.queryObj.comparams.crruNode = "TS_JA";
        that.zcdata.queryObj.comparams.crruNode = "TS_JA";
      }
      // 派单给技术专家
      else if (this.$refs.proc.value == "3") {
        that.nextdata.queryObj.params.nodeCode = "TS_ZJPD";
        that.tabledata.queryObj.comparams.crruNode = "TS_ZJPD";
        that.zcdata.queryObj.comparams.crruNode = "TS_ZJPD";
      }
      // 派单，如果选了网点就派给网点,没选就派给厂家
      else if (this.$refs.proc.value == "2") {
        if (
          that.form.dutyDlrName.input == "" ||
          that.form.dutyDlrName.input == null
        ) {
          that.nextdata.queryObj.params.nodeCode = "TS_PVPD";
          that.tabledata.queryObj.comparams.crruNode = "TS_PVPD";
          that.zcdata.queryObj.comparams.crruNode = "TS_PVPD";
        } else {
          that.nextdata.queryObj.params.nodeCode = "TS_DLRPD";
          that.tabledata.queryObj.comparams.crruNode = "TS_DLRPD";
          that.zcdata.queryObj.comparams.crruNode = "TS_DLRPD";
        }
      }
      // 无效结案
      else if (this.$refs.proc.value == "6") {
        that.nextdata.queryObj.params.nodeCode = "TS_JA";
        that.tabledata.queryObj.comparams.crruNode = "TS_JA";
        that.zcdata.queryObj.comparams.crruNode = "TS_JA";
      }
      // 二线
      else if (this.$refs.proc.value == "7") {
      }
      // 获取下一处理接口
      let queryObj = {
        // api配置
        type: "query",
        apiConfig: crmApis.getNextDutyPerson,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "dutyEmpId",
              "dutyEmpName",
              "dutyOrgId",
              "dutyOrgName",
              "dutyUserId",
              "dutyUserMobile",
              "dutyUserName"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.tabledata.pagesize,
          pageIndex: that.tabledata.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.nextdata.queryObj.params
        }
      };

      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.tabledata.queryObj.comparams.nextDealEmpId =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].dutyEmpId; //责任人员工id
          that.tabledata.queryObj.comparams.nextDealEmpName =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].dutyEmpName; //责任人员工名
          that.tabledata.queryObj.comparams.nextDealOrgId =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].dutyOrgId; //责任组织id
          that.tabledata.queryObj.comparams.nextDealOrgName =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].dutyOrgName; //责任组织名
          that.tabledata.queryObj.comparams.nextDealUserId =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].dutyUserId; //责任人用户id
          that.tabledata.queryObj.comparams.nextDealUserName =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].dutyUserName; //责任人用户名

          // 暂存
          that.zcdata.queryObj.comparams.nextDealEmpId =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].dutyEmpId; //责任人员工id
          that.zcdata.queryObj.comparams.nextDealEmpName =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].dutyEmpName; //责任人员工名
          that.zcdata.queryObj.comparams.nextDealOrgId =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].dutyOrgId; //责任组织id
          that.zcdata.queryObj.comparams.nextDealOrgName =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].dutyOrgName; //责任组织名
          that.zcdata.queryObj.comparams.nextDealUserId =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].dutyUserId; //责任人用户id
          that.zcdata.queryObj.comparams.nextDealUserName =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].dutyUserName; //责任人用户名

          that.tabledata.queryObj.comparams.carBrandCode =
            that.nextdata.queryObj.params.carBrandCode; //品牌

          //给下一责任组件赋值
          that.form.nextDealOrgName.input =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].dutyOrgName; //责任部门
          that.form.nextDealEmpName.input =
            response.data[queryObj.apiConfig.ServiceCode].rows[0].dutyEmpName; //责任人
          that.form.nextDealPhone.input =
            response.data[
              queryObj.apiConfig.ServiceCode
            ].rows[0].dutyUserMobile; //责任人电话
          this.$refs.respd.getData();
          this.$refs.respo.getData();
          this.$refs.duty.getData();
        }
      });
    },
    // 提交
    submit(formName) {
      let that = this;
      // 投诉
      if (
        that.tabledata.queryObj.apiConfig.ServiceCode ==
        "csBuComplaintOrderMutationCommitTS"
      ) {
        // this.getNext();
        that.tabledata.queryObj.comparams.custTag = that.dynamicTags; //客户标签

        that.tabledata.queryObj.comparams.createdDate = this.$refs.comp.value;
        that.tabledata.queryObj.comparams.faultDate = this.$refs.edate.value; //故障日期
        that.tabledata.queryObj.comparams.distRemark = this.$refs.jobd.input; //派工说明
        that.tabledata.queryObj.comparams.linkBillCode = this.$refs.sour.input; //来源单号
        that.tabledata.queryObj.comparams.serverSource = this.$refs.sctc.value; //服务来源
        that.tabledata.queryObj.comparams.serverSourceCode = this.$refs.sctc.value; //投诉途径
        that.tabledata.queryObj.comparams.custName = this.$refs.custadd.input;
        that.tabledata.queryObj.comparams.gender = this.$refs.gender.value;
        that.tabledata.queryObj.comparams.contactTel = this.$refs.contactTel.input;
        that.tabledata.queryObj.comparams.backupTel = this.$refs.backupTel.input;
        that.tabledata.queryObj.comparams.useCustName = this.$refs.useCustName.input;
        that.tabledata.queryObj.comparams.usePhone = this.$refs.usePhone.input;
        that.tabledata.queryObj.comparams.useGenderCode = this.$refs.useGenderCode.value;
        that.tabledata.queryObj.comparams.useBackupTel = this.$refs.useBackupTel.input;
        that.tabledata.queryObj.comparams.vin = this.$refs.vin.input;
        that.tabledata.queryObj.comparams.carLicense = this.$refs.carLicense.input;
        that.tabledata.queryObj.comparams.engineNo = this.$refs.engineNo.input;
        that.tabledata.queryObj.comparams.mileage =
          this.$refs.rdist.input == "" || this.$refs.rdist.input == null
            ? undefined
            : this.$refs.rdist.input; //行驶里程
        that.tabledata.queryObj.comparams.faultMileage =
          this.$refs.edist.input == "" || this.$refs.edist.input == null
            ? undefined
            : this.$refs.edist.input; //故障里程
        that.tabledata.queryObj.comparams.serverLevel = this.$refs.compl.value;
        that.tabledata.queryObj.comparams.serverTitle = this.$refs.abst1.input;
        that.tabledata.queryObj.comparams.custRequirement = this.$refs.cust.input;
        that.tabledata.queryObj.comparams.serverAnswer = this.$refs.serverAnswer.input;
        that.tabledata.queryObj.comparams.complainDesc = this.$refs.deal.input;
        that.tabledata.queryObj.comparams.remark = this.$refs.rema.input; //备注
        that.tabledata.queryObj.comparams.serverFullClassName = this.$refs.serverFullClassName.input; //投诉类别全称
        that.tabledata.queryObj.comparams.serverUrgency = this.$refs.whet.value; //是否紧急
        // 提交
        let flag = false;
        var config = this.config;
        config = {
          custName: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.tabledata.queryObj.comparams.custName,
            "客户名称",
            "不能为空"
          ],
          contactTel: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.tabledata.queryObj.comparams.contactTel,
            "电话",
            "不能为空",
            ""
          ],
          serverTitle: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.tabledata.queryObj.comparams.serverTitle,
            "摘要",
            "不能为空"
          ],
          serverAnswer: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.tabledata.queryObj.comparams.serverAnswer,
            "坐席回答",
            "不能为空"
          ],
          complainDesc: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.tabledata.queryObj.comparams.complainDesc,
            "处理内容",
            "不能为空"
          ],
          proc: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.$refs.proc.value,
            "处理方式",
            "不能为空"
          ],
          serverLevel: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.tabledata.queryObj.comparams.serverLevel,
            "投诉级别",
            "不能为空"
          ],
          serverFullClassName: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "input",
            that.tabledata.queryObj.comparams.serverFullClassName,
            "投诉类别",
            "不能为空"
          ],
          baseSeriesName: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "input",
            this.$refs.baseSeriesName.input,
            "相关基准车系",
            "不能为空"
          ],
          serverSourceCode: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "input",
            that.tabledata.queryObj.comparams.serverSourceCode,
            "投诉途径",
            "不能为空"
          ]
        };
        this.$crmcf.validForm(that, formName, config, function(flag) {
          if (flag) {
            let queryObj = {
              // api配置
              type: "mutation",
              apiConfig: that.tabledata.queryObj.apiConfig,

              // 需要调用的API服务配置
              apiServices: [
                {
                  //表格中台返回网格的字段
                  apiQueryRow: that.tabledata.queryObj.apiQueryRow
                }
              ],
              //条件/实体参数（变量），根据typeParam中的定义配置
              variables: {
                pageSize: that.tabledata.pagesize,
                pageIndex: that.tabledata.pageindex,
                //当前中台使用的名称有dataInfo、info，具体查看API文档
                dataInfo: that.tabledata.queryObj.comparams
              }
            };

            //转换了中台请求格式数据
            var paramD = that.$getParams(queryObj);
            // 调用中台API方法（可复用）
            requestGraphQL(paramD).then(response => {
              if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
                that.$crmcf.showMessages(that, "success", "提交成功！");
                that.$crmcf.crmcloseView(that);
              } else {
                that.$crmcf.showMessages(
                  that,
                  "error",
                  response.data[queryObj.apiConfig.ServiceCode].msg
                );
              }
            });
          }
        });
      } else if (
        that.tabledata.queryObj.apiConfig.ServiceCode ==
        "clueServerMutationCreateServerOrder"
      ) {
        that.tabledata.queryObj.clueparams.custName = this.$refs.custadd.input;
        that.tabledata.queryObj.clueparams.gender = this.$refs.gender.value;
        that.tabledata.queryObj.clueparams.contactTel = this.$refs.contactTel.input;
        that.tabledata.queryObj.clueparams.backupTel = this.$refs.backupTel.input;
        that.tabledata.queryObj.clueparams.useCustName = this.$refs.useCustName.input;
        that.tabledata.queryObj.clueparams.usePhone = this.$refs.usePhone.input;
        that.tabledata.queryObj.clueparams.useGenderCode = this.$refs.useGenderCode.value;
        that.tabledata.queryObj.clueparams.useBackupTel = this.$refs.useBackupTel.input;
        // that.tabledata.queryObj.clueparams.vin = this.$refs.vin.input;
        // that.tabledata.queryObj.clueparams.carLicense = this.$refs.carLicense.input;

        that.tabledata.queryObj.clueparams.clueType = this.$refs.cluet.value;
        that.tabledata.queryObj.clueparams.cantactWayCode = this.$refs.contw.value;
        that.tabledata.queryObj.clueparams.infoChanMCode = this.$refs.chanb.value;
        that.tabledata.queryObj.clueparams.buyPlanCode = this.$refs.planc.value;
        that.tabledata.queryObj.clueparams.transferObject = this.$refs.tranobj.value;
        // that.tabledata.queryObj.clueparams.custProvinceId = this.$refs.prov.value;
        // that.tabledata.queryObj.clueparams.custCityId = this.$refs.citys.value;
        that.tabledata.queryObj.clueparams.clueDesc = this.$refs.descri.input;
        that.tabledata.queryObj.clueparams.clueLevelCode = this.$refs.intel.value;
        // that.tabledata.queryObj.clueparams.dlrCode = this.$refs.inteo.value;
        let flag = false;
        var config = this.config;
        config = {
          custName: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.tabledata.queryObj.clueparams.custName,
            "客户名称",
            "不能为空"
          ],
          contactTel: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.tabledata.queryObj.clueparams.contactTel,
            "电话",
            "不能为空",
            ""
          ],
          clueType: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.tabledata.queryObj.clueparams.clueType,
            "线索类型",
            "不能为空"
          ],
          cantactWayCode: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.tabledata.queryObj.clueparams.cantactWayCode,
            "接触方式",
            "不能为空"
          ],
          infoChanMCode: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.tabledata.queryObj.clueparams.infoChanMCode,
            "渠道大类",
            "不能为空"
          ],
          infoChanDCode: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.tabledata.queryObj.clueparams.infoChanDCode,
            "渠道小类",
            "不能为空"
          ],
          buyPlanCode: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.tabledata.queryObj.clueparams.buyPlanCode,
            "计划购车时间",
            "不能为空"
          ],
          relab: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "input",
            this.$refs.relab.input,
            "相关基准车系",
            "不能为空"
          ],
          clueLevelCode: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "input",
            that.tabledata.queryObj.clueparams.clueLevelCode,
            "意向级别",
            "不能为空"
          ]
        };
        this.$crmcf.validForm(that, formName, config, function(flag) {
          if (flag) {
            let queryObj = {
              // api配置
              type: "mutation",
              apiConfig: that.tabledata.queryObj.apiConfig,

              // 需要调用的API服务配置
              apiServices: [
                {
                  //表格中台返回网格的字段
                  apiQueryRow: that.tabledata.queryObj.apiQueryRow
                }
              ],
              //条件/实体参数（变量），根据typeParam中的定义配置
              variables: {
                pageSize: that.tabledata.pagesize,
                pageIndex: that.tabledata.pageindex,
                //当前中台使用的名称有dataInfo、info，具体查看API文档
                dataInfo: that.tabledata.queryObj.clueparams
              }
            };

            //转换了中台请求格式数据
            var paramD = that.$getParams(queryObj);
            // 调用中台API方法（可复用）
            requestGraphQL(paramD).then(response => {
              if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
                that.$crmcf.showMessages(that, "success", "提交成功！");
                that.$crmcf.crmcloseView(that);
              } else {
                that.$crmcf.showMessages(
                  that,
                  "error",
                  response.data[queryObj.apiConfig.ServiceCode].msg
                );
              }
            });
          }
        });
      }
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    // 结案
    finish(formName) {
      let that = this;

      // 投诉
      if (
        that.tabledata.queryObj.apiConfig.ServiceCode ==
        "csBuComplaintOrderMutationCommitTS"
      ) {
        that.tabledata.queryObj.comparams.createdDate = this.$refs.comp.value;
        that.tabledata.queryObj.comparams.distRemark = this.$refs.jobd.input; //派工说明
        that.tabledata.queryObj.comparams.linkBillCode = this.$refs.sour.input; //来源单号
        that.tabledata.queryObj.comparams.serverSource = this.$refs.sctc.value; //服务来源
        that.tabledata.queryObj.comparams.serverSourceCode = this.$refs.sctc.value; //投诉途径
        that.tabledata.queryObj.comparams.custName = this.$refs.custadd.input;
        that.tabledata.queryObj.comparams.gender = this.$refs.gender.value;
        that.tabledata.queryObj.comparams.contactTel = this.$refs.contactTel.input;
        that.tabledata.queryObj.comparams.backupTel = this.$refs.backupTel.input;
        that.tabledata.queryObj.comparams.useCustName = this.$refs.useCustName.input;
        that.tabledata.queryObj.comparams.usePhone = this.$refs.usePhone.input;
        that.tabledata.queryObj.comparams.useGenderCode = this.$refs.useGenderCode.value;
        that.tabledata.queryObj.comparams.useBackupTel = this.$refs.useBackupTel.input;
        that.tabledata.queryObj.comparams.vin = this.$refs.vin.input;
        that.tabledata.queryObj.comparams.carLicense = this.$refs.carLicense.input;
        that.tabledata.queryObj.comparams.mileage =
          this.$refs.rdist.input == "" || this.$refs.rdist.input == null
            ? undefined
            : this.$refs.rdist.input; //行驶里程
        that.tabledata.queryObj.comparams.faultMileage =
          this.$refs.edist.input == "" || this.$refs.edist.input == null
            ? undefined
            : this.$refs.edist.input; //故障里程
        that.tabledata.queryObj.comparams.serverLevel = this.$refs.compl.value;
        that.tabledata.queryObj.comparams.serverTitle = this.$refs.abst1.input;
        that.tabledata.queryObj.comparams.custRequirement = this.$refs.cust.input;
        that.tabledata.queryObj.comparams.serverAnswer = this.$refs.serverAnswer.input;
        that.tabledata.queryObj.comparams.complainDesc = this.$refs.deal.input;
        that.tabledata.queryObj.comparams.remark = this.$refs.rema.input; //备注
        that.tabledata.queryObj.comparams.serverFullClassName = this.$refs.serverFullClassName.input; //投诉类别全称
        that.tabledata.queryObj.comparams.serverUrgency = this.$refs.whet.value; //是否紧急
        // that.tabledata.queryObj.comparams.crruNode =
        //   that.nextdata.queryObj.params.nodeCode;
        that.tabledata.queryObj.comparams.crruNode = "TS_JA";

        let flag = false;
        var config = this.config;
        config = {
          custName: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.tabledata.queryObj.comparams.custName,
            "客户名称",
            "不能为空"
          ],
          contactTel: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.tabledata.queryObj.comparams.contactTel,
            "电话",
            "不能为空",
            ""
          ],
          serverTitle: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            this.tabledata.queryObj.comparams.serverTitle,
            "摘要",
            "不能为空"
          ],
          serverAnswer: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.tabledata.queryObj.comparams.serverAnswer,
            "坐席回答",
            "不能为空"
          ],
          complainDesc: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.tabledata.queryObj.comparams.complainDesc,
            "处理内容",
            "不能为空"
          ],
          serverLevel: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "value",
            that.tabledata.queryObj.comparams.serverLevel,
            "投诉级别",
            "不能为空"
          ],
          serverFullClassName: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "input",
            that.tabledata.queryObj.comparams.serverFullClassName,
            "投诉类别",
            "不能为空"
          ],
          baseSeriesName: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "input",
            this.$refs.baseSeriesName.input,
            "相关基准车系",
            "不能为空"
          ],
          serverSourceCode: [
            true,
            this.$crmcf.crmRegExp("empty"),
            "input",
            that.tabledata.queryObj.comparams.serverSourceCode,
            "投诉途径",
            "不能为空"
          ]
        };

        this.$crmcf.validForm(that, formName, config, function(flag) {
          if (flag) {
            // 提交
            let queryObj = {
              // api配置
              type: "mutation",
              apiConfig: that.tabledata.queryObj.apiConfig,

              // 需要调用的API服务配置
              apiServices: [
                {
                  //表格中台返回网格的字段
                  apiQueryRow: that.tabledata.queryObj.apiQueryRow
                }
              ],
              //条件/实体参数（变量），根据typeParam中的定义配置
              variables: {
                pageSize: that.tabledata.pagesize,
                pageIndex: that.tabledata.pageindex,
                //当前中台使用的名称有dataInfo、info，具体查看API文档
                dataInfo: that.tabledata.queryObj.comparams
              }
            };

            //转换了中台请求格式数据
            var paramD = that.$getParams(queryObj);
            // 调用中台API方法（可复用）
            requestGraphQL(paramD).then(response => {
              if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
                that.$crmcf.showMessages(that, "success", "结案成功！");
              } else {
                that.$crmcf.showMessages(
                  that,
                  "error",
                  response.data[queryObj.apiConfig.ServiceCode].msg
                );
              }
            });
          }
        });
      }
    },
    // 添加车辆弹窗
    addcar() {
      let that = this;

      // that.addflag = true;
      if (this.$refs.custadd.input != "" || this.$refs.contactTel.input) {
        if (this.$refs.table != undefined) {
          that.$refs.table.reset();
          console.log(that.$refs.table.tableData);
        }
        that.addflag = true;
        that.addcust.input =
          "当前客户名称:" +
          this.$refs.custadd.input +
          // this.$refs.custadd.input
          "     当前电话:" +
          this.$refs.contactTel.input;
      } else {
        this.$message({
          message: "客户名称不能为空",
          type: "warning",
          duration: 1000
        });
      }
    },
    // 添加车辆查询
    addcarquery() {
      let that = this;

      if (
        this.$refs.tjvinco.input == "" &&
        this.$refs.tjcarbrannum.input == ""
      ) {
        alert("车牌号或vin码不能为空");
      } else {
        that.modcardata.queryObj.params.vin = this.$refs.tjvinco.input;
        that.modcardata.queryObj.params.carLicenseNo = this.$refs.tjcarbrannum.input;
        this.$refs.tableCAR.getData();
      }
    },
    //变更车主
    changeowner() {
      let that = this;
      if (
        this.$refs.tjvinco.input == "" &&
        this.$refs.tjcarbrannum.input == ""
      ) {
        alert("车牌号或vin码不能为空");
      } else {
        that.modcardata.queryObj.params.vin = this.$refs.tjvinco.input;
        that.modcardata.queryObj.params.carLicenseNo = this.$refs.tjcarbrannum.input;
        this.$refs.table.getData();
      }
    },
    // 页签
    handleClick(tab, event) {
      // 点击投诉时显示转商机和安抚结案按钮
      if (tab.name == "second") {
        let that = this;
        that.display = true;
        that.clue = false;
        //新建投诉单提交
        that.tabledata.queryObj.apiConfig =
          crmApis.csBuComplaintOrderMutationCommitTS;
        that.zcdata.queryObj.apiConfig =
          crmApis.csBuComplaintOrderMutationSaveTS;
      } else if (tab.name == "fourth") {
        let that = this;
        that.display = false;
        that.clue = true;
      } else if (tab.name == "third") {
        let that = this;
        that.display = false;
        that.clue = false;
        that.tabledata.queryObj.apiConfig =
          crmApis.clueServerMutationCreateServerOrder;
        that.zcdata.queryObj.apiConfig =
          crmApis.clueServerMutationCreateServerOrder;
      } else {
        let that = this;
        that.display = false;
        that.clue = false;
      }
      console.log(tab, event);
    },
    // 点击转线索，跳到线索页签
    turnclue() {
      let that = this;
      that.activeName = "third";
      that.clue = false;
      that.contw1.value = this.$refs.contw.value;
    },
    // 获取投诉类别
    getbigclass(cityTemp) {
      let that = this;
      that.nextdata.queryObj.params.serverClassCode = cityTemp[0].bigCode;
      that.tabledata.queryObj.comparams.bigClassCode = cityTemp[0].bigCode;
      that.tabledata.queryObj.comparams.serverClassCode = cityTemp[0].smallCode; //服务小类编码
      that.zcdata.queryObj.comparams.bigClassCode = cityTemp[0].bigCode;
      that.zcdata.queryObj.comparams.serverClassCode = cityTemp[0].smallCode;
      that.form.serverFullClassName.input =
        cityTemp[0].bigName +
        "->" +
        cityTemp[0].midName +
        "->" +
        cityTemp[0].smallName;
      that.zcdata.queryObj.comparams.serverFullClassName =
        that.form.serverFullClassName.input;
      that.tabledata.queryObj.comparams.serverFullClassName =
        that.form.serverFullClassName.input;
      if (
        this.$refs.serverFullClassName.input != "" &&
        this.$refs.baseSeriesName.input != "" &&
        this.$refs.proc.value != ""
      ) {
        this.getNext();
      }
    },
    // 获取责任网点
    getBrand(cityTemp) {
      let that = this;
      that.nextdata.queryObj.params.carBrandCode = cityTemp[0].carBrandCode;
      that.nextdata.queryObj.params.dlrCode = cityTemp[0].dlrCode;
      // that.nextdata.queryObj.params.serverBrandCode = cityTemp[0].carBrandCode;//获取下一步不需要服务品牌
      that.tabledata.queryObj.comparams.dutyOrgName = cityTemp[0].dlrShortName;
      that.tabledata.queryObj.comparams.carBrandCode = cityTemp[0].carBrandCode;
      that.tabledata.queryObj.comparams.dutyOrgCode = cityTemp[0].dlrCode;
      that.tabledata.queryObj.comparams.serverBrandCode =
        cityTemp[0].carBrandCode;
      that.zcdata.queryObj.comparams.dutyOrgCode = cityTemp[0].dlrCode;
      that.zcdata.queryObj.comparams.serverBrandCode = cityTemp[0].carBrandCode;
      that.zcdata.queryObj.comparams.dutyOrgName = cityTemp[0].dlrShortName;
      that.zcdata.queryObj.comparams.carBrandCode = cityTemp[0].carBrandCode;

      that.form.dutyDlrName.input = cityTemp[0].dlrShortName;
      console.log(that.nextdata.queryObj.params.carBrandCode);
      if (
        this.$refs.serverFullClassName.input != "" &&
        this.$refs.baseSeriesName.input != "" &&
        this.$refs.proc.value != ""
      ) {
        this.getNext();
      }
    },
    // 获取相关基准车系
    getcarBrand(rowData) {
      let that = this;
      if (
        this.$refs.dutyDlrName.input == "" ||
        this.$refs.dutyDlrName == undefined
      ) {
        that.nextdata.queryObj.params.carBrandCode = rowData.carBrandCode; //品牌编码
        that.tabledata.queryObj.comparams.carBrandCode = rowData.carBrandCode;
        that.tabledata.queryObj.comparams.serverBrandCode =
          rowData.carBrandCode; //服务品牌编码（必填）
        that.zcdata.queryObj.comparams.carBrandCode = rowData.carBrandCode;
        that.zcdata.queryObj.comparams.serverBrandCode = rowData.carBrandCode;
      }
      that.zcdata.queryObj.comparams.baseSeriesCode =
        rowData.mdmSmallCarTypeExtend.mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.baseSeriesCode; //基准车系编码
      that.tabledata.queryObj.comparams.baseSeriesCode =
        rowData.mdmSmallCarTypeExtend.mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.baseSeriesCode; //基准车系编码
      that.zcdata.queryObj.comparams.baseSeriesName =
        rowData.mdmSmallCarTypeExtend.mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.baseCarSeriesCn; //基准车系
      that.tabledata.queryObj.comparams.baseSeriesName =
        rowData.mdmSmallCarTypeExtend.mdmMiddleCarTypeExtend.mdmLargeCarTypeExtend.mdmVeBaseSeriesExtend.baseCarSeriesCn; //基准车系
      if (
        this.$refs.serverFullClassName.input != "" &&
        this.$refs.baseSeriesName.input != "" &&
        this.$refs.proc.value != ""
      ) {
        this.getNext();
      }
    },
    cluecarBrand(rowData) {
      let that = this;
      // 提交
      that.tabledata.queryObj.clueparams.carBrandCode = rowData.carBrandCode; //品牌编码
      that.tabledata.queryObj.clueparams.inteTypeCode =
        rowData.mdmSmallCarTypeExtend.smallCarTypeCode; //车型编码
      that.tabledata.queryObj.clueparams.inteSeriesId = rowData.carSeriesId; //车系id
      that.tabledata.queryObj.clueparams.inteSeriesCode =
        rowData.mdmVeCarSeriesExtend.carSeriesCode; //车系编码
      that.tabledata.queryObj.clueparams.inteTypeId = rowData.smallCarTypeId; //车型id
      // 暂存
      that.zcdata.queryObj.clueparams.carBrandCode = rowData.carBrandCode; //品牌编码
      that.zcdata.queryObj.clueparams.inteSeriesCode =
        rowData.mdmVeCarSeriesExtend.carSeriesCode; //车系编码
      that.zcdata.queryObj.clueparams.inteTypeId = rowData.smallCarTypeId; //车型id
      that.zcdata.queryObj.clueparams.inteTypeCode =
        rowData.mdmSmallCarTypeExtend.smallCarTypeCode; //车型编码
      that.zcdata.queryObj.clueparams.inteSeriesId = rowData.carSeriesId; //车系id
    },

    // 获取处理方式
    prochange(val) {
      let that = this;
      if (
        this.$refs.serverFullClassName.input != "" &&
        this.$refs.baseSeriesName.input != "" &&
        this.$refs.proc.value != ""
      ) {
        this.getNext();
      }
    },
    //获取意向网点
    getIntendlr(row) {
      let that = this;
      that.tabledata.queryObj.clueparams.dlrCode = row.dlrCode;
      that.zcdata.queryObj.clueparams.dlrCode = row.dlrCode;
      // that.tabledata.queryObj.clueparams.dlrShortName = row.dlrShortName;
      // that.zcdata.queryObj.clueparams.dlrShortName = row.dlrShortName;
      that.form.dlrShortName.input = row.dlrShortName;
      console.log(that.nextdata.queryObj.params.carBrandCode);
    },
    // 点击选择标签
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    // 外呼
    callout() {},
    //短信发送
    getMsg(rowData) {
      this.modc.input = rowData.templateName;
      this.$refs.ModelContentText.getData();
    }
  }
};
</script>