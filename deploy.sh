#!/bin/sh
# ideas used from https://gist.github.com/motemen/8595451

# abort the script if there is a non-zero error
set -e

# now lets setup a new repo so we can update the gh-pages branch
git config --global user.email "$GH_EMAIL" > /dev/null 2>&1
git config --global user.name "$GH_NAME" > /dev/null 2>&1

npm run build

gh-pages -d build

git branch -m master foo
git branch -m gh-pages master
git push -f origin master
git push origin --delete foo

echo "Finished Deployment!"