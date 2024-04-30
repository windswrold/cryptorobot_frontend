<template>
	<view class="content">
		<button class="btn" type="primary" @click="onTapAdds">地址管理</button>
		<button class="btn" type="primary" @click="onTapSign">交易管理</button>
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
				this.$nav("/pages/adds_manager/adds_manager");
			},
			onTapSign() {
				this.$nav("/pages/transsign/transsign");
			},
		}
	}
</script>

<style>
	.btn {
		margin-top: 20px;
		margin-left: 20px;
		margin-right: 20px;
	}
</style>