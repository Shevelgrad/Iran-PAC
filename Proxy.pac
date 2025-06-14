function FindProxyForURL(url, host) {
    var proxy = "PROXY 127.0.0.1:7890";
    var direct = "DIRECT";

    // لیست دامنه‌هایی که حتما باید از پراکسی استفاده کنند
    var proxyDomains = [
        "*.googlevideo.com",
        "*.fbcdn.net",
        "*.twimg.com",
        "*.torproject.org",
        "*.apkmirror.com",
        "*.xvideos-cdn.com",
        "*.flnd.buzz",
        "*.link3229.top"
    ];

    for (var i = 0; i < proxyDomains.length; i++) {
        if (shExpMatch(host, proxyDomains[i])) {
            return proxy; // همیشه با پراکسی بره
        }
    }

    // بقیه موارد: اول تلاش مستقیم، اگه نشد، از پراکسی
    return direct + "; " + proxy;
}
