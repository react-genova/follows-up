### Han Solo

```jsx
const { Fragment } = require('react');
<div style={{ backgroundColor: '#303030', width: '35em' }}>
    <PlayersSelector>
    {
        (color) => (
            <Fragment>
                <Human color={color} />
                <Versus color={color} />
                <Machine color={color} />
            </Fragment>
        )
    }
    </PlayersSelector>
</div>
```