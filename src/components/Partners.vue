<script setup>
	import IconsKenny from './icons/IconsKenny.vue';
	import IconsKob from './icons/IconsKob.vue';
	import IconsCochan from './icons/IconsCochan.vue';
	import IconsHonda from './icons/IconsHonda.vue';
	import IconsMid from './icons/IconsMid.vue';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import 'swiper/css';
	import 'swiper/css/grid';
	import 'swiper/css/pagination';

	import { Grid, Pagination } from 'swiper';

	const modules = [Grid, Pagination];
</script>

<template>
	<section class="main-partner">
		<div class="parters">
			<swiper
				:breakpoints="{ 815: { grid: { rows: 2 }, slidesPerView: 3 } }"
				:slidesPerView="1"
				:grid="{
					fill: row,
					rows: 1,
				}"
				:spaceBetween="30"
				:pagination="{
					clickable: true,
				}"
				:modules="modules"
				class="partners-swiper"
			>
				<swiper-slide>
					<div class="parters__trust">Trusted by</div>
					<div class="parters__by">16</div>
					<div class="parters__trust">dealers</div>
				</swiper-slide>
				<swiper-slide><IconsKenny /></swiper-slide>
				<swiper-slide><IconsKob /></swiper-slide>

				<swiper-slide><IconsKenny /></swiper-slide>
				<swiper-slide><IconsKob /></swiper-slide>
				<swiper-slide><IconsCochan /></swiper-slide>
				<swiper-slide><IconsCochan /></swiper-slide>
				<swiper-slide><IconsHonda /></swiper-slide>
				<swiper-slide><IconsMid /></swiper-slide>
			</swiper>
		</div>
		<img class="sphere sphere2" src="../assets/img/sphere2.png" alt="" />
		<img class="sphere sphere3" src="../assets/img/sphere3.png" alt="" />
	</section>
</template>

<style lang="scss">
	.sphere2 {
		top: -300px;
		right: -500px;
		left: auto;
	}

	.sphere3 {
		top: -200px;
		left: -500px;
	}
	.main-partner {
		position: relative;
	}
	.parters {
		padding-top: 333px;
		max-width: 1000px;
		margin: 0 auto;
		overflow: hidden;
		padding-bottom: 50px;

		@media screen and (max-width: 815px) {
			padding-top: 150px;
		}

		&__trust {
			font-size: 32px;
			line-height: 40px; /* 125% */
			text-transform: uppercase;
		}

		&__by {
			font-size: 108px;
			line-height: 100%; /* 108px */
			letter-spacing: -4.32px;
			text-transform: uppercase;
		}
	}

	.partners-swiper {
		width: 100%;
		height: 100%;
		margin-left: auto;
		margin-right: auto;
		overflow: visible !important;
	}

	.partners-swiper .swiper-slide {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 280px;
		border-radius: 16px;
		background: linear-gradient(
				315deg,
				rgba(51, 123, 190, 0.2) 0%,
				rgba(51, 123, 190, 0) 100%
			),
			rgba(255, 255, 255, 0.08);
	}

	.partners-swiper .swiper-pagination-bullets {
		bottom: -34px !important;
	}

	.partners-swiper .swiper-pagination-bullet {
		width: 12px;
		height: 12px;
		background-color: rgba(255, 255, 255, 0.16) !important;
	}
	.partners-swiper .swiper-pagination-bullet-active {
		background-color: #0a72d4 !important;
	}
</style>
