import { gql } from 'graphql-request';

export const GET_MENU = gql`
    query getMenu($ID: ID!) {
        menu(idType: SLUG, id: $ID) {
            id
            menuItems {
                edges {
                    node {
                        id
                        uri
                        label
                    }
                }
            }
        }
        settingsAll {
            gQLSettings {
                headerRemove {
                    email {
                        title
                        url
                    }
                    link {
                        title
                        url
                    }
                    logoBtn {
                        url
                        logo {
                            node {
                                sourceUrl
                            }
                        }
                    }
                    social {
                        link {
                            url
                            title
                        }
                        img {
                            node {
                                sourceUrl
                            }
                        }
                    }
                    tel {
                        url
                        title
                    }
                }
                footer {
                    address {
                        title
                        url
                    }
                    email {
                        title
                        url
                    }
                    logoBtn {
                        url
                        logo {
                            node {
                                sourceUrl
                            }
                        }
                    }
                    tel {
                        title
                        url
                    }
                    social {
                        link {
                            url
                            title
                        }
                        img {
                            node {
                                sourceUrl
                            }
                        }
                    }
                    linkCopy {
                        title
                        url
                    }
                    link {
                        url
                        title
                    }
                }
            }
        }
    }
`;
