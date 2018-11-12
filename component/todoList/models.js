export const todos = {
    state: ["嘤嘤嘤"],
    reducers: {
        addBy(state, payload) {
            return state + payload;
        },
    },
    // effects: dispatch => ({
    //     async addByAsync(payload, state) {
    //         await delay(1000);
    //         dispatch.count.addBy(1); // count
    //     },
    // }),
};
