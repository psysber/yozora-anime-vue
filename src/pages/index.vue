<template>
	<div class="container mx-auto mt-2 text-main  text-sm lg:text-lg ">
		<div class="h-30   flex   lg:h-100 gap-4 ">
			<customer-swiper class=" h-full rounded-lg"/>

			<div class="grid grid-cols-2 lg:grid-cols-3 gird-rows-2 gap-4 w-5/3 lg:grid hidden  ">
				<template v-for="item in 6" :key="item">
					<div class="      relative overflow-hidden cursor-pointer
					rounded-lg hover:shadow-xl
					shadow-highlight/50 transition-shadow duration-300">
						<img class="absolute inset-0  object-cover opacity-80"
								 src="https://img.wenku8.com/image/2/2542/2542s.jpg"
						/>
						<div
							class="opacity-0 hover:opacity-90 absolute  inset-0  transition duration-500 ease-in-out hover:bg-black/50  ">
							<div class="text-invert  absolute bottom-1  w-68 overflow-line2 px-2 ">
								<p>想要成为影之实力者</p>
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>
		<div class="flex gap-4  	">
			<div class="w-full lg:w-4/5 overflow-hidden	 lg:h-full">
				<nav class=" mt-2  mb-2 p-1 lg:p-2 rounded flex justify-between">
					<p class="flex items-center gap-2">
						<i-flat-color-icons:bar-chart/>
						小说
					</p>
					<a href="#" class="text-sm lg:text-base  ">更多

					</a>
				</nav>
				<div class="w-full h-78 lg:h-128  text-sm lg:text-base">
					<ul class="flex  flex-wrap gap-4">
						<template v-for="i in 10" :key="i">
							<li class="flex-grow   w-35 lg:h-60 lg:w-50 flex flex-col">
								<a href="/detail">
									<div class="h-30 lg:h-50  cursor-pointer relative">
										<img src="https://img.wenku8.com/image/1/1508/1508s.jpg">
										<div
											class="opacity-0 hover:opacity-30 absolute  inset-0  transition duration-500 ease-in-out hover:bg-gray-100
										  rounded flex justify-center">
										</div>
									</div>
									<p class="text-main h-10 truncate px-2" title="在地下城寻求邂逅是否搞错了什么">在地下城寻求邂逅是否搞错了什么</p>

								</a>
							</li>
						</template>
					</ul>
				</div>
			</div>
			<div class="hidden lg:flex flex-col">
				<nav class=" mt-2 mb-2 p-1 lg:p-2 rounded">
					<p class="flex items-center gap-2">
						<i-icon-park:ranking-list/>
						排行
					</p>
				</nav>
				<ul class="px-2 w-65 flex flex-col gap-4   text-base">
					<template v-for="item in 10">
						<li class="flex gap-2 items-center">
							<div class="w-1/5 h-7 text-center rounded bg-nav">{{ item }}</div>
							<div class="w-4/5 h-7 overflow-clip overflow-hidden	 ">
								<a href="#" title="从指尖传出的认真的热情-青">从指尖传出的认真的热情-青</a>
							</div>
						</li>
					</template>
				</ul>
			</div>
		</div>
		<div class="flex gap-4  	">
			<div class="w-full lg:w-4/5 overflow-hidden	 lg:h-full">
				<nav class=" mt-2  mb-2 p-1 lg:p-2 rounded flex justify-between">
					<p class="flex items-center gap-2">
						<i-flat-color-icons:bar-chart/>
						漫画
					</p>
					<a href="#" class="text-sm lg:text-base  ">更多

					</a>
				</nav>
				<div class="w-full h-78 lg:h-128  text-sm lg:text-base">
					<ul class="flex  flex-wrap gap-4">
						<template v-for="i in 10" :key="i">
							<li class="flex-grow   w-35 lg:h-60 lg:w-50 flex flex-col  ">
								<div class="h-30 lg:h-50  cursor-pointer relative">
									<img src="https://img.wenku8.com/image/1/1269/1269s.jpg">
									<div
										class="opacity-0 hover:opacity-30 absolute  inset-0  transition duration-500 ease-in-out hover:bg-gray-100
										  rounded flex justify-center">
									</div>
								</div>
								<a href="#" class="text-main h-10 truncate px-2" title="游戏人生No game No life">游戏人生No game No life</a>
							</li>
						</template>
					</ul>
				</div>
			</div>
			<div class="hidden lg:flex flex-col">
				<nav class=" mt-2 mb-2 p-1 lg:p-2 rounded">
					<p class="flex items-center gap-2">
						<i-icon-park:ranking-list/>
						排行
					</p>
				</nav>
				<ul class="px-2 w-65 flex flex-col gap-4   text-base">
					<template v-for="item in 10">
						<li class="flex gap-2 items-center">
							<div class="w-1/5 h-7 text-center rounded bg-nav">{{ item }}</div>
							<div class="w-4/5 h-7 overflow-clip overflow-hidden	 ">
								<a href="#" title="从指尖传出的认真的热情-青">从指尖传出的认真的热情-青</a>
							</div>
						</li>
					</template>
				</ul>
			</div>
		</div>
		<div class="flex gap-4  	">
			<div class="w-full lg:w-4/5 overflow-hidden	 lg:h-full">
				<nav class=" mt-2  mb-2 p-1 lg:p-2 rounded flex justify-between">
					<p class="flex items-center gap-2">
						<i-flat-color-icons:bar-chart/>
						动画
					</p>
					<a href="#" class="text-sm lg:text-base  ">更多

					</a>
				</nav>
				<div class="w-full h-78 lg:h-128  text-sm lg:text-base">
					<ul class="flex  flex-wrap gap-4">
						<template v-for="i in 10" :key="i">
							<li class="flex-grow w-35 lg:h-60 lg:w-50 flex flex-col  ">
								<div class="h-30 lg:h-50  cursor-pointer relative">
									<img src="https://img.wenku8.com/image/2/2542/2542s.jpg">
									<div
										class="opacity-0 hover:opacity-30 absolute  inset-0  transition duration-500 ease-in-out hover:bg-gray-100
										  rounded flex justify-center">
									</div>
								</div>
								<a href="#" class="text-main h-10 truncate px-2" title="游戏人生No game No life">我想成为影之强者</a>
							</li>
						</template>
					</ul>
				</div>
			</div>
			<div class="hidden lg:flex flex-col">
				<nav class=" mt-2 mb-2 p-1 lg:p-2 rounded">
					<p class="flex items-center gap-2">
						<i-icon-park:ranking-list/>
						排行
					</p>
				</nav>
				<ul class="px-2 w-65 flex flex-col gap-4   text-base">
					<template v-for="item in 10">
						<li class="flex gap-2 items-center">
							<div class="w-1/5 h-7 text-center rounded bg-nav">{{ item }}</div>
							<div class="w-4/5 h-7 overflow-clip overflow-hidden	 ">
								<a href="#" title="从指尖传出的认真的热情-青">从指尖传出的认真的热情-青</a>
							</div>
						</li>
					</template>
				</ul>
			</div>
		</div>


	</div>
</template>

<script setup lang="ts">

const onSwiper = (swiper: string) => {
	console.log(swiper);
};
const onSlideChange = () => {
	console.log('slide change');
};


</script>

