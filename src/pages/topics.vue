<template>
	<div class="container mx-auto flex flex-col ">
		<div class="thumb-example  flex   gap-2 h-30 lg:h-100 w-full">
			<swiper
				class="h-30 lg:h-100 w-full"
				:style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff'
      }"
				:modules="modules"
				:space-between="10"
				:navigation="true"
				:thumbs="{ swiper: thumbsSwiper }"
			>
				<swiper-slide class="slide" v-for="index in 8" :key="index">
					<img :src="`https://img.tt98.com/d/file/96kaifa/2019021915241286/001.jpg`"/>
				</swiper-slide>
			</swiper>
			<swiper
				class="thumbs-swiper lg:w-160    w-0 "
				:modules="modules"
				:space-between="10"
				:slides-per-view="3"
				:watch-slides-progress="true"
				:prevent-clicks="false"
				:prevent-clicks-propagation="false"
				@swiper="setThumbsSwiper"
				:direction="'vertical'"
			>
				<swiper-slide class="slide" v-for="index in 4" :key="index">
					<img :src="`https://img.tt98.com/d/file/96kaifa/2019021915241286/001.jpg`"/>
				</swiper-slide>
			</swiper>
		</div>
		<div class="flex gap-4  lg:text-lg text-sm 	">
			<div class="flex items-center w-full my-2 justify-between 	bg-nav	">
				<ul class="flex gap-4  	 p-2  ">
					<li @click="changeSorterIndex(0)" :class="{sorterActive:sorterIndex===0}"><a href="#">全部</a></li>
					<li @click="changeSorterIndex(1)" :class="{sorterActive:sorterIndex===1}"><a href="#">漫画专题</a></li>
					<li @click="changeSorterIndex(2)" :class="{sorterActive:sorterIndex===2}"><a href="#">动画专题</a></li>
					<li @click="changeSorterIndex(3)" :class="{sorterActive:sorterIndex===3}"><a href="#">轻小说专题</a></li>
					<li @click="changeSorterIndex(4)" :class="{sorterActive:sorterIndex===4}"><a href="#">新闻</a></li>
				</ul>
			</div>
		</div>
		<div class="flex gap-2">

			<ul class="flex w-5/2 flex-col gap-2">
				<template v-for="item in 10" :key="item">
					<li class="w-full h-23 bg-nav mb-2 flex gap-2">
						<img class="w-20 lg:w-60"
								 src="https://img.zcool.cn/community/0153b5578dc49e0000012e7edaea49.jpg@1280w_1l_2o_100sh.jpg">
						<div class=" flex-grow lg:w-5/3 flex  py-2 flex-col justify-start   truncate	 ">
							<p class="lg:text-lg text-base  ">2023年{{ item }}月春季小说专题
							</p>
							<p class="lg:text-sm text-xs">2023年{{ item }}月春季小说小说介绍 </p>
							<div class="text-xs flex gap-2 mt-2">
								<span>标签:</span>
								<ul class="flex gap-2">
									<li class="bg-purple-400 px-1 text-white">轻小说</li>
									<li class="bg-purple-400 px-1 text-white">小说推荐</li>
								</ul>
							</div>
						</div>
					</li>
				</template>

			</ul>

			<div class="w-90 hidden lg:block">
				<p class="text-lg bg-nav p-2  ">近期必看</p>
				<div class="flex mb-2 ">
					<img class="w-30 h-25"
							 src="https://img.zcool.cn/community/0153b5578dc49e0000012e7edaea49.jpg@1280w_1l_2o_100sh.jpg">
					<p class="text-sm overflow-hidden h-25 p-1">
						阔诺新连载哒！3月新连载漫画不完全指北第一期
					</p>
				</div>
				<ul class="flex flex-col truncate  text-sm gap-2 px-2 ">
					<li>1. <a href="#"> 阔诺新连载哒！3月新连载漫画不完全指北第一期 </a></li>
					<li>2 .<a href="#"> 《忍者神龟：变种大乱斗》首曝预告及海报 成龙倾情加盟献声 </a></li>
					<li>3 .<a href="#"> 阔诺新连载哒！2月新连载漫画不完全指北第四期 </a></li>
					<li>4. <a href="#"> 名侦探柯南经典剧场版《名侦探柯南：贝克街的亡灵》 4月4日终于来了 </a></li>
					<li>5. <a href="#"> 声优大奖取消按性别划分奖项 2月第4周新闻汇总 </a></li>
					<li>6 .<a href="#"> 阔诺新连载哒！2月新连载漫画不完全指北第三期 </a></li>
					<li>7. <a href="#"> 第27届手冢治虫文化奖漫画大奖入围名单 2月第3周新闻汇总 </a></li>
				</ul>
			</div>
		</div>
	</div>

</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import SwiperClass, {Navigation, Thumbs} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default defineComponent({
	name: 'swiper-example-thumbs-gallery',
	title: 'Thumbs gallery with Two-way control',
	url: import.meta.url,
	components: {
		Swiper,
		SwiperSlide
	},
	setup() {
		const thumbsSwiper = ref<SwiperClass>()
		const setThumbsSwiper = (swiper: SwiperClass) => {
			thumbsSwiper.value = swiper
		}
		const sorterIndex = ref(0);
		const changeSorterIndex = (index: number) => {
			sorterIndex.value = index;
		}
		return {
			modules: [Navigation, Thumbs],
			setThumbsSwiper,
			thumbsSwiper,
			sorterIndex,
			changeSorterIndex,
		}
	}
})
</script>

<style lang="less" scoped>
ul li {
	:hover {
		cursor: pointer;
	}
}

.sorterActive {
@apply rounded bg-purple-500 px-2 text-gray-100;
}

.thumb-example {

	background-color: #FFFFFF;
}

.top-swiper,
.thumbs-swiper {
	.slide {
		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}


.thumbs-swiper {

	box-sizing: border-box;
	padding: 1rem 0;

	.slide {
		width: 100%;
		height: 30rem;
		opacity: 1;

		&:not(.swiper-slide-thumb-active) {
			opacity: 0.4;
		}
	}
}
</style>
