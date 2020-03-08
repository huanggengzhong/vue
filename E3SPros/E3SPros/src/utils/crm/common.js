/**
 * description: 公共方法-CRM
 * author: tfy
 * createdDate: 2019-09-05
*/
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
// import { listenerCount } from "cluster";
export const PAGE_SIZE = 10
export const PAGE_INDEX = 1
export function __group(array, subGroupLength) {
      let index = 0;
       let newArray = [];
       while(index < array.length) {
           newArray.push(array.slice(index, index += subGroupLength));
       }
       return newArray;
 }
/*简单导出
tabledataConfig：网格配置  object
api：请求API   string
callback:回调处理   function
*/
export function exportSimpleTablequery(__this, tabledataConfig, api,name, callback) {
  if (tabledataConfig && api) {
    let queryObj = {
      apiConfig: api,
      apiServices: [
        {
          apiQueryRow: tabledataConfig.queryObj.apiQueryRow
        }
      ],
      variables: {
        pageSize: 999999,
        pageIndex: tabledataConfig.pageIndex ? tabledataConfig.pageIndex : PAGE_INDEX,
        //当前中台使用的名称有dataInfo、info，具体查看API文档
        dataInfo: tabledataConfig.queryObj.params
      }
    };
    var paramD = __this.$getParams(queryObj);
    // 导出添加额外参数
    buildExportParam(__this,tabledataConfig, paramD,'',name);
    // 中台API方法
    requestGraphQL(paramD).then( (response)=> {
      try {
        response
      } catch (error) {
        showMessages(__this,"error",error);
        return
      }  
      if(response.type){
        if (callback) {
          return callback(response,paramD.excelName)
        } else {
          __this.$utils.downloadFile(response, paramD.excelName)
        }
      }else{
        showMessages(
          __this,
            "error",
            JSON.stringify(response)
          );
      }
    })
  } else {
    // 抛出错误信息，
    showMessages(__this,"error",'网格配置项不存在或API不存在');
  }
}
/*导出添加参数
queryObj  object
paramsObj   object
type  导出文件类型   
name  导出文件名称
*/
function buildExportParam(__this,tabledataConfig, paramsObj,type,name){
  var excelCols = {}
  for (var i = 0; i <tabledataConfig.colnames.length; i++) {
    excelCols[tabledataConfig.colnames[i].value] = tabledataConfig.colnames[i].label
  }
  // 数据类型
  paramsObj.dataType = type?type:'excel'
  // excel文件名称
  paramsObj.excelName = name?name:"导出"
  // 根据请求API描述excel数据对象
  paramsObj.excels = [{
    // excel sheet名称
    title: "Sheet1",
    // 对应API服务编码
    actionName: tabledataConfig.queryObj.apiConfig.ServiceCode,
    // excel列
    columns: excelCols
}]
}
/*简单网格查询返回
tabledataConfig：网格配置  object
api：请求API   string
callback:回调处理   function
*/
export function simpleTablequery(__this, tabledataConfig, api, callback) {
  if (tabledataConfig && api) {
    let queryObj = {
      // api配置
      apiConfig: api,
      // 需要调用的API服务配置
      apiServices: [
        {
          //表格中台返回网格的字段
          apiQueryRow: tabledataConfig.queryObj.apiQueryRow
        }
      ],
      //条件/实体参数（变量），根据typeParam中的定义配置
      variables: {
        pageSize: tabledataConfig.pageSize ? tabledataConfig.pageSize : PAGE_SIZE,
        pageIndex: tabledataConfig.pageIndex ? tabledataConfig.pageIndex : PAGE_INDEX,
        //当前中台使用的名称有dataInfo、info，具体查看API文档
        dataInfo: tabledataConfig.queryObj.params
      }
    };
    //转换中台请求格式数据
    var paramD = __this.$getParams(queryObj);
    // 中台API方法
    __this.listLoading=true
    requestGraphQL(paramD).then(response => {
      __this.listLoading=false
      try {
        var data = response.data[queryObj.apiConfig.ServiceCode]
      } catch (error) {
        showMessages(__this,"error",error);
        return
      }
      if (data.result == "1") {
        //网格配置项  
        tabledataConfig.pageIndex = data.pageindex;
        tabledataConfig.pageSize = data.pagesize;
        tabledataConfig.total = data.records;
        if (data.rows.length > 0) {
          if (callback) {
            return callback(data)
          } else {
            if(tabledataConfig.tableData){
              tabledataConfig.tableData = data.rows
            }
            if(tabledataConfig.tabledata){
              tabledataConfig.tabledata= data.rows
            }
          }
        } else {
          // 返回数据为空
          if(tabledataConfig.tableData){
            tabledataConfig.tableData= []
          }
          if(tabledataConfig.tabledata){
            tabledataConfig.tabledata= []
          }
          
        }
      } else {
         // 抛出错误信息，后台返回报错
        tabledataConfig.tableData = []
       showMessages(
        __this,
          "error",
          data.msg
        );
      }
    })
    .catch(response => {
      __this.listLoading=false
      console.log('请求超时或者服务器异常:'+JSON.stringify(response))
      var errInfo = "请求超时或者服务器异常";
      showMessages(
        __this,
          "error",
          errInfo
        );
    });
  } else {
    // 抛出错误信息，
    showMessages(__this,"error",'网格配置项不存在或API不存在');
  }
}
/*保存提交类封装
variables：保存传参
api：请求API   string
callback:回调处理   function
*/
export function mutationSumbit(__this, variables, api, callback) {
  if (variables && api) {
    let queryObj = {
      type: "mutation",
      // api配置
      apiConfig: api,
      // 需要调用的API服务配置
      apiServices: [
        {
           //表格中台返回网格的字段
           apiQueryRow: []
        }
      ],
      //条件/实体参数（变量），根据typeParam中的定义配置
      variables
    };
    //转换中台请求格式数据
    var paramD = __this.$getParams(queryObj);
    // 中台API方法
    requestGraphQL(paramD).then(response => {
      try {
        var data = response.data[queryObj.apiConfig.ServiceCode]
      } catch (error) {
        showMessages(__this,"error",error);
        return
      }
      if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
        showMessages(__this, "success", "成功");
        if (callback) {
          return callback()
        } else {
         return 
        }
      } else {
        showMessages(
          __this,
          "error",
          data.msg
        );
      }
    })
    // .catch(response => {
    //   console.log('请求超时或者服务器异常:'+JSON.stringify(response))
    //   var errInfo = "请求超时或者服务器异常";
    //   showMessages(
    //     __this,
    //       "error",
    //       errInfo
    //     );
    // });
  } else {
    // 抛出错误信息，
    showMessages(__this,"error",'网格配置项不存在或API不存在');
  }
}
/*网格自适应
高度、
滚动条
*/
export function __setAutoTableStyle(__this){
  let el = document.getElementsByClassName("el-table")[0].children[2];
  // let el= __this.$refs.table.$el.children[2]     // el 寻找有问题就采用此种方法
  let  h = document.documentElement.clientHeight || document.body.clientHeight;
  el.style.overflowX='auto'    //设置底部滚动条
  // 规则：浏览器窗口高度- 40（系统登陆信息高度）-40（导航栏）-40底部页签-28*2（查询条件label、查询结果label）
  // -58（查询条件内容区域）-50（table底部分页）-33（底部遮拦住弟10条数据部分）-5（可扩展调整高度）
  el.style.height=h-(40+40+40+2*28+58)-5-50-33+'px'
  __this.tableHeight=h-(40+40+40+2*28+58)-5-50
}
/*列表点击跳转详情页面
name：页面名称  string
fullPath：路径   string
rowData:传递参数   object
*/
export function jumpDetailTag(__this, name, fullPath, rowData) {
  var nowViews = __this.$store.state.tagsView.visitedViews;
  var view = __this.$route
  console.log(nowViews);
  var nowViewsLen = nowViews.length;
  for (var i = 0; i < nowViewsLen; i++) {
    if (!(nowViews[i].name == name)) {
      if (i == nowViewsLen - 1) {
        __this.$router.push({ name: name, params: rowData ? rowData : '' });
        return;
      } else {
        continue
      }
    } else {
      let nowView=nowViews[i]
      clearKeepAliveCache(__this, nowView);
      __this.$store
        .dispatch("tagsView/delView", {
          name: name,
          path: fullPath
        })
        .then(() => {
           // 清除keepAlive缓存
          __this.$router.push({ name: name, params: rowData ? rowData : '' });
        });
    }
  }
}

export function crmRegExp(type,extral){
  switch (type){
    case 'empty':return /\S/  //为空校验
    case 'telephone':return /^[0-9]\\d{10}$/;  //校验手机位数11位
    case 'tel':return /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/; //手机号码
    case 'phone':return /^\d{3}-\d{8}|\d{4}-\d{7}/; //国内电话号码
    case 'num':return /^[0-9]*$/; //数字
    case 'chinese':return /^[\u4e00-\u9fa5]{0,}$/; //汉字
    case 'email':return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/  //email地址
    case 'idCard':return /^([0-9]){7,18}(x|X)?$ 或 ^\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$/ //短身份证号码(数字、字母x结尾)
    case 'date':return /^\d{4}-\d{1,2}-\d{1,2}/ //日期格式
    case 'date':return /[1-9]\d{5}(?!\d)/ //中国邮政编码(中国邮政编码为6位数字)
    case 'ip':return /\d+\.\d+\.\d+\.\d+/ //中国邮政编码(中国邮政编码为6位数字)
  }
}

export function crmcloseView(__this,pview){
  var view = __this.$route
  var visitedViews = __this.$store.state.tagsView.visitedViews;
  var latestView = ''
  __this.$store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
    visitedViews.forEach(item => {
      if(pview==''||pview==undefined)
      {
        latestView = visitedViews.slice(-1)[0];
      }else{
        if(item.name==pview)
        {
          latestView=item;
        }
      }
    });
    if(latestView=='')
    {
      latestView = visitedViews.slice(-1)[0];
    }
    if (latestView) {
      __this.$router.push(latestView)
    } else {
      if (view.name === 'Dashboard') {
        __this.$router.replace({ path: '/redirect' + view.fullPath })
      } else {
        __this.$router.push('/')
      }
    }
    clearKeepAliveCache(__this,view);
  })
}
//关闭当前页面  清除当前页面的keep alive的缓存
function getParnt(val){
  var parent=val.$parent;
  var count=""
  for (let i = 0; i < parent.$children.length; i++) {
    if (parent.$children[i].$vnode.tag.indexOf("-AppMain") > -1) {
      return parent;
    }else{
      count="1"
    }
  }
  if(count=="1"){
    return getParnt(parent);
  }
}
// 递归
export function __getParent(_this,term,callback){
   var parent=_this.$parent
   if(parent[term]){
     callback(parent[term])
   }else{
     return __getParent(parent,term,callback)
   }
}

export function clearKeepAliveCache(that, view) {
  var vnode = null;
  var parent=getParnt(that)
  for (let i = 0; i < parent.$children.length; i++) {
    if (parent.$children[i].$vnode.tag.indexOf("-AppMain") > -1) {
      let isSet = false;
      if (parent.$children[i].$vnode.componentInstance) {
        for (
          let j = 0;
          j <
          parent.$children[i].$vnode.componentInstance.$children
            .length;
          j++
        ) {
          if (
            parent.$children[i].$vnode.componentInstance.$children[
              j
            ].$vnode.tag.indexOf("-breadcrumb") < 0
          ) {
            vnode =
              parent.$children[i].$vnode.componentInstance.$children[
                j
              ].$vnode.componentInstance.$vnode.parent;

            isSet = true;
            break;
          }
        }
      }
      if (isSet) {
        break;
      }
    }
  }

  if (vnode) {
    for (let i = 0; i < vnode.componentInstance.keys.length; i++) {
      let arr = vnode.componentInstance.keys[i].split("-");
      let path = arr[arr.length - 1];
      if (path === view.path) {
        delete vnode.componentInstance.cache[
          vnode.componentInstance.keys[i]
        ];
        vnode.componentInstance.keys.splice(i, 1);
        break;
      }
    }
  }
}
// 迭代一校验
/*
表单校验提示 
config = {
        custName: [true, /\S/, "input", that.queryObj.params.custName, "客户名称", "不能为空"],
        contactTel: [true, /\S/, "input", that.queryObj.params.contactTel, "电话", "不能为空"],
        gender: [true, /\S/, "value",that.queryObj.params.gender, "性别", "不能为空"],
        useGenderCode: [true, /\S/, "value", that.queryObj.params.useGenderCode, "性别", "不能为空"],
        SourceOfChannel: [true, /\S/, "value", that.queryObj.params.SourceOfChannel, "渠道来源", "不能为空"],
        clueLevelCode: [true, /\S/, "value", that.queryObj.params.clueLevelCode, "意向级别", "不能为空"],
        inteSeriesCode: [true, /\S/, "value", that.queryObj.params.inteSeriesCode, "意向车系", "不能为空"],
        inteTypeCode: [true, /\S/, "value", that.queryObj.params.inteTypeCode, "意向车型", "不能为空"]
      };
*/
export function showMessages(__this,type,message,isHTML){
  switch(type){
    case 'success':
    __this.$notify({
      title: '成功',
      dangerouslyUseHTMLString: isHTML?true:false,
      message: message,
      type: type
    });
    break;
    case 'warning':
    __this.$notify({
      title: '警告',
      dangerouslyUseHTMLString: isHTML?true:false,
      message: message,
      type: type
    });
    break;
    case 'warning':
    __this.$notify({
      title: '消息',
      dangerouslyUseHTMLString: isHTML?true:false,
      message: message,
      type: type
    });
    break;
    case 'error':
    __this.$notify.error({
      title: '错误',
      dangerouslyUseHTMLString: isHTML?true:false,
      message: message
    });
    break;
  }  
}

export function validForm(__this, formName, config, callback,otherValid) {
  var html = ''
  // let flag = false;
  Object.keys(config).forEach(function (key) {
    let isMust = config[key][0] //是否必填
    let reg = config[key][1]    //正则表达式
    let type = config[key][2]    //表单类型
    let val = config[key][3]    //表单值
    let name = config[key][4]   //表单name
    let warn = config[key][5]?config[key][5]:'不能为空'   //提示语句
    let events = config[key][6] //事件
    let extral =config[key][7]  //额外校验
    // message占用空格表示提示文字不在Input周边显示   { pattern: /^[0-9-_]{1,11}$/, message: '联系人手机号码的格式错误!', trigger: 'blur' };
    config[key][type] = [{ required: isMust ? true : false, message: ' ', trigger: events ? events : '' }]
    if(extral&& Object.prototype.toString.call(extral)=='[object Object]'){
      config[key][type].push(extral)
    }
    else if(extral&& Object.prototype.toString.call(extral)=='[object Array]'){
      config[key][type].concat(extral)
    }
    console.log(key);
    val=val?val:''
    if (!reg.test(val)) {
      html = html + `<div>${name}:${warn}</div>`
    }
  });
  if (html != '') {
    showMessages(__this,'error',html,true)
    callback?callback(false):''
    return
  }
  callback?callback(true):''
  return
  // 拼接完后，校验
  __this.rulescust = config
  __this.$refs[formName].validate(valid => {
    console.log('valid:' + valid)
    if (valid) {
        callback?callback(valid):''
    } else {
      if (html != '') {
        __this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        callback?callback(false):''
        return
      }
      callback?callback(true):''
    }
  });

}

export default {
  exportSimpleTablequery,
  simpleTablequery,
  jumpDetailTag,
  validForm,
  crmRegExp,
  crmcloseView,
  showMessages,
  mutationSumbit,
  __setAutoTableStyle,
  __group,
  __getParent,
  PAGE_SIZE,
  PAGE_INDEX
}