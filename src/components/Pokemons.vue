<script setup>
	const props = defineProps(['items']);
</script>

<template>
	<div class="pokemons">
		<div class="pokemons__item" v-for="item in items" :key="item.name">
			Pokemon name:{{ item.name }}
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
