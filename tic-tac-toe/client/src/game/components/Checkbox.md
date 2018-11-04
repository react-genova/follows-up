### Checked checkbox

```jsx
<Checkbox value text="I'm checked" onChange={() => null} />
```

### Unchecked checkbox

```jsx
<Checkbox value={false} text="I'm not checked" onChange={() => null} />
```

### Checked big checkbox

```jsx
<Checkbox value size="2em" text="I'm checked" onChange={() => null} />
```

### Interactive checkbox

```jsx
const { useState } = require('react');
const MyComp = () => {
    const [value, setValue] = useState(false);
    return <Checkbox value={value} text="I'm checkable" onChange={e => setValue(!value)} />
}
<MyComp />
```