const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const { readFileSync } = require("fs");

// we must convert the file Buffer to a UTF-8 string
const typeDefs = readFileSync("./src/schema.graphql").toString("utf-8");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(typeDefs);

// The root provides a resolver function for each API endpoint
var root = {
  shipment(args) {
    console.log(args)

    return {
      id: args.id
    }
  }
};

var app = express();

app.use(
  "/",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(8080);
console.log("Running a GraphQL API server at http://localhost:8080");
