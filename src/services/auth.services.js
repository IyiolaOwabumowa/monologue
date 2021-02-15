import { config } from "../utils/config";
import axios from "axios";
import { AsyncStorage } from "react-native";


export const authService = {
  login,
  getItem,
  saveItem,
  deleteItem
};

function login(email, password) {
  const loginDetails = {
    email: email,
    password: password
  };

  return axios
    .post("https://reqres.in/api/login", loginDetails)
    .then(res => {
      console.log(res)
      const token = res.data.token;
      const id = 1;
      
      const auth = {id, token}
      return auth;
    })
    .catch(error => {
      return Promise.reject(error);
    });
}

function getItem(itemName) {
  return AsyncStorage.getItem(itemName)
    .then(value => {
      return value;
    })
    .catch(err => {
      return err;
    });
}

function saveItem(itemName, itemValue) {
  return AsyncStorage.setItem(itemName, itemValue)
    .then(value => {
      return value;
    })
    .catch(err => {
      return err;
    });
}

function deleteItem(itemName) {
 return AsyncStorage.removeItem(itemName)
    .then(() => {
      const success = "Delete Successful"
      return success;
    })
    .catch(err => {
     
      return err;
    });
}

// function logout() {
//   deleteData("@user");
// }

// const storeData = async data => {

//     await AsyncStorage.setItem("@user", data)

// };

// const deleteData= async data => {
//   try {
//     await AsyncStorage.removeItem(data);
//   } catch (error) {
//     // Error retrieving data
//     console.log(error.message);
//   }
// };
