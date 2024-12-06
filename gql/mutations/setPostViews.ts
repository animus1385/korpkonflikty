import { gql } from 'graphql-request';

export const SET_POST_VIEWS = gql`
    mutation setPostViews($ID: ID!) {
        increasePostViews(input: { postId: $ID }) {
            clientMutationId
        }
    }
`;
