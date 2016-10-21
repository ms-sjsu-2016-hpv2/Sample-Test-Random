var groveSensor = require('jsupm_grove');

var temp0 = new groveSensor.GroveTemp(0);
var temp2 = new groveSensor.GroveTemp(2);

console.log("temp0:"+temp0.value());
console.log("temp2:"+temp2.value());
