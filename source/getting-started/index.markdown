---
layout: page
title: "Getting Started"
date: 2013-06-11 13:58
comments: true
sharing: true
footer: true
categories: [node.js, javaScript, bootstrap, jade, express]
---

* sample unordered list
{:toc}

## Downloading And Installing Stuff

Download the following:

 * [node.js installer](http://nodejs.org/)
 * [A cool coding tool - IDE called Sublime Text](http://www.sublimetext.com/)

 {% imgcap /images/Sublime_Text_Logo.png Sublime Text %}

Then install your new stuff.

## Setting Up Your Application Environment

 1. Go to your Documents folder.
 2. Create a directory called `app` in Windows Explorer.

## Running Some Commands in The Command Window

 1. In Windows Explorer, simply hold the Shift key and right-click on the `app` folder.
 2. Choose Open Command Window here

 {% imgcap /images/openCommandWindow.png Shift + Right-Click on folder  %}

 3. In the new Command Window type the following.  Make sure to press the enter key after every line.
    {% coderay %}
      npm install -g express –S
      express
      npm install
      node app
    {% endcoderay %}
 4. Open up a browser and visit [http://localhost:3000/](http://localhost:3000/) to see your bare bones, node.js, express website.

## Create A Project In Sublime Text

 1. Open up the Sublime Text program.
 2. In the top menu choose `Project -> Add Folder to Project . . .`.

 {% imgcap /images/SublimeTextAddFoldersToProject.png Add Folders To Project %}

 3. Navigate to the application directory.  This will be the `app` directory you created in Documents. You'll see all of the files express installed
 to create your app.

 Don't be too intimitated with all of the files and folders.
 For those of you who are interested in learning more about this application structure, I'd be happy to
 explane it afterwords.

## Making Your Site Pretty With A Bootstrap Template

 1. In Sublime text open up the `layout.jade` file in

    {% coderay %}
- app
  - views
    {% endcoderay %}

 2. Copy and paste this code into that file:

{% gist 5759325 %}

 3. In Sublime text open up the `index.jade` file in the same `views` directory.

    {% imgcap /images/layoutJade.png layout.jade %}

 4. Copy and paste this code into that file:

{% gist 5759336 %}

I know jade looks like weirded out HTML for those of you that are familiar with HTML.

Anyone freaked out by the jade syntax and used to HTML syntax can use [this handy HTML to Jade converter](http://html2jade.aaron-powell.com/).

Apps like this tend to use an HTML template parser like jade because it’s easy to integrate dynamic server side data.

## Admiring The Fruits Of Your Labor

Now go back to [http://localhost:3000/](http://localhost:3000/) and refresh the page.  Fabulous!

[Let's Embed Some Video . . ](/embed-video/)
