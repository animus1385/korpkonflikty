import { gql } from 'graphql-request';

export const CREATE_COMMENT = gql`
    mutation CREATE_COMMENT($author: String!, $authorEmail: String!, $commentOn: Int!, $content: String!) {
        createComment(input: { content: $content, authorEmail: $authorEmail, author: $author, commentOn: $commentOn }) {
            clientMutationId
            success
        }
    }
`;
