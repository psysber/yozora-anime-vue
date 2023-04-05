<template>
	<swiper :modules="modules" :pagination="{ clickable: true }" style="position: relative">
		<swiper-slide class="bg-purple-500">
			<img src="https://img.tt98.com/d/file/96kaifa/2019021915241286/001.jpg">
		</swiper-slide>
		<swiper-slide>
			<img src="https://wallpapercave.com/wp/lUWJtEd.jpg"/>
		</swiper-slide>
		<swiper-slide>
			<img src="https://img.tt98.com/d/file/96kaifa/2019021915241286/001.jpg">

		</swiper-slide>
	</swiper>
</template>

<script>
import {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'

// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'
// more module style...
import 'swiper/swiper-bundle.css'

export default {
	components: {
		Swiper,
		SwiperSlide
	},
	setup() {
		return {
			modules: [Pagination]
		}
	}
}
</script>

