<template>
  <el-form-item label="车辆品牌">
    <el-select v-model="value" placeholder="请选择" @change="sendCode" clearable>
      <el-option
        v-for="item in options"
        :key="item.uid"
        :label="item.carBrandCn"
        :value="item.carBrandCode"
      ></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
import { requestGraphQL } from "@/api/commonRequest";
import { crmApis } from "@/api/graphQLApiList/crm";
import { type } from "os";
export default {
  name: "sct_CarBrand",
  props: {
    sct_CarBrand: {
      value: String
    }
  },
  data() {
    return {
      value: this.sct_CarBrand.value,
      options: this.getData()
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      type: "query";
      let that = this;
      let queryObj = {
        // api配置
        apiConfig: crmApis.mdmCarBrandQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "carBrandCn",
              "carBrandCode",
              "carBrandEn",
              "column1",
              "column10",
              "column2",
              "column3",
              "column5",
              "column4",
              "column6",
              "column7",
              "column1",
              "column8",
              "column9",
              "createdDate",
              "createdName",
              "creator",
              "groupCode",
              "groupId",
              "isEnable",
              "lastUpdatedDate",
              "modifier",
              "modifyName",
              "mycatOpTime",
              "oemCode",
              "oemId",
              "orderNo",
              "sdpOrgId",
              "sdpUserId",
              "uid",
              "updateControlId"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {} //
        }
      };
      let paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.options = response.data[queryObj.apiConfig.ServiceCode].rows;
        }
      });
    },
    //网格传值到弹窗时使用这个方法
    getNewData() {
      let that = this;
      that.value = this.sct_CarBrand.value;
    },
    reset: function() {
      let that = this;
      this.value = "";
    },
    sendCode() {
      this.$emit("changeCode", this.value);
    }
  }
};
</script>

<style scoped>
</style>

