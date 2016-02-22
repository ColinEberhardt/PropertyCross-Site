---
layout: framework
title: mgwt
framework: mgwt
compile_to_native: true
platforms:
  android: true
  ios: true
language: Java
contributors:
  - { name: 'Colin Eberhardt', username: colineberhardt, hash: 458f2e0d08d4114f8b323798cfea141d }
  - { name: 'Steve Blair', username: SteveBlair }
downloads:
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-mgwt-9deab1d63674e35b97ff9a398397c234d97188f6.apk'
phonegap: true
links:
  - { title: 'Official Website', url: 'http://www.m-gwt.com', description: '- The official website hosts many useful resources including Javadoc documentation and video talks.' }
  - { title: 'Project Wiki', url: 'https://github.com/mgwt/mgwt/wiki', description: '- The project''s Github wiki.' }
  - { title: 'Showcase', url: 'http://mobilegwt.appspot.com/showcase/', description: '- A showcase of apps made using mgwt. This is really useful to visit when trying to get a feel for a framework.' }
  - { title: 'Official blog', url: 'http://blog.daniel-kurka.de/', description: '- The mgwt blog provides information on future releases and also shows interesting examples of mgwt applications.' }
  - { title: 'Source code', url: 'https://github.com/mgwt/mgwt', description: '- The full source code for mgwt is available on Github.' }
  - { title: 'mgwt Google Group', url: 'https://groups.google.com/forum/#!forum/mgwt', description: '- An active Google group focused on questions and issues found with mgwt.' }

---

[Google Web Toolkit](https://developers.google.com/web-toolkit/)  (GWT) is an open source set of tools that allows developers to create web apps in Java. GWT compiles Java into an optimised JavaScript application. GWT is most often used for large-scale web applications, with the strongly typed nature of Java making it easier to maintain a large codebase.

[mgwt](http://www.m-gwt.com/) is an open source mobile widget framework build using GWT. mgwt provides a number of UI widgets, CSS styles and a PhoneGap API which make it easier to develop native-like applications using GWT.

The mgwt PropertyCross implementation is structured using the popular GWT ['Activities and Places'](https://developers.google.com/web-toolkit/doc/latest/DevGuideMvpActivitiesAndPlaces) pattern.


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/mgwt'>see the github source</a>.
