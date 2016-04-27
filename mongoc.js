var ObjectID = require('mongodb').ObjectID;
var mongoCli = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/answer';
//var url = 'mongodb://admin:mXcdaJb-JK6z@'+process.env.OPENSHIFT_MONGODB_DB_HOST+':'+process.env.OPENSHIFT_MONGODB_DB_PORT+'/questionnaireipeen';

function mongoFind(collection, filter) {
  return new Promise((resolve, reject) => {
    mongoCli.connect(url, function(err, db) {
      if (err) reject(err)
      var curser = db.collection(collection).find(filter);
      var data = [];
      curser.each(function(err, doc) {
        if (err) return;
        if (doc) {
          data.push(doc);
        } else {
          resolve(data);
          db.close();
        }
      });
    }.bind(this));
  });
}

function mongoUpdate(collection, filter, neo) {
  return new Promise((resolve, reject) => {
    mongoCli.connect(url, function(err, db) {
      if (err) reject(err);
      db.collection(collection).updateOne(
        filter, {
          $set: neo
        },
        function(err, results) {
          if (err) reject(err);
          resolve(results);
          db.close();
        });
    });
  });
}

function mongoInsert(collection, data, unique) {
  return new Promise((resolve, reject) => {
    mongoCli.connect(url, function(err, db) {
      if (err) reject(err);
      if (unique) {
        db.collection(collection).ensureIndex(unique, {
          unique: true
        });
      }
      db.collection(collection).insertOne(data, function(err, result) {
        if (err) reject(err);
        resolve({
          result: result
        });
        db.close();
      });
    });
  });
}

function mongoDelete(collection, filter) {
  return new Promise((resolve, reject) => {
    mongoCli.connect(url, function(err, db) {
      if (err) reject(err);
      db.collection(collection).deleteOne(filter, function(err, results) {
        if (err) reject(err);
        resolve({
          result: results
        });
        db.close();
      });
    });
  });
}

module.exports = {
  mongoInsert: mongoInsert,
  mongoDelete: mongoDelete,
  mongoUpdate: mongoUpdate,
  mongoFind: mongoFind
};
