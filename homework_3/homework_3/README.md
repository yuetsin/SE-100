# Homework 3

> Homework Project for SE-100.

## Features

Query all classrooms in SJTU and figure out when they're occupied, when they're empty.

All data come from [yuxiqian/finda-studyroom](https://github.com/yuxiqian/finda-studyroom).

![](https://raw.githubusercontent.com/yuxiqian/SE-100/master/homework_3/homework_3/img/main.png)

> Main Page

![](https://raw.githubusercontent.com/yuxiqian/SE-100/master/homework_3/homework_3/img/result.png)

> Result Page

[GitHub Mirror](https://yuxiqian.github.io/index.html)

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
So I made a decision that replace it with TypeScript. Not using TypeScript with the logic stuff, and convert it into JavaScript. The main script file in 'main.ts' is just TypeScript.
The language we use in App.vue's <script> phase is also TypeScript. All we need JavaScript is its powered jQuery. But why we have to do this replacement?

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

### Vue-Material

Thanks to Google's Material Design System, many frameworks have also developed their own UI frameworks. Not containing much technique hardship, so let's skip this part quickly.

## Developing

### TypeScript: Class

Why we insist using strong typed TypeScript? From its name we know it has great types. Not only some inserted types, our self-designed classes, structs and interfaces all can be easily implemented.
We have to save all JSON data comes from the library and take them as a fixed structure. So TypeScript's class feature is very useful.

### Vue: "v-for"

The "v-for" feature can be used to expand website elements dynamically.  For example, we have to dynamically add classroom ID into the room selector element, so at that time v-for syntax can make everything easier.

### ts-loader

Thanks to many open-source library, it's as easy as JavaScript to use TypeScript as the major language of webside development. Ts-loader can make most stuff done, and we just need to cover the rest.

## Unit Test

When we use vue-cli to initialize our projects, we would be asked if we want to use unit test (with Jest or Karma) in our project. Configuring them following the documents are just fine for TypeScript.
