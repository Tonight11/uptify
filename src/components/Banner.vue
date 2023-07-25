<script setup>
	import IconsKenny from './icons/IconsKenny.vue';
	import IconsKob from './icons/IconsKob.vue';
	import IconsCochan from './icons/IconsCochan.vue';
	import IconsHonda from './icons/IconsHonda.vue';
	import IconsMid from './icons/IconsMid.vue';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { Autoplay, FreeMode } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/autoplay';

	const modules = [Autoplay, FreeMode];
</script>

<template>
	<section class="brand">
		<div class="brand__inner">
			<swiper
				class="brand__slide brand__slide-t"
				:loop="true"
				:slidesPerView="'auto'"
				:looped-slides="50"
				:stopOnLastSlide="false"
				:freeMode="true"
				:space-between="15"
				:allow-touch-move="false"
				:autoplay="{
					delay: 1,
				}"
				:speed="1500"
				:modules="modules"
			>
				<swiper-slide class="brand__img">
					<IconsKenny />
				</swiper-slide>
				<swiper-slide class="brand__img"> <IconsKenny /> </swiper-slide>
				<swiper-slide class="brand__img"> <IconsKob /> </swiper-slide>
				<swiper-slide class="brand__img"> <IconsCochan /> </swiper-slide>
				<swiper-slide class="brand__img">
					<IconsKenny />
				</swiper-slide>
				<swiper-slide class="brand__img">
					<IconsCochan />
				</swiper-slide>
				<swiper-slide class="brand__img">
					<IconsKenny />
				</swiper-slide>
				<swiper-slide class="brand__img">
					<IconsHonda />
				</swiper-slide>
				<swiper-slide class="brand__img">
					<IconsMid />
				</swiper-slide>
			</swiper>
			<swiper
				class="brand__slide brand__slide-t"
				:slidesPerView="'auto'"
				:looped-slides="50"
				:stopOnLastSlide="false"
				:freeMode="true"
				dir="rtl"
				:space-between="15"
				:allow-touch-move="false"
				:autoplay="{
					delay: 1,
					disableOnInteraction: true,
				}"
				:loop="true"
				:speed="1500"
				:modules="modules"
			>
				<swiper-slide class="brand__img">
					<IconsKenny />
				</swiper-slide>
				<swiper-slide class="brand__img"> <IconsKenny /> </swiper-slide>
				<swiper-slide class="brand__img"> <IconsKob /> </swiper-slide>
				<swiper-slide class="brand__img"> <IconsCochan /> </swiper-slide>
				<swiper-slide class="brand__img">
					<IconsKenny />
				</swiper-slide>
				<swiper-slide class="brand__img">
					<IconsCochan />
				</swiper-slide>
				<swiper-slide class="brand__img">
					<IconsKenny />
				</swiper-slide>
				<swiper-slide class="brand__img">
					<IconsHonda />
				</swiper-slide>
				<swiper-slide class="brand__img">
					<IconsMid />
				</swiper-slide>
			</swiper>
			<swiper
				class="brand__slide brand__slide-t"
				:slidesPerView="'auto'"
				:looped-slides="50"
				:stopOnLastSlide="false"
				:freeMode="true"
				:space-between="15"
				:allow-touch-move="false"
				:autoplay="{
					delay: 1,
					disableOnInteraction: true,
				}"
				:loop="true"
				:speed="1500"
				:modules="modules"
			>
				<swiper-slide class="brand__img">
					<IconsKenny />
				</swiper-slide>
				<swiper-slide class="brand__img"> <IconsKenny /> </swiper-slide>
				<swiper-slide class="brand__img"> <IconsKob /> </swiper-slide>
				<swiper-slide class="brand__img"> <IconsCochan /> </swiper-slide>
				<swiper-slide class="brand__img">
					<IconsKenny />
				</swiper-slide>
				<swiper-slide class="brand__img">
					<IconsCochan />
				</swiper-slide>
				<swiper-slide class="brand__img">
					<IconsKenny />
				</swiper-slide>
				<swiper-slide class="brand__img">
					<IconsHonda />
				</swiper-slide>
				<swiper-slide class="brand__img">
					<IconsMid />
				</swiper-slide>
			</swiper>
		</div>
		<img class="sphere sphere4" src="../assets/img/sphere4.png" alt="" />
	</section>
</template>

<style lang="scss">
	.sphere4 {
		top: -1000px;
		left: auto;
		right: -500px;
	}
	.brand__slide .swiper {
		pointer-events: none !important;
	}

	.brand__slide .swiper-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		transition-timing-function: linear !important;
	}

	.brand__slide-t {
		margin-bottom: 15px;
	}

	.brand {
		position: relative;
		padding-top: 269px;

		@media screen and (max-width: 815px) {
			padding-top: 100px;
		}

		.brand__inner {
		}

		&__slide {
			display: flex;
			align-items: center;
			justify-content: space-between;

			&:last-child {
				flex-direction: row-reverse;
			}
		}

		&__img {
			border-radius: 16px;
			background: linear-gradient(
					315deg,
					rgba(51, 123, 190, 0.2) 0%,
					rgba(51, 123, 190, 0) 100%
				),
				rgba(255, 255, 255, 0.08);
			width: 300px !important;
			height: 200px;
			max-width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			@media screen and (max-width: 815px) {
				width: 400px !important;
			}
		}
	}
</style>
