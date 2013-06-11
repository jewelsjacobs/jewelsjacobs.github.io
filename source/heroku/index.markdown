---
layout: page
title: "heroku"
date: 2013-06-11 16:03
comments: true
sharing: true
footer: true
---

* sample unordered list
{:toc}

## Putting Your Site On The Cloud

[Heroku](https://www.heroku.com/) is a great cloud based host that offers free accounts for developers
with very small sites that won't take up a lot of resources.

{% imgcap /images/heroku.png Heroku %}

It's a perfect way to publish your site for free.  We are going to use Heroku to
host our sites.

## Configuring Your App For Heroku

 1. Sign Up for a free Heroku account by going to [the site](https://www.heroku.com/)
  and clicking the  'Sign Up' button. {% imgcap /images/signup.png Sign Up Button %}
 2. Follow the instructions to confirm your account and create a password.
 3. Create a new text file called `Procfile` with the code:
 {% coderay %}
web: node app.js
{% endcoderay %}

This file needs to reside in your `app directory`.
  {% coderay %}
- app
  - Procfile
    {% endcoderay %}

 4. Navigate to your `app` directory in your terminal / command window
 if your not there already.
 5. Download and install [Heroku Toolbelt](https://toolbelt.heroku.com/windows).
 6. In the command window type:
   {% coderay %}
  heroku login
    {% endcoderay %}
 7. Enter the email and password of your new Heroku account and then allow Heroku to
 generate a public key.

 **NOTE**

 A lot of permission errors occur because of public / private key craziness.
 If you run into any `Permission denied (publickey)` errors during this process,
 get with me and I will help.  If your looking for ways to fix it yourself,
 check out this Heroku Guide [Managing Your SSH Keys](https://devcenter.heroku.com/articles/keys)

## Deploy Your App To Heroku

Heroku manages your application in its own Git repository.  Git is a version control system
like Subversion or Perforce.  If you want to know more about Git
[check out this site](http://git-scm.com/). If you want to know more about working with
Heroku's git repository [take a look here](https://devcenter.heroku.com/articles/git#tracking-your-app-in-git).

Don't worry though, you don't need to know anything about git to get your app on Heroku.
Just follow these instructions.

You also don't need to worry about installing git as the Heroku Toolbelt you already installed
includes it.

 1. Navigate to your `app` directory in your terminal / command window
 if your not there already.
 2. Make sure you are logged into heroku.  If not in the command window type:

   {% coderay %}
  heroku login
    {% endcoderay %}

 3. Type the following commands in the command window:

    {% coderay %}
  git init
  git add .
  git commit -m "my first commit"
  heroku create
  git push heroku master
    {% endcoderay %}

These commands will:

 * Turn your app directory into a local git repository,
 * Add and commit all of the app files to the repository
 * Create a heroku website (also called an app)
 * Deploy the local git repository to the remote Heroku repository and app

## Viewing Your New Heroku Hosted Site

After the app has finished deploying to Heroku, you can open it up
in your browser by typing `heroku open` in the command window.
You shoud then see your new app on your new Heroku website!

Be sure to check it out on a mobile device or tablet.