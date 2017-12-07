#import "ImageLibraryManager.h"
#import <React/RCTLog.h>

@import MobileCoreServices;

@implementation ImageLibraryManager

static NSString *const StartEvent = @"ImageSelectionStarted";
static NSString *const EndEvent = @"ImageSelectionEnded";

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(selectImage:(RCTResponseSenderBlock)callback)
{
  RCTLogInfo(@"Selecting image...");
  self.callback = callback;
  UIImagePickerController *picker = [[UIImagePickerController alloc] init];
  picker.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
  picker.mediaTypes = @[(NSString *)kUTTypeImage];
  picker.modalPresentationStyle = UIModalPresentationCurrentContext;
  picker.delegate = self;
  UIViewController *root = [[[[UIApplication sharedApplication] delegate] window] rootViewController];
  [root presentViewController:picker animated:YES completion:nil];
}

- (void)imagePickerController:(UIImagePickerController *) picker didFinishPickingMediaWithInfo:(nonnull NSDictionary<NSString *,id> *)info
{
  NSString *fileName = [[[NSUUID UUID] UUIDString] stringByAppendingString:@".jpg"];
  NSString *path = [[NSTemporaryDirectory() stringByStandardizingPath] stringByAppendingPathComponent:fileName];
  UIImage *image = [info objectForKey:UIImagePickerControllerOriginalImage];
  NSData *data = UIImageJPEGRepresentation(image, 0);
  [data writeToFile:path atomically:YES];
  NSURL *fileURL = [NSURL fileURLWithPath:path];
  NSString *filePath = [fileURL absoluteString];
  
  RCTLog(@"%@", filePath);
  if ( self.callback != nil) {
    self.callback(@[filePath]);
  } else if (self.resolve != nil) {
    self.resolve(filePath);
  }
  
  [self sendEventWithName:EndEvent body:filePath];
  [picker dismissViewControllerAnimated:YES completion:nil];
}

RCT_EXPORT_METHOD(selectImagePromise:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  RCTLogInfo(@"Selecting image...");
  self.resolve = resolve;
  self.reject = reject;
  [self openPicker];
}

- (void)openPicker
{
  [self sendEventWithName:StartEvent body:nil];
  UIImagePickerController *picker = [[UIImagePickerController  alloc]
                                     init];
  picker.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
  picker.mediaTypes = @[(NSString *)kUTTypeImage];
  picker.modalPresentationStyle =  UIModalPresentationCurrentContext;
  picker.delegate = self;
  UIViewController *root = [[[[UIApplication sharedApplication]  delegate]
                             window] rootViewController];
  [root presentViewController:picker animated:YES completion:nil];
}

- (NSArray<NSString *> *)supportedEvents {
  return @[StartEvent, EndEvent];
}

- (NSDictionary *)constantsToExport
{
  return @{ @"startEvent": StartEvent, @"endEvent": EndEvent };
}

@end
