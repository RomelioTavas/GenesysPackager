var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
    files: ['./*','!./node_modules/*','!./build/*'], // use the glob format
    platforms: ['win64'],
    version: '0.12.3'
});

// Build returns a promise
nw.build().then(function () {
   console.log('All done!');
}).catch(function (error) {
    console.error(error);
});
