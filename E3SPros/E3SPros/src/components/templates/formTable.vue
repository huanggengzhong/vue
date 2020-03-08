<!--
* description: 网格表单联动模板
* author: wangcx
* createdDate: 2019-09-12
* logs:
-->
<template>
  <div
    id="formTable"
    class="app-container app-container-table"
  >

    <el-main
      class="el-left"
      ref="formTable"
    >
      <div
        class="filter-container filter-button"
        ref="searcheHeight"
      >
        <el-button
          v-for="comp in tableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
      </div>
      <!-- <div class="filter-container filter-title" ref="conTitleHeight">查询条件</div> -->
      <div
        class="filter-container filter-params"
        ref="conHeight"
      >
        <el-row :gutter="24">
          <el-col
            :span="22"
            class="table-col"
          >
            <component
              v-for="comp in tableComponents.filter(o => o.isMust === true)"
              :ref="comp.isRequire ?  comp.isRequire+ comp.compKey : comp.compKey"
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
              :clearable="comp.clearable"
              :filterable="comp.filterable"
              :parentFileds="comp.parentFileds || ''"
              :returnCodeField="comp.returnCodeField"
              :returnTextField="comp.returnTextField"
            ></component>
          </el-col>
          <el-col
            :span="2"
            class="moreBtn"
            v-if="isShowMoreBtn"
          >
            <el-button
              :icon="moreBtnIcon"
              @click="changeToggleParam"
              class="moreParam"
            >更多</el-button>
          </el-col>
          <el-col
            :span="22"
            v-show="toggleParam"
            class="toggleParam"
          >
            <el-row>
              <component
                v-for="comp in tableComponents.filter(o => o.isMust === false)"
                :ref="comp.isRequire ?  comp.isRequire+ comp.compKey : comp.compKey"
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
                :clearable="comp.clearable"
                :filterable="comp.filterable"
                :parentFileds="comp.parentFileds || ''"
                :returnCodeField="comp.returnCodeField"
                :returnTextField="comp.returnTextField"
              ></component>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div
        class="filter-container filter-title"
        ref="resultTitleHeight"
      >查询结果</div>
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
          :show-overflow-tooltip="true"
          :hidden="dropTableCols[index].hidden"
          :align="dropTableCols[index].align"
        >
          <template slot-scope="{row}">
            <span v-if="dropTableCols[index].isComponent === true && dropTableCols[index].comps">
              <component
                v-for="comp in dropTableCols[index].comps"
                :key="comp.compKey"
                :codeField="comp.codeField"
                :textField="comp.textField"
                :popupsKey="comp.compKey"
                :isShow="row[comp.compareField]===comp.compareValue"
                :is="comp.component"
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
                :clearable="comp.clearable"
                :filterable="comp.filterable"
                :parentFileds="comp.parentFileds || ''"
                :returnCodeField="comp.returnCodeField"
                :returnTextField="comp.returnTextField"
                :isColComp="true"
                :options="comp.options"
              ></component>
            </span>
            <span v-else-if="!dropTableCols[index].isComponent && dropTableCols[index].prop === 'isEnable'">{{(row[dropTableCols[index].prop] === '1') ? '是' : '否' }}</span>
            <span v-else-if="!dropTableCols[index].isComponent && dropTableCols[index].isDefalus === true">{{(row[dropTableCols[index].prop] === '1') ? '是' : '否' }}</span>

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
      ></el-pagination>
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
    </el-main>
    <el-main class="el-slide">
      <div
        class="filter-container filter-button"
        ref="searcheHeight"
      >
        <el-button
          v-for="comp in formtableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
      </div>
      <!-- <div
        class="filter-container filter-title"
        ref="conTitleHeight"
      >{{title}}</div> -->
      <div
        class="filter-container filter-params"
        ref="conHeight"
      >
        <el-row :gutter="24">
          <el-col
            :span="24"
            class="table-col"
          >
            <component
              v-for="comp in formObject.tableComponents.filter(o => o.isMust === true)"
              :ref="comp.isRequire ? 'formTable'+comp.isRequire+ comp.compKey : comp.compKey"
              :validrule="comp.validrule"
              :key="comp.compKey"
              :codeField="comp.codeField"
              :textField="formObject.formField[comp.textField]"
              :popupsKey="comp.compKey"
              :is="comp.component"
              :code="formObject.formField[comp.codeField]"
              @changeCode="getRightComponentCode"
              @focusCode="getRightFocusCode"
              :isMul="comp.isMul"
              :text="formObject.formField[comp.textField]"
              :isRequire="comp.isRequire"
              :span="comp.span || 6"
              :labelName="comp.labelName"
              :lookuptype="comp.lookuptype"
              :dateOptionsType="comp.dateOptionsType"
              :format="comp.format"
              :dateType="comp.dateType"
              :valueObject="curValueObject"
              :clearable="comp.clearable"
              :filterable="comp.filterable"
              :parentFileds="comp.parentFileds || ''"
              :returnCodeField="comp.returnCodeField"
              :returnTextField="comp.returnTextField"
            ></component>
          </el-col>
          <el-col
            :span="2"
            class="moreBtn"
            v-if="isShowMoreBtn"
          >
            <el-button
              :icon="moreBtnIcon"
              @click="changeToggleParam"
              class="moreParam"
            >更多</el-button>
          </el-col>
          <el-col
            :span="22"
            v-show="toggleParam"
            class="toggleParam1"
          >
            <el-row>
              <component
                v-for="comp in formtableComponents.filter(o => o.isMust === false)"
                :ref="comp.isRequire ? 'formTable'+comp.isRequire+ comp.compKey : comp.compKey"
                :key="comp.compKey"
                :codeField="rightFormField[comp.codeField]"
                :textField="rightFormField[comp.textField]"
                :popupsKey="comp.compKey"
                :is="comp.component"
                :code="rightFormField[comp.codeField]"
                @changeCode="getRightComponentCode"
                @focusCode="getFocusCode"
                :isMul="comp.isMul"
                :text="rightFormField[comp.textField]"
                :isRequire="comp.isRequire"
                :span="comp.span || 6"
                :labelName="comp.labelName"
                :lookuptype="comp.lookuptype"
                :dateOptionsType="comp.dateOptionsType"
                :format="comp.format"
                :dateType="comp.dateType"
                :valueObject="curValueObject"
                :clearable="comp.clearable"
                :filterable="comp.filterable"
                :parentFileds="comp.parentFileds || ''"
                :returnCodeField="comp.returnCodeField"
                :returnTextField="comp.returnTextField"
                :validrule="comp.validrule"
              ></component>
            </el-row>
          </el-col>
        </el-row>
      </div>

    </el-main>
  </div>
</template>

<script>
import { tableFormTemplateMixins } from "@/components/mixins/tableFormTemplateMixins";
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { contsMixins } from "@/components/mixins/contsMixins";
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [tableFormTemplateMixins, valueObjectMixins, contsMixins]
};
</script>

