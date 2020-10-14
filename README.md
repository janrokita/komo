# Komo

_Komo is a simple and lightweight utility for creating a Spotlight style popup on your website._

Feel free to fork and contribute to this project! I will gladly accept your pull requests if they fit this utility.

If you have any ideas of what can be added to komo, send me an email `j@rokita.group` or make it!

## Example Usage:

```js
function callback(command) {
  console.log(command);
}

Komo(
  {
    dark: false, // (Boolean) Dark Mode
    openKey: 75, // (Integer) Key Code (https://keycode.info/)
    openKeyModifier: "META||CTRL", // (String) Modifier Key: "CTRL", "SHIFT", "META", "META||CTRL", ""
  },
  callback
);
```

## CDN:

CSS:

```
https://cdn.jsdelivr.net/gh/jskull/komo@1.x/src/komo.css
```

JS:

```
https://cdn.jsdelivr.net/gh/jskull/komo@1.x/src/komo.min.js
```

_(The default key to open Komo is CMD/CTRL + K)_

### Official website: [komo.js.org](https://komo.js.org)

<p align="left">
  <a href="https://twitter.com/johnyrokita"><img src="https://img.shields.io/twitter/follow/johnyrokita.svg?label=Twitter" alt="Follow on twitter"></a>
</p>

Created by [@johnyrokita]()
