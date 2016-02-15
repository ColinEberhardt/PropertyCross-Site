---
layout: framework
title: Titanium
framework: titanium
type: compile_to_native
platforms:
  android: true
  ios: true
contributors:
  - { name: 'Chris Price', username: chrisprice, hash: b6fe36176ec7c9475374a5cd3b7bef1a }
downloads:
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-titanium-7cc734729f9b7ef11f6b637e76309c5e9bedb705.apk'
links:
  - { title: 'Official Website', url: 'http://www.appcelerator.com', description: 'The Appcelerator website hosts lots of useful resources including documentation and the Appcelerator blog.' }
  - { title: 'Quick Start Guide', url: 'http://docs.appcelerator.com/platform/latest/#!/guide/Quick_Start', description: 'A comprehensive quick start guide that is an incredibly useful resource to developers looking to create an app with Titanium.' }
  - { title: 'Appcelerator on Twitter', url: 'https://twitter.com/appcelerator', description: 'Regularly updated with information about releases, features and links to articles.' }
  - { title: 'Titanium on Stackoverflow', url: 'http://stackoverflow.com/questions/tagged/titanium', description: 'A variety of questions and answers related to Titanium development on Stackoverflow.' }
  
---

[Appcelerator Titanium](http://www.appcelerator.com/) is a JavaScript-based development platform for iOS and Android development. The JavaScript code runs on the device within an interpreter, and the UI for a Titanium application is entirely native. Titanium development uses the Titanium Studio IDE, and depending on your OS, the Android SDKs and Xcode are also required.

The Titanium APIs provide an abstraction layer for the Android and iOS UI elements, allowing you to write your view code against the Titanium abstraction. Although, there are some view concepts which have not been abstracted, meaning that developers have to write platform specific view code.

The Titanium version of the PropertyCross application uses the Model-View-ViewModel (MVVM) pattern, however, Titanium lacks a binding framework, so the View JavaScript code subscribes to the various ViewModel properties.


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/titanium'>see the github source</a>.
