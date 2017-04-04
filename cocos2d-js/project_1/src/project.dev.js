require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"HelloWorld":[function(require,module,exports){
"use strict";
cc._RFpush(module, '9b3adKWNxBKLJdhIbF7BpqW', 'HelloWorld');
// Script\HelloWorld.js

cc.Class({
    'extends': cc.Component,

    properties: {
        label: {
            'default': null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
        idx: 0

    },

    // use this for initialization
    onLoad: function onLoad() {
        //his.label.string = this.text;
        this.schedule(this.timerCallback, 1);
    },

    // called every frame
    update: function update(dt) {
        //cc.log("This is my firstLog in update function : " + dt);
    },

    timerCallback: function timerCallback(dt) {
        this.idx++;
        this.label.string = this.idx;
        this.label.node.rotation += dt * 10;
    }

});

cc._RFpop();
},{}],"NewScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '6cb536c+rFOv4kO145UEF2b', 'NewScript');
// Script\NewScript.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.node.rotation += dt * 100;
    }
});

cc._RFpop();
},{}]},{},["HelloWorld","NewScript"]);
