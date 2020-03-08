 <!--
* description: 专营点（含输入框）
* author: meijq
* createdDate: 2019-08-19
-->
 <template>
  <section class="orgDlr">
    <el-dialog
      id="orgDlr"
      :title="$t('org.label.dlrName')"
      :visible.sync="curPopupsVisible"
      width="1063px"
      center
      @close="sendCode"
      :append-to-body="true"
      :close-on-click-modal="false"
      :lock-scroll="true"
    >
      <!-- 经销商 -->
      <div id="orgSearch">
        <div class="filter-container filter-params">
          <el-row class="orgSel">
            <el-col :span="24">
              <lableName :curLabelName="$t('org.label.dlrName')" :isShowLabel="isShowLabel"></lableName>
              <!-- 经销商 -->
              <el-input v-model="secvalue" :placeholder="$t('org.message.pleaseInputDlrShortName')"></el-input>
            </el-col>
            <!-- <el-col :span="4">
            <el-checkbox
              v-model="checked"
              style="font-size:19px;"
            >{{$t('org.label.forSelStopUseDlr')}}</el-checkbox>
          </el-col>
            <el-col :span="1"></el-col>-->
            <!--请输入专营店简称-->
          </el-row>
          <!-- 大区 -->
          <el-row class="areaSel">
            <bigArea
              :span="8"
              :code="formCode.bigAreaCode"
              :key="componentsKeys.bigAreaCode"
              :labelName="$t('ve.label.bigarea')"
              ref="bigArea"
              @changeCode="getbigAreaValue"
            />
            <!-- 小区 -->
            <smallArea
              :span="8"
              :labelName="$t('ve.label.smallArea')"
              :code="formCode.smallAreaCode"
              :key="componentsKeys.smallAreaCode"
              ref="smallArea"
              :bigAreaId="formField.bigAreaId"
              @changeCode="smallValue"
            />
            <!-- 省份 -->
            <!-- <el-col :span="8"></el-col> -->
            <provinceQuery
              :span="8"
              :labelName="$t('ve.label.province')"
              :code="formCode.provinceCode"
              :key="componentsKeys.provinceCode"
              ref="province"
              @changeCode="provinceValue"
            />
          </el-row>
          <el-row class="areaSel">
            <!-- 城市 -->
            <citySelect
              :span="8"
              :labelName="$t('ve.label.city')"
              :code="formCode.cityCode"
              :key="componentsKeys.cityCode"
              ref="city"
              :provinceId="formField.provinceId"
              @changeCode="cityValue"
            />
            <!-- <el-col
            :span="7"
            style="text-align:right;padding-left:0px;"
          >
            </el-col>-->
            <!-- <bigArea
              :span="7"
              :code="code"
            />-->
            <emissionStandard
              :span="8"
              :labelName="$t('ve.label.emissionStandard')"
              lookuptype="VE0280"
              :code="formCode.emissionCode"
              :key="componentsKeys.emissionCode"
              :emissionStandard="formField.emissionStandard"
              @changeCode="emissionValue"
            />
            <!-- 排放标准 -->
          </el-row>
        </div>
        <el-row class="filter-container storeCollapse">
          <el-col :span="12" class="leftButtom">
            <el-button ref="fexxx" @click="collapseAll">{{collaseStr}}</el-button>
            <!-- 全部折叠-->
            <el-button @click="selectAll" v-model="checkAll">{{selectStr}}</el-button>
            <!-- 全选-->
            <el-checkbox
              :indeterminate="indeterminate"
              v-model="isAble"
            >{{$t('org.label.forSelStopUseDlr')}}</el-checkbox>
          </el-col>
          <!-- 禁选停用专营店-->
          <el-col :span="12" class="rightButtom">
            <el-button size="small" @click="fetchData">{{$t('sys.button.filter')}}</el-button>
            <!-- 过滤 -->
            <el-button size="mini" @click="checkSellct">{{$t('sys.button.checked')}}</el-button>
            <!-- 勾选 -->
            <el-button size="mini" @click="uncheckSellct">{{$t('sys.button.unchecked')}}</el-button>
            <!-- 不勾选 -->
            <el-button size="mini" @click="reset">{{$t('sys.button.reset')}}</el-button>
            <!-- 重置 -->
            <el-button size="mini" type="primary" @click="sendCode">{{$t('sys.button.confirm')}}</el-button>
            <!-- 确认 -->
            <!-- <el-button size="small" @click="curPopupsVisible = false">返回</el-button> -->
          </el-col>
        </el-row>
      </div>
      <div id="orgDlrselect">
        <template v-if="isInit === true && distributorsInfo.length === 0">
          <div>暂无数据</div>
        </template>
        <template v-for="(item, key) in distributorsInfo">
          <el-collapse v-model="activeNames" :key="`distri_${key}`">
            <el-collapse-item :name="item.id">
              <template slot="title">
                <div class="bigTitle">
                  <input
                    type="checkbox"
                    :value="item.bigArea"
                    :checked="item.selected"
                    :disabled="!isMul"
                    @click.stop="click1(item)"
                    ref="bigArea"
                  />
                  <span>{{item.bigArea}}</span>
                </div>
              </template>
              <div v-for="(area,key) in item.area" :key="`area${key}`" class="secondColl">
                <el-collapse-item :name="area.id">
                  <template slot="title">
                    <div class="areaTitle">
                      <input
                        @click.stop="click2(area)"
                        type="checkbox"
                        :value="area.partitionName"
                        :ref="item.bigArea"
                        :checked="area.selected"
                        :disabled="!isMul"
                      />
                      <span class="chickSpan">{{area.partitionName}}</span>
                    </div>
                  </template>
                  <ul>
                    <li v-for="(country,key) in area.country" :key="`coutry_${key}`">
                      <input
                        @click.stop="click3(country)"
                        :disabled="country.dlrStatus=='0'&& isAble==true"
                        type="checkbox"
                        :value="country.fieldName"
                        :checked="country.selected"
                      />
                      <div class="chickSpan" v-html="brightenKeyword(country.fieldName,secvalue)"></div>
                    </li>
                  </ul>
                </el-collapse-item>
              </div>
            </el-collapse-item>
          </el-collapse>
        </template>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import provinceQuery from "@/components/org/ProvinceQuery/index";
import citySelect from "@/components/org/CitySelect/index";
import smallArea from "@/components/org/SmallArea/index";
import bigArea from "@/components/org/BigArea/index";
import lableName from "@/components/lableName";
import LookupValue from "@/components/org/LookupValue";
import emissionStandard from "@/components/org/LookupValue";
export default {
  name: "drlDialog",
  mixins: [valueObjectMixins],
  components: {
    lableName,
    provinceQuery,
    citySelect,
    smallArea,
    bigArea,
    LookupValue,
    emissionStandard
  },
  props: {
    popupsVisible: { type: Boolean, default: false },
    code: { type: String, default: "" },
    comType: { type: String, default: "" },
    codeField: { type: String, default: "" },
    popupsKey: { type: String, default: "" },
    isMul: { type: Boolean, default: false },
    curIsShow: { type: Boolean, default: false },
    fullComponentkey: { type: String, default: "fullComponentKey" }
  },
  data() {
    return {
      isShowLabel: true,
      isAble: false,
      // 默认展开
      activeNames: [],
      // 用于全部展开
      collseName: [],
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
      isInit: false,
      distributorsInfo: [],
      dirButorsInfo: [],
      radio: "2",
      componentsKeys: {
        inputCode: "e",
        bigAreaCode: "a",
        smallAreaCode: "b",
        cityCode: "c",
        provinceCode: "d",
        emissionCode: "f"
      },
      formField: {
        carBrandCode: "1", //品牌编码
        provinceId: "", //省份ID
        cityId: "", //城市ID
        bigAreaId: "", //大区ID
        smallAreaId: "", //小区ID
        emissionStandard: "" // 排放标准
      },
      // 表单查询数据备份对象（用于重置
      backFormField: {},
      formCode: {
        provinceCode: "", //省份code
        cityCode: "", //省份code
        bigAreaCode: "", //省份code
        smallAreaCode: "", //省份code
        emissionCode: "" //排放标准code
      },
      // 表单查询数据备份对象（用于重置
      backFormCode: {},
      // 全部折叠字符串
      collaseStr: this.$t("org.label.collapseAll"),
      // 全选字符串
      selectStr: this.$t("ve.label.allCheck"),
    };
  },
  created() {
    var that = this;
    // 赋值formField
    if (that.curValueObject && typeof that.curValueObject === "object") {
      for (var key in that.formField) {
        if (that.curValueObject[key]) {
          that.formField[key] = that.curValueObject[key];
        } else {
          that.formField[key] = "";
        }
      }
    }

    // // 默认品牌
    // if (that.formField.carBrandCode === "") {
    //   that.formField.carBrandCode = that.$store.getters.orgInfo.BRAND_CODE;
    // }

    that.backFormField = JSON.parse(JSON.stringify(that.formField));
    that.backFormCode = JSON.parse(JSON.stringify(that.formCode));

    // that.fetchData();
  },
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
              "dlrId",
              "dlrShortName",
              "bigAreaName",
              "bigAreaId",
              "smallAreaName",
              "smallAreaId",
              "dlrStatus",
              "emissionStandard"
            ]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 5000,
          pageIndex: 1,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: this.formField
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
          this.isInit = true;

          //处理数据
          var distributorsInfoTemp = [];
          var bigArea = {};

          //第一次循环找出大区
          for (var i = 0; i < this.distributorsInfo.length; i++) {
            bigArea = {};
            var flag = true;
            for (var j = 0; j < distributorsInfoTemp.length; j++) {
              if (
                distributorsInfoTemp[j].id ==
                this.distributorsInfo[i].bigAreaId
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
              // if (this.activeNames.length === 0) {
              //   this.activeNames.push(this.distributorsInfo[i].bigAreaId);
              // }
              this.activeNames.push(this.distributorsInfo[i].bigAreaId);
              this.collseName.push(this.distributorsInfo[i].bigAreaId);
            }
          }

          //第二遍根据大区循环找出小区
          for (var i = 0; i < distributorsInfoTemp.length; i++) {
            var smallAreaList = this.distributorsInfo.filter(
              o => o.bigAreaId == distributorsInfoTemp[i].id
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
              if (this.collseName.indexOf(smallAreaList[j].smallAreaId) < 0) {
                this.collseName.push(smallAreaList[j].smallAreaId);
              }
              // if (this.activeNames.indexOf(smallAreaList[j].bigAreaId) > -1 && this.activeNames.length < 2) {
              //   this.activeNames.push(smallAreaList[j].smallAreaId);
              // }
              if (this.activeNames.indexOf(smallAreaList[j].smallAreaId) < 0) {
                this.activeNames.push(smallAreaList[j].smallAreaId);
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
                dlr["dlrStatus"] = dlrs.dlrStatus;
                distributorsInfoTemp[i].area[j].country.push(dlr);
              });
            }
          }
          // console.log(distributorsInfoTemp);
          // debugger
          const tmpCode = (this.code || '').replace(/\s*/g, "");
          this.dlrDefault = tmpCode.split(",");
          this.distributorsInfo = distributorsInfoTemp;
          // debugger
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
          this.dirButorsInfo = this.distributorsInfo;
        }
      });
    },
    //获取数据
    getSelData() {
      this.sendData.name = [];
      this.sendData.code = [];
      this.distributorsInfo.forEach(item => {
        item.area.forEach(citem => {
          citem.country.forEach(ccitem => {
            if (ccitem.dlrStatus == "0" && this.isAble == true) {
            } else {
              if (ccitem.selected) {
                this.sendData.name.push(ccitem.fieldName);
                this.sendData.code.push(ccitem.id);
              }
            }
          });
        });
      });
    },
    sendCode(obj) {
      if (!obj || obj.name === undefined || obj.code === undefined) {
        this.getSelData();
      } else {
        this.sendData.name = [];
        this.sendData.code = [];
        this.sendData.name.push(obj.name);
        this.sendData.code.push(obj.code);
      }
      this.$emit(
        "changeCode",
        this.sendData.code.toString(),
        this.sendData.name.toString(),
        this.codeField,
        this.comType,
        this.popupsKey
      );
    },
    // 全选点击按钮
    selectAll() {
      this.checkAll = !this.checkAll;
      if (this.checkAll) {
        this.selectStr = this.$t("org.label.noselectAll");
      } else {
        this.selectStr = this.$t("org.label.selectAll");
      }
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
    // 折叠按钮
    collapseAll() {
      if (this.activeNames.length === 0) {
        this.activeNames = this.collseName;
        this.collaseStr = this.$t("org.label.collapseAll");
      } else {
        this.activeNames = [];
        this.collaseStr = this.$t("org.label.expandAll");
      }
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
    },
    click3(items) {
      items.selected = !items.selected;
      if (items.selected) {
        this.checkMul(items, "dlr");
      }
    },
    // 检查单选/多选，（type=1:大区,2:小区,3:经销商）
    checkMul(item, type) {
      if (type === "dlr" && this.isMul === false) {
        // 单选即返回
        item.selected = true;
        this.sendCode({ code: item.id, name: item.fieldName });
      }
    },
    // 筛选变色
    brightenKeyword(val, keyword, status) {
      const Reg = new RegExp(keyword, "i");
      if (status == "1" && this.isAble == true) {
        var res = `<span class="isAbcolor">${keyword}</span>`;
      }
      if (val) {
        const res = val.replace(
          Reg,
          `<span ref="chooseDir" class="chooseDir" >${keyword}</span>`
        );
        return res;
      }
    },
    pushArea(item) {
      if (this.isMuld) {
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
    },
    //勾选
    checkSellct(e) {
      var chooseDir = document.getElementsByClassName("chooseDir");
      for (var i = 0; i < chooseDir.length; i++) {
        if (chooseDir[i].innerHTML.length > 0) {
          if (
            // chooseDir[i].parentNode.parentNode.firstChild.getAttribute(
            //   "checked"
            // ) == "false" ||
            // chooseDir[i].parentNode.parentNode.firstChild.getAttribute(
            //   "checked"
            // ) == undefined
            chooseDir[i].parentNode.parentNode.firstChild.checked == false ||
            chooseDir[i].parentNode.parentNode.firstChild.checked == undefined
          ) {
            chooseDir[i].parentNode.parentNode.firstChild.click();
            chooseDir[i].parentNode.parentNode.firstChild.setAttribute(
              "checked",
              "true"
            );
          }
        }
      }
    },
    //反勾选
    uncheckSellct(e) {
      var chooseDir = document.getElementsByClassName("chooseDir");
      for (var i = 0; i < chooseDir.length; i++) {
        if (chooseDir[i].innerHTML.length > 0) {
          if (chooseDir[i].parentNode.parentNode.firstChild.checked == true) {
            chooseDir[i].parentNode.parentNode.firstChild.click();
            chooseDir[i].parentNode.parentNode.firstChild.setAttribute(
              "checked",
              "false"
            );
          }
        }
      }
    },
    //重置
    reset() {
      this.componentsKeys = {
        inputCode: "e" + Math.random(),
        bigAreaCode: "a" + Math.random(),
        smallAreaCode: "b" + Math.random(),
        cityCode: "c" + Math.random(),
        provinceCode: "d" + Math.random(),
        emissionCode: "f" + Math.random()
      };
      // this.formField = JSON.parse(JSON.stringify(this.backFormField));
      this.$utils.deepClone(this.formField, this.backFormField);
      // this.formCode = JSON.parse(JSON.stringify(this.backFormCode));
      this.$utils.deepClone(this.formCode, this.backFormCode)
      this.secvalue = "";
    },
    //获取大区
    getbigAreaValue(val, text, cs, cd, cb) {
      this.formField.bigAreaId = val;
      this.formField.smallAreaId = "";
      this.componentsKeys.smallAreaCode =
        "smallAreaCode" + this.$utils.generateId();
    },
    //获取小区
    smallValue(val, text, cs, cd, cb) {
      this.formField.smallAreaId = val;
    },
    //获取省份
    provinceValue(val, text, cs, cd, cb) {
      this.formField.provinceId = val;
      this.formField.cityId = "";
      this.componentsKeys.cityCode = "cityCode" + this.$utils.generateId();
    },
    //获取城市
    cityValue(val, text, cs, cd, cb) {
      this.formField.cityId = val;
    },
    //获取排放标准
    emissionValue(val, text, cs, cd, cb) {
      this.formField.emissionStandard = val;
      // this.componentsKeys.emissionCode = "emissionCode" + this.$utils.generateId();
    }
  }
};
</script>

