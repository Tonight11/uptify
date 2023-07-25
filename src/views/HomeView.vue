<script setup>
	import TitleUI from '../components/UI/TitleUI.vue';
	import Partners from '../components/Partners.vue';
	import Banner from '../components/Banner.vue';
	import Login from '../components/Login.vue';
</script>

<template>
	<main>
		<section class="first-screen">
			<TitleUI>Be the first who Find Out Phone NUmber Change_</TitleUI>
		</section>
		<Partners />
		<section class="third-screen">
			<TitleUI>Powerful monitor of your dealer infestruction</TitleUI>
		</section>
		<Banner />
		<Login />
	</main>
</template>

<style lang="scss" scoped>
	.first-screen {
		padding-top: 212px;
		@media screen and (max-width: 815px) {
			padding-top: 150px;
		}
	}
	.third-screen {
		padding-top: 300px;
		@media screen and (max-width: 815px) {
			padding-top: 150px;
		}
	}
</style>
