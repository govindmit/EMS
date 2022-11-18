import axios from "axios";
import { BASE_URL } from '../config';

const user = localStorage.getItem("user");
const {token, _id} = JSON.parse(user);
// let authToken = data.token;
console.log("idddddddddd",_id)
export function updateProfile(user){
    return axios.put(BASE_URL + `/user/updateProfile/${_id}`, {
        name : user.name,
        lastName : user.lastName,
        email : user.email,
        password : user.password,
        phone : user.phone,
        dob : user.dob,
    }, { headers: {"Authorization" : token}})
}