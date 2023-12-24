<template>
  <div class="index">
    <el-table
        :data="tableData"
        style="width: 100%"
        height="735px">
      <el-table-column
          type="index"
          label="#"
          width="180">
      </el-table-column>
      <el-table-column
          prop="songName"
          label="歌曲名称"
          width="">
      </el-table-column>
      <el-table-column
          prop="songSource"
          label="歌手">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="playMusic(scope.row.songUrl,scope.row.songName)">Play
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="audioDiv">
      <span style="margin-left: 10px">正在播放: </span>
      <span>{{ playingMusic }}</span>
      <audio controls ref="audio" class="audio">
        <source :src="audioUrl"/>
      </audio>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "WebSongsList",
  data() {
    return {
      tableData: [],
      audioUrl: '',
      playingMusic: '暂无',
    }
  },
  computed: {},
  methods: {
    querySong() {
      axios({
        url: "/web/song",
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }).then((res) => {
        this.tableData = res.data.data.list
      })
    },
    playMusic(url, name) {
      this.audioUrl = url
      this.$refs.audio.src = url;
      this.playingMusic = name
      this.$refs.audio.play();
    },
  },
  beforeMount() {
    this.querySong()
  },

}
</script>

<style scoped lang="less">
.index {

  .audioDiv{
    margin-top: 10px;
    .audio {
      width: 100%;
      margin-top: 10px;
    }
  }

}
</style>
