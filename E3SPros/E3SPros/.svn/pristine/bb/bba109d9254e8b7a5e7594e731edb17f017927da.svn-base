/**
 *经销商级别数据、操作
 *
 */
export const SeDbNetLevleMixin1 = {
  data() {
    return {
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 10,
        dataInfo:
            {
              oemCode: this.$store.getters.orgInfo.OEM_CODE,
              groupCode: this.$store.getters.orgInfo.GROUP_CODE,
              carBrandCode: '',
              dlrLevelCode: '',
              dlrId: '',
              beginDate: '',
              disableDate: '',
              bigAreaCode: '',
              smallAreaCode: ''
            },
        dlrShortName: '',
        val: {}
      },
      uploadHeaders: {
        Authorization: this.$store.getters.token
      }
    }
  },
  methods: {
    reset() {
      this.listQuery.dataInfo.carBrandCode = ''
      this.listQuery.dlrShortName = ''
      this.listQuery.dataInfo.dlrLevelCode = ''
    },
    getComQueCho(val) {
      console.log('选择经销商返回')
      console.log(val)
      // 关闭弹窗获取数据
      if (val != null) {
        this.seComQueChoDlrVisible = false
        var dlrShortName = []
        var dlrId = []
        for (var i = 0; i < val.length; i++) {
          dlrId.push(val[i].dlrId)
          dlrShortName.push(val[i].dlrShortName)
        }
        this.listQuery.dataInfo.dlrId = dlrId.join(',')
        this.listQuery.dlrShortName = dlrShortName.join(',')
      }
    },

    uploadSuccess(response) { // 模版svn：http://172.25.6.8:81/svn/整车销售产品中心/01_I区/00_共用产出/00_产品化标准/前端培训/经销商级别导入模版
      if (response.result === '1' && response.data.rows != null && response.data.rows.length > 0) {
        var tempList = response.data.rows

        var implistTemp = []
        // 导入Excel模块列头、数据是否必填
        var excelCols = [{ name: '组织品牌', required: true }, { name: '级别', required: true }, { name: '开始日期', required: true }, { name: '结束日期', required: true }, { name: '经销商编码', required: true }, { name: '经销商简称', required: true }]
        var isErrorTemplate = false // 模版错误
        var firstRow = tempList[0]
        excelCols.forEach(col => { // 检查模版是否错误
          if (!firstRow.hasOwnProperty(col.name)) isErrorTemplate = true
        })
        if (isErrorTemplate) {
          this.$alert('Excel模版错误', '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
          this.$refs.upload.clearFiles()
          this.implist = []
          return
        }
        var dataNullErrorMsg = ''
        for (var i = 0; i < tempList.length; i++) { // 检查数据是否为空
          if (!this.$utils.isEmpty(dataNullErrorMsg)) break
          var row = tempList[i]
          for (var j = 0; j < excelCols.length; j++) {
            var col = excelCols[j]
            if (col.required == true && this.$utils.isEmpty(row[col.name])) {
              dataNullErrorMsg = `Excel第${i + 2}行“${col.name}”不能为空`
              break
            }
          }
        }
        if (!this.$utils.isEmpty(dataNullErrorMsg)) {
          this.$alert(dataNullErrorMsg, '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
          this.$refs.upload.clearFiles()
          this.implist = []
          return
        }
        var timeNotMatch = false
        var brandNotMatch = false
        var brandNameError = ''
        var brandOptions = this.$refs.select_carBrandCode.optionDatas
        var codeField = this.$refs.select_carBrandCode.codeField
        var textField = this.$refs.select_carBrandCode.textField
        var tempbeginDate = this.listQuery.dataInfo.beginDate.substr(0, 10)
        var tempdisableDate = this.listQuery.dataInfo.disableDate.substr(0, 10)
        console.log('导入后判断')
        tempList.forEach(row => {
          if (timeNotMatch || brandNotMatch) return
          // 品牌中文转换为对应编码
          var brandItems = brandOptions.filter(o => o[textField] === row.组织品牌)
          if (brandItems.length === 0) {
            brandNotMatch = true
            brandNameError = row.组织品牌
            return
          }
          var newRow = {
            orgCarbrandName: row.组织品牌,
            carBrandCode: brandItems[0][codeField],
            dlrLevelCode: row.级别,
            beginDate: row.开始日期,
            endDate: row.结束日期,
            dlrCode: row.经销商编码,
            dlrShortName: row.经销商简称
          }
          if (newRow.beginDate !== tempbeginDate || newRow.endDate !== tempdisableDate) {
            timeNotMatch = true
          }
          implistTemp.push(newRow)
        })
        if (brandNotMatch) {
          this.$alert(`导入数据品牌名称${brandNameError}不存在`, '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
        } else if (timeNotMatch) {
          this.$alert('导入数据时间段与所选择时间段不匹配', '提示', {
            confirmButtonText: '确定',
            type: 'warning'
          })
        } else {
          this.implist = implistTemp
          this.$alert('文件导入成功', '提示', {
            confirmButtonText: '确定',
            type: 'success'
          })
        }
      } else {
        this.$alert('文件导入失败', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        })
      }
      this.$refs.upload.clearFiles()
    },
    beforeAvatarUpload(file) {
      if (this.$utils.isEmpty(this.listQuery.dataInfo.beginDate) || this.$utils.isEmpty(this.listQuery.dataInfo.disableDate)) {
        this.$alert('请先选择时间段', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        })
        return false
      }
      // 上传前对文件进行判断
      const extension = file.name.split('.')[1] === 'xls'
      const extension2 = file.name.split('.')[1] === 'xlsx'
      if (!extension && !extension2) {
        this.$alert('上传文件只能为Excel文件', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        })
      }
      return extension || extension2
    },
    uploadFalse(response, file, fileList) {
      this.$alert('文件上传失败', '提示', {
        confirmButtonText: '确定',
        type: 'warning'
      })
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    handFileListChange(file, fileList) {
      this.firstFile = fileList != null && fileList.length > 0 ? fileList[0] : {}
    },
    beforeRemove(file, fileList) {
      // this.$alert(
      //   `选择文件类型或大小不符，已移除 ${file.name}，请重新选择`,
      //   '提示',
      //   {
      //     confirmButtonText: '确定',
      //     type: 'warning'
      //   }
      // )
      return (this.firstFile.name = [])
    },
    // 处理文件选择器改变事件
    handleChange(param) {
      var url = this.uploadUrl() // API根据不同功能url不同，请配置到对应模块配置
      var that = this
      this.$requestImport(url, param, function(response) {
        console.info(response)
        that.uploadSuccess(response)
      })
    }
  }
}
