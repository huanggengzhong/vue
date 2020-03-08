<template>
  <el-dialog
    title="划转"
    :visible.sync="PopupsVisible"
    width="500px"
    center
    :close-on-click-modal="false"
    append-to-body
  >
    <div class="filter-container filter-params-crm">
      <el-form>
        <el-row>
          <el-col :span="18">
            <saler :swd_SalesConsultant="salers"></saler>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="划转原因">
              <el-input v-model="reason" type="textarea" rows="2"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button @click="transfer">确认</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </el-dialog>
</template>
<script>
import saler from "@/components/crm/EjectWindows/swd_SalesConsultant";
import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name:"transfer",
  components:{
    saler
  },
  props:{PopupsVisible:Boolean},
  data(){
    return{
      salers:{
        input:'',
        labelname:'销售顾问'
      },
      reason:"",
      PopupsVisible:this.PopupsVisible
    }
  },
  methods:{
    init(){
      let that=this
      that.PopupsVisible=this.PopupsVisible
    },
    transfer(){

    }
  }
};
</script>