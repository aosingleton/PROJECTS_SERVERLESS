'use strict';

module.exports.hello = (event, context, callback)  => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: process.env.SECRET_VALUE,
        name: "samus"
      }),
    };
      
      callback(null, response);
  };
