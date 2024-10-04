function FindProxyForURL(url, host) {
    // Define your proxy server
    var proxy = "PROXY 127.0.0.1:7891"; // Replace with your proxy server details
    var direct = "DIRECT";

    // Specify rules
    if (shExpMatch(host, '*.link45.top','*.xvideos-cdn.com ')) 
{
        return proxy; // Use proxy for link45.top
    }

    return direct; // Otherwise, connect directly
}
