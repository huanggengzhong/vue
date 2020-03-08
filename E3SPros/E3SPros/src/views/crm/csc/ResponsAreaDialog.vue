<template>
  <section class="RAAdialog">
    <div class="filter-container filter-title-crm">
      查询条件
      <div style="float:right">
        <!-- <el-button type="primary" size="small" @click="getData()">测试按钮</el-button>
        <el-button type="primary" size="small" @click="query()">查询</el-button> -->
        <el-button size="small" @click="save"  type="primary">保存</el-button>
      </div>
    </div>

    <!-- <div class="filter-container filter-title-crm">查询结果</div> -->
    <el-row>
      <el-col :span="24">
        <el-transfer v-model="value" :data="data"
        filterable
           :titles="['未分配', '已分配']"
          :button-texts="['取消分配', '分配']"
        ></el-transfer>
      </el-col>
    </el-row>
  </section>
</template>
<script>
import AssignOrNot from "@/components/crm/Select/Whether/AssignOrNot";
import sct_CarBrand from "@/components/crm/Select/Common/sct_CarBrand";
import Province from "@/components/crm/Select/Common/Province";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "ResponsAreaDialog",
  components: {
    AssignOrNot,
    sct_CarBrand,
    Province
  },
  data() {
    // const generateData = _ => {
    //     const data = [];
    //     for (let i = 1; i <= 15; i++) {
    //       data.push({
    //         key: i,
    //         label: `备选项 ${ i }`,
    //         // disabled: i % 4 === 0
    //       });
    //     }
    //     return data;
    //   };
    return {
      data: [],
      value: [],
      params: {},
      sctCarBrand: {
        value: ""
      },
      // Province: {
      //   value: ""
      // }
    };
  },

  mounted: function() {
    this.noFenPei();
    this.yesFenPei();
  },

  methods: {
    //获取未分配的省份
    noFenPei: function() {
      let that = this;
      let queryObj = {
        // api配置
        apiConfig: crmApis.mdmOrgProvinceQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["provinceId", "provinceName"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 1000,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: { isEnable: "1" } //值列表编码
        }
      };
      let paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
          // &&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          debugger;
          const options = response.data[queryObj.apiConfig.ServiceCode].rows;
          for (let i = 0; i <= options.length-1; i++) {
            that.data.push({
              key: i,
              label: options[i].provinceName,
              provinceId: options[i].provinceId
              // disabled: i % 4 === 0
            });
            // console.info(that.data[i].provinceId)
          }
        }
      });
      // this.value = this.Province.value;
    },

    //根据责任区id获取已分配的省份
    yesFenPei: function() {
      let that = this;

      //查询条件
      // that.tabledatas.queryObj.params.isEnable=this.$refs.EnableOrDisable_2.value  //传空字符串查询不出数据
      // that.tabledatas.queryObj.params.carBrandCode = this.$refs.sct_CarBrand_2.value
      // that.tabledatas.queryObj.params.accountId = this.$refs.ResponsibleDistrict.value
      // that.tabledatas.queryObj.params.provinceId = this.$refs.Province.value

      //debugger
      let queryObj = {
        // api配置
        type: "query",
        apiConfig: crmApis.csDbAccountProvinceQuery,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["dName", "dId"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 9999,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            // accountCode: that.accountCode,
            // accountName: that.accountName,
            // isEnable: this.$refs.EnableOrDisable.value,
            // carBrandCode: this.$refs.sct_CarBrand.value,

            // accountId : "6fce1cf292684eaea1c7d7f2f0e2d859",//北京、上海
            oemCode: "1",
            groupCode: "1"
            // assignStatus

            //新增不用传并发字段
            // updateControlId:"7",
          }
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
          //请求成功后，设置网格的值
          let hasSel = response.data[queryObj.apiConfig.ServiceCode].rows;
          let valueTemp = [];
          for (let i = 0; i <= hasSel.length-1; i++) {
            // that.value = [1, 2, 3];
            // let temp = hasSel[i].dId+""; //转为字符串
            if( hasSel[i].dId == that.data[i].provinceId){
              let temp = that.data[i].key;
              valueTemp.push(temp);
              that.value = valueTemp;

              console.log(that.value)
            }
          }
        }
      });
    },
    test() {
      let that = this;
      that.value = [1, 2, 3];
    },
    save: function() {
      let valueArray = this.value; //this.value.toString
      console.info(valueArray);
      // for(let i=0;i<valueArray.length;i++){
      //    console.info(valueArray[i]);
      // }
    }
  }
};
</script>
