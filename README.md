# Emotion Agency Template CLI

A simple command-line app for installing Emotion Agency templates.

## Instalation
To install the app, run either of the following commands:

`npm i -g @emotionagency/template`

or

`yarn global add @emotionagency/template`

## Usage
You can use the app globally by running:

`@emotionagency/template <your-app-name>`

or, if you haven't installed the app globally, you can run:

`npx @emotionagency/template <your-app-name>`

## Choose Your Template

There are two templates available to choose from: 

1. Default 
2. With storyblok 

If you want to use something other than the "Default" template, use the following command:

`npx @emotionagency/template <your-app-name> --template=<template-name>`


#### For example, to use the "With storyblok" template, run:

`npx @emotionagency/template my-amazing-project --template=storyblok`

**Note:** that if you want to use the "Default" template, you don't need to specify the --template option.
