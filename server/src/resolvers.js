
const resolvers = {
    Query: {
        responseHeader: async (parent, {row,start,query}, { dataSources }) => {
            console.log(dataSources.solrApi.getAllData(row,query))
            return dataSources.solrApi.getAllData(row,start,query);
          }
    }
}

module.exports = 
{
    resolvers
}



