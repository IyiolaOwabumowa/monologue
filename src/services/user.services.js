export const userService = {
  getUser,
  getItem,
  saveItem,
  deleteItem

};

function getUser(id) {
  const user = {
    id: id,
    username: "iyiola"
  };
 
  return user;
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