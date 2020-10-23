import { gql } from 'apollo-boost';


const getSolrData = gql`
      query{
        responseHeader(row:"7",$query:String){
          response{
            numFound
            docs{
              source
              id
              data
            }
          }
        }
      }
`;

export { getSolrData };
