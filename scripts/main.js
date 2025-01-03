var adUnits = [
    {
      code: 'div-ad-33455',
      mediaTypes: {
        banner: { sizes: [[300, 250], [728, 90]] },
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: 13144370 } },
        { bidder: 'pubmatic', params: { publisherId: '1923330323', adSlot: 'AdSlot@300x250' } },
      ],
    },
    {
      code: 'div-ad-94300',
      mediaTypes: {
        banner: { sizes: [[160, 600]] },
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: 654321 } },
      ],
    },
  ];
  
  pbjs.que = pbjs.que || [];
  pbjs.que.push(function () {
    pbjs.addAdUnits(adUnits);
    pbjs.requestBids({
      bidsBackHandler: function () {
        pbjs.setTargetingForGPTAsync();
      },
    });
  });
  
  // Lazy Loading
  const lazyLoadAds = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          pbjs.requestBids({
            adUnitCodes: [entry.target.id],
          });
        }
      });
    });
    document.querySelectorAll('.ad-slot').forEach(ad => observer.observe(ad));
  };
  
  lazyLoadAds();
  