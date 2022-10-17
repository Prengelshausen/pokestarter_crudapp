<template>
    <div v-for="pkmn in pokestarter" :key="pkmn.num" class="flex flex-col w-1/6 min-h-fit h-80 mr-5 mb-5 p-2 overflow-hidden shadow-md rounded-md border-4 border-yellow-400">
        <div class="title flex justify-between items-center font-bold text-sm text-left">
            <div>#{{pkmn.num.toString().padStart(3, "0")}}
                {{pkmn.species.charAt(0).toUpperCase()}}{{pkmn.species.slice(1)}}
            </div>
            <div class="text-xs">
                {{pkmn.baseStats.hp}} HP {{pkmn.types.join('/')}}
            </div>
        </div>
        <div class="maincontent flex flex-col">
            <div class="flex justify-center container h-32 border-4 border-neutral-100 mb-4">
                <img class="w-24 h-full object-contain p-4" :src="pkmn.sprite" :alt="pkmn.species" />
            </div>
            <div class="stats">
                <p>Attack: {{pkmn.baseStats.attack}} </p>
                <p>Sp.Attack: {{pkmn.baseStats.specialattack}} </p>
                <p>Defense: {{pkmn.baseStats.defense}} </p>
                <p>Sp.Defense: {{pkmn.baseStats.specialdefense}} </p>
                <p>Speed: {{pkmn.baseStats.speed}} </p>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        props: {
            pokestarter: {
                type: Array
            }
        },
        
    }
</script>

<style scoped>
/* .maincontent {
    margin-block: auto;
} */
</style>