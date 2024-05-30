const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '485px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
    desktopL: '2560px'
}
export const device = {
    mobile: `(max-width: ${size.tablet})`,
    // mobileM: `(min-width: ${size.mobileM})`,
    // mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.laptop})`,
    laptop: `(max-width: ${size.laptopL})`,
    laptopL: `(max-width: ${size.desktop})`,
    desktop: `(max-width: ${size.desktopL})`,
    desktopL: `(min-width: ${size.desktopL})`
};
    