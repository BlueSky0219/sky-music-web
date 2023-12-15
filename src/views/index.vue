<template>
  <div class="index">
    <web-header></web-header>
    <web-songs-list></web-songs-list>
  </div>
</template>

<script>
import WebHeader from '@/components/WebHeader/index.vue'
import WebSongsList from "@/components/WebSongsList/index.vue";
export default {
  name: "Index",
  components: {
    WebHeader,
    WebSongsList,
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
max-width: 1200px;
  margin: 0 auto;
}
</style>