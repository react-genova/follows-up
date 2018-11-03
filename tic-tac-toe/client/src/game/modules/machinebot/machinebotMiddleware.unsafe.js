export const makeARandomMove = (values) => {
    const availables = values.reduce((acc, { value, valid }, index) => {
        if (!valid) acc.push({ value, index });
        return acc;
    }, []);
    if (availables.length > 0) {
        const randomIndex = Math.floor(Math.random() * availables.length);
        return availables[randomIndex].index;
    }
    return -1;
};

// created this callback maker only for testing purpose.
// the more compact solution: "setTimeout(() => dispatch(action), ...)"
// is not testable at all. (so far and with jest)
export const makeCallback = (dispatch, action) => () => dispatch(action);

export const asyncDispatch = (dispatch, action) => setTimeout(makeCallback(dispatch, action), 300);
