---
layout: framework
title: AIR
framework: air
type: compile_to_native
platforms:
  android: true
  ios: true
contributors:
  - { name: 'Graham Odds', username: godds, hash: 3f5e6c753071c6a41f7f1dbb89daeb3b }
downloads:
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-air-02f15438ddcf5b30196605abcdfd5d1548c6c1c2.apk'
links:
  - { title: 'Official Documentation', url: 'http://www.adobe.com/devnet/air/documentation.html', description: 'The official Adobe documentation for AIR.'}
  - { title: 'Official Guides', url: 'http://www.adobe.com/devnet/air.html', description: 'A collection of guides covering a wide range Adobe AIR topics.'}
  - { title: 'AIR Twitter', url: 'https://twitter.com/air', description: 'The official Adobe AIR Twitter account.'}
  - { title: 'AIR Questions on Stackoverflow', url: 'http://stackoverflow.com/questions/tagged/air', description: 'Questions and answers relating to Adobe AIR on Stackoverflow.'}
---

This is an implementation of the PropertyCross application using Adobe Integrated Runtime (AIR), the SDK for which is freely available from [Adobe](http://www.adobe.com/devnet/air/air-sdk-download.html).  It also uses the Flex and Parsley frameworks, both of which are also freely available from [Apache](http://incubator.apache.org/flex/) and [Spicefactory](http://www.spicefactory.org/parsley/).

AIR allows you to develop Android and iOS applications using ActionScript.  It uses the Flash Player virtual machine (with an extended API) to abstract away from the underlying hardware, with access to device capabilities such as GPS and camera.  It also allows custom native extensions to be bundled and accessed through the virtual machine.

Flex is an enterprise application framework for the Flash Player virtual machine providing UI components (and an associated UI framework), binding, advanced data structures and other essential utilities.  It also introduces the MXML language to allow the declarative creation of user interfaces.

Parsley is an inversion-of-control framework for ActionScript providing amongst other things dependency injection and a messaging framework, allowing for better separation of concerns.


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/air'>see the github source</a>.
