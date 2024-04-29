<template>
	<view style="margin: 20px;">
		<uni-section title="地址Json数据" type="line">
			<uni-easyinput type="textarea" v-model="addsjson" @input="inputconfirm" placeholder="地址json数据"
				maxlength=-1 />
		</uni-section>
		<uni-section title="地址数据" type="line">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
				@scrolltolower="lower" @scroll="scroll">
				<div style="background-color: aliceblue;margin-bottom: 20px;display: flex;"
					v-for="(item,index) in showAdds" :key="index">
					<div class="index-text">
						{{index+1}}
					</div>
					<div style="background-color: transparent; padding: 20px;">
						<div style="display: flex;">
							<div class="long-text">
								地址：{{item.adds}}
							</div>
						</div>
						<div class="long-text">
							128私钥：{{item.prv}}
						</div>
						<div class="long-text">
							sol余额：{{item.solBal}}
						</div>
						<div class="long-text">
							token余额：{{item.splBal}}
						</div>
					</div>
				</div>
			</scroll-view>

			<button style="margin-top: 20px;" @click="batchSolBalance" type="primary"> 批量检查SOL余额 </button>

			<div style="margin-top: 20px; display: flex;">
				<uni-easyinput type="text" v-model="batchBalanceToken" placeholder="合约地址数据" maxlength=-1 />
				<button style="margin-left: 20px;" @click="batchSPLBalance" type="primary"> 批量检查Token余额 </button>
			</div>

		</uni-section>

		<uni-section title="多转一" type="line">
			<uni-easyinput type="text" v-model="addsjson" placeholder="归集地址" maxlength=-1 />
		</uni-section>
		<uni-section title="一转多" type="line">
			<uni-easyinput type="text" v-model="addsjson" placeholder="发送私钥" maxlength=-1 />
		</uni-section>
	</view>
</template>

<script>
	import {
		Connection,
		PublicKey,
		clusterApiUrl,
	} from "@solana/web3.js";
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				addsjson: "",
				showAdds: [],
				batchBalanceToken: "",

			}
		},
		methods: {
			upper: function(e) {
				// console.log(e)
			},
			lower: function(e) {
				// console.log(e)
			},
			scroll: function(e) {
				// console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			inputconfirm(e) {
				console.log(e);
				try {
					this.showAdds = JSON.parse(e);
				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: "json格式有问题",
						icon: "error",
					});
				}
			},
			async batchSolBalance() {

				if (this.showAdds.length == 0) {

					uni.showToast({
						title: "先导入地址数据",
						icon: "error",
					});
					return;
				}

				const connection = clusterApiUrl("mainnet-beta");

				//"https://morning-misty-market.solana-mainnet.quiknode.pro/8b949c125233f0acc461a5b8aa47d4943ba0ee10/";
				var that = this;
				try {
					for (var i = 0; i < this.showAdds.length; i++) {
						var addInfos = this.showAdds[i];
						console.log(addInfos.adds);
						// const from = new PublicKey("HyperSPG8w4jgdHgmA8ExrhRL1L1BriRTHD9UFdXJUud");
						// var data = await connection.getBalance(from);
						// var resp = await uni.request({
						// 	url: connection,
						// 	method: "POST",
						// 	data: {
						// 		"method": "getBalance",
						// 		"jsonrpc": "2.0",
						// 		"params": [addInfos.adds],
						// 		"id": "1"
						// 	},

						// });

						var resp = await this.$http("POST", {
							"method": "getBalance",
							"jsonrpc": "2.0",
							"params": [addInfos.adds],
							"id": "1"
						});

						console.log(resp.data.result.value);
						console.log(i);
						addInfos.solBal = resp.data.result.value / Math.pow(10, 9);
						this.showAdds[i] = addInfos;

					}
				} catch (e) {
					//TODO handle the exception
					console.log(e);
					uni.showToast({
						title: e.message,
						icon: "error",
					});
				}
			},
			async batchSPLBalance() {

				if (this.showAdds.length == 0) {
					uni.showToast({
						title: "先导入地址数据",
						icon: "error",
					});
					return;
				}
				if (this.batchBalanceToken.length == 0) {
					uni.showToast({
						title: "输入合约地址",
						icon: "error",
					});
					return;
				}

				const connection = new Connection(
					"https://morning-misty-market.solana-mainnet.quiknode.pro/8b949c125233f0acc461a5b8aa47d4943ba0ee10/"
				);
				try {
					for (var i = 0; i < this.showAdds.length; i++) {
						var addInfos = this.showAdds[i];
						console.log(addInfos.adds);
						const from = new PublicKey(addInfos.adds);
						const token = new PublicKey(this.batchBalanceToken);
						var dataBal = await connection.getTokenAccountsByOwner(from, {
							mint: token,
						});
						// var decimals = tokenData.value.decimals;
						var lamports = dataBal.value[0].account.lamports;
						addInfos.splBal = lamports;
						this.showAdds[i] = addInfos;
					}
				} catch (e) {
					//TODO handle the exception
					console.log(e);
					uni.showToast({
						title: e.message,
						icon: "error",
					});
				}

			},
		}

	}
</script>

<style>
	.scroll-Y {
		height: 200px;
		background-color: aliceblue;
	}

	.long-text {
		text-overflow: ellipsis;
		overflow-wrap: anywhere;
	}
</style>