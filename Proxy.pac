function FindProxyForURL(url, host) {
    // Define your proxy server
    var proxy = "PROXY 127.0.0.1:7891"; 
    var direct = "DIRECT";

    if (shExpMatch(host, "*.link45.top")) 
    return proxy
    else return "DIRECT";
