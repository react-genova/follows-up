### With values

```jsx
const { SIGN_O, SIGN_X } = require('../../modules/types/signs.constants.js');
<div style={{ display:"flex", width:"120px", height:"50px", padding:"2px", backgroundColor: "rgb(50,50,50)" }}>
    <Sign hasValue type={SIGN_X} />
    <Sign hasValue type={SIGN_O} />
</div>
```

### Without values (hover)

```jsx
const { SIGN_O, SIGN_X } = require('../../modules/types/signs.constants.js');
<div style={{ display:"flex", width:"120px", height:"50px", padding:"2px", backgroundColor: "rgb(50,50,50)" }}>
    <Sign type={SIGN_X} />
    <Sign type={SIGN_O} />
</div>
```

### A little bigger and mixed

```jsx
const { SIGN_O, SIGN_X } = require('../../modules/types/signs.constants.js');
<div style={{ display:"flex", width:"480px", height:"100px", padding:"5px", backgroundColor: "rgb(50,50,50)" }}>
    <Sign hasValue type={SIGN_X} />
    <Sign hasValue type={SIGN_O} />
    <Sign type={SIGN_X} />
    <Sign type={SIGN_O} />
</div>
```