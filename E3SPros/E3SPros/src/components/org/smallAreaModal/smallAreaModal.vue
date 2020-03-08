<template>
  <section class="smallAreaModal">
    <el-dialog title="大区小区选择" :visible.sync="smallAreaModalVisible" width="900px" @close="sendCode">
      <div class="deliverySetting-table">
        <div class="table-head">
          <el-checkbox
            :indeterminate="indeterminate"
            v-model="ischeckAll"
            @change="handleCheckAllChange"
          >全选</el-checkbox>
          <el-button size="small" >全部折叠</el-button>
          <div style="float:right;">
            <el-button size="small" type="primary" @click="sendCode">确定</el-button>
            <el-button size="small" @click="sendCode">返回</el-button>
          </div>
        </div>
      </div>
      <el-collapse>
        <el-collapse-item v-for="(partition,partitionIndex) in smallAreaInfo" :key="partitionIndex">
          <template slot="title">
            <el-checkbox
              :indeterminate="partition.indeterminate"
              v-model="partition.selected"
              @change="handleWareHouseAllChange(partitionIndex,partition.partitionId,$event)"
              :key="partitionIndex"
            >{{ partition.bigArea}}</el-checkbox>
          </template>
          <!-- <el-checkbox-group v-model="checkedSmallArea" @change="handleCheckedCitiesChange"> -->
            <el-checkbox
              v-for="smallArea in partition.smallArea"
              v-model="smallArea.selected"
              @change="handleCheckedWareHouseChange(partitionIndex,smallArea.code,partition.partitionId,$event)"
              :label="smallArea.name"
              :key="smallArea.code"
              :span="6"
            >{{smallArea.name}}</el-checkbox>
          <!-- </el-checkbox-group> -->
        </el-collapse-item>
      </el-collapse>
      <!-- 
      <div
        class="table-body"
        v-for="(partition,partitionIndex) in smallAreaInfo"
        :key="partitionIndex"
      >
      
        <div style="background-color:#EEEEEE;">
          <p>
            <el-checkbox
              :indeterminate="partition.indeterminate"
              v-model="partition.selected"
              @change="handleWareHouseAllChange(partitionIndex,partition.partitionId,$event)"
              :key="partitionIndex"
            >{{ partition.bigArea}}</el-checkbox>
          </p>
        </div>

        <div class="AreaBox">
          <el-row :gutter="26">
            <el-col :span="24">
              <el-checkbox
                v-for="smallArea in partition.smallArea"
                v-model="smallArea.selected"
                @change="handleCheckedWareHouseChange(partitionIndex,smallArea.code,partition.partitionId,$event)"
                :label="smallArea.name"
                :key="smallArea.code"
                :span="6"
              >{{smallArea.name}}</el-checkbox>
            </el-col>
          </el-row>
        </div>
       <div>
          <p v-for="(item,index) in partition.smallArea" :key="index">{{ item.distributors }}</p>
        </div>
      </div>-->
    </el-dialog>
  </section>
</template>

<script>
import { getSmallAreaModal } from "@/api/components";
export default {
  name: "smallAreaModal",
  props: {
    smallAreaModalVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      smallAreaInfo: [],
      listQuery: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getSmallAreaModal(this.listQuery).then(response => {
        this.smallAreaInfo = response.data.rows;
      });
    },
    handleCheckAllChange(e) {
      this.ischeckAll = e;
      this.indeterminate = false;
      for (var i = 0, len = this.smallAreaInfo.length; i < len; i++) {
        this.smallAreaInfo[i].selected = e;
        this.smallAreaInfo[i].indeterminate = false;
        for (
          var j = 0, len1 = this.smallAreaInfo[i].smallArea.length;
          j < len1;
          j++
        ) {
          this.smallAreaInfo[i].smallArea[j].selected = e;
        }
      }
    },
    handleWareHouseAllChange(index, topId, e) {
      this.smallAreaInfo[index].selected = e;
      this.smallAreaInfo[index].indeterminate = false;
      var childrenArray = this.smallAreaInfo[index].smallArea;
      if (childrenArray)
        for (var i = 0, len = childrenArray.length; i < len; i++)
          childrenArray[i].selected = e;

      this.getIsCheckAll();
    },
    handleCheckedWareHouseChange(topIndex, sonId, topId, e) {
      var childrenArray = this.smallAreaInfo[topIndex].smallArea;
      var tickCount = 0,
        unTickCount = 0,
        len = childrenArray.length;
      for (var i = 0; i < len; i++) {
        if (sonId == childrenArray[i].id) childrenArray[i].selected = e;
        if (childrenArray[i].selected == true) tickCount++;
        if (childrenArray[i].selected == false) unTickCount++;
      }
      if (tickCount == len) {
        this.smallAreaInfo[topIndex].selected = true;
        this.smallAreaInfo[topIndex].indeterminate = false;
      } else if (unTickCount == len) {
        this.smallAreaInfo[topIndex].selected = false;
        this.smallAreaInfo[topIndex].indeterminate = false;
      } else {
        this.smallAreaInfo[topIndex].selected = false;
        this.smallAreaInfo[topIndex].indeterminate = true;
      }

      this.getIsCheckAll();
    },
    getIsCheckAll() {
      var tickCount = 0,
        unTickCount = 0,
        indeterminateCount = 0,
        ArrLength = this.smallAreaInfo.length;
      for (var j = 0; j < ArrLength; j++) {
        if (this.smallAreaInfo[j].selected == true) tickCount++;
        if (this.smallAreaInfo[j].selected == false) unTickCount++;
        if (this.smallAreaInfo[j].indeterminate == true) indeterminateCount++;
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
    sendCode() {
      this.$emit("changeCode", this.codeInside);
    }
  }
};
</script>

<style  lang="scss" scoped >
.smallAreaModal label {
  line-height: 28px;
}
.smallAreaModal {
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
</style>

