import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";


export const loginbaseUrl = () => {
  return 'http://3.10.80.41:9090/';
};

export const baseUrl = () => {
  return 'https://lecture247.azurewebsites.net/';
};

export const storeToken = async (selectedValue, email, tenantType, user) => {
  try {
    await AsyncStorage.setItem('token', selectedValue);
    await AsyncStorage.setItem('user_email', email);
    await AsyncStorage.setItem('tenant_type', tenantType);
    await AsyncStorage.setItem('user_detail',  JSON.stringify(user));
  } catch (error) {
    console.warn('AsyncStorage error: ' + error.message);
  }
}

export const getToken = async () => {
  let token = await AsyncStorage.getItem('token')
  return token
};
export const getEmail = async () => {
  let user_email = await AsyncStorage.getItem('user_email')
  return  user_email
};

export const getRole = async () => {
  let tenant_type = await AsyncStorage.getItem('tenant_type')
  return tenant_type
};

export const getUser = async () => {
  let user_email = await AsyncStorage.getItem('user_detail')
  return  user_email
};


export const removeToken = async (selectedValue, email) => {
  try {
    // await AsyncStorage.removeItem('token');
    // await AsyncStorage.removeItem('user_email');
    await AsyncStorage.clear();
  } catch (error) {
    console.warn('AsyncStorage remove token error: ' + error.message);
  }
}

export const makeUrlStringFromObject = (data) => {
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
   formBody = formBody.join("&");
  return formBody;
};

export const processResponse = (response) =>  {
  const statusCode = response.status;
  const data = response.json();
  return Promise.all([statusCode, data]).then(res => ({
    statusCode: res[0],
    data: res[1]
  }));
}

export const showTopNotification = (type, message)=> {
  showMessage({
    message: message,
    type: type,
    duration: 5000,
    icon: type 
  });
}


export const getHeaders = (is_guest, token) => {

  let autorised_headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Authorization': 'Bearer ' + token,
  }
  
  let normal_headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  let headers = is_guest ? normal_headers : autorised_headers

  return headers

};