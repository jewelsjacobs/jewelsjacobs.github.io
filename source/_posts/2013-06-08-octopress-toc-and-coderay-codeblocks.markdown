---
layout: post
title: "Octopress TOC and coderay Codeblocks"
date: 2013-06-08 10:19
comments: true
sharing: true
footer: true
categories: [coderay, Octopress, kramdown]
---

I had some problems implementing this but got some great help and was able to overcome the issues.

  <!-- more -->
Turns out I was creating the TOC wrong.  Check out this [stackoverflow.com question](http://stackoverflow.com/questions/16967670/octopress-kramdown-generate-error-for-tags-with) for details

If your having TOC issues, you can take a look at my [markdown source](https://raw.github.com/jewelsjacobs/jewelsjacobs.github.io/source/source/resources/index.markdown) for guidance.

Also got the coderay stuff working following [this excellent article](http://blog.codebykat.com/2013/05/23/gorgeous-octopress-codeblocks-with-coderay/).

I wound up wrapping code lines by changing her {% coderay %}.CodeRay pre {% endcoderay %} block in

{% coderay %}
sass/custom/_styles.scss
{% endcoderay %}

to:

{% coderay lang:css %}
.CodeRay pre {
  background: none;
  color: #000;
  /* added */
  overflow: auto;
  white-space: pre;
  word-wrap: break-word;
  word-break: normal;
}
{% endcoderay %}

If you get stuck on any of this feel free to take a peek at my source code
