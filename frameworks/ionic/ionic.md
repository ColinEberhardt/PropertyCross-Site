---
layout: framework
title: Ionic
framework: ionic
type: html5
platforms:
  android: true
  ios: true
contributors:
  - { name: 'Graham Odds', username: godds, hash: 3f5e6c753071c6a41f7f1dbb89daeb3b }
downloads:
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-ionic-initial.apk'
phonegap: true
links:
  - { title: 'Official Documentation', url: 'http://ionicframework.com/docs/', description: 'Detailed documentation giving a comprehensive overview of the framework.' }
  - { title: 'Apps built with Ionic', url: 'http://showcase.ionicframework.com/', description: 'A showcase of apps built using Ionic.' }
  - { title: 'Ionic Blog', url: 'http://blog.ionic.io/', description: 'A regularly updated blog with information about new releases and Ionic features.' }
  - { title: 'Official Guide', url: 'http://ionicframework.com/docs/guide/', description: 'A detailed guide providing information on a wide variety of Ionic topics.' }
  - { title: 'Ionic Forum', url: 'https://forum.ionicframework.com/', description: 'An excellent platform to ask and answer questions about Ionic.' }
  - { title: 'Stackoverflow questions', url: 'http://stackoverflow.com/questions/tagged/ionic-framework', description: 'Stackoverflow questions and answers relating to Ionic.' }
  - { title: 'Ionic on Twitter', url: 'https://twitter.com/ionicframework', description: 'Provides regular updates on the future of the project and useful Ionic articles.' }

---

This is an implementation of the PropertyCross application using [Ionic](http://ionicframework.com) (v0.9.24).  Ionic is an HTML5 framework built with [Sass](http://sass-lang.com) and optimized for [AngularJS](http://angularjs.org) that uses [Cordova / PhoneGap](http://phonegap.com) to package the HTML / JavaScript within a native wrapper for app-store deployment.  Ionic includes mobile-specific components and controllers, and Cordova provides a set of APIs for accessing native phone functionalities which are not available via HTML specifications.

All HTML and JavaScript is shared across all mobile platforms, though small elements of functionality have been included to tailor the view subtly towards specific platforms.  View, controller, model and services code is developed and separated following AngularJS' standard approach.  Ionic provides an [npm](http://www.npmjs.org) package to create, build and run applications (using Cordova under the covers).


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/ionic'>see the github source</a>.
