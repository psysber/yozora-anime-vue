<template>
	<!-- 自定义分页组件 -->
	<div class=" text-sm mx-auto p-1 ">
		<ul class="flex gap-2 page-items items-center">
			<li>
				<!-- <span>共{{dataNum}}条记录 第 {{cur}} / {{all}} 页</span> -->
				<span>共{{ data.dataNum }}条记录 </span>
			</li>
			<li v-if="data.cur > 1" class="prev-next">
				<!-- 点击上一页 -->
				<a v-on:click="data.cur --, pageClick()"> prev </a>
			</li>
			<template v-for="i in data.num" :key="i">
				<li>{{ i }}</li>
			</template>
			<li v-if="data.cur  == 1" class="prev-next">
				<!-- 点击第一页时显示 -->
				<a class="banclick"> prev </a>
			</li>
			<li
				v-for="index in indexs"
				v-bind:class="{ active: data.cur  == index }"
			>
				<!-- 页码 -->
				<a v-on:click="btnClick(index)"> {{ index }}</a>
			</li>
			<li v-if="data.cur  != all" class="prev-next">
				<!-- 点击下一页 -->
				<button @click="cur++, pageClick()"> next</button>
			</li>
			<li v-if="data.cur  == data.all" class="prev-next">
				<!-- 点击最后一页时显示 -->
				<a class="banclick"> next </a>
			</li>

			<li class="last_li">
				<!-- 共有多少页 -->
				跳至 <input type="text" class="h-5 w-8  " placeholder="1" @blur.prevent="changePage()" v-model="jumpPage"> 页
			</li>

			<li class="last_li">
				<!-- 共有多少页 -->
				<span
				>共<span>{{ all }}</span
				>页</span
				>
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
// 引入js文件
import {computed, reactive, toRefs} from "vue";

const emit = defineEmits(['changePage'])

// 定义返回的类型
interface dataRef {
	btnClick: (val: number) => void;
	pageClick: () => void;
	changePage: () => void;
}


const props = withDefaults(defineProps<{
	dataAll: number,
	// 当前页数
	dataCur: number,
	// 页面条数
	datanum: number,
	// 数据总量
	dataDatanum: number
}>(), {
	dataAll: 100,
	datanum: 5,
	dataDatanum: 100
})
/**
 * @name: 声明data
 * @author: camellia
 * @email: guanchao_gc@qq.com
 * @date: 2021-01-10
 */
const data: any = reactive({
	cur: Number(props.dataCur),//当前页码
	num: props.datanum, //一页显示的数量  奇数
	dataNum: props.dataDatanum,//数据的数量
	jumpPage: 0,// 跳转页码
	indexs: computed(() => {
		let left = 1;
		let right = data.all;
		let ar = [];
		if (data.all >= data.num) {
			if (data.cur > 3 && data.cur < data.all - 2) {
				left = data.cur - (data.num - 1) / 2;
				right = Number(data.cur) + Number((data.num - 1) / 2);
			} else {
				if (data.cur <= 3) {
					left = 1
					right = data.num
				} else {
					right = data.all
					left = data.all - (data.num - 1);
				}
			}
		}
		while (left <= right) {
			ar.push(left)
			left++
		}
		return ar
	})
});

/**
 * @name: 页码点击事件
 * @author: camellia
 * @email: guanchao_gc@qq.com
 * @date: 2021-01-11
 */
const btnClick = (val: Number) => {
	if (val != data.cur) {
		data.cur = val
		emit('changePage', data.cur);
	}
};
/**
 * @name: 点击上一页下一页
 * @author: camellia
 * @email: guanchao_gc@qq.com
 * @date: 2021-01-11
 */
const pageClick = () => {
	//父组件通过changePage方法来接受当前的页码
	//这里是点击下一页执行函数
	emit('changePage', data.cur)
}

/**
 * @name: 跳至 xxx 页
 * @author: camellia
 * @email: guanchao_gc@qq.com
 * @date: 2021-01-13
 */
const changePage = () => {
	if (data.jumpPage > data.all || data.jumpPage < 1 || isNaN(data.jumpPage)) {
		console.log("参数错误")
		return;
	}
	emit('changePage', Number(data.jumpPage))
}

/**
 * @name: 将data绑定值dataRef
 * @author: camellia
 * @email: guanchao_gc@qq.com
 * @date: 2021-01-10
 */
const dataRef = toRefs(data);

const getTotalPageNum = (totalRecord: number, pageSize: number) => {
	return Math.ceil(totalRecord / pageSize);
}
const all = computed(() => getTotalPageNum(props.dataDatanum, props.datanum));
</script>

<style lang="less">
.page-items {
	li {
	@apply border-1 p-x-3 min-w-10 rounded;
	}

}

</style>
