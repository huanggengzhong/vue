<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button"  ref="searcheHeight">
      <el-button type="text" size="small" @click="downloadExcel()">保养模板文件下载</el-button>
      <el-button type="primary" size="small" @click="queryParameters()">查询</el-button>
      <el-button size="small" @click="newParameters()">新增参数</el-button>
      <el-button size="small" @click="parametersChange()">修改</el-button>    
 <el-upload 
       class="upload-demo" 
       ref="upload"
       style="width:68px;display:inline-block;"
       :file-list="fileList"
       name="excelFile"
       action=""
       :headers="uploadHeaders"
       :http-request="handleChange"
       :on-preview="handlePreview"
       :on-remove="handleRemove"
       :on-error="uploadFalse"
       :on-success="uploadSuccess"
       :auto-upload="true"
       :before-upload="beforeAvatarUpload"
       :before-remove="beforeRemove"
       :on-exceed="handleExceed"
       :on-change="handFileListChange"
       :limit="1"
       :show-file-list="false"
       list-type="text">
        <el-button size="small">导入</el-button>
       </el-upload>
      <el-button size="small" @click="parametersData()">启用/停用</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="20">
        <carBrand
          :span="6"
          :isMul="false"
          :code="maintenanceParameters.carBrandCode"
          @changeCode="changeCarBrand"
        />
        <el-col :span="6">
             <lableName curLabelName="车型"></lableName>
             <el-input v-model="maintenanceParameters.carTypeCode" placeholder="请选择" size="small" @focus="openCarType" suffix-icon="el-icon-search" clearable></el-input>
        </el-col>
        <el-col :span="6">
              <label>是否启用</label>
              <el-select v-model="maintenanceParameters.isEnable" placeholder="请选择" @change="changeIsEnable" clearable>
                <el-option label="是" value="1"></el-option>
                <el-option label="否" value="0"></el-option>
              </el-select>
            </el-col>
      </el-row>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      
      highlight-current-row
      :height="tableHeight7"
      style="width:100%;height:150px"
      @row-click="rowClick1"
      ref="multipleTable"
    >
      <el-table-column align="center" label="序号" width="60" style="padding-top: 3px;" fixed>
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <!--<el-table-column type="selection" width="40" label="选择+" />-->
      <el-table-column label="保养参数Id" v-if="false" >
        <template slot-scope="scope">{{ scope.row.maintainId }}</template>
      </el-table-column>
      <el-table-column label="车辆品牌"  align="center">
        <template slot-scope="scope">{{ scope.row.carBrandCn }}</template>
      </el-table-column>
      <el-table-column label="车辆品牌编码"  v-if="false">
        <template slot-scope="scope">{{ scope.row.carBrandCode }}</template>
      </el-table-column>
      <el-table-column label="车型" align="center">
        <template slot-scope="scope">{{ scope.row.carTypeCn }}</template>
      </el-table-column>
      <el-table-column label="车型编码" v-if="false">
        <template slot-scope="scope">{{ scope.row.carTypeCode }}</template>
      </el-table-column>
      <el-table-column label="保养类别"  align="center">
        <template slot-scope="scope">{{ scope.row.maintainType }}</template>
      </el-table-column>
      <el-table-column label="保养编码"  v-if="false">
        <template slot-scope="scope">{{ scope.row.maintainCode }}</template>
      </el-table-column>
      <el-table-column label="最小里程"  align="center">
        <template slot-scope="scope">{{ scope.row.minMile }}</template>
      </el-table-column>
      <el-table-column label="最大里程"  align="center">
        <template slot-scope="scope">{{ scope.row.maxMile }}</template>
      </el-table-column>
      <el-table-column label="最小时间" align="center">
        <template slot-scope="scope">{{ scope.row.minTime }}</template>
      </el-table-column>
      <el-table-column label="最大时间"  align="center">
        <template slot-scope="scope">{{ scope.row.maxTime }}</template>
      </el-table-column>
      <el-table-column label="车系编码" v-if="false">
        <template slot-scope="scope">{{ scope.row.carSeriesCode }}</template>
      </el-table-column>
      <el-table-column label="车系编码ID" v-if="false">
        <template slot-scope="scope">{{ scope.row.carSeriesId }}</template>
      </el-table-column>
      <el-table-column label="车系名称" v-if="false">
        <template slot-scope="scope">{{ scope.row.carSeriesCn }}</template>
      </el-table-column>
      <el-table-column label="创建人" v-if="false">
        <template slot-scope="scope">{{ scope.row.creator }}</template>
      </el-table-column>
      <el-table-column label="最后更新人" v-if="false">
        <template slot-scope="scope">{{ scope.row.modifier }}</template>
      </el-table-column>
      <el-table-column label="最后更新时间" v-if="false">
        <template slot-scope="scope">{{ scope.row.lastUpdatedDate }}</template>
      </el-table-column>
      <el-table-column label="创建时间" v-if="false">
        <template slot-scope="scope">{{ scope.row.createdDate }}</template>
      </el-table-column>
      <el-table-column label="时间戳" v-if="false">
        <template slot-scope="scope">{{ scope.row.mycatOpTime }}</template>
      </el-table-column>
      <el-table-column label="并发标志" v-if="false">
        <template slot-scope="scope">{{ scope.row.updateControlId }}</template>
      </el-table-column>
      <el-table-column label="可用标识" v-if="false">
        <template slot-scope="scope">{{ scope.row.isEnable }}</template>
      </el-table-column>
      <el-table-column label="厂商标识" v-if="false">
        <template slot-scope="scope">{{ scope.row.oemCode }}</template>
      </el-table-column>
      <el-table-column label="集团标识" v-if="false">
        <template slot-scope="scope">{{ scope.row.groupCode }}</template>
      </el-table-column>
      <el-table-column label="厂商标识ID" v-if="false">
        <template slot-scope="scope">{{ scope.row.oemId }}</template>
      </el-table-column>
      <el-table-column label="集团标识ID" v-if="false">
        <template slot-scope="scope">{{ scope.row.groupId }}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="pageTotal"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      ref="paginationHeight"
    />
    <div class="filter-container filter-button"  ref="searcheHeight">
        <!-- 费用模板的费用新增修改删除-->
        <el-button  type="primary" size="small" @click="newCost('costChangeParam')">新增费用</el-button>
        <el-button size="small" @click="costChanges()">修改</el-button>
        <el-button size="small" @click="costDelet()">删除</el-button>
    </div>
      <el-table
        v-loading="listLoading1"
        :data="list1"
        element-loading-text="Loading"
        border
        fit
        stripe
        
        highlight-current-row
        ref="multipleTable1"
        @row-click="rowClick2"
        :height="tableHeight7"
      >
        <!-- 费用列表-->
        <el-table-column align="center" label="序号" width="60">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <!--<el-table-column type="selection" width="50" label="选择+" />-->
        <el-table-column label="保养费用ID" v-if="false">
          <template slot-scope="scope">{{ scope.row.maintainLevelId }}</template>
        </el-table-column>
        <el-table-column label="保养参数ID" align="center" v-if="false">
          <template>
            {{ object.maitainId }}
          </template>
        </el-table-column>
        <el-table-column label="车辆品牌" align="center" >
          <template>
            {{ object.carBrandCn }}
          </template>
        </el-table-column>
        <el-table-column label="车辆品牌编码" align="center"  v-if="false">
          <template>
            {{ object.carBrandCode }}
          </template>
        </el-table-column>
        <el-table-column label="车型" align="center" >
          <template>
            {{ object.carTypeCn }}
          </template>
        </el-table-column>
        <el-table-column label="车型编码" align="center" v-if="false">
          <template>
            {{ object.carTypeCode }}
          </template>
        </el-table-column>
        <el-table-column label="保养类别" align="center" >
          <template>
            {{ object.maintainType }}
          </template>
        </el-table-column>
        <el-table-column label="保养编码" align="center"  v-if="false">
          <template>
            {{ object.maintainCode }}
          </template>
        </el-table-column>
        <el-table-column label="保养级别" align="center" >
          <template slot-scope="scope">{{ scope.row.dlrLevel }}</template>
        </el-table-column>
        <el-table-column label="保养费用(元)" align="center" >
          <template slot-scope="scope">{{ scope.row.maintainFee }}</template>
        </el-table-column>
        <el-table-column label="开始日期" align="center">
          <template slot-scope="scope">{{ scope.row.enableTime }}</template>
        </el-table-column>
        <el-table-column label="结束日期" align="center" >
          <template slot-scope="scope">{{ scope.row.disableDate }}</template>
        </el-table-column>
        <el-table-column label="备注" align="center" >
          <template slot-scope="scope">{{ scope.row.remark }}</template>
        </el-table-column>
        <!--<el-table-column label="车辆品牌" v-if="false">
          <template slot-scope="scope">{{ scope.row.carBrandCode }}</template>
        </el-table-column>-->
        <el-table-column label="创建人" v-if="false">
          <template slot-scope="scope">{{ scope.row.creator }}</template>
        </el-table-column>
        <el-table-column label="最后更新人" v-if="false">
          <template slot-scope="scope">{{ scope.row.modifier }}</template>
        </el-table-column>
        <el-table-column label="最后更新时间" v-if="false">
          <template slot-scope="scope">{{ scope.row.lastUpdatedDate }}</template>
        </el-table-column>
        <el-table-column label="时间戳" v-if="false">
          <template slot-scope="scope">{{ scope.row.mycatOpTime }}</template>
        </el-table-column>
        <el-table-column label="创建时间" v-if="false">
          <template slot-scope="scope">{{ scope.row.createdDate }}</template>
        </el-table-column>
        <el-table-column label="并发标志" v-if="false">
          <template slot-scope="scope">{{ scope.row.updateControlId }}</template>
        </el-table-column>
        <el-table-column label="可用标识" v-if="false">
          <template slot-scope="scope">{{ scope.row.isEnable }}</template>
        </el-table-column>
        <el-table-column label="厂商标识" v-if="false">
          <template slot-scope="scope">{{ scope.row.oemCode }}</template>
        </el-table-column>
        <el-table-column label="集团标识" v-if="false">
          <template slot-scope="scope">{{ scope.row.groupCode }}</template>
        </el-table-column>
        <el-table-column label="厂商标识ID" v-if="false">
          <template slot-scope="scope">{{ scope.row.oemId }}</template>
        </el-table-column>
        <el-table-column label="集团标识ID" v-if="false">
          <template slot-scope="scope">{{ scope.row.groupId }}</template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, sizes, ->, total"
        prev-text="上一页"
        next-text="下一页"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="pageTotal1"
         @size-change="handleSizeChange1"
         @current-change="handleCurrentChange1"
         ref="paginationHeight"
      />

    <!--模板对应保养参数修改新增 弹出框 新增/修改-->
    <el-dialog :visible.sync="dialogParamVisible" title="保养参数保存" :close-on-click-modal="false" center width="900px"  :append-to-body="true" @close="closeDialog">
      <div class="filter-container filter-params">
        <el-form
          :model="maintainParamChangesdata"
          :rules="rules"
          ref="maintainParamChangesdata"
          class="demo-maintainParamChangesdata"
          :inline-message="true"
        >
          <el-row :gutter="10">
              <carBrand
                @changeCode="getmaintainBrandCode"
                :isMul="false"
                :code="maintainParamChangesdata.carBrandCode"
                :span="8"
                curLabelName="品牌"
                size="small"
              />
              <!--保养类别-->
              <LookupValue
              :span="8"
              :isMul="false"
              :isshow="true"
              :code="maintainParamChangesdata.maintainCode"
              :lookuptype="repairTypeCode"
              :labelName="repairStatusLable"
              @changeCode="showunit"
            />
            <el-col :span="8">
             <lableName :curLabelName="carTypeCodeName"></lableName>
              <el-input v-model="maintainParamChangesdata.carTypeCn" placeholder="请选择" size="small" @focus="openCarType1"></el-input>
            </el-col>
            <el-col :span="8">
              <el-form-item >
                <lableName curLabelName="最小里程(km)" :isShowLabel="true"></lableName>
                <el-input v-model="maintainParamChangesdata.minMile" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="maxMile">
                <lableName curLabelName="最大里程(km)" :isShowLabel="true" :isRequire="true"></lableName>
                <el-input v-model="maintainParamChangesdata.maxMile" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item >
                 <lableName curLabelName="最小时间(天)" :isShowLabel="true" ></lableName>
                <el-input v-model="maintainParamChangesdata.minTime" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item  prop="maxTime">
                <lableName curLabelName="最大时间(天)" :isShowLabel="true" :isRequire="true"></lableName>
                <el-input v-model="maintainParamChangesdata.maxTime" placeholder="请输入" size="small"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item class="dialog-footer">
            <el-button type="primary" @click="mainteSave('maintainParamChangesdata')">保存</el-button>
            <el-button @click="dialogParamVisible = false">取 消</el-button>
          </el-form-item>
        </el-form>
          </div>
    </el-dialog>

    <!--模板对应保养费用修改弹出框 新增/修改-->
    <el-dialog :visible.sync="dialogCostVisible" center  width="900px" title="保养费用保存" :close-on-click-modal="false" :append-to-body="true" @close="closeDialog1">
      <div class="filter-container filter-params">
        <el-form
          :model="costChangeParam"
          :rules="rules"
          ref="costChangeParam"
          class="demo-costChangeParam"
          :inline-message="true"
        >
          <el-row :gutter="10">
            <carBrand
              :span="8"
              @changeCode="getCostBrandCode"
              :isMul="false"
              :code="costChangeParam.carBrandCode"
              :disabled="true"
            />
            <!--保养类别-->
            <LookupValue
              :span="8"
              :isMul="false"
              :isshow="true"
              :code="costChangeParam.maintainType"
              :lookuptype="repairTypeCode"
              :labelName="repairStatusLable"
              @changeCode="showunit1"
              :disabled="true"
            />
            <el-col :span="8">
              <el-form-item  prop="carTypeCode">
                 <lableName curLabelName="车型" 
                 :isShowLabel="true" 
                 :isRequire="true">
                 </lableName>
                 <el-input
                  v-model="costChangeParam.carTypeCn"
                  placeholder="请选择"
                  size="small"
                  :disabled="true"
                ></el-input>
              </el-form-item>
            </el-col>
              <LookupValue
              :span="8"
              :isMul="isMul"
              :isshow="isshow"
              :code="costChangeParam.dlrLevel"
              :lookuptype="repairTypeCode1"
              :labelName="repairStatusLable1"
              @changeCode="showunit2"
            />
            <el-col :span="8">
              <el-form-item prop="enableTime">
                 <lableName curLabelName="开始日期" 
                  :isShowLabel="true" 
                  :isRequire="true">
                 </lableName>
                <el-date-picker
                  type="date"
                  :picker-options="enablePickerOptions"
                  value-format="yyyy-MM-dd hh:mm:ss"
                  format="yyyy-MM-dd hh:mm:ss"
                  placeholder="选择日期"
                  v-model="costChangeParam.enableTime"
                  @change="changeBeginDate"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="disableDate">
                 <lableName curLabelName="结束日期"
                  :isShowLabel="true" 
                  :isRequire="true">
                 </lableName>
                <el-date-picker
                  type="date"
                  :picker-options="disablePickerOptions"
                  value-format="yyyy-MM-dd hh:mm:ss"
                  format="yyyy-MM-dd hh:mm:ss"
                  placeholder="选择日期"
                  v-model="costChangeParam.disableDate"
                  @change="changeEndDate"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item  prop="maintainFee">
                 <lableName curLabelName="保养费用" 
                  :isShowLabel="true" 
                  :isRequire="true">
                 </lableName>
                <el-input v-model="costChangeParam.maintainFee" placeholder="请输入单位:元" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="remark">
                 <lableName curLabelName="备注" 
                  :isShowLabel="true" 
                  :isRequire="true">
                 </lableName>
                <el-input
                  v-model="costChangeParam.remark"
                  type="textarea"
                  :rows="1"
                  placeholder="请选择"
                  size="small"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item class="dialog-footer">
            <el-button type="primary" @click="costSave('costChangeParam')">保存</el-button>
            <el-button @click="dialogCostVisible = false">取 消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>

    <CarTypeModal :isMul="false" ref="CarTypeModal" @changeCode="getCarTypeCode" />
    <CarTypeModal :isMul="false" ref="CarTypeModal1" @changeCode="getCarTypeCode1" />
  </div>
</template>
<script>
import { getList } from "@/api/table";

import {
  seDbMaintainQueryFindAll,
  seDbMaintainLevelQueryFindAll,
  seDbMaintainMutationSave,
  seDbMaintainMutationDelete,
  SeDbMaintainLevelMutationSave,
  seDbMaintainMutationDeleteFee
} from "@/api/se/basedata/repair/seDbMaintain";
import carBrand from "@/components/org/carBrand/carBrand";
import carBrandRadio from "@/components/org/carBrandRadio/carBrandRadio";
import smallAreaModal from "@/components/org/smallAreaModal/smallAreaModal";
import LookupValue from "@/components/org/LookupValue";
import lableName from "@/components/lableName/index";
import CarTypeModal from '@/components/se/CarTypeModal/CarTypeModal';
import { seApis } from '@/api/graphQLApiList/se';
import { the_Height} from "@/components/se/seMixins/makeHeight";
import { type } from 'os';
export default {
  mixins: [the_Height],
  components: {
    carBrand,
    carBrandRadio,
    smallAreaModal,
    LookupValue,
    lableName,
    CarTypeModal
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      uploadHeaders: {
        Authorization: this.$store.getters.token
      },
      enablePickerOptions: {
        disabledDate: time => {
          let endDateVal = this.costChangeParam.disableDate;
          if (endDateVal) {
            return time.getTime() > new Date(endDateVal).getTime();
          }
        }
      },
      disablePickerOptions: {
        disabledDate: time => {
          let beginDateVal = this.costChangeParam.enableTime;
          if (beginDateVal) {
            return time.getTime() < new Date(beginDateVal).getTime();
          }
        }
      },
      pageTotal: 0,
      pageTotal1:0,
      carTypeCodeName: "车型",
      isAdd:0,
      list: null,
      list1: null,
      listLoading: false,
      listLoading1: false,
      //ListLoading1: false,
      dialogCostVisible: false,
      dialogParamVisible: false,
      uploadData:{},
      //isMul1:true,
      isMul: false, //下拉框是否多选
      isshow: true, //是否显示值列表名称
      repairStatusLable: "保养类型",
      repairTypeCode: "SE0053", //维修估价单状态值编码
      repairStatusLable1: "等级",
      repairTypeCode1: "SE0001",
      fileList:[],
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        pageIndex1: 1,
        pageSize1: 10,
        limit: 20,
        brandCode: undefined,
        carTypeCode: undefined,
        type: undefined,
        status: ""
      },
      //保养查询的参数
      maintenanceParameters: {
        carBrandCode: "",
        carTypeCode: "",
        isEnable: "1"
      },
      //保养费用弹框参数校验
      rules: {
        dlrLevel: [
          { required: true, message: "请选择级别", trigger: "blur" },
          { min: 1, message: "级别选择不能为空", trigger: "blur" }
        ],
        enableTime: [
          {
            type: "string",
            required: true,
            message: "请选择启用开始日期",
            trigger: "change"
          }
        ],
        disableDate: [
          {
            type: "string",
            required: true,
            message: "请选择结束日期",
            trigger: "change"
          }
        ],
        maintainFee: [
          { required: true, message: "请设置保养费用", trigger: "change" }
        ],
        maxTime: [
          { required: true, message: "请设最大时间", trigger: "change" }
        ],
        maxMile: [
          { required: true, message: "请设最大里程", trigger: "change" }
        ]
      },
      //保养费用设置查询 参数
      queryFindFee: {
        oemCode: "",
        groupCode: "",
        maitainId: "",//注意这里是maitainId
        isEnable: ""
      },
      //保养参数设置保存 参数
      maintainParamChangesdata: {
        maintainId: "",
        carBrandCode: "",
        //carBrandCn: "",
        carSeriesId: "",
        //carSeriesCode: "",
        carTypeCode: "",
        carTypeCn: "",
        maintainCode: "",
        maintainType: "",
        minMile: "",
        maxMile: "",
        minTime: "",
        maxTime: "",
        isEnable: "",
        creator: "",
        modifier: "",
        mycatOpTime: "",
        lastUpdatedDate: "",
        createdDate: "",
        updateControlId: "",
        oemCode: "",
        groupCode: "",
        oemId: "",
        groupId: "",
        //dlrId: this.$store.getters.orgInfo.DLR_ID,
        //dlrCode: this.$store.getters.orgInfo.DLR_CODE,
      },
      //费用新增与保存 参数
      costChangeParam: {
        maintainLevelId: "",
        maitainId: "",//注意这里是maitainId
        dlrLevel: "",
        maintainFee: "",
        remark: "",
        enableTime: "",
        disableDate: "",
        carBrandCode: "",
        carBrandCn: "",
        creator: "",
        modifier: "",
        lastUpdatedDate: "",
        createdDate: "",
        updateControlId: "",
        isEnable: "",
        oemCode: "",
        groupCode: "",
        oemId: "",
        groupId: "",
        maintainType: "",
        carTypeCode: "",
        carTypeCn: ""
        //maintainCode:""
      },
      costDeletParam: {
        maitainId: "",//注意这里是maitainId
        maintainLevelId: "",
        isEnable: "0",//删除时为0
        updateControlId: "",
        //oemCode: "",
        //groupCode: ""
      },
      
      object: {},
      rowClickData1: {},
      rowClickData2: {},
    }
  },
  created() {},
  methods: {

     //处理文件选择器改变事件
    handleChange(param) {
      //debugger
      var url = this.uploadUrl()  // API根据不同功能url不同，请配置到对应模块配置
      var that = this
      this.$requestImport(url, param, function(response) {
        debugger
        console.info(response)
        that.uploadSuccess(response)
      })
    },
    handlePreview(file) {
      if(file.response.status) {
       this.$alert('此文件导入成功', '提示', {
          confirmButtonText: '确定',
          type:'success',
        });
      } else {
        this.$alert('此文件导入失败', '提示', {
         confirmButtonText: '确定',
        type:'warning',
        });
      }   
    },
    handleRemove(file, fileList) {},
    uploadFalse(response, file, fileList) {
      this.$alert('文件上传失败', '提示', {
        confirmButtonText: '确定',
        type:'warning',
      });
    },
    //上传前对文件进行判断
      beforeAvatarUpload(file) {
          const extension = file.name.split(".")[1] === "xls";
          const extension2 = file.name.split(".")[1] === "xlsx";
          if(!extension && !extension2){
             this.$alert('上传文件只能为Excel文件', '提示', {
               confirmButtonText: '确定',
               type:'warning',
             });
          }
          return extension || extension2;
      },
      beforeRemove(file, fileList) {
        this.$alert(`选择文件类型或大小不符，已移除 ${ file.name }，请重新选择`,'提示',{
          confirmButtonText:'确定',
          type:'warning'
        });
      },

    //上传成功
    uploadSuccess(response) {
    // debugger
        //if(response.data[apiSeDbWiPriceModel.seDbWiPriceModelMutationDlrImport.ServiceCode].rows) {
        if(response.data.result === '1' && response.data.rows != null && response.data.rows.length > 0) {
          var tempList = response.data.rows;
          var implistTemp = [];
          //导入Excel模块列头、数据是否必填
          var excelCols = [
            {name:'车辆品牌',required:true},
            {name:'车型',required:true},
            {name:'保养类别',required:true},
          
            {name:'最小里程',required:true},
            {name:'最大里程',required:true},
            {name:'最小时间',required:true},
            {name:'最大时间',required:true}
          ]
          var isErrorTemplate = false // 模版错误
          var firstRow = tempList[0]
          excelCols.forEach(col => {// 检查模版是否错误
            if(!firstRow.hasOwnProperty(col.name)) isErrorTemplate = true
          })
          if (isErrorTemplate) {
          this.$alert('Excel模版错误', '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
          this.$refs.upload.clearFiles()
          this.dlrList = []
          return
        }
        var dataNullErrorMsg = ''
        for(var i = 0; i < tempList.length; i++) { // 检查数据是否为空
          if(!this.$utils.isEmpty(dataNullErrorMsg)) break
          var row = tempList[i]
          for(var j = 0; j < excelCols.length; j++) {
            var col = excelCols[j];
            if(col.required == true && this.$utils.isEmpty(row[col.name])) {
              dataNullErrorMsg = `Excel第${i+2}行“${col.name}”不能为空`
              break
            }
          }
        }
        if (!this.$utils.isEmpty(dataNullErrorMsg)) {
          this.$alert(dataNullErrorMsg, '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
          this.$refs.upload.clearFiles()
          this.dlrList = []
          return
        }
        tempList.forEach(row => {
          var newRow = {
            carBrandCode: row.车辆品牌,
            carTypeCode: row.车型,
            maintainType: row.保养类别,
            minMile: row.最小里程,
            maxMile: row.最大里程,
            minTime: row.最小时间,
            maxTime: row.最大时间
          }
          implistTemp.push(newRow)
        })
        //debugger
        this.list = implistTemp
        this.$alert('文件导入成功', '提示', {
             confirmButtonText: '确定',
             type:'success',
           });
           
        } else {
           this.$alert('文件导入失败', '提示', {
             confirmButtonText: '确定',
             type:'warning',
            });
            this.queryParameters();
        }
        this.$refs.upload.clearFiles();
      },
    //新增费用按钮
    newCost(formName) {
      if (JSON.stringify(this.rowClickData1) == '{}') {
        this.$alert("请选择主表数据行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      //显示弹框
      this.dialogCostVisible = true;
      
      this.removeCostParam();
      
      //赋值给新增费用弹框的数据
      this.costChangeParam.maitainId = this.rowClickData1.maintainId;
      this.costChangeParam.carBrandCn = this.rowClickData1.carBrandCn;
      this.costChangeParam.carBrandCode = this.rowClickData1.carBrandCode;
      this.costChangeParam.maintainType = this.rowClickData1.maintainType;
      this.costChangeParam.maintainLevelId = this.rowClickData1.maintainLevelId;
      this.costChangeParam.carTypeCode = this.rowClickData1.carTypeCode;
      this.costChangeParam.carTypeCn = this.rowClickData1.carTypeCn;
      this.costChangeParam.isEnable = '1';
      // if(this.$refs[formName]!==undefined){
      //   this.$refs[formName].resetFields();
      // }
      // this.costChangeParam.mycatOpTime = this.rowClickData1.mycatOpTime;
      // this.costChangeParam.creator = this.rowClickData1.creator;
      // this.costChangeParam.modifier = this.rowClickData1.modifier;
      // this.costChangeParam.lastUpdatedDate = this.rowClickData1.lastUpdatedDate;
      // this.costChangeParam.createdDate = this.rowClickData1.createdDate;
      // this.costChangeParam.updateControlId = this.rowClickData1.updateControlId;
      // this.costChangeParam.oemCode = this.rowClickData1.oemCode;
      // this.costChangeParam.groupCode = this.rowClickData1.groupCode;
      // this.costChangeParam.oemId = this.rowClickData1.oemId;
      // this.costChangeParam.groupId = this.rowClickData1.groupId;
      // console.log("costChangeParam");
      // console.log(this.costChangeParam);
    },
    //费用修改按钮
    costChanges() {
      if (JSON.stringify(this.rowClickData1) == '{}') {
        this.$alert("请选择主表数据行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
    
      if (JSON.stringify(this.rowClickData2) == '{}') {
        this.$alert("请选择费用表数据行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
     
      this.dialogCostVisible = true;
      //debugger
      this.costChangeParam.maintainLevelId = this.rowClickData2.maintainLevelId;
      this.costChangeParam.maitainId = this.object.maitainId;
      this.costChangeParam.carBrandCn = this.object.carBrandCn;
      this.costChangeParam.carBrandCode = this.object.carBrandCode;
      this.costChangeParam.carTypeCode = this.object.carTypeCode;
      this.costChangeParam.carTypeCn = this.object.carTypeCn;
      this.costChangeParam.maintainType = this.object.maintainType;
      this.costChangeParam.dlrLevel = this.rowClickData2.dlrLevel;
      this.costChangeParam.maintainFee = this.rowClickData2.maintainFee;
      this.costChangeParam.remark = this.rowClickData2.remark;
      this.costChangeParam.enableTime = this.rowClickData2.enableTime;
      this.costChangeParam.disableDate = this.rowClickData2.disableDate;
      this.costChangeParam.mycatOpTime = this.rowClickData2.mycatOpTime;
      this.costChangeParam.creator = this.rowClickData2.creator;
      this.costChangeParam.modifier = this.rowClickData2.modifier;
      this.costChangeParam.lastUpdatedDate = this.rowClickData2.lastUpdatedDate;
      this.costChangeParam.createdDate = this.rowClickData2.createdDate;
      this.costChangeParam.updateControlId = this.rowClickData2.updateControlId;
      this.costChangeParam.isEnable = this.rowClickData2.isEnable;
      this.costChangeParam.oemCode = this.rowClickData2.oemCode;
      this.costChangeParam.groupCode = this.rowClickData2.groupCode;
      this.costChangeParam.oemId = this.rowClickData2.oemId;
      this.costChangeParam.groupId = this.rowClickData2.groupId;
      // console.log("this.costChangeParam");
      // console.log(this.costChangeParam);
    },
    //保养费用保存
    costSave(formName) {
      let costSaveData = {
        maintainLevelId: this.costChangeParam.maintainLevelId,
        maitainId: this.costChangeParam.maitainId,
        dlrLevel: this.costChangeParam.dlrLevel,
        maintainFee: Number(this.costChangeParam.maintainFee),
        remark: this.costChangeParam.remark,
        enableTime: this.costChangeParam.enableTime,
        disableDate: this.costChangeParam.disableDate,
        carBrandCode: this.costChangeParam.carBrandCode,
        creator: this.costChangeParam.creator,
        modifier: this.costChangeParam.modifier,
        lastUpdatedDate: this.costChangeParam.lastUpdatedDate,
        createdDate: this.costChangeParam.createdDate,
        updateControlId: this.costChangeParam.updateControlId,
        isEnable: this.costChangeParam.isEnable,
        oemCode: this.costChangeParam.oemCode,
        groupCode: this.costChangeParam.groupCode,
        oemId: this.costChangeParam.oemId,
        groupId: this.costChangeParam.groupId,
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          SeDbMaintainLevelMutationSave(costSaveData).then(response => {
            //debugger
            //this.dialogCostVisible = false;
            if(response.data[seApis.SeDbMaintainLevelMutationSave.ServiceCode].result === '1'){
                this.$message({
                  message: '成功',
                  type: 'success'
                });

                //this.dialogCostVisible = false;
            } else {
                this.$message({
                  message: '失败：' + response.data[seApis.SeDbMaintainLevelMutationSave.ServiceCode].msg,
                  type: 'warn',
                  uration: 2000
                })
                //
              }
            this.dialogCostVisible = false;
            this.listLoading1 = true;
            seDbMaintainLevelQueryFindAll(
              this.listQuery.pageSize1,
              this.listQuery.pageIndex1,
              this.queryFindFee
            ).then(response => {
              if (response.data[seApis.seDbMaintainLevelQueryFindAll.ServiceCode].result === '1') {
                this.listLoading1 = false;
                this.list1 = response.data[seApis.seDbMaintainLevelQueryFindAll.ServiceCode].rows;
              } else {
                this.$message({
                  message: '查询失败：' + response.data[seApis.seDbMaintainLevelQueryFindAll.ServiceCode].msg,
                  type: 'warning',
                  uration: 2000
                });
              }
            });
          });
          //this.rowClickData1 = {},
        }
      });
    },
    //费用删除
    costDelet() {
      if (JSON.stringify(this.rowClickData2) == '{}') {
        this.$alert("请选择费用表数据行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      this.costDeletParam.maitainId = this.rowClickData2.maintainId;
      this.costDeletParam.maintainLevelId = this.rowClickData2.maintainLevelId;
      this.costDeletParam.updateControlId = this.rowClickData2.updateControlId;
      //console.log(this.costDeletParam);
      seDbMaintainMutationDeleteFee(this.costDeletParam).then(response => {
        if (response.data[seApis.seDbMaintainMutationDeleteFee.ServiceCode].result == '1') {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            //this.dialogParamVisible = false;
            //this.queryParameters();
            this.rowClickData2 = {};
            //重新加载一次表格
            this.listLoading1 = true;
            seDbMaintainLevelQueryFindAll(
              this.listQuery.pageSize1,
              this.listQuery.pageIndex1,
              this.queryFindFee
            ).then(response => {
              if (response.data[seApis.seDbMaintainLevelQueryFindAll.ServiceCode].result === '1') {
                this.list1 = response.data[seApis.seDbMaintainLevelQueryFindAll.ServiceCode].rows
                this.listLoading1 = false;
              } else {
                  // this.sendCode('0')
                  this.$message({
                      message: '查询失败：' + response.data[seApis.seDbMaintainLevelQueryFindAll.ServiceCode].msg,
                      type: 'warning',
                      uration: 2000
                  })
              }
            });
          }else{
            this.$message({
                    message: '删除失败：' + response.data[seApis.seDbMaintainMutationDeleteFee.ServiceCode].msg,
                    type: 'warn',
                    uration: 2000
                })
            this.dialogParamVisible = false;
          }
      });
    },

    //参数查询
    queryParameters(page,dataType) {
      this.listLoading = true;
      var pageSize = dataType == 'excel' ? 99999:this.listQuery.pageSize
      var tableColumns = this.$refs.multipleTable == null?null:this.$refs.multipleTable.columns
      seDbMaintainQueryFindAll(
        pageSize,
        page ||this.listQuery.pageIndex,
        this.maintenanceParameters,
        dataType,
        '保养参数设置列表导出',
        '保养参数设置列表',
        tableColumns
      ).then(response => {
        if(dataType == 'excel'){
          this.$utils.downloadFile(response, '保养参数设置列表.xlsx')
            this.listLoading = false
        }
        else if (response.data[seApis.seDbMaintainQueryFindAll.ServiceCode].result === '1') {
          debugger
                this.list = response.data[seApis.seDbMaintainQueryFindAll.ServiceCode].rows;
                this.pageTotal = response.data[seApis.seDbMaintainQueryFindAll.ServiceCode].records;
                this.listLoading = false;
                this.list1 = null;
            } else {
                // this.sendCode('0')
                this.$message({
                    message: '查询失败：' + response.data[seApis.seDbMaintainQueryFindAll.ServiceCode].msg,
                    type: 'warn',
                    uration: 2000
                })
            }
      });
    },
    //新增参数
    newParameters() {
      //调用清除弹框里之前数据的方法
      //this.removeParameter();
      this.maintainParamChangesdata.maintainId = "";
      this.maintainParamChangesdata.carBrandCode = "";
      //this.maintainParamChangesdata.carBrandCn = "";
      this.maintainParamChangesdata.carTypeCode = "";
      this.maintainParamChangesdata.carTypeCn = "";
      this.maintainParamChangesdata.maintainCode = "";
      this.maintainParamChangesdata.maintainType = "";
      this.maintainParamChangesdata.minMile = "";
      this.maintainParamChangesdata.maxMile = "";
      this.maintainParamChangesdata.minTime = "";
      this.maintainParamChangesdata.maxTime = "";
      this.maintainParamChangesdata.isEnable = "1";
      this.maintainParamChangesdata.carSeriesId = 'COMMON'
      //this.maintainParamChangesdata.carSeriesCode = 'COMMON'
      //this.maintainParamChangesdata.dlrId = this.$store.getters.orgInfo.DLR_ID,
      //this.maintainParamChangesdata.dlrCode = this.$store.getters.orgInfo.DLR_CODE,
      this.isAdd = 1
      this.dialogParamVisible = true;
    },
    //参数修改
    parametersChange() {
      if (JSON.stringify(this.rowClickData1) == '{}') {
        this.$alert("请选择数据行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      //调用赋值方法 给弹框赋值
      this.dialogParamVisible = true;
      this.assignment();
    },
     //保养参数修改的赋值方法
    assignment() {
      //赋值给修改保养参数的数组
      this.maintainParamChangesdata.maintainId = this.rowClickData1.maintainId;
      this.maintainParamChangesdata.carBrandCode = this.rowClickData1.carBrandCode;
      //this.maintainParamChangesdata.carBrandCn = this.rowClickData1.carBrandCn;
      //this.maintainParamChangesdata.carSeriesCode = rowss[0].carSeriesCode;
      this.maintainParamChangesdata.carSeriesId = this.rowClickData1.carSeriesId;
      this.maintainParamChangesdata.carTypeCode = this.rowClickData1.carTypeCode;
      this.maintainParamChangesdata.carTypeCn = this.rowClickData1.carTypeCn;
      this.maintainParamChangesdata.maintainCode = this.rowClickData1.maintainCode;
      //this.maintainParamChangesdata.maintainType = this.rowClickData1.maintainType;
      this.maintainParamChangesdata.minMile = this.rowClickData1.minMile;
      this.maintainParamChangesdata.maxMile = this.rowClickData1.maxMile;
      this.maintainParamChangesdata.minTime = this.rowClickData1.minTime;
      this.maintainParamChangesdata.maxTime = this.rowClickData1.maxTime;
      this.maintainParamChangesdata.isEnable = this.rowClickData1.isEnable;
      this.maintainParamChangesdata.creator = this.rowClickData1.creator;
      this.maintainParamChangesdata.modifier = this.rowClickData1.modifier;
      this.maintainParamChangesdata.mycatOpTime = this.rowClickData1.mycatOpTime;
      this.maintainParamChangesdata.lastUpdatedDate = this.rowClickData1.lastUpdatedDate;
      this.maintainParamChangesdata.createdDate = this.rowClickData1.createdDate;
      this.maintainParamChangesdata.updateControlId = this.rowClickData1.updateControlId;
      this.maintainParamChangesdata.oemCode = this.rowClickData1.oemCode;
      this.maintainParamChangesdata.groupCode = this.rowClickData1.groupCode;
      this.maintainParamChangesdata.oemId = this.rowClickData1.oemId;
      this.maintainParamChangesdata.groupId = this.rowClickData1.groupId;
      this.maintainParamChangesdata.dlrId = this.rowClickData1.dlrId;
      this.maintainParamChangesdata.dlrCode = this.rowClickData1.dlrCode;
    },
    //参数修改弹框保存
    mainteSave(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let maintSaveData = {
            maintainId: this.maintainParamChangesdata.maintainId,
            carBrandCode: this.maintainParamChangesdata.carBrandCode,
            carTypeCode: this.maintainParamChangesdata.carTypeCode,
            maintainCode: this.maintainParamChangesdata.maintainCode,
            maintainType: this.maintainParamChangesdata.maintainType,
            minMile: Number(this.maintainParamChangesdata.minMile),
            maxMile: Number(this.maintainParamChangesdata.maxMile),
            minTime: Number(this.maintainParamChangesdata.minTime),
            maxTime: Number(this.maintainParamChangesdata.maxTime),
            isEnable: this.maintainParamChangesdata.isEnable,
            creator: this.maintainParamChangesdata.creator,
            modifier: this.maintainParamChangesdata.modifier,
            mycatOpTime: Number(this.maintainParamChangesdata.mycatOpTime),
            lastUpdatedDate: this.maintainParamChangesdata.lastUpdatedDate,
            createdDate: this.maintainParamChangesdata.createdDate,
            updateControlId: this.maintainParamChangesdata.updateControlId,
            oemCode: this.maintainParamChangesdata.oemCode,
            groupCode: this.maintainParamChangesdata.groupCode,
            oemId: this.maintainParamChangesdata.oemId,
            groupId: this.maintainParamChangesdata.groupId,
            carSeriesId: this.maintainParamChangesdata.carSeriesId
            //carSeriesCode: this.maintainParamChangesdata.carSeriesCode
          }
          seDbMaintainMutationSave(maintSaveData).then(
            response => {
              if (response.data[seApis.seDbMaintainMutationSave.ServiceCode].result == '1') {
                if(this.isAdd === 1) {
                  this.$alert("增加成功", "提示", {
                    confirmButtonText: "确定",
                    type: "success"
                  });
                  this.isAdd = 0
                } else {
                  this.$alert("修改成功", "提示", {
                    confirmButtonText: "确定",
                    type: "success"
                  });
                }
                //  this.dialogParamVisible = false;
                //  this.queryParameters();
              } else {
                if(this.isAdd === 1) {
                  this.$message({
                      message: '新增失败：' + response.data[seApis.seDbMaintainMutationSave.ServiceCode].msg,
                      type: 'warn',
                      uration: 2000
                  })
                    this.isAdd = 0
                } else {
                  this.$message({
                      message: '修改失败：' + response.data[seApis.seDbMaintainMutationSave.ServiceCode].msg,
                      type: 'warn',
                      uration: 2000
                  })
                }
                // this.dialogParamVisible = false;
                // this.queryParameters();
              }
              this.rowClickData1 = {};
              this.dialogParamVisible = false;
              this.queryParameters();
            }
          );
        }
      });
    },
    //参数删除
    parametersData() {
      if (JSON.stringify(this.rowClickData1) == '{}') {
        this.$alert("请选择数据行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      let deleteData = {
        maintainId: this.rowClickData1.maintainId,
        isEnable: '0',//删除时传0
        updateControlId: this.rowClickData1.updateControlId,	
      }
      seDbMaintainMutationDelete(deleteData).then(
        response => {
          if (response.data[seApis.seDbMaintainMutationDelete.ServiceCode].result == '1') {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
          } else {
            this.$message({
              message: '删除失败：' + response.data[seApis.seDbMaintainMutationDelete.ServiceCode].msg,
              type: 'warn',
              uration: 2000
            })
          }
          this.rowClickData1 = {};
          this.queryParameters();
        }
      );
    },
    
    //查询参数重置
    reset() {
      this.maintenanceParameters.carBrandCode = "";
      this.maintenanceParameters.carTypeCode = "";
      this.maintenanceParameters.isEnable = "";
    },
    //选中一行时直接加载保养费用设置查询列表
    rowClick1(row, column, event) {
      this.rowClickData1 = row
      //debugger
      //赋值查询费用的数组
      this.queryFindFee.oemCode = row.oemCode;
      this.queryFindFee.groupCode = row.groupCode;
      this.queryFindFee.maitainId = row.maintainId;
      this.queryFindFee.isEnable = row.isEnable;
      this.object = {
        maitainId: row.maintainId,
        carBrandCn: row.carBrandCn,
        carBrandCode: row.carBrandCode,
        carTypeCn: row.carTypeCn,
        carTypeCode: row.carTypeCode,
        maintainType: row.maintainType,
        maintainCode: row.maintainCode
      } 
      //请求后台
      this.listLoading1 = true;
      seDbMaintainLevelQueryFindAll(
        this.listQuery.pageSize1,
        this.listQuery.pageIndex1,
        this.queryFindFee
      ).then(response => {
        if (response.data[seApis.seDbMaintainLevelQueryFindAll.ServiceCode].result === '1') {
              this.list1 = response.data[seApis.seDbMaintainLevelQueryFindAll.ServiceCode].rows;
              this.pageTotal1 = response.data[seApis.seDbMaintainLevelQueryFindAll.ServiceCode].records;
              //console.log(this.list1);
              this.listLoading1 = false;
            } else {
                this.$message({
                    message: '查询失败：' + response.data[seApis.seDbMaintainLevelQueryFindAll.ServiceCode].msg,
                    type: 'warning',
                    uration: 2000
                })
            }
      });
    },

    rowClick2(row, column, event) {
      this.rowClickData2 = row;
      // console.log("this.rowClickData2");
      // console.log(this.rowClickData2);
    },
   
    //清除保养参数选择行的数据
    removeParameter() {
      // 把修改的参数清除
      this.maintainParamChangesdata.maintainId = "";
      this.maintainParamChangesdata.carBrandCode = "";
      //this.maintainParamChangesdata.carSeriesCode = "";
      this.maintainParamChangesdata.carSeriesId = "";
      this.maintainParamChangesdata.carTypeCode = "";
      this.maintainParamChangesdata.maintainCode = "";
      this.maintainParamChangesdata.maintainType = "";
      this.maintainParamChangesdata.minMile = "";
      this.maintainParamChangesdata.maxMile = "";
      this.maintainParamChangesdata.minTime = "";
      this.maintainParamChangesdata.maxTime = "";
      this.maintainParamChangesdata.isEnable = "";
      this.maintainParamChangesdata.creator = "";
      this.maintainParamChangesdata.modifier = "";
      this.maintainParamChangesdata.mycatOpTime = "";
      this.maintainParamChangesdata.lastUpdatedDate = "";
      this.maintainParamChangesdata.createdDate = "";
      this.maintainParamChangesdata.updateControlId = "";
      this.maintainParamChangesdata.oemCode = "";
      this.maintainParamChangesdata.groupCode = "";
      this.maintainParamChangesdata.oemId = "";
      this.maintainParamChangesdata.groupId = "";
    },
    //清除费用参数
    removeCostParam() {
      this.costChangeParam.maintainLevelId = "";
      this.costChangeParam.maintainId = "";
      this.costChangeParam.dlrLevel = "";
      this.costChangeParam.maintainFee = "";
      this.costChangeParam.remark = "";
      this.costChangeParam.enableTime = "";
      this.costChangeParam.disableDate = "";
      this.costChangeParam.carBrandCode = "";
      this.costChangeParam.mycatOpTime = "";
      this.costChangeParam.creator = "";
      this.costChangeParam.modifier = "";
      this.costChangeParam.lastUpdatedDate = "";
      this.costChangeParam.createdDate = "";
      this.costChangeParam.updateControlId = "";
      this.costChangeParam.isEnable = "";
      this.costChangeParam.oemCode = "";
      this.costChangeParam.groupCode = "";
      this.costChangeParam.oemId = "";
      this.costChangeParam.groupId = "";
      //this.costChangeParam.time = [];
    },
    changeCarBrand(val) {
      this.maintenanceParameters.carBrandCode = val;
      this.maintenanceParameters.carTypeCode = "";
    },
    changeIsEnable(val) {
      this.maintenanceParameters.isEnable = val
    },
    getCostBrandCode(val, text) {
      this.costChangeParam.carBrandCode = val;
      //this.costChangeParam.carBrandCn = text;
    },
    getmaintainBrandCode(val, text) {
      // console.log("val:" + val);
      // console.log("text:" + text);
      this.maintainParamChangesdata.carBrandCode = val;
      this.maintainParamChangesdata.carBrandCn = text;
      //this.maintainParamChangesdata.carTypeCode = "";
    },
    //保养参数弹框-获取保养类型下拉框的值
    showunit(val, text){
      this.maintainParamChangesdata.maintainCode = val;
      this.maintainParamChangesdata.maintainType = text;
    },
    //保养费用弹框-获取保养类型下拉框的值
    showunit1(val, text){
       this.costChangeParam.maintainType = text;
    },
    showunit2(val){
      this.costChangeParam.dlrLevel = val;
    },
    //文件上传前校验文件格式
    beforeUpload(file){
          const extension = file.name.split(".")[1] === "xls";
          const extension2 = file.name.split(".")[1] === "xlsx";
           if(!extension && !extension2){
             this.$alert('上传文件只能为Excel文件', '提示', {
          confirmButtonText: '确定',
          type:'warning',
        });
           }
           return extension||extension2;
    },
    handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      handFileListChange(file, fileList) {},
uploadUrl() {
     //return ('mock' + apiSeDbWiPriceModel.seDbWiPriceModelMutationDlrImport.APIUrl + '/' + 'v=' + apiSeDbWiPriceModel.seDbWiPriceModelMutationDlrImport.ServiceCode);
     //return ('dev-api' + seApis.resolve.APIUrl + '/' + 'v=' + seApis.resolve.ServiceCode);
    //  return seApis.seDbMaintainConfigMutationImport.APIUrl + config.cH + 'v=' + seApis.seDbMaintainConfigMutationImport.ServiceCode;
      return seApis.resolve.APIUrl + config.cH + 'v=' + seApis.resolve.ServiceCode;
   }, 
    // //文件上传成功时的方法
    // uploadSuccess(response,file,fileList){
    //          if(response.data.seDbMaintainMutationImport.result==1){
    //          this.$alert('文件导入成功', '提示', {
    //          confirmButtonText: '确定',
    //          type:'success',
    //        });
    //       } else{
    //       this.$alert('文件导入失败', '提示', {
    //       confirmButtonText: '确定',
    //       type:'warning',
    //     });
    //     }
    //     this.fileList = [];
    //     this.queryParameters();
    // },
    //文件上传失败时的方法
    // uploadFalse(response,file,fileList){
    //      this.$alert('文件导入失败', '提示', {
    //       confirmButtonText: '确定',
    //       type:'warning',
    //     });
    //     this.fileList = [];
    //     this.queryParameters();
    // },
    //上传文件超过限制个数时触发的方法
    // handleExceed(files, fileList){
    //   this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    // },
    downloadExcel() {
        this.queryParameters(1,'excel')
      },
   
    //当输入框获取焦点时打开车型弹框
    openCarType(){
      this.$refs.CarTypeModal.open();
      this.$refs.CarTypeModal.getBrandData(this.maintenanceParameters.carBrandCode);
    },
    //查询车型输入框 获取车型弹窗返回的数据
    getCarTypeCode(val){
        this.maintenanceParameters.carTypeCode = val[0].carTypeCode;
    },
    //保养新增修改弹窗 车型输入框获取焦点时打开车型弹框
    openCarType1(){
      this.$refs.CarTypeModal1.open();
      this.$refs.CarTypeModal1.getBrandData(this.maintainParamChangesdata.carBrandCode);
    },
    //保养新增修改弹窗 获取车型弹窗返回的数据
    getCarTypeCode1(val){//val = carSeriesCode
      this.maintainParamChangesdata.carTypeCn =  val[0].carTypeCn;
      this.maintainParamChangesdata.carTypeCode =  val[0].carTypeCode;
    },
    closeDialog(){
      this.$refs.maintainParamChangesdata.resetFields();
    },
     closeDialog1(){
      
      this.$refs.costChangeParam.resetFields();
    },
    changeBeginDate(val) {
      this.costChangeParam.enableTime = val;
    },
    changeEndDate(val) {
      this.costChangeParam.disableDate = val;
      
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.queryParameters();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.queryParameters();
    },
    handleSizeChange1(val) {
      this.listQuery.pageSize1 = val;
      this.queryFindFeeList();
    },
    handleCurrentChange1(val) {
      this.listQuery.pageIndex1 = val;
      this.queryFindFeeList();
    },
    queryFindFeeList(){
       seDbMaintainQueryFindFee(
            this.listQuery.pageSize1,
            this.listQuery.pageIndex1,
            this.queryFindFee
          ).then(response => {
            this.list1 = response.data.seDbMaintainQueryFindFee.rows;
            this.listLoading1 = false;
          });
    }
  }
};
</script>
