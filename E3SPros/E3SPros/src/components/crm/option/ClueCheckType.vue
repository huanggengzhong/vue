<template>
  <section>
    线索审核类型
    <el-button type="primary" plain @click="auto()">自动</el-button>
    <el-button type="primary" plain @click="needpeople()">人工</el-button>
  </section>
</template>
<script>
export default {
  name: "CityCluePond",
  props: {
    CityCluePond: {
      autoparams: Object,
      needpeopleparams: Object,
     
      autourl: String,
      needpeopleurl: String,
      
    }
  },
  data() {
    return {
      params: this.ClueCheckType.params,
      url: this.ClueCheckType.url
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    agree: function() {
      let that = this;
      this.axios
        .get(that.autourl, {
          params: that.autoparams
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
        .get(that.needpeopleurl, {
          params: that.needpeopleparams
        })
        .then(function(response) {
          that.options = response.data;
          //console.log(response.data)
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    
  }
};
</script>