import { gql } from 'graphql-request';

export const GET_POSTS = gql`
query getPosts {
  posts {
    edges {
      node {
        date
        title
        uri 
        featuredImage {
          node {
            sourceUrl
          }
        }
        postViews
      }
    }
  }
}`;