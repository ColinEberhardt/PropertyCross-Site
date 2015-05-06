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
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-jquerymobile-2f27e2e7f5dff03000a70364117d90c08ffe8b78.apk'
  windowsphone: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-jquerymobile-2f27e2e7f5dff03000a70364117d90c08ffe8b78.xap'
phonegap: true

---

[jQuery Mobile](http://jquerymobile.com) is a HTML5 framework which makes it easy to create mobile applications, by using its set of UI widgets. This is achieved by providing HTML that is marked up with various jQuery Mobile specific attributes, which is then processed to generate the final markup. Within PropertyCross jQuery Mobile is combined with [KnockoutJS](http://knockoutjs.com/), which provides a presentation model (MVVM), [RequireJS](http://requirejs.org/), for dependency management, and [Cordova / PhoneGap](http://phonegap.com/), which packages the HTML / JavaScript within a native wrapper for app-store deployment. Cordova also provides a set of APIs for accessing native phone functionalities which are not available via HTML specifications.

To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/jquerymobile'>see the github source</a>.
