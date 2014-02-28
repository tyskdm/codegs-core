
# Node.js core files

## v0.10.26

Modules in this folder are from [Node.js project v0.10.26](http://nodejs.org/dist/v0.10.26/node-v0.10.26.tar.gz).

Only one line in console.js is commented out.
That line causes GAS-Debugger not to work 'pause execution'.

```
console.js:
@@ -45,7 +45,7 @@ function Console(stdout, stderr) {

   // bind the prototype functions to this Console instance
   Object.keys(Console.prototype).forEach(function(k) {
-    this[k] = this[k].bind(this);
+    // this[k] = this[k].bind(this);
   }, this);
 }
```

Node.js is released under the MIT license. see [download page](http://nodejs.org/download/).

