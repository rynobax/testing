console.log('Test.js loaded');
var workerCount = 0;
var myWorker = new Worker('ww.js');
myWorker.onmessage = function(e) {
  workerCount++;
  console.log('Worker count: ' + workerCount);
}
