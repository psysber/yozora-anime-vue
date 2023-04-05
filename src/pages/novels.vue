<template>
	<div class="container mx-auto flex flex-col gap-2 justify-between">

		<div class="flex flex-col   font-bold text-sm lg:text-base">
			<div class="mt-2    p-2">首页 » <a class="font-normal" href="/novels">轻小说列表</a></div>
			<div class="flex items-center  justify-between 		">
				<ul class="flex gap-4  	 p-2  ">
					<li @click="changeSorterIndex(0)" :class="{sorterActive:sorterIndex===0}">
						<router-link to="#">综合排序</router-link>
					</li>
					<li @click="changeSorterIndex(1)" :class="{sorterActive:sorterIndex===1}">
						<router-link to="#">最新上架</router-link>
					</li>
					<li @click="changeSorterIndex(2)" :class="{sorterActive:sorterIndex===2}">
						<router-link to="#">最多点击</router-link>
					</li>
					<li @click="changeSorterIndex(3)" :class="{sorterActive:sorterIndex===3}">
						<router-link to="#">最多评论</router-link>
					</li>
					<li @click="changeSorterIndex(4)" :class="{sorterActive:sorterIndex===4}">
						<router-link to="#">最多收藏</router-link>
					</li>
				</ul>
				<button @click="isOption=!isOption" class="flex items-center">
					<i-fe:app-menu class="mr-4"/>
				</button>
			</div>
			<transition name="slide-fade">
				<div class="bg-nav border-gray-200 border-t-1 p-2 hidden lg:flex gap-4 flex-col hover_pointer" v-if="isOption">
					<ul class="flex flex-nowrap font-normal		truncate	 gap-4 justify-start	">
						<li class="row-span-1">状态:</li>
						<li><a href="#">连载中</a></li>
						<li><a href="#">完结</a></li>
					</ul>
					<ul class="flex flex-wrap font-normal		truncate	 gap-4 justify-start">
						<li class="row-span-2">分类:</li>
						<li><a href="#">全部</a></li>
						<li><a href="#">文库精选</a></li>
						<li><a href="#">幻想</a></li>
						<li><a href="#">战斗</a></li>
						<li><a href="#">恋爱</a></li>
						<li><a href="#">异界</a></li>
						<li><a href="#">搞笑</a></li>
						<li><a href="#">日常</a></li>
						<li><a href="#">校园</a></li>
						<li><a href="#">后宫</a></li>
						<li><a href="#">科幻</a></li>
						<li><a href="#">治愈</a></li>
						<li><a href="#">超能力</a></li>
						<li><a href="#">节操</a></li>
						<li><a href="#">妖怪</a></li>
						<li><a href="#">恐怖</a></li>
						<li><a href="#">妹控</a></li>
						<li><a href="#">伪娘</a></li>
						<li><a href="#">魔法少女</a></li>
						<li><a href="#">乙女</a></li>
						<li><a href="#">同人</a></li>
						<li><a href="#">百合</a></li>
						<li><a href="#">偶像</a></li>
						<li><a href="#">悬疑</a></li>
					</ul>
					<ul class="flex flex-nowrap font-normal		truncate	 gap-4 justify-start	">
						<li class="row-span-1">排序:</li>
						<li><a href="#">正序</a></li>
						<li><a href="#">倒序</a></li>
					</ul>
				</div>
			</transition>

		</div>
		<div class="w-full text-sm lg:text-base">
			<ul class="grid lg:grid-cols-6 grid-cols-3 gap-4">
				<template v-for="i in 26" :key="i">
					<li class="flex flex-col  ">
						<div class="h-30 lg:h-50  cursor-pointer relative">
							<img src="https://img.wenku8.com/image/1/1508/1508s.jpg">
							<div
								class="opacity-0 hover:opacity-30 absolute  inset-0 z-2  transition duration-500 ease-in-out hover:bg-gray-100
										  rounded flex justify-center">
							</div>
							<div class="absolute w-full bottom-0 p-0.5 bg-black/30 right-1">
								<div class="flex text-xs justify-end text-muted   gap-2">
									<div class="flex items-center px-2">
										魔法,架空世界
									</div>
								</div>
							</div>
						</div>
						<a href="#" class="text-main truncate px-2" title="在地下城寻求邂逅是否搞错了什么">在地下城寻求邂逅是否搞错了什么</a>
						<p class="text-main text-xs text-gray-400 px-2">[连载中] <span>共111话</span></p>

					</li>
				</template>
			</ul>
		</div>
		<page-navgation class="m-b-4 "/>
	</div>

</template>

<script setup lang="ts">


const isOption = ref(false);
const sorterIndex = ref(0);
const changeSorterIndex = (index: number) => {
	sorterIndex.value = index;
}

</script>

<style lang="less" scoped>
.sorterActive {
@apply rounded bg-purple-500 px-2 text-gray-100;
}

.slide-fade-enter-active {
	transition: all 0.5s ease-out;
	height: 0;
}

.slide-fade-leave-active {
	transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(-5px);
	opacity: 0;
	height: 100%;
}
</style>
