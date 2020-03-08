<!--
* description: 库存管理
* author: yxyan
* createdDate: 2019-09-24
-->
<template>
<section class="editWholeRoleManage">
  
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px">
      <div class="app-container app-container-table">
      <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="true"
      :dynamicIsColumnDrop="true"
    />
    </div>
    </el-dialog>

 </section>
</template>