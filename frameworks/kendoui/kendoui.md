---
layout: framework
title: 'Kendo UI'
framework: kendoui
type: html5
platforms:
  android: true
  ios: true
contributors:
  - { name: 'Joel Smith', username: joelwilliamsmith, hash: 6e5b209f9dced24655066d1128a13964 }
downloads:
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-kendoui-e4be8c56f55bfa8a83914b6917adeb66d098609d.apk'
phonegap: true
links:
  - { title: 'Official Website', url: 'http://www.telerik.com/kendo-ui', description: 'The official website is a great place to get a feel for the framework and find great documentation, guides and release notes.' }
  - { title: 'KendoUI Guides', url: 'http://www.kendouimobileguide.com/', description: 'A website dedicated to providing guides for developers using KendoUI.' }
  - { title: 'KendoUI on Twitter', url: 'https://twitter.com/kendoui', description: 'The official Twitter account posts lots of useful information about future releases and framework features.' }
  - { title: 'Forums', url: 'http://www.telerik.com/forums/kendo-ui', description: 'The forums are active and frequented by KendoUI experts who post useful information and answer questions.' }
  - { title: 'Stackoverflow questions', url: 'http://stackoverflow.com/questions/tagged/kendo-ui', description: 'A variety of questions and answers relating to the framework on Stackoverflow.' }

---

This is an implementation of the PropertyCross application using [Kendo UI Mobile](http://www.kendoui.com/), a commercial framework for creating mobile UIs that mimic the native look and feel of mobile applications using HTML.

[Kendo](http://www.kendoui.com/) provide a suite of web development frameworks, all of which are built on top of the 'core' Kendo UI MVVM framework. The Kendo UI Mobile framework adds a set of UI widgets for the creation of mobile interfaces. The mobile framework has a look and feel that mimics the native Apple, Android and Windows Phone themes.

This PropertyCross implementation makes use of [Cordova / PhoneGap](http://phonegap.com/), which packages the HTML / JavaScript within a native wrapper for app-store deployment. Cordova also provides a set of APIs for accessing native phone functionalities which are not available via HTML specifications.


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/kendoui'>see the github source</a>.
