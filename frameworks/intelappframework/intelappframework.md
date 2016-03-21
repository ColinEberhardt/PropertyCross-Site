---
layout: framework
title: 'Intel App <span class="framework-overflow-md">Framework</span>'
longTitle: true
framework: intelappframework
html5: true
wideIcon: true
platforms:
  android: true
  ios: true
language: JS
contributors:
  - { name: 'Joel Smith', username: joelwilliamsmith, hash: 6e5b209f9dced24655066d1128a13964 }
downloads:
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-intelappframework-b15e5714b3858b0ce154f1e5925b2cb815ef0afe.apk'
phonegap: true
links:
  - { title: 'API Reference', url: 'https://app-framework-software.intel.com/api.php', description: '- Provides a detailed description of all the exposed library calls.' }
  - { title: 'Official Documentation', url: 'https://app-framework-software.intel.com/documentation.php', description: '- The official app framework documentation.' }
  - { title: 'Official forums', url: 'https://software.intel.com/en-us/forums/app-framework', description: '- A platform to ask and answer questions related to the framework with support from Intel employees.' }
  - { title: 'Stackoverflow Questions', url: 'http://stackoverflow.com/questions/tagged/appframework', description: '- Stackoverflow questions and answers relating to Intel App Framework.' }

---

[Intel App Framework](http://app-framework-software.intel.com/) is a framework for building cross-platform mobile application using HTML5 technologies. The framework started life as jqMobi, a mobile optimised version of jQuery, which was created by the team behind [appMobi](http://www.appmobi.com/). Intel acquired the jqMobi tools and staff in February 2013.

Intel App Framework is free and open sourced under an MIT licence. Intel also offer [XDK](http://html5dev-software.intel.com/), which is a a full suite of tools built around the App Framework. XDK adds an IDE, build tools and an emulator.

Along with its lightweight JavaScript library, Intel App Framework provides a basic [MVC framework](http://app-framework-software.intel.com/docmvc.php) and many UI components. Rather than mimicking the native look and feel, the framework has opted for providing its own styles which looks the same across all platforms. Styles can be customised using the framework "[Style Builder](http://app-framework-software.intel.com/style.php)". The Intel App Framework version of PropertyCross uses [PhoneGap Build](https://build.phonegap.com/) in order to create the native packages.


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/intelappframework'>see the github source</a>.
