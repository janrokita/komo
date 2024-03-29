// Komo v1.0.2 - https://github.com/jskull/komo
let _KomoInitialized = false;

// Returns the status of the komo popup (true is visible, false is hidden)
function _KomoStatus() {
  const komoElement = document.querySelector("#_Komo");

  if (komoElement.style.display == "block") {
    return true;
  } else {
    return false;
  }
}

// Shows the komo popup
function _KomoShow() {
  const komoElement = document.querySelector("#_Komo");

  if (komoElement.style.display == "block") {
    return false;
  } else {
    komoElement.querySelector("input").value = "";
    komoElement.style.display = "block";
    komoElement.querySelector("input").focus();
    return true;
  }
}

// Hides the komo popup
function _KomoHide() {
  const komoElement = document.querySelector("#_Komo");

  if (komoElement.style.display != "block") {
    return false;
  } else {
    komoElement.style.display = "none";
    komoElement.querySelector("input").blur();

    return true;
  }
}

// Initializes komo
function Komo(params = {}, callback) {
  if (_KomoInitialized) {
    return false;
  }

  const defaultParams = {
    dark: false,
    openKey: 75,
    openKeyModifier: "META||CTRL",
  };

  // Merge Params with Defaults
  function komoMerge(a, b) {
    var c = {};
    for (var idx in a) {
      c[idx] = a[idx];
    }
    for (var idx in b) {
      c[idx] = b[idx];
    }
    return c;
  }

  function komoCreateElement(dark) {
    var element = document.createElement("div");
    element.id = "_Komo";
    if (dark == true) {
      element.classList = "dark";
    }
    element.innerHTML =
      '<input type="text" spellcheck="false" autocomplete="false" />';

    document.body.appendChild(element);
    return element;
  }

  _KomoInitialized = true;

  params = komoMerge(defaultParams, params);
  var komoElement = komoCreateElement(params.dark);

  document.addEventListener("keydown", keyPressEvent);
  document.addEventListener("click", clickEvent);

  function komoProcessOpenKey(event, data) {
    switch (data.openKeyModifier) {
      case "CTRL":
        if (event.ctrlKey) {
          if (event.keyCode == data.openKey) {
            return true;
          }
        }
        break;

      case "CMD":
      case "META":
        if (event.metaKey) {
          if (event.keyCode == data.openKey) {
            return true;
          }
        }

        break;

      case "SHIFT":
        if (event.shiftKey) {
          if (event.keyCode == data.openKey) {
            return true;
          }
        }
        break;

      case "META||CTRL":
        if (event.metaKey || event.ctrlKey) {
          if (event.keyCode == data.openKey) {
            return true;
          }
        }
        break;

      default:
        if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
          if (event.keyCode == data.openKey) {
            return true;
          }
        }
        break;
    }
    return false;
  }

  // Show Komo
  function showKomo() {
    komoElement.querySelector("input").value = "";
    komoElement.style.display = "block";
    komoElement.querySelector("input").focus();
  }

  // Hide Komo
  function hideKomo() {
    komoElement.style.display = "none";
    komoElement.querySelector("input").blur();
  }

  function keyPressEvent(event) {
    if (komoProcessOpenKey(event, params)) {
      // Open Key
      showKomo();
    } else if (event.keyCode == 27) {
      // Escape Key
      hideKomo();
      event.preventDefault();
    } else if (event.keyCode == 13) {
      // Enter Key

      // Check if komo is shown.
      if (komoElement.style.display == "block") {
        hideKomo();
        callback(komoElement.querySelector("input").value);
        event.preventDefault();
      }
    }
  }

  // If clicked outside the Komo popup - hide it. (NOTE: THERE HAS TO BE A BETTER WAY TO DO THIS...)
  function clickEvent(event) {
    var newPath = 0;
    event.path.forEach((element) => {
      if (element.id == "_Komo") {
        newPath++;
      }
    });
    if (newPath == 0) {
      hideKomo();
    }
  }

  return true;
}

if (typeof exports != "undefined") {
  exports.Komo;
  exports._KomoShow;
  exports._KomoHide;
  exports._KomoStatus;
  exports._KomoInitialized;
}
