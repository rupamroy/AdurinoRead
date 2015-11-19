// Get the adodb module
var ADODB = require('node-adodb');

var constants = require('./constants');

module.exports = {
    init: init,
    query: query,
    create: create
}

function init() {
    ADODB.debug = true;
  
}


function query(query, callback) {
      // Connect to the MS Access DB
    this.connection = ADODB.open('Provider=Microsoft.ACE.OLEDB.12.0;' +
        'Data Source=C:\\dev\\ArduinoLog.accdb'
        + ';Persist Security Info=True;');
    // Query the DB
    this.connection
        .query(query || 'SELECT * FROM [Log];')
        .on('done', function (data) {
            console.log('Result:'.green.bold, data);
            callback(data);
        });
    
}


function create(data, time) {
       // Connect to the MS Access DB
    this.connection = ADODB.open('Provide=Microsoft.Jet.OLEDB.4.0;' +
        'Data Source=C:\\dev\\ArduinoLog.mdb');
    this.connection
        .executeScalar(
            'INSERT INTO Log(Data, Entered) VALUES (' + data + ',' + time + ')',
            'SELECT @@Identity AS id'
            )
        .on('done', function (data) {
            console.log('Result:', JSON.stringify(data, null, '  '));
        })
        .on('fail', function (data) {
           console.log('Error:', JSON.stringify(data, null, '  ')); 
        });
     
}
