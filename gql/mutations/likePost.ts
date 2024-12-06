import { gql } from 'graphql-request';

export const LIKE_POST = gql`
    mutation LIKE_POST($postId: ID!) {
        likePost(input: { postId: $postId }) {
            clientMutationId
        }
    }
`;
