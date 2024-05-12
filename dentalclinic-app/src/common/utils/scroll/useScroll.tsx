export const useScroll = () => {
  const scrollBodyTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
  const scrollSpot = (spot: string, stick?: string | boolean) => {
    const ele = document.querySelectorAll(spot)[0];
    ele?.scrollIntoView();
    if (typeof stick === 'string') {
      const top = getHeadHeight(stick);
      ele.scrollTo({ top: top });
    }
    if (typeof stick === 'boolean' && stick) {
      //spot  must be Id type
      const h = document.getElementById(spot.slice(1))?.offsetTop;
      if (h) {
        const top = getHeadHeight('.ant-layout-header');
        const num = h - top;
        window.scrollTo({ top: num });
      }
    }
  };

  const getHeadHeight = (stick: string): number => {
    const ele = document.querySelectorAll(stick)[0];
    const ceilingH = ele?.clientHeight;
    return ceilingH;
  };

  const scrollSpotTop = (spot: string) => {
    document.querySelectorAll(spot)[0].scrollTop = 0;
  };

  return {
    scrollBodyTop,
    scrollSpot,
    scrollSpotTop
  };
};
