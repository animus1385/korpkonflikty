import { gql } from 'graphql-request';

export const allQuery = gql`
    query NewQuery {
        settingsAll {
            gQLSettings {
                aboutCommon {
                    title
                    aboutList {
                        descr
                        title
                    }
                }
                advantagesCommon {
                    advantagesList {
                        title
                        subtitle
                        icon {
                            node {
                                sourceUrl
                                title
                            }
                        }
                    }
                    title
                }
                casesCommon {
                    title
                    casesCommonList {
                        descr
                        elems {
                            descr
                            title
                        }
                        title
                    }
                }
                clientsCommon {
                    list {
                        img {
                            node {
                                sourceUrl
                            }
                        }
                    }
                    title
                }
                commandCommon {
                    descr
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
                    title
                }
                corpServiesCommon {
                    corpServiesList {
                        nodes {
                            ... on PostService {
                                id
                                uri
                                title
                                pageBuilder {
                                    flexible {
                                        ... on PageBuilderFlexibleHeroCustomLayout {
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
                costServiesCommon {
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
                ctaCommon {
                    title
                    descr
                    btn {
                        title
                        url
                    }
                    bg {
                        node {
                            sourceUrl
                        }
                    }
                }
                cta2Common {
                    title
                    subtitle
                    descr
                    btn {
                        url
                        title
                    }
                }
                ctaTelegramCommon {
                    descr
                    btn {
                        url
                        title
                    }
                    title
                    img {
                        node {
                            sourceUrl
                        }
                    }
                }
                faqCommon {
                    descr
                    list {
                        defaultOpen
                        title
                        descr
                    }
                    title
                }
                includedServies {
                    title
                    includedServiesList {
                        title
                        descr
                    }
                }
                rewiewCommon {
                    listImg {
                        img {
                            node {
                                id
                                sourceUrl
                            }
                        }
                    }
                    listVideo {
                        videoElem
                        cover {
                            node {
                                sourceUrl
                            }
                        }
                    }
                    type
                    fieldGroupName
                }
                textOpenCommon {
                    title
                    descr
                }
            }
        }
    }
`;
