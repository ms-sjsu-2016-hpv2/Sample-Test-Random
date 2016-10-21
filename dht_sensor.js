sensorLib = require("node-dht-sensor");

var sensor = {
	    sensors: [  {
		            name: "Raspberry PI",
			            type: 11,
			            pin: 31
					        } ],
	    read: function() {
		            for (var a in this.sensors) {
				                var b = sensorLib.read(this.sensors[a].type, this.sensors[a].pin);
						            console.log(this.sensors[a].name + ": " +
									                  b.temperature.toFixed(1) + "C, " +
											                b.humidity.toFixed(1) + "%");
							            }
			            setTimeout(function() {
					                sensor.read();
							        }, 2000);
				        }
};

sensor.read();
