'use strict';

const api = (function() {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Jamri';

  const getItems = function() {
    return fetch(`${BASE_URL}/items`);
  };

  const createItem = function(name) {
    let newItem = {
      name
    };
    let newItemJSON = JSON.stringify(newItem);
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItemJSON 
    });
  };

  return {
    getItems,
    createItem
  };

})();