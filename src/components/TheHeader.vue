<script setup>
	import { ref } from 'vue';
	const navVisible = ref(false);
</script>

<template>
	<header class="header">
		<div class="header__logo">Uptify</div>

		<div class="burger" @click="navVisible = !navVisible">
			<span></span>
			<span></span>
		</div>
		<nav
			class="header__nav nav"
			:class="{
				active: navVisible,
			}"
		>
			<ul class="nav__body">
				<router-link class="nav__link" @click="navVisible = false" to="/"
					>Главная</router-link
				>
				<router-link class="nav__link" @click="navVisible = false" to="/about"
					>О нас</router-link
				>
			</ul>
		</nav>

		<img class="sphere sphere1" src="../assets/img/sphere1.png" alt="" />
	</header>
</template>

<style lang="scss" scoped>
	.sphere1 {
		top: -500px;
		left: -50px;
	}
	.header {
		padding-top: 27px;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&__logo {
			font-size: 48px;
		}

		&__nav {
		}
	}
	.burger {
		display: block;
		background: linear-gradient(
				315deg,
				rgba(51, 123, 190, 0.2) 0%,
				rgba(51, 123, 190, 0) 100%
			),
			rgba(255, 255, 255, 0.08);
		width: 50px;
		height: 50px;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 10px;
		justify-content: center;
		align-items: flex-end;
		padding: 0 10px;
		position: relative;
		z-index: 1000;
		& span {
			background-color: white;
			height: 1px;
			display: block;
		}
		& span:nth-child(1) {
			width: 28px;
		}
		& span:nth-child(2) {
			width: 15px;
		}
	}
	.nav {
		position: fixed;
		top: 0;
		right: -100%;
		width: 0;
		height: 0;
		z-index: 100;
		background-color: black;
		transition: all 0.3s linear;
		visibility: hidden;
		opacity: 0;

		&.active {
			top: 0;
			right: 0;
			width: 100%;
			height: 100vh;
			visibility: visible;
			opacity: 1;
		}
		&__body {
			display: flex;
			flex-direction: column;
			gap: 20px;
			padding: 40px;
		}

		&__link {
			font-size: 24px;
			text-transform: uppercase;
		}
	}
</style>
