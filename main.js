var phantom = require('phantom');
var q = require('q');
require('dotenv').config()
var sitepage = null;
var phInstance = null;
var proxy = process.env.HTTP_PROXY

phantom.create(['--proxy-type=http','--proxy='+proxy])    
    .then(instance => {
        phInstance = instance;
        return instance.createPage();
    })
    .then(page => {
        sitepage = page;
        return page.open('https://fast.com');
    })
    .then(status => {
        console.log(sitepage.property('content'));
        console.log(status);
    })
     .catch(error => {
        console.log(error);
        phInstance.exit();
    });