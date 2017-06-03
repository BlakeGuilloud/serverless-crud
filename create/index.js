'use strict';

const doc = require('dynamodb-doc');

const dynamo = new doc.DynamoDB();

exports.handler = (event, context, callback) => {
   const params = {
      Item: {
       "id": event.id || JSON.stringify(Date.now()),
       "item": event.item || '',
       "complete": event.complete || false
      },
      ReturnConsumedCapacity: "TOTAL",
      TableName: "Todos"
     };

     dynamo.putItem(params, function(err, data) {
       if (err) {
           callback(err);
       } else {
           callback(null, data);
       }
     });
};
