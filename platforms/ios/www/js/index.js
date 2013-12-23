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
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        
        // SITEFORUM Fences
        var place_suhl = {"fid": 1111, "radius": 50, "latitude": 50.610373, "longitude": 10.691191};
        var place_erfurt_domplatz = {"fid": 2222, "radius": 50, "latitude": 50.976494, "longitude": 11.024978};
        var place_erfurt_siteforum = {"fid": 3333, "radius": 50, "latitude": 50.970664, "longitude": 11.021765};
        var place_erfurt_waypoint = {"fid": 4444, "radius": 50, "latitude": 50.968242, "longitude": 11.022677};
        var place_erfurt_knie = {"fid": 5555, "radius": 50, "latitude": 50.976011, "longitude": 11.00889};
        var place_erfurt_richtung_dom = {"fid": 6666, "radius": 50, "latitude": 50.98286, "longitude": 11.020424};
        var place_erfurt_regierungsstrasse = {"fid": 7777, "radius": 50, "latitude": 50.973846, "longitude": 11.02751};
        
        var way_home1 = {"fid": 9111, "radius": 100, "latitude": 50.967644, "longitude": 11.020263};
        var way_home2 = {"fid": 9222, "radius": 100, "latitude": 50.966015, "longitude": 11.018814};
        var way_home3 = {"fid": 9333, "radius": 100, "latitude": 50.966208, "longitude": 11.023696};
        var way_home4 = {"fid": 9444, "radius": 100, "latitude": 50.963833, "longitude": 11.025225};
        var way_home5 = {"fid": 9555, "radius": 100, "latitude": 50.962471, "longitude": 11.024345};
        var way_home6 = {"fid": 9666, "radius": 100, "latitude": 50.962775, "longitude": 11.021282};
        
        var way_tegut = {"fid": 1122, "radius": 30, "latitude": 50.971166, "longitude": 11.021072};
        var way_tegut2 = {"fid": 1133, "radius": 30, "latitude": 50.971849, "longitude": 11.019589};
        var way_tegut3 = {"fid": 1144, "radius": 30, "latitude": 50.972279, "longitude": 11.018396};


    Geofencing.addRegion(
                         function(result) {
                         //alert('Test');
                         alert(JSON.stringify(result));
                         },
                         function(error) {
                         alert("failed to add region" + result);
                         },
                         place_erfurt_siteforum
                         );

        
        var host2 = "www.lieblingsrestaurant.com";
        //alert(JSON.stringify(host));
        /*
         Geofencing.setHost(
                             function(result) {
                             alert(JSON.stringify(result));
                             },
                             function(error) {
                             alert("failed to add region" + result);
                             },
                             host2
         );
        */
        var token = "jkhs89/kjhjksha98zkh3kjhskjhfHKJhsajGH7z3i8zhkhas";
        /*
        Geofencing.setToken(
                           function(result) {
                           alert(JSON.stringify(result));
                           },
                           function(error) {
                           alert("failed to add region" + result);
                           },
                           token
                           );
         */
         
        
    
    Geofencing.getWatchedRegionIds(
                                   function(res){alert(JSON.stringify(res));},
                                   function(err){alert(err);}
                                   );
 
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
