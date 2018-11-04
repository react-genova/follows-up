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

export default makeARandomMove;
