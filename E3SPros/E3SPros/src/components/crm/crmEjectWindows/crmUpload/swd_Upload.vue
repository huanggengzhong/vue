<!--
* description: 证件照上传
* author: dxuem
* createdDate: 2019-09-17
-->
<template>
  <section>
    <!-- 弹窗 -->
    <el-dialog
      title
      :visible.sync="dialogVisible"
      :append-to-body="true"
      @sentData="sendCode"
      width="900px"
      center
    >
      <div class="filter-container filter-params-crm">
        <el-form>
          <el-row>
            <el-col :span="8">
              <UpLoad
                ref="upload1"
                :ismutiple="ismutiple"
                :action="action"
                :accepttype="accepttype"
                :text="text1"
                :ismore="ismore"
              ></UpLoad>
            </el-col>
            <el-col :span="12" class="crmlong-col">
              <UpLoad
                ref="upload2"
                :ismutiple="ismutiple"
                :action="action"
                :accepttype="accepttype"
                :text="text1"
                :ismore="ismore"
              ></UpLoad>
            </el-col>
            <el-col :span="22" class="crmcontent-col">
              <UpLoad
                ref="upload2"
                :ismutiple="ismutiple"
                :action="action"
                :accepttype="accepttype"
                :text="text1"
                :ismore="ismore"
              ></UpLoad>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="19" style="text-align:right">
              <el-button size="small" type="primary" @click="save">确定</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import UpLoad from "@/components/crm/EjectWindows/UpLoad";
export default {
  name: "sendMsg",
  // 组件混入对象
  mixins: [formMixins],
  components: {
    UpLoad
  },
  props: {
    swd_Upload: {
      dialogVisible: Boolean,
    },
  },
  data() {
    return {
      ismore: false,
      ismutiple: false,
      action: "", //证件上传地址
      accepttype:
        ".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF", //上传文件类型
      text1: "选择文件",
      limit: 1,
      showedit: false,
      params: {},
      nagflag: true,
      posflag: false,
      flag: true,
      params: "",
      dialogVisible: false,
    };
  },
  methods: {}
};
</script>
<style>
</style>
