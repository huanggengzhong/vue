<template>
  <div class="sel_container">
    <div style="float: left; width: 75%; height: 500px; border: 1px solid gray" id="container"></div>
    <div
      style="float: left; width: 25%; height: 500px; border: 1px solid gray; padding: 0 5px 0 5px;"
    >
      <div id="sidebar-tab">
        <div id="tab-title">
          <h3>
            <span id="t1" class="selected">地图定位</span>
            <span id="t2">周边查询</span>
            <span id="t3">驾车导航</span>
          </h3>
          <input type="hidden" id="h_code" value />
          <input type="hidden" id="h_name" value />
        </div>
        <div id="tab-content">
          <ul>
            <li>
              <div style="height: 30px">
                <input type="text" id="d_seachInput" size="50" value style="width: 80%;" />&nbsp;&nbsp;
                <input
                  type="button"
                  id="d_query"
                  @click="btsetPlace"
                  value="搜索"
                  style="line-height: 20px;
                                    height: 25px; cursor: pointer;"
                />
              </div>
              <div style="margin-top: 5px;">
                <dl>
                  <dt>查询结果</dt>
                </dl>
                <div id="d_result" style="height: 275px; border: 1px solid #ccf; overflow-y: auto;"></div>
              </div>
              <div style="margin-top: 5px;">
                <dl>
                  <dd>
                    <label id="Label6">经度：</label>
                    <input type="text" id="d_lng" value style="width: 33%;" readonly="readonly" />&nbsp;&nbsp;纬度：
                    <input
                      type="text"
                      id="d_lat"
                      value
                      style="width: 34%;"
                      readonly="readonly"
                    />
                  </dd>
                </dl>
              </div>
              <div style="margin-top: 15px;">
                <span
                  style="font-size: 14px; font-family: '微软雅黑'; font-weight: bold; vertical-align: middle;"
                >找专营店:</span>&nbsp;&nbsp;&nbsp;
                <select id="sStatus" name="sStatus" style="width: 80px">
                  <option value>请选择</option>
                  <!-- <option selected="selected" value="1">营业店</option>
                  <option value="2">在建店</option>
                  <option value="3">取消店</option>
                  <option value="4">退出店</option>
                  <option value="5">停业店</option>
                  <option value="6">虚拟店</option>
                  <option value="7">包含</option>-->
                </select>&nbsp;&nbsp;&nbsp;
                <img
                  alt
                  src="Images/con_1.png"
                  @click="SearchDLR('1')"
                  style="vertical-align: middle; cursor: pointer;"
                />&nbsp;&nbsp;&nbsp;
                <img
                  alt
                  src="Images/con_2.png"
                  @click="SearchDLR('2')"
                  style="vertical-align: middle;
                                            cursor: pointer;"
                />&nbsp;&nbsp;&nbsp;
                <img
                  alt
                  src="Images/con_3.gif"
                  onclick="SearchDLR('双品牌专营店');"
                  style="vertical-align: middle; cursor: pointer; display: none"
                />&nbsp;&nbsp;&nbsp;
                <img
                  id="tj"
                  alt
                  src="Images/con_4.gif"
                  onclick="SearchDLR('推荐专营店');"
                  style="vertical-align: middle;
                                                    cursor: pointer; visibility: hidden;"
                />
              </div>
              <div
                id="d_showPanelBtn"
                style="position: absolute; font-size: 14px; top: 50%; margin-top: -95px;
                                left: 72%; width: 20px; padding: 10px 10px; color: #000; cursor: pointer; text-align: center;
                                height: 175px; font-family: '微软雅黑'; font-weight: bold;"
              >显示专营店信息</div>
              <div
                id="d_panel"
                style="position: absolute; top: 88px; left: 51%; width: 300px;
                                height: 498px; overflow: auto; background-color: White; display: none;"
              ></div>
            </li>
          </ul>
          <ul class="hide">
            <li>
              <div style="height: 30px">
                <input type="text" id="z_seachInput" size="50" value style="width: 80%;" />&nbsp;&nbsp;
                <input
                  type="button"
                  id="z_query"
                  value="搜索"
                  style="line-height: 20px;
                                    height: 25px;"
                />
              </div>
              <div style="margin-top: 5px;">
                <dl>
                  <dt>查询结果</dt>
                </dl>
                <div id="z_result" style="height: 280px; border: 1px solid #ccf; overflow-y: auto;"></div>
                <input type="hidden" id="z_lng" value />
                <input type="hidden" id="z_lat" value />
              </div>
              <div style="margin-top: 5px;">
                <dl>
                  <dt>在附近找</dt>
                  <dd>
                    <select id="z_type" style="width: 38%"></select>&nbsp;&nbsp;&nbsp;&nbsp;
                    <label id="Label1">范围:</label>
                    <select id="z_r" style="width: 23%"></select>&nbsp;&nbsp;&nbsp;
                    <input
                      type="button"
                      id="z001_query"
                      @click="z_nearby"
                      value="搜索"
                      style="line-height: 20px;
                                            height: 25px;"
                    />
                  </dd>
                </dl>
              </div>
              <div
                id="z_showPanelBtn"
                style="position: absolute; font-size: 14px; top: 50%; margin-top: -95px;
                                left: 72%; width: 20px; padding: 10px 10px; color: #000; cursor: pointer; text-align: center;
                                height: 175px; font-family: '微软雅黑'; font-weight: bold;"
              >显示周边查询结果</div>
              <div
                id="z_panel"
                style="position: absolute; top: 88px; left: 51%; width: 300px;
                                height: 498px; overflow: auto; background-color: White; display: none;"
              ></div>
            </li>
          </ul>
          <ul class="hide">
            <li>
              <label id="Label4">从</label>
              <input type="text" id="startInput" value style="width: 42%;" />&nbsp;
              <label id="Label5">到</label>
              <input type="text" id="endInput" value style="width: 42%;" />
            </li>
            <li style="float: right">
              <input
                type="button"
                value="查询"
                @click="mDriving"
                style="line-height: 20px; height: 25px;"
              />
            </li>
            <li>
              <div>
                <dl>
                  <dt>起点列表</dt>
                </dl>
                <div
                  id="startPanel"
                  style="height: 110px; border: 1px solid #ccf; overflow-y: auto;"
                ></div>
              </div>
              <div style="margin-top: 5px;">
                <dl>
                  <dt>终点列表</dt>
                </dl>
                <div id="endPanel" style="height: 110px; border: 1px solid #ccf; overflow-y: auto;"></div>
              </div>
            </li>
            <li>
              <label id="Label2">起点：</label>
              <input type="text" id="startName" value style="width: 85%;" readonly="readonly" />
            </li>
            <li>
              <label id="Label3">终点：</label>
              <input type="text" id="endName" value style="width: 85%;" readonly="readonly" />
            </li>
            <li>
              导航方式：
              <select id="routePolicy" style="width: 120px">
                <!--<option value="0">最少时间</option>
                            <option value="1">最短距离</option>
                <option value="2">避开高速</option>-->
              </select>
              &nbsp;&nbsp;
              <input
                type="button"
                value="导航"
                @click="DriConfirm"
                style="line-height: 20px;
                                height: 25px;"
              />
            </li>
            <li>
              <div
                id="l_showPanelBtn"
                style="position: absolute; font-size: 14px; top: 50%; margin-top: -95px;
                                left: 72%; width: 20px; padding: 10px 10px; color: #000; cursor: pointer; text-align: center;
                                height: 175px; font-family: '微软雅黑'; font-weight: bold;"
              >显示导航路线结果</div>
              <div
                id="drivingPanel"
                style="position: absolute; top: 88px; left: 51%; width: 300px;
                                height: 498px; overflow: auto; background-color: White; display: none;"
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { requestGraphQL } from "@/api/commonRequest";
import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name: "BaiduMap",
  data() {
    return {
      list: [],
      currTab: "t1", //全局变量：当前切换标签id
      map: "",
      tab: "t1", //全局变量：临时页签id
      currMap: "", //
      mPoint: null,
      circle: null,
      z_markers: [], //全局变量，存放周边查询的marker集合，用于选择另外周边查询前清除
      openInfoWins: null, //用于实现周边查询结果列表行的点击事件
      startResults: null, //起点结果列表
      endResults: null, //终点结果列表
      startPoint: "",
      endPoint: "",
      startmarker: null,
      endmarker: null,
      vin: "", //接收"车辆VIN码"传参
      BILL_CODE: "", //接收"救援单号"传参 by jiangyt 20130520
      toPoi: "", //选择的救援点名称 使用于"匹配该专营店最短距离方式的路线"按钮事件 by jiangyt 20130520
      toAddr: "", //by jiangyt 20130521
      dlrcode: "", //目标专营店编码 by jiangyt 20130521
      DLR_CODE: "", //by jiangyt 20130710
      openInfoWinFuns: [],
      startDeters: [],
      endDeters: [],
      d_local: "",
      z_local: "",
      z01_local: "",
      startSearch: {},
      endSearch: {},
      driving: "",
      d_options: {},
      z_options: {},
      z01_options: {},
      startOption: {},
      endOption: {},
      l_isPanelShow: false,
      d_isPanelShow: false
    };
  },
  mounted() {
    let that = this;
    that.map = new BMap.Map("container");
    jQuery("#tab-title span").click(function() {
      jQuery(this)
        .addClass("selected")
        .siblings()
        .removeClass();
      jQuery("#tab-content > ul")
        .eq(jQuery("#tab-title span").index(this))
        .show()
        .siblings()
        .hide();

      that.currTab = jQuery(this).attr("id"); //当前切换页签的id
      //防止重复单击同一个标签清空内容
      //if (that.currTab != tab) {
      //切换标签过程始终保持地图最新标点的结果面板信息
      if (
        that.currTab == "t1" &&
        that.currMap != "d" &&
        that.currMap != "p" &&
        jQuery("#d_result").html() != ""
      ) {
        jQuery("#d_seachInput").attr("value", "");
        jQuery("#lng").attr("value", "");
        jQuery("#lat").attr("value", "");
        that.G("d_result").innerHTML = "";
        that.G("d_panel").innerHTML = "";
        that.d_isPanelShow = true;
        that.G("d_showPanelBtn").onclick();
      } else if (
        that.currTab == "t2" &&
        that.currMap != "z" &&
        that.currMap != "p" &&
        jQuery("#z_result").html() != ""
      ) {
        jQuery("#z_seachInput").attr("value", "");
        that.G("z_result").innerHTML = "";
        that.G("z_panel").innerHTML = "";
        z_isPanelShow = true;
        that.G("z_showPanelBtn").onclick();
      } else if (
        that.currTab == "t3" &&
        that.currMap != "l" &&
        that.currMap != "p"
      ) {
        jQuery("#startInput").attr("value", "");
        jQuery("#endInput").attr("value", "");
        jQuery("#startName").attr("value", "");
        jQuery("#endName").attr("value", "");
        that.G("startPanel").innerHTML = "";
        that.G("endPanel").innerHTML = "";
        that.G("drivingPanel").innerHTML = "";
        that.l_isPanelShow = true;
        that.G("l_showPanelBtn").onclick();
      }
      // tab = that.currTab;
      // }
    });

    // 创建Map实例
    that.map.centerAndZoom("广州", 15); // 初始化地图,设置中心点坐标和地图级别，取消用"来电电话"的城市作中心点
    that.map.addControl(new BMap.NavigationControl()); // 添加平移缩放控件
    that.map.addControl(new BMap.ScaleControl()); // 添加比例尺控件
    that.map.addControl(new BMap.OverviewMapControl()); //添加缩略地图控件
    that.map.enableScrollWheelZoom(); //启用滚轮放大缩小
    that.map.addControl(new BMap.MapTypeControl()); //添加地图类型控件

    that.d_options = {
      onSearchComplete: function(results) {
        if (that.d_local.getStatus() == BMAP_STATUS_SUCCESS) {
          var s = [];
          s.push(
            '<div style="font-family: arial,sans-serif; border: 1px solid rgb(153, 153, 153); font-size: 12px;">'
          );
          s.push(
            '<div style="background: none repeat scroll 0% 0% rgb(255, 255, 255);">'
          );
          s.push(
            '<ol style="list-style: none outside none; padding: 0pt; margin: 0pt;">'
          );
          that.openInfoWinFuns = [];
          for (var i = 0; i < results.getCurrentNumPois(); i++) {
            //var marker = addMarker(results.getPoi(i).point, i);
            var marker = new BMap.Marker(results.getPoi(i).point);
            that.map.addOverlay(marker);
            var openInfoWinFun = that.addInfoWindow(
              marker,
              results.getPoi(i),
              results.getCurrentNumPois(),
              i
            );
            that.openInfoWinFuns.push(openInfoWinFun);
            // 默认打开第一标注的信息窗口
            var selected = "";
            if (i == 0) {
              selected = "background-color:#f0f0f0;";
              openInfoWinFun();
              that.map.centerAndZoom(results.getPoi(i).point, 15);
            }
            that.list.push("list" + i);
            s.push(
              '<li id="list' +
                i +
                '" style="margin: 2px 0pt; padding: 0pt 5px 0pt 3px; cursor: pointer; overflow: hidden; line-height: 17px;' +
                selected +
                '" >'
            );

            s.push(
              '<span style="color:#CE0000;font-weight:bold;">(' +
                (i + 1) +
                ")</span>"
            );
            s.push(
              '<span style="color:#00c;text-decoration:underline"> ' +
                results
                  .getPoi(i)
                  .title.replace(
                    new RegExp(results.keyword, "g"),
                    "<b>" + results.keyword + "</b>"
                  ) +
                "</span></br>"
            );
            s.push(
              '<span style="color:#666;"> - ' +
                results.getPoi(i).address +
                "</span>"
            );
            s.push("</li>");
            s.push("");
          }
          s.push("</ol></div></div>");
          that.G("d_result").innerHTML = s.join("");
          for (let i = 0; i < that.openInfoWinFuns.length; i++) {
            that.G("list" + i).onclick = that.openInfoWinFuns[i];
          }
          //add by jiangyt 20130710
          if (that.DLR_CODE == "") {
            that.G("d_panel").innerHTML = "";
          }
        }
      },
      pageCapacity: 100
    };
    that.z_options = {
      onSearchComplete: function(results) {
        if (that.z_local.getStatus() == BMAP_STATUS_SUCCESS) {
          var s = [];
          s.push(
            '<div style="font-family: arial,sans-serif; border: 1px solid rgb(153, 153, 153); font-size: 12px;">'
          );
          s.push(
            '<div style="background: none repeat scroll 0% 0% rgb(255, 255, 255);">'
          );
          s.push(
            '<ol style="list-style: none outside none; padding: 0pt; margin: 0pt;">'
          );
          that.openInfoWinFuns = [];
          for (var i = 0; i < results.getCurrentNumPois(); i++) {
            //var marker = addMarker(results.getPoi(i).point, i);
            var marker = new BMap.Marker(results.getPoi(i).point);
            that.map.addOverlay(marker);
            var openInfoWinFun = that.addInfoWindow(
              marker,
              results.getPoi(i),
              results.getCurrentNumPois(),
              i
            );
            that.openInfoWinFuns.push(openInfoWinFun);
            // 默认打开第一标注的信息窗口
            var selected = "";
            if (i == 0) {
              selected = "background-color:#f0f0f0;";
              openInfoWinFun();
              that.map.centerAndZoom(results.getPoi(i).point, 15);
            }
            s.push(
              '<li id="z_list' +
                i +
                '" style="margin: 2px 0pt; padding: 0pt 5px 0pt 3px; cursor: pointer; overflow: hidden; line-height: 17px;' +
                selected +
                '">'
            );
            //s.push('<span style="width:1px;background:url(Images/red_labels.gif) 0 ' + (2 - i * 20) + 'px no-repeat;padding-left:10px;margin-right:3px"> </span>');
            s.push(
              '<span style="color:#CE0000;font-weight:bold;">(' +
                (i + 1) +
                ")</span>"
            );
            s.push(
              '<span style="color:#00c;text-decoration:underline"> ' +
                results
                  .getPoi(i)
                  .title.replace(
                    new RegExp(results.keyword, "g"),
                    "<b>" + results.keyword + "</b>"
                  ) +
                "</span></br>"
            );
            s.push(
              '<span style="color:#666;"> - ' +
                results.getPoi(i).address +
                "</span>"
            );
            s.push("</li>");
            s.push("");
          }
          s.push("</ol></div></div>");
          that.G("z_result").innerHTML = s.join("");
          for (let i = 0; i < that.openInfoWinFuns.length; i++) {
            that.G("z_list" + i).onclick = that.openInfoWinFuns[i];
          }
          that.G("z_panel").innerHTML = "";
        }
      },
      pageCapacity: 100
    };
    that.z01_options = {
      onSearchComplete: function(results) {
        if (that.z01_local.getStatus() == BMAP_STATUS_SUCCESS) {
          var s = [];
          s.push(
            '<div style="font-family: arial,sans-serif; border: 1px solid rgb(153, 153, 153); font-size: 12px;">'
          );
          s.push(
            '<div style="background: none repeat scroll 0% 0% rgb(255, 255, 255);">'
          );
          s.push(
            '<ol style="list-style: none outside none; padding: 0pt; margin: 0pt;">'
          );
          that.openInfoWins = [];
          for (var i = 0; i < results.getCurrentNumPois(); i++) {
            var marker = that.z01_addMarker(results.getPoi(i).point);
            var openInfoWin = that.z01_addInfoWindow(
              marker,
              results.getPoi(i),
              results.getCurrentNumPois(),
              i
            );
            that.openInfoWins.push(openInfoWin);
            s.push(
              '<li id="z01_list' +
                i +
                '" style="margin: 2px 0pt; padding: 0pt 5px 0pt 3px; cursor: pointer; overflow: hidden; line-height: 17px;" onclick="that.openInfoWins[' +
                i +
                ']()">'
            );
            //s.push('<span style="padding-left:10px;margin-right:3px"> </span>');
            s.push(
              '<span style="color:#FFD306;font-weight:bold;">(' +
                (i + 1) +
                ")</span>"
            );
            s.push(
              '<span style="color:#00c;text-decoration:underline"> ' +
                results
                  .getPoi(i)
                  .title.replace(
                    new RegExp(results.keyword, "g"),
                    "<b>" + results.keyword + "</b>"
                  ) +
                "</span></br>"
            );
            s.push(
              '<span style="color:#666;"> - ' +
                results.getPoi(i).address +
                "</span>"
            );
            s.push("</li>");
            s.push("");
          }
          s.push("</ol></div></div>");
          that.G("z_panel").innerHTML = s.join("");
          //显示面板
          z_isPanelShow = false;
          that.G("z_showPanelBtn").onclick();
        }
      },
      pageCapacity: 100
    };
    that.startOption = {
      onSearchComplete: function(results) {
        if (that.startSearch.getStatus() == BMAP_STATUS_SUCCESS) {
          that.startResults = results;
          var s = [];
          s.push(
            '<div style="font-family: arial,sans-serif; border: 1px solid rgb(153, 153, 153); font-size: 12px;">'
          );
          s.push(
            '<div style="background: none repeat scroll 0% 0% rgb(255, 255, 255);">'
          );
          s.push(
            '<ol style="list-style: none outside none; padding: 0pt; margin: 0pt;">'
          );
          that.startDeters = [];
          for (var i = 0; i < results.getCurrentNumPois(); i++) {
            let startDet = that.startDeter(i);
            that.startDeters.push(startDet);
            s.push(
              '<li style="margin: 2px 0pt; padding: 0pt 5px 0pt 3px; overflow: hidden; line-height: 17px;">'
            );
            //s.push('<span style="width:1px;background:url(Images/red_labels.gif) 0 ' + (2 - i * 20) + 'px no-repeat;padding-left:10px;margin-right:3px"> </span>');
            s.push(
              '<span style="color:#CE0000;font-weight:bold;">(' +
                (i + 1) +
                ")</span>"
            );
            s.push(
              '<a id="startid' +
                i +
                '" href="#">' +
                results.getPoi(i).title +
                "</a></br>"
            );
            s.push(
              '<span style="color:#666;"> - ' +
                results.getPoi(i).address +
                "</span>"
            );
            s.push("</li>");
            s.push("");
          }
          s.push("</ol></div></div>");
          that.G("startPanel").innerHTML = s.join("");
          for (let i = 0; i < results.getCurrentNumPois(); i++) {
            that.G("startid" + i).onclick = that.startDeters[i];
          }
        } else {
          that.startResults = null;
        }
      },
      pageCapacity: 100
    };
    that.endOption = {
      onSearchComplete: function(results) {
        if (that.endSearch.getStatus() == BMAP_STATUS_SUCCESS) {
          that.endResults = results;
          var s = [];
          s.push(
            '<div style="font-family: arial,sans-serif; border: 1px solid rgb(153, 153, 153); font-size: 12px;">'
          );
          s.push(
            '<div style="background: none repeat scroll 0% 0% rgb(255, 255, 255);">'
          );
          s.push(
            '<ol style="list-style: none outside none; padding: 0pt; margin: 0pt;">'
          );
          that.endDeters = [];
          for (var i = 0; i < results.getCurrentNumPois(); i++) {
            let endDet = that.endDeter(i);
            that.endDeters.push(endDet);
            s.push(
              '<li style="margin: 2px 0pt; padding: 0pt 5px 0pt 3px; overflow: hidden; line-height: 17px;">'
            );
            //s.push('<span style="width:1px;background:url(Images/red_labels.gif) 0 ' + (2 - i * 20) + 'px no-repeat;padding-left:10px;margin-right:3px"> </span>');
            s.push(
              '<span style="color:#CE0000;font-weight:bold;">(' +
                (i + 1) +
                ")</span>"
            );
            s.push(
              '<a id="endid' +
                i +
                '" href="#">' +
                results.getPoi(i).title +
                "</a></br>"
            );
            s.push(
              '<span style="color:#666;"> - ' +
                results.getPoi(i).address +
                "</span>"
            );
            s.push("</li>");
            s.push("");
          }
          s.push("</ol></div></div>");
          that.G("endPanel").innerHTML = s.join("");
          for (let i = 0; i < results.getCurrentNumPois(); i++) {
            that.G("endid" + i).addEventListener("click", that.endDeters[i]);
          }
        } else {
          that.endResults = null;
        }
      },
      pageCapacity: 100
    };
    //搜索实例
    that.d_local = new BMap.LocalSearch(that.map, that.d_options);
    that.z_local = new BMap.LocalSearch(that.map, that.z_options);
    that.z01_local = new BMap.LocalSearch(that.map, that.z01_options);
    that.startSearch = new BMap.LocalSearch(that.map, that.startOption);
    that.endSearch = new BMap.LocalSearch(that.map, that.endOption);
    //匹配到救援点最短距离路线的实例 add by jiangyt 20130524
    that.driving = new BMap.DrivingRoute(that.map, {
      renderOptions: { map: that.map, panel: "drivingPanel" },
      policy: 1
    });

    //jQuery("#d_query").click(that.btsetPlace());
    jQuery("#z_query").click(that.btsetPlace());
    //地图定位的关键字搜索
    var ac = new BMap.Autocomplete({
      //建立一个自动完成的对象
      input: "d_seachInput",
      location: that.map
    });
    ac.addEventListener("onhighlight", function(e) {
      var str = "";
      var _value = e.fromitem.value;
      var value = "";
      if (e.fromitem.index > -1) {
        value =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
      }
      value = "";
      if (e.toitem.index > -1) {
        _value = e.toitem.value;
        value =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
      }
    });
    ac.addEventListener("onconfirm", function(e) {
      var _value = e.item.value;
      var myValue =
        _value.province +
        _value.city +
        _value.district +
        _value.street +
        _value.business;
      that.map.clearOverlays();
      that.d_local.search(myValue);
    });
    var bc = new BMap.Autocomplete({
      //建立一个自动完成的对象
      input: "z_seachInput",
      location: that.map
    });
    bc.addEventListener("onhighlight", function(e) {
      var str = "";
      var _value = e.fromitem.value;
      var value = "";
      if (e.fromitem.index > -1) {
        value =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
      }
      value = "";
      if (e.toitem.index > -1) {
        _value = e.toitem.value;
        value =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
      }
    });
    bc.addEventListener("onconfirm", function(e) {
      var _value = e.item.value;
      var myValue =
        _value.province +
        _value.city +
        _value.district +
        _value.street +
        _value.business;
      that.map.clearOverlays(); //清除地图上所有覆盖物
      that.z_local.search(myValue);
    });
    //起点的关键字搜索
    var cc = new BMap.Autocomplete({ input: "startInput" }); //建立一个自动完成的对象
    cc.addEventListener("onhighlight", function(e) {
      var str = "";
      var _value = e.fromitem.value;
      var value = "";
      if (e.fromitem.index > -1) {
        value =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
      }
      value = "";
      if (e.toitem.index > -1) {
        _value = e.toitem.value;
        value =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
      }
    });
    cc.addEventListener("onconfirm", function(e) {
      var _value = e.item.value;
      var myValue =
        _value.province +
        _value.city +
        _value.district +
        _value.street +
        _value.business;
      that.startSearch.search(myValue);
    });
    //终点的关键字搜索
    var dc = new BMap.Autocomplete({ input: "endInput" }); //建立一个自动完成的对象
    dc.addEventListener("onhighlight", function(e) {
      var str = "";
      var _value = e.fromitem.value;
      var value = "";
      if (e.fromitem.index > -1) {
        value =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
      }
      value = "";
      if (e.toitem.index > -1) {
        _value = e.toitem.value;
        value =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
      }
    });
    dc.addEventListener("onconfirm", function(e) {
      var _value = e.item.value;
      var myValue =
        _value.province +
        _value.city +
        _value.district +
        _value.street +
        _value.business;
      that.endSearch.search(myValue);
    });

    var contextMenu = new BMap.ContextMenu();
    var txtMenuItem = [
      {
        text: "返回经纬度",
        callback: that.insertMarker
      }
    ];

    for (var i = 0; i < txtMenuItem.length; i++) {
      contextMenu.addItem(
        new BMap.MenuItem(txtMenuItem[i].text, txtMenuItem[i].callback, 100)
      );
    }
    that.map.addContextMenu(contextMenu);

    that.l_isPanelShow = false;
    //驾车导航侧面结果面板动作
    that.G("l_showPanelBtn").onclick = function() {
      if (that.l_isPanelShow == false) {
        that.l_isPanelShow = true;
        that.G("l_showPanelBtn").style.left = "49%";
        that.G("l_showPanelBtn").innerHTML = "隐藏导航路线结果";
        that.G("drivingPanel").style.display = "block";
      } else {
        that.l_isPanelShow = false;
        that.G("l_showPanelBtn").style.left = "72%";
        that.G("l_showPanelBtn").innerHTML = "显示导航路线结果";
        that.G("drivingPanel").style.display = "none";
      }
    };
    var z_isPanelShow = false;
    //周边查询侧面结果面板动作
    that.G("z_showPanelBtn").onclick = function() {
      if (z_isPanelShow == false) {
        z_isPanelShow = true;
        that.G("z_showPanelBtn").style.left = "49%";
        that.G("z_showPanelBtn").innerHTML = "隐藏周边查询结果";
        that.G("z_panel").style.display = "block";
      } else {
        z_isPanelShow = false;
        that.G("z_showPanelBtn").style.left = "72%";
        that.G("z_showPanelBtn").innerHTML = "显示周边查询结果";
        that.G("z_panel").style.display = "none";
      }
    };
    that.d_isPanelShow = false;
    //周边查询侧面结果面板动作
    that.G("d_showPanelBtn").onclick = function() {
      if (that.d_isPanelShow == false) {
        that.d_isPanelShow = true;
        that.G("d_showPanelBtn").style.left = "49%";
        that.G("d_showPanelBtn").innerHTML = "隐藏专营店信息";
        that.G("d_panel").style.display = "block";
      } else {
        that.d_isPanelShow = false;
        that.G("d_showPanelBtn").style.left = "72%";
        that.G("d_showPanelBtn").innerHTML = "显示专营店信息";
        that.G("d_panel").style.display = "none";
      }
    };

    //值列表加载
    let queryObj = {
      // api配置
      apiConfig: crmApis.mdsLookupValueQueryByPage,
      // 需要调用的API服务配置
      apiServices: [
        {
          //表格中台返回网格的字段
          apiQueryRow: ["lookupValueCode", "lookupValueName"]
        }
      ],
      //条件/实体参数（变量），根据typeParam中的定义配置
      variables: {
        pageSize: 1000,
        pageIndex: 1,
        //当前中台使用的名称有dataInfo、info，具体查看API文档
        dataInfo: { lookupTypeCode: "DB0062" } //值列表编码
      }
    };
    let paramD = that.$getParams(queryObj);
    // 调用中台API方法（可复用）
    requestGraphQL(paramD).then(response => {
      if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
        let data = response.data[queryObj.apiConfig.ServiceCode].rows;
        let html1 = "";
        for (let i = 0; i < data.length; i++) {
          html1 +=
            '<option  value="' +
            data[i].lookupValueCode +
            '">' +
            data[i].lookupValueName +
            "</option>";
        }
        jQuery("#sStatus").append(html1); //周边查询类别下拉
      }
    });
    let queryObj1 = {
      // api配置
      apiConfig: crmApis.mdsLookupValueQueryByPage,
      // 需要调用的API服务配置
      apiServices: [
        {
          //表格中台返回网格的字段
          apiQueryRow: ["lookupValueCode", "lookupValueName"]
        }
      ],
      //条件/实体参数（变量），根据typeParam中的定义配置
      variables: {
        pageSize: 1000,
        pageIndex: 1,
        //当前中台使用的名称有dataInfo、info，具体查看API文档
        dataInfo: { lookupTypeCode: "LX058" } //值列表编码
      }
    };
    let paramD1 = that.$getParams(queryObj1);
    requestGraphQL(paramD1).then(response => {
      if (response.data[queryObj1.apiConfig.ServiceCode].result == "1") {
        let data = response.data[queryObj1.apiConfig.ServiceCode].rows;
        let html1 = "";
        for (let i = 0; i < data.length; i++) {
          html1 +=
            '<option  value="' +
            data[i].lookupValueCode +
            '">' +
            data[i].lookupValueName +
            "</option>";
        }
        jQuery("#z_type").append(html1); //周边查询类别下拉
      }
    });
    let queryObj2 = {
      // api配置
      apiConfig: crmApis.mdsLookupValueQueryByPage,
      // 需要调用的API服务配置
      apiServices: [
        {
          //表格中台返回网格的字段
          apiQueryRow: ["lookupValueCode", "lookupValueName"]
        }
      ],
      //条件/实体参数（变量），根据typeParam中的定义配置
      variables: {
        pageSize: 1000,
        pageIndex: 1,
        //当前中台使用的名称有dataInfo、info，具体查看API文档
        dataInfo: { lookupTypeCode: "LX059" } //值列表编码
      }
    };
    let paramD2 = that.$getParams(queryObj2);
    requestGraphQL(paramD2).then(response => {
      if (response.data[queryObj2.apiConfig.ServiceCode].result == "1") {
        let data = response.data[queryObj2.apiConfig.ServiceCode].rows;
        let html1 = "";
        for (let i = 0; i < data.length; i++) {
          html1 +=
            '<option  value="' +
            data[i].lookupValueCode +
            '">' +
            data[i].lookupValueName +
            "</option>";
        }
        jQuery("#z_r").append(html1); //周边查询类别下拉
      }
    });
    let queryObj3 = {
      // api配置
      apiConfig: crmApis.mdsLookupValueQueryByPage,
      // 需要调用的API服务配置
      apiServices: [
        {
          //表格中台返回网格的字段
          apiQueryRow: ["lookupValueCode", "lookupValueName"]
        }
      ],
      //条件/实体参数（变量），根据typeParam中的定义配置
      variables: {
        pageSize: 1000,
        pageIndex: 1,
        //当前中台使用的名称有dataInfo、info，具体查看API文档
        dataInfo: { lookupTypeCode: "LX060" } //值列表编码
      }
    };
    let paramD3 = that.$getParams(queryObj3);
    requestGraphQL(paramD3).then(response => {
      if (response.data[queryObj3.apiConfig.ServiceCode].result == "1") {
        let data = response.data[queryObj3.apiConfig.ServiceCode].rows;
        let html1 = "";
        for (let i = 0; i < data.length; i++) {
          html1 +=
            '<option  value="' +
            data[i].lookupValueCode +
            '">' +
            data[i].lookupValueName +
            "</option>";
        }
        jQuery("#routePolicy").append(html1); //周边查询类别下拉
      }
    });
  },
  methods: {
    G(id) {
      return document.getElementById(id);
    },
    startDeter(index) {
      let that = this;

      var startDete = function() {
        that.map.clearOverlays();
        if (that.endmarker != null) {
          that.map.addOverlay(that.endmarker);
        }
        //并设置切换页签是否需要清空的变量
        that.currMap = "l";

        if (that.startmarker != null) {
          that.map.removeOverlay(that.startmarker);
        }
        that.startPoint = new BMap.Point(
          that.startResults.getPoi(index).point.lng,
          that.startResults.getPoi(index).point.lat
        );
        that.map.centerAndZoom(that.startPoint, 15);
        that.map.panTo(that.startPoint);
        var myIcon = new BMap.Icon(
          "Images/trans_icons.png",
          new BMap.Size(23, 23),
          {
            offset: new BMap.Size(10, 23),
            imageOffset: new BMap.Size(0, 0)
          }
        );
        that.startmarker = new BMap.Marker(that.startPoint, { icon: myIcon });
        that.map.addOverlay(that.startmarker);
        //显示选择的起点名称
        jQuery("#startName").attr(
          "value",
          that.startResults.getPoi(index).title
        );
      };

      return startDete;
    },

    //清空图上标点,如果有已选择终点，添加回来
    endDeter(index) {
      let that = this;
      var endDete = function() {
        that.map.clearOverlays();
        if (that.startmarker != null) {
          that.map.addOverlay(that.startmarker);
        }
        //并设置切换页签是否需要清空的变量
        that.currMap = "l";

        if (that.endmarker != null) {
          that.map.removeOverlay(that.endmarker);
        }
        that.endPoint = new BMap.Point(
          that.endResults.getPoi(index).point.lng,
          that.endResults.getPoi(index).point.lat
        );
        that.map.centerAndZoom(that.endPoint, 15);
        that.map.panTo(that.endPoint);
        var myIcon = new BMap.Icon(
          "Images/trans_icons.png",
          new BMap.Size(23, 25),
          {
            offset: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, -25)
          }
        );
        that.endmarker = new BMap.Marker(that.endPoint, { icon: myIcon });
        that.map.addOverlay(that.endmarker);
        //显示终点名称
        jQuery("#endName").attr("value", that.endResults.getPoi(index).title);
      };
      return endDete;
    },

    mDriving() {
      let that = this;
      var startPlace = document.getElementById("startInput").value;
      var endPlace = document.getElementById("endInput").value;
      that.startSearch.search(startPlace);
      that.endSearch.search(endPlace);
    },
    DriConfirm() {
      let that = this;
      if (that.startPoint == null || that.endPoint == null) {
        alert("请先选择起点或终点！");
        return;
      }
      that.map.clearOverlays();
      //        //--------add by jiangyt 20130520---
      //        if (that.startmarker != null) {
      //            that.map.removeOverlay(that.startmarker);
      //        }
      //        if (that.endmarker != null) {
      //            that.map.removeOverlay(that.endmarker);
      //        }
      //        //---------add end------------
      that.search(that.startPoint, that.endPoint, jQuery("#routePolicy").val());
      that.currMap = "l";
    },
    search(start, end, route) {
      let that = this;
      var transit = new BMap.DrivingRoute(that.map, {
        renderOptions: { map: that.map, panel: "drivingPanel" },
        policy: route
      });
      transit.search(start, end);
      that.l_isPanelShow = false;
      that.G("l_showPanelBtn").onclick();
    },
    addInfoWindow(marker, poi, len, index) {
      let that = this;
      var infoWindow = new BMap.InfoWindow(
        "<div style='line-height:1.8em;font-size:12px;'><b>名称:</b><div id='divName' style='display:inline'>" +
          poi.title +
          "</div></br><b>地址:</b><div id='divPos' style='display:inline'>" +
          poi.address +
          "</div></div>"
      );

      var openInfoWinFun = function() {
        marker.openInfoWindow(infoWindow);
        if (that.currTab == "t1") {
          that.currMap = "d";
          jQuery("#d_lng").attr("value", poi.point.lng);
          jQuery("#d_lat").attr("value", poi.point.lat);
          that.toPoi = poi.title; //保存"选择的救援点名称" add by jiangyt 20130520
          that.toAddr = poi.address; //保存"选择的救援点地址" add by jiangyt 20130521
          that.mPoint = new BMap.Point(poi.point.lng, poi.point.lat);
          that.map.centerAndZoom(that.mPoint, 15); //add by jiangyt 20130524
          that.map.panTo(that.mPoint); //add by jiangyt 20130524
          for (var cnt = 0; cnt < len; cnt++) {
            if (!document.getElementById("list" + cnt)) {
              continue;
            }
            if (cnt == index) {
              document.getElementById("list" + cnt).style.backgroundColor =
                "#f0f0f0";
            } else {
              document.getElementById("list" + cnt).style.backgroundColor =
                "#fff";
            }
          }
          //注销 by jiangyt 20130710
          //                //每次选择救援点都需要清空专营店信息和其标注 add by jiangyt 20130521
          //                if (that.z_markers != null) {
          //                    //首先清除当前地图的专营店标注
          //                    for (var i = 0; i < that.z_markers.length; i++) {
          //                        that.map.removeOverlay(that.z_markers[i]);
          //                    }
          //                    //清空"地图定位"的专营店列表信息
          //                    G("d_panel").innerHTML = "";
          //                }
        } else if (that.currTab == "t2") {
          that.currMap = "z";
          jQuery("#z_lng").attr("value", poi.point.lng);
          jQuery("#z_lat").attr("value", poi.point.lat);
          that.mPoint = new BMap.Point(poi.point.lng, poi.point.lat); //周边查询坐标
          that.map.centerAndZoom(that.mPoint, 15); //add by jiangyt 20130524
          that.map.panTo(that.mPoint); //add by jiangyt 20130524
          for (var cn = 0; cn < 50; cn++) {
            if (!document.getElementById("z_list" + cn)) {
              continue;
            }
            if (cn == index) {
              document.getElementById("z_list" + cn).style.backgroundColor =
                "#f0f0f0";
            } else {
              document.getElementById("z_list" + cn).style.backgroundColor =
                "#fff";
            }
          }
        }
      };
      marker.addEventListener("click", openInfoWinFun);
      return openInfoWinFun;
    },
    z01_addMarker(point) {
      let that = this;
      var myIcon = new BMap.Icon("Images/pin.png", new BMap.Size(20, 32), {
        anchor: new BMap.Size(10, 30)
      });
      var marker = new BMap.Marker(point, { icon: myIcon });
      that.map.addOverlay(marker);
      that.z_markers.push(marker); //用于重新周边查询前清除周边结果图标
      return marker;
    },
    z01_addInfoWindow(marker, poi, len, index) {
      let that = this;
      var infoWindow = new BMap.InfoWindow(
        "<div style='line-height:1.8em;font-size:12px;'><b>名称:</b>" +
          poi.title +
          "</br><b>地址:</b>" +
          poi.address +
          "</div>"
      );
      //openInfoWin不能使用openInfoWinfun否则多次点击类别查询时，点击其列表会标记在定位列表中
      var openInfoWin = function() {
        //that.map.panTo(poi.point);
        marker.openInfoWindow(infoWindow);
        that.map.centerAndZoom(poi.point, 15); //add by jiangyt 20130524
        that.map.panTo(poi.point); //add by jiangyt 20130524
        z_isPanelShow = true; //add by jiangyt 20130524
        that.G("z_showPanelBtn").onclick(); //add by jiangyt 20130524
        for (var cnt = 0; cnt < len; cnt++) {
          if (!document.getElementById("z01_list" + cnt)) {
            continue;
          }
          if (cnt == index) {
            document.getElementById("z01_list" + cnt).style.backgroundColor =
              "#f0f0f0";
          } else {
            document.getElementById("z01_list" + cnt).style.backgroundColor =
              "#fff";
          }
        }
      };
      marker.addEventListener("click", openInfoWin);
      return openInfoWin;
    },
    z02_addInfoWindow(marker, p, name, address, len, index) {
      let that = this;
      var infoWindow = new BMap.InfoWindow(
        "<div style='line-height:1.8em;font-size:12px;'><b>名称:</b>" +
          name +
          "</br><b>地址:</b>" +
          address +
          "</div>"
      );
      var openInfoWin = function() {
        marker.openInfoWindow(infoWindow);
        that.map.centerAndZoom(p, 15); //add by jiangyt 20130524
        that.map.panTo(p.point); //add by jiangyt 20130524
        z_isPanelShow = true; //add by jiangyt 20130524
        that.G("z_showPanelBtn").onclick(); //add by jiangyt 20130524
        for (var j = 0; j < len; j++) {
          if (!document.getElementById("z01_list" + j)) {
            continue;
          }
          if (j == index) {
            document.getElementById("z01_list" + j).style.backgroundColor =
              "#f0f0f0";
          } else {
            document.getElementById("z01_list" + j).style.backgroundColor =
              "#fff";
          }
        }
      };
      marker.addEventListener("click", openInfoWin);
      return openInfoWin;
    },
    d01_addInfoWindow(marker, p, code, name, address, len, index) {
      let that = this;
      var infoWindow = new BMap.InfoWindow(
        "<div style='line-height:1.8em;font-size:12px;'><b>名称:</b>" +
          name +
          "</br><b>地址:</b>" +
          address +
          '</br><a href="javascript:CreateDrivingLine(' +
          p.lng +
          "," +
          p.lat +
          ",'" +
          code +
          "','"
        // name +
        // "');\"><span style='font-size:12px;'>匹配到救援点最短距离路线</span></a></div>"
      );
      var openInfoWin = function() {
        marker.openInfoWindow(infoWindow);
        that.map.centerAndZoom(p, 15); //add by jiangyt 20130524
        that.map.panTo(p); //add by jiangyt 20130524
        that.d_isPanelShow = true; //add by jiangyt 20130524
        that.G("d_showPanelBtn").onclick(); //add by jiangyt 20130524
        for (var j = 0; j < len; j++) {
          if (!document.getElementById("z01_list" + j)) {
            continue;
          }
          if (j == index) {
            document.getElementById("z01_list" + j).style.backgroundColor =
              "#f0f0f0";
          } else {
            document.getElementById("z01_list" + j).style.backgroundColor =
              "#fff";
          }
        }
      };
      marker.addEventListener("click", openInfoWin);
      return openInfoWin;
    },
    d02_addInfoWindow(lng, lat, code, name, address) {
      let that = this;
      var openInfoWin = function() {
        if (that.mPoint == null) {
          alert("请先定位救援点！");
          return;
        }
        //在图上标点，并为标点添加单击事件
        var vPoi = new BMap.Point(lng, lat);
        var marker = z01_addMarker(vPoi);
        var infoWindow = new BMap.InfoWindow(
          "<div style='line-height:1.8em;font-size:12px;'><b>名称:</b>" +
            name +
            "</br><b>地址:</b>" +
            address +
            '</br><a href="javascript:CreateDrivingLine(' +
            lng +
            "," +
            lat +
            ",'" +
            code +
            "','"
          // name +
          // "');\"><span style='font-size:12px;'>匹配到救援点最短距离路线</span></a></div>"
        );
        marker.openInfoWindow(infoWindow);
        that.map.centerAndZoom(vPoi, 15);
        that.map.panTo(vPoi);
        that.d_isPanelShow = true;
        that.G("d_showPanelBtn").onclick();
        marker.addEventListener("click", openInfoWin);
      };
      return openInfoWin;
    },
    insertMarker(p) {
      let that = this;
      //   alert(jQuery("#divPos").text());d_lng
      // var re = p.lng + ";" + p.lat + ";" + jQuery("#divPos").text();
      //拼接地址加名称传给新建服务单  2018-11-1
      var addr =
        jQuery("#divPos").text() + "(" + jQuery("#divName").text() + ")";
      var re =
        jQuery("#d_lng").val() + ";" + jQuery("#d_lat").val() + ";" + addr;
      window.opener.sele(re);
      window.close();
    },
    //"地图定位"和"周边查询的定位"搜索按钮事件
    btsetPlace() {
      let that = this;
      that.map.clearOverlays();
      var textval = "";
      if ((that.currTab = "t1")) {
        textval = jQuery("#d_seachInput").val();
        that.d_local.search(textval);
      } else if ((that.currTab = "t2")) {
        textval = jQuery("#z_seachInput").val();
        that.z_local.search(textval);
      }
    },
    //周边查询附近的搜索事件
    z_nearby() {
      let that = this;
      var selectTxt = jQuery("#z_type")
        .find("option:selected")
        .text();
      //--判断是否已经定位且已选择附近类别
      if (that.mPoint != null) {
        //首先清除当前周边查询结果图标
        for (var m = 0; m < that.z_markers.length; m++) {
          that.map.removeOverlay(that.z_markers[m]);
        }
        //清除圆范围背景
        if (that.circle != null) {
          that.map.removeOverlay(that.circle);
        }
        //清空周边查询结果列表
        that.G("z_panel").innerHTML = "";
        //var r = jQuery("#z_r").val();
        var r=2000
        that.circle = new BMap.Circle(that.mPoint, r, {
          fillColor: "blue",
          strokeWeight: 1,
          fillOpacity: 0.3,
          strokeOpacity: 0.3
        });
        that.map.addOverlay(that.circle);

        //类别非"日产专营店" 、"启辰专营店"和"双品牌专营店"
        if (true) {
          var bounds = that.getSquareBounds(
            that.circle.getCenter(),
            that.circle.getRadius()
          );
          that.z01_local.searchInBounds(selectTxt, bounds);
        } else {
          //通过jQuery.ajax异步调用.net页面，获取mPoint范围内品牌专营店信息集合（坐标，名称，地址，电话），在图上标点。
          var dlrData = null;
          var dlrSta = document.getElementById("sStatus").value.toString();
        }
        that.map.centerAndZoom(that.mPoint, 15);
      } else {
        alert("请先选择一个查询结果定位后按类别搜索周边信息！");
      }
    },
    //地图定位的附近专营店按钮事件
    SearchDLR(code) {
      let that = this;
      //        //add by jiangyt 20130710
      //        if (DLR_CODE != "") {
      //            return false;
      //        }
      that.mPoint = {};
      that.mPoint.lng = jQuery("#d_lng").val();
      that.mPoint.lat = jQuery("#d_lat").val();
      if (that.mPoint != null) {
        //获取专营店json对象
        var dlrData = null;
        var dlrSta = document.getElementById("sStatus").value.toString();

        let queryObj = {
          // api配置
          apiConfig: crmApis.mdmOrgDlrQueryKiloDlrInfo,
          // 需要调用的API服务配置
          apiServices: [
            {
              //表格中台返回网格的字段
              apiQueryRow: [
                "lat",
                "lng",
                "dlrCode",
                "dlrShortName",
                "linkAddr",
                "serviceTel"
              ]
            }
          ],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: 1000,
            pageIndex: 1,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              lng: that.mPoint.lng,
              lat: that.mPoint.lat,
              carBrandCode: code,
              orgType: jQuery("#sStatus").val()
            } //值列表编码
          }
        };
        let paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
            let data = response.data[queryObj.apiConfig.ServiceCode];
            if (data != null && data != []) {
              dlrData = data.rows; //把返回字符串要转换为json对象
              var s = [];
              s.push(
                '<div style="font-family: arial,sans-serif; border: 1px solid rgb(153, 153, 153); font-size: 12px;">'
              );
              s.push(
                '<div style="background: none repeat scroll 0% 0% rgb(255, 255, 255);">'
              );
              s.push(
                '<ol style="list-style: none outside none; padding: 0pt; margin: 0pt;">'
              );
              that.openInfoWins = [];

              if (that.z_markers != null) {
                //首先清除当前地图的专营店标注
                for (var i = 0; i < that.z_markers.length; i++) {
                  that.map.removeOverlay(that.z_markers[i]);
                }
              }

              for (var i = 0; i < dlrData.length; i++) {
                //在图上标点，并为标点添加单击事件
                var vPoi = new BMap.Point(dlrData[i].lng, dlrData[i].lat);
                var marker = that.z01_addMarker(vPoi);
                //var openInfoWin = d01_addInfoWindow(marker, vPoi, that.mPoint, dlrData[i].DLR_CODE, dlrData[i].SHORT_NAME, dlrData[i].ADDR, dlrData.length, i);
                var openInfoWin = that.d01_addInfoWindow(
                  marker,
                  vPoi,
                  dlrData[i].dlrCode,
                  dlrData[i].dlrShortName,
                  dlrData[i].linkAddr,
                  dlrData.length,
                  i
                ); //修改 by jiangyt 20130521
                that.openInfoWins.push(openInfoWin);
                //定位到第一个结果上
                if (i == 1) {
                  //                                openInfoWin();
                  that.map.centerAndZoom(vPoi, 12);
                }
                s.push(
                  '<li id="z01_list' +
                    i +
                    '" style="margin: 2px 0pt; padding: 0pt 5px 0pt 3px; cursor: pointer; overflow: hidden; line-height: 17px;" onclick="that.openInfoWins[' +
                    i +
                    ']()">'
                );
                //s.push('<span style="padding-left:10px;margin-right:3px"> </span>');
                s.push(
                  '<span style="color:#FFD306;font-weight:bold;">(' +
                    (i + 1) +
                    ")</span>"
                );
                s.push(
                  "<b>" +
                    dlrData[i].dlrShortName +
                    "</b>(" +
                    dlrData[i].dlrCode +
                    ")</br>"
                ); //增加专营店编码显示 by jiangyt 20130521
                s.push(
                  '<span style="color:#666;"> - ' +
                    dlrData[i].linkAddr +
                    "</span></br>"
                );
                s.push(
                  '<span style="color:#666;"> - ' +
                    dlrData[i].serviceTel +
                    "</span>"
                );
                s.push("</li>");
                s.push("");
              }
              s.push("</ol></div></div>");
              that.G("d_panel").innerHTML = s.join("");
              //显示面板
              that.d_isPanelShow = false;
              that.G("d_showPanelBtn").onclick();
            }
          }
        });
      }
    },
    /**
     * 得到圆的内接正方形bounds
     * @param {Point} centerPoi 圆形范围的圆心
     * @param {Number} r 圆形范围的半径
     * @return 无返回值
     */
    getSquareBounds(centerPoi, r) {
      let that = this;
      var a = Math.sqrt(2) * r; //正方形边长
      that.mPoi = that.getMecator(centerPoi);
      var x0 = that.mPoi.x,
        y0 = that.mPoi.y;
      var x1 = x0 + a / 2,
        y1 = y0 + a / 2; //东北点
      var x2 = x0 - a / 2,
        y2 = y0 - a / 2; //西南点
      var ne = that.getPoi(new BMap.Pixel(x1, y1)),
        sw = that.getPoi(new BMap.Pixel(x2, y2));
      return new BMap.Bounds(sw, ne);
    },
    //根据球面坐标获得平面坐标。
    getMecator(poi) {
      let that = this;
      return that.map
        .getMapType()
        .getProjection()
        .lngLatToPoint(poi);
    },
    //根据平面坐标获得球面坐标。
    getPoi(mecator) {
      let that = this;
      return that.map
        .getMapType()
        .getProjection()
        .pointToLngLat(mecator);
    }
  }
};
</script>
<style>
.sel_container {
  top: 0;
  width: 100%;
  font-size: 12px;
}
/*右侧*/
#sidebar-tab {
  height: 498px;
  border: 1px solid #ccf;
  overflow: hidden;
}
#tab-title {
  margin: 0px 0px 0px 0px;
  height: 28px;
}
#tab-content {
  padding: 0px 5px 0px 5px;
  height: 470px;
}
#tab-title h3 {
  color: #666;
  font-size: 14px;
  font-weight: 400;
}
#tab-title .selected {
  color: #356aa0;
  border-bottom: 0px;
}
/*标题被选中时的样式*/
#tab-title span {
  padding: 5px 5% 5px 23px;
  border: 1px solid #ccf;
  border-right: 0px;
  margin-left: -1px;
  cursor: pointer;
}
#tab-content .hide {
  display: none;
}
/*默认让第一块内容显示，其余隐藏*/
#tab-content ul {
  width: 100%;
  padding: 0px 0px;
  overflow: hidden;
}
dt,
dd,
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
dt {
  font-size: 14px;
  font-family: "微软雅黑";
  font-weight: bold;
  border-bottom: 1px dotted #000;
  padding: 5px 0 5px 0px;
  margin: 5px 0;
}
dd {
  font-size: 12px;
  padding: 5px 0 0 0px;
}
li {
  font-size: 12px;
  padding: 5px 0 0 0px;
}
.t-c {
  text-align: center;
}
</style>