'use strict';

const api = (function() {

  const BASE_URL = "https://thinkful-list-api.herokuapp.com/Jamri";

  const getItems = function() {
    return fetch(`${BASE_URL}/items`);
  };

  return {
    getItems,
  };

})();