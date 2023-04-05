<template>
	<div>
		<Header/>
		<main>
			<router-view/>
		</main>

		<Footer/>
	</div>


</template>

<script lang="ts">
import Header from './header/index.vue'
import Footer from './footer/index.vue'

export default {
	components: {
		Header,
		Footer
	}
}
</script>
