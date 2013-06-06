---
layout: post
title: "Trick to get three.js camera z plane value in browser development tools console"
date: 2013-05-01 5:59
comments: true
sharing: true
footer: true
categories: [3D UI, css, CSS3D, HTML5, javaScript, three.js]
---
Here's a tip on how to get the z plane camera position in chrome's console.

  <!-- more -->

In this example my render DOM element container has an id of 'video_container'.
Just replace it with yours. Also I'm using jquery so you will need to have that included in your app.

I attached this to a global variable (poc is the global namespace of my app) so I can just enter "poc.DebugData()" in the console.

{% codeblock lang:javascript %}
poc.DebugData = function () {
     if ($("#video_container").length > 0) {
         return {
             "window height" : window.innerHeight,
             "window width" : window.innerWidth,
             "camera z pos" : Math.abs(
                 parseInt(
                     $("#video_container")
                         .children("div")
                         .eq(0)
                         .children()[0]
                         .attributes.style.nodeValue
                         .split(': ')[4]
                         .split(') ')[1]
                         .split(', ')[14]
                 )
             )
         };
     }
 };
{% endcodeblock %}

There's probably a cleaner way to do this but this is what I've got!
