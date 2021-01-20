(function () {
  var checkStatus;
  var element = new Image();
  Object.defineProperty(element, 'id', {
    get:function() {
      checkStatus='on';
    }
  });
  setInterval(function() {
      checkStatus = 'off';
      console.debug(element);
      document.querySelector('#chrome').innerHTML = checkStatus;
  }, 1000)
})();
