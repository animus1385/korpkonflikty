import type { IScreens } from '../types/common/screens';

export const screens: IScreens = {
    mobile: '321px',
    mobileMedium: '376px',
    mobileWide: '426px',
    tablet: '641px',
    tabletMedium: '769px',
    laptop: '993px',
    laptopMedium: '1025px',
    desktop: '1281px',
    desktopMedium: '1431px',
    desktopWide: '1601px',
    desktopBig: '1921px',
};

export const screensNuxtImage: Record<keyof IScreens,number> = {
    mobile: 321,
    mobileMedium: 376,
    mobileWide: 426,
    tablet: 641,
    tabletMedium: 769,
    laptop: 993,
    laptopMedium: 1025,
    desktop: 1281,
    desktopMedium: 1441,
    desktopWide: 1601,
    desktopBig: 1921,
};
