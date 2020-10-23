import { gql } from '@apollo/client';


const getSolrData = gql`
      query Data($query: String, $row: String, $start: String){
        responseHeader(query: $query, row:$row, start:$start){
          response{
            numFound
            docs{
              id
              data
              resource
            }
          }
        }
      }
      `;

export default getSolrData ;
