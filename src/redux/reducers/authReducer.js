const initialState = {
    user:
    JSON.parse(localStorage.getItem('user')) || null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case "REGISTER_USER":
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload,
            };
        case "LOGOUT_USER":
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};