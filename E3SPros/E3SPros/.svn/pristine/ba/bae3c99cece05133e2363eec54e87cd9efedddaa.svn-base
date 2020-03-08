<!--
* 描述: 责任区分配设置
* 创建人: lzhihui
* 创建时间: 2019-07-26
* 记录：
-->
<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button type="primary" @click="addRespon()">新增</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm query-params">
      <el-form label-position="right">
        <el-row>
          <el-col :span="24">
            <el-row>
              <el-col :span="6">
                <sct_CarBrand :sct_CarBrand="form.sct_CarBrand_2" ref="sct_CarBrand_2" />
                <!-- <ApplyExtensionTimes :ApplyExtensionTimes="applyEx" ref="applytime"></ApplyExtensionTimes> -->
              </el-col>
              <el-col :span="6">
                <ResponsibleDistrict
                  :ResponsibleDistrict="form.ResponsibleDistrict"
                  ref="ResponsibleDistrict"
                />
              </el-col>
              <el-col :span="6">
                <Province :Province="form.Province" ref="Province" />
                <!-- <el-form-item label="申请延期原因">
                  <el-input v-model="delayreason" placeholder="请输入"></el-input>
                </el-form-item>-->
              </el-col>
              <el-col :span="6">
                <EnableOrDisable :EnableOrDisable="form.EnableOrDisable_2" ref="EnableOrDisable_2" />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table
      ref="table"
      :data="tabledatas.tableData"
      highlight-current-row
      :style="{width:'100%',height:tableHeight+'px'}"
      v-loading.body="false"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="detail(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="text" @click="showPenPei(scope.$index, scope.row)">分配</el-button>
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in tabledatas.colnames"
        :key="item.value"
        :label="item.label"
        :prop="item.value"
        align="center"
      ></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="tabledatas.total"
      :page-size="tabledatas.pageSize"
      :current-page="tabledatas.pageIndex"
      @prev-click="prev"
      @next-click="next"
      @current-change="changepage"
    ></el-pagination>

    <!-- 责任区编辑_弹窗 -->
    <el-dialog
      title="责任区编辑"
      class="editDialog"
      :visible.sync="dialogYQSQ"
      @open="open"
      destroy-on-close="true"
      width="450px"
      center
      append-to-body
    >
      <!-- style="
position:fixed;
top:0;
right:0;
left:0;
bottom:0;
margin:auto;
 height: 400px;
      "-->
      <!-- <div class="filter-container filter-title-crm">
        责任区编辑
        
      </div>-->
      <div class="filter-container filter-params-crm filter-paramsmine">
        <el-form ref="form">
          <el-row>
            <el-col :span="24" class="crm-label-required">
              <sct_CarBrand :sct_CarBrand="form.sct_CarBrand" ref="sct_CarBrand" />
            </el-col>

            <el-form disabled v-if="this.AddOrEdit == 'edit'">
              <el-col :span="24" class="crm-label-required">
                <el-form-item label="责任区编码">
                  <el-input v-model="form.accountCode" placeholder="请输入"></el-input>
                </el-form-item>
              </el-col>
            </el-form>
            <el-col :span="24" v-if="this.AddOrEdit == 'add'" class="crm-label-required">
              <el-form-item label="责任区编码">
                <el-input v-model="form.accountCode" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="24" class="crm-label-required">
              <el-form-item label="责任区名称">
                <el-input v-model="form.accountName" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="24" class="crm-label-required">
              <EnableOrDisable :EnableOrDisable="form.EnableOrDisable" ref="EnableOrDisable" />
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div style="float:right">
        <!-- 新增和保存调用不同的方法 -->
        <el-button type="primary" v-if="AddOrEdit == 'add' " @click="save">保存</el-button>
        <el-button type="primary" v-if="AddOrEdit == 'edit' " @click="edit">保存</el-button>
        <el-button size="small" @click="CloEditDialog">关闭</el-button>
        <!-- @click="backto" -->
      </div>
    </el-dialog>

    <!-- 责任区分配_弹窗 -->
    <el-dialog
      title="责任区分配"
      class="editDialog"
      :visible.sync="dialogFenPei"
      @open="openFenPei"
      @close="closeFenPei"
      destroy-on-close="true"
      width="800px"
      center
      append-to-body
    >
      <div class="filter-container filter-title-crm">
        <div style="float:right">
          <el-button size="small" @click="saveFenPei" type="primary">保存</el-button>
          <el-button size="small" @click="guanBi">关闭</el-button>
        </div>
      </div>

      <!-- <div class="filter-container filter-title-crm">查询结果</div> -->
      <el-row>
        <el-col :span="24">
          <el-transfer
            v-model="value"
            :data="data"
            filterable
            :titles="['可分配', '已分配']"
            :button-texts="['取消分配', '分配']"
            ref="myTransfer"
          ></el-transfer>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import ApplyExtensionTimes from "@/components/crm/Time/ApplyExtensionTimes";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import Table from "@/components/crm/table/Table";
import RelatedBenchmarkCar from "@/components/crm/EjectWindows/RelatedBenchmarkCar";
import ApplyExtensionTime from "@/components/crm/Time/ApplyExtensionTime";

import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

//责任区分配设置
import Province from "@/components/crm/Select/Common/Province";
import ResponsibleDistrict from "@/components/crm/Select/Common/ResponsibleDistrict";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";
import sct_CarBrand from "@/components/crm/Select/Common/sct_CarBrand.vue";

export default {
  name: "ResponsibilityAreaAllocationSet",
  components: {
    ApplyExtensionTimes,
    ServiceMenuNumber,
    Table,
    RelatedBenchmarkCar,
    ApplyExtensionTime,

    Province,
    ResponsibleDistrict,
    EnableOrDisable,
    sct_CarBrand
  },
  data() {
    return {
      tableHeight:"",
      toggleParam: false,
      dialogYQSQ: false,
      dialogFenPei: false,
      data: [],
      value: [],
      seledProvinceId: [],
      // delayreason: "",
      // delayreason1: "",

      updateControlId: "",
      AddOrEdit: "add", //页面载入时默认新增，点击修改按钮时值变为edit
      accountId: "",
      carBrandCode: "",

      tabledatas: {
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        tableData: [],
        colnames: [
          { label: "品牌", value: "carBrandName" },
          { label: "责任区编码", value: "accountCode" },
          { label: "责任区名称", value: "accountName" },
          { label: "省份", value: "accountDetail" },
          { label: "是否启用", value: "isEnableName" }
        ],
        queryObj: {
          apiConfig: crmApis.csDbAccountQueryFindAll,
          apiQueryRow: [
            "carBrandName",
            "carBrandCode",
            "accountCode",
            "accountName",
            "accountDetail",
            "isEnable",
            "isEnableName",
            //隐藏字段
            "accountId",
            "updateControlId"
          ],
          params: { oemCode: "1", groupCode: "1" }
        },
        pageSize: 10,
        pageIndex: 1,
        total: 0
      },

      form: {
        accountCode: "",
        accountName: "",
        ApplyExtensionTime: {
          value: ""
        },
        ServiceMenuNumber: {
          input: ""
        },
        delayreason: "",
        applyEx: {
          value: ""
        },
        serviceMenu: {
          input: ""
        },
        sct_CarBrand: {
          value: ""
        },
        sct_CarBrand_2: {
          value: ""
        },
        EnableOrDisable: {
          value: ""
        },
        EnableOrDisable_2: {
          value: ""
        },
        ResponsibleDistrict: {
          value: ""
        },
        Province: {
          value: ""
        }
      }
    };
  },
  methods: {
    query: function() {
      let that = this;
      //查询条件
      // that.tabledatas.queryObj.params.isEnable=this.$refs.EnableOrDisable_2.value  //传空字符串查询不出数据
      that.tabledatas.queryObj.params.carBrandCode =
        that.$refs.sct_CarBrand_2.value;
      that.tabledatas.queryObj.params.accountId =
        that.$refs.ResponsibleDistrict.value;
      that.tabledatas.queryObj.params.provinceId = that.$refs.Province.value;
      that.tabledatas.queryObj.params.isEnable =
        that.$refs.EnableOrDisable_2.value;
      this.$crmcf.simpleTablequery(
        that,
        that.tabledatas,
        that.tabledatas.queryObj.apiConfig,
        function(data) {
          that.tabledatas.tableData = data.rows;
          that.tabledatas.pageIndex = data.pageindex;
          that.tabledatas.total = data.records;
        }
      );
      //

      // let queryObj = {
      //   // api配置
      //   apiConfig: that.tabledatas.queryObj.apiConfig,
      //   // 需要调用的API服务配置
      //   apiServices: [
      //     {
      //       //表格中台返回网格的字段
      //       apiQueryRow: that.tabledatas.queryObj.apiQueryRow
      //     }
      //   ],
      //   //条件/实体参数（变量），根据typeParam中的定义配置
      //   variables: {
      //     pageSize: that.tabledatas.pagesize,
      //     pageIndex: that.tabledatas.pageindex,
      //     //当前中台使用的名称有dataInfo、info，具体查看API文档
      //     dataInfo: that.tabledatas.queryObj.params
      //   }
      // };
      // //转换了中台请求格式数据
      // var paramD = that.$getParams(queryObj);
      // // 调用中台API方法（可复用）
      // requestGraphQL(paramD).then(response => {
      //   if (
      //     response.data[queryObj.apiConfig.ServiceCode].result == "1"
      //     // &&response.data[queryObj.apiConfig.ServiceCode].rows != ""
      //   ) {
      //     //请求成功后，设置网格的值
      //     that.tabledatas.tableData =
      //       response.data[queryObj.apiConfig.ServiceCode].rows;

      //     that.tabledatas.pageindex =
      //       response.data[queryObj.apiConfig.ServiceCode].pageindex;
      //     that.tabledatas.total =
      //       response.data[queryObj.apiConfig.ServiceCode].records;
      //   }else{
      //     that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
      //   }
      // });
    },

    //保存方法
    save: function() {
      const that = this;
      let flag = false;
      var config = this.config;
      config = {
        sct_CarBrand: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.sct_CarBrand.value,
          "车辆品牌",
          "不能为空"
        ],
        accountCode: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.form.accountCode,
          "责任区编码",
          "不能为空"
        ],
        accountName: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.form.accountName,
          "责任区名称",
          "不能为空"
        ],
        EnableOrDisable: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.EnableOrDisable.value,
          "是否启用",
          "不能为空"
        ]
      };
      this.$crmcf.validForm(that, "form", config, function(flag) {
        if (flag) {
          let variables = {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              accountCode: that.form.accountCode,
              accountName: that.form.accountName,
              isEnable: that.$refs.EnableOrDisable.value,
              carBrandCode: that.$refs.sct_CarBrand.value,
              oemCode: "1",
              groupCode: "1",
              accountType: "2" //划分类型 1是按专营店 ,2是省份

              //新增不用传并发字段
              // updateControlId:"7",
            }
          };
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.csDbAccountMutationSaveById,
            function() {
              that.dialogVisible = false;
              that.dialogYQSQ = false;
              that.query();
            }
          );
          // let queryObj = {
          //   // api配置
          //   type: "mutation",
          //   apiConfig: crmApis.csDbAccountMutationSaveById,
          //   // 需要调用的API服务配置
          //   apiServices: [
          //     {
          //       //表格中台返回网格的字段
          //       apiQueryRow: []
          //     }
          //   ],
          //   //条件/实体参数（变量），根据typeParam中的定义配置
          //   variables: {
          //     //当前中台使用的名称有dataInfo、info，具体查看API文档
          //     dataInfo: {
          //       accountCode: that.form.accountCode,
          //       accountName: that.form.accountName,
          //       isEnable: that.$refs.EnableOrDisable.value,
          //       carBrandCode: that.$refs.sct_CarBrand.value,
          //       oemCode: "1",
          //       groupCode: "1",
          //       accountType: "2" //划分类型 1是按专营店 ,2是省份

          //       //新增不用传并发字段
          //       // updateControlId:"7",
          //     }
          //   }
          // };
          // //转换了中台请求格式数据
          // var paramD = that.$getParams(queryObj);
          // // 调用中台API方法（可复用）
          // requestGraphQL(paramD).then(response => {
          //   if (
          //     response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          //     response.data[queryObj.apiConfig.ServiceCode].rows != ""
          //   ) {
          //     that.dialogVisible = false;
          //     that.$crmcf.showMessages(that, "success", "保存成功！");
          //     that.dialogYQSQ = false; //保存成功，关闭弹窗
          //     that.query();
          //   } else {
          //     that.$crmcf.showMessages(
          //       that,
          //       "error",
          //       response.data[queryObj.apiConfig.ServiceCode].msg
          //     );
          //   }
          // });
        }
      });
    },

    //修改方法
    edit: function() {
      const that = this;
      let variables = {
        //当前中台使用的名称有dataInfo、info，具体查看API文档
        dataInfo: {
          accountCode: that.form.accountCode,
          accountId: that.accountId, //新增时不用传accountId，更新时必填
          accountName: that.form.accountName,
          isEnable: this.$refs.EnableOrDisable.value,
          carBrandCode: this.$refs.sct_CarBrand.value,
          oemCode: "1",
          groupCode: "1",
          accountType: "2", //划分类型 1是按专营店 ,2是省份
          //新增不用传并发字段
          // updateControlId:"7",
          //取网格中的并发字段
          updateControlId: that.updateControlId
        }
      };
      that.$crmcf.mutationSumbit(
        that,
        variables,
        crmApis.csDbAccountMutationSaveById,
        function() {
          that.dialogVisible = false;
          that.dialogYQSQ = false;
          that.query();
        }
      );
    },

    reset: function() {
      this.$refs.sct_CarBrand_2.reset();
      this.$refs.ResponsibleDistrict.reset();
      this.$refs.Province.reset();
      this.$refs.EnableOrDisable_2.reset();
      this.delayreason = "";
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    detail(index, rowData) {
      let that = this;
      that.AddOrEdit = "edit";
      that.dialogYQSQ = true; //打开弹窗

      //通过v-model绑定值
      that.form.accountCode = rowData.accountCode;
      that.form.accountName = rowData.accountName;
      //将网格的值传到子组件，值对得上就会选中
      that.form.EnableOrDisable.value = rowData.isEnable;

      that.form.sct_CarBrand.value = rowData.carBrandCode;

      //隐藏字段
      that.accountId = rowData.accountId;
      that.updateControlId = rowData.updateControlId;
    },
    CloEditDialog() {
      this.dialogYQSQ = false;
    },

    //责任区分配弹出框方法
    showPenPei(index, rowData) {
      let that = this;
      //调用前面两个方法初始化值，再打开弹窗，不然可能因为网络慢而显示为空
      that.dialogFenPei = true;
      //隐藏字段
      that.accountId = rowData.accountId;
      that.updateControlId = rowData.updateControlId;
      that.carBrandCode = rowData.carBrandCode;
      // this.noFenPei(that.accountId,rowData.carBrandCode);
      // this.yesFenPei(that.accountId,rowData.carBrandCode);
    },

    //加载穿梭框左边的省份
    noFenPei: function(letAccoundId, letCarBrandCode) {
      let that = this;
      let tabledatas = {
        queryObj: {
          // api配置
          type: "query",
          apiConfig: crmApis.csDbAccountProvinceQuery,
          // 需要调用的API服务配置

          apiQueryRow: ["dName", "dId", "accountName"],

          //条件/实体参数（变量），根据typeParam中的定义配置
          params: {
            carBrandCode: letCarBrandCode, //品牌
            noAccountId: letAccoundId, //穿梭框左边传noAccountID，右边传accountId
            oemCode: "1",
            groupCode: "1"
          },

          pagesize: 9999,
          pageindex: 1
        }
      };
      this.$crmcf.simpleTablequery(
        that,
        tabledatas,
        tabledatas.queryObj.apiConfig,
        function(data) {
          let options = data.rows;
          for (let i = 0; i <= options.length - 1; i++) {
            let letLabel = options[i].dName;
            console.info(options[i].accountName);
            if (options[i].accountName != null) {
              letLabel = options[i].dName + "(" + options[i].accountName + ")";
            }
            that.data.push({
              key: i,
              label: letLabel,
              provinceId: options[i].dId
              // disabled: i % 4 === 0
            });
            // console.info(that.data[i].provinceId)
          }
          that.yesFenPei(that.accountId, that.carBrandCode);
        }
      );
      
    },

    //根据责任区id获取已分配的省份
    yesFenPei: function(letAccoundId, letCarBrandCode) {
      let that = this;
      let tabledatas = {
        queryObj: {
          // api配置
          type: "query",
          apiConfig: crmApis.csDbAccountProvinceQuery,
          // 需要调用的API服务配置

          //表格中台返回网格的字段
          apiQueryRow: ["dName", "dId"],

          //条件/实体参数（变量），根据typeParam中的定义配置
          params: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
              // accountCode: that.accountCode,
              // accountName: that.accountName,
              // isEnable: this.$refs.EnableOrDisable.value,
              // carBrandCode: this.$refs.sct_CarBrand.value,
              accountId: letAccoundId, //北京、上海
              carBrandCode: letCarBrandCode, //品牌
              oemCode: "1",
              groupCode: "1"
              // assignStatus

              //新增不用传并发字段
              // updateControlId:"7",
            
          },
          pagesize: 9999,
          pageindex: 1
        }
      };
      this.$crmcf.simpleTablequery(
        that,
        tabledatas,
        tabledatas.queryObj.apiConfig,
        function(data) {
          let hasSel = data.rows;
          let valueTemp = [];
          let ProvinceIdTemp = [];
          for (let i = 0; i <= hasSel.length - 1; i++) {
            // that.value = [1, 2, 3];
            // let temp = hasSel[i].dId+""; //转为字符串
            for (let j = 0; j <= that.data.length - 1; j++) {
              if (hasSel[i].dId == that.data[j].provinceId) {
                // let temp = that.data[j].key;
                valueTemp.push(that.data[j].key);
                //省份id，用于后台保存
                ProvinceIdTemp.push(that.data[j].provinceId);
              }
            }
          }
          that.value = valueTemp;
          that.seledProvinceId = ProvinceIdTemp;
        }
      );
      //
      // let queryObj = {
      //   // api配置
      //   type: "query",
      //   apiConfig: crmApis.csDbAccountProvinceQuery,
      //   // 需要调用的API服务配置
      //   apiServices: [
      //     {
      //       //表格中台返回网格的字段
      //       apiQueryRow: ["dName", "dId"]
      //     }
      //   ],
      //   //条件/实体参数（变量），根据typeParam中的定义配置
      //   variables: {
      //     pageSize: 9999,
      //     pageIndex: 1,
      //     //当前中台使用的名称有dataInfo、info，具体查看API文档
      //     dataInfo: {
      //       // accountCode: that.accountCode,
      //       // accountName: that.accountName,
      //       // isEnable: this.$refs.EnableOrDisable.value,
      //       // carBrandCode: this.$refs.sct_CarBrand.value,

      //       accountId: letAccoundId, //北京、上海
      //       carBrandCode: letCarBrandCode, //品牌
      //       oemCode: "1",
      //       groupCode: "1"
      //       // assignStatus

      //       //新增不用传并发字段
      //       // updateControlId:"7",
      //     }
      //   }
      // };
      // //转换了中台请求格式数据
      // var paramD = that.$getParams(queryObj);
      // // 调用中台API方法（可复用）
      // requestGraphQL(paramD).then(response => {
      //   if (
      //     response.data[queryObj.apiConfig.ServiceCode].result == "1"
      //     // &&response.data[queryObj.apiConfig.ServiceCode].rows != ""
      //   ) {
      //     //请求成功后，设置网格的值
      //     let hasSel = response.data[queryObj.apiConfig.ServiceCode].rows;
      //     let valueTemp = [];
      //     let ProvinceIdTemp = [];
      //     for (let i = 0; i <= hasSel.length - 1; i++) {
      //       // that.value = [1, 2, 3];
      //       // let temp = hasSel[i].dId+""; //转为字符串
      //       for (let j = 0; j <= that.data.length - 1; j++) {
      //         if (hasSel[i].dId == that.data[j].provinceId) {
      //           // let temp = that.data[j].key;
      //           valueTemp.push(that.data[j].key);
      //           //省份id，用于后台保存
      //           ProvinceIdTemp.push(that.data[j].provinceId);
      //         }
      //       }
      //     }
      //     that.value = valueTemp;
      //     that.seledProvinceId = ProvinceIdTemp;

      //     console.log(that.value);
      //   }
      // });
    },

    //保存方法
    saveFenPei: function() {
      const that = this;
      //省份id，用于后台保存
      let ProvinceIdTemp = [];
      for (let i = 0; i <= that.value.length - 1; i++) {
        for (let j = 0; j <= that.data.length - 1; j++) {
          if (that.data[j].key == that.value[i]) {
            ProvinceIdTemp.push(that.data[j].provinceId);
          }
        }
      }
      that.seledProvinceId = ProvinceIdTemp;

      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.csDbAccountPopedomMutationFP,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            // accountCode: that.accountCode,
            // accountName: that.accountName,
            // isEnable: this.$refs.EnableOrDisable.value,
            // carBrandCode: this.$refs.sct_CarBrand.value,
            // oemCode: "1",
            // groupCode: "1",
            // accountType: "2" //划分类型 1是按专营店 ,2是省份
            accountId: that.accountId,
            idList: that.seledProvinceId
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1"
          // &&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          this.dialogVisible = false;
          this.$message({
            message: "保存成功",
            type: "success",
            duration: 1000
          });
          this.dialogFenPei = false; //保存成功，关闭弹窗
          this.query();
        } else {
          this.$message({
            message: "保存失败",
            type: "success",
            duration: 1000
          });
        }
      });
    },

    open() {
      let that = this;
      this.$refs.EnableOrDisable.getNewData();
      this.$refs.sct_CarBrand.getNewData();
      //
    },
    closeFenPei() {
      let that = this;
      that.data = [];
      that.value = [];
      this.$refs.myTransfer.clearQuery("left");
      this.$refs.myTransfer.clearQuery("right");
    },
    guanBi() {
      this.$refs.myTransfer.clearQuery("left");
      this.$refs.myTransfer.clearQuery("right");
      let that = this;
      that.dialogFenPei = false;
    },
    openFenPei() {
      let that = this;
      this.noFenPei(that.accountId, that.carBrandCode);
      // this.yesFenPei(that.accountId,that.carBrandCode);
      console.log(that.data);
      console.log(that.value);
    },

    addRespon() {
      let that = this;
      that.AddOrEdit = "add";
      that.form.sct_CarBrand.value = "";
      // this.$refs.sct_CarBrand.getNewData(); 写在open方法

      that.form.accountCode = "";
      that.form.accountName = "";

      that.form.EnableOrDisable.value = "";
      // this.$refs.EnableOrDisable.getNewData();
      that.dialogYQSQ = true;
      //
    },
    //分配
    // fenpei: function(index, rowData) {
    //   let that = this;
    //   that.$router.push({ name: "ResponsAreaDialog", params: rowData });
    //   //that.dialogVisible = true;
    // },
    // 分页的三个方法
    prev(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      that.query();
    },
    next(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      that.query();
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      that.query();
    },
  }
};
</script>
<style>
.filter-params-crm .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col {
  margin-bottom: 0px;
}
.filter-paramsmine .el-col {
  margin-bottom: 0px;
}
.filter-params-crm .long1-col .el-input {
  width: 75%;
}
.filter-params-crm .long1-col label {
  width: 25%;
}
.filter-params-crm .long1-col .el-textarea {
  width: 75%;
}
/* .el-dialog__wrapper .el-dialog {
      height: 330px;
} */
</style>
