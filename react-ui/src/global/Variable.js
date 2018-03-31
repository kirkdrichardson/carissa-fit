module.exports = {
  // photoBarSrcArr: [722, 261, 551].map(imageId => `https://picsum.photos/900/750?image=${imageId}`),
  photoBarSrcArr: [3, 2, 3].map(imageId => `/static/media/${imageId}.jpg`),
  mediaBreakPoints: {
    desktopSmall: 1280,
    tablet: 960,
    mobileLarge: 420,
    mobileSmall: 380
  }
};
