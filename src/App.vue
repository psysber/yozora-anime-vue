<template>
	<router-view v-slot="{ Component }">
		<transition name="slide-fade" mode="out-in" :duration='{enter:500, leave: 300}'>
			<component :is="Component"/>
		</transition>
	</router-view>
</template>

<style scoped lang="less">
.app {
	background-size: 100% 100%;
	position: absolute;
	transform: scale(var(--scale)) translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	transform-origin: 0 0;
	left: 50%;
	top: 50%;
}


</style>
