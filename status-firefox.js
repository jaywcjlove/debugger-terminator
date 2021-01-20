;(function() {
  let checkStatus;
  let devtools = /./;
  devtools.toString = function() {
    checkStatus = 'on';
  }
  setInterval(function() {
    checkStatus = 'off';
    console.log(devtools);
    document.querySelector('#firefox').innerHTML = checkStatus;
  }, 1000);
})();