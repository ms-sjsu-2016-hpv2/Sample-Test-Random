var groveSensor = require('jsupm_grove');

var sensor_pin = process.argv[2];
// Create the temperature sensor object using AIO pin 0
var temp = new groveSensor.GroveTemp(sensor_pin);
console.log(temp.name());

// Read the temperature ten times, printing both the Celsius and
// equivalent Fahrenheit temperature, waiting one second between readings
var i = 0;

console.log("yo:"+temp.value());                                                                                                                                                                
                                                                                                                                                                                                
                                                                                                                                                                                                
console.log(temp.value());                                                                                                                                                                      
var waiting = setInterval(function() {                                                                                                                                                          
        var celsius = temp.value();                                                                                                                                                             
        var fahrenheit = celsius * 9.0/5.0 + 32.0;                                                                                                                                              
        console.log(celsius + " degrees Celsius, or " +                                                                                                                                         
            Math.round(fahrenheit) + " degrees Fahrenheit");                                                                                                                                    
        i++;                                                                                                                                                                                    
        if (i == 10) clearInterval(waiting);                                                                                                                                                    
        }, 20000); 
