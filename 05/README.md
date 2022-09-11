# 05

> My funkadelic Knott.JS project

# Installation

``` bash
# install dependencies
$ npm install

# preview local app
$ npm preview

# serve local `development` app
$ npm dev

# build `production` app
$ npm build
```

---

# About This Template

## Frontend Tools

 - [Knott JS](https://knottjs.netlify.app) is a tiny Virtual DOM Javascript library to build basic web component for web app or website.
 - [WEAVV CSS](https://weavvcss.netlify.app) is a low-level functional CSS framework for styling user interface.
 - [Vite](https://vitejs.dev/) is a frontend build tool.
 
# App Settings

## Vite Configs (`vite.config.js`)

Edit production output assets filename.

```js
const filename = "app";
```

## (PWA) Service Worker (`app.js`)

Service Worker (SW) store assets in the browser to enable fast and offline access.

```mjs
import { pwa } from "knott";

pwa("true"); // on
```

## (PWA) App Manifest (`manifest.json`)

Edit [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) app details. Such as app splash screen color, app name, and icons.

## (PWA) Cache App Assets (`sw.js`)

Edit [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) service worker cache name.

```js
const cacheName = "knott-app-cache-v1";
```

Add static file assets to store in the browser cache for offline access.

```js
const cacheAssets = [
  "/",
  "/index.html",
  "/assets/app.js",
  "/assets/app.css",
];
```

# Enjoy!
