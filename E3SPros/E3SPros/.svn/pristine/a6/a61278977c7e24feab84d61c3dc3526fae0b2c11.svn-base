<template>
  <section class="hostFatoryWareHouse">
    <el-dialog
      title="主机厂仓库"
      width="1000px"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      :append-to-body="true"
      @open="openCode"
    >
     <el-row>
        <div class="deliverySetting-table">
        <div class="table-head">
          <el-checkbox
            :indeterminate="indeterminate"
            v-model="ischeckAll"
            @change="handleCheckAllChange"
          >全选</el-checkbox>
          <div style="float:right;">
            <el-button size="small" @click="sendCode">确定</el-button>
            <el-button size="small" @click="sendCode">返回</el-button>
          </div>
        </div>
      </div>
      <el-scrollbar style="height:420px">
        <div
        class="table-body"
        v-for="(partition,partitionIndex) in wareHouseInfo"
        :key="partitionIndex"
        >
        <div style="background-color:#EEEEEE;">
          <p>
            <el-checkbox
              :indeterminate="partition.indeterminate"
              v-model="partition.selected"
              @change="handleWareHouseAllChange(partitionIndex,partition.partitionId,$event)"
              :key="partitionIndex"
            >{{ partition.carStoreClass }}</el-checkbox>
          </p>
        </div>

        <div class="AreaBox">
          <el-row :gutter="26">
            <el-col :span="24">
                <el-col :span="8" v-for="wareHouse in partition.wareHouse" :key="wareHouse.code">
                  <el-checkbox
                  v-model="wareHouse.selected"
                  @change="handleCheckedWareHouseChange(partitionIndex,wareHouse.code,partition.partitionId,$event,wareHouse.wareHouseName)"
                  :label="wareHouse"
                >{{wareHouse.wareHouseName}}</el-checkbox>
                </el-col>
            </el-col>
          </el-row>
        </div>
        <div>
          <p v-for="(item,index) in partition.wareHouse" :key="index">{{ item.distributors }}</p>
        </div>
      </div>
      </el-scrollbar>

     </el-row>
      
    </el-dialog>
  </section>
</template>

<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import { debuglog } from "util";
import { constants } from "crypto";
export default {
  components: {},
  props: {
    popupsVisible: { type: Boolean, default: false },
    code: { type: String, default: "" },
    comType: { type: String, default: "" },
    codeField: { type: String, default: "" },
    textField: { type: String, default: "" },
    popupsKey: { type: String, default: "" },
    isMul: { type: Boolean, default: true }
  },
  data() {
    return {
      ischeckAll: "",
      wareHouseInfo: [],
      wareHouseCodeDefault: this.code.split(","),
      curPopupsVisible: this.popupsVisible,
      listQuery: {
        "carBrandCode": "1"
      },
      indeterminate: "",
      codeInside: {
        wareHouseName: [],
        wareHouseCode: []
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const queryObj = {
        // api配置
        apiConfig: veApis.veDbCarStockHouseQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            // 表格中台返回网格的字段
            apiQueryRow: ["carStockHouseId","dlrId","carHouseName", "carHouseCode", "carStoreClass"]
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
          this.wareHouseInfo =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          //处理返回数据
          var wareHouseInfoTemp = [];
          //第一次循环找出不同的仓库类别
          for (var i = 1; i < this.wareHouseInfo.length; i++) {
          var wareHouse = {};
            var flag = true;
            for (var j = 0; j < wareHouseInfoTemp.length; j++) {
              if (wareHouseInfoTemp[j].carStoreClass == this.wareHouseInfo[i].carStoreClass) {
                flag = false;
                break;
              }
            }
            if (flag) {
              wareHouse["carStoreClass"] = this.wareHouseInfo[i].carStoreClass;
              wareHouse["selected"] = false;
              wareHouse["indeterminate"] = false;
              wareHouse["partitionId"] = wareHouseInfoTemp.length+1;
              wareHouseInfoTemp.push(wareHouse);
            }
          }
          //第二遍循环根据仓库类别找出相应的仓库
          for (var i = 0; i < wareHouseInfoTemp.length; i++) {
              wareHouseInfoTemp[i]["wareHouse"]=[];
              var wareHouseList = this.wareHouseInfo.filter(o => o.carStoreClass == wareHouseInfoTemp[i].carStoreClass);
                wareHouseList.forEach(wareHouses => {
                  var wareHouse = {};
                  wareHouse["code"] = wareHouses.carHouseCode;
                  wareHouse["wareHouseName"] = wareHouses.carHouseName;
                  wareHouse["selected"] = false;
                  wareHouseInfoTemp[i].wareHouse.push(wareHouse);
           })
          }
          this.wareHouseInfo = wareHouseInfoTemp;
        }
           //设置默认选中
      this.wareHouseCodeDefault = this.code.split(",");
      for (var k = 0; k < this.wareHouseCodeDefault.length; k++) {
        for (var i = 0; i < this.wareHouseInfo.length; i++) {
          var childrenArray = this.wareHouseInfo[i].wareHouse;
          if (childrenArray) {
            for (var j = 0; j < childrenArray.length; j++)
              if (childrenArray[j].code == this.wareHouseCodeDefault[k]) {
                childrenArray[j].selected = true;
              }
          }
        }
       this.getIsCheckAll();
      }
      });
    },
    handleCheckAllChange(e) {
      this.ischeckAll = e;
      this.indeterminate = false;
      for (var i = 0, len = this.wareHouseInfo.length; i < len; i++) {
        this.wareHouseInfo[i].selected = e;
        this.wareHouseInfo[i].indeterminate = false;
        for (
          var j = 0, len1 = this.wareHouseInfo[i].wareHouse.length;
          j < len1;
          j++
        ) {
          this.wareHouseInfo[i].wareHouse[j].selected = e;
        }
      }
    },
    handleWareHouseAllChange(index, topId, e) {
      this.wareHouseInfo[index].selected = e;
      this.wareHouseInfo[index].indeterminate = false;
      var childrenArray = this.wareHouseInfo[index].wareHouse;
      if (childrenArray)
        for (var i = 0, len = childrenArray.length; i < len; i++)
          childrenArray[i].selected = e;

      this.getIsCheckAll();
    },
    handleCheckedWareHouseChange(topIndex, sonId, topId, e, sName) {
      if (this.isMul) {
        var childrenArray = this.wareHouseInfo[topIndex].wareHouse;
        var tickCount = 0,
          unTickCount = 0,
          len = childrenArray.length;
        for (var i = 0; i < len; i++) {
          if (sonId == childrenArray[i].code) childrenArray[i].selected = e;
          if (childrenArray[i].selected == true) tickCount++;
          if (childrenArray[i].selected == false) unTickCount++;
        }
        if (tickCount == len) {
          this.wareHouseInfo[topIndex].selected = true;
          this.wareHouseInfo[topIndex].indeterminate = false;
        } else if (unTickCount == len) {
          this.wareHouseInfo[topIndex].selected = false;
          this.wareHouseInfo[topIndex].indeterminate = false;
        } else {
          this.wareHouseInfo[topIndex].selected = false;
          this.wareHouseInfo[topIndex].indeterminate = true;
        }

        this.getIsCheckAll();
      }
      if (!this.isMul) {
        //先清除所有选项
        for (var i = 0; i < this.wareHouseInfo.length; i++) {
          var childrenArray = this.wareHouseInfo[i].wareHouse;
          if (childrenArray) {
            for (var j = 0; j < childrenArray.length; j++)
              childrenArray[j].selected = false;
          }
        }
        var childrenArray = this.wareHouseInfo[topIndex].wareHouse;
        for (var i = 0; i < childrenArray.length; i++) {
          if (sonId == childrenArray[i].code) {
            childrenArray[i].selected = e;
            break;
          }
        }
      }
    },
    getWareHouseR() {
      this.codeInside.wareHouseName = [];
      this.codeInside.wareHouseCode = [];
      for (var i = 0; i < this.wareHouseInfo.length; i++) {
        var childrenArray = this.wareHouseInfo[i].wareHouse;
        if (childrenArray) {
          for (var j = 0; j < childrenArray.length; j++)
            if (childrenArray[j].selected) {
              this.codeInside.wareHouseName.push(
                childrenArray[j].wareHouseName
              );
              this.codeInside.wareHouseCode.push(childrenArray[j].code);
            }
        }
      }
    },
    getIsCheckAll() {
      var tickCount = 0,
        unTickCount = 0,
        indeterminateCount = 0,
        ArrLength = this.wareHouseInfo.length;
      for (var j = 0; j < ArrLength; j++) {
        if (this.wareHouseInfo[j].selected == true) tickCount++;
        if (this.wareHouseInfo[j].selected == false) unTickCount++;
        if (this.wareHouseInfo[j].indeterminate == true) indeterminateCount++;
      }
      if (tickCount == ArrLength) {
        this.ischeckAll = true;
        this.indeterminate = false;
      } else if (unTickCount == ArrLength) {
        this.ischeckAll = false;
        if (indeterminateCount > 0) {
          this.indeterminate = true;
        } else {
          this.indeterminate = false;
        }
      } else {
        this.ischeckAll = false;
        this.indeterminate = true;
      }
    },
    openCode() {},
    sendCode() {
      this.getWareHouseR();
      this.$emit(
        "changeCode",
        this.codeInside.wareHouseCode.toString(),
        this.codeInside.wareHouseName.toString(),
        this.codeField,
        this.comType,
        this.popupsKey
      );
    },
    closeWareHouse() {
      this.$emit("closeWareHouse");
    }
  }
};
</Script>

<style lang="scss" scoped>
/deep/ .el-dialog{
  height: 500px;
}
.filter-params {
  text-align: left;
}
.hostFatoryWareHouse .AreaBox .el-checkbox {
  width: 150px;
  margin-right: 20px;
}
.hostFatoryWareHouse .table-head .div {
  border-top: 1px solid #000;
  border-bottom: 2px solid #000;
}
.el-dialog {
    height: 500px;
}
</style>

