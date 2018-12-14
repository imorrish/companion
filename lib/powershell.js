/*
 * Trying to add PowerShell support to Companion
 * 
 * Author: Ian Morrish
 *
 *
 */
var POWERSHELL = require('edge');

function powershell(system) {
	var self = this;
	self.ready = true;
	self.system = system;

  self.system.on('powershell_execute', function(command) {

		var powershell = edge.func('ps', function () {/*
      command // . sourcing powershell file to execute
    */});

	});
  return self;
}

exports = module.exports = function (system) {

	return new powershell(system);

};
