'use strict';
var server = require('../server');
var Promise = require('bluebird');
var db = server.dataSources.db;
var data = require('./data.json');
var Hotel = db.models.Hotel;

var loaded = new Promise(function(resolve, reject) {
  db.once('connected', resolve);
});

loaded.then(function() {
  // return Hotel.destroyAll();
  return Hotel.count().then(records => {
    if (!records) {
      return Promise.all(
        data.map(hotel => {
          return Hotel.create(hotel);
        })
      );
    }
  });
}).then(function() {
  db.disconnect();
});
