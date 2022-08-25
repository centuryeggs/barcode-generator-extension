let input = document.getElementById('input')

input.addEventListener('input', function(e) {
  console.log(e.target.value)
  let code = e.target.value.trim()
  if (!code) return
  JsBarcode("#barcode", code, {
    displayValue: false,
    font: 'Tahoma'
  });
})

copyTextToClipboard(input)

function copyTextToClipboard(input) {
  input.select()
  document.execCommand('paste');
} 
