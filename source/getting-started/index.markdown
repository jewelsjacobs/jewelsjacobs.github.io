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
 * [Heroku Toolbelt](https://toolbelt.heroku.com/windows). ***This can take a while to install
 as files get downloaded during the process.  If the installer seems to hang or freeze with a full progress bar,
 just wait a couple of minutes and it will continue.***
 * [A cool coding tool / IDE called Sublime Text](http://www.sublimetext.com/)

 {% imgcap /images/Sublime_Text_Logo.png Sublime Text %}

Then install your new stuff.

## Setting Up Your Application Environment

 1. Go to your Documents folder.
 2. Create a directory called `app` in Windows Explorer.

### Adding ssh-keygen To Your PATH

There is an application called `ssh-keygen` installed with Heroku
Toolbelt.  Unfortunatly you can't run it in your Command Window
unless you tell Windows where to find it.

You do this by adding it's location to the Windows PATH environment variable.

Here's how:

 1. Click the `Start` button on the bottem left corner of your screen.  On the right side of the `Start Menu` you'll see
  `Computer`.  Right click on `Computer` and choose `Properties` from the pop-up / context menu.

    {% imgcap /images/computer_properties.png Computer Properties %}

 2. Click `Advanced Systems Settings` on the left.

    {% imgcap /images/system_advanced_settings_thumb.png Advanced System Settings %}

 3. Click the `Advanced` tab and then the `Environment Variables. . .` button.

    {% imgcap /images/windows_7_enviroment_variables.png Environment Variables Button %}

 4. Double click `PATH` (or it might be `Path`).  It can either be listed under `User variables` or `System variables`.

    {% imgcap /images/add_to_PATH.png Double click PATH %}

 5. Add `C:\Program Files (x86)\Git\bin` into the `Variable Value`.
 Make sure you separate the value with `;`.

    {% imgcap /images/var_value.png Add path %}

## Running Some Commands in The Command Window

 1. In Windows Explorer, simply hold the Shift key and right-click on the `app` folder.
 2. Choose Open Command Window here

    {% imgcap /images/openCommandWindow.png Shift + Right-Click on folder  %}

 3. Your Command Window should now be open and the current directory will be the
 `C:\Users\-YourUserName-\Documents\app>` directory.

    {% imgcap /images/command_window.png Command Window  %}

 3. In the new Command Window type the commands shown below.

    **NOTE: When asked to type commands in the Command Window, make sure to press
    the enter key after every line and wait till each command task is compleated
    before entering the next line.**

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

    {% imgcap /images/add_folder_to_project.png Add Folders To Project %}

 3. Navigate to the application directory.  This will be the `app` directory you created in Documents. You'll see all of the files express installed
 to create your app.

 Don't be too intimitated with all of the files and folders.
 For those of you who are interested in learning more about this application structure, I'd be happy to
 explain it afterwords.

## Making Your Site Pretty With A Bootstrap Template

 1. In Sublime Text open up the `layout.jade` file in the `app\views` directory

    {% imgcap /images/layout_jade.png Add Folders To Project %}

 2. Copy and paste the code below into that file.  If you have problems copying and pasting the code,
 click on the grey `view raw` link  to open up a webpage with the raw code.

    {% imgcap /images/view_raw.png View Raw Code In Seperate Page %}

 It's easier to copy and paste the code from that seperate page.

{% gist 5759325 %}

 3. In Sublime Text open up the `index.jade` file in the same `views` directory.

    {% imgcap /images/index_jade.png index.jade %}

 4. Copy and paste this code into that file:

{% gist 5759336 %}

I know jade looks like weirded out HTML for those of you that are familiar with HTML.

Anyone freaked out by the jade syntax and used to HTML syntax can use [this handy HTML to Jade converter](http://html2jade.aaron-powell.com/).

Apps like this tend to use an HTML template parser like jade because it’s easy to integrate dynamic server side data.

## Admiring The Fruits Of Your Labor

Now go back to [http://localhost:3000/](http://localhost:3000/) and refresh the page.  Fabulous!

## Embedding Video
[Let's Embed Some Video . . ](/embed-video/)
