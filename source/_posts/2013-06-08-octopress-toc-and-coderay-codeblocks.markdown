---
layout&#58; post
title&#58; "Octopress TOC and codeblock Codeblocks"
date&#58; 2013-06-08 10&#58;19
comments&#58; true
sharing&#58; true
footer&#58; true
categories&#58; [codeblock, Octopress, kramdown]
---

I'm trying to create a table of contents in my Octopress blog with kramdown.
 I'm having some issues.

I want to use kramdown tags with '&#58;' in them, ie.
{% codeblock %}
  {&#58;toc}
{% endcodeblock %}

and codeblock code blocks

{% codeblock %}
  {&#58;ang="javascript"}
{% endcodeblock %}

in my Octopress blog but I keep getting this error when running

{% codeblock %}
  rake generate
{% endcodeblock %}

{% codeblock %}
  [my user dir]/.rvm/rubies/ruby-1.9.3-p392/lib/ruby/1.9.1/psych.rb&#58;203&#58;in
  parse&#58; (<unknown>)&#58; could not find expected '&#58;'
  while scanning a simple key at line 8 column 1 (Psych&#58;&#58;SyntaxError)
{% endcodeblock %}

I've managed to solve my codeblock code block issues thanks to [this plugin]
(https&#58;//github.com/codebykat/blog/blob
/2f6c9615c02869dca5f52921ac5eb7e0b35a6427/plugins/code_ray_block.rb) and
following the instructions in [this blog post](http&#58;//blog.codebykat
.com/2013/05/23/gorgeous-octopress-codeblocks-with-codeblock/)

I have installed the kramdown and codeblock gems and made the following changes to my _config.yml&#58;

{% codeblock %}
markdown&#58; kramdown
kramdown&#58;
   auto_ids&#58; true
   use_codeblock&#58; true
     codeblock&#58;
       codeblock_line_numbers&#58; nil
       codeblock_css&#58; class
{% endcodeblock %}

My blogpost toc code looks like this&#58;

{% codeblock %}
---
layout&#58; page
title&#58; "resources"
date&#58; 2013-06-06 10&#58;45
comments&#58; true
sharing&#58; true
footer&#58; true
categories&#58; [3D UI, css, CSS3D, HTML5, javaScript, three.js,
smart tv, grunt, jQuery, node.js, bootstrap, css,
responsive design, api, learning, backbone.js, knockout.js]
---
#Resources
{&#58;toc}
## **Performance and Caching**
* [Varnish](https&#58;//www.varnish-cache.org/)
{&#58;toc}
## **SmartTV**
* [Samsung Development Guide](http&#58;//www.samsungdforum.com/Guide/)
* [Basic SmartTV Node App Server](https&#58;//github.com/rposbo/basic-smart-tv-app-server)
{&#58;toc} [ .. snip .. ]
{% endcodeblock %}

Without the &#58; tags the site generates fine.

I'm trying to get some help on this.  I'll update this post when I get a
working solution.
