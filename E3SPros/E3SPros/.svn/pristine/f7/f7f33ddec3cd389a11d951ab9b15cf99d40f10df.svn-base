<template>
  <!-- 外呼 -->
  <el-dialog
    :visible.sync="callflag"
    width="900px"
    style="height:700px;margin:0 0 0 0;overflow-y: scroll"
    class="dialog"
    title="外呼"
    append-to-body
  >
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="8">
            <el-form-item label="客户名称">
              <el-input v-model="custname"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="电话">
              <el-input v-model="telphone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button @click="callout">外呼</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "outCall",
  props: {
    outCall: {
      custname: {
        type: String,
        default: ""
      },
      telphone: {
        type: String,
        default: ""
      },
      callflag:{
       type:Boolean,
       default:false
      }
    }
  },
  data() {
    return {
      custname: this.outCall.custname,
      telphone: this.outCall.telphone,
      callflag: this.outCall.callflag
    };
  },
  mounted() {},
  methods: {
    callout() {},
    init(){
     let that=this
     that.callflag=that.outCall.callflag
     that.custname=that.outCall.custname
     that.telphone=that.outCall.telphone
    }
  }
};
</script>