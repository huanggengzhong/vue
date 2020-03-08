/*
 * @Author: xgz 
 * @Date: 2019-10-07 11:27:59 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-10-09 10:23:08
 */

<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="add()">新增</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>
    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <imageType ref="imageTypeMainRef" :imageType="imageTypeMain" />
          </el-col>
          <el-col :span="6">
            <modelType ref="modelTypeMainRef" :modelType="modelTypeMain" />
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 自定义网格开始 -->
    <div class="filter-container filter-title">查询结果</div>
    <div>
      <el-row :gutter="20">
        <el-col :span="6" :gutter="20">
          <div><img class="imgSet" src="../imagesTest/1.jpeg" /></div>
        </el-col>
        <el-col :span="6" :gutter="20">
          <div><img class="imgSet" src="../imagesTest/1.jpeg" /></div>
        </el-col>
        <el-col :span="6" :gutter="20">
          <div><img class="imgSet" src="../imagesTest/1.jpeg" /></div>
        </el-col>
        <el-col :span="6" :gutter="20">
          <div><img class="imgSet" src="../imagesTest/1.jpeg" /></div>
        </el-col>
      </el-row>
    </div>
    <!-- 新增图片弹窗 -->
    <el-dialog title="新增图片" :visible.sync="dialogVisible" width="900px" append-to-body center>
      <div class="filter-container filter-params-crm">
        <el-form ref="form">
          <el-row>
            <el-col :span="8" class="crm-label-required">
              <imageType :imageType="imageTypeAdd" ref="imageTypeAddRef" />
            </el-col>
            <el-col :span="8" class="crm-label-required">
              <modelType :modelType="modelTypeAdd" ref="modelTypeAddRef" />
            </el-col>
            <el-col :span="8" class="crm-label-required">
              <imageName :imageName="imageNameAdd" ref="imageNameAddRef" />
            </el-col>
          </el-row>
          <!-- 第二行 -->
          <el-row>
            <el-col :span="8" class="crm-label-required">
              <imageUpload :imageUpload="imageUploadAdd" ref="imageUploadAddRef" />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" style="text-align:right">
              <el-button size="small" type="primary" @click="save('form')">保存</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <!-- 新增图片弹窗结束 -->
    <el-upload :http-request="uploadProductPic" accept="image/*" list-type="picture-card" :on-preview="handleContImgPreview" :on-remove="handleContImgRemove" limit="5" :on-exceed="exceedTips" :file-list="productPicPathList">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogContImgVisible" append-to-body>
      <img width="100%" :src="dialogContImgUrl" />
    </el-dialog>

  </div>
</template>
<script>
import imageType from "@/components/crm/Select/imageType";
import modelType from "@/components/crm/Select/modelType";
import imageName from "@/components/crm/textbox/imageName";
import imageUpload from "@/components/crm/EjectWindows/imageUpload";

import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "imageManegeNM",
  components: {
    imageType,
    modelType,
    imageName,
    imageUpload
  },
  data() {
    return {
      rootClueCode: "",
      dialogVisible: false,
      imageTypeMain: {
        value: ""
      },
      modelTypeMain: {
        value: ""
      },
      imageTypeAdd: {
        value: ""
      },
      modelTypeAdd: {
        value: ""
      },
      imageNameAdd: {
        input: ""
      },
      imageUploadAdd: {
        input: ""
      }
    };
  },
  methods: {
    reset: function() {
      let that = this;
      that.$refs.modelTypeMain.reset();
      that.$refs.imageTypeMain.reset();
    },
    add: function() {
      let that = this;
      that.dialogVisible = true;
    },
    //保存
    save: function(formName) {
      let that = this;
      let flag = false;
      var config = this.config;
      config = {
        imageTypeAdd: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.imageTypeAddRef.value,
          "图片类型",
          "不能为空"
        ],
        modelTypeAdd: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "value",
          that.$refs.modelTypeAddRef.value,
          "模板类别",
          "不能为空"
        ],

        imageNameAdd: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.imageNameAddRef.input,
          "图片名称",
          "不能为空"
        ],
        imageUploadAdd: [
          true,
          this.$crmcf.crmRegExp("empty"),
          "input",
          that.$refs.imageUploadAddRef.input,
          "图片上传",
          "不能为空"
        ]
      };
      flag = true;
      this.$crmcf.validForm(that, formName, config, function(flag) {
        if (flag) {
          let variables = {
            dataInfo: {
              xx: that.$refs.imageTypeAddRef.value,
              xx2: that.$refs.modelTypeAddRef.value,
              xx3: that.$refs.imageNameAddRef.input,
              xx4: that.$refs.imageUploadAddRef.input,
              uid: that.uid,
              updateControlId: that.updateControlId
            }
          };
          that.$crmcf.mutationSumbit(that, variables, crmApis.xx, function() {
            // updateControlId = "";
            that.dialogVisible = false;
            that.query();
          });
        }
      });
    },
    
  }
};
</script>
<style>
.imgSet {
  border-style: none;
  width: 200px;
  height: 300px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>

