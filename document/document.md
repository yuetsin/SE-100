# **Classroom Checker**
##### My first Vue.js project

## Purposes
* Learn Vue.js better
* Get a clear impression on how Vue.js works
* Make a fair comparison on Vue.js and other frameworks

## Key notes
* UI display and variables' bindings
* Data structure analyses

## Events
> 2018/09/27
* Install required frameworks
* Settle down the developing environment
> 2018/09/28
* Initial commit to github.com
* Ensure the json data source

## Introduction
First of all, since there already exists one [simple application](https://github.com/yuxiqian/electsys-utility) that could read a special [json file](https://github.com/yuxiqian/finda-studyroom) that contains all courses info and directly displays how a classroom is arranged for curricula uses, which might be a little bit more useful when you want to have a classroom as your studyroom without being disturbed.

This program was written in Swift, which isn't very similar with Vue.js and other fore-end frameworks. However since they share some certain grammer features and I haven't learned more frameworks, I'll forcibly take:

* [Swift](https://github.com/apple/swift)
> Version 4.1, developed by Apple

* [Vue](https://github.com/vuejs/vue)
> Version 2.x, developed by yyx

## Processes
First of all, this simple demo should complete the following tasks:
* Get information dynamically, determine which year and term should it display
* Generate the .json url and obtain data
* Analyse the classroom status
* Update the display every time the filter is changed

## Comparison

### Installation
Both of their development environments are easy to build.

#### Vue.js

For Vue, we may just use command
``` shell
npm install vue
```
to install Vue.js in a minute. The version I started work with is vue@2.5.17.
And to work with some additional development environments like WebStorm,
all we need to do is adding a single line at the top of the .html files, like:
``` HTML
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```
That would allow the usage of Vue.js in this particular page.

#### Swift
Swift's officially suggested IDE is Apple's Xcode. However since Swift is 
literally an open-source programming language, there also exists some 
handy third-party IDE, like JetBrains' AppCode. Many of them provide
binary installers, but just can't be so simple and easy as npm package manager.

### Programming
#### Vue.js
From its name, we may know that it involves with JavaScript, as it's 
kind of an online script language's tool. So after we generates our codes and
run them like an 

First of all, we need to create a new 'Vue' type object as the kernel of the whole framework. Just like this:


``` Vue
var app = new Vue({
  el: '#app',
  data: {
    year: 2018,
    term: 1,
  }
})
```

All object and variable that is declared in Vue() object's data dictionary can be automatically and dynamically bound to the interface elements.
For example, in the previous Vue code piece, the 'year' and 'term' can be always synchronized with the UI display when you simply place it in the view:

``` HTML
<body>
    <div id="app">
        <p>当前选中的学期： {{ year }}，{{ term }}</p>
    </div>
  </body>
```
And all operation that changes the UI display that revolves with 'year' and 'term' will also reflects in the value in the 'app' object in the same way.

We can also bind it with the selector box's title and items, which could dynamically gets and sets the selectable items and the selected one.

As a matter of fact, Vue just do this part of job: automatically inserts necessary 'getter' and 'setter' function and make sure they're called in proper situations. 