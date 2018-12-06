export const checkConstantsConsistency = (constants) => {
    it('grants constants univocy and consistency', () => {
        Object.keys(constants).forEach((key) => {
            expect(constants[key]).toBeTruthy();
            Object.keys(constants).forEach((otherElementKey) => {
                if (otherElementKey !== key) {
                    expect(constants[key]).not.toEqual(constants[otherElementKey]);
                }
            });
        });
    });
};

export default checkConstantsConsistency;
