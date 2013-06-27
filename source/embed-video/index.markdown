---
layout: page
title: "Embedding Video"
date: 2013-06-11 15:00
comments: false
sharing: false
footer: false
categories: [node.js, javaScript, bootstrap, jade, express, html5, video, howto]
---

Table of Contents

* sample unordered list
{:toc}

## Getting Some YouTube Code

We are going to keep things super simple by embedding one YouTube Video
into the app code.

 1. Go to the `index.jade` file again in Sublime Text. <i class="icon-exclamation-sign bg_red_icon" markdown="0"> </i> **Do not delete
 any of the existing code.**
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

It should look like this (lines 29 and 30):

{% gist 5760251 %}

If you can't get it right, just replace all of your current `index.jade` file code
with the code above.

Save the code by pressing <kbd>Control</kbd> **+** <kbd>S</kbd>.

### For Developers - Adding More YouTube Videos

YouTube gives you code to embed any video on it's website into a webpage.
I grabbed some embed code and converted it into the jade syntax with that [handy HTML to Jade converter](http://html2jade.aaron-powell.com/).

If you want to grab some different HTML embed code,
you can [get instructions on how to do this here](http://www.htmlgoodies.com/tutorials/web_graphics/article.php/3480061/How-To-Add-a-YouTube-Video-to-Your-Web-Site.htm).

After you get the HTML embed snippet, just run it through that html to jade converter.
Then paste the line into your `index.jade` file right after the last video code line.

## Check Out Your App!
Now go to your local app [http://localhost:3000/](http://localhost:3000/) and you should see the embedded video.
If you're app does not load you probably don't have the node server running. Here's how to make that happen.

 1. Open up your `app` directory in the Command Window.  You can [go back to the directions](http://html5devgal.com/getting-started/#running-some-commands-in-the-command-window)
 if you need to.
 2. Run the following commands in the Command Window:
     {% coderay %}
      node app
    {% endcoderay %}

## [Advanced - Hosting Your New Site On The Cloud . . .](/heroku/)