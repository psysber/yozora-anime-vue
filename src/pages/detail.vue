<template>
	<div class="container mx-auto flex flex-col gap-2 justify-between">

		<div class="flex flex-col   font-bold text-sm lg:text-base">
			<div class="mt-2    p-2">首页 » 详情 » <a class="font-normal" href="/novels">在地下城寻求邂逅是否搞错了什么</a></div>
		</div>
		<div class="flex flex-wrap gap-4 lg:p-0 p-x-5">
			<img class="h-80 w-60 flex-grow " src="https://img.wenku8.com/image/1/1508/1508s.jpg">
			<div class="text-sm w-180 flex flex-col gap-2">
				<p class="text-lg font-bold">在地下城寻求邂逅是否搞错了什么</p>
				<p>
					作者:大森藤野 / GA文库
				</p>
				<ul class="flex gap-2">

					<li>状态: 连载中</li>
					<li>更新：2023-03-12</li>
					<li>共: 5406936字</li>
				</ul>
				<div class="text-base">最新章节:</div>
				<div><a href="#">外传 剑姬神圣谭13 特典 我心中所遗留之物</a></div>
				<div class="text-base">简介:</div>
				<p class="text-purple">
					迷宫都市欧拉丽——这是一座拥有雄伟地下迷宫（通称「地下城」）的巨大都市。名为未知的兴奋、光辉显赫的荣耀，以及与可爱女孩的罗曼史。在这人们的梦想与欲望伺机而动的城市里，少年遇见了一位小小的「神仙」。吃遍所有【眷族】的闭门羹、矢志成为冒险者的少年，与成员零名的神仙，发生了一场命运的邂逅。这是少年的轨迹、女神的纪录。</p>
				<div class="flex gap-2 ">
					<button class="ring-1 text-muted  p-1 ring-purple-400 bg-purple-400">
						<router-link to="read">开始阅读</router-link>
					</button>
					<button class="ring-1 text-purple-400 p-1 ring-purple-400 ">加入书单</button>
					<button class="ring-1 text-purple-400 p-1 ring-purple-400 ">漫画/动画</button>
					<button class="ring-1 text-purple-400 p-1 ring-purple-400 ">二创社区</button>
				</div>
			</div>

		</div>
		<div>
			<ul class="flex   text-lg border-b-2	border-gery-300	">
				<li class="p-1 text-purple-400 border-b-2	border-purple-300 w-30 text-center ">目录</li>
				<li class="p-1 w-30 text-center ">评论</li>
			</ul>
			<div class="mt-4">
				<p class="text-center bg-nav font-bold">第一卷</p>
				<ul class="grid lg:grid-cols-3 grid-cols-2 gap-2">
					<li>
						<router-link to="read">序章 在地下城寻求邂逅是否搞错了什么？</router-link>
					</li>
					<li>
						<router-link to="read">第一章 世界、现实与憧憬</router-link>
					</li>
					<li>
						<router-link to="read">第二章 所以，我要奔跑</router-link>
					</li>
					<li>
						<router-link to="read">第三章 觉醒前夜</router-link>
					</li>
					<li>
						<router-link to="read">第四章 所以，我想成为他的力量</router-link>
					</li>
					<li>
						<router-link to="read">第五章 女神的恶作剧</router-link>
					</li>
					<li>
						<router-link to="read">第六章 bump of chicken</router-link>
					</li>
					<li>
						<router-link to="read">终章 眷族神话</router-link>
					</li>
					<li>
						<router-link to="read">后记 插图</router-link>
					</li>
				</ul>

			</div>
		</div>
		<div class="my-2">
			<p class="text-center bg-nav font-bold mb-2">小说推荐</p>

			<ul class="grid lg:grid-rows-1 grid-rows-auto justify-start  grid-cols-3 lg:grid-flow-col gap-4">
				<template v-for="item in 6" :key="item">
					<li>
						<img class="h-40 w-30" src="https://img.wenku8.com/image/2/2979/2979s.jpg">
						<p class="w-30 overflow-line2 text-sm">被已经不需要育成技能的勇者队伍辞退，便试着把代替遣散费拿到的领土变强
							勇者以想要成为</p>
					</li>
				</template>

			</ul>
		</div>
	</div>
</template>
