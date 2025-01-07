function FindProxyForURL(url, host) {
    // Try downloading the file directly by default
    var isFileDownload = url.indexOf(".file_extension") !== -1; // Replace .file_extension with the specific extension of the file you're targeting

    if (isFileDownload) {
        // Attempt to download the file directly
        return "DIRECT";
    }
    if (
    shExpMatch(host, "*.googlevideo.com") ||
    shExpMatch(host, "*.fbcdn.net") ||
    shExpMatch(host, "*.cdninstagram.com") ||
    shExpMatch(host, "*.twimg.com") ||
    ) 

    {
        return proxy;

    // If there's a host error, use the proxy
    return "PROXY 127.0.1.0:7890";
}
