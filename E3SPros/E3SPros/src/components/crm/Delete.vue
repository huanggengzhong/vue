<template>
  <i class="el-icon-delete" @click.native="del()"></i>
</template>
<script>
export default {
  name: "Delete",
  props: {
    Delete: {
      params: Object,
      url: String
    }
  },
  data() {
    return {
      params: this.Delete.params,
      url: this.Delete.url
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    del: function() {
      let that = this;
      this.axios
        .get(that.url, {
          params: that.params
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