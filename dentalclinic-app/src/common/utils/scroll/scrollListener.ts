const headDom = document.querySelector('head');
const observer = new MutationObserver((mutationsList) => {
  let hasAntdLocker = document.querySelector('head')?.querySelector('style[rc-util-key^=rc-util-locker]')
    ? true
    : false;
  const dtLockerStyle = document.querySelector('head')?.querySelector('style[dt-locker]');
  mutationsList?.forEach((item) => {
    const addedNodeItem = item.addedNodes?.[0] as HTMLElement;
    if (!addedNodeItem) return;
    const attr = addedNodeItem?.getAttribute('rc-util-key');
    const isLock = attr?.indexOf('rc-util-locker') === 0;
    if (!isLock) return;
    hasAntdLocker = true;
  });
  if (hasAntdLocker && !dtLockerStyle) {
    const newStyle = document.createElement('style');
    newStyle.type = 'text/css';
    newStyle.setAttribute('dt-locker', 'locker');
    newStyle.innerText = `html body{ overflow:hidden!important; } `;
    document.querySelector('head')?.appendChild(newStyle);
  }

  if (!hasAntdLocker && dtLockerStyle) {
    document.querySelector('head')?.removeChild(dtLockerStyle);
  }
});
if (headDom) {
  observer.observe(headDom, { childList: true });
}
