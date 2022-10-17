<template>
  <div class="flex flex-wrap justify-center container mx-auto w-full">
    <CardComponent :pokestarter="pokestarter" />
  </div>
</template>

<script>
import axios from "axios";
import CardComponent from '@/components/CardComponent.vue';
export default {
  name: 'App',
  components: {
    CardComponent
  },
  data() {
    return {
      pokestarter: []
    }
  },
  methods: {

  },
  async created () {
    try {
      let res = await axios.get("http://localhost:3000/pokestarter/");
      this.pokestarter = res.data.data;
      console.log(this.pokestarter);
    } catch (error) {
      console.error(error)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
