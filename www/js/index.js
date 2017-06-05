/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);


    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        hockeyapp.start(null, null, "07bd9e0df1ea486fac16c3e932038a8d");


        document.querySelector('#testdialog').addEventListener("touchend", function(){
          console.log('testdialog');
          navigator.notification.alert("This is a test...", null,"Alert Test", "OK!");
        });

        document.querySelector('#forcecrash').addEventListener("touchend", function(){
          console.log('forcecrash');
          hockeyapp.forceCrash();
        });

        document.querySelector('#feedback').addEventListener("touchend", function(){
          console.log('feedback');
          hockeyapp.feedback();
        });

        document.querySelector('#checkforupdates').addEventListener("touchend", function(){
          console.log('checkforupdates');
          hockeyapp.checkForUpdate();
        });


    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');



        // var btn = parentElement.querySelector('.t-btn');
        // btn.addEventListener("click", function(){
        //   console.log(123);
        // });


        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        // hockeyapp.start(null, null, "b4a6013949214689acc3fe5feff9bc2c");
        // hockeyapp.forceCrash();
        // hockeyapp.feedback();
        // hockeyapp.checkForUpdate();


    }
};
