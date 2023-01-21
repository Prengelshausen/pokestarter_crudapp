<template>
  <div>Pokemon Starter of every Generation</div>
  <!-- <div v-if="showing">
    Modal here.
  </div> -->

  <ModalComponent
    :showing="showing"
    :currpkmn="currpkmn"
    @close="showing = false"
    class="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
  />

  <div class="flex flex-wrap justify-center container mx-auto w-full">
    <CardComponent
      @clickCard="clickCard"
      :pokestarter="pokestarter"
      :showing="showing"
    />
  </div>
</template>

<script>
import axios from "axios";
import CardComponent from "@/components/CardComponent.vue";
import ModalComponent from "@/components/ModalComponent.vue";
export default {
  name: "App",
  components: {
    CardComponent,
    ModalComponent,
  },
  data() {
    return {
      pokestarter: [],
      showing: false,
      currpkmn: "",
    };
  },
  methods: {
    clickCard(pkmn) {
      this.currpkmn = pkmn;
      this.showing = true;
      console.log(this.currpkmn);
    },
  },
  async created() {
    try {
      let res = await axios.get("http://localhost:3000/pokestarter/");
      this.pokestarter = res.data.data;
      console.log(this.pokestarter);
    } catch (error) {
      console.error(error);
    }
  },
};
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
