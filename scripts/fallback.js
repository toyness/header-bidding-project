function loadFallbackAd(adUnitCode) {
    const adSlot = document.getElementById(adUnitCode);
    adSlot.innerHTML = '<img src="fallback-banner.jpg" alt="Fallback Ad" />';
  }
  pbjs.que.push(function () {
    pbjs.requestBids({
      bidsBackHandler: function () {
        if (!pbjs.getHighestCpmBids()) {
          loadFallbackAd('div-ad-94300');
        }
      },
    });
  });
  