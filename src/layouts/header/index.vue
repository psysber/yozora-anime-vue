<template xmlns:i-uiw="http://www.w3.org/1999/html">
	<nav class="bg-nav ">
		<div class="container m-auto flex justify-between items-center">
			<div class="relative text-main text-center h-16">
				<img src="/public/logo.png" class="w-26 h-full  ">
				<div class="absolute left-2 top-2	">
					<p class="lg:text-2xl	font-bold text-lg	   	">
						夜空动漫
					</p>
					<p class="lg:text-sm text-xs	  font-mono">Yozora Anime</p>
				</div>
			</div>
			<div class="text-main w-1/2 	">

				<ul class=" hidden gap-2 sm:hidden  md:hidden lg:flex nav-btn">
					<li>
						<router-link to="/"> 网站首页</router-link>
					</li>
					<li>
						<router-link to="novels">轻小说列表</router-link>
					</li>
					<li>
						<router-link to="novels">热门轻小说</router-link>
					</li>
					<li>
						<router-link to="novels">动画化作品</router-link>
					</li>
					<li>
						<router-link to="topics">专题</router-link>
					</li>
				</ul>
			</div>
			<div
				class="w-1/5 h-7 bg-white text-gray-700   items-center rounded-full
				hidden gap-2 sm:hidden  md:hidden lg:flex">
				<input placeholder="无尽的夜空"
							 class=" pl-3   w-full focus:outline-none focus:ring-0 focus:ring-purple-600 focus:border-transparent rounded-full ">
				<div class="h-full pl-4 pr-4 text-center  border-l-1 flex items-center	cursor-pointer">
					<i-uiw:search/>
				</div>
			</div>
			<div>
				<div class="text-main flex gap-4 p-r-2">
					<div class="flex md:flex lg:hidden gap-4">
						<i-uiw:search class="cursor-pointer"/>
						<i-uiw:menu class="cursor-pointer"/>
					</div>
					<router-link to="login">
						<i-ep:user-filled class="cursor-pointer"/>
					</router-link>

				</div>
			</div>
		</div>

	</nav>
</template>

<style lang="less">
.nav-btn li:extend(#hover_anime) {
@apply hover: cursor-pointer;
@apply transition duration-200 ease-in-out transform hover: -translate-y-1;

}


</style>
