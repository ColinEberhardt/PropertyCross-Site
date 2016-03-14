# Website Build Instructions

1. Clone the repository
2. Open a command prompt and run 'npm install' in the root of the repository
3. Run 'gulp' to build and host the website with live-reload on http://localhost:8080 . All links use localhost as baseurl.

# Production Build Instructions
1. Run 'gulp build-production' to build the website with all links using the baseurl from site.yml - make sure this is set to the correct domain.

# Deploy to gh-pages Instructions
1. In gulp.js at the beginning of the file edit the username, accessToken and repositoryName variables to match your specific case. [How to generate an access token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/)
2. Run 'gulp deploy' to push the contents of current build (in _site folder) to gh-pages branch. The default commit message is 'Update [timestamp]'. If you want a custom commit message run 'gulp deploy --message "Your commit message"'.

# Know issues
1. 'clean' task will fail if you have _site folder opened while it is running
