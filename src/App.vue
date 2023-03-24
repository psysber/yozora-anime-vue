<template>
	<div ref="scaleRef">
		<router-view v-slot="{ Component }">
			<transition name="slide-fade" mode="out-in" :duration='{enter:500, leave: 300}'>
				<component :is="Component"/>
			</transition>
		</router-view>
	</div>
</template>

<script lang="ts">


const scaleRef: any = ref(); // 实例化


const getScale = () => {
	const width = window.screen.width;
	const height = window.screen.height;
	let ww = window.innerWidth / width;
	let wh = window.innerHeight / height;
	return ww < wh ? ww : wh;
};
const setScale = () => {
	let scale = getScale();
	scaleRef.style.setProperty("--scale", scale);
}

onMounted(() => {
	setScale();
	window.addEventListener('resize', setScale);
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', setScale);
})

</script>
<style scoped lang="less">
.app {
	--scale: 1;
	min-width: 1920px;
	height: 1080px;
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
