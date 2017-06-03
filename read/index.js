'use strict';

console.log('Loading function');

const doc = require('dynamodb-doc');

const dynamo = new doc.DynamoDB();

exports.handler = (event, context, callback) => {
    const params = {
      TableName: "Todos",
      Key: {
       "id": event.id
      },
     };

     dynamo.getItem(params, function (err, data) {
      if (err) {
          callback(err);
      }
      else {
          callback(null, data.Item);
      }
    });
};
