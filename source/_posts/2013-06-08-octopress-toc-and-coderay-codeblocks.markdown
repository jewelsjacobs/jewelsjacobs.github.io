---
layout: post
title: "Octopress TOC and codeblock Codeblocks"
date: 2013-06-08 10:19
comments: true
sharing: true
footer: true
categories: [codeblock, Octopress, kramdown]
---

I'm trying to create a table of contents in my Octopress blog with kramdown.
I'm having some issues.

  <!-- more -->

I want to use kramdown tags with ':' in them, ie.
{% codeblock %}
  {:toc}
{% endcodeblock %}

and codeblock code blocks

{% codeblock %}
  {:ang="javascript"}
{% endcodeblock %}

in my Octopress blog but I keep getting this error when running

{% codeblock %}
  rake generate
{% endcodeblock %}

{% codeblock %}
  [my user dir]/.rvm/rubies/ruby-1.9.3-p392/lib/ruby/1.9.1/psych.rb:203:in
  parse: (<unknown>): could not find expected ':'
  while scanning a simple key at line 8 column 1 (Psych::SyntaxError)
{% endcodeblock %}

I don't know if the problem is the blog / pages syntax or my _config.yaml file

I tried installing [this plugin](https://github.com/codebykat/blog/blob/2f6c9615c02869dca5f52921ac5eb7e0b35a6427/plugins/code_ray_block.rb) and
following the instructions in [this blog post](http://blog.codebykat.com/2013/05/23/gorgeous-octopress-codeblocks-with-codeblock/)

I have installed the kramdown and codeblock gems and made the following changes to my _config.yml:

{% codeblock %}
markdown: kramdown
kramdown:
   auto_ids: true
   use_codeblock: true
     codeblock:
       codeblock_line_numbers: nil
       codeblock_css: class
{% endcodeblock %}

My blogpost toc code looks like this:

{% codeblock %}
---
layout: page
title: "resources"
date: 2013-06-06 10:45
comments: true
sharing: true
footer: true
categories: [3D UI, css, CSS3D, HTML5, javaScript, three.js,
smart tv, grunt, jQuery, node.js, bootstrap, css,
responsive design, api, learning, backbone.js, knockout.js]
---
#Resources
{:toc}
## **Performance and Caching**
* [Varnish](https://www.varnish-cache.org/)
{:toc}
## **SmartTV**
* [Samsung Development Guide](http://www.samsungdforum.com/Guide/)
* [Basic SmartTV Node App Server](https://github.com/rposbo/basic-smart-tv-app-server)
{:toc} [ .. snip .. ]
{% endcodeblock %}

The only way I could get rid of the errors was to get rid of the kramdown and
coderay tags, uninstall coderay, get rid of that coderay plugin and revert my _config.yml
to use rdiscount and get rid of the kramdown / coderay fields and keys.

It stinks to not be able to use the cool coderay / kramdown features.

I'm trying to get some help on this.  I'll update this post when I get a
working solution.
