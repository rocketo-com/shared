# Project description

This is the shared module for provide components, utils and common modules for frontend apps.

## Live playground

https://shared.vlad-blow.now.sh/

## Scripts

`npm i` – for install deps
`npm run build` – for build lib
`npm run dev` – for development
`npm run build:deploy` – for build and deploy to `now.sh` (IMPORTANT: now deploy working only from Vladimir's laptop)

## Install

You can install this modules as dependency throw `npm i git+ssh://git@rocketo.bitbucket.org/teamrocketo/common-frontend.git#COMMIT_HASH`

Or you can use script from common-frontend module: `common-frontend/bin/update-shared.sh`.

Example:
`bash common-frontend/bin/update-shared.sh COMMIT_HASH` where COMMIT_HASH last commit from `_shared` lib.
