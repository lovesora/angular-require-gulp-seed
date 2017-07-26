// require错误处理,否则默认会去访问官网,国外很慢
require.onError = function(err){
    console.log('require error:',err,arguments);
};

function HashStaticFile(url) {
    if (url.indexOf('http') < 0 && url.indexOf('public') < 0 && window.jsonForHash && window.jsonForHash[url]) {

        if (url.indexOf('?') == -1){
            url += '?version=' + window.jsonForHash[url];
        } else {
            url += '&version=' + window.jsonForHash[url];
        }
        return url;
    }
    return url;
}

// 重写nameToUrl方法,避免一些不用加小尾巴的文件加小尾巴了, 目前判断以http开头的都不加
require.s.contexts._.nameToUrl_old = require.s.contexts._.nameToUrl;
require.s.contexts._.nameToUrl = function(moduleName, ext, skipExt) {

    var url = require.s.contexts._.nameToUrl_old(moduleName, ext, skipExt);
    var config = require.s.contexts._.config;

    //为rev文件添加尾巴
    if(url.indexOf('rev-manifest.js')==-1){
        url = url.replace("?"+config.urlArgs,'');
        url = url.replace("&"+config.urlArgs,'');

    }else{
        if (url.indexOf('?')>-1){
            url += '&v=' + new Date().getTime();
        } else {
            url += '?v=' + new Date().getTime();
        }
    }
    //
    if (config.baseUrl && url.indexOf('deps.config.js') == -1) {
        url = url.substr(config.baseUrl.length);
    }

    // filter hash
    url = HashStaticFile(url);

    return url;
};

require(['config/deps.config.js'], function(deps) {
    require.config(deps);

    // require(['rev-manifest'],function (){
        
        require(['header','footer'],function(){
        //require(['app','controllers'],function(){

            angular.bootstrap(document,['petkit']);

        });

    // });
});

