<template>
 <el-col :span="6" >
<el-form-item :label="labelName">
    <el-upload
      class="upload-demo"
      ref="upload"
      :action="action"
      :accept="accepttype"
      :multiple="ismutiple"
      :on-change="change"
      :on-preview="handlePreview"
      :auto-upload="false"
      :file-list="fileList"
      :show-file-list="true"
     
    :limit="limit"
    
    :on-exceed="handleExceed"
    > 
      <el-button slot="trigger" size="small" ref="btn" >{{buttonText}}</el-button>
    </el-upload>
</el-form-item>
 </el-col>
</template>

<script>
export default {
  name: "UpLoad",
  props:{
     buttonText:{ type: String, default: '选择文件' },
     labelName: { type: String, default: '' },
     fileList:{ type: Array, default: function() { return [] } },
    text: { type: String, default: "上传文件" },//按钮文字
    action: { type: String, default: "" },//文件上传地址
    accepttype: String,//文件类型限制
    ismutiple: Boolean,//是否可多选
    ismore:{ type: Boolean, default: true },//是否可上传多个文件
    limit:Number,//文件个数限制
  },
  data() {
    return {
      // buttonText:this.buttonText,
      // labelName:this.labelName,
      // action:"",
      // fileList: this.fileList,
      // isRequire:this.isRequire,
      // isMul:this.isMul,
      // text:this.text,
      // action:this.action,
      // accepttype:this.accepttype,
      // father:{
      //   value:'',
      //   input:''
      // }
      accfiles:this.accepttype,
    }
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    // choose:function(){
    //   let that =this;
    //   this.father.input=this.$refs.btn.value;
    //   that.input=this.
    // },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.fileList = [];
    },
    handlePreview(file) {
      console.log(file);
    },
    //如果只能上传一个文件，后面选的覆盖前面的
    change(files, fileList) {
      if(!this.ismore){
        if (fileList.length > 1) {
        this.fileList = [];
        this.fileList.push(files);
      }
      }
    },
    // 超出限制个数
    handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择个文件${this.limit}，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
  }
};
</script>