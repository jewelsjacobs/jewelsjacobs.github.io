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

**One tricky thing to note abut jade:**

The jade tag heirchy is based on indentation.  You have to make sure your newly pasted code is indented in the right place.
Otherwise the express web server will complain.

It should look like this:

{% gist 5759336 %}

If you can't get it right, just copy and paste that full code into your `index.jade` file and save it.

Now refresh your local site and you should see the embedded video.

[More Advanced: Hosting Your New Site On The Cloud](/heroku/)