<template>
  <el-col :span="17" class="effective-clue">
    <div class="w32">{{labelName}}</div>
    <div class="w68">
      <span
        v-for="(interest,index1) in interestList"
        :key="index1"
        @click="interestButton(interest,index1)"
        :class="{'selectedClass-crmFactSysConf':interest.checked}"
      >
        {{interest.lookupValueName}}
        <i :class="{'selectedClass-i-crmFactSysConf':interest.checked}"></i>
      </span>
    </div>
  </el-col>
</template>
<script>
export default {
  props:{
    labelName:{type:String,default:"兴趣爱好"},
    interest:{
      lookupValueName:{type:String},
      checked:{type:Boolean}
  }
  },
  data() {
    return {
      interestList: [{
          lookupValueName: "唱歌",
          lookupValueCode: "1",
          checked: false,
          disable: false
        },
        {
          lookupValueName: "跳舞",
          lookupValueCode: "2",
          checked: false,
          disable: false
        },
        {
          lookupValueName: "画画",
          lookupValueCode: "3",
          checked: false,
          disable: false
        },
        {
          lookupValueName: "篮球",
          lookupValueCode: "4",
          checked: false,
          disable: false
        },
        {
          lookupValueName: "运动",
          lookupValueCode: "5",
          checked: false,
          disable: false
        }
        ]
    };
  },
  methods: {
    interestButton(item, index) {
      item.checked = !item.checked;
      //需热更新，否则状态没法改变
      this.$set(this.interestList, index, item);
    },
    buttonReset() {
      if (!this.interestList) {
        return;
      }
      for (var i = 0; i < this.interestList.length; i++) {
        this.interestList[i].checked = false;
        this.$set(this.interestList);
      }
    },
      sendCode(){
        for (var i = 0; i < this.cityClueList.length; i++) {
          let interest=""
        if (this.interestList[i].checked == true) {
          if (interest == "") {
            interest = this.interestList[i].lookupValueCode;
          } else {
            interest += "," + this.interestList[i].lookupValueCode;
          }
        }
      }
      this.$emit("changeCode", val);
      }
    }
}

</script>
<style>
.selectedClass-crmFactSysConf {
  position: relative;
  border: 1px solid #333 !important;
  color: #333 !important;
}
.selectedClass-i-crmFactSysConf {
  position: absolute;
  border-bottom: 12.4px solid #333;
  border-left: 1.3rem solid transparent;
  width: 0px;
  height: 0px;
  bottom: 0rem;
  right: 0;
}
.disableClass-crmFactSysConf {
  color: #333;
  background-color: #fff;
}
.disableClass-crmFactSysConf:hover {
  cursor: default !important;
  color: #333 !important;
  background-color: #fff !important;
}

.effective-clue {
  text-align: left;
  margin: 10px 0;
}
.effective-clue .w68 span {
  display: inline-block;
  min-width: 60px;
  margin-left: 10px;
  margin-bottom: 10px;
  height: 28px;
  line-height: 28px;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 12px;
  padding-top: 0px;
  padding-bottom: 0px;
  text-align: center;
  color: #333;
}
.selectedClass-crmFactSysConf::after {
  color: #fff;
  content: "\2714";
  position: absolute;
  bottom: -9px;
  right: -3px;
  font-size: 0.5rem;
}
.effective-clue .w68 span:hover {
  /* background-color: #b3d8ff; */
  /* color: #409eff; */
  border: 1px solid #333;
  cursor: pointer;
}
.effective-clue .w32 {
  width: 9%;
  text-align: right;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  vertical-align: top;
}
.effective-clue .w68 {
  width: 90%;
  display: inline-block;
}
.city-clue .el-button {
  margin-left: 10px;
  min-width: 61px;
}
.visit-setting .el-input {
  padding-right: 50px;
}
.visit-setting .el-input__suffix {
  right: 55px;
}
.visit-setting .el-form-item__content > span {
  position: absolute;
  right: 0;
  top: 0;
}
</style>