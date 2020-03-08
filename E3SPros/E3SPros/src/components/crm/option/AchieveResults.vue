<template>
  <section>
          达成结果
          <el-button type="primary" plain @click="agree()">同意</el-button>
          <el-button type="primary" plain @click="refuse()">驳回</el-button>
  </section>
</template>
<script>
export default {
  name: "AchieveResults",
  props: {
    AchieveResults: {
      agreeparams: Object,
      refuseparams:Object,
      agreeurl: String,
      refuseurl:String
    }
  },
  data() {
    return {
      agreeparams: this.AchieveResults.agreeparams,
      refuseparams: this.AchieveResults.refuseparams,
      agreeurl: this.AchieveResults.agreeurl,
      refuseurl: this.AchieveResults.refuseurl,
      
    };
  },
  mounted: function() {
     this.getData();
  },
  methods: {
    agree: function() {
      let that = this;
      this.axios
        .get(that.agreeurl, {
          params: that.agreeparams
        })
        .then(function(response) {
          that.options = response.data;
          //console.log(response.data)
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    refuse: function() {
      let that = this;
      this.axios
        .get(that.refuseurl, {
          params: that.refuseparams
        })
        .then(function(response) {
          that.options = response.data;
          //console.log(response.data)
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>