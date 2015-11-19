module.exports = function () {
    var serialport = require('serialport');
    var accessHookUp = require('./csvHookUp');
    var io = require('./plotter');

    accessHookUp.init();


    var portName = 'COM19';
    var sp = new serialport.SerialPort(portName, {
        baudRate: 9600,
        dataBits: 8,
        parity: 'none',
        stopBits: 1,
        flowControl: false,
        parser: serialport.parsers.readline("\r\n")
    });

    sp.on('data', function (input) {
        var currDate = (new Date()).toString();
        accessHookUp.write(input, currDate );
        io.emit({Data: input, Entered: currDate});
    });
}