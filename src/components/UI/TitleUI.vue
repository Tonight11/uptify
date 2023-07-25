<script setup></script>

<template>
	<h2 class="title"><slot /></h2>
</template>

<style lang="scss" scoped>
	.title {
		color: var(--white, #fff);
		text-align: center;
		font-size: 108px;
		line-height: 116px; /* 107.407% */
		text-transform: uppercase;

		@media screen and (max-width: 1150px) {
			font: 900 84px/108px Inter;
		}
		@media screen and (max-width: 815px) {
			font: 600 58px/84px Inter;
		}
		@media screen and (max-width: 500px) {
			font: 500 42px/58px Inter;
		}
	}
</style>
