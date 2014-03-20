---
layout: framework
title: 'Xamarin MvvmCross'
framework: xamarinmvvmcross
platforms:
  - android
  - ios
  - windowsphone
pie:
  android: { segment: 'M150,150l0.00,-145.00A145,145,0,0,1,288.04,105.62z', line: 'M150,150l138.04,-44.38' }
  ios: { segment: 'M150,150l138.04,-44.38A145,145,0,0,1,271.82,228.65z', line: 'M150,150l121.82,78.65' }
  windowsphone: { segment: 'M150,150l121.82,78.65A145,145,0,0,1,209.34,282.30z', line: 'M150,150l59.34,132.30' }
  common: { segment: 'M150,150l59.34,132.30A145,145,0,1,1,150.00,5.00z', line: 'M150,150l-0.00,-145.00' }
contributors:
  - { name: 'Colin Eberhardt', username: colineberhardt, hash: 458f2e0d08d4114f8b323798cfea141d }
  - { name: 'Ross Dargan', username: rossdargan }
downloads:
  windowsphone: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-xamarinmvvmcross-initial.xap'

---

[Xamarin](http://xamarin.com/) have two commercial products, _Xamarin.iOS_ for iOS development and _Xamarin.Android_. The Xamarin frameworks allow you to write applications using C# and the .NET framework. For each platform Xamarin provide bindings to the native platform APIs. As a result Xamarin applications make use of the native UI for each mobile platform. Xamarin do not provide a Windows Phone product because the C# and .NET code used for Android and iOS development is directly portable to Windows Phone.

Xamarin applications share common business logic, written in C# and most often shared via Portable Class Libraries, however, the UI logic is specific to each platform. [MvvmCross](https://github.com/MvvmCross/MvvmCross) is a popular framework that adds data binding support to both Android and iOS for Xamarin applications. With this framework you can share view models as well as business logic, significantly increasing the amount of code that is shared across the target platforms.


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/xamarinmvvmcross'>see the github source</a>.