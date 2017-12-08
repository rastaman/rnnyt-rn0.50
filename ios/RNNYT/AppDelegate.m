/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{

  RCTRootView *rootView = nil;

  if ( false ) {
    RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self
                                             launchOptions:launchOptions];

    rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                        moduleName:@"RNNYT"
                                                 initialProperties:nil];
  } else {
    rootView = [[RCTRootView alloc] initWithBundleURL:[self sourceURLForBridge:nil]
                                                        moduleName:@"RNNYT"
                                                 initialProperties:nil
                                                     launchOptions:launchOptions];
  }

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  return jsCodeLocation;
}

- (BOOL)shouldBridgeUseCxxBridge:(RCTBridge *)bridge {
  return NO;
}

@end
