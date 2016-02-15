---
layout: framework
title: QT
framework: qt
compile_to_native: true
platforms:
  android: true
  ios: true
contributors:
  - { name: 'Simon (Deadolus)', username: Deadolus }
downloads:
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross_Qt_armeabi_v7a.apk'
links:
  - { title: 'MvvmCross Manifesto', url: 'https://github.com/MvvmCross/MvvmCross/wiki/The-MvvmCross-Manifesto', description: 'It is useful to read this before developing since it gives a good idea of the framework''s design principles.' }
  - { title: 'MvvmCross Project Wiki', url: 'https://github.com/MvvmCross/MvvmCross/wiki', description: 'A detailed project wiki.' }
  - { title: 'MvvmCross on Stackoverflow', url: 'http://stackoverflow.com/questions/tagged/mvvmcross', description: 'A variety of questions and answers related to MvvmCross development on Stackoverflow.' }
  - { title: 'MvvmCross on Twitter', url: 'https://twitter.com/MvvmCross', description: 'Regularly updated with information about releases, features and links to articles.' }

---

This is an implementation of the PropertyCross application using the [Qt](http://www.qt.io)  Framework, a free Framework for Cross-Platform program development - including, but not limited to mobile platforms. There is also a paid version of Qt.

From the Qt Website: "We make cross-platform application development easy. Target all the screens in your end users’ lives. You only need to write and maintain one code base regardless of what kind of and how many target platforms you might have and we’re talking about all major operating systems here. No need for separate implementations for different user devices. Qt makes your time-to-market faster, technology strategy simpler and future-proof, consequently reducing costs."

In spirit with this description the Author of the Qt-port did not extensively customize the appearance of the basic UI-types (Button, ListView, ...) but rather let Qt do its' best to present the User with as much a native look as possible. This leads to all the platforms looking very Android-like at the time of writing, using Qt5.5. However, it would be possible to further style the Qml-Types to look more native and the authors have presented one way to doing so using a Singleton "AppStyle.qml" in conjunction with a QQmlFileSelector which sofar only changes the color of the TitleBar according to the platform the App runs on.

Note: The link below is compiled for ARM processors. An Intel version of the APK is also available for download [here](https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross_Qt_x86.apk).

To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/qt'>see the github source</a>.
