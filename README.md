# nw-open-file

Easily open a file from a node-webkit application.

## Usage

```javascript
var open = require('nw-open-file')

open(function(filename) {
    console.log(filename)
})
```

_Attention:_ When the user closes the file dialog without selecting a file, the callback does not fire.
