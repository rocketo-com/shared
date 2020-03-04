# Project description

This is the shared module for provide components, utils and common modules for frontend apps.

## Live playground

https://rocketo-com.github.io/shared

## Scripts

`npm ci` – for install deps
`npm run build` – for build lib
`npm run start` – for development
`npm run deploy-storybook` – for build and deploy to [GitHub Pages](https://rocketo-com.github.io/shared).

## Install

You can install this modules as dependency throw `npm i git+ssh://git@github.com:rocketo-com/shared.git#COMMIT_HASH`

Or you can use script from common-frontend module: `common-frontend/bin/update-shared.sh`.

Example:
`bash common-frontend/bin/update-shared.sh COMMIT_HASH` where COMMIT_HASH last commit from `_shared` lib.
