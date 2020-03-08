 <!--
* description: 省份设置（含输入框）
* author: meijq
* createdDate: 2019-08-19
-->
 <template>
  <section class="smallArea">
    <el-dialog
      title="省份设置"
      :visible.sync="curPopupsVisible"
      width="1000px"
      center
      @close="sendCode"
      :append-to-body="true"
      :lock-scroll="true"
    >
      <el-row type="flex">
        <el-col
          :span="13"
          :offset="11"
        >
          <div class="filter-container filter-button">
            <el-button size="small" @click="checkSellct">勾选</el-button>
            <el-button size="small" @click="uncheckSellct">不勾选</el-button>
            <el-button
              size="small"
              type="primary"
              @click="sendCode"
            >确认</el-button>
            <el-button size="small" @click="curPopupsVisible =false">返回</el-button>
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
          <lableName
            curLabelName="省份查询"
            :isShowLabel="isShowLabel"
          ></lableName>
          <el-input size="small"  v-model="secvalue" placeholder="请输入省份名称"></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container storeCollapse" style="margin:5px 0px;">
        <el-button ref="fexxx" @click="collapseAll">全部折叠</el-button>
        <el-checkbox  style="font-size:19px;text-align:center;margin-left:10px;width:11%;"
          :indeterminate="indeterminate"
          v-model="checkAll"
          
          @change="selectAll()"
          :disabled="!isMul"
          >全选</el-checkbox>
        <!-- <el-checkbox
            style="font-size:19px;text-align:center;margin-left:10px;width:11%;"
            :indeterminate="indeterminate"
            v-model="isAble"
                  >禁选停用专营店</el-checkbox>  -->
        </div>          
        <template  v-for="(item,key) in distributorsInfo">
          <el-collapse v-model="activeNames">
            <el-collapse-item :name="item.id">
              <template slot="title">
                
                  <div class="bigTitle">
                     <input
                      type="checkbox"
                      :value="item.smallAreaName"
                      :checked="item.selected"
                      :disabled="!isMul"
                      @click.stop="click1(item)"
                      ref="bigArea"
                    />
                    <span v-html="brightenKeyword(item.smallAreaName, secvalue)"></span>
                  </div>
             </template>
             <span class="countryArea" v-for="(area,key) in item.area">
                  <input @click.stop="click2(area)"  type="checkbox" :value="area.partitionName"
                      :ref="item.bigArea"     :checked="area.selected" :disabled="!isMul" />
                  <span v-html="brightenKeyword(area.partitionName, secvalue)"></span>   
             </span>
               
            </el-collapse-item>
         </el-collapse>
         </template>
    </el-dialog>
  </section>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import { constants } from "crypto";
import lableName from "@/components/lableName";
export default {
  name: "drlDialog",
  components: {
    lableName,
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
      isShowLabel:true,
      isAble:false,
      activeNames: ["1","2"],
      collseName:[],
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
      dirButorsInfo:[],
      radio: "2",
      isMuld: this.isMul,
      formField:{
        provinceId:"",  //省份ID
      },
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
        apiConfig: orgApis.mdmOrgdlrAreaProvinceQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            // 表格中台返回网格的字段
            apiQueryRow: [
              "smallAreaName",
              "smallAreaId",
              "provinceName",
              "provinceId",
            ]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 100,
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
          this.distributorsInfo = response.data[queryObj.apiConfig.ServiceCode].rows;
          
          //处理数据
          var distributorsInfoTemp = [];
          var smallArea = {};
          //第一次循环找出小区
          for (var i = 1; i < this.distributorsInfo.length; i++) {
            smallArea = {};
            var flag = true;
            for (var j = 0; j < distributorsInfoTemp.length; j++) {
              if (distributorsInfoTemp[j].smallAreaName == this.distributorsInfo[i].smallAreaName) {
                  flag = false;
                  break;
              }
            }
            if (flag) {
              smallArea["smallAreaName"] = this.distributorsInfo[i].smallAreaName;
              smallArea["selected"] = false;
              smallArea["indeterminate"] = false;
              smallArea["id"] = this.distributorsInfo[i].smallAreaId;
              distributorsInfoTemp.push(smallArea);
              this.activeNames.push(this.distributorsInfo[i].smallAreaId);
              this.collseName.push(this.distributorsInfo[i].smallAreaId);
            }
          }

          //第二遍根据大区循环找省份
          for (var i = 0; i < distributorsInfoTemp.length; i++) {
            var proAreaList = this.distributorsInfo.filter(o => o.bigAreaName == distributorsInfoTemp[i].bigArea);
            distributorsInfoTemp[i]["area"] = [];
            var proArea = {};
            for (var j = 0; j < proAreaList.length; j++) {
              proArea = {};
              proArea["id"] = proAreaList[j].provinceId;
              proArea["partitionName"] = proAreaList[j].provinceName;
             // smallArea["indeterminate"] = false;
              proArea["selected"] = false;
              var isIncludes = distributorsInfoTemp[i].area.filter(
                o => o.id == proAreaList[j].provinceId
              );
              if (isIncludes.length == 0) {
                distributorsInfoTemp[i].area.push(proArea);
              }
            }
          }
          this.distributorsInfo =  distributorsInfoTemp
          this.dirButorsInfo = this.distributorsInfo;         
        }
      });
    },
    //获取数据
    getSelData() {
      this.sendData.name = [];
      this.sendCode.code = [];
      this.distributorsInfo.forEach(item => {
        item.area.forEach(citem => {        
               if (citem.selected) {
                this.sendData.name.push(citem.partitionName);
                this.sendData.code.push(citem.id);            
              }          
        });
      });
    },
    sendCode() {
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
        });
      });
    },
    collapseAll(){
      if(this.activeNames.length === 0){
        this.activeNames = this.collseName
      }else{
        this.activeNames = [];
      }
      
    },
    click1(initem) {
      initem.selected = !initem.selected;
      initem.area.forEach(item => {
        item.selected = initem.selected;
      });
      if (!initem.selected) {
        this.checkAll = false;
      }
    },
    click2(initem) {
      initem.selected = !initem.selected;
    },
    // 筛选变色
    brightenKeyword(val, keyword,status) {
      const Reg = new RegExp(keyword, "i");
      if(status=="1" && this.isAble==true){
        var res = `<span  style="color: #eee;">${keyword}</span>`
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
            citem.selected = false;
          });
        });
        item.selected = flag;
        item.selected = !item.selected;
      }
    },
    //勾选
    checkSellct(e){
      var chooseDir = document.getElementsByClassName("chooseDir");
      for(var i = 0;i<chooseDir.length;i++){
          if(chooseDir[i].innerHTML.length>0){
            if(chooseDir[i].parentNode.parentNode.firstChild.getAttribute("checked")=="false"|| chooseDir[i].parentNode.parentNode.firstChild.getAttribute("checked")==undefined){
              chooseDir[i].parentNode.parentNode.firstChild.click();
              chooseDir[i].parentNode.parentNode.firstChild.setAttribute("checked","true")
            }    
          }
      }
    },
    //反勾选
    uncheckSellct(e){
      var chooseDir = document.getElementsByClassName("chooseDir");
      for(var i = 0;i<chooseDir.length;i++){
          if(chooseDir[i].innerHTML.length>0){
            if(chooseDir[i].parentNode.parentNode.firstChild.getAttribute("checked") =="true"){
              chooseDir[i].parentNode.parentNode.firstChild.click();
              chooseDir[i].parentNode.parentNode.firstChild.setAttribute("checked","false")
            }
          }
      }
    },
  }
};
</script>

<style lang="scss" scoped>
/deep/ .csslableName{
  width: 0px;
}
 /deep/ .el-dialog{
  height: 600px;
  overflow: auto;
}
/deep/ .bigTitle{
  padding-left: 5px;
  background-color: #d9e6e2;
  //63FFCB
  width: 100%;
}
/deep/ .areaTitle{
  padding-left: 5px;  
  background: #c9ded7;
  // #a9d0c3 bff9e6
  width: 100%;
}
/deep/ .el-collapse-item{
  margin-bottom: 2px;
}
/deep/ .el-collapse-item__content{
  padding-bottom:0px;
}
/deep/ .el-collapse-item__wrap{
  border-bottom: none;
}
.el-collapse{
  border-top:none;
  border-bottom:none;
}
.countryArea{
  display: inline-block;
  margin: 0 10px;
}
input[type="checkbox"] {
  vertical-align: middle;
  position: relative;
  top: -1px;
}
/deep/ .chooseDir{
  color: red;
}
</style>
