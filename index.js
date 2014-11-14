var domify = require('domify')

module.exports = function(cb) {
	var el = domify('<input type="file" nwdirectory>')
	el.style.display = 'none'
	document.body.appendChild(el)
	el.addEventListener('change', function(evt) {
			document.body.removeChild(el)
			cb(this.value)
	})
	el.click()
}
