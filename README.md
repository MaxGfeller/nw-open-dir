# nw-open-dir

Easily open a directory from a node-webkit application.

## Usage

```javascript
var open = require('nw-open-dir')

open(function(dir) {
    console.log(dir)
})
```

_Attention:_ When the user closes the file dialog without selecting a file, the callback does not fire.
