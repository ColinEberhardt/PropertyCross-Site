# Website Build Instructions

The website is hosted using the GitHub Pages feature.

The source code uses Grunt to build. Having installed [NodeJS](http://nodejs.org), you'll need to do the following:

```
git submodule update --init
npm install
grunt --aws.key=MYAMAZONWEBSERVICESKEY --aws.secret=MYAMAZONWEBSERVICESSECRET
```

The downloads are hosted separately on AWS S3, ask [chrisprice](http://github.com/chrisprice) if you need them updating. Following the initial upload of files (which are suffixed with -initial), subsequent uploads should be suffixed with the SHA1 hash of the commit from which they are generated.
