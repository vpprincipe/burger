var connection = require('./connection');

var orm = {
    all: function(table, callBackOrm){
        var sqlString = "SELECT * FROM ??";
        connection.query(sqlString, [table], function(err, result){
            if(err) throw err;

            callBackOrm(result)
        })
    },
    create: function(){},
    update: function(){}
}

module.exports = orm;