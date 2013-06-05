[Node](http://nodejs.org) and [npm](https://npmjs.org/) are pre-requisites of all of these processes. Before trying to run any of the build scripts you need to download and install the various dependencies. The easiest way to do this is to run `npm install` from the build folder:
```
[/build]> npm install
```

This will install the required packages.

###Produce website screenshot thumbnails

This process additionally requires [ImageMagick](http://www.imagemagick.org/script/binary-releases.php) on the path.

From project root, run -
```
[/]> node build/thumbnail.js
```

###Generate assets (icons and splashscreens)

This process additionally requires [ImageMagick](http://www.imagemagick.org/script/binary-releases.php) on the path.

From project root, run -
```
[/]> node build/generate-assets.js
```
