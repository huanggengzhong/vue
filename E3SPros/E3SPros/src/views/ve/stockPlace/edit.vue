<!--
* description: 储位维护管理-新增、修改弹窗
* author: luojx
* createdDate: 2019-08-04
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <el-row
          :gutter="26"
          ref="vailComponentList"
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
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :isMul="comp.isMul"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          v-for="comp in tableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veStockPlaceSave,
      carPlaceNameTemp: "",
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.saveStockPlace(),
          text: this.$t("sys.button.save") /*保存*/
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //重置
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode("0"),
          text: this.$t("sys.button.cancel") //取消
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "仓库",
          isRequire: true,
          codeField: "carHouseCode",
          component: () =>
            import("@/components/ve/wareHouseMulti/wareHouseMulti"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t("ve.label.CarAreaName") /*储区名称*/,
          codeField: "carAreaCode",
          isRequire: true,
          isMul: false,
          component: () => import("@/components/ve/veStockArea"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("ve.label.Manger") /*管理人*/,
          codeField: "carPlaceManager",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t("ve.label.situation") /*状态*/,
          codeField: "isEnable",
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("ve.label.CarPlaceName") /*储位名称*/,
          codeField: "carPlaceName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "储位起号",
          isRequire: true,
          codeField: "carPlaceStart",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey7",
          isRequire: true,
          labelName: "储位止号",
          codeField: "carPlaceEnd",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "修改储位信息",
        add: "添加储位信息"
      },
      //发送记录条数
      count: 0,
      isBothNoNull: false,
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carHouseCode: "",
        carStockHouseId:'',
        carAreaName: "",
        carAreaCode: "",
        carStockAreaId: "",
        carPlaceManager: "",
        isEnable: "",
        drlId: "",
        carPlaceName: "",
        carPlaceStart: "",
        carPlaceEnd: "",
        updateControlId: ""
      },
      wareHouseInfo: [],
      wareAreaInfo: [],
      carBrandCode: this.$store.getters.orgInfo.BRAND_CODE || "1"
    };
  },
  created() {
    this.fetchHouseData();
    this.fetchAreaData();
  },
  methods: {
    getHouseName() {
      for (let i of this.wareHouseInfo) {
        if (i.carHouseCode === this.formField.carHouseCode) {
          this.formField.carHouseName = i.carHouseName;
          if (this.popupsState === "add") {
            this.formField.drlId = i.dlrId;
          }
        }
      }
    },
    getAreaName() {
      for (let i of this.wareAreaInfo) {
        if (i.carAreaCode === this.formField.carAreaCode) {
          this.formField.carAreaName = i.carAreaName;
        }
      }
    },
    //查询仓库信息
    fetchHouseData() {
      let obj = {};
      obj.carBrandCode = this.carBrandCode;
      const queryObj = {
        // api配置
        apiConfig: veApis.veDbCarStockHouseQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            // 表格中台返回网格的字段
            apiQueryRow: [
              "carStockHouseId",
              "dlrId",
              "carHouseName",
              "carHouseCode",
              "carStoreClass"
            ]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 100,
          pageIndex: 1,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: obj
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
          this.wareHouseInfo =
            response.data[queryObj.apiConfig.ServiceCode].rows;
        }
      });
    },
    fetchAreaData() {
      let obj = {};
      obj.carHouseCode = this.formField.carHouseCode;
      obj.carBrandCode = this.carBrandCode;
      const queryObj = {
        // api配置
        apiConfig: veApis.veStockArea,
        // 需要调用的API服务配置
        apiServices: [
          {
            // 表格中台返回网格的字段
            apiQueryRow: [
              "dlrId",
              "carHouseCode",
              "carBrandCode",
              "carStockHouseId",
              "carStockAreaId",
              "carHouseName",
              "carAreaCode",
              "carAreaName",
              "carAreaManager",
              "isEnable",
              "remark"
            ]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 100,
          pageIndex: 1,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: obj
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
          this.wareAreaInfo =
            response.data[queryObj.apiConfig.ServiceCode].rows;
        }
      });
    },
    //保存
    saveStockPlace() {
      console.info(this.$refs)
      debugger
      for(var k in this.$refs["truecompKey2"][0].optionDatas){
        if(this.$refs["truecompKey2"][0].optionDatas[k].carAreaCode === this.formField.carAreaCode){
          this.formField.carAreaName = this.$refs["truecompKey2"][0].optionDatas[k].carAreaName
          this.formField.carStockAreaId = this.$refs["truecompKey2"][0].optionDatas[k].carStockAreaId
          break
        }
      }
      for(var y in this.$refs["truecompKey1"][0].optionDatas){
          if(this.$refs["truecompKey1"][0].optionDatas[y].carStockHouseId === this.formField.carHouseCode){
            this.formField.carStockHouseId = this.$refs["truecompKey1"][0].optionDatas[y].carStockHouseId
            this.formField.carHouseCode = this.$refs["truecompKey1"][0].optionDatas[y].carHouseCode
            break
          }
      }
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {

        this.getHouseName();
        this.getAreaName();
        let that = this
        var isNumber =
          !isNaN(that.formField.carPlaceStart) &&
          !isNaN(that.formField.carPlaceEnd);
        var isInteger =
          that.formField.carPlaceStart % 1 === 0 &&
          that.formField.carPlaceEnd % 1 === 0;
        var isThree =
          (that.formField.carPlaceStart == "" ||
            (that.formField.carPlaceStart > 0 &&
              that.formField.carPlaceStart < 1000)) &&
          (that.formField.carPlaceEnd == "" ||
            (that.formField.carPlaceEnd > 0 &&
              that.formField.carPlaceEnd < 1000));
        var isBothNoNull =
          that.formField.carPlaceStart != "" &&
          that.formField.carPlaceEnd != "";
        that.isBothNoNull = isBothNoNull;
        if (!isNumber || !isInteger || !isThree) {
          that.$message({
            message: "储位起号或者储位止号必须是三位数的正整数",
            type: "warning",
            duration: 2000
          });
          return;
        }
        if (isNumber && isInteger && isThree && isBothNoNull) {
          if (that.formField.carPlaceStart >= that.formField.carPlaceEnd) {
            that.$message({
              message: "储位起号必须小于储位止号",
              type: "warning",
              duration: 2000
            });
            return;
          }
        }
        that.carPlaceNameTemp = that.formField.carPlaceName;
        if (!isBothNoNull && that.formField.carPlaceStart != "") {
          if (that.formField.carPlaceStart < 10) {
            that.carPlaceNameTemp =
              that.carPlaceNameTemp + "-00" + that.formField.carPlaceStart;
          } else if (
            that.formField.carPlaceStart >= 10 &&
            that.formField.carPlaceStart < 100
          ) {
            that.carPlaceNameTemp =
              that.carPlaceNameTemp + "-0" + that.formField.carPlaceStart;
          } else if (that.formField.carPlaceStart >= 100) {
            that.carPlaceNameTemp =
              that.carPlaceNameTemp + "-" + that.formField.carPlaceStart;
          }
          that.toSave();
        }
        if (!isBothNoNull && that.formField.carPlaceEnd != "") {
          if (that.formField.carPlaceEnd < 10) {
            that.carPlaceNameTemp =
              that.carPlaceNameTemp + "-00" + that.formField.carPlaceEnd;
          } else if (
            that.formField.carPlaceEnd >= 10 &&
            that.formField.carPlaceEnd < 100
          ) {
            that.carPlaceNameTemp =
              that.carPlaceNameTemp + "-0" + that.formField.carPlaceEnd;
          } else if (that.formField.carPlaceEnd >= 100) {
            that.carPlaceNameTemp =
              that.carPlaceNameTemp + "-" + that.formField.carPlaceEnd;
          }
          that.toSave();
        }
        if (!isBothNoNull) {
          that.toSave();
        }
        if (isBothNoNull) {
          for (
            var i = that.formField.carPlaceStart;
            i <= that.formField.carPlaceEnd;
            i++
          ) {
            that.carPlaceNameTemp = that.formField.carPlaceName;
            if (i < 10) {
              that.carPlaceNameTemp = that.carPlaceNameTemp + "-00" + i;
            } else if (i >= 10 && i < 100) {
              that.carPlaceNameTemp = that.carPlaceNameTemp + "-0" + i;
            } else if (i >= 100) {
              that.carPlaceNameTemp = that.carPlaceNameTemp + "-" + i;
            }
            that.toSave(that.carPlaceNameTemp, i);
            that.count++;
          }
        }
      }
    },
    toSave(carPlaceName, carPlaceId) {
      console.log(carPlaceName);
      console.log(carPlaceId);
      debugger
      let obj = {};
      obj.carHouseCode = this.formField.carHouseCode;
      obj.carAreaCode = this.formField.carAreaCode;
      obj.carPlaceManager = this.formField.carPlaceManager;
      obj.isEnable = this.formField.isEnable;
      obj.updateControlId = this.formField.updateControlId;
      obj.carStockAreaId = this.formField.carStockAreaId;
      obj.carStockHouseId = this.formField.carStockHouseId;
      obj.carPlaceCode = carPlaceId.toString();
      obj.carPlaceName = carPlaceName;
      console.log(obj)
      const that = this;
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veStockPlaceSave,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: obj
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          if (
            !that.isBothNoNull ||
            (that.isBothNoNull &&
              that.count ==
                that.formField.carPlaceEnd - that.formField.carPlaceStart + 1)
          ) {
            that.$message({
              message: "保存成功",
              type: "success",
              duration: 2000
            });
          }
        } else {
          this.$message({
            message:
              "保存失败：" + response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
        }
      });
      this.$emit("close");
    }
  }
};
</script>
