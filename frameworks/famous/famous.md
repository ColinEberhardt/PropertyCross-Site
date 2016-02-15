---
layout: framework
title: Famo.us
framework: famous
type: html5
platforms:
  android: true
  ios: true
contributors:
  - { name: 'Matthew Dunsdon', username: matthewdunsdon, hash: 98973325557527a01535a91933e7310a }
downloads:
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-famous-initial.apk'
phonegap: true
links:
  - { title: 'Official Website', url: 'http://famous.co/', description: 'The official website for the project.'}
  - { title: 'Blog', url: 'https://blog.famous.org/', description: 'The project''s official blog.'}
  - { title: 'Documentation', url: 'http://famous.org/docs/', description: 'Official documentation for the Famo.us framework.'}
  - { title: 'Famo.us on Twitter', url: 'https://twitter.com/befamous', description: 'Regularly posts updates about the framework.'}
  - { title: 'Introduction to Famo.us', url: 'https://famous.org/framework/hello-framework.html', description: 'Provides useful information aimed at those interested in potentially working with Famo.us.'}
  - { title: 'Stackoverflow Questions', url: 'http://stackoverflow.com/questions/tagged/famo.us', description: 'Questions and answers relating to Famo.us on Stackoverflow.'}

---

Famo.us is a free and open source JavaScript platform for building mobile apps and desktop experiences. What makes Famo.us unique is its JavaScript rendering engine and 3D physics engine that gives developers the power and tools to build native quality apps and animations using pure JavaScript. Famo.us runs on iOS, Android, Kindle and Firefox devices and the [Famo.us University](https://famo.us/university) is a free live coding classroom that teaches all levels of developers how to utilize Famo.us to build beautiful experiences on every screen.

The PropertyCross implementation depends on Famo.us to handle the rendering, animations and event signalling.  A custom MVVM architecture has been used to reduce coupling in the code and the theming does not vary across platforms.  The PhoneGap Build service is used to package up the application and has been tested on iOS 7, Android 4.4 and Window Phone 8.


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/famous'>see the github source</a>.
