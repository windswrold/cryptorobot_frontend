import Vue from "vue"
const vm = Vue.prototype

const http = (method = "POST", param) => {

	const connection =
		"https://morning-misty-market.solana-mainnet.quiknode.pro/8b949c125233f0acc461a5b8aa47d4943ba0ee10/";

	return new Promise((resolve, reject) => {
		try {
			uni.request({
				url: connection,
				method: method,
				data: param,
				success: (res) => {
					resolve(res.data)
				},
				fail: (err) => {
					console.log('调用失败', err);
					reject(err)
				},
			})
		} catch (error) {
			reject(error)
		}
	})
}

export default http