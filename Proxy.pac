function FindProxyForURL(url, host) 
{
    var proxy = "PROXY 127.0.0.1:7890"; 
    var direct = "DIRECT";

    if (
    shExpMatch(host, "*.googlevideo.com") ||
    shExpMatch(host, "*.fbcdn.net") ||
    shExpMatch(host, "*.twimg.com") ||
    shExpMatch(host, "*.torproject.org") ||
    shExpMatch(host, "*.apkmirror.com") ||
    shExpMatch(host, "*.xvideos-cdn.com") ||
    shExpMatch(host, "*.link3229.top")
    ) 
    {
        return proxy; 
    }
    return direct;
}
