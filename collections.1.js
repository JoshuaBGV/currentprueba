window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.start');
var Shopify = Shopify || {};
Shopify.shop = "concept-theme-tech.myshopify.com";
Shopify.locale = "en";
Shopify.currency = {"active":"USD","rate":"1.0"};
Shopify.country = "US";
Shopify.theme = {"name":"Concept","id":175726985497,"schema_name":"Concept","schema_version":"3.1.0","theme_store_id":null,"role":"main"};
Shopify.theme.handle = "null";
Shopify.theme.style = {"id":null,"handle":null};
Shopify.cdnHost = "concept-theme-tech.myshopify.com/cdn";
Shopify.routes = Shopify.routes || {};
Shopify.routes.root = "/";
!function(o){function n(){var o=[];function n(){o.push(Array.prototype.slice.apply(arguments))}return n.q=o,n}var t=o.Shopify=o.Shopify||{};t.loadFeatures=n(),t.autoloadFeatures=n()}(window);
window.ShopifyPaypalV4VisibilityTracking = true;
window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.end');
document.documentElement.classList.replace('no-js', 'js');

  window.theme = window.theme || {};
  theme.routes = {
    shop_url: 'https://concept-theme-tech.myshopify.com',
    root_url: '/',
    cart_url: '/cart',
    cart_add_url: '/cart/add',
    cart_change_url: '/cart/change',
    cart_update_url: '/cart/update',
    search_url: '/search',
    predictive_search_url: '/search/suggest'
  };

  theme.variantStrings = {
    preOrder: "Pre-order",
    addToCart: "Add to cart",
    soldOut: "Sold Out",
    unavailable: "Unavailable",
    addToBundle: "Add to bundle",
    backInStock: "Notify me when it’s available"
  };

  theme.shippingCalculatorStrings = {
    error: "One or more errors occurred while retrieving the shipping rates:",
    notFound: "Sorry, we do not ship to your address.",
    oneResult: "There is one shipping rate for your address:",
    multipleResults: "There are multiple shipping rates for your address:"
  };

  theme.recipientFormStrings = {
    expanded: "Gift card recipient form expanded",
    collapsed: "Gift card recipient form collapsed"
  };

  theme.quickOrderListStrings = {
    itemsAdded: "[quantity] items added",
    itemAdded: "[quantity] item added",
    itemsRemoved: "[quantity] items removed",
    itemRemoved: "[quantity] item removed",
    viewCart: "View cart",
    each: "[money]\/ea",
    minError: "This item has a minimum of [min]",
    maxError: "This item has a maximum of [max]",
    stepError: "You can only add this item in increments of [step]"
  };

  theme.cartStrings = {
    error: `There was an error while updating your cart. Please try again.`,
    quantityError: `You can only add [quantity] of this item to your cart.`,
  };

  theme.dateStrings = {
    d: "d",
    day: "Day",
    days: "Days",
    h: "h",
    hour: "Hour",
    hours: "Hours",
    m: "m",
    minute: "Min",
    minutes: "Mins",
    s: "s",
    second: "Sec",
    seconds: "Secs"
  };theme.tabAttentionStrings = {
      firstMessage: "Something we said?",
      nextMessage: "We're still here!",
      messageDelay: 3
    };theme.strings = {
    recentlyViewedEmpty: "Your recently viewed is empty.",
    close: "Close",
    next: "Next",
    previous: "Previous",
    qrImageAlt: "QR code — scan to redeem gift card"
  };

  theme.settings = {
    moneyFormat: "${{amount}}",
    moneyWithCurrencyFormat: "${{amount}} USD",
    currencyCodeEnabled: false,
    externalLinksNewTab: false,
    cartType: "drawer",
    isCartTemplate: false,
    pswpModule: "\/\/concept-theme-tech.myshopify.com\/cdn\/shop\/t\/106\/assets\/photoswipe.min.js?v=41760041872977459911736931554",
    themeName: 'Concept',
    themeVersion: '3.1.0',
    agencyId: ''
  };
(function(){if ("sendBeacon" in navigator && "performance" in window) {var session_token = document.cookie.match(/_shopify_s=([^;]*)/);function handle_abandonment_event(e) {var entries = performance.getEntries().filter(function(entry) {return /monorail-edge.shopifysvc.com/.test(entry.name);});if (!window.abandonment_tracked && entries.length === 0) {window.abandonment_tracked = true;var currentMs = Date.now();var navigation_start = performance.timing.navigationStart;var payload = {shop_id: 75682677017,url: window.location.href,navigation_start,duration: currentMs - navigation_start,session_token: session_token && session_token.length === 2 ? session_token[1] : "",page_type: "list-collections"};window.navigator.sendBeacon("https://monorail-edge.shopifysvc.com/v1/produce", JSON.stringify({schema_id: "online_store_buyer_site_abandonment/1.1",payload: payload,metadata: {event_created_at_ms: currentMs,event_sent_at_ms: currentMs}}));}}window.addEventListener('pagehide', handle_abandonment_event);}}());
window.ShopifyAnalytics = window.ShopifyAnalytics || {};
window.ShopifyAnalytics.meta = window.ShopifyAnalytics.meta || {};
window.ShopifyAnalytics.meta.currency = 'USD';
var meta = {"page":{"pageType":"collections"}};
for (var attr in meta) {
  window.ShopifyAnalytics.meta[attr] = meta[attr];
}
window.ShopifyAnalytics.merchantGoogleAnalytics = function() {
  
};
if (Shopify.designMode) {
    document.documentElement.style.setProperty('--header-height', Math.round(document.getElementById('shopify-section-sections--24160876822809__header').clientHeight) + 'px');
  }