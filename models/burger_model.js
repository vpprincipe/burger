var orm = require("../config/orm");

var burgerModel = {
    all: function(callBackModel){
        orm.all("burgers", function(data){
            callBackModel(data)
        })
    }
}

module.exports = burgerModel