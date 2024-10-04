function FindProxyForURL(url, host) {
        // If the hostname matches, send to proxy.
        if (
                //Mbaz
                shExpMatch(host, "link45.top") ||
                shExpMatch(host, "*.link455.top") ||
                //Twitter
                shExpMatch(host, "*.twimg.com") ||
                shExpMatch(host, "*.twitter.com") ||
                shExpMatch(host, "*.twitter.co.uk") ||
                //Yammer
                shExpMatch(host, "*.yammer.com") ||
                shExpMatch(host, "*.assets-yammer.com") ||
                //Google
                shExpMatch(host, "*.talkgadget.google.com") ||
                shExpMatch(host, "*.mail.google.com") ||
                shExpMatch(host, "*.google.*") ||
                shExpMatch(host, "*.talkgadget.google.com") ||
                shExpMatch(host, "*.mail.google.com") ||
                shExpMatch(host, "*.clients1.google.com") ||
                shExpMatch(host, "*.clients2.google.com") ||
                shExpMatch(host, "*.clients3.google.com") ||
                shExpMatch(host, "*.clients4.google.com") ||
                shExpMatch(host, "*.clients5.google.com") ||
                shExpMatch(host, "*.clients6.google.com") ||
                //LinkedIn
                shExpMatch(host, "*.licdn.com") ||
                shExpMatch(host, "*.linkedin.com")
                //Facebook
                shExpMatch(host, "*.facebook.com") ||
                shExpMatch(host, "*.fbcdn.net")
        )
                return "PROXY 127.0.0.1:7891";
        else
                return "DIRECT";
}
