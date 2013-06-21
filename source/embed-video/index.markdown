---
layout: page
title: "Embedding Video"
date: 2013-06-11 15:00
comments: true
sharing: true
footer: true
categories: [node.js, javaScript, bootstrap, jade, express, video]
---

* sample unordered list
{:toc}

## Getting Some YouTube Code

We are going to keep things super simple by embedding one YouTube Video
into the site.

YouTube gives you code to embed any video on it's website into a webpage.
I grabbed some embed code and converted it into the jade syntax with that [handy HTML to Jade converter](http://html2jade.aaron-powell.com/).

If you want to grab some different HTML embed code,
you can get instructions on how to do this
[here](http://www.htmlgoodies.com/tutorials/web_graphics/article.php/3480061/How-To-Add-a-YouTube-Video-to-Your-Web-Site.htm).

 1. Go to the `index.jade` file again in Sublime Text
 2. Copy and paste

    {% coderay %}
    iframe(width='560', height='315', src='http://www.youtube.com/embed/H7Xyboh6GpY', frameborder='0', allowfullscreen='allowfullscreen')
    {% endcoderay %}

After the lines
    {% coderay %}
    //
       Place embedded YouTube Code after this line
    {% endcoderay %}

<i class="icon-exclamation-sign bg_red_icon" markdown="0"> </i> **The jade tag heirchy is based on
indentation.  You have to make sure your newly pasted code is indented in the right place. IT MUST BE
6 SPACES FROM THE LEFT EDGE OF THE DOCUMENT.**

***Otherwise the express web server will complain.***

It should look like this:

{% gist 5760251 %}

If you can't get it right, just replace all of your current `index.jade` file code
with the code above and save it.

Now refresh your local site (at http://localhost:3000/) and you should see the embedded video.

## Hosting In The Cloud
[Hosting Your New Site On The Cloud](/heroku/)