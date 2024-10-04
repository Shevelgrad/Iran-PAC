
function FindProxyForURL(url, host)
{
    if (shExpMatch(url,"*link45.top*") ||
     shExpMatch(url,"*xvideos-cdn.com*"))
return "PROXY 127.0.0.1:7891; DIRECT";
else
return "DIRECT";
}
