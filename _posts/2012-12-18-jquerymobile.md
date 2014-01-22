---
layout: framework
title: 'jQuery Mobile'
framework: jquerymobile
platforms:
  - android
  - ios
  - windowsphone
pie:
  common: { segment: 'M150,150l0.00,-145.00A145,145,0,1,1,149.95,5.00z' }
contributors:
  - { name: 'Colin Eberhardt', username: colineberhardt, hash: 458f2e0d08d4114f8b323798cfea141d }
  - { name: 'Chris Price', username: chrisprice, hash: b6fe36176ec7c9475374a5cd3b7bef1a }
downloads:
  ios: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-jQueryMobile-167ed1f91c1db14c6c374c1636edda052c834414.ipa'
phonegap: true

---

[jQuery Mobile](http://jquerymobile.com) is a HTML5 framework which makes it easy to create websites that mimic the iOS look and feel. This is achieved by providing HTML that is marked up with various jQuery Mobile specific attributes, which is then processed to generate the final markup. Within PropertyCross jQuery Mobile is combined with [KnockoutJS](http://knockoutjs.com/), which provides a presentation model (MVVM), [RequireJS](http://requirejs.org/), for dependency management, and [Cordova / PhoneGap](http://phonegap.com/), which packages the HTML / JavaScript within a native wrapper for app-store deployment. Cordova also provides a set of APIs for accessing native phone functionalities which are not available via HTML specifications.

The JavaScript Model and ViewModel code is shared across all mobile platforms, whereas the HTML files, which make up the View, are specific for each platform. This allows the UI for each platform to be tailored to the requirements of each platform. The iOS version uses the out-of-the-box jQuery Mobile styles, whereas Windows Phone uses the [jquery-metro-theme](http://sgrebnov.github.com/jqmobile-metro-theme/) extensions to support the Metro UI style together with Windows Phone specific features such as the app-bar, and the Android version uses the [nativeDroid](http://flypixel.com/nativedroid-a-theme-for-jquery-mobile/7892175001166318) theme.

jQuery Mobile does not provide an easy way to include multiple themes in a common codebase. However, Cordova (and therefore PhoneGap) provides a means to overcome this through the use of [merges](http://cordova.apache.org/docs/en/3.0.0/guide_cli_index.md.html#The%20Command-line%20Interface_customize_each_platform). Unfortuntely we're using PhoneGap Build, which doesn't support merges, so we've had to include an extra `index.html` to redirect for different platforms. We've included the `merges` structure for reference.


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/jquerymobile'>see the github source</a>.