import { ref } from 'vue';
import { getPokemons } from '../repositories/PokemonRepository';
import { defineStore } from 'pinia';

export const usePokemonStore = defineStore('pokemon', () => {
	const pokemons = ref([]);
	const loading = ref(false);

	const load = async () => {
		try {
			loading.value = true;
			const items = await getPokemons();
			console.log(items);
			pokemons.value = items;
		} catch (error) {
			console.log(error);
		} finally {
			loading.value = false;
		}
	};

	const reset = () => {
		pokemons.value = [];
		loading.value = false;
	};

	return { pokemons, loading, load, reset };
});
