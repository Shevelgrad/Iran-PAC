function FindProxyForURL(url, host) {
        if (
                //Twitter
                shExpMatch(host, "*.link45.top") ||
                shExpMatch(host, "*.link455.top") ||
                shExpMatch(host, "*.link4555.top") ||
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
