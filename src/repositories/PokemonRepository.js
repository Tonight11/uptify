import axios from './AxiosRepository';

export const getPokemons = async () => {
	try {
		const response = await axios.get(`/pokemon`);
		return response.data;
	} catch (error) {
		console.error('Error fetching Pokemon:', error);
		return null;
	}
};

export const getMove = async moveId => {
	try {
		const response = await axios.get(`/move/${moveId}`);
		return response.data;
	} catch (error) {
		console.error('Error fetching Move:', error);
		return null;
	}
};
