<template>
  <transition name="fade">
    <div
      v-if="showing"
      @click="$emit('close')"
      class="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center"
    >
      <div
        @click.stop
        class="p-12 pt-6 w-1/3 rounded-md"
        :style="{ background: gradient }"
      >
        <div class="font-extrabold">
          Nr.{{ currpkmn.num.toString().padStart(2, "0") }}
          {{ currpkmn.species.charAt(0).toUpperCase()
          }}{{ currpkmn.species.slice(1) }}
        </div>
        <div class="flex flex-col items-center justify-center mt-10">
          <img
            class="w-32 h-full object-contain p-4"
            :src="currpkmn.sprite"
            :alt="currpkmn.species"
          />
          <p class="text-xs font-extrabold mb-6">
            Type: {{ currpkmn.types.join("/") }}
          </p>
          <p class="text-sm font-bold">Height: {{ currpkmn.height }}m</p>
          <p class="text-sm font-bold">Weight: {{ currpkmn.weight }}kg</p>
          <div class="mt-6">
            <p class="text-sm font-bold">
              "{{ currpkmn.flavorTexts[0].flavor }}" - Pokemon
              {{ currpkmn.flavorTexts[0].game }}
            </p>
          </div>
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
  computed: {
    gradient() {
      if (this.currpkmn.types[0] == "Water") {
        return `radial-gradient(circle at center, #acddfe, #2ea1fe)` 
      }
      if (this.currpkmn.types[0] == "Fire") {
        return `radial-gradient(circle at center, #fec3ac, #fe4d2e)` 
      }
      if (this.currpkmn.types[0] == "Grass") {
        return `radial-gradient(circle at center, #d1feac, #2efe5b)` 
      }
      return 'white'
      
    }
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
