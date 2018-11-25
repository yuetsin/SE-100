# Homework 3

> Homework Project for SE-100.

## Features


## Build Setup

``` bash
# install dependencies
npm install vue vue-cli vue-material@^0.8.1 typescript ts-loader jest

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Technique Select

### Vue + TypeScript

First of all, I choose Vue.js rather than React or Angular from history reasons. Sure it is much easier to master Vue than other technique stacks for a total fresh fore-end developing learner,
for its easy 'v-' style syntax and full and abundant Chinese documents (for the author's Chinese identity). However the JavaScript + decorator's syntax (like codes full of # and @) always horrored me.
So I made a decision that replace it with TypeScript. But Why?

Since I'm extremely familiar with static typed languages, JavaScript didn't interest me for a long time. Taking function as an object doesn't come to me so quickly. The first time I noticed TypeScript is
its powered "Visual Studio Code". When I really opened its document and make some playground experiment, I surprisingly noticed that its similar syntax with some languages I know before:
especially Swift and ActionScript. Strongly typed system makes it more secure and smart.

### How?
How to start Vue + TypeScript? The author of Vue.js has announced that Vue version after 2.5 will fully compatible with TypeScript. There is already official demo and instructions on how to start such hybrid projects.
Mainly we just need to:

``` bash
# install dependencies
npm install vue-cli typescript ts-loader
```

And that's it.

## Developing
Why we insist using strong typed TypeScript? From its name we know it has great types. Not only some inserted types, our self-designed classes, structs and interfaces all can be easily implemented.
