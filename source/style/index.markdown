---
layout: page
title: "Give Your App Some Style"
date: 2013-06-26 18:24
comments: false
sharing: false
footer: false
categories: [node.js, javaScript, bootstrap, jade, express, html5, video, howto]
---

Table of Contents

* sample unordered list
{:toc}

## Using The Sublime Text Program

### Run The Sublime Text Program

1. Click on the `Start` {% imgcap /images/windows_start_button.jpg 36 36 %} button in the bottem left corner of your desktop.

    {% imgcap /images/start_menu.png Start Menu %}

2. Type `Sublime` in the `Search Programs and files` box {% imgcap /images/search_program_box.png 204 36 %}
3. Double click on `Sublime Text 2` to launch it.  You might have to wait a minute or two for Sublime Text to launch.

    {% imgcap /images/run_sublime.png Launch Sublime Text %}

## Editing Your App In The Sublime Text Program

 1. In the Sublime Text program's top menu choose `Project -> Add Folder to Project . . .`.

    {% imgcap /images/add_folder_to_project.png Add Folder To Project %}

 2. In the `Browse For Folder` window that just came up, find your User folder.

    {% imgcap /images/UserFolder.png The User Folder %}

 3. Navigate to and select the `app` folder in the `My Documents` folder. Click the `OK` button.

    {% imgcap /images/NavToAppDir.png Select and add app folder %}

 Don't be too intimitated with all of the files and folders.
 For those of you who are interested in learning more about this application structure, I'd be happy to
 explain it afterwords.

## Making Your Site Pretty With A Bootstrap Template

### Layout Page

 1. In the Sublime Text program, on the left side, click the left arrow next to `views` to expand the folder.

    {% imgcap /images/ExpandViews.png Expand views folder %}

 2. Double click on the `layout.jade` file shown beneath the `views` folder on the left side.

    {% imgcap /images/layout_jade.png layout.jade %}

 3. Delete the exsisting code in the file.
 4. Copy and paste the code below into that file.
If you have problems copying and pasting the code below, click on {% imgcap /images/view_raw.png 81 34 %}
to open up a webpage with the raw code. It's easier to copy and paste the code from that seperate page.

{% gist 5759325 %}

Save the code by pressing <kbd>Control</kbd> **+** <kbd>S</kbd>.

### Home Page

 1. In the Sublime Text program double click on the `index.jade` file shown beneath the `views` folder on the left side.

    {% imgcap /images/index_jade.png index.jade %}

 2. Delete the exsisting code in the file.
 3. Copy and paste the code below into that file.  You can use the raw code by clicking on {% imgcap /images/view_raw.png 81 34 %}
 if you found it easier.

{% gist 5759336 %}

Save the code by pressing <kbd>Control</kbd> **+** <kbd>S</kbd>.

### A Note About Jade vs. HTML for HTML developers

I know [jade](http://jade-lang.com/) looks like weirded out HTML for those of you that are familiar with HTML.  It's an HTML
template engine that the node.js server compiles into regular HTML using the express node module. We could have just
as well used regular HTML. The express modue automatically defaults to jade so I kept it to keep this simple.

There are a TON of similar template engines that are designed to make HTML coding quicker with less markup.
If you want to take a look at some, check out the [Template Chooser](http://garann.github.io/template-chooser/).

#### How Does Jade Look When Converted To HTML?

If you want to see what the index.jade or layout.jade file will look like when compiled into an HTML file, you'll
have to do the following:

 1. Open up your `app` directory in the Command Window.  You can [go back to the directions](http://html5devgal.com/getting-started/#running-some-commands-in-the-command-window)
 if you need to.
 2. Run the following commands in the Command Window to convert the `index.jade` file:
     {% coderay %}
      npm install -g jade
      cd views
      jade index.jade
    {% endcoderay %}

You can then find an index.html file in the Sublime Text program where the index.jade file is.

#### How Does HTML Look When Converted To Jade?

If you've got some HTML code and you want to know what it would look like as jade code
you can use [this handy HTML to Jade converter](http://html2jade.aaron-powell.com/).

## Admiring The Fruits Of Your Labor

Now go back to [http://localhost:3000/](http://localhost:3000/).  If you don't see your changes, you might have to
refresh the cache. [Here are instructions to refresh cache for all different types of browsers](http://www.refreshyourcache.com/en/home/).

## [Let's Embed Some Video . . ](/embed-video/)
