<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click.native="fetchData(1)">查询</el-button>
      <el-button size="small" @click.native="resetData()">重置</el-button>
      <el-button size="small" @click.native="saveData()">保存</el-button>
    </div>

    <!-- <div class="filter-container filter-title" ref="conTitleHeight">查询区</div> -->
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <LookupValue
          :span="6"
          :isMul="isMul"
          :isshow="isshow"
          :code="dataInfo1.purOrderType"
          :lookuptype="looluptype"
          :labelName="PalookupValuelable"
          @changeCode="getPaRepairStatus1"
        />

        <LookupValue
          :span="6"
          :isMul="isMul"
          :isshow="isshow"
          :code="dataInfo1.purAssignType"
          :lookuptype="looluptype"
          :labelName="PalookupValuelable1"
          @changeCode="getPaRepairStatus2"
        />
      </el-row>
    </div>
    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      ref="saveTable"
      border
      fit
      stripe
      :height="tableHeight"
      style="width:100%;height: 100%"
      v-show="flag"
      element-loading-text="Loading"
    >
      <el-table-column label="选择" type="selection" width="50" align="center"  prop="selection"></el-table-column>
      <el-table-column align="center" label="序号" width="60"  prop="scope.$index + 1">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>

      <el-table-column label="采购单类型" align="center" width="120"  prop="purOrderTypeName">
        <template slot-scope="scope">{{ scope.row.purOrderTypeName }}</template>
      </el-table-column>

      <el-table-column label="采购单分配类型" align="center" width="120"  prop="selection">
        <template slot-scope="scope">{{ scope.row.purAssignTypeName }}</template>
      </el-table-column>

      <el-table-column label="审核顺序" width="80" align="center"  prop="selection">
        <template slot-scope="scope">{{ scope.row.auditSequence }}</template>
      </el-table-column>

      <el-table-column label="是否缺件" width="80" align="center"  prop="selection">
        <template slot-scope="scope">
          <span v-if="scope.row.isLackAudit == '1'">
            <label disabled>是</label>
          </span>
          <span v-else-if="scope.row.isLackAudit =='0' ">
            <label disabled>否</label>
          </span>
        </template>
      </el-table-column>

      <el-table-column label="自动审核" width="80" align="center" prop="selection">
        <template slot-scope="scope">
          <span v-if="scope.row.isAutoAudit == '1'">
            <label disabled>是</label>
          </span>
          <span v-else-if="scope.row.isAutoAudit =='0' ">
            <label disabled>否</label>
          </span>
          <!-- <span >
             <el-checkbox type="checkbox" v-model="scope.row.isAutoAuditB"></el-checkbox>
          </span>-->
        </template>
      </el-table-column>

      <el-table-column
        v-for="(item,index) in columnTable"
        :label="item.auditRuleName"
        :key="index"
        width="160"
        align="center"
      >
        <template slot-scope="scope">
          <span v-if="item.auditRuleType==1">
            <el-checkbox
              v-model="scope.row.dynamicData[item.auditRuleName]"
              @change="checked=>checkRow(checked, scope.row, item.auditRuleName, item.auditRuleId)"
            ></el-checkbox>
          </span>

          <span v-else-if="item.auditRuleType==2">
            <LookupValue
              :span="25"
              :isMul="isMul"
              :options="myOptions[item.auditRuleName]"
              :isshow="isshow"
              :code="scope.row.dynamicData[item.auditRuleName].toString()"
              :comType="scope.row.groupDId+ ' ' +item.auditRuleId+ ' '+item.auditRuleName"
              @changeCode="getRepairStatus3"
            />
          </span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          <span
            style="color:blue;cursor:pointer"
            :disabled="scope.$index===0"
            @click="moveUp(scope.$index,scope.row)"
          >上移</span>
          <span>|</span>
          <span
            style="color:blue;cursor:pointer"
            :disabled="scope.$index===(list.length-1)"
            @click="moveDown(scope.$index,scope.row)"
          >下移</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      ref="paginationHeight"
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?listRecords:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import {
  doQueryList,
  doQueryList1,
  doQueryList2,
  doQueryMdsLookupValueByPage
} from "@/api/pa/orderAuditItem/orderAuditItem";
import { paApis } from "@/api/graphQLApiList/pa";
import LookupValue from "@/components/org/LookupValue/index";
import { the_Height } from "@/views/se/makeHeight";
import { parse } from "path";
import { orgApis } from "@/api/graphQLApiList/org";
export default {
  mixins: [the_Height],
  components: {
    LookupValue
  },
  data() {
    return {
      listRecords: 0,
      flag: false,
      flag1: false,
      check: "是",
      check1: "否",
      PalookupValuelable: "采购单类型",
      PalookupValuelable1: "采购单分配类型",
      isMul: false, //下拉框是否多选
      isshow: true, //是否显示lable
      looluptype: "PA0025", //值列表查询编码，自行修改成变量
      list: [],
      code1: [],
      getResult: [],
      columnTable: null,
      getDynamicReturn: null,
      tableHeight: "300px",
      tableMarginHeight: 15,
      toggleParam: false,
      multipleSelection: [],
      num: [],
      listLoading: true,

      getTempList: [], //获得值列表options
      myOptions: {},

      dataInfo: {
        pageSize: 10,
        pageIndex: 1,
        query: ""
      },

      dataInfo1: {
        purAssignType: "",
        purOrderType: ""
      },

      // tableHeaderRowClassName({ row, rowIndex }) {
      //   if (rowIndex === 0) {
      //     return "background-color:rgb(239, 239, 239);height:32px;";
      //   }
      // }
    };
  },

  created() {
    this.init();
  },

  methods: {
    aaa: function(row) {
      console.log("测试3");
      console.log(row);
      console.log("测试3");
    },

    moveUp(index, row) {
      //上移
      var that = this;
      var i;
      console.log("上移", index, row);
      console.log(that.list[index]);
      if (index > 0) {
        let upDate = that.list[index - 1];
        that.list.splice(index - 1, 1);
        that.list.splice(index, 0, upDate);
      } else {
        alert("已经是第一条，不可上移");
      }
    },

    moveDown(index, row) {
      //下移
      var that = this;
      console.log("下移", index, row);
      if (index + 1 === that.list.length) {
        alert("已经是最后一条，不可下移");
      } else {
        console.log(index);
        let downDate = that.list[index + 1];
        that.list.splice(index + 1, 1);
        that.list.splice(index, 0, downDate);
        return;
      }
    },

    checkRow(checked, row, item, id) {
      console.log(`checked:${checked}`); //值
     // console.log(`row:${JSON.stringify(row)}`)
      console.log(`row.groupDId:${JSON.stringify(row.groupDId)}`); //行数  (后台数据)
     // console.log(`row.dynamicData:${JSON.stringify(row.dynamicData)}`)
      // console.log(`item:${item}`)
      console.log(`id:${id}`); //列数  (后台数据)
      var isExist = false;
      for (var i = 0; i < this.getResult.length; i++) {
        if (
          this.getResult[i].groupDid === row.groupDId &&
          this.getResult[i].auditRuleId === id           
        ) {
          isExist = true;
          this.getResult[i].configValue = checked == true ? 1 : 0; //值
          break;
        }
      }
      if (!isExist) {
        this.getResult.push({
          groupDId: row.groupDId, //行号
          auditRuleId: id, //列号
          configValue: checked == true ? 1 : 0 //值
        });
      }
      console.log("getResult:" + JSON.stringify(this.getResult));
    },

    init() {
      //页面初始化
      this.listLoading = true;
      const that = this;
      var pageSize1 = -1;
      var pageIndex1 = -1;
      doQueryList2(pageSize1,pageIndex1).then(
        response => {
          if (
            response.data.paDbOemAuditRuleQueryFindAll.result === "1"
          ) {
            that.columnTable = response.data.paDbOemAuditRuleQueryFindAll.rows;
            // that.pages=response.data.paDbOemAuditRuleQueryFindAll.pages;
            // taht.page=response.data.paDbOemAuditRuleQueryFindAll.pageIndex;
            //that.getDynamicReturn=response.data.paDbOemAuditRuleQueryFindAll.rows[0].dynamicReturn;
            this.flag = true;
          }
        }
      );
      that.listLoading = false;
    },

    fetchData(page) {
      //查询
      this.listLoading = true;
      const that = this;
      // this.dataInfo.pageSize = 10;
      // this.dataInfo.pageIndex = 1;
      doQueryList(
        that.dataInfo.pageSize,
        page||that.dataInfo.pageIndex,
        that.dataInfo1
      ).then(response => {
        if (
          response.data.paBuOemAuditGroupDQueryFindAll.result === "1"
        ) {
          if(page){ //查询完返回指定的page页数
            that.dataInfo.pageIndex = page;
          }
          that.list = response.data.paBuOemAuditGroupDQueryFindAll.rows;
          that.listRecords = parseInt(
            response.data.paBuOemAuditGroupDQueryFindAll.records
          );
        }

        that.list.forEach(row => {
          var dynamicData = {};
          var dynamicData2 = {};
          var JSONData = JSON.parse(row.dynamicReturn.replace(/\'/g, '"'));
          //  row.isAutoAuditB = row.isAutoAudit == "1" ? true : false;
          console.log("JSONData:"+JSON.stringify(JSONData));
          for (var key in JSONData) {
            var curType = this.columnTable.filter(c => c.auditRuleName == key);
            // console.log("curType:"+JSON.stringify(curType[0]))
            // console.log("curType:"+curType[0].auditRuleType)
          //  var num = curType[0].auditRuleId;
            // dynamicData[key] = curType[0].auditRuleType==1?(JSONData[key] == '1'?true:false):JSONData[key];
            dynamicData[key] = curType[0].auditRuleType == 1 ? JSONData[key] == "1" ? true : false : JSONData[key];
            if (curType[0].auditRuleType == 2) {
              dynamicData2[key] = curType[0].auditRuleCode; //得到值列表编码值
              if (!this.flag1) {
                this.setLookuptype(curType[0].auditRuleCode, key);
              }
            }
          }
          that.$set(row, "dynamicData", dynamicData);
          that.$set(row, "dynamicData2", dynamicData2);
          this.flag1 = true;
        });
        that.listLoading = false;
      });
    },

    setLookuptype(value,tempKey) {
      const that = this
      doQueryMdsLookupValueByPage(9999, 1, {
        isEnable: "1",
        lookupTypeCode: value
      }).then(response => {
          var retData = response.data[orgApis.mdsLookupValueQueryByPage.ServiceCode];
          if (retData.result === "1" && retData.rows !== null) {
            const tempList = retData.rows;
            var tempOptions = [];
            tempList.forEach(row => {
              tempOptions.push({
                lookupValueCode: row.lookupValueCode,
                lookupValueName: row.lookupValueName
              });
            });
            that.$set(that.myOptions,tempKey,tempOptions)
            //that.myOptions.push({tempKey,tempOptions}); //下拉列表数据赋值
            // console.log("3options:::::::::::::::::")
            // console.log("myOptions:" + JSON.stringify(this.myOptions)+","+key);
            // console.log("4options:::::::::::::::::")
          }
        });
    },

    saveData() {
      //保存
      var tableData = this.$refs.saveTable.selection;
      var resultData = [];
      for (var i in tableData) {
        var dynamicData = {};
        var num = {};
        var IgroupDId = tableData[i].groupDId;
        var dynamicData1 = tableData[i].dynamicData; //动态表头
        for (var key in dynamicData1) {
          var curType = this.columnTable.filter(c => c.auditRuleName == key);
          num = curType[0].auditRuleId;

          for (var j = 0; j < this.code1.length; j++) {
            if (
              this.code1[j].getName === IgroupDId &&
              this.code1[j].getId === num
            ) {
              //dynamicData1[this.code1[j].getItem] = parseInt(this.code1[j].getVal); //值
              dynamicData1[key] = this.code1[j].getVal; //值
              break;
            }
          }

          dynamicData[key] =
            curType[0].auditRuleType == 1
              ? dynamicData1[key] == true
                ? "1"
                : "0"
              : dynamicData1[key];
          resultData.push({
            groupDId: IgroupDId, //行号
            auditRuleId: num, //列号
            configValue: dynamicData[key] //值
          });
        }
      }

      this.dataInfo = resultData;
      console.log("this.dataInfo:" + JSON.stringify(this.dataInfo));
      doQueryList1(this.dataInfo).then(response => {
        if (response.data.paBuOemAuditGroupDMutationSave.result == "1") {
          this.$message({
            type: "success",
            message: "保存成功！"
          });
        }
      });
      this.fetchData();
    },

    getPaRepairStatus1(val) {
      console.log("val:" + val);
      this.dataInfo1.purOrderType = val;
    },
    getPaRepairStatus2(val) {
      this.dataInfo1.purAssignType = val;
    },
    getRepairStatus3(val, a, b, comType) {
      console.log("comType:" + comType); //行号+列号+表头
      var getComType = comType;
      var name = getComType.split(" ")[0]; // 行号
      var id = getComType.split(" ")[1]; //列号
      var item = getComType.split(" ")[2]; //表头
      var value = val; // val：值

      var isExist = false;
      for (var i = 0; i < this.code1.length; i++) {
        if (this.code1[i].getName === name && this.code1[i].getId === id) {
          isExist = true;
          this.code1[i].getVal = value; //值
          break;
        }
      }
      if (!isExist) {
        this.code1.push({
          getName: name, //行号
          getId: id, //列号
          getVal: value, //值
          getItem: item //表头
        });
      }
      console.log("code1:" + JSON.stringify(this.code1));
    },

    resetData() {
      //重置
      this.dataInfo1.purOrderType = "";
      this.dataInfo1.purAssignType = "";
    },

    //改变页现实的条数并重新查询
    handleSizeChange(val) {
      console.log("handleSizeChange:"+val)
      this.dataInfo.pageSize = val;
      this.fetchData();
    },
    //翻页
    handleCurrentChange(val) {
       console.log("handleCurrentChange:"+val)
      this.dataInfo.pageIndex = val;
      this.fetchData();
    }
  }
};
</script>

