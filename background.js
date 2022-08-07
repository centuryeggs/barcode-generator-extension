'use strict';

// 读取粘贴板字符串
chrome.clipboard.onClipboardDataChanged.addListener((e) => {
  console.log(e);
});
