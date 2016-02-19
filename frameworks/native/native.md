---
layout: framework
title: Native
framework: native
native: true
platforms:
  android: true
  ios: true
contributors:
  - { name: 'Colin Eberhardt', username: colineberhardt, hash: 458f2e0d08d4114f8b323798cfea141d }
  - { name: 'Sam Hogarth', username: sh1989, hash: d4534a4d64ddf89c318221d9f0e766da }
downloads:
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-native-4eb213e84f1cc5daa11c3192b9ec68c145a32e61.apk'
links:
  - { title: 'Apple Developer Library', url: 'https://developer.apple.com/library/', description: 'Find guides, reference, and sample code for developing with the latest tools and technologies for Apple platforms.' }
  - { title: 'Android Guides', url: 'http://developer.android.com/guide/index.html', description: 'Detailed guides and advice on how to develop apps for Android.' }
  - { title: 'iOS Development Guides', url: 'https://developer.apple.com/library/ios/navigation/#section=Resource%20Types&topic=Guides', description: 'Guides on a wide variety of iOS related programming topics.' }
  - { title: 'Android Development on Stackoverflow', url: 'http://stackoverflow.com/questions/tagged/android', description: 'Questions and answers related to Android development on Stackoverflow.' }
  - { title: 'iOS Development on Stackoverflow', url: 'http://stackoverflow.com/questions/tagged/ios', description: 'A variety of questions and answers related to iOS development on Stackoverflow.' }

---

The native implementations of the PropertyCross application are included as a benchmark for comparison. These implementations illustrate the tools and technologies that are used for native development on each mobile platform. The native implementations also provide a target for the user experience that should be aimed for with the cross-platform frameworks, with the assumption being that the use of native implementation technologies will provide the best user experience.

The iOS application is built using Xcode, the Windows Phone application is built using Visual Studio together with the Windows Phone 7 SDKs, and the Android version is built using Eclipse.


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/native'>see the github source</a>.
