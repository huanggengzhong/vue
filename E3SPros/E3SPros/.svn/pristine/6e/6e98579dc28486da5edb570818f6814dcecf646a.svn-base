<!--
* description: 模板-单网格
* author: lixb
* createdDate: 2019-09-28
-->
<template>
  <section class="filter-params-e3s">
    <div class="filter-container filter-params" v-if="tableComponents.length > 0" ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="22" class="table-col">
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :v-show="comp.isShow"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :isShow="comp.isShow || true"
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
          <div class="filter-container filter-button sqcxbtn" ref="searcheHeight">
            <el-button
              v-for="comp in tableButtons"
              :key="comp.compKey"
              :type="comp.type"
              @click="comp.clickEvent"
            >{{comp.text}}</el-button>
          </div>
        </el-col>
        <el-col :span="2" class="moreBtn" v-if="isShowMoreBtn"></el-col>
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
              :isShow="comp.isShow || true"
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
    <div class="filter-container filter-title" ref="resultTitleHeight">{{$t('sys.content.gridTitle')}}</div>
    <!-- 查询结果 -->
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
        :label="$t('sys.content.gridChoose')+'+'"
        filed="chose"
        current-row-key="choose"
      />
      <!-- 选择 -->
      <el-table-column
        align="center"
        :fixed="!isRowDrop"
        :label="$t('sys.content.gridIndex')"
        width="60"
        type="index"
      />
      <!-- 序号 -->
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
          <span
            v-else-if="!dropTableCols[index].isComponent && dropTableCols[index].prop === 'authStatsCode'"
          >{{(row[dropTableCols[index].prop] === '1') ? '已授权' : '未授权' }}</span>
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
      :prev-text="$t('sys.content.prevPage')"
      :next-text="$t('sys.content.nextPage')"
      layout="prev, pager, next, sizes, ->, total"
      ref="paginationHeight"
      :total="pageTotal"
      :current-page.sync="listQuery.pageIndex"
      style="margin-bottom:10px"
    >
    </el-pagination>
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
        :pager-count="pagerCount"
      ></component>
    </div>
  </section>
</template>
<script>
import { oneTableTemplateMixins } from '@/components/mixins/oneTableTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { contsMixins } from '@/components/mixins/contsMixins';
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableTemplateMixins, valueObjectMixins, contsMixins],


};
</script>
<style lang="scss" scoped>
/deep/.sqcxbtn {
  position: absolute;
  top: 30px;
  right: 26px;
  width: 25%;
}
</style>
