# **Classroom Checker**
##### My first Vue.js project

## Purposes
* Learn Vue.js better
* Get a clear impression on how Vue.js works
* Make a fair comparison on Vue.js and other frameworks


## Events
> 2018/09/27
* Install required frameworks
* Settle down the developing environment
> 2018/09/28
* Initial commit to github.com
* Ensure the json data source
> 2018/9/29
* Write documents
> 2018/9/30
* Write documents

## Introduction
First of all, since there already exists one [simple application](https://github.com/yuxiqian/electsys-utility) that could read a special [json file](https://github.com/yuxiqian/finda-studyroom) that contains all courses info and directly displays how a classroom is arranged for curricula uses, which might be a little bit more useful when you want to have a classroom as your studyroom without being disturbed.

This program was written in Swift, which isn't very similar with Vue.js and other fore-end frameworks. However since they share some certain grammer features and I haven't learned more frameworks, I'll forcibly take:

* [Swift](https://github.com/apple/swift)
> Version 4.1, developed by Apple

* [Vue](https://github.com/vuejs/vue)
> Version 2.x, developed by yyx

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

### Debugging
#### Vue.js
From its name, we may know that it involves with JavaScript, as it's 
kind of an online script language's tool. So after we generates our codes and
run them in our browser, we can still use the browser-provided console to
interact with the execution process, which is a born-like advantage as a 
script language. Plus, all platforms basically share the same environments,
which means you don't have to build many slightly different versions of product
to match many user groups. 

#### Swift
However, Swift seems not so well in the debugging stuffs like Vue.
Nevertheless it could never be dynamically debugged at runtime
 (since it have to be compiled as binary codes before it can be executed), 
 its executable file is strongly platform related. Even different versions of your target
 needs individual binary files, and you can only cover users of iOS & macOS,
 which is far less than a Web application can do.
 
 ### Advantages
 #### Vue.js
* Responsive Mode

Vue.js has a killer advantage that could attract many fore-end programmers:
responsive mode designing mode.

Let's use some code to say it clear. In order to use Vue.js, we 
need to create a new 'Vue' type object as the kernel of the whole framework. Just like this:

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

* Network stuff friendly

As declared before, Vue.js based on JavaScript is very much
compatible with all network stuffs, and could access the network
data quite naturally.
 #### Swift
 * Abundant APIs
 
 Swift has a whole bunch of Apple's provided APIs that could directly
 access the whole system, including all top and low levels APIs.
 * Great efficiency

 And for this layer is written mainly in C and Objective-C,
 their performance is much better than the script ones.
 
  ### Disadvantages
   #### Swift
   If we need to pick Swift's disadvantages, there's so much!
   * Responsive Mode
   
   OK, Swift 4 also supports bindings, that could set a particular
   UI objects' properties into a member variable of the inherited
   view controller class.
   But it still can't dynamically adds the item of the binding relationship.
   Plus, in Vue.js you can just call
   ``` Vue
    label.freeze(year)
   ```
   to avoid the updates of the bindings.
   
   * Actions
   
   In Swift, you have to do these steps to bind an event to a UI element, a button for example.
   - [x] Drag and drop a NSButton object in the interface designer
   - [x] Hold ⌘ / Command, and drag it into the view controller's swift file
   - [x] Select the 'IBAction' item
   - [x] Choose the type of the event's sender (NSButton)
   - [x] Write code in this specially tagged (@IBAction) function
   - [ ] And NOT be able to share this piece of code with different types of elements
   
   If want to use another kind of mouse event (for example, mouseOver) rather than click:
   - [x] Inherit the default NSButton class
   - [x] Override its EventHandler
   - [ ] And even more impossible to re-use this piece of code
   
   However, in Vue.js you may just bind a event like this:
   ```Vue
   <button> v-on:click="some_function_here"  </button>
   ```
   ... And write the method in the initialization of Vue() object:
   ``` Vue
   methods: {
       some_function_here: function () {
          // ...
       }
     }
  ```
   Just make everything clear:
   
   Sender's type? Never mind.
   
   Event's type? Click.
   
   Function to call? some_function_here.
   
   * Lacking network supports
   
   As is known to all, Swift is originated from Objective-C,
   an old-fashioned programming language at the same time as C and C++.
   And Swift inherited most network abstract layer of Objective-C.
   So it's almost impossible to develop network based Swift program without
   using some third-party network library (like Alamofire / JustHTTP).
   
   However, when programming with Vue.js, it can't be easier to obtain
   certain data on the Internet. It's almost as simple as requests in Python.
   
   * JSON Support
   
   Initially, Douglas Crockford created JSON, this tiny simple data swap standard that is way much better
   than other choices like XML.
   
   In order to parse JSON in Swift, we have to use third-party library like SwiftyJSON, since 
   Apple didn't provide it in the standard library. However, from its name you may assume that
   JSON (JavaScript Object Notation) can be used no more simpler in JavaScript.
   
   Actually, it's almost as easy as that in Python for its json library. That could reduce much trouble.
   Unfortunately, at least till then, Swift will not provide this as a proterozoic feature.
   
   
   