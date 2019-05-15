var connection = require('./connection');

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

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