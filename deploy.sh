#!/usr/bin/env sh
# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'
 
# if you are deploying to https://«USERNAME> -github. to
# git push •f git@github.com:<USERNAME>/«USERNAME>.github|w@ltrento con n

# if you are deploying to https://«USERNAME> -gi thub. to/<REPO>
git push -f git@github.com; /kponce97/react-task-example.git main:gh-pages

cd -