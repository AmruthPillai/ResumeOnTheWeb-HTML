/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["browserconfig.xml","41099729d8492f03a0b2f3d0e5484e85"],["contact.php","a54219fbcb48411c4a8299b9eabe8c39"],["favicon.ico","9bf3190d2044ffb4762a1557e4be2bca"],["images/amruth-pillai.png","8868b57fd1f3601064e25bc27add3995"],["images/ap-map.png","e3b500d472597fc457e4361f2224421d"],["images/education/dsi.png","7ac60d7854de2256b7b367f3dc71e2ea"],["images/education/jvvp.png","720a1f1cc68327a5b56e47d563e6131a"],["images/education/sams.png","67684d68a79fa99da9543b36bcdb7a1e"],["images/favicons/android-chrome-192x192.png","a9694ff882ba9403094ecbfeab86044b"],["images/favicons/android-chrome-512x512.png","353cd579610fe99e19460dc482dcf58c"],["images/favicons/apple-touch-icon.png","66d9d82ede98bf6d92802e929321eb63"],["images/favicons/favicon-16x16.png","dc8c77df603bffbb645c12737b8376c5"],["images/favicons/favicon-32x32.png","b9f374ed6847e1299ccb575e722cec90"],["images/favicons/mstile-150x150.png","7ad46f14c6cee8432464602bba79cd24"],["images/lightpaperfibers.png","cc366c62c08426dca7b280685988cb9b"],["images/og-image.jpg","6d107348ada71a3ddf26b21dd3f7a2b8"],["images/photos/IMG_1880.jpg","2d1325d925a0709371b041beef34679b"],["images/photos/IMG_3522.jpg","e97dad2144ccb762a7369907576104f8"],["images/photos/IMG_4861.jpg","b3c0193e852c3d10bc2e7fe3781ad18c"],["images/photos/IMG_5184.jpg","d01674a8d96c2938f16c45454f625f8b"],["images/photos/IMG_8286.jpg","a484cd2da1c181f7ef6476083c020777"],["images/photos/IMG_8295.jpg","7f0579e619bc7cd65cf0ffc807c9b81f"],["images/projects/graphic/bgbaliga.png","5046251c0452c2d76d840812e8dfe99c"],["images/projects/graphic/dsce-kalaarnava.png","88a53fbb822e291707b2c85bee989e8c"],["images/projects/graphic/dsit-typography.jpg","68e66865892b7313742e21cc59f58365"],["images/projects/graphic/therabot.jpg","144b4073cc6ccc06ba083a9bc820d8a1"],["images/projects/print/benignora.png","f68e08348270ba2667a79ccd8c6fef89"],["images/projects/print/blood-donation.jpg","cddb760608b1550a4647087e7b430ab3"],["images/projects/print/dsce-cultural-activities.jpg","c5f5f333f05d73e1549502c578f3d7ee"],["images/projects/print/dsce-paper-presentation.png","243d3e1865f3d184d8dbbdbb40607eb9"],["images/projects/uiux/circle-music-player.jpg","68036d3eae4e4499495df1f03238871d"],["images/projects/uiux/material-auth.png","d9d895eaed71ef9005820fc856179887"],["images/projects/uiux/vapordrive.jpg","b12746eb23d2c6a534458b2f4a9f8b7f"],["images/projects/uiux/whatsapp.jpg","c81a3222442380eb844439820ca616bd"],["images/projects/web/calamitycontrol.png","10077669afc524fa125e0f63baf3429c"],["images/projects/web/coetec.png","815358d7f60ecbc15749884ef342e6b2"],["images/projects/web/dscealumnimeet.png","5e79c43bd7c41f79b7f7201d9c267d80"],["images/projects/web/madrasibride.png","277c8093c8657c29393bc92df3402545"],["images/work/betsol.png","52aa18acb29ab45fd8f8c896bff87c3e"],["images/work/cognitiveclouds.png","84cb8c0f52c2e141d4f3eb107df493fd"],["images/work/grabhouse.png","6e5e31f94369b153c0a775f6b2a4c918"],["index.html","f2655c376ea7d18e4f13519154ef4cf1"],["manifest.json","c2ead90774e9571d81449c0655dba890"],["scripts/main.js","8291ff9b3e4e68c430395f3cc20fa98a"],["scripts/vendor.js","7c9d2740bd713153d3d82d1e9467b94b"],["scripts/vendor/modernizr.js","c1ff1650bba6e39089834e708129d723"],["styles/browserconfig.xml","41099729d8492f03a0b2f3d0e5484e85"],["styles/contact.php","a54219fbcb48411c4a8299b9eabe8c39"],["styles/favicon.ico","9bf3190d2044ffb4762a1557e4be2bca"],["styles/images/amruth-pillai.png","8868b57fd1f3601064e25bc27add3995"],["styles/images/ap-map.png","e3b500d472597fc457e4361f2224421d"],["styles/images/education/dsi.png","7ac60d7854de2256b7b367f3dc71e2ea"],["styles/images/education/jvvp.png","720a1f1cc68327a5b56e47d563e6131a"],["styles/images/education/sams.png","67684d68a79fa99da9543b36bcdb7a1e"],["styles/images/favicons/android-chrome-192x192.png","a9694ff882ba9403094ecbfeab86044b"],["styles/images/favicons/android-chrome-512x512.png","353cd579610fe99e19460dc482dcf58c"],["styles/images/favicons/apple-touch-icon.png","66d9d82ede98bf6d92802e929321eb63"],["styles/images/favicons/favicon-16x16.png","dc8c77df603bffbb645c12737b8376c5"],["styles/images/favicons/favicon-32x32.png","b9f374ed6847e1299ccb575e722cec90"],["styles/images/favicons/mstile-150x150.png","7ad46f14c6cee8432464602bba79cd24"],["styles/images/lightpaperfibers.png","cc366c62c08426dca7b280685988cb9b"],["styles/images/og-image.jpg","6d107348ada71a3ddf26b21dd3f7a2b8"],["styles/images/photos/IMG_1880.jpg","2d1325d925a0709371b041beef34679b"],["styles/images/photos/IMG_3522.jpg","e97dad2144ccb762a7369907576104f8"],["styles/images/photos/IMG_4861.jpg","b3c0193e852c3d10bc2e7fe3781ad18c"],["styles/images/photos/IMG_5184.jpg","d01674a8d96c2938f16c45454f625f8b"],["styles/images/photos/IMG_8286.jpg","a484cd2da1c181f7ef6476083c020777"],["styles/images/photos/IMG_8295.jpg","7f0579e619bc7cd65cf0ffc807c9b81f"],["styles/images/projects/graphic/bgbaliga.png","5046251c0452c2d76d840812e8dfe99c"],["styles/images/projects/graphic/dsce-kalaarnava.png","88a53fbb822e291707b2c85bee989e8c"],["styles/images/projects/graphic/dsit-typography.jpg","68e66865892b7313742e21cc59f58365"],["styles/images/projects/graphic/therabot.jpg","144b4073cc6ccc06ba083a9bc820d8a1"],["styles/images/projects/print/benignora.png","f68e08348270ba2667a79ccd8c6fef89"],["styles/images/projects/print/blood-donation.jpg","cddb760608b1550a4647087e7b430ab3"],["styles/images/projects/print/dsce-cultural-activities.jpg","c5f5f333f05d73e1549502c578f3d7ee"],["styles/images/projects/print/dsce-paper-presentation.png","243d3e1865f3d184d8dbbdbb40607eb9"],["styles/images/projects/uiux/circle-music-player.jpg","68036d3eae4e4499495df1f03238871d"],["styles/images/projects/uiux/material-auth.png","d9d895eaed71ef9005820fc856179887"],["styles/images/projects/uiux/vapordrive.jpg","b12746eb23d2c6a534458b2f4a9f8b7f"],["styles/images/projects/uiux/whatsapp.jpg","c81a3222442380eb844439820ca616bd"],["styles/images/projects/web/calamitycontrol.png","10077669afc524fa125e0f63baf3429c"],["styles/images/projects/web/coetec.png","815358d7f60ecbc15749884ef342e6b2"],["styles/images/projects/web/dscealumnimeet.png","5e79c43bd7c41f79b7f7201d9c267d80"],["styles/images/projects/web/madrasibride.png","277c8093c8657c29393bc92df3402545"],["styles/images/work/betsol.png","52aa18acb29ab45fd8f8c896bff87c3e"],["styles/images/work/cognitiveclouds.png","84cb8c0f52c2e141d4f3eb107df493fd"],["styles/images/work/grabhouse.png","6e5e31f94369b153c0a775f6b2a4c918"],["styles/index.html","69505b7cc3fefa9934138b2e2268f1b0"],["styles/main.css","35ec236ed8776a928ad3fbe1e4c7a601"],["styles/manifest.json","c2ead90774e9571d81449c0655dba890"],["styles/scripts/main.js","8291ff9b3e4e68c430395f3cc20fa98a"],["styles/scripts/vendor.js","7c9d2740bd713153d3d82d1e9467b94b"],["styles/scripts/vendor/modernizr.js","c1ff1650bba6e39089834e708129d723"],["styles/service-worker.js","d034f2982d099601592fd96fff5c4fdd"],["styles/vendor.css","8c33d80e8348582067bbff59ee0730df"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







