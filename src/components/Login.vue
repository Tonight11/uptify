<script setup>
	import TitleUI from './UI/TitleUI.vue';
	import LoaderUI from './UI/LoaderUI.vue';
	import Pokemons from './Pokemons.vue';
	import { usePokemonStore } from '../stores/pokemon';
	import { storeToRefs } from 'pinia';
	import { ref } from 'vue';

	const { loading, pokemons } = storeToRefs(usePokemonStore());
	const { load } = usePokemonStore();
	const user = ref('');
	const password = ref('');

	const login = async () => {
		if (!user.value || !password.value) {
			console.log('Заполните все поля!!');
			return;
		}
		await load();
		console.log(loading.value);
	};
</script>

<template>
	<section class="login">
		<TitleUI class="login__title">Start Free today</TitleUI>
		<form @submit.prevent="login" class="login__form form-login">
			<div class="form-login__control">
				<label for="user">Username:</label>
				<input
					type="text"
					id="user"
					v-model="user"
					placeholder="Type your username"
				/>
			</div>
			<div class="form-login__control">
				<label for="password">Password:</label>
				<input
					type="password"
					id="password"
					v-model="password"
					placeholder="*****"
				/>
			</div>
			<button type="submit" class="form-login__btn btn">Create account</button>
		</form>
		<LoaderUI v-if="loading" />
		<Pokemons v-else :items="pokemons.results" />
		<img class="sphere sphere5" src="../assets/img/sphere5.png" alt="" />
	</section>
</template>

<style lang="scss" scoped>
	.sphere5 {
		top: auto;
		left: 50%;
		transform: translateX(-50%);
		bottom: -500px;
	}
	.login {
		padding-top: 270px;
		padding-bottom: 192px;
		position: relative;
		overflow: hidden;
		@media screen and (max-width: 815px) {
			padding-top: 100px;
		}
		&__title {
			margin-bottom: 67px;
		}

		&__form {
			max-width: 512px;
			margin: 0 auto;
		}
	}
	.form-login {
		display: flex;
		flex-direction: column;
		gap: 34px;
		&__control {
			display: flex;
			flex-direction: column;
		}

		&__btn {
		}
	}
	.btn {
	}
</style>
