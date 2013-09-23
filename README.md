# innersource

Returns inner source of a function as a string.

## Usage

```javascript
var innersource = require('innersource');

function test1() {
  console.log('hello');
}

console.log(innersource(test1)); //  console.log('hello');
```
