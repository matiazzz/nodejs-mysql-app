const mysql = require('mysql');
const dbconfig = require('../config/mysql-config');

connection = mysql.createConnection(dbconfig);

let postickModel = {};

postickModel.getAll = (callback) => {
  if(connection) {
    connection.query('select * from posticks', (err, result) => {
      if(err) {
        throw err;
      } else {
        callback(null, result);
      }
    });
  }
};

postickModel.getById = (id, cb) => {
  if (connection) {
    const sql = `
      select * from posticks
      where id = ${connection.escape(id)}
    `;
    connection.query(sql, (err, result) => {
      if (err) {
        throw err;
      } else {
        cb(null, result);
      }
    });

  }
};

postickModel.create = (postickData, cb) => {
  if (connection) {
    connection.query('insert into posticks set ?', postickData, (err, result) => {
      if (err) {
        throw err;
      } else {
        cb(null, {
          'insertId': result.insertId
        })
      }
    });
  }
};

postickModel.update = (postickData, cb) => {
  if (connection) {
    const sql = `
      update posticks set
      title = ${connection.escape(postickData.title)},
      description = ${connection.escape(postickData.description)}
      where id = ${connection.escape(postickData.id)}
    `
    connection.query(sql, (err, result) => {
      if (err) {
        throw err;
      } else {
        cb(null, {
          "mssg": 'update success'
        });
      }
    });
  }
};

postickModel.delete = (id, cb) => {
  if(connection) {
    let sql = `
      select * from posticks where id = ${connection.escape(id)}
    `;
    connection.query(sql, (err, data) => {
      if (data) {
        let sql = `
          delete from posticks
          where id = ${connection.escape(id)}
        `;
        connection.query(sql, (err, result) => {
          if (err) {
            throw err;
          } else {
            cb(null, {
              success: true,
              mssg: 'postick deleted'
            })
          }
        });
      } else {
        cb(null, {
          mssg: 'not exists postick'
        });
      }
    });
  }
};




module.exports = postickModel;
