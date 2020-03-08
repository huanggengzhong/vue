<!--
* 采购单确认时机设置
* xulfan
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button size="small" @click="save">{{ $t('sys.button.save') }}</el-button>
      <el-button size="small" @click="reset">{{ $t('sys.button.reset') }}</el-button>
    </div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <carBrandRadio
          :span="12"
          :key="carBrandRadioKey"
          :code="code"
          v-model="queryObj.carBrandCode"
          @changeCode="getBrandCodeRadio"
        />
      </el-row>
    </div>
    <div class="filter-container filter-title" ref="resultTitleHeight">设置区</div>
    <div
    
      class="filter-container filter-params" 
      ref="conHeight"
      :style="{'height':tableHeight+'px'}"
      v-loading="loading"
    > 
      <div class="xxx">
        <el-row :gutter="24">
          <el-row>
            <el-col :span="6" style="padding-left: 163px;">
              <el-radio
                v-model="timeType"
                label="1"
                @change="changeTimeType"
                style="width:auto;"
              >{{ $t('ve.label.timeType1') }}</el-radio>
            </el-col>
            <timePicker
              :span="8"
              :code="formField[0].beginDate"
              @changeCode="getBeginDate1"
              format="HH:mm:ss"
              :labelName="$t('ve.label.beginDate1')"
            />
            <timePicker
              :span="8"
              :code="formField[0].endDate"
              @changeCode="getEndDate1"
              format="HH:mm:ss"
              :labelName="$t('ve.label.endDate1')"
            />
          </el-row>
          <el-row>
            <el-col :span="6" style="padding-left: 163px;">
              <el-radio
                v-model="timeType"
                label="2"
                @change="changeTimeType"
                style="width:auto;"
              >{{ $t('ve.label.timeType2') }}</el-radio>
            </el-col>

            <datePicker
              :span="8"
              :code="formField[1].beginDate"
              @changeCode="getBeginDate2"
              :dateType="datetime"
              :format="deteTimeFormat"
              :labelName="$t('ve.label.beginDate2')"
            />
            <datePicker
              :span="8"
              :code="formField[1].endDate"
              @changeCode="getEndDate2"
              :dateType="datetime"
              :format="deteTimeFormat"
              :labelName="$t('ve.label.endDate2')"
            />
          </el-row>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import carBrandRadio from "@/components/org/carBrandRadio/carBrandRadio";
import datePicker from "@/components/org/datePicker/datePicker";
import timePicker from "@/components/org/timePicker/timePicker";

export default {
  name: "purcashAssignTimeSetQuery",
  components: {
    carBrandRadio,
    datePicker,
    timePicker
  },
  data() {
    return {
      //设置网格总共的条数，查询完更改
      pageTotal: 0,
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 16
      },
      code:'1',
      carBrandRadioKey: "1",
      timeType: "1",
      queryObj: {
        carBrandCode: this.$store.getters.orgInfo.BRAND_CODE
      },
      //表单查询数据
      formField: [
        {
          timeType: "1",
          beginDate: "",
          endDate: "",
          isEnable: "1"
        },
        {
          timeType: "2",
          beginDate: "",
          endDate: "",
          isEnable: "0"
        }
      ],
      hisFormField: [],
      tableHeight: null,
      loading: false,
      datetime:"datetime",
      deteTimeFormat:"yyyy-MM-dd HH:mm:ss"
    };
   
  },
  watch: {
    hisFormField(val) {
      if (this.hisFormField.length > 1) {
        for (var k in this.hisFormField) {
          if (
            this.hisFormField[k].timeType &&
            this.hisFormField[k].timeType == "1"
          ) {
            var beginIndex = this.hisFormField[k].beginDate.lastIndexOf(" ");
            this.formField[0].beginDate = this.hisFormField[
              k
            ].beginDate.substring(
              beginIndex + 1,
              this.hisFormField[k].beginDate.length
            );
            var endIndex = this.hisFormField[k].endDate.lastIndexOf(" ");
            this.formField[0].endDate = this.hisFormField[k].endDate.substring(
              endIndex + 1,
              this.hisFormField[k].endDate.length
            );
          }

          if (
            this.hisFormField[k].timeType &&
            this.hisFormField[k].timeType == "2"
          ) {
            var beginIndex = this.hisFormField[k].beginDate.lastIndexOf(" ");
            this.formField[1].beginDate = this.hisFormField[
              k
            ].beginDate
            var endIndex = this.hisFormField[k].beginDate.lastIndexOf(" ");
            
            this.formField[1].endDate = this.hisFormField[k].endDate
          }
          if (k == 1) {
            break;
          }
        }
      }
    }
    

  },
  // watch:{
  //   formField(val) {
  //     console.log(this.formField);
      
  //      debugger
  //     if(this.formField[1].beginDate!=''&&this.formField[1].endDate!=''){
  //       debugger
  //     }
      

  //   }
  // },
  mounted() {
    this.queryTable(1);
    this.$nextTick(() => {
      var appMainHeight = this.$utils.getAppMainHeight(this.$route.path, this);
      if (appMainHeight > 0) {
        this.tableHeight =
          appMainHeight -
          this.$refs.searcheHeight.offsetHeight -
          this.$refs.conHeight.offsetHeight -
          this.$refs.resultTitleHeight.offsetHeight;
      }
    });
  },
  methods: {
    // 查询网格
    queryTable(page) {
      this.formField = [
        { timeType: "1", beginDate: "", endDate: "", isEnable: "1" },
        { timeType: "2", beginDate: "", endDate: "", isEnable: "0" }
      ];
      const that = this;
      that.loading = true;
      let queryObj = {
        // api配置
        apiConfig: veApis.veDbOrderConfirmQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["timeType", "beginDate", "endDate", "isEnable","updateControlId","orderConfirmId"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.listQuery.pageSize,
          pageIndex: page || that.listQuery.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.queryObj
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.pageTotal =
            response.data[queryObj.apiConfig.ServiceCode].records;
          that.hisFormField =
            response.data[queryObj.apiConfig.ServiceCode].rows;
        }
      });
      this.loading = false;
    },
    //保存数据之前处理数据
    beforeSave() {
      if (this.hisFormField.length > 1)
        for (var k in this.hisFormField) {
         
          if (
            this.hisFormField[k].timeType &&
            this.hisFormField[k].timeType == "1"
          ) {
            var beginIndex = this.hisFormField[0].beginDate.lastIndexOf(" ");
            this.hisFormField[k].beginDate =
              this.hisFormField[k].beginDate.substring(0, beginIndex) +
              " " +
              this.formField[0].beginDate;

            var endIndex = this.hisFormField[0].endDate.lastIndexOf(" ");
            this.hisFormField[k].endDate =
              this.hisFormField[k].endDate.substring(0, endIndex) +
              " " +
              this.formField[0].endDate;

            this.hisFormField[k].isEnable = this.formField[0].isEnable;
          }

          if (
            this.hisFormField[k].timeType &&
            this.hisFormField[k].timeType == "2"
          ) {
            var beginIndex = this.hisFormField[1].beginDate.lastIndexOf(" ");
            this.hisFormField[k].beginDate =
              this.formField[1].beginDate
              //  +
              // " " +
              // this.hisFormField[k].beginDate.substring(
              //   beginIndex + 1,
              //   this.hisFormField[k].beginDate.length
              // );

            var endIndex = this.hisFormField[1].endDate.lastIndexOf(" ");
            this.hisFormField[k].endDate =
              this.formField[1].endDate 
              // +
              // " " +
              // this.hisFormField[k].endDate.substring(
              //   endIndex + 1,
              //   this.hisFormField[k].endDate.length
              // );

            this.hisFormField[k].isEnable = this.formField[1].isEnable;
          }
          if (k == 1) {
            break;
          }
        }
    },
    //保存
    save() {
      this.beforeSave();
       const that = this;
      var bTime=Date.parse(this.hisFormField[1].beginDate)
      var eTime=Date.parse(this.hisFormField[1].endDate)
      debugger
      if(bTime>  eTime){
         that.$message({
              message: "停止结束时间不能小于停止开始时间",
              type: "warning",
              duration: 2000
            });
            return;
      }

      
     
      that.listLoading = true;
      var saveCount = 0;

      for (var k in this.hisFormField) {
        if (k == 2) break;
        let queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.veDbOrderConfirmMutationSave,
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              timeType: this.hisFormField[k].timeType,
              beginDate: this.hisFormField[k].beginDate,
              endDate: this.hisFormField[k].endDate,
              carBrandCode: this.queryObj.carBrandCode,
              isEnable: this.hisFormField[k].isEnable,
              orderConfirmId: this.hisFormField[k].orderConfirmId,
              updateControlId: this.hisFormField[k].updateControlId
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
            saveCount++;
          } else {
            msg = response.data[queryObj.apiConfig.ServiceCode].msg;
            that.$message({
              message: msg,
              type: "warning",
              duration: 2000
            });
          }
          if (saveCount == 2) {
            this.queryTable(1);
            that.$message({
              message: "保存成功",
              type: "success",
              duration: 2000
            });
          }
        });
      }
    },
    //重置
    reset() {
      this.formField = [
        { timeType: "1", beginDate: "", endDate: "", isEnable: "1" },
        { timeType: "2", beginDate: "", endDate: "", isEnable: "0" }
      ];
      this.carBrandRadioKey += 1;
    },
    getBrandCodeRadio(val) {
      this.queryObj.carBrandCode = val;
      this.queryTable(1);
    },
    changeTimeType() {
      this.formField[0].isEnable =
        this.formField[0].isEnable == "1" ? "0" : "1";
      this.formField[1].isEnable =
        this.formField[1].isEnable == "1" ? "0" : "1";
    },
    getBeginDate1(val) {
      this.formField[0].beginDate = val;
    },
    getBeginDate2(val) {
      this.formField[1].beginDate = val;
    },
    getEndDate1(val) {
      this.formField[0].endDate = val;
    },
    getEndDate2(val) {
      this.formField[1].endDate = val;
    }
  }
};
</script>
<style scoped >
.xxx{
position: relative;
  left: -150px;
}
  

/deep/ .el-icon-time:before {
  position: relative;
  left: -29px;
}
</style>
