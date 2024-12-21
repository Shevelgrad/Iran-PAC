function FindProxyForURL(url, host) 
{
    var proxy = "PROXY 127.0.0.1:7891"; 
    var getSystemProxyForUrl = require('get-system-proxy-for-url');

    if (

    shExpMatch(host, "*.fbcdn.net") ||
    shExpMatch(host, "*.link45.top")
    ) 

    {
        return proxy; 
    }
    return getSystemProxyForUrl;}
