<template>
	<div style="margin-left: 20px;margin-right: 20px;margin-bottom: 20px;">

		<uni-section title="选择链" type="line">
			<uni-data-select :clear="false" v-model="chooseCoin" :localdata="coins" @change="change"></uni-data-select>
		</uni-section>

		<uni-section title="钱包数量" type="line">
			<uni-easyinput type="number" v-model="count" placeholder="钱包数量" />
		</uni-section>
		<div style="display: flex;">
			<button style="margin-top: 20px;" type="primary" @click="createAdds">创建地址</button>
			<button style="margin-top: 20px;" type="primary" @click="exportAdds">导出地址</button>
		</div>
		<uni-section style="" title="地址数据 显示前100" type="line">
			<div style="background-color: aliceblue;margin-bottom: 20px;display: flex;" v-for="(item,index) in showAdds"
				:key="index">
				<div class="index-text">
					{{index +1}}
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
				</div>

			</div>
		</uni-section>
	</div>
</template>

<script>
	import {
		Keypair,
	} from "@solana/web3.js";

	// import {
	// 	saveAs
	// } from 'file-saver';
	import * as XLSX from 'xlsx';

	export default {
		data() {
			return {
				chooseCoin: 0,
				coins: [{
					value: 0,
					text: "SOL"
				}, ],
				count: "10",
				showAdds: [],
				adds: []
			}
		},
		methods: {
			change(e) {
				this.chooseCoin = e;
				console.log("e:", e);
			},
			async createAdds() {
				try {
					uni.showLoading({
						title: "正在创建中..."
					});
					var data = [];
					for (var i = 0; i < parseInt(this.count); i++) {

						const randomBytes = new Uint8Array(32);
						window.crypto.getRandomValues(randomBytes);
						uni.showLoading({
							title: data
						});
						var pair = Keypair.fromSeed(randomBytes);
						var prvBytes = this.byteToHex(pair.secretKey);
						var info = {
							"coin": this.coins[this.chooseCoin].text,
							"adds": pair.publicKey.toBase58(),
							"prv": prvBytes,
						};
						data.push(info);
					}
					this.adds = data;
					this.showAdds = data.slice(0, 100);
					console.log(data);
					uni.hideLoading();
				} catch (e) {
					uni.hideLoading();
					uni.showToast({
						"icon": "fail",
						title: e.message
					})
				}

			},
			exportAdds() {
				if (this.adds.length == 0) {
					uni.showToast({
						title: "请先生成地址",
						icon: "error",
					});
					return;
				}
				const jsonData = JSON.stringify(this.adds);
				console.log(jsonData);
				this.exportToExcel(jsonData, "Sheet1", "地址数据");
			},
			byteToHex(byte) {

				const key = '0123456789abcdef'
				let bytes = new Uint8Array(byte)
				let newHex = ''
				let currentChar = 0
				for (let i = 0; i < bytes.length; i++) { // Go over each 8-bit byte
					currentChar = (bytes[i] >> 4) // First 4-bits for first hex char
					newHex += key[currentChar] // Add first hex char to string
					currentChar = (bytes[i] & 15) // Erase first 4-bits, get last 4-bits for second hex char
					newHex += key[currentChar] // Add second hex char to string
				}
				return newHex;
			},
			exportToExcel(data, sheetName, fileName) {

				uni.shareWithSystem({
					summary: data,
				})

			}
		}
	}
</script>

<style>
	.index-text {}

	.long-text {
		text-overflow: ellipsis;
		overflow-wrap: anywhere;
	}
</style>