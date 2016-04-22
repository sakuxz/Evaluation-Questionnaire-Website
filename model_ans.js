"use strict";
var mongoc = require('./mongoc');

class ans {
  constructor(ans) {
    this.ansData = ans;
  }

  addAns() {
    return new Promise(function(resolve, reject) {
      mongoc.mongoInsert("ans", this.ansData).then(function(e) {
        resolve(e);
      }, (e) => reject(e) )
    }.bind(this));
  }

  getAns(){
    return new Promise(function(resolve, reject) {
      mongoc.mongoFind("ans", {}).then(function(e) {
        resolve(e);
      }, (e) => reject(e) )
    });
  }
}

module.exports = ans;
