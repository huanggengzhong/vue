<template>
  <el-form label-position="right" label-width="100px">
    <!--第一行-->
    <el-row>
      <el-col :span="24">
        <el-form-item label="题目名称">
          <el-input v-model="form.input" placeholder="请输入"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <!--第二行-->
    <el-row type="flex" align="bottom">
      <!--题目选项-->
      <el-col :span="16">
        <el-form-item label="题目选项">
          <el-input v-model="form.option1"></el-input>
          <el-input v-model="form.option2"></el-input>
          <el-input v-model="form.option3"></el-input>
          <el-input v-model="form.option4"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item>
          <el-radio-group v-model="form.pulsor">
            <el-radio-button label="+"></el-radio-button>
            <el-radio-button label="-"></el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>
    <!--第三行-->
    <el-row>
      <!--备注-->
      <el-col :span="24">
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <!--第四行-->
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
        <el-form-item>
          <el-button plain style="height:40px">保存题目</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
    
  
<script>
export default {
  name: "tp_DoubleChoice",
  props: {
    DoubleChoice: {
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
  data() {
    return {
      form: {
        input: this.DoubleChoice.input,
        option1: this.DoubleChoice.option1,
        option2: this.DoubleChoice.option2,
        option3: this.DoubleChoice.option3,
        option4: this.DoubleChoice.option4,
        pulsor: this.DoubleChoice.pulsor,
        desc: this.DoubleChoice.desc,
        value: this.DoubleChoice.value
      }
    }
  },
  methods:{
    getData(){
      let that=this
      for(let key in that.form){
        that.form[key]=this.DoubleChoice[key]
      }
    }
  }
};
</script>
