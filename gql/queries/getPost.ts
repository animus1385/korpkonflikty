import { gql } from 'graphql-request';

export const GET_POST = gql`
    query getPost($ID: ID!) {
        post(idType: SLUG, id: $ID) {
            id
            title
            uri
            postViews
            postId
            featuredImage {
                node {
                    sourceUrl
                }
            }
            pageBuilder {
                fieldGroupName
                flexible {
                    fieldGroupName
                    ... on PageBuilderFlexibleHeroCustomLayout {
                        fieldGroupName
                        heroCustom {
                            fieldGroupName
                            message
                            subtitle
                            title
                            btn {
                                title
                                url
                            }
                            img {
                                node {
                                    sourceUrl
                                }
                            }
                        }
                    }
                    ... on PageBuilderFlexibleAdvantagesCommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleAdvantagesCustomLayout {
                        fieldGroupName
                        advantagesCustom {
                            fieldGroupName
                            title
                            advantagesList {
                                subtitle
                                title
                                icon {
                                    node {
                                        sourceUrl
                                    }
                                }
                            }
                        }
                    }
                    ... on PageBuilderFlexibleCorpServiesCommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleCorpServiesCustomLayout {
                        fieldGroupName
                        corpServiesCustom {
                            corpServiesList {
                                edges {
                                    node {
                                        id
                                    }
                                }
                            }
                        }
                    }
                    ... on PageBuilderFlexibleCostServiesCommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleCostServiesCustomLayout {
                        fieldGroupName
                        costServiesCustom {
                            btn {
                                title
                                url
                            }
                            descr
                            img1 {
                                node {
                                    sourceUrl
                                }
                            }
                            img2 {
                                node {
                                    sourceUrl
                                }
                            }
                            title
                        }
                    }
                    ... on PageBuilderFlexibleIncludedServiesCommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleIncludedServiesCustomLayout {
                        fieldGroupName
                        includedServiesCustom {
                            title
                            includedServiesList {
                                title
                                descr
                            }
                        }
                    }
                    ... on PageBuilderFlexibleCtaCommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleCtaCustomLayout {
                        fieldGroupName
                        ctaCustom {
                            bg {
                                node {
                                    sourceUrl
                                }
                            }
                            btn {
                                title
                                url
                            }
                            descr
                            title
                        }
                    }
                    ... on PageBuilderFlexibleAboutCommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleAboutCustomLayout {
                        fieldGroupName
                        aboutCustom {
                            aboutList {
                                descr
                                title
                            }
                            title
                        }
                    }
                    ... on PageBuilderFlexibleCommandCommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleCommandCustomLayout {
                        commandCustom {
                            title
                            list {
                                descr
                                title
                                position
                                img {
                                    node {
                                        sourceUrl
                                    }
                                }
                            }
                            descr
                        }
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleClientsCommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleClientsCustomLayout {
                        fieldGroupName
                        clientsCustom {
                            title
                            list {
                                img {
                                    node {
                                        sourceUrl
                                    }
                                }
                            }
                        }
                    }
                    ... on PageBuilderFlexibleCasesCommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleCasesCustomLayout {
                        fieldGroupName
                        casesCustom {
                            list {
                                descr
                                title
                                listLevel2 {
                                    title
                                    descr
                                }
                            }
                        }
                    }
                    ... on PageBuilderFlexibleFaqCommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleFaqCustomLayout {
                        fieldGroupName
                        faqCustom {
                            title
                            list {
                                descr
                                title
                            }
                            descr
                        }
                    }
                    ... on PageBuilderFlexibleCta2CommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleCta2CustomLayout {
                        fieldGroupName
                        cta2Custom {
                            title
                            btn {
                                title
                                url
                            }
                            descr
                        }
                    }
                    ... on PageBuilderFlexibleRewiewCommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleRewiewCustomLayout {
                        fieldGroupName
                        rewiewCustom {
                            type
                            listVideo {
                                videoElem
                            }
                            listImg {
                                img {
                                    node {
                                        sourceUrl
                                    }
                                }
                            }
                        }
                    }
                    ... on PageBuilderFlexiblePopularBlogCommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexiblePopularBlogCustomLayout {
                        fieldGroupName
                        popularBlogCustom {
                            descr
                            title
                            popularBlogList {
                                edges {
                                    node {
                                        id
                                    }
                                }
                            }
                        }
                    }
                    ... on PageBuilderFlexibleCtaTelegramCommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleCtaTelegramCustomLayout {
                        fieldGroupName
                        ctaTelegramCustom {
                            btn {
                                title
                                url
                            }
                            descr
                            img {
                                node {
                                    sourceUrl
                                }
                            }
                            title
                        }
                    }
                    ... on PageBuilderFlexibleBlogContentCustomLayout {
                        fieldGroupName
                        blogContentCustom {
                            list {
                                descr
                                title
                            }
                        }
                    }
                    ... on PageBuilderFlexibleForm1CommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleForm2CommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleFormCommentCommonLayout {
                        fieldGroupName
                    }
                    ... on PageBuilderFlexibleSuitableServicesCustomLayout {
                      fieldGroupName
                      suitableServicesCustom {
                        suitableServicesList {
                          edges {
                            node {
                              ... on PostService {
                                id
                                title
                                uri
                                pageBuilder {
                                  flexible {
                                    ... on PageBuilderFlexibleHeroCustomLayout {
                                      fieldGroupName
                                      heroCustom {
                                        subtitle
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    ... on PageBuilderFlexibleRelatedBlogCustomLayout {
                      fieldGroupName
                      relatedBlogCustom {
                        relatedBlogList {
                          edges {
                            node {
                              ... on Post {
                                id
                                title
                                uri
                                date
                                author {
                                  node {
                                    name
                                  }
                                }
                              }
                            }
                          }
                        }
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
        }
    }
`;
