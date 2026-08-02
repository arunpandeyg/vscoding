import axios from "axios";

const URL = 'http://localhost:8080';

export const addUser =  async(data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log('error, while calling adduser api' + error);
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/all`)
    } catch (error) {
        console.log('error while retriving data from database' +error);
    }
    
}
export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log("error while retriving data from database" + error);
    }
}
export const editUser = async (user, id) => {
    try {
        return await axios.post(`${URL}/${id}`, user); //put 
    } catch (error) {
        console.log("error while retriving data from database" + error);
    }
}

export const deleteUser = async (id) => {
    try {
      return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log("error while deleting data from database" + error);
    } 
}
  