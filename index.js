const imported = require('./import-me');

exports.test = function() {
  console.log("Test Message");
}

imported.testImported();