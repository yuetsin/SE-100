# Homework 2
## Introduction

Sometimes it's really hard to decide which kind of technique should we choose. Is it good to stay in the traditional track
and build all my business code as binaries before distributing them, or is it fine if we put them all "online" and just grab the
input and display the result in a so-called "WebView" (like a virtual internet content browser fixed in your app)? In the final part
of this passage, I'd like to introduce a new way to "hybrid" the two techniques above.

## Native? Web?

I can still recall a time when the performance of mobile devices are not so well-developed (approximately in 2010s, the beginning
of Chinese mobile network), some application will boast them as developed in the "Full Native Code". That's not surprising since
at that time, placing an Internet page in your application will always cause notable stucks. But is that prejudice still correct *today*?  I mean, does the major growing up of mobile devices' processing ability have already changed the situation?

Let's take some typical kind of famous programming language used for developing native and web programs.
For Apple's iOS / macOS platform, the officially confirmed application developing language is Objective-C and Swift.
As for Web development, with merely JavaScript + HTML can build a decent web page that can be used in our web-based application.

And the first aspect we may need to compare is the performace.

### Performance

We will take the following three languages at their typical platforms as their testing environment as following:

 * Swift (version 4.2 (swift-4.2-RELEASE) Target: x86_64-unknown-linux-gnu LLVM version 5.0.1)

 * C++ (g++ (Ubuntu 8.2.0-7ubuntu1) 8.2.0)
 
  * Node js (v10.7.0)


And the full comparison statistics are placed in the apprendix part.

There we will give out the conclusion:

* Under most situations, JavaScript will be notably slower than Swift and C++.

* Thanks to Swift's excellent compiler LLVM, sometimes Swift code would execute faster than C++ compiled by g++.

* Under some specific situations (like n-body and regex-redux), Swift would be much slower than it should be.

So seeing all these stuffs, we can say the judgement on the performance is well-founded.
In other words, using Native code would really save about 60% ~ 70% time based on the Web code.

Obviously, "Native" wins.

### Reuseability

Almost all browser script has a unified standard, which could greatly reduces the working load when you have to migrate
your business to a new platform.

For example, if I'd like to create an application that could convert numbers from different digits,
and I'm already having a JavaScript-based [web page](http://tool.oschina.net/hexconvert/) that functions fine,
why not just directly reuse them in your application?

Imagine we've owned this website and using it won't cause any legal conflicts.



If we want to rebuild that web page natively, we have to use Objective-C or Swift to rewrite all business logic.
Re-coding and testing would consume lots of unnecessary working people hours.

However, if we wants to use the web view trick, everything can be simpler:

First, drag a Web View on your application's interface...

![](https://raw.githubusercontent.com/yuxiqian/SE-100/master/document_2/screenshots/ss_1.png)

Second, import some necessary libraries...
```Swift

import WebKit

```

Third, set the source of the web view...


```Swift

let contentHTML: String = "https://tool.oschina.net/hexconvert/"
let request = URLRequest(url: URL(string: contentHTML)!)
webView.load(request)

```

Done! Here's my fresh "web-based application":

![](https://raw.githubusercontent.com/yuxiqian/SE-100/master/document_2/screenshots/ss_2.png)

That's how easy it is to reuse existed codes if we use the Web technique. Obviously, "Web" wins this match.

### Functionality

Apple have build a lot of libraries to strengthen the bond between the OS (Operating System) and the application layer.
They're usually named with a "Kit" suffix. Some more kernal layer libraries have a "Core" prefix.

For example, "EventKits" can access and modify the system calendar library if this application gets users' permission.
And "CoreBluetooth" could easily calls the bluetooth function of your machine. How ridiculous it would be if a website could
access your bluetooth hardware and your private calendar information! Now even accessing the camera is a great challenge
for web developers.

So, if your application has hardware sensitive capacities, there would be little chance for the "Web" based application.
On the other hand, you should read the API Documentation your OS developer provides and follow their instructions to
make sure they works fine. After all, the functionality matters most.

#### Digression

Some major web browser developer has announced an experimental function [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API). It is hoped to solve the functionality lacking issue. However since the diversity of browsers and its long-time experimental duration, I don't think it will spread very popular in a short time.

## Appendix

### JavaScript vs. Swift vs. C++ Result:

 * n-body

source    secs    mem    gz    cpu    cpu load

Node js    26.35    33,228    1297    26.35    1% 0% 100% 0%

Swift    21.80    16,264    1357    21.79    1% 0% 1% 100%

C++ g++    9.42    1,712    1763    9.41    100% 1% 2% 0%

 * reverse-complement

source    secs    mem    gz    cpu    cpu load

Node js    16.92    707,536    1103    18.45    19% 41% 5% 45%

Swift    3.76    770,644    1287    4.44    38% 2% 0% 80%

C++ g++    2.94    980,524    2280    4.53    15% 50% 52% 40%

 * binary-trees

source    secs    mem    gz    cpu    cpu load

Node js    23.46    355,612    431    39.77    68% 33% 37% 33%

Swift    5.11    190,716    1001    14.24    100% 62% 59% 60%

C++ g++    3.67    118,620    809    11.91    75% 78% 99% 76%

 * regex-redux

source    secs    mem    gz    cpu    cpu load

Node js    11.85    884,848    408    12.70    71% 23% 12% 3%

Swift    73.35    883,632    715    140.42    56% 38% 61% 42%

C++ g++    1.83    203,680    1315    4.39    49% 87% 57% 51%

 * fasta

source    secs    mem    gz    cpu    cpu load

Node js    9.43    36,744    1785    9.48    93% 8% 0% 0%

Swift    2.79    8,504    1953    4.38    4% 96% 43% 18%

C++ g++    1.33    1,744    2711    4.29    82% 82% 81% 81%

 * pidigits

source    secs    mem    gz    cpu    cpu load

Node js    14.47    62,316    530    14.53    13% 1% 1% 87%

Swift    1.76    8,492    601    1.76    1% 100% 1% 0%

C++ g++    1.89    4,312    513    1.88    1% 1% 99% 1%

 * spectral-norm

source    secs    mem    gz    cpu    cpu load

Node js    15.80    31,296    381    15.80    1% 0% 0% 100%

Swift    3.96    7,892    601    15.75    100% 100% 99% 100%

C++ g++    1.98    1,168    1044    7.87    100% 99% 99% 99%

 * fannkuch-redux

source    secs    mem    gz    cpu    cpu load

Node js    80.78    31,176    473    80.76    0% 0% 1% 100%

Swift    9.98    7,596    1102    39.50    99% 98% 100% 100%

C++ g++    10.07    1,856    980    39.66    99% 100% 100% 95%

 * mandelbrot

source    secs    mem    gz    cpu    cpu load

Node js    18.04    612,540    748    64.71    98% 84% 97% 80%

Swift    3.30    39,048    1136    13.09    99% 99% 99% 100%

C++ g++    1.82    29,092    1002    7.11    98% 97% 97% 100%

 * k-nucleotide

source    secs    mem    gz    cpu    cpu load

Node js    62.94    1,858,960    935    133.33    84% 76% 78% 70%

Swift    28.42    261,568    1366    109.98    96% 96% 96% 99%

C++ g++    3.83    156,104    1624    12.00    72% 73% 98% 72%


## References

[The Computer Language Benchmarks Game, Debian](https://benchmarksgame-team.pages.debian.net/benchmarksgame/)

[Hex Convert, OSChina](http://tool.oschina.net/hexconvert/)

[Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)
