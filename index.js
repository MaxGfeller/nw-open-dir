var cuid = require('cuid')

module.exports = function(cb) {
	var el = document.createElement('input')
	el.type = 'file'
	el.style.display = 'none'
	el.webkitdirectory = ''
	document.body.appendChild(el)
	el.addEventListener('change', function(evt) {
			document.body.removeChild(el)
			cb(this.value)
	})
	el.click()
}
