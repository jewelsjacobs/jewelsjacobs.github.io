---
layout: post
title: "My Two New jQuery Plugins and One New Node Module"
date: 2013-05-16 5:59
comments: true
sharing: true
footer: true
categories: [About Me, node.js, javaScript]
---

On my quest to plugify and properly modulerize my code I created two new jQuery plugins and one new node nodule.

  <!-- more -->

* sample unordered list
{:toc}

# jQuery Plugins

## jQuery Simple Center Plugin

**UPDATE:**

The a jQuery UI function [position()](http://api.jqueryui.com/position/) centers fine so don't
even bother with this plugin.
Also check out
[this post on responsive centering by extending bootsrap](/blog/2013/05/29/vertically-and-horizontally-center-with-twitter-bootstrap-responsive/)
for an easy CSS solution.

[jQuery Simple Center Plugin](https://github.com/jewelsjacobs/jquery.simpleCenter)
Simple jQuery plugin to vertically and horizontally center an element within another element.

## jQuery Prettify Plugin

[jQuery Prettify](https://github.com/jewelsjacobs/jquery.prettify)
jQuery plugin to print an associative array / object in the browser with
option for highlighting.

# Node Module

## titlecaps

[titlecaps Node.js Module](https://npmjs.org/package/titlecaps)
Node module to capitalize first letter in each word

Please bear in mind that they have not been node unit or qunit tested yet, just jhinted as I'm on a tight schedule at work.  
I'll make it happen very soon!

# Response From A Senior Dev

I was 'schooled' by the more experienced dev
[Nelson Kenneth Correia](http://uk.linkedin.com/in/nelsonic/)
who mentioned these plugins / mod were overkill.
I thought it prudent to mention his response:

  {% blockquote Nelson Kenneth Correia %}

@Juila, just had a look at your SimpleCenter Plugin.

Firstly I want to applaud your effort to create a JQuery plugin, 
and then advise everyone *new* to javascript to *not* do this! 
Positioning elements on the page/canvas is done with CSS. 

Here is your JS fiddle without *any* JavaScript: http://jsfiddle.net/jewelsjacobs/Nuyc9/ 

Centering an element in a div is *easy* in CSS and should be done in a stylesheet unless there's a very good reason to do it *dynamically* in JS. 

Secondly I don't see how your Prettify is better than the original: https://code.google.com/p/google-code-prettify/wiki/GettingStarted 

And finally Capitalizing the first letter of each word in a string has been done many times and does not require an entire Node Module... 

It can be done with a *single* line of JavaScript: 
http://jsfiddle.net/jewelsjacobs/Nuyc9/ 

Once again, I congratulate your efforts! 
Especially the fact that you've written tests and used Travis.com to confirm the build status of your module! :-) 

But please pick which Modules and Plugins you share here more carefully. 
As developers we need to set a good example to others. 
Writing an entire *module* just to capitalize first letters in a string is like using a bomb to build a sand castle! ... #overkill! 

And building JQuery plugins when simple CSS will achieve your goal is a good *thought* exercise, but should *never* be used in the real world because its a code maintenance nightmare! 

The last thing I want is my junior developers copy-pasting this kind of code! 

I look forward to reading your *next* efforts. :-)
  {% endblockquote %}

# My Response To His Response

His caps code worked perfectly but his CSS code has to be changed depending on the sizes of the elements which is
not exactly what I wanted to do.  The Prettify code he references doesn't really do what I want either.

I made the plugin because I wanted a way to spit out all of the necessary code dynamically without
including it in the html file. Basically ,just create a div, give the function and object and viola. From what I can tell of the plugin he refers to just formats text in a pre tag.
You still have to attach the text to the pre tag or generate the pre tag.
