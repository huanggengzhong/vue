<template>
  <section>
          城市线索池
          <el-button type="primary" plain @click="revisiting()">待回访</el-button>
          <el-button type="primary" plain @click="visit()">回访</el-button>
          <el-button type="primary" plain @click="failure()">战败</el-button>
          <el-button type="primary" plain @click="losecontroller()">失控</el-button>
  </section>
</template>
<script>
export default {
  name: "CityCluePond",
  props: {
    CityCluePond: {
      revisitingparams: Object,
      visitparams:Object,
       failureparams: Object,
      losecontrollerparams:Object,
      revisitingurl: String,
      visiturl:String,
       failureurl: String,
      losecontrollerurl:String
    }
  },
  data() {
    return {
      params: this.CityCluePond.params,
      url: this.CityCluePond.url,
    };
  },
  mounted: function() {
    //  this.getData();
  },
  methods: {
    agree: function() {
      let that = this;
      this.axios
        .get(that.revisitingurl, {
          params: that.revisitingparams
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
        .get(that.visiturl, {
          params: that.visitparams
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
        .get(that.failureurl, {
          params: that.failureparams
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
        .get(that.losecontrollerurl, {
          params: that.losecontrollerparams
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