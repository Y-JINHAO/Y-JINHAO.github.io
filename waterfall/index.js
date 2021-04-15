// 立即执行函数（IIFE）
(function (doc) {
  var oItems = doc.getElementsByClassName("wf-item"),
    oItemsLen = oItems.length,
    _arr = [];
  var init = function () {
    setImgPos();
  };

  // 创建一个函数指定图片位置, 既给每一个 wf-item 盒子定位，循环
  function setImgPos() {
    var item;
    for (var i = 0; i < oItemsLen; i++) {
      // 假设每行排 4 张图片，图片间左边距为 12px,则每个盒子的宽度为 ((1200 - 12 * 3 ) / 4)px = 291px；图片的上边距为 15px
      item = oItems[i];
      item.style.width = "291px";

      // 宽度已经确定，再看高度，先确定第一行图片高度
      if (i < 4) {
        _arr.push(item.offsetHeight); // offsetHeight 返回元素的高度（包括元素高度、内边距和边框，不包括外边距）
        item.style.top = "0"; // 第一行图片 top 值为 0

        if ((i + 1) % 4 === 1) {
          item.style.left = "0"; // 第一列图片 left 值为 0
        } else {
          // 后面的图片左边与浏览器窗口边间隔等于前边各图片宽度与图片间间距和
          item.style.left = i * (291 + 12) + "px";
        }
      } else {
        minIndex = getMinIndex(_arr);
        item.style.left = oItems[minIndex].offsetLeft + "px"; //当前图片的 left 值为上一行中高度最小图片的 left 值
        item.style.top = _arr[minIndex] + 15 + "px"; //当前图片的 top 值为上一行中高度最小图片的高度加上边距 15px
        _arr[minIndex] += item.offsetHeight + 15;
      }
    }
  }

  function getMinIndex(arr) {
    // 获取第一列图片高度最小的那个图片的高度及其索引（index值）
    // console.log(Math.min.apply(null, arr));
    return [].indexOf.call(arr, Math.min.apply(null, arr));
    //

    // Math.min() 返回零个或更多个数值的最小值。

    /* XXX.apply是一个调用函数的方法，其参数为：apply(Function, Args)
          Function 为要调用的方法，Args 是参数列表，当 Function 为null 或 this时，默认为上文 */
  }

  // 执行函数, 图片加载之后才会进行排列，init 函数应该放入 window.onload 中执行
  window.onload = function () {
    init();
  };
})(document);
