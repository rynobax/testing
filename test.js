console.log('Test.js loaded');
var workerCount = 0;
for(let i = 0; i < 1000; i++) {
  var myWorker = new Worker('ww.js');
  myWorker.onmessage = function(e) {
    workerCount++;
    console.log('Worker count: ' + workerCount);
  }
}
