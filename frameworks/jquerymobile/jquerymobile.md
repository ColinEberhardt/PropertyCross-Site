---
layout: framework
title: 'jQuery Mobile'
framework: jquerymobile
html5: true
platforms:
  android: true
  ios: true
language: JS
contributors:
  - { name: 'Colin Eberhardt', username: colineberhardt, hash: 458f2e0d08d4114f8b323798cfea141d }
  - { name: 'Chris Price', username: chrisprice, hash: b6fe36176ec7c9475374a5cd3b7bef1a }
downloads:
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-jquerymobile-2f27e2e7f5dff03000a70364117d90c08ffe8b78.apk'
phonegap: true
links:
  - { title: 'Source Code', url: 'https://github.com/jquery/jquery-mobile', description: 'The full project source code is available on GitHub.' }
  - { title: 'Blog', url: 'http://blog.jquerymobile.com/', description: 'The official blog contains plenty of useful information about future releases and jQuery mobile features.' }
  - { title: 'Getting started guide', url: 'http://demos.jquerymobile.com/1.2.0/docs/about/getting-started.html', description: 'A detailed guide providing the fundamentals of jQuery mobile development.' }
  - { title: 'Forums', url: 'https://forum.jquery.com/jquery-mobile/', description: 'The official jQuery mobile forum is very active with passionate developers.' }
  - { title: 'jQuery Mobile on Twitter', url: 'https://twitter.com/jquerymobile', description: 'jQuery mobile''s Twitter account is not updated regularly anymore but has lots of useful articles from the past.' }
  - { title: 'Stackoverflow Questions', url: 'http://stackoverflow.com/questions/tagged/jquery-mobile', description: 'A number of questions and answers relating to jQuery mobile on Stackoverflow.' }

---

[jQuery Mobile](http://jquerymobile.com) is a HTML5 framework which makes it easy to create mobile applications, by using its set of UI widgets. This is achieved by providing HTML that is marked up with various jQuery Mobile specific attributes, which is then processed to generate the final markup. Within PropertyCross jQuery Mobile is combined with [KnockoutJS](http://knockoutjs.com/), which provides a presentation model (MVVM), [RequireJS](http://requirejs.org/), for dependency management, and [Cordova / PhoneGap](http://phonegap.com/), which packages the HTML / JavaScript within a native wrapper for app-store deployment. Cordova also provides a set of APIs for accessing native phone functionalities which are not available via HTML specifications.

To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/jquerymobile'>see the github source</a>.
