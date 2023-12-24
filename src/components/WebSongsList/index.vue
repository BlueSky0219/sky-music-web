<template>
  <div class="index">
    <el-table
        :data="tableData"
        style="width: 100%"
        height="700px">
      <el-table-column
          prop="date"
          label="日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "WebSongsList",
  data() {
    return {
      tableData: [],
    }
  },
  computed: {},
  methods: {},
  mounted() {
  },

}
</script>

<style scoped lang="less">
.index {
  background-color: skyblue;
}
</style>