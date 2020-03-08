/*
 * @Author: xgz 
 * @Date: 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-08-15 15:52:52
 */

<template>
    <div>
        <div class="filter-container filter-title-crm">线索导入</div>
        <div class="filter-container filter-params-crm query-params">

            <el-form>
                <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
                    <!-- <el-input style="width:229px;" v-model="input" :father='child' ref="text"></el-input> -->
                    <el-button slot="trigger" size="small" type="primary" ref="btn">选取文件</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="modeldownload">模板下载
                    </el-button>
                    <el-button slot="trigger" size="small" type="primary" ref="btn">选取文件</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传文件
                    </el-button>
                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
            </el-form>

            <!-- 自定义网格 -->
            <div class="filter-container filter-title-crm">导入结果</div>
            <el-table :data="tabledatas.tableData" highlight-current-row style="width: 100%;height:330px"
                v-loading.body="false" element-loading-text="Loading" border fit>
                <el-table-column type="index" label="序号" width="55"></el-table-column>
                <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label"
                    :prop="item.value" align="center"></el-table-column>
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="9" :page-size="tabledatas.pagesize"
                :current-page="tabledatas.pageindex"></el-pagination>
            <!-- 自定义网格结束 -->
        </div>
    </div>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
    name: "crmClueImportPage",
    data() {
        return {
            test: {
                value: "",
                input: ""
            },
            // 表头开始
            tabledatas: {
                // 操作列
                isoperat: false,
                havedistrbute: false,
                haveEdit: false,
                haveDel: false,
                colnames: [
                    { label: "错误信息", value: "errorInfo" },
                    { label: "名称", value: "customerName" },
                    { label: "留资时间", value: "leaverInfoDate" },
                    { label: "性别", value: "customerSex" },
                    { label: "联系电话", value: "phone" },
                    { label: "意向车系", value: "inteSeriesName" },
                    { label: "意向车型", value: "inteTypeName" },
                    { label: "意向级别", value: "clueLevelCode" },
                    { label: "接触方式", value: "cantactWayName" },
                    { label: "渠道大类", value: "infoChanMName" },
                    { label: "渠道小类", value: "infoChanDName" },
                    { label: "购车预算", value: "buyCarBudget" },
                    //{ label: "是否有效线索", value: "isEffectiveClue" },
                    { label: "预约到店时间", value: "maaToStoreTime" },
                    { label: "下次回访时间", value: "lastVisitTime" },
                    { label: "建单时间", value: "creater" },
                    { label: "作业类型", value: "taskType" },
                    { label: "品牌", value: "carBrand" }
                ],
                tableData: [
                    {
                        date: "2016-05-01",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1518 弄"
                    },
                    {
                        date: "2016-05-08",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1518 弄"
                    },
                    {
                        date: "2016-05-06",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1518 弄"
                    },
                    {
                        date: "2016-05-07",
                        name: "王小虎",
                        address: "上海市普陀区金沙江路 1518 弄"
                    }
                ],
                queryObj: {
                    // .后面是服务编码，.前面固定写死
                    apiConfig: crmApis.clueServerMutationDlrImport,
                    apiQueryRow: [
                        "errorInfo",
                        "customerName",
                        "leaverInfoDate",
                        "customerSex",
                        "phone",
                        "inteSeriesName",
                        "inteTypeName",
                        "clueLevelCode",
                        "cantactWayName",
                        "infoChanMName",
                        "infoChanDName",
                        "buyCarBudget",
                        "isEffectiveClue",
                        "maaToStoreTime",
                        "lastVisitTime",
                        "creater",
                        "taskType",
                        "carBrand"
                    ],
                    params: {
                        errorInfo: "",
                        customerName: "",
                        leaverInfoDate: "",
                        customerSex: "",
                        phone: "",
                        inteSeriesName: "",
                        inteTypeName: "",
                        inteTypeName: "",
                        inteSeriesName: "",
                        clueLevelCode: "",
                        cantactWayName: "",
                        infoChanMName: "",
                        infoChanDName: "",
                        infoResource: "",
                        clueDescribe: "",
                        buyCarBudget: "",
                        isEffectiveClue: "",
                        maaToStoreTime: "",
                        lastVisitTime: "",
                        creater: "",
                        taskType: "",
                        carBrand: ""
                    }
                }
            }
            // 表头结束
        };
    },
    methods: {
        query: function() {
            let that = this;
            let queryObj = {
                // api配置
                apiConfig: that.tabledatas.queryObj.apiConfig,
                // 需要调用的API服务配置
                apiServices: [
                    {
                        //表格中台返回网格的字段
                        apiQueryRow: that.tabledatas.queryObj.apiQueryRow
                    }
                ],
                //条件/实体参数（变量），根据typeParam中的定义配置
                variables: {
                    pageSize: that.tabledatas.pagesize,
                    pageIndex: that.tabledatas.pageindex,
                    //当前中台使用的名称有dataInfo、info，具体查看API文档
                    dataInfo: that.tabledatas.queryObj.params
                }
            };
            //转换了中台请求格式数据
            var paramD = that.$getParams(queryObj);
            // 调用中台API方法（可复用）
            requestGraphQL(paramD).then(response => {
                if (
                    response.data[queryObj.apiConfig.ServiceCode].result ==
                        "1" &&
                    response.data[queryObj.apiConfig.ServiceCode].rows != ""
                ) {
                }
            });
        },
        submitUpload() {
            this.$refs.upload.submit();
            query();
        },

        submitUpload() {},
        modeldownload() {},

        // handleRemove(file, fileList) {
        //     console.log(file, fileList);
        //     this.fileList = [];
        // },
        handlePreview(file) {
            console.log(file);
        },
        query: function() {
            let that = this;
            let queryObj = {
                // api配置
                apiConfig: that.tabledatas.queryObj.apiConfig,
                // 需要调用的API服务配置
                apiServices: [
                    {
                        //表格中台返回网格的字段
                        apiQueryRow: that.tabledatas.queryObj.apiQueryRow
                    }
                ],
                //条件/实体参数（变量），根据typeParam中的定义配置
                variables: {
                    pageSize: that.tabledatas.pagesize,
                    pageIndex: that.tabledatas.pageindex,
                    //当前中台使用的名称有dataInfo、info，具体查看API文档
                    dataInfo: that.tabledatas.queryObj.params
                }
            };
            //转换了中台请求格式数据
            var paramD = that.$getParams(queryObj);
            // 调用中台API方法（可复用）
            requestGraphQL(paramD).then(response => {
                if (
                    response.data[queryObj.apiConfig.ServiceCode].result ==
                        "1" &&
                    response.data[queryObj.apiConfig.ServiceCode].rows != ""
                ) {
                }
            });
        }
    }
};
</script >