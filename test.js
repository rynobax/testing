console.log('Test.js loaded');

function addButton(name, func) {
  var button = document.createElement('button')
  button.addEventListener ("click", func);
  button.innerHTML = name;
  document.body.appendChild(button);
}

window.onload = function() {
  addButton('Div Bomb', divBomb);
  addButton('DL Bomb', dlBomb);
  addButton('Stack Overflow', stackOverflow);
}

function divBomb() {
  var parent = document.body;
  while(true) {
    var child = document.createElement('div');
    parent.appendChild(child);
    parent = child;
  }
}

function dlBomb() {
  var button = document.getElementById('dlButton')
  while(true) {
    button.click();
  } 
}

function stackOverflow() {
  stackOverflow();
}
