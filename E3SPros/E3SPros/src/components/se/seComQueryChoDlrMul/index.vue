 <!--
* description: 专营店
* author: ydche
* createdDate: 2019-08-07
-->
 <template>
  <section class="orgDlr">
    <el-dialog
      title="经销商选择-多选"
      :visible.sync="curPopupsVisible"
      width="900px"
      center
      :append-to-body="true"
      :close-on-click-modal="false"
      @close="close"
    >
      <div class="filter-container filter-title padding-b-10">
        查询条件
        <div style="float:right;margin-left:12px">
          <el-button size="small" @click="fetchData">查询</el-button>
          <el-button size="small" @click="sendCode">确认</el-button>
          <el-button size="small" @click="close">返回</el-button>
        </div>
      </div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="20" style="text-align:left;padding-left:54px">
            <label>专营店编码或简称</label>
            <!-- <el-input v-model="input" placeholder="请输入内容" size="small" style="width:500px"></el-input> -->
            <el-input v-model="secvalue" placeholder="请输入定位内容" style="width:220px"></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <div class="filter-container storeCollapse">
        <el-collapse accordion>
          <el-collapse-item>
            <!-- 折叠面板标题 -->
            <template slot="title" style="text-align:center;">
              <el-button>全部折叠</el-button>
              <el-checkbox
                style="font-size:19px;text-align:center;margin-left:10px;width:11%;"
                :indeterminate="indeterminate"
                v-model="checkAll"
                @change="selectAll()"
              >全选</el-checkbox>
            </template>
            <div class="deliverySetting-table">
              <div class="AreaBox">
                <!--省份....-->
                <div class="cdistributors" v-for="(item,index) in distributors" :key="index">
                  <div class="pArea">
                    <input
                      type="checkbox"
                      :value="item.provinceName"
                      @click="click1(item)"
                      :checked="item.selected"
                    />
                    <span v-html="brightenKeyword(item.provinceName, secvalue)"></span>
                  </div>
                  <!--市级-->
                  <div class="cArea" v-for="(item1,index1) in item.data" :key="index1">
                    <div class="AreaTit">
                      <input
                        type="checkbox"
                        :value="item1.cityName"
                        @click="click2(item1)"
                        :checked="item1.selected"
                      />
                      <span v-html="brightenKeyword(item1.cityName, secvalue)"></span>
                    </div>
                    <!--地区-->
                    <div class="ccountry" v-for="(item2,index2) in item1.data" :key="index2">
                      <input
                        type="checkbox"
                        @click="click3(item2)"
                        :value="item2.dlrShortName"
                        :checked="item2.selected"
                      />
                      <span v-html="brightenKeyword(item2.dlrShortName,secvalue)"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- </div> -->
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-dialog>
  </section>
</template>
<script>
// import provinceQuery from "@/components/provinceQuery/provinceQuery";
// import citySelect from "@/components/org/CitySelect/index";
// import smallArea from "@/components/org/SmallArea/index";
// import bigArea from "@/components/org/BigArea/index";
import { seComQueChoDlrApi } from "@/api/graphQLApiList/se";
import { requestGraphQL } from "@/api/commonRequest";
import { constants } from "crypto";
export default {
  components: {
    // provinceQuery,
    // citySelect,
    // smallArea,
    // bigArea,
  },
  props: {
    popupsVisible: { type: Boolean, default: false },
    code: { type: String, default: "" },
    comType: { type: String, default: "" },
    codeField: { type: String, default: "" },
    popupsKey: { type: String, default: "" }
  },
  data() {
    return {
      input: "",
      curPopupsVisible: this.popupsVisible,
      toggleParam: false,
      checked: false,
      checkAll: false,
      secvalue: "",
      indeterminate: false,
      radio: "2",
      isMul: false,
      listQuery: {
        pageSize: 1,
        pageIndex: 1,
        dataInfo: {}
      },
      distributors: [],
      list: []
    };
  },
  created() {
    //this.search();
    //this.fetchData();
  },
  computed: {},
  methods: {
    search() {
      this.fetchData(
        this.listQuery.pageSize,
        this.listQuery.pageIndex,
        this.listQuery.dataInfo
      );
      this.getDistributorsInfo();
    },

    fetchData(pageSize, pageIndex, dataInfo) {
      const that = this;
      const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfo: " +
          seComQueChoDlrApi.mdmOrgdlrQueryByPage.InputType +
          ")",
        // 请求API
        apiUrl: seComQueChoDlrApi.mdmOrgdlrQueryByPage.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: seComQueChoDlrApi.mdmOrgdlrQueryByPage.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            // 表格中台返回网格的字段
            apiQueryRow: [
              "dlrId",
              "dlrCode",
              "dlrShortName",
              "dlrFullName",
              "areaId",
              "areaName",
              "bigAreaId",
              "bigAreaName",
              "smallAreaId",
              "smallAreaName",
              "carBrandCode",
              "carBrandCn",
              "orgType",
              "orgTypeName",
              "parentDlrId",
              //'parentDlrCode',
              //'parentDlrName',
              "oemCode",
              "groupCode",
              "oemId",
              "groupId",
              "provinceId",
              "provinceName",
              "cityId",
              "cityName",
              "countyId",
              "countyName"
            ]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: pageSize,
          pageIndex: pageIndex,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: dataInfo
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        that.list =
          response.data[
            seComQueChoDlrApi.mdmOrgdlrQueryByPage.ServiceCode
          ].rows;
        for (let i of that.list) {
          i.selected = false;
        }
        that.getDistributorsInfo(that.list);
      });
    },
    getDistributorsInfo(data) {
      var province = {},
        provinceData = [];
      for (let i = 0; i < data.length; i++) {
        let ai = data[i];
        if (!province[ai.provinceId]) {
          provinceData.push({
            provinceId: ai.provinceId,
            provinceName: ai.provinceName,
            selected: false,
            data: [ai]
          });
          province[ai.provinceId] = ai;
        } else {
          for (let j = 0; j < provinceData.length; j++) {
            let dj = provinceData[j];
            if (dj.provinceId == ai.provinceId) {
              dj.data.push(ai);
              break;
            }
          }
        }
      }

      var city = {},
        cityData = [];
      for (let i = 0; i < data.length; i++) {
        let ai = data[i];
        if (!city[ai.cityId]) {
          cityData.push({
            provinceId: ai.provinceId,
            cityId: ai.cityId,
            cityName: ai.cityName,
            selected: false,
            data: [ai]
          });
          city[ai.cityId] = ai;
        } else {
          for (let j = 0; j < cityData.length; j++) {
            let dj = cityData[j];
            if (dj.cityId == ai.cityId) {
              dj.data.push(ai);
              break;
            }
          }
        }
      }
      for (let i = 0; i < provinceData.length; i++) {
        let arr = [];
        for (let j = 0; j < cityData.length; j++) {
          if (provinceData[i].provinceId === cityData[j].provinceId) {
            arr.push(cityData[j]);
          }
        }
        provinceData[i].data = arr;
      }
      this.distributors = provinceData;
    },
    sendCode() {
      console.log("this.distributors");
      console.log(this.distributors);
      let data = [];
      this.distributors.forEach(item => {
        item.data.forEach(citem => {
          citem.data.forEach(ccitem => {
            if (ccitem.selected) {
              data.push(ccitem);
            }
          });
        });
      });
      console.log("data");
      console.log(data);
      this.$emit(
        "changeCode",
        data,
        this.codeField,
        this.comType,
        this.popupsKey
      );
      this.curPopupsVisible = false;
    },
    selectAll() {
      this.distributors.forEach(item => {
        item.selected = this.checkAll;
        item.data.forEach(citem => {
          citem.selected = this.checkAll;
          citem.data.forEach(ccitem => {
            ccitem.selected = this.checkAll;
          });
        });
      });
    },
    click1(initem) {
      initem.selected = !initem.selected;
      initem.data.forEach(item => {
        item.selected = initem.selected;
        item.data.forEach(citem => {
          citem.selected = initem.selected;
        });
      });
      if (!initem.selected) {
        this.checkAll = false;
      }
    },
    click2(initem) {
      initem.selected = !initem.selected;
      initem.data.forEach(item => {
        item.selected = initem.selected;
      });
      if (!initem.selected) {
        this.checkAll = false;
      }
    },
    click3(initem) {
      initem.selected = !initem.selected;
      if (!initem.selected) {
        this.checkAll = false;
      }
    },
    // 筛选变色
    brightenKeyword(val, keyword) {
      const Reg = new RegExp(keyword, "i");
      if (val) {
        const res = val.replace(
          Reg,
          `<span style="color: red;">${keyword}</span>`
        );
        return res;
      }
    },
    open() {
      this.curPopupsVisible = true;
    },
    close() {
      this.curPopupsVisible = false;
    }
  }
};
</script>

<style scoped>
.orgDlr .el-col {
  text-align: right;
}
.orgDlr .filter-title {
  padding-top: 5px;
  height: auto;
}
.orgDlr .el-row {
  margin-bottom: 10px;
  padding-right: 10px;
}
.orgDlr .storeCollapse {
  padding: 0;
}
.orgDlr .AreaBox {
  max-height: 290px;
  overflow: auto;
}
.orgDlr .AreaBox::-webkit-scrollbar {
 
}
.AreaBox .cdistributors .pArea {
  background-color: #b1cbfc;
}
.cdistributors .AreaTit {
  background-color: #eaeaea;
}
.cdistributors .ccountry {
  display: inline-block;
  width: 145px;
  height: 27px;
  line-height: 27px;
  margin-left: 17px;
}
.orgDlr .AreaBox input[type="checkbox"] {
  vertical-align: middle;
}
.padding-b-10 {
  padding-bottom: 10px;
}
</style>
