# Codegs-core

Core modules for [Code.gs](https://www.npmjs.org/package/codegs) includes both Code-core modules and Node.js core modules.

### v0.0.2

- add README.md


## Usage

- install into your project.
    ```
    $ npm install codegs-core
    ```

- Import `global` module in your main file.
    ```
    if (typeof global === 'undefined') {
        require('global');
    }
    ```
    * I'll add sample project later.

- Execute Code.gs command with option pointing to this package.
    ```
    $ code <MAINFILE> -c node_modules/codegs-core/code/gas -n node_modueles/codegs-core/node/v0.10.26 [...]
    ```

    - `-c` option specify where Code-core modules exists in.
    - `-n` option specify where Node-core modules exists in.


## Contents

### Code-core modules
folder: codegs-core/code/gas

Only one package `gas` exists currently.
That includes modules: global, process, buffer, fs.

#### How it works

You should import `global` module at top of your main file.

1. 'global' module set up `global` variable in global scope.

2. import `process` module. `process` set up not full compatible with Node.js. and set Logger.log as `stdout`.

3. If not exists, import `console` node-core module. `console` setup console object using process.stdout(Logger.log).

4. import `buffer` into global scope. It's just dummy for `util.js`.

Now you can use other code-core modules or node-core modules(depending on those modules).


### Node.js core modules
folder: codegs-core/node/v0.10.26

Four basic modules `assert`, `util`, `console`, `path` are there.

After import `global` code-core module, Those are available to use.

Those are imported from original Node.js project. see README.md in that folder.
