export const distance = (latStart, lngStart, latEnd, lngEnd) => {
	const R = 6371 // Radius of the earth in km
	const dLat = toRad(latEnd - latStart) // Javascript functions in radians
	const dLon = toRad(lngEnd - lngStart)
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(toRad(latStart)) *
			Math.cos(toRad(latEnd)) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2)
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
	const d = R * c // Distance in km
	return d
}
const toRad = (num) => {
	return (num * Math.PI) / 180
}
export const formatTime = (date) => {
	return `${date.getFullYear().toString()}-${(date.getMonth() + 1)
		.toString()
		.padStart(2, '0')}-${date
		.getDate()
		.toString()
		.padStart(2, '0')} ${date
		.getHours()
		.toString()
		.padStart(2, '0')}:${date
		.getMinutes()
		.toString()
		.padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
}
export const loadScripts = async (scripts) => {
	const get = (src) => {
		return new Promise(function (resolve, reject) {
			var el = document.createElement('script')
			el.async = true
			el.addEventListener(
				'load',
				function () {
					resolve(src)
				},
				false
			)
			el.addEventListener(
				'error',
				function () {
					reject(src)
				},
				false
			)
			el.src = src
			;(
				document.getElementsByTagName('head')[0] ||
				document.getElementsByTagName('body')[0]
			).appendChild(el)
		})
	}

	const myPromises = scripts.map(async function (script, index) {
		return await get(script)
	})

	return await Promise.all(myPromises)
}
