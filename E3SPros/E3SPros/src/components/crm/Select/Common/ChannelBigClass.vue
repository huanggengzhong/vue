<template>
  <div>
    <el-form-item label="渠道大类" :prop="checkprop">
      <el-select v-model="value" :disabled="isdisabled" @change="sendCode" placeholder="请选择" clearable>
        <el-option v-for="item in options" :key="item.infoChanMId" :label="item.infoChanMName" :value="item.infoChanMId"></el-option>
      </el-select>
    </el-form-item>
  </div>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "ChannelBigClass",
  props: {
    ChannelBigClass: {
      value: String,
      checkprop: String,
      isdisabled: Boolean,
      pcode: String
    }
  },
  data() {
    return {
      value: this.ChannelBigClass.value,
      checkprop: this.ChannelBigClass.checkprop,
      pcode: this.ChannelBigClass.pcode,
      isdisabled: this.ChannelBigClass.isdisabled,
      options: this.getData()
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      //每次调用这个数据的时候都要重新赋值
      that.pcode = that.ChannelBigClass.pcode;
      // /**
      //  * 页面初始情况，联动时级联父级组件无值时，级联子组件不允许有值
      //  */
      // if (that.pcode != undefined&&that.pcode!="") {
        let queryObj = {
          // api配置
          apiConfig: crmApis.pcDbInfoChanMQueryFindAll,
          // 需要调用的API服务配置
          apiServices: [
            {
              //表格中台返回网格的字段
              apiQueryRow: ["infoChanMId", "infoChanMName"]
            }
          ],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: 1000,
            pageIndex: 1,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: { cantactWayId: that.pcode, isEnable: "1" } //值列表编码
          }
        };
        let paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response => {
          if (
            response.data[queryObj.apiConfig.ServiceCode].result == "1"
          ) {
            that.options = response.data[queryObj.apiConfig.ServiceCode].rows;
          }
        });
        this.value = this.ChannelBigClass.value;
      // } else {
      //   return;
      // }
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
