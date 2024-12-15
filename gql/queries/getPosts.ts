import { gql } from 'graphql-request';

export const GET_POSTS = gql`
    query getPosts($offset: Int!, $size: Int!) {
        posts(where: { offsetPagination: { offset: $offset, size: $size } }) {
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
                    contentPost {
                        contentPost {
                            authorPost
                            list {
                                link {
                                    url
                                    title
                                }
                            }
                        }
                    }
                    comments {
                        edges {
                            node {
                                id
                                content
                                author {
                                    email
                                    name
                                }
                            }
                        }
                    }
                    seo {
                        title
                        metaDesc
                        canonical
                        breadcrumbs {
                            url
                            text
                        }
                        metaRobotsNoindex
                        metaRobotsNofollow
                        metaKeywords
                    }
                }
            }
            totalPosts
        }
    }
`;
