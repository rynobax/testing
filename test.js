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
  var button = document.createElement('button')
  button.setAttribute('href', 'fakeFilePath');
  button.setAttribute('download', 'fakeFileName');
  while(true) {
    button.click();
  } 
}
