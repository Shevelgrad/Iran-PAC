function FindProxyForURL(url, host)
{
if (isPlainHostName(host) || dnsDomainIs(host, ".link45.top", ".xvideos-cdn.com"))
return "PROXY 127.0.0.1:7891; DIRECT";
else
return "DIRECT";
}
