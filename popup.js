'use strict';

let textarea = document.getElementById('textarea')

textarea.addEventListener('input', function(e) {
  console.log(e.target.value)
  JsBarcode("#barcode", e.target.value);
})
copyTextToClipboard(textarea)


function copyTextToClipboard(textarea) {
  textarea.select()
  document.execCommand('paste');
  // copyFrom.blur();
  // document.body.removeChild(copyFrom);
}