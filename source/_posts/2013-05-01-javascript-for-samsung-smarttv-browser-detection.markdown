---
layout: post
title: "JavaScript For Samsung SmartTV Browser Detection"
date: 2013-05-01 5:59
comments: true
sharing: true
footer: true
categories: [javaScript]
---

**UPDATE:**

This is better achieved with a Modernizr plugin called [Detectizr](https://github.com/barisaydinoglu/Detectizr).
Use that instead.  I'll keep the rest of this info for reference.

Here's the code to determine if the current browser is a SmartTV - requires
[Modernizr](http://modernizr.com/)

  <!-- more -->

{% coderay lang:javascript Using Modernizr %}
function isSmartTV() {
    return Modernizr.websockets === false;
}
{% endcoderay %}

This works because the Samsung SmartTV does not support Web Sockets which I find out by running the
[Modernizr Test Suite](http://modernizr.github.io/Modernizr/test/index.html) on the SmartTV.

**UPDATE:**

Actually I wound up changing this to use User-Agent sniffing based on a
great [discussion](http://lnkd.in/Wtidi7) I had with [Derek Anderson](www.linkedin.com/in/dmikey)

{% coderay lang:javascript User-Agent Sniffing %}
function () {
    return navigator.userAgent.search(/TV/i) >= 0;
}
{% endcoderay %}
