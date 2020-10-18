export function oneOf(value, arr) {
  for (let i = 0, length = arr.length; i < length; i++) {
    if (value == arr[i]) return true;
  }
  return false;
}

/**获取元素OffsetLeft，其父元素必须有定位--offsetParent寻找最近的父级定位元素 */
export function getElementViewLeft(element) {
  let totalLeft = element.offsetLeft
  let current = element.offsetParent
  let elementScrollLeft
  /**递归：totalLeft=自己offsetLeft+所有父结点offsetLeft */
  while (current !== null) {
    totalLeft += current.offsetLeft
    current = current.offsetParent
  }
  /**获取滚动条据左边的距离 */
  elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft
  return totalLeft - elementScrollLeft
}
/**获取元素据顶部距离，父元素需要有定位 */
export function getElementViewTop(element) {
  let totalTop = element.offsetTop;
  let current = element.offsetParent;
  while (current != null) {
    totalTop += current.offsetTop;
    current = current.offsetParent;
  }
  let scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
  return totalTop - scrollTop;
}

/**获取滚动距离 */
/**获取一个原生文档位置
 * @param w    html dom
 */
export function getScrollOffset(w) {
  /**使用指定的窗口或window */
  w = w || window;
  /**兼容：除了IE8前的浏览器，其他都能用 */
  if (w.pageXOffset != null) {
    return { x: w.pageXOffset, y: w.pageYOffset }
  }
  /**标准IE或其他浏览器 */
  const doc = w.document;
  if (document.compatMode == 'CSS1Compat') {
    return { x: doc.documentElement.scrollLeft, y: doc.documentElement.scrollTop }
  }
  /**怪异模式下的浏览器 */
  return { x: doc.body.scrollLeft, y: doc.body.scrollTop };
}

/**禁用浏览器滚动--但是显示滚动条 */
export function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}