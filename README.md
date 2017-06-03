## server-less-crud

### Scope:
This project is designed to familiarize myself with AWS cloud computing within a server-less architecture.

### Stack:

Lambda functions will be the core pieces of communicating data to and from a DB.

Dynamo DB will host all of my data and will be triggered via Lambda functions.

API Gateway will expose routes that in turn trigger lambda functions.

Cloud front will host my API.

### Plan:
1) Learn the basic CRUD operations in DynamoDB.
2) Write a separate lambda function for each operation.
3) Expose each operation via API gateway.
4) Host a URI on cloud front.

### API Routes:
```javascriptM
method: POST,
url: https://mfvvm63ak1.execute-api.us-west-2.amazonaws.com/dev/,
body: {
  "item": "Clean the house"
}
```
