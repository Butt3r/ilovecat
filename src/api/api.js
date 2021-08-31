const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";


const fetchApi = async url => {

  try {
    const response = await fetch(url);
    if(response.ok){
      return await response.json();
    }else{
      console.log(`response: ${response.statusText}`);
      throw await response.json();
    }
  } catch(e) {
      throw {
        message: e.message,
        status: e.status
      };
  }
}


const baseApi = {
  fetchCats: async keyword => {
    try {
    return await fetchApi(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
    } catch(e) {
      return {
        hasError: true,
        data: e
      };
    }
  }
};

const detailApi = {
  fetchCatsDetail: async id => {
    try {
      return await fetchApi(`${API_ENDPOINT}/api/cats/${id}`);
      } catch(e) {
        return {
          hasError: true,
          data: e
        };
      }
   // return await fetchApi(`${API_ENDPOINT}/api/cats/${id}`);
  }
};

const randApi = {
  fetchRandom: async () => {
    try {
      return await fetchApi(`${API_ENDPOINT}/api/cats/random50`);
      } catch(e) {
        return {
          hasError: true,
          data: e
        };
      }
    //return await fetchApi(`${API_ENDPOINT}/api/cats/random50`);
  }
}


export { baseApi, detailApi, randApi }