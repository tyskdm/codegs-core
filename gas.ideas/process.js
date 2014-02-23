
var process = {};

var logger = require('Logger');
process.stdout = { write: function (data) {
        logger.log(data);
    }
};

process.platform = 'GoogleAppsScript';
process.pid = 0;
process.title = 'code';

process.env = {};
process.env.NODE_DEBUG = false;

process.argv = [ 'code' ];
process.execPath = '/code';
process.execArgv = [];

process.version = '';
process.versions = {};

process.cwd = function () {
    return '/';
}

process.execute = function (fn) {};
process.exit = function (code) {};

Error.captureStackTrace = function (THIS, stackStartFunction) {
    console.log('Error.captureStackTrace called');
};

module.exports = process;
