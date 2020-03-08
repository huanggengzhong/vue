 <!--
* description: 车型配置车身颜色关系弹出框（含输入框）
* author: linsy
* createdDate: 2019-08-03
-->
 <template>
  <section class="orgDlr">
    <el-dialog
      title="网店"
      :visible.sync="curPopupsVisible"
      width="1000px"
      center
      @close="sendCode"
      :append-to-body="true"
    >
      <el-row type="flex">
        <el-col
          :span="13"
          :offset="11"
        >
          <div class="filter-container filter-button">
            <el-button size="small">定位</el-button>
            <el-button size="small">勾选</el-button>
            <el-button size="small">不勾选</el-button>
            <el-button size="small">重置</el-button>
            <el-button
              size="small"
              type="primary"
              @click="sendCode"
            >确认</el-button>
            <el-button size="small">返回</el-button>
          </div>
        </el-col>
      </el-row>
      <div class="filter-container filter-title">查询条件</div>
      <div class="filter-container filter-params">
        <el-row style="margin-bottom:0">
          <el-col
            :span="22"
            style="text-align:right"
          >
            <el-col :span="7">
              <label>查找</label>
              <el-input
                v-model="input"
                placeholder="请输入内容"
                size="small"
              ></el-input>
            </el-col>
            <el-col :span="7">
              <label>定位内容</label>
              <el-input
                size="small"
                v-model="secvalue"
                placeholder="请输入定位内容"
              ></el-input>
            </el-col>
            <el-col
              :span="3"
              style="text-align:left"
            >
              <el-checkbox
                v-model="checked"
                style="margin-top:5px"
              >模糊定位</el-checkbox>
            </el-col>
          </el-col>
          <el-col :span="1">
            <el-button
              icon="el-icon-plus"
              @click="toggleParam==true? toggleParam=false:toggleParam=true"
            >更多</el-button>
          </el-col>
          <el-col
            :span="22"
            v-show="toggleParam"
            class="toggleParam"
            style="z-index:2001;background-color:white"
          >
            <emissionStandard
              labelName="排放标准"
              lookuptype="VE0280"
              :span="7"
              :isMul="isMul"
              :code="code"
            />
            <provinceQuery
              :span="7"
              :isMul="isMul"
              :code="code"
            />
            <citySelect
              :span="7"
              :isMul="isMul"
              :code="code"
            />
            <smallArea
              :span="7"
              :isMul="isMul"
              :code="code"
            />
            <bigArea
              :span="7"
              :isMul="isMul"
              :code="code"
            />
          </el-col>
        </el-row>
      </div>
      <div
        class="filter-container filter-title"
        style="margin-top:0"
      >查询结果</div>
      <div class="filter-container storeCollapse">
        <el-collapse
          accordion
          v-model="activeNames"
        >
          <el-collapse-item name="1">
            <!-- 折叠面板标题 -->
            <template
              slot="title"
              style="text-align:center;"
            >
              <el-button>全部折叠</el-button>
              <el-checkbox
                style="font-size:19px;text-align:center;margin-left:10px;width:11%;"
                :indeterminate="indeterminate"
                v-model="checkAll"
                @change="selectAll()"
                :disabled="!isMul"
              >全选</el-checkbox>
              <el-checkbox
                style="font-size:19px;text-align:center;margin-left:10px;width:11%;"
                :indeterminate="indeterminate"
              >禁选停用网店</el-checkbox>
            </template>
            <div class="deliverySetting-table">
              <div class="AreaBox">
                <!--华东一区....-->
                <div
                  class="cdistributors"
                  v-for="(item,index) in distributorsInfo"
                  :key="index"
                >
                  <div class="pArea">
                    <input
                      type="checkbox"
                      :value="item.bigArea"
                      @click="click1(item)"
                      :checked="item.selected"
                      :disabled="!isMul"
                    />
                    <span v-html="brightenKeyword(item.bigArea, secvalue)"></span>
                  </div>
                  <!--上海区/杭嘉区-->
                  <div
                    class="cArea"
                    v-for="(item1,index1) in item.area"
                    :key="index1"
                  >
                    <div class="AreaTit">
                      <input
                        type="checkbox"
                        :value="item1.partitionName"
                        @click="click2(item1)"
                        :checked="item1.selected"
                        :disabled="!isMul"
                      />
                      <span v-html="brightenKeyword(item1.partitionName, secvalue)"></span>
                    </div>
                    <!--上海/海宁-->
                    <div
                      class="ccountry"
                      v-for="(item2,index2) in item1.country"
                      :key="index2"
                    >
                      <input
                        type="checkbox"
                        :value="item2.fieldName"
                        :checked="item2.selected"
                        @click="pushArea(item2)"
                      />
                      <span v-html="brightenKeyword(item2.fieldName,secvalue)"></span>
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
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import provinceQuery from "@/components/org/ProvinceQuery/index";
import citySelect from "@/components/org/CitySelect/index";
import smallArea from "@/components/org/SmallArea/index";
import bigArea from "@/components/org/BigArea/index";
import emissionStandard from "@/components/org/LookupValue";
import { constants } from "crypto";
export default {
  name: "drlDialog",
  components: {
    provinceQuery,
    citySelect,
    smallArea,
    bigArea,
    emissionStandard
  },
  props: {
    popupsVisible: { type: Boolean, default: false },
    code: { type: String, default: "" },
    comType: { type: String, default: "" },
    codeField: { type: String, default: "" },
    popupsKey: { type: String, default: "" },
    isMul: { type: Boolean, default: true }
  },
  data() {
    return {
      activeNames: ["1"],
      input: "",
      sendData: {
        code: [],
        name: []
      },
      dlrDefault: [],
      curPopupsVisible: this.popupsVisible,
      toggleParam: false,
      checked: false,
      checkAll: false,
      secvalue: "",
      indeterminate: false,
      distributorsInfo: [],
      radio: "2"
      // isMul: false
    };
  },
  created() {
    this.fetchData();
  },
  watch: {},
  methods: {
    fetchData() {
      const queryObj = {
        // api配置
        apiConfig: orgApis.mdmOrgDlrQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            // 表格中台返回网格的字段
            apiQueryRow: [
              "dlrShortName",
              "bigAreaName",
              "bigAreaId",
              "smallAreaName",
              "smallAreaId"
            ]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 100,
          pageIndex: 1,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: this.listQuery
        }
      };
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj);
      // 调用中台API方法（可复用）

      this.$requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows
        ) {
          this.distributorsInfo =
            response.data[queryObj.apiConfig.ServiceCode].rows;

          //处理数据
          var distributorsInfoTemp = [];
          var bigArea = {};

          //第一次循环找出大区
          for (var i = 1; i < this.distributorsInfo.length; i++) {
            bigArea = {};
            var flag = true;
            for (var j = 0; j < distributorsInfoTemp.length; j++) {
              if (
                distributorsInfoTemp[j].bigArea ==
                this.distributorsInfo[i].bigAreaName
              ) {
                flag = false;
                break;
              }
            }
            if (flag) {
              bigArea["bigArea"] = this.distributorsInfo[i].bigAreaName;
              bigArea["selected"] = false;
              bigArea["indeterminate"] = false;
              bigArea["id"] = this.distributorsInfo[i].bigAreaId;
              distributorsInfoTemp.push(bigArea);
            }
          }

          //第二遍根据大区循环找出小区
          for (var i = 0; i < distributorsInfoTemp.length; i++) {
            var smallAreaList = this.distributorsInfo.filter(
              o => o.bigAreaName == distributorsInfoTemp[i].bigArea
            );
            distributorsInfoTemp[i]["area"] = [];
            var smallArea = {};
            for (var j = 0; j < smallAreaList.length; j++) {
              smallArea = {};
              smallArea["id"] = smallAreaList[j].smallAreaId;
              smallArea["partitionName"] = smallAreaList[j].smallAreaName;
              smallArea["indeterminate"] = false;
              smallArea["selected"] = false;
              var isIncludes = distributorsInfoTemp[i].area.filter(
                o => o.id == smallAreaList[j].smallAreaId
              );
              if (isIncludes.length == 0) {
                distributorsInfoTemp[i].area.push(smallArea);
              }
            }
          }

          //第三遍根据小区找出经销商
          for (var i = 0; i < distributorsInfoTemp.length; i++) {
            for (var j = 0; j < distributorsInfoTemp[i].area.length; j++) {
              var dlrList = this.distributorsInfo.filter(
                o => o.smallAreaId == distributorsInfoTemp[i].area[j].id
              );
              distributorsInfoTemp[i].area[j]["country"] = [];
              var dlr = {};
              dlrList.forEach(dlrs => {
                dlr = {};
                dlr["id"] = dlrs.dlrId;
                dlr["fieldName"] = dlrs.dlrShortName;
                dlr["selected"] = false;
                distributorsInfoTemp[i].area[j].country.push(dlr);
              });
            }
          }

          this.dlrDefault = this.code.split(",");
          this.distributorsInfo = distributorsInfoTemp;
          this.distributorsInfo.forEach(item => {
            item.area.forEach(citem => {
              citem.country.forEach(ccitem => {
                this.dlrDefault.forEach(index => {
                  if (ccitem.id == index) {
                    ccitem.selected = true;
                  }
                });
              });
            });
          });
        }
      });
    },
    getSelData() {
      this.sendData.name = [];
      this.sendCode.code = [];
      this.distributorsInfo.forEach(item => {
        item.area.forEach(citem => {
          citem.country.forEach(ccitem => {
            if (ccitem.selected) {
              this.sendData.name.push(ccitem.fieldName);
              this.sendData.code.push(ccitem.id);
            }
          });
        });
      });
    },
    sendCode() {
      // var code = "test";
      // var text = "testa'a'a'a'a'a";
      this.getSelData();
      this.$emit(
        "changeCode",
        this.sendData.code.toString(),
        this.sendData.name.toString(),
        this.codeField,
        this.comType,
        this.popupsKey
      );
    },
    selectAll() {
      this.distributorsInfo.forEach(item => {
        item.selected = this.checkAll;
        item.area.forEach(citem => {
          citem.selected = this.checkAll;
          citem.country.forEach(ccitem => {
            ccitem.selected = this.checkAll;
          });
        });
      });
    },
    click1(initem) {
      initem.selected = !initem.selected;
      initem.area.forEach(item => {
        item.selected = initem.selected;
        item.country.forEach(citem => {
          citem.selected = initem.selected;
        });
      });
      if (!initem.selected) {
        this.checkAll = false;
      }
    },
    click2(initem) {
      initem.selected = !initem.selected;
      initem.country.forEach(item => {
        item.selected = initem.selected;
      });
      if (!initem.selected) {
        this.checkAll = false;
      }
    }, // 筛选变色
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
    pushArea(item) {
      if (this.isMul) {
        item.selected = !item.selected;
      } else {
        let flag = item.selected;
        this.distributorsInfo.forEach(item => {
          item.area.forEach(citem => {
            citem.country.forEach(ccitem => {
              ccitem.selected = false;
            });
          });
        });
        item.selected = flag;
        item.selected = !item.selected;
      }
    }
  }
};
</script>

<style scoped>
.orgDlr .storeCollapse {
  padding: 0;
}
.orgDlr .AreaBox {
  max-height: 290px;
  overflow: auto;
}
.orgDlr .AreaBox::-webkit-scrollbar {
  /* display: none; */
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
</style>
