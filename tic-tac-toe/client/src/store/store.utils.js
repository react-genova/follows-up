export const setRootFactory = name => state => state.get(name);

export const toJS = (obj) => {
    if (obj && typeof obj.toJS === 'function') {
        return obj.toJS();
    }
    return obj;
};
