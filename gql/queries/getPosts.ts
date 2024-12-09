import { gql } from 'graphql-request';

export const GET_POSTS = gql`
    query getPosts($first: Int!, $after: String) {
        posts(first: $first, after: $after) {
            edges {
                node {
                    title
                    date
                    uri
                    postViews
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;
