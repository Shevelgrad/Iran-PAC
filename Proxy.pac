function FindProxyForURL(url, host) 
{
    var proxy = "PROXY 127.0.0.1:7890"; 
    var direct = "DIRECT";

    if (
    shExpMatch(host, "*.googlevideo.com") ||
    shExpMatch(host, "*.fbcdn.net") ||
    shExpMatch(host, "*.cdninstagram.com") ||
    shExpMatch(host, "*.twimg.com") ||
    shExpMatch(host, "*.torproject.org") ||
    shExpMatch(host, "*.apkmirror.com") ||
    shExpMatch(host, "*.xvideos-cdn.com") ||
    shExpMatch(host, "*.farsicdn.buzz") ||
    shExpMatch(host, "*.link933.top") ||
    shExpMatch(host, "*.link4611.top") ||
    shExpMatch(host, "*.link3207.top") ||
    shExpMatch(host, "*.link1606.top") ||
    shExpMatch(host, "*.link3695.top") ||
    shExpMatch(host, "*.flnd.buzz") ||
    shExpMatch(host, "*.link45.top")
    ) 

    {
        return proxy; 
    }
    return direct;}
