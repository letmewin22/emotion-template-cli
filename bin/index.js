#!/usr/bin/env node
const yargs = require('yargs')

const {execSync} = require('child_process')

const runCommand = command => {
  try {
    execSync(`${command}`, {stdio: 'inherit'})
  } catch (e) {
    console.error(`Failed to execute ${command}`, e)
    return false
  }
  return true
}
const projectName = process.argv[2] || '@emotionagency-template'
const template =
  process.argv?.find(p => p.includes('--template'))?.split('=')[1] || 'default'

const getRepo = () => {
  if (template === 'default') {
    return 'https://github.com/Emotion-Agency/nuxt4-emotion-template'
  }

  if (template === 'store') {
    return 'https://github.com/letmewin22/store-test2'
  }
}

const gitCheckoutCommand = () => {
  const repo = getRepo()

  return `git clone --depth 1 ${repo} ${projectName}`
}

const installDepsCommand = `cd ${projectName} && yarn install`

console.log(`Cloning the repository with name ${projectName}`)

const checkedOut = runCommand(gitCheckoutCommand())
if (!checkedOut) process.exit(-1)

console.log(`Installing dependencies for ${projectName}`)

const installedDeps = runCommand(installDepsCommand)
if (!installedDeps) process.exit(-1)

console.log(
  'Congratulations! You are ready. Follow the following commands to start'
)

console.log(`cd ${projectName} && yarn dev`)
