'use strict';// This function is a modified version of the one created by the Webpack project
global=window;process={env:{}};(function(modules){// The module cache
var installedModules={};// The require function
function __fastpack_require__(moduleId){// Check if module is in cache
if(installedModules[moduleId]){return installedModules[moduleId].exports;}// Create a new module (and put it into the cache)
var module=installedModules[moduleId]={id:moduleId,l:false,exports:{}};// Execute the module function
modules[moduleId].call(module.exports,module,module.exports,__fastpack_require__,__fastpack_import__);// Flag the module as loaded
module.l=true;// Return the exports of the module
