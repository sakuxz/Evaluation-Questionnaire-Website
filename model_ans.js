"use strict";
var mongoc = require('./mongoc');
var mysqlc = require('./mysqlc');


class ans {
  constructor(ans) {
    this.ansData = ans;
  }

  // addAns() {
  //   return new Promise(function(resolve, reject) {
  //     mongoc.mongoInsert("ans", this.ansData).then(function(e) {
  //       resolve(e);
  //     }, (e) => reject(e) )
  //   }.bind(this));
  // }

  addAns() {
    return new Promise(function(resolve, reject) {
      var ans = this.ansData;
      var insert = new mysqlc();
      insert.query("INSERT INTO `answer`.`ans` (`id`, `name`, `sex`, `age`, `education`, `surf_time`, `shopping_time`, `shopping_money`, `income`, `social_network_family`, `situation`, `ans`, `studno`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [ans.name, ans.sex, ans.age, ans.education, ans.surf_time, ans.shopping_time, ans.shopping_money, ans.income, ans.social_network_family, ans.situation, JSON.stringify(ans.ans), ans.studno]).then(function(e) {
        resolve(e);
        insert.getConnection().end();
      }, (e) => {
        reject(e);
        insert.getConnection().end();
      });
    }.bind(this));
  }

  // getAns(){
  //   return new Promise(function(resolve, reject) {
  //     mongoc.mongoFind("ans", {}).then(function(e) {
  //       resolve(e);
  //     }, (e) => reject(e) )
  //   });
  // }

  getAns() {
    return new Promise(function(resolve, reject) {
      var select = new mysqlc();
      select.query("SELECT * from ans where 1", []).then(function(e) {
        e.forEach(function(e, i) {
          e.ans = JSON.parse(e.ans);
        });
        resolve(e);
        select.getConnection().end();
      }, (e) => {
        reject(e);
        select.getConnection().end();
      });
    });
  }
}

module.exports = ans;
