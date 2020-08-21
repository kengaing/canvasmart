# What is this for?

Get an imfage api for discord

# Installation

`npm i canvasmart --save`

Example:
```
const smart = require('canvasmart');

    smart({
        canva_type: 'soft'
        padding: false
    });
```

# options

canvasmart support 2 options, both of which are optional:

* *canva_type* - _hard | soft_ (Defaults t soft)
* *padding* - _boolean_ (Default to false)
