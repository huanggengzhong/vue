<template>
  <section>
    <el-col :span="span">
      <label class="demonstration">{{name}}</label>
      <el-select
        :multiple="isMul"
        collapse-tags
        filterable
        v-model="code"
        placeholder="请选择"
        clearable
        @change="sendCode"
        size="small"
      >
        <el-option
          v-for="item in optionDatas"
          :key="item.code"
          :label="item.text"
          :value="item.code"
        >{{item.text}}</el-option>
      </el-select>
    </el-col>
  </section>
</template>
<script>
import { getTradeMark } from "@/api/pa/paBuPurOrder";
export default {
  props: {
    span: {
      type: Number,
      default: function() {
        return 6;
      }
    },
    isMul: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    isReset: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    name:{
      type:'',
      default:function(){
        return '默认'
      }
    }
  },
  data() {
    return {
      listLoading: true,
      optionDatas: [],
      listQuery: [],
      code:[]
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    isReset(newValue,oldValue) {
      this.code = [];
    }
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getTradeMark(this.listQuery).then(response => {
        this.listLoading = false;
        this.optionDatas = response.data.rows;
      });
    },
    sendCode() {
      this.$emit("changeCode", this.code);
    }
  }
};
</script>
