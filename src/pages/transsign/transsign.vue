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

		</uni-section>

		<uni-section title="检查余额" type="line">
			<button style="" @click="batchSolBalance" type="primary"> 批量检查SOL余额 </button>
			<div style="margin-top: 20px; display: flex;">
				<uni-easyinput type="text" v-model="batchBalanceToken" placeholder="合约地址数据" maxlength=-1 />
				<button style="margin-left: 20px;" @click="batchSPLBalance" type="primary"> 批量检查Token余额 </button>
			</div>
		</uni-section>

		<uni-section title="多转一" type="line">
			<uni-easyinput type="text" v-model="receiveAdds" placeholder="归集地址" maxlength=-1 />
			<button style="margin-top: 20px;" @click="batchSendToSol" type="primary"> 收集SOL </button>
			<div style="margin-top: 20px; display: flex;">
				<uni-easyinput type="text" v-model="receiveToken" placeholder="归集Token" maxlength=-1 />
				<button style="margin-left: 20px;" @click="batchSPLBalance" type="primary"> 收集某个TOKEN</button>
			</div>
		</uni-section>


		<!-- 	<uni-section title="一转多" type="line">
			<uni-easyinput type="text" v-model="addsjson" placeholder="发送私钥" maxlength=-1 />
		</uni-section> -->
	</view>
</template>

<script>
	import {
		Connection,
		PublicKey,
		clusterApiUrl,
		LAMPORTS_PER_SOL,
	} from "@solana/web3.js";
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				addsjson: "",
				receiveAdds: "12j1biq4aqN7CpH9jamuRjd562yRgNxitpy1uPv4WxG3", //归集地址
				receiveToken: "", //归集的合约地址
				batchBalanceToken: "5B6VArx8x7Se2pj3SkAaMsd8EumZcZfuSZRuFncNq6Cj", //批量查询的token合约地址
				showAdds: [{
					"coin": "SOL",
					"adds": "8xvR8C3MEppd4Ei6XXyDXN95Fcia5fLfRpTRaWJHHYMU",
					"prv": "42712e5bc378fcdbf5619709fe1866900eebb341b29c015c7daded6c90603da37655268bad7a6aba69672937eff16819f71ea5615eddc7d4853cab7da91b06df"
				}, {
					"coin": "SOL",
					"adds": "BQQvTNu8oVkqKMrAGzyHEdAromRf6VzWQ1Cksg6BLgmt",
					"prv": "3800bfdd8ea2e0f36d5f3b4ca4dca3172a8de75a691cfd99e2ac4ec10c366d499a9446b1c968d3dd5c926dd831ae8c1a8cc0da987e770d44db795517da405c1f"
				}, {
					"coin": "SOL",
					"adds": "H6jobswxL5q1StrSn4JtgpiAF8vo96uppDkLgxiUZEP8",
					"prv": "41aa38d4ad2c34c8f6a7ef1532bfe6ceb1ecb504067040db58b6590159e10a51ef334afbedc1c9633720ac323a676bfb9fcf2e890118df29e07d204ca1fc2667"
				}, {
					"coin": "SOL",
					"adds": "A2SMHozpaGcdgtJZRhW4XcT8dPrY1ADY4xhnpj8A836L",
					"prv": "3d484baae569e7ae1223b629a6e40159c9967a740e149177ff74b6446feef39b86176d20f9b30a36f60a881e66b1b755fbb7384ab654e4310a2531c4c3add485"
				}, {
					"coin": "SOL",
					"adds": "A8KVZsP4ukQL9xXP5zj7Q2XfQDTuoCrWJUyhVuFMKUWp",
					"prv": "31fe9deb5afc0325d3f556d9f62561f0eea3bceaa037c50cb8dc545dd3b1aa02879928568642835e7503254d0e0badc3791396673c3c9295b036bc06ac43db5d"
				}, {
					"coin": "SOL",
					"adds": "3hsgu4GzwFdKjToJwh3miDAKT3ZUtFBtKEh3biuoAQT9",
					"prv": "722ca5e7052c821f52a3d01ba59586c6e9d802045f1f310fac8b8f6d3d39f4f5282feb5048ffec8c5cf9032a92b6dcdf6ae8421b562e42cf5bffdf2b8d1ba830"
				}, {
					"coin": "SOL",
					"adds": "4QgQ4dcTPbbvBRR4m9Y2P1PVQ8pu8TGCPB4xbfUNm51a",
					"prv": "22c60033405b344ae6fec5caf8973b6ba9c55c26d53237b390d2055fd8b4069532a3f7680b9d35c8997e9a1b907a37b4dc9dfbc540970ad377e7dc6172504d41"
				}, {
					"coin": "SOL",
					"adds": "9GwddbyxEUEDwRrX66v7jmA619qZJPYqy238Yfaqa44m",
					"prv": "525ce2db7a885659ccf62861e36ba3b1ee473a51a9218c5c85a60cfd0a66ec737af2facb0a0ce88cb410848345c67e4ea09c5c10a36669c0af79b01dd5b0360e"
				}, {
					"coin": "SOL",
					"adds": "GD1A4DU5jym7CDaRkCUmNUBCbjnv3m9NPNxVve9A5SFM",
					"prv": "86509b09f065ffdc5ef16d153a254d43e84da862bd22a5e1a24d8edaad023070e1f2733c4bd7753a18b5445739897572e6a470e3bece4f5bbc49ed676f9dd0b4"
				}, {
					"coin": "SOL",
					"adds": "E77k5BTNEPyeoXd2fSgv3zXKcYTASXRySaTAFC5Ujeu5",
					"prv": "ba0d9ce5e4e170821995ce0257c98c7a14aef1a2fc48b3df68babc256a5c2b60c2b909ef0ebe3ce6ab9da6b6700348df1f816cbd20cc11fe3fedbb758b9fa480"
				}],


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

				for (var i = 0; i < this.showAdds.length; i++) {
					var addInfos = this.showAdds[i];
					var resp = await this.$http("POST", {
						"method": "getBalance",
						"jsonrpc": "2.0",
						"params": [addInfos.adds],
						"id": "1"
					});

					addInfos.solBal = resp.result.value / Math.pow(10, 9);
					this.showAdds[i] = addInfos;
					this.$forceUpdate();
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
				for (var i = 0; i < this.showAdds.length; i++) {
					var addInfos = this.showAdds[i];
					var resp = await this.$http("POST", {
						"jsonrpc": "2.0",
						"id": 1,
						"method": "getTokenAccountsByOwner",
						"params": [
							addInfos.adds,
							{
								"mint": this.batchBalanceToken
							},
							{
								"encoding": "jsonParsed"
							}
						]
					});

					var splBal = 0;
					if (resp.result.value.length > 0) {
						var decimal = resp.result.value[0].account.data.parsed.info.tokenAmount.decimals;
						splBal = resp.result.value[0].account.lamports / Math.pow(10, decimal);
					}
					addInfos.splBal = splBal;
					this.showAdds[i] = addInfos;
					this.$forceUpdate();
				}
			},

			async batchSendToSol() {
				//批量收集sol 
				if (this.showAdds.length == 0) {
					uni.showToast({
						title: "先导入地址数据",
						icon: "error",
					});
					return;
				}

				if (this.receiveAdds.length == 0) {

					uni.showToast({
						title: "输入归集地址",
						icon: "error",
					});
					return;
				}

				var connect = new Connection(clusterApiUrl("devnet"), "confirmed");
				connect.requestAirdrop(
					new PublicKey("12j1biq4aqN7CpH9jamuRjd562yRgNxitpy1uPv4WxG3"),
					LAMPORTS_PER_SOL,
				).then(data => {
					console.log(data)
				}).catch(err => {
					console.log(err)
				});

			}

		},
	}
</script>

<style>
	.scroll-Y {
		height: 200px;
		background-color: aliceblue;
	}

	.index-text {

		width: 30px;
		height: 30px;
	}

	.long-text {
		text-overflow: ellipsis;
		overflow-wrap: anywhere;
	}
</style>