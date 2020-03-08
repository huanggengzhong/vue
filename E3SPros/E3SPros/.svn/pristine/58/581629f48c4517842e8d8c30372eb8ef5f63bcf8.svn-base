<!--
* description: 模板-单网格
* author: luojx
* createdDate: 2019-07-31
* logs:
* 2019-08-01 加入模板混入对象 luojx
-->
<template>
  <section>
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

    <div
      class="filter-container filter-title"
      ref="conTitleHeight"
    >查询条件</div>
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
            :dateTime="comp.dateTime"
            :codeTime="formField[comp.dateTime]"
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
              :dateOptionsType="comp.dateOptionsType"
              :dateTime="comp.dateTime"
              :codeTime="formField[comp.dateTime]"
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
      :row-class-name="tableRowClassName"
      v-loading="listLoading"
      :data="list"
      element-loading-text="加载中"
      border
      stripe
      :height="tableHeight"
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      ref="multipleTable"
      @current-change="handleTableRowChange"
    >
      <el-table-column
        type="selection"
        v-if="isShowSelect"
        fixed
        width="55"
        label="选择+"
        filed="chose"
        current-row-key="choose"
      />
      <el-table-column
        align="center"
        fixed
        label="序号"
        width="60"
        type='index'
      />

      <el-table-column
        v-for="col in tableCols.filter(o => o.hidden !== true)"
        :label="col.label"
        :key="col.prop"
        :prop="col.prop"
        :width="col.width"
        :hidden="col.hidden"
        :align="col.align"
      >
        <template slot-scope="{row}">
          <component
            v-for="comp in col.comps"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="row[comp.codeField]"
            @changeCode="getRowComponentCode"
            @clickEvent="comp.clickEvent"
            :comType="row.index+''"
            :isMul="comp.isMul"
            :span="col.span || 24"
            :isShowLabel="comp.isShowLabel"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
          {{(!col.isComponent) ? (col.prop === 'isEnable') ? (row[col.prop] === '1') ? '是' : '否' : row[col.prop] : ''}}
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
    >
    </el-pagination>

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
    ></component>
  </section>
</template>
<script>
import { oneTableTemplateMixins } from '@/components/mixins/oneTableTemplateMixins';
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableTemplateMixins]
};
</script>
