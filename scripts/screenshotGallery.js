// Cache selectors
var screenshotWidth, screenshotOuterWidth, screenshotMargin, screenshotContainerWidth, screenshotContainerMargin, mobile, screenshotContainer, galleryIndicators, downloadBtn, androidFirst, iOSFirst, screenshot;

function toggleGalleryIndicators() {
  var visibleAndroidScreenshots = visibleScreenshots('android');
  var visibleIOSScreenshots = visibleScreenshots('ios');
  // We always toggle mobile and desktop indicators together so they are in sync and doesn't matter which one we select here
  var activeIndicator = $('.gallery-indicators .active');
  var androidToIOS = activeIndicator.hasClass('android') && (visibleAndroidScreenshots < visibleIOSScreenshots);
  var iOSToAndroid = activeIndicator.hasClass('ios') && (visibleIOSScreenshots < visibleAndroidScreenshots);
  
  if(androidToIOS || iOSToAndroid) {
    galleryIndicators.toggleClass('active');
    downloadBtn.toggleClass('hide');
  }
}

function scrollGallery(offset, speed) {
 screenshotContainer.animate({
   scrollLeft: offset
  }, speed, function() {
    // After the scroll animation finishes check if we need to switch the indicators
    toggleGalleryIndicators();
  });
}

function scrollToFirstScreenshot(indicatorClicked) {  
  // The clicked indicator is not active
  if(!indicatorClicked.hasClass('active')) {
    // How many pixels the container has been scrolled
    var containerScroll = screenshotContainer.scrollLeft();
    // Calculate the offset for the screenshots
    var offset = containerScroll - screenshotMargin - screenshotContainerMargin;
    
    if(indicatorClicked.hasClass('android')) {
      // The clicked indicator is Android
      scrollGallery(androidFirst.position().left + offset, 'slow');
    } else {
      // The clicked indicator is iOS
      scrollGallery(iOSFirst.position().left + offset, 'slow');
    }
  }
}

function visibleScreenshots(type) {
  return $('.screenshot-container .screenshot.' + type).filter(function() {
    // How many pixels the container has been scrolled
    var containerScroll = screenshotContainer.scrollLeft();
    // Position relative to the screenshot container
    var screenshotPositionLeft = $(this).position().left - screenshotContainerMargin + containerScroll;
    var screenshotPositionRight = screenshotPositionLeft + screenshotWidth;
    
    var viewportLeftBoundary = containerScroll;
    var viewportRightBoundary = containerScroll + screenshotContainerWidth;
    
    return screenshotPositionLeft >= viewportLeftBoundary && screenshotPositionRight <= viewportRightBoundary;
  }).length;
}

$(document).ready(function() {
  screenshot = $('.screenshot');
  screenshotContainer = $('.screenshot-container');
  galleryIndicators = $('.gallery-indicators li, .gallery-indicators-mobile div');
  downloadBtn = $('.download-btn');
  androidFirst = $('.screenshot.android').first();
  iOSFirst = $('.screenshot.ios').first();
  
  screenshotWidth = screenshot.width();
  screenshotOuterWidth = screenshot.outerWidth(true);
  screenshotMargin = Number(screenshot.css('margin-left').split("px")[0]);
  screenshotContainerWidth = screenshotContainer.width();
  screenshotContainerMargin = Number(screenshotContainer.css('margin-left').split("px")[0]);
  mobile = $('.gallery-indicators-mobile').is(':visible');
  
  // Container width and margin changes with screen size
  $(window).resize(function() {
    screenshotContainerWidth = screenshotContainer.width();
    screenshotContainerMargin = Number(screenshotContainer.css('margin-left').split("px")[0]);
    mobile = $('.gallery-indicators-mobile').is(':visible');
  });
  
  // Scroll the image gallery using the right/left buttons
  $('.right').click(function() { 
    scrollGallery('+=' + 2*screenshotOuterWidth, 'fast');
  });
  
  $('.left').click(function() { 
    scrollGallery('-=' + 2*screenshotOuterWidth, 'fast');
  });
  
  // Scroll the image using the scroll bar on mobile
  screenshotContainer.scroll(function() {
    if(mobile) {
      // On scroll check if we need to switch the indicators
      toggleGalleryIndicators();
    }
  });
  
  // Scroll using the iOS/Android buttons
  galleryIndicators.click(function() {
    scrollToFirstScreenshot($(this));
  });
});