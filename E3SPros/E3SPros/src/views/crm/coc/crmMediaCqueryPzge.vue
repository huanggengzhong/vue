/*
 * @Author: xgz
 * @Date: 2019-07-25 20:25:06 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-09-09 14:23:53
 */
 <template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query(1)">查询</el-button>
      <el-button @click="reset()">重置</el-button>
      <el-button @click="query(2)">导出</el-button>
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm query-params">
      <el-form label-position="right" v-model="form">
        <el-row>
          <el-col :span="24">
            <el-row>
              <el-col :span="6" class="crm-label-required">
                <DeliveryTime :DeliveryTime="form.assignDate" ref="assignDate" />
              </el-col>
              <el-col :span="6">
                <Media :Media="form.lookupValueName" ref="lookupValueName" />
              </el-col>
              <el-col :span="6">
                <txtCustomerName :txt_CustomerName="form.custName" ref="custName" />
              </el-col>
              <el-col :span="6">
                <PhoneNumber :PhoneNumber="form.phone" ref="phone" />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
      <div class="filter-container filter-title-crm">查询结果</div>

      <el-form>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="媒体下发异常明细" name="first">
            <el-row>
              <el-col :span="24">
                <div class="filter-container filter-title-crm">查询结果</div>
                <el-table
                  :data="tabledatasExceptionDetail.tableData"
                  highlight-current-row
                  style="width: 100%;height:330px"
                  v-loading.body="false"
                  element-loading-text="Loading"
                  border
                  fit
                >
                  <el-table-column type="index" label="序号" width="55"></el-table-column>
                  <el-table-column
                    v-for="item in tabledatasExceptionDetail.colnames"
                    :key="item.value"
                    :label="item.label"
                    :prop="item.value"
                    align="center"
                  ></el-table-column>
                </el-table>
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="0"
                  :page-size="tabledatasExceptionDetail.pagesize"
                  :current-page="tabledatasExceptionDetail.pageindex"
                ></el-pagination>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="媒体下发统计" name="second">
            <el-row>
              <el-col :span="24">
                <div class="filter-container filter-title-crm">查询结果</div>
                <el-table
                  :data="tabledatasMediaSum.tableData"
                  highlight-current-row
                  style="width: 100%;height:330px"
                  v-loading.body="false"
                  element-loading-text="Loading"
                  border
                  fit
                >
                  <el-table-column type="index" label="序号" width="55"></el-table-column>
                  <el-table-column
                    v-for="item in tabledatasMediaSum.colnames"
                    :key="item.value"
                    :label="item.label"
                    :prop="item.value"
                    align="center"
                  ></el-table-column>
                </el-table>
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="0"
                  :page-size="tabledatasMediaSum.pagesize"
                  :current-page="tabledatasMediaSum.pageindex"
                ></el-pagination>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="厂家下发统计" name="third">
            <el-row>
              <el-col :span="24">
                <div class="filter-container filter-title-crm">查询结果</div>
                <el-table
                  :data="tabledatasFactorySum.tableData"
                  highlight-current-row
                  style="width: 100%;height:330px"
                  v-loading.body="false"
                  element-loading-text="Loading"
                  border
                  fit
                >
                  <el-table-column type="index" label="序号" width="55"></el-table-column>
                  <el-table-column
                    v-for="item in tabledatasFactorySum.colnames"
                    :key="item.value"
                    :label="item.label"
                    :prop="item.value"
                    align="center"
                  ></el-table-column>
                </el-table>
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="0"
                  :page-size="tabledatasFactorySum.pagesize"
                  :current-page="tabledatasFactorySum.pageindex"
                ></el-pagination>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </div>
  </div>
</template>

<script>
import txtCustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import DeliveryTime from "@/components/crm/Time/DeliveryTime";
import Media from "@/components/crm/Select/Clue/Media";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "crmMediaCqueryPzge",
  components: {
    txtCustomerName,
    PhoneNumber,
    DeliveryTime,
    Media
  },
  data() {
    return {
      tab: "first",
      activeName: "first",
      form: {
        assignDate: {
          value: ""
        },
        lookupValueName: {
          value: ""
        },
        custName: {
          input: ""
        },
        phone: {
          input: ""
        }
      },
      tabledatasExceptionDetail: {
        flag: true,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        pagesize: 10,
        pageindex: 1,
        total: 0,
        colnames: [
          { label: "下发时间", value: "assignDate" },
          { label: "媒体", value: "lookupValueName" },
          { label: "异常信息", value: "remark" },
          { label: "客户名称", value: "custName" },
          { label: "联系电话", value: "phone" },
          { label: "车系", value: "inteSeriesCode" },
          { label: "销售顾问", value: "caName" },
          { label: "销售顾问电话", value: "caPhone" },
          { label: "采集来源", value: "infoFrom" }
        ],
        tableData: [],
        // 这个查出三个网格的所有字段，其他通过切换表头填充数据
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.pcMediaClueLogQueryFindAll, //媒体日志下发查询
          apiQueryRow: [
            "assignDate",
            "lookupValueName",
            "remark",
            "custName",
            "phone",
            "inteSeriesCode",
            "caName",
            "caPhone",
            "infoFrom"
          ],
          params: {
            assignBegDate: "",
            assignEndDate: "",
            custName: "",
            phone: "",
            dlrCode: ""
            // 缺媒体
          }
        }
      },
      // 媒体下发统计
      tabledatasMediaSum: {
        pagesize: 10,
        pageindex: 1,
        total: 0,
        flag: true,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "下发时间", value: "assignDate" },
          { label: "媒体", value: "lookupValueName" },
          { label: "销售顾问", value: "caName" },
          { label: "线索总数", value: "cnt" },
          { label: "重复线索", value: "cfcnt" },
          { label: "跟进中", value: "usercnt" },
          { label: "无效", value: "wxcnt" }
        ],

        tableData: [],
        queryCount: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.pcMediaClueLogQueryCount, //媒体下发统计查询
          apiQueryRow: [
            "assignDate",
            "lookupValueName",
            "cnt",
            "wxcnt",
            "cfcnt",
            "usercnt",
            "caName"
          ]
        }
      },
      // 厂家下发统计
      tabledatasFactorySum: {
        pagesize: 10,
        pageindex: 1,
        total: 0,
        flag: true,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "下发时间", value: "assignDate" },
          { label: "销售顾问", value: "caName" },
          { label: "线索总数", value: "cnt" },
          { label: "重复线索", value: "cfcnt" },
          { label: "跟进中", value: "usercnt" },
          { label: "无效", value: "wxcnt" }
        ],
        tableData: [],
        queryFact: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.pcMediaClueLogQueryFactoryCount, //厂家线索下发统计查询
          apiQueryRow: [
            "assignDate",
            "cnt",
            "wxcnt",
            "cfcnt",
            "usercnt",
            "caName"
          ]
        }
      }
    };
  },
  mounted() {
    debugger
    let time1 = new Date().getFullYear();
    let time2 = new Date().getMonth();
    let time4 = new Date().getMonth() + 1;
    if (time2 < 10) {
      time2 = "0" + time2;
    }
    let time3 = new Date().getDate();
    if (time3 < 10) {
      time3 = "0" + time3;
    }
    this.form.assignDate.value = [
      time1 + "-" + time2 + "-" + time3,
      time1 + "-" + time4 + "-" + time3
    ];
    this.$refs.assignDate.getData();
  },
  methods: {
    // 这个查询把三个网格的都查出来，点击哪个表头就把数据填充进去
    query: function(optype) {
      let that = this;
      that.tabledatasExceptionDetail.queryObj.params.custName = this.$refs.custName.input;
      if (that.$refs.assignDate.value != "") {
        that.$set(
          that.tabledatasExceptionDetail.queryObj.params,
          "assignBegDate",
          that.$refs.assignDate.value[0] + " 00:00:00"
        );
        that.$set(
          that.tabledatasExceptionDetail.queryObj.params,
          "assignEndDate",
          that.$refs.assignDate.value[1] + " 23:59:59"
        );
      } else {
        that.$set(
          that.tabledatasExceptionDetail.queryObj.params,
          "assignBegDate",
          ""
        );
        that.$set(
          that.tabledatasExceptionDetail.queryObj.params,
          "assignEndDate",
          ""
        );
      }
      that.tabledatasExceptionDetail.queryObj.params.systemCode = this.$refs.lookupValueName.value;
      that.tabledatasExceptionDetail.queryObj.params.phone = this.$refs.phone.input;
      that.tabledatasExceptionDetail.queryObj.params.dlrCode = this.$store.getters.orgInfo.DLR_CODE;
      //校验
      let flag = false;
      var config = this.config;
      config = {
        assignDate: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          this.$refs.assignDate.value,
          "下发时间",
          "不能为空"
        ]
      };
      this.$crmcf.validForm(that, optype, config, function(flag) {
        if (flag) {
          //媒体下发异常明细
          let queryObj = {
            apiConfig: that.tabledatasExceptionDetail.queryObj.apiConfig,
            apiServices: [
              {
                apiQueryRow: that.tabledatasExceptionDetail.queryObj.apiQueryRow
              }
            ],
            variables: {
              pageSize:
                optype == "2" ? 99999 : that.tabledatasExceptionDetail.pagesize,
              pageIndex: that.tabledatasExceptionDetail.pageindex,
              dataInfo: that.tabledatasExceptionDetail.queryObj.params
            }
          };
          var paramD = that.$getParams(queryObj);
          if (optype == "2") {
            that.buildExportParam(queryObj, paramD);
          }
          requestGraphQL(paramD).then(response => {
            if (optype == "2") {
              if (that.tab == "first") {
                that.$utils.downloadFile(response, paramD.excelName);
              }
            } else if (
              response.data[queryObj.apiConfig.ServiceCode].result == "1"
            ) {
              response.data[queryObj.apiConfig.ServiceCode].rows;
              that.tabledatasExceptionDetail.pageindex =
                response.data[queryObj.apiConfig.ServiceCode].pageindex;
              that.tabledatasExceptionDetail.total =
                response.data[queryObj.apiConfig.ServiceCode].records;
            } else {
              that.$crmcf.showMessages(
                that,
                "error",
                response.data[queryObj.apiConfig.ServiceCode].msg
              );
            }
          });

          // 媒体下发统计
          let queryCount = {
            apiConfig: that.tabledatasMediaSum.queryCount.apiConfig,
            apiServices: [
              { apiQueryRow: that.tabledatasMediaSum.queryCount.apiQueryRow }
            ],
            variables: {
              pageSize:
                optype == "2" ? 99999 : that.tabledatasMediaSum.pagesize,
              pageIndex: that.tabledatasMediaSum.pageindex,
              dataInfo: that.tabledatasExceptionDetail.queryObj.params
            }
          };
          var paramCount = that.$getParams(queryCount);
          if (optype == "2") {
            that.buildExportParam(queryCount, paramCount);
          }
          // 调用中台API方法（可复用）
          requestGraphQL(paramCount).then(response => {
            if (optype == "2") {
              if (that.tab == "second") {
                that.$utils.downloadFile(response, paramCount.excelName);
              }
            } else if (
              response.data[queryCount.apiConfig.ServiceCode].result == "1"
            ) {
              response.data[queryCount.apiConfig.ServiceCode].rows;
              that.tabledatasMediaSum.pageindex =
                response.data[queryCount.apiConfig.ServiceCode].pageindex;
              that.tabledatasMediaSum.total =
                response.data[queryCount.apiConfig.ServiceCode].records;
            } else {
              that.$crmcf.showMessages(
                that,
                "error",
                response.data[queryCount.apiConfig.ServiceCode].msg
              );
            }
          });

          // 厂家下发统计
          let queryFact = {
            apiConfig: that.tabledatasFactorySum.queryFact.apiConfig,
            apiServices: [
              { apiQueryRow: that.tabledatasFactorySum.queryFact.apiQueryRow }
            ],
            variables: {
              pageSize:
                optype == "2" ? 99999 : that.tabledatasFactorySum.pagesize,
              pageIndex: that.tabledatasFactorySum.pageindex,
              dataInfo: {
                custName:
                  that.tabledatasExceptionDetail.queryObj.params.custName,
                assignBegDate:
                  that.tabledatasExceptionDetail.queryObj.params.assignBegDate,
                assignEndDate:
                  that.tabledatasExceptionDetail.queryObj.params.assignEndDate,
                phone: that.tabledatasExceptionDetail.queryObj.params.phone,
                dlrCode: that.$store.getters.orgInfo.DLR_CODE
              }
            }
          };
          var paramFact = that.$getParams(queryFact);
          if (optype == "2") {
            that.buildExportParam(queryFact, paramFact);
          }
          // 调用中台API方法（可复用）
          requestGraphQL(paramFact).then(response => {
            if (optype == "2") {
              if (that.tab == "third") {
                that.$utils.downloadFile(response, paramFact.excelName);
              }
            } else if (
              response.data[queryFact.apiConfig.ServiceCode].result == "1"
            ) {
              response.data[queryFact.apiConfig.ServiceCode].rows;
              that.tabledatasFactorySum.pageindex =
                response.data[queryFact.apiConfig.ServiceCode].pageindex;
              that.tabledatasFactorySum.total =
                response.data[queryFact.apiConfig.ServiceCode].records;
            } else {
              that.$crmcf.showMessages(
                that,
                "error",
                response.data[queryFact.apiConfig.ServiceCode].msg
              );
            }
          });
        }
      });
    },
    // 导出
    buildExportParam(queryObj, paramsObj) {
      let that = this;
      var excelCols = {};
      if (that.tab == "first") {
        for (
          var i = 0;
          i < this.tabledatasExceptionDetail.colnames.length;
          i++
        ) {
          excelCols[
            this.tabledatasExceptionDetail.colnames[i].value
          ] = this.tabledatasExceptionDetail.colnames[i].label;
        }
        // 数据类型
        paramsObj.dataType = "excel";
        // excel文件名称
        paramsObj.excelName = "媒体下发异常明细";
        // 根据请求API描述excel数据对象
        paramsObj.excels = [
          {
            // excel sheet名称
            title: "媒体下发异常明细",
            // 对应API服务编码
            actionName: queryObj.apiConfig.ServiceCode,
            // excel列
            columns: excelCols
          }
        ];
      } else if (this.tab == "second") {
        for (var i = 0; i < this.tabledatasMediaSum.colnames.length; i++) {
          excelCols[
            this.tabledatasMediaSum.colnames[i].value
          ] = this.tabledatasMediaSum.colnames[i].label;
        }
        // 数据类型
        paramsObj.dataType = "excel";
        // excel文件名称
        paramsObj.excelName = "媒体下发统计";
        // 根据请求API描述excel数据对象
        paramsObj.excels = [
          {
            // excel sheet名称
            title: "媒体下发统计",
            // 对应API服务编码
            actionName: queryObj.apiConfig.ServiceCode,
            // excel列
            columns: excelCols
          }
        ];
      } else if (this.tab == "third") {
        for (var i = 0; i < this.tabledatasFactorySum.colnames.length; i++) {
          excelCols[
            this.tabledatasFactorySum.colnames[i].value
          ] = this.tabledatasFactorySum.colnames[i].label;
        }
        // 数据类型
        paramsObj.dataType = "excel";
        // excel文件名称
        paramsObj.excelName = "厂家下发统计";
        // 根据请求API描述excel数据对象
        paramsObj.excels = [
          {
            // excel sheet名称
            title: "厂家下发统计",
            // 对应API服务编码
            actionName: queryObj.apiConfig.ServiceCode,
            // excel列
            columns: excelCols
          }
        ];
      }
    },
    reset: function() {
      this.$refs.assignDate.reset();
      this.$refs.lookupValueName.reset();
      this.$refs.custName.reset();
      this.$refs.phone.reset();
      let time1 = new Date().getFullYear();
      let time2 = new Date().getMonth();
      let time4 = new Date().getMonth() + 1;
      if (time2 < 10) {
        time2 = "0" + time2;
      }
      let time3 = new Date().getDate();
      if (time3 < 10) {
        time3 = "0" + time3;
      }
      this.form.assignDate.value = [
        time1 + "-" + time2 + "-" + time3,
        time1 + "-" + time4 + "-" + time3
      ];
      if (this.$refs.assignDate != undefined) {
        this.$refs.assignDate.getData();
      }
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    handleClick(tab, event) {
      let that = this;
      that.tab = tab.name;
      console.log(tab, event);
    },
    mediadetail: function() {
      let that = this;
      that.mediadetailflag = true;
      that.mediacountflag = false;
      that.factorycountflag = false;
    },
    mediacount: function() {
      let that = this;
      that.mediadetailflag = false;
      that.mediacountflag = true;
      that.factorycountflag = false;
    },
    factorycount: function() {
      let that = this;
      that.mediadetailflag = false;
      that.mediacountflag = false;
      that.factorycountflag = true;
    }
  }
};
</script >