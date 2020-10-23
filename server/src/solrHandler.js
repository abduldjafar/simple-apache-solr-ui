const { RESTDataSource } = require("apollo-datasource-rest");

class SolrAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = "http://192.168.10.133:8983/solr/test";
    }
    async getAllData(row,start,query) {
      return this.get(`/select?q=*:*&rows=${row}&start=${start}&fq=data:"${query}"`);
    }
  }

  module.exports = SolrAPI