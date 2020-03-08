<!--
* description: 单日期选择器
* author: yxyan
* createdDate: 2019-07-27
* 增加文字溢出效果 liyam: 2019-08-5
-->
<template>
  <el-col :span="span">


    <label @mouseenter="ellipsvisible" @mouseleave="ellipsinvisible" v-if="isShowLabel"><span v-if="isRequire" class="iconRequired"></span>{{curLabelName | ellipsis}}</label>
    <div class="ellipsisshowName" v-show="ellipsisshow">
      <span></span>{{curLabelName}}</div>
    <el-date-picker v-model="modelCode" :type="dateType" :picker-options="pickerOptions" @change="sendCode" :value-format="format" :disabled="disabled" placeholder="选择日期" ></el-date-picker>
  </el-col>
</template>

<script>
import { inputMixins } from '@/components/mixins/inputMixins';

export default {
  name: 'datePicker',
	mixins: [inputMixins],
	props: {
		dateType: { type: String, default: 'date' },
		format: { type: String, default: 'yyyy-MM-dd' },
		// 日期控件选项类型
        dateOptionsType: { type: String, default: '' },
        // 设定时间
        dateTime:{ type: String , default: '' },
        codeTime:{type: String , default: ''}
    },
	data() {
		return {
            pickerOptions: this.dateCheck(),
            dateTimeN:''
		}
    },
    watch: {
        codeTime(val) {
             this.dateTimeN = val
        }
    },
	// created() {
	// 	const that = this;
	// 	that.pickerOptions.disabledDate = function(time) {
	// 		if (that.dateOptionsType) {
    //             switch (that.dateOptionsType) {
    //                 // 禁用当前日期之后的日期（不包括当前日期）
	// 				case '1':
    //             console.log(time.getTime)
	// 					return time.getTime() > Date.now();
	// 				// 禁用当前日期之前的日期（包括当前日期）
	// 				case '2':
	// 					return time.getTime() < Date.now();
	// 			}
	// 		}
	// 		return false;
	// 	};
	// },
   methods:{
       dateCheck() {
            const that = this
            return{
                disabledDate(time) {
                    if(that.dateOptionsType){
                        switch(that.dateOptionsType){
                            case '1':
                                if (that.dateTimeN) {
                                    return new Date(that.dateTimeN).getTime()- 8.64e7 > time.getTime()
                                }
                            case '2':
                                if (that.dateTimeN) {
                                    return new Date(that.dateTimeN).getTime() < time.getTime()
                                }
                        }
                    }

                }
            }
        }
   }
}
</script>
