<template>
  <section class="carSeries">
    <el-dialog
      title="驳回信息"
      :visible.sync="rejectInfoVisible"
      :close-on-click-modal="false"
      :append-to-body="true"
      center
      width="60%"
      @close="sendCode"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="24">
          <el-col :span="6">
            <lableName curLabelName="常用意见选择" :isShowLabel="true" :isRequire="false"></lableName>
            <el-select
              collapse-tags
              filterable
              v-model="saveRejectInfo.partCategory"
              placeholder="请选择"
              clearable
              size="small"
            >
              <el-option value="常用意见1"></el-option>
              <el-option value="常用意见2"></el-option>
              <el-option value="常用意见3"></el-option>
              <el-option value="常用意见4"></el-option>
            </el-select>
          </el-col>
          <el-col :span="10" align="left" class>
            <el-checkbox size="small" v-model="saveRejectInfo.defaultOpinion" class="checkBox"></el-checkbox>
            <label>设为默认意见</label>
          </el-col>
          <el-col :span="8">
            <el-button size="small" @click="addOption">添加为常用意见</el-button>
            <el-button size="small" @click="deleteOption">删除常用意见</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="22">
            <span class="margin-r-0">编辑意见</span>
            <el-input
              type="textarea"
              style="width:90%;"
              :autosize="{ minRows: 2, maxRows: 2}"
              placeholder="请输入内容"
              v-model="saveRejectInfo.editOpinion"
              maxlength="200"
            ></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="24" class="margin-t-20">
          <el-col :span="21" class="blue margin-t-5">
            <!-- <span>你还可以输入{{200-saveRejectInfo.editOpinion.replace(/(^\s*)|(\s*$)/g, "").length}}字</span> -->
            <span>你还可以输入{{200-saveRejectInfo.editOpinion.length}}字</span>
          </el-col>
          <el-button type="primary" size="small" @click="save">确定</el-button>
        </el-row>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { editSave } from "@/api/pa/paBuPurOrder";
import { paDbPriceTraceMutationRebackSave } from "@/api/pa/basedata/paDbPriceTrace";
import { paApis } from "@/api/graphQLApiList/pa";
import lableName from "@/components/lableName";
export default {
  components: {
    lableName
  },
  data() {
    return {
      warehouseCode: undefined,
      warehouseName: undefined,
      isEnable: undefined,
      isCenterWarehouse: undefined,
      isVirtualStore: undefined,
      isLogistic: undefined,
      list: [],
      isRejectSuccess: false,
      isRejectSuccess: undefined,
      codeInside: {
        code: [],
        name: []
      },
      saveRejectInfo: {
        editOpinion: "", //编辑意见
        commonOpinion: "", //常用意见
        isDefaultOpinion: "" //设为默认意见
      }
    };
  },
  watch: {
    selectData(newVal, oldVal) {},
    rejectInfoVisible(newVal, oldVal) {
      if (newVal) {
        //重置
        this.saveRejectInfo.editOpinion = "";
      }
    }
  },
  props: {
    rejectInfoVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    isMul: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    selectData: {
      type: Object,
      default: function() {
        return {
          priceTraceId: "",
          updateControlId: "",
          auditStatus: "",
          createdDate: "",
          creator: "",
          dlrPrice: "",
          groupCode: "",
          groupId: "",
          isEnable: "",
          lastUpdatedDate: "",
          modifier: "",
          mycatOpTime: "",
          oemCode: "",
          oemId: "",
          partId: "",
          sdpOrgId: "",
          sdpUserId: "",
          userPrice: "",
          dealOpinion: ""
        };
      }
    }
  },
  created() {},
  mounted() {
    console.log(this.warehouseCode);
  },
  methods: {
    reset() {
      this.saveRejectInfo = {
        editOpinion: "", //编辑意见
        commonOpinion: "", //常用意见
        isDefaultOpinion: "" //设为默认意见
      };
      this.selectData = {
        priceTraceId: "",
        updateControlId: "",
        auditStatus: "",
        createdDate: "",
        creator: "",
        dlrPrice: "",
        groupCode: "",
        groupId: "",
        isEnable: "",
        lastUpdatedDate: "",
        modifier: "",
        mycatOpTime: "",
        oemCode: "",
        oemId: "",
        partId: "",
        sdpOrgId: "",
        sdpUserId: "",
        userPrice: "",
        dealOpinion: ""
      };
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    getorderEditCode(val) {
      if (this.isMul) {
        if (val[0] || val.length == "0") {
          this.codeInside = {
            code: [],
            name: []
          };
          for (var i = 0; i < val.length; i++) {
            this.codeInside.code.push(val[i].carSeriesCode);
            this.codeInside.name.push(val[i].carSeriesName);
          }
        }
      } else {
        this.codeInside = {
          code: [],
          name: []
        };
        this.codeInside.code.push(val.carSeriesCode);
        this.codeInside.name.push(val.carSeriesName);
      }
    },
    sendCode() {
      this.$emit("changeRejectInfoCode");
    },
    save() {
      if (this.saveRejectInfo.editOpinion == "") {
        this.$message({
          message: "编辑意见不能为空",
          type: "warning",
          duration: 2000
        });
        return;
      }
      this.selectData.dealOpinion = this.saveRejectInfo.editOpinion; //编辑意见
      let newSelectData = [];
      newSelectData.push(this.selectData);
      paDbPriceTraceMutationRebackSave(newSelectData).then(response => {
        if (
          response.data[paApis.paDbPriceTraceMutationRebackSave.ServiceCode]
            .result == "1"
        ) {
          this.isRejectSuccess = true;
          this.submitAlert("驳回成功");
        } else {
          this.submitAlert("驳回失败");
        }
        this.isRejectSuccess = false; //重置状态值
      });
    },
    submitAlert(val) {
      if (this.isRejectSuccess) {
        this.$message({
          message: val,
          type: "success",
          duration: 2000
        });
        this.reset();
        this.$emit("changeRejectInfoCode", "rejectSuccess");
      } else {
        this.$message({
          message: val,
          type: "warning",
          duration: 2000
        });
      }
    },
    addOption() {},
    deleteOption() {}
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog .el-dialog__body {
  padding: 0 20px 10px 20px;
}
/deep/ .el-dialog__wrapper .el-dialog {
  height: 190px;
}
/deep/ .margin-r-0 {
  margin-right: 0;
  float: left;
}
/deep/ .margin-t-20 {
  margin-top: 20px;
}
/deep/ .margin-t-5 {
  margin-top: 5px;
}
/deep/ .blue {
  color: blue;
}
/deep/ .margin-b-0 {
  margin-bottom: 0;
}
/deep/ .margin-t-8 {
  margin-top: 8px;
}
/deep/ label.el-checkbox.checkBox {
  width: 15px;
  margin-right: 0px;
}
</style>
