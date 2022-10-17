let pokestarter = require("./pokestarter.json");

module.exports = {
    getAllPokeStarters() {
        return pokestarter;
    },
    getPokeStarterByID(id) {
        let pokemon = pokestarter.data.filter(p => p.num == id);
        return pokemon;
    },
}