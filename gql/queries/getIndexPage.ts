import { gql } from 'graphql-request';

export const pageQuery = gql`
    query getPage($name: String!) {
        pages(where: { status: PUBLISH, name: $name }) {
            edges {
                node {
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
                            ... on PageBuilderFlexibleForm1CustomLayout {
                                fieldGroupName
                                form1Custom {
                                    id
                                    title
                                    descr
                                }
                            }
                            ... on PageBuilderFlexibleForm2CustomLayout {
                                fieldGroupName
                                form2Custom {
                                    id
                                }
                            }
                            ... on PageBuilderFlexibleFormModalCustomLayout {
                                fieldGroupName
                                formModalCustom {
                                    id
                                    title
                                    descr
                                }
                            }
                            ... on PageBuilderFlexibleFormCommentCommonLayout {
                                fieldGroupName
                            }
                            ... on PageBuilderFlexibleBlogContentCustomLayout {
                                fieldGroupName
                                blogContentCustom {
                                    list {
                                        title
                                        descr
                                    }
                                }
                            }
                            ... on PageBuilderFlexibleSuitableServicesCustomLayout {
                                fieldGroupName
                                suitableServicesCustom {
                                    title
                                    descr
                                    suitableServicesList {
                                        nodes {
                                            ... on PostService {
                                                id
                                                title
                                                uri
                                            }
                                        }
                                    }
                                }
                            }
                            ... on PageBuilderFlexibleMapCommonLayout {
                                fieldGroupName
                            }
                            ... on PageBuilderFlexibleContactsCustomLayout {
                                fieldGroupName
                                contactsCustom {
                                    list {
                                        address {
                                            url
                                            title
                                        }
                                        social {
                                            link {
                                                url
                                                title
                                            }
                                            icon {
                                                node {
                                                    sourceUrl
                                                }
                                            }
                                        }
                                        rekvizit
                                        email {
                                            title
                                            url
                                        }
                                        tel {
                                            title
                                            url
                                        }
                                        socialCall {
                                            link {
                                                url
                                                title
                                            }
                                            icon {
                                                node {
                                                    sourceUrl
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            ... on PageBuilderFlexibleRelatedBlogCustomLayout {
                                fieldGroupName
                                relatedBlogCustom {
                                    title
                                    descr
                                    relatedBlogList {
                                        edges {
                                            node {
                                                ... on Post {
                                                    id
                                                    uri
                                                    title
                                                    featuredImage {
                                                        node {
                                                            sourceUrl
                                                        }
                                                    }
                                                    contentPost {
                                                        contentPost {
                                                            authorPost
                                                        }
                                                    }
                                                }
                                                date
                                            }
                                        }
                                    }
                                }
                            }
                            ... on PageBuilderFlexibleBlogListCommonLayout {
                                fieldGroupName
                            }
                            ... on PageBuilderFlexibleTextOpenCommonLayout {
                                fieldGroupName
                            }
                            ... on PageBuilderFlexibleTextOpenCustomLayout {
                                fieldGroupName
                            }
                        }
                    }
                }
            }
        }
    }
`;
