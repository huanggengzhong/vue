<!--
* description: 模板-单网格
* author: zxuan
* createdDate: 2019-09-12
* update: tfy 2019-10-16
* logs:
*
-->
<template>
  <section class="filter-params-e3s">
    <div
      id="searchFormGroup"
      v-show="toggleParam"
      class="filter-container filter-params"
      style="margin:0 0 1px 0"
      v-if="tableComponents.length > 0"
      ref="conHeight"
    >
      <el-row :gutter="24">
        <el-col :span="24">
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
    <div
      class="filter-container filter-button"
      style="background-color:white"
      ref="searcheHeight"
    >
      <el-row style="padding: 5px 20px;">
        <el-button
          style="float:left"
          v-for="comp in tableButtons"
          :icon="getIcon(comp)"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
        <el-col
          v-show="toggleParam"
          style="width: 30%;float: right;max-width: 400px;"
        >
          <el-col
            :span="2"
            class="moreBtn"
            style="width: 65%"
            v-if="isShowMoreBtn"
          >
            <el-button
              style="float:right;margin-left:10px;"
              v-for="comp in tableButton1"
              :icon="comp.icon"
              :key="comp.compKey"
              :type="comp.type"
              @click="comp.clickEvent"
            >{{comp.text}}</el-button>
          </el-col>
          <el-button
            style="float:right;width:90px"
            icon="el-icon-caret-top"
            @click="changeToggleParam"
            class
          >收起</el-button>
        </el-col>
        <el-col
          v-show="!toggleParam"
          style="width:90px;float:right;"
        >
          <el-col
            :span="2"
            class="moreBtn"
            style="float:right"
            v-if="isShowMoreBtn"
          >
            <el-button
              style="float:right;width:90px"
              icon="el-icon-caret-bottom"
              @click="changeToggleParam"
              class
            >高级搜索</el-button>
          </el-col>
        </el-col>
        <el-col
          v-show="!toggleParam"
          style="width:400px;float:right;"
        >
          <el-input
            class="crm-common-search"
            style="width:300px;border-right: 0;float:left;
  margin:1px"
            v-model="searchValue"
            :placeholder="searchField"
            size="small"
          ></el-input>
          <el-button
            style="padding: 0;
    margin: 0;
    border-left: 0px;
    float:left;
    height: 29px;
    margin: 1px 0 1px -5px;
    border-radius: 0;"
            icon="el-icon-search"
            @click="queryTable(1)"
            class="el-button--primary"
          >搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <!-- <div
      class="filter-container filter-title"
      ref="resultTitleHeight"
    >查询结果</div>-->
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="加载中"
      border
      stripe
      :height="tableHeight"
      header-cell-class-name="header-cell"
      highlight-current-row
      ref="multipleTable"
      @current-change="handleTableRowChange"
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
      <el-table-column
        align="center"
        :fixed="!isRowDrop"
        label="序号"
        width="60"
        type="index"
      />

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
              :format="comp.format"
              :dateType="comp.dateType"
              :dateOptionsType="comp.dateOptionsType"
              :contWay="[row,comp.contWay]"
              :clearable="comp.clearable"
              :filterable="comp.filterable"
              :curTableRow="comp.rowFileds?row:null"
              :rowFileds="comp.rowFileds"
            ></component>
          </span>
          <!-- <span
            v-else-if="!dropTableCols[index].isComponent && dropTableCols[index].prop === 'isEnable'"
          >{{(row[dropTableCols[index].prop] === '1') ? '是' : '否' }}</span>-->
          <span v-else>{{ row[dropTableCols[index].prop] }}</span>
          <span v-if="!dropTableCols[index].isComponent && dropTableCols[index].prop === ''">
            <i
              :class="col.className"
              :title="col.iconTitle"
              :style="{color:col.iconColor,fontSize:'20px'}"
            ></i>
          </span>
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
import { oneTableTemplateMixins } from "@/components/mixins/oneTableTemplateMixinsCrm";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { contsMixins } from "@/components/mixins/contsMixins";
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableTemplateMixins, valueObjectMixins, contsMixins],
  props: {
    dynamicSearchField: { type: String, default: "" }, //placerholder
    dynamicSearchValue: { type: String, default: "" } //高级搜索模糊查询值
  },
  watch: {
    searchValue(value) {
      this.$parent.formField.searchValue = value;
    }
    // tableHeight(){

    // }
  },
  data() {
    return {
      searchField: this.dynamicSearchField,
      searchValue: this.dynamicSearchValue,
      tableButton1: [
        {
          compKey: "btnKey10000",
          type: "",
          icon: "el-icon-search",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: "查询"
        },
        {
          compKey: "btnKey10001",
          type: "",
          size: "small",
          icon: "el-icon-refresh",
          clickEvent: () => this.reset(),
          text: "重置"
        }
      ]
    };
  },
  methods: {
    getIcon(comp) {
      var text = comp.text;
      if (text.indexOf("新增") != -1) {
        comp.type = "";
        return "el-icon-circle-plus";
      }
      if (text.indexOf("导出") != -1) {
        comp.type = "";
        return "el-icon-sold-out";
      }
      if (text.indexOf("导入") != -1) {
        comp.type = "";
        return "el-icon-goods";
      }
    }
  }
};
</script>
<style>
.crm-common-search .el-input__inner {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
</style>
