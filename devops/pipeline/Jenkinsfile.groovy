@Library('jenkins@master') _

globalVars()

withEnv(['GIT_URL=git@github.com:rocketo-com/shared.git']) {
 packagePipeline(
   projectType    : 'nodejs',
   buildContainer : env.NODEJS_BUILD_IMAGE,
   buildCommand   : 'npm ci && npm run build',
   testCommand    : 'npm test',
 )
}
