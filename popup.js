let input = document.getElementById('input')
input.addEventListener('input', function(e) {
  let code = e.target.value.trim()
  if (!code) return
  JsBarcode("#barcode", code, { displayValue: false })
})
input.select()
document.execCommand('paste')
