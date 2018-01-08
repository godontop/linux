// update by YWH 2017.12.23
function FindProxyForURL(url, host) {
    var xtunnel = 'SOCKS5 192.168.1.175; SOCKS 192.168.1.175:1080';
    if (dnsDomainIs(host, '.google.com') || host == 'google.com') return xtunnel;
    if (dnsDomainIs(host, '.gstatic.com') || host == 'gstatic.com') return xtunnel;
    if (dnsDomainIs(host, '.doubleclick.net') || host == 'doubleclick.net') return xtunnel;
    if (dnsDomainIs(host, '.blogger.com') || host == 'blogger.com') return xtunnel;
    if (dnsDomainIs(host, '.youtube.com') || host == 'youtube.com') return xtunnel;
    if (dnsDomainIs(host, '.ytimg.com') || host == 'ytimg.com') return xtunnel;
    if (dnsDomainIs(host, '.ggpht.com') || host == 'ggpht.com') return xtunnel;
    if (dnsDomainIs(host, '.googlevideo.com') || host == 'googlevideo.com') return xtunnel;
    if (dnsDomainIs(host, '.facebook.com') || host == 'facebook.com') return xtunnel;
    if (dnsDomainIs(host, '.facebook.net') || host == 'facebook.net') return xtunnel;
    if (dnsDomainIs(host, '.fbcdn.net') || host == 'fbcdn.net') return xtunnel;
    if (dnsDomainIs(host, '.atdmt.com') || host == 'atdmt.com') return xtunnel;
    if (dnsDomainIs(host, '.twitter.com') || host == 'twitter.com') return xtunnel;
    if (dnsDomainIs(host, '.twimg.com') || host == 'twimg.com') return xtunnel;
    if (dnsDomainIs(host, '.mozilla.net') || host == 'mozilla.net') return xtunnel;
    if (dnsDomainIs(host, '.todoist.com') || host == 'todoist.com') return xtunnel;
    if (dnsDomainIs(host, '.crashlytics.com') || host == 'crashlytics.com') return xtunnel;
    if (dnsDomainIs(host, '.amazonaws.com') || host == 'amazonaws.com') return xtunnel;
    if (dnsDomainIs(host, '.cloudfront.net') || host == 'cloudfront.net') return xtunnel;
    if (dnsDomainIs(host, '.my.vultr.com') || host == 'my.vultr.com') return xtunnel;
    if (dnsDomainIs(host, '.nginx.com') || host == 'nginx.com') return xtunnel;

// DEFAULT RULE: All other traffic
    return "DIRECT";
}
