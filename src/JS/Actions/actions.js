import axios from "axios"
import { FETCH_USERS, FETCH_USERS_FAIL, FETCH_USERS_SUCCESS } from "../constants/actions-types";

export const fetchUsers = () => (dispatch) => {

    dispatch({

type: FETCH_USERS,
    });

axios.get(`https://jsonplaceholder.typicode.com/users`).then(res=> dispatch({
    type: FETCH_USERS_SUCCESS, 
    payload: res.data
}))
.catch(e=> dispatch({
type: FETCH_USERS_FAIL,
payload: e.response.data,
})
);


};