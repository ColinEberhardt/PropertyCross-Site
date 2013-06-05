# Website Build Instructions

The website is hosted using the GitHub Pages feature.

To rebuild the less run -
```
website> npm install -g less
website> lessc --yui-compress less/main.less > less/main.css
website> git commit -a -m "Update compiled css"
```

The downloads are hosted separately on AWS S3, ask [chrisprice](http://github.com/chrisprice) if you need them updating. Following the initial upload of files (which are suffixed with -initial), subsequent uploads should be suffixed with the SHA1 hash of the commit from which they are generated.
