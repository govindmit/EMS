import axios from "axios";
import { BASE_URL } from '../config';

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzQ5YTZmYzk0YjZjZjY2MjlhMzBlMyIsImlhdCI6MTY2ODYwMTcxMCwiZXhwIjoxNjY4NjA1MzEwfQ.SvgOdodV6ZunU6wUunW8PQGD4t6a_dM9AEq7OjG2qNU'
export function updateProfile(user){
    return axios.put(BASE_URL + 'user/updateProfile/63748ff7c94b6cf6629a30da', {
        name : user.name,
        lastName : user.lastName,
        email : user.email,
        password : user.password,
        phone : user.phone,
        dob : user.dob,
    }, { headers: {"Authorization" : token}})
}