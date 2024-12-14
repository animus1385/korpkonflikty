import type { IScreens } from '../types/common/screens';

export const screens: IScreens = {
    mobile: '320px',
    mobileMedium: '375px',
    mobileWide: '425px',
    tablet: '640px',
    tabletMedium: '768px',
    laptop: '992px',
    laptopMedium: '1024px',
    desktop: '1280px',
    desktopMedium: '1440px',
    desktopWide: '1600px',
    desktopBig: '1920px',
};

export const screensNuxtImage: Record<keyof IScreens,number> = {
    mobile: 320,
    mobileMedium: 375,
    mobileWide: 425,
    tablet: 640,
    tabletMedium: 768,
    laptop: 992,
    laptopMedium: 1024,
    desktop: 1280,
    desktopMedium: 1440,
    desktopWide: 1600,
    desktopBig: 1920,
};
