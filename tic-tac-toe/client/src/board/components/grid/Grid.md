### Playing X on empty little board

```jsx
const { SIGN_O, SIGN_X, SIGN_NONE } = require('../../modules/types/signs.constants.js');
const values = [SIGN_NONE, SIGN_NONE, SIGN_NONE, SIGN_NONE, SIGN_NONE, SIGN_NONE, SIGN_NONE, SIGN_NONE, SIGN_NONE ];
<div style={{ width:"160px", height:"160px", padding:"2px", backgroundColor: "rgb(50,50,50)" }}>
    <Grid values={values} playingType={SIGN_X} />
</div>
```

### Playing O on empty medium board

```jsx
const { SIGN_O, SIGN_X, SIGN_NONE } = require('../../modules/types/signs.constants.js');
const values = [SIGN_NONE, SIGN_NONE, SIGN_NONE, SIGN_NONE, SIGN_NONE, SIGN_NONE, SIGN_NONE, SIGN_NONE, SIGN_NONE ];
<div style={{ width:"240px", height:"240px", padding:"10px", backgroundColor: "rgb(50,50,50)" }}>
    <Grid values={values} playingType={SIGN_O} />
</div>
```

### Playing X on board

```jsx
const { SIGN_O, SIGN_X, SIGN_NONE } = require('../../modules/types/signs.constants.js');
const values = [SIGN_X, SIGN_X, SIGN_O, SIGN_O, SIGN_NONE, SIGN_NONE, SIGN_NONE, SIGN_X, SIGN_O ];
<div style={{ width:"320px", height:"320px", padding:"10px", backgroundColor: "rgb(50,50,50)" }}>
    <Grid values={values} playingType={SIGN_X} />
</div>
```

### Playing O on board

```jsx
const { SIGN_O, SIGN_X, SIGN_NONE } = require('../../modules/types/signs.constants.js');
const values = [SIGN_NONE, SIGN_O, SIGN_X, SIGN_X, SIGN_NONE, SIGN_O, SIGN_NONE, SIGN_X, SIGN_NONE ];
<div style={{ width:"320px", height:"320px", padding:"10px", backgroundColor: "rgb(50,50,50)" }}>
    <Grid values={values} playingType={SIGN_O} />
</div>
```
