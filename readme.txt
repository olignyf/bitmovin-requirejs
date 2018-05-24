
== How to access dev webpage ==
Put the files on a nginx or apache served location
Access public/ directory

== How to access released webpage ==
Put the files on a nginx or apache served location
Run the gulp process (see below)
Access dist/ directory

== How to build release using gulp (see below for grunt) ==
Make sure you have node and gulp installed globally (maybe not needed anymore?)

Then run:
$> npm install 
$> gulp 



== How to build release using grunt (if you must) ==
Prerequisite
$> npm install -g grunt-cli

Then run:
$> npm install 
$> grunt



