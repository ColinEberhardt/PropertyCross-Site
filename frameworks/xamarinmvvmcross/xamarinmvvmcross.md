---
layout: framework
title: 'Xamarin <span class="framework-overflow-md">MvvmCross</span>'
longTitle: true
framework: xamarinmvvmcross
compile_to_native: true
platforms:
  android: true
  ios: true
language: C#
contributors:
  - { name: 'Colin Eberhardt', username: colineberhardt, hash: 458f2e0d08d4114f8b323798cfea141d }
  - { name: 'Ross Dargan', username: rossdargan }
downloads:
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-xamarinmvvmcross-initial.apk'
links:
  - { title: 'MvvmCross Manifesto', url: 'https://github.com/MvvmCross/MvvmCross/wiki/The-MvvmCross-Manifesto', description: '- It is useful to read this before developing since it gives a good idea of the framework''s design principles.' }
  - { title: 'MvvmCross Project Wiki', url: 'https://github.com/MvvmCross/MvvmCross/wiki', description: '- A detailed project wiki.' }
  - { title: 'MvvmCross on Stackoverflow', url: 'http://stackoverflow.com/questions/tagged/mvvmcross', description: '- A variety of questions and answers related to MvvmCross development on Stackoverflow.' }
  - { title: 'MvvmCross on Twitter', url: 'https://twitter.com/MvvmCross', description: '- Regularly updated with information about releases, features and links to articles.' }

---

[Xamarin](http://xamarin.com/) have two commercial products, _Xamarin.iOS_ for iOS development and _Xamarin.Android_. The Xamarin frameworks allow you to write applications using C# and the .NET framework. For each platform Xamarin provide bindings to the native platform APIs. As a result Xamarin applications make use of the native UI for each mobile platform. Xamarin do not provide a Windows Phone product because the C# and .NET code used for Android and iOS development is directly portable to Windows Phone.

Xamarin applications share common business logic, written in C# and most often shared via Portable Class Libraries, however, the UI logic is specific to each platform. [MvvmCross](https://github.com/MvvmCross/MvvmCross) is a popular framework that adds data binding support to both Android and iOS for Xamarin applications. With this framework you can share view models as well as business logic, significantly increasing the amount of code that is shared across the target platforms.


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/xamarinmvvmcross'>see the github source</a>.
