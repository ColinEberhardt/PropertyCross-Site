---
layout: framework
title: Enyo
framework: enyo
html5: true
platforms:
  android: true
  ios: true
language: JS
contributors:
  - { name: 'Art Dahm', username: dragongears, hash: 8b162dd0a4db89f2b763a5f4be389ef2 }
  - { name: 'Dave Freeman', username: sugardave, hash: 8fb6bbed9a2341ce15f1ab3ea13b2633 }
downloads:
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-enyo-239c763f088732780efe5aa9c0bbb75c76dd2738.apk'
phonegap: true
links:
  - { title: 'Official Website', url: 'http://enyojs.com/', description: '- The official EnyoJS website.' }
  - { title: 'Documentation', url: 'http://enyojs.com/docs/latest/#/home', description: '- Comprehensive documentation provided by the makers of EnyoJS.' }
  - { title: 'Developer Guide', url: 'http://enyojs.com/docs/latest/developer-guide/index.html', description: '- The EnyoJS developer guide.' }
  - { title: 'Forums', url: 'http://forums.enyojs.com/', description: '- The official forums provide updates and a platform for asking and answering questions related to the framework.' }
  - { title: 'EnyoJS on Twitter', url: 'https://twitter.com/EnyoJS', description: '- The official EnyoJS Twitter account.' }
  - { title: 'EnyoJS Blog', url: 'http://blog.enyojs.com/', description: '- Updates and information about future releases from the official blog.' }

---

Enyo is a free and open source (Apache 2.0 license) cross-platform and cross-browser application development framework that enables developers to create HTML5 applications and deploy them to many modern desktop browsers and mobile devices.  

Enyo is built around the philosophy of fully-encapsulated components, which allow a developer to reuse component pieces (or even an entire application) in new or existing projects.  It is possible to embed full Enyo applications in the DOM elements of existing Web pages.

Enyo does not use templating, instead enyo.Controls (a kind of enyo.Component) render themselves into the DOM based on their owner/parent hierarchy in the application structure. Developers design the application structure/component with JavaScript object literals, adding methods and properties for functionality.

Enyo has a dependency mechanism (package.js) to enable a basic modular approach to building applications.  If you look at most Enyo projects, you will see references to a __$lib__ directory in one or more package.js files, usually to include optional modules such as [Layout](https://github.com/enyojs/layout) (lists and responsive components) and [Onyx](https://github.com/enyojs/onyx) (a widget library).


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/enyo'>see the github source</a>.
