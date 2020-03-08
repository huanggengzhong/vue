<template>
  <div>
    <el-form>
      <el-form-item label="兴趣爱好">
        <el-input
          readonly="readonly"
          v-model="input"
          placeholder="点击选择兴趣爱好"
          suffix-icon="el-icon-s-unfold"
          :disabled="disabled"
          @click.native="showdialog()"
        ></el-input>
      </el-form-item>
    </el-form>

    <el-dialog
      :visible.sync="dialogVisible"
      :width="width"
      class="dialog"
      title="兴趣爱好"
      :append-to-body="true"
      @sentData="sendCode"
    >
      <div class="filter-container filter-title-crm">
        查询条件
        <div style="float:right">
          <el-button type="primary" @click.native="query">查询</el-button>
          <el-button @click.native="handleSelect">确认</el-button>
          <el-button @click.native="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm">
        <el-form>
          <el-row>
            <el-col :span="8">
              <InterestHoppy :InterestHoppy="child" ref="InterestHoppy"></InterestHoppy>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <!-- 自定义网格开始 -->
      <div class="filter-container filter-title-crm">查询结果</div>
      <el-table
        :data="tabledatas"
        highlight-current-row
        style="width: 100%;height:330px"
        v-loading.body="false"
        element-loading-text="Loading"
        border
        fit
      >
        <el-table-column type="index" label="序号" width="55"></el-table-column>
        <el-table-column label="选择" align="center">
          <template slot-scope="scope">
            <!-- <el-button size="mini" @click="handle(scope.$index, scope.row)">选择</el-button> -->
            <el-checkbox @click="handle(scope.$index, scope.row)" name="type"></el-checkbox>
          </template>
        </el-table-column>

        <el-table-column
          v-for="item in tabledatas.colnames"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
          align="center"
        ></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="9"
        :page-size="tabledatas.pagesize"
        :current-page="tabledatas.pageindex"
      ></el-pagination>
      <!-- 自定义网格结束 -->
    </el-dialog>
  </div>
</template>

<script>
import Table from "@/components/crm/table/Table";
import InterestHoppy from "@/components/crm/textbox/Public/customerInfos/InterestHoppy";
import { debuglog } from "util";

export default {
  name: "Interest",
  components: {
    Table,
    InterestHoppy
  },
  props: {
    fromDatas: {
      input: String
    },
   
    Interest: { 
      disabled:Boolean,
      input: String,
      dialogVisible: Boolean
    }
  },
  data() {
    return {
      input: this.Interest.input,
      disabled:this.Interest.disabled,
      width: "800px",
      dialogVisible: false,
      form: {
        name: "",
        region: ""
      },
      child: {
        input: ""
      },
      formLabelWidth: "100px",
      tabledatas: {
        flag: true,
        colnames: [{ label: "兴趣爱好", value: "date" }],
        params: { code: "1" },
        isoperat: false,
        url: "/table",
        havedistrbute: false,
        haveEdit: false,
        haveDel: false
      }
    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了");
      // that.dialogVisible = true;
      if (this.Interest.dialogVisible == false) {
        that.dialogVisible = this.Interest.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },
    query: function() {
      // this.tabledata.params.code = this.$refs.proStatus.value; //从下拉框组件里取值传进网格组件中
      this.$refs.table.getData();
    }, //查询网格，实际方法在组件里，这里只是调了一下
    handleSelect: function() {
      let that = this;
      that.input = this.$refs.table.rowData.name;
      that.dialogVisible = false;
    },
    handle: function(index, rowData) {
      let that = this;
      //that.$router.push({ name: "crmAgentDMREpage", params: rowData });
    },
    reset: function() {
      this.$refs.InterestHoppy.reset();
    }
  }
};
</script>

<style scoped>
</style>



