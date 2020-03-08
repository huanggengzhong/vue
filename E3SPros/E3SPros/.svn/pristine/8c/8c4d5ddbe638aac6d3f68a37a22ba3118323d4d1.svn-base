<!--
* description: 品牌扣款模板-单网格
* author: ydche
* createdDate: 2019-09-05
* logs:

-->
<template>
  <section>
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button
        v-for="comp in tableButtons"
        :key="comp.compKey"
        :type="comp.type"
        @click="comp.clickEvent"
      >{{comp.text}}</el-button>
    </div>

    <!-- <div
      class="filter-container filter-title"
      ref="conTitleHeight"
    >查询条件</div>-->
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="22" class="table-col">
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :isMul="comp.isMul"
            :isRequire="comp.isRequire"
            :span="comp.span || 6"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
            :format="comp.format"
            :dateType="comp.dateType"
            :valueObject="curValueObject"
            :inputType="comp.inputType"
            :clearable="comp.clearable"
            :filterable="comp.filterable"
            :parentFileds="comp.parentFileds || ''"
          ></component>
        </el-col>

        <el-col :span="2" class="moreBtn" v-if="isShowMoreBtn">
          <el-button :icon="moreBtnIcon" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>

        <el-col
          :span="22"
          v-show="toggleParam"
          :class="isAbsolute === true ? 'toggleParam' : 'toggleParam toggleAbsolute'"
          style="z-index:2000"
        >
          <el-row>
            <component
              v-for="comp in tableComponents.filter(o => o.isMust === false)"
              :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
              :validrule="comp.validrule"
              :key="comp.compKey"
              :codeField="comp.codeField"
              :textField="comp.textField"
              :popupsKey="comp.compKey"
              :is="comp.component"
              :code="formField[comp.codeField]"
              @changeCode="getComponentCode"
              @focusCode="getFocusCode"
              :isMul="comp.isMul"
              :isRequire="comp.isRequire"
              :span="comp.span || 6"
              :labelName="comp.labelName"
              :lookuptype="comp.lookuptype"
              :inputType="comp.inputType"
              :dateOptionsType="comp.dateOptionsType"
              :format="comp.format"
              :dateType="comp.dateType"
              :valueObject="curValueObject"
              :clearable="comp.clearable"
              :filterable="comp.filterable"
              :parentFileds="comp.parentFileds || ''"
            ></component>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="加载中"
      border
      stripe
      :height="tableHeight"
      highlight-current-row
      @select="selectRow"
      ref="multipleTable"
      @current-change="handleTableRowChange"
      :key="this.oneTableKeys"
    >
      <el-table-column
        type="selection"
        v-if="isShowSelect"
        :fixed="!isRowDrop"
        width="55"
        label="选择+"
        filed="chose"
        current-row-key="choose"
      />
      <el-table-column align="center" :fixed="!isRowDrop" label="序号" width="60" type="index" />

      <el-table-column
        v-for="(col, index) in tableCols.filter(o => o.hidden !== true)"
        :fixed="(dropTableCols[index].fixed || false) && !isRowDrop"
        :label="col.label"
        :key="`col_${index}`"
        :prop="dropTableCols[index].prop"
        :width="dropTableCols[index].width || null"
        :hidden="dropTableCols[index].hidden"
        :align="dropTableCols[index].align"
        :sortable="dropTableCols[index].sortable || sortable"
      >
        <template slot-scope="{row}">
          <span v-if="dropTableCols[index].isComponent === true && dropTableCols[index].comps">
            <component
              v-for="comp in dropTableCols[index].comps"
              :key="comp.compKey"
              :is="comp.component"
              :codeField="comp.codeField"
              :textField="comp.textField"
              :popupsKey="comp.compKey"
              :isShow="row[comp.compareField]===comp.compareValue"
              :code="row[comp.codeField]"
              :text="row[comp.textField]"
              @changeCode="getRowComponentCode"
              @clickEvent="comp.clickEvent"
              :comType="row.index+''"
              :isMul="comp.isMul"
              :span="dropTableCols[index].span || 24"
              :isShowLabel="comp.isShowLabel"
              :labelName="comp.labelName"
              :lookuptype="comp.lookuptype"
              :disabled="comp.disabled"
              :format="comp.format"
              :dateType="comp.dateType"
              :dateOptionsType="comp.dateOptionsType"
              :contWay="[row,comp.contWay]"
              :clearable="comp.clearable"
              :filterable="comp.filterable"
              :curTableRow="comp.rowFileds?row:null"
              :rowFileds="comp.rowFileds"
              :parentFileds="comp.parentFileds || ''"
              :mustFields="comp.mustFields || ''"
              :returnCodeField="comp.returnCodeField"
              :returnTextField="comp.returnTextField"
              :otherField="comp.otherField"
              :isColComp="true"
              :isAsync="comp.isAsync"
              :isUseDefault="comp.isUseDefault"
              :isHost="comp.isHost"
              :oFields="comp.oFields"
            ></component>
          </span>
          <span
            v-else-if="!dropTableCols[index].isComponent && dropTableCols[index].prop === 'isEnable'"
          >{{(row[dropTableCols[index].prop] === '1') ? '是' : '否' }}</span>
          <span
            v-else-if="dropTableCols[index].isFlag"
          >{{(row[dropTableCols[index].prop] === '1') ? '是' : '否' }}</span>
          <span v-else>{{ row[dropTableCols[index].prop] }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      prev-text="上一页"
      next-text="下一页"
      layout="prev, pager, next, sizes, ->, total"
      ref="paginationHeight"
      :total="pageTotal"
      :current-page.sync="listQuery.pageIndex"
      style="margin-bottom:10px"
    ></el-pagination>
    <div v-show="tableComponents.filter(o => o.type === 'popupsInput').length > 0">
      <component
        v-for="comp in tableComponents.filter(o => o.type === 'popupsInput')"
        :key="comp.popups.key"
        :codeField="comp.codeField"
        :popupsVisible="comp.popups.state"
        :comType="comp.popups.type"
        :is="comp.popups.component"
        :popupsKey="comp.compKey"
        :code="formField[comp.codeField]"
        @changeCode="getComponentCode"
        :valueObject="curValueObject"
      ></component>
    </div>
  </section>
</template>
<script>
import { oneTableTemplateMixins } from "@/components/mixins/oneTableTemplateMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { contsMixins } from "@/components/mixins/contsMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import { promised, Promise } from "q";

export default {
  props: {
    dyBrandList: {
      type: Array,
      default: function() {
        return [];
      }
    }
    // oneTableKey: {
    //   type: String,
    //   default: function() {
    //     return "";
    //   }
    // }
  },
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableTemplateMixins, valueObjectMixins, contsMixins],
  data() {
    return {
      //品牌列表
      brandList: this.dyBrandList,
      oneTableKeys: "a",
      //经销商列表
      dlrList: [],
      list: [],
      //扣款列表
      purList: [],
      listQuery: {
        pageIndex: 1,
        pageSize: 10
      },
      listLoading: false,
      array: [],
      // 网格查询API配置对象
      apiConfig: orgApis.orcDbPurcashBrandQueryListForPage,
      // 查询品牌API配置对象
      brandApiConfig: orgApis.mdmCarBrandQueryByPage,
      // 查询品牌API配置对象
      dlrApiConfig: orgApis.mdmOrgDlrQueryByPageS
    };
  },
  methods: {
    queryDlr(page, size) {
      this.listLoading = true;
      let dlrId = this.formField.dlrId;
      let isEnable = this.formField.isEnable;
      const queryObj = {
        // api配置
        apiConfig: orgApis.mdmOrgDlrQueryByPageS,
        // 需要调用的API服务配置
        apiServices: [
          {
            // 表格中台返回网格的字段
            apiQueryRow: [
              "dlrShortName",
              "dlrCode",
              "dlrId",
              "carBrandCode",
              "carBrandCn"
            ]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            dlrId: dlrId
          }
        }
      };
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          if (page) {
            // 查询完返回指定的page页数
            this.listQuery.pageIndex = page;
          }
          this.pageTotal =
            response.data[queryObj.apiConfig.ServiceCode].records;
          this.dlrList = this.$utils.changeToOneDeepArray(
            response.data[queryObj.apiConfig.ServiceCode].rows
          );
          if (this.dlrList.length === 0) {
            this.list = [];
            this.listLoading = false;
            return false;
          }
        }
        this.queryPur(this.dlrList);
      });
    },

    queryPur(arr) {
      let arrs = [];
      debugger;
      let t1 = new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
          const dlrId = arr[i].dlrId;
          const queryObj = {
            // api配置
            apiConfig: orgApis.orcDbPurcashBrandQueryListForPage,
            // 需要调用的API服务配置
            apiServices: [
              {
                // 表格中台返回网格的字段
                apiQueryRow: [
                  "carBrandCode",
                  "createdDate",
                  "createdName",
                  "creator",
                  "dlrAccountName",
                  "dlrCode",
                  "dlrFullName",
                  "dlrId",
                  "dlrShortName",
                  "dlrSort",
                  "groupCode",
                  "groupId",
                  "isEnable",
                  "lastUpdatedDate",
                  "modelName",
                  "modifier",
                  "modifyName",
                  "mycatOpTime",
                  "oemCode",
                  "oemId",
                  "orderNo",
                  "purcashBrandRelId",
                  "remark",
                  "sdpOrgId",
                  "sdpUserId",
                  "updateControlId",
                  "usedCarBrandCode"
                ]
              }
            ],
            // 条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              pageSize: 10,
              pageIndex: 1,
              // 当前中台使用的名称有dataInfo、info，具体查看API文档
              dataInfo: {
                dlrId: dlrId,
                settingStatus: this.formField.isEnable
              }
            }
          };
          // 转换了中台请求格式数据
          var paramD = this.$getParams(queryObj);
          // 调用中台API方法（可复用）
          requestGraphQL(paramD).then(response => {
            if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
              let responseData = this.$utils.changeToOneDeepArray(
                response.data[queryObj.apiConfig.ServiceCode].rows
              );
              for (let j of responseData) {
                this.purList.push(j);
                arrs.push(j);
              }
              if (i === arr.length - 1) {
                this.array = arrs;
              }
            }
            this.oneTableKeys = this.oneTableKeys + 1;
          });
        }
      });
      let t2 = new Promise((resolve, reject) => {
        this.rendringData(this.array);
      });
      Promise.all([t1, t2])
        .then(res => {
          console.log("success");
          // this.list = this.results;
          debugger;
        })
        .catch(err => {
          console.log(err);
          debugger;
        });
    },
    rendringData(responseDatas) {
      let dlrList = this.dlrList;
      let brandList = this.brandList;
      let arrss = [];
      for (let i = 0; i < dlrList.length; i++) {
        let obj = {};
        obj.dlrId = dlrList[i].dlrId;
        obj.dlrShortName = dlrList[i].dlrShortName;
        for (let j = 0; j < responseDatas.length; j++) {
          if (responseDatas[j].dlrId === dlrList[i].dlrId) {
            obj.modelName = responseDatas[j].modelName;
            for (let l = 0; l < brandList.length; l++) {
              if (responseDatas[j].carBrandCode === brandList[l].carBrandCode) {
                let key = "dlrAccountName" + l;
                obj[key] = responseDatas[j].usedCarBrandCode;
              }
            }
          }
        }
        obj.index = i;
        arrss.push(obj);
      }
      this.list = arrss;
      this.results = arrss;
      this.listLoading = false;
      this.oneTableKeys = this.oneTableKeys + 1;
    },
    // 处理每页显示改变事件
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.queryDlr();
    },
    // 当前页记录
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.queryDlr();
    },
    save() {
      const that = this;
      let saveState = true;
      let saveCount = 0;
      let msg = "";
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择需要保存的信息",
          type: "warning",
          duration: 2000
        });
        return;
      }
      let brandList = this.brandList;
      for (let i of selectData) {
        for (let l = 0; l < brandList.length; l++) {
          let key = "dlrAccountName" + l;
          if (i[key] && i[key] != "") {
            let obj = {};
            obj.carBrandCode = brandList[l].carBrandCode;
            obj.dlrId = i.dlrId;
            obj.modelName = "VE"; //i.modelName
            obj.usedCarBrandCode = i[key];
            let queryObj = {
              // 保存mutation
              type: "mutation",
              // api配置
              apiConfig: orgApis.orcDbPurcashBrandMutationSave,
              variables: {
                //当前中台使用的名称有dataInfo、info，具体查看API文档
                dataInfo: obj
              }
            };
            //转换了中台请求格式数据
            var paramD = that.$getParams(queryObj);
            // 调用中台API方法（可复用）
            requestGraphQL(paramD).then(response => {
              if (
                response.data[queryObj.apiConfig.ServiceCode].result === "1"
              ) {
                saveCount++;
              } else {
                saveState = false;
                msg = response.data[queryObj.apiConfig.ServiceCode].msg;
                that.$message({
                  message: msg,
                  type: "warning",
                  duration: 2000
                });
              }
              if (saveCount == selectData.length) {
                that.$message({
                  message: "保存成功",
                  type: "success",
                  duration: 2000
                });
                that.queryDlr(1);
              }
            });
          }
        }
      }
    },
    getRowComponentCode(
      val,
      txt,
      codeField,
      comType,
      popupsKey,
      textField,
      otherField,
      selectData
    ) {
      // switch (codeField) {
      //   default:
      //     // 普通赋值
      //     if (this.list[comType].hasOwnProperty(codeField)) {
      //       this.list[comType][codeField] = val
      //     }
      //     if (textField && this.list[comType].hasOwnProperty(textField)) {
      //       this.list[comType][textField] = txt
      //     }
      //     // 其它选中对象返回值
      //     this.setOtherField(comType, otherField, selectData)
      //     break
      // }
      this.list[comType][codeField] = val;
    },
    selectRow(c, r) {}
  },
  watch: {
    //   results: {
    //     handler: function() {
    //       if (this.dlrList.length == this.results) {
    //         this.list = this.results;
    //       }
    //     }
    //   }
  }
};
</script>
