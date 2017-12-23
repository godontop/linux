// update by YWH 2017.12.23
function FindProxyForURL(url, host) {
    var xtunnel = 'SOCKS 192.168.1.175:1080';
    if (dnsDomainIs(host, '.google.com') || host == 'google.com') return xtunnel;
    if (dnsDomainIs(host, '.youtube.com') || host == 'youtube.com') return xtunnel;
    if (dnsDomainIs(host, '.m.youtube.com') || host == 'm.youtube.com') return xtunnel;
    if (dnsDomainIs(host, '.ytimg.com') || host == 'ytimg.com') return xtunnel;
    if (dnsDomainIs(host, '.ggpht.com') || host == 'ggpht.com') return xtunnel;
    if (dnsDomainIs(host, '.facebook.com') || host == 'facebook.com') return xtunnel;
    if (dnsDomainIs(host, '.m.facebook.com') || host == 'm.facebook.com') return xtunnel;
    if (dnsDomainIs(host, '.facebook.net') || host == 'facebook.net') return xtunnel;
    if (dnsDomainIs(host, '.atdmt.com') || host == 'atdmt.com') return xtunnel;
    if (dnsDomainIs(host, '.todoist.com') || host == 'todoist.com') return xtunnel;
    if (dnsDomainIs(host, '.mac.todoist.com') || host == 'mac.todoist.com') return xtunnel;
    if (dnsDomainIs(host, '.crashlytics.com') || host == 'crashlytics.com') return xtunnel;
    if (dnsDomainIs(host, '.e.crashlytics.com') || host == 'e.crashlytics.com') return xtunnel;
    if (dnsDomainIs(host, '.amazonaws.com') || host == 'amazonaws.com') return xtunnel;
    if (dnsDomainIs(host, '.compute-1.amazonaws.com') || host == 'compute-1.amazonaws.com') return xtunnel;
    if (dnsDomainIs(host, '.ec2-107-22-198-70.compute-1.amazonaws.com') || host == 'ec2-107-22-198-70.compute-1.amazonaws.com') return xtunnel;
    if (dnsDomainIs(host, '.ec2-107-22-209-155.compute-1.amazonaws.com') || host == 'ec2-107-22-209-155.compute-1.amazonaws.com') return xtunnel;
    if (dnsDomainIs(host, '.ec2-107-22-210-124.compute-1.amazonaws.com') || host == 'ec2-107-22-210-124.compute-1.amazonaws.com') return xtunnel;
    if (dnsDomainIs(host, '.ec2-107-22-210-216.compute-1.amazonaws.com') || host == 'ec2-107-22-210-216.compute-1.amazonaws.com') return xtunnel;
    if (dnsDomainIs(host, '.ec2-107-22-215-230.compute-1.amazonaws.com') || host == 'ec2-107-22-215-230.compute-1.amazonaws.com') return xtunnel;
    if (dnsDomainIs(host, '.ec2-107-22-239-163.compute-1.amazonaws.com') || host == 'ec2-107-22-239-163.compute-1.amazonaws.com') return xtunnel;
    if (dnsDomainIs(host, '.cloudfront.net') || host == 'cloudfront.net') return xtunnel;
    if (dnsDomainIs(host, '.r.cloudfront.net') || host == 'r.cloudfront.net') return xtunnel;
    if (dnsDomainIs(host, '.hkg51.r.cloudfront.net') || host == 'hkg51.r.cloudfront.net') return xtunnel;
    if (dnsDomainIs(host, '.server-52-85-148-32.hkg51.r.cloudfront.net') || host == 'server-52-85-148-32.hkg51.r.cloudfront.net') return xtunnel;
    if (dnsDomainIs(host, '.server-52-85-148-64.hkg51.r.cloudfront.net') || host == 'server-52-85-148-64.hkg51.r.cloudfront.net') return xtunnel;
    if (dnsDomainIs(host, '.server-52-85-148-67.hkg51.r.cloudfront.net') || host == 'server-52-85-148-67.hkg51.r.cloudfront.net') return xtunnel;
    if (dnsDomainIs(host, '.server-52-85-148-150.hkg51.r.cloudfront.net') || host == 'server-52-85-148-150.hkg51.r.cloudfront.net') return xtunnel;
    if (dnsDomainIs(host, '.server-52-85-148-173.hkg51.r.cloudfront.net') || host == 'server-52-85-148-173.hkg51.r.cloudfront.net') return xtunnel;

// DEFAULT RULE: All other traffic
    return "DIRECT";
}
