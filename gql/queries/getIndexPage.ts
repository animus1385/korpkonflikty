import { gql } from 'graphql-request';

export const pageQuery = gql`
    query NewQuery($ID: ID!) {
        page(idType: DATABASE_ID, id: $ID) {
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
                }
            }
        }
    }
`;
