console.log('Web worker spawned');
var myWorker = new Worker('ww.js');
postMessage('New worker');
