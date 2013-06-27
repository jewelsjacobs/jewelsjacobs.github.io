---
layout: page
title: "Cloud Hosting With Heroku"
date: 2013-06-11 16:03
comments: false
sharing: false
footer: false
categories: [node.js, javaScript, bootstrap, jade, express, html5, video, howto]
---

Table of Contents

* sample unordered list
{:toc}

## Putting Your Site On The Cloud

[Heroku](https://www.heroku.com/) is a great cloud based host that offers free accounts for developers
with very small sites that won't take up a lot of resources.

{% imgcap /images/heroku.png 97 36 Heroku %}

It's a perfect way to publish your site for free.  We are going to use Heroku to
host our sites.

## Configuring Your App For Heroku

 1. Sign Up for a free Heroku account by going to [the Heroku site](https://www.heroku.com/)
  and clicking the `Sign Up` {% imgcap /images/signup.png 143 36 %} button.
 2. Follow the instructions to confirm your account and create a password.

### Creating The Procfile

 1. In the Sublime Text program's top menu choose `File -> New File` to create a new blank file.

    {% imgcap /images/create_new_file.png Create New File In Sublime Text %}

 2. Copy and Paste the following code into that file.

    {% coderay %}
    web: node app.js
    {% endcoderay %}

### Saving The Procfile

 1. In the Sublime Text program's top menu choose `File -> Save As...`.

    {% imgcap /images/save_as.png %}

 2. Save the file as `Procfile` in your `app` directory. Don't add any type of file
 extension like `.txt`.

    {% imgcap /images/save_proc.png %}

### Logging Into Heroku

 1. If your Command Window is still open, close it to stop the web server.
 2. Follow the [previous instructions](http://html5devgal.com/getting-started/#running-some-commands-in-the-command-window)
 on opening it in your `app` directory.
 3. In the Command Window type:
    {% coderay %}
    heroku login
    {% endcoderay %}

 Enter the email and password of your new Heroku account and then allow Heroku to
 generate a public key.

## Deploy Your App To Heroku

Heroku manages your application in it's own Git repository.  Git is a version control system
like Subversion or Perforce.  If you want to know more about Git
[check out this site](http://git-scm.com/). If you want to know more about working with
Heroku's Git repository [take a look here](https://devcenter.heroku.com/articles/git#tracking-your-app-in-git).

Don't worry though, you don't need to know anything about Git to get your app on Heroku.
Just follow these instructions.

You also don't need to worry about installing Git as the Heroku Toolbelt you already installed
includes it.

 1. Follow the [previous instructions](http://html5devgal.com/getting-started/#running-some-commands-in-the-command-window)
 on opening your Command Window in your `app` directory if it isn't already opened.
 2. Make sure you are logged into Heroku.  If not or just not sure, type the following in the Command Window:

    {% coderay %}
      heroku logout
      heroku login
    {% endcoderay %}

 3. Type the following `git` commands in the Command Window.
 Also note that you might get some warnings about line endings.  Don't worry about that.
 **Replace `you@example.com` with the email address you used for your Heroku account and `Your Name` with your name.**

    {% coderay %}
      git init
      git add .
      git config --global user.email "you@example.com"
      git config --global user.name "Your Name"
      git commit -m "my first commit"
      heroku create
      git push heroku master
    {% endcoderay %}

The git commands will:

 * Turn your app directory into a local git repository,
 * Add and commit all of the app files to the repository
 * Create a Heroku website (also called an app)
 * Deploy the local git repository to the remote Heroku repository and app

## Viewing Your New Heroku Hosted App

After the app has finished deploying to Heroku, you can open it up
in your browser by typing `heroku open` in the Command Window.
You should then see your new app on your new Heroku app!

Be sure to check it out on a mobile device or tablet.

## Updating Your Heroku App

If you want to make changes to your app and then load those changes back up to Heroku:

1. Make and save your code changes in Sublime Text.
2. Open up your `app` directory in the Command Window.  You can [go back to the directions](http://html5devgal.com/getting-started/#running-some-commands-in-the-command-window).
3. Type the following git commands:

    {% coderay %}
      git add .
      git commit -m "some message describing your changes"
      git push heroku master
    {% endcoderay %}

This is where you might get a `Permission denied (publickey)` error.

## `Permission denied (publickey)` Error

A lot of permission errors occur because of public / private key craziness. If you run into any `Permission denied (publickey)` errors
during this process, get with me and I will help.

If you're looking for ways to fix it yourself,
check out [Heroku's guide to managing Your SSH Keys](https://devcenter.heroku.com/articles/keys). If that doesn't work,
do some Googleing. You'll find ALOT of people who have ran into the same problem and posted fixes.

Some posted fixes might be documented with *nix commands, so make sure
you use DOS command equivalants in the Command Window.
Here's [a good DOS to Linux commands guide](https://access.redhat.com/site/documentation/en-US/Red_Hat_Enterprise_Linux/4/html/Step_by_Step_Guide/ap-doslinux.html).

## Resources
Want to learn more?  Check out [these resources](/resources/).