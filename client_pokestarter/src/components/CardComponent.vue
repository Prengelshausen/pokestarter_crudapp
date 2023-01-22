<template>
  <div
    @click="clickCard(pkmn)"
    v-for="pkmn in pokestarter"
    :key="pkmn.num"
    class="flex flex-col w-1/6 min-h-fit h-80 mr-5 mb-5 p-2 cursor-pointer overflow-hidden shadow-md rounded-md border-4 border-yellow-400"
    :style="{ background: gradient(pkmn)}"
  >
    <div
      class="title flex justify-between items-center font-bold text-sm text-left"
    >
      <div>
        #{{ pkmn.num.toString().padStart(3, "0") }}
        {{ pkmn.species.charAt(0).toUpperCase() }}{{ pkmn.species.slice(1) }}
      </div>
      <div class="text-xs">
        {{ pkmn.baseStats.hp }} HP {{ pkmn.types.join("/") }}
      </div>
    </div>
    <div class="maincontent flex flex-col">
      <div
        class="imgborder flex justify-center container h-32 border-4 border-neutral-100 mb-4 shadow-sm"
        :style="{ background: gradientImg(pkmn)}"
      >
        <img
          class="w-24 h-full object-contain p-4"
          :src="pkmn.sprite"
          :alt="pkmn.species"
        />
      </div>
      <div class="stats">
        <p>Attack: {{ pkmn.baseStats.attack }}</p>
        <p>Sp.Attack: {{ pkmn.baseStats.specialattack }}</p>
        <p>Defense: {{ pkmn.baseStats.defense }}</p>
        <p>Sp.Defense: {{ pkmn.baseStats.specialdefense }}</p>
        <p>Speed: {{ pkmn.baseStats.speed }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokestarter: {
      type: Array,
    },
    showing: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["clickCard"],
  methods: {
    clickCard(pkmn) {
      this.$emit("clickCard", pkmn);
    },
    gradient(pkmn) {
      if (pkmn.types[0] == "Water") {
        return `linear-gradient(to bottom right, #acddfe, #2ea1fe)` 
      }
      if (pkmn.types[0] == "Fire") {
        return `linear-gradient(to bottom right, #fec3ac, #fe4d2e)` 
      }
      if (pkmn.types[0] == "Grass") {
        return `linear-gradient(to bottom right, #d1feac, #2efe5b)` 
      }
      return 'white'
    },
    gradientImg(pkmn) {
      if (pkmn.types[0] == "Water") {
        return `linear-gradient(to top left, #acddfe, #2ea1fe)` 
      }
      if (pkmn.types[0] == "Fire") {
        return `linear-gradient(to top left, #fec3ac, #fe4d2e)` 
      }
      if (pkmn.types[0] == "Grass") {
        return `linear-gradient(to top left, #d1feac, #2efe5b)` 
      }
      return 'white'
    }
  },
};
</script>

<style scoped>
/* .maincontent {
    margin-block: auto;
} */

.imgborder {
  border-color: #E6C68B;
}
</style>
