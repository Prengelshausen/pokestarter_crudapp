<template>
  <!-- eslint-disable -->
  <transition name="fade">
    <div
      v-if="showing"
      @click="$emit('close')"
      class="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center"
    >
      <div @click.stop class="bg-white p-12 pt-6 w-1/3 rounded">
        <div class="font-bold">
          Nr.{{ currpkmn.num.toString().padStart(2, "0") }}
          {{ currpkmn.species.charAt(0).toUpperCase()
          }}{{ currpkmn.species.slice(1) }}
        </div>
        <div class="flex flex-col items-center justify-center mt-10">
          <img
            class="w-32 h-full object-contain p-4 mb-6"
            :src="currpkmn.sprite"
            :alt="currpkmn.species"
          />
          <p>Height: {{ currpkmn.height }}m</p>
          <p>Weight: {{ currpkmn.weight }}kg</p>
          <p>
            Pokedex Description: "{{ currpkmn.flavorTexts[0].flavor }}" -
            Pokemon {{ currpkmn.flavorTexts[0].game }}
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showing: {
      type: Boolean,
      default: false,
    },
    currpkmn: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
