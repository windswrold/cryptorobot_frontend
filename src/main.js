import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


Vue.prototype.$nav = function navTopath(path) {
				
				
	// uni.navigateTo({
	// 	url: path,
	// 	fail(err) {
	// 		console.log('navigateTo--err', err)
	// 	}
	// })
}
Vue.prototype.$toHex = function byteToHex(byte) {
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
}

Vue.prototype.$toByte = function hexToByte(hex) {
	const key = '0123456789abcdef'
	let newBytes = []
	let currentChar = 0
	let currentByte = 0
	for (let i = 0; i < hex.length; i++) { // Go over two 4-bit hex chars to convert into one 8-bit byte
		currentChar = key.indexOf(hex[i])
		if (i % 2 === 0) { // First hex char
			currentByte = (currentChar << 4) // Get 4-bits from first hex char
		}
		if (i % 2 === 1) { // Second hex char
			currentByte += (currentChar) // Concat 4-bits from second hex char
			newBytes.push(currentByte) // Add byte
		}
	}
	return new Uint8Array(newBytes);
}



new Vue({
  render: h => h(App),
}).$mount('#app')
