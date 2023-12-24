<template>
  <div class="index">
    <el-button type="success" @click="openDialog">新增</el-button>

    <el-dialog title="新增歌曲" :visible.sync="dialogFormVisible" width="600px" append-to-body>
      <el-form :model="form" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="歌曲名称" prop="songName">
              <el-input v-model="form.songName" placeholder="请输入歌曲名称" maxlength="30"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="歌曲出处" prop="songSource">
              <el-input v-model="form.songSource" placeholder="请输入歌曲出处" maxlength="30"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="歌手姓名" prop="singerId">
              <el-input v-model="form.singerId" placeholder="请输入歌手姓名" maxlength="30"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="专辑名称" prop="albumId">
              <el-input v-model="form.albumId" placeholder="请输入专辑名称" maxlength="30"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-upload
              class="upload-demo"
              :action="url"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :on-success="success"
              multiple
              :limit="1"
              :on-exceed="handleExceed"
              :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="uploadSong()">确 定</el-button>
      </div>
    </el-dialog>

    <div>
      <el-table
          :data="tableData"
          style="width: 100%"
          height="700px">
        <el-table-column
            type="index"
            label="#"
            width="180">
        </el-table-column>
        <el-table-column
            prop="songName"
            label="歌曲名称"
            width="180">
        </el-table-column>
        <el-table-column
            prop="songSource"
            label="歌曲出处">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Index from "@/views/index.vue";
import axios from "axios";

export default {
  name: "SysMusic",
  components: {Index},
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        songName: '',
        songSource: '周杰伦',
        songUrl: '',
        singerId: '1',
        albumId: '1'
      },
      fileList: [],
      url: "http://localhost:8080/common/upload",
      formLabelWidth: '120px'
    }
  },
  computed: {},
  methods: {
    uploadSong() {
      this.dialogFormVisible = false
      axios({
        url: "/sys/song",
        method: "post",
        data: this.form,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then((res) => {
        // this.querySong()
        location.reload()

      })
    },
    querySong() {
      axios({
        url: "/web/song",
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then((res) => {
        this.tableData = res.data.data.list
        console.log(res)
      })
    },
    openDialog() {
      this.dialogFormVisible = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    success(response, file, fileList) {
      this.form.songUrl = response.url
    },
  },
  beforeMount() {
    this.querySong()
  },
}
</script>

<style scoped lang="less">
.index {
  max-width: 1600px;
  margin: 50px auto;

}
</style>
