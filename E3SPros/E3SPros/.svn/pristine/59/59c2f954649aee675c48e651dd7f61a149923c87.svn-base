<template>
  <div class="handedcar">
<deliveryCar></deliveryCar>
<clienteleMessage></clienteleMessage>
<CarMessage></CarMessage>


  </div>
</template>

<script>
import { formMixins } from "@/components/mixins/formMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import { CacheConfig } from "@/cache/configCache/index";
import deliveryCar from './deliveryCar';
// 交车信息
import clienteleMessage from './clienteleMessage';
// 客户信息
import CarMessage from './CarMessage';
// 车辆信息
  export default {
     name: "orgBrandManage",
  // 组件混入对象
  mixins: [formMixins],
    components: {
      deliveryCar,clienteleMessage,CarMessage
    },
     data() {
    return {
      
 
    }
    }
  }
  
</script>

<style lang="scss" scoped>
.handedcar{
  border: 1px solid rgb(241, 236, 236);
  margin-top: 10px;
}
</style>