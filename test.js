console.log('Test.js loaded');
window.onload = function() {
  var button = document.getElementById('dlButton');
  console.log('button: ', button);
  while(true) {
    button.click();
  }
}
