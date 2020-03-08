<template>
  <el-form-item :label="labelname">
    <el-input type="textarea" class="long-textarea-style" v-model="input" :rows="2" resize="none"  placeholder="请输入" ></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "Remarks",
  props: {
    Remarks: {
      input: String,
      labelname: {
        type:String,
        default:"备注"
      }
    }
  },
  data() {
    return {
      input: this.Remarks.input,
      labelname:(this.Remarks.labelname==undefined?"备注":this.Remarks.labelname),
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.Remarks.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>

<style  scoped>

</style>

