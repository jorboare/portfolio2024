export function hasScrolledToPixel(targetPixel: number) {
  return window.scrollY >= targetPixel;
}

export const getMaxScroll = () => {
  if (window.innerWidth < 760) {
    return 357;
  } else if (window.innerWidth < 1024) {
    return 537;
  } else {
    return 650;
  }
};
