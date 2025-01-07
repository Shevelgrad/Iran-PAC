function FindProxyForURL(url, host) 
{
    var proxy = "PROXY 127.0.0.1:7890"; 
    var direct = "DIRECT";

    if (
    shExpMatch(host, "*.googlevideo.com") ||
    shExpMatch(host, "*.fbcdn.net") ||
    shExpMatch(host, "*.cdninstagram.com") ||
    shExpMatch(host, "*.twimg.com") ||
    shExpMatch(host, "*.apkmirror.com") ||
    shExpMatch(host, "*.xvideos-cdn.com") ||
    shExpMatch(host, "*.farsicdn.buzz") ||
    shExpMatch(host, "*.flnd.buzz") ||
    shExpMatch(host, "*.torproject.org")
    ) 

    {
        return proxy; 
    }
    return direct;}
