
// created this callback maker only for testing purpose.
// the more compact solution: "setTimeout(() => dispatch(action), ...)"
// is not testable at all. (so far and with jest)
export const makeCallback = (dispatch, action) => () => dispatch(action);

export const asyncDispatch = (dispatch, action, timeout) => setTimeout(
    makeCallback(dispatch, action),
    timeout,
);
