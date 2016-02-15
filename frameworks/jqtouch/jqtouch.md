---
layout: framework
title: jQTouch
framework: jqtouch
type: html5
platforms:
  android: true
  ios: true
contributors:
  - { name: 'Mark Rhodes', username: markrhodes }
downloads:
  android: 'https://s3-eu-west-1.amazonaws.com/propertycross/PropertyCross-jqtouch-ce8e28b80dae09684b2022bfece8a13c101c6d24.apk'
phonegap: true
links:
  - { title: 'Official Website', url: 'http://jqtjs.com/', description: 'Hosts a number of useful links related to the project.' }
  - { title: 'Source code', url: 'https://github.com/senchalabs/jQTouch', description: 'The full source code is available on Github.' }
  - { title: 'Blog', url: 'http://blog.jqtjs.com/', description: 'The official blog appears to no longer be updated but provides interesting posts on the development of jQT.' }
  - { title: 'jQT on Twitter', url: 'https://twitter.com/jqtouch', description: 'The official twitter account for jQT.' }

---

[jQTouch](http://jqtjs.com/) is a Zepto/jQuery plugin which provides a framework for developing iOS and Android applications.  It is both open source and free to use.

jQTouch provides a structure on which to base the HTML, the majority of the application styling, page transition animations and touch based event handling; however, it's not a fully featured application development solution so this project uses a number of other technologies fill in the gaps:

* [Knockout](http://knockoutjs.com/) - a JavaScript MVVM framework.
* [RequireJS](http://requirejs.org/) - a JavaScript file and module loader.
* [PhoneGap](http://phonegap.com/) - used to wrap the code so that it can be installed as a native application.

To aid the development process, this project makes use of [CoffeeScript](http://coffeescript.org/) and [Sass](http://sass-lang.com/) over JavaScript and CSS respectively.


To view the code and detailed build steps, <a href='{{ site.githuburl }}/tree/master/jqtouch'>see the github source</a>.
