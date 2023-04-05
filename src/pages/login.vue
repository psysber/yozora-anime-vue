<template>
	<div class="w-full h-full bg-img">
		<div class="container mx-auto">
			<router-link to="/"><h1 class="text-white">夜空动漫</h1></router-link>

			<form class="lg:w-1/3 w-4/5 router-360-anime">
				<div class=" self-end text-sm">没有账号?
					<router-link to="login" class="text-invert">前往注册</router-link>
				</div>
				<label for="username">用户名:</label>
				<input type="text" id="username" name="username" required>

				<label for="password">密码:</label>
				<input type="password" id="password" name="password" required>

				<input type="submit" value="登录">
			</form>

		</div>

	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">


.bg-img {
	background-image: url("https://www.zhangzs.com/wp-content/uploads/2019/04/155916qWC.gif");
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: center;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}

h1 {
	font-size: 48px;
	margin-bottom: 32px;
}

form {
	display: flex;
	flex-direction: column;
	align-items: start;
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, .3);
	padding: 32px;
}

input[type="text"], input[type="password"] {
	border-radius: 4px;
	border-style: none none solid none;
	border-width: 1px;
	margin-bottom: 16px;
	padding-bottom: 8px;
	padding-left: 8px;
	padding-right: 8px;
	padding-top: 8px;
	width: 100%;
}

input[type="submit"] {
	background-color: #000;
	border-radius: 4px;
	border-style: none none solid none;
	border-width: 1px;
	color: #fff;
	cursor: pointer;
	margin-top: 16px;
	padding-bottom: 8px;
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 8px;
	width: 100%;
}
</style>

<route> { meta: { layout: 'outer' } }</route>
