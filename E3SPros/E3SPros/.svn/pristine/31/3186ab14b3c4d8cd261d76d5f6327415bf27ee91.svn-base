<template>
  <section class="opentable">
    <el-dialog :title="title" :append-to-body="true"
      :close-on-click-modal="false"
      :lock-scroll="true"
	  :visible.sync="handleVisibled" center width="1000px" @close="changecode">
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <div class="filter-container filter-button">
            <el-button size="small" @click="savaGrid">{{$t('sys.button.save')/*保存*/}}</el-button>
            <el-button size="small" @click="goback">{{$t('sys.button.cancel')/*取消*/}}</el-button>
          </div>
        </el-row>
      </div>
      <div class="filter-container filter-title"></div>
      <el-table :row-class-name="tableRowClassName" v-loading="listLoading" class="multipleTable" :data="list" element-loading-text="Loading" border fit stripe :height="tableHeight" :header-cell-style="tableHeaderRowClassName" :cell-class-name="addTdClass" ref="multipleTable" @select="select">
        <el-table-column type="selection" width="55" :label="$t('sys.content.gridChoose')+'+'/*选择*/" filed="chose" current-row-key="choose" />
        <el-table-column align="center" :label="$t('sys.content.gridIndex')/*序号*/" width="60" type='index' prop="id">
        </el-table-column>
        <el-table-column :label=" $t('org.label.carBrand')/*品牌*/" align="center" current-row-key="carBrandCn">
          <template slot-scope="scope">
            {{ scope.row.carBrandCn }}
          </template>
        </el-table-column>
        <el-table-column :label="$t('org.label.carSerise')/*车系*/" align="center" current-row-key="carSeriesCn">
          <template slot-scope="scope">
            {{ scope.row.carSeriesCn }}
          </template>
        </el-table-column>
        <el-table-column :label="$t('org.label.carSeriesCode')/*车系编码*/" align="center" current-row-key="carSeriesCode">
          <template slot-scope="scope">
            {{ scope.row.carSeriesCode }}
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20, 30]" :page-size="10" prev-text="上一页" next-text="下一页" layout="prev, pager, next, sizes, ->, total" ref="paginationHeight" :total="pageTotal" :current-page.sync="listQuery.pageIndex" style="margin-bottom:10px">
      </el-pagination>

    </el-dialog>
  </section>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { orgApis } from '@/api/graphQLApiList/org';
import { requestGraphQL } from '@/api/commonRequest';
export default {
	name: 'vecarSellSerHand',
	props: {
		handleVisible: {
			type: Boolean,
			default: function() {
				return false;
			},
		},
	},
	data() {
		return {
			title:this.$t('org.label.foundationInPinSetting'),/*基础在销设置*/
			handleVisibled: this.handleVisible,
			//表单查询数据
			formField: {
				carSeriesCode: '',
				carSeriesCn: '',
				carBrandCn: '',
			},
			//表的值
			list: null,
			listLoading: true,
			//设置网格总共的条数，查询完更改
			pageTotal: 0,
			listQuery: {
				pageIndex: 1,
				pageSize: 10,
				limit: 20,
			},
			tableHeaderRowClassName({ row, rowIndex }) {
				if (rowIndex === 0) {
					return 'background-color:rgb(239, 239, 239);height:32px;';
				}
			},
			tableHeight: 300,
		};
	},
	created() {
		this.queryTable();
	},
	watch: {
		formField(val) {
			this.carSeriesCode = this.carSeriesCode + 1;
			this.carSeriesCn = this.carSeriesCn + 1;
			this.carBrandCn = this.carBrandCn + 1;
		},
	},
	methods: {
		// 查询网格
		queryTable(page) {
			const that = this;
			that.currentRow = null;
			that.listLoading = true;
			let queryObj = {
				// api配置
				apiConfig: veApis.carSellSetMock1,
				// 需要调用的API服务配置
				apiServices: [
					{
						//表格中台返回网格的字段
						apiQueryRow: ['carBrandCn', 'carBrandCode', 'carSeriesCn'],
					},
				],
				//条件/实体参数（变量），根据typeParam中的定义配置
				variables: {
					pageSize: that.listQuery.pageSize,
					pageIndex: page || that.listQuery.pageIndex,
					//当前中台使用的名称有dataInfo、info，具体查看API文档
					dataInfo: that.formField,
				},
			};
			//转换了中台请求格式数据
			var paramD = that.$getParams(queryObj);
			// 调用中台API方法（可复用）
			requestGraphQL(paramD).then(response => {
				if (
					response.data[queryObj.apiConfig.ServiceCode].result === '1' &&
					response.data[queryObj.apiConfig.ServiceCode].rows
				) {
					if (page) {
						//查询完返回指定的page页数
						that.listQuery.pageIndex = page;
					}
					that.pageTotal = response.data[queryObj.apiConfig.ServiceCode].records;
					that.list = response.data[queryObj.apiConfig.ServiceCode].rows;
					that.listLoading = false;
				}
			});
		},
		//保存表格
		savaGrid() {
			const that = this;
			let selectData = that.$refs.multipleTable.selection;
			if (selectData.length == 0) {
				this.$message({ message: this.$t('org.message.moreOneData')/*请至少选择一条数据*/, type: 'warning' });
				return false;
			}
			let queryObj = {
				// 保存mutation
				type: 'mutation',
				// api配置
				apiConfig: orgApis.mdmCarBrandBizSave,
				//条件/实体参数（变量），根据typeParam中的定义配置
				variables: {
					//当前中台使用的名称有dataInfo、info，具体查看API文档
					dataInfo: that.brandObj,
				},
			};
			//转换了中台请求格式数据
			var paramD = that.$getParams(queryObj);
			requestGraphQL(paramD).then(response => {
				if (response.data[queryObj.apiConfig.ServiceCode].result === '1') {
					that.queryTable(1);
					that.listLoading = false;
					that.dialogFormVisible = false;

					that.$message({
						message: this.$t('sys.tips.esTip5')/*保存成功*/,
						type: 'success',
						duration: 2000,
					});
				}
      });
      	this.changecode();
		},
		//动态添加样式
		addTdClass({ row, column, rowIndex, columnIndex }) {
			//判断行和列的位置并且动态添加className
			if (rowIndex % 2 != 0 && (columnIndex == 5 || columnIndex == 7 || columnIndex == 8)) {
				return 'inputBackground';
			}
		},
		//改变页现实的条数并重新查询
		handleSizeChange(val) {
			this.listQuery.pageSize = val;
			this.textQuery();
		},
		//单击复选框事件
		select(selection, row) {
			//  console.log(selection);
			//  console.log(row)
		},
		changecode() {
      this.$emit('visible', false);
		},
		//把每一行的索引放进row
		tableRowClassName({ row, rowIndex }) {
			row.index = rowIndex;
		},
		//翻页
		handleCurrentChange(val) {
			this.listQuery.pageIndex = val;
			this.textQuery();
		},
		goback() {
			this.changecode();
		},
	},
};
</script>

<style lang="scss" scoped>
/deep/ .filter-params label {
	margin-right: 0px;
}
/deep/ .el-input__inner {
	height: 28px;
	line-height: 28px;
}
/deep/ .el-input__icon {
	line-height: 0;
}
/deep/ .el-input__prefix {
	top: 0px;
}
/deep/ .filter-params .el-col {
	margin-bottom: 0px;
}
/deep/ .el-dialog__wrapper .el-dialog {
	height: 466px;
}
/deep/ .filter-title {
	height: 0;
	border-bottom: none;
}
</style>

