<template>
  <section class="department">
    <el-dialog
    :title="$t('ve.label.caigoudandaoru')"
      :visible.sync="isVisible"
      width="900px"
      style="height:225px;margin-top:225px;"
      center
      @close="sendCode"
    >
      <div class="filter-container filter-params">
        <el-row>
            <el-col :span="18">
              <!-- 采购单分配导入文件路径 -->
              <label>{{$t('ve.label.inputWay')}}</label>
                <el-input v-model="fileName" placeholder="请输入内容" size='small'></el-input>
            </el-col>
          <el-col :span="1">
            <el-upload
              class="upload-demo"
              ref="upload"
              :show-file-list="false"
              :on-change='getFileName'
              :auto-upload="false"
            >
              <el-button slot="trigger" size="small">...</el-button>
            </el-upload>
          </el-col>
        </el-row>
        <div style="float:right;margin-right:23px;margin-top:20px;">
          <!-- 导入 -->
          <el-button size="small" type="primary" @click="sendCode">{{$t('sys.button.import')}}</el-button>
        </div>
      </div>
    </el-dialog>
  </section>
</template>
<script>
export default {
  name: "purImport",
  props: {
    isVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  components: {},
  data() {
    return {
        fileName:'',

    };
  },
  created() {},
  methods: {
    sendCode() {
      this.$emit("changeCode");
    },getFileName(file, fileList){
        this.fileName=file.name;
    }
  }
};
</script>
<style scoped>
</style>
