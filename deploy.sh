#!/bin/sh
# ideas used from https://gist.github.com/motemen/8595451

# abort the script if there is a non-zero error
set -e

# now lets setup a new repo so we can update the gh-pages branch
git config --global user.email "$GH_EMAIL" > /dev/null 2>&1
git config --global user.name "$GH_NAME" > /dev/null 2>&1

npm run build

gh-pages -d build

git checkout master

git merge gh-pages -m "Deploy to GitHub pages [ci skip]" --allow-unrelated-histories
git push --force --quiet

echo "Finished Deployment!"