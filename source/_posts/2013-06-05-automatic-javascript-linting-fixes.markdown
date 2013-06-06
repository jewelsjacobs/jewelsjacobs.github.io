---
layout: post
title: "Automatic JavaScript Linting Fixes"
date: 2013-06-05 20:14
comments: true
sharing: true
footer: true
categories: [javaScript, shell, code style]
---
I was getting sick of manually fixing [closure linter](https://developers.google.com/closure/utilities/) errors one
by one so I created a shell script to do this recursivley over a directory or with a single file.

  <!-- more -->

Requires [closure compiler](https://developers.google.com/closure/compiler/)

{% gist 5718645 %}
