"use strict";

require.config({
    paths: {
        'QUnit': [//'', // if we want to load from from CDN first
                  '../../qunit-1.15.0' // fallback to local
                 ]
    },
    shim: {
       'QUnit': {
           exports: 'QUnit',
           init: function() {
               QUnit.config.autoload = false;
               QUnit.config.autostart = false;
           }
       } 
    }
});
// require the unit tests.
require(
    ['QUnit', 'tests/model', 'tests/app', 'tests/toolbox', 'tests/view-manager'],
    function(QUnit, ModelTest, AppTest, ToolboxTest, ViewManagerTest) {
        
        // run the tests.
        ModelTest.run();
        AppTest.run();
        ToolboxTest.run();
        ViewManagerTest.run();
        
        // start QUnit.
        QUnit.load();
        QUnit.start();
    }
);

