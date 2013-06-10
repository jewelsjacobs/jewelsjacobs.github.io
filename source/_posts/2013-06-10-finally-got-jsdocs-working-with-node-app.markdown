---
layout: post
title: "Finally Got JSdocs Working With My Node App"
date: 2013-06-10 14:40
sharing: true
footer: true
categories: [jsdoc, documentation, node.js, javaScript]
---
Man was that a pain in the butt!
Read on for my adventures in javascript API documentation.

  <!-- more -->

* sample unordered list
{:toc}

## JSDoc
I wanted to create API documentation for my app so I took a look at [jsdoc](http://usejsdoc.org/about-getting-started.html).

## Docco
For some reason which I don't remember, I wound up getting sidetracked with [docco](http://jashkenas.github.io/docco/)
but by the time I got there I had already created jsdoc formatted dockblocks which don't play well with docco.

## Dox
So I read about [dox](https://github.com/visionmedia/dox) which is supposed to allow you to use
jsdoc formatted dockblocks to generate docco type documentation.
Being a huge fan of grunt automation I figured I'd use the [grunt-dox plugin](https://github.com/punkave/grunt-dox)

That was a total [cluster](http://stackoverflow.com/questions/17003930/grunt-dox-generating-html-file-with-only-title) so I gave up.

## My Solution
I finaly crawled back to jsdoc and came up with this psuedo automated solution.

### Node JSDoc Toolkit Module
I installed [node-jsdoc-toolkit](https://github.com/p120ph37/node-jsdoc-toolkit):

{% coderay %}
npm install jsdoc-toolkit --save-dev
{% endcoderay %}

#### Configuration
Then I created a config file and put it in the jsdoc-toolkit node module conf directory, ie:
{% coderay %}
$APP_DIR/node_modules/jsdoc-toolkit/conf/thisconffile.conf
{% endcoderay %}

Here's an example of what my configuration file, which I named looks jsdoc.conf,
looks like:

{% gist 5751795 %}

#### Automate With Shell Script
Then to automate running the jsdoc command with the conf file I created a super simple shell script.
**Please note its referring to my configuration file named `jsdoc.conf`. Replace that with the name of
your configuration file.**

{% gist 5751839 %}

I placed this shell script in my application directory.

#### Grunt-ify Shell Script
Then to grunt-ify this shell script I installed [grunt-shell](https://github.com/sindresorhus/grunt-shell)

{% coderay %}
npm install grunt-shell --save-dev
{% endcoderay %}

##### Gruntfile.js Configuration
If your not used to using grunt or configuring grunt tasks, you might want to check out
[the Grunt Getting Started guide](https://github.com/gruntjs/grunt/wiki/Getting-started).

For information on the specific grunt-shell options,
take a look at the [documentation](https://github.com/sindresorhus/grunt-shell/blob/master/readme.md).

For my purposes I set up the Gruntfile.js grunt-shell options like this:

{% coderay %}
shell: {
  docs : {
    command: './docs.sh'
  }
}
{% endcoderay %}

I added the `shell` task to my grunt `test` task so when I run

{% coderay %}
grunt test
{% endcoderay %}

in the console my documentation gets created.

As usual I'm sure there's a much better way to do this but this is what worked for me
after hours of pain.

