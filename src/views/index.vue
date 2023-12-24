  <template>
  <div class="index">
    <web-header></web-header>
    <web-songs-list></web-songs-list>
<!--    <web-audio-player></web-audio-player>-->
  </div>
</template>

<script>
import WebHeader from '@/components/WebHeader/index.vue'
import WebSongsList from "@/components/WebSongsList/index.vue";
import WebAudioPlayer from "@/components/WebAudioPlayer/index.vue";

export default {
  name: "Index",
  components: {
    WebHeader,
    WebSongsList,
    WebAudioPlayer,
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted() {
  },

}
</script>

<style scoped lang="less">
.index {
  max-width: 1600px;
  margin: 0 auto;
}
</style>
