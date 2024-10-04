function FindProxyForURL(url, host) { 
// If the hostname matches, send direct. 
    if (dnsDomainIs(host, "intranet.domain.com") || 
        shExpMatch(host, "(*.abcdomain.com|abcdomain.com)")) 
        return "DIRECT"; 
// If the protocol or URL matches, send direct. 
    if (url.substring(0, 4)=="ftp:" || 
        shExpMatch(url, "http://abcdomain.com/folder/*")) 
        return "DIRECT"; 
// If the requested website is hosted within the internal network, send direct. 
    if (isPlainHostName(host) || 
        shExpMatch(host, "*.local") || 
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") || 
        isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") || 
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") || 
        isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0")) 
        return "DIRECT"; 
// If the IP address of the local machine is within a defined 
// subnet, send to a specific proxy. 
    if (shExpMatch(host, "link45.top", "xvideos-cdn.com")) 
        return "PROXY 127.0.0.1:7891"; 
// DEFAULT RULE: All other traffic, use below proxies, in fail-over order. 
    return "PROXY 127.0.0.1:7891; PROXY 127.0.0.1:7890"; }
