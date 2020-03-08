<template>
  <div class="demo-input-suffix" id="Opinion_withLinkEvent">
    <el-form-item label="意见" style="text-align:left">
      <el-button size="small" @click="agree()">同意</el-button>
      <el-button size="small" @click="disagree()">驳回</el-button>
    </el-form-item>
    <div v-if="agreeflag">
      <el-form-item label="同意说明">
      <el-input v-model="input_agree" class="long-textarea-style" resize="none" type="textarea" placeholder="请输入内容" ></el-input>
      </el-form-item>
    </div>
    <div v-if="disagreeflag">
      <el-form-item label="驳回说明">
      <el-input v-model="input_disagree" class="long-textarea-style" resize="none" type="textarea" placeholder="请输入内容" ></el-input>
      </el-form-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "Opinion_withLinkEvent",
   props: {
    Opinion_withLinkEvent: {
      input_agree: String,
      input_disagree:String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      input_agree: this.Opinion_withLinkEvent.input_agree,
      input_disagree: this.Opinion_withLinkEvent.input_disagree,
      agreeflag : true,
      
      value:'',
      disagreeflag : false,
    };
  },
  methods: {
    agree: function() {
      let that = this;
      that.agreeflag = true;
      that.disagreeflag = false;
      that.value=1
    },
    disagree: function() {
      let that = this;
      that.disagreeflag = true;
      that.agreeflag = false;
      that.value=0
    }
  }
};
</script>

<style scoped>
</style>
