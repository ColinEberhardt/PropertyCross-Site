---
layout: framework
title: Codename One
framework: codenameone
compile_to_native: true
platforms:
  android: true
  ios: true
  windows: true
  javascript: true
language: Java
contributors:
  - { name: 'Shai Almog', username: codenameone, hash: 3f5e6c753071c6a41f7f1dbb89daeb3b }
downloads:
  android: 'https://www.codenameone.com/demos/PropertyCross/PropertyCross-release.apk'
links:
  - { title: 'Developer Guide', url: 'https://www.codenameone.com/manual/', description: '- The official developer guide manual.'}
  - { title: 'JavaDoc/Reference Guide', url: 'https://www.codenameone.com/javadoc/', description: '- Full reference guide in the standard Java format.'}
  - { title: 'Github Project', url: 'http://github.com/codenameone/CodenameOne/', description: '- Full source code of the virtual machine (ParparVM), Window VM fork and all OS ports, simulators etc.'}
  - { title: 'Codename One Questions on Stackoverflow', url: 'http://stackoverflow.com/questions/tagged/codenameone', description: '- Questions and answers relating to Codename One on Stackoverflow.'}
---

This is an implementation of the PropertyCross application using Codename One, the SDK for which is freely available from [the Codename One website](https://www.codenameone.com/download.html).  It has no additional dependencies and works out of the box with all of Codename One's supported platforms.

Codename One allows you to develop native mobile applications with a single code base. It uses different strategies for every port but the unifying goal is WORA (Write Once Run Anywhere) while still providing full access to the native layer when necessary. It was designed to feel as portable as Swing development on the desktop, but without the compromise.

Supported platforms include:

- **Android** - since Codename One is Java the ART/Dalvik native runtime is used thus Codename One is native to Android.
Note that Codename One uses its own API for portability so you can't pick an Android app and run it within Codename One.

- **iOS** - Codename One uses its open source [ParparVM](https://github.com/codenameone/CodenameOne/tree/master/vm) which translates bytecode to native C code and compiles it on a Mac using xcode. Thus Codename One is native to iOS as it uses the native Apple tooling while still including Java staples such as GC.

- **UWP (Universal Windows Platform)** - This is supported thru an open source port of iKVM that translates Java bytecode to `.net` CLR.

- **JavaScript** - Uses [TeaVM](http://teavm.org/) to cross compile Java bytecode to JavaScript and breakdown methods in such a way that threads and other Java behaviors "just work". This allows Codename One applications to run on the web despite physically being "native" applications.

- **Desktop** - Desktop ports package the Java applications with Java SE in a stanard wrapper. Since desktop isn't a chief focus of Codename One that desktop builds still look like tablet applications.


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/codenameone'>see the github source</a>.
