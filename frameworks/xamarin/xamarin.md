---
layout: framework
title: Xamarin
framework: xamarin
compile_to_native: true
platforms:
  android: true
  ios: true
contributors:
  - { name: 'Colin Eberhardt', username: colineberhardt, hash: 458f2e0d08d4114f8b323798cfea141d }
  - { name: 'Sam Hogarth', username: sh1989, hash: d4534a4d64ddf89c318221d9f0e766da }
downloads:
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-xamarin-454d3c1505c26c1918b2d30067a5f2fb88a64b29.apk'
links:
  - { title: 'Source Code', url: 'https://github.com/xamarin', description: 'The Xamarin source code is available on Github.' }
  - { title: 'Official Guides', url: 'https://developer.xamarin.com/guides/', description: 'A wide variety of guides relating to Xamarin development.' }
  - { title: 'Xamarin on Twitter', url: 'https://twitter.com/xamarinhq', description: 'Regularly updated with information about releases, features and links to articles.' }
  - { title: 'Xamarin on StackOverflow', url: 'http://stackoverflow.com/questions/tagged/xamarin', description: 'A variety of questions and answers related to Xamarin development on Stackoverflow.' }

---

[Xamarin](http://xamarin.com/) have two commercial products, _Xamarin.iOS_ for iOS development and _Xamarin.Android_. The Xamarin frameworks allow you to write applications using C# and the .NET framework. For each platform Xamarin provide bindings to the native platform APIs. As a result Xamarin applications make use of the native UI for each mobile platform. Xamarin do not provide a Windows Phone product because the C# and .NET code used for Android and iOS development is directly portable to Windows Phone.

The PropertyCross implementation makes use of the Model View Presenter (MVP) pattern in order to share as much UI logic as possible. The Model and Presenter code is shared across all three mobile platforms, with the View code, which makes use of native UI components, being distinct for each platform. This is reflected in the code-sharing statistics.


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/xamarin'>see the github source</a>.
