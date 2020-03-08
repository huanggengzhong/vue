<template>
  <el-form label-position="right" label-width="80px">
    <el-row>
      <el-col :span="24">
        <el-form-item label="题目名称">
          <el-input v-model="form.input" placeholder="请输入"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16">
        <el-form-item label="题目选项">
          <el-input v-model="form.option1"></el-input>
          <el-input v-model="form.option2"></el-input>
          <el-input v-model="form.option3"></el-input>
          <el-input v-model="form.option4"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label-width="0px" style="margin-top:100px">
          <el-radio-group v-model="form.pulsor">
            <el-radio-button label="+"></el-radio-button>
            <el-radio-button label="-"></el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16">
        <el-form-item label="是否启用">
          <el-select v-model="value" placeholder="请选择">
            <el-option label="是" value="1"></el-option>
            <el-option label="否" value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item class="nomargin" label-width="0px">
          <el-button type="primary" @click="submit">保存题目</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  name: "SingleChoice",
  props: {
    SingleChoice: {
      input: {
        type: String,
        default: ""
      },
      option1: {
        type: String,
        default: ""
      },
      option2: {
        type: String,
        default: ""
      },
      option3: {
        type: String,
        default: ""
      },
      option4: {
        type: String,
        default: ""
      },
      pulsor: {
        type: Array,
        default: []
      },
      desc: {
        type: String,
        default: ""
      },
      value: {
        type: String,
        default: ""
      }
    }
  },
  //data函数创建实例的时候执行，创建结束后不生效
  data() {
    return {
      form: {
        input: this.SingleChoice.input,
        option1: this.SingleChoice.option1,
        option2: this.SingleChoice.option2,
        option3: this.SingleChoice.option3,
        option4: this.SingleChoice.option4,
        pulsor: this.SingleChoice.pulsor,
        desc: this.SingleChoice.desc,
        value: this.SingleChoice.value
      }
    };
  },
  methods:{
    getData(){
      let that=this
      that.form.input=this.SingleChoice.input
    },
    submit(){
      let that=this
      let queryObj = {
        type: "mutation",
        // api配置
        apiConfig: crmApis,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          this.$message({
            message: "保存成功！",
            type: "success"
          });
        this.$emit('closedialog')
        } else {
          this.$message.error({
            message: response.data[queryObj.apiConfig.ServiceCode].msg
          });
        }
      });
    }
  }
};
</script>
<style scoped>
.nomargin .el-form-item__content {
  margin-left: 0px;
}
</style>
