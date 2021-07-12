import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchUsers} from "../../JS/Actions/actions" 
import User from '../User/User';

const UserList = () => {

    const dispatch = useDispatch();
    
const users = useSelector((state) => state.userReducer.users);
const isLoading = useSelector((state) => state.userReducer.isLoading);

useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    
    return( isLoading? 
        <h1>wait</h1>:(
    <div className="row">
            { users.map((user) => (
                
                <User user={user} key={user.id}/>
            
            ))}
            
             </div>
             ));
    
};

export default UserList
