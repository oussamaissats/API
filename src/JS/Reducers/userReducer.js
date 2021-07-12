import {FETCH_USERS, FETCH_USERS_FAIL, FETCH_USERS_SUCCESS} from "../constants/actions-types";



const initialState= {isLoading : false , users: []}
const userReducer = (state= initialState, {type, payload}) => {
    switch (type) {
       
        case FETCH_USERS: return {
...state, 
isLoading: true

        };
        case FETCH_USERS_SUCCESS: return {
            ...state, 
            users: payload,
            isLoading: false, 
            
                    } ;     

        case FETCH_USERS_FAIL: 
        
        return {
            ...state, 
            users: payload,
            isLoading: false, 
            errors: payload,
        } ;   
    
        default:
            return state 
    }
};

export default userReducer
