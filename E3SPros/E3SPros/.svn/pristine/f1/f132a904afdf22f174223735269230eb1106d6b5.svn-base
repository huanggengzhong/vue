<template>
  <el-container>
    <el-header ref="headtitle">自定义组件、模板使用教程</el-header>
    <el-main>
      <el-tabs
        tab-position="left"
        style="height: 100%;"
      >
        <!-- 组件清单 -->
        <el-tab-pane label="组件清单">
          <el-tabs type="border-card">
            <el-tab-pane label="组织架构">
              <template>
                <el-table
                  :data="listComponent.orgComponentList"
                  style="width: 100%"
                  :height="tableHeight"
                >
                  <el-table-column
                    center
                    prop="componentName"
                    label="组件名称"
                    width=150
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>

                  <el-table-column
                    prop="componentSrc"
                    label="组件路径"
                    width=null
                    center
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="type"
                    label="类型"
                    width=180
                    center
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="componentDesc"
                    label="详情"
                    width=100
                    center
                    :show-overflow-tooltip="true"
                    type="expand"
                  >
                    <template slot-scope="props">
                      <el-form
                        label-position="left"
                        inline
                        class="demo-table-expand"
                      >
                        <el-form-item label="属性">
                          <span>{{ props.row.componentDesc }}</span>
                        </el-form-item>
                        <el-form-item label="资源">
                          <span v-html="props.row.source"></span>
                        </el-form-item>
                        <el-form-item label="备注">
                          <span>{{ props.row.componentDesc }}</span>
                        </el-form-item>
                      </el-form>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-tab-pane>
            <el-tab-pane label="整车">
              <template>
                <el-table
                  :data="listComponent.veComponentList"
                  style="width: 100%"
                  :height="tableHeight"
                >
                  <el-table-column
                    center
                    prop="componentName"
                    label="组件名称"
                    width=150
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>

                  <el-table-column
                    prop="componentSrc"
                    label="组件路径"
                    width=null
                    center
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="type"
                    label="类型"
                    width=180
                    center
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="componentDesc"
                    label="详情"
                    width=100
                    center
                    :show-overflow-tooltip="true"
                    type="expand"
                  >
                    <template slot-scope="props">
                      <el-form
                        label-position="left"
                        inline
                        class="demo-table-expand"
                      >
                        <el-form-item label="属性">
                          <span>{{ props.row.componentDesc }}</span>
                        </el-form-item>
                        <el-form-item label="资源">
                          <span v-html="props.row.source"></span>
                        </el-form-item>
                        <el-form-item label="备注">
                          <span>{{ props.row.componentDesc }}</span>
                        </el-form-item>
                      </el-form>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-tab-pane>
            <el-tab-pane label="售后">
              <template>
                <el-table
                  :data="listComponent.seComponentList"
                  style="width: 100%"
                  :height="tableHeight"
                >
                  <el-table-column
                    center
                    prop="componentName"
                    label="组件名称"
                    width=150
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>

                  <el-table-column
                    prop="componentSrc"
                    label="组件路径"
                    width=null
                    center
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="type"
                    label="类型"
                    width=180
                    center
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="componentDesc"
                    label="详情"
                    width=100
                    center
                    :show-overflow-tooltip="true"
                    type="expand"
                  >
                    <template slot-scope="props">
                      <el-form
                        label-position="left"
                        inline
                        class="demo-table-expand"
                      >
                        <el-form-item label="属性">
                          <span>{{ props.row.componentDesc }}</span>
                        </el-form-item>
                        <el-form-item label="资源">
                          <span v-html="props.row.source"></span>
                        </el-form-item>
                        <el-form-item label="备注">
                          <span>{{ props.row.componentDesc }}</span>
                        </el-form-item>
                      </el-form>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-tab-pane>
            <el-tab-pane label="备件">
              <template>
                <el-table
                  :data="listComponent.paComponentList"
                  style="width: 100%"
                  :height="tableHeight"
                >
                  <el-table-column
                    center
                    prop="componentName"
                    label="组件名称"
                    width=150
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>

                  <el-table-column
                    prop="componentSrc"
                    label="组件路径"
                    width=null
                    center
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="type"
                    label="类型"
                    width=180
                    center
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="componentDesc"
                    label="详情"
                    width=100
                    center
                    :show-overflow-tooltip="true"
                    type="expand"
                  >
                    <template slot-scope="props">
                      <el-form
                        label-position="left"
                        inline
                        class="demo-table-expand"
                      >
                        <el-form-item label="属性">
                          <span>{{ props.row.componentDesc }}</span>
                        </el-form-item>
                        <el-form-item label="资源">
                          <span v-html="props.row.source"></span>
                        </el-form-item>
                        <el-form-item label="备注">
                          <span>{{ props.row.componentDesc }}</span>
                        </el-form-item>
                      </el-form>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <!-- 动态配置说明 -->
        <el-tab-pane label="动态配置说明">
          <el-tabs type="border-card">
            <el-tab-pane label="动态按钮配置说明">
              <template>
                <el-table
                  :data="listComponent.dynamicButtons"
                  style="width: 100%"
                  :height="tableHeight"
                >
                  <el-table-column
                    center
                    prop="field"
                    label="属性名"
                    width=150
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>

                  <el-table-column
                    prop="note"
                    label="说明"
                    width=null
                    center
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <!-- <el-table-column
                    prop="componentDesc"
                    label="详情"
                    width=100
                    center
                    :show-overflow-tooltip="true"
                    type="expand"
                  >
                    <template slot-scope="props">
                      <el-form
                        label-position="left"
                        inline
                        class="demo-table-expand"
                      >
                        <el-form-item label="属性">
                          <span>{{ props.row.componentDesc }}</span>
                        </el-form-item>
                        <el-form-item label="资源">
                          <span v-html="props.row.source"></span>
                        </el-form-item>
                        <el-form-item label="备注">
                          <span>{{ props.row.componentDesc }}</span>
                        </el-form-item>
                      </el-form>
                    </template>
                  </el-table-column> -->
                </el-table>
              </template>
            </el-tab-pane>
            <el-tab-pane label="动态组件配置说明">
              <template>
                <el-table
                  :data="listComponent.dynamicComponents"
                  style="width: 100%"
                  :height="tableHeight"
                >
                  <el-table-column
                    center
                    prop="field"
                    label="属性名"
                    width=150
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>

                  <el-table-column
                    prop="note"
                    label="说明"
                    width=null
                    center
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <!-- <el-table-column
                    prop="componentDesc"
                    label="详情"
                    width=100
                    center
                    :show-overflow-tooltip="true"
                    type="expand"
                  >
                    <template slot-scope="props">
                      <el-form
                        label-position="left"
                        inline
                        class="demo-table-expand"
                      >
                        <el-form-item label="属性">
                          <span>{{ props.row.componentDesc }}</span>
                        </el-form-item>
                        <el-form-item label="资源">
                          <span v-html="props.row.source"></span>
                        </el-form-item>
                        <el-form-item label="备注">
                          <span>{{ props.row.componentDesc }}</span>
                        </el-form-item>
                      </el-form>
                    </template>
                  </el-table-column> -->
                </el-table>
              </template>
            </el-tab-pane>
            <el-tab-pane label="动态网格配置说明">
              <template>
                <el-table
                  :data="listComponent.dynamicTableCols"
                  style="width: 100%"
                  :height="tableHeight"
                >
                  <el-table-column
                    center
                    prop="field"
                    label="属性名"
                    width=150
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>

                  <el-table-column
                    prop="note"
                    label="说明"
                    width=null
                    center
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <!-- <el-table-column
                    prop="componentDesc"
                    label="详情"
                    width=100
                    center
                    :show-overflow-tooltip="true"
                    type="expand"
                  >
                    <template slot-scope="props">
                      <el-form
                        label-position="left"
                        inline
                        class="demo-table-expand"
                      >
                        <el-form-item label="属性">
                          <span>{{ props.row.componentDesc }}</span>
                        </el-form-item>
                        <el-form-item label="资源">
                          <span v-html="props.row.source"></span>
                        </el-form-item>
                        <el-form-item label="备注">
                          <span>{{ props.row.componentDesc }}</span>
                        </el-form-item>
                      </el-form>
                    </template>
                  </el-table-column> -->
                </el-table>
              </template>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <!-- 表单校验 -->
        <el-tab-pane label="表单校验">
          <el-tabs type="border-card">
            <el-tab-pane label="el-form rules校验模式">
              <template>
                <el-table
                  :data="listVaild.elValidList"
                  style="width: 100%"
                  :height="tableHeight"
                >
                  <el-table-column
                    center
                    prop="field"
                    label="名称"
                    width=150
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>

                  <el-table-column
                    prop="note"
                    label="说明"
                    width=null
                    center
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="componentDesc"
                    label="详情"
                    width=100
                    center
                    :show-overflow-tooltip="true"
                    type="expand"
                  >
                    <template slot-scope="props">
                      <el-form
                        label-position="left"
                        inline
                        class="demo-table-expand"
                      >
                        <ul>
                          <li
                            v-for="(index,i) in props.row.listObj"
                            :key="i"
                          >
                            <div class="lableName">{{index.name}}</div>
                            <div class="note">
                              <div v-html="index.notelink"></div>
                              <div v-html="index.note">

                              </div>
                              <ul>
                                <li
                                  v-for="(m,i) in index.notelist"
                                  :key="i"
                                >
                                  <el-col :span="8">
                                    {{m.name}}
                                  </el-col>
                                  <el-col :span="8">
                                    {{m.explain}}
                                  </el-col>
                                  <el-col :span="8">
                                    {{m.totle}}
                                  </el-col>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </el-form>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-tab-pane>
            <el-tab-pane label="（混入）模板模式">
              <template>
                <el-table
                  :data="listVaild.elMixList"
                  style="width: 100%"
                  :height="tableHeight"
                >
                  <el-table-column
                    center
                    prop="field"
                    label="名称"
                    width=150
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>

                  <el-table-column
                    prop="note"
                    label="说明"
                    width=null
                    center
                    :show-overflow-tooltip="true"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="componentDesc"
                    label="详情"
                    width=100
                    center
                    :show-overflow-tooltip="true"
                    type="expand"
                  >
                    <template slot-scope="props">
                      <el-form
                        label-position="left"
                        inline
                        class="demo-table-expand"
                      >
                        <ul>
                          <li
                            v-for="(index,i) in props.row.listObj"
                            :key="i"
                          >
                            <div class="lableName">{{index.name}}</div>
                            <div class="note">
                              <div v-html="index.notelink"></div>
                              <div v-html="index.note">

                              </div>
                              <ul class="vaildate">
                                <li
                                  v-for="(m,i) in index.notelist"
                                  :key="i"
                                >
                                  <el-col :span="8">
                                    {{m.name}}
                                  </el-col>
                                  <el-col :span="8">
                                    {{m.explain}}
                                  </el-col>
                                  <el-col :span="8">
                                    {{m.totle}}
                                  </el-col>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </el-form>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <!-- 换 肤-->
        <el-tab-pane label="主题色切换">

        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      //左导航
      tabPosition: "left",
      //网格自适应高度
      tableHeight: window.innerHeight - 230,
      //组件清单、动态配置说明
      listComponent: {
        // 组织架构
        orgComponentList: [
          {
            componentName: "值列表下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\org\\LookupValue",
            componentDesc: "多选/单选、搜索",
            source:
              '<a target="_blank" href="http://172.25.6.8:81/svn/整车销售产品中心/01_I区/02_Sprint迭代1/01_工程/02_系统设计/业务中台_值列表.xlsx">值列表SVN路径</a>'
          },
          {
            componentName: "城市下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\org\\CitySelect",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "大区下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\org\\BigArea",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "小区下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\org\\SmallArea",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "区域下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\org\\ZoneQuery",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "账户分类和大类联动",
            componentSrc: "src\\components\\org\\AccountTypeQuery",
            componentDesc: "联动",
            source: ""
          },
          {
            componentName: "省份下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\org\\ProvinceQuery",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "大区、小区、专营店联动",
            componentSrc: "src\\components\\org\\ZonegroupSelect",
            componentDesc: "联动",
            source: ""
          },
          {
            componentName: "省份、城市 、专营店联动",
            componentSrc: "src\\components\\org\\ProvinceGroupSelect",
            componentDesc: "联动",
            source: ""
          },
          {
            componentName: "账户名称下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\ve\\accountName",
            componentDesc: "多选/单选、搜索",
            source: ""
          },

          {
            componentName: "品牌单选",
            type: "radioBottn",
            componentSrc: "src\\components\\org\\carBrandRadio",
            componentDesc: "单选",
            source: ""
          },
          {
            componentName: "品牌下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\org\\carBrand\\carBrand",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "车系编码下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\org\\CarCode",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "车型小类下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\org\\SmallCarType",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "车型配置车身颜色关系下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\org\\carColor\\carColorSelect",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "车身颜色关系下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\org\\carColor\\brandCarColor",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "车型配置内饰色关系下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\org\\TrimPopupColor\\interiorSelect",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "内饰色关系下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\org\\InColor",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "经销商下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\org\\DlrStatus",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "经销商弹窗",
            type: "propus",
            componentSrc: "src\\components\\org\\orgDlr",
            componentDesc: "弹出框",
            source: ""
          },
          {
            componentName: "车型配置弹窗",
            type: "propus",
            componentSrc: "src\\components\\org\\carTypeConfig",
            componentDesc: "弹出框",
            source: ""
          },
          {
            componentName: "车型配置车身颜色关系弹窗",
            type: "propus",
            componentSrc: "src\\components\\org\\carColor",
            componentDesc: "弹出框",
            source: ""
          },
          {
            componentName: "车型配置内饰关系弹窗",
            type: "propus",
            componentSrc: "src\\components\\org\\TrimPopupColor",
            componentDesc: "弹出框",
            source: ""
          },
          {
            componentName: "大客户弹窗",
            type: "propus",
            componentSrc: "src\\components\\org\\BigCustomers\\BigCustomers",
            componentDesc: "弹出框",
            source: ""
          },

          {
            componentName: "通用文本输入框",
            type: "inputText",
            componentSrc: "src\\components\\org\\commonInput",
            componentDesc: "空输入框",
            source: ""
          },
          {
            componentName: "带弹窗输入框",
            type: "popupsInput",
            componentSrc: "src\\components\\org\\commonInput\\searchInput",
            componentDesc: "带弹窗输入框",
            source: ""
          },
          {
            componentName: "通用文本标签",
            type: "textLabel",
            componentSrc: "src\\components\\org\\label",
            componentDesc: "空文本标签",
            source: ""
          },
          {
            componentName: "通用文本按钮",
            type: "textButton",
            componentSrc: "src\\components\\org\\linkButton",
            componentDesc: "空Link Button",
            source: ""
          },
          {
            componentName: "单日期",
            type: "datePicker",
            componentSrc: "src\\components\\org\\datePicker",
            componentDesc: "可传日期名称",
            source: ""
          },
          {
            componentName: "时间选择",
            type: "timePicker",
            componentSrc: "src\\components\\org\\timePicker",
            componentDesc: "可传时间名称",
            source: ""
          },
          {
            componentName: "双日期",
            type: "datePicker",
            componentSrc: "src\\components\\org\\doubleDatePicker",
            componentDesc: "可传日期名称",
            source: ""
          },
          {
            componentName: "用户选择弹窗",
            type: "propus",
            componentSrc: "src\\components\\org\\userSelect",
            componentDesc: "多选 弹出框",
            source: ""
          },
          {
            componentName: "是否启用下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\org\\isEnable\\isEnable",
            componentDesc: "单选",
            source: ""
          },
          {
            componentName: "城市弹窗",
            componentSrc: "src\\components\\org\\CityQuery",
            componentDesc: "弹出框",
            source: ""
          },
          {
            componentName: "省份弹窗",
            componentSrc: "src\\components\\org\\ProvinceSelect",
            componentDesc: "弹出框",
            source: ""
          },
          {
            componentName: "员工岗位",
            componentSrc: "src\\components\\org\\position\\position",
            componentDesc: "带弹窗输入框",
            source: ""
          },
          {
            componentName: "网店下拉",
            componentSrc: "src\\components\\org\\onlineStore",
            componentDesc: "下拉框",
            source: ""
          },
          {
            componentName: "小区弹窗",
            componentSrc: "src\\components\\org\\villageChoose",
            componentDesc: "带弹窗输入框",
            source: ""
          },

          // 公共
          {
            componentName: "计算组件",
            type: "compText",
            componentSrc: "src\\components\\competedCode",
            componentDesc: "计算表达式（文本展示）",
            source: ""
          }
        ],
        // 整车
        veComponentList: [
          {
            componentName: "资金类型下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\ve\\PurcashType",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "采购单类型下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\ve\\PurchaseOrderType",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "仓库信息下拉框",
            type: "dropdownList",
            componentSrc: "src\\components\\ve\\wareHouseMultiwareHouseMulti",
            componentDesc: "多选/单选、搜索",
            source: ""
          },
          {
            componentName: "仓库弹出框",
            type: "propus",
            componentSrc:
              "src\\components\\ve\\hostFatoryWareHouse\\hostFatoryWareHouse",
            componentDesc: "多选/单选、弹出框",
            source: ""
          },
          {
            componentName: "账户名称下拉框",
            type: "propus",
            componentSrc: "src\\components\\ve\\accountName\\index",
            componentDesc: "多选/单选、弹出框",
            source: ""
          }
        ],
        // 售后
        seComponentList: [
          {
            componentName: "工时选择弹窗",
            type: "propus",
            componentSrc: "src\\components\\se\\seChooseWiSelect",
            componentDesc: "多选/单选、弹出框",
            source: ""
          },
          {
            componentName: "备件选择弹窗",
            type: "propus",
            componentSrc: "src\\components\\se\\paChoosePart",
            componentDesc: "多选/单选、弹出框",
            source: ""
          },
          {
            componentName: "车型选择弹框",
            type: "propus",
            componentSrc: "src\\components\\se\\partsCarTypeModal",
            componentDesc: "多选/单选、弹出框",
            source: ""
          },
          {
            componentName: "客户选择弹窗",
            type: "propus",
            componentSrc: "src\\components\\se\\seCarOwnerCustModal",
            componentDesc: "多选/单选、弹出框",
            source: ""
          },
          {
            componentName: "经销商选择弹窗",
            type: "propus",
            componentSrc: "src\\components\\se\\seCommonQueryChooseDlr",
            componentDesc: "多选/单选、弹出框",
            source: ""
          },
          {
            componentName: "经销商选择弹窗-多选",
            type: "propus",
            componentSrc: "src\\components\\se\\seComQueChoMu",
            componentDesc: "多选、弹出框",
            source: ""
          }
        ],
        // 备件
        paComponentList: [],
        // 动态按钮配置说明
        dynamicButtons: [
          { field: "compKey", note: "组件:key值，用于刷新组件" },
          { field: "type", note: "类型（primary/info/warning），默认空" },
          { field: "size", note: "按钮大小（small/medium/mini）" },
          { field: "clickEvent", note: "按钮点击事件如：() => this.add()" },
          { field: "text", note: "按钮文本" }
        ],
        // 动态组件配置说明
        dynamicComponents: [
          { field: "compKey", note: "组件:key值，用于刷新组件" },
          { field: "codeField", note: "formField对应的字段名称（值）" },
          { field: "textField", note: "弹窗/下拉框返回的文本字段（文本）" },
          { field: "component", note: "组件路径" },
          { field: "isMul", note: "是否多选，默认true" },
          { field: "isRequire", note: "是否必填/必选，默认false" },
          { field: "span", note: "组件占行的宽度比，默认为6" },
          { field: "isShowLabel", note: "是否显示标签" },
          { field: "labelName", note: "标签文本" },
          { field: "type", note: "组件类型，参考组件清单中的组件类型" },
          { field: "lookuptype", note: "值列表类型（只有值列表组件可用）" },
          { field: "dateOptionsType", note: "日期选项（只有日期组件可用）" },
          {
            field: "comType",
            note: "(预留)组件类型/行index（根据实际情况设定）"
          },
          { field: "disabled", note: "是否禁用，默认false" }
        ],
        // 动态网格配置说明
        dynamicTableCols: [
          { field: "prop", note: "对应网格数据字段" },
          { field: "label", note: "列头名称" },
          { field: "width", note: "列宽度" },
          { field: "align", note: "列头文本对其方式" },
          { field: "isComponent", note: "是否包含组件，默认false" },
          { field: "comps", note: "组件列表(isComponent=true时设置)" },
          { field: "comps.compKey", note: "组件:key值" },
          { field: "comps.labelName", note: "标签文本" },
          {
            field: "comps.compareField",
            note: "对比字段（用于根据网格数据进行对比）"
          },
          { field: "comps.compareValue", note: "对比值" },
          {
            field: "comps.codeField",
            note: "组件对应网格数据字段，如：isEnable"
          },
          { field: "comps.clickEvent", note: "点击事件（用于按钮组件）" },
          { field: "comps.component", note: "组件路径" }
        ]
      },
      //表单校验
      listVaild: {
        elValidList: [
          {
            field: "html代码结构代码样例",
            note:
              '<el-form :model="saveList" :rules="rules" ref="saveList" class="demo-ruleForm" :inline-message=true> <el-row :gutter="26"> <el-col :span="6"><el-form-item label="公司简称" prop="custName"><el-input v-model="saveList.custName" size="small" placeholder="请输入内容"></el-input></el-form-item></el-col></el-row></el-form>',
            source:
              '<a target="_blank" href="https://element.eleme.cn/#/zh-CN/component/form#form-methods">官网路径</a>',
            listObj: [
              {
                name: "资源",
                notelink:
                  '<a target="_blank" href="https://element.eleme.cn/#/zh-CN/component/form#form-methods">官网路径</a>   <a target="_blank" href="http://172.25.6.8:81/svn/整车销售产品中心/01_I区/00_共用产出/00_产品化标准/前端培训/组件校验效果.xlsx">SVN路径</a>'
              },
              {
                name: "<el-form>",
                note:
                  "1、form 有2个注入的字段 :rules 规则和 :model 当前form的值会通过 model 的值和 rules 进行匹配来进行校验<br>2、:model=“ruleForm” 绑定是的ruleForm这个表单<br>3、:rules=“rules” 绑定的是验证规则<br>4、:className=“className” 绑定了样式<br>5、inline-message=true 控制校验提示消息的格式-以行内形式展示校验信息<br>6、:ref=“ruleForm” 这个属性是方法里，用来进行表单验证的，表名要验证的表单是哪个"
              },
              {
                name: "<el-row>必填属性",
                note: "gutter 属性来指定每一栏之间的间隔，默认间隔为 0",
                notelink:
                  '<a target="_blank" href="https://element.eleme.cn/#/zh-CN/component/layout#row-attributes">官网路径</a> '
              },
              {
                name: "<el-col>必填属性",
                note: "span	栅格占据的列数,默认值为24",
                notelink:
                  '<a target="_blank" href="https://element.eleme.cn/#/zh-CN/component/layout#row-attributes">官网路径</a> '
              },
              {
                name: "<el-form-item>必填属性",
                note:
                  "1、有2个注入的字段 lable 和 prop ( prop )是来和 form 进行匹配来获取当前的 form-item 的值的<br>2、input的两个方法blur和change(input原生使用的@input)通过form传入的校验rules里面的trigger来判断"
              }
            ]
          },
          {
            field: "data代码样例",
            note:
              'data() {return {rules: {accountPeriod: [{required: true,label: "结算周期",validrule: "isPhone",validator: trigger: "change"}],dynamicValue: [{required: false,label: "车牌号",minlength: 8,validrule: "isEmail",validator: this.$utils.validateForm,trigger: "blur"}]},};}',
            source:
              '<a target="_blank" href="https://element.eleme.cn/#/zh-CN/component/form#form-methods">官网路径</a>',
            listObj: [
              {
                name: "资源",
                notelink:
                  '<a target="_blank" href="https://element.eleme.cn/#/zh-CN/component/form#form-methods">官网路径</a>   <a target="_blank" href="http://172.25.6.8:81/svn/整车销售产品中心/01_I区/00_共用产出/00_产品化标准/前端培训/组件校验效果.xlsx">SVN路径</a>'
              },
              {
                name: "rules:{propA:[],propB:[]}",
                note: "1、rlues为校验规则，在el-form-item上绑定对应的prop"
              },
              {
                name: "required",
                note: "是否必填，如不设置，则会根据校验规则自动生成，默认false"
              },
              {
                name: "label",
                note: "校验项名称，对应绑的prop的lable名称"
              },
              {
                name: "validator",
                note:
                  "1、调用自定义规则<br>2、自定义规则方法路径：src\\utils\\index.js<br>3、调用自定义规则方法：validator: this.$utils.validateForm"
              },
              {
                name: "validrule",
                note:
                  "1、 validrule: {自定义校验规则}<br>2、自定义规则方法路径：src\\utils\\index.js<br>3、调用自定义规则方法：validator: this.$utils.validateForm",
                notelist: [
                  {
                    name: "属性名称",
                    explain: "格式",
                    totle: "说明"
                  },
                  {
                    name: "isformat",
                    explain: "自定义正则",
                    totle: "isformat:/^d+$/"
                  },
                  {
                    name: "minlength",
                    explain: "最小长度",
                    totle: "minlength:8"
                  },
                  {
                    name: "maxlength",
                    explain: "最大长度",
                    totle: "maxlength:8"
                  },
                  {
                    name: "max",
                    explain: "最大值",
                    totle: "max:8"
                  },
                  {
                    name: "min",
                    explain: "最小值",
                    totle: "min:8"
                  },
                  {
                    name: "maxtime",
                    explain: "最大时间",
                    totle: "maxtime:2019-09-16 00:00:00"
                  },
                  {
                    name: "mintime",
                    explain: "最小时间",
                    totle: "mintime:2019-09-16 00:00:00"
                  },
                  {
                    name: "isword",
                    explain: "汉字",
                    totle: "isword:true"
                  },
                  {
                    name: "isPhone",
                    explain: "手机号",
                    totle: "isPhone:true"
                  },
                  {
                    name: "isEmail",
                    explain: "邮箱",
                    totle: "isEmail:true"
                  },
                  {
                    name: "iscPattern",
                    explain: "车牌号",
                    totle: "iscPattern:true"
                  },
                  {
                    name: "iscP",
                    explain: "身份证",
                    totle: "iscP:true"
                  }
                ]
              }
            ]
          }
        ],
        elMixList: [
          {
            field: "单表单内部校验",
            note:
              '<validateFormate :curLabelName="curLabelName"  :validrule="validrule"></validateFormate>',
            source: "组件路径：@/components/validateFormate",
            listObj: [
              {
                name: "资源",
                notelink:
                  '<a target="_blank" href="http://172.25.6.8:81/svn/整车销售产品中心/01_I区/00_共用产出/00_产品化标准/前端培训/组件校验效果.xlsx">SVN路径</a><br>参考例子：src\\components\\org\\carBrand\\carBrand.vue'
              },
              {
                name: "html代码",
                note: "在表单后面引入组件：validateFormate"
              },
              {
                name: "js代码",
                note:
                  "1、引入组件@/components/validateFormate<br>2、watch中监听modelCode是否需要校验，如需校验即调用this.$utils.validataMoth(pageItem, pageType)<br>3、pageItem为当前组件，默认“this”<br>4、pageType为表单名称",
                notelist: [
                  {
                    name: "pageType",
                    explain: "表单名称"
                    // totle: "说明"
                  },
                  {
                    name: "searchInputMixins",
                    explain: "通用搜索输入框（包含弹窗）"
                    // totle: "isformat:/^d+$/"
                  },
                  {
                    name: "dropdownMixins",
                    explain: "下拉框"
                    // totle: "minlength:8"
                  },
                  {
                    name: "inputMixins",
                    explain: "通用输入框（包含弹窗图标）"
                    // totle: "maxlength:8"
                  },
                  {
                    name: "numberInputMixins",
                    explain: "通用数字输入框"
                    // totle: "max:8"
                  }
                ]
              }
            ]
          },
          {
            field: "模板页面校验",
            note: "this.$utils.validataMoth(pageItem, pageType, template)",
            // source: "组件路径：@/components/validateFormate",
            listObj: [
              {
                name: "资源",
                notelink:
                  '<a target="_blank" href="http://172.25.6.8:81/svn/整车销售产品中心/01_I区/00_共用产出/00_产品化标准/前端培训/组件校验效果.xlsx">SVN路径</a><br>参考例子：\\src\\components\\org\\TrimPopupColor\\index.vue'
              },
              {
                name: "html代码",
                note:
                  "1、在需要校验的表单组件上添加：isRequire:true<br>2、在表单组件中添加:ref=‘comp.isRequire?comp.isRequire+ comp.compKey:comp.compKey’;如果是多模块组件校验，则需对模块进行ref注册，并在表单组件中进行对应名称的ref注册进行模块与组件间绑定<br>:validrule=‘comp.validrule’传入自定义校验规则",
                notelist: [
                  {
                    name: "template",
                    explain: "方法",
                    totle: "说明"
                  },
                  {
                    name: "oneTable单网格模板/treeTable模板",
                    explain:
                      " 1、通过ref对需要校验的组件进行注册：ref=‘comp.isRequire?comp.isRequire+ comp.compKey:comp.compKey<br>2、通过validrule把自定义规则传入组件:validrule=‘comp.validrule’",
                    totle: "例子：src\\components\\templates\\oneTable.vue"
                  },
                  {
                    name: "popusOneTable弹窗模板",
                    explain:
                      " 1、通过ref对需要校验的组件进行注册：ref=‘comp.isRequire?comp.isRequire+ comp.compKey:comp.compKey<br>2、通过validrule把自定义规则传入组件:validrule=‘comp.validrule’",
                    totle:
                      "例子：src\\components\\templates\\popupsOneTable.vue"
                  },
                  {
                    name: "twoTable模板",
                    explain:
                      "1、左边网格表单组件添加属性：ref=‘comp.isRequire?comp.isRequire+ comp.compKey:comp.compKey<br>2、通过validrule把自定义规则传入组件:validrule=‘comp.validrule’<br>2、右边网格表单组件添加属性： :ref='comp.isRequire ?  'twoTable'+comp.isRequire+ comp.compKey : comp.compKey'<br>:validrule='comp.validrule'",
                    totle: "例子：src\\components\\templates\\twoTable.vue"
                  },
                  {
                    name: "formTable模板",
                    explain:
                      "1、左边网格表单组件添加属性：ref=‘comp.isRequire?comp.isRequire+ comp.compKey:comp.compKey<br>2、通过validrule把自定义规则传入组件:validrule=‘comp.validrule’<br>2、右边网格表单组件添加属性： :ref='comp.isRequire ?  'formTable'+comp.isRequire+ comp.compKey : comp.compKey'<br>:validrule='comp.validrule'",
                    totle: "例子：src\\components\\templates\\formTable.vue"
                  },
                  {
                    name: "tableForm模板",
                    explain:
                      "1、左边网格表单组件添加属性：ref=‘comp.isRequire?comp.isRequire+ comp.compKey:comp.compKey<br>2、通过validrule把自定义规则传入组件:validrule=‘comp.validrule’<br>2、右边网格表单组件添加属性： :ref='comp.isRequire ?  'tableForm'+comp.isRequire+ comp.compKey : comp.compKey'<br>:validrule='comp.validrule'",
                    totle: "例子：src\\components\\templates\\tableForm.vue"
                  }
                ]
              },
              {
                name: "js代码",
                note:
                  "1、在查询或保存的方法中调用 this.$utils.validataMoth(pageItem, pageType, template)校验方法<br>2、在校验方法后对“this.valid”做判断，如this.valid为true时则为校验成功<br>3、pageItem为当前组件，默认“this”<br>4、pageType为校验场景（validpopup弹窗校验  validpage当前页面校验 other混入单组件）<br>5、template模板名称、绑定对应需校验的模块组件",
                notelist: [
                  {
                    name: "template",
                    explain: "方法",
                    totle: "说明"
                  },
                  {
                    name: "oneTable单网格模板/treeTable模板",
                    explain:
                      " this.$utils.validataMoth(this, 'validpage')if (this.valid) {查询/保存方法}",
                    totle:
                      "例子：src\\views\\org\\permissionManage\\roleAuthManage\\roleAuthManage.vue"
                  },
                  {
                    name: "popusOneTable弹窗模板",
                    explain:
                      "this.$utils.validataMoth(this, 'validpopup')if (this.valid) {查询/保存方法}",
                    totle:
                      "例子：src\\components\\org\\TrimPopupColor\\index.vue"
                  },
                  {
                    name: "twoTable模板",
                    explain:
                      "1、左边网格校验：this.$utils.validataMoth(this, 'validpage')if (this.valid) {查询/保存方法}<br>2、右边网格校验：this.$utils.validataMoth(this, 'validpage', 'twoTable')if (this.valid) {查询/保存方法}",
                    totle:
                      "例子：src\\views\\org\\sysManagement\\lookupMamager\\lookupMamager.vue"
                  },
                  {
                    name: "formTable模板",
                    explain:
                      "1、左边网格校验：this.$utils.validataMoth(this, 'validpage')if (this.valid) {查询/保存方法}<br>2、右边网格校验：this.$utils.validataMoth(this, 'validpage', 'formTable')if (this.valid) {查询/保存方法}",
                    totle:
                      "例子：src\\views\\ve\\acceptanceRule\\velogisticsTransportation.vue"
                  },
                  {
                    name: "tableForm模板",
                    explain:
                      "1、上部网格校验：this.$utils.validataMoth(this, 'validpage')if (this.valid) {查询/保存方法}<br>2、右下部网格校验：this.$utils.validataMoth(this, 'validpage', 'tableForm')if (this.valid) {查询/保存方法}",
                    totle:
                      "例子：src\\views\\ve\\acceptanceRule\\basementSet.vue"
                  }
                ]
              },
              {
                name: "自定义校验规则validrule",
                note:
                  "1、 validrule: {自定义校验规则}<br>2、自定义规则方法路径：src\\utils\\index.js<br>",
                notelist: [
                  {
                    name: "属性名称",
                    explain: "格式",
                    totle: "说明"
                  },
                  {
                    name: "isformat",
                    explain: "自定义正则",
                    totle: "isformat:/^d+$/"
                  },
                  {
                    name: "minlength",
                    explain: "最小长度",
                    totle: "minlength:8"
                  },
                  {
                    name: "maxlength",
                    explain: "最大长度",
                    totle: "maxlength:8"
                  },
                  {
                    name: "max",
                    explain: "最大值",
                    totle: "max:8"
                  },
                  {
                    name: "min",
                    explain: "最小值",
                    totle: "min:8"
                  },
                  {
                    name: "maxtime",
                    explain: "最大时间",
                    totle: "maxtime:2019-09-16 00:00:00"
                  },
                  {
                    name: "mintime",
                    explain: "最小时间",
                    totle: "mintime:2019-09-16 00:00:00"
                  },
                  {
                    name: "isword",
                    explain: "汉字",
                    totle: "isword:true"
                  },
                  {
                    name: "isPhone",
                    explain: "手机号",
                    totle: "isPhone:true"
                  },
                  {
                    name: "isEmail",
                    explain: "邮箱",
                    totle: "isEmail:true"
                  },
                  {
                    name: "iscPattern",
                    explain: "车牌号",
                    totle: "iscPattern:true"
                  },
                  {
                    name: "iscP",
                    explain: "身份证",
                    totle: "iscP:true"
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {},
  methods: {
    linkTo(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style scoped>
/deep/.el-header {
  background-color: #e5e5e5;
  color: #333;
  line-height: 35px;
  text-align: center;
  font-size: 16px;
  height: 35px !important;
}
/deep/.el-aside {
  color: #333;
}
/deep/.el-table .el-table__body-wrapper {
  height: 100%;
}
/deep/.demo-table-expand label.el-form-item__label,
.demo-table-expand .lableName {
  width: 20%;
  float: left;
  line-height: 20px;
  font-weight: normal;
  font-size: 12px;
  color: #e6a23c;
}
/deep/.demo-table-expand .el-form-item__content,
.demo-table-expand .note {
  float: left;
  width: 80%;
  line-height: 20px;
}
/deep/.demo-table-expand p {
  width: 100%;
  float: left;
  margin: 5px 0;
}
/deep/.demo-table-expand .el-form-item--small .el-form-item__content,
.el-form-item--small .el-form-item__label {
  line-height: 20px;
}
/deep/ .el-table__expanded-cell[class*="cell"] {
  padding: 20px;
}
/deep/.demo-table-expand .el-form-item.el-form-item--small {
  width: 100%;
}
/deep/ a {
  font-size: 12px;
  color: #409eff;
}
/deep/.demo-table-expand i {
  font-style: normal;
  display: block;
}
/deep/ .el-form-item--small.el-form-item {
  margin-bottom: 10px;
}
/deep/.el-table .cell.el-tooltip {
  white-space: normal;
  min-width: 50px;
}
/deep/.demo-table-expand ul {
  list-style: none;
  display: block;
  width: 100%;
  float: left;
  padding-inline-start: 10px;
}
/deep/.demo-table-expand li {
  width: 100%;
  float: left;
  margin-bottom: 10px;
}
/deep/.vaildate {
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
/deep/.vaildate li div {
  margin-right: 10px;
}
/deep/.vaildate li:first-child {
  color: #409eff;
  font-weight: bold;
}
/deep/.vaildate li div:first-child {
  color: #e6a23c;
  width: 100px;
}
</style>
