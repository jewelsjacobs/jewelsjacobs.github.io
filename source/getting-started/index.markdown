---
layout: page
title: "Getting Started"
date: 2013-06-11 13:58
comments: false
sharing: false
footer: false
categories: [node.js, javaScript, bootstrap, jade, express]
---

Table of Contents

* sample unordered list
{:toc}

## Downloading And Installing Stuff

Download the following:

 * [node.js installer](http://nodejs.org/)
 * [Heroku Toolbelt](https://toolbelt.heroku.com/windows).
 <i class="icon-exclamation-sign bg_red_icon" markdown="0"> </i> ***This can take a while to install
 as files get downloaded during the process.  If the installer seems to hang or freeze with a full progress bar,
 just wait a couple of minutes and it will continue.***
 * [Sublime Text](http://www.sublimetext.com/)

Then install your new stuff.

## Setting Up Your Application Environment

 1. Go to your Documents folder.
 2. Create a directory called `app` in Windows Explorer.

### Adding ssh-keygen To Your PATH

There is an application called `ssh-keygen` installed with Heroku
Toolbelt.  Unfortunatly you can't run it in your Command Window
unless you tell Windows where to find it.

You do this by adding it's location to the Windows PATH environment variable:

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

## Install Web App

 1. In Windows Explorer, simply hold <kbd>Shift</kbd> and **right-click** on the `app` folder.
 2. Choose Open Command Window here

    {% imgcap /images/openCommandWindow.png Shift + Right-Click on folder  %}

 3. Your black DOS Command Window should now be open and the current directory will be the
 `C:\Users\-YourUserName-\Documents\app` directory.

    {% imgcap /images/command_window.png Command Window  %}

 4. In the new Command Window type the commands shown below.

    <i class="icon-exclamation-sign bg_red_icon" markdown="0"> </i> **When asked to type commands in the Command Window, make sure to press
    the enter key after every line and wait till each command task is compleated
    before entering the next line.**

    {% coderay %}
      npm install -g express –S
      express
      npm install
      node app
    {% endcoderay %}
Open up a browser and visit [http://localhost:3000/](http://localhost:3000/) to see your bare bones, node.js, express app.

## [Adding Style To Your Site . . .](/style/)

