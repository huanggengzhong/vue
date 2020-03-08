<template>
    <div class="app-container app-container-table">
        <one-table-template
            ref="multipleTable"
            :dynamicButtons="tableButtons"
            :dynamicTableCols="tableCols"
            :dynamicComponents="tableComponents"
            :dynamicApiConfig="apiConfig"
            :dynamicFormFields="formField"
            :dynamicIsShowSelect="false"
            :dynamicIsShowMoreBtn="true"
            />
    </div>
</template>

<script>
import OneTableTemplate from "@/components/crm/Template/crmonePage"
import { CacheConfig } from "@/cache/configCache/index"
export default {
    name: 'publicPerMess',
    components: {
        OneTableTemplate
    },
    data () {
        return {
            tableComponents:
            CacheConfig.cacheData[this.$route.path] &&
            CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
            ? CacheConfig.cacheData[this.$route.path].tableComponents:
            [
              {
                compKey: "compKey1",
                labelName: "员工名称",
                codeField: "userName",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "员工编号",
                codeField: "userNameNum",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
               {
                compKey: "compKey3",
                labelName: "部门",
                codeField: "department",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              }
            ],
            formField: {
                userName: '',
                userNameNum: '',
                department: ''
            },
            tableCols: [
                {
                    prop: "select",
                    label: "选择",
                    width: null,
                    align: "center"
                },
                {
                    prop: "userName",
                    label: "员工名称",
                    width: null,
                    align: "center"
                },
                {
                    prop: "userNameNum",
                    label: "员工编号",
                    width: null,
                    align: "center"
                },
                {
                    prop: "department",
                    label: "部门",
                    width: null,
                    align: "center"
                },
                {
                    prop: "sex",
                    label: "性别",
                    width: null,
                    align: "center"
                },
                {
                    prop: "email",
                    label: "电子邮件",
                    width: null,
                    align: "center"
                },
                 {
                    prop: "phone",
                    label: "电话",
                    width: null,
                    align: "center"
                }
            ]
        }
    }
}
</script>