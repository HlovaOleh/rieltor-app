import {FETCH_USERS} from './types';

export const fetchUsers = () => dispatch => {
    fetch("http://192.168.0.105:5000/services")
     .then(res => res.json())
     .then(data =>
        dispatch({
            type: FETCH_USERS,
            payload: data
        })
     )
     .catch(err=>console.log(err))
}