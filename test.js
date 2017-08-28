console.log('Test.js loaded');

function addButton(name, func) {
  var button = document.createElement('button')
  button.addEventListener ("click", func);
  button.innerHTML = name;
  document.body.appendChild(button);
}

window.onload = function() {
  addButton('Download Bomb', dlBomb);
}

function dlBomb() {
  var button = document.getElementById('dlButton')
  while(true) {
    button.click();
  }
}
