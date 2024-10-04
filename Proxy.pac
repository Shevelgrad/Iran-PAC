function FindProxyForURL(url, host) {
    var proxy = "PROXY 127.0.0.1:7891"; 
    var direct = "DIRECT";

    if (
    shExpMatch(host, "*.link45.top") ||
    shExpMatch(host, "*.googlevideo.com") ||
    shExpMatch(host, "*.xvideos-cdn.com")
    ) 


    {
        return proxy; 
    }
    return direct;}
