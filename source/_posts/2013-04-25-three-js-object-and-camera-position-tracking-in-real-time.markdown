---
layout: post
title: "three.js object and camera position tracking in real time"
date: 2013-04-25 5:59
comments: true
sharing: true
footer: true
categories: [3D UI, css, CSS3D, HTML5, javaScript, three.js]
---

In the "2D" world, you can inspect an element in a browser using the browser's development
    tool (Firebug in Firefox, Chrome IE and Safari have their own) and view / tweak the css
    in realtime to move the element around.
In the CSS3D world this is *not* so easy.

  <!-- more -->

The [three.js](http://threejs.org/) library
is great in that it allows you to create objects, cameras, lights, etc. and position / animate
them (animating three.js objects can be achieved with [tween.js](https://raw.github.com/mrdoob/three.js/master/examples/js/libs/tween.min.js))
with x, y, and z coordinates.

###3D positioning
Basically a 3D grid has an ***x plane*** (which is horizontal), a ***y plane***
(which is vertical) and a ***z plane*** (which is depth)

An object with coordinates x=0, y=0 and z=0 is smack in the ***middle*** of this grid

* A negative coordinate on the x plane will move an element left, positive to the right
* A negative coordinate on the y plane will move an element down, positive will move it up
* A negative coordinate on the z plane will move an element back, positive will move it forward

  {% imgcap http://www.chromesphere.com/tutorials/other/Co-ordinates/xyz%20planes_full.png 3D Grid %}

three.js has a [CSS3D renderer](https://raw.github.com/mrdoob/three.js/master/examples/js/renderers/CSS3DRenderer.js)
which, magically using some very heavy matrix equations, dynamically translates x, y and z
coordinates into a css property called -webkit-transform whose values usually look like this monstrosity:

{% coderay lang:css Crazy transforms %}
-webkit-transform:
   translate3d(0px, 0px, 473.7224230277783px)
   matrix3d(
      0.9999499917030334, 0, -0.009999499656260014, 0,
      0, -1, 0, 0,
      0.009999499656260014, 0, 0.9999499917030334, 0,
      0.000002216018401668407, 0, -4987.5380859375, 1
   )
   translate3d(747.5px, 363.5px, 0px);
{% endcoderay %}

Yick.

For more somewhat understandable info on matrix3d, [this](http://9elements.com/html5demos/matrix3d/)
is probably the best documentation out there.

So how are you supposed to figure out the position of a camera in real time after you've zoomed into your app?

Say you want an event to fire off when the camera is close to a certain object? Or an event to
fire off only if you click on objects located in a certain z-plane coordinate?.

###Tracking Objects
Say you've got an object element with the following css:

{% coderay lang:css Tranform Example %}
-webkit-transform:
 translate3d(-50%, -50%, 0px)
 matrix3d(
 1, 0, 0, 0,
 0, -1, 0, 0,
 0, 0, 1, 0,
 -800, 800, 3500, 1
 );
{% endcoderay %}

***All you really care about as far as tracking the x, y and z coordinates
            of the object's element is the 13th, 14th and 15th values: -800, 800, 3500.***

{% imgcap /images/att-html5-u-verse-poc.png Object %}

So by viewing these coordinates we know where the object is!

This comes in ***VERY*** handy when tracking the camera position during navigation.

###Tracking The Camera
The camera position can be found in the second child of whatever element is defined as the 'container' of the scene.

In this example this element has an id of 'video_container'.

Here's the JavaScript code to illustrate adding a scene to an element container:

{% coderay lang:javascript Scene to Element Container %}
var camera, scene, renderer, controls;

camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
// camera is center & 'front' or screen - camera coordinates are opposite to object coordinates
camera.position.z = 5000; // lower the number 'closer' to objects
camera.position.x = -25; // lower the number more to the right
camera.position.y = 0; // lower the number the more up
scene = new THREE.Scene();
// CSS3D renderer
renderer = new THREE.CSS3DRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.position = 'absolute';

document.getElementById('video_container').appendChild(renderer.domElement);
{% endcoderay %}

Here's the element in the markup, shown in Chrome's Developer Tools:

{% imgcap /images/cameraobject.png Chrome Developer Tools %}

Here's the CSS matrix3D values:

{% coderay lang:css 3D Transforms Example %}
-webkit-transform:
   translate3d(0px, 0px, 445.70307751169236px)
   matrix3d(
      0.9999875426292419, 0, -0.004999937489628792,
      0, 0, -1,
      0, 0, 0.004999937489628792,
      0, 0.9999875426292419, 0,
      0, 0, -5000.0625, 1
   )
   translate3d(747.5px, 342px, 0px);
{% endcoderay %}

As you can see the camera coordinates in the JavaScript code shows z = 5000,
but in the css z = -5000.0625, a ***NEGATIVE*** value.

What gives?

Because the camera is 'facing' ***toward*** the grid and the objects in the grid,
the negative and positive values of the x, y, and z coordinates are OPPOSITE of the actual grid and objects.
So the way it works in the three.js library is:

* +x moves the camera to the LEFT of the grid whereas -z moves the camera to the RIGHT
* +y moves the camera DOWN in the grid whereas -z moves the camera UP
* +z moves the camera AWAY from the grid whereas -z moves the camera CLOSER

 ***UPDATE:***

I just was honored with a tweet from the great Ricardo Cabello Miguel aka [mr.doob](http://www.mrdoob.com/),
creator of three.js, about a better way to get the cameras position in relationship to an object:

{% tweet https://twitter.com/mrdoob/status/327555248531050497 %}

Unfortunately, I can't really use this for realtime results during navigation
because my camera and object position code is in global variables in a different
files order to make things more modular.
Setting breakpoints in the browser or
entering it in the console isn't quote working for me. To just get the camera z-plane
value in the browser console check out
  [this post](/blog/2013/05/01/trick-to-get-three-js-camera-z-plane-value-in-browser-development-tools-console/)

***AN IMPORTANT NOTE ABOUT TRACKBALL / TOUCH CONTROLS AND THE CAMERA Z POSITION:***
To facilitate scroll wheel, trackball and touch zoom controls, a three.js utility
library
called [Trackball Controls](https://raw.github.com/mrdoob/three.js/master/examples/js/controls/TrackballControls.js)
can be used.
Make sure all of your objects have ***POSITIVE*** z coordinate values.
If they don't the camera will never reach them as it can only zoom up to
z coordinate = 0. Once the camera has z = 0 you will keep pinching / scrolling forever and go no where.
