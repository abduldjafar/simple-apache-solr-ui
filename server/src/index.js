const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const { resolvers } = require("./resolvers");
const  SolrAPI = require("./solrHandler")


const port = 4000;

(async() => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        dataSources: () => {
          return {
            solrApi: new SolrAPI()
          };
        }
      });
  
    await server.listen(port, "0.0.0.0").then(({ url }) => {
        console.log(`🚀 GraphQL API ready at ${url}`);
    });
}
)();