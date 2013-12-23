//
// Geofencing.h
// SITEFORUM
// Sections of this code adapted from Apache Cordova
//
// Created by Dov Goldberg on 5/3/12.
// Copyright (c) 2013 SITEFORUM. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreLocation/CoreLocation.h>

#import <Cordova/CDVPlugin.h>

#import "GeofencingHelper.h"

#define KEY_REGION_ID @"fid"
#define KEY_REGION_LAT @"latitude"
#define KEY_REGION_LNG @"longitude"
#define KEY_REGION_RADIUS @"radius"
#define KEY_REGION_ACCURACY @"accuracy"

@interface Geofencing : CDVPlugin <CLLocationManagerDelegate>

- (BOOL) isLocationServicesEnabled;
- (BOOL) isAuthorized;
- (BOOL) isRegionMonitoringAvailable;
- (BOOL) isRegionMonitoringEnabled;
- (BOOL) isSignificantLocationChangeMonitoringAvailable;
- (void) addRegionToMonitor:(NSMutableDictionary *)params;
- (void) removeRegionToMonitor:(NSMutableDictionary *)params;


#pragma mark Plugin Functions
- (void) addRegion:(CDVInvokedUrlCommand*)command;
- (void) removeRegion:(CDVInvokedUrlCommand*)command;
- (void) getWatchedRegionIds:(CDVInvokedUrlCommand*)command;
- (void) getPendingRegionUpdates:(CDVInvokedUrlCommand*)command;
- (void) startMonitoringSignificantLocationChanges:(CDVInvokedUrlCommand*)command;
- (void) stopMonitoringSignificantLocationChanges:(CDVInvokedUrlCommand*)command;

@end