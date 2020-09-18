/* Class wrapper for user rest api */
const SYSTEM = require('../util/System.js');
const SERVICE_URL = SYSTEM.SERVICE_URL;

class HTTPService {
  get(serviceMethod, callback) {
    fetch(SERVICE_URL + "/" + serviceMethod, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(data => {
      if(callback) callback(data);
    })
    .catch(error => {
      if(callback) callback(error);
    }); 
  }

  post(serviceMethod, callback, param) {
    fetch(SERVICE_URL + "/" + serviceMethod, {
      method: 'post',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(param)
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } 
    })
    .then(data => {
      if(callback) callback(data);
    })
    .catch(error => {
      if(callback) callback(error);
    });        
  }

  getWithQuery(serviceMethod, callback, query) {
    fetch(SERVICE_URL + "/" + serviceMethod + "?" +
      new URLSearchParams(query), {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(data => {
      if(callback) callback(data);
    })
    .catch(error => {
      if(callback) callback(error);
    }); 
  }

}

export default HTTPService;