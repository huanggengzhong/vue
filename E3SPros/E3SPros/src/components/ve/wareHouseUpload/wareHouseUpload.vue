<template>
  <section class="wareHouseUpload">
    <el-dialog
      title="仓库信息维护"
      :visible.sync="isVisible"
      width="1100px"
      style="height:300px;margin-top:150px"
      center
      @close="sendCode"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <carBrand :span="8" :isMul="isMul" @changeCode="getBrandCode" :code='rowData.brandName'/>
          <el-col :span="8">
            <label>仓库</label>
            <el-input suffix-icon="el-icon-search"  :placeholder="placeholder"
 size="small" v-model="rowData.WareHoseCode"/>
          </el-col>
          <el-col :span="8">
            <label>仓库名称</label>
            <el-input suffix-icon="el-icon-search"  :placeholder="placeholder"
 size="small" v-model="rowData.WareHouseName" />
          </el-col>
        </el-row>
        <el-row :gutter="26">
          <el-col :span="8">
            <label>经销商</label>
            <el-input
              suffix-icon="el-icon-search"
               :placeholder="placeholder"

              size="small"
              @focus="isShowStore=true"
               v-model="rowData.StoreName"
            />
          </el-col>
          <el-col :span="8">
            <label>仓库ANSWER码</label>
            <el-input suffix-icon="el-icon-search"  :placeholder="placeholder" size="small"  v-model="rowData.ANSWERCode"/>
          </el-col>
          <el-col :span="8">
            <label>仓库地址</label>
            <el-input suffix-icon="el-icon-search"  :placeholder="placeholder"  size="small"  v-model="rowData.WareHouseAddress"/>
          </el-col>
        </el-row>
        <orgDlr @changeCode="changeStoreCode" :orgDlrVisibl="isShowStore" />
        <el-row :gutter="26">
            <el-col :span="8">
                  <label>仓库电话</label>
            <el-input suffix-icon="el-icon-search"  :placeholder="placeholder" size="small" v-model="rowData.Fax" />
            </el-col>
            <el-col :span="8">
                  <label>仓库传真</label>
            <el-input suffix-icon="el-icon-search"  :placeholder="placeholder" size="small" v-model="rowData.Fax" />
            </el-col>
            <el-col :span="8">
                  <label>仓库管理者</label>
            <el-input suffix-icon="el-icon-search"  :placeholder="placeholder" size="small"  v-model="rowData.WareHouseManager"/>
            </el-col>
        </el-row>
        <el-row>
          <div style="float:right">
            <el-button size="small" type="primary" @click="sendCode">保存</el-button>
            <el-button size="small" @click="cleanCode">重置</el-button>
          </div>
        </el-row>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import carBrand from "@/components/org/carBrand/carBrand";
import { getFuncName } from "@/api/ve/vecomponents";
import orgDlr from "@/components/org/orgDlr";
export default {
  name: "testTbale",
  props: {
    isVisible:{
      type:Boolean,
      default:function(){
        return false;
      }
    },
    rowData:{
      type:Array,
      default:function(){
        return []
      }
    }
  },
  components: { carBrand, orgDlr },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      placeholder: this.$t('sys.tips.esTip0'),
      UserChooseVisible: false,
      isMul: false,
      funcNameArr: [],
      isShowStore: false
    };
  },
  created() {
    getFuncName("").then(res => {
      this.funcNameArr = res.data.rows;
    });
  },
  methods: {
    sendCode() {
      this.$emit("changeCode");
    },
    getUserChooseCode() {
      this.UserChooseVisible = false;
    },
    changeStoreCode() {
      this.isShowStore = false;
    },
    cleanCode(){
      this.rowData=[]
    }
  }
};
</script>
<style scoped>
/*按钮列移动到面包屑重合位置*/
.wareHouseUpload .el-col{
    text-align: right;
}
</style>
