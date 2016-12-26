const axios = require('axios');
const chalk = require('chalk');

const log = console.log;
const baseUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

console.log('Random Quotes');

axios.get(baseUrl)
    .then(x=>{
        var content = x.data[0].content;
        content = content.replace(/(<([^>]+)>)/, " ");
        log(chalk.blue(content));
    })
    .catch(function() {
        console.log('¯\\_(ツ)_/¯');
    });
