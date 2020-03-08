/**
 * description: 组件混入对象
 * author: luojx
 * createdDate: 2019-07-27
 */
// 组件间传值对象
export const valueObjectMixins = {
  props: {
    valueObject: { type: Object, default: function() { return null } }
  },
  data() {
    return {
      // 当前组件中组件间传值对象
      curValueObject: this.valueObject || {
        carBrandCode: '',
        carSeriesId: '',
        smallCarTypeId: '',
        carConfigId: '',
        bigAreaId: '',
        smallAreaId: '',
        provinceId: '',
        cityId: '',
        dlrId: ''
      }
    }
  }
}
