---
layout: framework
title: Titanium
framework: titanium
compile_to_native: true
platforms:
  android: true
  ios: true
language: JS
contributors:
  - { name: 'Chris Price', username: chrisprice, hash: b6fe36176ec7c9475374a5cd3b7bef1a }
downloads:
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross_Titanium.apk'
links:
  - { title: 'Official Website', url: 'http://www.appcelerator.com', description: '- The Appcelerator website hosts lots of useful resources including documentation and the Appcelerator blog.' }
  - { title: 'Quick Start Guide', url: 'http://docs.appcelerator.com/platform/latest/#!/guide/Quick_Start', description: '- A comprehensive quick start guide that is an incredibly useful resource to developers looking to create an app with Titanium.' }
  - { title: 'Appcelerator on Twitter', url: 'https://twitter.com/appcelerator', description: '- Regularly updated with information about releases, features and links to articles.' }
  - { title: 'Titanium on Stackoverflow', url: 'http://stackoverflow.com/questions/tagged/titanium', description: '- A variety of questions and answers related to Titanium development on Stackoverflow.' }
  
---

[Appcelerator Titanium](http://www.appcelerator.com/) is a JavaScript-based development platform for iOS and Android development. The JavaScript code runs on the device within an interpreter, and the UI for a Titanium application is entirely native. Titanium development uses the Titanium Studio IDE, and depending on your OS, the Android SDKs and Xcode are also required.

The Titanium APIs provide an abstraction layer for the Android and iOS UI elements, allowing you to write your view code against the Titanium abstraction. Platform specific view concepts have not been abstracted and are available under their own namespaces.

[Appcelerator Alloy](http://www.appcelerator.com/mobile-app-development-products/) is the official MVC for Titanium. It uses XML for views and CSS-like TSS for styles. Controllers use BackBone. Alloy compiles to a classic Titanium project before Titanium compiles to a native app. This way, the developer can take advantage of MVC without having to worry about adding any overhead.


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/titanium'>see the github source</a>.
