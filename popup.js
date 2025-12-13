let input = document.getElementById('input')
let tip = document.getElementById('tip')
let barcode = document.getElementById('barcode')

function setEmptyTip() {
  tip.style.color = 'black'
  tip.textContent = 'Please enter a code'
}

if (!input.value.trim()) setEmptyTip()

input.addEventListener('input', function(e) {
  let code = e.target.value.trim()
  if (!code) {
    setEmptyTip()
    barcode.style.display = 'none'
    return
  }
  try {
    barcode.style.display = 'block'
    window.JsBarcode("#barcode", code, { 
      displayValue: false,
      height: 140,
      margin: 0
    })
    tip.textContent = ''
  } catch (err) {
    barcode.style.display = 'none'
    tip.style.color = 'red'
    tip.textContent = err
  }
})

input.select()
document.execCommand('paste')
