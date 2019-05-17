var orm = require("../config/orms");

var burgerModel = {
    all: function(callBackModel){
        orm.all("burgers", function(data){
            callBackModel(data)
        })
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      },
      delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
          cb(res);
        });
      }
}

module.exports = burgerModel