---
layout: post
title: "Dynamic Namespace Objects Based On Directory Structure and File Names"
date: 2013-05-24 5:59
comments: true
sharing: true
footer: true
categories: [javaScript, node.js]
---
In a [previous post](/blog/2013/05/16/create-dynamic-namespace-autoloader-with-node-js-express-walk-and-titlecaps/)
I showed how to create a dynamic namespace autoloader with node.js, express, and walk.

<!-- more -->
Please check out [that post](/blog/2013/05/16/create-dynamic-namespace-autoloader-with-node-js-express-walk-and-titlecaps/)
for information on how to set this up, what node modules to install and where to put this code.

In the `http.createServer()` function, add this code (or something like it):

{% include_code dynamicNamespaceObjectsFilenames.js %}

Please note this is kind of a mess of arrays so I'd be very grateful for any suggestions on how to make this cleaner.

