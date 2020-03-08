<template>
  <el-form :inline="true">
    <el-form-item label="对象形式">
      <el-select v-model="value" placeholder="请选择" @change="change()">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <RoleSelection :fromDatas="fromDatas" v-if="roleshow"></RoleSelection>
    <PersonnelInformation :PersonnelInformation="PersonnelInformation" v-if="personshow"></PersonnelInformation>
  </el-form>
</template>
<script>
import ObjectForm from "@/components/crm/Select/Common/sct_ObjectForm.vue";
import RoleSelection from "@/components/crm/EjectWindows/RoleSelection";
import PersonnelInformation from "@/components/crm/EjectWindows/PersonnelInformation";
export default {
  name: "UpgradeObject",
  components: {
    ObjectForm,
    RoleSelection,
    PersonnelInformation
  },
  data() {
    return {
      options: [{label:'角色',value:'1'},{label:'责任人',value:'2'}],
      value: "",
      roleshow: false,
      personshow: false,
      fromDatas:{labelname:'升级对象'},
      PersonnelInformation:{labelname:'升级对象'}
    };
  },
  methods: {
    change: function() {
      let that = this;
      if (that.value == 1) {
        that.roleshow = true;
        that.personshow=false;
      }else if(that.value==2){
         that.roleshow = false;
        that.personshow=true;
      }
    }
  }
};
</script>
