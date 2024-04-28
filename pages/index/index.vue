<template>
	<view class="content">
		<button type="primary" @click="onTapAdds">地址管理</button>
		<button type="primary" @click="onTapSign">交易管理</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			onTapAdds() {
				
				uni.navigateTo({
					url: '/pages/adds_manager/adds_manager'
				});
				// uni.navigateTo( url:"/pages/adds_manager/adds_manager");
				
				// uni.navigateTo({
				// 	"/pages/adds_manager/adds_manager"
				// });
				//this.$router.push("/pages/adds_manager/adds_manager");
			},
			onTapSign() {

				this.$router.push("pages/adds_manager/adds_manager");
			},
		}
	}
</script>

<style>
	.content {}
</style>