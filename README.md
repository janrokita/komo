# Komo

_Komo is a simple and lightweight framework for creating a Spotlight style popup on your website._

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

_(The default key to open Komo is CMD/CTRL + K)_

### Official website: [komo.js.org](https://komo.js.org)

<p align="left">
  <a href="https://twitter.com/johnyrokita"><img src="https://img.shields.io/twitter/follow/johnyrokita.svg?label=Twitter" alt="Follow on twitter"></a>
</p>

Created by [@johnyrokita]()
