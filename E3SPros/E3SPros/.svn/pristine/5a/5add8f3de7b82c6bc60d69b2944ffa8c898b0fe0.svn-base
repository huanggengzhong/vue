  <template>
  <el-dialog
    title="出库单打印"
    :visible.sync="printfDialogVisible"
    width="80%"
    :append-to-body="true"
    :close-on-click-modal="false"
  >
    <h4 class="tTitle">增值税发票</h4>
    <div class="tTips">
      <span>发票代码</span>
      <span>开票日期 2019-10-21</span>
      <span>发票号码</span>
    </div>
    <div>
      <div>
        <span>购货单位名称</span>
        <span>购货单位纳税人识别号</span>
        <span>密码区</span>
        <span>购货单位地址、电话</span>
        <span>购货单位开户行及账号</span>
      </div>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="加载中"
      border
      stripe
      height="130"
      header-cell-class-name="header-cell"
      highlight-current-row
      ref="multipleTable"
      :key="oneTableKey"
    >
      <!-- 选择 -->
      <el-table-column align="center" :label="$t('sys.content.gridIndex')" width="60" type="index" />
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
              :comType="row.index+''"
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
    <div>
      <span>金额</span>
      <span>税额</span>
      <span>价税合计(大写)</span>
      <span>(小写)</span>
      <span>销售单位名称</span>
      <span>销售单位纳税人识别号</span>
      <span>销售单位地址、电话</span>
      <span>销售单位开户行及账号</span>
    </div>
    <div>
      <span>备注</span>
    </div>
    <div>
      <span>收款人</span>
      <span>复核人</span>
      <span>开票人</span>
    </div>
    <div>
      <span>销售方(章)</span>
    </div>
    <span slot="footer" class="dialog-footer" style="position">
      <el-button size="small" @click="printf2()">打印</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      tableCols: this.getCols(),
      dropTableCols: this.getCols()
    };
  },
  methods: {
    getCols() {
      var cols = [];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
          {
            prop: "HUOWU",
            label: "货物或应税劳务名称",
            width: 200,
            align: "center"
          },
          {
            prop: "vin",
            label: "规格型号",
            width: null,
            align: "center"
          },
          {
            prop: "monad",
            label: "单位",
            width: 60,
            align: "center"
          },
          {
            prop: "num",
            label: "数量",
            width: 60,
            align: "center"
          },
          {
            prop: "factPrice",
            label: "单价(含税)",
            width: 100,
            align: "center"
          },
          {
            prop: "factPrice",
            label: "金额(含税)",
            width: 100,
            align: "center"
          },
          {
            prop: "taxRate",
            label: "税率",
            width: 60,
            align: "center"
          },
          // 并发控制
          {
            prop: "paid",
            label: "税额",
            width: 80,
            align: "center"
          }
        ]);
      }
      return cols;
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/.tTitle {
  color: #e70020;
  margin: 0;
  text-align: center;
  font-size: 22px;
}
/deep/.tTips {
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
}
</style>